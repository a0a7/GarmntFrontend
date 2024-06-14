import { GITHUB_TOKEN } from '$env/static/private';
import { parse, stringify } from 'yaml';

import type { RequestHandler } from '@sveltejs/kit';
import { type Wardrobe } from '$lib';


async function getData(): Promise<Wardrobe> {
  const req = await fetch(`https://api.github.com/gists/0638af72e1abd8e9d0d3cc140043805d`);
  const gist = await req.json();
  const yamlContent = gist.files["wardrobe.yml"].content;
  return parse(yamlContent);
}
async function setData(data: any) {
  const req = await fetch(`https://api.github.com/gists/0638af72e1abd8e9d0d3cc140043805d`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      files: {
        ["wardrobe.yml"]: {
          content: stringify(data),
        },
      },
    }),
  });

  return req.json();
}

export const GET: RequestHandler = async () => {
  const data = await getData();
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const POST: RequestHandler<Partial<Record<string, string>> & Wardrobe> = async (request) => {
  const data = JSON.stringify(request);
  const response = await setData(data);
  return response;
};
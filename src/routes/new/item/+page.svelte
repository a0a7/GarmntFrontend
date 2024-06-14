<script lang="ts">
	import { onMount } from 'svelte';
    import type { Wardrobe } from '$lib';
    import { colors } from '$lib';

    import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import Label from '$lib/components/ui/label/label.svelte';
    import * as Dialog from "$lib/components/ui/dialog";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Select from "$lib/components/ui/select/index.js";

    let data: Wardrobe = {
        tops: [],
        bottoms: []
    };
    
    onMount(async () => {
        const res = await fetch('/gist');
        data = await res.json();
    });
</script>

<Label for="tops" class="text-xl font-bold font-mono ml-2 pt-16">Shirts</Label>
<ScrollArea id="tops" orientation="horizontal">
    <div class="flex flex-row">
        {#each data.tops as top}
            <div class="w-40 rounded-xl bg-gray-300 m-1 py-2 px-3">
                {#if top.isOuterwear}
                    <img src={`https://preview.bitmoji.com/bm-preview/v3/avatar/outerwear?scale=1&gender=1&style=5&${top.slug}&clothing_type=1&version=0`} alt={top.name}>
                {:else}
                    <img src={`https://preview.bitmoji.com/bm-preview/v3/avatar/top?scale=1&gender=1&style=5&${top.slug}&clothing_type=1`} alt={top.name}>
                {/if}
            </div>
        {/each}
    </div>
</ScrollArea>
<Label for="tops" class="text-xl font-bold font-mono ml-2 pt-16">Pants</Label>
<ScrollArea id="bottoms" orientation="horizontal" class="flex flex-row">
    <div class="flex flex-row">
        {#each data.bottoms as bottom}
            <div class="w-[120px] rounded-xl bg-gray-300 m-1 py-2 px-3">
                <img src={`https://preview.bitmoji.com/bm-preview/v3/avatar/bottom?scale=1&gender=1&style=5&${bottom.slug}&clothing_type=1`} alt={bottom.name}>
            </div>
        {/each}
        <Dialog.Root>
            <Dialog.Trigger>
                <svg class="w-12 mx-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Add new bottoms</Dialog.Title>
                <Dialog.Description>
                    <div class="grid grid-cols-4 items-center gap-4 mt-2">
                        <Label for="name" class="text-right">Name</Label>
                        <Input id="name" placeholder="Levi's light wash jeans" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4 mt-2">
                        <Label for="color" class="text-right">Color</Label>
                        <Select.Root portal={null}>
                            <Select.Trigger id="color" class="w-[180px]">
                              <Select.Value placeholder="Select a color" />
                            </Select.Trigger>
                            <Select.Content>
                              <Select.Group>
                                <Select.Label>Colors</Select.Label>
                                {#each colors as color}
                                  <Select.Item value={color.value} label={color.label}
                                    >{color.label}</Select.Item
                                  >
                                {/each}
                              </Select.Group>
                            </Select.Content>
                            <Select.Input name="color" />
                          </Select.Root>
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4 mt-2">
                    
                    </div>
                </Dialog.Description>
              </Dialog.Header>
            </Dialog.Content>
          </Dialog.Root>
    </div>
</ScrollArea>

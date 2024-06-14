<script lang="ts">
	import { onMount } from 'svelte';
    import type { Wardrobe } from '$lib';

    let data: Wardrobe = {
        tops: [],
        bottoms: []
    };
    
    onMount(async () => {
    });
</script>

<div class="grid grid-cols-10">
    {#each data.tops as top}
        {#each data.bottoms as bottom}
            {#if !top?.colorExclusions || !top?.colorExclusions.includes(bottom?.color)}
                <div class="w-48 inline">
                    <img src={`https://preview.bitmoji.com/bm-preview/v3/avatar/body?scale=4&gender=1&style=5&rotation=0&beard=-1&beard_tone=1579802&body=0&${bottom.slug}&breast=0&brow=1557&brow_tone=3615014&cheek_details=-1&clothing_type=1&ear=1428&eye=1615&eyelash=-1&eye_details=1348&eye_size=1&eye_spacing=0&face_lines=-1&face_proportion=7&footwear=745&footwear_tone1=16448250&footwear_tone10=12099414&footwear_tone2=14675183&footwear_tone3=2434085&footwear_tone4=2434085&footwear_tone5=16448250&footwear_tone6=16448250&footwear_tone7=16448250&footwear_tone8=9467971&footwear_tone9=2434085&glasses=-1&hair=1323&hair_tone=12688481&hat=-1&is_tucked=0&jaw=1398&mouth=2337&nose=1455&pupil=2152&pupil_tone=4611439&skin_tone=16691590&sock=1036&sock_tone1=15986923&sock_tone2=16751642&sock_tone3=15986923&sock_tone4=15986923&${top?.isOuterwear ? "top=61&top_tone1=16052461&top_tone10=9993074&top_tone2=16052461&top_tone3=16052461&top_tone4=16052461&top_tone5=16448250&top_tone6=13873283&top_tone7=16448250&top_tone8=14010558&top_tone9=8548203" : ""}&${top.slug}&version=0`} alt={`${bottom.name} with ${top.name}`}>
                </div>
            {/if}
        {/each}
    {/each}
</div>
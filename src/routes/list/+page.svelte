<script lang="ts">
    import mix_and_match_items from '$lib/mix_and_match_items.json';
    console.log(mix_and_match_items);
</script>

<div class="grid grid-cols-4 w-1/3">
    {#if mix_and_match_items?.male}
    {#each mix_and_match_items.male.categories[0].garments as garment}
        <div>
            <img src={`https://preview.bitmoji.com/bm-preview/v3/avatar/top?scale=1&gender=1&style=5&top=${garment.id}&top_tone1=16052461&top_tone10=9993074&top_tone2=16052461&top_tone3=16052461&top_tone4=16052461&top_tone5=16448250&top_tone6=13873283&top_tone7=16448250&top_tone8=14010558&top_tone9=8548203&clothing_type=1`} alt="clothingItem">
        </div>
    {/each}
    {/if}
</div>

{#if 1!==1}
    {#if mix_and_match_items?.male}
    {#each mix_and_match_items.male.categories[0].garments as garment}
        <div>
            <img src={`https://preview.bitmoji.com/bm-preview/v3/avatar/top?scale=1&gender=1&style=5&top=${garment.id}&top_tone1=16052461&top_tone10=9993074&top_tone2=16052461&top_tone3=16052461&top_tone4=16052461&top_tone5=16448250&top_tone6=13873283&top_tone7=16448250&top_tone8=14010558&top_tone9=8548203&clothing_type=1`} alt="clothingItem">
        </div>
    {/each}
    {#each mix_and_match_items.male.categories[3].garments as garment}
        <div>
            <img src={`https://preview.bitmoji.com/bm-preview/v3/avatar/outerwear?scale=0.5&gender=1&style=5&outerwear=${garment.id}&outerwear_tone1=16448250&outerwear_tone10=10253397&outerwear_tone2=16448250&outerwear_tone3=16448250&outerwear_tone4=16448250&outerwear_tone5=14145495&outerwear_tone6=15508871&outerwear_tone7=15066597&outerwear_tone8=15066597&outerwear_tone9=5057046&clothing_type=1&version=0`} alt="clothingItem">
        </div>
    {/each}
    {#each mix_and_match_items.male.categories[1].garments as garment}
        <div>
            <img src={`https://preview.bitmoji.com/bm-preview/v3/avatar/bottom?scale=1&gender=1&style=5&bottom=${garment.id}&bottom_tone1=13882585&bottom_tone10=7038058&bottom_tone2=11053747&bottom_tone3=8159117&bottom_tone4=5593186&bottom_tone5=16711422&bottom_tone6=6645110&bottom_tone7=15330028&bottom_tone8=8159650&bottom_tone9=6570032&clothing_type=1`} alt="clothingItem">
        </div>
    {/each}
    {#each mix_and_match_items.male.categories[2].garments as garment}
        <div>
            <img src={`https://preview.bitmoji.com/bm-preview/v3/avatar/footwear?scale=0.5&gender=1&style=5&footwear=${garment.id}&footwear_tone1=754008&footwear_tone10=8740667&footwear_tone2=618316&footwear_tone3=618316&footwear_tone4=754008&footwear_tone5=16316412&footwear_tone6=12434363&footwear_tone7=16316412&footwear_tone8=4242321&footwear_tone9=479287&clothing_type=1&version=1`} alt="clothingItem">
        </div>
    {/each}
    {/if}

{/if}
<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import Worktable from "$lib/components/worktable.svelte";
    import { headerColor } from "../store";

    export let data;
    $: works = data.works;
    $: categories = data.categories;

    function worksInCategory(category: string) {
        return works.filter((work: any) => work.category === category);
    }

    headerColor.set("#fff6e5");
</script>

<Header backMotif="kyoto">
    <h1>Works</h1>
</Header>

<main id="worksMain">
    {#each categories as category}
        <h2>{category}</h2>
        <Worktable works={worksInCategory(category)} />
    {/each}
</main>

<style>
    #worksMain {
        @apply max-w-4xl;
    }
</style>

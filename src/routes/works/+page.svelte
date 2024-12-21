<script lang="ts">
    import Footer from "$lib/components/footer.svelte";
    import Header from "$lib/components/header.svelte";
    import type { Work } from "$lib/components/workcard.svelte";
    import Worktable from "$lib/components/worktable.svelte";
    export let data;
    let works: Work[] = [];
    let categories: string[] = [];
    $: if (data && data.works) {
        works = data.works;
        categories = Array.from(
            new Set(works.map((work: any) => work.category)),
        );
    } else {
        works = [];
        categories = [];
    }

    function worksInCategory(category: string) {
        return works.filter((work: any) => work.category === category);
    }
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

<Footer />

<style>
    #worksMain {
        @apply max-w-4xl;
    }
</style>

<script lang="ts">
    import type { Work } from "$lib/components/workcard.svelte";
    import Worktable from "$lib/components/worktable.svelte";
    import { onMount } from "svelte";

    let works: Work[] = [];
    let categories: string[] = [];

    onMount(async () => {
        const res = await fetch("/works/works.json");
        works = await res.json().then((data) => data.works);
        categories = Array.from(new Set(works.map((work) => work.category)));
    });
</script>

<main id="worksMain">
    <h1>Works</h1>
    {#each categories as category}
        <h2>{category}</h2>
        <Worktable works={works.filter((work) => work.category === category)} />
    {/each}
</main>

<style>
    #worksMain {
        max-width: 60em;
    }
</style>

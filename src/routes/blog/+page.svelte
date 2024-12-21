<script lang="ts">
    import Articlecard from "$lib/components/articles/articlecard.svelte";
    import Footer from "$lib/components/footer.svelte";
    import Header from "$lib/components/header.svelte";
    import type { Article } from "$lib/model.js";
    export let data;
    let oldArticles: Article[] = [];
    $: if (data) {
        oldArticles = data.oldArticles.sort((a: Article, b: Article) => {
            return new Date(b.created_at) < new Date(a.created_at) ? -1 : 1;
        });
    }
</script>

<Header backMotif="hakodate">
    <h1>Blog</h1>
</Header>

<main id="worksMain">
    {#each oldArticles as article}
        <Articlecard {article} />
    {/each}
</main>

<Footer />

<style>
    #worksMain {
        @apply max-w-4xl;
    }
</style>

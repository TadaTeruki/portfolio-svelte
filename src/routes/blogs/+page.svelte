<script lang="ts">
    import Articlecard from "$lib/components/articles/articlecard.svelte";
    import Footer from "$lib/components/footer.svelte";
    import Header from "$lib/components/header.svelte";
    import type { Article } from "$lib/model.js";
    export let data;
    let articles: Article[] = [];
    $: if (data) {
        articles = data.articles
            .sort((a: Article, b: Article) => {
                return new Date(b.created_at) < new Date(a.created_at) ? -1 : 1;
            })
            .map((article: Article) => {
                return {
                    ...article,
                };
            });
    }
</script>

<Header backMotif="hakodate">
    <h1>Peruki's Blog</h1>
    <div class="text-sm text-gray-500">技術と生活</div>
</Header>

<main id="worksMain">
    {#each articles as article}
        <Articlecard {article} />
    {/each}
</main>

<Footer />

<style>
    #worksMain {
        @apply max-w-4xl;
    }
</style>

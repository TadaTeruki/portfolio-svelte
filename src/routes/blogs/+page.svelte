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

<svelte:head>
    <title>Peruki's Blog</title>
    <meta name="description" content="Peruki's Blog" />
    <meta property="og:title" content="Peruki's Blog" />
    <meta property="og:description" content="技術と生活" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://peruki.dev/blogs" />
    <meta property="og:image" content="/icon.jpeg" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@PerukiFUN" />
    <meta name="twitter:creator" content="@PerukiFUN" />
    <meta name="twitter:image" content="/icon.jpeg" />
    <meta name="twitter:title" content="Peruki's Blog" />
    <meta name="twitter:description" content="技術と生活" />
    <meta name="twitter:url" content="https://peruki.dev/blogs" />
    <meta name="twitter:domain" content="peruki.dev" />
</svelte:head>

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

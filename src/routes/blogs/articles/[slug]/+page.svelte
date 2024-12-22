<script lang="ts">
    import Footer from "$lib/components/footer.svelte";
    import Header from "$lib/components/header.svelte";
    import H1 from "$lib/markdown-renderers/H1.svelte";
    import H2 from "$lib/markdown-renderers/H2.svelte";
    import H3 from "$lib/markdown-renderers/H3.svelte";
    import type { Article } from "$lib/model";
    import Markdown, { type Plugin } from "svelte-exmarkdown";
    import { gfmPlugin } from "svelte-exmarkdown/gfm";

    export let data;
    let article: Article;
    $: if (data) {
        article = data.article;
    }

    const plugins: Plugin[] = [
        gfmPlugin(),
        {
            renderer: {
                h1: H1,
                h2: H2,
                h3: H3,
            },
        },
    ];
</script>

<Header backMotif={article.thumbnail}>
    <div
        class="w-fit m-auto bg-white bg-opacity-70 backdrop-blur-md shadow-sm rounded-lg px-16 py-12"
    >
        <div class="text-sm text-gray-700">Peruki's Blog</div>
        <h1>{article.title}</h1>
        <div class="text-sm text-gray-500">{article.description}</div>
        <div class="text-sm text-gray-500">
            <div>
                記事作成日: {new Date(
                    article.created_at,
                ).getFullYear()}年{new Date(article.created_at).getMonth() +
                    1}月{new Date(article.created_at).getDate()}日
            </div>
        </div>
        {#if article.tags.length > 0}
            <div class="mt-2">
                {#each article.tags as tag}
                    <span class="mr-2 text-xs bg-gray-200 px-2 py-0.5 rounded">
                        #{tag}
                    </span>
                {/each}
            </div>
        {/if}
    </div>
</Header>

<main>
    {#if article.attributions.includes("old")}
        <div class="text-sm bg-gray-200 p-2 m-2 rounded-md">
            注:
            この記事は旧ブログシステムからの移行であり、読みにくい箇所がある場合があります。
        </div>
    {/if}

    <Markdown md={article.body} {plugins} />
</main>
<div class="h-20"></div>

<Footer />

<style>
    :global(p img) {
        @apply max-w-3xl rounded-md mt-4;
    }

    :global(p a) {
        @apply underline text-cyan-800;
    }
</style>

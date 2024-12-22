<script lang="ts">
    import Footer from "$lib/components/footer.svelte";
    import Header from "$lib/components/header.svelte";
    import A from "$lib/markdown-renderers/A.svelte";
    import H1 from "$lib/markdown-renderers/H1.svelte";
    import H2 from "$lib/markdown-renderers/H2.svelte";
    import H3 from "$lib/markdown-renderers/H3.svelte";
    import Img from "$lib/markdown-renderers/IMG.svelte";
    import Imgold from "$lib/markdown-renderers/IMGOLD.svelte";
    import P from "$lib/markdown-renderers/P.svelte";
    import type { Article } from "$lib/model";
    import rehypeRaw from "rehype-raw";
    import Markdown, { type Plugin } from "svelte-exmarkdown";
    import { gfmPlugin } from "svelte-exmarkdown/gfm";

    export let data;
    let article: Article;
    $: if (data) {
        article = data.article;
    }

    $: plugins = [
        gfmPlugin(),
        { rehypePlugin: rehypeRaw },
        {
            renderer: {
                h1: H1,
                h2: H2,
                h3: H3,
                img: article.attributions.includes("old") ? Imgold : Img,
                a: A,
                p: P,
            },
        },
    ] as Plugin[];
</script>

<svelte:head>
    <title>Peruki's Blog - {article.title}</title>
    <meta name="description" content={article.description} />
    <meta property="og:title" content={article.title} />

    {#if article.thumbnail}
        <meta property="og:image" content={article.thumbnail} />
    {/if}
</svelte:head>

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
    <div class="w-full flex justify-center mt-10">
        <a
            href="/blogs"
            class="bg-gray-200 px-4 py-2 m-auto rounded-md hover:bg-gray-300 duration-500"
        >
            リストへ戻る
        </a>
    </div>
</main>
<div class="h-20"></div>

<Footer />

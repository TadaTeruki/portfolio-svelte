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
    <h1>Peruki's Blog</h1>
    <div class="text-sm text-gray-500">技術と生活</div>
</Header>

<main>
    <div class="py-20 mb-10 border-b border-gray-200">
        <h1>{article.title}</h1>
        <div class="text-sm text-gray-500">{article.description}</div>
        <div class="text-sm text-gray-500">
            <div>
                記事作成日: {new Date(
                    article.created_at,
                ).getFullYear()}年{new Date(article.created_at).getMonth() +
                    1}月{new Date(article.created_at).getDate()}日
            </div>
            <div>
                最終更新日: {new Date(
                    article.updated_at,
                ).getFullYear()}年{new Date(article.updated_at).getMonth() +
                    1}月{new Date(article.updated_at).getDate()}日
            </div>
        </div>
    </div>
    <Markdown md={article.body} {plugins} />
</main>
<div class="h-20"></div>

<Footer />

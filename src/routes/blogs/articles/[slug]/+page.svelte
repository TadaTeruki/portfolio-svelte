<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import type { Article } from "$lib/model";
    import { marked } from "marked";
    import { onMount } from "svelte";

    export let data;
    let article: Article;
    $: if (data) {
        article = data.article;
        loadMarkdown(article.body);
    }

    let html: string = "";
    async function loadMarkdown(markdown: string) {
        const markedResult = marked(markdown);
        if (markedResult instanceof Promise) {
            html = await markedResult;
        } else {
            html = markedResult;
        }
    }

    let markdownElement: HTMLElement | null = null;
    onMount(() => {
        markdownElement = document.getElementById("markdown");
    });

    $: if (markdownElement) {
        markdownElement.innerHTML = html;
    }
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
    <div id="markdown"></div>
</main>

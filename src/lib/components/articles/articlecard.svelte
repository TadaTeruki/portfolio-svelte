<script lang="ts">
    import type { Article } from "$lib/model";

    export let article: Article;

    $: year = new Date(article.created_at).getFullYear();
    $: month = new Date(article.created_at).getMonth() + 1;
    $: day = new Date(article.created_at).getDate();
</script>

<a
    class="flex my-2 bg-transparent border-b border-gray-200 transition-colors duration-300 ease-in-out hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 overflow-hidden h-25"
    href={`/blogs/articles/${article.id}`}
>
    {#if article.thumbnail.endsWith(".webp") || article.thumbnail.startsWith("http")}
        <img
            src={article.thumbnail}
            alt={article.title}
            class="min-w-40 w-40 h-30 object-cover rounded-sm shadow-sm"
        />
    {/if}
    <div class="flex flex-col justify-center ml-4 leading-none">
        <div class="text-md">
            {article.title}
        </div>
        <div class="text-sm text-gray-500 dark:text-gray-400">
            {article.description}
        </div>
        <div class="text-sm text-gray-500 dark:text-gray-400">
            記事作成日: {year}年{month}月{day}日
        </div>
        <div class="flex gap-2 text-xs mt-0.5">
            {#each article.tags as tag}
                <div
                    class="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-sm px-2 py-0.25 whitespace-nowrap"
                >
                    #{tag}
                </div>
            {/each}
        </div>
    </div>
</a>

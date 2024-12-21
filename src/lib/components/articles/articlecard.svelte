<script lang="ts" context="module">
    export class Article {
        id: string = "";
        title: string = "";
        thumbnail: string = "";
        subtitle: string = "";
        tags: string[] = [];
        is_public: boolean = false;
        body: string = "";
        created_at: string = "";
        updated_at: string = "";
    }
</script>

<script lang="ts">
    export let article: Article;
</script>

<a
    class="flex bg-transparent border-b border-gray-200 p-4 hover:bg-gray-100 transition-colors duration-300 ease-in-out"
    target="_blank"
    href={`/articles/${article.id}`}
>
    <img
        src={`/images/works/${article.thumbnail}`}
        alt={article.title}
        class="w-30 h-30 object-cover"
    />
    <div class="flex flex-col justify-center ml-4">
        <div class="text-2xl">{article.title}</div>
        <div class="text-lg text-gray-500">{article.subtitle}</div>
    </div>
</a>

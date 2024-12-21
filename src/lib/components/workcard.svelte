<!--card component-->

<script lang="ts" context="module">
    export class Work {
        name: string = "";
        description: string = "";
        urls: { tag: string; url: string }[] = [];
        category: string = "";
        technologies: string[] = [];
        thumbnail: string = "";
        personal: boolean = false;
    }
</script>

<script lang="ts">
    export let work: Work;
</script>

<a href={work.urls[0].url} target="_blank" class="cardlink">
    <div class="card">
        <img src={`/images/works/${work.thumbnail}`} alt={work.name} />
        <div class="text">
            <div class="title">{work.name}</div>
            <div class="description">{work.description}</div>
            <div class="links">
                {#each work.urls as url}
                    <a class="globallink" href={url.url} target="_blank"
                        >{url.tag}</a
                    >
                    {#if url !== work.urls[work.urls.length - 1]}
                        |
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</a>

<style>
    .card {
        @apply border border-gray-300 bg-white rounded-lg p-2 m-2 w-60 h-80 flex flex-col transition-colors duration-200;
    }

    .card:hover {
        @apply bg-gray-100 border-gray-400;
    }

    .text {
        @apply flex-1 p-2 text-sm flex flex-col;
    }

    img {
        @apply w-full h-80 overflow-hidden aspect-w-8 aspect-h-5 rounded-md object-cover;
    }

    .links {
        @apply flex gap-2;
    }

    .title {
        @apply text-xl;
    }

    a.cardlink {
        @apply no-underline;
    }
</style>

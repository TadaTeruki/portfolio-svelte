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

<div
    class="flex bg-transparent border-b border-gray-200 p-4 hover:bg-gray-100 transition-colors duration-300 ease-in-out"
>
    <img
        src={`/images/works/${work.thumbnail}`}
        alt={work.name}
        class="w-30 h-30 object-cover"
    />
    <div class="flex flex-col justify-center ml-4">
        <div class="text-2xl">{work.name}</div>
        <div class="text-lg text-gray-500">{work.description}</div>
        <div class="flex gap-2">
            {#each work.urls as url}
                <a
                    class="text-linkColor hover:text-linkColorHover"
                    href={url.url}
                    target="_blank">{url.tag}</a
                >
            {/each}
        </div>
    </div>
</div>

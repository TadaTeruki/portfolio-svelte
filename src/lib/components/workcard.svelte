<script lang="ts">
    import type { Work } from "$lib/model";

    export let work: Work;
</script>

<a
    class="flex bg-transparent border-b border-gray-200 p-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out dark:border-gray-700 dark:hover:bg-gray-700"
    target="_blank"
    href={work.urls[0].url}
>
    <img
        src={`/images/works/${work.thumbnail}`}
        alt={work.name}
        class="w-30 h-30 object-cover"
    />
    <div class="flex flex-col justify-center ml-4">
        <div class="text-lg">{work.name}</div>
        <div class="text-sm text-gray-500 dark:text-gray-200">
            {work.description}
        </div>
        <div class="flex gap-2">
            {#each work.urls as url}
                <a
                    class="text-linkColor hover:text-linkColorHover dark:text-linkColorDark dark:hover:text-linkColorDarkHover"
                    href={url.url}
                    target="_blank">{url.tag}</a
                >
            {/each}
        </div>
    </div>
</a>

<script lang="ts">
    import type { Work } from "$lib/model";

    export let work: Work;
</script>

<a
    class="flex bg-transparent border-b border-gray-200 p-0 hover:bg-gray-100 transition-colors duration-300 ease-in-out dark:border-gray-700 dark:hover:bg-gray-700 overflow-hidden h-25"
    target="_blank"
    href={work.urls[0].url}
>
    <img
        src={`/images/works/${work.thumbnail}`}
        alt={work.name}
        class="min-w-40 w-40 object-cover rounded-sm shadow-sm"
    />
    <div class="flex flex-col justify-center ml-4 p-2 leading-none">
        <div class="text-md">{work.name}
        <span class="text-xs text-gray-500 dark:text-gray-200">
            {work.description}
        </span>
        </div>
        <div class="flex gap-2">
            {#each work.urls as url}
                <a
                    class="text-sm text-linkColor hover:text-linkColorHover dark:text-linkColorDark dark:hover:text-linkColorDarkHover"
                    href={url.url}
                    target="_blank">{url.tag}</a
                >
            {/each}
        </div>
    </div>
</a>

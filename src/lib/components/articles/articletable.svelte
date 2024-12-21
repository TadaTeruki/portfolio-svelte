<script lang="ts">
    import type { Article } from "$lib/model";
    import Articlecard from "./articlecard.svelte";

    export let articles: Article[] = [];
</script>

<div class="content">
    {#each articles as article}
        <Articlecard {article} />
    {/each}
</div>

<style>
    .content {
        @apply flex flex-col gap-2;
    }
</style>

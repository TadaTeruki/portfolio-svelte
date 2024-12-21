<script lang="ts">
    import Articlecard from "./articlecard.svelte";
    import type { Article } from "./articlecard.svelte";

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

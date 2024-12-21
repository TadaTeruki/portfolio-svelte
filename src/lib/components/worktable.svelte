<script lang="ts">
    import type { Work } from "$lib/components/workcard.svelte";
    import Workcard from "$lib/components/workcard.svelte";

    export let works: Work[] = [];
</script>

<div class="content">
    {#each works as work}
        <Workcard {work} />
    {/each}
</div>

<style>
    .content {
        @apply flex flex-col gap-2;
    }
</style>

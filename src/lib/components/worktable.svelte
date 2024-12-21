<script lang="ts">
    import Workcard from "$lib/components/workcard.svelte";
    import type { Work } from "$lib/model";

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

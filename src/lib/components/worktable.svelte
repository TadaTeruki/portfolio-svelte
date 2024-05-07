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
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
    }

    @media (max-width: 50em) {
        .content {
            justify-content: center;
        }
    }
</style>

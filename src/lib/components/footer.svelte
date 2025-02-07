<script>
    import Navigation from "./navigation.svelte";
    export let hasFootMargin = true;
    export let hasHome = true;
</script>

{#if hasFootMargin}
    <footer class="shared pb-15 text-gray-500 dark:text-gray-300">
        <Navigation {hasHome} />
        Copyright © 2025 Teruki TADA
    </footer>
{:else}
    <footer class="shared pb-5 text-gray-500 dark:text-gray-300">
        <Navigation {hasHome} />
        Copyright © 2025 Teruki TADA
    </footer>
{/if}

<style>
    .shared {
        @apply text-sm text-center m-auto w-fit;
    }
</style>

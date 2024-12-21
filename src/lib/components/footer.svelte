<script>
    import Navigation from "./navigation.svelte";
    export let hasFootMargin = true;
    export let hasHome = true;
</script>

{#if hasFootMargin}
    <footer class="shared pb-15">
        <Navigation {hasHome} />
        Copyright © 2024 Teruki TADA
    </footer>
{:else}
    <footer class="shared pb-5">
        <Navigation {hasHome} />
        Copyright © 2024 Teruki TADA
    </footer>
{/if}

<style>
    .shared {
        @apply text-gray-500 text-sm text-center m-auto w-fit;
    }
</style>

<script lang="ts">
    import "virtual:uno.css";
    import "@unocss/reset/tailwind-compat.css";
    import { onMount } from "svelte";
    import { updateDarkMode } from "$lib/dark";

    onMount(() => {
        updateDarkMode();
    });
</script>

<slot />

<style>
    :global(body) {
        @apply font-sans bg-white;
    }
    
    :global(body.dark) {
        @apply bg-gray-900 text-gray-100;
    }

    :global(main) {
        @apply px-4 py-12 m-auto max-w-3xl text-gray-700;
    }

    :global(.dark main) {
        @apply text-white;
    }

    :global(.content) {
        @apply p-4;
    }

    :global(h1) {
        @apply text-2xl font-normal;
    }

    :global(h2) {
        @apply text-xl font-normal my-2;
    }

    :global(h3) {
        @apply text-lg font-normal my-2;
    }

    :global(.content ul) {
        @apply list-disc pl-8;
    }
</style>

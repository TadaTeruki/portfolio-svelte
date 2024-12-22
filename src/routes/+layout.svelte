<script lang="ts">
    import "virtual:uno.css";
    import "@unocss/reset/tailwind-compat.css";
</script>

<slot />

<style>
    :global(body) {
        @apply font-sans;
    }

    :global(main) {
        @apply px-4 py-12 m-auto max-w-3xl text-gray-700;
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

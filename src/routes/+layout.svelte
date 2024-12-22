<script lang="ts">
    import "virtual:uno.css";
    import "@unocss/reset/tailwind-compat.css";
</script>

<svelte:head>
    <title>Teruki TADA</title>
    <meta name="description" content="Teruki TADA" />
    <link rel="icon" href="/icon.jpeg" />
    <meta property="og:title" content="Teruki TADA" />
    <meta property="og:description" content="Teruki TADA's Webpage" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://peruki.dev" />
    <meta property="og:image" content="/icon.jpeg" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@PerukiFUN" />
    <meta name="twitter:creator" content="@PerukiFUN" />
    <meta name="twitter:image" content="/icon.jpeg" />
    <meta name="twitter:title" content="Teruki TADA" />
    <meta name="twitter:description" content="Teruki TADA's Webpage" />
    <meta name="twitter:url" content="https://peruki.dev" />
    <meta name="twitter:domain" content="peruki.dev" />
</svelte:head>

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

<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import Navigation from "$lib/components/navigation.svelte";
    import "virtual:uno.css";
    import "@unocss/reset/tailwind-compat.css";
</script>

<svelte:head>
    <title>Teruki TADA</title>
    <meta name="description" content="Teruki TADA's Webpage" />
    <link rel="icon" href="/icon.jpeg" />
    <meta property="og:title" content="Teruki TADA's Webpage" />
    <meta property="og:description" content="Teruki TADA's Webpage" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://hello.peruki.dev" />
    <meta property="og:image" content="/icon.jpeg" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@PerukiFUN" />
    <meta name="twitter:creator" content="@PerukiFUN" />
    <meta name="twitter:image" content="/icon.jpeg" />
    <meta name="twitter:title" content="Teruki TADA's Webpage" />
    <meta name="twitter:description" content="Teruki TADA's Webpage" />
    <meta name="twitter:url" content="https://hello.peruki.dev" />
    <meta name="twitter:domain" content="hello.peruki.dev" />
</svelte:head>

<Header />

<div class="mainbox">
    <slot />
</div>

<footer>
    <div class="footerElements">
        <Navigation hasHome={true} />
        Copyright © 2024 Teruki TADA
    </div>
</footer>

<style>
    :global(body) {
        @apply font-sans;
    }

    :global(main) {
        @apply p-4 m-auto max-w-4xl text-gray-700;
    }

    :global(.content) {
        @apply p-4;
    }

    :global(h1) {
        @apply text-2xl font-normal my-12;
    }

    :global(h2, h3, h4, h5, h6) {
        @apply text-xl font-normal my-2;
    }

    :global(.content ul) {
        @apply list-disc;
    }

    footer {
        @apply p-4 text-gray-500 text-sm text-center;
    }

    .footerElements {
        @apply flex flex-col gap-2;
    }

    :global(a.globallink) {
        /* text-decoration: none;
        color: #477; */
        @apply text-linkColor no-underline;
    }

    :global(a.globallink:hover) {
        /* color: #6aa; */
        @apply text-linkColorHover;
    }
</style>

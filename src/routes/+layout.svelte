<script lang="ts">
    import Navigation from "$lib/components/navigation.svelte";
    import Header from "../lib/components/header.svelte";
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

<header>
    <Header />
</header>

<div class="mainbox">
    <slot />
</div>

<footer>
    <div class="footerElements">
        <Navigation />
        Copyright © 2024 Teruki TADA
    </div>
</footer>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@500&display=swap");

    :global(body) {
        font-family: "Zen Kaku Gothic New", sans-serif;
        margin: 0;
        scroll-behavior: smooth;
    }

    .mainbox {
        margin: 0 1em;
    }

    :global(main) {
        padding-top: 3em;
        margin: 0 auto;
        max-width: 52em;
        color: #222;
    }

    :global(.content) {
        padding-left: 1em;
        line-height: 1.5;
    }

    :global(h1) {
        margin: 2em 0 0.5em 0;
        font-weight: normal;
        line-height: 0.9;
    }

    :global(h2, h3, h4, h5, h6) {
        margin: 1.5em 0 0.5em 0.1em;
        font-weight: normal;
    }

    :global(.content ul) {
        list-style-type: square;
    }

    footer {
        color: #888;
        padding-top: 10vh;
        padding-bottom: 5vh;
        font-size: 0.8em;

        display: flex;
        justify-content: center;
    }

    .footerElements {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    :global(a.globallink) {
        text-decoration: none;
        color: #477;
    }

    :global(a.globallink:hover) {
        color: #6aa;
    }
</style>

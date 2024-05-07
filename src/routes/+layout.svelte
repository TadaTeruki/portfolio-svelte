<script lang="ts">
    import Navigation from "$lib/components/navigation.svelte";
import Header from "../lib/components/header.svelte";
</script>

<header>
    <Header />
</header>

<slot />

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
    }

    :global(main) {
        padding-top: 3em;
        margin: 0 auto;
        max-width: 50em;
        color: #222;
    }

    :global(h1, h2, h3, h4, h5, h6) {
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
</style>

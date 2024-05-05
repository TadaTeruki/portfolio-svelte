<script lang="ts">
    import Header from "../components/header.svelte";
</script>

<header>
    <Header />
</header>

<main>
    <slot></slot>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap");

    :global(body) {
        font-family: "Zen Kaku Gothic New", sans-serif;
        margin: 0;
    }

    :global(main) {
        padding-top: 4em;
        margin: 0 auto;
        max-width: 80em;
    }
</style>

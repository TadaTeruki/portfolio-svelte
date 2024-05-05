<script lang="ts">
    import Header from "../components/header.svelte";
</script>

<header>
    <Header />
</header>

<main>
    <div class="content">
        <slot></slot>
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@500&display=swap");

    :global(body) {
        font-family: "Zen Kaku Gothic New", sans-serif;
        margin: 0;
    }

    :global(main) {
        padding-top: 4em;
        margin: 0 auto;
        max-width: 50em;
        color: #222;
    }

    .content {
        padding-left: 2em;
    }
</style>

<script>
    import Navigation from "./navigation.svelte";
</script>

<div class="main">
    <div class="title">
        <a href="/">Teruki TADA</a>
    </div>

    <Navigation />
</div>

<style>
    .main {
        background-color: #f8f8f8;
        border-bottom: 1px solid #eee;
        color: #555;
        padding: 0.5em 1em;
        font-size: 1em;
        display: flex;
        gap: 2em;
        white-space: nowrap;
        box-shadow: 0 0 3em #f0f0f0;
    }

    a {
        text-decoration: none;
        color: #555;
    }

    a:hover {
        color: #888;
    }
</style>

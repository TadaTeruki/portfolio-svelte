<script lang="ts">
    import { onMount } from "svelte";
    import { headerColor } from "../../routes/store";

    import Navigation from "./navigation.svelte";

    let container: HTMLElement | null = null;
    onMount(() => {
        container = document.getElementById("container");
    });

    $: if (container !== null) {
        container.style.boxShadow = `0 0 2em ${$headerColor}`;
    }
</script>

<div class="container" id="container">
    <div class="title">
        <a href="/">Teruki TADA</a>
    </div>

    <Navigation />
</div>

<style>
    .container {
        background-color: #f3f8f8;
        border-bottom: 1px solid #eee;
        color: #555;
        padding: 0.5em 1em;
        font-size: 1em;
        display: flex;
        gap: 2em;
        white-space: nowrap;
        transition: box-shadow 0.5s;
    }

    a {
        text-decoration: none;
        color: #555;
    }

    a:hover {
        color: #888;
    }
</style>

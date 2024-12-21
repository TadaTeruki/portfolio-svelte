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
    <a href="/">Teruki TADA</a>

    <Navigation hasHome={false} />
</div>

<style>
    .container {
        @apply q-screen bg-white border-b border-gray-200 text-gray-700 px-4 py-2 text-lg flex gap-8 whitespace-nowrap transition-shadow duration-500 ease-in-out;
    }
</style>

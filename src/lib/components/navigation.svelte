<script lang="ts">
    export let hasHome: boolean = true;
</script>

<div class="container">
    {#if hasHome}
        <a href="/">Home</a> |
    {/if}
    <a href="/profile">Profile</a> |
    <a href="/works">Works</a> |
    <a href="/skills">Skills</a> |
    <a href="/map">Map</a> |
    <a href="/contact">Contact</a> |
    <a href="https://github.com/TadaTeruki" target="_blank" class="underline"
        >GitHub</a
    >
</div>

<style>
    .container {
        @apply flex gap-2 justify-center items-center w-fit;
    }

    a {
        @apply text-gray-700;
    }

    a:hover {
        @apply text-gray-500;
    }
</style>

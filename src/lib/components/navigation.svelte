<script lang="ts">
    export let hasHome: boolean = true;
</script>

<div
    class="flex gap-2 justify-center items-center w-fit flex-wrap text-gray-700 dark:text-gray-100"
>
    {#if hasHome}
        <a href="/">Home</a>
    {/if}
    <a href="/profile">Profile</a>
    <a href="/works">Works</a>
    <a href="/map">Map</a>
    <a href="/contact">Contact</a>
    <a href="/blogs">Blog</a>
</div>

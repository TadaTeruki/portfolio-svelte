<script>
    import Navigation from "./navigation.svelte";
    export let hasFootMargin = true;
    export let hasHome = true;
</script>

<footer
    class={"text-gray-500 text-sm text-center m-auto w-fit" +
        (hasFootMargin ? " pb-15" : "")}
>
    <Navigation {hasHome} />
    Copyright © 2024 Teruki TADA
</footer>

<script>
    import { onMount } from "svelte";

    let props = { ...$$props };

    let origin = "";
    onMount(() => {
        origin = window.location.origin;
    });
    let renderable = false;
    $: {
        if (origin && props.src && !props.src.startsWith("http")) {
            props.src = `${origin}/${props.src}`;
            renderable = true;
        } else {
            renderable = props.src.startsWith("http");
        }
    }
</script>

<div class="max-w-3xl mt-4">
    {#if renderable}
        <img {...props} class="rounded-md" alt={props.alt} />
    {/if}
    <div class="text-md text-gray-500 dark:text-gray-300">{props.alt}</div>
</div>

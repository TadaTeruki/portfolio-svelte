<script lang="ts">
    import Topnavigator from "./topnavigator.svelte";

    const presetMotifs = [
        "hakodate",
        "kyoto",
        "asahikawa",
        "esan",
        "fun",
        "otaru",
    ];

    export let backMotif: string;
    let backImage: string;
    $: {
        if (presetMotifs.includes(backMotif)) {
            backImage = `/images-large/${backMotif}.webp`;
        } else {
            backImage = backMotif;
        }
    }

    export let fullscreen: boolean = false;
</script>

<div
    class={"boxbg shadow-sm text-center relative overflow-hidden bg-white bg-opacity-30 shadow-inner" +
        (fullscreen ? " h-screen" : "")}
>
    <img
        src={backImage}
        alt="back"
        class="absolute top-0 left-0 -z-10 object-cover w-full h-full dark:brightness-70 dark:contrast-150"
    />

    <Topnavigator />

    <div class="py-15">
        <slot />
    </div>
</div>

<style>
    .boxbg {
        --color-grid: rgba(0, 55, 55, 0.05);

        background-image: linear-gradient(
                var(--color-grid) 1px,
                transparent 0px
            ),
            linear-gradient(to right, var(--color-grid) 1px, transparent 0px);
        background-size: 1.2em 1.55em;
        background-position: center;
    }
</style>

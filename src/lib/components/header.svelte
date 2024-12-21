<script lang="ts">
    import Topnavigator from "./topnavigator.svelte";

    export let backMotif: 'hakodate' | 'kyoto' | 'asahikawa' | 'esan' | 'fun' | 'otaru'; 
    let backImage: string;
    let backPrevImage: string;
    $: {
        backImage = `/images-large/${backMotif}.webp`;
    }

</script>

<div class="boxbg shadow-sm text-center relative overflow-hidden bg-white bg-opacity-70 shadow-inner">
    <img src={backImage} alt="back" class="absolute top-0 left-0 -z-10 object-cover w-full h-full animate-fade-in" />

    <Topnavigator />

    <div class="py-15">
        <slot />
    </div>
</div>

<style>

    .boxbg {
        --color-grid: rgba(0, 55, 55, 0.05);
        
        background-image: 
            linear-gradient(var(--color-grid) 1px, transparent 0px),
            linear-gradient(to right, var(--color-grid) 1px, transparent 0px);
        background-size: 1.2em 1.55em;
        background-position: center;
    }

    @keyframes fade-in {
        0% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }

    .animate-fade-in {
        animation: fade-in 0.25s ease-in-out;
    }

</style>
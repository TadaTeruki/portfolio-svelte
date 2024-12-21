<script lang="ts">
    import Footer from "$lib/components/footer.svelte";
    import Header from "$lib/components/header.svelte";
    import Titlebox from "../lib/components/titlebox.svelte";
</script>

<div class="absolute top-0 left-0 w-screen h-screen overflow-hidden">
    <Header backMotif="esan" fullscreen={true}></Header>
</div>

<div
    class="absolute bottom-0 left-0 w-screen h-screen overflow-hidden pointer-events-none"
>
    <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="h-fit">
            <div
                class="bg-white bg-opacity-50 backdrop-blur-md shadow-sm rounded-lg px-8 py-2 m-2 w-fit h-max z-20 pointer-events-auto"
            >
                <Titlebox />
                <Footer hasFootMargin={false} hasHome={false} />
            </div>
        </div>
    </div>
</div>

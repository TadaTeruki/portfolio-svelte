<script lang="ts">
    import Footer from "$lib/components/footer.svelte";
    import Header from "$lib/components/header.svelte";
    import Titlebox from "../lib/components/titlebox.svelte";
</script>

<svelte:head>
    <title>Teruki TADA</title>
    <meta name="description" content="Teruki TADA" />
    <link rel="icon" href="/icon.png" />
    <meta property="og:title" content="Teruki TADA" />
    <meta property="og:description" content="Teruki TADA's Webpage" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://peruki.dev" />
    <meta property="og:image" content="/icon.png" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@PerukiFUN" />
    <meta name="twitter:creator" content="@PerukiFUN" />
    <meta name="twitter:image" content="/icon.png" />
    <meta name="twitter:title" content="Teruki TADA" />
    <meta name="twitter:description" content="Teruki TADA's Webpage" />
    <meta name="twitter:url" content="https://peruki.dev" />
    <meta name="twitter:domain" content="peruki.dev" />
</svelte:head>

<div class="absolute top-0 left-0 w-screen h-screen overflow-hidden">
    <Header backMotif="esan" fullscreen={true}></Header>
</div>

<div
    class="absolute bottom-0 left-0 w-screen h-screen overflow-hidden pointer-events-none"
>
    <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="h-fit">
            <div
                class="bg-white bg-opacity-30 backdrop-blur-md shadow-sm rounded-lg px-8 py-2 m-2 w-fit h-max z-20 pointer-events-auto"
            >
                <Titlebox />
                <Footer hasFootMargin={false} hasHome={false} />
            </div>
        </div>
    </div>
</div>

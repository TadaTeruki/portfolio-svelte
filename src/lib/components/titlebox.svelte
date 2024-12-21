<script>
    import Logo from "./logo.svelte";
</script>

<div class="flex justify-between p-4 w-fit m-auto md:flex-row flex-col">
    <div class="flex flex-col justify-center">
        <div class="text-xl mr-2 whitespace-nowrap text-center">
            Teruki TADA
        </div>
        <div class="text-sm text-gray-500 whitespace-nowrap text-center">
            多田 瑛貴 / ただ てるき
        </div>
        <div class="h-3"></div>
        <div class="flex justify-center gap-2">
            <a
                class="linkBox"
                target="_blank"
                href="https://github.com/TadaTeruki"
            >
                <Logo template="github" />
            </a>
            <a class="linkBox" target="_blank" href="https://x.com/perukifun">
                <Logo template="x" />
            </a>
            <a
                class="linkBox"
                target="_blank"
                href="https://slides2.peruki.dev"
            >
                <Logo template="slide" />
            </a>
        </div>
    </div>
    <div class="w-4"></div>
    <div class="flex justify-center m-4">
        <img
            src="icon.jpeg"
            alt="icon"
            class="w-30 h-30 rounded-full min-w-30 min-h-30"
        />
    </div>
</div>

<style>
    .linkBox {
        @apply flex justify-center items-center gap-2 bg-white p-2 rounded-lg bg-opacity-50 transition-colors duration-300 ease-in-out;
    }

    .linkBox:hover {
        @apply bg-opacity-100;
    }
</style>

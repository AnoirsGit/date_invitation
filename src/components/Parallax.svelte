<script>
    import { onMount } from "svelte";
    import Parallax from "parallax-js";
    let scene;

    onMount(() => {
        let parallaxInstance = new Parallax(scene);
    });

    console.log(scene);
</script>

<div id="scene" bind:this={scene}>
    <div class="layer" data-depth="0.05">
        <img src="parallax/sunset.webp" alt="sunset" />
    </div>
    <div class="layer" data-depth="0.5">
        <img
            src="parallax/birds.svg"
            style="height: 10rem; width:auto"
            alt="layer2"
        />
    </div>
    <div class="layer" data-depth="0.1">
        <img src="parallax/layer_0.png" alt="clouds" />
    </div>
    <div class="layer" data-depth="0.2">
        <img src="parallax/layer_1.webp" alt="layer1" />
    </div>
    <div class="layer" data-depth="0.4">
        <img src="parallax/layer_2.webp" alt="layer2" />
    </div>
    <div class="layer" data-depth="0.7">
        <img src="parallax/layer_3.webp" alt="layer2" />
    </div>
</div>

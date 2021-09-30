<script lang="ts">
	import Parallax from "./components/Parallax.svelte";
	import LeafFall from "./components/LeafFall.svelte"
</script>

<main>
	<div class="animation_area bg-brown">
		<div class="parallax_container">
			<Parallax />
		</div>
		<div class="absolute top-screen w-screen">
			<LeafFall />
		</div>
	</div>
</main>

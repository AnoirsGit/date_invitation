<script lang="ts">
	import { fly } from "svelte/transition";
	import Parallax from "./components/Parallax.svelte";
	import MainInfo from "./components/MainInfo.svelte";
	import Header from "./components/Header.svelte";
	import Container from "./components/Container.svelte";
	import FirstContent from "./components/pages/FirstContent.svelte";
	import SecondContent from "./components/pages/SecondContent.svelte";
	import ThirdContent from "./components/pages/ThirdContent.svelte";

  let body = document.body;
  let y;
  let w = window.innerWidth;
  body.addEventListener("scroll", () => (y = body.scrollTop));
</script>

<svelte:window bind:scrollY={y} />
<main>
  <div class="header">
    <div class="z-0 parallax_container">
      <Header />
      <Parallax />
    </div>
  </div>
  <MainInfo>
    <Container>
      {#if (w > 1024 && y > 300) || (w < 1024 && y < 1200)}
        <div
          class="w-full h-max p-6"
          in:fly={{ x: 900, duration: 3000 }}
          out:fly={{ x: 900, duration: 3000 }}
        >
          <FirstContent />
        </div>
      {/if}
    </Container>
  </MainInfo>

  <Container classes="h-112 lg:h-screen">
    {#if (w > 1024 && y > 1600) || (w < 1024 && y > 1300)}
      <div
        class="w-full h-max p-6"
        in:fly={{ x: 900, duration: 3000 }}
        out:fly={{ x: 900, duration: 3000 }}
      >
        <SecondContent />
      </div>
    {/if}
  </Container>

  <Container>
    <ThirdContent />
  </Container>
</main>
<!-- <div class="powr-form-builder" id="4c87761e_1627404231"></div><script src="https://www.powr.io/powr.js?platform=shopify"></script> -->

<script>
  import Header from "@components/Header.svelte";
  import Footer from "@components/Footer.svelte";
  import Email from "@components/Email.svelte";
  import Home from "@components/Home.svelte";
  import About from "@components/About.svelte";
  import Skills from "@components/Skills.svelte";
  import Experiences from "@components/Experiences.svelte";
  import Projects from "@components/Projects.svelte";


  import { onMount } from "svelte";

  onMount(async () => {
    const gsapModule = await import("gsap");
    const ScrollToPluginModule = await import("gsap/ScrollToPlugin");

    const gsap = gsapModule.default;
    const ScrollToPlugin = ScrollToPluginModule.default;

    gsap.registerPlugin(ScrollToPlugin);

    const container = document.querySelector(".scrollable-content");

    let scrollPos = 0;
    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      scrollPos += e.deltaY * 0.5;
      scrollPos = Math.max(0, Math.min(scrollPos, container.scrollHeight - container.clientHeight));

      gsap.to(container, { 
        scrollTo: { y: scrollPos }, 
        duration: 1,
        ease: "power3.out"
      });
    }, { passive: false });
  });
</script>

<div class="relative h-screen w-full overflow-hidden">

  <Email />
  <Header />
  <div class="absolute z-[2] inset-0 h-screen w-full cursor-default active:[.cursor-default] scrollable-content scroll-smooth">
    <Home />
    <About />
  </div>

  <div class="fixed z-[1] h-screen w-full grid-lines"></div>
  <div class="fixed z-[1] h-screen w-full overlay-circular "></div>

</div>

<style>

  .grid-lines {
    background: 
      linear-gradient(to right, rgba(255,255,255,0.125) 1px, transparent 1px) center / 3.5rem 3.5rem,
      linear-gradient(to bottom, rgba(255,255,255,0.125) 1px, transparent 1px) center / 3.5rem 3.5rem,
      black;
  }

  .overlay-circular {
    background-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 1%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }

</style>
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


<div class="h-screen w-screen cursor-default">
</div>

<style>

</style>
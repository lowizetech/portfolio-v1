<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  onMount(() => {
    const marquee = document.querySelector(".marquee");
    const firstChildWidth = marquee.children[0].offsetWidth;

    gsap.to(marquee, {
      x: -firstChildWidth,
      duration: 5,
      ease: "linear",
      repeat: -1
    });
  });
</script>

<section id="about" class="h-screen w-full flex items-center justify-center text-white select-none overflow-hidden flex-col gap-3">
    <div class="marquee w-full whitespace-nowrap flex">
      <h1 class="bg-zinc-800 font-anton text-[4.5rem] inline-block px-10 tracking-[2px]">
        STAY TUNED. I WILL BE SHOWING UPDATES SOON!
      </h1>
      <h1 class="bg-zinc-800 text-blue-600 font-anton text-[4.5rem] inline-block px-10 tracking-[2px]">
        STAY TUNED. I WILL BE SHOWING UPDATES SOON!
      </h1>
    </div>
</section>

<style>
.marquee {
  display: flex;
}
</style>

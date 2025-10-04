<script>
	import { onMount } from "svelte";
  import { gsap } from "gsap";
	import Logo from "/images/lowizetech-logo.webp";
	import {
		TextAlignJustify,
		ArrowUpRight,
		Github,
		Facebook,
		Instagram,
		Twitter,
		Linkedin, X
	} from "lucide-svelte";

  onMount(() => {
    gsap.fromTo(
      ".slide-top",
      { y: 0, opacity: 0 }, // start above and invisible
      { y: 90, opacity: 1, duration: 0., ease: "power2.out", stagger: 0.1 }
    );
  });

	let navOpen = false;

	const pages = [
    { name: "Home", color: "bg-blue-600", href: "#home" },
    { name: "About", color: "bg-red-600", href: "#about" },
    { name: "Skills", color: "bg-yellow-600", href: "#skills" },
    { name: "Experience", color: "bg-green-600", href: "#experiences" },
    { name: "Projects", color: "bg-indigo-600", href: "#projects" },
  ];

  const socials = [
    { name: "Github", icon: Github, color: "#2CB44C", href: "https://www.github.com/lowizetech/" },
    { name: "Facebook", icon: Facebook, color: "#395693", href: "https://www.facebook.com/lowizetechh/" },
    { name: "Instagram", icon: Instagram, color: "#CF2872", href: "https://www.instagram.com/lowizetech/" },
    { name: "X/Twitter", icon: Twitter, color: "#52A7E7", href: "https://www.x.com/lowizetech/" },
    { name: "LinkedIn", icon: Linkedin, color: "#0573B0", href: "https://www.linkedin.com/in/lowizetech/" },
	];

</script>

<header id="header" class="fixed z-[3] w-full py-6 px-8 sm:px-20 text-white flex justify-between cursor-default">
	<a
		href="https://github.com/lowizetech"
		target="_blank"
		rel="noreferrer noopener"
		title="github account"
		class="relative cursor-pointer active:scale-[0.9] duration-[350ms] ease will-change-transform group slide-top top-[-90px]"
	>
		<span class="absolute inset-0 -z-10 opacity-0 blur-xl bg-blue-600 rounded-lg transition duration-[350ms] ease-in-out group-hover:opacity-100"></span>
		<img src={Logo} alt="Lowizetech" width="40">
	</a>

	<button
	  aria-label="open navigator"
	  on:click={() => (navOpen = !navOpen)}
	  class="relative cursor-pointer active:scale-[0.85] duration-[350ms] ease will-change-transform group slide-top top-[-90px]"
	>
		<!-- Glow background -->
		<span class="absolute inset-0 -z-10 opacity-0 blur-xl bg-blue-600 rounded-lg transition duration-[350ms] ease-in-out group-hover:opacity-100"></span>

		<TextAlignJustify size={30} class="text-white" />
	</button>

</header>



{#if navOpen}
	<button
		on:click={() => (navOpen = !navOpen)}
		aria-label="overlay-navigator"
		class="fixed z-[4] inset-0 h-screen w-full bg-[rgba(0,0,0,0.4)] cursor-default"></button>
{/if}

<nav class={`select-none absolute z-[5] right-0 h-screen bg-neutral-900 cursor-default duration-[350ms] ease sm:px-12 px-8 py-[130px] text-white flex gap-10 justify-center items-start ${navOpen ? "translate-x-0" : "translate-x-full"}`}>
		<button
			aria-label="close navigator"
			on:click={() => (navOpen = !navOpen)}
			class="fixed right-[50px] top-[40px] cursor-pointer active:scale-[0.85] duration-[350ms] ease will-change-transform group"
		>
				<span class="absolute inset-0 -z-10 opacity-0 blur-xl bg-blue-600 rounded-lg transition duration-[350ms] ease-in-out group-hover:opacity-100"></span>
				<X size={30} class="" />
		</button>
		
		<div class="space-y-6">
			<p class="font-light text-neutral-400">PAGES</p>
			{#each pages as page}
				<a
          on:click={() => (isNavOpen = !isNavOpen)}
          href={page.href}
          title={page.name}
          rel="noreferrer noopener"
          class="flex items-center gap-2 group cursor-pointer"
         >
          <span class="relative flex items-center justify-center w-6 h-6">
            <span 
              class="absolute rounded-full {page.color} transition-all duration-200 w-2.5 h-2.5 group-hover:w-6 group-hover:h-6 z-0">
            </span>
            <ArrowUpRight 
              class="opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-white z-10" 
              size={16} 
            />
          </span>
          <span>{page.name}</span>
      	</a>
			{/each}
		</div>
		<div class="space-y-6">
			<p class="font-light text-neutral-400">SOCIALS</p>
			{#each socials as social}
				<a
          on:click={() => (isNavOpen = !isNavOpen)}
          href={social.href}
          title={social.name}
          rel="noreferrer noopener"
          class="flex gap-3 cursor-pointer hoverable ease duration-[350ms]"
          style={`--hover-color: ${social.color};`}
         >

        	<svelte:component this={social.icon} />
          <span class="w-full text-center">{social.name}</span>
      	</a>
			{/each}
		</div>
		<a
			href="https://drive.google.com/uc?export=download&id=1Z0JzrevAviD1PkOWoB8_Sl5hxOOfIVc8"
			title="download resume"
			rel="noreferrer noopener"
			target="_blank"
			class="fixed sm:bottom-[20px] bottom-[90px] left-[50px] underline underline-offset-[3px] cursor-pointer text-neutral-400 hover:text-white ease duration-[350ms]"
		>Download Resume?</a>
</nav>

<style lang="postcss">
	.hoverable:hover {
    color: var(--hover-color);
  }
</style>
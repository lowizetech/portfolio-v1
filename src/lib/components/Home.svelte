<script>
	import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { SplitText } from "gsap/SplitText";

  gsap.registerPlugin(SplitText);

  onMount(() => {
    gsap.fromTo(
      "#slideDiv",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".slide-item",
      { x: 100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.5, 
        ease: "power2.out", 
        stagger: 0.2
      }
    );

    gsap.fromTo(
    	".goUp",
    	{ y: 30, opacity: 0},
    	{ y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    function splitTextAnimation() {
    	let splitter = new SplitText(".split", {type: "chars"});
	    let chars = splitter.chars;

	    gsap.from(chars, {
	    	yPercent: 100,
	    	duration: 0.7,
	    	stagger: 0.05,
	    	ease: "back.out"
	    });
    }

    document.fonts.ready.then(splitTextAnimation);

  });
	const subtitle = [
	    { title: "2", description: "Companies Served"},
	    { title: "2+", description: "Completed Projects"},
	    { title: "20+", description: "Number of Tools Used"}
	];


</script>

<section id="home" class="h-screen w-full flex flex-col gap-[100px] text-white justify-center sm:px-16 md:px-[140px]">
	<div class="px-4 space-y-6 md:space-y-9 mt-16 sm:mt-0">
		<h1 id="slideDiv" class="break-all font-anton text-[4rem] md:text-[5rem] flex flex-col leading-[1]">
			<span class="text-white">TECHNICAL</span>
			<span class="ml-7 text-blue-600">ASSOCIATE</span>
		</h1>
		<p class="goUp break-words  md:text-[1.05rem] font-bold w-fit  md:w-[500px] text-neutral-400">I am Louise, A skilled Technical Associate and a Software Developer helping organizations reach heights.</p>
		<a
	    href="https://mail.google.com/mail/?view=cm&fs=1&to=lowize.tech@gmail.com&su=PORTFOLIO%20REVIEW&body=Hello%20Louise%20Czedrian%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out.%20I%20was%20interested%20in%20learning%20more%20about%20your%20skills%20and%20experience%2C%20and%20I%20thought%20this%20would%20be%20a%20good%20opportunity%20to%20connect.%0A%0ARegards%2C%0A%5BYour%20Name%5D"
	    title="hire me"
	    rel="noreferrer noopener"
	    target="_blank"
	    class="relative select-none cursor-pointer bg-blue-600 px-6 py-2 inline-block font-anton tracking-widest text-[1.2rem] overflow-hidden group"
		>
	    <span class="split relative z-10 group-hover:text-blue-600 ease duration-[350ms]">HIRE ME</span>
	    <span class="absolute inset-0 bg-white scale-y-0 origin-bottom transition-transform duration-[350ms] ease-in-out group-hover:scale-y-100"></span>
		</a>


	</div>
	<div class="flex text-center justify-evenly px-2 md:absolute md:flex-col md:text-right bottom-[70px] right-[50px] gap-3 md:gap-7">
		{#each subtitle as sub}
			<div class="slide-item">
				<h3 class="font-anton text-blue-600 text-[2rem]">{sub.title}</h3>
				<p class="text-[0.9rem] font-extrabold text-neutral-400 break-words">{sub.description}</p>
			</div>
		{/each}
	</div>
</section>
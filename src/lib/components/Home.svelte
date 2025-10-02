<script>
	const subtitle = [
	    { title: "2", description: "Organizations Served"},
	    { title: "2+", description: "Completed Projects"},
	    { title: "20+", description: "Number of Tools Used"}
	];
</script>

<section id="home" class="h-screen w-full flex flex-col gap-[100px] text-white justify-center sm:px-16 md:px-[90px]">
	<div class="px-4 space-y-6 md:space-y-7 mt-16 sm:mt-0">
		<h1 class="font-anton text-[4rem] md:text-[5rem] flex flex-col leading-[1]">
			<span class="text-white">TECHNICAL</span>
			<span class="ml-6 text-blue-600">ASSOCIATE</span>
		</h1>
		<p class="md:w-[450px] lg:w-[600px] text-[1rem] md:text-[1.15rem]">Hello, I am <a href="#about" title="name">Louise</a><sup>&#8599;</sup> a skilled Technical Associate  and Administrative Assistant to help organizational operations run efficiently.</p>
		<a
	    href="https://mail.google.com/mail/?view=cm&fs=1&to=lowize.tech@gmail.com&su=PORTFOLIO%20REVIEW&body=Hello%20Louise%20Czedrian%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out.%20I%20was%20interested%20in%20learning%20more%20about%20your%20skills%20and%20experience%2C%20and%20I%20thought%20this%20would%20be%20a%20good%20opportunity%20to%20connect.%0A%0ARegards%2C%0A%5BYour%20Name%5D"
	    title="hire me"
	    rel="noreferrer noopener"
	    target="_blank"
	    class="relative select-none cursor-pointer bg-blue-600 px-6 py-2 inline-block font-anton tracking-widest text-[1.2rem] overflow-hidden group"
		>
	    <span class="relative z-10 group-hover:text-blue-600 ease duration-[350ms]">HIRE ME</span>
	    <span class="absolute inset-0 bg-white scale-y-0 origin-bottom transition-transform duration-[350ms] ease-in-out group-hover:scale-y-100"></span>
		</a>


	</div>
	<div class="flex text-center justify-evenly px-2 md:absolute md:flex-col md:text-right bottom-[70px] right-[50px] gap-6">
		{#each subtitle as sub}
			<div>
				<h3 class="font-anton text-blue-600 text-[2rem]">{sub.title}</h3>
				<p>{sub.description}</p>
			</div>
		{/each}
	</div>
</section>
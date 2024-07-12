export default function Hero() {
  return (
    <header class="flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
      <section class="z-10">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a href="/alumni" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200" role="alert">
            <span class="text-xs bg-red-700 rounded-full text-white px-4 py-1.5 mr-3">Welcome!</span> <span class="text-sm font-medium">Check out our member placements!</span>
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Cornell's premier investing club</h1>
          <p class="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48">
            Founded in 2007, Cornell Alpha Fund Club is one of the longest-running student-led finance clubs on campus. Designed for the dual purpose of education and network expansion, Cornell Alpha Fund Club was founded on the principles of partnership, teamwork, and curiosity.
          </p>
          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#about" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-2 focus:ring-gray-200">
              Learn more
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </section>
      {/*<section class="bg-white">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3">
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-6xl md:text-4xl font-extrabold">100+</dt>
              <dd class="font-light text-gray-500">pitches</dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-6xl md:text-4xl font-extrabold">60+</dt>
              <dd class="font-light text-gray-500">members</dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-6xl md:text-4xl font-extrabold">$10 trillion</dt>
              <dd class="font-light text-gray-500">assets under management</dd>
            </div>
          </dl>
        </div>
      </section>*/}
      {/*<video
        autoplay loop muted playsinline
        class="absolute h-screen w-screen"
      >
        <source
          src="nycvid.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>*/}
    </header>
  )
}
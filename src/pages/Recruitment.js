
const Recruitment = () => (
  <div className="p-24">
    <h2 class="text-6xl font-bold mb-12 text-center">Recruitment Information</h2>
    <p className="mb-12 text-xl text-center">
      Interested in applying to Alpha Fund? We recommend that you book a few coffee chats with our members and attend recruitment events.
    </p>

    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
        <svg class="mr-2 -ml-1 mt-0.5 w-5 h-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899zM1.124 4l1.516 6.825A1.5 1.5 0 0 0 4.104 12h5.792a1.5 1.5 0 0 0 1.464-1.175L12.877 4H1.123Z" />
        </svg>
        Book a coffee chat
      </a>
      <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 bg-red-700 text-white hover:bg-red-800 focus:ring-4 focus:ring-gray-100">
        <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
        </svg>
        Apply for Alpha Fund
      </a>
    </div>
    <h2 className="text-4xl font-bold mb-12 text-center">Recruitment Event Timeline</h2>
    <div className="px-48">
      <ol class="relative border-s border-red-700">
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -start-1.5 border border-white"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400">February 2022</time>
          <h3 class="text-lg font-semibold text-gray-900">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-gray-500">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
          <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">Register here <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg></a>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -start-1.5 border border-white"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400">March 2022</time>
          <h3 class="text-lg font-semibold text-gray-900">Marketing UI design in Figma</h3>
          <p class="text-base font-normal text-gray-500">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
        </li>
        <li class="ms-4">
          <div class="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -start-1.5 border border-white"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400">April 2022</time>
          <h3 class="text-lg font-semibold text-gray-900">E-Commerce UI code in Tailwind CSS</h3>
          <p class="text-base font-normal text-gray-500">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
        </li>
      </ol>
    </div>
  </div>
)

export default Recruitment


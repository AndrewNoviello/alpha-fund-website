const Footer = () => (
  <footer class="p-4 bg-white md:p-8 lg:p-10">
    <div class="mx-auto max-w-screen-xl text-center">
      <a href="/" className="flex justify-center items-center">
        <img src="text_logo.png" className="h-9" alt="Cornell Alpha Fund" />
      </a>
      <p class="my-6 text-gray-500">Alpha Fund is a registered student organization of Cornell University.</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900">
        <li>
          <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
          <a href="/team" class="mr-4 hover:underline md:mr-6">Team</a>
        </li>
        <li>
          <a href="/alumni" class="mr-4 hover:underline md:mr-6 ">Alumni</a>
        </li>
        <li>
          <a href="/recruitment" class="mr-4 hover:underline md:mr-6">Recruitment</a>
        </li>
        <li>
          <a href="/recruitment" class="mr-4 hover:underline md:mr-6">Apply</a>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center">©  {(new Date().getFullYear())} Cornell Alpha Fund. All Rights Reserved.</span>
    </div>
  </footer>
)

export default Footer
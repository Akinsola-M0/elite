
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">"The more that you read, the more things you will know. The more that you learn, the more places you'll go."</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">dr seuss</p>
            
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
        </div>                
    </div>
 </section>

<section>
    <h4 className="my-6 text-gray-900 text-4xl p-4">Top Books</h4>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10">


  <div class="rounded overflow-hidden shadow-lg flex flex-col">
    <div class="relative">
            <img class="w-full"
                src="/hide.jpeg"
                alt="Sunset in the mountains"/>
            <div
                class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
            </div>
        
    </div>

    <div class="px-6 py-4 mb-auto">
        <p class="text-gray-500 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
    </div>

    <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            
            <span class="ml-1">6 mins ago</span>
        </span>

        <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <svg class="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                </path>
            </svg>
            <span class="ml-1">39 Comments</span>
        </span>

    </div>

</div>
</div>

  </section>
    </main>
  );
}

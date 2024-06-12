export default function Loading() {
  return (
    <main className="size-full h-screen">
      <div className="sm:h-full min-h-full w-full bg-black flex flex-col lg:flex-row px-8 lg:px-32 py-16 lg:py-32">
        <div className="lg:flex-1 2xl:pl-96">
          <div className="w-1/2 h-24 bg-gray-300 rounded-full mb-8 animate-bounce"></div>
          <div className="pt-4 sm:pt-16">
          <div className="w-1/2 h-12 bg-gray-300 rounded-full mb-8 animate-bounce"></div>
          </div>
          <div className="w-1/4 h-24 bg-gray-300 rounded-full mb-8 animate-bounce"></div>
        </div>
        <div className="lg:flex-1 h-full py-8 lg:py-0">
          <div className="space-y-4 lg:space-y-10">
            <div className="flex flex-col gap-4">
            <div className="w-1/2 h-16 bg-gray-300 rounded-full mb-8 animate-pulse"></div>
            <div className="w-1/2 h-8 bg-gray-300 rounded-full mb-8 animate-pulse"></div>
         
            </div>
            <div className="flex flex-col gap-4">
            <div className="w-1/2 h-16 bg-gray-300 rounded-full mb-8 animate-pulse"></div>
            <div className="w-1/2 h-8 bg-gray-300 rounded-full mb-8 animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-4">
            <div className="w-1/2 h-16 bg-gray-300 rounded-full mb-8 animate-pulse"></div>
            <div className="w-1/2 h-8 bg-gray-300 rounded-full mb-8 animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-4">
            <div className="w-1/2 h-16 bg-gray-300 rounded-full mb-8 animate-pulse"></div>
            <div className="w-1/2 h-16 bg-gray-300 rounded-full mb-8 animate-pulse"></div>
            </div>
            <div className="pt-2">
            <div className="w-1/4 h-16 bg-gray-300 rounded-full mb-8 animate-pulse"></div>
            </div>
          </div>
         
        </div>
      </div>
     



    
    </main>
  );
}


/*
  <div className="h-full w-full bg-black flex pt-96">
        <div className="flex-1 pl-96">
          <div className="w-1/2 h-24 bg-gray-300 rounded-full mb-8 animate-bounce"></div>
          <div className="w-1/2 h-24 bg-gray-300 rounded-full mb-8 animate-bounce"></div>
          <div className="w-1/2 h-24 bg-gray-300 rounded-full mb-8 animate-pulse"></div>
        </div>
        <div className="flex-1">
          <form className=" space-y-10">
            <div className="flex flex-col">
              <div className="w-1/3 h-12 bg-gray-300 rounded-2xl mb-4 animate-pulse"></div>
              <div className="w-1/4 h-10 bg-gray-500 rounded-2xl animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <div className="w-1/3 h-12 bg-gray-300 rounded-2xl mb-4 animate-pulse"></div>
              <div className="w-1/4 h-10 bg-gray-500 rounded-2xl animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <div className="w-1/3 h-12 bg-gray-300 rounded-2xl mb-4 animate-pulse"></div>
              <div className="w-1/4 h-10 bg-gray-500 rounded-2xl animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <div className="w-1/3 h-12 bg-gray-300 rounded-2xl mb-4 animate-pulse"></div>
              <div className="w-1/4 h-10 bg-gray-500 rounded-2xl animate-pulse"></div>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-16 right-24 text-red-500">
        <span>Los Angeles |</span>
      </div>*/
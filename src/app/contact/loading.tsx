export default function Loading() {
  return (
    <main className="size-full h-screen">
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
      </div>
    </main>
  );
}

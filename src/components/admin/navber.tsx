import Link from "next/link";

export default function Navber() {
  return (
    <header className="flex h-14 items-center gap-4 border-b-[3px] border-black bg-white px-6">
      <Link href="#" className="lg:hidden">
        <span className="font-black text-lg uppercase text-black">Admin Panel</span>
      </Link>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <input
              type="search"
              placeholder="SEARCH..."
              className="w-full appearance-none bg-white pl-8 pr-4 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-[3px] border-black focus:outline-none focus:ring-0 md:w-2/3 lg:w-1/3 rounded-none uppercase placeholder-gray-500 text-black"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-4">
        <button className="h-8 w-8 bg-[#3b82f6] text-white flex items-center justify-center font-black text-sm border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          A
        </button>
      </div>
    </header>
  );
}

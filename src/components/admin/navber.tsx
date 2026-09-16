import Link from "next/link";

export default function Navber() {
  return (
    <header className="flex h-[72px] items-center gap-4 border-b border-slate-200 bg-white px-6 md:px-8">
      <Link href="#" className="lg:hidden">
        <span className="text-lg font-semibold uppercase text-slate-800">Admin Panel</span>
      </Link>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <input
              type="search"
              placeholder="SEARCH..."
              className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-8 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ef476f] text-sm font-bold text-white">
          A
        </button>
      </div>
    </header>
  );
}

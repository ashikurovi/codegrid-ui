import Link from "next/link";

export default function Navber() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <Link href="#" className="lg:hidden">
        <span className="font-semibold text-lg">Admin Panel</span>
      </Link>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full appearance-none bg-white pl-8 pr-4 py-2 text-sm shadow-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 md:w-2/3 lg:w-1/3 dark:bg-gray-950 dark:border-gray-800 dark:focus:ring-gray-700"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-4">
        <button className="h-8 w-8 bg-blue-500 text-white flex items-center justify-center font-semibold text-sm">
          A
        </button>
      </div>
    </header>
  );
}

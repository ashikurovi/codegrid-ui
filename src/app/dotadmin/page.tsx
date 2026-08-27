export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-medium tracking-tight text-gray-500 dark:text-gray-400">Total Revenue</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-gray-500 dark:text-gray-400"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p>
        </div>
        
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-medium tracking-tight text-gray-500 dark:text-gray-400">Subscriptions</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-gray-500 dark:text-gray-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">+180.1% from last month</p>
        </div>
        
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-medium tracking-tight text-gray-500 dark:text-gray-400">Sales</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-gray-500 dark:text-gray-400"><rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path></svg>
          </div>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">+19% from last month</p>
        </div>
        
        <div className="border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-medium tracking-tight text-gray-500 dark:text-gray-400">Active Now</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-gray-500 dark:text-gray-400"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
          </div>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">+201 since last hour</p>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="border bg-white p-6 shadow-sm col-span-4 dark:bg-gray-950 dark:border-gray-800">
          <h3 className="text-lg font-medium leading-none tracking-tight mb-4">Overview</h3>
          <div className="h-[300px] flex items-center justify-center text-gray-500 text-sm">
            [Chart Placeholder]
          </div>
        </div>
        
        <div className="border bg-white p-6 shadow-sm col-span-3 dark:bg-gray-950 dark:border-gray-800">
          <h3 className="text-lg font-medium leading-none tracking-tight mb-1">Recent Sales</h3>
          <p className="text-sm text-gray-500 mb-6 dark:text-gray-400">You made 265 sales this month.</p>
          
          <div className="space-y-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center">
                <div className="w-9 h-9 bg-gray-100 flex items-center justify-center dark:bg-gray-800">
                  <span className="text-sm font-medium">U{i}</span>
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">User {i}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">user{i}@example.com</p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

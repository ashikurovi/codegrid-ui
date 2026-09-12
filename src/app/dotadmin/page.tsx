export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-black">Dashboard</h1>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-black uppercase tracking-tight text-black">Total Revenue</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="h-5 w-5 text-black"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <div className="text-3xl font-black text-[#3b82f6] mt-2">$45,231.89</div>
          <p className="text-xs font-bold text-gray-600 uppercase mt-1">+20.1% from last month</p>
        </div>
        
        <div className="border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-black uppercase tracking-tight text-black">Subscriptions</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="h-5 w-5 text-black"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div className="text-3xl font-black text-[#3b82f6] mt-2">+2350</div>
          <p className="text-xs font-bold text-gray-600 uppercase mt-1">+180.1% from last month</p>
        </div>
        
        <div className="border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-black uppercase tracking-tight text-black">Sales</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="h-5 w-5 text-black"><rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path></svg>
          </div>
          <div className="text-3xl font-black text-[#3b82f6] mt-2">+12,234</div>
          <p className="text-xs font-bold text-gray-600 uppercase mt-1">+19% from last month</p>
        </div>
        
        <div className="border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-black uppercase tracking-tight text-black">Active Now</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="h-5 w-5 text-black"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
          </div>
          <div className="text-3xl font-black text-[#3b82f6] mt-2">+573</div>
          <p className="text-xs font-bold text-gray-600 uppercase mt-1">+201 since last hour</p>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] col-span-4 rounded-none">
          <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-black border-b-4 border-black w-max pb-2">Overview</h3>
          <div className="h-[300px] flex items-center justify-center text-gray-500 text-sm font-bold border-4 border-dashed border-gray-300">
            [Chart Placeholder]
          </div>
        </div>
        
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] col-span-3 rounded-none">
          <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-black">Recent Sales</h3>
          <p className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest border-b-4 border-black pb-4">You made 265 sales this month.</p>
          
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center">
                <div className="w-10 h-10 border-[3px] border-black bg-[#3b82f6] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white">
                  <span className="text-sm font-black">U{i}</span>
                </div>
                <div className="ml-4 space-y-0.5">
                  <p className="text-sm font-black uppercase text-black leading-none">User {i}</p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">user{i}@example.com</p>
                </div>
                <div className="ml-auto font-black text-[#3b82f6]">+$1,999.00</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

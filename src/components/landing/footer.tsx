import React from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const shopLinks = [
    { name: "Big Sale", href: "/main/big-sale" },
    { name: "Budget Pick", href: "/main/budget-pick" },
    { name: "New Arrivals", href: "#" },
    { name: "Most Wanted", href: "#" },
    { name: "Collections", href: "/main/shop" }
  ];

  const supportLinks = [
    { name: "Track Order", href: "/main/ordertraking" },
    { name: "Custom / Bulk Order", href: "/main/custom-order" },
    { name: "Contact Us", href: "#" },
    { name: "Store Locator", href: "#" },
    { name: "Request a Design", href: "#" }
  ];

  const legalLinks = [
    { name: "About Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms and Condition", href: "#" },
    { name: "Franchise Shop", href: "#" },
    { name: "Refund & Returns", href: "#" }
  ];

  return (
    <footer className="w-full bg-white/20 dark:bg-black/30 backdrop-blur-xl text-gray-900 dark:text-gray-100 pt-20 pb-10 font-sans border-t border-white/40 dark:border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-screen-2xl border-t-2 mx-auto px-4 sm:px-6 lg:px-8">



        {/* Main Grid */}
        <div className="grid pt-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="flex flex-col">
            <div className="mb-6">
              <Image
                src="/logocodegrid.png"
                alt="CodeGrid Logo"
                width={100}
                height={100}
                priority
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 pr-4">
              CodeGrid represents the intersection of technology and street culture. Built with pride in Bangladesh, engineered for the modern world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-none hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white text-gray-400 transition-all group">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-none hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white text-gray-400 transition-all group">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-none hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white text-gray-400 transition-all group">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-none hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white text-gray-400 transition-all group">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

          {/* Shop Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">Shop</h4>
            <ul className="space-y-4">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:bg-gradient-to-r hover:from-[#00B4DB] hover:to-[#0000FF] hover:bg-clip-text hover:text-transparent text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:bg-gradient-to-r hover:from-[#00B4DB] hover:to-[#0000FF] hover:bg-clip-text hover:text-transparent text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">Legal & About</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:bg-gradient-to-r hover:from-[#00B4DB] hover:to-[#0000FF] hover:bg-clip-text hover:text-transparent text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-t border-gray-200 pt-8 gap-6">
          <div className="text-[11px] text-gray-500 uppercase tracking-widest text-center lg:text-left">
            Copyright © 2026 CodeGrid | Proudly Made in Bangladesh
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {['VISA', 'MasterCard', 'Amex', 'bKash', 'Nagad', 'Upay'].map((method) => (
              <div key={method} className="bg-gray-50 border border-gray-200 h-8 px-3 text-[10px] text-gray-600 rounded-none flex items-center justify-center uppercase font-bold tracking-wider">
                {method}
              </div>
            ))}
            <div className="bg-[#0066FF] text-white h-8 px-4 text-[10px] font-bold rounded-none flex items-center justify-center uppercase tracking-wider">
              SSLCOMMERZ
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

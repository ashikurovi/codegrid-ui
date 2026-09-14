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
    <footer className="w-full bg-gray-50 text-black pt-20 pb-10 font-sans border-t-[1px] border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid pt-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="flex flex-col">
            <div className="mb-6">
              <Image
                src="/logocodegrid.png"
                alt="CodeGrid Logo"
                width={80}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                priority
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 pr-4 font-medium">
              CodeGrid represents the intersection of technology and street culture. Built with pride in Bangladesh, engineered for the modern world.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

          {/* Shop Col */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-4">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 font-medium hover:text-black text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Col */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 font-medium hover:text-black text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wider">Legal & About</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 font-medium hover:text-black text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-t-[1px] border-gray-200 pt-8 gap-6 mt-8">
          <div className="text-xs text-gray-500 font-medium text-center lg:text-left">
            Copyright © 2026 CodeGrid | Proudly Made in Bangladesh
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {['VISA', 'MasterCard', 'Amex', 'bKash', 'Nagad', 'Upay'].map((method) => (
              <div key={method} className="bg-gray-100 text-gray-600 h-7 px-3 rounded-md text-[10px] flex items-center justify-center uppercase font-semibold tracking-wider">
                {method}
              </div>
            ))}
            <div className="bg-black text-white h-7 px-4 rounded-md text-[10px] font-semibold flex items-center justify-center uppercase tracking-wider">
              SSLCOMMERZ
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

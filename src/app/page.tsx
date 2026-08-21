import { Banner } from "@/components/landing/banner";
import { Category } from "@/components/landing/category";

import { AllProducts } from "@/components/landing/allproducts";
import { Customer } from "@/components/landing/customer";
import { CampaignModal } from "@/components/landing/campaign-modal";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-start bg-white dark:bg-black">
        <CampaignModal />
        <Banner />
        <Category />
        <AllProducts />
        <Customer />
      </main>
    </div>
  );
}

import { Banner } from "@/components/landing/banner";
import { Category } from "@/components/landing/category";

import { AllProducts } from "@/components/landing/allproducts";
import { Customer } from "@/components/landing/customer";
import { CampaignModal } from "@/components/landing/campaign-modal";
import { RecentBlog } from "@/components/landing/recentblog";

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-start">
      <CampaignModal />
      <Banner />
      <Category />
      <AllProducts />
      <RecentBlog />
      <Customer />
    </main>
  );
}

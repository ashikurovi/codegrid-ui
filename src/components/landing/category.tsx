import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "DROP SHOULDER",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "WEAR BANGLADESH",
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "BANGLAR KHADOK",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "EKDOM SOLID",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 5,
    title: "HALF SLEEVE",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 6,
    title: "BETTER TOGETHER",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 7,
    title: "Movie & Anime",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 8,
    title: "JOGGERS",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 9,
    title: "FULL SLEEVE",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 10,
    title: "POLO PERFECTION",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 11,
    title: "KIDS TEE",
    image: "https://images.unsplash.com/photo-1519238263530-99ad7f636c7a?q=80&w=600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 12,
    title: "SEE EVERYTHING",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=600&auto=format&fit=crop",
    link: "#",
  },
];

export function Category() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-wider uppercase">
          Featured Categories
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.link}
            className="group relative aspect-square overflow-hidden rounded-none block shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
            />

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Title */}
            <div className="absolute inset-x-0 bottom-2 sm:bottom-4 flex justify-center">
              <span className="bg-black/70 backdrop-blur-sm text-white text-[8px] sm:text-[10px] md:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-none uppercase tracking-widest text-center">
                {category.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

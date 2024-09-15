"use client";

import Link from "next/link";
import Image from "next/image";

function ProductList() {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/13094187/pexels-photo-13094187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="shirt"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/13094146/pexels-photo-13094146.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="shirt-2"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Button-up Gray Jacket</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Button-up jacket with pockets</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="skirt"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://cdn.pomelofashion.com/img/p/2/0/2/5/3/0/202530.jpg?auto=compress,format&fm=webp,jpg,png&w=370&h=492"
            alt="skirt-2"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Striped Casual Midi Dress</span>
          <span className="font-semibold">$39</span>
        </div>
        <div className="text-sm text-gray-500">Striped dress with casual fit</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://cdn.pomelofashion.com/img/p/5/9/5/9/9/5/595995.jpg?auto=compress,format&fm=webp,jpg,png&w=370&h=492"
            alt="pant"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://cdn.pomelofashion.com/img/p/5/9/6/0/5/4/596054.jpg?auto=compress,format&fm=webp,jpg,png&w=370&h=492"
            alt="pant-2"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">High-Waist Wide-Leg Pants</span>
          <span className="font-semibold">$29</span>
        </div>
        <div className="text-sm text-gray-500">Elegant wide-leg pants with pockets</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://cdn.pomelofashion.com/img/p/5/9/4/8/2/8/594828.jpg?auto=compress,format&fm=webp,jpg,png&w=370&h=492"
            alt="Blazer Top"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://cdn.pomelofashion.com/img/p/5/9/4/8/2/9/594829.jpg?auto=compress,format&fm=webp,jpg,png&w=370&h=492"
            alt="Blazer Top-2"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Sleeveless Wrap Blazer Top</span>
          <span className="font-semibold">$69</span>
        </div>
        <div className="text-sm text-gray-500">Sleek wrap design, formal style</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
      </Link>
    </div>
  );
}

export default ProductList;

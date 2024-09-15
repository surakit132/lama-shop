"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://img.kwcdn.com/product/fancy/b31f942a-4fd4-4b81-bd5c-2ee3eb03fad5.jpg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    id: 2,
    url: "https://img.kwcdn.com/product/fancy/c94c6c64-3637-41cd-bab3-e3907db97774.jpg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    id: 3,
    url: "https://img.kwcdn.com/product/fancy/248038e0-2f98-4d71-b8da-49146c0bb319.jpg?imageView2/2/w/800/q/70/format/webp",
  },
  {
    id: 4,
    url: "https://img.kwcdn.com/product/fancy/78dde490-b9b2-4553-9684-b41281ae7f19.jpg?imageView2/2/w/800/q/70/format/webp",
  },
];

function ProductImage() {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImage;

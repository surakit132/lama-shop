"use client";
import Image from "next/image";

function CartModal() {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.15)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          {/* ITEMS LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/13094187/pexels-photo-13094187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={72}
                height={96}
                alt=""
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Button-up Gray Jacket</h3>
                    <div className="p-1 bg-gray-50">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">avaliable</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between gap-8 text-sm">
                  <span className="text-gray-500">Qty. 1</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://cdn.pomelofashion.com/img/p/5/9/4/8/2/8/594828.jpg?auto=compress,format&fm=webp,jpg,png&w=370&h=492"
                width={72}
                height={96}
                alt=""
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Sleeveless Wrap Blazer Top</h3>
                    <div className="p-1 bg-gray-50">$69</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">avaliable</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between gap-8 text-sm">
                  <span className="text-gray-500">Qty. 1</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$118</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 text-white bg-black">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartModal;

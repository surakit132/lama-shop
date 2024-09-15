function CustomizeProducts() {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-medium">Choose a color</p>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-[#7c7667]">
          <div className="absolute w-10 h-10 rounded-full ring-2 transform -translate-x-1 -translate-y-1" />
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-[#1b4038] "></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-black">
          <div className="absolute w-10 h-[2px] bg-red-500 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
      </ul>
      <h4 className="font-medium">Choose a size (EU)</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">
          5
        </li>
        <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">
          6
        </li>
        <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">
          7
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          8
        </li>
        <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">
          9
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          10
        </li>
        <li className="ring-1 ring-lama text-white bg-lama rounded-md py-1 px-4 text-sm cursor-pointer">
          11
        </li>
      </ul>
    </div>
  );
}

export default CustomizeProducts;

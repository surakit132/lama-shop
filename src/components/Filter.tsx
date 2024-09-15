function Filter() {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 ring-1 ring-gray-300"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-300"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-300"
        />
        <select
          name="size"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 ring-1 ring-gray-300"
        >
          <option>Size</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
        <select
          name="color"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 ring-1 ring-gray-300"
        >
          <option>Color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
          <option value="black">Black</option>
        </select>
        <select
          name="category"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 ring-1 ring-gray-300"
        >
          <option>Category</option>
          <option value="men">Men's Clothing</option>
          <option value="women">Women's Clothing</option>
          <option value="kid">Kids' Fashion</option>
          <option value="accessories">Accessories</option>
          <option value="shoes">Shoes</option>
          <option value="bag">Bag & Lugguage</option>
        </select>
        <select
          name="all filter"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 ring-1 ring-gray-300"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-300"
        >
          <option>Sort By</option>
          <option value="men">Price (low to high)</option>
          <option value="women">Price (high to low)</option>
          <option value="kid">Newest</option>
          <option value="accessories">Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;

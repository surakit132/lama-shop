import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import Add from "@/components/Add";

function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 mr-2">
        <h1 className="text-4xl font-medium">Old School Men's Sneakers</h1>
        <p className="text-gray-500">
          Stylish men's old-school color block skateboard shoes, featuring a
          comfy, non-slip sole, lace-up design, and breathable material, perfect
          for outdoor activities.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">
            Men's Old School Style Colour Block Skateboard Shoes, Sneakers For
            Men's Outdoor Activities
          </h4>
          <>
            <span className="font-semibold">Available Colors:</span>
            <li>Khaki, Black, and Green</li>
            <br />
            <span className="font-semibold">Available Sizes (Men's):</span>
            <li>US Sizes: 6, 7, 8, 9, 10, 11, 12</li>
            <li>EU Sizes: 5, 6, 7, 8, 9, 10, 11</li>
            <li>Size in Centimeters (cm): 24, 25, 26, 27, 28, 29, 30</li>
            <li>
              Size in Inches: 9.45", 9.84", 10.24", 10.63", 11.02", 11.42",
              11.81"
            </li>
            <br />
            <span className="font-semibold">Important Notes:</span>
            <li>
              The actual shoe colour may vary slightly due to different monitor
              settings and lighting conditions.
            </li>
            <li>
              No Cash on Delivery (COD): Payment is required in advance as we do
              not offer cash on delivery.
            </li>
            <li>
              Please note that this item is not eligible for exchanges or
              returns.
            </li>
          </>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

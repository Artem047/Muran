import { useContext } from "react";
import { dataProduct } from "../../data/utils/dataProduct";
import Product from "./Product";
import { ShopContext } from "../../context/shop-context";

const Shop = () => {
  const { searchQuery } = useContext(ShopContext);

  const filteredProducts = dataProduct.flatMap((product) =>
    product.item.filter((item) =>
      item.titleProduct.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="py-12">
      <div className="flex items-center pl-[280px]">
        <div className="flex items-center gap-6">
          <h1 className="text-5xl text-[#372821] font-black">Главная</h1>
          <span className="text-xl pt-4">\Товары</span>
        </div>
        <div className="catalogImg"></div>
      </div>
      <div className="pt-24 px-[120px] flex flex-wrap gap-20 justify-center">
        {filteredProducts.map((product) => {
          return <Product data={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Shop;

import { BsBasket } from "react-icons/bs";
import { dataProduct } from "../data/utils/dataProduct";
import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <div className="py-12">
      <div className="flex items-center pl-[210px]">
        <div className="flex items-center gap-6">
          <h1 className="text-5xl text-[#372821] font-black">Главная</h1>
          <span className="text-xl pt-4">\Товары</span>
        </div>
        <div className="catalogImg"></div>
      </div>
      <div className="pt-24 px-[120px] flex flex-wrap gap-20 justify-center">
        {dataProduct.map((product) =>
          product.item.map((item) => (
            <Link
              to={`/catalog/${item.title}`}
              state={{ productItem: item }}
              className="flex flex-col gap-5 w-[290px]"
              key={item.id}>
              <div className="w-full drop-shadow-lg">
                <img src={item.image} alt="" />
              </div>
              <div className="flex items-center justify-between text-xl uppercase">
                <p>{item.title}</p>
                <span>{item.price}$</span>
              </div>
              <button className="w-[200px] h-14 m-auto bg-[#F2F2F2] flex justify-center items-center gap-5 text-lg border border-[#372821]">
                <BsBasket size={25} />
                <span>В корзину</span>
              </button>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Catalog;

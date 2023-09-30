import { useLocation, useParams } from "react-router-dom";
import { BsBasket } from "react-icons/bs";

const ProductCard = () => {
  const { productId } = useParams();
  const location = useLocation();
  const productItem = location.state?.productItem;

  return (
    <div className="py-12">
      <div className="flex items-center pl-[210px]">
        <div className="flex items-center gap-6">
          <h1 className="text-5xl text-[#372821] font-black">Главная</h1>
          <span className="text-xl pt-4">\{productId}</span>
        </div>
        <div className="catalogImg"></div>
      </div>
      {productItem && (
        <section className="px-[300px] py-[110px] flex flex-col gap-[120px]">
          <article>
            <div className="flex gap-[160px]">
              <div className="border p-10 flex justify-center items-center w-full h-full">
                <img src={productItem.image} alt="" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#8E8E8E] text-lg">
                  Код товара: {productItem.codeProduct}
                </span>
                <h1 className="text-4xl font-bold mt-10">
                  {productItem.titleProduct}
                </h1>
                <button className="border border-[#372821] w-[105px] h-10 mt-10">
                  {productItem.volume} ml
                </button>
                <ul className="flex flex-col gap-2 mt-12 text-lg">
                  <li>
                    <b>Объем:</b> {productItem.volume}ml
                  </li>
                  <li>
                    <b>Сделано в:</b> {productItem.country}
                  </li>
                  <li>
                    <b>Тип волос:</b> {productItem.hair}
                  </li>
                  <li>
                    <b>Время применения:</b> {productItem.time}
                  </li>
                </ul>
                <div className="flex gap-10 mt-16 items-center">
                  <span className="text-6xl font-bold">
                    {productItem.price}
                    <sup className="font-normal">$</sup>
                  </span>
                  <button className="w-[200px] h-14 m-auto bg-[#F2F2F2] flex justify-center items-center gap-5 text-lg border border-[#372821]">
                    <BsBasket size={25} />
                    <span>В корзину</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="flex justify-between">
              <div className="flex items-center gap-10">
                <h1 className="text-4xl font-bold">
                  {productItem.titleProduct}
                </h1>
                <hr className="border-b-2 w-[60px] border-[#372821]" />
              </div>
              <div className="w-14 h-14 bg-[#F2F2F2] ml-16 flex items-center">
                <span className="text-xl font-bold">Подробнее</span>
              </div>
            </div>
            <div className="mt-20 text-lg leading-loose">
              <p>{productItem.descriptionTop}</p> <br />
              <p>{productItem.descriptionBottom}</p>
            </div>
            <div className="mt-10 flex flex-col gap-16">
              <div className="w-14 h-14 bg-[#F2F2F2] ml-16 flex items-center">
                <span className="text-xl font-bold">Состав</span>
              </div>
              <p className="text-lg">{productItem.structure}</p>
            </div>
          </article>
        </section>
      )}
    </div>
  );
};

export default ProductCard;

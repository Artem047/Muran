import NumberPage from "../components/NumberPage";
import BigMe05 from "../images/BigMe05.png";
import logoTopCatal from "../images/logoTopCatal.png";
import { BsArrowRight, BsBasket } from "react-icons/bs";
import ener1 from "../images/energy/ener1.png";
import { dataTopCategoryProduct } from "../data/data";

const TopCategoryPage = () => {
  return (
    <div className="py-[200px]">
      <div className="flex items-center gap-[380px] relative">
        <NumberPage text="Top category" num="03" />
        <div>
          <h1 className="text-[#372821] text-6xl font-black">ТОП КАТЕГОРИЯ</h1>
          <p className="pt-2 text-lg">Косметики MURAN</p>
        </div>
      </div>
      <section className="px-[150px] pt-[120px] flex gap-20">
        <article className="flex flex-col items-end">
          <div className="w-[400px] h-[650px] relative bg-[#F2EFEB]">
            <h2 className="text-[#372821] text-2xl font-bold p-10">ENERGY</h2>
            <img src={logoTopCatal} alt="" className="absolute top-0" />
            <img src={BigMe05} alt="" className="absolute bottom-0 right-0" />
          </div>
          <button className="w-[200px] flex items-center justify-between px-5 h-14 border mt-10 border-[#372821]">
            <BsArrowRight size={25} />
            <p>Все товары</p>
          </button>
        </article>
        <article className="grid grid-cols-2 grid-rows-2 gap-[100px]">
          {dataTopCategoryProduct.map((item) => (
            <div className="flex flex-col gap-5" key={item.id}>
              <div className="w-[290px] drop-shadow-lg">
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
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default TopCategoryPage;

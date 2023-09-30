import { Link } from "react-router-dom";
import { dataCategoryProduct } from "../data/data";
import NumberPage from "../components/NumberPage";

const CategoryPage = () => {
  return (
    <div className="py-[250px] pl-[200px]">
      <div className="flex items-center text-[#372821]">
        <h1 className="text-6xl font-black">Общие категории</h1>
        <hr className="w-16 border border-[#372821] mt-5 ml-8" />
        <NumberPage text="Category" num="01" />
      </div>
      <div className="pt-[125px] grid grid-cols-2 grid-rows-2 gap-10">
        {dataCategoryProduct.map((item) => (
          <Link
            className="w-[350px] h-[160px] bg-[#F3F0EC] py-6 px-9 relative"
            key={item.id}>
            <h2 className="text-[#372821] text-xl font-bold">{item.text}</h2>
            <hr className="border-b-2 w-[60px] border-[#372821]" />
            <img
              src={item.productName}
              alt=""
              className="absolute top-0 right-0"
            />
            <img src={item.logo} alt="" className="absolute bottom-0 left-5" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

import banner from "../images/banner.png";
import { BsArrowDown } from "react-icons/bs";
import CategoryPage from "./CategoryPage";
import HistoryPage from "./HistoryPage";
import TopCategoryPage from "./TopCategoryPage";

const Home = () => {
  const handleLearnMoreClick = () => {
    const servicesElement = document.getElementById("shop");
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative">
      <div className="pl-[200px]">
        <div className="absolute right-0 -z-10 top-10">
          <img src={banner} alt="" />
        </div>
        <h1 className="uppercase text-[#372821] text-6xl pt-[245px] font-black leading-tight">
          ПРЕДСТАВИТЕЛЬ <br /> КОСМЕТИКИ <br /> MURAN
        </h1>
        <button
          onClick={handleLearnMoreClick}
          className="w-[230px] flex justify-center gap-7 items-center mt-[100px] h-[60px] bg-[#F2F2F2]">
          <BsArrowDown size={30} />
          <p className="text-lg">В магазин</p>
        </button>
      </div>
      <CategoryPage />
      <HistoryPage />
      <TopCategoryPage />
    </div>
  );
};

export default Home;

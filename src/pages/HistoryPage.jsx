import { BsArrowDown } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import historyBanner from "../images/historyBanner.png";
import NumberPage from "./../components/NumberPage";

const HistoryPage = () => {
  return (
    <div className="relative flex">
      <img src={historyBanner} alt="history" />
      <section className="pt-[130px]">
        <NumberPage text="History" num="02" />
        <article className="bg-white absolute px-[100px] py-20 left-[450px] w-[950px] h-[550px]">
          <div className="flex items-center gap-10">
            <h1 className="text-5xl font-black text-[#372821]">НАША ИСТОРИЯ</h1>
            <hr className="border-b-2 w-[60px] border-[#372821]" />
          </div>
          <p className="text-lg leading-loose pt-8">
            Подводка высыхает за считанные секунды после нанесения, не
            скатывается и не отпечатывается на верхнем веке. В комплекте с
            подводкой вы найдете миниатюрную кисть, с помощью которой легко
            регулировать толщину и интенсивность стрелок. Beauty Glazed Eyeliner
            Gel — волшебная палочка в мире
          </p>
          <div className="flex items-center pt-16">
            <button className="w-[230px] flex justify-center gap-7 items-center h-[60px] bg-[#F2F2F2]">
              <BsArrowDown size={30} />
              <p className="text-lg">В магазин</p>
            </button>
            <button className="border flex justify-center items-center border-[#372821] w-14 h-14 ml-[100px]">
              <FaPlay size={15} />
            </button>
            <hr className="border w-[45px] border-[#372821]" />
            <p className="pl-8 text-lg">Краткий видео-обзор</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default HistoryPage;

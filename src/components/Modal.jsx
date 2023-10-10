import { AiOutlineCloseCircle } from "react-icons/ai";
import muran from "../images/video/muran.mp4";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={
        active
          ? "w-full h-full fixed top-0 left-0 flex items-center justify-center z-50 scale-100 px-[500px] py-[250px]"
          : "w-full h-full fixed top-0 left-0 flex items-center justify-center z-50 scale-0 px-[500px] py-[250px]"
      }>
      <div className="rounded-xl bg-white shadow-2xl relative w-full h-full">
        <button onClick={() => setActive(false)}>
          <AiOutlineCloseCircle
            size={35}
            className="cursor-pointer absolute top-5 right-5"
          />
        </button>
        <video
          controls
          className="w-full h-full p-7 flex justify-center items-center">
          <source src={muran} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Modal;

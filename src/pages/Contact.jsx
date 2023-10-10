import Map from "../components/Map";
import watch from "../images/watch.svg";

const Contact = () => {
  return (
    <div className="py-12 ">
      <div className="flex items-center pl-[280px]">
        <div className="flex items-center gap-6">
          <h1 className="text-5xl text-[#372821] font-black">Главная</h1>
          <span className="text-xl pt-4">\Контакты</span>
        </div>
        <div className="catalogImg"></div>
      </div>
      <div className="pl-[280px]">
        <p className="text-lg leading-loose py-10 pr-[280px]">
          Специально для мужчин, страдающих от излишней жирности кожного покрова
          головы, а также ее чрезмерной чувствительности, сопровождающейся зудом
          и раздражениями косметологи известного итальянского бренда
          профессиональной косметики Barba Italiana создали средство, которое
          поможет избавится от этих неприятностей — воду морскую очищающую
          янтарную для кожи головы Barba Muran 02. <br /> <br /> Она обладает
          приятным освежающим ароматом, без труда наносится на кожу и быстро
          впитывается. Обогащенная экстрактом фукуса пузырчатого,
          гидрогенизированным касторовым маслом и другими активными компонентами
          прекрасно очищает и подсушивает эпидермис, способствует нормализации
          функций сальных желез, а также оказывае противовоспалительное,
          дезинфицирующие и успокаивающее действия, устраняя ощущение
          дискомфорта.
        </p>
        <div className="pt-[180px] flex items-center gap-12">
          <h1 className="text-5xl font-black">Мы на карте</h1>
          <hr className="w-16 border-2 border-[#372821] mt-5" />
        </div>
        <div className="flex items-center gap-[120px] mt-20">
          <Map />
          <ul className="flex flex-col gap-20">
            <li className="flex items-center gap-5">
              <img src={watch} alt="" />
              <hr className="w-8 border border-[#5B5B5B] rotate-90" />
              <div className="flex flex-col text-sm">
                <span>понедельник - пятница </span>
                <span>с 8:00 - 18:00</span>
              </div>
            </li>
            <li className="flex items-center gap-5">
              <img src={watch} alt="" />
              <hr className="w-8 border border-[#5B5B5B] rotate-90" />
              <div className="flex flex-col text-sm">
                <span>выходные</span>
                <span>с 8:00 - 17:00</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

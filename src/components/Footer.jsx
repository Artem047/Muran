import NavbarSocial from "./navigation/NavbarSocial";
import FooterNavigation from "./navigation/FooterNavigation";

const Footer = () => {
  return (
    <footer className="w-full h-full px-[100px]">
      <section className="flex justify-center gap-[140px]">
        <article className="flex gap-5 flex-col">
          <div className="flex items-center py-2">
            <h1 className="uppercase text-5xl font-bold">muran</h1>
            <hr className="w-14 border border-black ml-8" />
          </div>
          <p className="pb-9">
            Официальный <br /> представитель в России
          </p>
          <NavbarSocial size={40} />
        </article>
        <article className="flex flex-col ">
          <FooterNavigation />
        </article>
      </section>
      <hr />
      <ul className="flex gap-[100px] justify-around text-[#969696] py-5 text-center">
        <li>Политика конфиденциональности</li>
        <li>Договор оферты</li>
        <li>Разработка сайта</li>
      </ul>
    </footer>
  );
};

export default Footer;

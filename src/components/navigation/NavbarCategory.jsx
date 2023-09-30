import { Link } from "react-router-dom";

const NavbarCategory = () => {
  return (
    <ul className="flex justify-center gap-[100px] bg-[#F2EFEB] py-5">
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="catalog">Продукция</Link>
      </li>
      <li>
        <Link to="contact">Контакты</Link>
      </li>
      <li>
        <Link to="delivery">Доставка</Link>
      </li>
    </ul>
  );
};

export default NavbarCategory;

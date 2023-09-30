import { BsTelephone } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterNavigation = () => {
  return (
    <section className="py-5">
      <article>
        <p className="font-bold">Навигация по сайту</p>
        <ul className="flex gap-[120px] text-[#969696] py-9">
          <li>
            <Link to="catalog">Продукция</Link>
          </li>
          <li>
            <Link to="contact">Контакты</Link>
          </li>
          <li>
            <Link to="delivery">Доставка</Link>
          </li>
          <li>
            <Link to="basket">Корзина</Link>
          </li>
        </ul>
      </article>
      <article>
        <p className="font-bold">Наши контакты</p>
        <ul className="flex gap-[120px] text-[#969696] pt-9">
          <li>
            <Link
              to="tel:+7 (999) 131-32-49"
              className="flex items-center gap-3">
              <BsTelephone color="black" size={20} />
              <p>+7 (999) 131-32-49</p>
            </Link>
          </li>
          <li>
            <Link
              target="blank"
              to="https://yandex.ru/maps/-/CDUBQCZp"
              className="flex items-center gap-3">
              <FaMapPin size={20} color="black" />
              <p>Россия, г. Бавлы Пионерская 15</p>
            </Link>
          </li>
          <li>
            <Link
              target="blank"
              to="https://yandex.ru/maps/-/CDUBaRJw"
              className="flex items-center gap-3">
              <FaMapPin size={20} color="black" />
              <p>Россия, г. Альметьевск, Джалиля 32</p>
            </Link>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default FooterNavigation;

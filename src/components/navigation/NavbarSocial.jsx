import { BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavbarSocial = ({ size }) => {
  return (
    <div className="flex gap-5">
      <Link target="blank" to="https://www.whatsapp.com/">
        <BsWhatsapp size={size} />
      </Link>
      <Link target="blank" to="https://telegram.org/">
        <BsTelegram size={size} />
      </Link>
      <Link target="blank" to="https://www.instagram.com/">
        <BsInstagram size={size} />
      </Link>
    </div>
  );
};

export default NavbarSocial;

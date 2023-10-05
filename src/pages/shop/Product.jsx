import { useContext } from "react";
import { BsBasket } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
  const { id, title, image, price } = props.data;
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(id);
    alert("Товар добавлен в корзину");
  };
  return (
    <div className="flex flex-col gap-5 w-[290px]" key={id}>
      <Link to={`/catalog/${title}`} state={{ productItem: props.data }}>
        <div className="w-full drop-shadow-lg">
          <img src={image} alt="" />
        </div>
        <div className="flex items-center justify-between text-xl uppercase">
          <p>{title}</p>
          <span>{price}$</span>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className="w-[200px] h-14 m-auto bg-[#F2F2F2] flex justify-center items-center gap-5 text-lg border border-[#372821]">
        <BsBasket size={25} />
        <span>В корзину</span>
      </button>
    </div>
  );
};

export default Product;

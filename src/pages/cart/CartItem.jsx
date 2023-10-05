import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
  const { id, titleProduct, volume, price, image } = props.data;
  const { cartItems, updateCartItemCount, removeFromCart, addToCart } =
    useContext(ShopContext);
  return (
    <div className="border-t border-b py-6 flex justify-between px-10 items-center">
      <div className="w-[170px] h-[195px] border flex items-center">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-lg font-bold">{titleProduct}</p>
        <span>{volume} ml</span>
        <div className="flex w-24">
          <button className="bg-[#F2EFEB] px-2" onClick={() => addToCart(id)}>
            +
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="w-10 outline-none text-center bg-[#F2EFEB]"
          />
          <button
            className="bg-[#F2EFEB] px-2"
            onClick={() => removeFromCart(id)}>
            -
          </button>
        </div>
      </div>
      <span className="text-5xl font-bold">
        {price} <sup>$</sup>
      </span>
    </div>
  );
};

export default CartItem;

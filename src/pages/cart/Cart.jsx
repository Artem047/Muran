import { useContext } from "react";
import { dataProduct } from "../../data/utils/dataProduct";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, getTotalCartAmount, removeAllCart } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount(dataProduct);
  return (
    <div>
      <h1 className="text-5xl text-center py-10 font-black">Корзина</h1>
      <ul className="py-10">
        {dataProduct.map((product) =>
          product.item.map((item) => {
            if (cartItems[item.id] !== 0) {
              return <CartItem data={item} key={item.id} />;
            }
          })
        )}
        {totalAmount > 0 ? (
          <div className="pt-10 flex justify-end items-center gap-20">
            <button
              className=" bg-red-500 w-[150px] h-12 text-white font-semibold"
              onClick={() => removeAllCart()}>
              ОЧИСТИТЬ
            </button>
            <span className="text-2xl">Итого:</span>
            <b className="text-5xl">
              {totalAmount} <sup>$</sup>
            </b>
          </div>
        ) : (
          <h1 className="text-center text-4xl font-bold py-28">
            Ваша корзина пуста
          </h1>
        )}
      </ul>
    </div>
  );
};

export default Cart;

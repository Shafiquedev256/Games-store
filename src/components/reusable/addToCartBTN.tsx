
import { ApiData } from "../../redux/getGamesSlice";


type Props = {
  data: ApiData;
  Class: string;
};

export const AddToCartBtn = ({ data, Class }: Props) => {
  

  const handleClick = () => {
    const storedCart = localStorage.getItem('cart');
    let updatedCart: ApiData[] = [];
    if (storedCart) {
      updatedCart = JSON.parse(storedCart);
    }
const filteredUpdatedCart = updatedCart.filter(item=>item.title!==data.title)

    const newData = { ...data, count: 1 };
    filteredUpdatedCart.push(newData);

    localStorage.setItem('cart', JSON.stringify(filteredUpdatedCart));
  };

  return (
    <>
      <button className={Class} onClick={handleClick}>+CART</button>
    </>
  );
};

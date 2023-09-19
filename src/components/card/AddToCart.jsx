import { useCarrito } from '../../context/ContextCart';
import {GiShoppingCart} from 'react-icons/gi';

const AddToCart = ({producto}) => {
  const {addToCarrito} = useCarrito();

  const handleAgregarAlCarro = () => {
    addToCarrito(producto);
  };
 
  return (
    <div className='addtocart-icons'>
      <GiShoppingCart onClick={handleAgregarAlCarro}/>
    </div>
  );
}

export default AddToCart;
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png'

function Brand() {
  return(
    <div>
      <Link 
        to="/"
        className='brand-logo'
      >
        <img 
          src={logo} 
          alt="Verónica Ropa Chic"
          width={150} 
        />
      </Link>
    </div>
  );
}

export default Brand;
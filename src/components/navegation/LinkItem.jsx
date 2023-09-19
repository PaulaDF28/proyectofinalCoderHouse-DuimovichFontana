import { Link } from "react-router-dom";

function ItemListContainer() {
  return (
    <nav>
      <ul className="item-list-container">
        <li><Link to="/">Producto</Link></li>
        <li className="item-list-container-open">categoria
          <ul className="item-list-container-category">
            <li><Link to="/category/dama">mujer</Link></li>
            <li><Link to="/category/caballero">hombre</Link></li>
            <li><Link to="/category/niños">niños</Link></li>
          </ul>
        </li>
        <li><Link to="/contact">contactanos</Link></li>
      </ul>
    </nav>
  );
}

export default ItemListContainer;
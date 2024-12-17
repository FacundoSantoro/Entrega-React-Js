import CartWidget from "./Cartwidget";

export default function Navbar(props){
    const {color} = props;
    return (
    <nav className={`nav-${color}`}>
        <div>
            <img src="/images/logocjs.png" alt="logo callejeros" />
            <h1>Tienda Callejera</h1>
        </div>
        <ul>
            <li>
                <a href="">Productos</a>
            </li>
            <li>
                <a href="">Nosotros</a>
            </li>
            <li>
                <a href="">Contacto</a>
            </li>
        </ul>
        <div className="carrito">
            <CartWidget></CartWidget>
        </div>
    </nav>
    )
}
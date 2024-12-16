import CartWidget from "./Cartwidget";

export default function Navbar(props){
    const {color} = props;
    return (
    <nav className={`nav-${color}`}>
        <h1>ElManá</h1>
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
        <CartWidget></CartWidget>
    </nav>
    )
}
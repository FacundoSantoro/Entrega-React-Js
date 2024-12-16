export default function ItemListContainer(props) {
    const {texth1, textp} = props;
    return(
        <div className="msj-bienvenida">
        <h1>{texth1}</h1>
        <p>{textp}</p>
        </div>
    )
}
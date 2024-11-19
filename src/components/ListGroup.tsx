
import { MouseEvent, useState } from "react";

interface Propiedades{
    elementos: string[];
    encabezado: string;
    onSelectedItem : (item: string) => void;
}

function ListGroup({elementos, encabezado, onSelectedItem}: Propiedades) {
    
    const [indiceSel, setIndiceSel] = useState(-1)

    const getMessage = () => {
        return elementos.length === 0 ? <p>No se encontraron ciudades</p> : null;
    }

    // const handlerClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>{encabezado}</h1>
            <ul className="list-group">
                {getMessage()}
                {elementos.map((ciudad, index) => (
                    <li  
                        className={
                            indiceSel === index 
                            ? "list-group-item active"
                            :  "list-group-item" }
                        key={ciudad}
                        onClick={() => {
                            setIndiceSel(index);
                            onSelectedItem(ciudad);
                        }}
                        >
                            {ciudad}
                    </li>

                ))}
                {/* <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li> */}
            </ul>
        </>
    );
}

export default ListGroup;
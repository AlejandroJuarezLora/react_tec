// import Mensaje from "./Mensaje"

import ListGroup from "./components/ListGroup"
import Alerta from "./components/Alerta";
import Boton from "./components/Boton";
import { useState } from "react";

function App() {
  // return <div><Mensaje/></div>;

  let ciudades = [
      "Nueva York",
      "San Francisco",
      "Tokyo",
      "Londres",
      "Paris"
  ];

  let paises = [
    "Peru",
    "China",
    "Mexico",
    "Estados Unidos"
  ]

  const handlerSelectedItem = (item: string) => {
    console.log(item);
  }

  const [alertaVisible, setAlertaVisible] = useState(false);


  return (
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <ListGroup elementos={ciudades} encabezado="Ciudades del Mundo" onSelectedItem={handlerSelectedItem}/>
      </div>
      <div className="col-md-6 col-sm-12">
        <ListGroup elementos={paises} encabezado="Pais" onSelectedItem={handlerSelectedItem}/>
      </div>
    </div>
    <div className="row">
      { alertaVisible &&  <Alerta alCierre={() => setAlertaVisible(false)}>Hola <b>Chicos</b>, envia la informacion</Alerta>}
      <div className="row">
        <div className="col-md-2 col-sm-12">
          <Boton 
            alClick = {() => setAlertaVisible(true)}
            color="success"
          >
            Mi Boton
          </Boton>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;

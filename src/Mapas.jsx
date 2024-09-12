import style from './App.module.css'
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import "leaflet-defaulticon-compatibility";


function Mapas () {
return(
    <>
        <div className={style.wrapBtns}>
      <button><a href="/Products">Produtos</a></button>
      <button><a href="/API">API</a></button>
      <button><a href="/Mapas">Mapa</a></button>
      <button><a href="/Graficos">Graficos</a></button>
    </div>
    <div  className={style.wrapPage2}>
      <h1>Exercícios de manutenção</h1>
  
    </div>

    <MapContainer center={[-25.4249249,-49.2726446]} zoom={25} scrollWheelZoom={false} style={{width : '1000px', height : '800px'}}>
     <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     <Marker position={[-25.4249249,-49.2726446]}>
       <Popup>
         <a target='_blank' href="https://maps.app.goo.gl/U28Prcqy66n75KTt6"> Senai/Sesi. <br /> Celso Charuri</a>
        
       </Popup>
     </Marker>
   </MapContainer>
            </>
    )
}

export default Mapas
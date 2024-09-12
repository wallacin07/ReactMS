
import style from './App.module.css'

import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import "leaflet-defaulticon-compatibility";

function App() {



  return (
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
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import { CardAPI } from './components/CardAPI'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { CardProduct } from './components/CardProducts'
import { Alert } from './components/Alert'
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import "leaflet-defaulticon-compatibility";

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [alert, setAlert] = useState(false)
  const [name, setName] = useState("")

  useEffect(() => {
    setAlert(false)
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
        setAlert(false)
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        setAlert(true)
        console.log("Esta pagina nao contem este personagem")
      }
      console.error(error)
    })
  }, [page,name])
console.log(data);
  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div  className={style.wrapPage2}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>

          <h2>Showroom de produtos</h2>
            <div className={style.wrapPage}>
            {produtos.map((item) => {
              return(
                
                <CardProduct name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.Status}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="Nome Personagem" value={name} onChange={(event) => setName(event.target.value)}/>
               {alert ? <Alert/> : ""}
            </div>
            <div className={style.wrapPage}>
            {data.map((item) => { 
             return(
              <div key={item.id}>
                <CardAPI name={item.name} species={item.species} gender={item.gender} image={item.image} status={item.status} type={item.type}/>
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
           })}
            </div>
       </>
      }
     {show === "map" &&
        <>
 <MapContainer center={[-25.4249249,-49.2726446]} zoom={25} scrollWheelZoom={false} style={{width : '1000px', height : '800px'}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[-25.4249249,-49.2726446]}>
    <Popup>
      <a href="https://maps.app.goo.gl/U28Prcqy66n75KTt6"> Senai/Sesi. <br /> Celso Charuri</a>
     
    </Popup>
  </Marker>
</MapContainer>
         </>
      }
    </div>
    </>
  )
}

export default App

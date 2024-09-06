import { useState, useEffect } from 'react'
import { CardAPI } from './components/Card'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { CardProduct } from './components/CardProducts'
import { Alert } from './components/Alert'

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
    <div  className={style.wrapPage}>
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
      <h2>Mapa</h2>
          <div>
              mapa aqui
          </div>
         </>
      }
    </div>
    </>
  )
}

export default App

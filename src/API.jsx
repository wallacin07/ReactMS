
import style from './App.module.css'
import { api } from "./api/rmApi"

import { useState, useEffect } from 'react'
import { CardAPI } from './components/CardAPI'
import { Alert } from './components/Alert'



function API () {

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



return(
<>

<div className={style.wrapBtns}>
      <button><a href="/Products">Produtos</a></button>
      <button><a href="/API">API</a></button>
      <button><a href="/Mapas">Mapa</a></button>
    </div>
    <div  className={style.wrapPage2}>
      <h1>Exercícios de manutenção</h1>
  
    </div>
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
    )
}

export default API
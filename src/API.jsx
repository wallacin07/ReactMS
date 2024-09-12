
import style from './App.module.css'
import { api } from "./api/rmApi"

import { useState, useEffect } from 'react'
import { CardAPI } from './components/CardAPI'
import { Alert } from './components/Alert'
import { Tilt } from 'react-tilt'
import { Modal } from './components/Modal'
function API () {


  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    5000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.005,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [alert, setAlert] = useState(false)
    const [name, setName] = useState("")
    const [modal, setModal] = useState();

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
{modal !== undefined && <Modal data={data[modal]} close={() => setModal()}/>}
<div className={style.wrapBtns}>
      <button><a href="/Products">Produtos</a></button>
      <button><a href="/API">API</a></button>
      <button><a href="/Mapas">Mapa</a></button>
      <button><a href="/Graficos">Graficos</a></button>
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
            {data.map((item, index) => { 
             return(

              


               <Tilt options={defaultOptions} style={{ height: 450, width: 350, margin: 10}}  key={item.id}>
              <div >
                <CardAPI name={item.name} species={item.species} gender={item.gender} image={item.image} status={item.status} type={item.type}/>
                <button onClick={() => setModal(index)}>Info</button>
              </div>
                    </Tilt>
              )
           })}
            </div>
       </>
    )
}

export default API
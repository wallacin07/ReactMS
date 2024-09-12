
import style from './App.module.css'
import { CardProduct } from './components/CardProducts'
import produtos from './constants/produtos.json'


function Products () {
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
            <h2>Showroom de produtos</h2>
            <div className={style.wrapPage}>
            {produtos.map((item) => {
                return(
                <CardProduct name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.Status}/>
                )
            })}
            </div>
        </>
    )
}

export default Products
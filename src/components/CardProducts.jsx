import style from './Card.module.css'


/* eslint-disable react/prop-types */
export const CardProduct = ({name,desc,value,image,status}) => {
  return(
      <div className={style.cor}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <p>{value}</p>
          <img src={image} alt={name} width={190} height={195}/>
        <div className={`${style.bolinha} ${status ? style.verde : style.vermelho} ` }></div>
      </div>
  )
}
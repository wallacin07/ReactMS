import style from './Card.module.css'

/* eslint-disable react/prop-types */
export const CardAPI = ({name,status,species,type,gender,image}) => {
  return(
      <div className={style.cor2}>
          <h1>{name}</h1>
          <h2>{gender}</h2>
          <p>{species}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
          <h3>{status}</h3>
          <h4>{type}</h4>
      </div>
  )
}
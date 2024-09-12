/* eslint-disable react/prop-types */
import  style from './Modal.module.css'; // Importa o CSS para estilizar o modal
import Draggable from "react-draggable";

// eslint-disable-next-line react/prop-types
export const Modal = (props) => {



    return(

      



      <Draggable>
      <div className={style.modal}>
        <button type='button' onClick={props.close} className={style.closeButton}>&#128473</button>
        <div className={style.modalContent}>
            <img src={props.data.image}/>
            <h1>{props.data.name}</h1><br/>
            <p><strong>Gender:</strong> {props.data.gender}</p>
            <p><strong>Location:</strong> {props.data.location.name}</p>
            <p><strong>Origin:</strong> {props.data.origin.name}</p>
            <p><strong>Species:</strong> {props.data.species}</p>
            <p><strong>Created:</strong> {new Date(props.data.created).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
                })}</p>
        </div>
      </div>
      </Draggable>
  )
}

export default Modal;
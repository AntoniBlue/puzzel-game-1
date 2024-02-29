<<<<<<< HEAD
import { useState } from "react";
import styles from "./PuzzelPeaces.module.css";

export const PuzzelPeaces = (props) => {
    const [idSwap, setIdSwap] = useState('')
=======
import { useContext, useState } from "react";
import styles from "./PuzzelPeaces.module.css";
import { IdSwapContext } from "./Context/IdSwapContext";

export const PuzzelPeaces = (props) => {
    const { idSwap, setIdSwap } = useContext(IdSwapContext)
    const [id, setId] = useState(props.PuzzelId)
>>>>>>> parent of 8a8a59a (Renamed)

    const PeaceFrame = {
        height: 600 / props.rows,
        width: 600 / props.rows,
    }

<<<<<<< HEAD
    const imageHandler=(e)=>{
        e.target.id = 1
        console.log(e.target.id);
        setIdSwap(e.target.id)
    }

    const PeaceStyle = {
        transform: `translate(${props.rows * 50 - 50 - (100 * (props.PuzzelId >= props.rows ? props.PuzzelId-(props.rows*(Math.floor(props.PuzzelId / props.rows))) : props.PuzzelId))}%,
                            ${props.rows * 50 - 50 - (100 * Math.floor(props.PuzzelId / props.rows))}%) scale(${props.rows})`
=======
    const imageHandler = (e) => {
        setIdSwap([...idSwap, e.target.id])

    }


    const PeaceStyle = {
        transform: `translate(${props.rows * 50 - 50 - (100 * (id >= props.rows ? id - (props.rows * (Math.floor(id / props.rows))) : id))}%,
                            ${props.rows * 50 - 50 - (100 * Math.floor(id / props.rows))}%) scale(${props.rows})`
>>>>>>> parent of 8a8a59a (Renamed)
    }

    return (
        <div className={styles.PuzzelPeaceStyle} style={PeaceFrame} >
<<<<<<< HEAD
            <img src={props.imgUrl} alt={props.PuzzelId} id={props.PuzzelId} className={styles.PuzzelPeaceImageStyle} style={PeaceStyle} onClick={imageHandler} />
=======
            <img src={props.imgUrl} alt={id} id={id} className={styles.PuzzelPeaceImageStyle} style={PeaceStyle} onClick={imageHandler} />
>>>>>>> parent of 8a8a59a (Renamed)
        </div>
    )
}


import { useState } from "react";
import styles from "./PuzzelPeaces.module.css";

export const PuzzelPeaces = (props) => {
    const [idSwap, setIdSwap] = useState('')

    const PeaceFrame = {
        height: 600 / props.rows,
        width: 600 / props.rows,
    }

    const imageHandler=(e)=>{
        e.target.id = 1
        console.log(e.target.id);
        setIdSwap(e.target.id)
    }

    const PeaceStyle = {
        transform: `translate(${props.rows * 50 - 50 - (100 * (props.PuzzelId >= props.rows ? props.PuzzelId-(props.rows*(Math.floor(props.PuzzelId / props.rows))) : props.PuzzelId))}%,
                            ${props.rows * 50 - 50 - (100 * Math.floor(props.PuzzelId / props.rows))}%) scale(${props.rows})`
    }

    return (
        <div className={styles.PuzzelPeaceStyle} style={PeaceFrame} >
            <img src={props.imgUrl} alt={props.PuzzelId} id={props.PuzzelId} className={styles.PuzzelPeaceImageStyle} style={PeaceStyle} onClick={imageHandler} />
        </div>
    )
}


import { useContext, useState } from "react";
import styles from "./PuzzelPeaces.module.css";
import { IdSwapContext } from "./Context/IdSwapContext";

export const PuzzelPeaces = (props) => {
    const { idSwap, setIdSwap } = useContext(IdSwapContext)
    const [id, setId] = useState(props.PuzzelId)

    const PeaceFrame = {
        height: 600 / props.rows,
        width: 600 / props.rows,
    }

    const imageHandler = (e) => {
        setIdSwap([...idSwap, e.target.id])

    }


    const PeaceStyle = {
        transform: `translate(${props.rows * 50 - 50 - (100 * (id >= props.rows ? id - (props.rows * (Math.floor(id / props.rows))) : id))}%,
                            ${props.rows * 50 - 50 - (100 * Math.floor(id / props.rows))}%) scale(${props.rows})`
    }

    return (
        <div className={styles.PuzzelPeaceStyle} style={PeaceFrame} >
            <img src={props.imgUrl} alt={id} id={id} className={styles.PuzzelPeaceImageStyle} style={PeaceStyle} onClick={imageHandler} />
        </div>
    )
}


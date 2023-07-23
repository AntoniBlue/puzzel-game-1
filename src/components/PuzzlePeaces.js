import { useContext, useState } from "react";
import styles from "./PuzzlePeaces.module.css";
import { IdSwapContext } from "./Context/IdSwapContext";

export const PuzzlePeaces = (props) => {
    const { idSwap, setIdSwap } = useContext(IdSwapContext)
    const [id, setId] = useState(props.PuzzleId)

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
        <div className={styles.PuzzlePeaceStyle} style={PeaceFrame} >
            <img src={props.imgUrl} alt={id} id={id} className={styles.PuzzlePeaceImageStyle} style={PeaceStyle} onClick={imageHandler} />
        </div>
    )
}


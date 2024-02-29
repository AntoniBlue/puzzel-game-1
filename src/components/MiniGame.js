import { useContext, useState } from "react"
import { PuzzlePeaces } from "./PuzzlePeaces"
import { ImageContext } from "./Context/ImageContext"
import styles from "./MiniGame.module.css";
import { IdSwapContext } from "./Context/IdSwapContext";

const MiniGame = () => {
    const { image, setImage } = useContext(ImageContext)
    const { idSwap, setIdSwap } = useContext(IdSwapContext)

    const [rows, setRows] = useState(0)
    const [imageIds, setimageIds] = useState([])

    const changeHandler = (e) => {
        let row = (e.target.value)
        setRows(row)
        let ids = []
        for (let i = 0; i < row * row; i++) {
            if (Math.random() < Number(0.5)) {
                ids.push(i)
            } else {
                ids.unshift(i)
            }
        }
        setimageIds(ids)
    }

    if (idSwap.length == 2) {

        let indeOne = (imageIds.indexOf(Number(idSwap[0])));
        let indeTwo = (imageIds.indexOf(Number(idSwap[1])));

        imageIds.splice(indeOne, 1, Number(idSwap[1]))
        imageIds.splice(indeTwo, 1, Number(idSwap[0]))

        idSwap.splice(0, 2)
    }

    return (
        <div className={styles.MiniGameWindow} id="MiniGame" >
            <form className={styles.form}>
                <label >Faces({rows*rows}):</label>
                <input
                    type="range"
                    min="2"
                    max="20"
                    value={rows}
                    onChange={(e) =>
                        changeHandler(e)
                    }
                />
            </form>
            <div>Upload image to play OR move slider for default image</div>
            <div className={styles.GameWindow}> {imageIds.map(x => <PuzzlePeaces rows={rows} key={x} PuzzleId={x} imgUrl={image} />)} </div>
        </div>
    )
}

export default MiniGame
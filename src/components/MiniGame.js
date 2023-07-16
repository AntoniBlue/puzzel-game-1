import { useContext, useState } from "react"
import { PuzzelPeaces } from "./PuzzelPeaces"
import { ImageContext } from "./Context/ImageContext"
import styles from "./MiniGame.module.css";

const MiniGame = () => {
    const { image, setImage } = useContext(ImageContext)
    const [rows, setRows] = useState(3)
    const [imageIds, setimageIds] = useState([])

    const changeHandler = (e) => {
        let row = (e.target.value)
        setRows(row)
        let ids=[]
        for (let i = 0; i < row * row; i++) {
            if (Math.random() < Number(0.5)) {
                ids.push(i)
            } else {
                ids.unshift(i)
            }
        }
        setimageIds(ids)
    }



    return (
        <div>
            <div className={styles.MiniGameWindow} id="MiniGame" >Puzzel
                <form >
                    <label >Rows ({rows}):</label>
                    <input
                        type="range"
                        min="2"
                        max="20"
                        value={rows}
                        onChange={(e) =>
                            changeHandler(e)
                        }
                    />
                    <img src={image}/>
                </form>
                <div className={styles.GameWindow}> {imageIds.map(x => <PuzzelPeaces rows={rows} key={x} PuzzelId={x} imgUrl={image} />)} </div>
            </div>
        </div>
    )
}

export default MiniGame
import { useContext, useState } from 'react';
import { ImageContext } from './Context/ImageContext';
import styles from "./GetImageForm.module.css"

export const GetImageForm = () => {
    const { image, setImage } = useContext(ImageContext)
    const [text, setText] = useState("")

    const submitHandle = (e) => {
        e.preventDefault()
        setImage(text);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandle}>
                <label className={styles.label}>
                    ImageURL:
                    <input
                        type='url'
                        className={styles.input}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" className={styles.submit} />
            </form>
        </div>
    )
}
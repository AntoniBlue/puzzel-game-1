import { useContext, useState } from 'react';
import { ImageContext } from './Context/ImageContext';


export const GetImageForm = () => {
    const { image, setImage } = useContext(ImageContext)
    const [text, setText] = useState("")

    const submitHandle = (e) => {
        e.preventDefault()
        setImage(text);
    }

    return (
        <div>
            <form onSubmit={submitHandle}>
                <label>
                    Image:
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
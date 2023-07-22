import styles from './App.module.css';
import MiniGame from './components/MiniGame';
import Navigation from './components/Navigation';
import { ImageContext } from './components/Context/ImageContext';
import { useState } from 'react';
import { GetImageForm } from './components/GetImageForm';
import { IdSwapContext } from './components/Context/IdSwapContext';

function App() {
  const [image, setImage] = useState("https://preview.redd.it/fewie53uy3x51.png?auto=webp&s=8302248a9dc487d4ad026a25e1288d5fe8d76deb")
  const [idSwap, setIdSwap] = useState([])
  return (
    <ImageContext.Provider value={{ image, setImage }}>
      <IdSwapContext.Provider value={{ idSwap, setIdSwap }}>
        <div className={styles.App}>
          <Navigation />
          <header className={styles.header}>
            <img src="https://images.pexels.com/photos/269399/pexels-photo-269399.jpeg" className={styles.background} />
            <h1 className={styles.title} id='HomePage'>Puzzle</h1>
            <h1 className={styles.title2} id='HomePage'>Puzzle</h1>
            <h1 className={styles.title3} id='HomePage'>Puzzle</h1>
            <h1 className={styles.title4} id='HomePage'>Puzzle</h1>
            <h1 className={styles.title5} id='HomePage'>Puzzle</h1>
          </header>
          <div>
            <GetImageForm />
            <MiniGame />
          </div>
        </div>
      </IdSwapContext.Provider>
    </ImageContext.Provider>
  );
}

export default App;

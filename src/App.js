import styles from './App.module.css';
import MiniGame from './components/MiniGame';
import Navigation from './components/Navigation';
import { ImageContext } from './components/Context/ImageContext';
import { useState } from 'react';
import { GetImageForm } from './components/GetImageForm';

function App() {
  const [image, setImage] = useState("https://preview.redd.it/fewie53uy3x51.png?auto=webp&s=8302248a9dc487d4ad026a25e1288d5fe8d76deb")

  return (
    <ImageContext.Provider value={{image, setImage}}>
      <div className={styles.App}>
        <Navigation />
        <GetImageForm />
        <MiniGame />
      </div>
    </ImageContext.Provider>
  );
}

export default App;

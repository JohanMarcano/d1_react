// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

// Importa las imágenes
import dogImage1 from './assets/img/beagle.jpg';
import dogImage2 from './assets/img/border.jpg';
import dogImage3 from './assets/img/husky.jpg';
import dogImage4 from './assets/img/pastor.jpg';


function App() {
  // const [count, setCount] = useState(0)
  
  const title = "Adopta un perrito";
  
  const dogData1 = {
    image: dogImage1,
    name: 'Bartolo',
    description: 'Lleno de alegria y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!',
    tags: [
      { text: 'Juguetón', backgroundColor: 'success' },
      { text: 'Amigable', backgroundColor: 'info' },
    ],
    buttonLabel: 'Husky',
    buttonBackgroundColor: 'success', 
    buttonOnClick: () => alert('¡Has adoptado a Bartolo!'),
  };

  const dogData2 = {
    image: dogImage2,
    name: 'Messi',
    description: 'Es juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!',
    tags: [
      { text: 'Activo', backgroundColor: 'warning' },
      { text: 'Cariñoso', backgroundColor: 'danger' },
    ],
    buttonLabel: 'Messi',
    buttonBackgroundColor: 'primary', 
    buttonOnClick: () => alert('¡Has adoptado a Messi!'),
  };

  const dogData3 = {
    image: dogImage3,
    name: 'Gohan',
    description: 'Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional',
    tags: [
      { text: 'Juguetón', backgroundColor: 'success' },
      { text: 'Inteligente', backgroundColor: 'primary' },
    ],
    buttonLabel: 'Gohan',
    buttonBackgroundColor: 'danger', 
    buttonOnClick: () => alert('¡Has adoptado a Gohan!'),
  };

  const dogData4 = {
    image: dogImage4,
    name: 'Princesa',
    description: 'Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!',
    tags: [
      { text: 'cariñosa', backgroundColor: 'success' },
      { text: 'Inteligente', backgroundColor: 'primary' },
    ],
    buttonLabel: 'Princesa',
    buttonBackgroundColor: 'warning', 
    buttonOnClick: () => alert('¡Has adoptado a Princesa!'),
  };

  return (
    <>
      <div> <Header title={title} /></div>
      <div className='container'>
      <MyCard {...dogData1} />
      <MyCard {...dogData2} />
      <MyCard {...dogData3} />
      <MyCard {...dogData4} />
     </div>
     <Footer />
    </>
  )
}

export default App

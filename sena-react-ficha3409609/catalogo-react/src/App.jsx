import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Producto from "./components/Producto";
import "./App.css";

function App() {
  return (
    <main className="app">
      <h1>Wonder Beauty Shop</h1>

      <section className="catalogo">
        <Producto
          nombre="Labial mate"
          descripcion="Producto para catálogo de belleza."
          precio="$18.000"
          imagen="https://s3.ppllstatics.com/mujerhoy/www/multimedia/2026/04/28/labial-satinado-merit-maquillaje-kbiG--650x650@Mujer%20Hoy.jpg"
        />

        <Producto
          nombre="Crema facial"
          descripcion="Crema hidratante para el rostro."
          precio="$25.000"
          imagen="https://tse2.mm.bing.net/th/id/OIP.wtR9xL8bX4Rgr9r3f-mdmQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        />

        <Producto
          nombre="Perfume"
          descripcion="Perfume floral para mujer."
          precio="$45.000"
          imagen="https://cdn.pixabay.com/photo/2017/09/06/12/05/perfume-2721147_1280.jpg"
        />
      </section>
    </main>
  );
}

export default App;
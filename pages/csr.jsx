import { getProducts } from "@/lib/api";
import { useEffect, useState } from "react";

// Client Side Rendering
export default function CSR() {
  const [products, setProducts] = useState([]);


  // Lo que esta dentro de un useEfect siempre se renderiza del lado del cliente 
  // Lo que esta afuera o que no depende de nada como un h1, se carga directamente en el lado del servidor 

  // Si se van a usar apis dentro de un navegador hay que usarlas dentro de un navegador o de un eventHandler
  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function clickHandler() {
    localStorage.setItem('x', 'x')
    const x = localStorage.getItem('x')
    console.log('x:', x)
  }
// El primer renderizado se sejecuta en el servidor, y despues se ejecuta en el cliente
// el numero de veces hasta que todo ha sido renderizado
  console.log('Holaaa', products)
  return (
    <main>
      <h1>Productos: </h1>
      <button onClick={clickHandler}>Dame click</button>
      {products.map((product, idx) => {
        return (
          <article key={`prod-${idx}`}>
            <img src={product.thumbnail} alt="IMagen" />
            <p>{product.title}</p>
          </article>
        );
      })}
    </main>
  );
}

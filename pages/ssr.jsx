import { getProducts } from "@/lib/api";
import { useEffect, useState } from "react";

// Client Side Rendering
export default function SSR(props) {

  //console.log('Holaaa', products)
  return (
    <main>
      <h1>{props.message}</h1>
      <h1>Productos: </h1>
      
      {props.products.map((product, idx) => {
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

// Server side rendering
// Se ejecuta en cada request a la pagina
// Se ejecuta en el servidor

 export async function getServerSideProps() {
  console.log("Hola desde getServerSideProps");
  const products = await getProducts()
  return {props: {
    message: "Hola desde SSR",
    products: products
  }}
}

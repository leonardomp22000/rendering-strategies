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

// No se ejecuta en cada request a la pagina
// Se ejecuta en el servidor al hacer el build de l proyecto

export async function getStaticProps() {
  console.log("Hola desde getStaticProps");
  const products = await getProducts();
  return {
    props: {
      message: "Hola desde SSG",
      products: products,
    },
    revalidate: 15,
  };
}

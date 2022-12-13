import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Goku", "Vegeta"]);

  const onAddCategory = ()=>{

      setCategories([...,''])
  }

 
  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <button onClick={onAddCategory}>Agregar</button>
      {/* Listado de Gif */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/*Item Gif */}
    </>
  );
};


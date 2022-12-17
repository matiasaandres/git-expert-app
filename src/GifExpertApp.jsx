import { useState } from "react";
import AddCategory from "./components/AddCategory";



export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Goku", "Vegeta"]);

  const onAddCategory = ()=>{

      setCategories([...categories,'Bulma'])
  }

 
  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      <AddCategory onAddCategory={setCategories}/>


    
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


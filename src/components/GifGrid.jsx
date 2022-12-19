import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {

const [imagenes,setImagenes] =useState([]);

const getIamges = async()=>{
const newImages = await getGifs(category);
setImagenes(newImages);
}

  useEffect(() => {
    getIamges();
  }, []);

  return <>
  
  <h3>{category}</h3>
  
  <ol>
    {imagenes.map(({id,title})=>(

    <li key={id}>{title}</li>

    ))
    }

    

  </ol>
  </>;
};

export default GifGrid;

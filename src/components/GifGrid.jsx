import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "../components/GifGridItem";

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
  
  <div className="card-grid">
    {imagenes.map((image)=>(

    <GifGridItem 
    key={image.id} 
    {...image}
    />

    ))
    }

    

  </div>
  </>;
};

export default GifGrid;

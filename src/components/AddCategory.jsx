import { useState } from "react";
const AddCategory = ({setCategories}) => {
  const [inputValue, setinpuntValue] = useState("");

  const onInputChange = ({ target }) => {
    setinpuntValue(target.value);
  };

  const onSubmit =(event)=>{
    event.preventDefault();
    setCategories(categories=>  [...categories,inputValue ]);
    
  }
  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
      }}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;

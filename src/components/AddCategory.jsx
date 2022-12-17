import { useState } from "react";
const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInpuntValue] = useState("");

  const onInputChange = ({ target }) => {
    setInpuntValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    onNewCategory(inputValue.trim());
  };
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

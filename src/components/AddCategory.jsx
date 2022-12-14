import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInpuntValue] = useState("");

  const onInputChange = ({ target }) => {
    setInpuntValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    setInpuntValue('');
    onNewCategory(inputValue.trim());
  };
  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
      }}
       aria-label="form"
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

AddCategory.propTypes = {

  onNewCategory: PropTypes.func.isRequired

}
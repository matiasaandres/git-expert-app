import { fireEvent, render,screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Prueba del Componete AddCategory", () => {
  test("debe de cambiar el valor de la caja de texto", () => {


    render(<AddCategory onNewCategory={()=>{}}/>);
    const input = screen.getByRole('textbox');

    fireEvent.input(input,{target:{value:'Goku'}});
    
    expect(input.value).toBe('Goku');

  });

test('debe de llmar onNewCategory si  el inpout tiene un valor', () => { 

const inputValue = 'Goku';
const onNewCategory = jest.fn();  // simula la funcion   


render(<AddCategory onNewCategory={onNewCategory}/>);

const input = screen.getByRole('textbox');
const form = screen.getByRole('form');

fireEvent.input(input,{target:{value:inputValue}});
fireEvent.submit(form);
//screen.debug();

expect(input.value).toBe('');

// evalua que esta funcion sea llamada
expect(onNewCategory).toHaveBeenCalled();

// evalua que esta funcion sea llamada solo una vez
expect(onNewCategory).toHaveBeenCalledTimes(1);

// Evalua que la funcion sea llamda con el valor Goku  frl inputValur
expect(onNewCategory).toHaveBeenCalledWith(inputValue);
 });


 test('No debe de llmar el onNerwCategory si el input esta vacio', () => {



    
  })
 

});

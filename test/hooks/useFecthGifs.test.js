import { renderHook }  from '@testing-library/react';
import {useFetchGifs}  from '../../src/hooks/useFetchGifs';


describe('Prueba en Hook useFetchGifs', () => {

test('debe de regresar el estado inicial', () => { 

const {result} = renderHook(()=> useFetchGifs('Goku'));

console.log(result);

 });

 });
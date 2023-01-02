import { renderHook,waitFor }  from '@testing-library/react';
import {useFetchGifs}  from '../../src/hooks/useFetchGifs';


describe('Prueba en Hook useFetchGifs', () => {

test('debe de regresar el estado inicial', () => { 

const {result} = renderHook(()=> useFetchGifs('Goku'));

const {images, isLoading} = result.current;
expect(images.length).toBe(0);
expect(isLoading).toBeTruthy();

 });

 test('debe de regresar un arreglo de imagenes y el isLoading = false', async() => { 

    //renderHook para llamar al hook
    const {result} = renderHook(()=> useFetchGifs('Goku'));
    
    //Esperamos que se carguen las imagenes 
    await waitFor(
        ()=> expect(result.current.images.length).toBeGreaterThan(0)
    );

    const {images, isLoading} = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
    
     });

 });
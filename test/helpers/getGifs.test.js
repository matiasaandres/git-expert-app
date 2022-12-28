import { getGifs } from "../../src/helpers/getGifs";

describe('Prueba del helpers getGifs', () => {


    test('debe retornar un arreglo de gifs', async() => { 

       const gifs = await getGifs('Goku');

       // evalua que el largo del arrglo gifs sea mayor que 0  toBeGreaterThan(0)
      expect( gifs.length).toBeGreaterThan(0);
      // evalua un objeto del api con la siguiente estructura
      expect(gifs[0]).toEqual({
        id: expect.any(String) , // evalua un string  sin importar el valor
        title: expect.any(String),
        url: expect.any(String)
      });


     });
 });
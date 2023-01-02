import { render,screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Prueba el component <GifExpertApp/>', () => { 

    test('Debe hacer mach con el snapshot', () => { 

       const {container} = render(<GifExpertApp/> );

       expect(container).toMatchSnapshot();

     });
     
 })
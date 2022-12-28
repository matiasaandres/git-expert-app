import { GifGridItem } from "../../src/components/GifGridItem";
import { render,screen } from "@testing-library/react";
describe("Pruebas en <GifGridItem />", () => {

    const title = "Saitama";
    const url = "https://one-punch.com/saitama";

  test("Debe hacer mach con el snapshot", () => {

    const { container } = render(<GifGridItem title={title} url={url} />);
    
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el url y el alt indicado", () => {
    
    render(<GifGridItem title={title} url={url} />);

    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    const {src,alt} = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);

  });


  test('debe de mostrar el title en el component', () => { 
 
    render(<GifGridItem title={title} url={url} />);

    // Evalua que el elmento title exista toBeTruthy()
    expect(screen.getByText(title)).toBeTruthy();


   });
});

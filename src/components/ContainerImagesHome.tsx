import { Parallax } from "react-scroll-parallax";
import Container from "../styled-components/Container.styled";
import Card from "./Card";
import { StickyImageCard } from "./StickyImage";

interface Content {
  id: number;
  title: string;
  body: string;
  image: string; // Ruta de la imagen
  hoverImage: string; // Ruta de la imagen en hover
  parallaxImage: string; // Ruta de la imagen para parallax
  logo: React.ReactNode; // Componente de logo
  borderColor: string; // Color del borde
  buttonText: string;
}

const ContainerImagesHome = ({ content }: { content: Content[] }) => {
  return (
    <Container>
      {content.map((item, index: number) => (
        <div key={index}>
          <Parallax
            speed={-5}
            translateX={index % 2 === 0 ? ["0px", "25px"] : ["0px", "25px"]}
            scale={[0.8, 1]}
          >
            <StickyImageCard image={item.parallaxImage} index={index} />
          </Parallax>
          <Parallax
            speed={-10}
            translateX={index % 2 === 0 ? ["25px", "0px"] : ["-25px", "0px"]}
            scale={[0.8, 1]}
          >
            <Card item={item} />
          </Parallax>
        </div>
      ))}
    </Container>
  );
};

export default ContainerImagesHome;

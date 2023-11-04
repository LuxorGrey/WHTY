import { Parallax } from "react-scroll-parallax";
import Container from "../styled-components/Container.styled";
import Card from "./Card";
import { StickyImageCard } from "./StickyImage";
import content from "./content";

const ContainerImagesHome = () => {
  return (
    <Container>
      {content.map((item, index: number) => (
        <div key={index}>
          <Parallax
            speed={-5}
            translateX={index % 2 === 0 ? ["25px", "0px"] : ["0px", "25px"]}
            scale={[0.75, 0.9]}
          >
            <StickyImageCard image={item.parallaxImage} index={index} />
          </Parallax>
          <Parallax
            speed={-10}
            translateX={index % 2 === 0 ? ["25px", "0px"] : ["-25px", "0px"]}
            scale={[0.95, 1]}
          >
            <Card item={item} />
          </Parallax>
        </div>
      ))}
    </Container>
  );
};

export default ContainerImagesHome;

import { useNavigate } from "react-router-dom";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import StickyImageBackground from "./components/BackgroundImage";
import Card from "./components/Card";
import Cards3D from "./components/Cards3D";
import ParallaxImageWithText from "./components/LandingImage";
import { StickyImageCard } from "./components/StickyImage";
import content from "./components/content";
import Container from "./styled-components/Container.styled";
import Drop from "./assets/image/drop.png";
interface ParallaxProps {
  theme: string;
}
const Homepage = ({ theme }: ParallaxProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <ParallaxProvider>
        <ParallaxImageWithText theme={theme} />
        <Cards3D />
        <Parallax
          speed={-45}
          scale={[1, 0.8]}
          translateY={["-1500px", "1500px"]}
        >
          <StickyImageBackground image={Drop} />
        </Parallax>
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
                translateX={
                  index % 2 === 0 ? ["25px", "0px"] : ["-25px", "0px"]
                }
                scale={[0.95, 1]}
              >
                <Card item={item} />
              </Parallax>
            </div>
          ))}
        </Container>
      </ParallaxProvider>
      <button onClick={() => navigate("/secondpage")}>Click here</button>
    </div>
  );
};

export default Homepage;

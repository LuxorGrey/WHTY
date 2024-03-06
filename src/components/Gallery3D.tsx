import { IsDarkProps } from "../components/types/isDarkType.ts";
import GalleryHeader from "./GalleryHeader.tsx";
import GalleryPortfolio from "./GalleryPorfolio.tsx";

const Gallery3DPage = ({ isDark }: IsDarkProps) => {
  console.log(isDark);
  return (
    <div>
      <GalleryHeader
        title="3D Art"
        description="WHAITY se ha especializado en la creación de modelos orgánicos e inorgánicos, así como en la producción de videoclips para artistas. Destaca su habilidad para integrar elementos 3D en producciones audiovisuales."
      />
      <GalleryPortfolio items={[]} />
    </div>
  );
};

export default Gallery3DPage;

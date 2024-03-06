import GalleryHeader from "./GalleryHeader.tsx";
import GalleryPortfolio from "./GalleryPorfolio.tsx";
import { IsDarkProps } from "./types/isDarkType.ts";

const GalleryVideoclipsPage = ({ isDark }: IsDarkProps) => {
  console.log(isDark);
  return (
    <div>
      <GalleryHeader
        title="Videoclips"
        description="WHAITY ha participado en una amplia gama de producciones y ha creado promociones visuales para diversos artistas. Ha colaborado con artistas reconocidos internacionalmente, aportando una visión única a cada proyecto."
      />
      <GalleryPortfolio items={[]} />
    </div>
  );
};

export default GalleryVideoclipsPage;

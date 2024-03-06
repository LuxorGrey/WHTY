import GalleryHeader from "./GalleryHeader.tsx";
import GalleryPortfolio from "./GalleryPorfolio.tsx";
import { IsDarkProps } from "./types/isDarkType.ts";

const GalleryImagesPage = ({ isDark }: IsDarkProps) => {
  console.log(isDark);
  return (
    <div>
      <GalleryHeader
        title="Images"
        description="WHAITY ha dejado su marca en el mundo del fotomontaje, la creación de portadas de discos y el diseño para revistas. Su enfoque innovador y su atención al detalle le han permitido crear imágenes impactantes que capturan la esencia de sus clientes."
      />
      <GalleryPortfolio items={[]} />
    </div>
  );
};

export default GalleryImagesPage;

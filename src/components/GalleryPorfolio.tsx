import Gallery from "react-photo-gallery";
interface GalleryPortfolioProps {
  items: { src: string; width: number; height: number }[];
}

const GalleryPortfolio = ({ items }: GalleryPortfolioProps) => {
  return (
    <div>
      <Gallery photos={items} />;
    </div>
  );
};

export default GalleryPortfolio;

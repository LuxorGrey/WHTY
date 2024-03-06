import { useNavigate } from "react-router-dom";
import {
  MenuContainer,
  MenuItem,
  PageTitle,
  PortfolioHeader,
  PortfolioPage,
  SeparatorVertical,
} from "../styled-components/GalleryHeader.styled";
import { TextHeader } from "../styled-components/LandingText.styled";

interface GalleryHeaderProps {
  title: string;
  description: string;
}

const GalleryHeader = ({ title, description }: GalleryHeaderProps) => {
  const navigate = useNavigate();
  const handleItemClick = (item: string) => {
    navigate(item);
  };
  return (
    <PortfolioPage>
      <PortfolioHeader>
        <MenuContainer>
          <MenuItem onClick={() => handleItemClick("/videoclips")}>
            VIDEOS
          </MenuItem>
          <SeparatorVertical />
          <MenuItem onClick={() => handleItemClick("/3d")}>3D</MenuItem>
          <SeparatorVertical />
          <MenuItem onClick={() => handleItemClick("/images")}>IMAGES</MenuItem>
        </MenuContainer>
        <PageTitle>
          <TextHeader>{title}</TextHeader>
          <p>{description}</p>
        </PageTitle>
      </PortfolioHeader>
    </PortfolioPage>
  );
};

export default GalleryHeader;

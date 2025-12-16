import { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LayoutWrapper, MainContent } from "../styled-components/Layout.styled";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default AppLayout;

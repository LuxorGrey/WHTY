import { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PreLoader from "./PreLoader";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <ParallaxProvider>
      <PreLoader />
      <Header />
      {children}
      <Footer />
    </ParallaxProvider>
  );
};

export default AppLayout;

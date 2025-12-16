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
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <PreLoader />
        <Header />
        <div
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "20px" /* Added top spacing */,
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default AppLayout;

import { JSX } from "solid-js";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

type BaseLayoutProps = {
  children: JSX.Element;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div class="w-full h-full min-h-screen flex flex-col justify-between items-center">
      <Header />
      <main class="w-full h-full">{children}</main>
      <Footer />
    </div>
  );
}

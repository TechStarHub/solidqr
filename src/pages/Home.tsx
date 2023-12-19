import BaseLayout from "../layouts/BaseLayout";
import QRGenerator from "../components/QRGenerator/QRGenerator";

export default function Home() {
  return (
    <BaseLayout>
      <div class="container mx-auto flex justify-center items-center ">
        <QRGenerator />
      </div>
    </BaseLayout>
  );
}

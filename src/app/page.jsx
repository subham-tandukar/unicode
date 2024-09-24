import MainLayout from "@/components/mainLayout";
import Breadcrumb from "@/components/breadcrumb";
import UnicodeConverter from "@/components/unicodeConverter";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Breadcrumb currentPage="Nepali Unicode" />
        <UnicodeConverter />
      </MainLayout>
    </>
  );
}

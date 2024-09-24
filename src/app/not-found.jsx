import Breadcrumb from "@/components/breadcrumb";
import MainLayout from "@/components/mainLayout";
import PageNotFound from "@/components/pageNotFound";

export default function NotFound() {
  return (
    <MainLayout>
      <Breadcrumb
        prevPage={[
          {
            pageName: "Unicode",
            endPoint: "/",
          },
        ]}
        currentPage="Page not found"
      />
      <PageNotFound />
    </MainLayout>
  );
}

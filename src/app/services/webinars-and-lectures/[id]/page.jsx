// components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Webinars from '@/components/Webinars/Webinars';
import { strapiApi } from '@/api';

export async function generateStaticParams() {
  const programsList = await strapiApi.get(`/api/webbinarrs?populate=*`);

  return programsList.data.data.map((webinar) => ({
    id: webinar.id.toString(),
  }));
}

const ServicesProgramsList = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <Header />
      <Webinars id={id} />
      <Footer />
    </div>
  );
};

export default ServicesProgramsList;

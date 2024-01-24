// components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Webinars from '@/components/Webinars/Webinars';

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

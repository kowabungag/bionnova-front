// components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Programs from '@/components/Programs/Programs';

const ServicesProgramsList = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <Header />
      <Programs id={id} />
      <Footer />
    </div>
  );
};

export default ServicesProgramsList;

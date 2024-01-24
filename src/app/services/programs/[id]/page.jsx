// components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Programs from '@/components/Programs/Programs';
// import { strapiApi } from '@/api';

// export async function generateStaticParams() {
//   const programsList = await strapiApi.get(`/api/courses?populate=*`);

//   return programsList.data.data.map((post) => ({
//     id: post.id.toString(),
//   }));
// }

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

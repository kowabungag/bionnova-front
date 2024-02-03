import Webinars from '@/components/Webinars/Webinars';

const ServicesProgramsList = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <Webinars id={id} />
    </div>
  );
};

export default ServicesProgramsList;

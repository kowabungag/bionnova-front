import Programs from '@/components/Programs/Programs';

const ServicesProgramsList = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <Programs id={id} />
    </div>
  );
};

export default ServicesProgramsList;

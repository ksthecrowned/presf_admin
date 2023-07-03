import Breadcrumb from '../components/Breadcrumb';
import ServiceCard from '../components/ServiceCard';
import DefaultLayout from '../layout/DefaultLayout';

const services = [
  {
    key: 1,
    title: "Payement Abonnement Canal+",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto velit porro omnis soluta et delectus pariatur, quis doloremque odio quam nihil, dolore culpa tempora excepturi sint laudantium ab facilis numquam!"
  },
  {
    key: 2,
    title: "Recharge de carte prépayée",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto velit porro omnis soluta et delectus pariatur, quis doloremque odio quam nihil, dolore culpa tempora excepturi sint laudantium ab facilis numquam!"
  },
  {
    key: 3,
    title: "Change de devise",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto velit porro omnis soluta et delectus pariatur, quis doloremque odio quam nihil, dolore culpa tempora excepturi sint laudantium ab facilis numquam!"
  }
]

const Services = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Autres services" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 2xl:gap-7.5">
        {
          services.map(service => {
            return (
              <ServiceCard key={service.key} service={service} />
            )
          })
        }
      </div>
    </DefaultLayout>
  );
};

export default Services;

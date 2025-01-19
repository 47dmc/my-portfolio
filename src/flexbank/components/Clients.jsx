import { clients } from "../constants";

const Clients = () => (
  <section className="my-4 px-6 sm:px-12 md:px-24 lg:px-32">
    <div className="flex justify-between items-center flex-wrap w-full">
      {clients.map((client) => (
        <div key={client.id} className="sm:min-w-[192px] min-w-[120px] m-5">
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
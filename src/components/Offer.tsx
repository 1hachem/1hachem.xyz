type BlockProps = {
  name: string;
  description?: string;
  price?: string;
  className?: string;
};

const BlockText = ({ name, description, price }: BlockProps) => {
  return (
    <div className="relative py-6 px-9 flex flex-col justify-between h-full">
      <div>
        <h1 className="md:text-5xl text-4xl font-stora break-all">{name}</h1>
        <br />
        <p className="text-2xl">{description}</p>
      </div>
      <p className="text-3xl py-10">{price}</p>
    </div>
  );
};

const Offer = ({ name, description, price, className }: BlockProps) => {
  return (
    <div
      className={`${className} col-span-1 row-span-1 rounded-3xl backdrop-blur-3xl dark:backdrop-blur-3xl border-2 border-black dark:border-white`}
    >
      <BlockText name={name} description={description} price={price} />
    </div>
  );
};

export default Offer;

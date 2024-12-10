const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 text-center mx-auto my-8">
      <p className="text-orange-500 mb-3">--- {subHeading} ---</p>
      <h3 className="text-3xl font-medium uppercase border-y-2 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;

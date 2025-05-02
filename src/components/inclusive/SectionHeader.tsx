
type SectionHeaderProps = {
  title: string;
  description: string;
};

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <>
      <h2 className="portfolio-heading text-center">{title}</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;

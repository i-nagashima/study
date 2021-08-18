export const Header = (props) => {
  const { header } = props;
  return (
    <>
      <div>
        <h1 className="bg-primary px-3 text-white display-4 text-right">{header}</h1>
      </div>
    </>
  );
};

export const Footer = (props) => {
  const { footer } = props;
  return (
    <>
      <div className="text-center h6 my-4">
        <div>{footer}</div>
      </div>
    </>
  );
};

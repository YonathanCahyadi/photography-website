type HeadingProps = {
  backgroundUrl: string;
  text: string;
};

function Heading({ backgroundUrl, text }: HeadingProps) {
  return (
    <div className="heading" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <h1>{text}</h1>
    </div>
  );
}

export default Heading;

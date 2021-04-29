type SubHeadingProps = {
  title: string;
};

function SubHeading({ title }: SubHeadingProps) {
  return (
    <div className="sub-title">
      <div className="heading-2">{title}</div>
      <div className="divider"></div>
    </div>
  );
}

export default SubHeading;

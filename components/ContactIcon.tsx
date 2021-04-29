type ContactIconProps = {
  imgLocation: string;
  link?: string;
  name?: string;
};

function ConctactIcon({ imgLocation, link, name }: ContactIconProps) {
  if (link) {
    return (
      <a href={link}>
        <div className="details-footer-container">
          <img className="icon" src={imgLocation} />
          {name && <span>{name}</span>}
        </div>
      </a>
    );
  }

  return (
    <div className="details-footer-container">
      <img className="icon" src={imgLocation} />
      {name && <span>{name}</span>}
    </div>
  );
}

export default ConctactIcon;

type ContactIconProps = {
  imgLocation: string;
  link?: string;
  name?: string;
  imgAlt: string;
};

function ConctactIcon({ imgLocation, link, name, imgAlt }: ContactIconProps) {
  if (link) {
    return (
      <a href={link}>
        <div className="details-footer-container">
          <img className="icon" src={imgLocation} alt={imgAlt} />
          {name && <span>{name}</span>}
        </div>
      </a>
    );
  }

  return (
    <div className="details-footer-container">
      <img className="icon" src={imgLocation} alt={imgAlt} />
      {name && <span>{name}</span>}
    </div>
  );
}

export default ConctactIcon;

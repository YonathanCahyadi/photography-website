type ImageCardProps = {
  externalUrl: string;
  user: string;
  userLink: string;
  imgLinks: string;
  imgAlt: string;
};

function ImageCard({ externalUrl, imgLinks, imgAlt, user, userLink }: ImageCardProps) {
  return (
    <div className="image-card">
      <div onClick={() => window.open(externalUrl)} className="image-card-img-container">
        <img src={imgLinks} alt={imgAlt} />
      </div>

      <div className="image-card-text-container">
        <div className="image-card-text">
          <span onClick={() => window.open(userLink)}>{user}</span>
          {" on "}
          <span onClick={() => window.open("https://unsplash.com/")}>Unsplash</span>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;

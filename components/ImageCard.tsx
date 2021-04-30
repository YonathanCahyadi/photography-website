type ImageCardProps = {
  externalUrl: string;

  imgLinks: string;
  imgAlt: string;
};

function ImageCard({ externalUrl, imgLinks, imgAlt }: ImageCardProps) {
  return (
    <div onClick={() => window.open(externalUrl)} className="image-showcase">
      <img src={imgLinks} alt={imgAlt} />
    </div>
  );
}

export default ImageCard;

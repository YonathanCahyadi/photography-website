import { GetServerSideProps } from "next";
import ImageCard from "../components/ImageCard";
import SubHeading from "../components/SubHeading";
import formatUnsplashData from "../libs/formatUnsplashData";
import queryUnplash from "../libs/query";
import { UnplashFormattedData } from "../types/UnsplashFormattedData";

export const getServerSideProps: GetServerSideProps = async () => {
  let formattedData: UnplashFormattedData[] = [];

  try {
    const res = await queryUnplash(
      "/photos/random",
      {
        query: "nature",
        content_filter: "low",
        count: 12
      },
      1000
    );

    // format the data
    formattedData = res.data.map((photo) => formatUnsplashData(photo));
  } catch (err) {
    if (err.response) {
      console.log(`${err.response.status} --- ${err.response.statusText}`);
    } else {
      console.log("Query is too long, canceled.");
    }
  }

  return {
    props: {
      data: formattedData
    }
  };
};

function Home({ data }: { data: UnplashFormattedData[] }) {
  return (
    <div id="home-page">
      <div id="welcome-segment" className="segment">
        <div className="quotes">Capture the Moments</div>
      </div>

      <div id="introduction-segment" className="segment">
        <SubHeading title="A little bit about us" />
        <div className="segment-content">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum, odio id accumsan cursus, enim nulla accumsan risus, sed porta
            quam magna in nunc. Phasellus interdum quis diam vel rhoncus. Integer cursus lectus eu lacinia condimentum. Mauris non diam justo. Duis ut
            aliquet erat. Cras gravida risus eu elit molestie cursus. Integer volutpat augue nec turpis pellentesque condimentum. Proin ligula nibh,
            porttitor eu ante sit amet, tincidunt ultricies ex. Morbi ac pellentesque ipsum, id sagittis lacus. Fusce pretium leo in turpis consequat
            feugiat a non ex.
          </div>
          <div>
            Nullam eget lacinia massa. Ut finibus, tortor a tincidunt posuere, enim ipsum consequat lorem, sit amet ornare nisl orci nec orci.
            Pellentesque nec dui dui. Fusce tellus enim, porttitor eget commodo vel, accumsan quis arcu. Nunc eleifend tempor leo, nec mollis quam
            finibus id. Donec eget metus at urna malesuada tempus ut eget ante. Morbi fringilla sed erat eget volutpat. Sed vulputate magna lorem,
            cursus egestas elit blandit nec.
          </div>
        </div>
      </div>

      <div id="featured-segment" className="segment">
        <SubHeading title="Featured works" />
        <div className="images-showcase">
          {data.length !== 0 ? (
            data.map((photo) => (
              <ImageCard
                key={photo.id}
                externalUrl={photo.url}
                user={photo.user}
                userLink={photo.userLink}
                imgLinks={photo.links}
                imgAlt={photo.alt}
              />
            ))
          ) : (
            <div>Sorry, no images to showcase.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

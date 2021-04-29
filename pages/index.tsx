import { GetServerSideProps } from "next";
import SubHeading from "../components/SubHeading";
import queryUnplash from "../libs/query";

export const getServerSideProps: GetServerSideProps = async () => {
  let formattedData = [];

  try {
    const res = await queryUnplash("/photos/random", {
      query: "nature",
      content_filter: "high",
      count: 12
    });

    // format the data
    formattedData = res.data.map((photo) => ({
      id: photo.id,
      links: photo.urls.small,
      createdAt: photo.created_at,
      alt: photo.alt_description,
      url: photo.links.html
    }));
  } catch (err) {
    console.log(`${err.response.status} --- ${err.response.statusText}`);
  }

  return {
    props: {
      data: formattedData
    }
  };
};

function Home({ data }) {
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
              <div onClick={() => window.open(photo.url)} className="image-showcase" key={photo.id}>
                <img src={photo.links} alt={photo.alt} />
              </div>
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

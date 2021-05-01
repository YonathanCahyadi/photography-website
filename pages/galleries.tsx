import { GetServerSideProps } from "next";
import { useState } from "react";
import { useDidMountEffect } from "../libs/useDidMountEffect";
import Heading from "../components/Heading";
import ImageCard from "../components/ImageCard";
import queryUnplash from "../libs/query";
import { UnplashFormattedData } from "../types/UnsplashFormattedData";
import formatUnsplashData from "../libs/formatUnsplashData";

export const getServerSideProps: GetServerSideProps = async () => {
  let formattedData: UnplashFormattedData[] = [];

  try {
    const res = await queryUnplash(
      "/photos/random",
      {
        count: 30
      },
      2000
    );

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

function Galleries({ data }: { data: UnplashFormattedData[] }) {
  const [query, setQuery] = useState("");
  const [imgData, setImgData] = useState({ [`random-${1}`]: data });
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [currentObjKey, setCurrentObjKey] = useState(`random-${1}`);

  const search = async (e = null) => {
    const formattedQuery = query.trim().toLocaleLowerCase();
    const newQuery = formattedQuery.length === 0 ? "random" : formattedQuery;
    const newObjKey = `${newQuery}-${pageNum}`;

    setCurrentObjKey(newObjKey);

    // don't search if data already stored in the state
    if (newObjKey in imgData) return;

    // search the query on the unspalsh api and store the result on the state
    try {
      const res = await queryUnplash("/search/photos", {
        query: newQuery,
        page: pageNum,
        per_page: 30,
        content_filter: "low"
      });

      const formattedData = res.data.results.map((photo) => formatUnsplashData(photo));

      setTotalPage(res.data.total_pages);
      setImgData((prevData) => ({ ...prevData, [newObjKey]: formattedData }));

      if (e !== null) e.preventDefault();
    } catch (err) {
      if (err.response) {
        console.log(`${err.response.status} --- ${err.response.statusText}`);
      } else {
        console.log("Query is too long, canceled.");
      }
    }
  };

  const displayImages = () => {
    if (!(currentObjKey in imgData)) return <div>Loading...</div>;
    if (imgData[currentObjKey].length === 0) return <div>Sorry, no images is found.</div>;
    return imgData[currentObjKey].map((photo) => (
      <ImageCard key={photo.id} imgLinks={photo.links} user={photo.user} userLink={photo.userLink} imgAlt={photo.alt} externalUrl={photo.url} />
    ));
  };

  useDidMountEffect(() => {
    search();
  }, [pageNum]);

  const decreasePageNum = (e) => {
    setPageNum((prevPageNum) => {
      if (prevPageNum - 1 <= 0) {
        return 1;
      }
      return prevPageNum - 1;
    });
    e.preventDefault();
  };

  const increasePageNum = (e) => {
    setPageNum((prevPageNum) => prevPageNum + 1);
    e.preventDefault();
  };

  return (
    <div id="galleries-page">
      <Heading backgroundUrl="galleries-bg-img.jpg" text="Galleries" />
      <div id="galleries-segment" className="segment">
        <form className="galleries-actions">
          <input type="text" placeholder="Enter your Query" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button type="button" id="search-btn" onClick={(e) => search(e)}>
            Search
          </button>
        </form>

        <div id="galleries-img">{displayImages()}</div>

        <div className="page-actions">
          {!(pageNum <= 1) && <button onClick={(e) => decreasePageNum(e)}>{"<<"}</button>}
          <span>{pageNum}</span>
          {!(pageNum >= totalPage) && <button onClick={(e) => increasePageNum(e)}>{">>"}</button>}
        </div>
      </div>
    </div>
  );
}

export default Galleries;

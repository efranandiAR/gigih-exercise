import { useState, useEffect } from "react";
import Gif from "../../components/Gif";

const Trending = () => {
  const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_KEY}&limit=20&rating=g`;

      const response = await fetch(url)
        .then((res) => res.json())
        .catch((e) => console.log(e));
      setTrend(response.data);
    };

    getData();
  }, [GIPHY_KEY]);

  return (
    <div className="gif-container">
      {trend.map((it) => (
        <Gif key={it.id} source={it.images.downsized.url} title={it.title} />
      ))}
    </div>
  );
};

export default Trending;

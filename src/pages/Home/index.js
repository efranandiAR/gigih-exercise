import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../../store/slice/querySlice";
import SearchBar from "../../components/SearchBar";
import { ImageList, ImageListItem } from "@mui/material";
import axios from "axios";

const Home = () => {
  const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
  const currQuery = useSelector((state) => state.query.value);
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const handleChange = (e) => {
    dispatch(set(e.target.value));
  };

  const getData = async () => {
    axios
      .get('https://api.giphy.com/v1/gifs/search', {params: {
        api_key: GIPHY_KEY,
        q: currQuery,
        limit: 12
      },
    })
    .then((response) => {
      console.log(response, "response");
      setResults(response.data.data);
    });
  };

  return (
    <>
      <SearchBar
        query={currQuery}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <br />
      <div className="gif-container">
      {/* {results.map((it) => (
        <Gif key={it.id} source={it.images.downsized.url} title={it.title} />
      ))} */}
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {results.map((item) => (
          <ImageListItem key={item.id} cols={item.cols || 1} rows={item.rows || 1}>
            <img src={item.images.downsized.url} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      </div>
    </>
  );
};

export default Home;

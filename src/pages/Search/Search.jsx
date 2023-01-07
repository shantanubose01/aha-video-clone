import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const debouce = (callback, delay) => {
  let id;
  return function () {
    clearTimeout(id);
    id = setTimeout(callback, delay);
  };
};

function debounce2(callBack, delay) {
  let debounceTimer;
  return function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(callBack, delay);
  };
}

const Search = () => {
  const [searchparams, setsearchparams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchparams.get("s") || "";
  useEffect(() => {
    console.log("useeffect");
    async function getData() {
      console.log("get");
      try {
        let res = await fetch(
          `https://www.omdbapi.com/?apikey=fafa77a7&s=${query}`
        );
        let { Search } = await res.json();
        console.log(Search);
        setMovies(Search);
      } catch (error) {
        console.log(error);
      }
    }
    // if(query.length > 0)
    // debouce(getData, 500);
    debounce2(getData, 500)();
  }, [searchparams]);

  const handleChange = (e) => {
    let value = e.target.value;
    setsearchparams({ s: value });
  };
  return (
    <div>
      <h1>Search</h1>
      <input type="text" value={query} onChange={handleChange} />
      <div>
        {movies?.map((e, i) => {
          return <h1 key={i}>{e.Title}</h1>;
        })}
      </div>
    </div>
  );
};

export default Search;

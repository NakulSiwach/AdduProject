import { differenceInDays, fromUnixTime } from "date-fns";
import { useState } from "react";
import "./App.scss";
import { Movie, movies } from "./movies";

function App() {
  const [leftList, setLeftList] = useState(movies);
  const [rightList, setRightList] = useState([]);
  const [search, setSearch] = useState("");

  //  type movie = {
  //   id: string;
  //   title: string;
  //   poster: string;
  //   overview: string;
  //   release_date: number;
  //   genres: string[];
  // };

  const onAddClick = (movie: Movie) => {
    rightList.push(movie);
    setRightList(rightList);

    const newLeftList = leftList.filter((item) => item.id !== movie.id);
    setLeftList(newLeftList);
  };

  const onRemoveClick = (movie: Movie) => {
    leftList.push(movie);
    setLeftList(leftList);

    const newRightList = rightList.filter((item) => item.id !== movie.id);
    setRightList(newRightList);
  };

  return (
    <div className="App">
      <div className="parent">
      <div className="left-movie-container">
        <div>
          <input
            className="search-input"
            placeholder="Type for searching 🔍"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {leftList.map((movie) => {
          if (!movie.title.includes(search)) {
            return false;
          }

          return (
            <div
              id="movie"
              // style={{ width: 400, height: 100, border: "1px solid black" }}
              // onMouseOver={(e) => {
              //   const el = e.currentTarget;
              //   let l = 0;
              //   function updateColor(newl: number) {
              //     l = newl;
              //     el.style.backgroundColor = `#64c864${20 + l * 5}`;
              //     if (l < 10) {
              //       setTimeout(() => updateColor(l + 1), 25);
              //     }
              //   }
              //   setTimeout(() => updateColor(l + 1), 25);
              // }}
              // onMouseLeave={(e) =>
              //   (e.currentTarget.style.backgroundColor = "#64c86420")
              // }
            >
              <div className="movie-image-container">
                <img className="movie-image" width="100px" height="100px" alt="poster"
                src={movie.poster}/>
              </div>

              <div className="movie-text-container">
              <div id="movie-title"> <h1>{movie.title}</h1></div>
              <div id="movie-description"> <p> {movie.overview} </p> </div>
              <div className="movie-date">
                <p> Released : {" "}
                {differenceInDays(new Date(), fromUnixTime(movie.release_date))}{" "}
                days ago
                </p>
              </div>
              {/* <button className="add-button" onClick={() => onAddClick(movie)}>
                Add
              </button> */}
              </div>

            </div>
          );
        })}
      </div>

      {/* // The right container begins here */}
      {/* <div id="right-movie-container">
        {rightList.map((movie) => {
          if (!movie.title.includes(search)) {
            return false;
          }

          return (
            <div
              id="movie"
              style={{ width: 400, height: 100, border: "1px solid black" }}
              onMouseOver={(e) => {
                const el = e.currentTarget;
                let l = 0;
                function updateColor(newl: number) {
                  l = newl;
                  el.style.backgroundColor = `#c86464${20 + l * 5}`;
                  if (l < 10) {
                    setTimeout(() => updateColor(l + 1), 25);
                  }
                }
                setTimeout(() => updateColor(l + 1), 25);
              }}
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#c8646420")
              }
            >
              <div id="movie-title">{movie.title}</div>
              <div>
                Release date:{" "}
                {differenceInDays(new Date(), fromUnixTime(movie.release_date))}{" "}
                days ago
              </div>
              <button id="remove-button" onClick={() => onRemoveClick(movie)}>
                Remove
              </button>
            </div>
          );
        })}
      </div> */}
      </div>
    </div>
  );
}

export default App;

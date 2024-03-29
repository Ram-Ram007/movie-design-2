//finall
import { useState } from "react";
import { IForm } from "../type";
import { Link } from "react-router-dom";
import LoadingIcon from "./Loading/LoadingIcon";

const Form: React.FC<IForm> = ({ handleAddMovie, emptyMovie, type }) => {
  const [movie, setMovie] = useState({
    title: emptyMovie.title,
    year: emptyMovie.year,
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
    console.log(movie);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    handleAddMovie(movie);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        <input
          type="text"
          id="title"
          name="title"
          value={movie.title}
          placeholder="Title"
          onChange={(e) => handleChange(e)}
          required
        />
      </label>

      <label htmlFor="year">
        Year
        <input
          type="number"
          id="year"
          name="year"
          value={movie.year?.toString() || ""}
          placeholder="Year"
          onChange={(e) => handleChange(e)}
          required
        />
      </label>

      {type === "edit" ? (
        <>
          <button type="submit" disabled={isLoading}>
            {isLoading && <LoadingIcon />}Save
          </button>
          <Link to="/" role="button" className="secondary">
            cancel
          </Link>
        </>
      ) : (
        <>
          <button type="submit" disabled={isLoading}>
            {isLoading && <LoadingIcon />} Add
          </button>
        </>
      )}
    </form>
  );
};
export default Form;

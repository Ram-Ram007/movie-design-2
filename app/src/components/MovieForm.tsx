import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { addMovie, updateMovie } from "../services/api";
import { IMovie } from "../type";

function MovieForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = id !== "add";

  const [movieData, setMovieData] = useState({
    title: "",
    year: "",
  });

  useEffect(() => {
    if (isEditing) {
      
    }
  }, [isEditing]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovieData({
      ...movieData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const moviePayload = {
        title: movieData.title,
        year: parseInt(movieData.year),
      };

      if (isEditing) {
        // Update the existing movie
        const response = await updateMovie(moviePayload, id);
        console.log("Movie updated:", response);
      } else {
        // Add a new movie
        const response = await addMovie(moviePayload);
        console.log("Movie added:", response);
      }

      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout title={isEditing ? "Edit Form" : "Add Form"}>
      <h1>{isEditing ? "Edit" : "Add"}</h1>
      <form>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            value={movieData.title}
            placeholder="Title"
            onChange={handleInputChange}
            required
          />
        </label>

        <label htmlFor="year">
          Year
          <input
            type="number"
            id="year"
            name="year"
            value={movieData.year}
            placeholder="Year"
            onChange={handleInputChange}
            required
          />
        </label>
        <div className="grid">
          <Link to="/">
            <button onClick={handleSubmit}>Submit</button>
          </Link>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </Layout>
  );
}

export default MovieForm;

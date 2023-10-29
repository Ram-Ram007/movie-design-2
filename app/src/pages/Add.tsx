import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { addMovie } from "../services/api";
import Form from "../components/MovieForm";
import { IMovieAdd } from "../type";
import { useState } from "react";
import DeleteDialog from "../components/DeleteDialog";

function AddForm() {
  const navigate = useNavigate();
  const movie = {
    title: "",
    year: 0,
  };

  const [isMovieAdded, setIsMovieAdded] = useState(false);

  async function handleAddMovie(movie: IMovieAdd) {
    try {
      const moviePayload = {
        title: movie.title,
        year: movie.year,
      };
      const response = await addMovie(moviePayload);
      console.log(response);
      setIsMovieAdded(true);
    } catch (error) {
      console.log("Errored");
      console.log(error);
    }
  }

  const closeAddSuccessDialog = () => {
    setIsMovieAdded(false);
    navigate("/");
  };

  return (
    <>
      <Layout title="addForm">
        <h1>AddForm</h1>
        <Form handleAddMovie={handleAddMovie} emptyMovie={movie} />
      </Layout>

      <DeleteDialog isOpen={isMovieAdded} onClose={closeAddSuccessDialog}>
        Successfully added
      </DeleteDialog>
    </>
  );
}

export default AddForm;

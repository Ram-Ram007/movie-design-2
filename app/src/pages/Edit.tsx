import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IEditForm, IMovieAdd } from "../type";
import Layout from "../components/layout";
import { updateMovie } from "../services/api";
import Form from "../components/MovieForm";
import Modal from "../components/DeleteDialog"; 

const EditForm: React.FC<IEditForm> = ({ movie }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editValue = {
    title: movie.title,
    year: movie.year,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("Getting info of ", id);
  }, [id]);

  async function handleEditMovie(editedmovie: IMovieAdd) {
    try {
      const response = await updateMovie(editedmovie, movie.id);
      console.log(response);
      setIsModalOpen(true); 
    } catch (error) {
      console.log(error);
    }
  }

  const closeModalAndNavigate = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <>
      <Layout title={`EditMovie${movie.title}`}>
        <Form
          handleAddMovie={handleEditMovie}
          emptyMovie={editValue}
          type="edit"
        />
      </Layout>

      <Modal isOpen={isModalOpen} onClose={closeModalAndNavigate}>
        Successfully edited
      </Modal>
    </>
  );
};

export default EditForm;

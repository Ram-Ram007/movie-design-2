import React from "react";

interface MovieDeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
}

const MovieDeleteDialog: React.FC<MovieDeleteDialogProps> = ({
  isOpen,
  onClose,
  onConfirmDelete,
}) => {
  return (
    <dialog open={isOpen}>
      <article>
        <header>
          <a
            aria-label="Close"
            className="close"
            onClick={onClose}
          ></a>
        </header>
        <p>Do you want to delete this movie?</p>
        <button onClick={onConfirmDelete}>Yes</button>
        <button onClick={onClose}>No</button>
      </article>
    </dialog>
  );
};

export default MovieDeleteDialog;

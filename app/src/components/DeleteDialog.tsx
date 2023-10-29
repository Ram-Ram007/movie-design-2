import React from "react";

interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <dialog open>
        <article>
          <header>
            <a aria-label="Close" className="close" onClick={onClose}></a>
          </header>
          <p>Successfully deleted</p>
        </article>
      </dialog>
    )
  );
};

export default DeleteDialog;

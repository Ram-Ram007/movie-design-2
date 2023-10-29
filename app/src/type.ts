export interface IMovieAdd {
  title: string;
  year: number;
}
export interface IMovie {
  id: number;
  title: string;
  year: number; 
}
export interface IShowError {
  action: string;
  msg: string;
}

//  export interface DeleteDialogProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children?: React.ReactNode;
// }
export interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface IEditForm {
  movie: IMovie;
}
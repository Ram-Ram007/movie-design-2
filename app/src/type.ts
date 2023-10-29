export interface IMovieAdd {
  title: string;
  year: number;
}
export interface IMovie {
  id: number;
  title: string;
  year: number; 
}
export interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface IEdit {
  movie: IMovie;
}
import genres from "../data/genres";

export interface Genre{
    //check endpoint required from RAWG API
    id: number;
    name: string;
    image_background: string;
}



const useGenres = () => ({data: genres, isLoading: false, error: null});

export default useGenres;
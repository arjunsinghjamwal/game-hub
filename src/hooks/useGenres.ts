import useData from "./useData";

export interface Genre{
    //check endpoint required from RAWG API
    id: number;
    name: string;
}



const useGenres = () => useData<Genre>('/genres');

export default useGenres;
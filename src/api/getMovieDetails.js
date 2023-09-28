import axios from "axios";
import options from "./options";

const getMovieDetails = async (movieId) => {
	const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, options);

	return response.data;
};

export default getMovieDetails;

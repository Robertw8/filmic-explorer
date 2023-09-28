import axios from "axios";
import options from "./options";

const getMovieCredits = async (movieId) => {
	const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options);

	return response.data;
};

export default getMovieCredits;

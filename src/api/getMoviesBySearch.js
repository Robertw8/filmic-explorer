import axios from "axios";
import options from "./options";

const getMoviesBySearch = async (query) => {
	const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, options);

	return response.data;
};

export default getMoviesBySearch;

import axios from "axios";
import options from "./options";

const getTrendingMovies = async () => {
	const response = await axios.get("https://api.themoviedb.org/3/trending/all/day?language=en-US", options);

	return response.data;
};

export default getTrendingMovies;

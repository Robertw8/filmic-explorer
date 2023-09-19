import axios from "axios";

const options = {
	key: "c8609f3031af17f3b342456ad86e6408",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODYwOWYzMDMxYWYxN2YzYjM0MjQ1NmFkODZlNjQwOCIsInN1YiI6IjY1MGExNGI3MGQ1ZDg1MDBmZGI3M2RhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ipI3Pd_5ekHHUBpr2gx4SiY6rLHQf5BlancvEdRZPiQ",
	},
};

export const getTrendingMovies = async () => {
	const response = await axios.get("https://api.themoviedb.org/3/trending/all/day?language=en-US", options);

	return response.data;
};

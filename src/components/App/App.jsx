import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "../SharedLayout/SharedLayout";
import Loader from "../Loader/Loader";

const Home = lazy(() => import("../../pages/Home"));
const Movies = lazy(() => import("../../pages/Movies"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const MovieDetails = lazy(() => import("../../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

const App = () => {
	return (
		<Suspense fallback={<Loader top='50%' />}>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path='movies' element={<Movies />} />
					<Route path='movies/:movieId/*' element={<MovieDetails />}>
						<Route path='cast' element={<Cast />} />
						<Route path='reviews' element={<Reviews />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;

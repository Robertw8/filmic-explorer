import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "../SharedLayout/SharedLayout";
import Loader from "../Loader/Loader";

const Home = lazy(() => import("../../pages/Home"));
const Movies = lazy(() => import("../../pages/Movies"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const MovieDetails = lazy(() => import("../MovieDetails/MovieDetails"));
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route
						index
						element={
							<Suspense fallback={<Loader top='50%' />}>
								<Home />
							</Suspense>
						}
					/>
					<Route
						path='movies'
						element={
							<Suspense fallback={<Loader top='50%' />}>
								<Movies />
							</Suspense>
						}
					/>
					<Route
						path='movies/:movieId/*'
						element={
							<Suspense fallback={<Loader top='50%' />}>
								<MovieDetails />
							</Suspense>
						}
					>
						<Route
							path='cast'
							element={
								<Suspense fallback={<Loader top='50%' />}>
									<Cast />
								</Suspense>
							}
						/>
						<Route
							path='reviews'
							element={
								<Suspense fallback={<Loader top='50%' />}>
									<Reviews />
								</Suspense>
							}
						/>
					</Route>
					<Route
						path='*'
						element={
							<Suspense fallback={<Loader top='50%' />}>
								<NotFound />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};

export default App;

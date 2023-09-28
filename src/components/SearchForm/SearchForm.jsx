import React, { useState, useEffect } from "react";
import { Input, SubmitButton } from "./SearchForm.styled";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
	const [inputValue, setInputValue] = useState(sessionStorage.getItem("input-value") || "");
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("query");

	useEffect(() => {
		if (query) {
			sessionStorage.setItem("input-value", query ? query : "");
		}

		if (inputValue) {
			setSearchParams({ query: inputValue });
		}
	}, [query]);

	const onSearchSubmit = (e) => {
		e.preventDefault();
		const value = e.target.elements[0].value;

		if (value.length < 2 || value === query) return;

		setSearchParams({ query: value });
	};

	return (
		<>
			<form onSubmit={onSearchSubmit}>
				<Input
					type='text'
					placeholder='Search movies...'
					value={String(inputValue)}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<SubmitButton type='submit'>Search</SubmitButton>
			</form>
		</>
	);
};

export default SearchForm;

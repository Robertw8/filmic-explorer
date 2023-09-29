import React, { useState, useEffect } from "react";
import { Form, Input } from "./SearchForm.styled";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
	const [inputValue, setInputValue] = useState(sessionStorage.getItem("input-value") || "");
	const [currentInput, setCurrentInput] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("query");

	useEffect(() => {
		if (query) {
			sessionStorage.setItem("input-value", query ? query : "");
		}

		if (currentInput) {
			const timeoutId = setTimeout(() => {
				if (currentInput.length >= 2 && currentInput !== query) {
					setSearchParams({ query: currentInput });
				}
			}, 500);

			return () => clearTimeout(timeoutId);
		}

		if (inputValue) {
			setSearchParams({ query: inputValue });
		}
	}, [currentInput, inputValue, query, setSearchParams]);

	const handleChange = (e) => {
		setInputValue(e.target.value);
		setCurrentInput(e.target.value);
	};

	return (
		<>
			<Form>
				<Input
					type='text'
					placeholder='Search movies...'
					value={String(inputValue)}
					onChange={handleChange}
					variant='standard'
				/>
			</Form>
		</>
	);
};

export default SearchForm;

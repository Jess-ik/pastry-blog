"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import { SlMagnifier } from "react-icons/sl";
import algoliasearch from "algoliasearch/lite";
import { PrismicNextImage } from "@prismicio/next";

export type SearchProps = {
	onSearch: (value: string) => void;
};

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY);
const searchIndex = searchClient.initIndex("KitchenBook");

export default function SearchTest(props: SearchProps) {
	const { onSearch } = props;
	const placeholderValue = "J'ai envie de...";
	const [value, setValue] = useState("");
	const [placeholder, setPlaceholder] = useState(placeholderValue);
	const [searchResults, setSearchResults] = useState<any[]>([]);
	const [showResults, setShowResults] = useState(false);

	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setValue(value);
		if (value.trim() !== "") {
			setShowResults(true);
		} else {
			setShowResults(false);
		}
	};

	const handleFocus = () => {
		setPlaceholder("");
	};

	const handleBlur = () => {
		if (value.trim() === "") {
			setPlaceholder(placeholderValue);
		}
	};

	useEffect(() => {
		if (value.trim() !== "") {
			searchIndex.search(value.trim()).then((res) => {
                setSearchResults(res.hits.slice(0, 3)); 
			});
		} else {
			setSearchResults([]);
		}
	}, [value]);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			onSearch(value.trim() === placeholderValue ? "" : value.trim());
		}
	};

	return (
		<div className="relative w-full text-grey">
			<input type="search" name="search" placeholder={placeholder} value={value} onChange={searchHandler} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handleKeyDown} className="bg-lightBlue h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none" />
			<button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
				<SlMagnifier />
			</button>
			{showResults && (
				<div className="search-popup">
					<ul>
						{searchResults.map((result) => (
							<li key={result.objectID}>
								<PrismicNextImage field={result.image} alt={result.name} imgixParams={{ ar: "1:1", fit: "cover" }} />
                                <div className="search-info">
                                <p className="text-grey uppercase font-medium text-sm">{result.tag}</p>
									<h3 className="text-darkBlue text-lg">{result.title}</h3>
									<button className="button !text-[.7rem] !padding-[.4rem]">
										<a href={`/recipes/${result.slug}`}>Voir la recette</a>
									</button>
									
								</div>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

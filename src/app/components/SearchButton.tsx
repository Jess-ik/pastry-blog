"use client";
import React, { useState } from "react";
import { SlMagnifier } from "react-icons/sl";


export default function SearchButton() {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleButtonClick = () => {
		setIsExpanded(!isExpanded);
		if (!isExpanded) {
			const inputEle = document.getElementById("searchInput");
			if (inputEle) {
				inputEle.focus();
			}
		}
	};

	return (
		<div className="search-wrapper" id="search">
			<div className={`search-container ${isExpanded ? "search-expanded" : ""}`} >
				<input type="text" className="search-input" id="searchInput" placeholder="Macarons..." />
				<button className="search-button" onClick={handleButtonClick}>
                <SlMagnifier />
				</button>
			</div>
		</div>
	);
}

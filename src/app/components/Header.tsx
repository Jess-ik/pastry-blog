"use client";
import React, { useEffect, useState } from "react";
import { NavigationDocument } from "../../../prismicio-types";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";
import SearchButton from "./SearchButton";
import { SlArrowUp, SlMenu } from "react-icons/sl";
import Link from "next/link";
import { RxCookie } from "react-icons/rx";
import { Search } from "./Search";
import SearchTest from "./SearchTest";
import SearchPopup from "./SearchPopup";

export default function Header() {
	const currentPath = usePathname();

	//fetch navigation datas
	const [navDatas, setNavDatas] = useState<NavigationDocument<string> | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			const client = createClient();
			const getDatas = await client.getSingle("navigation");
			setNavDatas(getDatas);
		};
		fetchData();
	}, []);

	//handle navigation on scroll
	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector("header");
			const main = document.querySelector("main");
			const headerHeight = header?.offsetHeight || 0;
			main?.style.setProperty("top", `${headerHeight}px`);

			let lastScroll = 0;

			window.addEventListener("scroll", () => {
				let currentScroll = window.pageYOffset;

				if (currentScroll > 0 && currentScroll - lastScroll > 0) {
					// scrolled down -- header hide
					header?.classList.add("scroll-down");
					header?.classList.remove("scroll-up");
				} else {
					// scrolled up -- header show
					header?.classList.add("scroll-up");
					header?.classList.remove("scroll-down");
				}

				lastScroll = currentScroll;
			});
		};

		handleScroll();

		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	//handle mobile nav
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);

	// Handle search
	const [searchValue, setSearchValue] = useState("");

		const handleSearch = (value: string) => {
			console.log(value);
			setSearchValue(value);
		};
	

	

	return (
		<header className="bg-light flex flex-col lg:flex-row justify-between items-center scroll-up">
			<div className="w-full px-4 lg:px-0 flex justify-between items-center">
				<span className="font-bold flex gap-2 items-center">
					<RxCookie /> {navDatas?.data.logo}
				</span>
				<nav className="hidden lg:flex ml-[205px]">
					<ul className="">
						{navDatas?.data.links.map(({ nav_link, nav_text, pathname }, index) => (
							<li key={index} className={pathname && ((currentPath === "/" && pathname === "/") || (currentPath.startsWith(pathname) && pathname !== "/")) ? "active-nav" : ""}>
								<PrismicNextLink field={nav_link}>{nav_text}</PrismicNextLink>
							</li>
						))}
					</ul>
				</nav>
				<div className="menu-toggle lg:hidden" id="nav-close" onClick={handleClick}>
					{open ? <SlArrowUp /> : <SlMenu />}
				</div>
				<div className="hidden lg:flex">
					
					<SearchTest onSearch={handleSearch} />
					
				</div>
			</div>

			{/* MOBILE NAV */}
			<nav className={open ? "flex w-screen h-screen justify-center bg-light absolute top-[72px] transition-top duration-300" : "absolute top-[-200vh] transition-top duration-300"}>
				<ul className="flex flex-col mt-16 items-center text-center gap-6">
					{navDatas?.data.links.map(({ nav_link, nav_text, pathname }, index) => (
						<li key={index} className={currentPath === `${pathname}` ? "active-nav" : ``} onClick={handleClick}>
							<PrismicNextLink field={nav_link}>{nav_text}</PrismicNextLink>
						</li>
					))}
					<SearchTest onSearch={handleSearch} />
				</ul>
			</nav>
		</header>
	);
}

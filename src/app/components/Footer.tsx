"use client";
import { createClient } from "@/prismicio";
import React, { useEffect, useState } from "react";
import { NavigationDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default function Footer() {
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
	return (
		<footer className="bg-dark text-light">
			<div className="main">
				<span className=" font-bold">{navDatas?.data.logo}</span>
				<nav className="">
					<ul className="">
						{navDatas?.data.links.map(({ nav_link, nav_text, pathname }, index) => (
							<li key={index}>
								<PrismicNextLink field={nav_link}>{nav_text}</PrismicNextLink>
							</li>
						))}
					</ul>
				</nav>
				<nav className="">
					<ul className="">
						{navDatas?.data.socials.map(({ social_link }, index) => (
							<li key={index}>
								<PrismicNextLink field={social_link}>icon</PrismicNextLink>
							</li>
						))}
					</ul>
				</nav>
            </div>
            <div className="secondary"><Link href="https://jess-louvel.com"><p>{navDatas?.data.copyright}</p></Link></div>
		</footer>
	);
}

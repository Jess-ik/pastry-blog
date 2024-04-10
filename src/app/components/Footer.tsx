"use client";
import { createClient } from "@/prismicio";
import React, { useEffect, useState } from "react";
import { NavigationDocument } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { SiGithub, SiInstacart, SiInstagram, SiLinkedin } from "react-icons/si";

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
				<span className=" font-bold"><Link href="/">{navDatas?.data.logo}</Link></span>
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
					<ul className="socials">
						<li>
							<Link href="https://www.linkedin.com/in/jesslouvel/">
								<SiLinkedin />
							</Link>
						</li>
						<li>
							<Link href="https://github.com/Jess-ik">
								<SiGithub />
							</Link>
						</li>
						<li>
							<Link href="https://www.instagram.com/jess_louvel/">
								<SiInstagram />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className="secondary">
				<Link href="https://jess-louvel.com">
					<p>
						Fictional project made by <u>Jessica Louvel</u> for training purpose
					</p>
				</Link>
			</div>
		</footer>
	);
}

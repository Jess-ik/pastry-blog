"use client";
import React, { useEffect, useState } from "react";
import { NavigationDocument } from "../../../prismicio-types";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";
import SearchButton from "./SearchButton";

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
    
            if (currentScroll - lastScroll > 0) {
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

	return (
		<header className="bg-light">
			<span className=" font-bold">{navDatas?.data.logo}</span>
			<nav className="ml-[205px]">
				<ul className="">
					{navDatas?.data.links.map(({ nav_link, nav_text, pathname }, index) => (
						<li key={index} className={currentPath === `${pathname}` ? "active-nav" : ``}>
							<PrismicNextLink field={nav_link}>{nav_text}</PrismicNextLink>
						</li>
					))}
				</ul>
			</nav>
			<SearchButton />
		</header>
	);
}

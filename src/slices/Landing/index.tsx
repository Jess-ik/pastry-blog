"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { RevealWrapper } from  'next-reveal'

/**
 * Props for `Landing`.
 */
export type LandingProps = SliceComponentProps<Content.LandingSlice>;

/**
 * Component for "Landing" Slices.
 */
const Landing = ({ slice }: LandingProps): JSX.Element => {
	
	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="" id="landing">
			<RevealWrapper origin="bottom" duration={2500} delay={400} distance="60px" className="landing-intro">
				<h1>{slice.primary.title}</h1>
				<p>{slice.primary.intro}</p>
				<button>
					<Link href="/#selectedRecipes">{slice.primary.cta_text}</Link>
				</button>
			</RevealWrapper>
			<RevealWrapper origin="center" opacity={0} duration={2500} delay={400} distance="0px">
				<PrismicNextImage field={slice.primary.hero_image} imgixParams={{ ar: "16:6", fit: "crop" }} />
				</RevealWrapper>
		</section>
	);
};

export default Landing;

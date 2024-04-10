'use client'
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { RevealList } from "next-reveal";

/**
 * Props for `AboutSec`.
 */
export type AboutSecProps = SliceComponentProps<Content.AboutSecSlice>;

/**
 * Component for "AboutSec" Slices.
 */
const AboutSec = ({ slice }: AboutSecProps): JSX.Element => {
	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} id="about-sec">
			<RevealList interval={60} delay={500} distance="0" scale={.9} duration={1500} className="about-sec-container ">
				<div className="bento about-sec-intro ">
					<h2>{slice.primary.section_title}</h2>
					<p>{slice.primary.section_desc}</p>
					<button className="button mt-8">{slice.primary.button_text}</button>
				</div>
				<div className="bento">
					<PrismicNextImage field={slice.primary.image01} />
				</div>
				<div className="bento md:row-span-2">
					<PrismicNextImage field={slice.primary.image02} />
				</div>
				<div className="bento md:col-span-2">
					<PrismicNextImage field={slice.primary.image03} />
				</div>
			</RevealList>
		</section>
	);
};

export default AboutSec;

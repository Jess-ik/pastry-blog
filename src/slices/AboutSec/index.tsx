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
				<div className="bento about-sec-intro lg:col-span-2 xl:col-span-1">
					<h2 className="text-5xl">{slice.primary.section_title}</h2>
					<p className="text-sm mt-3">{slice.primary.section_desc}</p>
					<button className="button mt-6">{slice.primary.button_text}</button>
				</div>
				<div className="bento">
					<PrismicNextImage field={slice.primary.image01} />
				</div>
				<div className="bento xl:row-span-2 lg:row-span-1">
					<PrismicNextImage field={slice.primary.image02} />
				</div>
				<div className="bento lg:col-span-2">
					<PrismicNextImage field={slice.primary.image03} />
				</div>
			</RevealList>
		</section>
	);
};

export default AboutSec;

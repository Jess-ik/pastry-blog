import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

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
			<div className="about-sec-container ">
				<div className="bento about-sec-intro ">
					<h2>{slice.primary.section_title}</h2>
					<p>{slice.primary.section_desc}</p>
					<button>{slice.primary.button_text}</button>
				</div>
				<div className="bento  ">
					<PrismicNextImage field={slice.primary.image01} />
				</div>
				<div className="bento  row-span-2 ">
					<PrismicNextImage field={slice.primary.image02} />
				</div>
				<div className="bento  col-span-2">
					<PrismicNextImage field={slice.primary.image03} />
				</div>
			</div>
		</section>
	);
};

export default AboutSec;

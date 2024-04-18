import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

const components: JSXMapSerializer = {
	oListItem: ({ children }) => <li className=" text-darkBlue">{children}</li>,
	listItem: ({ children }) => <li className=" text-darkBlue">{children}</li>,
	oList: ({ children }) => <ol className="ml-6 list-decimal w-[80%]">{children}</ol>,
	list: ({ children }) => <ul className="ml-6 list-disc">{children}</ul>,
  paragraph: ({ children }) => <p className="pb-2 w-[80%]">{children}</p>,
  
};

/**
 * Props for `RecipeInfo`.
 */
export type RecipeInfoProps = SliceComponentProps<Content.RecipeInfoSlice>;

/**
 * Component for "RecipeInfo" Slices.
 */
const RecipeInfo = ({ slice }: RecipeInfoProps): JSX.Element => {
	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="!pt-0 flex flex-col gap-6">
			<div className=" rounded-2xl p-4 bg-lightBlue">
				<h2>{slice.primary.ingredients}</h2>
				<PrismicRichText components={components} field={slice.primary.ingredients_list} />
			</div>

			<div className="p-4 border border-lightGrey rounded-2xl">
				<h2>{slice.primary.instructions}</h2>
				{slice.items.map((item, index) => (
					<div key={index}>
						<PrismicRichText components={components} field={item.instructions_text} />
						<PrismicNextImage className="mt-2 mb-4 rounded-2xl" field={item.instruction_image} imgixParams={{ ar: "3:2", fit: "crop" }} />
					</div>
				))}
			</div>
		</section>
	);
};

export default RecipeInfo;
function linkResolver(linkTo: import("@prismicio/types").FilledContentRelationshipField<string, string, unknown> | import("@prismicio/types").FilledLinkToWebField | import("@prismicio/types").FilledLinkToMediaField) {
	throw new Error("Function not implemented.");
}

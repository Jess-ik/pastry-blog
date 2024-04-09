"use client";
import { Content, isFilled } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import RecipeCard from "../RecipeCard";
import { useEffect, useState } from "react";
import { RecipePageDocument } from "../../../prismicio-types";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { DiSnapSvg } from "react-icons/di";

/**
 * Props for `SelectedRecipes`.
 */
export type SelectedRecipesProps = SliceComponentProps<Content.SelectedRecipesSlice>;

/**
 * Component for "SelectedRecipes" Slices.
 */
const SelectedRecipes = ({ slice }: SelectedRecipesProps): JSX.Element => {
	const [selectedRecipes, setSelectedRecipes] = useState<RecipePageDocument<string>[]>([]);
	// Fetch data to get selected workks
	useEffect(() => {
		const fetchData = async () => {
			const client = createClient();
			const data = await Promise.all(
				slice.items.map((item) => {
					if (isFilled.contentRelationship(item.recipe_page) && item.recipe_page.uid) {
						return client.getByUID("recipe_page", item.recipe_page.uid);
					}
					return undefined;
				})
			);

			// Filtrer les valeurs undefined et cast vers le type attendu
			setSelectedRecipes(data.filter((item): item is RecipePageDocument<string> => !!item));
		};

		fetchData();
	}, [slice.items]);
	console.log(selectedRecipes);
	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} id="selectedRecipes">
			<h2>{slice.primary.section_title}</h2>
			<div className="grid grid-cols-2 gap-4">
				{selectedRecipes.map((item, index) => (
					<div key={index} className="recipe-card">
						<div className="cover">
							<PrismicNextImage  field={item.data.recipe_hero_img}  imgixParams={{ ar: "16:6", fit: "crop" }} />
						</div>
						<div className="recipe-card-info">
							<h3>{item.data.recipe_name}</h3>
							<p>{item.data.recipe_desc}</p>
							<PrismicLink key={index} document={item}></PrismicLink>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default SelectedRecipes;

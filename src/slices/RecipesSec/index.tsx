"use client";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { useEffect, useState } from "react";
import { RecipePageDocument } from "../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `RecipesSec`.
 */
export type RecipesSecProps = SliceComponentProps<Content.RecipesSecSlice>;

/**
 * Component for "RecipesSec" Slices.
 */
const RecipesSec = ({ slice }: RecipesSecProps): JSX.Element => {
	//fetch recipes datas
	const [recipes, setRecipes] = useState<RecipePageDocument<string>[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const client = createClient();
			const getRecipes = await client.getAllByType("recipe_page");
			setRecipes(getRecipes);
		};
		fetchData();
	}, []);
	console.log(recipes);
	// Handle Filtering
	const [filteredRecipes, setfilteredRecipes] = useState<RecipePageDocument<string>[]>([]);
	const [activeFilter, setActiveFilter] = useState<string>("");

	useEffect(() => {
		if (activeFilter === "*") {
			setfilteredRecipes(recipes);
			return;
		}
		const filtering = recipes?.filter((recipe) => recipe.data.tag?.includes(activeFilter));
		setfilteredRecipes(filtering || []);
	}, [activeFilter, recipes, setfilteredRecipes]);

	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} id="recipes">
			<div className="recipes-intro flex flex-col items-center gap-2">
				<h2>{slice.primary.section_title}</h2>
				<p>{slice.primary.section_desc}</p>
				{/* FILTER */}
				<div className="filters flex gap-8 mt-12">
					<span onClick={() => setActiveFilter("*")} data-filter="*" className={`tag ${activeFilter === "*" || activeFilter === "" ? "active-tag" : ""}`}>
						Toutes
					</span>
					{/* Map over all tags from RecipePageDocument to create a button for each tag */}
					{Array.from(new Set(recipes.flatMap((recipe) => recipe.data.tag))).map((tag, index) => (
						<span key={index} onClick={() => setActiveFilter(tag)} data-filter={tag} className={`tag ${activeFilter === tag ? "active-tag" : ""}`}>
							{tag}
						</span>
					))}
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4 mt-12">
				{filteredRecipes.map((recipe, index) => (
					<div key={index} className="recipe-card !bg-transparent border border-grey">
          <div className="cover">
            <PrismicNextImage  field={recipe.data.recipe_hero_img}  imgixParams={{ ar: "16:9", fit: "crop" }} />
          </div>
          <div className="recipe-card-info">
            <h3>{recipe.data.recipe_name}</h3>
            <p>{recipe.data.recipe_desc}</p>
            <PrismicLink key={index} document={recipe}></PrismicLink>
          </div>
        </div>
				))}
			</div>
		</section>
	);
};

export default RecipesSec;

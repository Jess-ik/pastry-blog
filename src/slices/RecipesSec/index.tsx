"use client";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { useEffect, useState } from "react";
import { RecipePageDocument } from "../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { RevealWrapper } from "next-reveal";
import { AnimatePresence, motion } from "framer-motion";

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
	// Handle Filtering
	const [filteredRecipes, setfilteredRecipes] = useState<RecipePageDocument<string>[]>([]);
	const [activeFilter, setActiveFilter] = useState<string>("*");

	useEffect(() => {
		const fetchData = async () => {
			const client = createClient();
			const getRecipes = await client.getAllByType("recipe_page");
			setRecipes(getRecipes);
			setfilteredRecipes(getRecipes as RecipePageDocument<string>[]);
		};
		fetchData();
	}, []);
	console.log(recipes);

	useEffect(() => {
		if (activeFilter === "*" || activeFilter === "") {
			setfilteredRecipes(recipes);
			return;
		}

		const filtering = recipes?.filter((recipe) => {
			return recipe.data.tag && recipe.data.tag.includes(activeFilter);
		});
		setfilteredRecipes(filtering || []);
	}, [activeFilter, recipes, setfilteredRecipes]);

	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} id="recipes">
			<div className="recipes-intro">
				<RevealWrapper origin="bottom" duration={2500} delay={400} distance="30px">
					<h2>{slice.primary.section_title}</h2>
					<p>{slice.primary.section_desc}</p>
				</RevealWrapper>
				{/* FILTER */}
				<div className="filters">
					<RevealWrapper duration={1500} distance="30px" delay={500} data-filter="*" className={`tag ${activeFilter === "*" || activeFilter === "" ? "active-tag" : ""}`}>
						<span onClick={() => setActiveFilter("*")}>Toutes</span>
					</RevealWrapper>
					{/* Map over all tags from RecipePageDocument to create a button for each tag */}
					{Array.from(new Set(recipes.flatMap((recipe) => recipe.data.tag)))
						.filter((tag) => tag !== null) // Exclure les tags nuls
						.map((tag, index) => (
							<RevealWrapper duration={1500} distance="30px" delay={600 + index * 200} key={index} data-filter={tag} className={`tag ${activeFilter === tag ? "active-tag" : ""}`}>
								{tag && <span onClick={() => setActiveFilter(tag)}>{tag}</span>}
							</RevealWrapper>
						))}
				</div>
			</div>
			<div className="recipes-grid">
				<AnimatePresence>
					{filteredRecipes.map((recipe, index) => {
						return (
							<motion.div key={index} animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
								<RevealWrapper duration={1500} distance="30px" delay={400 + index * 100} className="recipe-card !bg-transparent border border-lightGrey h-full">
									<div className="cover">
										<PrismicNextImage field={recipe.data.recipe_hero_img} imgixParams={{ ar: "16:9", fit: "crop" }} />
									</div>
									<div className="recipe-card-info">
										<h3>{recipe.data.recipe_name}</h3>
										<p>{recipe.data.recipe_desc}</p>
										<div className="w-full flex justify-between uppercase text-sm">
											<div className="flex gap-2 items-center font-semibold">
												<span className="flex gap-2 items-center ">
													<p className="font-semibold">{recipe.data.time}</p>
												</span>
												<p>•</p>
												<span className="flex gap-2 items-center ">
													<p className="font-semibold">{recipe.data.quantity}</p>
												</span>
											</div>

											<button className="button">
												<PrismicLink key={index} document={recipe}>
													Voir la recette
												</PrismicLink>
											</button>
										</div>
									</div>
								</RevealWrapper>
							</motion.div>
						);
					})}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default RecipesSec;

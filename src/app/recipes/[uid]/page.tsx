import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { FaBellConcierge, FaRegClock } from "react-icons/fa6";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
	const client = createClient();
	const page = await client
		.getByUID("recipe_page", params.uid, {
			fetchLinks: ["author.author_name", "author.author_intro", "author.author_profile", "author.author_link"],
		})
		.catch(() => notFound());

	// handle content relationship types
	let author: {
		author_name?: string;
		author_intro?: string;
		author_profile?: any;
		author_link?: { url: string };
	} | null = null;

	if (page.data.author) {
		// Check if it's a Content Relationship field
		if ("data" in page.data.author) {
			// Handle Content Relationship field
			author = page.data.author.data as {
				author_name?: string;
				author_intro?: string;
				author_profile?: any;
				author_link?: { url: string };
			};
		}
	}

	return (
		<section>
			<div className="recipe-head text-center my-4">
				<div className="my-4 max-w-[50%] mx-auto flex flex-col items-center gap-6">
					<span className="button">{page.data.tag}</span>
					<h1 className="">{page.data.recipe_name}</h1>
					<p className="">{page.data.recipe_desc}</p>
					<div className="flex gap-6 items-center">
						<span className="flex gap-2 items-center">
							<FaRegClock />
							<p>{page.data.time}</p>
						</span>
						<p>•</p>
						<span className="flex gap-2 items-center"><FaBellConcierge /><p>{page.data.quantity}</p></span>
					</div>
				</div>

				<PrismicNextImage field={page.data.recipe_hero_img} imgixParams={{ ar: "2:1", fit: "crop" }} />
			</div>

			<div className="grid grid-cols-3 gap-6 mt-16 ">
				<div className="col-span-2">
					<SliceZone slices={page.data.slices} components={components} />
				</div>
				<div className="col-span-1">
					{/* Afficher les données de l'auteur si elles sont disponibles */}
					{author && (
						<div className="rounded-2xl border border-lightGrey p-4 flex flex-col gap-4">
							<div>
								<p className="text-darkBlue">Une recette porposée par</p>
								<h3>{author.author_name}</h3>
							</div>

							<PrismicNextImage field={author.author_profile} />
							<em className="text-dark600">{author.author_intro}</em>

							<PrismicNextLink className="button" href={author.author_link.url}>
								Mon blog
							</PrismicNextLink>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const client = createClient();
	const page = await client.getByUID("recipe_page", params.uid).catch(() => notFound());

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
	};
}

export async function generateStaticParams() {
	const client = createClient();
	const pages = await client.getAllByType("recipe_page");

	return pages.map((page) => {
		return { uid: page.uid };
	});
}

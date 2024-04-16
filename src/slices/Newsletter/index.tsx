"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RevealWrapper } from "next-reveal";
import { useEffect } from "react";

/**
 * Props for `Newsletter`.
 */
export type NewsletterProps = SliceComponentProps<Content.NewsletterSlice>;

/**
 * Component for "Newsletter" Slices.
 */
const Newsletter = ({ slice }: NewsletterProps): JSX.Element => {
	useEffect(() => {
		// Définir la fonction de rappel à retirer
		const handleMouseDown = (e) => {
			e.preventDefault();
			document.querySelector(".news-form")?.classList.add("done");
		};

		// Ajouter l'événement mousedown à '.submit-email' avec la fonction de rappel
		document.querySelector(".submit-email")?.addEventListener("mousedown", handleMouseDown);

		// Retirer l'événement mousedown lors du démontage du composant
		return () => {
			document.querySelector(".submit-email")?.removeEventListener("mousedown", handleMouseDown);
		};
	}, []);
	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div className="news-container">
				<RevealWrapper origin="bottom" duration={2500} delay={400} distance="30px" className="flex flex-col items-center">
					<h2>{slice.primary.section_title}</h2>
					<p>{slice.primary.section_desc}</p>
				</RevealWrapper>
				<div className="mt-10 news-form-container">
					<form className="news-form">
						<input className="add-email" type="email" placeholder="newsletter@kitchenaid.com" />
						<button className="submit-email" type="button">
							<span className="before-submit">S'abonner</span>
							<span className="after-submit">Thank you for subscribing!</span>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;

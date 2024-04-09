import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RecipeCard`.
 */
export type RecipeCardProps = SliceComponentProps<Content.RecipeCardSlice>;

/**
 * Component for "RecipeCard" Slices.
 */
const RecipeCard = ({ slice }: RecipeCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for recipe_card (variation: {slice.variation})
      Slices
    </section>
  );
};

export default RecipeCard;

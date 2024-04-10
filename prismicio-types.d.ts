// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
  | NewsletterSlice
  | AboutSecSlice
  | RecipesSecSlice
  | SelectedRecipesSlice
  | LandingSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Nav Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[].nav_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  nav_link: prismic.LinkField;

  /**
   * Nav Text field in *Navigation → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[].nav_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nav_text: prismic.KeyTextField;

  /**
   * pathname field in *Navigation → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[].pathname
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  pathname: prismic.KeyTextField;
}

/**
 * Item in *Navigation → Socials*
 */
export interface NavigationDocumentDataSocialsItem {
  /**
   * Social Link field in *Navigation → Socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.socials[].social_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  social_link: prismic.LinkField;

  /**
   * Social Icon field in *Navigation → Socials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.socials[].social_icon
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  social_icon: prismic.KeyTextField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Logo field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  logo: prismic.KeyTextField;

  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;

  /**
   * Socials field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.socials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<NavigationDocumentDataSocialsItem>>;

  /**
   * Copyright field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.copyright
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright: prismic.KeyTextField;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type RecipePageDocumentDataSlicesSlice = RecipeCardSlice;

/**
 * Content for Recipe Page documents
 */
interface RecipePageDocumentData {
  /**
   * Recipe Name field in *Recipe Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe_page.recipe_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  recipe_name: prismic.KeyTextField;

  /**
   * Recipe Desc field in *Recipe Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe_page.recipe_desc
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  recipe_desc: prismic.KeyTextField;

  /**
   * Recipe Hero Img field in *Recipe Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe_page.recipe_hero_img
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  recipe_hero_img: prismic.ImageField<never>;

  /**
   * Tag field in *Recipe Page*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe_page.tag
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  tag: prismic.SelectField<
    "Viennoiseries" | "Biscuits" | "Gâteaux" | "Tartes" | "Crêmes"
  >;

  /**
   * Slice Zone field in *Recipe Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<RecipePageDocumentDataSlicesSlice> /**
   * Meta Description field in *Recipe Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: recipe_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Recipe Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: recipe_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Recipe Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: recipe_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Recipe Page document from Prismic
 *
 * - **API ID**: `recipe_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RecipePageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<RecipePageDocumentData>,
    "recipe_page",
    Lang
  >;

type RecipesDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Recipes documents
 */
interface RecipesDocumentData {
  /**
   * Slice Zone field in *Recipes*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: recipes.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<RecipesDocumentDataSlicesSlice> /**
   * Meta Description field in *Recipes*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: recipes.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Recipes*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: recipes.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Recipes*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: recipes.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Recipes document from Prismic
 *
 * - **API ID**: `recipes`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type RecipesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<RecipesDocumentData>,
    "recipes",
    Lang
  >;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | HomeDocument
  | NavigationDocument
  | RecipePageDocument
  | RecipesDocument
  | SettingsDocument;

/**
 * Primary content in *AboutSec → Primary*
 */
export interface AboutSecSliceDefaultPrimary {
  /**
   * Section Title field in *AboutSec → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_sec.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Section Desc field in *AboutSec → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_sec.primary.section_desc
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_desc: prismic.KeyTextField;

  /**
   * Button Link field in *AboutSec → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about_sec.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button text field in *AboutSec → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_sec.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Image01 field in *AboutSec → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_sec.primary.image01
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image01: prismic.ImageField<never>;

  /**
   * Image02 field in *AboutSec → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_sec.primary.image02
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image02: prismic.ImageField<never>;

  /**
   * Image03 field in *AboutSec → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_sec.primary.image03
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image03: prismic.ImageField<never>;
}

/**
 * Default variation for AboutSec Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSecSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSecSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutSec*
 */
type AboutSecSliceVariation = AboutSecSliceDefault;

/**
 * AboutSec Shared Slice
 *
 * - **API ID**: `about_sec`
 * - **Description**: AboutSec
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSecSlice = prismic.SharedSlice<
  "about_sec",
  AboutSecSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Image Right variation for Hero Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<HeroSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceImageRight;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Landing → Primary*
 */
export interface LandingSliceDefaultPrimary {
  /**
   * Title field in *Landing → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Intro field in *Landing → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.primary.intro
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  intro: prismic.KeyTextField;

  /**
   * CTA link field in *Landing → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * CTA text field in *Landing → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.primary.cta_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_text: prismic.KeyTextField;

  /**
   * Hero image field in *Landing → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;
}

/**
 * Default variation for Landing Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LandingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LandingSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Landing*
 */
type LandingSliceVariation = LandingSliceDefault;

/**
 * Landing Shared Slice
 *
 * - **API ID**: `landing`
 * - **Description**: Landing
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LandingSlice = prismic.SharedSlice<
  "landing",
  LandingSliceVariation
>;

/**
 * Primary content in *Newsletter → Primary*
 */
export interface NewsletterSliceDefaultPrimary {
  /**
   * Section Title field in *Newsletter → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Section Desc field in *Newsletter → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.section_desc
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_desc: prismic.KeyTextField;

  /**
   * Button Link field in *Newsletter → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button text field in *Newsletter → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * Default variation for Newsletter Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NewsletterSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Newsletter*
 */
type NewsletterSliceVariation = NewsletterSliceDefault;

/**
 * Newsletter Shared Slice
 *
 * - **API ID**: `newsletter`
 * - **Description**: Newsletter
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSlice = prismic.SharedSlice<
  "newsletter",
  NewsletterSliceVariation
>;

/**
 * Default variation for RecipeCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecipeCardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *RecipeCard*
 */
type RecipeCardSliceVariation = RecipeCardSliceDefault;

/**
 * RecipeCard Shared Slice
 *
 * - **API ID**: `recipe_card`
 * - **Description**: RecipeCard
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecipeCardSlice = prismic.SharedSlice<
  "recipe_card",
  RecipeCardSliceVariation
>;

/**
 * Primary content in *RecipesSec → Primary*
 */
export interface RecipesSecSliceDefaultPrimary {
  /**
   * Section title field in *RecipesSec → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recipes_sec.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Section Desc field in *RecipesSec → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recipes_sec.primary.section_desc
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_desc: prismic.KeyTextField;
}

/**
 * Primary content in *RecipesSec → Items*
 */
export interface RecipesSecSliceDefaultItem {
  /**
   * RecipeCard field in *RecipesSec → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: recipes_sec.items[].recipecard
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  recipecard: prismic.ContentRelationshipField<"recipe_page">;
}

/**
 * Default variation for RecipesSec Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecipesSecSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RecipesSecSliceDefaultPrimary>,
  Simplify<RecipesSecSliceDefaultItem>
>;

/**
 * Slice variation for *RecipesSec*
 */
type RecipesSecSliceVariation = RecipesSecSliceDefault;

/**
 * RecipesSec Shared Slice
 *
 * - **API ID**: `recipes_sec`
 * - **Description**: RecipesSec
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecipesSecSlice = prismic.SharedSlice<
  "recipes_sec",
  RecipesSecSliceVariation
>;

/**
 * Primary content in *SelectedRecipes → Primary*
 */
export interface SelectedRecipesSliceDefaultPrimary {
  /**
   * section title field in *SelectedRecipes → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: selected_recipes.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;
}

/**
 * Primary content in *SelectedRecipes → Items*
 */
export interface SelectedRecipesSliceDefaultItem {
  /**
   * Recipe Page field in *SelectedRecipes → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: selected_recipes.items[].recipe_page
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  recipe_page: prismic.ContentRelationshipField<"recipe_page">;
}

/**
 * Default variation for SelectedRecipes Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SelectedRecipesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SelectedRecipesSliceDefaultPrimary>,
  Simplify<SelectedRecipesSliceDefaultItem>
>;

/**
 * Slice variation for *SelectedRecipes*
 */
type SelectedRecipesSliceVariation = SelectedRecipesSliceDefault;

/**
 * SelectedRecipes Shared Slice
 *
 * - **API ID**: `selected_recipes`
 * - **Description**: SelectedRecipes
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SelectedRecipesSlice = prismic.SharedSlice<
  "selected_recipes",
  SelectedRecipesSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      NavigationDocumentDataSocialsItem,
      RecipePageDocument,
      RecipePageDocumentData,
      RecipePageDocumentDataSlicesSlice,
      RecipesDocument,
      RecipesDocumentData,
      RecipesDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      AboutSecSlice,
      AboutSecSliceDefaultPrimary,
      AboutSecSliceVariation,
      AboutSecSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceImageRightPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceImageRight,
      LandingSlice,
      LandingSliceDefaultPrimary,
      LandingSliceVariation,
      LandingSliceDefault,
      NewsletterSlice,
      NewsletterSliceDefaultPrimary,
      NewsletterSliceVariation,
      NewsletterSliceDefault,
      RecipeCardSlice,
      RecipeCardSliceVariation,
      RecipeCardSliceDefault,
      RecipesSecSlice,
      RecipesSecSliceDefaultPrimary,
      RecipesSecSliceDefaultItem,
      RecipesSecSliceVariation,
      RecipesSecSliceDefault,
      SelectedRecipesSlice,
      SelectedRecipesSliceDefaultPrimary,
      SelectedRecipesSliceDefaultItem,
      SelectedRecipesSliceVariation,
      SelectedRecipesSliceDefault,
    };
  }
}

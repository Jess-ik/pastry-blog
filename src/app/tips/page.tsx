import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("tips");

    //   return <SliceZone slices={page.data.slices} components={components} />;
    return <h1 className="mt-32 text-center">This page is under construction</h1>

}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("tips");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

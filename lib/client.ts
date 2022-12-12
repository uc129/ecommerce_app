import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
    projectId: "rynlr4gs",
    dataset: "production",
    useCdn: true,
    apiVersion: '2022-12-10',
    // token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
    // useCdn: process.env.NODE_ENV === "production", // `false` if you want to ensure fresh data
})


const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
    return builder.image(source);
}

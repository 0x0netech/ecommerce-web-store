// import SanityClient  from "@sanity/client";
// import imageUrlBuilder  from "@sanity/image-url";
import SanityClient  from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';




// const builder = imageUrlBuilder(client)


/* <img src={urlFor(author.image).width(200).url()} /> */





 export const client =  SanityClient({
    projectId:'379qdnuu',
    dataset: 'production',
    apiVersion: '2023-04-29',
    useCdn: true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});

//  const builder = imageUrlBuilder(client);
//   function urlFor(source) {
//      return builder.image(source)
//     }


// const urlFor = source => imageUrlBuilder(client).image(source);



 const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);





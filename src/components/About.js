import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import flower from "../MyFlowers.jpeg";
import green from "../Green_serene.jpg";
import dark from "../6WJt4g.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Loading from "./Loading";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
  return builder.image(source);
};

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const query = async () => {
      const res = await sanityClient.fetch(`*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
      }`);

      const data = await res;
      console.log(data);
      setAuthor(data[0]);
    };

    query();
  }, []);

  console.log(author);

  if (!author) {
    return <Loading />;
  }

  return (
    <main className="relative">
      <img src={dark} alt="some flower" className="absolute w-full h-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-blue-600 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8 md:mx-auto"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-red-200 mb-4 md:mx-auto">
              Hey there! I'm <span>{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="xctlklc5"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;

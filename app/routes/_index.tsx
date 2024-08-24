import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import styles from "~/styles/shared.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return [
    { title: "Markdown Editor" },
    { name: "description", content: "Preview your markdown" },
  ];
};

const defaultMarkdown = `
# Scaffolding and Dependencies
For this POC we're focusing on simplicity and speed.
We already know we need interactivity and that fellow developers will be reviewing and fiddling with this codebase so:
- ReactJS as a familiar framework to go with
- TailwindCSS for styling with minimal setup
- Basic Routing, commands to run and build, etc.

React themselves nowdays recommend us to actually use a framework directly and not just React.
So looking at the previous libraries and tech, Remix has it and it's a single command to create a running app with all of those.
`;

export default function Index() {
  const [markdown, setMarkdown] = useState<string>(""); //must always be a string, otherwise Markdown glitches out

  //Get content changes from localStorage (to persist)
  useEffect(() => {
    if (localStorage.getItem("persistedMarkdown")) {
      setMarkdown(localStorage.getItem("persistedMarkdown") || defaultMarkdown);
    }
  }, []);

  //Save content changes to localStorage (to persist)
  useEffect(() => {
    if (!markdown || markdown == localStorage.getItem("persistedMarkdown")) {
      return;
    }
    localStorage.setItem("persistedMarkdown", markdown);
  }, [markdown]);

  return (
    <section className="font-sans p-4 h-screen bg-gray-200 overflow-auto">
      <h1 className="text-3xl font-bold">Markdown Editor.</h1>
      <div className="flex mt-5 bg-green-50 h-full">
        <div className="w-1/2 border-base-300 border">
          <h3 className="px-5 py-2">Markdown</h3>
          <textarea
            className="bg-red-50 border-t w-full h-full"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
        </div>
        <div className="w-1/2 border-base-300 border">
          <h3 className="px-5 py-2">Preview</h3>
          <div className="bg-red-50 border-t w-full h-full">
            <Markdown>{markdown}</Markdown>
          </div>
        </div>
      </div>
    </section>
  );
}

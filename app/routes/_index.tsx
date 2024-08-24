import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import styles from "~/styles/shared.css?url";
import { defaultMarkdown } from "~/defaultMarkdown";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => {
  return [
    { title: "Markdown Editor" },
    { name: "description", content: "Preview your markdown" },
  ];
};

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
    <section className="font-sans p-6 h-3/4 bg-gray-100 overflow-auto">
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        Markdown Editor
      </h1>
      <div className="flex mt-8 bg-white h-full shadow-lg rounded-lg">
        <div className="w-1/2 border-r border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Markdown</h3>
          <textarea
            className="w-full h-5/6 overflow-auto bg-gray-50 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
        </div>
        <div className="w-1/2 p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Preview</h3>
          <div className="w-full h-5/6 overflow-auto bg-gray-50 border border-gray-300 rounded-lg p-4">
            <Markdown className="prose">{markdown}</Markdown>
          </div>
        </div>
      </div>
    </section>
  );
}

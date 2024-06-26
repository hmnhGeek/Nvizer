import React, { useEffect, useState } from "react";
import AnimatedBanner from "./AnimatedBanner";
import Api from "../../Api/Api";
import { conf } from "../../conf/conf";

const SourcesSlider = (props) => {
  const [sources, setSources] = useState([]);
  const [sourceLinks, setSourceLinks] = useState([]);

  const [src, setSrc] = useState([]);
  const [srcLinks, setSrcLinks] = useState([]);

  function divideArrayIntoKParts(arr, k = 4) {
    const result = Array(k).fill([]);
    const partSize = Math.ceil(arr.length / k);

    for (let i = 0; i < k; i++) {
      result[i] = arr.slice(i * partSize, (i + 1) * partSize);
    }

    return result;
  }

  useEffect(() => {
    Api(`/top-headlines?category=general&lang=en&apikey=${conf.apiKey}`, "get")
      .then((response) => {
        let articles = response.data.articles;
        setSrc((c) => [
          ...c,
          ...articles.map((article) => article.source.name),
        ]);
        setSrcLinks((c) => [
          ...c,
          ...articles.map((article) => article.source.url),
        ]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setSources(divideArrayIntoKParts([...new Set([...src])], 1));
    setSourceLinks(divideArrayIntoKParts([...new Set([...srcLinks])], 1));
  }, [srcLinks, src]);

  if (sources.length === 0) return null;
  return (
    <div
      id="companies-container"
      className="flex flex-col gap-8 overflow-x-hidden m-8 md:mt-8 md:ml-5 md:mr-5 md:mb-5"
    >
      {sources.length > 0 && (
        <div id="companies-title" className="flex justify-center gap-2">
          <span className="font-medium">SOME OF OUR SOURCES FOR NEWS</span>
        </div>
      )}
      <div id="companies-lines-group" className="flex flex-col gap-4">
        {sources.map((source, index) => (
          <AnimatedBanner
            divId={source}
            sources={source}
            reverseScroll={index % 2 === 0}
            to={sourceLinks[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default SourcesSlider;

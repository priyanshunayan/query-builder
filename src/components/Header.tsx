import React, { useContext, useEffect, useRef, useState } from "react";
import { getCombinedQueryString } from "../helper";
import { useQuery } from "../query-context";

const Header = (): JSX.Element => {
  const { query } = useQuery();
  const queryContainer = useRef<HTMLParagraphElement>(null);
  const [shouldShowMore, setShouldShowMore] = useState(false);

  useEffect(() => {
    if (queryContainer.current) {
      if (
        queryContainer.current.scrollWidth > queryContainer.current.clientWidth
      ) {
        setShouldShowMore(true);
      }
    }
  }, [query]);

  function expandContainer() {
    if (queryContainer.current) {
      queryContainer.current.style.maxWidth = "100%";
      setShouldShowMore(false);
    }
  }

  const combinedQueryString = getCombinedQueryString(query);

  return (
    <div className="bg-indigo-500 text-white p-8 flex justify-between w-100 items-center overflow-hidden">
      <div className="max-w-full">
        <h1 className="text-lg leading-7 font-medium mb-2 text-white">
          Build your query
        </h1>
        <div>
          {combinedQueryString.length > 4 ? (
            <div className="flex items-center">
              <p
                className="flex align-middle justify-start items-center text-small bg-indigo-800 rounded-md px-2 py-1 mt-2 max-w-[762px] text-ellipsis overflow-hidden h-9 whitespace-nowrap"
                ref={queryContainer}
              >
                <span className="font-bold">Query: </span>
                <span className="font-normal pl-2">
                  {JSON.stringify(combinedQueryString)}
                </span>
              </p>
              {shouldShowMore ? (
                <button
                  className="ml-4 h-9 align-middle mt-2"
                  onClick={expandContainer}
                >
                  more...
                </button>
              ) : null}
            </div>
          ) : (
            <p className="text-sm leading-5 font-normal text-indigo-300">
              The query you build will be saved in your active view
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

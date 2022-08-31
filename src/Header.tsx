import React, { useContext } from "react";
import { getCombinedQueryString } from "./helper";
import { useQuery } from "./query-context";

const Header = (): JSX.Element => {
  const { query } = useQuery();

  const combinedQueryString = getCombinedQueryString(query);

  return (
    <div className="bg-indigo-500 text-white p-8 flex justify-between w-100 items-center overflow-hidden">
      <div className="max-w-full">
        <h1 className="text-lg leading-7 font-medium mb-2 text-white">
          Build your query
        </h1>
        <p className="text-sm leading-5 font-normal text-indigo-300">
          The query you build will be saved in your active view
        </p>
        <div>
          {combinedQueryString.length > 4 ? (
            <>
              <p className="text-small bg-indigo-800 rounded-md px-2 py-1 mt-2 max-w-full overflow-x-scroll h-8 whitespace-nowrap">
                {" "}
                <span className="font-bold">Query:</span>
                {JSON.stringify(combinedQueryString)}
              </p>
            </>
          ) : null}
        </div>
      </div>

      {/* <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
        <button
          type="button"
          className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500"
        >
          <span className="sr-only">Dismiss</span>
          <span
            className="h-6 w-6 text-white bg-indigo-800 rounded-lg mr-4"
            aria-hidden="true"
          >
            {" "}
            X{" "}
          </span>
        </button>
      </div> */}
    </div>
  );
};

export default Header;

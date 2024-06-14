import React from "react";
import { useEffect, useState } from "react";
import Modal from "../Modals/Modal";

function BusinessPreview({ singlenews, setImagePreview }) {
  const openPreview = () => {
    setImagePreview(() => {
      return {
        active: true,
        url: singlenews.urlToImage,
      };
    });
  };
  return (
    <article className=" flex gap-3 w-full my-shadow hover:shadow-none hover:cursor-pointer p-2 hover:py-3 rounded-r-lg items-center">
      <div className=" w-[60px] h-[60px]">
        <img
          src={singlenews.urlToImage || "/src/assets/busi-news.jpg"}
          alt=""
          className="w-[60px] h-[60px] logo rounded-full"
          onClick={openPreview}
        />
      </div>
      <div className=" cus-w">
        <h3 className="font-medium text-purple-600">{singlenews.title}</h3>
        <p className="">{singlenews.description}</p>
        <button className="text-purple-600 my-shadow my-1 rounded-lg p-1 hover:shadow-none hover:cursor-pointer">
          <a href={singlenews.url} target="_blank">
            Read More
          </a>
        </button>
      </div>
    </article>
  );
}

function Business() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState({
    active: false,
    url: "",
  });


  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=8ac28e0230e54d059a1fad9782f9411a"
    )
      .then((res) => {
        if (!res.status) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setBusinessData(data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        console.log("Error message: ", err?.message);
      });
  }, []);

  const news = businessData?.articles?.map((singlenews) => {
    return (
      <BusinessPreview
        singlenews={singlenews}
        key={singlenews.url}
        imagePreview={imagePreview}
        setImagePreview={setImagePreview}
      />
    );
  });

  return (
    <div id="business" className="text-purple-300 overflow-auto  h-full">
      {loading && <h1 className="text-3xl">Loading...</h1>}
      {error && (
        <h1 className="text-2xl font-bold">
          Sorry, an error occured, Refresh!!! <br />{" "}
          <span className="text-red-500">Error</span>: {error?.message}{" "}
        </h1>
      )}
      {businessData && (
        <div className="relative">
          {imagePreview.active && (
            <Modal
              openmodal={imagePreview.active}
              closemodal={() =>
                setImagePreview((prev) => {
                  return {
                    ...prev,
                    active: false,
                  };
                })
              }
            >
              <div>
                <img
                  src={imagePreview.url}
                  alt=""
                  className="w-[590px] h-[590px] rounded-full logo self-center"
                />
              </div>
            </Modal>
          )}
          <h1 className="text-2xl font-bold underline mb-3">
            News on BitCoin ({businessData?.totalResults} Headlines)
          </h1>
          <div className="flex flex-col gap-3">{news}</div>
        </div>
      )}
    </div>
  );
}

export default Business;

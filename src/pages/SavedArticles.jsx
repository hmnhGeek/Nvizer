import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSavedArticles } from "../redux/actions/newsActions";
import NewsCard from "../components/NewsCard/NewsCard";
import NoSavedArticles from "../components/NoSavedArticles/NoSavedArticles";

const SavedArticles = () => {
  const token = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.auth.username);
  const saved = useSelector((state) => state.news.favs);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getSavedArticles({ email, token }));
    } else {
      navigate("/login");
    }
  }, [token]);

  if (saved && saved.length > 0)
    return (
      <div
        id="general-headlines-container"
        className="flex flex-col overflow-x-hidden m-2"
      >
        <div id="companies-title" className="flex justify-center gap-2 mt-5">
          <span className="font-medium">SAVED ARTICLES</span>
        </div>
        <div className="flex flex-wrap justify-center items-center m-8 overflow-x:hidden">
          {saved.map((news, index) => (
            <div key={news?._id}>
              <NewsCard
                news={news.article}
                className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
                isFavourite={true}
              />
            </div>
          ))}
        </div>
      </div>
    );

  return <NoSavedArticles />;
};

export default SavedArticles;

import React, { useLayoutEffect } from "react";
import { useEffect } from "react";

function TweetsByHealthMinister() {
  useLayoutEffect(() => {
    window.twttr &&
      window.twttr.widgets &&
      typeof window.twttr.widgets.load === "function" &&
      window.twttr.widgets.load();
  });
  return (
    <div>
      <a
        className="twitter-timeline"
        data-weight="350"
        data-height="450"
        href="https://twitter.com/shailajateacher?ref_src=twsrc%5Etfw"
      >
        Tweets by shailajateacher
      </a>{" "}
    </div>
  );
}
export default TweetsByHealthMinister;

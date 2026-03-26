"use client";
import ReactCookieBot from "react-cookiebot";

const CookieBot = () => {
  return (
    <div>
      <ReactCookieBot domainGroupId={process.env.NEXT_PUBLIC_COOKIEBOT_ID ?? ""} />
    </div>
  );
};

export default CookieBot;

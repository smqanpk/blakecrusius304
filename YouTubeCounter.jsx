import React, { useState, useEffect } from "react";
import config from "./config.js";

const YouTubeCounter = () => {
  const [subscriberCount, setSubscriberCount] = useState();

  useEffect(() => {
    const { api_key, channel_id } = config;
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`;
    fetch(apiCall)
      .then(result => result.json())
      .then(data => {
        const count = data.items[0].statistics.subscriberCount;
        setSubscriberCount(count);
      });
  });

  return <div>{subscriberCount}</div>;
};

export default YouTubeCounter;

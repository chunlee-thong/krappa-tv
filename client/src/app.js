import React from "react";
import { ReactFlvPlayer } from "react-flv-player";

const App = () => {
  return (
    <div style={{ textAlign: "center", padding: "1rem 3rem" }}>
      <h1>Welcome to Krappa TV</h1>
      {/* <ReactHlsPlayer
        src="http://localhost:8000/live/chunlee.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      /> */}
      <ReactFlvPlayer
        url="https://krappa-tv-stream.chunleethong.com/live/krappa.flv"
        isMuted={false}
      />
    </div>
  );
};

export default App;

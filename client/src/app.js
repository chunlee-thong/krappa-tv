import React from "react";
import { ReactFlvPlayer } from "react-flv-player";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Krappa TV</h1>
      {/* <ReactHlsPlayer
        src="http://localhost:8000/live/chunlee.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      /> */}
      <ReactFlvPlayer
        url="http://localhost:3333/live/krappa.flv"
        heigh="800px"
        width="800px"
        isMuted={true}
      />
    </div>
  );
};

export default App;

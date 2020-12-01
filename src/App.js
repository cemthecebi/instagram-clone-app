import "./App.css";
import React, { useState } from "react";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "furkankocer",
      caption: "Best photo of the year",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
    {
      username: "malionde",
      caption: "Cool!",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
    {
      username: "cemthecebi",
      caption: "Amazing Day!",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
  ]);

  return (
    <div className="app">
      {/*Header*/}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          height="40px;"
          alt=""
        />
      </div>
      <h1> Cem's Instagram Clone</h1>

      {/*Posts*/}
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;

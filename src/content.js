import React from "react";
import "./App.css";
import logo from "./assests/logo.png";
import pic1 from "./assests/pic1.png";
import pic2 from "./assests/pic2.png";
import pic3 from "./assests/pic3.png";
import pic4 from "./assests/pic4.png";
import pic5 from "./assests/pic5.png";
import pic6 from "./assests/pic6.png";
import pic7 from "./assests/pic7.png";
function App() {
    return (
      <div className="App">
      <header className="header">
        <img src={logo} alt="Newspaper Logo" className="logo"/>
        <nav className="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#world">World</a></li>
            <li><a href="#politics">Politics</a></li>
            <li><a href="#business">Business</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#sports">Sports</a></li>
            <li><a href="#entertainment">Entertainment</a></li>
          </ul>
        </nav>
      </header>
   <section className="hero">
        <h4>Daily Updates</h4>
        <img src={pic7} alt="News" style={{width:"100%",marginBottom:"20px"}}/>
      </section>
  
      <div className="container">
        <main className="main-content">
          <article className="news-article">
            <h2>Entertainment News</h2>
            <img src={pic1} alt="News" className="news-image" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </article>
          <article className="news-article">
            <h2>Health News</h2>
            <img src={pic2} alt="News" className="news-image" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </article>
          
        </main>
  
        <aside className="sidebar">
          <section className="latest-news">
            <h3>Latest News</h3>
            <img src={pic4} alt="News" className="news-image" style={{height:"300px"}}/>
            <img src={pic5} alt="News" className="news-image"style={{height:"300px"}} />
            <img src={pic6} alt="News" className="news-image"style={{height:"300px"}} />
          </section>
          <section className="advertisement">
            <h3>Advertisement</h3>
            <img src={pic3} alt="Ad" className="ad-image" />
          </section>
        </aside>
      </div>
  
    </div>
  );
  }
  export default App;
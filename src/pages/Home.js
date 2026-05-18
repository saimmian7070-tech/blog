import { Link } from "react-router-dom";
import articles from "../data";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="container">


      {/* HERO */}
      <section className="hero">
        <h1>Tech, AI & Coding Made Simple</h1>
        <p>Actionable guides, tools, and tutorials for developers</p>
      </section>

      {/* MAIN */}
      <div className="main-container">

        <div className="posts">

          {/* FEATURED */}
          {articles[0] && (
            <Link to={`/post/${articles[0].slug}`} className="featured-post">
              <img src={articles[0].image} alt={articles[0].title} />
              <div className="featured-content">
                <span className="category">🔥 Featured</span>
                <h2>{articles[0].title}</h2>
              </div>
            </Link>
          )}

          {/* TOP 2 SIDE BY SIDE */}
          <div className="side-posts">
            {articles.slice(1, 3).map((post, i) => (
              <Link
                to={`/post/${post.slug}`}
                className="side-card"
                key={i}
              >
                <img src={post.image} alt={post.title} />
                <span className="category">{post.category}</span>
                <h4>{post.title}</h4>
              </Link>
            ))}
          </div>

          {/* GRID — ALL REMAINING */}
          <h2 className="section-title">Latest Articles</h2>

<div className="masonry-grid">
  {articles.slice(3).map((post, i) => (
    <Link
      to={`/post/${post.slug}`}
      className="masonry-card"
      key={i}
    >
      <img src={post.image} alt={post.title} />

      <div className="post-content">
        <span className="category">{post.category}</span>
        <h3>{post.title}</h3>
      </div>
    </Link>
  ))}
</div>


        </div>
        

        {/* SIDEBAR */}
        <aside className="sidebar">

          <div className="widget">
  <h3> About This Blog</h3>
  <p>
    Simple guides on AI tools, coding, and tech — explained in a way anyone can understand.
  </p>
</div>

          <div className="widget">
            <h3>Trending</h3>
            <ul>
              {articles.slice(0, 5).map((p, i) => (
                <li key={i}>
                  <Link to={`/post/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>

        </aside>

      </div>

      {/* FOOTER */}
      <footer className="footer">

  <div className="footer-container">

    {/* BRAND */}
    <div className="footer-brand">
      <h2>Cozicone</h2>
      <p>Tech, AI & Coding made simple for everyone.</p>
    </div>

    {/* LINKS */}
    <div className="footer-links">
      <h4>Quick Links</h4>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>

    {/* LEGAL */}
    <div className="footer-links">
      <h4>Legal</h4>
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/terms">Terms & Conditions</a>
      <a href="/disclaimer">Disclaimer</a>
    </div>

    {/* CONTACT */}
    <div className="footer-contact">
      <h4>Contact</h4>
      <p>contact@cozicone.com</p>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="footer-bottom">
    <p>© 2026 Cozicone. All rights reserved.</p>
  </div>

</footer>

    </div>
    </>
    
  );
}
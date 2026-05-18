import { useParams } from "react-router-dom";
import articles from "../data";

export default function Post() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) return <h2>Article not found</h2>;
  const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

  return (
  <div className="post-wrapper">

    <div className="post-container">

      <h1 className="post-title">{article.title}</h1>

      <div className="post-meta">
        <img src="https://i.pravatar.cc/40?img=12" alt="Author" />
        
        <div className="meta-text">
          <span className="author">Ayaan</span>
          <span className="dot">·</span>
          <span>{today}</span>
          <span className="dot">·</span>
          <span>5 min read</span>
        </div>
      </div>

      <div className="post-content">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      <div className="author-box">
        <img src="https://i.pravatar.cc/100?img=12" alt="Author" />
        <div>
          <h4>Ayaan</h4>
          <p>
            Writing simple and practical content about AI, coding, and modern tech.
          </p>
        </div>
      </div>

    </div>

  </div>
);
}
import { Link } from "react-router-dom";
import articles from "../data";

export default function Blog() {
  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h1>Blog</h1>

      {articles.map((post, index) => (
  <div 
    key={index} 
    style={{
      display: "flex",
      gap: "15px",
      marginBottom: "20px",
      background: "white",
      padding: "15px",
      borderRadius: "10px"
    }}
  >
    <img
      src={post.image}
      alt={post.title}
      style={{ width: "120px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
    />

    <div>
      <span style={{ fontSize: "12px", color: "#888" }}>
        {post.category}
      </span>

      <h3 style={{ margin: "5px 0" }}>
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
      </h3>

      <p style={{ fontSize: "14px", color: "#666" }}>
        Read full article →
      </p>
    </div>
  </div>
))}
    </div>
  );
}
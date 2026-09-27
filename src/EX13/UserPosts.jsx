import { useEffect, useState } from "react";
import { Form, Spinner } from "react-bootstrap";

export default function UserPosts() {
  const [userId, setUserId] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { signal: controller.signal })
      .then((res) => { if (!res.ok) throw new Error("Cannot load posts"); return res.json(); })
      .then(setPosts)
      .catch((err) => { if (err.name !== "AbortError") setError(err.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [userId]);
  return <section className="exercise"><h2>1. Data Fetching</h2><Form.Select style={{ maxWidth: 200 }} value={userId} onChange={(e) => setUserId(Number(e.target.value))}>{Array.from({ length: 10 }, (_, i) => <option key={i + 1} value={i + 1}>User {i + 1}</option>)}</Form.Select>{loading && <Spinner className="mt-3" />}{error && <p className="error-text">{error}</p>}{!loading && !error && posts.map((post) => <article key={post.id} className="border-bottom py-2"><h3 className="h6">{post.title}</h3><p>{post.body}</p></article>)}</section>;
}

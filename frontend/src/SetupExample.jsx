import { useEffect, useState } from "react";

function SetupExample() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((result) => setData(result.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Frontend + Backend Connected ✅</h1>
      <p>{data}</p>
    </div>
  );
}

export default SetupExample;
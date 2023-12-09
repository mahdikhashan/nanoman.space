import { useEffect, useState } from 'react';

function YourComponent() {
  const [mdxFiles, setMdxFiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/getMdxFiles');
      const data = await response.json();
      setMdxFiles(data.mdxFiles);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>MDX Files in Blog</h1>
      <ul>
        {mdxFiles.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
}

export default YourComponent;

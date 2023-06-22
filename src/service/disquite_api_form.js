import React, { useState } from 'react';
import axios from 'axios';

const CrawlerForm = ({ onCrawl }) => {
  const [disquiteId, setDisquiteId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/crawl', { disquite_id: disquiteId });
      onCrawl(response.data);
    } catch (error) {
      console.log('Error:', error);
      // Handle the error condition
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={disquiteId}
        onChange={(e) => setDisquiteId(e.target.value)}
        placeholder="Enter Disquite ID"
      />
      <button type="submit">Crawl</button>
    </form>
  );
};

// Rest of the code remains the same


const CrawledData = ({ data }) => {
  return (
    <div>
      <h2>Crawled Data</h2>
      {data.map((item, index) => (
        <div key={index}>
          <p>Date: {item.date}</p>
          <p>Title: {item.title}</p>
          <p>URL: {item.url}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

const DisquiteCrawlerForm = () => {
  const [crawledData, setCrawledData] = useState([]);

  const handleCrawl = (data) => {
    setCrawledData(data);
  };

  return (
    <div>
      <CrawlerForm onCrawl={handleCrawl} />
      <CrawledData data={crawledData} />
    </div>
  );
};

export default DisquiteCrawlerForm;

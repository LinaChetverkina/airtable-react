import { useState } from 'react';
import axios from 'axios';
import './App.css';

const text = {
  ru: {
    placeholder: 'Введите код отслеживания',
    button: 'Найти',
    title: 'Добрый день,',
    subtitle: 'Ваш код отслеживания'
  },
  en: {
    placeholder: 'Type your tracking number here',
    button: 'Search',
    title: "G'day!",
    subtitle: 'Your tracking number is'
  }
};

function App() {
  const [tracking, setTracking] = useState('');
  const [data, setData] = useState({ data: [] });

  const getData = async () => {
    const result = await axios.post(`${process.env.REACT_APP_API_URL}/track`, { trackingNumber: tracking });
    setData(result.data);
  };

  const handleInputChange = e => {
    setTracking(e.target.value);
  };

  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang") === "en" ? "en" : "ru";

  return (
    <div className="App">
      <div className="container">
        <div className="button-wrapper">
          <input type="text" placeholder={text[lang].placeholder} className="input-tracking" onChange={handleInputChange} />
          <button type="button" className="search-button" onClick={getData}>{text[lang].button}</button>
        </div>
        {data.data.length > 0 ? (
          <div className="result-container">
            <h1 className="title">{text[lang].title}</h1>
            <p className="sub-title">{text[lang].subtitle} {data.tracking_number}</p>
            <div className="results">
              {data.data.map((res, index) => (
                <div className={`result ${index % 2 === 1 ? 'white' : ''}`} key={index}>
                  <p className="date">{res.date}</p>
                  <p className="status">{res.stage}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;

// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <Routes>       
        <Route path="/" element={<Greeting />}/>
      </Routes>
    </div>
  );
}

ReactDOM.render(  
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root'),
);
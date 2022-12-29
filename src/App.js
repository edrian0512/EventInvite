import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BrowserRouter, } from 'react-router-dom';
import InviteList from './InviteList';
import InvCreate from './InvCreate';
import InvEdit from './InvEdit';

function App() {
  return (
    <div className="App mt-5">
      <h1>Simple Invite Calendar</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InviteList/>} />
          <Route path="/invite/create" element={<InvCreate/>} />
          <Route path="/invite/edit/:invid" element={<InvEdit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;

import React from 'react';

import './App.scss';
import { Header, Main, Nav } from './layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from './common/routes';

function App() {
  return (
    <div className="App">
      <div className="App-Drawer">
        <div className="App-Header">
          <Header />
        </div>

        <div className="App-Nav">
          <Nav />
        </div>
      </div>

      <div className="App-Main">
        <Main>
          <Routes>
            {routes.map(({ path, element }) => {
              return <Route key={path} path={path} element={element} />
            })}
            <Route path="/" element={<Navigate to="/home" />} />
            {/* <Route path="/not-found" element={<NotFound />} /> */}
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
}

export default App;

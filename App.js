import ReactDOM from 'react-dom/client';
import Header from './src/Header';
import Footer from './src/Footer';
import Body from './src/Body';
import React from 'react';

/**
 *
 * Header
 *    - Logo
 *    - Nav Items
 *
 * Body
 *    - Ride Header
 *        - Ride (Page Name)
 *        - Ride Options (Request, Reserve, price , explore)
 *
 *    - Request ride compenent
 *          - Text
 *          - Location Search
 *          - Destination Search
 *          - Buttons
 *              - See Price Button
 *              - Schedule Later Button
 *
 *  - Image
 *
 *  - Sign up
 *
 * Footer
 *    - Copyright
 *    - Links
 *
 */

const App = () => {
  return (
    <div className="App Layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

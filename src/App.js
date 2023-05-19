import "./App.css";

function App() {
  return (
    <div className="card">
      <img className="heroImage" src="/images/illustration-hero.svg" alt="illustration-hero" />
      <div className="content">
      <p className="title">Order Summary</p>
      <p className="description">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="priceSection">
        <img src="/images/icon-music.svg" alt="music-icon" />
        <div className="price">
          <span className="priceTitle">Annual Plan</span>
          <span className="subscription">$59.99/year</span>
        </div>
        <span className="changeText">Change</span>
      </div>
      <button className="btn btnText">Proceed to Payment</button>
      <p className="cancelText">Cancel Order</p>
      </div>
    </div>
  );
}

export default App;

/*
Order Summary

  You can now listen to millions of songs, audiobooks, and podcasts on any 
  device anywhere you like!

  Annual Plan
  $59.99/year

  Change

  Proceed to Payment
  Cancel Order
*/

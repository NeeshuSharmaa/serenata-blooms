import "./About.css";

export default function About() {
  return (
    <div className="about">
      <img className="about-img" src="/assets/images/smile.png" />

      <div className="about-content">
        <div>
          <h1>Welcome to Serenata Blooms!</h1>
          <p>Where Timeless Beauty Meets Unforgettable Moments </p>
        </div>

        <p>
          The finest quality freshly-cut blooms, each carefully selected
          directly from flower farms, hand-arranged by our expert florists,
          lovingly presented, and safely delivered in perfect condition.
        </p>
        <button className="discover-btn">
          Discover a World of Opulent Blossoms <b>{">"}</b>
        </button>
      </div>
    </div>
  );
}

import "./About.css";

export default function About() {
  return (
    <div className="about">
      <img className="about-img" src="/assets/images/smile.png" />

      <div className="about-content">
        <h1>ABOUT US</h1>
        <p>
          We don’t just send flowers. We help you care wildly. We treat every
          order like it’s our own. The joy and happiness that comes from sending
          and receiving flowers is made even more complete when each bloom is
          absolutely perfect and wonderfully fresh.
        </p>
        <p>
          The finest quality freshly-cut blooms, each carefully selected
          directly from flower farms, hand-arranged by our expert florists,
          lovingly presented, and safely delivered in perfect condition - that's
          the Serenata Blooms promise.
        </p>
        <button className="discover-btn">
          Discover a World of Opulent Blossoms <b>{">"}</b>
        </button>
      </div>
    </div>
  );
}

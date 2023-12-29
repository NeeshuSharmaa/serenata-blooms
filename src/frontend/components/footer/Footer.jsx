import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <small>©2023 Serenata Blooms | All Rights Reserved </small>
        <small>| Terms & Condition</small>
      </div>

      <div className="socials">
        <a href="https://github.com/NeeshuSharmaa">
          <img src="/assets/icons/github.svg" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/neeshusharmaa/">
          <img src="/assets/icons/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://twitter.com/neeshusharmaa">
          <img src="/assets/icons/twitter.svg" alt="twitter" />
        </a>
      </div>
    </footer>
  );
}

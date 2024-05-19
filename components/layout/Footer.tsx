import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-red py-4 text-center drop-shadow-xl">
      <p>
        Made with ☕️ and dedication &copy; {new Date().getFullYear()}{" "}
        <a href="https://github.com/wesenbergg" className="underline">
          Wesenbergg
        </a>
      </p>
    </footer>
  );
};

export default Footer;

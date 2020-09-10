import React from "react";

function Footer() {
  return (
    <div className="footer">
      {/* Using dynamic year */}
      <p>Developed by Elias ኤልያስ &copy; {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;

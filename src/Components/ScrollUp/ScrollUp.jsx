import "./scrollUp.css";

export default function ScrollUp() {
  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".scrollUp");
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show_scroll");
    } else {
      scrollUp.classList.remove("show_scroll");
    }
  });
  return (
    <a href="#home" className="scrollUp show_scroll">
      {" "}
      <i className="uil uil-arrow-up scroll__Up-icon"></i>
    </a>
  );
}

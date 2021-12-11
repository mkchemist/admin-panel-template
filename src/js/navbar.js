var sidebarTogglers = [].slice.call(
  document.querySelectorAll('[data-toggle="sidebar"]')
);

sidebarTogglers.map((toggler) => {
  let targetSelector =
    toggler.getAttribute("href") || toggler.getAttribute("data-target");
  let target = document.querySelector(targetSelector);
  toggler.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('test')
    if (!target) {
      throw new TypeError("toggler selector is not a valid HTMLElement");
    }

    if (target.classList.contains("sidebar-slide")) {
      target.classList.remove("sidebar-slide");
    } else {
      target.classList.add("sidebar-slide");
    }
  });
});

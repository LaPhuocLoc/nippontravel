function load() {
  let sIndex = 1;
  autoSlide();
  function autoSlide() {
    let s1 = document.getElementById("slide-s1");
    if (sIndex == 1) {
      s1.style.marginLeft="-11.11111%";
      sIndex++;
    } else if (sIndex == 2) {
      s1.style.marginLeft="-22.22222%";
      sIndex++;
    } else if (sIndex == 3) {
      s1.style.marginLeft="-33.33333%";
      sIndex++;
    } else if (sIndex == 4) {
      s1.style.marginLeft="-44.44444%";
      sIndex++;
    } else if (sIndex == 5) {
      s1.style.marginLeft="-55.55555%";
      sIndex++;
    } else if (sIndex == 6) {
      s1.style.marginLeft="-66.66666%";
      sIndex++;
    } else if (sIndex == 7) {
      s1.style.marginLeft="-77.77777%";
      sIndex++;
    } else if (sIndex == 8) {
      s1.style.marginLeft="-88.88888%";
      sIndex++;
    } else {
      s1.style.marginLeft="0";
      sIndex = 1;
    }
    setTimeout(autoSlide,4000);
  }
}
window.onload=load;
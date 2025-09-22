// Typing effect
const text = "Turning Ideas into Code | Building & Testing Smart Software.";
let i = 0;
function typingEffect(){
  if(i < text.length){
    document.getElementById("typing").textContent += text.charAt(i);
    i++;
    setTimeout(typingEffect, 150);
  }
}
typingEffect();

// Reveal on scroll
function revealOnScroll(){
  document.querySelectorAll(".reveal").forEach(r => {
    let windowHeight = window.innerHeight;
    let revealTop = r.getBoundingClientRect().top;
    if(revealTop < windowHeight - 100){ r.classList.add("active"); }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Certificate modal
function openCert(src){ document.getElementById('modalImg').src = src; document.getElementById('certModal').style.display='flex'; }
function closeCert(){ document.getElementById('certModal').style.display='none'; }

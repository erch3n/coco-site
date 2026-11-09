(function () {
  var data = window.COCO || {};
  var s = data.status || {};

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el && text) el.textContent = text;
  }

  // Status section
  setText("hero-chip", s.chip);
  setText("upto-chip", s.chip);
  setText("upto-headline", s.headline);
  setText("upto-note", s.note);
  setText("upto-updated", s.updated);
  if (s.photo) document.getElementById("upto-photo").src = s.photo;

  // Gallery
  var grid = document.getElementById("gallery-grid");
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lb-img");
  var lbCap = document.getElementById("lb-cap");

  (data.gallery || []).forEach(function (item) {
    var fig = document.createElement("figure");
    var img = document.createElement("img");
    img.src = item.file;
    img.alt = item.caption || "Coco";
    img.loading = "lazy";
    var cap = document.createElement("figcaption");
    cap.textContent = item.caption || "";
    fig.appendChild(img);
    fig.appendChild(cap);
    fig.addEventListener("click", function () {
      lbImg.src = item.file;
      lbImg.alt = img.alt;
      lbCap.textContent = item.caption || "";
      lb.hidden = false;
    });
    grid.appendChild(fig);
  });

  function closeLb() { lb.hidden = true; }
  document.getElementById("lb-close").addEventListener("click", closeLb);
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLb(); });
})();

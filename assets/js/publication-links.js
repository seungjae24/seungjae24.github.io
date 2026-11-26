// Use the same action row for the Scholar citation and the publication resources.
for (const entry of document.querySelectorAll(".publications .bibliography li")) {
  const links = entry.querySelector(".links");
  const scholar = entry.querySelector('.badges a[aria-label="Google Scholar link"]');
  if (!links || !scholar) continue;

  const badges = scholar.parentElement;
  const citationLabel = scholar.querySelector("img")?.alt;
  if (citationLabel) scholar.title = citationLabel;
  scholar.textContent = "Scholar";
  scholar.classList.add("btn", "btn-sm", "z-depth-0");
  links.append(" ", scholar);
  if (!badges.childElementCount) badges.remove();
}

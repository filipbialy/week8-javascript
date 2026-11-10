/* ==========================================================
   JavaScript checkpoint 02: publications from data
   This file is linked only from publications.html.
   ========================================================== */

// 1. The data: an array with one object per publication
const publications = [
  {
    type: "Book",
    authors: "Biały, F.",
    title: "Challenging Digital Capitalism: Ethics, Politics, and Ideology in the Post-AI World",
    journal: "",
    status: "In preparation"
  },
  {
    type: "Journal article",
    authors: "Tao, Y., Ryan, M., Biały, F. et al.",
    title: "Generative AI policies in UK higher education",
    journal: "Discover Education",
    status: "Under review"
  },
  {
    type: "Journal article",
    authors: "Gibson, R., Biały, F. and Gaughan, C.",
    title: "Linking survey and social media data",
    journal: "",
    status: "In preparation"
  },
  {
    type: "Journal article",
    authors: "Biały, F., Khwaileh, F., Wang, C. and Feenstra, K.",
    title: "AI literacy and the Global South: between digital upskilling and technocolonialism",
    journal: "",
    status: "In preparation"
  },
  {
    type: "Report",
    authors: "Gibson, R., Gaughan, C., Biały, F. and Cantijoch, M.",
    title: "Working with Linked Data",
    journal: "",
    status: "Forthcoming"
  }
];

// 2. Find the parts of the page we need
const list = document.querySelector("#publication-list");
const count = document.querySelector("#publication-count");
const filterButtons = document.querySelectorAll(".filter-button");

// 3. Show a list of publications on the page
function showPublications(items) {
  list.innerHTML = ""; // remove the publications shown before

  for (const item of items) {
    // Build the reference. Book and report titles are in italics,
    // article titles are not. Journal names are in italics.
    let citation = item.authors + " ";

    if (item.type === "Journal article") {
      citation += `${item.title}.`;
    } else {
      citation += `<cite>${item.title}</cite>.`;
    }

    if (item.journal !== "") {
      citation += ` <cite>${item.journal}</cite>.`;
    }

    const entry = document.createElement("li");
    entry.innerHTML = `
      <p class="citation">${citation}</p>
      <p class="status">${item.type} · ${item.status}</p>
    `;
    list.append(entry);
  }

  count.textContent = `Showing ${items.length} of ${publications.length} publications`;
}

// 4. Start by showing all publications
showPublications(publications);

// 5. When a filter button is clicked, show only the matching publications
for (const button of filterButtons) {
  button.addEventListener("click", function () {
    // Mark the clicked button as selected, and all the others as not selected
    for (const otherButton of filterButtons) {
      otherButton.setAttribute("aria-pressed", otherButton === button);
    }

    const type = button.getAttribute("data-type");

    if (type === "all") {
      showPublications(publications);
    } else {
      const matching = publications.filter(function (item) {
        return item.type === type;
      });
      showPublications(matching);
    }
  });
}

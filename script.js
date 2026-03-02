const trendingContainer = document.getElementById("trending");
const topRatedContainer = document.getElementById("topRated");

const sampleMovies = [
  "https://vignette.wikia.nocookie.net/money-heist/images/2/2a/Money_Heist_Part_4_poster.jpg/revision/latest?cb=20200312172240",
  "https://m.media-amazon.com/images/M/MV5BZGE4Y2Q5MzAtY2FlYS00M2ZiLWJlMjMtOWNhMzMwYjU2Y2UwXkEyXkFqcGc@._V1_.jpg",
  "https://3.bp.blogspot.com/-IO-2Bw6KjKc/WR9SJNYwnUI/AAAAAAABBlA/-8ybdgZSEVQERGLoRPlQIIguFQpjvLD_gCLcB/s1600/baywatch-movie-2017.jpg",
  "https://webcache.elisaviihde.fi/images/elisa/7/8/29287/29287-1-cover-fi-1583149325.jpg",
  "https://www.themoviedb.org/t/p/original/momkKuWburNTqKBF6ez7rvhYVhE.jpg",
  "https://www.wikibiodata.com/wp-content/uploads/2020/06/777-Charlie.jpg",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/oppenheimer-poster.jpg",
  "https://stat5.bollywoodhungama.in/wp-content/uploads/2019/03/RRR-2022.jpeg",
];
const trending = [
  {
    title: "Red Notice",
    url: "https://cps-static.rovicorp.com/2/Open/Netflix/Program/38472646/_derived_jpg_q90_310x470_m0/Red_Notice_PA_2x3_27_1635852053404_1.jpg",
  },
  {
    title: "The Gray Man",
    url: "https://image.tmdb.org/t/p/w300/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
  },
];

const tvSeries = [
  {
    title: "Stranger Things",
    url: "https://image.tmdb.org/t/p/w300/q719jXXEzOoYaps6babgKnONONX.jpg",
  },
  {
    title: "The Witcher",
    url: "https://wallpaperbat.com/img/175935-the-witcher-netflix-tv-series-release-date-cast-story.jpg",
  },
];

const movies = [
  "https://vignette.wikia.nocookie.net/money-heist/images/2/2a/Money_Heist_Part_4_poster.jpg/revision/latest?cb=20200312172240",
  "https://m.media-amazon.com/images/M/MV5BZGE4Y2Q5MzAtY2FlYS00M2ZiLWJlMjMtOWNhMzMwYjU2Y2UwXkEyXkFqcGc@._V1_.jpg",
  "https://3.bp.blogspot.com/-IO-2Bw6KjKc/WR9SJNYwnUI/AAAAAAABBlA/-8ybdgZSEVQERGLoRPlQIIguFQpjvLD_gCLcB/s1600/baywatch-movie-2017.jpg",
  "https://webcache.elisaviihde.fi/images/elisa/7/8/29287/29287-1-cover-fi-1583149325.jpg",
  "https://www.themoviedb.org/t/p/original/momkKuWburNTqKBF6ez7rvhYVhE.jpg",
  "https://www.wikibiodata.com/wp-content/uploads/2020/06/777-Charlie.jpg",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/oppenheimer-poster.jpg",
  "https://stat5.bollywoodhungama.in/wp-content/uploads/2019/03/RRR-2022.jpeg",
];

function loadImages(container, items) {
  container.innerHTML = "";
  items.forEach((item) => {
    const img = document.createElement("img");
    if (typeof item === "string") {
      img.src = item;
      img.alt = "Movie poster";
    } else {
      img.src = item.url;
      img.alt = item.title;
    }
    container.appendChild(img);
  });
}

// Initial load for each section
loadImages(document.getElementById("trending"), trending);
loadImages(document.getElementById("tvSeries"), tvSeries);
loadImages(document.getElementById("movieList"), movies);
loadImages(document.getElementById("popularList"), trending); // Example
loadImages(document.getElementById("myList"), []); // Empty for now
loadImages(document.getElementById("topRated"), sampleMovies);

// Toggle hamburger menu for mobile
function toggleNav() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Show only the selected tab
function showTab(tab) {
  document
    .querySelectorAll(".tab-content")
    .forEach((sec) => (sec.style.display = "none"));
  document.getElementById(tab).style.display = "block";
  // Hide nav on mobile after click
  document.querySelector(".nav-links").classList.remove("active");
}

// Search movies and series by title
function searchContent() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const allSections = [
    "trending",
    "tvSeries",
    "movieList",
    "popularList",
    "myList",
  ];
  allSections.forEach((id) => {
    const container = document.getElementById(id);
    if (container) {
      Array.from(container.children).forEach((img) => {
        const alt = img.alt ? img.alt.toLowerCase() : "";
        img.style.display = alt.includes(query) ? "" : "none";
      });
    }
  });
}

// Optional: Show only the home tab on load
document
  .querySelectorAll(".tab-content")
  .forEach((sec) => (sec.style.display = "none"));
document.getElementById("home").style.display = "block";

/* =================================================
   PAGE NAVIGATION (Portfolio / Blog / Favorites)
   - Shows selected page
   - Hides the button of current page
================================================= */
function showPage(page) {

  // Hide all pages
  document.querySelectorAll('.page').forEach(section => {
    section.classList.remove('active');
  });

  // Show selected page
  document.getElementById(page).classList.add('active');

  // Toggle top-right buttons dynamically
  document.getElementById('btn-portfolio').style.display =
    page === 'portfolio' ? 'none' : 'inline-block';

  document.getElementById('btn-blog').style.display =
    page === 'blog' ? 'none' : 'inline-block';

  document.getElementById('btn-fav').style.display =
    page === 'favorites' ? 'none' : 'inline-block';
}

// Default page on load
showPage('portfolio');


/* =================================================
   BLOG STORIES (Modal Open / Close)
================================================= */

// Open full story in modal
function openStory(id) {

  // All stories data (easy to edit / extend)
  const stories = {
    1: {
      title: "How I Started Learning Data Analytics",
      text: `I began with curiosity and confusion.

Slowly, datasets started making sense, and patterns began to speak.
This journey taught me patience, logic, and the importance of asking
the right questions.

Learning data analytics changed how I see problems and decisions.`
    },

    2: {
      title: "Why Consistency Matters More Than Motivation",
      text: `Motivation is temporary, but habits are permanent.

Even on days when energy is low, showing up for a short session
creates momentum. Over time, small efforts compound into big results.

Consistency quietly builds success.`
    }
  };

  // Inject story content into modal
  document.getElementById("storyTitle").innerText = stories[id].title;
  document.getElementById("storyText").innerText = stories[id].text;

  // Show modal
  document.getElementById("storyModal").style.display = "block";
}

// Close story modal
function closeStory() {
  document.getElementById("storyModal").style.display = "none";
}


/* =================================================
   FAVORITES (Whole Card Click Handling)
================================================= */

// Open favorite link when card is clicked
function openFav(card) {
  const url = card.getAttribute("data-link");

  if (url) {
    window.open(url, "_blank"); // Open in new tab
  }
}

/* =================================================
   PROJECTS (Whole Card Click Handling)
================================================= */
function openProject(card) {
  const url = card.getAttribute("data-link");

  if (url) {
    window.open(url, "_blank"); // Open project in new tab
  }
}

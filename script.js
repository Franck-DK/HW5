// Function to Load Articles from Local Storage
function loadArticles() {
  const articlesContainer = document.getElementById("articles");
  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  
  articlesContainer.innerHTML = ""; // Clear existing content
  
  articles.forEach((article, index) => {
    articlesContainer.innerHTML += `
      <div class="article">
        <h2>${article.title}</h2>
        <p>${article.content}</p>
        <button onclick="deleteArticle(${index})">Delete</button>
      </div>
    `;
  });

  if (articles.length === 0) {
    articlesContainer.innerHTML = "<p>No articles published yet.</p>";
  }
}

// Function to Delete an Article
function deleteArticle(index) {
  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  
  if (confirm("Are you sure you want to delete this article?")) {
    articles.splice(index, 1); // Remove the article at the given index
    localStorage.setItem("articles", JSON.stringify(articles)); // Update local storage
    loadArticles(); // Reload articles to reflect changes
  }
}

// Function to Save a New Article
function publishArticle(event) {
  event.preventDefault();
  
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  
  if (title && content) {
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    articles.push({ title, content });
    localStorage.setItem("articles", JSON.stringify(articles));
    alert("Article published successfully!");
    window.location.href = "index.html"; // Redirect to home page
  } else {
    alert("Please fill out both the title and content fields.");
  }
}

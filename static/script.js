async function fetchNews() {

    // gets the params
    let country = document.getElementById("country").value;
    let category = document.getElementById("category").value;
    let query = document.getElementById("query").value.trim();
    
    let apiUrl = `/get_news?country=${country}&category=${category}`;
    if (query) {
        apiUrl += `&query=${query}`;
    }

    // send request and receive reponse from the server
    let response = await fetch(apiUrl);
    let articles = await response.json();


    let container = document.getElementById("news-container");
    container.innerHTML = "";

    // If the api found no news, the news countainer will be empty
    if (articles.length === 0) {
        container.innerHTML = "<p class='text-center text-gray-600'>No news found.</p>";
        return;
    }

    // adds each article to the news container
    articles.forEach(article => {
        let div = document.createElement("div");
        div.classList.add("article", "bg-gray-50", "p-4", "rounded-lg", "shadow-md");

        let imageHTML = article.image ? `<img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover mb-4 rounded-lg">` : "";

        div.innerHTML = `
            ${imageHTML}
            <h2 class="text-xl font-bold">${article.title}</h2>
            <p class="text-gray-700">${article.description || "No description available"}</p>
            <p><a href="${article.url}" target="_blank" class="text-blue-500">Read more</a></p>
        `;
        
        container.appendChild(div);
    });
}
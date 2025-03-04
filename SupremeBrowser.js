function searchFunction() {
    const query = document.getElementById("searchInput").value.trim();

    if (query === "") {
        alert("Please enter something to search!");
        return;
    }

    // Redirect to Google with the search query
    window.location.href = `https://www.duckduckgo.com/search?q=${query}`;
}

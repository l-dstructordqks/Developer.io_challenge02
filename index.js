fetch(
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
)
  .then((response) => response.json())
  .then((data) => {
    const quotes = data;

    const author = document.querySelector('.quote-author');
    const quote = document.querySelector('.quote');
    const tagsContainer = document.querySelector('.tags-container');
    
    function displayRandomQuote() {
      // Function to display a random quote
      let random = Math.floor(Math.random() * 21);
      const tags = document.querySelectorAll('.quote-tags').forEach(element => element.remove());

      quote.textContent = '"' +quotes[random].quote+ '"';
      //quote.id.add("random");
      quote.id = random;
        author.textContent = quotes[random].author;
        quotes[random].tags.forEach(element => {
        let newTag = document.createElement("p");
        newTag.classList.add("quote-tags");
        newTag.textContent = element

        tagsContainer.appendChild(newTag);
        
        console.log(element);
    });
      
    }

    displayRandomQuote();

    document
      .getElementById("randomButton")
      .addEventListener("click", displayRandomQuote);

    document.getElementById("copyButton").addEventListener("click", () => {
      // Function to copy quote to clipboard
      navigator.clipboard.writeText(quotes[quote.id])
      .then(() => {
          alert("Quote copied to clipboard!");
        })
        .catch(err => {
          console.error("Failed to copy text: ", err);
        });
    });
  })
  .catch((error) => {
    console.error("Error fetching quotes:", error);
  });
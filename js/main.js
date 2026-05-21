const form = document.querySelector("form");
const input = document.querySelector("input");
const gifContainer = document.querySelector(".gif-container");

const apiKey = "y17ELSMqzX6ohKjBRddl0Ys6o6P6b29q";

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const searchValue = input.value;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchValue}&limit=12`)
        .then(response => response.json())
        .then(data => {

            gifContainer.innerHTML = "";

            data.data.forEach(function(gif) {

                const img = document.createElement("img");

                img.src = gif.images.fixed_height.url;

                gifContainer.appendChild(img);
            });
        });
    }); 

        




   
   

    


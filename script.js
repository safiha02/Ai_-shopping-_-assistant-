function recommend() {
  let request = document.getElementById("request").value.toLowerCase();
  let result = document.getElementById("result");

  if (request.trim() === "") {
    result.innerHTML = "⚠️ Please enter what you are looking for.";
  }
  else if (request.includes("laptop")) {
    result.innerHTML =
      "💻 Recommendation: Choose a laptop with a modern processor, 8GB+ RAM and SSD storage for coding.";
  }
  else if (request.includes("phone")) {
    result.innerHTML =
      "📱 Recommendation: Look for good battery life, reliable performance and sufficient storage.";
  }
  else if (request.includes("headphone")) {
    result.innerHTML =
      "🎧 Recommendation: Look for comfortable headphones with good battery life and clear sound.";
  }
  else {
    result.innerHTML =
      "🤖 Recommendation: Please provide more details about the product you need.";
  }
}

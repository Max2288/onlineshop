function handleLikeClick() {
    // Get the current number of likes
    const likeCount = parseInt(document.getElementById("like-count").innerText);
  
    // Check if the like count is equal to 10
    if (likeCount === 9) {
      // Set the like count to 0
      document.getElementById("like-count").innerText = 0;
    } else {
      // Increment the number of likes
      const newLikeCount = likeCount + 1;
      // Update the number of likes in the HTML
      document.getElementById("like-count").innerText = newLikeCount;
    }
  }
  
  document.getElementById("like-button").addEventListener("click", handleLikeClick);
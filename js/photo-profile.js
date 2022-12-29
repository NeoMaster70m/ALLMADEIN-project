// Get a reference to the submit button
const button = document.getElementById("upload-button");

// Handle button click
button.addEventListener("click", function() {
  // Show the file input field
  document.getElementById("photo-input").click();
});

// Handle file selection
document.getElementById("photo-input").addEventListener("change", function() {
  // Check if a file has been selected
  const file = this.files[0];
  if (!file) {
    return;
  }

  // Update the profile photo and submit button
  document.getElementById("profile-photo").src = URL.createObjectURL(file);
  button.innerHTML = "Replace";
});

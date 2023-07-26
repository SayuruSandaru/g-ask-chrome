document.addEventListener('DOMContentLoaded', function () {
    const apiKeyInput = document.getElementById('api-key');
    const saveButton = document.getElementById('save-button');
    const clearButton = document.getElementById('clear-button');
    const toggleButton = document.getElementById('toggle-button');

    // Load the stored API key from local storage, if available
    const storedApiKey = localStorage.getItem('gask-api-key');
    if (storedApiKey != "") {
      const maskedKey = storedApiKey.slice(0, 5) + '*****' + storedApiKey.slice(-5);
      document.getElementById('stored-key').textContent = `Stored API Key: ${maskedKey}`;
    }

    // Save the API key to local storage on button click
    saveButton.addEventListener('click', function () {
      const apiKey = apiKeyInput.value.trim();
      if (apiKey.length > 0) {
        localStorage.setItem('gask-api-key', apiKey);
        const maskedKey = apiKey.slice(0, 5) + '*****' + apiKey.slice(-5);
        document.getElementById('stored-key').textContent = `Stored API Key: ${maskedKey}`;
        apiKeyInput.value = ''; // Clear the input field after saving
      }
    });

    toggleButton.addEventListener('click', function () {
      const icon = document.getElementById('icon-btn');
      if(apiKeyInput.type === "password"){
        apiKeyInput.type = "text";
        icon.src = "../assets/eye.svg";
      }else{
        apiKeyInput.type = "password";
        icon.src = "../assets/eye-off.svg";
      }
    });

    clearButton.addEventListener('click', function () {
      document.getElementById("api-key").value = "";
    });
  });
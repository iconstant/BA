// script.js
document.addEventListener('DOMContentLoaded', function() {
    const filePath = '\src\main\java\Functor.java'; // Update this with the path to your file

    const fileContentDiv = document.getElementById('fileContent');

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(content => {
            fileContentDiv.textContent = content;
        })
        .catch(error => {
            fileContentDiv.textContent = `Error: ${error.message}`;
        });
});

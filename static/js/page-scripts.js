window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const file = params.get('file');
    const container = document.getElementById("markdown-content");

    if (!file) {
        container.innerHTML = "<p>No markdown file specified. Use <code>?file=path/to/file.md</code> in the URL.</p>";
        return;
    }

    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Markdown file not found.");
            return response.text();
        })
        .then(md => {
            container.innerHTML = marked.parse(md);
            MathJax.typeset(); // Re-render MathJax
        })
        .catch(err => {
            container.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
        });
};

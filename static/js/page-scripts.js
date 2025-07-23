window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const file = params.get('file');
    const container = document.getElementById("markdown-content");
    const tocList = document.getElementById("toc-list");

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
            buildTOC();
        })
        .catch(err => {
            container.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
        });

    function buildTOC() {
        if (!tocList) return; // 容错：页面没toc-list时不执行

        tocList.innerHTML = '';
        const headers = container.querySelectorAll('h1, h2, h3');
        if (headers.length === 0) {
            tocList.innerHTML = '<li>无目录项</li>';
            return;
        }

        headers.forEach(header => {
            if (!header.id) {
                header.id = header.textContent.trim().toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]/g, '');
            }

            const li = document.createElement('li');
            li.style.marginLeft = (parseInt(header.tagName[1]) - 1) * 15 + 'px';

            const a = document.createElement('a');
            a.href = '#' + header.id;
            a.textContent = header.textContent;
            a.style.textDecoration = 'none';
            a.style.color = '#0d6efd'; // bootstrap 主色

            a.addEventListener('mouseenter', () => { a.style.textDecoration = 'underline'; });
            a.addEventListener('mouseleave', () => { a.style.textDecoration = 'none'; });

            li.appendChild(a);
            tocList.appendChild(li);
        });
    }
};

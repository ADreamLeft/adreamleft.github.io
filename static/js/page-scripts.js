window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const file = params.get('file');
    const container = document.getElementById("markdown-content");
    const pageTitle = document.getElementById("page-title");
    const tocList = document.getElementById("toc-list");

    if (!file) {
        container.innerHTML = "<p>No markdown file specified. Use <code>?file=path/to/file.md</code> in the URL.</p>";
        return;
    }

    // 从 file 字符串中提取文件名（去掉路径和后缀）
    const filename = file.split('/').pop();  // 取最后一部分
    const titleText = filename.replace(/\.md$/i, '');  // 去掉.md后缀（不区分大小写）

    // 设置居中标题
    if (pageTitle) {
        pageTitle.textContent = titleText;
        pageTitle.style.textAlign = "center";
        pageTitle.style.marginTop = "80px";
        pageTitle.style.marginBottom = "40px";
        pageTitle.style.fontWeight = "700";
        pageTitle.style.fontSize = "2rem";
    }

    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Markdown file not found.");
            return response.text();
        })
        .then(md => {
            container.innerHTML = marked.parse(md);
            if (window.MathJax && MathJax.startup && MathJax.startup.promise) {
                MathJax.startup.promise.then(() => {
                    MathJax.typeset();
                });
            }
            // 生成目录
            if (!tocList) {
                console.error("目录容器 toc-list 找不到");
                return;
            }
            tocList.innerHTML = '';

            const headers = container.querySelectorAll('h1, h2');
            headers.forEach((header, index) => {
                if (!header.id) {
                    header.id = 'header-' + index;
                }
                const li = document.createElement('li');
                li.style.marginLeft = header.tagName === 'H2' ? '20px' : '0px';

                const a = document.createElement('a');
                a.href = '#' + header.id;
                a.textContent = header.textContent;
                a.style.cursor = 'pointer';
                a.style.color = '#007bff';
                a.style.textDecoration = 'none';

                a.addEventListener('mouseover', () => { a.style.textDecoration = 'underline'; });
                a.addEventListener('mouseout', () => { a.style.textDecoration = 'none'; });

                li.appendChild(a);
                tocList.appendChild(li);
            });
        })
        .catch(err => {
            container.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
            tocList.innerHTML = `<p style="color:red;">加载目录失败</p>`;
        });
};

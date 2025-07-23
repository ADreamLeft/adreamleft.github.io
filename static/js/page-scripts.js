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
            // 先把 markdown 转成 html
            container.innerHTML = marked.parse(md);

            MathJax.typeset();

            // 给所有 h1,h2,h3 添加 id，方便跳转
            const headers = container.querySelectorAll('h1, h2, h3');
            if (headers.length === 0) {
                tocList.innerHTML = '<li>无目录项</li>';
                return;
            }

            headers.forEach(header => {
                if (!header.id) {
                    header.id = header.textContent.trim()
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/[^\w\-]/g, '');
                }
            });

            // 设置页面标题，取第一个h1文本，如果没有就用文件名
            const firstH1 = container.querySelector('h1');
            if (firstH1) {
                pageTitle.textContent = firstH1.textContent;
                firstH1.style.display = 'none';  // 避免标题重复显示
            } else {
                pageTitle.textContent = file;
            }

            // 构建目录
            tocList.innerHTML = ''; // 先清空
            headers.forEach(header => {
                const li = document.createElement('li');
                // 根据标题等级缩进，h1无缩进，h2缩进15px，h3缩进30px
                li.style.marginLeft = (parseInt(header.tagName[1]) - 1) * 15 + 'px';

                const a = document.createElement('a');
                a.href = '#' + header.id;
                a.textContent = header.textContent;
                a.style.textDecoration = 'none';
                a.style.color = '#0d6efd';

                // 鼠标悬停样式
                a.addEventListener('mouseenter', () => { a.style.textDecoration = 'underline'; });
                a.addEventListener('mouseleave', () => { a.style.textDecoration = 'none'; });

                li.appendChild(a);
                tocList.appendChild(li);
            });
        })
        .catch(err => {
            container.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
            tocList.innerHTML = '<li>加载目录失败</li>';
        });
};

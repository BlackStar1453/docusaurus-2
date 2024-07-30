// utils.js - 放置 checkGoogleFavicon 函数的文件

export function checkGoogleFavicon() {
    var faviconUrl = 'http://google.com/favicon.ico'

    var img = new Image();

    img.onload = function() {
        window.location.href = 'https://chromewebstore.google.com/detail/gpt-tutor/icbphcgipdflenaemgkhmigfiaelpbnn?hl=en'
    };

    img.onerror = function() {
        alert('加载 Google Favicon 失败，请手动下载安装包进行安装。')

        // 创建一个下载链接
        var downloadLink = document.createElement('a')
        downloadLink.href = './static/file/chromium.zip' // 本地文件路径
        downloadLink.download = 'gpt-tutor-installer.zip'; // 下载时文件名
        downloadLink.style.display = 'none'

        // 将链接添加到文档中
        document.body.appendChild(downloadLink)

        // 模拟点击下载链接
        downloadLink.click()

        // 清理文档中的下载链接
        document.body.removeChild(downloadLink);
    }

    img.src = faviconUrl;
}

# PDF 在线预览服务

仅支持预览已上传到服务器的 PDF，即带有`http(s)`链接的 PDF，不支持预览本地 PDF

## 选型

[mozilla/pdf.js](https://github.com/mozilla/pdf.js)

## 版本

[pdfjs-2.5.207-es5](https://github.com/mozilla/pdf.js/releases/download/v2.5.207/pdfjs-2.5.207-es5-dist.zip)

- 为确保兼容性，必须选择带有`es5`的

- 为什么使用这个版本？

  1. 后续版本即便是 dist 带有`es5`也会出现兼容性不佳的情况，部分手机无法打开页面，打开后报错
  2. igix 使用的也是该版本

## 部署

1. 解压 zip 文件，获得`pdfjs-2.5.207-es5-dist`目录，将该目录放到`nginx/html`目录下；

   ::: warning 提示
   如果服务器系统是 linux，应当在 linux 下解压，不要在 windows 下解压
   :::

2. 修改 nginx 配置文件

   ```xx.conf
   location /pdfviewer {
       alias  html/pdfjs-2.5.207-es5-dist;
   }
   ```

## 调用

iframe 或 webview 均可：`${ORIGIN} + /pdfviewer/web/viewer.html?file= + ${PDF_URL}`

其中：

- `${ORIGIN}`为 协议 + 域名 + 端口号
- `${PDF_URL}`为 PDF 文件的 http 链接

比如：`https://SDF_IP:48180/pdfviewer/web/viewer.html?file=https://SDF_IP:48180/zhuandai/16930310622692.pdf`

## ZDB 系统

### 客制化

- 修改域名白名单

  文件：pdfjs-2.5.207-es5-dist/web/viewer.js(第 2164 行)

  修改成：

  ```javascript
  var HOSTED_VIEWER_ORIGINS = [
    "null",
    // 生产环境
    "https://SDF_IP:48080",
    // 测试环境
    "https://SDF_IP:48180",
    // 前端开发本地
    "http://localhost:8080",
  ];
  ```

  不修改的话使用上述域名页面会报错

### 部署说明

ZDB 的 PDF 在线预览服务部署在`36 测试服务器`上的`/usr/local/nginx-1.24.0/html/pdfjs-2.5.207-es5-dist/`目录

生产环境与测试环境调用的都是`36`测试服务器的 PDF 在线预览服务

import{_ as i,r as t,o as d,c as o,b as e,d as n,e as a,a as l}from"./app-af3be413.js";const c={},p=e("h1",{id:"pdf-在线预览服务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pdf-在线预览服务","aria-hidden":"true"},"#"),n(" PDF 在线预览服务")],-1),r=e("p",null,[n("仅支持预览已上传到服务器的 PDF，即带有"),e("code",null,"http(s)"),n("链接的 PDF，不支持预览本地 PDF")],-1),u=e("h2",{id:"选型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#选型","aria-hidden":"true"},"#"),n(" 选型")],-1),h={href:"https://github.com/mozilla/pdf.js",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"版本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#版本","aria-hidden":"true"},"#"),n(" 版本")],-1),m={href:"https://github.com/mozilla/pdf.js/releases/download/v2.5.207/pdfjs-2.5.207-es5-dist.zip",target:"_blank",rel:"noopener noreferrer"},_=l(`<ul><li><p>为确保兼容性，必须选择带有<code>es5</code>的</p></li><li><p>为什么使用这个版本？</p><ol><li>后续版本即便是 dist 带有<code>es5</code>也会出现兼容性不佳的情况，部分手机无法打开页面，打开后报错</li><li>igix 使用的也是该版本</li></ol></li></ul><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><ol><li><p>解压 zip 文件，获得<code>pdfjs-2.5.207-es5-dist</code>目录，将该目录放到<code>nginx/html</code>目录下；</p><div class="custom-container warning"><p class="custom-container-title">提示</p><p>如果服务器系统是 linux，应当在 linux 下解压，不要在 windows 下解压</p></div></li><li><p>修改 nginx 配置文件</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /pdfviewer</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span>  html/pdfjs-2.5.207-es5-dist</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="调用" tabindex="-1"><a class="header-anchor" href="#调用" aria-hidden="true">#</a> 调用</h2><p>iframe 或 webview 均可：<code>\${ORIGIN} + /pdfviewer/web/viewer.html?file= + \${PDF_URL}</code></p><p>其中：</p><ul><li><code>\${ORIGIN}</code>为 协议 + 域名 + 端口号</li><li><code>\${PDF_URL}</code>为 PDF 文件的 http 链接</li></ul><p>比如：<code>https://SDF_IP:48180/pdfviewer/web/viewer.html?file=https://SDF_IP:48180/zhuandai/16930310622692.pdf</code></p><h2 id="zdb-系统" tabindex="-1"><a class="header-anchor" href="#zdb-系统" aria-hidden="true">#</a> ZDB 系统</h2><h3 id="客制化" tabindex="-1"><a class="header-anchor" href="#客制化" aria-hidden="true">#</a> 客制化</h3><ul><li><p>修改域名白名单</p><p>文件：pdfjs-2.5.207-es5-dist/web/viewer.js(第 2164 行)</p><p>修改成：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token constant">HOSTED_VIEWER_ORIGINS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;null&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 生产环境</span>
  <span class="token string">&quot;https://SDF_IP:48080&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 测试环境</span>
  <span class="token string">&quot;https://SDF_IP:48180&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 前端开发本地</span>
  <span class="token string">&quot;http://localhost:8080&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不修改的话使用上述域名页面会报错</p></li></ul><h3 id="部署说明" tabindex="-1"><a class="header-anchor" href="#部署说明" aria-hidden="true">#</a> 部署说明</h3><p>ZDB 的 PDF 在线预览服务部署在<code>36 测试服务器</code>上的<code>/usr/local/nginx-1.24.0/html/pdfjs-2.5.207-es5-dist/</code>目录</p><p>生产环境与测试环境调用的都是<code>36</code>测试服务器的 PDF 在线预览服务</p>`,14);function f(b,k){const s=t("ExternalLinkIcon");return d(),o("div",null,[p,r,u,e("p",null,[e("a",h,[n("mozilla/pdf.js"),a(s)])]),v,e("p",null,[e("a",m,[n("pdfjs-2.5.207-es5"),a(s)])]),_])}const g=i(c,[["render",f],["__file","index.html.vue"]]);export{g as default};
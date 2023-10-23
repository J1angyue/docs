import{_ as a,o as n,c as s,a as e}from"./app-af3be413.js";const l={},t=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-u</span> root <span class="token punctuation">\\</span>
 <span class="token parameter variable">--publish</span> <span class="token number">9090</span>:80 <span class="token punctuation">\\</span>
 <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\\</span>
 <span class="token parameter variable">--volume</span> /usr/local/gitlab/config:/etc/gitlab <span class="token punctuation">\\</span>
 <span class="token parameter variable">--volume</span> /usr/local/gitlab/logs:/var/log/gitlab <span class="token punctuation">\\</span>
 <span class="token parameter variable">--volume</span> /usr/local/gitlab/data:/var/opt/gitlab <span class="token punctuation">\\</span>
 gitlab/gitlab-ee:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>管理员账号：root 管理员密码：vi /usr/local/gitlab/config/initial_root_password</p><p>root/pwd.mzx.com</p><p>默认 clone 链接是 hash，gitlab 修改 IP 地址及仓库地址 vi /usr/local/gitlab/config/gitlab.rb external_url &#39;http://{ip}&#39;</p>`,4),i=[t];function o(c,p){return n(),s("div",null,i)}const u=a(l,[["render",o],["__file","index.html.vue"]]);export{u as default};

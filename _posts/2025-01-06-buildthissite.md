---
layout: post
title: Github Pages建站经历
date: 2025-01-06 12:00:00-0000
description: 
tags: life
categories: 
giscus_comments: true
related_posts: false
---

从学校毕业以后的这几天里，我就萌生了构建个人网站的念头。虽然以前一直在[CSDN写博客](https://blog.csdn.net/u012348774)，但是随着CSDN政策的变化，博客使用起来也是越来越不方便。

不过，个人建站最大的问题是如何控制成本和降低复杂度。综合评估后，我基于Github Pages部署，使用[al-folio](https://alshedivat.github.io/al-folio/)主题，通过[Namesilo](https://www.namesilo.com/)购买域名，并使用[Cloudflare](https://www.cloudflare.com/)的免费SSL证书，最后还插入了[Google Analytics](https://marketingplatform.google.com/about/analytics/)查看网页浏览量。

后文中，我简要介绍一下整个过程：

1. 参考[ai-folio INSTALL](https://github.com/alshedivat/al-folio/blob/main/INSTALL.md#recommended-approach)的流程，fork仓库和修改名称。值得注意的事情是，main分支中的是源代码，gh-pages分支才是最终实际网页的代码。

2. 部署完成以后，即可通过`username.github.io`进行访问。但是此时不仅无法使用CDN加速，域名也不是很好看。因此可以进一步购买域名。

3. 打开[Namesilo](https://www.namesilo.com/)，选择合适的域名进行购买（支持支付宝和微信付款），其中`Ren:`后的价格为续租价格。在Namesilo上，仅能一年一年进行域名购买。需要提醒的是，如果从国内服务商购买域名，则备案后才能进行浏览访问。

4. 购买域名后，在`Domain Manger`中将域名与`Github Pages`绑定。删除已有的`Existing Resource Records`，直接使用Github模板即可。

5. 在`Github Pages`的仓库中，修改`Custom Domian`，会自动检查domain是否正确配置。大概15分钟就能够使用新的域名访问网站。


6. 注册[Cloudflare](https://www.cloudflare.com/)，使用免费策略进行托管，并将其提供的DNS服务器代码拷贝到[Namesilo](https://www.namesilo.com/)，删除原有的DNS服务器。大概一天后，SSL证书就部署成功了。

7. 完成上述步骤后，网站基本上也都可以使用了，根据个人需要删除不需要的pages，并修改内容为自己的信息。但是此时，我还添加了[Google Analytics](https://marketingplatform.google.com/about/analytics/)。首先肯定是注册账号，得到measurement ID，然后在`_config.yml`中修改以下两行代码。

```txt
google_analytics: # your Google Analytics measurement ID (format: G-XXXXXXXXXX)

enable_google_analytics: true # enables google analytics
```

8. 然后，我还稍微调整了`scripts.liquid`中的代码，改成了以下才成功获取了浏览数据。

```javascript
{% if site.enable_google_analytics %}
  <!-- Analytics -->
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics }}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '{{ site.google_analytics }}');
  </script>
{% endif %}
```

9. 完成7和8以后，即可在[Google Analytics](https://marketingplatform.google.com/about/analytics/)中查阅实时网页浏览记录。


以上就是我构建个人网站的整个流程，也踩了一点坑，但是整体上还是比较简单的。很多东西在网上搜一下都能找到，我主要强调了我个人认为容易忽略的地方。
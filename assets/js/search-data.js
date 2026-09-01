// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-我在武汉大学获得了博士学位-i-received-my-ph-d-degree-from-wuhan-university",
          title: '我在武汉大学获得了博士学位。I received my Ph.D. degree from Wuhan University.',
          description: "",
          section: "News",},{id: "news-我加入了xgrids-担任三维重建工程师-i-joined-xgrids-as-a-3d-reconstruction-engineer",
          title: '我加入了XGRIDS，担任三维重建工程师。I joined XGRIDS as a 3D Reconstruction Engineer.',
          description: "",
          section: "News",},{id: "news-两篇工作-ra-nerf-和-large-3dgs-recon-被-iros-2025-接收-two-papers-ra-nerf-and-large-3dgs-recon-were-accepted-by-iros-2025",
          title: '两篇工作 RA-NeRF 和 Large-3DGS-Recon 被 IROS 2025 接收。Two papers, RA-NeRF and Large-3DGS-Recon, were...',
          description: "",
          section: "News",},{id: "news-meshsegnet-发表在-gsis-meshsegnet-was-published-in-gsis",
          title: 'MeshSegNet 发表在 GSIS。MeshSegNet was published in GSIS.',
          description: "",
          section: "News",},{id: "news-xgrids-发布了-portalcam-能够稳定重建大规模-高质量的-3dgs-满足更多人的需求-xgrids-has-launched-portalcam-which-can-robustly-reconstruct-large-scale-high-quality-3dgs-to-meet-the-needs-of-a-broader-audience",
          title: 'XGRIDS 发布了 PortalCam，能够稳定重建大规模、高质量的 3DGS，满足更多人的需求。XGRIDS has launched PortalCam, which can robustly reconstruct large-scale, high-quality...',
          description: "",
          section: "News",},{id: "news-xgrids-发布了-lcc-scan-能够在用户手机上完成空间生成-开启了-3d-的新时代-xgrids-has-launched-lcc-scan-enabling-users-to-create-spatial-models-directly-on-their-smartphones-and-ushering-in-a-new-era-of-3d",
          title: 'XGRIDS 发布了 LCC Scan，能够在用户手机上完成空间生成，开启了 3D 的新时代。XGRIDS has launched LCC Scan, enabling users to...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%61%6E%71%73_%77%68%75@%77%68%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yanqswhu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/qingsong-yan-a20630151", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QHT-c8AAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/yanqswhu", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

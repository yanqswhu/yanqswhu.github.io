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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-github-pages建站经历",
      
        title: "Github Pages建站经历",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/buildthissite/";
        
      },
    },{id: "news-我在武汉大学获得了博士学位-i-received-my-ph-d-degree-from-wuhan-university",
          title: '我在武汉大学获得了博士学位。I received my Ph.D. Degree from Wuhan University.',
          description: "",
          section: "News",},{id: "news-我加入了xgrids-作为一个三维重建工程师-i-joined-xgrids-as-a-3d-reconstruction-engineer",
          title: '我加入了XGRIDS,作为一个三维重建工程师。I joined XGRIDS as a 3D Reconstruction Engineer.',
          description: "",
          section: "News",},{id: "news-两篇工作-ra-nerf和large-3dgs-recon被iros-2025接收-two-papers-ra-nerf-and-large-3dgs-recon-are-accepted-by-iros-2025",
          title: '两篇工作，RA-NeRF和Large-3DGS-Recon被IROS 2025接收。Two papers, RA-NeRF and Large-3DGS-Recon, are accepted by IROS 2025.',
          description: "",
          section: "News",},{id: "news-meshsegnet发表在gsis-meshsegnet-was-published-in-gsis",
          title: 'MeshSegNet发表在GSIS。MeshSegNet was published in GSIS.',
          description: "",
          section: "News",},{id: "news-xgrids发布了portalcam-能够稳定重建大规模的高质量3dgs-满足更多人的需求-xgrids-has-launched-portalcam-which-can-robustly-reconstruct-large-scale-high-quality-3dgs-to-meet-the-needs-of-a-broader-audience",
          title: 'XGRIDS发布了PortalCam，能够稳定重建大规模的高质量3DGS，满足更多人的需求。XGRIDS has launched PortalCam, which can robustly reconstruct large-scale, high-quality 3DGS to meet...',
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

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
        },{id: "news-began-my-b-eng-studies-in-geomatics-engineering-at-the-school-of-geodesy-and-geomatics-wuhan-university",
          title: 'Began my B.Eng. studies in Geomatics Engineering at the School of Geodesy and...',
          description: "",
          section: "News",},{id: "news-began-my-m-sc-studies-in-photogrammetry-and-remote-sensing-at-the-school-of-geodesy-and-geomatics-wuhan-university",
          title: 'Began my M.Sc. studies in Photogrammetry and Remote Sensing at the School of...',
          description: "",
          section: "News",},{id: "news-my-team-freedom-alliance-at-wuhan-university-received-the-second-prize-in-the-smart-city-technology-challenge-of-the-4th-china-graduate-smart-city-technology-and-creative-design-competition-for-our-project-pose-estimation-and-3d-reconstruction-of-uav-single-video-flight-scenes",
          title: 'My team, Freedom Alliance at Wuhan University, received the Second Prize in the...',
          description: "",
          section: "News",},{id: "news-i-joined-momenta-as-an-intern-working-on-high-definition-map-reconstruction-and-vehicle-relocalization-for-underground-parking-garages",
          title: 'I joined Momenta as an intern, working on high-definition map reconstruction and vehicle...',
          description: "",
          section: "News",},{id: "news-my-team-icu-more-at-wuhan-university-received-the-third-prize-in-the-smart-city-technology-challenge-of-the-5th-china-graduate-smart-city-technology-and-creative-design-competition-for-our-project-occlusion-aware-open-set-face-recognition",
          title: 'My team, ICU More at Wuhan University, received the Third Prize in the...',
          description: "",
          section: "News",},{id: "news-i-joined-hong-kong-baptist-university-as-a-research-assistant-contributing-to-the-irs-indoor-robotics-stereo-matching-dataset",
          title: 'I joined Hong Kong Baptist University as a Research Assistant, contributing to the...',
          description: "",
          section: "News",},{id: "news-began-my-ph-d-studies-in-photogrammetry-and-remote-sensing-at-the-school-of-geodesy-and-geomatics-wuhan-university",
          title: 'Began my Ph.D. studies in Photogrammetry and Remote Sensing at the School of...',
          description: "",
          section: "News",},{id: "news-i-joined-the-hong-kong-university-of-science-and-technology-as-a-research-assistant-working-on-panorama-depth-estimation-and-multi-view-stereo-matching",
          title: 'I joined the Hong Kong University of Science and Technology as a Research...',
          description: "",
          section: "News",},{id: "news-i-joined-hong-kong-baptist-university-as-a-remote-research-assistant-working-on-neural-radiance-field-camera-pose-estimation-and-panorama-depth-estimation",
          title: 'I joined Hong Kong Baptist University as a remote Research Assistant, working on...',
          description: "",
          section: "News",},{id: "news-i-received-the-third-prize-in-the-monocular-indoor-scene-depth-estimation-competition-at-the-24th-and-25th-china-conference-on-computer-aided-design-and-computer-graphics-ccf-cad-cg",
          title: 'I received the Third Prize in the Monocular Indoor Scene Depth Estimation competition...',
          description: "",
          section: "News",},{id: "news-i-contributed-to-the-jnerf-open-source-project-and-its-algorithm-library-update-and-received-a-tencent-open-source-talent-program-task-award-for-the-jittor-project",
          title: 'I contributed to the JNeRF open-source project and its algorithm-library update, and received...',
          description: "",
          section: "News",},{id: "news-i-joined-the-hong-kong-university-of-science-and-technology-guangzhou-as-a-research-assistant-working-on-nerf-based-pose-and-geometry-reconstruction-from-sparse-views",
          title: 'I joined the Hong Kong University of Science and Technology (Guangzhou) as a...',
          description: "",
          section: "News",},{id: "news-i-received-my-ph-d-degree-from-wuhan-university",
          title: 'I received my Ph.D. Degree from Wuhan University.',
          description: "",
          section: "News",},{id: "news-i-joined-xgrids-as-a-3d-reconstruction-engineer",
          title: 'I joined XGRIDS as a 3D Reconstruction Engineer.',
          description: "",
          section: "News",},{id: "news-two-papers-ra-nerf-and-large-3dgs-recon-are-accepted-by-iros-2025",
          title: 'Two papers, RA-NeRF and Large-3DGS-Recon, are accepted by IROS 2025.',
          description: "",
          section: "News",},{id: "news-meshsegnet-was-published-in-gsis",
          title: 'MeshSegNet was published in GSIS.',
          description: "",
          section: "News",},{id: "news-xgrids-has-launched-portalcam-which-can-robustly-reconstruct-large-scale-high-quality-3dgs-to-meet-the-needs-of-a-broader-audience",
          title: 'XGRIDS has launched PortalCam, which can robustly reconstruct large-scale, high-quality 3DGS to meet...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-present-3d-spatial-intelligent-computing-and-its-applications-at-the-first-session-of-season-10-of-ccf-cad-cg-s-industry-expert-dialogue-sharing-xgrids-technical-exploration-and-application-practices-in-3d-spatial-intelligence",
          title: 'I was invited to present “3D Spatial Intelligent Computing and Its Applications” at...',
          description: "",
          section: "News",},{id: "news-the-project-key-technologies-and-applications-for-efficient-reconstruction-of-structured-3d-models-in-complex-urban-scenes-to-which-i-contributed-received-the-first-prize-of-the-2025-geographic-information-science-and-technology-progress-award",
          title: 'The project “Key Technologies and Applications for Efficient Reconstruction of Structured 3D Models...',
          description: "",
          section: "News",},{id: "news-i-participated-in-the-first-uwa-alliance-3d-media-topic-group-plenary-meeting-in-xi-an-where-i-presented-ultra-large-scene-3d-gaussian-reconstruction-and-a-flexible-format-framework-that-decouples-coding-from-data-organization",
          title: 'I participated in the first UWA Alliance 3D Media Topic Group plenary meeting...',
          description: "",
          section: "News",},{id: "news-xgrids-has-launched-lcc-scan-enabling-users-to-create-spatial-models-directly-on-their-smartphones-and-ushering-in-a-new-era-of-3d",
          title: 'XGRIDS has launched LCC Scan, enabling users to create spatial models directly on...',
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

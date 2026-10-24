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
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-began-my-b-eng-studies-in-geomatics-engineering-at-the-school-of-geodesy-and-geomatics-wuhan-university",
          title: 'Began my B.Eng. studies in Geomatics Engineering at the School of Geodesy and...',
          description: "",
          section: "News",},{id: "news-graduated-with-a-b-eng-in-geomatics-engineering-from-wuhan-university-my-undergraduate-thesis-was-a-study-on-control-free-rapid-mosaicking-of-sequential-images",
          title: 'Graduated with a B.Eng. in Geomatics Engineering from Wuhan University. My undergraduate thesis...',
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
          section: "News",},{id: "news-graduated-with-an-m-sc-in-photogrammetry-and-remote-sensing-from-wuhan-university-my-master-s-thesis-was-uav-visual-localization-based-on-reference-imagery",
          title: 'Graduated with an M.Sc. in Photogrammetry and Remote Sensing from Wuhan University. My...',
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
          section: "News",},{id: "news-received-a-ph-d-in-photogrammetry-and-remote-sensing-from-wuhan-university-my-doctoral-research-focused-on-3d-vision-and-photogrammetry",
          title: 'Received a Ph.D. in Photogrammetry and Remote Sensing from Wuhan University. My doctoral...',
          description: "",
          section: "News",},{id: "news-graduated-with-a-ph-d-in-photogrammetry-and-remote-sensing-from-wuhan-university-my-doctoral-thesis-was-key-technologies-for-geometric-reconstruction-from-multi-view-imagery",
          title: 'Graduated with a Ph.D. in Photogrammetry and Remote Sensing from Wuhan University. My...',
          description: "",
          section: "News",},{id: "news-joined-xgrids-as-a-3d-reconstruction-engineer-i-contribute-to-spatial-intelligence-products-that-bring-research-advances-into-practical-3d-experiences",
          title: 'Joined XGRIDS as a 3D Reconstruction Engineer. I contribute to spatial-intelligence products that...',
          description: "",
          section: "News",},{id: "news-ra-nerf-and-large-3dgs-recon-were-accepted-to-iros-2025-the-two-papers-explore-neural-rendering-and-large-scale-3d-reconstruction",
          title: 'RA-NeRF and Large-3DGS-Recon were accepted to IROS 2025. The two papers explore neural...',
          description: "",
          section: "News",},{id: "news-meshsegnet-was-published-in-geomatics-and-spatial-information-science-the-work-contributes-to-geometry-aware-3d-scene-understanding",
          title: 'MeshSegNet was published in Geomatics and Spatial Information Science. The work contributes to...',
          description: "",
          section: "News",},{id: "news-xgrids-launched-portalcam-for-robust-large-scale-3d-gaussian-splatting-reconstruction-it-makes-high-quality-spatial-capture-more-accessible-for-real-world-use",
          title: 'XGRIDS launched PortalCam for robust large-scale 3D Gaussian Splatting reconstruction. It makes high-quality...',
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
          section: "News",},{id: "news-contributed-to-the-skytopia-project-it-explores-the-relationship-between-3d-gaussian-splatting-and-simulation",
          title: 'Contributed to the Skytopia project. It explores the relationship between 3D Gaussian Splatting...',
          description: "",
          section: "News",},{id: "news-passed-the-project-management-professional-pmp-certification-exam-this-milestone-marks-a-new-step-in-my-professional-development-complementing-my-background-in-3d-reconstruction-and-photogrammetry",
          title: 'Passed the Project Management Professional (PMP) certification exam. This milestone marks a new...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-deliver-a-talk-at-uwa-summit-titled-from-gaussian-splatting-to-spatial-intelligence-scaling-3d-spatial-data-across-real-world-workflows",
          title: 'I was invited to deliver a talk at UWA SUMMIT, titled From Gaussian...',
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

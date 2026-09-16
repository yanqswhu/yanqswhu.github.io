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
        },{id: "news-我所在的武汉大学-自由者联盟-团队凭借-无人机单视频飞行场景的位姿计算与三维重建-项目-获得第四届中国研究生智慧城市技术与创意设计大赛智慧城市技术挑战赛二等奖-my-team-freedom-alliance-at-wuhan-university-received-the-second-prize-in-the-smart-city-technology-challenge-of-the-4th-china-graduate-smart-city-technology-and-creative-design-competition-for-our-project-pose-estimation-and-3d-reconstruction-of-uav-single-video-flight-scenes",
          title: '我所在的武汉大学“自由者联盟”团队凭借“无人机单视频飞行场景的位姿计算与三维重建”项目，获得第四届中国研究生智慧城市技术与创意设计大赛智慧城市技术挑战赛二等奖。My team, Freedom Alliance at Wuhan University, received the Second Prize in the...',
          description: "",
          section: "News",},{id: "news-我加入北京初速度科技有限公司-momenta-实习-参与地下车库高精地图重建与车辆重定位技术研究-i-joined-momenta-as-an-intern-working-on-high-definition-map-reconstruction-and-vehicle-relocalization-for-underground-parking-garages",
          title: '我加入北京初速度科技有限公司（Momenta）实习，参与地下车库高精地图重建与车辆重定位技术研究。I joined Momenta as an intern, working on high-definition map reconstruction and vehicle...',
          description: "",
          section: "News",},{id: "news-我所在的武汉大学-icu-more-团队凭借-带遮挡的开集人脸识别-项目-获得第五届中国研究生智慧城市技术与创意设计大赛技术挑战赛三等奖-my-team-icu-more-at-wuhan-university-received-the-third-prize-in-the-smart-city-technology-challenge-of-the-5th-china-graduate-smart-city-technology-and-creative-design-competition-for-our-project-occlusion-aware-open-set-face-recognition",
          title: '我所在的武汉大学“ICU More”团队凭借“带遮挡的开集人脸识别”项目，获得第五届中国研究生智慧城市技术与创意设计大赛技术挑战赛三等奖。My team, ICU More at Wuhan University, received the Third Prize in...',
          description: "",
          section: "News",},{id: "news-我加入香港浸会大学担任研究助理-参与室内机器人双目立体匹配数据集-irs-的制作-i-joined-hong-kong-baptist-university-as-a-research-assistant-contributing-to-the-irs-indoor-robotics-stereo-matching-dataset",
          title: '我加入香港浸会大学担任研究助理，参与室内机器人双目立体匹配数据集 IRS 的制作。I joined Hong Kong Baptist University as a Research Assistant, contributing...',
          description: "",
          section: "News",},{id: "news-我加入香港科技大学担任研究助理-研究全景影像深度估计与多视图立体匹配技术-i-joined-the-hong-kong-university-of-science-and-technology-as-a-research-assistant-working-on-panorama-depth-estimation-and-multi-view-stereo-matching",
          title: '我加入香港科技大学担任研究助理，研究全景影像深度估计与多视图立体匹配技术。I joined the Hong Kong University of Science and Technology as a Research...',
          description: "",
          section: "News",},{id: "news-我加入香港浸会大学担任远程研究助理-研究神经辐射场位姿估计和全景深度估计技术-i-joined-hong-kong-baptist-university-as-a-remote-research-assistant-working-on-neural-radiance-field-camera-pose-estimation-and-panorama-depth-estimation",
          title: '我加入香港浸会大学担任远程研究助理，研究神经辐射场位姿估计和全景深度估计技术。I joined Hong Kong Baptist University as a remote Research Assistant, working on...',
          description: "",
          section: "News",},{id: "news-我获得第24-25届全国计算机辅助设计与图形学学术会议-ccf-cad-cg-大会比赛-单目室内场景深度估计-三等奖-i-received-the-third-prize-in-the-monocular-indoor-scene-depth-estimation-competition-at-the-24th-and-25th-china-conference-on-computer-aided-design-and-computer-graphics-ccf-cad-cg",
          title: '我获得第24+25届全国计算机辅助设计与图形学学术会议（CCF CAD/CG）大会比赛“单目室内场景深度估计”三等奖。I received the Third Prize in the Monocular Indoor Scene Depth Estimation...',
          description: "",
          section: "News",},{id: "news-我作为-jnerf-开源贡献者参与算法库升级-并获得腾讯开源人才培养计划-jittor-项目任务奖金-i-contributed-to-the-jnerf-open-source-project-and-its-algorithm-library-update-and-received-a-tencent-open-source-talent-program-task-award-for-the-jittor-project",
          title: '我作为 JNeRF 开源贡献者参与算法库升级，并获得腾讯开源人才培养计划 Jittor 项目任务奖金。I contributed to the JNeRF open-source project and its...',
          description: "",
          section: "News",},{id: "news-我加入香港科技大学-广州-担任研究助理-研究稀疏视图下基于神经辐射场的位姿与几何重建技术-i-joined-the-hong-kong-university-of-science-and-technology-guangzhou-as-a-research-assistant-working-on-nerf-based-pose-and-geometry-reconstruction-from-sparse-views",
          title: '我加入香港科技大学（广州）担任研究助理，研究稀疏视图下基于神经辐射场的位姿与几何重建技术。I joined the Hong Kong University of Science and Technology (Guangzhou) as a...',
          description: "",
          section: "News",},{id: "news-我在武汉大学获得了博士学位-i-received-my-ph-d-degree-from-wuhan-university",
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
          section: "News",},{id: "news-我受邀在ccf-cad-cg专委-名企大咖面对面-第十季第一期作题为-三维空间智能计算及其应用-的报告-分享其域创新在三维空间智能领域的技术探索与应用实践-i-was-invited-to-present-3d-spatial-intelligent-computing-and-its-applications-at-the-first-session-of-season-10-of-ccf-cad-cg-s-industry-expert-dialogue-sharing-xgrids-technical-exploration-and-application-practices-in-3d-spatial-intelligence",
          title: '我受邀在CCF CAD/CG专委“名企大咖面对面”第十季第一期作题为“三维空间智能计算及其应用”的报告，分享其域创新在三维空间智能领域的技术探索与应用实践。I was invited to present “3D Spatial Intelligent Computing and Its Applications”...',
          description: "",
          section: "News",},{id: "news-我参与的-城市复杂场景三维结构化模型高效重建关键技术及应用-项目获得-2025-年地理信息科技进步奖一等奖-the-project-key-technologies-and-applications-for-efficient-reconstruction-of-structured-3d-models-in-complex-urban-scenes-to-which-i-contributed-received-the-first-prize-of-the-2025-geographic-information-science-and-technology-progress-award",
          title: '我参与的“城市复杂场景三维结构化模型高效重建关键技术及应用”项目获得 2025 年地理信息科技进步奖一等奖。The project “Key Technologies and Applications for Efficient Reconstruction of Structured...',
          description: "",
          section: "News",},{id: "news-我参加了在西安召开的uwa联盟3d媒体专题组第一次全体会议-并分享超大场景3d高斯重建及编解码与数据组织解耦的灵活格式框架-i-participated-in-the-first-uwa-alliance-3d-media-topic-group-plenary-meeting-in-xi-an-where-i-presented-ultra-large-scene-3d-gaussian-reconstruction-and-a-flexible-format-framework-that-decouples-coding-from-data-organization",
          title: '我参加了在西安召开的UWA联盟3D媒体专题组第一次全体会议，并分享超大场景3D高斯重建及编解码与数据组织解耦的灵活格式框架。I participated in the first UWA Alliance 3D Media Topic Group plenary meeting...',
          description: "",
          section: "News",},{id: "news-xgrids发布了lcc-scan-能够在用户手机上完成空间生成-开启了3d的新时代-xgrids-has-launched-lcc-scan-enabling-users-to-create-spatial-models-directly-on-their-smartphones-and-ushering-in-a-new-era-of-3d",
          title: 'XGRIDS发布了LCC Scan， 能够在用户手机上完成空间生成，开启了3D的新时代。XGRIDS has launched LCC Scan, enabling users to create spatial models...',
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

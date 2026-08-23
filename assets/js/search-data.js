// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-ldi-replication-lab",
    title: "LDI Replication Lab",
    section: "Navigation",
    handler: () => {
      window.location.href = "/replication-lab/";
    },
  },{id: "nav-members",
          title: "Members",
          description: "Our Lab Members",
          section: "Navigation",
          handler: () => {
            window.location.href = "/replication-lab/members/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Our current projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/replication-lab/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Papers by project members",
          section: "Navigation",
          handler: () => {
            window.location.href = "/replication-lab/publications/";
          },
        },{id: "nav-training",
          title: "Training",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/replication-lab/https:/labordynamicsinstitute.github.io/replicability-training/";
          },
        },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/replication-lab/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-post-publication-replication",
          title: 'Post-publication Replication',
          description: "Assessing reproducibility after publication",
          section: "Projects",handler: () => {
              window.location.href = "/replication-lab/projects/1_project/";
            },},{id: "projects-aea-data-editor",
          title: 'AEA Data Editor',
          description: "Verifying computational reproducibility prior to publication",
          section: "Projects",handler: () => {
              window.location.href = "/replication-lab/projects/2_project/";
            },},{id: "projects-bitss-acre",
          title: 'BITSS ACRE',
          description: "Advancing Computational Reproducibility in Economics",
          section: "Projects",handler: () => {
              window.location.href = "/replication-lab/projects/3_project/";
            },},{
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

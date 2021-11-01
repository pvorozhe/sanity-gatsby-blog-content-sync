export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6180550b83c47219dd9e3817",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-content-sync-studio",
                  apiId: "e2ad96b5-5310-41fd-a833-1716f3d29315",
                },
                {
                  buildHookId: "6180550b6fdefe14bf471a62",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-content-sync",
                  apiId: "e9836cbd-158a-49ce-8195-e9dac512da9f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/pvorozhe/sanity-gatsby-blog-content-sync",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-content-sync.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

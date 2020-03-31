module.exports = {
  siteMetadata: {
    title: `Abli Health | AI Healthcare Platform`,
    name: `Abli Health | AI Healthcare Platform`,
    author: {
      name: `Abli Health`,
      summary: `Abli is transforming the lives of people with behavioural health and chronic diseases through data-driven medicine.`,
    },
    description: `Abli is transforming the lives of people with behavioural health and chronic diseases through data-driven medicine.`,
    siteUrl: `https://www.abli.io/`,
    features: [
      {
        heading: "Machine Learning",
        logo: "source-code",
        description: "Proprietary in-house ML engine analytical tools which work on lifestyle data to assess for risks of occupational health disorders and offer personalized intervention strategies",
      },
      {
        heading: "Cloud-enabled EHR",
        logo: "medical-research",
        description: "Electronic Health Record (EHR) system and database built for patient privacy  and to support healthcare professionals in treatment and diagnosis.",
      },
      {
        heading: "Digital Therapeutics",
        logo: "fitness-tracker",
        description: "AI-powered, human-enabled digital intervention tools that promote behavioural change.",
      },
    ],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/content/assets/svg/`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abli Health - AI-based Healthcare platform`,
        short_name: `Abli Health`,
        start_url: `/`,
        background_color: `#f5fefe`,
        theme_color: `purple`,
        display: `minimal-ui`,
        icon: `static/icons/favicon-96x96.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
          trackingCode: "7390453",
          respectDNT: true,
          productionOnly: false,
      },
    },
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
}

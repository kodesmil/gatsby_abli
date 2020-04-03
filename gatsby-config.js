module.exports = {
  siteMetadata: {
    title: `Abli Health | AI Healthcare Platform`,
    name: `Abli Health | AI Healthcare Platform`,
    keywords: `healthcare, ai, machine learning, health, erp`,
    author: {
      name: `Abli Health`,
      summary: `Abli empowers patients to better manage their health with proactive lifestyle insights and data-driven behavioural healthcare.`,
    },
    description: `Abli empowers patients to better manage their health with proactive lifestyle insights and data-driven behavioural healthcare.`,
    siteUrl: `https://www.abli.io/`,
    home: {
      header: {
        heading: `Let's change the delivery model of healthcare`,
        description:
          "Abli transforms the lives of people with chronic pains and illnesses with a holistic view of health and proactive lifestyle insights.",
        logo: "woman",
      },
      benefits: [
        {
          heading: "For patients",
          logo: "nature",
          description:
            "Are empowered with relevant information to actively participate in their healthcare and manage their health more independently.",
          button: "Read more",
          button_url: "for_patients",
        },
        {
          heading: "For clinics",
          logo: "medical-research",
          description:
            "Can provide a holistic view of their patients’ health with temporal insights and engage with patients meaningfully through shared decision-making about care plans.",
          button: "Read more",
          button_url: "for_clinics",
        },
        {
          heading: "For researchers",
          logo: "analyze",
          description:
            "Will receive access to an expansive and diverse dataset to aid in clinical research and develop new methods of treatment with prevention at its core.",
        },
      ],
    },
    patients: {
      header: {
        heading: `As patient`,
        description:
          "You will get empowered with relevant information to actively participate in the healthcare and manage your health more independently.",
        logo: "walking-around",
      },
      about: {
        description:
          "Abli allows you to take control over your own health by offering you actionable insights into your lifestyle, and prompt activity and habit challenges relevant to your evolving health profile.",
      },
      benefits: [
        {
          heading: "Take a proactive approach",
          logo: "nature",
          description:
            "Shift your health journey to a preventative approach with achievable actions suggested by Abli based on your changing health status.",
        },
        {
          heading: "Receive insights about your health",
          logo: "medical-research",
          description:
            "Abli offers you contextually relevant insights into the effects of your lifestyle and activity-level changes to better understand your body's unique needs.",
        },
        {
          heading: "Share health data on your terms",
          logo: "fitness-tracker",
          description:
            "Easily share data at your next doctor's visit to receive a more accurate assessment and nuanced treatment.",
        },
      ],
    },
    clinics: {
      header: {
        heading: `As clinician`,
        description: 'You will get access to the next-generation of AI-enabled healthcare delivery',
        logo: "medicine",
      },
      about: {
        description:
          "Abli is processing underutilised information that’s been right in our hands - our smartphones and smartwatches - to transform the healthcare delivery model. Abli applies Machine Learning techniques that will convert static information into lifestyle-driven insights and patient engagement opportunities to enhance diagnosis, improve predictive interventions, and optimise clinical productivity.",
      },
      benefits: [
        {
          heading: "Receive a holistic view of the patients’ lifestyles",
          logo: "biking",
          description:
            "A user-friendly dashboard offers you access to lifestyle information about your patients to facilitate more nuanced clinical care for your patients.",
        },
        {
          heading: "Streamline your diagnostics process",
          logo: "medical-research",
          description:
            "Our Machine Learning (ML) engine processes patient information to produce predictions for occupational health disorders, and flag them for you to support your treatment and diagnostic methods",
        },
        {
          heading: "Capture new engagement opportunities",
          logo: "goals",
          description:
            "Apply preventative measures via remote patient monitoring and timely interventions, presenting a new opportunity to engage with your patients.",
        },
      ],
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abli Health - AI-based Healthcare platform`,
        short_name: `Abli Health`,
        start_url: `/`,
        background_color: `#f5fefe`,
        theme_color: `purple`,
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
      options: {},
    },
  ],
}

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Bren Murrell Photography`,
    siteUrl: `https://brenmurrellphotography.github.io`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  // plugins: ["gatsby-plugin-sass", "gatsby-plugin-google-gtag", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
  plugins: [ "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, "gatsby-plugin-layout",
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Birthstone Bounce`,
        `Zilla Slab`,
        `Zilla Slab Highlight` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  }]
};

export default config;

const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production'){
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `468g1do0xbjq`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    `gatsby-plugin-image`,
  ],
  pathPrefix: "/learning",
}

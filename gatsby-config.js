const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production'){
  dotenv.config();
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `468g1do0xbjq`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    `gatsby-plugin-image`,
  ],
  pathPrefix: "/learning",
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        // The `spreadsheetId` is required, it is found in the url of your document:
        // https://docs.google.com/spreadsheets/d/<spreadsheetId>/edit#gid=0
        spreadsheetId: "1mRqfCgLw2pC409VkA3anaWMZU-XwtUXx",

        // The `spreadsheetName` is recommended, but optional
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // If you are sourcing multiple sheets, you can set this to distringuish between the source data
        spreadsheetName: "MySheet",

        // The `typePrefix` is optional, default value is "GoogleSpreadsheet"
        // It is used as part of the id's during the node creation, as well as in the generated GraphQL-schema
        // It can be overridden to fully customize the root query
        typePrefix: "GoogleSpreadsheet",

        // The `credentials` are only needed when you need to be authenticated to read the document.
        // It's an object with the following shape:
        
        
        //
        // Refer to googles own documentation to retrieve the credentials for your service account:
        //   - https://github.com/googleapis/google-api-nodejs-client#service-to-service-authentication
        //   - https://developers.google.com/identity/protocols/OAuth2ServiceAccount
        //
        // When you have generated your credentials, it's easiest to refer to them from an environment variable
        // and parse it directly:

        // credentials: {
        //   client_email: "amranidileep44@gmail.com",
        //   private_key: "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZtTW4fwK+G1+c\nk8Oq6XqHn4TDNMqWhvxVLEijTfyaIHbv8LpS8ZM6HBsYLsRSZFxV0hjnlNbNNIH5\nEnMHFp4ScEUzxj4JrEXBJKs4irR0T2gT4to3UxFM/JUXbFLRDmgmTWmRN6ZLTTeV\ngSKYfPWallpIdT8ylSmp1yU2dhsTr4ge8v5MUmqEICc0/vfwaPP0VQq8mLQouKF5\nHcEWH6iB4vzSfUp+WTVp2cTr/XaieZw2YnsRN41LrKglugUuv9S9QSM90oDBB+GX\naNBqthwrMYyZBTWRIshDaB97GdnTfz0Q2fSyYNoN8qr7QoVQgxKPIn7cNBLce10g\nS6upi12JAgMBAAECggEAGxroGtXZYhDnaQeuq1dRVZRjQ6iNdotM3E/cpVRe2FOl\naz81+4CvO2Nnbi3YbIepRVgYmLCbw8W/TuLgpmfG+3W17/nFHJAxyRfHJ42BZR/D\nzgIG+C9j7oleCKIId5XLGsW1mIpsrmBpRLhktcaND5ebmvzaBvKyUr6CGBNBUMRl\npmgLEIY9LeXCHZBjRONq9SBsvOzBWikhLzOA4gNVrtzD0gFsl8+ZY3lKI+860uPf\nv2avbltGj7dZnVzac2x/8iINDR2helP77xP1pcSV4NgOwjEvUmVpOkSVlprH+L4m\npUbBTRtC3LqQUgDA7z1NbowmCnSTBhP4/ekiT3qxXwKBgQDzfFRBMq3CqL0KQepj\nf9dznxeFmXJ1uG2q8IjHhDlc3L+x9pI61sG7oc9WVKBYMJVoiUYJTaC8expc5CLx\n2WdinJ7rgWEiFBkOMwgITDe6XTEeMDNCec3Jqv41KO7SLlNKLRcsu+weJEdQwiNZ\nJNYlhI4eImOjdykSd42oOmvCCwKBgQDk5bVURqPtfQPEAivhcJAACpakvHH9JqhS\nl26N4GRGBdnu5FmrM7A5Uf0cJdbcBXiBMaOUWmJQJfW5l/MKOeDxzT2MBLVO7UR4\nR1gli49JzjEjDkp1Xv/rM0i1v0LfP/QrIXY9mwtlLaj/cGK1QvaulFemV6/aeNoo\nFpCLfGUPOwKBgQDoT2qQHktdW+Op4sRAlNw7C8LEjGiB2yp/mynVutmEOXaI1Kom\ni3qijDsnsmyeWBRlffwdqjw/OPEpSd3xhK04kBisuG+1tRlGy/fQ+u9816eilviB\nZ3ep/4S1sc1TKjH7ptPisZYSGCkW63QQfK35c+So6cTJVUsRvJGivcLMiwKBgQDd\no7wAXeJvnMTfsAaTZe5Zy+bwnvR1X1BPoQhQ4v3Ve+b51i0phIRYDJbdAZraM4Xq\n+4jcpuRZnVghnQueVEsHeGfnQ8vYIBFTsimdOVTG75xOyJC6tAF02pTGP+vdxsyE\nUwNuRcoz75GbvlQmFjBM/aEdlfzWvHzpomfWWN52bwKBgDjyCucyu6JJVQjjrThx\nkcN9rU9fvkTin9BLK/k6y1fcHpATivLcyjAq/mSbBdXmC1ZuvABTh30Ebri+eF/e\n7P8Ix2nVAzKyjD60EHnxNBXhIMgRtZ7tX4Q9S3tKXJUD2bVBeSUknhIGYgIaUwQH\n696Blygh/Q1R1NkO7LI4deEK"
        // },
        // credentials: JSON.parse({
        //   client_email: "amranidileep44@gmail.com",
        //   private_key: "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZtTW4fwK+G1+c\nk8Oq6XqHn4TDNMqWhvxVLEijTfyaIHbv8LpS8ZM6HBsYLsRSZFxV0hjnlNbNNIH5\nEnMHFp4ScEUzxj4JrEXBJKs4irR0T2gT4to3UxFM/JUXbFLRDmgmTWmRN6ZLTTeV\ngSKYfPWallpIdT8ylSmp1yU2dhsTr4ge8v5MUmqEICc0/vfwaPP0VQq8mLQouKF5\nHcEWH6iB4vzSfUp+WTVp2cTr/XaieZw2YnsRN41LrKglugUuv9S9QSM90oDBB+GX\naNBqthwrMYyZBTWRIshDaB97GdnTfz0Q2fSyYNoN8qr7QoVQgxKPIn7cNBLce10g\nS6upi12JAgMBAAECggEAGxroGtXZYhDnaQeuq1dRVZRjQ6iNdotM3E/cpVRe2FOl\naz81+4CvO2Nnbi3YbIepRVgYmLCbw8W/TuLgpmfG+3W17/nFHJAxyRfHJ42BZR/D\nzgIG+C9j7oleCKIId5XLGsW1mIpsrmBpRLhktcaND5ebmvzaBvKyUr6CGBNBUMRl\npmgLEIY9LeXCHZBjRONq9SBsvOzBWikhLzOA4gNVrtzD0gFsl8+ZY3lKI+860uPf\nv2avbltGj7dZnVzac2x/8iINDR2helP77xP1pcSV4NgOwjEvUmVpOkSVlprH+L4m\npUbBTRtC3LqQUgDA7z1NbowmCnSTBhP4/ekiT3qxXwKBgQDzfFRBMq3CqL0KQepj\nf9dznxeFmXJ1uG2q8IjHhDlc3L+x9pI61sG7oc9WVKBYMJVoiUYJTaC8expc5CLx\n2WdinJ7rgWEiFBkOMwgITDe6XTEeMDNCec3Jqv41KO7SLlNKLRcsu+weJEdQwiNZ\nJNYlhI4eImOjdykSd42oOmvCCwKBgQDk5bVURqPtfQPEAivhcJAACpakvHH9JqhS\nl26N4GRGBdnu5FmrM7A5Uf0cJdbcBXiBMaOUWmJQJfW5l/MKOeDxzT2MBLVO7UR4\nR1gli49JzjEjDkp1Xv/rM0i1v0LfP/QrIXY9mwtlLaj/cGK1QvaulFemV6/aeNoo\nFpCLfGUPOwKBgQDoT2qQHktdW+Op4sRAlNw7C8LEjGiB2yp/mynVutmEOXaI1Kom\ni3qijDsnsmyeWBRlffwdqjw/OPEpSd3xhK04kBisuG+1tRlGy/fQ+u9816eilviB\nZ3ep/4S1sc1TKjH7ptPisZYSGCkW63QQfK35c+So6cTJVUsRvJGivcLMiwKBgQDd\no7wAXeJvnMTfsAaTZe5Zy+bwnvR1X1BPoQhQ4v3Ve+b51i0phIRYDJbdAZraM4Xq\n+4jcpuRZnVghnQueVEsHeGfnQ8vYIBFTsimdOVTG75xOyJC6tAF02pTGP+vdxsyE\nUwNuRcoz75GbvlQmFjBM/aEdlfzWvHzpomfWWN52bwKBgDjyCucyu6JJVQjjrThx\nkcN9rU9fvkTin9BLK/k6y1fcHpATivLcyjAq/mSbBdXmC1ZuvABTh30Ebri+eF/e\n7P8Ix2nVAzKyjD60EHnxNBXhIMgRtZ7tX4Q9S3tKXJUD2bVBeSUknhIGYgIaUwQH\n696Blygh/Q1R1NkO7LI4deEK"
        // }),

        // Simple node transformation during node sourcing can be achieved by implementing the following functions
        // - `filterNode`
        // - `mapNode`
        //
        // By implementing a `filterNode(node): boolean` function, you can choose to eliminate some nodes before
        // they're added to Gatsby, the default behaviour is to include all nodes:
        filterNode: () => true,

        // By implementing a `mapNode(node): node` function, you can provide your own node transformations directly
        // during node sourcing, the default implementation is to return the node as is:
        mapNode: node => node,
      },
    },
  ],
}

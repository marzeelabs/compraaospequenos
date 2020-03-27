# #compraaospequenos [![Netlify Status](https://api.netlify.com/api/v1/badges/717cab9f-4cc8-4ba6-9ae4-090cad942aea/deploy-status)](https://app.netlify.com/sites/compraaospequenos/deploys)
> Covid-19 crisis: help local shops survive and thrive

## Architecture

This website is built using GatsbyJS and using Google Sheets as data source.

- Google sheet data source: https://docs.google.com/spreadsheets/d/1VT6yvROk2V_Z438YdzBHkjeplqOeaTkAR4SfifBsMqg/edit?usp=sharing

For Gatsby to have access to the google sheet, you need to setup a Google Cloud service user and add this user to the google sheet. For more info, check out the [plugin docs](https://www.gatsbyjs.org/packages/gatsby-source-google-sheets/).

Warning, for GOOGLE_CLOUD_PRIVATE_KEY make sure to replace all `\n` with `_` to work around a known AWS limitation.

## Local development

Copy `.env.example` to `.env` and add configuration keys (ask @pvhee).

To run the project locally

```bash
yarn install
yarn start
```

To create a production build into the `./public` folder

```bash
yarn build
```

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

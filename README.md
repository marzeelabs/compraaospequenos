# #compraaospequenos
> Covid-19 crisis: help local shops survive and thrive

## Architecture

This website is built using GatsbyJS and using Google Sheets as data source.

- Google sheet data source: https://docs.google.com/spreadsheets/d/1VT6yvROk2V_Z438YdzBHkjeplqOeaTkAR4SfifBsMqg/edit?usp=sharing

For Gatsby to have access to the google sheet, you need to setup a Google Cloud service user and add this user to the google sheet. For more info, check out the [plugin docs](https://www.gatsbyjs.org/packages/gatsby-source-google-sheets/).

## Local development

Copy `.env.example` to `.env` and add configuration keys (ask @pvhee).

To run the project locally

```bash
yarn install
yarn develop
```

To create a production build into the `\.public` folder

```bash
yarn build
```

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
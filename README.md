## Angelo Queiroz | Software Engineer

Website developed using NextJS + TailwindCSS + ContentfulCMS + GraphQL + Mailgun

## ContentfulCMS

The whole website content comes from ContentfulCMS environment.

##### Data Structures:
- Containers (Type, Heading, Description, Image, Items[], Links[], ...)
- Items (Heading, Label, Description, Image, URL, Links[])
- Links (Label, Description, URL, Download File, Target, ...)
- Menus (Label, URL)
- Pages (SEO Fields, URL, Markdown Content, Dynamic Blocks/Containers)
- Projects (Name, Description, Image, URL, SourceURL, ...)
- Site Settings (Site Name, Logo, Main Menu, Social Links)


## Deployed on Vercel

This project is deployed on vercel using SSG (Static Site Generation), and make use of an API route to validate the Google Captcha and send the contact form result by Mailgun API.

https://angeloqueiroz.com
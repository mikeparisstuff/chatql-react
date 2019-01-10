# Amplify ChatQL Starter

This is a starter React Chat app that uses the Amplify Framework to implement offline and real-time capabilities in a chat application. In the chat app, users can have conversations with other users and exchange messages. The application demonstrates GraphQL Mutations, Queries and Subscriptions using AWS AppSync, Authentication using Amazon Cognito, and Analytics using Amazon Pinpoint. You can use this for learning purposes or adapt either the application or the GraphQL Schema to meet your needs.

## Deploy with Amplify Console
The Amplify Console provides continuous deployment and hosting for modern web apps (single page apps and static site generators). Continuous deployment allows developers to deploy updates to their web app on every code commit to their Git repository. Hosting includes features such as globally available CDNs, easy custom domain setup + HTTPS, feature branch deployments, and password protection.

1. Fork this repo
1. Log in to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/home) and choose Get Started under Deploy.
1. Find the `chatql-react` repo and pick the `master` branch.
1. Accept the default build settings. Give the Amplify Console permission to deploy backend resources with your frontend with a service role. This allows the Console to detect changes to both your backend and frontend on every code commit and make updates. If you do not have a service role follow the prompts to create one, then come back to the console and pick it from the dropdown.
1. Choose Save and deploy.

The Amplify Console will now deploy a backend with a GraphQL API, Authentication, and Analytics resources. After the backend deploys, the console will build and deploy the frontend to a `http://unique-id.amplifyapp.com` domain.
![ChatQL](./images/chatql.gif)

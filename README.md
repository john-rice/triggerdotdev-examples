⚠️ This repository has been archived and will not work with Trigger.dev v3

---

# Trigger.dev examples

Welcome to @trigger.dev/examples, a collection of full projects using Trigger.dev.

## About Trigger.dev

Trigger.dev is a framework for creating long-running Jobs directly in your Next.js app with API integrations, webhooks, scheduling and delays. You can reliably run Jobs that wouldn’t normally work in serverless environments (like Vercel) because of timeouts.

## Purpose of this Repository

The @trigger.dev/examples repository demonstrates the capabilities and features of Trigger.dev through practical project examples you can fork and use.

For many more Job examples which are code only, check out our [Jobs Showcase repo](https://github.com/triggerdotdev/jobs-showcase).

## Projects in this Repository

| Project Name                                                                                                     | Description                                                                                                                             | Integrations                                                                                                                | Author                                  | Status |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------ |
| [OpenAI text summarizer](https://github.com/triggerdotdev/examples/tree/main/openai-text-summarizer)             | An app which uses OpenAI to summarize an article and then post the result to Slack.                                                     | [OpenAI](https://trigger.dev/docs/integrations/apis/openai) [Slack](https://trigger.dev/docs/integrations/apis/slack)       | Trigger.dev                             | ✅     |
| [Supabase onboarding emails](https://github.com/triggerdotdev/examples/tree/main/supabase-onboarding-emails)     | When a user signs up and confirms their email address, they will receive 3 "onboarding" emails over 2 days using Resend and Trigger.dev | [Supabase](https://trigger.dev/docs/integrations/apis/supabase) [Resend](https://trigger.dev/docs/integrations/apis/resend) | Trigger.dev                             | ✅     |
| [Generate presentation titles using OpenAI](https://github.com/triggerdotdev/examples/tree/main/express-vanilla) | Generate presentation titles using OpenAI background jobs with Node.js, Express and Trigger.dev                                         | [OpenAI](https://trigger.dev/docs/integrations/apis/openai)                                                                 | [lirantal](https://github.com/lirantal) | ✅     |
| [Send a basic email with Resend](https://github.com/triggerdotdev/examples/tree/main/resend)                     | Send a basic email from a form with Resend                                                                                              | [Resend](https://trigger.dev/docs/integrations/apis/resend)                                                                 | Trigger.dev                             | ✅     |
| AI landing page copy generator                                                                                   | Copies your site and generates new copy using OpenAI                                                                                    | [OpenAI](https://trigger.dev/docs/integrations/apis/openai)                                                                 | Trigger.dev                             | 🛠️     |
| AI changelog generator                                                                                           | Generates a changelog from your GitHub commits using OpenAI                                                                             | [OpenAI](https://trigger.dev/docs/integrations/apis/openai) [GitHub](https://trigger.dev/docs/integrations/apis/github)     | Trigger.dev                             | 🛠️     |

## Getting Started

To get started with Trigger.dev and try out the examples in this repository, follow these steps:

1. First, make sure you have a Trigger.dev account. If you don't have one, you can sign up at https://trigger.dev.
2. Clone this repository to your local machine using the following command:

```sh
git clone https://github.com/triggerdotdev/examples.git
```

3. Navigate to the cloned repository:

```sh
cd examples
```

4. Choose a specific example project you want to try out. Each project is contained in its own directory with a descriptive name.
5. Follow the README instructions within the chosen example project directory to understand and execute the example.

## Contributing

We welcome contributions to this repository! If you have an interesting Trigger.dev project that you would like to share with others, or if you want to improve the existing examples, feel free to submit a pull request. Please refer to our Contribution Guidelines for more information.

## License

This repository is licensed under the MIT License. Feel free to use the examples, modify them, and adapt them to your needs.

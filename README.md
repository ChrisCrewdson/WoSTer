# WoSTer

You'll need a `.env` file with these variables defined in it:

```
SLACK_SIGNING_SECRET="***"
SLACK_BOT_TOKEN="***"
SLACK_APP_TOKEN="***"
```

## To start

Clone:
`git clone https://github.com/ChrisCrewdson/WoSTer.git`

Install dependencies:
`npm i`

Start:
`npm run start`

## Requirements

1. Categorize work hours by date, person, task
2. Track banked hours (max=24) and apply them as needed to months that are short
3. Report showing status for each member: current hours, banked hours, hours owed
4. Monthly reminder to submit hours
   4a. Button to get a report sent as a DM

## TODO

add this form:

```json
{
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "Name"
      },
      "accessory": {
        "type": "users_select",
        "placeholder": {
          "type": "plain_text",
          "text": "Select a name",
          "emoji": true
        },
        "action_id": "users_select-action"
      }
    },
    {
      "type": "input",
      "element": {
        "type": "multi_static_select",
        "placeholder": {
          "type": "plain_text",
          "text": "Select options",
          "emoji": true
        },
        "options": [
          {
            "text": {
              "type": "plain_text",
              "text": "Landscape maintenance"
            },
            "value": "landscape"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Orchard"
            },
            "value": "orchard"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Edible Gardens"
            },
            "value": "gardens"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Chickens"
            },
            "value": "chickens"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Maintenance/Repair"
            },
            "value": "maintenance"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Clean CH/Gym/Garage"
            },
            "value": "cleaning"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Garbage/Recycling"
            },
            "value": "garbage"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "PALS Special Projects (explain in note below)"
            },
            "value": "special"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Admin (bookkeeping, bills, taxes, compliance, etc.)"
            },
            "value": "admin"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Marketing (social media, respond to inquiries, tours, etc.)"
            },
            "value": "marketing"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Membership (orientation, training, updating records)"
            },
            "value": "membership"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Meetings (preparation, facilitation, etc.)"
            },
            "value": "meetings"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Social Events (setup, clean-up, materials prep, etc.)"
            },
            "value": "social"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "Library"
            },
            "value": "library"
          }
        ],
        "action_id": "multi_static_select-action"
      },
      "label": {
        "type": "plain_text",
        "text": "Task(s)",
        "emoji": true
      }
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "Was this task on the current month's priority list? (#work-share-priorities)"
      },
      "accessory": {
        "type": "radio_buttons",
        "options": [
          {
            "text": {
              "type": "plain_text",
              "text": "Yes",
              "emoji": true
            },
            "value": "yes"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "No",
              "emoji": true
            },
            "value": "no"
          }
        ],
        "action_id": "radio_buttons-action"
      }
    },
    {
      "type": "input",
      "element": {
        "type": "plain_text_input",
        "action_id": "plain_text_input-action"
      },
      "label": {
        "type": "plain_text",
        "text": "Work description (optional, unless you selected Special Project)",
        "emoji": true
      }
    },
    {
      "type": "input",
      "element": {
        "type": "plain_text_input",
        "action_id": "plain_text_input-action"
      },
      "label": {
        "type": "plain_text",
        "text": "Hours",
        "emoji": true
      }
    },
    {
      "type": "input",
      "element": {
        "type": "datepicker",
        "initial_date": "1990-04-28",
        "placeholder": {
          "type": "plain_text",
          "text": "Select a date",
          "emoji": true
        },
        "action_id": "datepicker-action"
      },
      "label": {
        "type": "plain_text",
        "text": "Date",
        "emoji": true
      }
    }
  ]
}
```

## NEXT

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

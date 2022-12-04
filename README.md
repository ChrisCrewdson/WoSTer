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

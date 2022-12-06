import {App} from '@slack/bolt';
import {google} from 'googleapis';
import {config} from 'dotenv';

// load .env config into environment
config();

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: Number(process.env.PORT) || 3000,
});

app.message('hello', async ({message, say}) => {
  // we only want normal messages, so reject any with a subtype
  if (message.subtype) {
    return;
  }
  // say() sends a message to the channel where the event was triggered
  await say({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Hey there <@${message.user}>!`,
        },
        accessory: {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Click Me',
          },
          action_id: 'button_click',
        },
      },
    ],
    text: `Hey there <@${message.user}>!`,
  });
});

app.message('report', async ({message, say}) => {
  // we only want normal messages, so reject any with a subtype
  if (message.subtype) {
    return;
  }

  const result = await app.client.users.info({
    user: message.user,
  });
  const messageUserName = result?.user?.name;

  // get authorization to access the google sheet
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  // TODO look up sheet name from slack name
  let sheetName: string | undefined;
  const namesSheetResult = await google.sheets('v4').spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: 'Names!A2:B',
  });

  if (
    !namesSheetResult?.data?.values ||
    namesSheetResult?.data?.values?.length === 0
  ) {
    console.log('No data found.');
  } else {
    console.log('Slack name, Sheet name');
    for (const row of namesSheetResult.data.values) {
      console.log(
        `Looking for ${messageUserName}, found "${row[0]}", "${row[1]}"`
      );
      if (row[0] === messageUserName) {
        sheetName = row[1];
        console.log(`found ${sheetName}`);
      }
    }
  }

  if (!sheetName) {
    await say(`Could not find ${messageUserName} in Names spreadsheet.`);
    return;
  }

  let hourSum: number = 0;
  let text: string = 'No data found.';

  // console.log(`getting spreadsheetId: ${process.env.GOOGLE_SPREADSHEET_ID}`);
  const responsesSheetResult = await google
    .sheets('v4')
    .spreadsheets.values.get({
      auth,
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: 'Form Responses 1!A2:G',
    });

  if (
    !responsesSheetResult.data?.values ||
    responsesSheetResult.data?.values?.length === 0
  ) {
    console.log('No data found.');
  } else {
    console.log('Timestamp, Name, Hours, Date');
    for (const row of responsesSheetResult.data?.values) {
      // Print columns A and E, which correspond to indices 0 and 4.
      console.log(`Looking for "${sheetName}", found "${row[1]}", ${row[2]}`);

      if (sheetName === row[1]) {
        const rowHours = Number(row[2]);
        hourSum += rowHours;
        console.log(`found ${rowHours} hours for ${sheetName}`);
      }
    }
    text = `<@${message.user}>: You have ${hourSum} hour(s) recorded for this month`;
  }

  await say(text);
});

app.action('button_click', async ({body, ack, say}) => {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});

(async () => {
  // Start your app
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();

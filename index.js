#!/usr/bin/env node

const fs = require('fs');
const colors = require('colors');

const { exec } = require('child_process');
const templates = require('./templates/templates.js');

const appName = process.argv[2];
const appDirectory = `${process.cwd()}/${appName}`;

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
  custom: ['cyan', 'bold'],
});

const createReactApp = () => new Promise((resolve) => {
  if (appName) {
    exec(`npx create-react-app ${appName}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`.error);
        resolve(false);
      }
      console.log(`stdout: ${stdout}`.data);
      console.log(`stderr: ${stderr}`.data);
      console.log(
        'Created react app, now installing supporting packages.'.custom,
      );
      resolve(true);
    });
  } else {
    console.log('\nNo app name was provided.'.help);
    console.log('\nProvide an app name in the following format: '.help);
    console.log('\ncreate-iot-react-app ', 'app-name\n'.help);
    resolve(false);
  }
});

// const cdAndStorybook = () => new Promise((resolve, reject) => {
//     exec(
//       `cd ${appName} && npx -p @storybook/cli sb init`,
//       (error, stdout, stderr) => {
//         if (error) {
//           console.error(`exec error: ${error}`.error);
//           reject();
//         }
//         console.log(`stdout: ${stdout}`.data);
//         console.log(`stderr: ${stderr}`.data);
//         console.log(
//           'Storybook added, now installing supporting packages.'.custom,
//         );
//         resolve();
//       },
//     );
//   });

const installPackages = () => new Promise((resolve) => {
  console.log(
    '\nInstalling node-sass, @reach/router, react-intl, carbon-components, @carbon/icons, @carbon/icons-react, carbon-addons-iot-react@beta, classnames\n'
      .help,
  );
  exec(
    `cd ${appName} && yarn --cwd ${appDirectory} add node-sass @reach/router react-intl carbon-components @carbon/icons @carbon/icons-react carbon-addons-iot-react@beta classnames`,
    () => {
      console.log('\nFinished installing packages\n'.custom);
      resolve();
    },
  );
});

const updateTemplates = () => new Promise((resolve) => {
  const promises = [];
  Object.keys(templates).forEach((fileName, i) => {
    promises[i] = new Promise((res) => {
      fs.writeFile(
        `${appDirectory}/src/${fileName}`,
        templates[fileName],
        (err) => {
          if (err) {
            return console.log(err);
          }
          res();
        },
      );
    });
  }); 
  Promise.all(promises).then(() => {
    resolve();
  });
});

const run = async () => {
  console.log(
    'Starting install of WIoT React app, this may take a minute.'.custom,
  );
  const success = await createReactApp();
  if (!success) {
    console.log(
      'Something went wrong while trying to create a new React app using create-react-app'
        .error,
    );
    return false;
  }
  // await cdAndStorybook();
  await installPackages();
  await updateTemplates();
  console.log(
    'All done. To get started `cd` into your project folder and type `yarn start`'
      .help,
  );
};

run();

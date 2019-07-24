#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');
const templates = require('./templates/templates.js');

const appName = process.argv[2];
const appDirectory = `${process.cwd()}/${appName}`;

const createReactApp = () => new Promise((resolve) => {
    if (appName) {
      exec(`npx create-react-app ${appName}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          resolve(false);
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        console.log('Created react app, now installing storybook.');
        resolve(true);
      });
    } else {
      console.log('\nNo app name was provided.');
      console.log('\nProvide an app name in the following format: ');
      console.log('\ncreate-iot-react-app ', 'app-name\n');
      resolve(false);
    }
  });

const cdAndStorybook = () => new Promise((resolve, reject) => {
    exec(
      `cd ${appName} && npx -p @storybook/cli sb init`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          reject();
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        console.log('Storybook added, now installing supporting packages.');
        resolve();
      },
    );
  });

const installPackages = () => new Promise((resolve) => {
    console.log(
      '\nInstalling node-sass, @reach/router, react-intl, carbon-components, carbon-components-react, carbon-icons, @carbon/icons,  @carbon/icons-react, @carbon/colors, @carbon/grid, @carbon/layout, @carbon/themes, carbon-addons-iot-react@beta, wiot-theme, classnames\n',
    );
    exec(
      `yarn --cwd ${appDirectory} add node-sass @reach/router react-intl carbon-components carbon-components-react carbon-icons @carbon/icons @carbon/icons-react @carbon/colors @carbon/grid @carbon/layout @carbon/themes carbon-addons-iot-react@beta classnames`,
      () => {
        console.log('\nFinished installing packages\n');
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
  console.log('Starting install of WIoT React app, this may take a minute.');
  const success = await createReactApp();
  if (!success) {
    console.log(
      'Something went wrong while trying to create a new React app using create-react-app',
    );
    return false;
  }
  await cdAndStorybook();
  await installPackages();
  await updateTemplates();
  console.log('All done');
};

run();

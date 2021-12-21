# residentUIAuto
Test task for Limavi: part 1 - UI Automation

## Installation
1. Install project via .zip file or create new project and clone on Vs Code
2. Install node js: 

Download the installer from NodeJS WebSite.
Run the installer.
Follow the installer steps, agree the license agreement and click the next button.
Restart your system/machine.

3. You might need install Playwright
```bash
npm i -D @playwright/test
# install supported browsers
npx playwright install
```

## Usage
1. Open Visual Studio Code and go to project folder
2. Run only on Chrome browser 
```bash
 npx playwright test
```
4. After test is finished, it'll automatically open html file with results

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

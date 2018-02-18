# Vocab Builder

For storing words with sentence examples

### Setting up

#### Dev
1. run `npm install` in both root and angular-electron
2. run `ng serve` in angular-electron folder
3. start the app by running `npm run electron` in the main folder

#### Production
1. run `npm install` in both root and angular-electron
2. uncomment line 22 and comment line 23 of `main.js`
3. start the app by running `npm run electron` in the main folder

### Issues
- unable to build angular using --prod flag due to unthrown errors, will revisit upon angular-cli update (observed in 1.5.5)

### TODO
- add language selection
- separate page for adding sentences
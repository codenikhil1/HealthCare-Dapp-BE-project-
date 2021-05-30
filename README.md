## Installation

## Run 'npm start'

## Install Truffle
```npm install -g truffle```
## Install Ganache

-check port number mentioned in file truffle-config.js is same as ganache is running on.

# Deploying smart contract



Then run the below command in /Backend folder
```truffle migrate --reset```
Then Copy contract address of Health contract



- In contract.js file add contract address to connect as given below
  ```javascript
     import web3 from './web3';
     const address =" paste contract address here ";
  ```
  
- Then
  ```npm start```

# Purpose

The aim of this exercise was to practise with react and create a facebook-like feed, based on some mock data.

# Project information 

This exercise was developed using:  
• npm version 8.1.2  
• node version 16.13.1  
• json-server verion 0.17.0

For json server to be installed, the following command must be used:
```
npm install -g json-server
```

# Steps to run the project

1. Clone the repository into some local folder:
```git clone https://github.com/geo-liak/react-project-facebook.git```  

2. Change to the folder that was created.  

3. Install the dependencies:  
```npm install```  

4. Run the json-server:  
```json-server --watch ./src/data/feed.json --port 3004```  

5. From a separate terminal window, go to the project folder (step 2) and run:  
```npm start```

# JSON-server port

The json-server port is set to 3004. If you need to change to another port, change the file ```settings.js``` and use the new port when starting the json-server in step 4.
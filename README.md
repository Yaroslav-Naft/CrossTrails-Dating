## Crosstrails (Hiker dating web application)

### Installation Instructions
    - Clone the Repo
    - Run 'npm install'
    - In the src folder directory, create a file called
    config.json and insert the following Code
```javascript=
{
    "cognito": {
        "REGION": "us-west-1",
        "USER_POOL_ID": "us-west-1_VJM6VrFOb",
        "APP_CLIENT_ID": "746n0achoe61nbmh8mpgm141r7"
        }
    }
```

    -Add the following line below to your index.js file in your src folder
    if it's not already there

    
```javascript=
    import config from './config.json';
```
    

    -Due to a current bug, please open the developer console and type `localStorage.clear()` to clear the jwt Token.

    -Due to the current bug with jwt, please use the following credentials below for login



```
Username: 

Password: 
```
    
    



### Must have

    - Like and Rating (0-100%) **
        example 45 likes/ 50 people = 90%(scores)
        * Total likes
        Higher rating to low
    - Authentication(username, password)
        Name, age, location, email
    - Message system (RESTful)
        Both parties like each other allow messaging
    - Browse match profile
        can only visit liked profiles
        Show all users and rating
    - Profile page
        Edit your profile infomation
        (Name, age, 3 favourite hikes, Photo with the user in it)

### Nice to have

    - 2 factor authentications (SMS or email)
    - Premiem
        All start rating 100%**
    - Optional
        Only want to be seen by certain rating
    - Near by hike location (Hike api)
    - Forgot password (Authentication)
    - Verify hike photo
        Machine learning (Exisiting model)
    - Filters
        Total hikes/month
        Rates
    - Live message with web stocket

### Pages

    - Sign up/Login
    - Matches (where we like other users)
    - Message matches
    - Profile

### MVP 1

    - Authentication
    - Show all users
    - Message matches (RESTful)
    - DynamoDB

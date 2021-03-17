const AWS = require('aws-sdk')
const cognito = new AWS.CognitoIdentityServiceProvider({ region: 'us-west-1' })

const deleteUser = async (sub) => {
  return await new Promise((resolve, reject) => {
    const params = {
      UserPoolId: 'us-west-1_VJM6VrFOb',
      Username: sub,
    }

    cognito.adminDeleteUser(params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const main = async (event) => {
  console.log('Event:', event)
  return deleteUser(event.sub)
}

exports.handler = main

// For local use only
const config = require('./config.json')
main({
  sub: config.sub,
})
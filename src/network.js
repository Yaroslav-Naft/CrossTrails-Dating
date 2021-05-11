import {Auth} from 'aws-amplify'

// Need to store jwt token instead of fakeToken
// console.log(jwtToken)

// let jwtToken = localStorage.getItem("token")
// console.log(jwtToken)

const fakeToken = "eyJraWQiOiIwMTR1a3JiZWE2NUhGc0U5SGVhUkszMThWdkV2NXNNVElvVDJkRXdWVDkwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxM2Y5ZjFkYi05MjkzLTQyOTAtYmU0Zi1hNDM3MWUzMWYwM2QiLCJhdWQiOiI3NDZuMGFjaG9lNjFuYm1oOG1wZ20xNDFyNyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjJiNTIyNThmLTcyY2UtNDZjMS1hYWU4LThhYTEzZmE3ZGFlMCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjE2ODIwNDIyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0xLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMV9WSk02VnJGT2IiLCJjb2duaXRvOnVzZXJuYW1lIjoibmtyYWNoYW5ndG95IiwiZXhwIjoxNjE2ODI0MDIyLCJpYXQiOjE2MTY4MjA0MjMsImVtYWlsIjoibmtyYWNoYW5ndG95QG91dGxvb2suY29tIn0.U03qK4J5-5K_-H8aKBtg8HuBrShSQUpuyujVan5r6vAT9CSPBhvuLHIeeJ5ONu8IrkyLuV32XUHh-t8aV1bylL-cod28gGZAbQNQ83ap6-AM-ZBAB1dlilMEJaE_ze9oNl5TEk5CnRYy6wySeBjqyPdTvvWBu9Vxz0BoHyZ6oSsACQj1crKOzhH0mZDnbqc59uF1a3Mo5_Sq2A-l6cUPzv4K1JRz1KgAQUd867NN1Jh3XTfyTsjpFPNT4r8Jf7R9ZKZKqnWIQqTwZ27iGeZpfasbAAn3FEoXkZ5bMWSW4IGA4IbiRq7t8EpwSEKfyBCdy8qEor9BZNPpx7y8KwF-GQ"


// Create an object to send it as a bearer token
const authHeader = { Authorization: `Bearer ${fakeToken}` }

export async function login({username, password}) {
    return {accessToken: fakeToken}
  }
  
export async function signUp({email, password, username, type, code}) {
    return {accessToken: fakeToken}
  }
  
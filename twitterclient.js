const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "JZCQWQOVb5zoWZDA5kB46CeMq",
    appSecret: "1T0xFItDHHtWW15f3eq04LsrjQdhqmCWYlyMDZEZWq422CvZ42",
    accessToken: "1569598102637793280-andUv43oARnptoqx9Vp5WPxwiLiOvV",
    accessSecret: "73vMbFQMfZrrfjaaxbVgaZ38F0IROtTJ52waJokcPBTSr"
})

const rwClient = client.readWrite

module.exports = rwClient




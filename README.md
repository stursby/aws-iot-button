# AWS IoT Button

Simple example of sending [AWS IoT Button](http://docs.aws.amazon.com/iot/latest/developerguide/iot-gs.html) events through [AWS Lambda](https://aws.amazon.com/lambda/) then on to [Firebase](https://www.firebase.com/).

### Web

Simple webpage using Firebase that will display button push events. There are three types (`SINGLE`, `DOUBLE`, and `LONG`). Button events will automagically be added to the page thanks to Firebase’s `child_added` event.

#### The website it located at `/web/index.html`

Sample Firebase security rules

```json
{
    "rules": {
        ".read": true,
        "$uid": {
            ".write": "auth !== null && auth.uid === $uid"
        }
    }
}
```

### Lambda

AWS Lambda Node.js (4.3) script. This handles the payload from the AWS IoT Button and passes it along to Firebase.

#### The Lambda script is located at `/lambda/index.js`

To run it, you’ll need to create your own Firebase, and insert the base URL, along with generating a token so you can POST data to it.

Sample payload

```json
{
    "serialNumber": "G030JF059405K485",
    "batteryVoltage": "1615mV",
    "clickType": "SINGLE"
}
```

Lambda logs can be found in [AWS Cloudwatch](https://aws.amazon.com/cloudwatch/), too.

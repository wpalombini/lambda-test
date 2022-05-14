# AWS LAMBDA, CLOUDWATCH, API GATEWAY AND SERVERLESS TEST

## This is a tiny experiment showing how to:

- Package and deploy a lambda function using serverless framework

- Using api gateway as a trigger for the lambda, again, using serverless framework

- Generate different types of logging in CloudWatch (INFO, WARN, ERROR) with the internal console class

### Commands:

- install dependencies:

```bash
$ npm install
```

- run it locally in dev mode:

```bash
$ npx serverless offline
```

- run it locally in staging mode:

```bash
$ npx serverless offline --stage staging
```

- deploy it to aws:

```bash
$ npx serverless deploy --stage prod
```

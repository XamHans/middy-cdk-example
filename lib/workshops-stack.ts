import { Stack, StackProps } from 'aws-cdk-lib';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import path = require('path');

export class MiddyWorkshopsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
        const hello = new NodejsFunction(this, 'LambdaNodeJsMiddy', {
            entry: (path.join(__dirname, '..', 'lambda', 'index.ts')),
            handler: 'handler',
            runtime: lambda.Runtime.NODEJS_16_X,
            bundling: {
                minify: false
            },
        });


    // defines an API Gateway REST API resource backed by our "hello" function.
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello
    });
  }
}

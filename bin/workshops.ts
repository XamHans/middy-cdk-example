#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { WorkshopsStack } from '../lib/workshops-stack';

const app = new cdk.App();
new WorkshopsStack(app, 'WorkshopsStack');

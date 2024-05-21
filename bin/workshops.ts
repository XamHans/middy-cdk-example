#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MiddyWorkshopsStack } from '../lib/workshops-stack';

const app = new cdk.App();
new MiddyWorkshopsStack(app, 'MiddyWorkshopStack');

import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as FirstCdk from '../lib/first_cdk-stack';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/first_cdk-stack.ts
test('my first stack', () => {
   const app = new cdk.App();
//     // WHEN
   const stack = new FirstCdk.FirstCdkStack(app, 'MyTestStack');
//     // THEN
   const template = Template.fromStack(stack);

   template.hasResourceProperties('AWS::Lambda::Function', {
     FunctionName: 'first-cdk-lambda',
     Runtime: 'nodejs22.x',
     Handler:'index.handler',
     MemorySize:128,
   });
});

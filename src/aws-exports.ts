const awsExports = {
  Auth: {
    region: 'us-west-2',  // Change to your AWS region
    userPoolId: 'us-west-2_XXXXXXXXX',  // Your User Pool ID
    userPoolWebClientId: 'XXXXXXXXXXXXXXXXXXXX',  // Your User Pool Client ID
    mandatorySignIn: true, // Make this true for mandatory sign-in
    authenticationFlowType: 'USER_SRP_AUTH', // Define authentication flow
    identityPoolId: 'us-west-2:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',  // Optional for federated identities
  },
};

export default awsExports;

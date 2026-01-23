# Apple Pay Domain Verification

This folder is used for Apple Pay domain verification with Stripe.

## Setup Instructions

1. Go to the [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Settings > Payment methods > Apple Pay**
3. Click **Add new domain**
4. Add: `thenursingcollective.pro`
5. Download the domain verification file (named `apple-developer-merchantid-domain-association`)
6. Replace this README with that file (or place it alongside)

The file should be accessible at:
`https://thenursingcollective.pro/.well-known/apple-developer-merchantid-domain-association`

## Note

The verification file content is specific to your Stripe account and cannot be generated programmatically. You must download it from your Stripe Dashboard.

After placing the file here, commit and deploy to verify the domain in Stripe.

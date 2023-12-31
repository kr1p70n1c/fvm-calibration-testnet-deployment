# FVM Calibration Testnet Deployment

This project demonstrates deploying to the `calibrationnet` with 2 outcomes:

* breaks: using a run script
* works: using `hardhat-deploy` plugin

# Tasks

## Tests

```shell
npx hardhat test
```

## Deploy - breaks

```shell
npx hardhat run --network calibrationnet scripts/deploy.ts
```

This execution breaks with the error:

`ProviderError: wrong param count (method 'eth_estimateGas'): 2 != 1`


## Deploy - works

This uses the `hardhat-deploy` plugin.

```shell
npx hardhat deploy  --network calibrationnet
```

This deploys successfully.

# Prettier

## Check

```shell
npm run lint:check:format
```

## Fix

```shell
npm run lint:fix:format
```

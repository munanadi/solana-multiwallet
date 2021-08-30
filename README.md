## Connect your wallet.

1. `npm intall`
2. `npm start`
3. If installing wallet for the first time, you will get redirected to the respective wallet page.
4. Finish up there and reload the page for the connect button to work.

If you need to switcch between networks. Change the below code in `./Demo.js`

```js
    // clusterApiUrl returns a string.
    // Use this for devnet / testnet / main-net
    const endpoint = useMemo(() => clusterApiUrl('devnet'), []);
    // Use this for localnet
    const endpoint = useMemo(() => "http://localhost:8899", []);
```
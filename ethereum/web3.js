import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // browser + metamask
    web3 = new Web3(window.web3.currentProvider);

} else {
    // server or not metamask
    const provider = new Web3.providers.HttpProvider(
        process.env.NETWORK_ENDPOINT
    );

    web3 = new Web3(provider);

}

export default web3;
import numberArtifact from "../artifacts/contracts/dapp.sol/Counter.json" assert { type: "json" }
const numberAddr = '0x8Faa19f840AD214A4804606d06a396B2114F51D3'

    // connect to eth by provider (metamask)
if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());

        // implement our contract from blockchain
    const numberContract = new ethers.Contract(
        numberAddr,             // contract address
        numberArtifact.abi,     // contract Abi from file .../Counter.json
        signer                  // user's address from provider
    )
        // update data from contract
    document.querySelector('.headText').innerHTML = await numberContract.value()        

        // button increase 
    document.querySelector(".increaseButton").onclick = async function() {
        await numberContract.increese() // use function increase from contract
        document.querySelector('.headText').innerHTML = await numberContract.value() // show value of number 
    }
        // button decrease 
    document.querySelector(".decreaseButton").onclick = async function() {
        await numberContract.degreese() // use function decrease from contract
        document.querySelector('.headText').innerHTML = await numberContract.value() // show value of number 
    }
} else {
    alert('Something went wrong! Please restart page and try again.')
}
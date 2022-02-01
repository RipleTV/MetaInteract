import numberArtifact from "../artifacts/contracts/dapp.sol/Counter.json" assert { type: "json" }

document.querySelector(".increaseButton").onclick = async function() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();

            const numberAddr = '0x8Faa19f840AD214A4804606d06a396B2114F51D3'
            
            const numberContract = new ethers.Contract(
                numberAddr,
                numberArtifact.abi,
                signer
            )

            await numberContract.increese()
                
            document.querySelector('.headText').innerHTML = await await numberContract.value()
        } else {
            alert('You must install MetaMask')
        }
}

document.querySelector(".decreaseButton").onclick = async function() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const numberAddr = '0x8Faa19f840AD214A4804606d06a396B2114F51D3'

        const numberContract = new ethers.Contract(
            numberAddr,
            numberArtifact.abi,
            signer
        )

        await numberContract.degreese()
            
        document.querySelector('.headText').innerHTML = await await numberContract.value()
    } else {
        alert('You must install MetaMask')
    }
}
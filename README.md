<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  
 <a href="https://github.com/unknown91tech/real-marketplace-eth">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBaD0zv3-wwI3-nkR_mOdNb7hWBF0jCNaOMg&s" alt="Logo" width="100" height="100">
  </a>

  
</div>



<!-- ABOUT THE PROJECT -->
## About The Project


![Screenshot 2024-06-05 195449](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/478b9c3f-9fff-49a3-9c55-c4258e5aacb1)

![Screenshot 2024-06-05 195507](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/ba8d1acf-89e1-4d55-a966-b7aa81acde87)

![Screenshot 2024-06-05 195536](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/29cd59e1-3267-4d54-8ddc-b6ce5f1565d4)

![Screenshot 2024-06-05 200137](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/94c66f6b-63b8-45df-a6ee-1cf8db02a8d9)

![Screenshot 2024-06-05 200017](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/38ba8361-31c4-4da2-97a5-fc3a8ca96687)

![Screenshot 2024-06-05 200212](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/f16b1059-3722-4543-ab98-1f0ac125060f)

![Screenshot 2024-06-05 200219](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/4054c4b3-268c-4403-9864-519e0659145f)

![Screenshot 2024-06-05 200228](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/47b9fb1e-593c-46c6-adf4-c45034603c68)

![Screenshot 2024-06-05 200248](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/893970b9-d602-4f11-a28d-d26d611b0ee4)

![Screenshot 2024-06-05 200302](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/133512cc-9be0-4c8f-97d6-7a10d079f9f4)


![Screenshot 2024-06-05 200354](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/3faa8bd2-e85e-49aa-ba0e-197a98ddefaf)

![Screenshot 2024-06-05 200411](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/035a2d95-c1ba-4b94-9262-cb0a52e1af25)

![Screenshot 2024-06-05 200456](https://github.com/unknown91tech/real-marketplace-eth/assets/116144227/b269072e-f327-4635-a57a-9ad19fff05ca)


<h1>GuardianChain: Fake Product Identification Using Blockchain</h1>

Project Description:
GuardianChain is a blockchain-based solution for detecting and preventing fake products. By leveraging the power of blockchain, QR code technology, and modern web development frameworks, GuardianChain provides a secure and immutable platform for verifying product authenticity. This project uses Solidity for smart contracts, Next.js for the frontend, Truffle and Ganache for local testing, and the Infura API for deployment.

Features:

1. Blockchain Integration: Utilizes Ethereum blockchain for secure, decentralized data storage.
2. Smart Contracts: Implements smart contracts using Solidity to automate verification processes.
3. QR Code Verification: Assigns a unique QR code to each product for easy verification by consumers.
4. Frontend Development: Builds a user-friendly interface with Next.js for seamless user experience.
5. Local Testing: Uses Truffle and Ganache for robust local testing of smart contracts.
6. Deployment: Deploys smart contracts and data using the Infura API.

Technology Stack:

- Blockchain: Ethereum
- Smart Contracts: Solidity
- Frontend: Next.js, React
- Testing: Truffle, Ganache
- Deployment: Infura API



Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites


1. Node.js [https://nodejs.org/en](https://nodejs.org/en)
2. Truffle [https://archive.trufflesuite.com/docs/truffle](https://archive.trufflesuite.com/docs/truffle)
3. Ganache [https://archive.trufflesuite.com/docs/ganache](https://archive.trufflesuite.com/docs/ganache)
4. Metamask [https://metamask.io](https://metamask.io)
5. Infura Account [https://www.infura.io](https://www.infura.io)


### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://www.infura.io](https://www.infura.io)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Connect your Metamask Wallet at  [https://metamask.io](https://metamask.io)
    And change the network to Sepolia TestNet.
6. Make a file named `keys.json`
   ```js
   INFURA_PROJECT_ID = 'ENTER YOUR API ';
   MNEMONIC = 'ENTER YOUR MNEMONIC PHRASE FROM THE METAMASK WALLET';
   ```
7. Initialize:
   ```js
   truffle compile
   truffle migrate
   ```
8. For Local Testing ONLY
9. 
    Configuration:-
   
    *Set Up Ganache:
     Start Ganache and configure the RPC server to http://127.0.0.1:7545.
   
    *Connect Metamask:
     Connect your Metamask wallet to the Ganache local blockchain.
   
    *Infura Deployment:
     Set up an Infura project and add your Infura project ID in the Truffle configuration file.
7. Deploy the smart contract using 
   ```js
     truffle migrate --network sepolia
   ```
8. Run the deployment server
   ```js
     npm run dev
   ```
  

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

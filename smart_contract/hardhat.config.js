require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "^0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/oHhNlY-qqF2LmqfTX6IJuaRcZdi0HgTH",
      account: [
        "c539c68b692e4771b24d7f1880404235e0d54f0e5210dced48945cb3e3f46048",
      ],
    },
  },
};

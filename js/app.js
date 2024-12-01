

var web3;

var agentContractAddress = '0x34B3C17b5a557E26F8643318548087fbaABc17F2';

function connect(){
    web3 = new Web3(window.ethereum)
    window.ethereum.enable().catch(error => {
        // User denied account access
        console.log(error);
    })
    abi = JSON.parse('[{ "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "doctorList", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "patientList", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_name", "type": "string" }, { "name": "_age", "type": "uint256" }, { "name": "_designation", "type": "uint256" }, { "name": "_hash", "type": "string" } ], "name": "add_agent", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" } ], "name": "get_patient", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "address" }, { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" } ], "name": "get_doctor", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "paddr", "type": "address" }, { "name": "daddr", "type": "address" } ], "name": "get_patient_doctor_name", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "addr", "type": "address" } ], "name": "permit_access", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "paddr", "type": "address" }, { "name": "_diagnosis", "type": "uint256" }, { "name": "_hash", "type": "string" } ], "name": "provide_diagnosis", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "paddr", "type": "address" }, { "name": "daddr", "type": "address" } ], "name": "remove_patient", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" } ], "name": "get_accessed_doctorlist_for_patient", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" } ], "name": "get_accessed_patientlist_for_doctor", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "daddr", "type": "address" } ], "name": "revoke_access", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "get_patient_list", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "get_doctor_list", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "paddr", "type": "address" } ], "name": "get_hash", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }]');
    AgentContract = web3.eth.contract(abi);
    contractInstance = AgentContract.at(agentContractAddress);   
    web3.eth.defaultAccount = web3.currentProvider.selectedAddress;
    console.log("Web3 Connected:"+ web3.eth.defaultAccount );
    return web3.currentProvider.selectedAddress;
}
    
window.addEventListener('load', async () => {
    // New web3 provider
    connect();
    console.log("Externally Loaded!");
});
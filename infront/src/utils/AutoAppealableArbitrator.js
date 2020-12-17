var Web3 = require('web3');
var web3 = new Web3('https://rpc-mumbai.matic.today');

const AutoAppealableArbitrator_address_all = '0x840FBc33600572FeBFe42FE112dde67a80a5D109';
const AutoAppealableArbitrator_ABI = [ { "inputs": [ { "internalType": "uint256", "name": "_arbitrationPrice", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "indexed": true, "internalType": "contract IArbitrables", "name": "_arbitrable", "type": "address" } ], "name": "AppealDecision", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "indexed": true, "internalType": "contract IArbitrables", "name": "_arbitrable", "type": "address" } ], "name": "AppealPossible", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "indexed": true, "internalType": "contract IArbitrables", "name": "_arbitrable", "type": "address" } ], "name": "DisputeCreation", "type": "event" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "disputes", "outputs": [ { "internalType": "contract IArbitrables", "name": "arbitrated", "type": "address" }, { "internalType": "uint256", "name": "choices", "type": "uint256" }, { "internalType": "uint256", "name": "fees", "type": "uint256" }, { "internalType": "uint256", "name": "ruling", "type": "uint256" }, { "internalType": "enum Arbitrator.DisputeStatus", "name": "status", "type": "uint8" }, { "internalType": "uint256", "name": "appealCost", "type": "uint256" }, { "internalType": "uint256", "name": "appealPeriodStart", "type": "uint256" }, { "internalType": "uint256", "name": "appealPeriodEnd", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_arbitrationPrice", "type": "uint256" } ], "name": "setArbitrationPrice", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "bytes", "name": "_extraData", "type": "bytes" } ], "name": "arbitrationCost", "outputs": [ { "internalType": "uint256", "name": "fee", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "internalType": "bytes", "name": "_extraData", "type": "bytes" } ], "name": "appealCost", "outputs": [ { "internalType": "uint256", "name": "fee", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_choices", "type": "uint256" }, { "internalType": "bytes", "name": "_extraData", "type": "bytes" } ], "name": "createDispute", "outputs": [ { "internalType": "uint256", "name": "disputeID", "type": "uint256" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "internalType": "uint256", "name": "_ruling", "type": "uint256" } ], "name": "giveRuling", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "internalType": "uint256", "name": "_ruling", "type": "uint256" }, { "internalType": "uint256", "name": "_appealCost", "type": "uint256" }, { "internalType": "uint256", "name": "_timeToAppeal", "type": "uint256" } ], "name": "giveAppealableRuling", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "internalType": "uint256", "name": "_appealCost", "type": "uint256" } ], "name": "changeAppealFee", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "internalType": "bytes", "name": "_extraData", "type": "bytes" } ], "name": "appeal", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" } ], "name": "executeRuling", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" } ], "name": "disputeStatus", "outputs": [ { "internalType": "enum Arbitrator.DisputeStatus", "name": "status", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" } ], "name": "currentRuling", "outputs": [ { "internalType": "uint256", "name": "ruling", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" } ], "name": "appealPeriod", "outputs": [ { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "end", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ];
const IArbitrables_address_all = '0xcDaAA776F76B18a9837a1D6389DAddb2918ca9e8';
const irabitrables_abi =[ { "inputs": [ { "internalType": "contract DAISO", "name": "_daiso", "type": "address" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "contract IArbitrator", "name": "_arbitrator", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "_metaEvidenceID", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_evidenceGroupID", "type": "uint256" } ], "name": "Dispute", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "contract IArbitrator", "name": "_arbitrator", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_evidenceGroupID", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "_party", "type": "address" }, { "indexed": false, "internalType": "string", "name": "_evidence", "type": "string" } ], "name": "Evidence", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_metaEvidenceID", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "_evidence", "type": "string" } ], "name": "MetaEvidence", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "account", "type": "address" } ], "name": "PauserAdded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "account", "type": "address" } ], "name": "PauserRemoved", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "disputeId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "rulling", "type": "uint256" } ], "name": "Rule", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "contract IArbitrator", "name": "_arbitrator", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_ruling", "type": "uint256" } ], "name": "Ruling", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "project", "type": "address" }, { "indexed": true, "internalType": "address", "name": "invest", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "reclaimedAt", "type": "uint256" } ], "name": "Txs", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "addPauser", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "disputeIDtoTXID", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "sender", "type": "address" } ], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isPauser", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "nextMetaEvidenceId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "txs", "outputs": [ { "internalType": "address payable", "name": "invest", "type": "address" }, { "internalType": "address payable", "name": "project", "type": "address" }, { "internalType": "enum Types.Status", "name": "status", "type": "uint8" }, { "internalType": "uint256", "name": "disputeID", "type": "uint256" }, { "internalType": "uint256", "name": "reclaimedAt", "type": "uint256" }, { "internalType": "uint256", "name": "investFeeDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "projectFeeDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "bool", "name": "isEntity", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "address payable", "name": "project", "type": "address" }, { "internalType": "string", "name": "_metaevidence", "type": "string" } ], "name": "newTransaction", "outputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "payable": true, "stateMutability": "payable", "type": "function" },{ "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "name": "reclaimFunds", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "name": "depositArbitrationFeeForPayee", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" }, { "internalType": "string", "name": "_evidence", "type": "string" } ], "name": "submitEvidence", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "internalType": "uint256", "name": "_ruling", "type": "uint256" } ], "name": "rule", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "name": "getTx", "outputs": [ { "internalType": "address", "name": "invest", "type": "address" }, { "internalType": "address", "name": "project", "type": "address" }, { "internalType": "enum Types.Status", "name": "status", "type": "uint8" }, { "internalType": "uint256", "name": "disputeID", "type": "uint256" }, { "internalType": "uint256", "name": "reclaimedAt", "type": "uint256" }, { "internalType": "uint256", "name": "investFeeDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "projectFeeDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "projectId", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" }, { "internalType": "bytes", "name": "_extraData", "type": "bytes" } ], "name": "appeal", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "bytes", "name": "_extraData", "type": "bytes" } ], "name": "arbitrationCost", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" }, { "internalType": "bytes", "name": "_extraDataDisputeStatus", "type": "bytes" } ], "name": "appealCost", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "name": "appealPeriod", "outputs": [ { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "end", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "name": "disputeStatus", "outputs": [ { "internalType": "enum IArbitrator.DisputeStatus", "name": "status", "type": "uint8" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "name": "currentRuling", "outputs": [ { "internalType": "uint256", "name": "ruling", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];

//1、查看争议
let EvidenceId
const disputeCreate = async() =>{
    let AutoAppealableArbitratorInstance = await new web3.eth.Contract(AutoAppealableArbitrator_ABI, AutoAppealableArbitrator_address_all);
    await AutoAppealableArbitratorInstance.getPastEvents('DisputeCreation',{fromBlock:0},async (error,events) => {
        //如果有i个事件，分别循环打印出所有时间的以下信息
        for(var i = 0;i < events.length;i++){
            console.log(events[i].returnValues._disputeID);
            EvidenceId = events[i].returnValues._disputeID
        }
    })
}
// disputeCreate()

//2、查看证据
const metaEvidence = async() =>{
    let iarbitrablesInstance = await new web3.eth.Contract(irabitrables_abi, IArbitrables_address_all);
    await iarbitrablesInstance.getPastEvents('MetaEvidence',{filter:{_metaEvidenceID:0},fromBlock:0},async (error,events) => {
        //如果有i个事件，分别循环打印出所有时间的以下信息
        for(var i = 0;i < events.length;i++){
            console.log(events[i].returnValues._evidence);
        }
    })

}
metaEvidence()
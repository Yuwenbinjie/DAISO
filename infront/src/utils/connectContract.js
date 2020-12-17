
import web3 from './web3';

const DAISO_address_all = {
    1: '',
    3: '0xf392beCfaD8d714f386ae8295223187d5A359Ae3',
    42: '0x44873FD560103e4aFc049459d49B12d4935C2E49',
    97: '0xEEdF272B4963272baC524751eBc5dbc9A3037dfe',
    1337:'0x65CfC2d30F351d39Ef817837F8E6db7f558745cF',
    80001:'0x3DF9dEfbcB75b547e9ECFbD08B33Eb2B88b455F9',
}
const IArbitrables_address_all = {
    1: '',
    3: '0x8b7bdCA306F5A7f81eF0fC1ECCc0c58022825989',
    42:'0x6D8ca96835F154CE6F8dbd50D6205480388ccc06',
    97: '0xd856d3FA5C8675aa96B5cA06E3289c3338642A0B',
    1337: '0x6E96fC1660e354cF0b7f4efC8fb94A0DC9FB2948',
    80001:'0xcDaAA776F76B18a9837a1D6389DAddb2918ca9e8',
}

const AutoAppealableArbitrator_address_all = {
    97: '0x75A461C37cE007b05D03f3a0D0BfA473fc86d8e3',
    80001:'0x840FBc33600572FeBFe42FE112dde67a80a5D109',
}

const testNet_address_all = {
    1: '',
    3: '0x6f44DA617e648923EB9533e6d4f4AEe3BBb57C76',
    42: '0x30734750c1Ed0a68846420BC8f83AeF3cF9d4236',
    97: '0xeACFA009Ea412f6B6571048A418D02E27e90F395',
    1337:'0xb9A23A1893B0E8da67287a790e9D86C242945F50',
    80001:'0xeACFA009Ea412f6B6571048A418D02E27e90F395',
}
const xtestNet_address_all = {
    1: '',
    3: '0x73b93489b3e23BC4A9eb20EEA2fC6408CAEAd2a4',
    42: '0x3B39A7cAE82634Eb3e4a352526bd6C515C5B37a3',
    97: '0x470661FB528b95d079F13Fc07D91d3F93AAB0597',
    1337:'0x296f46A0E1738102435318bcFC536fe2a3D45265',
    80001:'0x470661FB528b95d079F13Fc07D91d3F93AAB0597',
}
/* eslint-disable */
const DAISO_ABI =[
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "investSellBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "investFundBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "refunds",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "cancelTime",
                "type": "uint256"
            }
        ],
        "name": "CancelProject",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "refunds",
                "type": "uint256"
            }
        ],
        "name": "CancelProjectForProject",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "investSellBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "investFundBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "cancelTime",
                "type": "uint256"
            }
        ],
        "name": "CancelStream",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "projectSellTokenAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "projectSellDeposit",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "projectFundTokenAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "projectFundDeposit",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "stopTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "hash",
                "type": "string"
            }
        ],
        "name": "CreateProject",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "investSellDeposit",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "investFundDeposit",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "stopTime",
                "type": "uint256"
            }
        ],
        "name": "CreateStream",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "stopTime",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "weight",
                "type": "uint256"
            }
        ],
        "name": "LaunchProposal",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Paused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "PauserAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "PauserRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "rulling",
                "type": "uint256"
            }
        ],
        "name": "RullingResult",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Unpaused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "weight",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "voteResult",
                "type": "uint256"
            }
        ],
        "name": "VoteForInvest",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "WithdrawFromInvest",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "pass",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "notPass",
                "type": "uint256"
            }
        ],
        "name": "WithdrawFromProject",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "addPauser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "cancelProjectForInvests",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "exitProjectSellBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "exitProjectFundBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "exitStartTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "proposalForCancelStatus",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "initialize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isOwner",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isPauser",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "nextProjectId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "nextStreamId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "projectSymbol",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "projects",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "projectSellDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "projectFundDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "projectActualSellDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "projectActualFundDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "projectWithdrawalAmount",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "stopTime",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "projectSellTokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "projectFundTokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isEntity",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "proposals",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "status",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "stopTime",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "streamSymbol",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "streams",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "investSellDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "investFundDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "ratePerSecondOfInvestSell",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "ratePerSecondOfInvestFund",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "investWithdrawalAmount",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isEntity",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "voters",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "projectSellTokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "projectSellDeposit",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "projectFundTokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "projectFundDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "stopTime",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "hash",
                "type": "string"
            }
        ],
        "name": "createProject",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            }
        ],
        "name": "deltaOfForProject",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "delta",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            }
        ],
        "name": "projectBalanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "projectSellBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "projectFundBalance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            }
        ],
        "name": "projectRefunds",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "launchProposal",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "voteResult",
                "type": "uint256"
            }
        ],
        "name": "voteForInvest",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
            }
        ],
        "name": "voteForInvestStatus",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "voteResult",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "voted",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            }
        ],
        "name": "votingResult",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "investSellDeposit",
                "type": "uint256"
            }
        ],
        "name": "createStream",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
            }
        ],
        "name": "deltaOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "delta",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
            }
        ],
        "name": "investBalanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "investSellBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "investFundBalance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawFromInvest",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
            }
        ],
        "name": "cancelInvest",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            }
        ],
        "name": "getProject",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "projectSellDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "projectFundDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "projectActualSellDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "projectActualFundDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "projectWithdrawalAmount",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "stopTime",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "projectSellTokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "projectFundTokenAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
            }
        ],
        "name": "getStream",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "investSellDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "investFundDeposit",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "investWithdrawalAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "ratePerSecondOfInvestSell",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "ratePerSecondOfInvestFund",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            }
        ],
        "name": "getCancelProjectForInvest",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "exitProjectSellBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "exitProjectFundBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "exitStartTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "proposalForCancelStatus",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            }
        ],
        "name": "getProposal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "status",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "stopTime",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "rulling",
                "type": "uint256"
            }
        ],
        "name": "rullingResult",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_IArbitrableAddress",
                "type": "address"
            }
        ],
        "name": "updateAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const irabitrables_abi =[ { "inputs": [ { "internalType": "contract DAISO", "name": "_daiso", "type": "address" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "contract IArbitrator", "name": "_arbitrator", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "_metaEvidenceID", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_evidenceGroupID", "type": "uint256" } ], "name": "Dispute", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "contract IArbitrator", "name": "_arbitrator", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_evidenceGroupID", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "_party", "type": "address" }, { "indexed": false, "internalType": "string", "name": "_evidence", "type": "string" } ], "name": "Evidence", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_metaEvidenceID", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "_evidence", "type": "string" } ], "name": "MetaEvidence", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "account", "type": "address" } ], "name": "PauserAdded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "account", "type": "address" } ], "name": "PauserRemoved", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "disputeId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "rulling", "type": "uint256" } ], "name": "Rule", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "contract IArbitrator", "name": "_arbitrator", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_ruling", "type": "uint256" } ], "name": "Ruling", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "project", "type": "address" }, { "indexed": true, "internalType": "address", "name": "invest", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "reclaimedAt", "type": "uint256" } ], "name": "Txs", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "addPauser", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "disputeIDtoTXID", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "sender", "type": "address" } ], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isPauser", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "nextMetaEvidenceId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "txs", "outputs": [ { "internalType": "address payable", "name": "invest", "type": "address" }, { "internalType": "address payable", "name": "project", "type": "address" }, { "internalType": "enum Types.Status", "name": "status", "type": "uint8" }, { "internalType": "uint256", "name": "disputeID", "type": "uint256" }, { "internalType": "uint256", "name": "reclaimedAt", "type": "uint256" }, { "internalType": "uint256", "name": "investFeeDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "projectFeeDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "bool", "name": "isEntity", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "internalType": "address payable", "name": "project", "type": "address" }, { "internalType": "string", "name": "_metaevidence", "type": "string" } ], "name": "newTransaction", "outputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "payable": true, "stateMutability": "payable", "type": "function" },{ "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "name": "reclaimFunds", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "name": "depositArbitrationFeeForPayee", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" }, { "internalType": "string", "name": "_evidence", "type": "string" } ], "name": "submitEvidence", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "internalType": "uint256", "name": "_ruling", "type": "uint256" } ], "name": "rule", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "name": "getTx", "outputs": [ { "internalType": "address", "name": "invest", "type": "address" }, { "internalType": "address", "name": "project", "type": "address" }, { "internalType": "enum Types.Status", "name": "status", "type": "uint8" }, { "internalType": "uint256", "name": "disputeID", "type": "uint256" }, { "internalType": "uint256", "name": "reclaimedAt", "type": "uint256" }, { "internalType": "uint256", "name": "investFeeDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "projectFeeDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "projectId", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" }, { "internalType": "bytes", "name": "_extraData", "type": "bytes" } ], "name": "appeal", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "bytes", "name": "_extraData", "type": "bytes" } ], "name": "arbitrationCost", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" }, { "internalType": "bytes", "name": "_extraDataDisputeStatus", "type": "bytes" } ], "name": "appealCost", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "name": "appealPeriod", "outputs": [ { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "end", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "name": "disputeStatus", "outputs": [ { "internalType": "enum IArbitrator.DisputeStatus", "name": "status", "type": "uint8" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_metaEvidenceId", "type": "uint256" } ], "name": "currentRuling", "outputs": [ { "internalType": "uint256", "name": "ruling", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];
const AutoAppealableArbitrator_ABI = [ { "inputs": [ { "internalType": "uint256", "name": "_arbitrationPrice", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "indexed": true, "internalType": "contract IArbitrables", "name": "_arbitrable", "type": "address" } ], "name": "AppealDecision", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "indexed": true, "internalType": "contract IArbitrables", "name": "_arbitrable", "type": "address" } ], "name": "AppealPossible", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "indexed": true, "internalType": "contract IArbitrables", "name": "_arbitrable", "type": "address" } ], "name": "DisputeCreation", "type": "event" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "disputes", "outputs": [ { "internalType": "contract IArbitrables", "name": "arbitrated", "type": "address" }, { "internalType": "uint256", "name": "choices", "type": "uint256" }, { "internalType": "uint256", "name": "fees", "type": "uint256" }, { "internalType": "uint256", "name": "ruling", "type": "uint256" }, { "internalType": "enum Arbitrator.DisputeStatus", "name": "status", "type": "uint8" }, { "internalType": "uint256", "name": "appealCost", "type": "uint256" }, { "internalType": "uint256", "name": "appealPeriodStart", "type": "uint256" }, { "internalType": "uint256", "name": "appealPeriodEnd", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_arbitrationPrice", "type": "uint256" } ], "name": "setArbitrationPrice", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "bytes", "name": "_extraData", "type": "bytes" } ], "name": "arbitrationCost", "outputs": [ { "internalType": "uint256", "name": "fee", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "internalType": "bytes", "name": "_extraData", "type": "bytes" } ], "name": "appealCost", "outputs": [ { "internalType": "uint256", "name": "fee", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_choices", "type": "uint256" }, { "internalType": "bytes", "name": "_extraData", "type": "bytes" } ], "name": "createDispute", "outputs": [ { "internalType": "uint256", "name": "disputeID", "type": "uint256" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "internalType": "uint256", "name": "_ruling", "type": "uint256" } ], "name": "giveRuling", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "internalType": "uint256", "name": "_ruling", "type": "uint256" }, { "internalType": "uint256", "name": "_appealCost", "type": "uint256" }, { "internalType": "uint256", "name": "_timeToAppeal", "type": "uint256" } ], "name": "giveAppealableRuling", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "internalType": "uint256", "name": "_appealCost", "type": "uint256" } ], "name": "changeAppealFee", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" }, { "internalType": "bytes", "name": "_extraData", "type": "bytes" } ], "name": "appeal", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" } ], "name": "executeRuling", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" } ], "name": "disputeStatus", "outputs": [ { "internalType": "enum Arbitrator.DisputeStatus", "name": "status", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" } ], "name": "currentRuling", "outputs": [ { "internalType": "uint256", "name": "ruling", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "_disputeID", "type": "uint256" } ], "name": "appealPeriod", "outputs": [ { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "end", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ];

async function getInstance() {
    let chainId = await web3.eth.getChainId();
    let DAISOInstance = await new web3.eth.Contract(DAISO_ABI, DAISO_address_all[chainId]);
    let iarbitrablesInstance = await new web3.eth.Contract(irabitrables_abi, IArbitrables_address_all[chainId]);
    let AutoAppealableArbitratorInstance = await new web3.eth.Contract(AutoAppealableArbitrator_ABI, AutoAppealableArbitrator_address_all[chainId]);

    return {DAISOInstance, iarbitrablesInstance, AutoAppealableArbitratorInstance}
}
export {getInstance}


import web3 from './web3';
const abi = [
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
        "indexed": false,
        "internalType": "address",
        "name": "ChemistAdd",
        "type": "address"
      }
    ],
    "name": "ChemistAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "doctorAdd",
        "type": "address"
      }
    ],
    "name": "DoctorAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "insAdd",
        "type": "address"
      }
    ],
    "name": "insAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "Did",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tid",
        "type": "uint256"
      }
    ],
    "name": "treated",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_Phash",
        "type": "string"
      }
    ],
    "name": "addPat",
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
    "inputs": [],
    "name": "getbills",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "chemid",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amt",
            "type": "uint256"
          }
        ],
        "internalType": "struct Health.bill[]",
        "name": "",
        "type": "tuple[]"
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
        "internalType": "address",
        "name": "_Padd",
        "type": "address"
      }
    ],
    "name": "getPatient",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
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
        "internalType": "address",
        "name": "_Dadd",
        "type": "address"
      }
    ],
    "name": "getDoctor",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
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
        "internalType": "address",
        "name": "_Dadd",
        "type": "address"
      }
    ],
    "name": "grantAccess",
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
        "internalType": "address",
        "name": "_Iadd",
        "type": "address"
      }
    ],
    "name": "applyIns",
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
        "internalType": "address",
        "name": "pat",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "doctor",
        "type": "address"
      }
    ],
    "name": "isValid",
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
        "internalType": "address",
        "name": "_Uaddress",
        "type": "address"
      }
    ],
    "name": "getUser",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
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
        "internalType": "string",
        "name": "_Dhash",
        "type": "string"
      }
    ],
    "name": "addDoc",
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
        "internalType": "address",
        "name": "_Padd",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_precautions",
        "type": "string"
      }
    ],
    "name": "updatePrecautions",
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
        "internalType": "address",
        "name": "_Padd",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_diagnosis",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_test_conducted",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_bill",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_medicine",
        "type": "string"
      }
    ],
    "name": "treatPatient",
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
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_pid",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_cadd",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_medicines",
        "type": "string"
      }
    ],
    "name": "giveMedicines",
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
        "name": "_tid",
        "type": "uint256"
      }
    ],
    "name": "getTrtDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "doctor_id",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "diagnosis",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "test_conducted",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "bill",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "medicine",
            "type": "string"
          }
        ],
        "internalType": "struct Health.treatment",
        "name": "trt",
        "type": "tuple"
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
        "internalType": "string",
        "name": "Chash",
        "type": "string"
      }
    ],
    "name": "addChemist",
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
        "internalType": "address",
        "name": "_pid",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_date",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_amt",
        "type": "uint256"
      }
    ],
    "name": "sellMedicines",
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
        "internalType": "string",
        "name": "Ihash",
        "type": "string"
      }
    ],
    "name": "addInsCompany",
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
        "internalType": "address",
        "name": "patId",
        "type": "address"
      }
    ],
    "name": "approveInsurance",
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
  }
]

const address = '0x66A8D9b31c1f64fC538bFE943C94468C3BA8F657';
export default new web3.eth.Contract(abi,address);
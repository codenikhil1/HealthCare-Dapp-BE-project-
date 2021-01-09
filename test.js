const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545');

const abi =[
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
        "indexed": true,
        "internalType": "address",
        "name": "Pid",
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
        "name": "_Iadd",
        "type": "address"
      }
    ],
    "name": "getIns",
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
        "name": "_Thash",
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
        "internalType": "string",
        "name": "_medicines",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_date",
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
      }
    ],
    "name": "getMedicineDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "pid",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "medicines",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          }
        ],
        "internalType": "struct Health.medicine[]",
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
    "inputs": [],
    "name": "getAppliedForIns",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
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


const address = '0xCfa5859B05d5bFEee874aB919B1468cC2d8F5D27';

  const contract = new web3.eth.Contract(abi,address);

  //accounts
  const dummy = "0xF223d8D56DA7Ce75C0FBd062eE94985BB1252490"
  const patient = "0x189c57122D0F81c7479317df3Bb974Fd14d57BF7";
  const doctor = "0x910a4a4B0713a69E56755318C8589caE37602885";
  const chemist = '0x3E48838C0Da756D6ABAfb16518D71258fEf7C948';
  const insaurance = '0xC12d1B1f90DEE9DC701104c62C1823f9FB826eFf';
  const pat12 = '0x95045D67B0B16b7314b1fC737b4F67E9fd9F5cEe';
  const doc3 = "0x97544ff5C7621A38056319f3a309aCA52211bEc3";
  //   contract.methods.addPat("sdsdfs").send({
  //     from : dummy,gas:3000000
  //  }).then(function(result){
  //      console.log(result);
  //  })
  // contract.methods.getIns(insaurance).call().then(function(res){
  //   console.log(res);
  // })
// contract.methods.addDoc("drdcxc").send({
//           from : insaurance,gas:3000000
//        }).then(function(result){
//            console.log(result);
// })

// contract.getPastEvents('treated',{
//   fromBlock:0,
//   filter :{Pid : pat12}
// })
// .then(function(events){
//     console.log(events) // same results as the optional callback above
// });


// contract.methods.getPatient(pat12).call({
//   from:pat12
// }).then(function(mydata){
//   console.log(mydata)
// })
// contract.methods.addChemist(chemist,"scsfcsxc").send({
//           from : chemist,gas:3000000
//        }).then(function(result){
//            console.log(result);
// })
// contract.methods.addInsCompany(insaurance,"erer").send({
//     from : insaurance,gas:3000000
//  }).then(function(result){
//      console.log(result);
// })

// async function second(){
//   var temp ;
//   await contract.methods.getPatient(patient).call({
//     from:patient
//   }).then(function(res){
//     temp = res;
//     console.log(res);
//   })
//   console.log(await ipfs.cat(temp))
// }
// second();

// contract.methods.getDoctor(doc3).call({
//     from:patient
// }).then(function(res){
//     console.log(res);
// })

// contract.methods.grantAccess(doctor).send({
//     from : patient,gas:3000000
//  }).then(function(result){
//      console.log(result);
// })
// contract.methods.applyIns(insaurance).send({
//     from : pat12,gas:3000000
//  }).then(function(result){
//      console.log(result);
// })

// contract.methods.getUser("0xC12d1B1f90DEE9DC701104c62C1823f9FB826eFf").call().then(function(res){
//     console.log(res)
// })



// contract.methods.treatPatient(patient,"dsds","iuishu",545,"seses").send({
//     from : doctor,gas:3000000
//  }).then(function(result){
//      console.log(result);
// })

// contract.getPastEvents('patientTreated', {
//     filter :{Did : doctor}
// },
// function(error, events){ console.log(events); })
// .then(function(events){
//     console.log(events) // same results as the optional callback above
// });



// contract.methods.getMedicineDetails(pat12).call({
//     from : '0xC12d1B1f90DEE9DC701104c62C1823f9FB826eFf'
//  }).then(function(result){
//      console.log(result);
// })


// contract.methods.giveMedicines(pat12,"uesuheds asperin",'01/01/2021').send({
//     from : doc3,gas:3000000
//  }).then(function(result){
//      console.log(result);
// })



contract.methods.getAppliedForIns().call({
    from:insaurance
}).then(function(res){
    console.log(res);
})
const pat2 = "0x95045D67B0B16b7314b1fC737b4F67E9fd9F5cEe"


// contract.methods.sellMedicines(patient,"10/45/5000",1212).send({
//     from : chemist,gas:3000000
//  }).then(function(result){
//      console.log(result);
// })
const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// async function first(){
//     const doc = JSON.stringify({
//         pid : "0x95045D67B0B16b7314b1fC737b4F67E9fd9F5cEe",
//         diagnosis:"hay",
//         Tests:"dfd",
//         Bill :2121,
//         medicines:"ddfdf"
//       });
//       console.log('hello')
//       const cid = await ipfs.add(doc);
//       console.log("IPFS cid:", cid);
//       await contract.methods.treatPatient("0x95045D67B0B16b7314b1fC737b4F67E9fd9F5cEe",cid).send({
//         from : doc3,gas:3000000
//        }).then(function(result){
//          console.log(result);
//       })
//       console.log(await ipfs.cat(cid));
     
// }

// async function first() {
//   await web3.eth.getAccounts().then(async function(acc){
//     const doc = JSON.stringify({
//       name: "bar",
//       address: "tac",
//       mobNo:"65662",
//       age:25
//     });
//     await ipfs.addJSON(doc,async (err,hash)=>{
//       if(err){
//         alert("Problem on storing IPFS")
//       }else{
//         await contract.methods.addPat(hash).send({
//           from : pat2,gas:3000000
//          }).then(function(result){
//            console.log(result);
//         })
//       }
//     })

//   })
// }
//  first();


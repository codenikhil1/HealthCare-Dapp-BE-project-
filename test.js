const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545');

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
          "internalType": "address",
          "name": "_Cid",
          "type": "address"
        },
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
          "internalType": "address",
          "name": "_Iid",
          "type": "address"
        },
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

  const contract = new web3.eth.Contract(abi,address);

  //accounts

  const patient = "0x189c57122D0F81c7479317df3Bb974Fd14d57BF7";
  const doctor = "0x910a4a4B0713a69E56755318C8589caE37602885";
  const chemist = '0x3E48838C0Da756D6ABAfb16518D71258fEf7C948';
  const insaurance = '0xEC93eE6D20E0B364D637d0a4b8609Aa4dFeed41A';
  const doctor2 = '0x95045D67B0B16b7314b1fC737b4F67E9fd9F5cEe';
  const doc3 = "0x97544ff5C7621A38056319f3a309aCA52211bEc3";
  //   contract.methods.addPat("sdsdfs").send({
  //     from : patient,gas:3000000
  //  }).then(function(result){
  //      console.log(result);
  //  })

// contract.methods.addDoc("drdcxc").send({
//           from : insaurance,gas:3000000
//        }).then(function(result){
//            console.log(result);
// })

contract.getPastEvents('DoctorAdded',{
  fromBlock:0
})
.then(function(events){
    console.log(events) // same results as the optional callback above
});


// contract.methods.getPatient(doctor2).call({
//   from:doctor2
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
//     from : patient,gas:3000000
//  }).then(function(result){
//      console.log(result);
// })

// contract.methods.getUser(patient).call().then(function(res){
//     console.log(res)
// })



// contract.methods.treatPatient(patient,"dsds","iuishu",545,"seses").send({
//     from : doctor,gas:3000000
//  }).then(function(result){
//      console.log(result);
// })

// contract.getPastEvents('treated', {
//     filter :{Did : doctor}
// },
// function(error, events){ console.log(events); })
// .then(function(events){
//     console.log(events) // same results as the optional callback above
// });



// contract.methods.updatePrecautions(patient,"dsdssdihs").send({
//     from : doctor,gas:3000000
//  }).then(function(result){
//      console.log(result);
// })


// contract.methods.giveMedicines(patient,chemist,"uesuheds asperin").send({
//     from : doctor,gas:3000000
//  }).then(function(result){
//      console.log(result);
// })



// contract.methods.getTrtDetails(61).call({
//     from:doctor
// }).then(function(res){
//     console.log(res);
// })
const pat2 = "0x95045D67B0B16b7314b1fC737b4F67E9fd9F5cEe"


// contract.methods.sellMedicines(patient,"10/45/5000",1212).send({
//     from : chemist,gas:3000000
//  }).then(function(result){
//      console.log(result);
// })
const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// async function first(){
    // const doc = JSON.stringify({
    //     name: "bar",
    //     address: "tac",
    //     mobNo:"65662"
    //   });
//       console.log('hello')
//       const cid = await ipfs.add(doc);
//       console.log("IPFS cid:", cid);
      // await contract.methods.addPat(cid).send({
      //   from : patient,gas:3000000
      //  }).then(function(result){
      //    console.log(result);
      // })
//       console.log(await ipfs.cat(cid));
     
// }

// async function first() {
//   await web3.eth.getAccounts().then(async function(acc){
//     const doc = JSON.stringify({
//       name: "bar",
//       address: "tac",
//       mobNo:"65662"
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
// first();


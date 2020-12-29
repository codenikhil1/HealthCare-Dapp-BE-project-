// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.8.0;
pragma experimental ABIEncoderV2;
contract Storage {
    //mappings
    mapping(address => uint) authCaller;
    mapping(address => string) userType;
    mapping(address => patient) PData;
    mapping(address=> address[]) patToDoctor;
    mapping(address => doctor) DData;
    mapping(uint => treatment) treatmentDetails;
    mapping(address => medicine) patToMed;
    //constructor
    constructor() public{
        authCaller[msg.sender] = 1;
    }
    
    
    //events
     event DoctorAdded(address doctorAdd);
     event ChemistAdded(address ChemistAdd);
     event insAdded(address insAdd);
     event treated(address indexed Did,uint tid);
    
    //structs
    
     struct patient{
        string Phash; 
        uint [] treatmentId;
        string precautions;

    }
    struct doctor{
        string Dhash;
    }
    struct chemist{
        string Chash;
    }
    struct insaurance{
        string Ihash;
    }
     struct treatment {
        address doctor_id;
        string diagnosis;
        string test_conducted;
        uint bill;
        string medicine;
    }
    struct medicine{
        address pid;
        string medicines;
    }
    //struct variable
    patient pat;
    doctor dr;
    treatment trt;
    insaurance ins;
    
    //patient functions
    
    function addPat(string memory _Phash) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("")));
        patient memory pat;
        pat.Phash = _Phash;
        userType[msg.sender] = 'patient';
        PData[msg.sender] = pat;
        return true;
    }
    
    function getPatient(address _Padd) public returns(string memory){
        require(msg.sender == _Padd);
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("patient")));
        
        return PData[msg.sender];
    }
    
    function getDoctor(address _Dadd) public returns(string memory){
        //need to complete
         return DData[_Dadd].Dhash; 
    }
    
    function grantAccess(address _Dadd) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("patient")));
        patToDoctor[msg.sender].push(_Dadd);
        return true;
    }
    function applyIns(address _Iadd) public returns(bool){
         require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("patient")));
        //complete
    }
    function getInsurance(address _Iadd) public returns(string memory){
        //need to complete
    }
    //
     function isValid(address pat,address doctor) public returns(bool){
        address[] memory temp = patToDoctor[pat];
        uint len = temp.length;
        for(uint i = 0;i<len;i++){
            if(temp[i] == doctor)
                return true;
        }
        return false;
    }
    
    
    //Doctor patient
    
     function addDoc(string memory _Dhash) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("")));
        userType[msg.sender] = 'doctor';
        DData[msg.sender] = _Dhash;
        emit DoctorAdded(msg.sender);
        return true;
    }
    
    function updatePrecautions(address _Padd,string memory _precautions) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("doctor")));
        require(isValid(_Padd,msg.sender) == true);
        PData[_Padd].precautions = _precautions;
        return true;
        
    }
    function createTreatmentID(uint patient_id) public returns (uint){
        uint treatment_id = (142317*patient_id)%1000003;
        return treatment_id;
    }
    function treatPatient(address _Padd, string memory _diagnosis,string memory _test_conducted,uint _bill,string memory _medicine)
    public returns(uint){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("doctor")));
        require(isValid(_Padd,msg.sender) == true);
        uint _tid = createTreatmentID(patient_id);
        treatment memory trt;
        trt.doctor_id = _msg.sender;
        trt.diagnosis = _diagnosis;
        trt.test_conducted = _test_conducted;
        trt.bill = _bill;
        trt.medicine = _medicine;
        treatmentDetails[_tid] = trt;
        PData[_Padd].treatmentId.push(_tid);
        emit treated(msg.sender,_tid);
        return _tid;
    }
    function giveMedicines(address _pid,address _cadd.string memory _medicines) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("doctor")));
        require(isValid(_Padd,msg.sender) == true);
        medicine memory md;
        md.pid = _pid;
        md.medicines = _medicines;
        patToMed[_cadd] = md;
        return true;
    }
    function getTrtDetails(uint _tid) public returns(treatment memory trt){
         require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("doctor")));
         return treatmentDetails[_tid];
    }
    
    //chemist
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
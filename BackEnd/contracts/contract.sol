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
    mapping(address => insaurance) IData;
    mapping(address => chemist) CData;
    mapping(uint => treatment) treatmentDetails;
    mapping(address => medicine) chemToMed;
    mapping(address => bill[]) patToChemistBill;
    mapping(address => address[]) insToPat;
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
    struct bill{
        address chemid;
        string date;
        uint amt;
    }
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
        
        return PData[msg.sender].Phash;
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
         insToPat[_Iadd].push(msg.sender);
         return true;
            
    }
     function isValid(address pat,address doctor) public returns(bool){
        address[] memory temp = patToDoctor[pat];
        uint len = temp.length;
        for(uint i = 0;i<len;i++){
            if(temp[i] == doctor)
                return true;
        }
        return false;
    }
    
    //getUser
    function getUser(address _Uaddress) public returns(string){
        return userType[_Uaddress];
    }
    
    //Doctor 
    
     function addDoc(string memory _Dhash) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("")));
        userType[msg.sender] = 'doctor';
        DData[msg.sender].Dhash = _Dhash;
        emit DoctorAdded(msg.sender);
        return true;
    }
    
    function updatePrecautions(address _Padd,string memory _precautions) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("doctor")));
        require(isValid(_Padd,msg.sender) == true);
        PData[_Padd].precautions = _precautions;
        return true;
        
    }
   function random() private view returns (uint) {
       return uint(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%251);
   }
    function treatPatient(address _Padd, string memory _diagnosis,string memory _test_conducted,uint _bill,string memory _medicine)
    public returns(uint){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("doctor")));
        require(isValid(_Padd,msg.sender) == true);
        uint _tid = random();
        treatment memory trt;
        trt.doctor_id = msg.sender;
        trt.diagnosis = _diagnosis;
        trt.test_conducted = _test_conducted;
        trt.bill = _bill;
        trt.medicine = _medicine;
        treatmentDetails[_tid] = trt;
        PData[_Padd].treatmentId.push(_tid);
        emit treated(msg.sender,_tid);
        return _tid;
    }
    function giveMedicines(address _pid,address _cadd,string memory _medicines) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("doctor")));
        require(isValid(_pid,msg.sender) == true);
        medicine memory md;
        md.pid = _pid;
        md.medicines = _medicines;
        chemToMed[_cadd] = md;
        return true;
    }
    function getTrtDetails(uint _tid) public returns(treatment memory trt){
         require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("doctor")));
         return treatmentDetails[_tid];
    }
    
    //chemist
    
    function addChemist(address _Cid,string memory Chash) public returns(bool){
      require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("")));
      userType[msg.sender] = 'Chemist';
        CData[msg.sender].Chash = Chash;
        emit ChemistAdded(msg.sender);
        return true;
    }
    
    function sellMedicines(address _pid,string memory _date,uint _amt) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("Chemist")));
        
        patToChemistBill[_pid].push(bill(msg.sender,_date,_amt));
        
    }
    
   //insaurance
   
   function addInsCompany(address _Iid,string memory Ihash) public returns(bool){
       require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("")));
        userType[msg.sender] = 'Insurance';
        IData[msg.sender].Ihash = Ihash;
        emit insAdded(msg.sender);
        return true;
   }
    function approveInsurance(address patId) public returns(bool){
        require(keccak256(abi.encodePacked(userType[msg.sender])) == keccak256(abi.encodePacked("Insurance")));
        address[] memory arr = insToPat[msg.sender];
        uint len = arr.length;
        int j = -122;
        for(uint i = 0 ; i < len ; i++ ){
            if(arr[i] == patId){
             j=int (i);   
            }
        }
        if(j != -122){
            uint i = uint (j);
            delete insToPat[msg.sender][i];
        }
        return true;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
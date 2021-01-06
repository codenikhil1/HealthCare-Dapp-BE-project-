import React from 'react'
import {useEffect,useState} from 'react'
import ShowTreatments from './ShowTreatments'
import {CircularProgress} from "@material-ui/core"
import ipfs from '../../../../ipfs'
import web3 from '../../../../web3'
import contract from '../../../../contract'

function TreatMent({accAdd}) {
    const [show, setShow] = useState(false)
    const logdata = []
    const [tabledata,settabledata] = useState();
    useEffect(() => {
        async function getTreatId(){
            await contract.getPastEvents('treated',{
                filter :{Pid : accAdd},
                fromBlock:0
            }).then(async function(events){
                    events.forEach(element =>{
                        const object = {}
                        object.Tid = element.returnValues[2]; 
                        //console.log(element.returnValues[0])
                        logdata.push(object)
                    })
                    settabledata(logdata)
                    setShow(true);
            }); 
           }
           getTreatId()
    }, [])
    return (
       <div>
            {show ? <div>
                <ShowTreatments data = {tabledata}></ShowTreatments> </div> : <CircularProgress></CircularProgress>}
        </div>
    )
}

export default TreatMent


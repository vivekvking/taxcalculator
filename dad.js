// let i_igst = 11504,     //icoming igst
//     i_cgst = 335.52,     //incoming cgst 
//     i_sgst = 335.52,     //incoming sgst
//     c_igst = 0,     //current igst
//     c_cgst = 12851.42,   //current cgst
//     c_sgst = 12851.41,   //current sgst
//     p_igst = 38617,  //payable igst
//     p_cgst = 0,     //payable cgst
//     p_sgst = 0;     //payable sgst
   
const processing = async(i_igst,i_cgst,i_sgst,c_igst ,c_cgst,c_sgst,p_igst,p_cgst,p_sgst)=>{
    let ipi=0,ipc=0,ips=0,cpi=0,cpc=0,spi=0,sps=0,icash=p_igst,ccash=p_cgst,scash=p_sgst,ri=0,rc=0,rs=0;

    //remaining incoming taxes
    ri = i_igst+c_igst;
    rc = i_cgst + c_cgst;
    rs = i_sgst + c_sgst;

    // igst paid by incoming igst 
    if(icash>0 && ri>0){
        if(icash>ri){
            ipi = ri;
            icash=icash-ri;
            ri=0;
        }else{
            ipi = icash;
            ri=ri-icash;
            icash=0;
        }
    }

    // igst paid by incoming cgst
    if(icash>0 && rc>0){
        if(icash>rc){
            ipc = rc;
            icash=icash-rc;
            rc=0;
            // console.log("igst paid by incoming cgst, new icash remaining = ",icash);
        }else{
            ipc = icash;
            rc=rc-icash;
            icash=0;
        }
    }

    // igst paid by incoming sgst
    if(icash>0 && rs>0){
        if(icash>rs){
            ips = rs;
            icash=icash-rs;
            rs=0;
        }else{
            ips = icash;
            rs=rs-icash;
            icash=0;
        }
    }

    // cgst paid by incoming igst 
    if(ccash>0 && ri>0){
        if(ccash>ri){
            cpi = ri;
            ccash=ccash-ri;
            ri=0;
        }else{
            cpi = ccash;
            ri=ri-ccash;
            ccash=0;
        }
    }

    // cgst paid by incoming cgst
    if(ccash>0 && rc>0){
        if(ccash>rc){
            cpc = rc;
            ccash=ccash-rc;
            rc=0;
        }else{
            cpc = ccash;
            rc=rc-ccash;
            ccash=0;
        }
    }

    // sgst paid by incoming igst 
    if(scash>0 && ri>0){
        if(scash>ri){
            spi = ri;
            scash=scash-ri;
            ri=0;
        }else{
            spi = scash;
            ri=ri-scash;
            scash=0;
        }
    }

    // sgst paid by incoming sgst
    if(scash>0 && rs>0){
        if(scash>rs){
            sps = rs;
            scash=scash-rs;
            rs=0;
        }else{
            sps = scash;
            rs=rs-scash;
            scash=0;
        }
    }

    //Output now
    console.log("Paying mediums =        incom. IGST  || incom. CGST || incom. SGST || CASH" )
    console.log("IGST paying through all mediams= ", ipi," || ",ipc," || ",ips," || ", icash);
    console.log("CGST paying through all mediams= ", cpi," || ",cpc," || ",0," || ", ccash);
    console.log("SGST paying through all mediams= ", spi," || ",0,"   || ",sps," || ", scash);
    return [
        {"igst paid by igst":ipi,"igst paid by cgst":ipc,"igst paid by sgst":ips,"igst by cash":icash},
        {"cgst paid by igst":cpi,"cgst paid by cgst":cpc,"cgst paid by sgst":0,"cgst by cash":ccash},
        {"sgst paid by igst":spi,"sgst paid by cgst":0,"sgst paid by sgst":sps,"sgst by cash":scash},
        {"igst balance": ri,"cgst balance": rc,"sgst balance": rs}
    ]
}   
// console.log(processing(11504,335.52,335.52,0,12851.42,12851.42,38617,0,0))
module.exports = processing;

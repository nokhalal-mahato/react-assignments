const resolveApiCall=(response:Response)=>{
    return new Promise(async(resolve,reject)=>{
        const responseData= await response.json(); 
        if(response.ok){
            resolve(responseData);
        }
        else{
            reject(responseData.error_msg);
        }
    })
};

export default resolveApiCall;
const fetchData = async(params, jwtToken,onSuccess,onFailure) => {
  const response=await fetch(`https://apis.ccbp.in/jobs/${params}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  if(response.ok){
    const responseData=await response.json();
    return onSuccess(responseData);
  }
  else{
    return onFailure();
  }
};

export default fetchData;

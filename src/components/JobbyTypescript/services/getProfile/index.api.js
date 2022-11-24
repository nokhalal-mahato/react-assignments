const fetchData = async(jwtToken,onSuccess,onFailure) => {
  const response = await fetch("https://apis.ccbp.in/profile", {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    method: "GET",
  });
  if(response.ok){
    const fetchedData = await response.json();
    const updatedData = {
      name: fetchedData.profile_details.name,
      profileImageUrl: fetchedData.profile_details.profile_image_url,
      shortBio: fetchedData.profile_details.short_bio,
    };
    return onSuccess(updatedData);
  }
  else{
    return onFailure();
  }
};

export default fetchData;

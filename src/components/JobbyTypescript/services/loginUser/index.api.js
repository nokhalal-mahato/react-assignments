const fetchData = async (userDetails, onSubmitSuccess, onSubmitFail) => {
  const response = await fetch("https://apis.ccbp.in/login", {
    method: "POST",
    body: JSON.stringify(userDetails),
  });
  const data = await response.json();
  if (response.ok) {
    onSubmitSuccess(data.jwt_token);
  } else {
    onSubmitFail(data.error_msg);
  }
};

export default fetchData;

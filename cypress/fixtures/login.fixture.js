export const loginFixture = (status) => {
  if (status == "success") {
    return {
      statusCode: 200,
      body: {
        jwt_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5lZXRoYSIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjIzMDY1NTMyfQ.68FuDFraHW7GplQiXVUrnsU1goYgmwd0tXNk6-HxCok",
      },
    };
  } else if ((status == "invalid-username")) {
    return {
      statusCode: 401,
      body: {
        error_msg: "Enter valid username",
      },
    };
  } else if ((status == "invalid-data")) {
    return {
      statusCode: 404,
      body: {
        error_msg: "Enter valid data",
      },
    };
  } else if ((status == "invalid-password")) {
    return {
      statusCode: 401,
      body: {
        error_msg: "Enter valid password",
      },
    };
  }
};

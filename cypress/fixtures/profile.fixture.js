export const profileFixture = (status) => {
  if (status == "success") {
    return {
      statusCode: 200,
      body: {
        profile_details: {
          name: "Rahul Attuluri",
          profile_image_url:
            "https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
          short_bio: "Lead Software Developer and AI-ML expert",
        },
      },
    };
  } else {
    return {
      statusCode: 404,
      body: {
        profile_details: {},
      },
    };
  }
};

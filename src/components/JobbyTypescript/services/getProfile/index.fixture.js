const responseData = {
  name: "Rahul Attuluri",
  profileImageUrl:
    "https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
  shortBio: "Lead Software Developer and AI-ML expert",
};

const fetchMockData =(onSucess) => {
  onSucess(responseData);
};

export default fetchMockData;

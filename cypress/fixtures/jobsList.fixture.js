export const jobsListFixture = (status) => {
  if (status == "success") {
    return {
      statusCode: 200,
      body: {
        jobs: [
          {
            company_logo_url:
              "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
            employment_type: "Full Time",
            id: "d6019453-f864-4a2f-8230-6a9642a59466",
            job_description:
              "We’re in search of a Back-End Software Engineer that specializes in server-side components. In this role, you’ll primarily work in NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of knowledge on basic algorithms and data structures. As a Back-End Engineer, you might be architecting new features for our customers.",
            location: "Bangalore",
            package_per_annum: "21 LPA",
            rating: 4,
            title: "Backend Engineer",
          },
        ],
        total: 1,
      },
    };
  } else {
    return {
      statusCode: 404,
      body: {
        error: "unauthorised",
      },
    };
  }
};

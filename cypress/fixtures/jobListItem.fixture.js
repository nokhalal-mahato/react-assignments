export const jobsItemFixture = (status) => {
  if (status == "success") {
    return {
      statusCode: 200,
      body: {
        job_details: {
          title: "Devops Engineer",
          company_logo_url:
            "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
          company_website_url: "https://about.netflix.com/en",
          employment_type: "Internship",
          id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
          job_description:
            "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev",
          skills: [
            {
              image_url:
                "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
              name: "Docker",
            },
          ],
          life_at_company: {
            description:
              "Our core philosophy is people over process. Our culture has been instrumental to our success. It has helped us attract and retain stunning colleagues, making work here more satisfying. Entertainment, like friendship, is a fundamental human need, and it changes how we feel and gives us common ground. We want to entertain the world.",
            image_url:
              "https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png",
          },
          location: "Delhi",
          package_per_annum: "10 LPA",
          rating: 4,
        },
        similar_jobs: [
          {
            company_logo_url:
              "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
            employment_type: "Freelance",
            id: "2b40029d-e5a5-48cc-84a6-b6e12d25625d",
            job_description:
              "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
            location: "Delhi",
            rating: 4,
            title: "Frontend Engineer",
          },
        ],
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

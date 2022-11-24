const fetchData = async (
  jwtToken,
  employmentFilterValue,
  salary,
  searchValue,
  onSuccess,
  onFailure,onEmpty
) => {
  const response = await fetch(
    `https://apis.ccbp.in/jobs?employment_type=${employmentFilterValue}&minimum_package=${salary}&search=${searchValue}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );
  if (response.ok) {
    const responseData = await response.json();
    const updatedData = responseData.jobs.map((job) => ({
      title: job.title,
      id: job.id,
      rating: job.rating,
      packagePerAnnum: job.package_per_annum,
      location: job.location,
      jobDescription: job.job_description,
      employmentType: job.employment_type,
      companyLogoUrl: job.company_logo_url,
    }));
    if (responseData.total === 0) {
      return onEmpty(updatedData);
    }
    return onSuccess(updatedData)
  } else {
    return onFailure();
  }
};

export default fetchData;

const fetchHandler = () => {
  const token =
    "19a5c44e955035d2d18910a228840188524ada1877a8b02312ea0a4de33cd53b91b0d1c7183b811d22bba892958af40ea32be7a0513102172bd804223034710e8b8958718840b031fac7f511f577e3ba78a0e44a402cacf450bf05cf9b8f6c8337ce6cac514c7190d9735304481e2db015e4626461e88db110f2158ee260d11e";

  const mainHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  let newUrl = `http://localhost:1337/api/fas?populate=*&sort[0]=publishedAt:desc&pagination[page]=1&pagination[pageSize]=1000`;

  return fetch(newUrl, {
    method: "GET",
    headers: mainHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      return data?.data;
    })
    .catch((error) => {
      console.error("error", error);
    });
};

export default fetchHandler;

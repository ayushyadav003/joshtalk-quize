import axios from "axios";

export const fetchQuestion = async () => {
  let apiOpt = {
    method: "GET",
    url: "https://opentdb.com/api.php?amount=15",
  };

  const data = await axios(apiOpt);

  if (data?.status == 200) {
    return data?.data?.results;
  }
};

import axios from "axios";
export default async function horoscopeAPI({ name, header, img }) {
  const key = "1f5accf24bmshb1520f95f098f2ap1fde76jsnc15ce592bcb7";
  const host = "sameer-kumar-aztro-v1.p.rapidapi.com";

  const options = {
    method: "POST",
    url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
    params: { sign: name, day: "today" },
    headers: {
      "x-rapidapi-key": key,
      "x-rapidapi-host": host,
    },
  };
  return axios
    .request(options)
    .then((res) => {
      return { header, description: res.data.description, img };
    })
    .catch((err) => err);
}

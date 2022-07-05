import axios from "axios";
import { useEffect, useState } from "react";

const getPickupLines = async () => {
  return axios
    .get("https://getpickuplines.herokuapp.com/lines/random/")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export default function Home() {
  const [pickupLine, setPickupLine] = useState("");
  useEffect(() => {
    handleFetchLine();
  }, []);

  const handleFetchLine = () => {
    getPickupLines().then((res) => {
      setPickupLine(res.line);
    });
  };

  return (
    <div>
      <p className="text-3xl text-center pt-9">PLZ!</p>
      <p className="px-5 mt-20 text-2xl text-center">{pickupLine}</p>
      <div className="absolute inset-x-0 bottom-4 h-16 ...">
        <div className="relative flex justify-center pl-4 pr-4">
          <button
            className="w-screen h-16 max-w-lg font-bold text-white uppercase rounded bg-gradient-to-r from-purple-500 to-pink-500 bottom-0px-2"
            onClick={handleFetchLine}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

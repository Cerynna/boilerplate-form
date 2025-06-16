import { useEffect, useState } from "react";
import { fetchSheetData } from "./services/sheet";
import Form from "./components/Form";

import "./stylesheets/main.scss";
import Result from "./components/Result";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState<string[][]>([]);
  const updateData = () => {
    fetchSheetData()
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
  };
  useEffect(() => {
    updateData();
  }, []);

  return (
    <>
      <h1>Boilerplate Form with GoogleSheet</h1>
      <div className="row">
        <Form callback={updateData} />
        <Result data={data} />
      </div>
      <Footer />
    </>
  );
}

export default App;

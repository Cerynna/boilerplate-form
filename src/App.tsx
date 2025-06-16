import { useEffect, useState } from "react";
import { fetchSheetData } from "./services/sheet";
import Form from "./components/Form";

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
      <h1>Test</h1>
      <Form callback={updateData} />
      {JSON.stringify(data, null, 2)}
    </>
  );
}

export default App;

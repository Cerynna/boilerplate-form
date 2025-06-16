import axios from "axios";

export const fetchSheetData = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${
    import.meta.env.VITE_SHEET_ID
  }/values/${import.meta.env.VITE_SHEET_NAME}!A1:Z1000?key=${
    import.meta.env.VITE_API_KEY
  }`;
  //   console.log(url);
  try {
    const response = await axios.get(url);
    const rows = response.data.values;
    return rows;
  } catch (error) {
    console.error("Erreur de récupération du Google Sheet", error);
    throw error;
  }
};

export const addRowToSheet = async (data: string[], callback: () => void) => {
  const rawParams = { sheet: import.meta.env.VITE_SHEET_NAME };

  Object.assign(rawParams, data);
  const params = new URLSearchParams(rawParams);
  const url = `${import.meta.env.VITE_SHEET_WEBHOOK}?${params.toString()}`;
  console.log(url);
  try {
    const res = await fetch(url);
    const text = await res.text();
    console.log("Réponse :", text);
    callback();
  } catch (error) {
    console.error("Erreur GET / ajout :", error);
  }
};

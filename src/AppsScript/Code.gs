function doGet(e) {
  const requiredParams = ["sheet"];

  for (const param of requiredParams) {
    if (!e.parameter[param]) {
      return ContentService.createTextOutput(
        `Missing parameter: ${param}`
      ).setMimeType(ContentService.MimeType.TEXT);
    }
  }

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
      e.parameter.sheet
    );
    const row = Object.entries(e.parameter)
      .filter(([key]) => key !== "sheet")
      .map(([_, value]) => value);
    sheet.appendRow(row);

    return ContentService.createTextOutput(
      "Row added successfully"
    ).setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService.createTextOutput(
      "Error: " + error.message
    ).setMimeType(ContentService.MimeType.TEXT);
  }
}

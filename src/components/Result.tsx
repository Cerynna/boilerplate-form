export default function Result({ data }: { data: string[][] }) {
  return (
    <div id="Result">
      <h2>Resultat du Formulaire</h2>
      <div className="table">
        {data.map((row, i) => {
          return (
            <div className="row" key={`row_${i}`}>
              <div className="cell count">#{i + 1}</div>
              {row.map((cell, j) => {
                return (
                  <div className="cell" key={`cell_${i}_${j}`}>
                    {cell}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

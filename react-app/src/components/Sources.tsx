import Card from "./Card";

/* THIS COMPONENT IS PRETTY MUCH ENTIRELY PLACEHOLDER AND MOCK-UP*/

function Sources() {
  return (
    <>
      <div className="sourcesContainer contentContainer">
        <Card
          size="long"
          type="connections"
          subtype="Active"
          explainer={true}
          cardTitle="API CONNECTIONS"
          view="dataTable"
        >
          <div className="dataTableContainer">
            <table className="dataTable">
              <thead>
                <tr>
                  <th className="tableHeader">
                    <div className="tableHeaderContent">Name</div>
                  </th>
                  <th className="tableHeader">
                    <div className="tableHeaderContent">Age</div>
                  </th>
                  <th className="tableHeader">
                    <div className="tableHeaderContent">Key</div>
                  </th>
                  <th className="tableHeader">
                    <div className="tableHeaderContent">Status</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="tableRow">
                  <td className="tableCell">
                    <span>DV360</span>
                  </td>
                  <td className="tableCell">
                    <span>17d</span>
                  </td>
                  <td className="tableCell">
                    <span>AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe</span>
                  </td>
                  <td className="tableCell">
                    <span>Active</span>
                  </td>
                </tr>
                <tr className="tableRow">
                  <td className="tableCell">
                    <span>Adform</span>
                  </td>
                  <td className="tableCell">
                    <span>14d</span>
                  </td>
                  <td className="tableCell">
                    <span>zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx</span>
                  </td>
                  <td className="tableCell">
                    <span>Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Sources;

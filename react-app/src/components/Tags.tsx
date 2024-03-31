import Card from "./Card";

/* THIS COMPONENT IS PRETTY MUCH ENTIRELY PLACEHOLDER AND MOCK-UP*/

function Tags() {
  return (
    <>
      <div className="tagsContainer contentContainer">
        <Card
          size="long"
          type="tags"
          subtype="Generated"
          explainer={true}
          cardTitle="API CONNECTIONS"
          view="dataTable"
        >
          <div className="dataTableContainer">
            <table className="dataTable">
              <thead>
                <tr>
                  <th className="tableHeader">
                    <div className="tableHeaderContent">Tag</div>
                  </th>
                  <th className="tableHeader">
                    <div className="tableHeaderContent">Duration</div>
                  </th>
                  <th className="tableHeader">
                    <div className="tableHeaderContent">Status</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="tableRow">
                  <td className="tableCell">
                    <span>
                      https://carbontag.hiili.io/Pj3ggqRFD0/adExtractionPixel.js?campaign_id=50799&ad_id=60953765&impression_id=__ADFTIMESTAMP__
                    </span>
                  </td>
                  <td className="tableCell">
                    <span>24d</span>
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

export default Tags;

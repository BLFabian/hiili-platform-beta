import React, { useState, useEffect } from "react";
import PieChart from "./chartsAndTables/PieChart";
import DataTable from "./chartsAndTables/DataTable";
import Card from "./Card";
import Insight from "./Insight";
import Averages from "./Averages";
import Topbar from "./Topbar";
// import Card from "./PieChart"; TBD

//THE BACK-END IS ASSUMED TO SEND KB FOR WEIGHT, GRAMS FOR EMISSIONS, WH FOR ENERGY

/* const pieData = [
  { name: "YouTube", amount: 75432000 },
  { name: "TikTok", amount: 35447000 },
  { name: "Display", amount: 15693000 },
  { name: "Facebook", amount: 4598000 },
  { name: "Instagram", amount: 3122000 },
  { name: "Others", amount: 1259000 },
  //Mock-up PieData
]; */

interface TotalDataItem {
  Impressions: number;
  Requests: number;
  Transferred: number;
  Emissions: number;
  Energy: number;
  Grade: string;
}

interface PieDataItem {
  name: string;
  amount: number;
}

interface TableDataItem {
  Creatives?: number;
  Impressions?: number;
  Requests?: number;
  Transferred?: number;
  Emissions?: number;
  Energy?: number;
  Grade?: string;
  [key: string]: string | number | undefined;
}

function Home() {
  const [dateRange, setDateRange] = useState("This month"); // Default value, , expect this value to set the date range for what we ask for from the back-end
  const [pieData, setPieData] = useState<PieDataItem[]>([]);
  const [tableData, setTableData] = useState<TableDataItem[]>([]);
  const [totalData, setTotalData] = useState<TotalDataItem>();

  /* THIS SECTION HERE IS TO BE REPLACED WITH ACTUALLY FETCHING FROM THE BACK-END */
  useEffect(() => {
    let csvFilePath;
    switch (dateRange) {
      case "This week":
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/totaldataweek.csv";
        break;
      case "This month":
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/totaldatamonth.csv";
        break;
      case "This year":
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/totaldatayear.csv";
        break;
      case "Today":
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/totaldataday.csv";
        break;
      default:
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/totaldatamonth.csv";
    }

    fetch(csvFilePath)
      .then((response) => response.text())
      .then((text) => {
        const rows = text.split("\n");
        const headers = rows[0].split(",").map((header) => header.trim()); // Trim headers
        const values = rows[1].split(",").map((value) => value.trim()); // Trim values

        const totalDataItem: TotalDataItem = {
          Impressions: parseInt(values[headers.indexOf("Impressions")], 10),
          Requests: parseInt(values[headers.indexOf("Requests")], 10),
          Transferred: parseInt(values[headers.indexOf("Transferred")], 10),
          Emissions: parseInt(values[headers.indexOf("Emissions")], 10),
          Energy: parseInt(values[headers.indexOf("Energy")], 10),
          Grade: values[headers.indexOf("Grade")].trim().replace(/^"|"$/g, ""), // Remove potential quotation marks
        };

        setTotalData(totalDataItem); // Assuming setTotalData expects an array
      })
      .catch((error) =>
        console.error("Failed to load and parse CSV file", error)
      );
  }, [dateRange]);

  /* THIS SECTION HERE IS TO BE REPLACED WITH ACTUALLY FETCHING FROM THE BACK-END */

  useEffect(() => {
    let csvFilePath;
    switch (dateRange) {
      case "This week":
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/piedataweek.csv";
        break;
      case "This month":
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/piedatamonth.csv";
        break;
      case "This year":
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/piedatayear.csv";
        break;
      case "Today":
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/piedataday.csv";
        break;
      default:
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/piedatamonth.csv";
    }

    fetch(csvFilePath)
      .then((response) => response.text())
      .then((text) => {
        const rows = text.split("\n").slice(1); // Skip header row
        const newData = rows.map((row) => {
          const [name, amountString] = row.split(",");
          const amount = parseInt(amountString, 10); // Parse the amount as number
          return { name, amount }; // Construct the object
        });
        setPieData(newData);
      })
      .catch((error) =>
        console.error("Failed to load and parse CSV file", error)
      );
  }, [dateRange]);

  /* THIS SECTION HERE IS TO BE REPLACED WITH ACTUALLY FETCHING FROM THE BACK-END */
  useEffect(() => {
    let csvFilePath;
    switch (dateRange) {
      case "This week":
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/tabledataweek.csv";
        break;
      case "This month":
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/tabledatamonth.csv";
        break;
      case "This year":
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/tabledatayear.csv";
        break;
      case "Today":
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/tabledataday.csv";
        break;
      default:
        csvFilePath =
          "https://blfabian.github.io/hiili-platform-beta/placeholder_sample_data/tabledatamonth.csv";
    }

    fetch(csvFilePath)
      .then((response) => response.text())
      .then((text) => {
        const normalizedText = text.replace(/\r\n|\r/g, "\n");
        const rows = normalizedText.split("\n").filter((row) => row);
        const headers = rows[0].split(",").map((header) => header.trim());
        const data: TableDataItem[] = rows.slice(1).map((row) => {
          const values = row
            .split(",")
            .map((value) => value.trim().replace(/^"|"$/g, ""));
          let obj: Partial<TableDataItem> = {}; // Partial type used for intermediate object
          headers.forEach((header, index) => {
            // Determine if the column value should be a number
            if (
              [
                "Creatives",
                "Impressions",
                "Requests",
                "Transferred",
                "Emissions",
                "Energy",
              ].includes(header)
            ) {
              obj[header] = parseFloat(values[index]);
            } else {
              obj[header] = values[index];
            }
          });
          return obj as TableDataItem;
        });
        setTableData(data);
      })
      .catch((error) =>
        console.error("Failed to load and parse CSV file", error)
      );
  }, [dateRange]);

  /* THIS SECTION HERE IS TO BE REPLACED WITH ACTUALLY FETCHING FROM THE BACK-END */

  const handleDateRangeChange = (newDateRange: string) => {
    setDateRange(newDateRange);
  };

  return (
    <>
      <Topbar
        dateRange={dateRange}
        onDateRangeChange={handleDateRangeChange}
      ></Topbar>
      <div className="homeContainer contentContainer topBarPresent">
        <Card
          size="medium"
          type="breakdown"
          subtype={dateRange}
          info={true}
          infoText={"Values calculated across all aggregated data."}
          explainer={true}
          cardTitle={
            <>
              <span>Emissions per device</span>
              <span className="carbonDioxide unitText">
                {" "}
                (CO<sub>2</sub>)
              </span>
            </>
          }
          view="pie"
        >
          {" "}
          <PieChart sources={pieData} legacy={true} radius={80} />
        </Card>

        <Card
          size="small"
          type="averages"
          subtype={dateRange}
          info={true}
          infoText={"Values calculated on a per impression basis."}
          explainer={true}
          view="averages"
        >
          {totalData && (
            <>
              <Averages
                impressions={totalData.Impressions}
                requests={totalData.Requests}
                transferred={totalData.Transferred}
                emissions={totalData.Emissions}
                energy={totalData.Energy}
              />
            </>
          )}
        </Card>
        <Card size="mini" type="total" view="insight" explainer={false}>
          {totalData && (
            <>
              <Insight name="Impressions" value={totalData.Impressions} />
            </>
          )}
        </Card>
        <Card size="mini" type="total" view="insight" explainer={false}>
          {totalData && (
            <>
              <Insight name="Requests" value={totalData.Requests} />
            </>
          )}
        </Card>
        <Card size="mini" type="total" view="insight" explainer={false}>
          {totalData && (
            <>
              <Insight name="Transferred" value={totalData.Transferred} />
            </>
          )}
        </Card>
        <Card size="mini" type="total" view="insight" explainer={false}>
          {totalData && (
            <>
              <Insight name="Emissions" value={totalData.Emissions} />
            </>
          )}
        </Card>
        <Card size="mini" type="total" view="insight" explainer={false}>
          {totalData && (
            <>
              <Insight name="Energy" value={totalData.Energy} />
            </>
          )}
        </Card>
        <Card size="mini" type="total" view="insight" explainer={false}>
          {totalData && (
            <>
              <Insight name="Grade" value={totalData.Grade} />
            </>
          )}
        </Card>
        <Card
          size="big"
          type="overview"
          subtype={dateRange}
          explainer={true}
          cardTitle="Recent campaigns"
          view="dataTable"
        >
          <DataTable data={tableData} downloadable={true} />
        </Card>
      </div>
    </>
  );
}

export default Home;

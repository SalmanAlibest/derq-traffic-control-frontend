import React, { useEffect, useState } from "react";
import { DATA_BY_COUNTRY, DATA_BY_VEHICLE } from "../config";
import axios from "axios";
import CustomLineChart from "./CustomLineChart";
import CustomBarChart from "./CustomBarChart";
import CustomPieChart from "./CustomPieChart";

export const Dashboard = () => {
  const [countryData, setCountryData] = useState([]);
  const [trafficData, setTrafficData] = useState([]);

  const fetchData = () => {
    axios
      .get(DATA_BY_COUNTRY)
      .then((response) => {
        const data = response.data;
        console.log("DATA COUNT==>", data.length);
        setCountryData([...data]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get(DATA_BY_VEHICLE)
      .then((response) => {
        const data = response.data;
        console.log("DATA TRAFF==>", data.length);
        setTrafficData([...data]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="section-title"> Country-wise Traffic</h2>
      <div className="chart-group">
        <CustomLineChart
          data={countryData}
          dataKey="traffic"
          keyName="country"
        />
        <CustomBarChart
          data={countryData}
          dataKey="traffic"
          keyName="country"
        />
        <CustomPieChart
          data={countryData}
          dataKey="traffic"
          keyName="country"
        />
      </div>

      <h2 className="section-title"> Vehicle Type Distribution</h2>
      <div className="chart-group">
        <CustomLineChart
          data={trafficData}
          dataKey="vehicle_count"
          keyName="type"
        />
        <CustomBarChart
          data={trafficData}
          dataKey="vehicle_count"
          keyName="type"
        />
        <CustomPieChart
          data={trafficData}
          dataKey="vehicle_count"
          keyName="type"
        />
      </div>
    </div>
  );
};

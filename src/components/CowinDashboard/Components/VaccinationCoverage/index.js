import { Component } from "react";
import "./index.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

class VaccinationCoverage extends Component {
  DataFormatter = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`;
    }
    return number.toString();
  };
  render() {
    const { data } = this.props;
    return (
      <div className="vaccination-coverage">
        <h2>Vaccination Coverage</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis
              dataKey="vaccine_date"
              tick={{
                stroke: "gray",
                strokeWidth: 1,
              }}
            />
            <YAxis
              tickFormatter={this.DataFormatter}
              tick={{
                stroke: "gray",
                strokeWidth: 0,
              }}
            />
            <Legend
              wrapperStyle={{
                padding: 30,
              }}
            />
            <Bar
              dataKey="dose_1"
              name="Dose 1"
              fill="#5a8dee"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="dose_2"
              name="Dose 2"
              fill="#f54394"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default VaccinationCoverage;

import { Component } from "react";
import "./index.css";
import { Pie, PieChart, Cell, Legend, ResponsiveContainer } from "recharts";

class VaccinationByAge extends Component {
  render() {
    const {data}=this.props;
    return (
      <div className="vaccination-by-age">
        <h2>Vaccination By Age</h2>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              cy="40%"
              data={data}
              startAngle={0}
              endAngle={360}
              dataKey="count"
            >
              <Cell name="18-44" fill="#2d87bb" />
              <Cell name="44-60" fill="#a3df9f" />
              <Cell name="Above 60" fill="#64c2a6" />
            </Pie>
            <Legend iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default VaccinationByAge;

import { Component } from "react";
import "./index.css";
import { Pie, PieChart, Cell, Legend, ResponsiveContainer } from "recharts";

class VaccinationByGender extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="vaccination-by-gender">
        <h2>Vaccination By Gender</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              cy="70%"
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius="40%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="Male" fill="#f54394" />
              <Cell name="Female" fill="#5a8dee" />
              <Cell name="Others" fill="#2cc6c6" />
            </Pie>
            <Legend
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default VaccinationByGender;

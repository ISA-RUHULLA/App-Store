
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppRatingBar = ({ratingsData}) => {
 console.log("ratingsData", ratingsData)
  return (
    <div style={{ width: "100%", height: 300 }} >
      <h3 className="font-bold text-2xl text-start">Ratings</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={ratingsData}
          margin={{ top: 20, right: 30, left:0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#ff8c00"
            barSize={25}
            radius={[10, 10, 10, 10]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppRatingBar;

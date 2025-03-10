import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

export default function Meter({ text, value }) {
    const data = [{ name: text, uv: value, fill: "#4CAF50" }];

    return (
        <div style={{ textAlign: "center" }}>
            <RadialBarChart
                width={120} height={80} // Adjust height for better visibility
                cx="50%" cy="100%" // Center at bottom
                innerRadius="70%" outerRadius="100%"
                startAngle={180} endAngle={0}
                data={data}
                barSize={10}
                margin={{ bottom: -5 }}
            >
                {/* This ensures the correct angle mapping */}
                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                <RadialBar dataKey="uv" fill="#4CAF50" background="#c6f5c8" cornerRadius={5} />
            </RadialBarChart>

            <div style={{ fontSize: "18px", fontWeight: "bold" }}>{value}%</div>
            <div style={{ fontSize: "14px" }}>{text}</div>
        </div>
    );
}

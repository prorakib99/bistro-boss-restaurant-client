import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ImDiamonds } from 'react-icons/im';

// const data = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 }
// ];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill='white'
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline='central'
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const AdminPieChart = ({ data }) => {
    const renderCustomLegend = () => {
        return (
            <div className='legend-container flex gap-4 mb-8 flex-wrap justify-center'>
                {data.map((entry, index) => (
                    <div
                        key={`legend-${index}`}
                        className='legend-item flex items-center gap-1 text-lg'
                    >
                        <ImDiamonds
                            className='text-2xl'
                            style={{ color: colors[index % colors.length] }}
                        />
                        <span
                            className='font-bold'
                            style={{ color: colors[index % colors.length] }}
                        >
                            {entry.category}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const tooltipData = payload[0].payload;
            return (
                <div className='custom-tooltip bg-white border rounded p-2 shadow-md'>
                    <p className='text-lg font-semibold text-center rounded-2xl shadow-lg mb-1'>
                        {tooltipData.category}
                    </p>
                    <div className='flex items-center'>
                        <span className='mr-2'>Quantity:</span>
                        <span className='text-blue-500 font-bold'>{tooltipData.quantity}</span>
                    </div>
                    <div className='flex items-center'>
                        <span className='mr-2'>Total:</span>
                        <span className='text-blue-500 font-bold'>${tooltipData.total}</span>
                    </div>
                </div>
            );
        }

        return null;
    };
    return (
        <div>
            {renderCustomLegend()}
            <PieChart
                className='!w-fit !h-fit mx-auto overflow-hidden custom-position'
                width={400}
                height={320}
            >
                <Tooltip content={<CustomTooltip />} />
                <Pie
                    data={data}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill='#8884d8'
                    dataKey='quantity'
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default AdminPieChart;

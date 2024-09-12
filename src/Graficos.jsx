import style from './App.module.css'
import { LineChart, ComposedChart,Line, CartesianGrid, XAxis, YAxis, Tooltip,Legend,  Scatter } from 'recharts';

const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
const data2 = [
        { index: 10000, red: 1643, blue: 790 },
        { index: 1666, red: 182, blue: 42 },
        { index: 625, red: 56, blue: 11 },
        // Calculation of line of best fit is not included in this demo
        { index: 300, redLine: 0 },
        { index: 10000, redLine: 1522 },
        { index: 600, blueLine: 0 },
        { index: 10000, blueLine: 678 }
      ];

function Graficos () {
    
return(
    <>
        <div className={style.wrapBtns}>
      <button><a href="/Products">Produtos</a></button>
      <button><a href="/API">API</a></button>
      <button><a href="/Mapas">Mapa</a></button>
      <button><a href="/Graficos">Graficos</a></button>
    </div>
    <div  className={style.wrapPage2}>
      <h1>Exercícios de manutenção</h1>
  
    </div>

    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>

    <ComposedChart
      width={500}
      height={400}
      data={data2}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />
      <Legend />

      <XAxis
        dataKey="index"
        type="number"
        label={{ value: "Index", position: "insideBottomRight", offset: 0 }}
      />
      <YAxis
        unit="ms"
        type="number"
        label={{ value: "Time", angle: -90, position: "insideLeft" }}
      />
      <Scatter name="red" dataKey="red" fill="red" />
      <Scatter name="blue" dataKey="blue" fill="blue" />
      <Line
        dataKey="blueLine"
        stroke="blue"
        dot={false}
        activeDot={false}
        legendType="none"
      />
      <Line
        dataKey="redLine"
        stroke="red"
        dot={false}
        activeDot={false}
        legendType="none"
      />
    </ComposedChart>

            </>
    )
}

export default Graficos
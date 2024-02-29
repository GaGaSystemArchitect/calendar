import Calendar from "./Calendar";
import dayjs from "dayjs";

export default function App() {
  return <div className="App">
    {/* <Calendar value={dayjs('2023-11-08')} dateInnerContent={(value) => {
      return <div>
        <p style={{ background: 'yellowgreen', height: '300px' }}>{value.format("YYYY/MM/DD")}</p>
      </div>
    }} /> */}
    <Calendar value={dayjs('2023-11-08')} locale="zh-CN" onChange={(date) => {
      alert(date.format('YYYY-MM-DD'))
    }} />
  </div>
}
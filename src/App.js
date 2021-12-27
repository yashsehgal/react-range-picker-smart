import ReactRangePickerSmart from "./component/ReactRangePickerSmart";

export default function App() {
  return (
    <div className="app" style={{
      fontFamily: 'Inter, sans-serif'
    }}>
      <h4>React Range Picker Smart - React Component</h4>
      <ReactRangePickerSmart 
        title="Set a range for duration"
        description="Please select a range for your instance"
      />
    </div>
  )
}
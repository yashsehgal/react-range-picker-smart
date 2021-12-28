import ReactRangePickerSmart from "./component/ReactRangePickerSmart";

export default function App() {
  return (
    <div className="app" style={{
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '90vh',
    }}>
      <h4>React Range Picker Smart - React Component</h4>
      <ReactRangePickerSmart 
        title="Set a range for duration"
        description="Please select a range for your instance"
        defaultSliderValue={24}
      />
    </div>
  )
}
// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/test-components/Alert";
import AlertButton from "./components/test-components/AlertButton";

function App() {
  // let items = ["New York", "Orlando", "Chicago", "Houston", "Los Angeles"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [showAlert, toggleShowAlert] = useState(false);
  const runToggleShowAlert = () => {
    toggleShowAlert((prev) => !prev);
  };

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    //
    <>
      <AlertButton
        buttonText="Show Alerts"
        onSelectItem={handleSelectItem}
        sendShowAlert={runToggleShowAlert}
      >
        {showAlert && <Alert>Hello World!</Alert>}
      </AlertButton>
    </>
  );
}

export default App;

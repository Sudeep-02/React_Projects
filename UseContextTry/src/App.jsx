import MyComponent from "./components/MyComponent";
import MyProvider from "./components/MyProvider";
import "./App.css";

function App() {
  return (
    <MyProvider>
      <div>
        <h1>Using Context in React</h1>
        <h2>
          This is passed to MyProvider then to MyContext.Provider as children in
          app.jsx{" "}
        </h2>
        <MyComponent />
      </div>
    </MyProvider>
  );
}

export default App;

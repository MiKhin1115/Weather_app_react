import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from "./components/Card";
import Form from './components/Form'


function App() {
  return (
    <div className="w-full min-vh-100 d-flex justify-content-center align-item-center">
      <div className="shadow-lg bg-light gap-4">
        <Form/>
        <Card/>
      </div>
    </div>
    
  );
}

export default App;

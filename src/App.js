import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Timemanagement from "./components/Timemanagement/Timemanagement";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            {/*<Timemanagement />*/}
        </div>
    );
}


export default App;

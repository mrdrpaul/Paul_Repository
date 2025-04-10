import {useState, useEffect} from "react";
import Table from "./components/Table.jsx";
import axios from "axios";

const App = () => {
    const [imagePath, setImagePath] = useState("")
    const [tableData, setTableData] = useState("");
    function handleClick() {
        let baseUrl = "https://swapi.dev/api";
        let route = "people/"
        let endpoint = `${baseUrl}/${route}`
        axios.get(endpoint)
            .then(response => {
                console.log("Response: ", response.data)
                // let dataArray = response.data.results((returnedData, i)=>{
                //     return <Table data={returnedData} key={returnedData.id ? returnedData.id : i}/>
                // })
                let dataArray =  <Table data={response.data.results}/>;
                setTableData(dataArray);
            })
            .catch(err=>{
                console.error("Error: ", err.message)
            })
    }

    const handleReset = () => {
        setTableData("")
    }
    return(
        <>
            <div className="page">
                <div className="leftCol"></div>
                <div className="midCol">
                    <h1>Hello World but Star Wars Api</h1>
                    <br/>
                    {tableData}
                    <button onClick={handleClick}>Get Data</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
                <div className="rightCol"></div>
                </div>
        </>
    )
}

export default App
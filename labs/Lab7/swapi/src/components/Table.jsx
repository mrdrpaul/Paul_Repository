const Table = ({data}) => {
    return (
        <>
            <div>
                <table className="swapiData">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Height</th>
                            <th scope="col">Hair Color</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item, i) =>
                        <tr key = {i}>
                            <td>{item.name}</td>
                            <td>{item.height}</td>
                            <td>{item.hair_color}</td>
                            <td>{item.gender}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default Table;
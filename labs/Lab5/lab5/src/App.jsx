import React from "react"
import Greetings from "./components/Greetings.jsx";
import UserCard from "./components/UserCard.jsx";
import CardContainer from "./components/CardContainer.jsx";

const App = () =>{
    const people = [
        {id:1,name:"Bob", age:25},
        {id:2,name:"Charlie", age:35},
        {id:3,name:"Alice", age:30}
    ]

    function sortPeople(people){
        const sortedPeople = [...people].sort((x,y) => y.age - x.age);
        return [...sortedPeople].map(sortedPeople => <UserCard name={sortedPeople.name} age={sortedPeople.age}/>);
    }
    return(
        <div>
            {/*<Greetings name="Paul"/>*/}
            {/*<UserCard name="test" age={20}/>*/}
            {/*<CardContainer><UserCard name="Bob" age={30}/></CardContainer>*/}
            {/*<CardContainer><UserCard name="Charlie" age={35}/></CardContainer>*/}
            {/*<CardContainer><UserCard name="Alice" age={25}/></CardContainer>*/}
            {/*<UserCard name="Alice" age={25}/>*/}
            {/*<CardContainer><UserCard></UserCard></CardContainer>*/}
            <CardContainer>{sortPeople(people)}</CardContainer>
        </div>
    )

}

export default App;
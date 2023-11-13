import people from './icons/icon-person.svg'

function People(props) {
  return (
    <div className="PeopleDIV">
      <div className="PeopleTEXT"> Number of People </div>
       <img src={people} alt="people" className="peopleICON" />
      <input className="peopleINPUT"  type="number" onChange={(event) => {
        props.setPeople(event.target.valueAsNumber);
      }} />
    </div>
  )
}

export default People;
// 142-ის 15% არის 21.3 2)მერე იყოფა ხუთ კაცზე და არი 4.2 // ხუთ კაცს 4.2 დავადებინეთ ჯამში გამოვიდა 21.3(15% of 142$)
// 142 / 5 = 28 2)28 + $4.2 = 32.2$ // noSale 15%-ით მეტს იხდის ხუთი კაცი
import {useEffect, useState} from 'react';
import './App.css';
import Bill from './Bill';
import Percent from './Percent';
import People from './People';

function App() {
  const [cash, setCash] = useState(0);
  const [percent, setPercent] = useState(0);
  const [people, setPeople] = useState(0);
  const [userShare, setUserShare] = useState(0);
  const [noSale, setNoSale] = useState(0);

  useEffect(() => {
    if (cash > 0 && percent >= 0 && people > 0) {
      const userCash = (percent / 100) * cash; 
      const userShare = userCash / people; 
      setUserShare(userShare);
    } else {
      setUserShare(0); 
    }
  }, [cash, percent, people]);

    useEffect(() => {
    if (userShare > 0) {
      const userCash2 = cash / people; 
      const userShare2 = userCash2 + userShare; 
      setNoSale(userShare2);
    } else {
      setNoSale(0); 
    }
  }, [cash, setNoSale, people, userShare]);
  
  return (
   <div className="heightBUG">
    <div className="DIVBOSS">
      <div className="SPLITTER">
        <div> SPLI </div>
        <div> TTER </div>
       </div> 
         <main>
            {/* <div> Cash: {cash}$ </div>
            <div> Percent: {percent}% </div>
            <div> Amount of people: {people} </div> */}
            
              <Bill setCash={setCash} />
          
                <Percent percent={percent} setPercent={setPercent} />
                  <People setPeople={setPeople} people={people} />

             <div className="footer">
                  <div className="TipAmount">
                    <div className="footerText"> Tip Amount <div className="person"> / person
                     </div> 
                      </div> 
                    <div className="result1"> ${userShare.toFixed(2)} </div>
                    </div>

                  <div className="TipAmount2">
                    <div className="footerText"> Total <div className="person"> / person </div> </div> 
                    <div className="result2"> ${noSale.toFixed(2)} </div>
                    </div>
              
              <div> <button className="resetBTN" onClick={() => {
                setCash(0); setPercent(0); setPeople(0); setUserShare(0); setNoSale(0);
              }}> RESET </button> </div>

            </div>
        </main>     
     </div>
   </div>   
  );
}

export default App;

import dollar from './icons/icon-dollar.svg';

function Bill(props) {
  return (
   <div className="BILL-CASH">
     <div> Bill </div>
     <img src={dollar} alt="$" className="dollarICON" />
      <input className="cashINPUT" type="number" inputMode="numeric" 
      onChange={(event) => {
        props.setCash(event.target.valueAsNumber)
        }} />
      </div>
  )
}
export default Bill;
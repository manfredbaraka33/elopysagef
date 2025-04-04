import React,{useState} from 'react'

const EnergyConsumption = () => {

    const [building,setBuilding]=useState(0);   
    const [area,setArea]=useState(0);
    const [people,setPeople]=useState(0);
    const [appliances,setAppliances]=useState(0);
    const [temp,setTemp]=useState(0);
    const [day,setDay]=useState(0);
    const [currency, setCurrency] = useState("USD");
    const [isLoading,setIsLoading]=useState(false);
    const [prediction,setPrediction]=useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        const formData = new FormData();
        formData.append("building", building);
        formData.append("day", day);
        formData.append("people", people);
        formData.append("area", area);
        formData.append("temp", temp);
        formData.append("appliances", appliances);
        formData.append("currency", currency);
    
        try {
            const resp = await fetch("https://elopyx-elopysage.hf.space/energy_consumption/", {
                method: "POST",
                body: formData,
            });
    
            if (resp.ok) {
                const data = await resp.json();
                setPrediction(data);
            } else {
                console.log("Something went wrong!");
            }
        } catch (error) {
            console.log("An error occurred", error);
        } finally {
            setIsLoading(false);
        }
    };
    
    

  return (
    <div className='container mt-4 rounded'>
       
        <div className="container text-light rounded p-3 mb-3">
        <h5 className='text-warning mt-2'>Energy consumption prediction</h5>
        <form onSubmit={handleSubmit}>
            <label htmlFor="building">Building type: </label>
            <select className='form-control' name="building" id="building" value={building} onChange={(e)=>setBuilding(e.target.value)}>
                <option value="0">Commercial</option>
                <option value="1">Industrial</option>
                <option value="2">Residential</option>
            </select>
             <br />
             <label htmlFor="area">Total area in Square Feet: </label>
            <input  className='form-control' type="number" id='area' min="0" name='area' value={area} onChange={(e)=>setArea(e.target.value)} />

            <br />
            <label htmlFor="people">Number of occupants(People in the building): </label>
            <input  className='form-control' type="number" min="0" id='people' name='people' value={people} onChange={(e)=>setPeople(e.target.value)} />

            <br />

            <br />
            <label htmlFor="appliances">Number of electric appliances: </label>
            <input  className='form-control' type="number" min="0" id='appliances' name='appliances' value={appliances} onChange={(e)=>setAppliances(e.target.value)} />
            <br />

            <label htmlFor="day">Day of a week: </label>
            <select  className='form-control' name="day" id="day" value={day} onChange={(e)=>setDay(e.target.value)}> 
                <option value="0">Weekend</option>
                <option value="1">Weekday</option>
            </select>

            <br />
            <label htmlFor="temp">Average  temperature in the building: </label>
            <input  className='form-control' type="number"  id='temp' name='temp' value={temp} onChange={(e)=>setTemp(e.target.value)} />
            <br />

            <label htmlFor="currency">Select Currency: </label>
            <select className='form-control' id='currency' value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="USD">USD (US Dollar)</option>
                <option value="KES">KES (Kenyan Shilling)</option>
                <option value="TZS">TZS (Tanzanian Shilling)</option>
                <option value="NGN">NGN (Nigerian Naira)</option>
                <option value="ZAR">ZAR (South African Rand)</option>
                <option value="EUR">EUR (Euro)</option>
                <option value="GBP">GBP (British Pound)</option>
            </select>

            <center>
            {isLoading && (<div className='spinner-border text-primary p-3 m-3' role='status'>
                <center> <span className='sr-only'></span></center>
                </div>)}
            </center>


            <button type='submit' className="btn btn-danger mt-3">Predict</button>
              
           
            
           <center>
           {prediction && (
                <div className='mt-4'>
                    <h4 className='my-2'>Predicted consumption </h4>
                    <h3 className='bg-success text-warning p-2 rounded mx-3'>
                        {prediction.consumption_converted} {prediction.currency}
                    </h3> <br />
                </div>
            )}
           </center>

        </form>
        </div>
    </div>
  )
}

export default EnergyConsumption

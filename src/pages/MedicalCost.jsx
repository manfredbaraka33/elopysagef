import React,{useState} from 'react'
import axios from 'axios';


const MedicalCost = () => {

const [isLoading2,setIsLoading2] = useState(false)
const [charges,setCharges] = useState('');
const [age,setAge] = useState('');
const [sex,setSex] = useState('');
const [bmi,setBMI] = useState('');
const [children,setChildren] = useState('');
const [smoker,setSmoker] = useState('');
const [region,setRegion] = useState('');
const [currency, setCurrency] = useState("USD");

  

const handleSubmit2 = async (e) => {
  e.preventDefault();
  setIsLoading2(true);

  // Create FormData
  const formData = new FormData();
  formData.append("age", age);
  formData.append("bmi", bmi);
  formData.append("sex", sex);
  formData.append("children", children);
  formData.append("region", region);
  formData.append("smoker", smoker);
  formData.append("currency", currency);

  try {
    const response = await axios.post('http://localhost:8000/charges_prediction/',formData);
    console.log(response);
    setCharges(response.data)
  } catch (error) {
    console.error("There was an error", error);
  } finally {
    setIsLoading2(false);
  }
};

  return (
    
    <div className="container text-light rounded mt-4 mb-3">
    <div className="container p-3 mt-4">
      <h5 className='text-warning mt-3'>Medical cost prediction</h5>
    <form className='' onSubmit={handleSubmit2} p-3>

        <label  htmlFor="age">Age: </label>
        <input className='form-control m-1' type="number" id='age' min="0" value={age} onChange={(e)=>setAge(e.target.value)} />

        <label  htmlFor="sex">Gender: </label>
        <select className='form-control m-1' name="sex" id="sex" value={sex} onChange={(e)=>setSex(e.target.value)}>
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>

        <label  htmlFor="bmi">Body Mass Index(BMI): </label>
        <input className='form-control m-1' type="number" id='bmi' min="15" max="60" value={bmi} onChange={(e)=>setBMI(e.target.value)}  />

        <label htmlFor="children">Children: </label>
        <input className='form-control m-1' type="number" id='children' min="0" value={children} onChange={(e)=>setChildren(e.target.value)}  />

        <label  htmlFor="region">Region: </label>
        <select className='form-control m-1' name="region" id="region" value={region} onChange={(e)=>setRegion(e.target.value)}>
          <option value="0">North East</option>
          <option value="1">North West</option>
          <option value="2">South East</option>
          <option value="3">South West</option>
        </select>


        <label  htmlFor="smoker">Smoker: </label>
        <select className='form-control m-1' name="smoker" id="smoker" value={smoker} onChange={(e)=>setSmoker(e.target.value)}>
          <option value="0">Not a Smoker</option>
          <option value="1">Smoker</option>
        </select>

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
      {isLoading2 && (
      <div className='spinner-border text-primary p-3 m-3' role='status'>
       <center> <span className='sr-only'></span></center>
      </div>)}

      </center>
      <div className="row p-3">
        <div className="col-lg-3 col-sm-10 my-2"><button type='submit' className='btn btn-danger mt-3'>Predict charges</button></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col-lg-3 col-sm-10 my-2">
           
          <center>
          {charges && (
                <div className='mt-4'>
                   <h4 className='my-3'> Predicted Charges </h4>
                    <h3 className='bg-success text-warning p-2 rounded mx-3'>
                        {charges.charges_converted} {charges.currency}
                    </h3> <br />
                </div>
            )}
          </center>
           </div>
      </div>

      </form>
          </div>

        </div>
   
  )
}

export default MedicalCost
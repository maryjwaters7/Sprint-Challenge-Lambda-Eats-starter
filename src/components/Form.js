import React, { useState } from "react";
import * as yup from 'yup';
import axios from "axios";

const formSchema = yup.object().shape({
    name:yup.string()
    .trim()
    .min(2,'The username must be at least 2 characters')
    .required('The username is a required field')
});

const Form = () => {
    const initialState = {
        sizes: '',
        pepperoni: '',
        sausage: '',
        mushroom: '',
        pineapple: '',
        instructions: '',
        name: ''
    }
    const [formState, setFormState] = useState(initialState);
    const [pizzas, setPizzas] = useState([]);

    const [errors, setErrors] = useState({
        name:''
    })
        

    const formSubmit = e => {
        e.preventDefault();
        console.log(formState)
        axios
          .post("https://reqres.in/api/marywaters", formState)
          .then(res => {
            console.log(res)
            setPizzas([...pizzas, res.data])
            setFormState(initialState);
          })
          .catch(err => console.log(err.response));
      };

    const checkboxHandler = e => {        
        setFormState({...formState, [e.target.name] : e.target.type ==='checkbox' ? e.target.checked : e.target.value});    
    };

    const inputHandler = e => {
        setFormState({...formState, [e.target.name] : e.target.value});
    };

  return (
      <>
    <form onSubmit ={formSubmit}>
        <label htmlFor ='sizes'>
            Choice of Size 
            <select 
            id='sizes'
            name='sizes'
            onChange={inputHandler}>
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
                <option value='Extra Large'>Extra Large</option>
            </select>
        </label>
       
        <div className = 'toppingsWrapper'>
            <p>Add Toppings</p>
            <label>
                Pepperoni
                <input 
                    name='pepperoni'
                    type='checkbox'
                    checked={formState.pepperoni}
                    onChange={checkboxHandler} />
                Sausage
                <input 
                    name='sausage'
                    type='checkbox'
                    checked={formState.sausage}
                    onChange={checkboxHandler} />
                Mushrooms
                <input 
                    name='mushrooms'
                    type='checkbox'
                    checked={formState.mushrooms}
                    onChange={checkboxHandler} />
                Pineapple
                <input 
                    name='pineapple'
                    type='checkbox'
                    checked={formState.pineapple}
                    onChange={checkboxHandler} />
            </label>
        </div>
        <label htmlFor='instructions'>
            Special Instructions <br/>
            <textarea 
            name='instructions' 
            value={formState.instructions}
            onChange={inputHandler}
            />
        </label>
        <br/>
        <label htmlFor="name">
            Name<br/>
            <input
                type="text"
                name="name"
                onChange={inputHandler}
            />
        </label>
        <br/>
            <button> Add to Order </button>
        <br />
      
    </form>

    <pre>{JSON.stringify(pizzas, null, 2)}</pre>
    </>
  );
};
export default Form;
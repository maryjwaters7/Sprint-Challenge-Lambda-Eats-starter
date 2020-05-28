import React, { useState } from "react";
import '../styles/Form.scss';
import * as Yup from 'yup';
import axios from "axios";



const Form = () => {
    const initialState = {
        sizes: '',
        pepperoni: false,
        sausage: false,
        mushroom: false,
        pineapple: false,
        instructions: '',
        name: ''
    }
    const [formState, setFormState] = useState(initialState);
    const [pizzas, setPizzas] = useState([]);

    const [errors, setErrors] = useState({
        name: ''
    })
       
    const formSchema = Yup.object().shape({
        name: Yup
        .string()
        .min(2,'The username must be at least 2 characters')
        .required('The username is a required field')
    });

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

    const validInputHandler = e =>{
        e.persist();
        Yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then( valid => {
            setErrors({
                ...errors,
                [e.target.name]: ''
            });
        })
        .catch(err => {
            setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
            });
        });
        setFormState({
            ...formState, 
            [e.target.name]: e.target.value
        });
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
                <option value='Size'>Choose Size</option>
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
                <option value='Extra Large'>Extra Large</option>
            </select>
        </label>
       
        <div className = 'toppingsWrapper'>
            <p>Add Toppings</p>
            <label className='toppings'>
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
                onChange={validInputHandler}
            />
        </label>
        {errors.name.length > 0 ? (<p className='error'>{errors.name}</p>) : null}
        <br/>
            <button> Add to Order </button>
        <br />
      
    </form>

    <pre>{JSON.stringify(pizzas, null, 2)}</pre>
    </>
  );
};
export default Form;
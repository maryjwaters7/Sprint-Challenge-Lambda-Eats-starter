import React, { useState } from "react";
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().required('Name is a required field.')
});

const Form = () => {
    const [formState, setFormState] = useState({
        sizes: '',
        ored: '',
        granch: '',
        bbq: '',
        salfredo: '',
        pepperoni: '',
        sausage: '',
        mushroom: '',
        pineapple: '',
        instructions: ''
    });
    const [errors, setErrors] = useState ({
        sizes: '',
        ored: '',
        granch: '',
        bbq: '',
        salfredo: '',
        pepperoni: '',
        sausage: '',
        mushroom: '',
        pineapple: '',
        instructions: ''
    });
    const validateChange = e => {
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors,
              [e.target.name]: err.errors[0]
            });
          });
      };
    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
            e.target.type ==='checkbox' ? e.target.checled : e.target.value
        };
        validateChange(e);
        setFormState(newFormData);
    };
  return (
    <form>
        <label htmlFor ='sizes'>
            Choice of Size 
            <select 
            id='sizes'
            name='sizes'
            onChange={inputChange}>
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
                <option value='Extra Large'>Extra Large</option>
            </select>
        </label>
        <div className ='sauceWrapper'>
            <p>Choice of Sauce</p>
            <label>
                Original Red
                <input 
                type='radio'
                name='ored'
                />
                Garlic Ranch
                <input 
                type='radio'
                name='granch'
                 />
                BBQ Sauce
                <input 
                type ='radio' 
                name='bbq'
                />
                Spinach Alfredo
                <input 
                type='radio' 
                name='salfredo'
                />
            </label>
        </div>
        <div className = 'toppingsWrapper'>
            <p>Add Toppings</p>
            <label>
                Pepperoni
                <input 
                    name='pepperoni'
                    type='checkbox'
                    checked={formState.pepperoni}
                    onChange={inputChange} />
                Sausage
                <input 
                    name='sausage'
                    type='checkbox'
                    checked={formState.sausage}
                    onChange={inputChange} />
                Mushrooms
                <input 
                    name='mushrooms'
                    type='checkbox'
                    checked={formState.mushrooms}
                    onChange={inputChange} />
                Pineapple
                <input 
                    name='pineapple'
                    type='checkbox'
                    checked={formState.pineapple}
                    onChange={inputChange} />
            </label>
        </div>
        <label htmlFor='instructions'>
            Special Instructions <br/>
            <textarea 
            name='instructions' 
            value={formState.motivation}
            />
        </label>
        <br/>
        <label htmlFor="name">
            Name<br/>
            <input
                type="text"
                name="name"
            />
        </label>
        <br/>
            <button> Add to Order </button>
    </form>
  );
};
export default Form;
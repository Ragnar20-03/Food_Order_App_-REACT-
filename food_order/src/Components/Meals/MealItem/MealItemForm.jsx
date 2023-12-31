import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

function MealItemForm( props) {
  return (
    <form action="  " className={classes.form}>
        <Input label="Amount" input={{
        
        id : 'amount' ,
        type:'number' ,
        min : '1' , 
        max : '5' ,
        step : '1',
        defalutValue: '1'
    }} />
        <button> + Add</button>
    </form>
  )
}

export default MealItemForm
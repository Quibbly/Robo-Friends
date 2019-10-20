import React from 'react';

const NewRobot = ({addNewRobot}) => {
    return (
        <div className='pa2'>
            <form >
            <input  className='pa3 ba b--green bg-lightest-blue' placeholder='New Robot Name'  type="text" id="userInput" />
            <button  className='pa3 ba b--green bg-lightest-blue' onClick={() => addNewRobot()} type="button">Add</button>
            
            </form> 
        </div>    
    );
}

export default NewRobot;

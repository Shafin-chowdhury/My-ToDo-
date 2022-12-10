import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'




const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Cardu (){
    return 
    <div>
<div className='card'>Add new text</div>
    <h3 className='heading'>Tasks</h3>
    
    <div className='card'>
        <h1>Study</h1>
        <p>{dateName+ "/" + monthName+ "/" + currentYear}</p>
        <p>Learn JavaScript</p>
    </div>
    </div>
}
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <div className='app'>
    <h1>ToDo App</h1>
    <Cardu />
    </div>
</div>




);



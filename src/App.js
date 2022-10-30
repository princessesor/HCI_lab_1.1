import { useState } from 'react';
//import { ReactDOM } from 'react';
import './App.css';
import Dropdown from './Dropdown';


function sayHello() {
    alert('this is a default message');
  }

function exitform(){
    alert('are you sure you want to exit');
}

 export default function App (){  
        const [formData, setformData] = useState({
            isCheck : false, // checkbox
            actions : "correct "  // radio
        })
        const handleChange = (e) => {
            const target = e.target
            const name = target.name
            const value = target.type ="checkbox" ? target.checked: target.value
            setformData({
                ...formData,
                [name] : value
            })
        
        }
        const [selected, setSelected] = useState("");
      
        const{ name, setName} = useState('');

        const onChange = (e) => {
            const {value} = e.target;

            setName(value);
        }

        const showData = () => {
            console.log('Enter message', name);
        }
    
        const onSubmit = (e) =>{
            e.preventDefault();
        }

        return (
        <div className="App">
           <header className="App-header"> lab 1.1 
            <form onSubmit={onSubmit}>
                <label>
                    Enter message:
                    <input onChange={onChange} name="name" value={name}/>
                </label>
                <button onClick={showData}>show message</button>
           <ul>
            <br></br>
                <button onClick={"default message 2"}> default message 1 </button>
                
                <button onClick={sayHello} className=" move">default message 2</button>;
            </ul>            
         <hr/>
        

            </form>
           </header> 
           <label>Program:  
           <Dropdown selected={selected} setSelected= {setSelected}/>
           <button onClick={"execute button"}>Execute</button>
            </label>

            <div className='first'>
           <ul>
           <label> Show Actions </label>  
           </ul>

           <ul >
            show message actions
           <input type="radio" name="actions" value="actions" 
           onChange={handleChange}/> 
           </ul>

            <ul >
           show program actions
           <input type="radio" name="actions" value="actions"
           onChange={handleChange}/>
           </ul>
           </div>
           
           <div className='second'>
           <ul>
             <label> Enable Actions </label> 
             </ul>
  
           <ul>
            Enable message Actions
            <input type="checkbox" name="isAgree" checked={formData.isAgree}
            onChange={handleChange} />
           </ul>
           
           <ul>
           Enable program Actions
            <input type="checkbox" name="isAgree" checked={formData.isAgree}
            onChange={handleChange} />
           </ul>
           </div>
    
        <button onClick={exitform} type="button" className='go'> EXIT </button>
          </div> 
    );  
}
/*export default App; */
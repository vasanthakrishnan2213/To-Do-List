import ReactDOM from 'react-dom'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function App () {
  
  const [div,setdiv] = useState([])
  const [p,setp] = useState()
  const [jp,setjp] = useState()
  
  const handlechange = (event) => {
    setp(event.target.value)
    
  }

  const handleadd = () => {
    if(p != null){
    const newdiv = {id: div.length+1, text:p, pdisplay:{display: 'flex'}, edisplay: {display: 'none'}}
    setdiv(e => [...e,newdiv])
    
    }
    setp()
  }

  const handlekeypress = (event) => {
    if (event.key === 'Enter') {
      if(p != null){
      const newdiv = {id: div.length+1, text:p, pdisplay:{display: 'flex'}, edisplay: {display: 'none'}}
      setdiv(e => [...e,newdiv])
      }
      event.target.value = ""
    }
    setp()
  }

  const handleedit = (i) => {
    setdiv(e => {
        const updatediv = [...e]
        if(i>=0 && i<updatediv.length) {
           updatediv[i] = {text:p, pdisplay:{display: 'none'}, edisplay: {display: 'block'}}
        }
        return updatediv;
    })
  }

  const handleeditchange = (event) => {
    setjp(event.target.value)
  }

  const handleeditadd = (i) => {
    if (jp != null) {
    setdiv(e => {
      const updatedp = [...e]
      if(i>=0 && i<updatedp.length) {
        console.log(updatedp[i].text)
         updatedp[i] = {text:jp, pdisplay:{display: 'flex'}, edisplay: {display: 'none'}}
      }
      return updatedp;
    })}
    setjp()
  }

  const handledelete = (i) => {
    const delval = [...div]
    delval.splice(i,1)
    setdiv(delval)
  }

  return(
    <div id='main'>

      <h1 id='h1'>Get Things Done!</h1>

      <div className='a'>
        <input className='input' onChange={handlechange} onKeyPress={handlekeypress} placeholder='What is the task today!'></input>
        <button className='addtask' onClick={handleadd}>Add Task</button>
      </div>

      <div>
        {div.map((elements,i) => (
          <div className='d' id={elements.id}>

            <div id='task' style={elements.pdisplay}>
              <p id='p'>{elements.text}</p>
              <div>
                <button id='b' onClick={() => handleedit(i)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                <button id='c' onClick={() => handledelete(i)}><FontAwesomeIcon icon={faTrash} /></button>
              </div>
            </div>

            <div className='a' style={elements.edisplay}>
              <input className='input' defaultValue={elements.text} onChange={handleeditchange}></input>
              <button className='addtask' onClick={() => handleeditadd(i)}>Add Task</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default App;

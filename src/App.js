import React from 'react'
import { CustomLinks } from './components/customLink';

const searchEngines = [{name:'google',href:'http://google.com'},{name:'yahoo',href:'http://yahoo.com'},{name:'bing',href:'http://bing.com'}]

class App extends React.Component {
  constructor(props){
    super(props)
    this.disableHrefs = this.disableHrefs.bind(this)
  }
  handleClick() {
    alert('hello world')
  }

  disableHrefs(){
    const btn = document.querySelector('button')
    this.count = -1
    this.li = document.querySelectorAll('.li')
    this.li.forEach(li => {
      this.count++ 
      if(li.getAttribute('href')){
        li.removeAttribute("href") 
        btn.innerText = 'Enable links'
      }
      else{
        li.setAttribute('href',`${searchEngines[this.count].href}`)
        btn.innerText = 'Disable links'
      }
    })
  }
  render() {
    let id = 0
    const allSearchEngines = searchEngines.map(engine => {
      return (
        <CustomLinks key={id++} href={engine.href} onClick={this.handleClick} text={engine.name} />
      )
    })
    return (
      <div className="App">
        <ul>{allSearchEngines}</ul>
        <button onClick={this.disableHrefs}>Disable links</button>
      </div>
    )
  }
}

export default App;

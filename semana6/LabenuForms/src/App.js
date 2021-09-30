import './App.css';
import React from "react"
import Form1 from './pages/Form1'
import Form2 from './pages/Form2'
import Form3 from './pages/Form3'
import Final from './pages/Final'


export default class App extends React.Component {
   state = {
      etapa: 1,
    }

    renderizaEtapa = () => {
      switch (this.state.etapa){
        case 1: 
        return <Form1  />
        case 2: 
        return <Form2  />
        case 3: 
        return <Form3  />
        case 4: 
        return <Final  />
        default:
          return <p>Erro!</p>
     
  
}
    }

    onClickIrParaProximaEtapa = () => {
      const valoretapa = this.state.etapa
      const maisum = valoretapa + 1
      this.setState({etapa: maisum})
    }

    
      render () {
        return (
          <div className="container">
                {this.renderizaEtapa()}
                <br />
            <button onClick={this.onClickIrParaProximaEtapa}>Próxima Etapa</button>
          </div>

        );
      }
    }

  
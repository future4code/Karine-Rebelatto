import React from 'react'

class Form2 extends React.Component {
    render () {
        return (
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <p>5. Qual curso?</p>
                <input type="text" name="name" />

                <p>6. Qual unidade de ensino?</p>
                <input type="text" name="idade" />
            </div>
        );
    }
}

export default Form2
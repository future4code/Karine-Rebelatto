import React from 'react'

class Form3 extends React.Component {
    render () {
        return (
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <p>5. Por que você não terminou a graduação?</p>
                <input type="text" name="name" />

                <p>6. Você fez algum curso complementar?</p>
                <input type="text" name="idade" />
            </div>
        );
    }
}

export default Form3
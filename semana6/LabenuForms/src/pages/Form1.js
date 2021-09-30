import React from 'react'


class Form1 extends React.Component {
    render () {
        return (
            <div>
                <h2> ETAPA 1 - DADOS GERAIS</h2>
                <p>1. Qual o seu nome?</p>
                <input type="text" name="name" />

                <p>2. Qual a sua idade?</p>
                <input type="text" name="idade" />

                <p>2. Qual o seu e-mail?</p>
                <input type="text" name="name" />

                <p>2. Qual a sua escolaridade?</p>
                <input type="text" name="name" />
            </div>
        );
    }
}

export default Form1
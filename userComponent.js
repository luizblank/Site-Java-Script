import { useState, useContext } from 'react';
import { UtilsContext } from './context';

const {utils, setUtils} = useContext(UtilsContext);

class userComponent
{
    constructor (nome, idade, sexo, notificacao)
    {
        this.nome = utils.nome;
        this.idade = utils.idade;
        this.sexo = utils.sexo;
        this.notificacao = utils.notificacao;
    }
}

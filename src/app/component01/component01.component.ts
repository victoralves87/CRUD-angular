import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component01',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './component01.component.html',
  styleUrls: ['./component01.component.css']
})
export class Component01Component {
  formulario = new FormGroup({

    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('',  [Validators.required, Validators.minLength(3)])
  });

  //visibilidade dos botões
  btnCadastrar:boolean = true;

  //vetor
  vetor:Pessoa[] = [];

  //armazenar indice da pessoa selecionada
  indice:number = -1

  //função de cadastro 
    cadastrar(){
      //cadastro de vetor
      this.vetor.push(this.formulario.value as Pessoa)
      //limpeza de inputs
      this.formulario.reset();
      //visualição no console
      //console.table(this.vetor)

    }

    //função de seleçãço
    selecionar(indice:number){

      //atribuir o indice a pessoa
      this.indice = indice;

      //atribuir os dados da pessoa no formulario
      this.formulario.setValue({
        nome:this.vetor[indice].nome,
        idade: this.vetor[indice].idade,
        cidade: this.vetor[indice].cidade
      });

        //visibilidade dos botões
        this.btnCadastrar = false

    }

    //função para alterar
    alterar(){
      this.vetor[this.indice] = this.formulario.value as Pessoa;
      //limpar os inputs
      this.formulario.reset();
      //visibilidade dos botões
      this.btnCadastrar = true;
    }

    //função de remover
    excluir(){
      this.vetor.splice(this.indice, 1)

      //limpeza de inputs
      this.formulario.reset();

       //visibilidade dos botões
      this.btnCadastrar = true;
    }

    //função de cancelamento
    cancelar(){
      //limpeza dos inputs
      this.formulario.reset();

      this.btnCadastrar = true;
    }

}

import { Aluno } from 'src/app/aluno/servico/aluno';
import { MatriculaCurso } from './matriculacurso';

export class Matricula  {
    codigo: string;
    aluno: Aluno;
    listaMatriculaCurso: MatriculaCurso[] = [];
}
//Laço para Linhas
var alunos = 0;

function calcula(){

        let medGeral = 0;
        let somaMedia = 0;

        for( let aluno = 1; aluno <= alunos; aluno++){
            let notaSoma = 0;     
            let notaBim = 0;
            let media = 0;

            
            for(let nota=1; nota <=4; nota++){

                notaBim = Number(document.getElementById(`nota${aluno}${nota}`).value)
                notaSoma += notaBim
            }


        //Media Ind  
            media = (notaSoma)/4

            document.getElementById(`media${aluno}`).innerText = media;
    
            
            if(media >=5){
                document.getElementById(`situacao${aluno}`).innerText = 'Aprovado'
                document.getElementById(`situacao${aluno}`).style.backgroundColor = 'green'
            }else
            if(media < 5 && media >= 3){
                document.getElementById(`situacao${aluno}`).innerText = 'Recuperação'
                document.getElementById(`situacao${aluno}`).style.backgroundColor = 'yellow' 
            }else{
                document.getElementById(`situacao${aluno}`).innerText = 'Reprovado'
                document.getElementById(`situacao${aluno}`).style.backgroundColor = 'red'
            }
            
            somaMedia += media;
        console.log(somaMedia);
        medGeral = somaMedia / alunos;
        document.getElementById('mediaGeral').innerText = medGeral;

        }

    }
 


function addLinha(){
    let listaAntiga = document.getElementById('dashboard').innerHTML
    console.log(listaAntiga)
    alunos += 1;
    document.getElementById('dashboard').innerHTML = listaAntiga + `<tr>
                                                            <th>${alunos}</th>
                                                            <td><input type="text" class="form-control" id="nome${alunos}" placeholder="nome"></td>
                                                            <td><input type="number" class="form-control" id="nota${alunos}1" placeholder=""></td>
                                                            <td><input type="number" class="form-control" id="nota${alunos}2" placeholder=""></td>
                                                            <td><input type="number" class="form-control" id="nota${alunos}3" placeholder=""></td>
                                                            <td><input type="number" class="form-control" id="nota${alunos}4" placeholder=""></td>
                                                            <td><output id="media${alunos}"></output></td>
                                                            <td><output id="situacao${alunos}"></output></td>
                                                    </tr>`
}   

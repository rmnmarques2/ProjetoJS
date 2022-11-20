function media(){
  var nome, matricula, nota1, nota2, nota3, media;
  nome = (document.getElementById('nome').value);
  matricula = (document.getElementById('matricula').value);
  nota1 = parseFloat(document.getElementById('nota1').value);
  nota2 = parseFloat(document.getElementById('nota2').value);
  nota3 = parseFloat(document.getElementById('nota3').value);
 
  media=(nota1+nota2+nota3)/3;
  
  
  var newTable = document.getElementById('tbBoletim');
  var row = newTable.insertRow(+1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(0);
  var cell3 = row.insertCell(0);
  var cell4 = row.insertCell(0);
  var cell5 = row.insertCell(0);
  var cell6 = row.insertCell(0);  
  var cell7 = row.insertCell(0);
  
   
  
  cell7.innerHTML = nome;
  cell6.innerHTML = matricula;
  cell5.innerHTML = nota1;
  cell4.innerHTML = nota2;
  cell3.innerHTML = nota3;
  cell2.innerHTML = media;
  cell1.innerHTML = "<button onclick='removeLinha(this)'>Remover</button>";
  




          
  
}






let log=window.parent.document.getElementById('data').innerHTML;
log=log.toString();
const ctx=document.getElementById("graph").getContext("2d");
document.getElementById("rawlog").innerHTML=log;
function ff_parser(data_to_parse)
{
  var g=data_to_parse.split("\n");
  data=[];
  parsd=[];
  part=20;
  for(i=0;i<g.length;i++)
  {
   var y=g[i].split("]");
   data.push({"date":y[0].substring(1),"type":y[1].substring(1),"detail":y[2].substring(1)});
  }
  var group=data.length/20;
  counter=0;
  model={"stdate":null,"noti":0,"err":0,"enddd":null};

}
ff_parser(log);

let log=window.parent.document.getElementById('data').innerHTML;
log=log.toString();
const ctx=document.getElementById("pie").getContext("2d");
const ftx=document.getElementById("pit").getContext("2d");
const ftxa=document.getElementById("sit").getContext("2d");
document.getElementById("rawlog").innerHTML=log;
var fog=log.split("\n");
function standartlog(fog,ctx,ftx,ftxa){
noti=0;
error=0;
var xValues=[0,0];
var xerrortypes=[];
var xalabels=[];
var barcolors=[];
var clentlabel=[];
var clentnum=[];
var clentcolor=[];
for(var mog=0;mog<fog.length;mog++)
{
    var b=fog[mog].split("]")[1];
    var x=fog[mog].split("]")[2];
  if(x[1]=="[")
  {
    var yhb=x.substr(2);
    console.log(yhb);
    if(clentlabel.includes(yhb.toString()))
    {
      var tindex=clentnum.indexOf(yhb);
      clentnum[tindex]+=1;
    }
    else
    {
      clentlabel.push(yhb);
      clentnum.push(1);
    }
  }
    if(x[0]=="[")
    {
      var index=x.indexOf("]");
      var e=x.slice(2,index);
    }
    else
    {
      var e=fog[mog].split("]")[2].split(" ")[1].substr(1);
    }
    if(xalabels.includes(e.toString()))
    { 
      var index=xalabels.indexOf(e);
      xerrortypes[index]+=1;
    }
    else
    {
      xalabels.push(e);
      xerrortypes.push(1);
    }
    if(b[2]=="n")
    {
        xValues[0]+=1;
    }
    else
    {
        xValues[1]+=1;
    }
    //Random color defition for second graph
    var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for(var t=0;t<xalabels.length;t++)
            {
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            barcolors.push(color);
          }
            var color = '#';
            for(var t=0;t<clentlabel.length;t++)
            {
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            clentcolor.push(color);
          }
}
console.log(clentlabel);
var labels=["notification","error"];
var barColors=["#b91d47",
"#00aba9"];
const data =new Chart("pie", {
    type: "pie",
    data: {
      labels: labels,
      datasets: [{
        backgroundColor: barColors,
        data:  xValues
      }]
    },
    options: {
    plugins:{
      title: {
        text: "Notification Error graph",
        display: true,
        Response:true,
        maintainAspectRatio: false
      }
    }
  }
  });
  const sata =new Chart("pit", {
    type: "pie",
    data: {
      labels: xalabels,
      datasets: [{
        backgroundColor: barcolors,
        data:  xerrortypes
      }]
    },
    options: {
    plugins:{
      title: {
        display: true,
        text: 'Details pie chart',
        Response:true
      }
    }
  }
  });
  const mata =new Chart("sit", {
    type: "pie",
    data: {
      labels: clentlabel,
      datasets: [{
        backgroundColor: clentcolor,
        data:   clentnum
      }]
    },
    options: {
    plugins:{
      title: {
        display: true,
        text: 'Details pie chart',
        Response:true,
        maintainAspectRatio: false
      }
    }
    }
  });
}
standartlog(fog,ctx,ftx,ftxa);
let log=window.parent.document.getElementById('data').innerHTML;
log=log.toString();
document.getElementById("rawlog").innerHTML=log;
function standartlog(fog){
    noti=0;
    error=0;
    var xValues=[0,0];
    var xerrortypes=[];
    for(var mog=0;mog<fog.length;mog++)
    {
        var b=fog[mog].split("]")[1];
        var x=fog[mog].split("]")[2];
      if(x[1]=="[" && b=="[error")
      {
        xValues[1]+=1;
      }
      else if(x[1]=="[")
      {
        alert(b);
        xValues[0]+=1;
      }
    }
    var labels=["notification","error"];
    var barColors=["#b91d47","#00aba9"];
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
            text: "clients pie chart",
            display: true,
            Response:true,
            maintainAspectRatio: false
          }
        }
      }
      });
}
standartlog(log.split("\n"));
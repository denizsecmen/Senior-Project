
let dataw;
let datalist;
let $ = require('jquery');
const { ipcRenderer, ipcMain } = require('electron');
  $("#ver-navb #logo button").on("click",function(){
    $("#ver-navb ").animate({"left": '-=400'});
    $("#sec ").animate({"left": '+=100'});
    $("#screen").animate({"width":"96%","left":"4%"});
    $("#navbar").animate({"width":"96%","left":"4%"});
});
  $("#sec #secbt button").on("click",function(){
    $("#ver-navb").animate({"left": '+=400'});
    $("#sec ").animate({"left": '-=100'});
    $("#screen").animate({"width":"80%","left":"20%"});
    $("#navbar").animate({"width":"80%","left":"20%"});
});
function rem(cvb){
var tt=document.getElementById("screen").src;
if(tt==null)
{
  return;
}
tt=tt.toString();
tt=tt.split("/");
tt=tt[tt.length-1].toString();
if(cvb.toString()==tt.toString())
{
  return
}
if(tt=="logs.html")
{
    $("#sec #logs div").animate({height:"0.5%"},200);
    $("#ver-navb #logli div").animate({height:"0.5%"},200);
}
else if(tt=="help.html")
{
    $("#sec #help div").animate({height:"0.5%"},200);
    $("#ver-navb #helpli div").animate({height:"0.5%"},200);
}
else if(tt=="set.html")
{
    $("#sec #set div").animate({height:"0.5%"},200);
    $("#ver-navb #settli div").animate({height:"0.5%"},200);
}
else if(tt=="graph.html")
{
    $("#sec #graph div").animate({height:"0.5%"},200);
    $("#ver-navb #graphlist div").animate({height:"0.5%"},200);
}
else if(tt=="alert.html")
{
    $("#sec #alert div").animate({height:"0.5%"},200);
    $("#ver-navb #aleli  div").animate({height:"0.5%"},200);
}
else
{
    $("#sec #noti div").animate({height:"0.5%"},200);
    $("#ver-navb #notifli div").animate({height:"0.5%"},200);
}
}
$("#ver-navb #logli").on("click",function(){
  rem("logs.html");
    document.getElementById("screen").src = "logs.html";
    $("#ver-navb #logli div").animate({height:"99%"},200);
    $("#sec #logs div").animate({height:"99%"},200);
  //
  $(document).ready(function(){
    $("#screen").on("load",function()
    {
      frameEle=document.getElementById('screen');
      frameEle.contentWindow.postMessage(datalist, '*');
    });
  });
  //
  });
$("#sec #logs").on("click",function(){
    rem("logs.html");
      document.getElementById("screen").src = "logs.html";
      $("#ver-navb #logli div").animate({height:"99%"},200);
      $("#sec #logs div").animate({height:"99%"},200);
    //
    $(document).ready(function(){
      $("#screen").on("load",function()
      {
        frameEle=document.getElementById('screen');
        frameEle.contentWindow.postMessage(datalist, '*');
      });
    });
    //
    });
$("#ver-navb #graphlist").on("click",function(){
  rem("graph.html");
  if (!$('#ver-navb #graphlist div').is(':animated')) {
    $("#sec #graph div").animate({height:"99%"},200);
    $("#ver-navb #graphlist div").animate({height:"99%"},200);  
  };
  document.getElementById("screen").src ="graph.html";
}
);
$("#sec #graph").on("click",function(){
  rem("graph.html");
  if (!$('#sec #graph div').is(':animated')) {
    $("#sec #graph div").animate({height:"99%"},200);
    $("#ver-navb #graphlist div").animate({height:"99%"},200);  
  };
  document.getElementById("screen").src ="graph.html";
}
);
$("#ver-navb #notifli").on("click",function(){
  rem("noti.html");
    document.getElementById("screen").src = "noti.html";
    $("#ver-navb #notifli div").animate({height:"99%"},200);
    $("#sec #noti div").animate({height:"99%"},200);
  });
$("#sec #noti").on("click",function(){
    rem("noti.html");
      document.getElementById("screen").src = "noti.html";
      $("#ver-navb #notifli div").animate({height:"99%"},200);
      $("#sec #noti div").animate({height:"99%"},200);
    });
$("#ver-navb #aleli").on("click",function(){
  rem("alert.html");
    document.getElementById("screen").src = "alert.html";
      $("#ver-navb #aleli div").animate({height:"99%"},200);
      $("#sec #alert div").animate({height:"99%"},200);
}
);
$("#sec #alert").on("click",function(){
  rem("alert.html");
    document.getElementById("screen").src = "alert.html";
      $("#ver-navb #aleli div").animate({height:"99%"},200);
      $("#sec #alert div").animate({height:"99%"},200);
}
);
$("#ver-navb #settli").on("click",function(){
  rem("set.html");
    document.getElementById("screen").src = "set.html";
      $("#ver-navb #settli div").animate({height:"99%"},200);
      $("#sec #set div").animate({height:"99%"},200);
}
);
$("#sec #set").on("click",function(){
  rem("set.html");
    document.getElementById("screen").src = "set.html";
      $("#ver-navb #settli div").animate({height:"99%"},200);
      $("#sec #set div").animate({height:"99%"},200);
}
);
$("#ver-navb #helpli").on('click',function(){
  rem("help.html");
  document.getElementById("screen").src = "help.html";
    $("#ver-navb #helpli div").animate({height:"99%"},200);
    $("#sec #help div").animate({height:"99%"},200);
}
);
$("#sec #help").on('click',function(){
  rem("help.html");
    document.getElementById("screen").src = "help.html";
      $("#ver-navb #helpli div").animate({height:"99%"},200);
      $("#sec #help div").animate({height:"99%"},200);
}
);
/*===Backend===*/
//Send Adding Data
ipcRenderer.send("preload","load database");
$("#scope").on("click",function()
{
  ipcRenderer.send("channel-2",document.getElementById("scope").innerHTML.toString());
}
);

//Select File 
$("#bot").on("click",function()
{
  ipcRenderer.send("channel-1",document.getElementById("bot").innerHTML.toString());
}
);



//Send Removing Data
$("#sbot").on("click",function()
{
  ipcRenderer.send("rem-cha",document.getElementById("sbot").innerHTML.toString());
}
);



//Rendered addded database
ipcRenderer.on("channel2-reply",(e,args) =>
{
  datalist=args;
  frameEle=document.getElementById('screen');
  frameEle.contentWindow.postMessage(datalist, '*');
}
);


//Loader
ipcRenderer.on('channel1-reply',(e,args) =>
{
console.log(args);
dataw=args;
document.getElementById("data").innerHTML=dataw;
}
);
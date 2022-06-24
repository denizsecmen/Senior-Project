$(document).ready(function(){
    $("#ver-navb #logo button").click(function(){
      $("#ver-navb ").animate({"left": '-=400'});
      $("#sec ").animate({"left": '+=100'});
      $("iframe").animate({"width":"96%","left":"4%"});
      $("#navbar").animate({"width":"96%","left":"4%"});
  });
  });
  $(document).ready(function(){
    $("#sec #secbt button").click(function(){
      $("#ver-navb").animate({"left": '+=400'});
      $("#sec ").animate({"left": '-=100'});
      $("iframe").animate({"width":"80%","left":"20%"});
      $("#navbar").animate({"width":"80%","left":"20%"});
  });
  });
  function rem(){
  var tt=document.getElementById("screen").src;
  if(tt==null)
  {
    return;
  }
  tt=tt.toString();
  tt=tt.split("/");
  tt=tt[3];
  if(tt=="logs.html")
  {
    $(document).ready(function(){
      $("#sec #logs div").animate({height:"0.5%"},200);
      $("#ver-navb #logli div").animate({height:"0.5%"},200);
      });
  }
  else if(tt=="help.html")
  {
    $(document).ready(function(){
      $("#sec #help div").animate({height:"0.5%"},200);
      $("#ver-navb #helpli div").animate({height:"0.5%"},200);
      });
  }
  else if(tt=="set.html")
  {
    $(document).ready(function(){
      $("#sec #set div").animate({height:"0.5%"},200);
      $("#ver-navb #settli div").animate({height:"0.5%"},200);
      });
  }
  else if(tt=="graph.html")
  {
    $(document).ready(function(){
      $("#sec #graph div").animate({height:"0.5%"},200);
      $("#ver-navb #graphlist div").animate({height:"0.5%"},200);
      });
  }
  else if(tt=="alert.html")
  {
    $(document).ready(function(){
      $("#sec #alert div").animate({height:"0.5%"},200);
      $("#ver-navb #aleli  div").animate({height:"0.5%"},200);
      });
  }
  else
  {
    $(document).ready(function(){
      $("#sec #noti div").animate({height:"0.5%"},200);
      $("#ver-navb #notifli div").animate({height:"0.5%"},200);
      });
  }
}
  function graphli()
  {
    rem()
    document.getElementById("screen").src ="graph.html";
    $(document).ready(function(){
      $("#sec #graph div").animate({height:"99%"},200);
      $("#ver-navb #graphlist div").animate({height:"99%"},200);
      });
  }
  function log()
  {
    rem()
      document.getElementById("screen").src = "logs.html";
      $(document).ready(function(){
      $("#sec #logs div").animate({height:"99%"},200);
      $("#ver-navb #logli div").animate({height:"99%"},200);
      });
  }
  function noti()
  {
    rem()
      document.getElementById("screen").src = "noti.html";
    $(document).ready(function()
    {
      $("#ver-navb #notifli div").animate({height:"99%"},200);
      $("#sec #noti div").animate({height:"99%"},200);
    });
  }
  function ale()
  {
    rem()
      document.getElementById("screen").src = "alert.html";
      $(document).ready(function()
      {
        $("#ver-navb #aleli div").animate({height:"99%"},200);
        $("#sec #alert div").animate({height:"99%"},200);
      });
  }
  function set()
  {
    rem()
      document.getElementById("screen").src = "set.html";
      $(document).ready(function()
      {
        $("#ver-navb #settli div").animate({height:"99%"},200);
        $("#sec #set div").animate({height:"99%"},200);
      });
  }
  function hlp()
  {
    rem()
      document.getElementById("screen").src = "help.html";
      $(document).ready(function()
      {
        $("#ver-navb #helpli div").animate({height:"99%"},200);
        $("#sec #help div").animate({height:"99%"},200);
      });
  }
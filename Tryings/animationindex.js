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
  $(document).ready(function(){
    $("#ver-navb #logli").click(function(){
      $("#ver-navb #logli div").animate({height:"99%"},200);
      $("#ver-navb #helpli div").animate({height:"0.5%"},200);
      $("#ver-navb #notifli div").animate({height:"0.5%"},200);
      $("#ver-navb #settli div").animate({height:"0.5%"},200);
      $("#ver-navb #aleli div").animate({height:"0.5%"},200);
      $("#ver-navb #graphlist div").animate({height:"0.5%"},200);
  });
  });
  $(document).ready(function(){
    $("#ver-navb #notifli").click(function(){
      $("#ver-navb #notifli div").animate({height:"99%"},200);
      $("#ver-navb #logli div").animate({height:"0.5%"},200);
      $("#ver-navb #helpli div").animate({height:"0.5%"},200);
      $("#ver-navb #settli div").animate({height:"0.5%"},200);
      $("#ver-navb #aleli div").animate({height:"0.5%"},200);
      $("#ver-navb #graphlist div").animate({height:"0.5%"},200);
  });
  });
  $(document).ready(function(){
    $("#ver-navb #aleli").click(function(){
      $("#ver-navb #aleli div").animate({height:"99%"},200);
      $("#ver-navb #notifli div").animate({height:"0.5%"},200);
      $("#ver-navb #logli div").animate({height:"0.5%"},200);
      $("#ver-navb #helpli div").animate({height:"0.5%"},200);
      $("#ver-navb #settli div").animate({height:"0.5%"},200);
      $("#ver-navb #graphlist div").animate({height:"0.5%"},200);
  });
  });
  $(document).ready(function(){
    $("#ver-navb #settli").click(function(){
      $("#ver-navb #settli div").animate({height:"99%"},200);
      $("#ver-navb #notifli div").animate({height:"0.5%"},200);
      $("#ver-navb #logli div").animate({height:"0.5%"},200);
      $("#ver-navb #helpli div").animate({height:"0.5%"},200);
      $("#ver-navb #aleli div").animate({height:"0.5%"},200);
      $("#ver-navb #graphlist div").animate({height:"0.5%"},200);
  });
  });
  $(document).ready(function(){
    $("#ver-navb #helpli").click(function(){
      $("#ver-navb #helpli div").animate({height:"99%"},200);
      $("#ver-navb #notifli div").animate({height:"0.5%"},200);
      $("#ver-navb #logli div").animate({height:"0.5%"},200);
      $("#ver-navb #settli div").animate({height:"0.5%"},200);
      $("#ver-navb #aleli div").animate({height:"0.5%"},200);
      $("#ver-navb #graphlist div").animate({height:"0.5%"},200);
  });
  });
  $(document).ready(function(){
    $("#ver-navb #graphlist").click(function(){
      $("#ver-navb #helpli div").animate({height:"0.5%"},200);
      $("#ver-navb #notifli div").animate({height:"0.5%"},200);
      $("#ver-navb #logli div").animate({height:"0.5%"},200);
      $("#ver-navb #settli div").animate({height:"0.5%"},200);
      $("#ver-navb #aleli div").animate({height:"0.5%"},200);
      $("#ver-navb #graphlist div").animate({height:"99%"},200);
  });
  });
  function graphli()
  {
    document.getElementById("screen").src ="graph.html";
  }
  function log()
  {
      document.getElementById("screen").src = "logs.html";
  }
  function noti()
  {
      document.getElementById("screen").src = "noti.html";
  }
  function ale()
  {
      document.getElementById("screen").src = "alert.html";
  }
  function set()
  {
      document.getElementById("screen").src = "set.html";
  }
  function hlp()
  {
      document.getElementById("screen").src = "help.html";
  }
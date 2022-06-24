let c;
let listss;
window.addEventListener('message', function (e) {
    document.getElementById("scren").innerHTML="";
    const data = e.data;
    var tbh=JSON.parse(data);
    for(var t=0;t<tbh.length;t++)
    {
       tp(tbh[t].Path.toString());
    }
});
function tt()
{
    var fileInput = document.getElementById('filesa');  
    var filename = fileInput.files[0].path;
    var type1=document.getElementById("lgtype");
    var type2=type1.options[type1.selectedIndex].value;
    console.log(type2);
    console.log(filename);
    var z=filename.replaceAll("\\","\\\\");
    window.parent.document.getElementById('scope').innerHTML="{\"path\":\""+z.toString()+"\",\"type\":\""+type2.toString()+"\"}";
    window.parent.document.getElementById('scope').click();
}
function tp(filename)
{
    /*var fileInput = document.getElementById('file');  
    var filename = fileInput.files[0].path;*/
    const node = document.createElement("div");
    node.addEventListener("click",ggd);
    node.setAttribute("id",filename);
    node.setAttribute("class","choic");
    let img=document.createElement("img");
    img.src="./icons/file.png";
    img.setAttribute("class","imga");
    node.appendChild(img);
    const textnode =document.createTextNode(filename);
    node.appendChild(textnode);
    document.getElementById("scren").appendChild(node);
}
function test()
{
    alert("Clicked");
    if(c==null)
    {
    }
    else
    {
        window.parent.document.getElementById('sbot').innerHTML=c;
        window.parent.document.getElementById('sbot').click();
        c=null;
    }
}
var ggd=function(){
if(document.getElementById(this.id.toString()).style.backgroundColor.toString()=="gray")
{
return;
}
document.getElementById(this.id.toString()).style.backgroundColor="gray";
document.getElementById(this.id.toString()).style.color="white";
window.parent.document.getElementById('bot').innerHTML=this.id.toString();
if(c==null)
{
}
else
{
    console.log(c);
    document.getElementById(c).style.backgroundColor="lightgray"; 
    document.getElementById(this.id.toString()).style.color="black";
};
c=this.id.toString();
alert(c);
window.parent.document.getElementById('bot').click();
};

function ToDoAdd()
{
    var table = document.getElementById("todotable");

    var tablerow = document.createElement("tr");

    var date = document.createElement("td");
    date.setAttribute("id","date");
    var task=document.createElement("td");
    task.setAttribute("id","task");
    var Action=document.createElement("td");
    Action.setAttribute("id","action");
    
    var d=new Date();

    var getdate=document.createTextNode(d.getDate() +"/" + d.getMonth() + "/"+d.getFullYear());
    console.log(getdate);
    var tasknode=document.createTextNode(document.getElementById("data").value);
    var editbutton=document.createElement("button");
    var deletebutton=document.createElement("button");

    var buttontext=document.createTextNode("Edit");
    editbutton.appendChild(buttontext);
    editbutton.setAttribute("onclick","edit(this)")

    date.appendChild(getdate);
    task.appendChild(tasknode);
    Action.appendChild(editbutton);

    var buttontext=document.createTextNode("Delete");
    deletebutton.appendChild(buttontext);
    deletebutton.setAttribute("onclick","del(this)");
    Action.appendChild(deletebutton);

    tablerow.appendChild(date);
    tablerow.appendChild(task);
    tablerow.appendChild(Action);

    table.appendChild(tablerow);
    searchcontent.push(document.getElementById("data").value);
}

function del(ele)
{
    
    for( var i = 0; i < searchcontent.length; i++){ 
        console.log( searchcontent[i],ele.parentElement.previousElementSibling.childNodes[0]);
        if ( searchcontent[i] == ele.parentElement.previousElementSibling.childNodes[0]) {
            searchcontent.splice(i, 1); 
        }
     }
    ele.parentElement.parentElement.remove();
    
}

function editer(ele)
{

    var par=ele.parentElement.parentElement;
    console.log(par);
    var text=par.getElementById("task").value;

    var tablerow = document.createElement("tr");

    var date = document.createElement("td");
    date.setAttribute("id","date");
    var task=document.createElement("td");
    task.setAttribute("id","task");
    var Action=document.createElement("td");
    Action.setAttribute("id","action");

    date.appendChild(par.getElementById("date"));

    var input=document.createElement("input");
    input.setAttribute("type","text");
    var temp=document.createTextNode(text);
    input.appendChild(temp);
    task.appendChild(input);

    var savebutton=document.createElement("button");
    var buttontext=document.createTextNode("save");
    savebutton.appendChild(buttontext);
    savebutton.setAttribute("onclick","save(this)")

    Action.appendChild(savebutton);
    tablerow.appendChild(date);
    tablerow.appendChild(task);
    tablerow.appendChild(Action);
    par.parentElement.replaceChild(par,tablerow)
    
}

function edit(ele)
{
    var sib=ele.parentElement.previousElementSibling;
    var val=sib.textContent;
    console.log(val);
    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","getdata");
    var temp=document.createTextNode(val);
    //input.appendChild(temp);
    input.defaultValue=val;
    sib.replaceChild(input,sib.childNodes[0]);

    var prev=ele.parentElement;
    var savebutton=document.createElement("button");
    var buttontext=document.createTextNode("save");
    savebutton.appendChild(buttontext);
    savebutton.setAttribute("onclick","save(this)");
    var Action=document.createElement("td");
    Action.setAttribute("id","action");
    Action.appendChild(savebutton);
    prev.replaceChild(savebutton,ele.parentElement.childNodes[0]);
}

function save(ele)
{
    

    var tablerow = document.createElement("tr");
    var table=ele.parentElement.parentElement.parentElement;
    var date = document.createElement("td");
    date.setAttribute("id","date");
    var task=document.createElement("td");
    task.setAttribute("id","task");
    var Action=document.createElement("td");
    Action.setAttribute("id","action");
    
    var d=new Date();

    var getdate=document.createTextNode(d.getDate() +"/" + d.getMonth() + "/"+d.getFullYear());
    console.log(getdate);
    var tasknode=document.createTextNode(ele.parentElement.previousElementSibling.childNodes[0].value);
    
    var editbutton=document.createElement("button");
    var deletebutton=document.createElement("button");

    var buttontext=document.createTextNode("Edit");
    editbutton.appendChild(buttontext);
    editbutton.setAttribute("onclick","edit(this)")

    date.appendChild(getdate);
    task.appendChild(tasknode);
    Action.appendChild(editbutton);

    var buttontext=document.createTextNode("Delete");
    deletebutton.appendChild(buttontext);
    deletebutton.setAttribute("onclick","del(this)");
    Action.appendChild(deletebutton);

    tablerow.appendChild(date);
    tablerow.appendChild(task);
    tablerow.appendChild(Action);

    table.replaceChild(tablerow,ele.parentElement.parentElement);
}

function validate(userid,password)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(!userid.value.match(mailformat))
    {
        alert("You have entered an invalid email address!");
    }
    else if(!password.value.match(passw))
    {
        alert("invalid password  password should contain a small letter,capital letter and a special caracter with size between 7 to 15");
    
    }
    else
    {
        alert("you have sucessfully logedin");
    }
}
var searchcontent=[];
function Suggested(obj)
{


    
    var key=obj.value
    if(key==""||key==null||key==" "){
        var box=document.createElement("div");
        box.setAttribute("class","autocomplete")
        box.setAttribute("id","box");
        try{
            document.getElementById("box").remove();
        }
        catch(e)
        {
            
        }
        obj.parentElement.insertBefore(box,obj.nextElementSibling.nextElementSibling.nextElementSibling);
    }
    else{
        
    var matched=[];

    
    for(var i=0;i<searchcontent.length;i++)
    {
        var word=searchcontent[i];
        
        if(word.substring(0,key.length)==key)
            matched.push(word);
    }
    console.log(key);
    console.log(matched);
    try{
        document.getElementById("box").remove();
    }
    catch(e)
    {
        
    }
    var box=document.createElement("div");
    box.setAttribute("class","autocomplete-items")
    box.setAttribute("id","box");
    for(var i=0;i<matched.length;i++)
    {
        var division=document.createElement("div");
        var text=document.createTextNode(matched[i]);
        division.appendChild(text);
        box.appendChild(division);
    }
    //obj.parentElement.appendChild(box);
    obj.parentElement.insertBefore(box,obj.nextElementSibling.nextElementSibling.nextElementSibling);
    }
    
}

function Suggest(obj)
{
    var data=document.getElementsByTagName("table")[0];
    var tablerows=data.getElementsByTagName("tr");
    for(var i=1;i<tablerows.length;i++)
    {
        //tablerows[0].style.display="block";
        console.log(tablerows[i]);
        var task=tablerows[i].getElementsByTagName("td")[1].innerHTML;
        var key=obj.value
        if(task.substring(0,key.length)==key)
            tablerows[i].style.display="table-row";
        else
            tablerows[i].style.display="none";
    }
}

function loader()
{
    var xmlhttp = new XMLHttpRequest();
    var table=document.getElementById("todotable");
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        for(var i=0;i<myObj.length;i++)
        {
            var tablerow=document.createElement("tr");

            var date = document.createElement("td");
    date.setAttribute("id","date");
    var task=document.createElement("td");
    task.setAttribute("id","task");
    var Action=document.createElement("td");
    Action.setAttribute("id","action");
    
    var d=new Date();

    var getdate=document.createTextNode(d.getDate() +"/" + d.getMonth() + "/"+d.getFullYear());
    console.log(getdate);
    var tasknode=document.createTextNode(myObj[i].title);
    var editbutton=document.createElement("button");
    var deletebutton=document.createElement("button");

    var buttontext=document.createTextNode("Edit");
    editbutton.appendChild(buttontext);
    editbutton.setAttribute("onclick","edit(this)")

    date.appendChild(getdate);
    task.appendChild(tasknode);
    Action.appendChild(editbutton);

    var buttontext=document.createTextNode("Delete");
    deletebutton.appendChild(buttontext);
    deletebutton.setAttribute("onclick","del(this)");
    Action.appendChild(deletebutton);

    tablerow.appendChild(date);
    tablerow.appendChild(task);
    tablerow.appendChild(Action);

    table.appendChild(tablerow);



        }
        
        
    }
    };
    xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xmlhttp.send();

}
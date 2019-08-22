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
}

function del(ele)
{
    
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

function Suggest(obj)
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
        var searchcontent=["one","ok","ongole","orange"];
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
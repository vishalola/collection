function f1()
{
    let a=document.getElementsByClassName('lab');
    a[0].style.transform="scale(.8)";
    a[0].style.top="12px";
    a[0].style.left="0px";
    a[0].style.opacity="100%"
}
function f2()
{
    let a=document.getElementsByClassName('lab');
    if(document.getElementById("username").value=="")
    {
        a[0].style.transform="scale(1)";
        a[0].style.top="31px";
        a[0].style.left="10px";
        a[0].style.opacity="50%"
    }
}
document.getElementById('username').onfocus=f1;
document.getElementById('username').onblur=f2;
function f3()
{
    let a=document.getElementsByClassName('lab');
    a[1].style.transform="scale(.8)";
    a[1].style.top="12px";
    a[1].style.left="0px";
    a[1].style.opacity="100%"
}
function f4()
{
    let a=document.getElementsByClassName('lab');
    if(document.getElementById('password').value=="")
    {
        a[1].style.transform="scale(1)";
        a[1].style.top="31px";
        a[1].style.left="10px";
        a[1].style.opacity="50%"
    }
}
document.getElementById('password').onfocus=f3;
document.getElementById('password').onblur=f4;


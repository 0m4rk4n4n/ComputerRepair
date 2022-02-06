let x=0;
let y=0;
let counter=0;
let counter2=100;
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
const links=document.querySelectorAll(".navlink");

links.forEach((item)=>
{ 
      item.addEventListener('click',function()
      {

let element=document.getElementById(item.getAttribute("data-link"));
element.scrollIntoView({behavior:"smooth",block:"start"});

      })
})

function sendEmail()
{
  Email.send({
  Host : "smtp.gmail.com",
  Username : "ommar.kanan.96@gmail.com",
  Password : "HelloWorld",
  To : 'omarskanan96@gmail.com',
  From : document.getElementById("email").value,
  Subject : "New Contact Form",
  Body : document.getElementById("message").value
  + "<br> Email: " + document.getElementById("email").value
  + "<br> Phone Number: " +document.getElementById("phone").value
}).then(
message => alert("Message Sent Successfully!")
)};
const XVX=document.querySelectorAll(".navlink");
XVX.forEach((xvx)=>
{
  xvx.addEventListener("click",()=>
  {
    close();
  })
})
var grabnav=document.querySelector(".grabnav")
window.addEventListener("scroll",()=>
{
  if(window.scrollY>140)
  grabnav.style.opacity=0.4;
  else
  grabnav.style.opacity=0.9;
  
})
var xbxdxy=document.querySelector(".body");
var op=setInterval(()=>
{
counter++;
counter2--;
if(counter<100)
xbxdxy.style.opacity=counter/100;
if(counter>0 && counter<=100)
{
var x2x2=document.querySelector(".loading")
x2x2.innerHTML=`${counter}%`
x2x2.style.opacity=counter2/100;
}
},18)
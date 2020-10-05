document.addEventListener('DOMContentLoaded', () => createNav());
let navBar= [

{title: 'Creative Projects', link: 'Creative.html'},
{title: 'Blog', link: 'Blog.html'},
{title: 'About', link: 'About.html'},

];


let createNav = () => {
let nav = document.querySelector('nav');
 let ul = document.createElement('ul');
 for (let item of navBar){

 	let li = document.createElement('li');
 	let a = document.createElement('a');
 	a.innerText =item.title;
 	a.href =item.link;
 	li.appendChild(a);
 	ul.appendChild(li);
 }

 nav.appendChild(ul);
};
let PrevNextBtn =[
{
	
}
]




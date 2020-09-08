const navItems= [
{title: 'Creative Projects', link: 'Creative.html'},
{title: 'Blog', link: 'Blog.html'},
{title: 'About', link: 'About.html'},



];

const createNav = () => {
 const nav = document.querySelector('nav');
 const ul = document.createElement('ul');
 for (let item of navItems){

 	const li = document.createElement('li');
 	const a = document.createElement('a');
 	a.innerText =item.title;
 	a.href =item.link;
 	li.appendChild(a);
 	ul.appendChild(li);
 }
 nav.appendChild(ul);
};

document.addEventListener('DOMContentLoaded', () => createNav());
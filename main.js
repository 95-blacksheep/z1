

//brand carousel
const list = document.querySelector("#list");
const listContent = Array.from(list.children);

listContent.forEach(item => {
	const duplicatedItem = item.cloneNode(true);
	duplicatedItem.setAttribute("aria-hidden",true);
	list.appendChild(duplicatedItem);
});







//menu drop down section
const navlist = document.querySelector('.navlist');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');

//open nav dropdown
const openNav = () => {
    navlist.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

//close nav dropdown
const closeNav = () => {
    navlist.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);








const sidebar = document.querySelector('aside');
const showSideBarBtn = document.querySelector('#show_sidebar-btn');
const hideSideBarBtn = document.querySelector('#hide_sidebar-btn');


const showSideBar = () => {
    sidebar.style.left = '0';
    showSideBarBtn.style.display = 'none';
    hideSideBarBtn.style.display = 'inline-block';
}


const hideSideBar = () => {
    sidebar.style.left = '-100%';
    showSideBarBtn.style.display = 'inline-block';
    hideSideBarBtn.style.display = 'none';
}




showSideBarBtn.addEventListener('click', showSideBar)
hideSideBarBtn.addEventListener('click', hideSideBar)






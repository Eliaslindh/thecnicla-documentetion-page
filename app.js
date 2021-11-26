const openSidebar = document.getElementById('button')

openSidebar.addEventListener('click', () => {

    if (document.getElementById('navbar').style.width == '200px') {
        document.getElementById('navbar').style.width = '0px';

    }

    else {
        document.getElementById('navbar').style.width = '200px'

    }

})
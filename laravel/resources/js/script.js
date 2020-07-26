// SwitchToActualLang
export function switchToActualLang() {
    document.querySelector('.lang-list').addEventListener('click', function(e) {  
        let actualLang = e.target.innerText    
        document.querySelector('.lang-text-actual').innerText = actualLang    
        location.href = '/locale/' + actualLang.trim().toLowerCase()
    })
}

// We have to delete 'active' class on Menu Item 
export function markActualMenuPage() {
    let collection = document.querySelectorAll('#navbarCollapse .nav-link')

    for (let i = 0; i < collection.length; i++) {
        let str = collection[i].getAttribute('href')
        let arr = str.split('/')
        let pageName = arr[arr.length - 1]

        if (location.pathname === '/') {
            collection[i].parentElement.classList.remove("active")
            return
        }

        if (('/' + pageName) === location.pathname) {
            collection[i].parentElement.classList.remove("active")
            return
        }
    }
}






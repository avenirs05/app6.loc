export function switchToActualLang() {
    document.querySelector('.lang-list').addEventListener('click', function(e) {  
        let actualLang = e.target.innerText
        
        document.querySelector('.lang-text-actual').innerText = actualLang
        location.href = '/locale/' + actualLang.trim().toLowerCase()
    })
}
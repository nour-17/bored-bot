let activity = document.getElementById('activity')
let btn = document.getElementById('btn')

btn.addEventListener('click',()=>{ 
    
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(res => res.json())
    .then(data => {
        activity.textContent = data.activity
        document.body.classList.add('fun')
        activity.classList.add('fun-2')
    })
    
})
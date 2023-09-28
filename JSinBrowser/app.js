function beforeUserLeaves(){
    console.log('beforeunload')
}
function pageHideListner(){
    console.log('pagehide')
}
function visibilityChangeListner(){
    console.log('visibilitychange')
}
window.addEventListener('beforeunload',beforeUserLeaves)
window.addEventListener('pagehide',pageHideListner)
document.addEventListener('visibilitychange',visibilityChangeListner)

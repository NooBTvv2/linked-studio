// if (navigator.userAgentData && navigator.userAgentData.mobile) {
//     console.log('user is on mobile')
// } else {
//     console.log('user is on pc')

//     const cascadeems = document.querySelectorAll('.cascade-container')

//     cascadeems.forEach(element => {
//         document.addEventListener("mousemove", (event) => {
//             rotate3d(event, element)
//         })
//     });

//     function rotate3d(event, element) {
//         const x = event.clientX;
//         const y = event.clientY;

//         const midX = window.innerWidth / 2;
//         const midY = window.innerHeight / 2;

//         const offsetX = ((x - midX) / midX) * 20
//         const offsetY = ((y - midY) / midY) * 20

//         element.style.setProperty("--rotate3dX", -1 * offsetY + "deg")
//         element.style.setProperty("--rotate3dY", offsetX + "deg")
//     }
// }

// var getHam = document.getElementById("nav-ham")
// var linksNav = document.getElementById("nav-links")

// let NavActive = linksNav.dataset.isopen === false

// getHam.addEventListener("pointerdown", (event) => {
//     if (!NavActive) {
//         linksNav.style.transform = "translateX(0%)"

//         NavActive = true
//     } else if (NavActive) {
//         linksNav.style.transform = "translateX(125%)"

//         NavActive = false
//     }
// })

// window.addEventListener('resize', () => {
//     let size = window.innerWidth

//     if (size > 768 && !NavActive) {
//         linksNav.style.transform = "translateX(0%)"
//     } else if (size < 768 && !NavActive) {
//         linksNav.style.transform = "translateX(125%)"
//     }
// })
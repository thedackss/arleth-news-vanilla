// // Main JavaScript functionality
// document.addEventListener("DOMContentLoaded", function () {
//     const breakingNewsList = document.querySelector(".breaking-news ul");
//     if (breakingNewsList) {
//         let scrollAmount = 0;
//         const scrollSpeed = 1;

//         function scrollTicker() {
//             scrollAmount += scrollSpeed;
//             if (scrollAmount >= breakingNewsList.scrollWidth) {
//                 scrollAmount = -breakingNewsList.parentElement.offsetWidth;
//             }
//             breakingNewsList.style.transform = `translateX(-${scrollAmount}px)`;
//             requestAnimationFrame(scrollTicker);
//         }

//         scrollTicker();
//     }
// });

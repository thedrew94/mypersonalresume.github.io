'use strict';

const skillAnimation = document.querySelectorAll('.skills-item');
const projectAnimation = document.querySelectorAll('.project-item');
const animations = ['item1', 'item2', 'item3', 'item4', 'item5']; // Store animation class names in an array
let animationIndex = 0; // Initialize the animation index at 0

function animateElements(animationItems) {
    // Use the forEach() method to iterate over each item in the collection
    animationItems.forEach(function(item) {
        // Add the animation class to each item with the appropriate index
        item.classList.add(animations[animationIndex % animations.length]);
        // Increment the animation index for the next item
        animationIndex++;
    });
}

window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        // Call the animateElements function for both collections of items
        animateElements(skillAnimation);
        animateElements(projectAnimation);
    } else {
        // If the user scrolls back to the top, reset the animation index and remove the animation classes
        animationIndex = 0;
        animateElements(skillAnimation);
        animateElements(projectAnimation);
        skillAnimation.forEach(function(item) {
            item.classList.remove(...animations);
        });
        projectAnimation.forEach(function(item) {
            item.classList.remove(...animations);
        });
    }
});


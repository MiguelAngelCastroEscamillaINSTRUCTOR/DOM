addEventListener("DOMContentLoaded", (e) => {
    addEventListener("submit", (e) => {
        e.preventDefault();
        let input = Object.fromEntries(new FormData(e.target));
        console.log(input);
        
    })
})
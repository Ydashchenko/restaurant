export function contactTab() {
    const main = document.querySelector('main')

    main.innerHTML = `
        <h2>Our contacts:</h2>
        <p>Phone: +1-800-228-322, +3-123-234-345</p>
        <p>Instagram: @ichiraku-rest</p>
        <p>Email: ichiraku-restaraunt@gramen.com</p>
        <p>Youtube: @ichiraku-rest</p>
        <p>Location: SECRET! :D</p>
    `

    main.id = 'contact-tab'
}
export function initialPageLoad() {
    const content = document.querySelector('#content')
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const home = document.createElement('button')
    const menu = document.createElement('button')
    const contact = document.createElement('button')
    const main = document.createElement('main')
    const footer = document.createElement('footer')

    header.innerHTML = 'Ichiraku'
    home.innerHTML = 'Home'
    menu.innerHTML = 'Menu'
    contact.innerHTML = 'Contact'
    footer.innerHTML = `Copyright ©
        <script>document.write(new Date().getFullYear())</script>
        <a href="https://github.com/Ydashchenko" target="_blank">Yevhenii Dashchenko</a>`
    
    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(contact)
    content.appendChild(header)
    content.appendChild(nav)
    content.appendChild(main)
    content.appendChild(footer)

    home.id = 'home'
    menu.id = 'menu'
    contact.id = 'contact'
}

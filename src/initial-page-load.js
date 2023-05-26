export function initialPageLoad() {
    const content = document.querySelector('#content')
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const home = document.createElement('button')
    const menu = document.createElement('button')
    const contact = document.createElement('button')
    const main = document.createElement('main')
    const footer = document.createElement('footer')

    header.innerHTML = 'Ichiraku Ramen'
    home.innerHTML = 'Home'
    menu.innerHTML = 'Menu'
    contact.innerHTML = 'Contact'
    main.innerHTML = `<h3>Welcome to Ichiraku Ramen!</h3>
        <p>Ramen Ichiraku was founded by Teuchi thirty-four years before the start of Part II. Although it is quite small and has an unassuming appearance, Ramen Ichiraku has always been popular with Konoha's villagers because of Teuchi's strong commitment to taste, giving the ramen an almost artistic quality. Like any ramen establishment, Ramen Ichiraku offers various toppings, such as char siu and boiled eggs. In Konoha Hiden, seaweed had been the most popular topping for several years until, after the Fourth Shinobi World War, it was surpassed by naruto.</p>
        <p>Ramen Ichiraku is Naruto Uzumaki's favourite dining establishment. He eats there regularly – usually stopping by between missions – and he is often joined by Iruka Umino, another frequent customer. Because Naruto has been a loyal customer for most of his life, Teuchi and his daughter, Ayame, were among the few people in Konoha not to treat Naruto with animosity during his youth. Naruto takes Hinata Hyūga to Ramen Ichiraku for their first date; in the anime, this in turn causes Hinata to become a regular customer, to the point that she has won at least one of its eating contests. In Konoha Hiden, Teuchi gives Naruto a lifetime pass for Ramen Ichiraku as a wedding present, which the anime shows to have received heavy use over the following years.</p>`
    footer.innerHTML = `Copyright ©
        <script>document.write(new Date().getFullYear())</script>
        <a href="https://github.com/Ydashchenko" target="_blank">Yevhenii Dashchenko</a>
        <a href="https://github.com/Ydashchenko" target="_blank"><img src="github-mark.svg" alt="github-icon" class="icon"></a>`
    
    home.class = 'tab active'
    menu.class = 'tab'
    contact.class = 'tab'

    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(contact)
    content.appendChild(header)
    content.appendChild(nav)
    content.appendChild(main)
    content.appendChild(footer)

}

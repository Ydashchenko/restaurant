export function homeTab() {
    const main = document.querySelector('main')

    main.innerHTML = `<h2>Welcome to Ichiraku Restaraunt!</h2>
        <p>Ramen Ichiraku was founded by Teuchi thirty-four years before the start of Part II. Although it is quite small and has an unassuming appearance, Ramen Ichiraku has always been popular with Konoha's villagers because of Teuchi's strong commitment to taste, giving the ramen an almost artistic quality. Like any ramen establishment, Ramen Ichiraku offers various toppings, such as char siu and boiled eggs. In Konoha Hiden, seaweed had been the most popular topping for several years until, after the Fourth Shinobi World War, it was surpassed by naruto.</p>
        <p>Ramen Ichiraku is Naruto Uzumaki's favourite dining establishment. He eats there regularly – usually stopping by between missions – and he is often joined by Iruka Umino, another frequent customer. Because Naruto has been a loyal customer for most of his life, Teuchi and his daughter, Ayame, were among the few people in Konoha not to treat Naruto with animosity during his youth. Naruto takes Hinata Hyūga to Ramen Ichiraku for their first date; in the anime, this in turn causes Hinata to become a regular customer, to the point that she has won at least one of its eating contests. In Konoha Hiden, Teuchi gives Naruto a lifetime pass for Ramen Ichiraku as a wedding present, which the anime shows to have received heavy use over the following years.</p>
    `

    main.id = 'home-tab'
    home.classList.add('active')
    menu.classList.remove('active')
    contact.classList.remove('active')
}
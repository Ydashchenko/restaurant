export function menuTab() {
    const main = document.querySelector('main')
    main.innerHTML = `
        <div class='dish' id='ramen'>
            <h3>Ramen</h3>
            <img src='https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg' alt='Ramen img'>
            <p>Naruto's favourite dish</p>
        </div>
        <div class='dish' id='sushi'>
            <h3>Sushi</h3>
            <img src='https://sushiwok.kz/files/products/medium/641.png?2.0.2' alt='Sushi img'>
            <p>Ukrainian ones (they're really good)</p>
        </div>
        <div class='dish' id='okonomiyaki'>
            <h3>Okonomiyaki</h3>
            <img src='https://monmackfood.com/wp-content/uploads/Screen-Shot-2021-06-28-at-12.32.59-pm-500x500.jpeg' alt='Okonomiyaki img'>
            <p>Ariel likes it a lot (local meme)</p>
        </div>
        <div class='dish' id='udon'>
            <h3>Udon</h3>
            <img src='https://christieathome.com/wp-content/uploads/2021/03/Garlic-Shrimp-Tofu-Udon-Noodles-2-b-scaled.jpg' alt='Udon img'>
            <p>My favourite dish (100/10)</p>
        </div>
        <div class='dish' id='onigiri'>
            <h3>Onigiri</h3>
            <img src='https://cdn.shopify.com/s/files/1/0249/4811/3492/articles/241695756_3008948676009057_2216945854287643878_n_1200x1200.jpg?v=1632053090' alt='Onigiri img'>
            <p>Just a great dish</p>
        </div>
        <div class='dish' id='mochi'>
            <h3>Mochi</h3>
            <img src='https://media.istockphoto.com/id/1158085114/photo/multi-colored-japanese-ice-cream-mochi-in-rice-dough-and-jasmine-flowers-on-a-concrete-blue.jpg?s=612x612&w=0&k=20&c=vi-GZ1uALAAJUVbQxwHC4LQZoppElZOSJFwp3R29k9w=' alt='Mochi img'>
            <p>Cute sweet rice ^_^</p>
        </div>
    `
    main.id = 'menu-tab'
}
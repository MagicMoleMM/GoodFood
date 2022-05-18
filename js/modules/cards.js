import { getResource } from "../services/services";

export default function cards() {

    class MenuCard {
        constructor(img, altimg, title, descr, price, parentSelector, ...classes) {
            this.img = img;
            this.altimg = altimg;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeTo();
        }

        changeTo() {
            this.price = this.price * this.transfer;
        }

        render() {

            const element = document.createElement('div');
            this.classes.forEach(className => element.classList.add(className));

            element.innerHTML = `<img src=${this.img} alt=${this.altimg}><h3 class="menu__item-subtitle">${this.title}</h3><div class="menu__item-descr">${this.descr}</div><div class="menu__item-divider"></div><div class="menu__item-price"><div class="menu__item-cost">Цена:</div><div></div class="menu__item-total"><span>${this.price}</span> грн/день</divclass=></div>`;

            this.parent.append(element);
        }
    }

    axios.get('http://localhost:3000/menu')
        .then(function (response) {
            response.data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container', 'menu__item').render();
            });
        })
        .catch(function (error) {
            console.log(error);
        });

}


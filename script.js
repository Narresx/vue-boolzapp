console.log('JS OK', Vue);

Vue.config.devtools = true;

const root = new Vue({

    el: '#root',

    data: {

        user: {
            name: 'Antonio',
            avatar: 'img/avatar_8.jpg'
        },

        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
            },
        ]
    }

});
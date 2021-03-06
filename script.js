console.log('JS OK', Vue);

Vue.config.devtools = true;

dayjs.extend(dayjs_plugin_customParseFormat); //inizializzo il plugin  ParseFormat

const root = new Vue({

    el: '#root',

    data: {

        lastAccess: dayjs().format('DD/MM/YYYY HH:mm:ss'),

        currentIndex: 0,

        userMessage: '',

        userSearch: '',

        user: {
            name: 'Antonio',
            avatar: '_8'
        },

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_io',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
        ],
    },

    methods: {

        selectUser(index) {
            this.currentIndex = index;
        },

        addMessage() {
            if (this.userMessage.trim() != "") {
                this.contacts[this.currentIndex].messages.push({ date: dayjs().format('DD/MM/YYYY HH:mm:ss'), text: this.userMessage, status: 'sent', });
                this.userMessage = '';
            }
            setTimeout(() => {
                this.contacts[this.currentIndex].messages.push({ date: dayjs().format('DD/MM/YYYY HH:mm:ss'), text: 'Ok', status: 'received', });
            }, 1000)
        },

        isSearched(contact) {
            //se ci?? che si scrive nella barra di ricerca ?? contenuto tra i miei contatti (vero o falso)
            if (contact.visible === false) {
                return false;
            } else {
                if (this.userSearch === '') {
                    return true;
                } else {
                    return (contact.name.toUpperCase().includes(this.userSearch.toUpperCase()));
                }
            }
        },
    }

});
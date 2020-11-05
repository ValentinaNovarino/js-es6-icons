
$(document).ready(function() {
    /*  *****milestone 1******
    Definire un array di oggetti; ogni oggetto
    rappresenta un'icona, che è caratterizzata da:
    nome, prefisso, tipo e famiglia.
    Utilizzando la funzione forEach e il template
    literal, visualizzare in pagina tutte le icone con il
    proprio nome.*/

    /*  *****milestone 2*****
    definire un array di colori e associare ad ogni
    tipo di icona un colore.
    Visualizzare le icone di colore diverso in base al tipo.*/

    /*  *****milestone 3*****
    aggiungere una select per filtrare le icone in
    base al tipo.
    Popolare le options della select dinamicamente
    e, ogni volta che cambia il valore selezionato,
    visualizzare le icone corrispondenti.*/

    // definire array di oggetti
    const icons = [
        {
            name: 'grin-beam-sweat',
            prefix: 'fa',
            type: 'emoji',
            family: 'far'
        },
        {
            name: 'angry',
            prefix: 'fa',
            type: 'emoji',
            family: 'far'
        },
        {
            name: 'flushed',
            prefix: 'fa',
            type: 'emoji',
            family: 'far'
        },
        {
            name: 'laugh',
            prefix: 'fa',
            type: 'emoji',
            family: 'far'
        },
        {
            name: 'hamburger',
            prefix: 'fa',
            type: 'food',
            family: 'fas'
        },
        {
            name: 'ice-cream',
            prefix: 'fa',
            type: 'food',
            family: 'fas'
        },
        {
            name: 'pizza-slice',
            prefix: 'fa',
            type: 'food',
            family: 'fas'
        },
        {
            name: 'cheese',
            prefix: 'fa',
            type: 'food',
            family: 'fas'
        },
        {
            name: 'headphones',
            prefix: 'fa',
            type: 'computers',
            family: 'fas'
        },
        {
            name: 'sd-card',
            prefix: 'fa',
            type: 'computers',
            family: 'fas'
        },
        {
            name: 'keyboard',
            prefix: 'fa',
            type: 'computers',
            family: 'fas'
        },
        {
            name: 'mouse',
            prefix: 'fa',
            type: 'computers',
            family: 'fas'
        }
    ];

    // creo l'array di colori
    const colors = ['orange', 'green', 'lightblue'];

    const iconTypes = [];
    // ciclo le icone
    icons.forEach((icon) => {
        // destrutturo icon e recupero il tipo di icona per ogni icona corrente
        const {type} = icon;

        if(!iconTypes.includes(type)) {
            // se il tipo di icona dell'elemento corrente non è presente nell'array iconTypes lo inserisco altrimenti passo  all'icona successiva
            iconTypes.push(type);
        };
    });
    console.log(iconTypes);

    // scorro tutti i tipi di icona
    // per tutti i tipi di icona aggiungo un' option alla select
    iconTypes.forEach((type) => {
        $('.filter-icon').append(`
            <option value='${type}'>${type}</option>
        `)
    });

    // intercetto con change il cambio di valore di una select
    $('.filter-icon').change(() => {
        // console.log('cambiato elemento select');
        const selectedType = $('.filter-icon').val();
        console.log(selectedType);
    });
    // visualizzare in pagin tutte le icone
    // destrutturo e recupero le chiavi che mi servono per stampare le icone in pagina in ciclo forEach per scorrere tutti gli oggetti icon
    icons.forEach((icon) => {
        const {name, prefix, family, type} = icon;
        // console.log(name, prefix, family);
        const typeIndex = iconTypes.indexOf(type);
        console.log(typeIndex, name);
        const iconColor = colors[typeIndex];
        console.log(iconColor);
        // stampo in pagina con il template literal
        $('#icons-container').append(`
            <i class='${family} ${prefix}-${name} fa-2x' style='color:${iconColor}'</i>
            <p>${name}</p>
        `);
    });

});

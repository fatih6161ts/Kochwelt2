async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

function showMobilMenu() {
    document.getElementById('mobil-menu').classList.add('showOverlayMenu');
}

function removeMenu() {
    document.getElementById('mobil-menu').classList.remove('showOverlayMenu');
}

let gericht = [

    {
        "zutat": "Gurke",
        "menge": 1,
    },

    {
        "zutat": "Paprika",
        "menge": 2,
    },

    {
        "zutat": "Hähnchenbrüste",
        "menge": 3,
    },
]


function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    const portions = document.getElementById('portions').value;

    for (let i = 0; i < gericht.length; i++) {
        const gerichte = gericht[i];
        const foodMenge = gericht[i];
        content.innerHTML += `
            <table>
                <tr>
                    <th>${gerichte['zutat']}</th>
                    <td>
                        <span id="menge${i}">${foodMenge['menge']}</span>
                    </td>
                </tr>
            </table>    
        `;
    }
}

function increment() {
    const portions = parseInt(document.getElementById('portions').value);
    for (let i = 0; i < gericht.length; i++) {
        gericht[i].menge += portions;
    }
    render();
}


function changeAmount_1() {
    if ((portionen) => 1) {
        amount_berechnen();
    }
}

//Funktion Zutaten berechnen
function amount_berechnen() {
    let portionen = +document.getElementById('user-input').value;

    if (portionen < 1) {
        alert("Bitte eine gültige Zahl eingeben!")
        portionen = 1;
    }

    let zahl1 = document.getElementById('ing-1');
    let amount1 = parseFloat(zahl1.getAttribute('data-amount'));
    let unit1 = zahl1.innerHTML.match(/[^\d,.]+/);
    let amount_portionen1 = amount1 * portionen;
    document.getElementById('ing-1').innerHTML = `${amount_portionen1}${unit1}`

    let zahl2 = document.getElementById('ing-2');
    let amount2 = parseFloat(zahl2.getAttribute('data-amount'));
    let unit2 = zahl2.innerHTML.match(/[^\d,.]+/);
    let amount_portionen2 = amount2 * portionen;
    zahl2.innerHTML = `${amount_portionen2}${unit2}`;

    let zahl3 = document.getElementById('ing-3');
    let amount3 = parseFloat(zahl3.getAttribute('data-amount'));
    let unit3 = zahl3.innerHTML.match(/[^\d,.]+/);
    let amount_portionen3 = amount3 * portionen;
    document.getElementById('ing-3').innerHTML = `${amount_portionen3}${unit3}`;

    let zahl4 = document.getElementById('ing-4');
    let amount4 = parseFloat(zahl4.getAttribute('data-amount'));
    let unit4 = zahl4.innerHTML.match(/[^\d,.]+/);
    let amount_portionen4 = amount4 * portionen;
    document.getElementById('ing-4').innerHTML = `${amount_portionen4}${unit4}`;

    let zahl5 = document.getElementById('ing-5');
    let amount5 = parseFloat(zahl5.getAttribute('data-amount'));
    let unit5 = zahl5.innerHTML.match(/[^\d,.]+/);
    let amount_portionen5 = amount5 * portionen;
    document.getElementById('ing-5').innerHTML = `${amount_portionen5}${unit5}`;

    let zahl6 = document.getElementById('ing-6');
    let amount6 = parseFloat(zahl6.getAttribute('data-amount'));
    let unit6 = zahl6.innerHTML.match(/[^\d,.]+/);
    let amount_portionen6 = amount6 * portionen;
    document.getElementById('ing-6').innerHTML = `${amount_portionen6}${unit6}`;

    let zahl7 = document.getElementById('ing-7');
    let amount7 = parseFloat(zahl7.getAttribute('data-amount'));
    let unit7 = zahl7.innerHTML.match(/[^\d,.]+/);
    let amount_portionen7 = amount7 * portionen;
    document.getElementById('ing-7').innerHTML = `${amount_portionen7}${unit7}`;

    let zahl8 = document.getElementById('ing-8');
    let amount8 = parseFloat(zahl8.getAttribute('data-amount'));
    let unit8 = zahl8.innerHTML.match(/[^\d,.]+/);
    let amount_portionen8 = amount8 * portionen;
    document.getElementById('ing-8').innerHTML = `${amount_portionen8}${unit8}`;

    let zahl9 = document.getElementById('ing-9');
    let amount9 = parseFloat(zahl9.getAttribute('data-amount'));
    let unit9 = zahl9.innerHTML.match(/[^\d,.]+/);
    let amount_portionen9 = amount9 * portionen;
    document.getElementById('ing-9').innerHTML = `${amount_portionen9}${unit9}`;

    let zahl10 = document.getElementById('ing-10');
    let amount10 = parseFloat(zahl10.getAttribute('data-amount'));
    let unit10 = zahl10.innerHTML.match(/[^\d,.]+/);
    let amount_portionen10 = amount10 * portionen;
    document.getElementById('ing-10').innerHTML = `${amount_portionen10}${unit10}`;

    let zahl11 = document.getElementById('ing-11');
    let amount11 = parseFloat(zahl11.getAttribute('data-amount'));
    let unit11 = zahl11.innerHTML.match(/[^\d,.]+/);
    let amount_portionen11 = amount11 * portionen;
    document.getElementById('ing-11').innerHTML = `${amount_portionen11}${unit11}`;

}
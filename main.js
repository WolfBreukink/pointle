//initialize some objects
const COUNTRY_LIST =[{"name":"United Arab Emirates","code":"AE"},{"name":"French Guyana","code":"GF"},{"name":"United Kingdom","code":"GB"},{"name":"Ghana","code":"GH"},{"name":"Argentina","code":"AR"},{"name":"Panama","code":"PA"},{"name":"Congo","code":"CG"},{"name":"Pitcairn","code":"PN"},{"name":"Mozambique","code":"MZ"},{"name":"Afghanistan","code":"AF"},{"name":"Mexico","code":"MX"},{"name":"Vanuatu","code":"VU"},{"name":"Saint Lucia","code":"LC"},{"name":"Guernsey","code":"GG"},{"name":"Kuwait","code":"KW"},{"name":"Maldives","code":"MV"},{"name":"Palau","code":"PW"},{"name":"Poland","code":"PL"},{"name":"Finland","code":"FI"},{"name":"Portugal","code":"PT"},{"name":"Thailand","code":"TH"},{"name":"Australia","code":"AU"},{"name":"Marshall Islands","code":"MH"},{"name":"Bermuda","code":"BM"},{"name":"Barbados","code":"BB"},{"name":"Ethiopia","code":"ET"},{"name":"Guam","code":"GU"},{"name":"Chile","code":"CL"},{"name":"Lebanon","code":"LB"},{"name":"Mauritania","code":"MR"},{"name":"Turkey","code":"TR"},{"name":"Norway","code":"NO"},{"name":"North Korea","code":"KP"},{"name":"Saudi Arabia","code":"SA"},{"name":"Sweden","code":"SE"},{"name":"Brunei","code":"BN"},{"name":"Myanmar","code":"MM"},{"name":"British Virgin Islands","code":"VG"},{"name":"Niger","code":"NE"},{"name":"Saint Helena","code":"SH"},{"name":"Tajikistan","code":"TJ"},{"name":"Malawi","code":"MW"},{"name":"Cyprus","code":"CY"},{"name":"New Caledonia","code":"NC"},{"name":"Sri Lanka","code":"LK"},{"name":"Russian Federation","code":"RU"},{"name":"Colombia","code":"CO"},{"name":"Jamaica","code":"JM"},{"name":"Tuvalu","code":"TV"},{"name":"Cuba","code":"CU"},{"name":"New Zealand","code":"NZ"},{"name":"Nigeria","code":"NG"},{"name":"South Georgia and the South Sandwich Islands","code":"GS"},{"name":"Viet Nam","code":"VN"},{"name":"South Sudan","code":"SS"},{"name":"Iraq","code":"IQ"},{"name":"Costa Rica","code":"CR"},{"name":"Venezuela","code":"VE"},{"name":"Singapore","code":"SG"},{"name":"Pakistan","code":"PK"},{"name":"Liberia","code":"LR"},{"name":"Oman","code":"OM"},{"name":"Togo","code":"TG"},{"name":"Gibraltar","code":"GI"},{"name":"Suriname","code":"SR"},{"name":"Virgin Islands, U.s.","code":"VI"},{"name":"Mongolia","code":"MN"},{"name":"South Korea","code":"KR"},{"name":"Eswatini","code":"SZ"},{"name":"Bhutan","code":"BT"},{"name":"Grenada","code":"GD"},{"name":"Canada","code":"CA"},{"name":"Tunisia","code":"TN"},{"name":"Kazakhstan","code":"KZ"},{"name":"Holy See (Vatican City State)","code":"VA"},{"name":"Denmark","code":"DK"},{"name":"Ukraine","code":"UA"},{"name":"Algeria","code":"DZ"},{"name":"Luxembourg","code":"LU"},{"name":"Indonesia","code":"ID"},{"name":"Solomon Islands","code":"SB"},{"name":"Paraguay","code":"PY"},{"name":"Nepal","code":"NP"},{"name":"Western Sahara","code":"EH"},{"name":"France","code":"FR"},{"name":"Slovenia","code":"SI"},{"name":"Armenia","code":"AM"},{"name":"Serbia","code":"RS"},{"name":"Central African Republic","code":"CF"},{"name":"Mauritius","code":"MU"},{"name":"Curacao","code":"CW"},{"name":"Malaysia","code":"MY"},{"name":"Egypt","code":"EG"},{"name":"Guyana","code":"GY"},{"name":"Ireland","code":"IE"},{"name":"El Salvador","code":"SV"},{"name":"Cameroon","code":"CM"},{"name":"San Marino","code":"SM"},{"name":"Japan","code":"JP"},{"name":"State of Palestine","code":"PS"},{"name":"Antigua and Barbuda","code":"AG"},{"name":"Angola","code":"AO"},{"name":"Yemen","code":"YE"},{"name":"Qatar","code":"QA"},{"name":"Micronesia","code":"FM"},{"name":"Germany","code":"DE"},{"name":"Georgia","code":"GE"},{"name":"Romania","code":"RO"},{"name":"Cayman Islands","code":"KY"},{"name":"Benin","code":"BJ"},{"name":"Switzerland","code":"CH"},{"name":"Guinea-Bissau","code":"GW"},{"name":"Aruba","code":"AW"},{"name":"Senegal","code":"SN"},{"name":"Burundi","code":"BI"},{"name":"Israel","code":"IL"},{"name":"Guinea","code":"GN"},{"name":"Papua New Guinea","code":"PG"},{"name":"Uzbekistan","code":"UZ"},{"name":"Dominican Republic","code":"DO"},{"name":"Guadeloupe","code":"GP"},{"name":"Somalia","code":"SO"},{"name":"Sudan","code":"SD"},{"name":"Iceland","code":"IS"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Morocco (ex. Western Sahara)","code":"MA"},{"name":"Malta","code":"MT"},{"name":"Sao Tome and Principe","code":"ST"},{"name":"South Africa","code":"ZA"},{"name":"Syrian Arab Republic","code":"SY"},{"name":"Kenya","code":"KE"},{"name":"Nicaragua","code":"NI"},{"name":"Italy","code":"IT"},{"name":"Czech Republic","code":"CZ"},{"name":"Hong Kong","code":"HK"},{"name":"Tonga","code":"TO"},{"name":"Wallis and Futuna","code":"WF"},{"name":"Philippines","code":"PH"},{"name":"Greenland","code":"GL"},{"name":"Faroe Islands","code":"FO"},{"name":"Saint Vincent and the Grenadines","code":"VC"},{"name":"Jersey","code":"JE"},{"name":"Albania","code":"AL"},{"name":"Azerbaijan","code":"AZ"},{"name":"Tanzania, United Republic of","code":"TZ"},{"name":"Bahamas","code":"BS"},{"name":"Guatemala","code":"GT"},{"name":"Belarus","code":"BY"},{"name":"India","code":"IN"},{"name":"Dominica","code":"DM"},{"name":"Monaco","code":"MC"},{"name":"Zambia","code":"ZM"},{"name":"Niue","code":"NU"},{"name":"French Polynesia","code":"PF"},{"name":"Haiti","code":"HT"},{"name":"Honduras","code":"HN"},{"name":"Mali","code":"ML"},{"name":"Slovakia","code":"SK"},{"name":"Croatia","code":"HR"},{"name":"Bulgaria","code":"BG"},{"name":"Nauru","code":"NR"},{"name":"Seychelles","code":"SC"},{"name":"Iran, Islamic Republic of","code":"IR"},{"name":"Laos","code":"LA"},{"name":"Burkina Faso","code":"BF"},{"name":"Montserrat","code":"MS"},{"name":"Martinique","code":"MQ"},{"name":"Montenegro","code":"ME"},{"name":"Rwanda","code":"RW"},{"name":"Comoros","code":"KM"},{"name":"Samoa","code":"WS"},{"name":"Bahrain","code":"BH"},{"name":"Taiwan","code":"TW"},{"name":"Kiribati","code":"KI"},{"name":"Anguilla","code":"AI"},{"name":"Zimbabwe","code":"ZW"},{"name":"Netherlands","code":"NL"},{"name":"Brazil","code":"BR"},{"name":"Uganda","code":"UG"},{"name":"Kyrgyzstan","code":"KG"},{"name":"Gabon","code":"GA"},{"name":"Fiji","code":"FJ"},{"name":"Mayotte","code":"YT"},{"name":"Gambia","code":"GM"},{"name":"Uruguay","code":"UY"},{"name":"Sierra Leone","code":"SL"},{"name":"Turkmenistan","code":"TM"},{"name":"United States","code":"US"},{"name":"Trinidad and Tobago","code":"TT"},{"name":"Saint Kitts and Nevis","code":"KN"},{"name":"Kosovo","code":"XK"},{"name":"Jordan","code":"JO"},{"name":"Cambodia","code":"KH"},{"name":"Lithuania","code":"LT"},{"name":"Botswana","code":"BW"},{"name":"Congo, Democratic Republic of the Congo","code":"CD"},{"name":"Timor-Leste","code":"TL"},{"name":"Isle of Man","code":"IM"},{"name":"North Macedonia","code":"MK"},{"name":"Djibouti","code":"DJ"},{"name":"Cape Verde","code":"CV"},{"name":"Tokelau","code":"TK"},{"name":"Chad","code":"TD"},{"name":"Lesotho","code":"LS"},{"name":"Reunion","code":"RE"},{"name":"Estonia","code":"EE"},{"name":"Madagascar","code":"MG"},{"name":"Cook Islands","code":"CK"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Liechtenstein","code":"LI"},{"name":"Falkland Islands (Malvinas)","code":"FK"},{"name":"Ecuador","code":"EC"},{"name":"Sint Maarten","code":"SX"},{"name":"Spain","code":"ES"},{"name":"Cote D'Ivoire","code":"CI"},{"name":"China","code":"CN"},{"name":"Bangladesh","code":"BD"},{"name":"Andorra","code":"AD"},{"name":"Austria","code":"AT"},{"name":"Belgium","code":"BE"},{"name":"Greece","code":"GR"},{"name":"Puerto Rico","code":"PR"},{"name":"Bolivia","code":"BO"},{"name":"Norfolk Island","code":"NF"},{"name":"Belize","code":"BZ"},{"name":"Namibia","code":"NA"},{"name":"Eritrea","code":"ER"},{"name":"Hungary","code":"HU"},{"name":"Peru","code":"PE"},{"name":"French Southern Territories","code":"TF"},{"name":"Latvia","code":"LV"},{"name":"Equatorial Guinea","code":"GQ"}];
const DRAWMAP = document.getElementById('pointers');
const CTX = DRAWMAP.getContext("2d");


// Get country array index from date
const d1 = new Date("22/Aug/2022");   
const d2 = new Date();   
const diff = Math.floor((d2.getTime() - d1.getTime())/ (1000 * 60 * 60 * 24));
const diffIndex = diff % COUNTRY_LIST.length;
let TC = COUNTRY_LIST[diffIndex];
//include next line to override active country
//TC = COUNTRY_LIST.find(item => item.code === "GP")
localStorage.setItem('dailyCountry', JSON.stringify(TC));

//Initializing new session
var playData = {
    day : diff, 
    guesses : []
}

// Initialize local storage variables
if (!localStorage.hasOwnProperty('prevSessionGuesses')) {
    localStorage.setItem('prevSessionGuesses', JSON.stringify([]));
    console.log('Initialized "prevSessionGuesses" variable in Local Storage')
}
if (!localStorage.hasOwnProperty('score')) {
    localStorage.setItem('score', JSON.stringify([]));
    console.log('Initialized "score" variable in Local Storage')
}
if ((!localStorage.hasOwnProperty('prevSession'))) {
    localStorage.setItem('prevSession', -1);
    console.log('Initialized "prevSession" variable in Local Storage')
}

let prevSession = localStorage.getItem('prevSession');
let guessN = 0;
let guessed = false;
let shareText = `Pointle | Day ${diff} | ${TC.name}\nhttps://www.pointle.eu\n\n`;

if (playData.day == prevSession) {
    console.log('Continuing the game!');
    playData.guesses = JSON.parse(localStorage.getItem('prevSessionGuesses'));
    console.log(playData);
    for(let i = 0; i < playData.guesses.length; i++) {
        addOldSessionGuess(playData.guesses[i]);
    }
} else {
    localStorage.setItem('prevSessionGuesses', JSON.stringify([]));
}


//canvas size
const CANW = DRAWMAP.getAttribute('width');
const CANH = DRAWMAP.getAttribute('height');

// Update HTML to todays country and its index
document.getElementById('todayscountry').innerHTML = TC.name;
document.getElementById('dayCount').innerHTML = diffIndex + 1;

// Adds necessary eventlisteners on window load
window.addEventListener("load", function() {
    console.log('loaded window')
    var svgelement = document.getElementById('svgobject');
    WORLD = svgelement.contentDocument;
    loc = WORLD.getElementById(TC['code'].toLowerCase());
}); 

// ------------------
// Functions

// If guessed country is correct
function painttrue(x, y, svgxy) {
    let relX = (CANW * x)/svgxy.width;
    let relY = (CANH * y)/svgxy.height;
    
    
    // paint style correct guess
    CTX.fillStyle = "#ffffff";
    CTX.lineWidth = 2;
    CTX.strokeStyle = "#ffffff";

    // inner circle
    CTX.beginPath();
    CTX.arc(relX, relY,4,0,Math.PI*2);
    CTX.fill();
    CTX.closePath();

    // outer circle
    CTX.beginPath();
    CTX.arc(relX, relY,7,0,Math.PI*2);
    CTX.stroke();
    CTX.closePath();

    // update game status
    guessed = true;
    playSound();
}

// If guessed country is incorrect
function paintfalse(x,y,svgxy, tcLoc) {
    
    // get click location on canvas
    let relX = (CANW * x)/svgxy.width;
    let relY = (CANH * y)/svgxy.height;

    let targetX = (tcLoc.right + tcLoc.left)/2;
    let targetY = (tcLoc.top + tcLoc.bottom)/2;
    
    // get target location on canvas
    let locX = (CANW * targetX/svgxy.width);
    let locY = (CANH * targetY/svgxy.height);

    // used to get direction towards country BBox
    //let angle = Math.atan2((locY-relY),(locX-relX));

    // determine color of click dot
    let dx = locX - relX;
    let dy = locY - relY;
    let dz = Math.hypot(dx,dy);
    let canDia = Math.hypot(svgxy.width, svgxy.height);
    let scaledCanDia = Math.hypot(svgxy.width, svgxy.height) / Math.hypot(CANW, CANH)
    let redPercent = dz/canDia;

    console.log(dx,dy,dz,canDia,scaledCanDia,redPercent)
    let rgbval = ["rgb(",250*(redPercent),",",250*(1-redPercent),",",50,")"].join("")

    CTX.fillStyle = rgbval;
    CTX.lineWidth = 2;
    CTX.strokeStyle = rgbval;

    // paint click dot
    CTX.beginPath();
    CTX.arc(relX, relY,5,0,Math.PI*2);
    CTX.fill();
    CTX.closePath();
}

// sets scoreboard element [guessN] to name of clicked country plus score, and increment guessN
function addGuess(symbol, guessedCountry) {
    cName = guessedCountry.querySelector('p').textContent;
    guessN += 1;
    document.getElementById('guess'+guessN).innerHTML = 
    `<p>${symbol}</p><p>${cName}</p>`;
    shareText += `${symbol} ${guessN}/6 : ${cName}\n`
    
    // Set most recent session to current one in cookies
    localStorage.setItem('prevSession', diff);
    // Add country tags to array in cookies 
    let toAppendTo = JSON.parse(localStorage.getItem('prevSessionGuesses'));
    toAppendTo.push(guessedCountry.id.toUpperCase());
    localStorage.setItem('prevSessionGuesses', JSON.stringify(toAppendTo));
}

function addOldSessionGuess(tag) {
    guessN += 1;
    let symbol;
    let countryObj = COUNTRY_LIST.find(item => item.code === tag);
    let name = countryObj.name;

    if (TC == countryObj) {
        symbol = '🟩';
        guessed = true;
    } else { 
        symbol = '❌'; 
    }
    document.getElementById('guess'+guessN).innerHTML = 
    `<p>${symbol}</p><p>${name}</p>`;
    shareText += `${symbol} ${guessN}/6 : ${name}\n`
 
    if (finished()) {
        toggleShow(document.getElementById('share'), 'grid');
    }
}

// returns boolean array [gameFinished, didGuessCountry]
function finished() {
    return ((getGuessN() > 5 || guessed));
}

// popup on game end
function displayResult(didGuess) {
    const gameoverPopup = document.getElementById('gameover');
    const sharePopup = document.getElementById('share')
    const gameoverText = document.createElement('p');
 
    guessed = didGuess;
    
    // update score in local storage, include 1 extra guess if didnt find country
    let score = JSON.parse(localStorage.getItem('score'));
    if (guessed) {
        score.push(guessN);
    } else {
        score.push(guessN + 1);
    }
    localStorage.setItem('score', JSON.stringify(score));
    console.log('new score: ' + score);

    // add result-based text on gameover popup
    if (didGuess) {
        gameoverText.innerText = "CONGRATULATIONS!\nYou correctly guessed the location of "+TC.name+" in " + getGuessN() + " guesses";  
    } else {
        gameoverText.innerText = `GAME OVER!\nYou did not find ${TC.name} within 6 guesses`;
    }
    const target = document.getElementById('gameoverClose');
    target.parentNode.insertBefore(gameoverText, target);
    show(gameoverPopup);
    toggleShow(sharePopup, 'grid');
}


// getters and setters
function dailyCountry() {
    return TC;
}

function getGuessN() {
    return guessN;
}

function calcScore() {
    scoreArray = JSON.parse(localStorage.getItem('score'));
    console.log(scoreArray.length);
    for(let i=0; i<7; i++) {
        let counter = 0;
        for (dayScore of scoreArray) {
            if (dayScore == i+1) {
                counter++;
            }
        }
        let classId = `percentage-${i+1}`;
        let percentageBar = document.getElementById(classId);
        let barWidth = 1;
        if (scoreArray.length > 0) {
            barWidth = Math.max(0.5, counter*100/scoreArray.length);
        }
        percentageBar.style.width = `${barWidth}%`;
        if (counter > 0) {
            percentageBar.innerHTML = counter;
        }
        if (i+1 == scoreArray[scoreArray.length - 1]) {
            percentageBar.style.color = 'lime';
        }
    }
}

// html functions
function hide(elem) {
    elem.style.display = 'none'
}

function show(elem) {
    const overlays = document.getElementsByClassName('overlay');
    console.log(overlays);
    // hide all open overlays;
    for(let i=0; i<overlays.length; i++) {
        console.log(overlays[i]);
        hide(overlays[i]);
    }

    elem.style.display = 'block'
    console.log(`showed ${elem}`)
}

function toggleShow(elem, mode) {
    elem.style.display = mode;
}

function copyToClipboard(element) {
    console.log(`Copied to clipboard:\n${shareText}`);
    window.navigator.clipboard.writeText(shareText);
    element.innerHTML = 'Copied to clipboard!';
}

let playSound = function(){document.getElementById("audio").play()}


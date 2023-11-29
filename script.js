let box1 = document.getElementById('div1');
let box2 = document.getElementById('div2');
let box3 = document.getElementById('div3');
let box4 = document.getElementById('div4');
let box5 = document.getElementById('div5');
let box6 = document.getElementById('div6');
let box7 = document.getElementById('div7');
let box8 = document.getElementById('div8');
let box9 = document.getElementById('div9');

let button = document.getElementById('button1');


//make 4 arrays of words: adjectives, nouns, -ing verbs, adverbs
const adj = ['happy', 'sad', 'funny', 'stupid', 'beautiful',
'boastful', 'tired', 'self-absorbed', 'scary', 'timid', 'stressed-out', 'evil',
'ugly', 'thirsty', 'loathsome', 'old', 'striped', 'green', 'sickly', 'bored'];
const noun = ['tree', 'nurse', 'bat', 'cat', 'bulldozer', 'bowl of oatmeal', 'dentist',
'librarian', 'car', 'football', 'television', 'car battery', 'bonsai tree', 'lawyer', 'alien life-form', 
'random message generator', 'painting', 'computer', 'nerd', 'soundcloud rapper'];
const verb = ['lifting', 'licking', 'bothering', 'yelling at', 'scraping', 'slapping', 'removing', 
'chewing on', 'polishing', 'cleaning', 'asking to dinner', 'defeating', 'paying', 'feeding', 
'running away from', 'apoloigizing to', 'partnering up with', 'writing to', 'glaring at', 'laughing at'];
const adv = ['quickly', 'sadly', 'badly', 'sorrowfully', 'happily', 'slowly', 'angrily', 'whinily', 'cordially', 
'secretly', 'eagerly', 'carefully', 'quietly', 'worriedly', 'grimly', 'deeply', 'tomorrow', 'soon', 'too often', 'sloppily'];

//make 6 random numbers labeled a through f 

let a;
let b;
let c;
let d;
let e;
let f;

const newMessage = () => {
    a = Math.floor(Math.random()*20);
    b = Math.floor(Math.random()*20);
    c = Math.floor(Math.random()*20);
    d = Math.floor(Math.random()*20);
    e = Math.floor(Math.random()*20);
    f = Math.floor(Math.random()*20);

    box2.innerHTML = adj[a];
    box3.innerHTML = noun[b];
    box5.innerHTML = verb[c];
    box7.innerHTML = adj[d];
    box8.innerHTML = noun[e];
    box9.innerHTML = adv[f];
}

button.onclick = newMessage;




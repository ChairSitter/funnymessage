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
'ugly', 'thirsty', 'loathsome', 'old', 'striped', 'green', 'sickly', 'bored',
'grouchy', 'enormous', 'British', 'foolhardy', 'smooth-talking', 'catlike', 
'mustachioed', 'Dickensian', 'overblown', 'flea-ridden'];
const noun = ['tree', 'nurse', 'bat', 'cat', 'bulldozer', 'bowl of oatmeal', 'dentist',
'librarian', 'car', 'football', 'television', 'car battery', 'bonsai tree', 'lawyer', 'alien life-form', 
'random message generator', 'painting', 'computer', 'nerd', 'soundcloud rapper',
'dock worker', 'Prime Minister', 'pinecone', 'squirrel', 'end table', 'author',
'cashier', 'cutting board', 'eagle', 'charcuterie board'];
const verb = ['lifting', 'licking', 'bothering', 'yelling at', 'scraping', 'slapping', 'removing', 
'chewing on', 'polishing', 'cleaning', 'asking to dinner', 'defeating', 'paying', 'feeding', 
'running away from', 'apologizing to', 'partnering up with', 'writing to', 'glaring at', 'laughing at',
'sizing up', 'seizing', 'investigating', 'mailing a letter to', 'pestering', 'idolizing', 
'shaking hands with', 'approaching', 'questioning', 'befriending'];
const adv = ['quickly', 'sadly', 'badly', 'sorrowfully', 'happily', 'slowly', 'angrily', 'whinily', 'cordially', 
'secretly', 'eagerly', 'carefully', 'quietly', 'worriedly', 'grimly', 'deeply', 'tomorrow', 'soon', 'too often', 'sloppily',
'without care', 'carelessly', 'like a moron', 'neatly', 'sweetly', 
'at Town Hall', 'in Germany', 'quite poorly', 'desperately', 'unsurprisingly'];

//make 6 random numbers labeled a through f 

let a;
let b;
let c;
let d;
let e;
let f;

//function that assigns the inner HTML of appropriate boxes to values at random indexes of the arrays

const newMessage = () => {
    a = Math.floor(Math.random()*30);
    b = Math.floor(Math.random()*30);
    c = Math.floor(Math.random()*30);
    d = Math.floor(Math.random()*30);
    e = Math.floor(Math.random()*30);
    f = Math.floor(Math.random()*30);

    box1.style.display = 'flex';
    box2.style.display = 'flex';
    box3.style.display = 'flex';
    box4.style.display = 'flex';
    box5.style.display = 'flex';
    box6.style.display = 'flex';
    box7.style.display = 'flex';
    box8.style.display = 'flex';
    box9.style.display = 'flex';

    box1.innerHTML = "The";
    box2.innerHTML = adj[a];
    box3.innerHTML = noun[b];
    box4.innerHTML = "is";
    box5.innerHTML = verb[c];
    box6.innerHTML = "the";
    box7.innerHTML = adj[d];
    box8.innerHTML = noun[e];
    box9.innerHTML = adv[f] + ".";
}

button.onclick = newMessage;




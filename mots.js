let tab=['WHISKY','JAZZEZ','JOCKEY','BOMBYX','KAZAKH','COCCYX','JOYEUX','JOYAUX','JUNKYS','KAKAWI','KAYAKS','KIKIWI','OXYDEZ','QWERTY','HADJDJ','KIFKIF','OUBYKH','ZYKLON','BUZZEZ','HOCKEY','JERKEZ','KEPHYR','KWACHA','KWANZA','MOHAWK','QWERTZ','SPHYNX','WIGWAM','YAKUZA','ZAWIYA','JOGGEZ','KIFFEZ','KOPECK','JAZZEE','JAZZER','JAZZES','JUCHEZ','KABYLE','MAYDAY','PYXIDE','VAQUEZ','VEXIEZ','VICHYS','VOYIEZ','ZEPHYR','ZEZAYA','ZEZAYE','ZOUKEZ','ZWANZA','ZWANZE','ZYGOMA','MYXOME','PYJAMA','VOLVOX','YAPOCK','ABZYME','AVOYEZ','CHOYEZ','JAZZAI','JAZZAS','JAZZAT','ZYTHUM','BIJOUX','BOYAUX','FUNKYS','GWOKAS','HAKKAS','HOYAUX','HUSKYS','JAPPEZ','JOJOBA','JUGAUX','JUJUBE','JUMPEZ','JINGXI','KABARY','KABIYE','KABUKI','KABYES','KATHAK','OJIBWA','OXYMEL','WAYANG','XYLEME','ZIGZAG','AVIVEZ','BAGGYS','BUGGYS','BOBBYS','BOGHEY','CAYEUX','CHEVEZ','COXAUX','COYAUX','EPOXYS','FLUXEZ','FLYSCH','GLYPHE','GROGGY','HOBBYS'];

let val = document.querySelector('#envoi');
let num =Math.floor(Math.random()*101);
let mots = tab[num].split('');
let essai = 9;
let message = document.querySelector('.essai');

val.addEventListener('click', function(){ 
    if ( essai>6  && essai<10){
        message.innerHTML=`Ils vous restes ${essai} essais`;
        message.style.color = 'green';
        console.log(essai);

    }else if (essai>3 && essai<7){
        message.innerHTML=`Ils vous restes ${essai} essais`;
        message.style.color = 'yellow';
    }else{
        message.innerHTML=`Ils vous restes ${essai} essais`;
        message.style.color = 'red';
    }
let table = document.querySelector('.tester');
let Tr = document.createElement('tr');
let Vmots = document.getElementById('ecrir');
let mot = Vmots.value;
Vmots.value='';
mot = mot.toUpperCase()
let mot1= mot.split('');
let s='';
let d=0;
console.log(mots);
if (mot1.length==6){
table.appendChild(Tr);
    for(let i in mot1){
        let Td = document.createElement('td');
        for(let j in mots){
             
            if (mots[j]==mot1[i] && j==i){
               s=mot1[i];
               d=1;
               break;

            }else if(mots[j]==mot[i] && j!=i){
                s=mot1[i];
               d=2
               break;
               
            }else{
                s=mot1[i];
               d=3
                
               
            }
            console.log(mot1[i]+','+mots[j]);
            console.log(i+','+j);
           
        } 
        console.log(d);
        console.log(s);
        console.log(Td.classList);
        if(d==1){
            Td.classList.add('gree');
 
        }else if(d== 2){
            Td.classList.add('yello');
 
        }else{
         Td.classList.add('rede');

        }
        
        Tr.appendChild(Td);
        Td.textContent=s;
        console.log(Tr.appendChild(Td));
        Td.style.opacity=0;
        Td.offsetParent ;// force the DOM to reflow
        Td.style.transition = 'opacity 750ms';
        Td.style.opacity = 1;
    }
    essai--;
}
else{
    alert('merci de donner un mots de 6 lettres');
}


});


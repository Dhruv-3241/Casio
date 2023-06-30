key_tab = document.getElementById('key_tab');
key_q = document.getElementById('key_q');
key_w = document.getElementById('key_w');
key_e = document.getElementById('key_e');
key_r = document.getElementById('key_r');
key_t = document.getElementById('key_t');
key_y = document.getElementById('key_y');
key_u = document.getElementById('key_u');
key_i = document.getElementById('key_i');
key_o = document.getElementById('key_o');
key_p = document.getElementById('key_p');
key_openBr = document.getElementById('key_[');
key_closBr = document.getElementById('key_]');
key_slash = document.getElementById('key_\\');
key_in = document.getElementById('key_`');
key_1 = document.getElementById('key_1');
key_2 = document.getElementById('key_2');
key_3 = document.getElementById('key_3');
key_4 = document.getElementById('key_4');
key_5 = document.getElementById('key_5');
key_6 = document.getElementById('key_6');
key_7 = document.getElementById('key_7');
key_8 = document.getElementById('key_8');
key_9 = document.getElementById('key_9');
var audio1 = new Audio('./Sounds/A/key01.mp3');
var audio2 = new Audio('/Sounds/A/key02.mp3');
var audio3 = new Audio('/Sounds/A/key03.mp3');
var audio4 = new Audio('/Sounds/A/key04.mp3');
var audio5 = new Audio('/Sounds/A/key05.mp3');
var audio6 = new Audio('/Sounds/A/key06.mp3');
var audio7 = new Audio('/Sounds/A/key07.mp3');
var audio8 = new Audio('/Sounds/A/key08.mp3');
var audio9 = new Audio('/Sounds/A/key09.mp3');
var audio10 = new Audio('/Sounds/A/key10.mp3');
var audio11 = new Audio('/Sounds/A/key11.mp3');
var audio12 = new Audio('/Sounds/A/key12.mp3');
var audio13 = new Audio('/Sounds/A/key13.mp3');
var audio14 = new Audio('/Sounds/A/key14.mp3');
var audio15 = new Audio('/Sounds/A/key15.mp3');
var audio16 = new Audio('/Sounds/A/key16.mp3');
var audio17 = new Audio('/Sounds/A/key17.mp3');
var audio18 = new Audio('/Sounds/A/key18.mp3');
var audio19 = new Audio('/Sounds/A/key19.mp3');
var audio20 = new Audio('/Sounds/A/key20.mp3');
var audio21 = new Audio('/Sounds/A/key21.mp3');
var audio22 = new Audio('/Sounds/A/key22.mp3');
var audio23 = new Audio('/Sounds/A/key23.mp3');
var audio24 = new Audio('/Sounds/A/key24.mp3');
document.addEventListener('keydown', function(e){
    console.log(e)
    if(e.key == 9){
        key_tab.style.fill = 'red'
        setTimeout(()=>{
            key_tab.style.fill = 'white'
        }, 200)
    audio1.play()
    setTimeout(()=>{
        audio1.currentTime = 6;
    }, 2000)
    }
    else if(e.key == 'q'){
        key_q.style.fill = 'red'
        setTimeout(()=>{
            key_q.style.fill = 'white'
        }, 200)
        audio2.play()
        setTimeout(()=>{
            audio2.currentTime = 6;
        }, 1000)
    }
    else if(e.key == 'w'){
        key_w.style.fill = 'red'
        setTimeout(()=>{
            key_w.style.fill = 'white'
        }, 200)
        audio3.play()
        setTimeout(()=>{
            audio3.currentTime = 6;
        }, 1000)
    }
    else if(e.key == 'e'){
        key_e.style.fill = 'red'
        setTimeout(()=>{
            key_e.style.fill = 'white'
        }, 200)
        audio4.play()
        setTimeout(()=>{
            audio4.currentTime = 6;
        }, 1000)
    }
    else if(e.key == 'r'){
        key_r.style.fill = 'red'
        setTimeout(()=>{
            key_r.style.fill = 'white'
        }, 200)
        audio5.play()
        setTimeout(()=>{
            audio5.currentTime = 6;
        }, 1000)
    }
    else if(e.key == 't'){
        key_t.style.fill = 'red'
        setTimeout(()=>{
            key_t.style.fill = 'white'
        }, 200)
        audio6.play()
        setTimeout(()=>{
            audio6.currentTime = 6;
        }, 1000)
    }
    else if(e.key == 'y'){
        key_y.style.fill = 'red'
        setTimeout(()=>{
            key_y.style.fill = 'white'
        }, 200)
        audio7.play()
        setTimeout(()=>{
            audio7.currentTime = 6;
        }, 1000)
    }
    else if(e.key == 'u'){
        key_u.style.fill = 'red'
        setTimeout(()=>{
            key_u.style.fill = 'white'
        }, 200)
        audio8.play()
        setTimeout(()=>{
            audio8.currentTime = 6;
        }, 1000)
    }
    else if(e.key == 'i'){
        key_i.style.fill = 'red'
        setTimeout(()=>{
            key_i.style.fill = 'white'
        }, 200)
        audio9.play()
        setTimeout(()=>{
            audio9.currentTime = 6;
        }, 1000)
    }
    else if(e.key == 'o'){
        key_o.style.fill = 'red'
        setTimeout(()=>{
            key_o.style.fill = 'white'
        }, 200)
        audio10.play()
        setTimeout(()=>{
            audio10.currentTime = 6;
        }, 1000)
    }
    else if(e.key == 'p'){
        key_p.style.fill = 'red'
        setTimeout(()=>{
            key_p.style.fill = 'white'
        }, 200)
        audio11.play()
        setTimeout(()=>{
            audio11.currentTime = 6;
        }, 1000)
    }
    else if(e.key == '['){
        key_openBr.style.fill = 'red'
        setTimeout(()=>{
            key_openBr.style.fill = 'white'
        }, 200)
        audio12.play()
        setTimeout(()=>{
            audio12.currentTime = 6;
        }, 1000)
    }
    else if(e.key == ']'){
        key_closBr.style.fill = 'red'
        setTimeout(()=>{
            key_closBr.style.fill = 'white'
        }, 200)
        audio13.play()
        setTimeout(()=>{
            audio13.currentTime = 6;
        }, 1000)
    }
    else if(e.key == '\\'){
        key_slash.style.fill = 'red'
        setTimeout(()=>{
            key_slash.style.fill = 'white'
        }, 200)
        audio14.play()
        setTimeout(()=>{
            audio14.currentTime = 6;
        }, 1000)
    }
    else if(e.key == '`'){
        key_in.style.fill = 'red'
        setTimeout(()=>{
            key_in.style.fill = 'black'
        }, 200)
        audio15.play()
        setTimeout(()=>{
            audio15.currentTime = 6;
        }, 1000)
    }
    else if(e.key == '1'){
        key_1.style.fill = 'red'
        setTimeout(()=>{
            key_1.style.fill = 'black'
        }, 200)
        audio16.play()
        setTimeout(()=>{
            audio16.currentTime = 6;
        }, 1000)
    }
    else if(e.key == '2'){
        key_2.style.fill = 'red'
        setTimeout(()=>{
            key_2.style.fill = 'black'
        }, 200)
        audio17.play()
        setTimeout(()=>{
            audio17.currentTime = 6;
        }, 1000)
    }
    else if(e.key == '3'){
        key_3.style.fill = 'red'
        setTimeout(()=>{
            key_3.style.fill = 'black'
        }, 200)
        audio18.play()
        setTimeout(()=>{
            audio18.currentTime = 6;
        }, 1000)
    }
    else if(e.key == '4'){
        key_4.style.fill = 'red'
        setTimeout(()=>{
            key_4.style.fill = 'black'
        }, 200)
        audio19.play()
        setTimeout(()=>{
            audio19.currentTime = 6;
        }, 1000)
    }
    else if(e.key == '5'){
        key_5.style.fill = 'red'
        setTimeout(()=>{
            key_5.style.fill = 'black'
        }, 200)
        audio20.play()
        setTimeout(()=>{
            audio20.currentTime = 6;
        }, 1000)
    }
    else if(e.key == '6'){
        key_6.style.fill = 'red'
        setTimeout(()=>{
            key_6.style.fill = 'black'
        }, 200)
        audio21.play()
        setTimeout(()=>{
            audio21.currentTime = 6;
        }, 1000)
    }
    else if(e.key == '7'){
        key_7.style.fill = 'red'
        setTimeout(()=>{
            key_7.style.fill = 'black'
        }, 200)
        audio22.play()
        setTimeout(()=>{
            audio22.currentTime = 6;
        }, 1000)
    }
    else if(e.key == '8'){
        key_8.style.fill = 'red'
        setTimeout(()=>{
            key_8.style.fill = 'black'
        }, 200)
        audio23.play()
        setTimeout(()=>{
            audio23.currentTime = 6;
        }, 1000)
    }
    else if(e.key == '9'){
        key_9.style.fill = 'red'
        setTimeout(()=>{
            key_9.style.fill = 'black'
        }, 200)
        audio24.play()
        setTimeout(()=>{
            audio24.currentTime = 6;
        }, 1000)
    }
    
    
})



import {nJToast} from "./node_modules/nj-library/main.js";

//Push
const pop = (function () {
  return {
    alert: function (params = {}) {
      const defaultParams = {
        className: "h-auto w-70 p-2 card rounded flex flex-col centered fade-in",
        textClass: "text-center font-xs",
        secondDiv: "flex justify-between space mt-3",
        buttonClass: "h-3 w-30 rounded gradient-2 shadow border-none shrink-0 hover",
        message: "hello world",
        leftText: "No",
        rightText: "Yes",
        titleClass: "text-center",
        title:'Confirmation',
        runFunc1: () => {},
        runFunc2: () => {}
      };
      const config = { ...defaultParams, ...params };
      this.showPop(config);
    },
    showPop: function (config) {
      let div = document.createElement("div");
      let secondDiv = document.createElement("div");
      let btn1 = document.createElement("button");
      let btn2 = document.createElement("button");
      let title = document.createElement('h2');
      let h2 = document.createElement("h2");
      

      div.classList.add(...config.className.split(" "));
      secondDiv.classList.add(...config.secondDiv.split(" "));
      h2.classList.add(...config.textClass.split(" "));
      
      div.appendChild(title);
      title.classList.add(...config.titleClass.split(" "));
      btn1.classList.add(...config.buttonClass.split(" "));
      btn2.classList.add(...config.buttonClass.split(" "));
      
      title.textContent = config.title;
      h2.textContent = config.message;
      btn1.innerHTML = config.leftText;
      btn2.innerHTML = config.rightText;

      secondDiv.appendChild(btn1);
      secondDiv.appendChild(btn2);
      div.appendChild(h2);
      div.appendChild(secondDiv);
      btn1.addEventListener('click',() => {
        div.remove();
        
      });
      btn2.addEventListener('click',() => {
        config.runFunc2()
        div.remove();
      });
      document.body.appendChild(div);
    },
  };
})();

let key = document.querySelector('.key');
let login = document.querySelector('.login');
let pass = document.querySelector('.pass');
let choice = document.querySelector('.choice');
let loader = document.querySelector('.load');
let audio = new Audio('misc/nier.mp3');
let voice1 = new Audio('misc/correct(2).mp3');
let voice2 = new Audio('misc/nope(2).mp3');
let voice3 = new Audio('misc/bye(2).mp3');
voice1.volume = 1;
voice2.volume = 1;
audio.volume = 0.5;
voice3.volume = 1;
login.addEventListener('click',()=> {
  if(localStorage.getItem('key') != '4322' && key.value == 4332){
    pass.classList.add('show-none');
    choice.classList.toggle('show-flex');
    localStorage.setItem('key',key.value)
    audio.play();
    audio.loop = true;
  }else if(localStorage.getItem('key') != '2234' && key.value == 2234){
    pass.classList.add('show-none');
    choice.classList.toggle('show-flex');
    localStorage.setItem('key',key.value)
    audio.play();
    audio.loop = true;
  }else if(localStorage.getItem('key') != '7766' && key.value == 7766){
    pass.classList.add('show-none');
    choice.classList.toggle('show-flex');
    localStorage.setItem('key',key.value)
    audio.play();
    audio.loop = true;
  }else if(localStorage.getItem('key') != '3345' && key.value == 3345){
    pass.classList.add('show-none');
    choice.classList.toggle('show-flex');
    localStorage.setItem('key',key.value)
    audio.play();
    audio.loop = true;
  }else if(localStorage.getItem('key') != '2245' && key.value == 2245){
    pass.classList.add('show-none');
    choice.classList.toggle('show-flex');
    localStorage.setItem('key',key.value)
    audio.play();
    audio.loop = true;
  }else{
    nJToast.warning({
      message:'I dont know you..',
      textColor:'white'
    });
    
  }
});

//push
let text = document.querySelector('.text');
let path;
const riddle = [
  {
    fame:[
      {
        question:'At long last, the awaited moment had arrived. As I stood at the threshold of my future, I took a deep breath and stepped forward, fully expecting to find myself in a world of fame and recognition. Yet, to my surprise, I didn’t land in the future I imagined. Instead, I found myself grounded firmly in the present.Confused, I paused to think. Why did this happen? I had always believed that stepping into the future would grant me the fame I longed for, the recognition I had worked for all these years. But here I was, still in the now, facing the reality of my current self.As I pondered, a voice echoed from the silence: “If you are to reach the future, you must first understand that you can’t only exist in the past. Your dreams of fame and success cannot be built on memories or regrets.”I stood still, the weight of those words sinking in. Could it be that true greatness wasnt about waiting for something to happen in the future, but about realizing the potential I already held? Could it be that my true journey had nothing to do with the past or the future, but with the present moment?As I asked myself, “What am I really seeking?” the answer seemed clear: it wasn’t fame, but the power to live fully in the present, shaping my future through the choices I made today.\n What exactly im i seeking for?'
,main:'now'
      }
    ]
  },
  {
    wealth:[
      {
        question:'After years of hard work, the moment had come. I had long dreamed of wealth, imagining the day when I would step into a life of abundance and security. I had worked tirelessly, believing that if I just kept pushing forward, the riches would come. So, with excitement, I took a step into what I thought was my future—a future of endless wealth. But to my surprise, when I opened my eyes, I wasn’t standing in the lavish mansion I had envisioned. Instead, I was standing in the present, surrounded by everything I had now.Perplexed, I asked myself, “Why didn’t I end up in the future I imagined? Why didn’t the wealth just appear?”A soft voice whispered within me, “Wealth isn’t something that appears out of nowhere. It’s built, moment by moment, through decisions made in the present.”I stood there, reflecting. It dawned on me that wealth wasn’t just about the accumulation of money or possessions. It was about the choices I made today—the investments in my growth, the relationships I nurtured, and the opportunities I created.I realized that the real question wasn’t about waiting for wealth to appear. It was about asking myself, “What am I seeking right now?” And the answer was clear: True wealth wasn’t just in material things—it was in how I chose to live and invest. One word for me to attain wealth is?',main:'now'
      }
    ]
  },
  {
    power:[
      {
        question:'In a village nestled between mountains, there lived a young woman named Lyra. She dreamed of becoming a great leader, admired by all. Yet, despite her efforts, she felt trapped in the present, as if time was always slipping away from her.One evening, an old sage appeared at the village square, carrying only a staff and a knowing smile. “I see you seek power, child,” he said. “But the power you seek is already within you.” Lyra, confused, asked, “How can that be? I have nothing but dreams.” The sage paused for a moment and then asked, "I will pose a riddle to you. Answer it, and perhaps you will find the power you seek." He began: "I am not bound by time, yet I hold the key.I move mountains without a single plea.I shape your world with every choice you make,But the moment I slip, it’s too late to break.What am I?" Lyra thought deeply. What do you think the answer is?',main:'agency'
      }
    ]
  }
];

const setQuestion = () => {
  if(path == 'fame'){
  text.innerHTML = riddle[0].fame[0].question
  }else if(path == 'power'){
  text.innerHTML = riddle[2].power[0].question;
  }else if(path == 'wealth'){
   text.innerHTML = riddle[1].wealth[0].question;
  }
 
}

let button = document.querySelector('.confirm');
button.addEventListener('click', () => {
  const path1 = document.querySelectorAll('.box1');
  let selectedRadio = null;

  // Find the selected radio button
  path1.forEach((radio) => {
    if (radio.checked) {
      selectedRadio = radio;
    }
  });

  if (selectedRadio) {
    if(selectedRadio.value == 'fame'){
      path = "fame";
    }else if(selectedRadio.value == 'wealth'){
      path = "wealth";
    }else if(selectedRadio.value == 'power'){
      path = "power";
    }
    setQuestion();
    pop.alert({
      message: "Are you sure you want to go this path? " + selectedRadio.value,
      runFunc2: nextPage
    });
  } else {
    pop.alert({
      message: "Please select a path before proceeding.",
    });
  }
});
  let attempt1 = 20;
  let container = document.querySelector('.container');
  let container1 = document.querySelector('.next');
const nextPage = () => {
  let nextPage = document.querySelector('.nextPage');
  let attempt = document.querySelector('.attempt');
  attempt.innerHTML = `Attempts left:${attempt1}`;
  loader.classList.toggle('show-none');
  container.style.display = 'none';
  setTimeout(()=> {
  nextPage.style.display = "flex";
  loader.classList.toggle('show-none');
  },3000);
  
}
let menu = document.querySelector('.menu');
let point = 0
menu.addEventListener('click',()=>{
  pop.alert({
    title:'Points Earned',
    message:`${point} dollars`,
    leftText:'back',
    rightText:'withdraw',
    runFunc2:()=>{}
  })
});
const checkAnswer = () => {
  let textarea = document.querySelector('.textarea');
  if(attempt1 > 0){
  if(path == 'fame' && riddle[0].fame[0].main == textarea.value){
    point = 1;
    nJToast.success({
      message:'Points won you can go withdraw',
      textColor:'white',
    })
    if(!audio.paused){
      audio.pause();
    }
    voice1.play();
  }else if(path == 'wealth' && riddle[1].wealth[0].main == textarea.value){
    point = 1;
    nJToast.success({
      message:'Points won you can go withdraw',
      textColor:'white',
    });
    if(!audio.paused){
      audio.pause();
    }
    voice1.play();
  }else if(path == 'power' && riddle[2].power[0].main == textarea.value){
    point = 1;
    nJToast.success({
      message:'Points won you can go withdraw',
      textColor:'white',
    });
    if(!audio.paused){
      audio.pause();
    }
    voice1.play();
  }else{
    nJToast.warning({
      textColor:'white',
      message:'Nope',
      timeout:2000
    });
   let attempt = document.querySelector('.attempt');
    attempt1--;
    attempt.innerHTML = `Attempts left:${attempt1}`;
    voice2.play();
  }
}else{
  container1.style.display = "none";
  pop.alert({
    title:'Confirmation',
    message:"Quiz over. Goodbye. You arent acknowledged as master",
    runFunc2:()=>{
      window.location.href = "index.html";
    }
  });
  if(!audio.paused){
    audio.pause();
  }
  voice3.play();
}
}
let sub = document.querySelector('.sub');
sub.addEventListener('click',()=> {
  checkAnswer();
});


function message(){
  return "I will not let you go.";
}
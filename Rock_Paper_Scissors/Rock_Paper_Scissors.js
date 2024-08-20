let s,cm;
      let score = JSON.parse(localStorage.getItem('score')) || {
        win: 0,
        lose: 0,
        tie: 0
      };
      document.querySelector('.score').innerHTML = `Win: ${score.win} | Lose: ${score.lose} | Tie: ${score.tie}`;
      

      function Cpick(){
        let c;
        let r = Math.random();
        if(r>=0 && r<1/3){
        c = 'Rock';
        }else if(r>=1/3 && r<2/3){
        c = 'Paper';
        }else if(r>=2/3 && r<1){
        c = 'Scissors';
        }
        return c;
      }

      function ResultR(cm){
        let r;
        if(cm === 'Rock'){
        r = 'Tie';
        }else if(cm === 'Paper'){
        r = 'Lose';
        }else {
        r = 'Win';
        }
        return r;
      }

      function ResultP(cm){
        let r;
        if(cm === 'Paper'){
        r = 'Tie';
        }else if(cm === 'Scissors'){
        r = 'Lose';
        }else {
        r = 'Win';
        }
        return r;
      }

      function ResultS(cm){
        let r;
        if(cm === 'Scissors'){
        r = 'Tie';
        }else if(cm === 'Rock'){
        r = 'Lose';
        }else {
        r = 'Win';
        }
        return r;
      }

      function PlayGame(player){
        cm = Cpick();
        if (player === 'Rock') {
          s = ResultR(cm);
        }else if(player === 'Paper'){
          s = ResultP(cm);
        }else{
          s = ResultS(cm);
        }
        document.querySelector('.move').innerHTML = `
          You
          <img src="RPS_img/${player}-emoji.png">
          <img src="RPS_img/${cm}-emoji.png">
          Computer`;

        if (s === 'Win') {
          score.win++;
        }else if(s === 'Lose'){
          score.lose++;
        }else{
          score.tie++;
        } 

        document.querySelector('.result').innerHTML = `${s}.`;

        localStorage.setItem('score',JSON.stringify(score));
        document.querySelector('.score').innerHTML = `Win: ${score.win} | Lose: ${score.lose} | Tie: ${score.tie}`;

      }
      
      let playing = false;

      function stopauto(){
        const auto = document.querySelector('.auto');
        if (auto.innerHTML === 'Auto Play') {
          auto.innerHTML = 'Stop Auto Play';
          auto.classList.add('notauto');
          playing = true;
          document.querySelector('title ').innerHTML = 'Playing...';
          
        }else{
          auto.innerHTML = 'Auto Play';
          auto.classList.remove('notauto');
          playing = false;
          document.querySelector('title ').innerHTML = 'Rock Paper Scissors';
        }
      }

      let id;
      function autoplay(){
        if (playing) {
          id = setInterval(function () {
            PlayGame(Cpick());
          },1500);
        }else{
          clearInterval(id);
        } 
      }
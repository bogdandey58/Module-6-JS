const keyTrainer = {
  chars: [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
  ],


  charCount: '',
  setCharCount: function(a) {
    this.charCount = a;
    const char = prompt(`Enter ${this.charCount} symbols`, '');
    if (char.length === this.charCount) {
      console.log('OK');
    } else {
      console.log('K.O.');
    }
  },


  checkPositiveInteger: function() {},

  
  task: [],
  createTask: function(max) {
    for (let i = 0; i < this.charCount; i++) {
      const a = Math.floor(Math.random() * max);
      this.task.push(this.chars[a]);
    }
    console.log('this.task - ', this.task);
  },
  

  startTask: function() {
    const taskRndChars = prompt(`Repeat this => ${this.task} <= pls`, '');
    const x = taskRndChars.split('');
    

    this.userInput = x;
    this.userInput.map((item, idx) => {
      if (item != this.task[idx]) {
        this.userErrors++;
        console.log(`You made ${this.userErrors} mistakes. Try again`);
      } else {
        this.userErrors = 0;
        console.log('Congratulations');
      }
    });
  },
  
  userInput: [],
  userErrors: [],
};

const run = () => {
  keyTrainer.setCharCount(3);
  keyTrainer.createTask(keyTrainer.chars.length);
  keyTrainer.startTask();
};

run();

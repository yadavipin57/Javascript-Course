#My projects code

## Project 1 - Color Changer
```html
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="white"></span>
      <span class="button" id="grey"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="purple"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```

```javascript
    const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e); // ?
    console.log(e.target); // ?
    console.log(e.target.id); // ?

    switch(e.target.id){
      case 'white':
      case 'grey':
      case 'blue':
      case 'yellow':
      case 'purple':
        body.style.backgroundColor = e.target.id;
    }

    // if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'purple') {
    //   body.style.backgroundColor = e.target.id;
    // }
  });
});

```

```css
    html {
      margin: 0;
  }
  
  span {
    display: block;
  }
  .canvas {
    margin: 100px auto 100px;
    width: 80%;
    text-align: center;
  }
  
  .button {
    width: 100px;
    height: 100px;
    border: solid black 2px;
    display: inline-block;
  }

  #white {
    background: white;
  }
  
  #grey {
    background: grey;
  }
  
  #blue {
    background: blue;
  }
  #yellow {
    background: yellow;
  }
  #purple {
    background: purple;
  }
  
  
```

## Project 2- BMI Calculator

```html
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="container">
      <h1>
        <a href="index.html" style="text-decoration: none; color: white"
          >BMI Calculator</a
        >
      </h1>
      <div class="selectCalc">
        <span class="bmiCalc calcButton">BMI Calculate</span>
        <span class="heightCalc calcButton">Height Calculate</span>
        <span class="weightCalc calcButton">Weight Calculate</span>
      </div>
      <form>
        <table>
          <tr>
            <th><label for="height">Height in CM: </label></th>
            <td><input type="text" id="height" /></td>
          </tr>
          <tr>
            <th><label for="weight">Weight in KG: </label></th>
            <td><input type="text" id="weight" /></td>
          </tr>
          <tr>
            <th><label for="bmi">BMI: </label></th>
            <td><input type="text" id="bmi" /></td>
          </tr>
        </table>
        <button>Calculate</button>
        <div id="results"></div>

        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="chaiaurcode.js"></script>
</html>

```

```javascript

// Calculating only BMI
const form = document.querySelector('form');

const bmiCalculator = document.querySelector('.bmiCalc');

bmiCalculator.addEventListener('click', function (e) {
  const bmiTag = document.querySelector('#bmiTag');
  bmiTag.style.display = 'none';
  heightTag.style.display = 'block';
  weightTag.style.display = 'block';


  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
      results.innerHTML = `<span>Enter valid value</span>`;
    }
    if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = `<span>Enter valid value</span>`;
    } else {
      const bmi = ((weight / (height * height)) * 10000).toFixed(4);
      results.innerHTML = `Your BMI is ${bmi}`;
    }
  });
});

// Calculating only HEIGHT

const heightCalculator = document.querySelector('.heightCalc');

heightCalculator.addEventListener('click', function (e) {
  const heightTag = document.querySelector('#heightTag');
  heightTag.style.display = 'none';
  bmiTag.style.display = 'block';
  weightTag.style.display = 'block';

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);
    const bmi = parseInt(document.querySelector('#bmi').value);

    if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = `<span>Enter valid value</span>`;
    } else if (bmi === '' || bmi < 0 || isNaN(bmi)) {
      results.innerHTML = `<span>Enter valid value</span>`;
    } else {
      const height = Math.sqrt((weight / bmi) * 10000).toFixed(4);
      results.innerHTML = `<span> Your height is ${height} cms`;
    }
  });
});

```

```css
    .container {
  width: 575px;
  height: 825px;

  background-color: #797978;
  padding-left: 30px;
}

table {
  margin-top: 25px;
}

#height,
#weight,
#bmi {
  width: 150px;
  height: 25px;
}

form p label,
form p input {
  border: 1px solid red;
}
#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 35px;
  margin-left: 90px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

button {
  width: 150px;
  height: 35px;
  margin-left: 90px;
  margin-top: 25px;
  background-color: #fff;
  padding: 1px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;

  font-size: 25px;
  cursor: pointer;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;
}

.selectCalc {
  width: 70%;
  display: flex;
  justify-content: space-evenly;
}

.calcButton {
  padding: 4px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

```

## Project 6 - Infinite Color

``` html
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>

    <h1>Start should change the Background color every second</h1>
    <button id="start" style="cursor: pointer">Start</button>
    <button id="stop" style="cursor: pointer">Stop</button>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```

``` javascript
  // Generating random colors

const randomColor = function () {
  const hex = '0123456789ABCDEF';

  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    // After writting intervalId = null in stopChangingColor we have to put the if condition so that the intervalId dont have null value when starting again
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null; // Here after stopping the intervalId value will be cleared and dereferenced
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

// Video 38, Time stamp 00:32:00

```
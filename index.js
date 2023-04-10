let text = 'Small steps in the right direction can turn out to be the biggest step of your life.';
let i = 0;
let speed = 100;
console.log(text.length);

function type(){
    if (i < text.length) {
        document.querySelector('.par').textContent += text.charAt(i);
        i++;
        setTimeout(type, speed)
    }
}

type();
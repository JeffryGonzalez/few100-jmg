
import './styles.css';
import { add } from './math';

const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const addBtn = document.getElementById('add');

const answer = document.getElementById('answer') as HTMLSpanElement;

addBtn.addEventListener('click', function () {
    const sum = add(num1.valueAsNumber, num2.valueAsNumber);

    answer.innerText = sum.toString();
});

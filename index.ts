// Setting
const numberStart: number = 15;
const numberEnd: number = 19;

// HTML elements
const spanStart: HTMLSpanElement = <HTMLSpanElement>document.getElementById('start');
const spanEnd: HTMLSpanElement = <HTMLSpanElement>document.getElementById('end');
const inputNumber: HTMLInputElement = <HTMLInputElement>document.getElementById('number');
const spanCount: HTMLInputElement = <HTMLInputElement>document.getElementById('count');
const btnGuess: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn-guess');
const btnReset: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btn-reset');
const paraResult: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('result');

// Biến xử lý thuật toán cho game
let numberRand: number;
let count: number = 3;
let score: number = 0;
let flag: boolean = true;

// Hàm random số bí mật
function randomNumber(): void {
  spanStart.innerHTML = String(numberStart);
  spanEnd.innerHTML = String(numberEnd);

  numberRand = Math.floor(Math.random() * (numberEnd - numberStart + 1) ) + numberStart;

  console.log(numberRand);
};

// Hàm kiểm tra số của người dùngs
function check(): void {
  const numberGuess: number = Number(inputNumber.value);
  let message: string = '';

  if (numberGuess === numberRand) { // Nếu đoán đúng
    if (count === 3) {
      score = 100;
    }
    else if (count === 2) {
      score = 50;
    }
    else {
      score = 30;
    }
  }
  else if (numberGuess < numberRand) { // Nếu đoán số nhỏ hơn
    message = 'Số của bạn nhỏ quá.';
  }
  else { // Nếu đoán số lớn hơn
    message = 'Số của bạn lớn quá.';
  }

  if (score > 0) { // Nếu đoán đúng
    message = '🎉🎉🎉 Chúc mừng bạn đã chiến thắng, với số điểm là: ' + score;
    flag = false; // Đánh dấu game dừng
  }
  else if (count == 1) { // Nếu ở lượt chơi cuối mà dự đoán sai
    message = 'Game over mất rồi. 😭';
    flag = false; // Đánh dấu game dừng
  }

  // Cập nhật số lần dự đoán
  count--;

  // Cập nhật giao diện
  spanCount.innerHTML = String(count); // Cập nhật số lượt chơi còn lại
  paraResult.innerHTML = message; // Hiển thị kết quả ra giao diện
  if (flag == false) { // Nếu game dừng
    btnGuess.style.display = 'none'; // Ẩn nút dự đoán
    btnReset.style.display = 'block'; // Hiện nút chơi lại
  }
}

// Hàm khởi động game
function reset(): void {
  randomNumber(); // Tạo số bí mật mới

  // Thiết lập lại thông số của game
  count = 3;
  score = 0;
  flag = true;

  // Cập nhật giao diện
  spanCount.innerHTML = String(count);
  paraResult.innerHTML = '';
  btnGuess.style.display = 'block'; // Hiện nút dự đoán
  btnReset.style.display = 'none'; // Ẩn nút chơi lại
}

reset();
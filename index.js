// Setting
var numberStart = 15;
var numberEnd = 19;
// HTML elements
var spanStart = document.getElementById('start');
var spanEnd = document.getElementById('end');
var inputNumber = document.getElementById('number');
var spanCount = document.getElementById('count');
var btnGuess = document.getElementById('btn-guess');
var btnReset = document.getElementById('btn-reset');
var paraResult = document.getElementById('result');
// Biến xử lý thuật toán cho game
var numberRand;
var count = 3;
var score = 0;
var flag = true;
// Hàm random số bí mật
function randomNumber() {
    spanStart.innerHTML = String(numberStart);
    spanEnd.innerHTML = String(numberEnd);
    numberRand = Math.floor(Math.random() * (numberEnd - numberStart + 1)) + numberStart;
    console.log(numberRand);
}
;
// Hàm kiểm tra số của người dùngs
function check() {
    var numberGuess = Number(inputNumber.value);
    var message = '';
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
function reset() {
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

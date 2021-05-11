/** Bài 1.1:
 * Input: Số ngày làm
 * Process:
 *   B1: Tạo hằng salaryPerDay là số tiền lương 1 ngày, biến days là số ngày làm
 *   B2: tạo biến salary là tiền lương và tính bằng lương 1 ngày nhân số ngày làm
 *   B3: In ra màn hình giá trị sau khi tính toán
 * Output: Tổng tiền lương
 */

const salaryPerDay = 100000;
var days = 5;
var salary = days * salaryPerDay;
console.log("Bài 1.1: " + salary);

/** Bài 1.2:
 * Input: 5 số thực
 * Process:
 *   B1: Tạo function avgNum với 5 tham số là 5 số thực
 *   B2: Tạo biến avg, gán cho nó tổng 5 tham số chia 5 và lấy 2 chữ số thập phân
 *   B3: function avgNum sẽ return ra giá trị avg
 *   B4: In ra màn hình giá trị sau khi tính toán
 * Output: Giá trị trung bình của 5 số
 */

function avgNum(num1, num2, num3, num4, num5) {
  let avg = ((num1 + num2 + num3 + num4 + num5) / 5).toFixed(2);
  return avg;
}

console.log("Bài 1.2: " + avgNum(1.3, 2.69, -3.3, 4, 5.1));

/** Bài 1.3:
 * Input: Tiền ở đơn vị USD
 * Process:
 *   B1: Tạo function exchangeMoney với tham số là số tiên USD người dùng nhập
 *   B2: Tạo hằng exchangeRate là tỷ lệ quy đổi, tạo biến result là giá trị sau khi đổi
 *   B3: gán biểu thức tỷ lệ quy đổi nhân với tham số ở trên cho biến result
 *   B4: trả về kết quả result
 * Output: TIền ở đơn vị VND
 */

function exchangeMoney(money) {
  const exchangeRate = 23500;
  let result;
  result = exchangeRate * money;
  return result;
}

console.log("Bài 1.3: " + exchangeMoney(5) + "VND");

/** Bài 1.4:
 * Input: Chiều dài, chiều rộng
 * Process :
 *   B1: Tạo function tính chu vi, function tính diện tích với 2 tham số chiều dài và chiều rộng
 *   B2: Trong function perimeter, tạo biến result và gán giá trị (dài + rộng)*2 cho biến
 *   B3: return reslut trong perimeter
 *   B4: Trong function area, tạo biến result và gán giá trị (dài * rộng) cho biến
 *   B5: return reslut trong area
 *   B6: Kiểm tra 2 giá trị chiều dài và chiều rộng, nếu cả 2 > 0 thì chạy function
 *       và thông báo kết quả, không thì thông báo sai giá trị
 * Output: Diện tích, Chu vi của hình chữ nhật đó
 */

function perimeter(length, width) {
  let result = (length + width) * 2;
  return result;
}
function area(length, width) {
  let result = length * width;
  return result;
}

var _length, _width;
_length = 10;
_width = 5;
console.log("Bài 1.4: ");
if (_length <= 0 || _width <= 0) console.log("Gia tri khong hop le");
else {
  console.log("Chu vi " + perimeter(_length, _width));
  console.log("Dien tich " + area(_length, _width));
}

/** Bài 1.5:
 * Input: Số có 2 chữ số
 * Process:
 *   B1: tạo function Sum với tham số là num
 *   B2: tạo biến result = 0;
 *   B3:
 *      nếu num != "" thì
 *          - lấy ra giá trị cuối cùng của num
 *          - đổi giá trị đó thành số, cộng vào biến result
 *          - sau đó giảm chiều dài của num
 *   B4: Thông báo kết quả
 * Output: Tổng 2 chữ số của số đó
 */

function sum(num) {
  let result = 0;
  while (num != "") {
    result += Number(num[num.length - 1]);
    num = num.substr(0, num.length - 1);
  }
  return result;
}

var num = "92";
console.log("Bài 1.5: " + sum(num));

// Buổi 2

/** Bài 2.1
 * Input: 3 số bất kỳ
 * Process: Dùng Quicksort
 *   - tạo 3 biến a,b,c là 3 số sẽ nhập vào
 *   - tạo mảng numbers với giá trị là các số đã nhập
 *   - gọi hàm Quicksort với tham số là (mảng numbers, vị trí 0, vị trí phần tử cuối cùng của mảng)
 *   - Tạo function Quicksort với 3 tham số (numbers, low, high):
 *        Nếu giá trị low bé hơn giá trị high thì:
 *        +tạo biến partitionIndex với giá trị là kết quả của hàm Partition (numbers, low, high);
 *        +gọi đệ quy Quicksort (numbers, low, partitionIndex - 1) và QuickSort(numbers, partitionIndex + 1, high);
 *   - Tạo function Partition với 3 tham số là numbers, low, high:
 *      + Tạo biến pivot là giá trị của phần tử ở vị trí high
 *      + Tạo biến đếm i, j;
 *      + Tạo biến lowIndex = low-1;
 *      + tạo biến trung gian để đổi giá trị đặt tên là temp
 *      + Cho j chạy từ low đến high, nếu giá trị của phần tử tại vị trí j trong mảng numbers <= pivot thì:
 *          ~ Tăng giá trị biến lowIndex lên 1
 *          ~ đổi chỗ 2 giá trị tại vị trí lowIndex và j
 *      + Đổi chỗ 2 giá trị tại vị trí lowIndex+1 và high
 *      + return ra giá trị lowIndex + 1 là giá trị vị trí chia mảng
 * Output: Dãy số đã được sắp xếp từ bé đến lớn
 */

function Partition(numbers, low, high) {
  let pivot = numbers[high];
  let j, i;
  let lowIndex = low - 1;
  let temp;

  for (j = low; j < high; j++) {
    if (numbers[j] <= pivot) {
      lowIndex++;

      temp = numbers[lowIndex];
      numbers[lowIndex] = numbers[j];
      numbers[j] = temp;
    }
  }

  temp = numbers[lowIndex + 1];
  numbers[lowIndex + 1] = numbers[high];
  numbers[high] = temp;

  return lowIndex + 1;
}

function QuickSort(numbers, low, high) {
  if (low < high) {
    var partitionIndex = Partition(numbers, low, high);
    QuickSort(numbers, low, partitionIndex - 1);
    QuickSort(numbers, partitionIndex + 1, high);
  }
}

var a, b, c, d;
a = 4;
b = -3;
c = 0;
var numbers = [a, b, c];

QuickSort(numbers, 0, numbers.length - 1);

console.log("Bài 2.1: " + numbers.toString());

/** Bài 2.2
 * Input: Giá trị người dùng chọn (anh trai, em gái, bố, mẹ, khác)
 * Process:
 *   B1: tạo 2 biết user và btn, lần lượt gọi theo id user và user__btn
 *   B2: khi xảy ra sự kiện btn được click, chạy function alertUser
 *   B3: tạo function alertUser();
 *   B4: nếu giá trị nhập là rỗng thì yêu cầu nhập lại, nếu không thì in ra
 *       thông báo xin chào người dùng
 * Output: In ra thông báo xin chào người dùng
 */

var user = document.getElementById("user");
var btn = document.getElementById("user__btn");

function alertUser() {
  if (user.value === "")
    alert("Mục người dùng không được bỏ trống, vui lòng nhập lại");
  else alert("Xin chào " + user.value.toLowerCase());
}

btn.onclick = alertUser;

/** Bài 2.3
 * Input: 3 số nguyên
 * Process:
 *   B1: Tạo 1 mảng có các phần tử là các số đã nhập ở input
 *   B2: tạo function đếm có bao nhiêu số chẵn với đối số là mảng đã tạo
 *   B3: tạo biến result = 0 để đếm số lượng số chẵn trong mảng
 *   B4: duyệt lần lượt các phần tử trong mảng, nêu có phần tử chia hết cho 2 thì result++
 *   B5: thông báo có result số chẵn, 3-result số lẻ
 * Output: In ra bao nhiêu số lẻ, bao nhiêu số chẵn
 */

var num1, num2, num3;
num1 = 3;
num2 = 0;
num3 = -2;

var numbers = [num1, num2, num3];

function countEvenNumbers(numbers) {
  let result = 0;
  numbers.forEach((num) => {
    if (num % 2 === 0) result++;
  });
  return result;
}

var result = countEvenNumbers(numbers);
console.log(
  "Có " + result + " số chẵn và " + (numbers.length - result) + " số lẻ"
);

/** Bài 2.4
 * Input: Chiều dài 3 cạnh
 * Process:
 *   B1: Tạo function khi phím button được click
 *   B2: nhận giá trị 3 cạnh từ bàn phím
 *   B3: xét các trường hợp:
 *        -không phải tam giác
 *        -tam giác
 *            +vuông
 *                ~vuông cân
 *                ~vuông
 *            +đều
 *            +cân
 *            +thường
 *                ~nhọn
 *                ~tù
 *   B4: in ra loại tam giác
 * Output: Loại tam giác
 */

var side1 = document.getElementById("rectangleSide1");
var side2 = document.getElementById("rectangleSide2");
var side3 = document.getElementById("rectangleSide3");
var recBtn = document.getElementById("recBtn");

function typeRec() {
  let _side1, _side2, _side3;
  _side1 = Number(side1.value);
  _side2 = Number(side2.value);
  _side3 = Number(side3.value);
  if (_side1 <= 0 || _side2 <= 0 || _side3 <= 0)
    alert("3 giá trị đã nhập không thể tạo thành tam giác");
  else if (
    _side1 + _side2 <= _side3 ||
    _side1 + _side3 <= _side2 ||
    _side2 + _side3 <= _side1
  )
    alert("3 giá trị đã nhập không thể tạo thành tam giác");
  else {
    if (
      _side1 ** 2 + _side2 ** 2 === _side3 ** 2 ||
      _side1 ** 2 + _side3 ** 2 === _side2 ** 2 ||
      _side2 ** 2 + _side3 ** 2 === _side1 ** 2
    ) {
      if (_side1 === _side2 || _side2 === _side3 || _side1 === _side3)
        alert("Tam giác vuông cân");
      else alert("Tam giác vuông");
    } else if (_side1 === _side2 && _side2 === _side3) alert("Tam giác đều");
    else if (_side1 === _side2 || _side2 === _side3 || _side1 === _side3)
      alert("Tam giác cân");
    else {
      if (
        Math.acos(
          (_side2 ** 2 + _side3 ** 2 - _side1 ** 2) / (2 * _side2 * _side3)
        ) <
          Math.PI / 2 &&
        Math.acos(
          (_side1 ** 2 + _side3 ** 2 - _side2 ** 2) / (2 * _side1 * _side3)
        ) <
          Math.PI / 2 &&
        Math.acos(
          (_side1 ** 2 + _side2 ** 2 - _side3 ** 2) / (2 * _side1 * _side2)
        ) <
          Math.PI / 2
      )
        alert("Tam giác nhọn");
      else alert("Tam giác tù");
    }
  }
}

recBtn.onclick = typeRec;

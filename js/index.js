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

function alertUserHandle() {
  if (user.value === "")
    alert("Mục người dùng không được bỏ trống, vui lòng nhập lại");
  else alert("Xin chào " + user.value.toLowerCase());
}

btn.onclick = alertUserHandle;

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
  "Bài 2.3: " +
    "Có " +
    result +
    " số chẵn và " +
    (numbers.length - result) +
    " số lẻ"
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

function alertTypeRecHandle() {
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

recBtn.onclick = alertTypeRecHandle;

/** Bài 2.1*
 * Input:  Ngày, tháng, năm
 * Process:
 *   B1: Tạo 3 biến _day, _month, _year để nhận 3 giá trị nhập từ bàn phím
 *   B2: dùng switch case để xét các trường họp
 *        - tháng 1,3,5,7,8,10
 *        - tháng 12
 *        - tháng 4,6,9,11
 *        - tháng 2;
 *   B3: trong mỗi case xét tiếp  _day có phải là
 *       ngày cuối cùng của tháng hay không rồi tính toán
 *   B4: In ra giá trị sau khi tính toán
 * Output: ngày kế tiếp của ngày đã nhập
 */

var date = document.getElementById("date");
var dateBtn = document.getElementById("dateBtn");

function alertNextDateHandle() {
  let _date = date.value.toString();
  let _day = Number(_date.substr(_date.lastIndexOf("-") + 1));
  _date = _date.substr(0, _date.lastIndexOf("-"));
  let _month = Number(_date.substr(_date.lastIndexOf("-") + 1));
  _date = _date.substr(0, _date.lastIndexOf("-"));
  let _year = Number(_date);

  switch (_month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      if (_day === 31) {
        _day = 1;
        _month++;
      } else _day++;
      break;
    case 12:
      if (_day === 31) {
        _day = 1;
        _month = 1;
        _year++;
      } else _day++;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (_day === 30) {
        _day = 1;
        _month++;
      } else _day++;
      break;
    case 2:
      if (_year % 100 === 0 && _year % 400 !== 0) {
        if (_day === 28) {
          _day = 1;
          _month++;
        } else _day++;
      } else if (_year % 4 === 0) {
        if (_day === 29) {
          _day = 1;
          _month++;
        } else _day++;
      } else {
        if (_day === 28) {
          _day = 1;
          _month++;
        } else _day++;
      }
  }
  alert(_day + "/" + _month + "/" + _year);
}

dateBtn.onclick = alertNextDateHandle;

/** Bài 2.2
 * Input: tháng, năm nhập từ bàn phím
 * Process:
 *   B1: Tạo 3 biến _day, _month, _year để nhận 3 giá trị nhập từ bàn phím
 *   B2: dùng switch case để xét các trường họp
 *          - Tháng 1,3,5,7,8,10,12
 *          - Tháng 2
 *          - Tháng 4,6,9,11
 *   B3: In ra số ngày trong tháng
 * Output: ngày trong tháng
 */

var monthYear = document.getElementById("monthYear");
var monthYearBtn = document.getElementById("monthYearBtn");

function countDays() {
  let _monthYear = monthYear.value.toString();
  let _month = Number(_monthYear.substr(_monthYear.lastIndexOf("-") + 1));
  _monthYear = _monthYear.substr(0, _monthYear.lastIndexOf("-"));
  let _year = Number(_monthYear);
  switch (_month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert("31");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert("30");
      break;
    case 2:
      if (_year % 100 === 0 && _year % 400 !== 0) {
        alert("28");
      } else if (_year % 4 === 0) {
        alert("29");
      } else {
        alert("28");
      }
      break;
  }
}

monthYearBtn.onclick = countDays;

/** Bài 2.3
 *
 */

var readNum = document.getElementById("readNum");
var readNumBtn = document.getElementById("readNumBtn");

function readNumHandle() {
  let num = Number(readNum.value);
  let result = "";
  switch (num % 10) {
    case 1:
      result = "một" + result;
      break;
    case 2:
      result = "hai" + result;
      break;
    case 3:
      result = "ba" + result;
      break;
    case 4:
      result = "bốn" + result;
      break;
    case 5:
      result = "năm" + result;
      break;
    case 6:
      result = "sáu" + result;
      break;
    case 7:
      result = "bảy" + result;
      break;
    case 8:
      result = "tám" + result;
      break;
    case 9:
      result = "chín" + result;
      break;
  }
  num = Math.floor(num / 10);
  switch (num % 10) {
    case 0:
      if (Number(readNum.value) % 100 !== 0) result = "lẻ " + result;
      break;
    case 1:
      result = "mười " + result;
      break;
    case 2:
      result = "hai mươi " + result;
      break;
    case 3:
      result = "ba mươi " + result;
      break;
    case 4:
      result = "bốn mươi " + result;
      break;
    case 5:
      result = "năm mươi " + result;
      break;
    case 6:
      result = "sáu mươi " + result;
      break;
    case 7:
      result = "bảy mươi " + result;
      break;
    case 8:
      result = "tám mươi " + result;
      break;
    case 9:
      result = "chín mươi " + result;
      break;
  }
  num = Math.floor(num / 10);
  switch (num) {
    case 0:
      if (Number(readNum.value) % 100 !== 0) result = "lẻ " + result;
      break;
    case 1:
      result = "Một trăm " + result;
      break;
    case 2:
      result = "Hai trăm " + result;
      break;
    case 3:
      result = "Ba trăm " + result;
      break;
    case 4:
      result = "Bốn trăm " + result;
      break;
    case 5:
      result = "Năm trăm " + result;
      break;
    case 6:
      result = "Sáu trăm " + result;
      break;
    case 7:
      result = "Bảy trăm " + result;
      break;
    case 8:
      result = "Tám trăm " + result;
      break;
    case 9:
      result = "Chín trăm " + result;
      break;
  }
  alert(result);
}

readNumBtn.onclick = readNumHandle;

/** Bài 2.4
 *  Input: Tọa độ trường và 3 học sinh
 *  Process:
 *    B1: Tạo các biến để nhận các giá trị tọa độ
 *    B2: Tạo biến maxDistance và maxDistanceStu để lưu trữ học sinh có nhà cách xa nhất và khoảng cách
 *    B3: Mặc định gán cho học sinh 1 nhà xa nhất, lần lượt so sánh với hs 2 và 3.
 *    B4: In ra học sinh có khoảng cách từ nhà đến trường xa nhất
 *  Output: Học sinh có nhà cách trường xa nhất
 */

var distanceBtn = document.getElementById("distanceBtn");
var schoolX = document.getElementById("schoolX");
var schoolY = document.getElementById("schoolY");
var st1X = document.getElementById("st1X");
var st1Y = document.getElementById("st1Y");
var st2X = document.getElementById("st2X");
var st2Y = document.getElementById("st2Y");
var st3X = document.getElementById("st3X");
var st3Y = document.getElementById("st3Y");

function calcDistance() {
  let _schoolX = Number(schoolX.value);
  let _schoolY = Number(schoolY.value);
  let _st1X = Number(st1X.value);
  let _st1Y = Number(st1Y.value);
  let _st2X = Number(st2X.value);
  let _st2Y = Number(st2Y.value);
  let _st3X = Number(st3X.value);
  let _st3Y = Number(st3Y.value);
  let maxDistance = Math.sqrt(
    (_st1X - _schoolX) ** 2 + (_st1Y - _schoolY) ** 2
  );
  let maxDistanceStu = 1;
  if (
    maxDistance < Math.sqrt((_st2X - _schoolX) ** 2 + (_st2Y - _schoolY) ** 2)
  ) {
    maxDistance = Math.sqrt((_st2X - _schoolX) ** 2 + (_st2Y - _schoolY) ** 2);
    maxDistanceStu = 2;
  }
  if (
    maxDistance < Math.sqrt((_st3X - _schoolX) ** 2 + (_st3Y - _schoolY) ** 2)
  ) {
    maxDistance = Math.sqrt((_st3X - _schoolX) ** 2 + (_st3Y - _schoolY) ** 2);
    maxDistanceStu = 3;
  }
  alert("Học sinh " + maxDistanceStu + " nhà cách trường xa nhất");
}

distanceBtn.onclick = calcDistance;

// Buổi 3

/** Bài 3.1: Quản lý tuyển sinh
 * Input: Điểm chuẩn, điểm 3 môn, khu vực, đối tượng dự thi
 * Process:
 *    B1: Tạo các biến để gán giá trị điểm chuẩn, điểm 3 môn, khu vực,
 *      đối tượng, tổng điểm, kết quả
 *    B2: Tính tổng điểm
 *    B3: So sánh với điểm chuẩn
 *    B4: In ra tổng điểm và kết quả
 * Output: kết quả, tổng điểm
 */

var checkMarkBtn = document.getElementById("checkMarkBtn");
var baseMark = document.getElementById("baseMark");
var mark1 = document.getElementById("mark1");
var mark2 = document.getElementById("mark2");
var mark3 = document.getElementById("mark3");
var studentArea = document.getElementById("studentArea");
var studentObject = document.getElementById("studentObject");
var markAndResult = document.getElementById("markAndResult");
var result = document.getElementById("result");
var totalMark = document.getElementById("totalMark");

function checkMark() {
  let _baseMark = Number(baseMark.value);
  let _mark1 = Number(mark1.value);
  let _mark2 = Number(mark2.value);
  let _mark3 = Number(mark3.value);
  let _studentArea = studentArea.value;
  let _studentObject = studentObject.value;
  let _totalMark = 0;

  _totalMark = _mark1 + _mark2 + _mark3;

  if (_studentArea === "A") _totalMark += 2;
  else if (_studentArea === "B") _totalMark += 1;
  else if (_studentArea === "C") _totalMark += 0.5;

  if (_studentObject === "1") _totalMark += 2.5;
  else if (_studentObject === "2") _totalMark += 1.5;
  else if (_studentObject === "3") _totalMark += 1;

  totalMark.innerHTML = _totalMark;

  if (_totalMark < _baseMark) result.innerHTML = "Rớt";
  else result.innerHTML = "Đậu";

  markAndResult.style.display = "initial";
}

checkMarkBtn.onclick = checkMark;

/** Bài 3.2: Tính tiền điện
 * Input: Tên, Số điện
 * Process:
 *    B1:Tạo biến để nhập số điện, tạo biến tổng tiền
 *    B2: Tính toán số tiền điện
 *     if >350; if >200; if >100; if >50;
 *    B3: in ra kết quả
 * Output: Số tiền điện
 */

var elecUserName = document.getElementById("elecUserName");
var elecNumber = document.getElementById("elecNumber");
var totalElecMoney = document.getElementById("totalElecMoney");
var elec__name = document.getElementById("elec__name");
var calcElecBtn = document.getElementById("calcElecBtn");
var reslutCalcElecMoney = document.getElementById("reslutCalcElecMoney");
function calcElecMoney() {
  var _totalElecMoney = 0;
  var _elecNumber = Number(elecNumber.value);
  if (_elecNumber > 350) {
    _totalElecMoney += 1300 * (_elecNumber - 350);
    _elecNumber = 350;
  }
  if (_elecNumber > 200) {
    _totalElecMoney += 1100 * (_elecNumber - 200);
    _elecNumber = 200;
  }
  if (_elecNumber > 100) {
    _totalElecMoney += 850 * (_elecNumber - 100);
    _elecNumber = 100;
  }
  if (_elecNumber > 50) {
    _totalElecMoney += 650 * (_elecNumber - 50);
    _elecNumber = 50;
  }
  _totalElecMoney += 500 * _elecNumber;

  elec__name.innerHTML = elecUserName.value;
  elec__name.style.textTransform = "capitalize";
  totalElecMoney.innerHTML = _totalElecMoney;
  reslutCalcElecMoney.style.display = "initial";
}

calcElecBtn.onclick = calcElecMoney;

/** Bài 3.3: Tính thuế thu nhập cá nhân
 * Input: Họ tên, Tổng thu nhập năm, số người phụ thuộc
 * Process:
 *   B1: Tạo các biến để lưu lương 1 năm, số người phụ thuộc, tổng lương.
 *   B2: Tính thu nhập chịu thuế khi chưa nhân với thuế suất
 *   B3: Với từng trường hợp lương 1 năm khác nhau thì nhân với thuế suất khác nhau;
 *        dùng if
 *   B4: In ra thu nhập chịu thuế
 * Output: Thuế thu nhập cá nhân
 */

var tax__name = document.getElementById("tax__name");
var calcTaxBtn = document.getElementById("calcTaxBtn");
var salaryPerYear = document.getElementById("salaryPerYear");
var peopleDepend = document.getElementById("peopleDepend");
var reslutCalcTax = document.getElementById("reslutCalcTax");
var totalTax = document.getElementById("totalTax");

function calcTax() {
  let _salaryPerYear = Number(salaryPerYear.value);
  let _peopleDepend = Number(peopleDepend.value);
  let _totalTax = 1;
  _totalTax *= _salaryPerYear - 4 - 1.6 * _peopleDepend;
  if (_salaryPerYear > 960) _totalTax *= 0.35;
  else if (_salaryPerYear > 624) _totalTax *= 0.3;
  else if (_salaryPerYear > 384) _totalTax *= 0.25;
  else if (_salaryPerYear > 210) _totalTax *= 0.2;
  else if (_salaryPerYear > 120) _totalTax *= 0.15;
  else if (_salaryPerYear > 60) _totalTax *= 0.1;
  else _totalTax *= 0.05;

  tax__name.innerHTML = document.getElementById("taxName").value;
  tax__name.style.textTransform = "capitalize";
  totalTax.innerHTML = _totalTax.toFixed(2) + "  triệu";
  reslutCalcTax.style.display = "initial";
}

calcTaxBtn.onclick = calcTax;

/** Bài 3.4: Tính tiền cáp
 * Input: mã khách hàng, loại khách hàng, số kết nối, số kênh cao cấp
 * Output: tiền cáp
 */

var calcCableMoneyBtn = document.getElementById("calcCableMoneyBtn");
var cableCustomerID = document.getElementById("cableCustomerID");
var typeOfCustomer = document.getElementById("typeOfCustomer");
var numbersOfCable = document.getElementById("numbersOfCable");
var premiumCable = document.getElementById("premiumCable");
var numbersOfCableActive = document.getElementById("numbersOfCableActive");
var resultCalcCableMoney = document.getElementById("resultCalcCableMoney");
var totalCableMoney = document.getElementById("totalCableMoney");


resultCalcCableMoney.style.display = "none";
typeOfCustomer.onchange = function () {
  if (this.value === "E") numbersOfCableActive.style.display = "flex";
  else numbersOfCableActive.style.display = "none";
};

function calcCableMoney() {
  var _totalCableMoney = 0;
  var _numbersOfCable = Number(numbersOfCable.value);
  var _premiumCable = Number(premiumCable.value);

  if (typeOfCustomer.value === "P")
    _totalCableMoney += 25 + 7.5 * _numbersOfCable + 7.5 * _premiumCable;
  else {
    if (_numbersOfCable < 10)
    {
     alert("Vui lòng nhập số kết nối lớn hơn 10");
    }
    else {
      _totalCableMoney += 90 + 5 * (_numbersOfCable - 10);
    }
    _totalCableMoney += 50 * _premiumCable;
  }
  totalCableMoney.innerHTML = _totalCableMoney.toLocaleString();
  resultCalcCableMoney.style.display = "initial";
}

calcCableMoneyBtn.onclick = calcCableMoney;

/* 
    Block 1: Input 
    tienLuongMotNgay,
    soNgayLam

    Block 2: Các bước xử lý
        B1: Khai báo biến lưu trữ tiền lương một ngày và số ngày làm của nhân viên
        B2: Công thức tính toán
        tienLuongMotNgay * soNgayLam
        B3: Hiển thị kết quả
    
    Block 3: Output
    tongTienLuong
*/

function tinhTienLuong() {
  var tienLuongMotNgay = document.getElementById("luongMotNgay").value;
  var soNgayLam = document.getElementById("soNgay").value;
  var tongTienLuong = 0;

  tongTienLuong = tienLuongMotNgay * soNgayLam;

  document.getElementById("txtTienLuong").innerHTML =
    "<br> Tiền lương của bạn là: " + tongTienLuong;
}

/* -------------------------------- */

/* 
    Block 1: Input
    1 USD = 23.500 VND;
    usdToVnd (giả sử là 3 USD sẽ bằng 70.500)

    Block 2:
    B1: Khởi tạo biến lưu trữ USD và VND
    USD, VND
    B2: Lập công thức chuyển đổi từ USD sang VND
    usdToVnd = USD * VND;
    
    Block 3: Output
    usdToVnd (Tiền sau khi quy đổi)
*/

function quyDoiTienTe() {
  var USD = document.getElementById("txtUSD").value;
  var VND = document.getElementById("txtVND").value;
  var usdToVnd = 0;

  usdToVnd = USD * VND;

  document.getElementById("txtQuyDoi").innerHTML =
    "<br> Số tiền sau khi quy đổi từ " +
    USD +
    " USD " +
    "sang VND" +
    " là: " +
    usdToVnd.toLocaleString();
}

/* -------------------------------- */

/* 
    Block 1: Input
    chiều dài và chiều rộng của hình chữ nhật   (giả sử chiều dài là 15cm và chiều rộng là 10cm)
  
    Block 2:
    B1: Khởi tạo biến lưu trữ chiều dài và chiều rộng của hình chữ nhật
    B2: Lập công thức tính chu vi và diện tích HCN
    Diện tích = dài * rộng
    Chu vi = (dài + rộng) * 2;
    B3: Hiển thị kết quả

    Block 3: Output
    Diện tích và chu vi
*/

function tinhChuViDienTichHCN() {
  var chieuDai = document.getElementById("txtChieuDai").value;
  var chieuRong = document.getElementById("txtChieuRong").value;
  var dienTich = 0;
  var chuVi = 0;

  dienTich = chieuDai * chieuRong;
  chuVi = chieuDai * chieuRong * 2;

  document.getElementById("txtHCN").innerHTML =
    "<br> Diện tích hình chữ nhật là: " +
    dienTich +
    "<br>" +
    "Chu vi hình chữ nhật là: " +
    chuVi;
}

/* -------------------------------- */

/* 
    Block 1: Input
    cho 1 số có 2 chữ số (24)

    Block 2: 
    B1: Khai báo biến lưu trữ cho số đã cho trước
    num, ten, unit, total
    B2: Lập công thức tính tổng 2 ký số
    ten = Math.floor(num / 10) => 2
    unit = num % 10 => 4
    B3: Tính tổng
    total = ten + unit;
    B4: Hiển thị kết quả

    Block 3: Output
    total (Tổng của 2 ký số)
*/

// var num = 24;
// var ten = 0;
// var unit = 0;
// var total = 0;

// ten = Math.floor(num / 10);
// unit = num % 10;

// total = ten + unit;

// console.log("Tổng của 2 ký số là: " + total);

function tinhTong2KySo() {
  var num = document.getElementById("number").value;
  var ten = 0;
  var unit = 0;
  var total = 0;

  ten = Math.floor(num / 10);
  unit = num % 10;

  total = ten + unit;

  document.getElementById("txtResult").innerHTML =
    "<br> Tổng của 2 ký số là: " + total;
}

function sapXepSo() {
  var num1 = Number(document.getElementById("number1").value);
  var num2 = Number(document.getElementById("number2").value);
  var num3 = Number(document.getElementById("number3").value);

  if (num1 >= num2 && num1 >= num3 && num2 >= num3) {
    document.getElementById("txtSapXep").innerHTML =
      "<br>Thứ tự từng số là: " + num1 + num2 + num3;
  } else if (num1 >= num2 && num1 >= num3 && num3 >= num2) {
    document.getElementById("txtSapXep").innerHTML =
      "<br>Thứ tự từng số là: " + num1 + num3 + num2;
  } else if (num2 >= num1 && num2 >= num3 && num1 >= num3) {
    document.getElementById("txtSapXep").innerHTML =
      "<br>Thứ tự từng số là: " + num2 + num1 + num3;
  } else if (num2 >= num1 && num2 >= num3 && num3 >= num1) {
    document.getElementById("txtSapXep").innerHTML =
      "<br>Thứ tự từng số là: " + num2 + num3 + num1;
  } else if (num3 >= num1 && num3 >= num2 && num2 >= num1) {
    document.getElementById("txtSapXep").innerHTML =
      "<br>Thứ tự từng số là: " + num3 + num2 + num1;
  } else {
    document.getElementById("txtSapXep").innerHTML =
      "<br>Thứ tự từng số là: " + num3 + num1 + num2;
  }
}

/* -------------------------------- */

function thanhVienGiaDinh() {
  var tagP = document.getElementById("txtGiaDinh");
  var change = document.querySelector("#txtChange");
  tagP.innerHTML = change.value;
}

/* -------------------------------- */

function xuatChanLe() {
  var num1 = Number(document.getElementById("txtNumber1").value);
  var num2 = Number(document.getElementById("txtNumber2").value);
  var num3 = Number(document.getElementById("txtNumber3").value);

  if (num1 % 2 == 0 && num2 % 2 == 0 && num3 % 2 == 0) {
    document.getElementById("txtChanLe").innerHTML =
      "<br>Có tất cả là 3 số chẵn" + "<br> Và 0 số lẻ";
  } else if (
    (num1 % 2 == 0 && num2 % 2 == 0) ||
    (num1 % 2 == 0 && num3 % 2 == 0) ||
    (num2 % 2 == 0 && num3 % 2 == 0)
  ) {
    document.getElementById("txtChanLe").innerHTML =
      "<br>Có tất cả là 2 số chẵn" + "<br> Và 1 số lẻ";
  } else if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    document.getElementById("txtChanLe").innerHTML =
      "<br>Có tất cả là 1 số chẵn" + "<br> Và 2 số lẻ";
  } else if (num1 % 2 != 0 && num2 % 2 != 0 && num3 % 2 != 0) {
    document.getElementById("txtChanLe").innerHTML =
      "<br>Có tất cả là 0 số chẵn" + "<br> Và 3 số lẻ";
  } else {
    "<br>Có tất cả là 0 số chẵn" + "<br> Và 3 số lẻ";
  }
}

/* -------------------------------- */

function xacDinhLoaiTamGiac() {
  var num1 = Number(document.getElementById("txtNumber4").value);
  var num2 = Number(document.getElementById("txtNumber5").value);
  var num3 = Number(document.getElementById("txtNumber6").value);

  if (num1 == num2 && num1 == num3 && num2 == num3) {
    document.getElementById("txtTamGiac").innerHTML = "Là tam giác đều";
  } else if (num1 == num2 || num1 == num3 || num2 == num3) {
    document.getElementById("txtTamGiac").innerHTML = "Là tam giác cân";
  } else if (2 * num3 == 2 * (num1 + num2)) {
    document.getElementById("txtTamGiac").innerHTML = "Là tam giác vuông";
  } else {
    document.getElementById("txtTamGiac").innerHTML = "Tam giác khác";
  }
}

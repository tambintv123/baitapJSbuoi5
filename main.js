const result = document.getElementById("result");

const diemUuTien = (diemKhuVuc, diemDoiTuong) => {
  return diemDoiTuong + diemKhuVuc;
};

const diemTong = (diem1, diem2, diem3, diemUuTien) => {
  return diem1 + diem2 + diem3 + diemUuTien;
};

const ketQua = (diemTong, diemChuan, diem1, diem2, diem3) => {
  if (diemTong >= diemChuan && diem1 != 0 && diem2 != 0 && diem3 != 0) {
    result.innerHTML = `Dau voi so diem la ${diemTong}`;
  } else {
    result.innerHTML = `Rot voi so diem la ${diemTong}`;
  }
};

document.getElementById("btnTest").onclick = () => {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let diem1 = document.getElementById("diem-1").value * 1;
  let diem2 = document.getElementById("diem-2").value * 1;
  let diem3 = document.getElementById("diem-3").value * 1;

  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = document.getElementById("doiTuong").value;

  let temp1 = 0;
  switch (khuVuc) {
    case "A": {
      temp1 = 2;
      break;
    }
    case "B": {
      temp1 = 1;
      break;
    }
    case "C": {
      temp1 = 0.5;
      break;
    }
    case "X": {
      temp1 = 0;
      break;
    }
    default:
      break;
  }

  let temp2 = 0;
  switch (doiTuong) {
    case "1": {
      temp2 = 2.5;
      break;
    }
    case "2": {
      temp2 = 1.5;
      break;
    }
    case "3": {
      temp2 = 1;
      break;
    }
    case "0": {
      temp2 = 0;
      break;
    }
    default:
      break;
  }
  let diemUT = diemUuTien(temp1, temp2);

  let diemTongKet = diemTong(diem1, diem2, diem3, diemUT);

  if (
    diem1 >= 0 &&
    diem1 <= 10 &&
    diem2 >= 0 &&
    diem2 <= 10 &&
    diem3 >= 0 &&
    diem3 <= 10
  ) {
    ketQua(diemTongKet, diemChuan, diem1, diem2, diem3);
  } else {
    alert("nhap diem khong hop le");
  }
};

// baii 2 tinh tien dien

const KW = 500; // tức là 0 tới 50
const KW_50 = 650; // tức là 51 tới 100
const KW_100 = 850; // tức là 101 tới 200
const KW_200 = 1100; // tức là 201 tới 350
const KW_PLUS = 1300; // tức là từ 351 trở đi
const BILL_50 = 50 * KW; // Tổng tiền khi 50
const BILL_100 = BILL_50 + 50 * KW_50; // Tổng tiền khi 100
const BILL_200 = BILL_100 + 100 * KW_100; // Tổng tiền khi 200
const BILL_PLUS = BILL_200 + 150 * KW_200; // Tổng tiền khi 350
//format tien te
const formatVND = new Intl.NumberFormat("vn-VN").format;

//tinh tien
const tienDien = (kw) => {
  let result;
  if (kw > 0 && kw < 51) result = kw * KW;
  else if (kw > 50 && kw < 101) result = (kw - 50) * KW_50 + BILL_50;
  else if (kw > 100 && kw < 201) result = (kw - 100) * KW_100 + BILL_100;
  else if (kw > 200 && kw < 351) result = (kw - 200) * KW_200 + BILL_200;
  else if (kw > 350) result = (kw - 350) * KW_PLUS + BILL_PLUS;
  else result = "đơn lỗi. Vui lòng nhập đúng số kw đã xài nhé!!!";
  return result;
};
const test = document.getElementById("result-1");

document.getElementById("btnCalculate").onclick = () => {
  let soKw = document.getElementById("soKw").value * 1;
  let name = document.getElementById("name").value;

  test.innerHTML = `Tong tien dien cua ${name} la: ${formatVND(
    tienDien(soKw)
  )}`;
};

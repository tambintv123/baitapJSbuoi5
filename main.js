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

const Calculate = (soKw) => {
  let money;
  if (soKw >= 0 && soKw <= 50) {
    return (money = 500);
  } else if (soKw > 50 && soKw <= 100) {
    return (money = 650);
  } else if (soKw > 100 && soKw <= 200) {
    return (money = 850);
  } else if (soKw > 200 && soKw <= 350) {
    return (money = 1100);
  } else {
    return (money = 1300);
  }
};

const result_1 = document.getElementById("result-1");

document.getElementById("btnCalculate").onclick = () => {
  let soKw = document.getElementById("soKw").value * 1;
  let name = document.getElementById("name").value;

  let total = soKw * Calculate(soKw);

  result_1.innerHTML = `Tong tien dien cua ${name} la: ${total} dong`;
};

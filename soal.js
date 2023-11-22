var soal1 = prompt("1. 1 + 1:");
var poin = 0;

if (soal1 == 2) {
  poin += 1;
  alert(`jawaban anda benar, poin anda sekarang ${poin}`);
  var soal2 = prompt("ibu kota indonesia adalah:");
  if (soal2 == "jakarta") {
    poin += 1;
    alert(`jawaban anda benar, poin anda sekarang ${poin}`);
    var soal3 = prompt("3. 4 + 5:");
    if (soal3 == 9) {
      poin += 1;
      alert(`jawaban anda benar, poin anda sekarang ${poin}`);
    } else {
      poin += 0;
      alert(`jawaban salah poin anda adalah, ${poin}`);
    }
  } else {
    poin += 0;
    alert(`jawaban salah poin anda adalah, ${poin}`);
  }
} else {
  poin += 0;
  alert(`jawaban salah poin anda adalah, ${poin}`);
}

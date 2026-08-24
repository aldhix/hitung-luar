const panjangInput = document.getElementById("panjang");
const lebarInput = document.getElementById("lebar");
const luasOutput = document.getElementById("luas");
const hitungButton = document.getElementById("hitungLuas");

hitungButton.addEventListener("click", () => {
	const panjang = Number(panjangInput.value);
	const lebar = Number(lebarInput.value);

	if (panjangInput.value.trim() === "" || lebarInput.value.trim() === "" ||
		!Number.isFinite(panjang) || !Number.isFinite(lebar) || panjang < 0 || lebar < 0) {
		luasOutput.textContent = "Masukkan angka yang valid";
		return;
	}

	luasOutput.textContent = panjang * lebar;
});

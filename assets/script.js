let tombolMenu = document.getElementById('tombol-menu');
let menuKanan = document.querySelector('.menu-kanan');
tombolMenu.addEventListener('click', function () {
    menuKanan.classList.toggle('block');
});

window.addEventListener('resize', function () {
    let cekWidth = window.innerWidth;
    // console.log(cekWidth);
    if (cekWidth > 820) {
        menuKanan.classList.remove('block');
        // console.log("OCOC");
    }
})
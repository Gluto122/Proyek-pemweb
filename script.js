let halaman = 0;
let poin = parseInt(localStorage.getItem("poin")) || 0;
let isVIP = localStorage.getItem("vip") === "true";

const isiHalaman = [
    "Halaman 1: Ini adalah awal cerita buku.",
    "Halaman 2: Cerita berlanjut lebih dalam.",
    "Halaman 3: Cerita mendekati klimaks.",
    "Halaman 4: Ini adalah akhir cerita."
];

function mulaiBaca() {
    const url = new URL(window.location.href);
    const judul = url.searchParams.get("judul");
    document.getElementById("judulBuku").innerText = "Baca: " + judul;
    tampilkanHalaman();
}

function tampilkanHalaman() {
    document.getElementById("isiBuku").innerText = isiHalaman[halaman];
    tampilkanPopup();
    tambahPoin(10);
}

function berikutnya() {
    if (halaman < isiHalaman.length - 1) {
        halaman++;
        tampilkanHalaman();
    } else {
        alert("Selesai membaca buku!");
    }
}

function sebelumnya() {
    if (halaman > 0) {
        halaman--;
        tampilkanHalaman();
    }
}

function tampilkanPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(() => popup.style.display = "none", 1500);
}

function tambahPoin(jumlah) {
    poin += jumlah;
    localStorage.setItem("poin", poin);
    console.log("Poin sekarang: " + poin);
}

function upgradeVip() {
    if (poin >= 30) {
        alert("Selamat! Kamu telah menjadi VIP!");
        localStorage.setItem("vip", "true");
    } else {
        alert("Butuh 30 poin untuk upgrade VIP. Poinmu sekarang: " + poin);
    }
}

function lihatPoin() {
    alert("Poinmu saat ini: " + poin + (isVIP ? " (VIP)" : " (Biasa)"));
}

function cekVIP() {
    isVIP = localStorage.getItem("vip") === "true";
}
const semuaBuku = [
    {
        judul: "Moby Dick",
        pengarang: "Herman Melville",
        gambar: "https://www.gutenberg.org/cache/epub/174/pg174.cover.medium.jpg"
    },
    {
        judul: "Frankenstein",
        pengarang: "Mary Shelley",
        gambar: "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg"
    },
    {
        judul: "Alice in Wonderland",
        pengarang: "Lewis Carroll",
        gambar: "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg"
    },
    {
        judul: "The Picture of Dorian Gray",
        pengarang: "Oscar Wilde",
        gambar: "https://www.gutenberg.org/cache/epub/174/pg174.cover.medium.jpg"
    },
    {
        judul: "Little Women",
        pengarang: "Louisa May Alcott",
        gambar: "https://www.gutenberg.org/cache/epub/514/pg514.cover.medium.jpg"
    },
    {
        judul: "Dracula",
        pengarang: "Bram Stoker",
        gambar: "https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg"
    }
];

function muatSemuaBuku() {
    // Tidak perlu apa-apa untuk sekarang, data sudah tersedia di atas.
}

function cariBuku() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const hasilDiv = document.getElementById("hasilPencarian");
    hasilDiv.innerHTML = "";

    if (input === "") return;

    const hasil = semuaBuku.filter(b =>
        b.judul.toLowerCase().includes(input) ||
        b.pengarang.toLowerCase().includes(input)
    );

    if (hasil.length === 0) {
        hasilDiv.innerHTML = "<p>Tidak ditemukan.</p>";
        return;
    }
}
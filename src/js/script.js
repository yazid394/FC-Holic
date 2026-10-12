const NOMOR_ADMIN = "6281517232689";

const form = document.getElementById("form-kontak");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const telepon = document.getElementById("telepon").value.trim();
        const subjek = document.getElementById("subjek").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        if (!nama || !pesan) {
            alert("Nama dan Pesan wajib diisi.");
            return;
        }

        const teks =
            `Halo Admin, saya ingin menghubungi Anda.\n\n` +
            `*Nama:* ${nama}\n` +
            `*Email:* ${email || "-"}\n` +
            `*No. Telepon:* ${telepon || "-"}\n` +
            `*Keperluan:* ${subjek || "-"}\n\n` +
            `*Pesanan:*\n${pesan}`;

        const url = `https://wa.me/${NOMOR_ADMIN}?text=${encodeURIComponent(teks)}`;
        window.open(url, "_blank");
    });
}

const nav = document.querySelector(".site-nav");
const onScroll = () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in");
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
} else {
    reveals.forEach((el) => el.classList.add("in"));
}
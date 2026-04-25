function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');

    sections.forEach(section => {
        section.classList.add('hidden');
    });

    document.getElementById(sectionId).classList.remove('hidden');
}

let skor = 0;

function cekJawaban(status) {
    if(status === 'Benar') {
        skor = 100;
        document.getElementById('hasil').innerHTML =
        "🎉 Jawaban Benar! Skor Kamu: " + skor;
    } else {
        skor = 0;
        document.getElementById('hasil').innerHTML =
        "❌ Jawaban Salah! Skor Kamu: " + skor;
    }
}

function bukaMateri() {
    document.getElementById('konten').innerHTML = `
        <div style="text-align: left; animation: fadeIn 0.5s;">
            <h3 style="color: #2980b9;">Apa itu Osifikasi?</h3>
            <p>Osifikasi adalah proses pembentukan tulang keras dari tulang rawan atau jaringan ikat.</p>
            <hr>
            <h4>Jenis Osifikasi:</h4>
            <ul>
                <li><b>Intramembran:</b> Langsung dari jaringan ikat (contoh: tulang tengkorak).</li>
                <li><b>Endokondral:</b> Dari tulang rawan hialin (contoh: tulang pipa/lengan).</li>
            </ul>
            <p><i>💡 Klik "Mulai Kuis" untuk tes pemahamanmu!</i></p>
        </div>
    `;
}

function bukaQuiz() {
    document.getElementById('konten').innerHTML = `
        <div style="animation: fadeIn 0.5s;">
            <h3>Kuis Kilat ⚡</h3>
            <p>Sel yang berfungsi sebagai <b>pembentuk</b> tulang baru adalah...</p>
            <button class="quiz-opt" onclick="cek(true)">A. Osteoblas</button>
            <button class="quiz-opt" onclick="cek(false)">B. Osteoklas</button>
            <button class="quiz-opt" onclick="cek(false)">C. Osteosit</button>
            <div id="hasil" style="margin-top: 15px; font-weight: bold;"></div>
        </div>
    `;
}

function cek(benar) {
    const hasil = document.getElementById('hasil');
    if(benar) {
        hasil.innerHTML = "<span style='color: green;'>✅ Benar! Osteoblas adalah pembangun.</span>";
    } else {
        hasil.innerHTML = "<span style='color: red;'>❌ Salah! Osteoklas itu perombak.</span>";
    }
}

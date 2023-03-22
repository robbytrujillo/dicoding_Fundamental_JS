// Konsep-Konsep Functional Programming
//=====================================

// Pure Function : konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya.
//----------------------------------------------------------------------------------------------------------------------------------------------------------

let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
    return PI * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80






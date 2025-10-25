// Fungsi untuk mengambil data dari file JSON
function ambilDataProduk() {
    // Meminta (fetch) data dari file katalog_produk.json
    fetch('katalog_produk.json')
        .then(response => response.json()) // Mengubah respons menjadi objek JSON
        .then(data => {
            // Memanggil fungsi untuk menampilkan data
            tampilkanProduk(data);
        })
        .catch(error => {
            // Jika ada masalah dalam mengambil data
            console.error('Ada kesalahan saat mengambil data:', error);
            // Ini adalah pesan untukmu di console VS Code
            document.getElementById('container-produk').innerHTML = '<p>Maaf, data produk gagal dimuat.</p>';
        });
}

// Fungsi untuk membuat elemen HTML (UI) untuk setiap produk
function tampilkanProduk(produkArray) {
    const container = document.getElementById('container-produk');

    // Loop (ulangi) setiap item dalam array produk
    produkArray.forEach(produk => {
        // 1. Buat elemen kartu produk
        const kartu = document.createElement('div');
        kartu.classList.add('kartu-produk');

        // 2. Isi kartu dengan data dari JSON
            kartu.innerHTML = `
            <img src="${produk.link_foto_utama}" alt="Foto Produk ${produk.nama_produk_id}">
           <div class="multi-currency-price">
                <p class="harga utama">IDR ${produk.harga.idr.toLocaleString('id-ID')}</p>
                <p class="harga kecil">USD $ ${produk.harga.usd.toFixed(2)}</p>
                <p class="harga kecil">KHR ${produk.harga.khr.toLocaleString('id-ID')}</p>
                <p class="harga kecil">THB ฿ ${produk.harga.thb.toFixed(2)}</p>
            </div>
            <p><strong>KODE SKU:</strong> <span class="kode-sku">${produk.kode_sku}</span></p>
                
                <a href="https://wa.me/85589640025?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20${produk.kode_sku}%20yang%20saya%20lihat%20di%20website." target="_blank" class="tombol-wa">
                    Pesan via WhatsApp
                </a>
            </div> `;
        
        // 3. Masukkan kartu ke dalam container utama
        container.appendChild(kartu);
    });
}

// Panggil fungsi utama saat halaman dimuat
ambilDataProduk();

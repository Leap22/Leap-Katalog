// Fungsi untuk mengambil data dari file JSON
function ambilDataProduk() {
    fetch('katalog_produk.json')
        .then(response => response.json())
        .then(data => {
            tampilkanProduk(data);
        })
        .catch(error => {
            console.error('Ada kesalahan saat mengambil data:', error);
            // Pesan darurat ini akan muncul jika JSON tidak konsisten!
            document.getElementById('container-produk').innerHTML = '<h2>Maaf, data produk gagal dimuat.</h2><p>Pastikan semua harga di katalog_produk.json menggunakan format {"harga": {...}} yang benar.</p>';
        });
}

// Fungsi untuk membuat elemen HTML (UI) untuk setiap produk
function tampilkanProduk(produkArray) {
    const container = document.getElementById('container-produk');

    produkArray.forEach(produk => {
        const kartu = document.createElement('div');
        kartu.classList.add('kartu-produk');
        
        // Asumsi: Nama produk Inggris menggunakan ID jika "nama_produk_en" tidak ada di JSON
        const namaProdukEn = produk.nama_produk_en || produk.nama_produk_id; 

        // Isi kartu dengan HTML
        kartu.innerHTML = `
            <img src="${produk.link_foto_utama}" alt="Foto Produk ${produk.nama_produk_id}">
            <div class="detail-produk"> 
                
                <h2>${produk.nama_produk_id}</h2> <p class="nama-tambahan khmer">${produk.nama_produk_kh}</p> <p class="nama-tambahan inggris">(${namaProdukEn})</p> <p class="deskripsi">${produk.deskripsi_singkat_id}</p>
                
                <div class="multi-currency-price">
                    <p class="harga utama">THB ฿ ${produk.harga.thb.toFixed(2)}</p>
                    
                    <p class="harga kecil">KHR ${produk.harga.khr.toLocaleString('id-ID')}</p>
                    <p class="harga kecil">IDR ${produk.harga.idr.toLocaleString('id-ID')}</p>
                    <p class="harga kecil">USD $ ${produk.harga.usd.toFixed(2)}</p>
                </div>
                
                <p><strong>KODE SKU:</strong> <span class="kode-sku">${produk.kode_sku}</span></p>
                
                <a href="https://wa.me/85589640025?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20${produk.kode_sku}%20yang%20saya%20lihat%20di%20website." target="_blank" class="tombol-wa">
                    Pesan via WhatsApp
                </a>
                
            </div> 
        `;
        
        container.appendChild(kartu);
    });
}

ambilDataProduk();
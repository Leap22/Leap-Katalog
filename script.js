// Fungsi untuk mengambil data dari file JSON
function ambilDataProduk() {
    fetch('katalog_produk.json')
        .then(response => response.json())
        .then(data => {
            tampilkanProduk(data);
        })
        .catch(error => {
            console.error('Ada kesalahan saat mengambil data:', error);
            // Pesan darurat jika JSON tidak konsisten
            document.getElementById('container-produk').innerHTML = '<h2>Maaf, data produk gagal dimuat.</h2><p>Pastikan file katalog_produk.json sudah benar.</p>';
        });
}

// Fungsi untuk membuat elemen HTML (UI) untuk setiap produk
function tampilkanProduk(produkArray) {
    const container = document.getElementById('container-produk');

    produkArray.forEach(produk => {
        const kartu = document.createElement('div');
        kartu.classList.add('kartu-produk');
        
        // Terapkan class untuk stok habis (membuatnya buram)
        if (!produk.stok_tersedia) {
            kartu.classList.add('stok-habis');
        }

        const namaProdukEn = produk.nama_produk_en || produk.nama_produk_id; 
        const waText = produk.stok_tersedia ? 'WhatsApp' : 'Pre-Order WA';

        // Isi kartu dengan HTML
        kartu.innerHTML = `
            <img src="${produk.link_foto_utama}" alt="Foto Produk ${produk.nama_produk_id}">
            <div class="detail-produk"> 
                
                <h2>${produk.nama_produk_id}</h2> 
                
                <p class="nama-tambahan khmer">${produk.nama_produk_kh}</p> 
                <p class="nama-tambahan inggris">(${namaProdukEn})</p> 

                <p class="deskripsi">${produk.deskripsi_singkat_id}</p>
                
                <ul class="poin-jual-leap">
                    ${produk.poin_kunci_untuk_leap.map(poin => `<li>✅ ${poin}</li>`).join('')}
                </ul>
                
                <div class="multi-currency-price">
                    <p class="harga utama">THB ฿ ${produk.harga.thb.toFixed(2)}</p>
                    
                    <p class="harga kecil">KHR ${produk.harga.khr.toLocaleString('id-ID')}</p>
                    <p class="harga kecil">IDR ${produk.harga.idr.toLocaleString('id-ID')}</p>
                    <p class="harga kecil">USD $ ${produk.harga.usd.toFixed(2)}</p>
                </div>
                
                <p><strong>KODE SKU:</strong> <span class="kode-sku">${produk.kode_sku}</span></p>
                
                <div class="tombol-sosial-container">
                    
                    <a href="https://wa.me/85589640025?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20${produk.kode_sku}%20yang%20saya%20lihat%20di%20website." target="_blank" class="tombol-sosial whatsapp">
                        <i class="fab fa-whatsapp"></i> ${waText}
                    </a>

                    <a href="https://t.me/username_telegram_leap?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20${produk.kode_sku}%20yang%20saya%20lihat%20di%20website." target="_blank" class="tombol-sosial telegram">
                        <i class="fab fa-telegram-plane"></i> Telegram
                    </a>

                    <a href="https://m.me/username_fanpage_leap?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20${produk.kode_sku}%20yang%20saya%20lihat%20di%20website." target="_blank" class="tombol-sosial facebook">
                        <i class="fab fa-facebook-f"></i> Messenger
                    </a>
                
                </div> 
                
            </div> 
        `;
        
        container.appendChild(kartu);
    });
}

ambilDataProduk();
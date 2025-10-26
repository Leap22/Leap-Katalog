// Data produk (akan diisi saat ambilDataProduk berhasil)
let daftarProduk = []; 
// Keranjang belanja. Format: { kode_sku: { produk: {...}, jumlah: 1 } }
let keranjang = {}; 
const MIN_PEMBELIAN_THB = 500; // Kunci validasi

// ==========================================================
// VARIABEL UNTUK FILTER KATEGORI & PENCARIAN
// ==========================================================
let kategoriAktif = 'Semua'; // Kategori yang sedang dipilih secara default
const filterContainer = document.getElementById('filter-container');


// ==========================================================
// PENGAMBILAN DATA, FILTER & PENCARIAN
// ==========================================================

// Fungsi untuk mengambil data dari file JSON
function ambilDataProduk() {
    fetch('katalog_produk.json')
        .then(response => response.json())
        .then(data => {
            daftarProduk = data; // Simpan data produk secara global
            renderFilterKategori(); 
            filterUtama(); // Panggil filterUtama (tanpa parameter) untuk menampilkan semua produk
            inisialisasiPencarian(); // Inisialisasi listener pencarian
        })
        .catch(error => {
            console.error('Ada kesalahan saat mengambil data:', error);
            document.getElementById('container-produk').innerHTML = '<h2>Maaf, data produk gagal dimuat.</h2><p>Pastikan file katalog_produk.json sudah benar dan memiliki properti "kategori".</p>';
        });
}

/**
 * Mendapatkan daftar kategori unik dari produk.
 */
function dapatkanKategoriUnik() {
    const kategori = daftarProduk.map(produk => produk.kategori).filter(k => k); 
    return ['Semua', ...new Set(kategori)];
}

/**
 * Membuat dan menampilkan tombol filter kategori.
 */
function renderFilterKategori() {
    const kategoriUnik = dapatkanKategoriUnik();
    if (!filterContainer) return;

    filterContainer.innerHTML = '';
    
    kategoriUnik.forEach(kategori => {
        const button = document.createElement('button');
        button.textContent = kategori;
        button.classList.add('tombol-filter');
        
        // Menandai kategori aktif
        if (kategori === kategoriAktif) {
            button.classList.add('aktif');
        }
        
        button.onclick = () => filterUtama(kategori); // Menggunakan filterUtama
        filterContainer.appendChild(button);
    });
}

/**
 * Menginisialisasi listener pada kotak pencarian.
 */
function inisialisasiPencarian() {
    const searchInput = document.getElementById('search-input');
    // Setiap kali pengguna mengetik (input), kita panggil filterUtama
    if (searchInput) {
        searchInput.addEventListener('input', filterUtama);
    }
}


/**
 * Fungsi utama yang menggabungkan Filter Kategori dan Pencarian Teks.
 * @param {string | undefined} kategoriDipilih - Kategori yang akan difilter (opsional).
 */
function filterUtama(kategoriDipilih) {
    
    // 1. Tentukan kategori aktif (jika dipanggil dari tombol filter)
    if (typeof kategoriDipilih === 'string') {
        kategoriAktif = kategoriDipilih; 
    }
    
    // 2. Ambil nilai dari kotak pencarian
    const searchInput = document.getElementById('search-input');
    // Jika searchInput tidak ada (misal di-load di tempat lain), atur query ke kosong
    const queryPencarian = searchInput ? searchInput.value.toLowerCase().trim() : '';

    let produkDifilter = daftarProduk;

    // A. Filter berdasarkan Kategori
    if (kategoriAktif !== 'Semua') {
        produkDifilter = produkDifilter.filter(produk => produk.kategori === kategoriAktif);
    }

    // B. Filter berdasarkan Teks Pencarian
    if (queryPencarian.length > 0) {
        produkDifilter = produkDifilter.filter(produk => {
            // Cari di Nama ID, Nama Khmer, Deskripsi, dan Kategori
            const namaId = produk.nama_produk_id.toLowerCase();
            const namaKh = produk.nama_produk_kh.toLowerCase();
            const deskripsi = produk.deskripsi_singkat_id.toLowerCase();
            const kategori = produk.kategori.toLowerCase();
            
            return namaId.includes(queryPencarian) ||
                   namaKh.includes(queryPencarian) ||
                   deskripsi.includes(queryPencarian) ||
                   kategori.includes(queryPencarian);
        });
    }
    
    // Render ulang tombol filter dan tampilan produk
    renderFilterKategori(); 
    tampilkanProduk(produkDifilter); 
}

// Fungsi Lama filterProduk, kini hanya memanggil filterUtama
function filterProduk(kategoriDipilih) {
    filterUtama(kategoriDipilih);
}


// Fungsi untuk membuat elemen HTML (UI) untuk setiap produk
function tampilkanProduk(produkArray) {
    const container = document.getElementById('container-produk');
    container.innerHTML = ''; // Kosongkan container

    // Tampilkan pesan jika tidak ada produk setelah filter
    if (produkArray.length === 0) {
         container.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: #1A237E; font-size: 1.2em; padding: 40px;">
            Maaf, tidak ada produk ditemukan dalam pencarian atau kategori ini.</p>`;
        return;
    }

    produkArray.forEach(produk => {
        const kartu = document.createElement('div');
        kartu.classList.add('kartu-produk');
        
        if (!produk.stok_tersedia) {
            kartu.classList.add('stok-habis');
        }

        const namaProdukEn = produk.nama_produk_en || produk.nama_produk_id; 
        
        // Tombol aksi di kartu produk
        const tombolAksi = produk.stok_tersedia ? 
            `<button class="tombol-sosial whatsapp tombol-keranjang" onclick="tambahKeKeranjang('${produk.kode_sku}')">
                <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
            </button>` :
            `<a href="https://wa.me/85589640025?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20${produk.kode_sku}%20yang%20saya%20lihat%20di%20website%20(Pre-Order)." target="_blank" class="tombol-sosial whatsapp tombol-keranjang tombol-preorder">
                <i class="fab fa-whatsapp"></i> Pre-Order WA
            </a>`;


        // Isi kartu dengan HTML
        kartu.innerHTML = `
            <img src="${produk.link_foto_utama}" alt="Foto Produk ${produk.nama_produk_id}">
            <div class="detail-produk"> 
                
                <h2 class="nama-utama">${produk.nama_produk_id}</h2> 
                
                <p class="nama-tambahan khmer">${produk.nama_produk_kh}</p> 
                
                <p class="nama-tambahan inggris">(${namaProdukEn})</p> 

                <p class="deskripsi">${produk.deskripsi_singkat_id}</p>
                
                <ul class="poin-jual-leap">
                    ${produk.poin_kunci_untuk_leap.map(poin => `<li><i class="fas fa-check-circle"></i> ${poin}</li>`).join('')}
                </ul>
                
                <div class="multi-currency-price">
                    <p class="harga utama">฿ ${produk.harga.thb.toFixed(2)}</p>
                    <p class="harga kecil">KHR ${produk.harga.khr.toLocaleString('id-ID')}</p>
                    <p class="harga kecil">IDR ${produk.harga.idr.toLocaleString('id-ID')}</p>
                </div>
                
                <p class="kode-sku-info"><strong>KODE SKU:</strong> <span class="kode-sku">${produk.kode_sku}</span></p>
                
                <div class="tombol-sosial-container">
                    ${tombolAksi}
                </div> 
            </div> 
        `;
        
        container.appendChild(kartu);
    });
}

// ==========================================================
// LOGIKA KERANJANG BELANJA (TIDAK BERUBAH)
// ==========================================================

function tambahKeKeranjang(sku) {
    const produk = daftarProduk.find(p => p.kode_sku === sku);
    if (!produk) return;

    if (keranjang[sku]) {
        keranjang[sku].jumlah += 1;
    } else {
        keranjang[sku] = { produk: produk, jumlah: 1 };
    }
    
    updateKeranjangUI();
    tampilkanKeranjang(); 
}

function hapusDariKeranjang(sku) {
    if (keranjang[sku]) {
        delete keranjang[sku];
        updateKeranjangUI();
    }
}

function updateJumlah(sku, delta) {
    if (keranjang[sku]) {
        keranjang[sku].jumlah += delta;
        if (keranjang[sku].jumlah <= 0) {
            delete keranjang[sku];
        }
        updateKeranjangUI();
    }
}

function hitungTotal() {
    let totalThb = 0;
    let totalItem = 0;
    for (const sku in keranjang) {
        totalThb += keranjang[sku].produk.harga.thb * keranjang[sku].jumlah;
        totalItem += keranjang[sku].jumlah;
    }
    return { totalThb, totalItem };
}

function updateKeranjangUI() {
    const { totalThb, totalItem } = hitungTotal();
    const daftarItemDiv = document.getElementById('daftar-item-keranjang');
    const totalSpan = document.getElementById('total-keranjang-thb');
    const badgeSpan = document.getElementById('badge-keranjang');
    const validasiDiv = document.getElementById('pesan-validasi');
    const tombolCheckout = document.querySelectorAll('.tombol-checkout');
    
    daftarItemDiv.innerHTML = '';
    
    if (totalItem === 0) {
        daftarItemDiv.innerHTML = '<p style="text-align: center; color: #6a6a6a; margin: 30px;">Keranjang kosong. Ayo belanja!</p>';
    } else {
        // Tampilkan item
        for (const sku in keranjang) {
            const item = keranjang[sku];
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-keranjang');
            itemDiv.innerHTML = `
                <div class="info-item">
                    <span class="nama-item">${item.produk.nama_produk_id}</span>
                    <span class="nama-tambahan-keranjang">${item.produk.nama_produk_kh}</span>
                    <span class="harga-item">฿ ${item.produk.harga.thb.toFixed(2)} x ${item.jumlah}</span>
                </div>
                <div class="kontrol-item">
                    <button onclick="updateJumlah('${sku}', -1)">-</button>
                    <span>${item.jumlah}</span>
                    <button onclick="updateJumlah('${sku}', 1)">+</button>
                    <button class="hapus-item" onclick="hapusDariKeranjang('${sku}')"><i class="fas fa-trash"></i></button>
                </div>
            `;
            daftarItemDiv.appendChild(itemDiv);
        }
    }

    // Update total dan badge
    totalSpan.textContent = `฿ ${totalThb.toFixed(2)}`;
    badgeSpan.textContent = totalItem;
    
    // Logika Validasi Minimum Pembelian
    if (totalThb < MIN_PEMBELIAN_THB && totalItem > 0) {
        const kurangBerapa = MIN_PEMBELIAN_THB - totalThb;
        validasiDiv.innerHTML = `<p class="error-msg"><i class="fas fa-exclamation-triangle"></i> Min. Pembelian: ฿${MIN_PEMBELIAN_THB}. Kurang ฿${kurangBerapa.toFixed(2)} lagi.</p>`;
        tombolCheckout.forEach(btn => btn.disabled = true);
        tombolCheckout.forEach(btn => btn.classList.add('disabled'));
    } else if (totalItem === 0) {
        validasiDiv.innerHTML = '';
        tombolCheckout.forEach(btn => btn.disabled = true);
        tombolCheckout.forEach(btn => btn.classList.add('disabled'));
    } else {
        validasiDiv.innerHTML = `<p class="success-msg"><i class="fas fa-check-circle"></i> Pesanan siap dikirim!</p>`;
        tombolCheckout.forEach(btn => btn.disabled = false);
        tombolCheckout.forEach(btn => btn.classList.remove('disabled'));
    }
}

// Fungsi untuk Modal
function tampilkanKeranjang() {
    document.getElementById('modal-keranjang').style.display = 'block';
    updateKeranjangUI();
}

function tutupKeranjang() {
    document.getElementById('modal-keranjang').style.display = 'none';
}

// Fungsi Checkout (Membangun Pesan dan Redirect)
function checkout(platform) {
    const { totalThb } = hitungTotal();
    
    if (totalThb < MIN_PEMBELIAN_THB) {
        alert(`Maaf, total pesanan minimal harus ฿${MIN_PEMBELIAN_THB} untuk melanjutkan pembelian.`);
        return;
    }
    
    let pesan = `Halo Leap Store, saya ingin memesan produk berikut:\n\n`;
    
    for (const sku in keranjang) {
        const item = keranjang[sku];
        // Tambahkan nama Khmer dan Inggris ke pesan WA agar lengkap
        pesan += `* ${item.produk.nama_produk_id} / ${item.produk.nama_produk_kh} (SKU: ${sku}): ${item.jumlah} pcs @ ฿${item.produk.harga.thb.toFixed(2)}\n`;
    }
    
    pesan += `\n*TOTAL PESANAN:* ฿${totalThb.toFixed(2)}`;
    pesan += `\n\nMohon konfirmasi ketersediaan dan detail pengiriman ke Poipet. Terima kasih!`;
    
    const pesanEncoded = encodeURIComponent(pesan);
    
    // ==========================================================
    // !!! WAJIB GANTI KONTAK INI !!!
    // ==========================================================
    const waNumber = '85589640025'; // Ganti dengan nomor WA Anda
    const teleUsername = 'username_telegram_leap'; // Ganti dengan username Telegram Anda (tanpa @)
    const fbFanpage = 'username_fanpage_leap'; // Ganti dengan ID/Username Fanpage FB Anda (untuk m.me link)

    switch (platform) {
        case 'whatsapp':
            window.open(`https://wa.me/${waNumber}?text=${pesanEncoded}`, '_blank');
            break;
        case 'telegram':
            window.open(`https://t.me/${teleUsername}?text=${pesanEncoded}`, '_blank');
            break;
        case 'facebook':
            window.open(`https://m.me/${fbFanpage}?text=${pesanEncoded}`, '_blank');
            break;
    }
}

// Inisialisasi saat halaman dimuat
ambilDataProduk();

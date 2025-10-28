// ==========================================================
// DATA PRODUK DAN KONFIGURASI
// ==========================================================

// URL gambar eksternal tunggal yang dijamin bisa dimuat oleh browser
const FALLBACK_IMAGE_URL = 'https://via.placeholder.com/300x200?text=Leap+Product';
const WHATSAPP_NUMBER = '6281234567890'; // Ganti dengan nomor WhatsApp Anda

// Data produk yang DIBERIKAN OLEH PENGGUNA (20 Produk LENGKAP)
const RAW_PRODUCTS_JSON = [
  // --- Kategori: Minuman Racikan & Segar (4 Produk) ---
  {
    "kode_sku": "MRS001",
    "nama_produk_id": "Kopi Susu Gula Aren Dingin",
    "nama_produk_en": "Iced Palm Sugar Milk Coffee",
    "nama_produk_kh": "កាហ្វេទឹកដោះគោត្នោតត្រជាក់",
    "kategori": "Minuman Racikan & Segar",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Kopi Arabika fresh brew dengan creamy susu dan manis alami gula aren.",
    "poin_kunci_untuk_leap": ["Dibuat saat dipesan (Freshly made)", "Pilihan Es atau Hangat", "Sangat cocok untuk penat kerja"],
    "link_foto_utama": "https://lzd-u.slatic.net/05f0907281584985b8dff4045c4ea62e_9b731b91b9f741b5b78090000879434e.jpg",
    "harga": {"thb": 45.00, "khr": 5500, "idr": 20000}
  },
  {
    "kode_sku": "MRS002",
    "nama_produk_id": "Jus Mangga Harum Manis",
    "nama_produk_en": "Aromatic Sweet Mango Juice",
    "nama_produk_kh": "ទឹកស្វាយផ្អែមក្រអូប",
    "kategori": "Minuman Racikan & Segar",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Jus segar dari mangga matang pilihan, kental dan manis alami.",
    "poin_kunci_untuk_leap": ["Menggunakan buah segar pilihan", "Tanpa tambahan pemanis buatan", "Penyegar di hari yang panas"],
    "link_foto_utama": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/7/7/09674920-4983-4cae-804a-0512450ebd2a.jpg",
    "harga": {"thb": 60.00, "khr": 7000, "idr": 27000}
  },
  {
    "kode_sku": "MRS003",
    "nama_produk_id": "Thai Tea Original Dingin",
    "nama_produk_en": "Iced Original Thai Tea",
    "nama_produk_kh": "តែថៃដើមត្រជាក់",
    "kategori": "Minuman Racikan & Segar",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Teh Thailand otentik dengan campuran susu kental yang creamy.",
    "poin_kunci_untuk_leap": ["Rasa otentik Thailand", "Paling diminati", "Manis yang pas"],
    "link_foto_utama": "https://i.goopics.net/f6s4c0.jpg",
    "harga": {"thb": 35.00, "khr": 4000, "idr": 15000}
  },
  {
    "kode_sku": "MRS004",
    "nama_produk_id": "Es Lemon Madu",
    "nama_produk_en": "Iced Honey Lemon",
    "nama_produk_kh": "ក្រូចឆ្មារទឹកឃ្មុំត្រជាក់",
    "kategori": "Minuman Racikan & Segar",
    "stok_tersedia": false, // Stok Habis
    "deskripsi_singkat_id": "Perpaduan madu murni, perasan lemon, dan air dingin. Sangat sehat.",
    "poin_kunci_untuk_leap": ["Sangat menyehatkan", "Meningkatkan imun tubuh", "100% Madu Asli"],
    "link_foto_utama": "https://i.goopics.net/f6s4c0.jpg",
    "harga": {"thb": 40.00, "khr": 4800, "idr": 18000}
  },
  
  // --- Kategori: Minuman Kemasan & Kaleng (4 Produk) ---
  {
    "kode_sku": "MK003",
    "nama_produk_id": "Susu Kaleng Bear Brand (Original)",
    "nama_produk_en": "Bear Brand Canned Milk (Original)",
    "nama_produk_kh": "ទឹកដោះគោខ្លាឃ្មុំ (ដើម)",
    "kategori": "Minuman Kemasan & Kaleng",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Susu steril siap minum dalam kaleng. Cocok untuk meningkatkan stamina.",
    "poin_kunci_untuk_leap": ["Stok selalu baru", "Sangat digemari pekerja shift", "Tersedia dingin (Siap minum)"],
    "link_foto_utama": "placeholder_bearbrand.jpg",
    "harga": {"thb": 28.00, "khr": 3500, "idr": 12500}
  },
  {
    "kode_sku": "MK008",
    "nama_produk_id": "Minuman Soda Kaleng (Cola Import)",
    "nama_produk_en": "Imported Cola Canned Soda",
    "nama_produk_kh": "កូឡាកំប៉ុងនាំចូល",
    "kategori": "Minuman Kemasan & Kaleng",
    "stok_tersedia": false, // Stok Habis
    "deskripsi_singkat_id": "Soda kola kaleng dingin dari merek internasional. Sangat menyegarkan.",
    "poin_kunci_untuk_leap": ["Stok sedang menipis", "Tersedia rasa original & lemon", "Wajib coba di siang hari"],
    "link_foto_utama": "placeholder_soda.jpg",
    "harga": {"thb": 20.00, "khr": 2500, "idr": 9000}
  },
  {
    "kode_sku": "MK012",
    "nama_produk_id": "Air Mineral Kemasan (1.5L)",
    "nama_produk_en": "Bottled Mineral Water (1.5L)",
    "nama_produk_kh": "ទឹកបរិសុទ្ធ (១.៥លីត្រ)",
    "kategori": "Minuman Kemasan & Kaleng",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Air minum mineral murni. Ukuran besar 1.5 liter.",
    "poin_kunci_untuk_leap": ["Harga termurah", "Stok berlimpah", "Wajib punya di meja kerja"],
    "link_foto_utama": "https://i.goopics.net/p0h7v0.jpg",
    "harga": {"thb": 15.00, "khr": 1800, "idr": 7000}
  },
  {
    "kode_sku": "MK015",
    "nama_produk_id": "Susu Kotak Ultra Cokelat (250ml)",
    "nama_produk_en": "Ultra Chocolate Boxed Milk (250ml)",
    "nama_produk_kh": "ទឹកដោះគោប្រអប់សូកូឡា",
    "kategori": "Minuman Kemasan & Kaleng",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Susu UHT rasa cokelat. Tinggi kalsium dan cocok untuk sarapan.",
    "poin_kunci_untuk_leap": ["Tersedia dingin", "Rasa favorit", "Baik untuk tulang"],
    "link_foto_utama": "placeholder_ultracokelat.jpg",
    "harga": {"thb": 18.00, "khr": 2200, "idr": 8500}
  },

  // --- Kategori: Makanan Ringan (Snack) (4 Produk) ---
  {
    "kode_sku": "SNK005",
    "nama_produk_id": "Keripik Kentang Rasa Pedas Manis",
    "nama_produk_en": "Sweet and Spicy Potato Chips",
    "nama_produk_kh": "បន្ទះសៀគ្វីដំឡូងហឹរ",
    "kategori": "Makanan Ringan (Snack)",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Keripik kentang renyah dengan bumbu pedas manis yang bikin ketagihan.",
    "poin_kunci_untuk_leap": ["Level pedas pas (medium)", "Kemasan Family Pack", "Ideal untuk teman nonton"],
    "link_foto_utama": "placeholder_chips.jpg",
    "harga": {"thb": 55.00, "khr": 6800, "idr": 25000}
  },
  {
    "kode_sku": "SNK010",
    "nama_produk_id": "Biskuit Gandum Cokelat",
    "nama_produk_en": "Chocolate Wheat Biscuits",
    "nama_produk_kh": "នំស្រូវសាលីសូកូឡា",
    "kategori": "Makanan Ringan (Snack)",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Biskuit gandum berserat tinggi dengan lapisan cokelat yang lezat.",
    "poin_kunci_untuk_leap": ["Baik untuk pencernaan", "Rendah gula", "Camilan sehat untuk pagi hari"],
    "link_foto_utama": "placeholder_biskuit.jpg",
    "harga": {"thb": 35.00, "khr": 4300, "idr": 16000}
  },
  {
    "kode_sku": "SNK018",
    "nama_produk_id": "Kacang Almond Panggang",
    "nama_produk_en": "Roasted Almond Nuts",
    "nama_produk_kh": "គ្រាប់អាល់ម៉ុនដុត",
    "kategori": "Makanan Ringan (Snack)",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Kacang almond kualitas premium yang dipanggang tanpa minyak.",
    "poin_kunci_untuk_leap": ["Tinggi Protein", "Renyah dan gurih", "Kemasan Ziplock"],
    "link_foto_utama": "https://i.goopics.net/a0k1l2.jpg",
    "harga": {"thb": 85.00, "khr": 10500, "idr": 38000}
  },
  {
    "kode_sku": "SNK022",
    "nama_produk_id": "Permen Rasa Mint Extra Kuat",
    "nama_produk_en": "Extra Strong Mint Candy",
    "nama_produk_kh": "ស្ករគ្រាប់ជីអង្កាមខ្លាំង",
    "kategori": "Makanan Ringan (Snack)",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Permen mint dengan sensasi dingin dan segar yang bertahan lama.",
    "poin_kunci_untuk_leap": ["Penyegar nafas", "Tersedia kemasan mini", "Cocok untuk pengemudi"],
    "link_foto_utama": "placeholder_mintcandy.jpg",
    "harga": {"thb": 12.00, "khr": 1500, "idr": 5000}
  },

  // --- Kategori: Buah & Segar (4 Produk) ---
  {
    "kode_sku": "BUA001",
    "nama_produk_id": "Apel Fuji Merah (Per Pcs)",
    "nama_produk_en": "Red Fuji Apple (Per Pcs)",
    "nama_produk_kh": "ផ្លែប៉ោមហ្វូជីក្រហម (១ គ្រាប់)",
    "kategori": "Buah & Segar",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Apel Fuji segar, renyah, dan manis. Dijual per buah.",
    "poin_kunci_untuk_leap": ["Stok didatangkan setiap hari", "Ukuran besar", "Sangat cocok untuk pencuci mulut"],
    "link_foto_utama": "placeholder_apel.jpg",
    "harga": {"thb": 15.00, "khr": 1800, "idr": 7000}
  },
  {
    "kode_sku": "BUA005",
    "nama_produk_id": "Pisang Ambon (Per Sisir)",
    "nama_produk_en": "Ambonese Banana (Per Bunch)",
    "nama_produk_kh": "ចេកអំបូង (មួយស្និត)",
    "kategori": "Buah & Segar",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Pisang Ambon matang pohon, manis, dan bergizi tinggi. Dijual per sisir.",
    "poin_kunci_untuk_leap": ["Sumber kalium dan energi", "Tingkat kematangan sempurna", "Ideal untuk sarapan"],
    "link_foto_utama": "placeholder_pisang.jpg",
    "harga": {"thb": 40.00, "khr": 5000, "idr": 18000}
  },
  {
    "kode_sku": "BUA010",
    "nama_produk_id": "Jeruk Sunkist Impor (Per Pcs)",
    "nama_produk_en": "Imported Sunkist Orange (Per Pcs)",
    "nama_produk_kh": "ក្រូចឃ្វិចនាំចូល (១ គ្រាប់)",
    "kategori": "Buah & Segar",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Jeruk Sunkist besar, segar, manis-asam. Kaya Vitamin C.",
    "poin_kunci_untuk_leap": ["Manis dan berair", "Langsung dari kebun", "Sangat bagus untuk diet"],
    "link_foto_utama": "https://i.goopics.net/6v7y0z.jpg",
    "harga": {"thb": 20.00, "khr": 2400, "idr": 9000}
  },
  {
    "kode_sku": "BUA015",
    "nama_produk_id": "Anggur Merah tanpa Biji (Per 250g)",
    "nama_produk_en": "Seedless Red Grapes (Per 250g)",
    "nama_produk_kh": "ផ្លែទំពាំងបាយជូរក្រហមគ្មានគ្រាប់",
    "kategori": "Buah & Segar",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Anggur merah berkualitas tinggi. Manis dan renyah. Dikemas 250g.",
    "poin_kunci_untuk_leap": ["Bebas pestisida", "Segar dari kulkas", "Tersedia kemasan kecil"],
    "link_foto_utama": "placeholder_anggur.jpg",
    "harga": {"thb": 75.00, "khr": 9200, "idr": 34000}
  },

  // --- Kategori: Makanan Berat (4 Produk) ---
  {
    "kode_sku": "MAB001",
    "nama_produk_id": "Nasi Goreng Ayam Spesial",
    "nama_produk_en": "Special Chicken Fried Rice",
    "nama_produk_kh": "បាយឆាសាច់មាន់ពិសេស",
    "kategori": "Makanan Berat",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Nasi goreng pedas dengan telur mata sapi dan ayam suwir.",
    "poin_kunci_untuk_leap": ["Porsi kenyang", "Bisa pilih tingkat pedas", "Dimasak dengan bumbu rahasia"],
    "link_foto_utama": "https://i.goopics.net/8s9r0t.jpg",
    "harga": {"thb": 80.00, "khr": 9800, "idr": 36000}
  },
  {
    "kode_sku": "MAB005",
    "nama_produk_id": "Mi Instan Kuah Soto (Jumbo)",
    "nama_produk_en": "Instant Noodle Soup (Soto Flavor, Jumbo)",
    "nama_produk_kh": "មីកញ្ចប់ស៊ុបសាច់មាន់",
    "kategori": "Makanan Berat",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Mi instan rasa soto. Porsi besar, siap seduh.",
    "poin_kunci_untuk_leap": ["Selalu tersedia", "Penyelamat lapar mendadak", "Bisa tambah telur"],
    "link_foto_utama": "placeholder_miinstan.jpg",
    "harga": {"thb": 25.00, "khr": 3000, "idr": 11000}
  },
  {
    "kode_sku": "MAB010",
    "nama_produk_id": "Roti Panggang Keju Cokelat",
    "nama_produk_en": "Cheese Chocolate Toast",
    "nama_produk_kh": "នំប៉័ងអាំងឈីសសូកូឡា",
    "kategori": "Makanan Berat",
    // Menggunakan status Pre-Order untuk mendemonstrasikan fitur
    "stok_tersedia": "pre_order", 
    "deskripsi_singkat_id": "Roti tawar tebal dipanggang dengan taburan keju dan meses cokelat.",
    "poin_kunci_untuk_leap": ["Tersedia setelah jam 18:00", "Selalu hangat", "Cocok untuk makan malam"],
    "link_foto_utama": "https://i.goopics.net/f6s4c0.jpg",
    "harga": {"thb": 50.00, "khr": 6000, "idr": 22000}
  },
  {
    "kode_sku": "MAB012",
    "nama_produk_id": "Salad Buah Segar",
    "nama_produk_en": "Fresh Fruit Salad",
    "nama_produk_kh": "សាឡាត់ផ្លែឈើស្រស់",
    "kategori": "Makanan Berat",
    "stok_tersedia": true,
    "deskripsi_singkat_id": "Campuran buah-buahan segar dengan saus yoghurt dan keju parut.",
    "poin_kunci_untuk_leap": ["Low-Calorie", "Saos homemade", "Porsi personal"],
    "link_foto_utama": "https://i.goopics.net/x1m0p2.jpg",
    "harga": {"thb": 65.00, "khr": 8000, "idr": 30000}
  }
];

// ==========================================================
// KONFIGURASI BAHASA DAN MATA UANG
// ==========================================================

// Mapping data mentah ke struktur yang lebih mudah diakses (preprocessing)
const PRODUCTS_DATA = RAW_PRODUCTS_JSON.map(p => ({
    id: p.kode_sku,
    sku: p.kode_sku,
    name: {
        id: p.nama_produk_id,
        en: p.nama_produk_en,
        kh: p.nama_produk_kh,
    },
    category: p.kategori,
    stock: typeof p.stok_tersedia === 'string' ? p.stok_tersedia.toLowerCase() : (p.stok_tersedia ? 'in_stock' : 'out_of_stock'),
    description: {
        id: p.deskripsi_singkat_id,
        // Asumsi EN dan KH sama dengan ID jika tidak disediakan
        en: p.deskripsi_singkat_id, 
        kh: p.deskripsi_singkat_id
    },
    points: {
        id: p.poin_kunci_untuk_leap,
        // Asumsi EN dan KH sama dengan ID jika tidak disediakan
        en: p.poin_kunci_untuk_leap, 
        kh: p.poin_kunci_untuk_leap
    },
    img: p.link_foto_utama || FALLBACK_IMAGE_URL,
    price_thb: p.harga.thb,
    price_khr: p.harga.khr,
    price_idr: p.harga.idr
}));

// Mengambil semua kategori unik untuk filter
const ALL_CATEGORIES = Array.from(new Set(PRODUCTS_DATA.map(p => p.category)));

// Data Terjemahan untuk Label UI
const LANG_DATA = {
    id: {
        all_categories: 'Semua Kategori',
        search_placeholder: 'Cari produk...',
        cart_button: 'Keranjang',
        min_order_warning: 'Pesanan minimal ฿500 (THB).',
        empty_cart: 'Keranjang Anda kosong.',
        out_of_stock: 'Stok Habis',
        checkout_wa: 'Tambah ke Keranjang',
        checkout_pre: 'Pre-Order via WA',
        remove: 'Hapus',
        checkout: 'Pesan via WhatsApp',
        total: 'Total',
        product_added: (name) => `✅ ${name} ditambahkan ke keranjang.`,
        product_removed: (name) => `🗑️ ${name} dihapus dari keranjang.`,
    },
    en: {
        all_categories: 'All Categories',
        search_placeholder: 'Search product...',
        cart_button: 'Cart',
        min_order_warning: 'Minimum order ฿500 (THB).',
        empty_cart: 'Your cart is empty.',
        out_of_stock: 'Out of Stock',
        checkout_wa: 'Add to Cart',
        checkout_pre: 'Pre-Order via WA',
        remove: 'Remove',
        checkout: 'Order via WhatsApp',
        total: 'Total',
        product_added: (name) => `✅ ${name} added to cart.`,
        product_removed: (name) => `🗑️ ${name} removed from cart.`,
    },
    kh: {
        all_categories: 'គ្រប់ប្រភេទ',
        search_placeholder: 'ស្វែងរកផលិតផល...',
        cart_button: 'រទេះ',
        min_order_warning: 'ការទិញអប្បបរមា ฿500 (THB).',
        empty_cart: 'រទេះរបស់អ្នកទទេ.',
        out_of_stock: 'អស់ពីស្តុក',
        checkout_wa: 'បន្ថែមទៅក្នុងរទេះ',
        checkout_pre: 'កក់ទុកមុនតាម WA',
        remove: 'លុបចេញ',
        checkout: 'កម្ម៉ង់តាម WhatsApp',
        total: 'សរុប',
        product_added: (name) => `✅ ${name} ត្រូវបានបន្ថែមទៅរទេះ។`,
        product_removed: (name) => `🗑️ ${name} ត្រូវបានលុបចេញពីរទេះ។`,
    }
};

// ==========================================================
// STATUS APLIKASI GLOBAL
// ==========================================================
let currentLang = 'id';
let currentCurrency = 'IDR'; 
let currentFilter = 'Semua';
let currentSearch = '';
let shoppingCart = [];

// ==========================================================
// FUNGSI UTAMA RENDERING DAN LOKALISASI
// ==========================================================

// Fungsi baru untuk menerapkan logika diskon 10% sebelum jam 15:00
function getDiscountedPrice(product) {
    // ID kategori promo
    const PROMO_CATEGORY = 'Minuman Racikan & Segar';
    const PROMO_DISCOUNT = 0.10; // 10%
    const PROMO_CUTOFF_HOUR = 15; // Pukul 15:00 (jam 3 sore)

    // Cek kategori produk
    if (product.category !== PROMO_CATEGORY) {
        return { price: product.price_thb, isDiscounted: false };
    }

    // Cek waktu saat ini (menggunakan waktu lokal di mana skrip dijalankan)
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour < PROMO_CUTOFF_HOUR) {
        const discountedPrice = product.price_thb * (1 - PROMO_DISCOUNT);
        // Pastikan harga diskon dibulatkan dengan benar (misalnya 2 digit)
        const roundedPrice = Math.round(discountedPrice * 100) / 100; 
        return { price: roundedPrice, isDiscounted: true, originalPrice: product.price_thb };
    }

    // Jika kategori cocok tapi waktu sudah lewat
    return { price: product.price_thb, isDiscounted: false };
}


// Fungsi konversi harga mata uang sederhana
function convertPrice(priceTHB, targetCurrency) {
    const exchangeRates = {
        THB: 1.0,
        IDR: 450.00, // Asumsi 1 THB = 450 IDR
        KHR: 110.00, // Asumsi 1 THB = 110 KHR
        USD: 0.027  // Asumsi 1 THB = 0.027 USD
    };
    
    // Konversi ke mata uang target
    const converted = priceTHB * (exchangeRates[targetCurrency] || 1); 
    
    // Pembulatan Khusus: IDR dan KHR dibulatkan ke ratusan terdekat
    if (targetCurrency === 'IDR' || targetCurrency === 'KHR') {
        return Math.round(converted / 100) * 100;
    }
    
    // Pembulatan 2 digit untuk THB/USD
    return Math.round(converted * 100) / 100; 
}


// Fungsi format harga mata uang
function formatCurrency(amount, currencyCode) {
    let symbol, locale, minimumFractionDigits;
    
    if (currencyCode === 'THB') {
        symbol = '฿';
        locale = 'th-TH';
        minimumFractionDigits = 2;
    } else if (currencyCode === 'IDR') {
        symbol = 'Rp';
        locale = 'id-ID';
        minimumFractionDigits = 0; // IDR biasanya tanpa desimal
    } else if (currencyCode === 'KHR') {
        symbol = 'KHR';
        locale = 'km-KH';
        minimumFractionDigits = 0; // KHR biasanya tanpa desimal
    } else if (currencyCode === 'USD') {
        symbol = '$';
        locale = 'en-US';
        minimumFractionDigits = 2;
    } else {
        symbol = currencyCode;
        locale = 'en-US';
        minimumFractionDigits = 2;
    }
    
    const formattedAmount = new Intl.NumberFormat(locale, {
        style: 'decimal', 
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: minimumFractionDigits
    }).format(amount);

    return `${symbol} ${formattedAmount}`;
}


// Fungsi untuk mendapatkan data produk berdasarkan SKU (kode_sku)
function getProductById(id) {
    // Mencari di PRODUCTS_DATA yang sudah di-preprocess
    return PRODUCTS_DATA.find(p => p.id === id); 
}


// Fungsi untuk merender daftar produk di halaman utama
function renderProducts(filter = 'Semua', search = '') {
    const container = document.getElementById('container-produk');
    if (!container) {
        console.error("ID 'container-produk' tidak ditemukan di HTML.");
        return; 
    }
    
    container.innerHTML = '';
    
    const filteredProducts = PRODUCTS_DATA
        .filter(p => {
            const matchesCategory = filter === 'Semua' || p.category === filter;
            const searchTerm = search.toLowerCase();
            
            const nameInLang = p.name[currentLang] || p.name.id || '';
            const descInLang = p.description[currentLang] || p.description.id || '';
            
            const matchesSearch = !searchTerm || 
                                nameInLang.toLowerCase().includes(searchTerm) || 
                                descInLang.toLowerCase().includes(searchTerm) || 
                                p.sku.toLowerCase().includes(searchTerm);
                                
            return matchesCategory && matchesSearch;
        });
        
    if (filteredProducts.length === 0) {
        container.innerHTML = `<p style="text-align: center; padding: 40px; color: #888; font-size: 1.2em;">Tidak ada produk yang ditemukan untuk kriteria ini.</p>`;
    }

    filteredProducts.forEach((product, index) => {
        const langCode = currentLang;

        const productName = product.name[langCode] || product.name.id || `[Nama Produk Hilang: ${product.id}]`;
        const productDesc = product.description[langCode] || product.description.id || `[Deskripsi Hilang: ${product.id}]`;
        
        if (product.price_thb === undefined || product.price_thb === null) {
             console.warn(`Harga THB hilang untuk produk ID: ${product.id}. Melewatkan rendering.`);
             return; 
        }

        // --- Logika Harga Baru dengan Diskon ---
        const { price: finalPriceTHB, isDiscounted, originalPrice } = getDiscountedPrice(product);

        const secondaryPriceAmount = convertPrice(finalPriceTHB, currentCurrency);
        
        const mainPriceTHB = formatCurrency(finalPriceTHB, 'THB');
        const secondaryPrice = formatCurrency(secondaryPriceAmount, currentCurrency);

        const originalPriceTHBFormatted = isDiscounted ? formatCurrency(originalPrice, 'THB') : '';
        const originalPriceLocalFormatted = isDiscounted ? formatCurrency(convertPrice(originalPrice, currentCurrency), currentCurrency) : '';
        // --- Akhir Logika Harga Baru ---


        const card = document.createElement('div');
        const cardIndexClass = `card-index-${(index % 4) + 1}`;
        card.className = `kartu-produk ${cardIndexClass} ${product.stock === 'out_of_stock' ? 'stok-habis' : ''} ${isDiscounted ? 'produk-diskon' : ''}`; // Tambah class diskon

        let buttonText = LANG_DATA[langCode].checkout_wa;
        let buttonClass = 'tombol-keranjang';
        // Gunakan ID unik untuk keranjang (penting jika ada diskon)
        let buttonAction = `tambahKeKeranjang('${product.id}')`; 

        let stockStatus = product.stock;

        if (stockStatus === 'out_of_stock') {
            buttonText = LANG_DATA[langCode].out_of_stock;
            buttonClass += ' disabled';
            buttonAction = 'return false;';
        } else if (stockStatus === 'pre_order') {
            buttonText = LANG_DATA[langCode].checkout_pre;
            buttonClass += ' tombol-preorder';
            buttonAction = `checkoutPreOrder('${product.id}')`;
        }
        
        let cardColor, pointColor;
        // Penentuan warna berdasarkan index agar variatif
        if (index % 4 === 0 || index % 4 === 2) { 
             cardColor = '#f0fff0'; // Hijau Muda background
             pointColor = '#28a745'; // Hijau Icon
             card.classList.add('border-green');
        } else {
             cardColor = '#fefce8'; // Kuning Muda background
             pointColor = '#d19736'; // Oranye Icon
             card.classList.add('border-orange');
        }

        card.innerHTML = `
            ${isDiscounted ? '<div class="badge-diskon">10% OFF!</div>' : ''} <img src="${product.img}" alt="${productName}" onerror="this.onerror=null; this.src='${FALLBACK_IMAGE_URL}';">
            <div class="detail-produk">
                <h3 class="nama-utama" style="font-weight: 900; color: #004d40;">${productName}</h3>
                <p class="deskripsi-produk">${productDesc}</p>

                <div class="selling-points-container" style="background-color: ${cardColor}; border: 1px solid ${pointColor}50;">
                    <ul>
                        ${(product.points[langCode] || product.points.id || []).map(point => `
                            <li><i class="fas fa-check-circle" style="color: ${pointColor};"></i> ${point}</li>
                        `).join('')}
                    </ul>
                </div>

                <p class="kode-sku-info">SKU: ${product.sku}</p>

                <div class="multi-currency-price-compact">
                    ${isDiscounted ? `
                        <div class="harga-asli">
                            ${currentCurrency !== 'THB' ? originalPriceLocalFormatted : ''}
                            <span class="harga-asli-thb">${originalPriceTHBFormatted}</span>
                        </div>
                    ` : ''}
                    
                    <div>${currentCurrency !== 'THB' ? secondaryPrice : ''}</div>
                    <div>${mainPriceTHB}</div>
                </div>

                <div class="tombol-sosial-container">
                    <button class="${buttonClass}" onclick="${buttonAction}" data-product-id="${product.id}">
                         ${stockStatus !== 'pre_order' && stockStatus !== 'out_of_stock' ? '<i class="fas fa-shopping-cart"></i> ' : ''}
                         ${buttonText}
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    // Simpan filter saat ini agar tetap utuh saat ganti bahasa
    currentFilter = filter;
    currentSearch = search;
}


function setLanguage(langCode) {
    currentLang = langCode;
    
    // Tentukan mata uang sekunder berdasarkan bahasa
    if (langCode === 'id') {
        currentCurrency = 'IDR';
    } else if (langCode === 'kh') {
        currentCurrency = 'KHR';
    } else {
        currentCurrency = 'USD'; // Default untuk EN dan lainnya
    }

    // Update elemen tekstual berdasarkan bahasa
    // Header
    document.querySelectorAll('[id^="header-title-"]').forEach(el => el.style.display = 'none');
    document.querySelectorAll('[id^="header-subtitle-"]').forEach(el => el.style.display = 'none');
    document.querySelectorAll('[id^="header-text-"]').forEach(el => el.style.display = 'none');

    document.getElementById(`header-title-${langCode}`).style.display = 'block';
    document.getElementById(`header-subtitle-${langCode}`).style.display = 'block';
    document.getElementById(`header-text-${langCode}`).style.display = 'block';

    // Search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = LANG_DATA[langCode].search_placeholder;
    }
    
    // Cart Button
    const cartButtonText = document.getElementById('keranjang-button-text');
    if (cartButtonText) {
        cartButtonText.textContent = LANG_DATA[langCode].cart_button;
    }

    // Modal Title
    document.querySelectorAll('[id^="modal-title-"]').forEach(el => el.style.display = 'none');
    document.getElementById(`modal-title-${langCode}`).style.display = 'inline';

    // Modal Total Summary
    document.querySelectorAll('[id^="ringkasan-total-"]').forEach(el => el.style.display = 'none');
    document.getElementById(`ringkasan-total-${langCode}`).style.display = 'block';

    // Modal Contact Message
    document.querySelectorAll('[id^="pesan-kontak-"]').forEach(el => el.style.display = 'none');
    document.getElementById(`pesan-kontak-${langCode}`).style.display = 'block';
    
    // Modal Checkout Button
    const checkoutButton = document.getElementById('checkout-wa-button');
    if (checkoutButton) {
        checkoutButton.textContent = LANG_DATA[langCode].checkout;
    }

    // Update tampilan filter, produk, dan keranjang
    renderFilterButtons();
    renderProducts(currentFilter, currentSearch);
    updateCartDisplay();
}

// Fungsi untuk membuat tombol-tombol filter kategori
function renderFilterButtons() {
    const filterContainer = document.getElementById('filter-kategori');
    if (!filterContainer) return;
    
    filterContainer.innerHTML = '';
    const langCode = currentLang;

    // Tambahkan tombol "Semua Kategori"
    const allButton = document.createElement('button');
    allButton.textContent = LANG_DATA[langCode].all_categories;
    allButton.className = `tombol-filter ${currentFilter === 'Semua' ? 'aktif' : ''}`;
    allButton.onclick = () => {
        renderProducts('Semua', currentSearch);
        document.querySelectorAll('.tombol-filter').forEach(btn => btn.classList.remove('aktif'));
        allButton.classList.add('aktif');
    };
    filterContainer.appendChild(allButton);

    // Tambahkan tombol untuk setiap kategori unik
    ALL_CATEGORIES.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = `tombol-filter ${currentFilter === category ? 'aktif' : ''}`;
        button.onclick = () => {
            renderProducts(category, currentSearch);
            document.querySelectorAll('.tombol-filter').forEach(btn => btn.classList.remove('aktif'));
            button.classList.add('aktif');
        };
        filterContainer.appendChild(button);
    });
}


function renderLanguageSelector() {
    // Dipanggil hanya sekali saat inisialisasi
    const selectorContainer = document.getElementById('language-selector-fixed');
    
    const langs = [
        { code: 'id', name: 'ID', icon: '🇮🇩' },
        { code: 'en', name: 'EN', icon: '🇺🇸' },
        { code: 'kh', name: 'KH', icon: '🇰🇭' },
    ];
    
    langs.forEach(lang => {
        const button = document.createElement('button');
        button.className = 'tombol-bahasa';
        button.setAttribute('data-lang', lang.code);
        button.innerHTML = `${lang.icon} ${lang.name}`;
        button.onclick = () => {
            setLanguage(lang.code);
            document.querySelectorAll('.tombol-bahasa').forEach(btn => btn.classList.remove('aktif'));
            button.classList.add('aktif');
        };
        selectorContainer.appendChild(button);
        
        // Atur status aktif awal
        if (lang.code === currentLang) {
            button.classList.add('aktif');
        }
    });
}


// ==========================================================
// FUNGSI KERANJANG (CART)
// ==========================================================

function tambahKeKeranjang(productId) {
    const existingItem = shoppingCart.find(item => item.id === productId);
    const product = getProductById(productId);
    
    if (!product || product.stock === 'out_of_stock' || product.stock === 'pre_order') {
        alert("Produk tidak tersedia untuk dibeli sekarang.");
        return;
    }

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        shoppingCart.push({ id: productId, quantity: 1 });
    }
    
    // Tampilkan notifikasi
    tampilkanNotifikasi(LANG_DATA[currentLang].product_added(product.name[currentLang] || product.name.id), 'sukses');
    
    // Update tampilan keranjang dan jumlah di tombol
    updateCartDisplay();
}

function hapusDariKeranjang(productId) {
    const index = shoppingCart.findIndex(item => item.id === productId);
    const product = getProductById(productId);

    if (index !== -1) {
        shoppingCart.splice(index, 1);
        tampilkanNotifikasi(LANG_DATA[currentLang].product_removed(product.name[currentLang] || product.name.id), 'peringatan');
    }
    
    updateCartDisplay();
}

function updateQuantity(productId, newQuantity) {
    const item = shoppingCart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            hapusDariKeranjang(productId);
        } else {
            item.quantity = newQuantity;
        }
    }
    updateCartDisplay();
}


function calculateTotal() {
    return shoppingCart.reduce((total, item) => {
        const product = getProductById(item.id);
        if (product && product.price_thb !== undefined) {
            // Gunakan harga diskon jika berlaku saat menghitung total
            const { price: finalPriceTHB } = getDiscountedPrice(product);
            return total + (finalPriceTHB * item.quantity);
        }
        return total;
    }, 0);
}

function updateCartDisplay() {
    const cartCount = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
    const totalTHB = calculateTotal();
    const totalLocal = convertPrice(totalTHB, currentCurrency);
    const minOrderTHB = 500;
    
    // Update jumlah di tombol keranjang
    const cartIcon = document.getElementById('keranjang-count');
    if (cartIcon) {
        cartIcon.textContent = cartCount > 0 ? cartCount : '';
        cartIcon.style.display = cartCount > 0 ? 'flex' : 'none';
    }

    // Update daftar item di modal
    const daftarItem = document.getElementById('daftar-item-keranjang');
    const langCode = currentLang;
    const isCartEmpty = shoppingCart.length === 0;
    
    daftarItem.innerHTML = '';
    
    if (isCartEmpty) {
        daftarItem.innerHTML = `<p style="text-align: center; padding: 20px; color: #555;">${LANG_DATA[langCode].empty_cart}</p>`;
    } else {
        shoppingCart.forEach(item => {
            const product = getProductById(item.id);
            if (!product) return;
            
            // Dapatkan harga diskon/normal
            const { price: finalPriceTHB, isDiscounted, originalPrice } = getDiscountedPrice(product);
            
            const name = product.name[langCode] || product.name.id;
            const priceLocal = formatCurrency(convertPrice(finalPriceTHB, currentCurrency), currentCurrency);
            const priceTHB = formatCurrency(finalPriceTHB, 'THB');
            const subtotalTHB = formatCurrency(finalPriceTHB * item.quantity, 'THB');
            
            const itemElement = document.createElement('div');
            itemElement.className = 'item-keranjang';
            itemElement.innerHTML = `
                <img src="${product.img}" alt="${name}" onerror="this.onerror=null; this.src='${FALLBACK_IMAGE_URL}';">
                <div class="info-item">
                    <h4 class="nama-item">${name}</h4>
                    <p class="harga-item">
                        ${isDiscounted ? `<span class="harga-asli-keranjang">${formatCurrency(originalPrice, 'THB')}</span> ` : ''}
                        ${priceTHB} (${priceLocal})
                    </p>
                    <p class="subtotal-item">${LANG_DATA[langCode].total}: ${subtotalTHB}</p>
                </div>
                <div class="kontrol-kuantitas">
                    <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    <button class="tombol-hapus" onclick="hapusDariKeranjang('${item.id}')"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            daftarItem.appendChild(itemElement);
        });
    }
    
    // Update Total di Modal
    document.getElementById('total-keranjang').textContent = formatCurrency(totalLocal, 'IDR');
    document.getElementById('total-keranjang-en').textContent = formatCurrency(convertPrice(totalTHB, 'USD'), 'USD');
    document.getElementById('total-keranjang-kh').textContent = formatCurrency(totalLocal, 'KHR');


    // Update validasi min order
    const validasiPesan = document.getElementById('pesan-validasi');
    const checkoutButton = document.getElementById('checkout-wa-button');

    if (totalTHB < minOrderTHB && shoppingCart.length > 0) {
        validasiPesan.textContent = LANG_DATA[langCode].min_order_warning;
        validasiPesan.style.display = 'block';
        checkoutButton.disabled = true;
    } else {
        validasiPesan.style.display = 'none';
        checkoutButton.disabled = isCartEmpty;
    }
}


function checkoutToWhatsapp() {
    if (shoppingCart.length === 0) return;

    const totalTHB = calculateTotal();
    const minOrderTHB = 500;
    
    if (totalTHB < minOrderTHB) {
        // Seharusnya tombol sudah disabled, tapi ini untuk jaga-jaga
        alert(LANG_DATA[currentLang].min_order_warning);
        return;
    }

    const langCode = currentLang;
    
    // Buat daftar item untuk pesan WA
    const itemsList = shoppingCart.map(item => {
        const product = getProductById(item.id);
        if (!product) return;
        
        const { price: finalPriceTHB } = getDiscountedPrice(product);
        const name = product.name[langCode] || product.name.id;
        const priceTHB = formatCurrency(finalPriceTHB, 'THB');
        
        return `- ${item.quantity}x ${name} (${priceTHB}/pcs) | SKU: ${product.sku}`;
    }).join('\n');
    
    const totalLocal = formatCurrency(convertPrice(totalTHB, currentCurrency), currentCurrency);
    const totalTHBFormatted = formatCurrency(totalTHB, 'THB');

    const message = encodeURIComponent(`*PESANAN BARU - Leap Store*
    
Saya ingin memesan produk berikut:
${itemsList}

*Rincian Total:*
- Total Belanja (THB): ${totalTHBFormatted}
- Total Belanja (${currentCurrency}): ${totalLocal}

*Catatan Tambahan (Isi jika ada):*
[Misal: Ruangan no 101, minta bungkus terpisah, dll.]

Mohon konfirmasi pesanan ini. Terima kasih!`);
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');

    // Kosongkan keranjang setelah checkout (opsional, bisa diubah)
    shoppingCart = [];
    tutupModalKeranjang();
    updateCartDisplay();
    tampilkanNotifikasi('Pemesanan dikirim ke WhatsApp! Cek chat Anda.', 'sukses');
}

function checkoutPreOrder(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const langCode = currentLang;
    const name = product.name[langCode] || product.name.id;

    const message = encodeURIComponent(`*PERMINTAAN PRE-ORDER*
    
Saya ingin memesan produk Pre-Order berikut:
- Produk: ${name}
- SKU: ${product.sku}
- Harga: ${formatCurrency(product.price_thb, 'THB')}

Mohon informasinya mengenai ketersediaan dan proses pemesanan Pre-Order.`);
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
}


// ==========================================================
// FUNGSI UTILITY UI
// ==========================================================

function tampilkanNotifikasi(pesan, tipe = 'info') {
    const notifContainer = document.getElementById('notifikasi-container');
    if (!notifContainer) return;
    
    const notif = document.createElement('div');
    notif.className = `notifikasi ${tipe}`;
    notif.textContent = pesan;
    
    // Tambahkan ikon
    let iconClass = 'fas fa-info-circle';
    if (tipe === 'sukses') iconClass = 'fas fa-check-circle';
    if (tipe === 'peringatan') iconClass = 'fas fa-exclamation-triangle';

    notif.innerHTML = `<i class="${iconClass}"></i> ${pesan}`;

    notifContainer.appendChild(notif);
    
    // Hapus notifikasi setelah 3 detik
    setTimeout(() => {
        notif.classList.add('fade-out');
        notif.addEventListener('transitionend', () => {
            notif.remove();
        });
    }, 3000);
}


function bukaModalKeranjang() {
    document.getElementById('modal-keranjang').style.display = 'block';
    updateCartDisplay(); 
}

function tutupModalKeranjang() {
    document.getElementById('modal-keranjang').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-keranjang');
    if (event.target === modal) {
        tutupModalKeranjang();
    }
}

// Inisialisasi Aplikasi
document.addEventListener('DOMContentLoaded', () => {
    renderLanguageSelector();
    setLanguage('id'); // Set bahasa awal ke ID
    renderFilterButtons();

    document.getElementById('search-input')?.addEventListener('keyup', (e) => {
        currentSearch = e.target.value;
        renderProducts(currentFilter, currentSearch);
    });

    // Event listener untuk tombol keranjang di header
    document.getElementById('keranjang-button')?.addEventListener('click', bukaModalKeranjang);

    // Event listener untuk tombol tutup modal
    document.querySelector('.tombol-tutup')?.addEventListener('click', tutupModalKeranjang);
    
    // Event listener untuk tombol checkout
    document.getElementById('checkout-wa-button')?.addEventListener('click', checkoutToWhatsapp);
});

/**
 * ==========================================================
 * SCRIPT JAVASCRIPT LENGKAP UNTUK LEAP STORE (MODE MODAL BAHASA)
 * ==========================================================
 */

// 1. VARIABEL GLOBAL DAN BAHASA AKTIF
let keranjang = {};
const MIN_ORDER_THB = 500;
const KONTAK_WA = '+85589640025'; // GANTI dengan nomor WhatsApp Anda
const KONTAK_TELEGRAM = 'leapstorepoipet'; // GANTI dengan username Telegram Anda
const LANGUAGE_STORAGE_KEY = 'leap_store_language';
let activeLang = 'en'; // Default sementara (akan diganti oleh LocalStorage atau Modal)

// 2. DATA PRODUK (DENGAN 5 BAHASA: ID, EN, KH, ZH, TH)
// PENTING: Ganti data ini dengan produk Anda yang sebenarnya.
const PRODUCTS = [
    {
        id: 1,
        sku: 'LP-K001',
        image: 'kopi-hitam.jpg', 
        kategori: ['Minuman Racikan & Segar', 'Kopi & Teh'],
        nama: {
            id: "Kopi Hitam Poipet Istimewa",
            en: "Special Poipet Black Coffee",
            kh: "កាហ្វេខ្មៅប៉ោយប៉ែតពិសេស",
            zh: "波贝特色黑咖啡", 
            th: "กาแฟดำปอยเปตสูตรพิเศษ"  
        },
        deskripsi: {
            id: "Kopi hitam kental diracik khusus untuk Anda. Pembangkit semangat!",
            en: "Thick black coffee specially brewed for you. The perfect spirit booster!",
            kh: "កាហ្វេខ្មៅខាប់ដែលបានឆុងជាពិសេសសម្រាប់អ្នក។ ជួយបង្កើនស្មារតី!",
            zh: "浓黑咖啡专为您调配。 完美提神!",
            th: "กาแฟดำเข้มข้นชงพิเศษสำหรับคุณ ดื่มแล้วมีชีวิตชีวา!"
        },
        harga: { thb: 70.00, usd: 2.00, khr: 8000 },
        stok: 'ada', 
        preorder_contact: 'WA' 
    },
    {
        id: 2,
        sku: 'LP-M002',
        image: 'masker-wajah.jpg',
        kategori: ['Perawatan Diri', 'Kesehatan'],
        nama: {
            id: "Masker Wajah Kolagen Gold",
            en: "Gold Collagen Facial Mask",
            kh: "ម៉ាស់បិទមុខខូឡាជែនមាស",
            zh: "黄金胶原蛋白面膜",
            th: "มาส์กหน้าคอลลาเจนทองคำ"
        },
        deskripsi: {
            id: "Masker mewah untuk menghidrasi dan mencerahkan kulit wajah. Cocok untuk semua jenis kulit.",
            en: "Luxury mask to hydrate and brighten facial skin. Suitable for all skin types.",
            kh: "ម៉ាស់ប្រណិតដើម្បីផ្តល់សំណើមនិងធ្វើអោយស្បែកមុខភ្លឺថ្លា។ សាកសមសម្រាប់គ្រប់ប្រភេទស្បែក។",
            zh: "奢华面膜，滋润提亮肌肤。 适合所有肤质。",
            th: "มาส์กหรูหราให้ความชุ่มชื้นและปรับผิวหน้าให้กระจ่างใส เหมาะสำหรับทุกสภาพผิว"
        },
        harga: { thb: 120.00, usd: 3.50, khr: 14000 },
        stok: 'ada',
        preorder_contact: null 
    },
    {
        id: 3,
        sku: 'LP-S003',
        image: 'jus-buah.jpg',
        kategori: ['Minuman Racikan & Segar', 'Jus Buah'],
        nama: {
            id: "Jus Mangga Alpukat Segar",
            en: "Fresh Mango Avocado Juice",
            kh: "ទឹកក្រឡុកស្វាយផ្លែប័រស្រស់",
            zh: "新鲜芒果牛油果汁",
            th: "น้ำมะม่วงอะโวคาโดสด"
        },
        deskripsi: {
            id: "Kombinasi mangga dan alpukat yang sehat dan mengenyangkan. Dingin lebih nikmat!",
            en: "A healthy and filling combination of mango and avocado. Best served cold!",
            kh: "ការរួមបញ្ចូលគ្នារវាងស្វាយនិងផ្លែប័រដែលមានសុខភាពល្អនិងឆ្អែត។ ញ៉ាំពេលត្រជាក់កាន់តែឆ្ងាញ់!",
            zh: "芒果和牛油果健康又饱腹。 冷藏饮用味道更佳!",
            th: "การผสมผสานที่ลงตัวของมะม่วงและอะโวคาโด ดีต่อสุขภาพและอิ่มนาน ดื่มเย็นชื่นใจ!"
        },
        harga: { thb: 150.00, usd: 4.30, khr: 17500 },
        stok: 'habis', 
        preorder_contact: 'TELEGRAM' 
    },
     {
        id: 4,
        sku: 'LP-S004',
        image: 'snack-krispi.jpg',
        kategori: ['Snack & Makanan Ringan'],
        nama: {
            id: "Biskuit Keju Krispi Import",
            en: "Imported Crispy Cheese Biscuits",
            kh: "នំប៊ីស្គីតឈីសស្រួយនាំចូល",
            zh: "进口香脆芝士饼干",
            th: "บิสกิตชีสกรอบนำเข้า"
        },
        deskripsi: {
            id: "Snack renyah keju premium dari Taiwan. Sekali coba pasti ketagihan.",
            en: "Premium crispy cheese snack from Taiwan. Once you try it, you'll be hooked.",
            kh: "អាហារសម្រន់ឈីសស្រួយគុណភាពខ្ពស់ពីតៃវ៉ាន់។ សាកម្តងជាប់ចិត្តរហូត។",
            zh: "来自台湾的优质香脆芝士零食。 一试难忘。",
            th: "ขนมขบเคี้ยวชีสกรอบระดับพรีเมียมจากไต้หวัน ลองแล้วจะติดใจแน่นอน"
        },
        harga: { thb: 85.00, usd: 2.45, khr: 10500 },
        stok: 'preorder', 
        preorder_contact: 'WA' 
    }
];

// 3. KAMUS TERJEMAHAN UNTUK ELEMEN NON-PRODUK (STATIS)
const DICTIONARY = {
    // Tombol Keranjang/Pre-Order pada Card
    'add_to_cart': { id: "Tambah Keranjang", en: "Add to Cart", kh: "បន្ថែមរទេះ", zh: "加入购物", th: "เพิ่มตะกร้า" },
    'out_of_stock': { id: "Stok Habis", en: "Out of Stock", kh: "អស់ស្តុក", zh: "缺货", th: "สินค้าหมด" },
    'pre_order': { id: "Pre-Order via", en: "Pre-Order via", kh: "កុម្ម៉ង់ទុកមុនតាមរយៈ", zh: "通过预购", th: "สั่งจองผ่าน" },
    
    // Teks di Modal Keranjang
    'cart_title': { id: "Keranjang Belanja Anda", en: "Your Cart", kh: "រទេះរុញរបស់អ្នក", zh: "您的购物车", th: "ตะกร้าสินค้าของคุณ" },
    'cart_empty': { id: "Keranjang kosong.", en: "Cart is empty.", kh: "រទេះរុញទទេ។", zh: "购物车是空的。", th: "ตะกร้าว่างเปล่า" },
    'subtotal': { id: "Subtotal", en: "Subtotal", kh: "សរុបបណ្តោះអាសន្ន", zh: "小计", th: "ราคารวม" },
    'ready_checkout': { id: "Siap Checkout!", en: "Ready to Checkout!", kh: "ត្រៀមទូទាត់!", zh: "准备结账!", th: "พร้อมชำระเงิน!" },
    'min_purchase': { id: "Pembelian minimum:", en: "Minimum purchase:", kh: "ការទិញអប្បបរមា:", zh: "最低购买金额:", th: "ยอดซื้อขั้นต่ำ:" },
    'your_total': { id: "Total Anda:", en: "Your Total:", kh: "ផលបូករបស់អ្នក:", zh: "您的总额:", th: "ราคารวมของคุณ:" },
    'checkout_contact': { id: "Lanjutkan ke pemesanan via kontak:", en: "Continue to order via contact:", kh: "បន្តការកុម្ម៉ង់តាមរយៈទំនាក់ទំនង:", zh: "继续通过联系人订购:", th: "ดำเนินการสั่งซื้อผ่านการติดต่อ:" },
    'checkout_button': { id: "Checkout via", en: "Checkout via", kh: "ទូទាត់តាមរយៈ", zh: "通过结账", th: "ชำระเงินผ่าน" },
    'search_placeholder': { id: "Cari nama produk (Kopi, Masker, Biskuit, dll.)", en: "Search product name (Coffee, Mask, Biscuit, etc.)", kh: "ស្វែងរកឈ្មោះផលិតផល (កាហ្វេ, ម៉ាស់, នំប៊ីស្គីត, ល។)", zh: "搜索产品名称 (咖啡, 面膜, 饼干等)", th: "ค้นหาชื่อผลิตภัณฑ์ (กาแฟ, มาส์ก, บิสกิต, ฯลฯ)" },
    'all_filter': { id: "Semua", en: "All", kh: "ទាំងអស់", zh: "全部", th: "ทั้งหมด" },
    'promo_title': { id: "Promo Minuman Sehat! (Healthy Drink Promo!)", en: "Healthy Drink Promo! (10% OFF)", kh: "ប្រូម៉ូសិនភេសជ្ជៈសុខភាព! (បញ្ចុះតម្លៃ 10%)", zh: "健康饮品促销！(九折)", th: "โปรโมชั่นเครื่องดื่มเพื่อสุขภาพ! (ลด 10%)" },
    'promo_desc': { id: "Dapatkan potongan 10% untuk semua Jus Buah Racikan hari ini. Klik untuk pesan!", en: "Get 10% OFF all Blended Fruit Juices today. Click to order!", kh: "ទទួលបានការបញ្ចុះតម្លៃ 10% លើទឹកផ្លែឈើច្របាច់ទាំងអស់នៅថ្ងៃនេះ។ ចុចដើម្បីកក់!", zh: "今日所有混合果汁九折优惠。 点击订购！", th: "รับส่วนลด 10% สำหรับน้ำผลไม้ปั่นทั้งหมดวันนี้ คลิกเพื่อสั่งซื้อ!" },
    'promo_button': { id: "Lihat Promo Segar", en: "See Fresh Promo", kh: "មើលប្រូម៉ូសិនស្រស់", zh: "查看新鲜促销", th: "ดูโปรโมชั่นสด" },
};


// 4. FUNGSI PENGGANTIAN BAHASA UTAMA & MODAL BAHASA

const getTranslation = (key) => DICTIONARY[key] ? DICTIONARY[key][activeLang] || DICTIONARY[key]['en'] : `[${key}]`;

/**
 * FUNGSI UTAMA PENGGANTIAN BAHASA
 */
const changeLanguage = (lang) => {
    activeLang = lang;
    
    // Simpan pilihan ke Local Storage
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    
    // 1. Perbarui teks statis di Header
    document.querySelectorAll('h2, .header-sub-text').forEach(el => el.style.display = 'none');
    document.getElementById(`header-subtitle-${lang}`) && (document.getElementById(`header-subtitle-${lang}`).style.display = 'block');
    document.getElementById(`header-text-${lang}`) && (document.getElementById(`header-text-${lang}`).style.display = 'block');

    // 2. Perbarui Placeholder & Teks Filter
    document.getElementById('search-input').placeholder = getTranslation('search_placeholder');
    
    // 3. Perbarui Banner Promo
    document.getElementById('promo-title-id').textContent = DICTIONARY['promo_title'][lang] || DICTIONARY['promo_title']['en'];
    document.getElementById('promo-desc-id').textContent = DICTIONARY['promo_desc'][lang] || DICTIONARY['promo_desc']['en'];
    document.getElementById('promo-button').textContent = DICTIONARY['promo_button'][lang] || DICTIONARY['promo_button']['en'];

    // 4. Render ulang semua elemen dinamis (Produk, Filter, Keranjang)
    const activeFilterEl = document.querySelector('.tombol-filter.aktif');
    const activeCategory = activeFilterEl ? activeFilterEl.textContent : 'Semua'; // Gunakan 'Semua' sebagai fallback
    
    renderFilters();
    // Panggil filterUtama dengan kategori ASLI (tidak diterjemahkan)
    filterUtama(activeCategory === getTranslation('all_filter') ? 'Semua' : activeCategory);

    // Render Keranjang
    renderKeranjang();
};

/**
 * FUNGSI KHUSUS: Memilih bahasa dari Modal dan menutupnya
 */
const selectAndCloseModal = (lang) => {
    changeLanguage(lang);
    
    // Tutup modal bahasa
    document.getElementById('modal-bahasa').style.display = 'none';
    
    // Tampilkan konten utama dengan animasi
    document.getElementById('main-content-wrapper').style.opacity = '1';
};

// 5. FUNGSI UTAMA UNTUK MERENDER PRODUK & FILTER
const getProductById = (id) => PRODUCTS.find(p => p.id === id);

// Fungsi untuk membuat HTML card produk (HANYA 1 BAHASA)
const createProductCard = (product) => {
    const isStokHabis = product.stok === 'habis';
    const isPreOrder = product.stok === 'preorder';
    
    let tombolText = getTranslation('add_to_cart');
    let tombolClass = 'whatsapp';
    let tombolAction = `tambahKeKeranjang(${product.id})`;
    
    if (isStokHabis) {
        tombolText = getTranslation('out_of_stock');
        tombolClass = 'tombol-preorder disabled';
        tombolAction = 'return false;'; 
    } else if (isPreOrder) {
        tombolText = `${getTranslation('pre_order')} ${product.preorder_contact}`;
        tombolClass = 'tombol-preorder';
        tombolAction = `preOrder('${product.preorder_contact}', ${product.id})`;
    }

    // Ambil teks sesuai activeLang
    const namaText = product.nama[activeLang] || product.nama['en'];
    const deskripsiText = product.deskripsi[activeLang] || product.deskripsi['en'];
    
    const cardClass = isStokHabis ? 'kartu-produk stok-habis' : 'kartu-produk';

    return `
        <div class="${cardClass}" data-id="${product.id}">
            <img src="${product.image}" alt="${namaText}">
            <div class="detail-produk">
                <h2 class="nama-utama">${namaText}</h2>
                <p class="deskripsi">${deskripsiText}</p>
                
                <div class="multi-currency-price">
                    <p class="harga utama">฿ ${product.harga.thb.toFixed(2)} (THB)</p>
                    <p class="harga kecil">$ ${product.harga.usd.toFixed(2)} / KHR ${product.harga.khr.toLocaleString('en-US')}</p>
                </div>
                
                <p class="kode-sku-info">SKU: ${product.sku}</p>

                <div class="tombol-sosial-container">
                    <button class="tombol-keranjang ${tombolClass}" onclick="${tombolAction}">
                        <i class="fas fa-shopping-cart"></i> ${tombolText}
                    </button>
                </div>
            </div>
        </div>
    `;
};

// Fungsi untuk merender produk ke halaman
const renderProducts = (produkList) => {
    const container = document.getElementById('container-produk');
    container.innerHTML = produkList.map(createProductCard).join('');
};

// Fungsi untuk mengambil semua kategori unik (tidak diterjemahkan)
const getUniqueCategories = () => {
    const categories = new Set();
    PRODUCTS.forEach(product => {
        product.kategori.forEach(cat => categories.add(cat));
    });
    return ['Semua', ...Array.from(categories)];
};

// Fungsi untuk merender tombol filter
const renderFilters = () => {
    const container = document.getElementById('filter-container');
    const categories = getUniqueCategories();
    
    container.innerHTML = ''; 

    categories.forEach(cat => {
        const button = document.createElement('button');
        button.className = 'tombol-filter';
        // Tampilkan teks yang sudah diterjemahkan (hanya untuk 'Semua')
        const buttonText = cat === 'Semua' ? getTranslation('all_filter') : cat;
        button.textContent = buttonText;
        
        // Panggil filterUtama dengan kategori ASLI (untuk logika filtering)
        button.onclick = () => filterUtama(cat); 
        container.appendChild(button);
    });

    // Aktifkan filter 'Semua' (yang sudah diterjemahkan) saat dimuat
    const allFilterButton = Array.from(container.children).find(btn => btn.textContent === getTranslation('all_filter'));
    if (allFilterButton) {
        allFilterButton.classList.add('aktif');
    }
};

// Fungsi filter utama
const filterUtama = (kategori) => {
    const allFilterText = getTranslation('all_filter');
    
    // Kelola kelas 'aktif' berdasarkan kategori ASLI yang di-klik
    document.querySelectorAll('.tombol-filter').forEach(btn => {
        btn.classList.remove('aktif');
        const filterText = btn.textContent;
        
        // Aktifkan tombol yang terjemahannya sesuai dengan kategori yang di-klik
        if ((kategori === 'Semua' && filterText === allFilterText) || filterText === kategori) {
             btn.classList.add('aktif');
        }
    });

    // Lakukan filter berdasarkan kategori ASLI
    let filteredProducts;
    if (kategori === 'Semua') {
        filteredProducts = PRODUCTS;
    } else {
        filteredProducts = PRODUCTS.filter(p => p.kategori.includes(kategori));
    }

    renderProducts(filteredProducts);
};

// Fungsi pencarian
const handleSearch = () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    
    const filteredProducts = PRODUCTS.filter(product => {
        // Cari di semua terjemahan (ID, EN, KH, ZH, TH)
        const allNames = Object.values(product.nama).join(' ').toLowerCase(); 
        const allDescriptions = Object.values(product.deskripsi).join(' ').toLowerCase(); 
        
        const textToSearch = `${allNames} ${allDescriptions} ${product.sku} ${product.kategori.join(' ')}`.toLowerCase();
        return textToSearch.includes(query);
    });

    // Hapus kelas 'aktif' dari semua tombol filter saat mencari
    document.querySelectorAll('.tombol-filter').forEach(btn => btn.classList.remove('aktif'));
    
    renderProducts(filteredProducts);
};

document.getElementById('search-input').addEventListener('keyup', handleSearch);


// 6. FUNGSI KERANJANG BELANJA
const updateBadge = () => {
    const totalItems = Object.values(keranjang).reduce((sum, qty) => sum + qty, 0);
    document.getElementById('badge-keranjang').textContent = totalItems;
};

const tambahKeKeranjang = (id) => {
    if (keranjang[id]) {
        keranjang[id]++;
    } else {
        keranjang[id] = 1;
    }
    updateBadge();
    tampilkanKeranjang(); 
};

const ubahKuantitas = (id, delta) => {
    if (keranjang[id]) {
        keranjang[id] += delta;
        if (keranjang[id] <= 0) {
            delete keranjang[id];
        }
    }
    updateBadge();
    renderKeranjang();
};

// Fungsi untuk merender isi keranjang (Diperbarui)
const renderKeranjang = () => {
    const container = document.getElementById('daftar-item-keranjang');
    const totalElementTHB = document.getElementById('total-keranjang-thb');
    const pesanValidasiElement = document.getElementById('pesan-validasi');
    const modalTitle = document.querySelector('#modal-keranjang .modal-konten h3'); 
    
    modalTitle.textContent = getTranslation('cart_title');

    let totalTHB = 0;
    let html = '';

    if (Object.keys(keranjang).length === 0) {
        html = `<p style="text-align: center; color: #555;">${getTranslation('cart_empty')}</p>`;
    } else {
        for (const id in keranjang) {
            const product = getProductById(parseInt(id));
            const quantity = keranjang[id];
            const subtotalTHB = product.harga.thb * quantity;
            totalTHB += subtotalTHB;

            // Tampilkan nama produk dalam bahasa aktif dan bahasa sekunder (Inggris/ID)
            const displayLang = product.nama[activeLang] || product.nama['en'];
            const secondaryLang = activeLang !== 'en' ? product.nama['en'] : product.nama['id']; 

            html += `
                <div class="item-keranjang">
                    <div class="info-item">
                        <span class="nama-item">${displayLang} (x${quantity})</span>
                        <span class="nama-tambahan-keranjang">${secondaryLang}</span>
                        <span class="harga-item">${getTranslation('subtotal')}: ฿ ${(subtotalTHB).toFixed(2)}</span>
                    </div>
                    <div class="kontrol-item">
                        <button onclick="ubahKuantitas(${id}, -1)" class="hapus-item">-</button>
                        <button onclick="ubahKuantitas(${id}, 1)">+</button>
                    </div>
                </div>
            `;
        }
    }

    container.innerHTML = html;
    totalElementTHB.textContent = `฿ ${totalTHB.toFixed(2)}`;
    document.querySelector('.pesan-kontak').textContent = getTranslation('checkout_contact');
    
    // Perbarui tombol checkout
    document.querySelectorAll('.tombol-checkout').forEach(btn => {
        const platform = btn.classList.contains('whatsapp') ? 'WhatsApp' : 'Telegram';
        btn.innerHTML = `<i class="fab fa-${platform.toLowerCase()}"></i> ${getTranslation('checkout_button')} ${platform}`;
    });

    // Validasi Minimum Pembelian
    if (totalTHB < MIN_ORDER_THB && Object.keys(keranjang).length > 0) {
        pesanValidasiElement.innerHTML = `
            <p class="error-msg">❌ ${getTranslation('min_purchase')} ฿ ${MIN_ORDER_THB.toFixed(2)} (${getTranslation('your_total')} ฿ ${totalTHB.toFixed(2)})</p>`;
        document.querySelectorAll('.tombol-checkout').forEach(btn => btn.classList.add('disabled'));
    } else {
        pesanValidasiElement.innerHTML = `<p class="success-msg">✅ ${getTranslation('ready_checkout')}</p>`;
        document.querySelectorAll('.tombol-checkout').forEach(btn => btn.classList.remove('disabled'));
    }
};

const tampilkanKeranjang = () => {
    document.getElementById('modal-keranjang').style.display = 'block';
    renderKeranjang();
};

const tutupKeranjang = () => {
    document.getElementById('modal-keranjang').style.display = 'none';
};

// 7. FUNGSI CHECKOUT & PREORDER
const checkout = (platform) => {
    const totalTHB = Object.keys(keranjang).reduce((sum, id) => {
        const product = getProductById(parseInt(id));
        return sum + (product.harga.thb * keranjang[id]);
    }, 0);

    if (totalTHB < MIN_ORDER_THB) {
        alert(`Maaf, total pembelian minimum adalah ฿${MIN_ORDER_THB} (THB).`);
        return;
    }

    // Buat pesan lengkap multibahasa untuk dikirim ke WA/Telegram
    let finalMessage = "Halo Leap Store! Saya ingin memesan:\n\n---\n";
    
    const languages = ['id', 'en', 'kh', 'zh', 'th'];
    languages.forEach(lang => {
        let pesanLang = `[${lang.toUpperCase()}]\n`;
        for (const id in keranjang) {
            const product = getProductById(parseInt(id));
            const quantity = keranjang[id];
            // Gunakan terjemahan jika ada, jika tidak, gunakan Inggris
            const nama = product.nama[lang] || product.nama['en']; 
            pesanLang += `- ${nama} (x${quantity})\n`;
        }
        pesanLang += `Total: ฿ ${totalTHB.toFixed(2)} (THB)\n\n`;
        finalMessage += pesanLang;
    });
    finalMessage += "Terima kasih! (Mohon informasikan metode pembayaran dan pengiriman Anda)";
    
    const encodedMessage = encodeURIComponent(finalMessage);
    
    let url = '';
    if (platform === 'whatsapp') {
        url = `https://wa.me/${KONTAK_WA.replace('+', '')}?text=${encodedMessage}`;
    } else if (platform === 'telegram') {
        url = `https://t.me/${KONTAK_TELEGRAM}?text=${encodedMessage}`;
    }
    window.open(url, '_blank');
};

const preOrder = (platform, id) => {
    const product = getProductById(id);
    if (!product || product.stok !== 'preorder') return;

    let pesan = `Halo Leap Store, saya tertarik dengan Pre-Order produk ${product.nama['id']} (SKU: ${product.sku}). Mohon informasinya.`;
    const encodedMessage = encodeURIComponent(pesan);
    
    let url = '';
    if (platform === 'WA') {
        url = `https://wa.me/${KONTAK_WA.replace('+', '')}?text=${encodedMessage}`;
    } else if (platform === 'TELEGRAM') {
        url = `https://t.me/${KONTAK_TELEGRAM}?text=${encodedMessage}`;
    }
    window.open(url, '_blank');
}


// 8. INISIALISASI
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content-wrapper');
    const modalBahasa = document.getElementById('modal-bahasa');
    
    // Cek Local Storage
    const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    
    if (savedLang) {
        // Jika bahasa sudah ada, terapkan dan tampilkan konten utama
        activeLang = savedLang;
        changeLanguage(activeLang); 
        mainContent.style.opacity = '1';
        modalBahasa.style.display = 'none';
    } else {
        // Jika belum ada, tampilkan modal bahasa
        mainContent.style.opacity = '0';
        modalBahasa.style.display = 'block';
    }
    
    updateBadge(); 
});

// Tutup modal jika user klik di luar modal (Hanya untuk modal keranjang)
window.onclick = (event) => {
    const modalKeranjang = document.getElementById('modal-keranjang');
    
    // Pastikan kliknya hanya di modal keranjang (bukan modal bahasa)
    if (event.target === modalKeranjang) {
        tutupKeranjang();
    }
};
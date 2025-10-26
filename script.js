/**
 * ==========================================================
 * SCRIPT JAVASCRIPT LENGKAP UNTUK LEAP STORE 
 * (KERANJANG, MULTIBAHASA, SELLING POINTS & BAHASA NON-MODAL)
 * ==========================================================
 */

// 1. VARIABEL GLOBAL DAN BAHASA AKTIF
let keranjang = {};
const MIN_ORDER_THB = 500;
const KONTAK_WA = '+85589640025'; 
const KONTAK_TELEGRAM = 'leapstorepoipet'; 
const LANGUAGE_STORAGE_KEY = 'leap_store_language';
let activeLang = 'en'; 

// 2. DATA PRODUK (DENGAN 6 BAHASA: ID, EN, KH, ZH, TH, VI, dan Selling Points)
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
            th: "กาแฟดำปอยเปตสูตรพิเศษ",
            vi: "Cà phê đen Poipet đặc biệt" // NEW VIETNAM
        },
        deskripsi: {
            id: "Kopi hitam kental diracik khusus untuk Anda. Pembangkit semangat!",
            en: "Thick black coffee specially brewed for you. The perfect spirit booster!",
            kh: "កាហ្វេខ្មៅខាប់ដែលបានឆុងជាពិសេសសម្រាប់អ្នក។ ជួយបង្កើនស្មារតី!",
            zh: "浓黑咖啡专为您调配。 完美提神!",
            th: "กาแฟดำเข้มข้นชงพิเศษสำหรับคุณ ดื่มแล้วมีชีวิตชีวา!",
            vi: "Cà phê đen đậm đặc được pha chế đặc biệt dành cho bạn. Tăng cường tinh thần tuyệt vời!" // NEW VIETNAM
        },
        selling_points: {
            id: [
                "100% Biji Kopi Arabika Pilihan",
                "Diracik saat dipesan (Freshly Made)",
                "Pilihan Es atau Hangat"
            ],
            en: [
                "100% Selected Arabica Beans",
                "Brewed only upon order (Freshly Made)",
                "Available Iced or Hot"
            ],
            kh: [
                "គ្រាប់កាហ្វេ Arabica 100% ជ្រើសរើស",
                "ឆុងភ្លាមៗនៅពេលកុម្ម៉ង់ (ធ្វើថ្មីៗ)",
                "អាចជ្រើសរើស ទឹកកក ឬ ក្តៅ"
            ],
            zh: [
                "100% 优质阿拉比卡咖啡豆",
                "现点现做（新鲜制作）",
                "可选冰镇或热饮"
            ],
            th: [
                "เมล็ดกาแฟอาราบิก้าคัดพิเศษ 100%",
                "ชงใหม่ตามสั่ง (ทำสดใหม่)",
                "เลือกได้ทั้งแบบเย็นหรือร้อน"
            ],
            vi: [
                "100% hạt Arabica chọn lọc",
                "Pha chế ngay khi gọi món (Tươi mới)",
                "Có sẵn đá hoặc nóng"
            ] // NEW VIETNAM
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
            th: "มาส์กหน้าคอลลาเจนทองคำ",
            vi: "Mặt nạ vàng Collagen" // NEW VIETNAM
        },
        deskripsi: {
            id: "Masker mewah untuk menghidrasi dan mencerahkan kulit wajah. Cocok untuk semua jenis kulit.",
            en: "Luxury mask to hydrate and brighten facial skin. Suitable for all skin types.",
            kh: "ម៉ាស់ប្រណិតដើម្បីផ្តល់សំណើមនិងធ្វើអោយស្បែកមុខភ្លឺថ្លា។ សាកសមសម្រាប់គ្រប់ប្រភេទស្បែក។",
            zh: "奢华面膜，滋润提亮肌肤。 适合所有肤质。",
            th: "มาส์กหรูหราให้ความชุ่มชื้นและปรับผิวหน้าให้กระจ่างใส เหมาะสำหรับทุกสภาพผิว",
            vi: "Mặt nạ sang trọng giúp dưỡng ẩm và làm sáng da mặt. Phù hợp cho mọi loại da." // NEW VIETNAM
        },
        selling_points: {
            id: [
                "Mengandung Serbuk Emas Asli",
                "Sangat Ampuh untuk Mencerahkan",
                "Perawatan Wajah Ekspres 15 Menit"
            ],
            en: [
                "Contains Real Gold Powder",
                "Highly Effective for Brightening",
                "15-Minute Express Facial Treatment"
            ],
            kh: [
                "មានផ្ទុកម្សៅមាសពិតប្រាកដ",
                "មានប្រសិទ្ធភាពខ្ពស់ក្នុងការបំភ្លឺ",
                "ព្យាបាលមុខរហ័ស ១៥ នាទី"
            ],
            zh: [
                "含有真金粉末",
                "提亮效果显著",
                "15分钟速效面部护理"
            ],
            th: [
                "มีส่วนผสมของผงทองคำแท้",
                "มีประสิทธิภาพสูงในการปรับผิวกระจ่างใส",
                "บำรุงผิวหน้ารวดเร็ว 15 นาที"
            ],
            vi: [
                "Chứa bột vàng thật",
                "Rất hiệu quả để làm sáng da",
                "Chăm sóc da mặt cấp tốc 15 phút"
            ] // NEW VIETNAM
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
            th: "น้ำมะม่วงอะโวคาโดสด",
            vi: "Nước ép Xoài Bơ tươi" // NEW VIETNAM
        },
        deskripsi: {
            id: "Kombinasi mangga dan alpukat yang sehat dan mengenyangkan. Dingin lebih nikmat!",
            en: "A healthy and filling combination of mango and avocado. Best served cold!",
            kh: "ការរួមបញ្ចូលគ្នារវាងស្វាយនិងផ្លែប័រដែលមានសុខភាពល្អនិងឆ្អែត។ ញ៉ាំពេលត្រជាក់កាន់តែឆ្ងាញ់!",
            zh: "芒果和牛油果健康又饱腹。 冷藏饮用味道更佳!",
            th: "การผสมผสานที่ลงตัวของมะม่วงและอะโวคาโด ดีต่อสุขภาพและอิ่มนาน ดื่มเย็นชื่นใจ!",
            vi: "Sự kết hợp lành mạnh và no bụng giữa xoài và bơ. Uống lạnh sẽ ngon hơn!" // NEW VIETNAM
        },
        selling_points: {
            id: [
                "Mengandung Vitamin A dan E Tinggi",
                "Tanpa Gula Tambahan (Request)",
                "Penyegar Paling Laris!"
            ],
            en: [
                "High in Vitamins A and E",
                "No Added Sugar (On Request)",
                "Our Bestselling Refresher!"
            ],
             kh: [
                "មានវីតាមីន A និង E ខ្ពស់",
                "មិនមានបន្ថែមស្ករ (តាមការស្នើសុំ)",
                "ភេសជ្ជៈស្រស់ស្រាយដែលលក់ដាច់បំផុត!"
            ],
             zh: [
                "富含维生素A和E",
                "不添加糖（可要求）",
                "最畅销的清爽饮品!"
            ],
            th: [
                "อุดมด้วยวิตามิน A และ E",
                "ไม่เพิ่มน้ำตาล (ตามคำขอ)",
                "เครื่องดื่มคลายร้อนที่ขายดีที่สุด!"
            ],
            vi: [
                "Giàu Vitamin A và E",
                "Không thêm đường (Theo yêu cầu)",
                "Thức uống giải khát bán chạy nhất!"
            ] // NEW VIETNAM
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
            th: "บิสกิตชีสกรอบนำเข้า",
            vi: "Bánh quy phô mai giòn nhập khẩu" // NEW VIETNAM
        },
        deskripsi: {
            id: "Snack renyah keju premium dari Taiwan. Sekali coba pasti ketagihan.",
            en: "Premium crispy cheese snack from Taiwan. Once you try it, you'll be hooked.",
            kh: "អាហារសម្រន់ឈីសស្រួយគុណភាពខ្ពស់ពីតៃវ៉ាន់។ សាកម្តងជាប់ចិត្តរហូត។",
            zh: "来自台湾的优质香脆芝士零食。 一试难忘。",
            th: "ขนมขบเคี้ยวชีสกรอบระดับพรีเมียมจากไต้หวัน ลองแล้วจะติดใจแน่นอน",
            vi: "Snack phô mai giòn cao cấp từ Đài Loan. Ăn một lần là nghiện ngay." // NEW VIETNAM
        },
        selling_points: {
            id: [
                "Keju Asli Premium",
                "Rasa Gurih dan Tidak Eneg",
                "Ideal untuk Teman Nonton"
            ],
            en: [
                "Premium Real Cheese",
                "Savory Flavor, Not Overwhelming",
                "Ideal for Movie Snacks"
            ],
            kh: [
                "ឈីសពិតប្រាកដគុណភាពខ្ពស់",
                "រសជាតិឈ្ងុយឆ្ងាញ់ មិនលើសលប់",
                "ល្អបំផុតសម្រាប់ញ៉ាំមើលកុន"
            ],
            zh: [
                "优质真芝士",
                "咸香可口，不腻",
                "理想的看电影零食"
            ],
            th: [
                "ชีสแท้ระดับพรีเมียม",
                "รสเค็มมัน ไม่เลี่ยน",
                "เหมาะสำหรับเป็นขนมขบเคี้ยวเวลาดูหนัง"
            ],
            vi: [
                "Phô mai thật cao cấp",
                "Vị mặn ngon, không ngấy",
                "Lý tưởng để ăn vặt khi xem phim"
            ] // NEW VIETNAM
        },
        harga: { thb: 85.00, usd: 2.45, khr: 10500 },
        stok: 'preorder', 
        preorder_contact: 'WA' 
    }
];

// 3. KAMUS TERJEMAHAN UNTUK ELEMEN NON-PRODUK (STATIS)
const DICTIONARY = {
    'add_to_cart': { id: "Tambah Keranjang", en: "Add to Cart", kh: "បន្ថែមរទេះ", zh: "加入购物", th: "เพิ่มตะกร้า", vi: "Thêm vào giỏ" }, // NEW VIETNAM
    'out_of_stock': { id: "Stok Habis", en: "Out of Stock", kh: "អស់ស្តុក", zh: "缺货", th: "สินค้าหมด", vi: "Hết hàng" }, // NEW VIETNAM
    'pre_order': { id: "Pre-Order via", en: "Pre-Order via", kh: "កុម្ម៉ង់ទុកមុនតាមរយៈ", zh: "通过预购", th: "สั่งจองผ่าน", vi: "Đặt trước qua" }, // NEW VIETNAM
    
    'cart_title': { id: "Keranjang Belanja Anda", en: "Your Cart", kh: "រទេះរុញរបស់អ្នក", zh: "您的购物车", th: "ตะกร้าสินค้าของคุณ", vi: "Giỏ hàng của bạn" }, // NEW VIETNAM
    'cart_empty': { id: "Keranjang kosong.", en: "Cart is empty.", kh: "រទេះរុញទទេ។", zh: "购物车是空的。", th: "ตะกร้าว่างเปล่า", vi: "Giỏ hàng trống." }, // NEW VIETNAM
    'subtotal': { id: "Subtotal", en: "Subtotal", kh: "សរុបបណ្តោះអាសន្ន", zh: "小计", th: "ราคารวม", vi: "Tổng phụ" }, // NEW VIETNAM
    'ready_checkout': { id: "Siap Checkout!", en: "Ready to Checkout!", kh: "ត្រៀមទូទាត់!", zh: "准备结账!", th: "พร้อมชำระเงิน!", vi: "Sẵn sàng thanh toán!" }, // NEW VIETNAM
    'min_purchase': { id: "Pembelian minimum:", en: "Minimum purchase:", kh: "ការទិញអប្បបរមា:", zh: "最低购买金额:", th: "ยอดซื้อขั้นต่ำ:", vi: "Mua hàng tối thiểu:" }, // NEW VIETNAM
    'your_total': { id: "Total Anda:", en: "Your Total:", kh: "ផលបូករបស់អ្នក:", zh: "您的总額:", th: "ราคารวมของคุณ:", vi: "Tổng cộng của bạn:" }, // NEW VIETNAM
    'checkout_contact': { id: "Lanjutkan ke pemesanan via kontak:", en: "Continue to order via contact:", kh: "បន្តការកុម្ម៉ង់តាមរយៈទំនាក់ទំនង:", zh: "继续通过联系人订购:", th: "ดำเนินการสั่งซื้อผ่านการติดต่อ:", vi: "Tiếp tục đặt hàng qua liên hệ:" }, // NEW VIETNAM
    'checkout_button': { id: "Checkout via", en: "Checkout via", kh: "ទូទាត់តាមរយៈ", zh: "通过结账", th: "ชำระเงินผ่าน", vi: "Thanh toán qua" }, // NEW VIETNAM
    'search_placeholder': { id: "Cari nama produk (Kopi, Masker, Biskuit, dll.)", en: "Search product name (Coffee, Mask, Biscuit, etc.)", kh: "ស្វែងរកឈ្មោះផលិតផល (កាហ្វេ, ម៉ាស់, នំប៊ីស្គីត, ល។)", zh: "搜索产品名称 (咖啡, 面膜, 饼干等)", th: "ค้นหาชื่อผลิตภัณฑ์ (กาแฟ, มาส์ก, บิสกิต, ฯลฯ)", vi: "Tìm kiếm tên sản phẩm (Cà phê, Mặt nạ, Bánh quy, v.v.)" }, // NEW VIETNAM
    'all_filter': { id: "Semua", en: "All", kh: "ទាំងអស់", zh: "全部", th: "ทั้งหมด", vi: "Tất cả" }, // NEW VIETNAM
    'promo_title': { id: "Promo Minuman Sehat! (Healthy Drink Promo!)", en: "Healthy Drink Promo! (10% OFF)", kh: "ប្រូម៉ូសិនភេសជ្ជៈសុខភាព! (បញ្ចុះតម្លៃ 10%)", zh: "健康饮品促销！(九折)", th: "โปรโมชั่นเครื่องดื่มเพื่อสุขภาพ! (ลด 10%)", vi: "Khuyến mãi đồ uống tốt cho sức khỏe! (Giảm 10%)" }, // NEW VIETNAM
    'promo_desc': { id: "Dapatkan potongan 10% untuk semua Jus Buah Racikan hari ini. Klik untuk pesan!", en: "Get 10% OFF all Blended Fruit Juices today. Click to order!", kh: "ទទួលបានការបញ្ចុះតម្លៃ 10% លើទឹកផ្លែឈើច្របាច់ទាំងអស់នៅថ្ងៃនេះ។ ចុចដើម្បីកក់!", zh: "今日所有混合果汁九折优惠。 点击订购！", th: "รับส่วนลด 10% สำหรับน้ำผลไม้ปั่นทั้งหมดวันนี้ คลิกเพื่อสั่งซื้อ!", vi: "Giảm 10% cho tất cả nước ép Trái Cây Hỗn Hợp hôm nay. Nhấp vào để đặt hàng!" }, // NEW VIETNAM
    'promo_button': { id: "Lihat Promo Segar", en: "See Fresh Promo", kh: "See Fresh Promo", zh: "查看新鲜促销", th: "ดูโปรโมชั่นสด", vi: "Xem Khuyến Mãi Mới" }, // NEW VIETNAM
};


// 4. FUNGSI PENGGANTIAN BAHASA UTAMA & NON-MODAL

const getTranslation = (key) => DICTIONARY[key] ? DICTIONARY[key][activeLang] || DICTIONARY[key]['en'] : `[${key}]`;

/**
 * FUNGSI UTAMA PENGGANTIAN BAHASA
 */
const changeLanguage = (lang) => {
    activeLang = lang;
    
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    
    // 1. Perbarui teks statis di Header (H2 dan P)
    document.querySelectorAll('h2[id^="header-subtitle-"], p[id^="header-text-"]').forEach(el => el.style.display = 'none');
    
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
    // Jika ada filter aktif, gunakan teksnya. Jika tidak ada, gunakan 'Semua' (default).
    const activeCategoryText = activeFilterEl ? activeFilterEl.textContent : getTranslation('all_filter');
    
    renderFilters();
    // Gunakan kategori ASLI untuk filtering, bukan teks terjemahan
    filterUtama(Object.keys(DICTIONARY.all_filter).find(key => DICTIONARY.all_filter[key] === activeCategoryText) ? 'Semua' : activeCategoryText);

    renderKeranjang();
};

/**
 * FUNGSI KHUSUS: Memilih bahasa dan mengaktifkan tombol yang sesuai (FIX BARU NON-MODAL)
 */
const selectAndCloseModal = (lang) => {
    changeLanguage(lang);
    
    // Tampilkan konten utama (jika sebelumnya disembunyikan)
    document.getElementById('main-content-wrapper').style.opacity = '1';

    // Kelola class 'active' pada tombol bahasa
    document.querySelectorAll('#language-selector-fixed .tombol-bahasa').forEach(btn => {
        btn.classList.remove('active');
        // Mendapatkan kode bahasa dari atribut onclick
        const match = btn.getAttribute('onclick').match(/'([^']+)'/);
        const btnLang = match ? match[1] : null;
        
        if (btnLang === lang) {
            btn.classList.add('active');
        }
    });
};

// 5. FUNGSI UTAMA UNTUK MERENDER PRODUK & FILTER
const getProductById = (id) => PRODUCTS.find(p => p.id === id);

// Fungsi untuk membuat HTML card produk
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

    const namaText = product.nama[activeLang] || product.nama['en'];
    const deskripsiText = product.deskripsi[activeLang] || product.deskripsi['en'];
    const cardClass = isStokHabis ? 'kartu-produk stok-habis' : 'kartu-produk';
    
    // GENERATE SELLING POINTS
    const points = product.selling_points[activeLang] || product.selling_points['en'] || [];
    const sellingPointsHtml = points.length > 0 ? `
        <div class="selling-points-container">
            <ul>
                ${points.map(point => `<li><i class="fas fa-check-circle"></i> ${point}</li>`).join('')}
            </ul>
        </div>
    ` : '';
    
    return `
        <div class="${cardClass}" data-id="${product.id}">
            <img src="${product.image}" alt="${namaText}">
            <div class="detail-produk">
                <h2 class="nama-utama">${namaText}</h2>
                <p class="deskripsi">${deskripsiText}</p>
                
                ${sellingPointsHtml} <div class="multi-currency-price">
                    <p class="harga utama">฿ ${product.harga.thb.toFixed(2)} (THB)</p>
                    <p class="harga kecil">$ ${product.harga.usd.toFixed(2)} / KHR ${product.harga.khr.toLocaleString('en-US')}</p>
                </div>
                
                <p class="kode-sku-info">SKU: ${product.sku}</p>

                <div class="tombol-sosial-container">
                    <button class="tombol-keranjang ${tombolClass}" data-text-mobile="${tombolText.split(' ')[0]}" onclick="${tombolAction}">
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
        const buttonText = cat === 'Semua' ? getTranslation('all_filter') : cat;
        button.textContent = buttonText;
        
        // Simpan kategori ASLI (tidak diterjemahkan) di data attribute
        button.setAttribute('data-category-original', cat);

        button.onclick = () => filterUtama(cat); 
        container.appendChild(button);
    });

    // Aktifkan filter 'Semua' (yang sudah diterjemahkan) saat dimuat
    const allFilterButton = Array.from(container.children).find(btn => btn.getAttribute('data-category-original') === 'Semua');
    if (allFilterButton) {
        allFilterButton.classList.add('aktif');
    }
};

// Fungsi filter utama
const filterUtama = (kategoriOriginal) => {
    const allFilterText = getTranslation('all_filter');
    
    // Kelola kelas 'aktif' berdasarkan kategori ASLI
    document.querySelectorAll('.tombol-filter').forEach(btn => {
        btn.classList.remove('aktif');
        const original = btn.getAttribute('data-category-original');
        
        if (original === kategoriOriginal) {
             btn.classList.add('aktif');
        }
    });

    // Lakukan filter berdasarkan kategori ASLI
    let filteredProducts;
    if (kategoriOriginal === 'Semua') {
        filteredProducts = PRODUCTS;
    } else {
        filteredProducts = PRODUCTS.filter(p => p.kategori.includes(kategoriOriginal));
    }

    renderProducts(filteredProducts);
};

// Fungsi pencarian
const handleSearch = () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    
    const filteredProducts = PRODUCTS.filter(product => {
        // Ambil semua nama produk dari semua bahasa
        const allNames = Object.values(product.nama).join(' ').toLowerCase(); 
        const allDescriptions = Object.values(product.deskripsi).join(' ').toLowerCase(); 
        const allSellingPoints = Object.values(product.selling_points).flat().join(' ').toLowerCase();
        
        const textToSearch = `${allNames} ${allDescriptions} ${allSellingPoints} ${product.sku} ${product.kategori.join(' ')}`.toLowerCase();
        return textToSearch.includes(query);
    });

    // Hapus semua filter aktif saat melakukan pencarian
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
    renderKeranjang(); 
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

// Fungsi untuk merender isi keranjang
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

            const displayLang = product.nama[activeLang] || product.nama['en'];
            const secondaryLangKey = activeLang !== 'en' ? 'en' : 'id';
            const secondaryLang = product.nama[secondaryLangKey] || product.nama['en']; 

            html += `
                <div class="item-keranjang">
                    <div class="info-item">
                        <span class="nama-item">${displayLang} (x${quantity})</span>
                        <span class="nama-tambahan-keranjang">${secondaryLang}</span>
                        <span class="harga-item">${getTranslation('subtotal')}: ฿ ${(subtotalTHB).toFixed(2)}</span>
                    </div>
                    <div class="kontrol-item">
                        <button onclick="ubahKuantitas(${id}, -1)" class="hapus-item"><i class="fas fa-minus"></i></button>
                        <button onclick="ubahKuantitas(${id}, 1)"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            `;
        }
    }

    container.innerHTML = html;
    document.getElementById('total-text').textContent = `${getTranslation('your_total')}: `;
    totalElementTHB.textContent = `฿ ${totalTHB.toFixed(2)}`;
    document.querySelector('.pesan-kontak').textContent = getTranslation('checkout_contact');
    
    document.querySelectorAll('.tombol-checkout').forEach(btn => {
        const platform = btn.classList.contains('whatsapp') ? 'WhatsApp' : 'Telegram';
        btn.innerHTML = `<i class="fab fa-${platform.toLowerCase()}"></i> ${getTranslation('checkout_button')} ${platform}`;
    });

    // Validasi Minimum Pembelian
    if (totalTHB < MIN_ORDER_THB && Object.keys(keranjang).length > 0) {
        const kurangTHB = (MIN_ORDER_THB - totalTHB).toFixed(2);
        pesanValidasiElement.innerHTML = `
            <p class="error-msg">❌ ${getTranslation('min_purchase')} ฿ ${MIN_ORDER_THB.toFixed(2)}. ${getTranslation('your_total')} ฿ ${totalTHB.toFixed(2)}. Kurang ฿ ${kurangTHB}.</p>`;
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
        const minMsg = DICTIONARY['min_purchase'][activeLang] || DICTIONARY['min_purchase']['en'];
        alert(`${minMsg} ฿${MIN_ORDER_THB.toFixed(2)} (THB). ${getTranslation('your_total')}: ฿${totalTHB.toFixed(2)}`);
        return;
    }

    let finalMessage = "Halo Leap Store! Saya ingin memesan:\n\n---\n";
    
    // LIST BAHASA BARU: Tambahkan 'vi'
    const languages = ['id', 'en', 'kh', 'zh', 'th', 'vi']; 
    languages.forEach(lang => {
        let pesanLang = `[${lang.toUpperCase()}]\n`;
        for (const id in keranjang) {
            const product = getProductById(parseInt(id));
            const quantity = keranjang[id];
            const nama = product.nama[lang] || product.nama['en']; 
            pesanLang += `- ${nama} (x${quantity})\n`;
        }
        pesanLang += `${DICTIONARY['your_total'][lang] || DICTIONARY['your_total']['en']}: ฿ ${totalTHB.toFixed(2)} (THB)\n\n`;
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
    if (!product) return;

    let bahasaPesan = DICTIONARY['pre_order'][activeLang] || DICTIONARY['pre_order']['en'];
    let namaProduk = product.nama[activeLang] || product.nama['en'];

    let pesan = `Halo Leap Store, saya tertarik dengan Pre-Order produk ${namaProduk} (SKU: ${product.sku}). Mohon informasinya.`;
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
    
    // Ambil bahasa yang tersimpan
    const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    
    if (savedLang) {
        // Jika bahasa sudah ada, gunakan dan aktifkan tombol
        activeLang = savedLang;
        selectAndCloseModal(activeLang); 
    } else {
        // Jika belum ada, set default ke 'en' dan aktifkan
        activeLang = 'en'; 
        selectAndCloseModal(activeLang);
    }
    
    updateBadge(); 
});

// Tutup modal keranjang jika user klik di luar modal
window.onclick = (event) => {
    const modalKeranjang = document.getElementById('modal-keranjang');
    if (event.target === modalKeranjang) {
        tutupKeranjang();
    }
};

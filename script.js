/**
 * ==========================================================
 * SCRIPT JAVASCRIPT LENGKAP - FINAL VERSION
 * ==========================================================
 * Perubahan Utama:
 * 1. Menghilangkan deskripsi produk dan merapatkan semua margin/padding vertikal.
 * 2. Mengubah tampilan harga menjadi dua kotak bersebelahan (Mata Uang Pilihan & THB Ref) 
 * dengan ukuran font yang seragam.
 * 3. MODIFIKASI JUDUL DAN SKU: Judul dibuat lebih besar/tebal dengan background, 
 * dan SKU dibuat tebal/kontras di atas blok harga.
 */

// 1. VARIABEL GLOBAL DAN BAHASA AKTIF
let keranjang = {};
const MIN_ORDER_THB = 500;
const KONTAK_WA = '+85589640025'; 
const KONTAK_TELEGRAM = 'leapstorepoipet'; 
const LANGUAGE_STORAGE_KEY = 'leap_store_language';
let activeLang = 'en'; 

// 🚨 KONFIGURASI API KEY DAN KURS
const BASE_CURRENCY = 'THB';
// Ganti ini dengan API Key Anda yang valid
const API_KEY = 'c67fe61514ad55a1649ae408'; 
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${BASE_CURRENCY}`;

// Kurs Fallback (Jika API gagal)
let exchangeRates = {
    'THB': 1, 
    'USD': 0.0275, 
    'KHR': 114.0,  
    'IDR': 430.0,  
    'CNY': 0.198,  
    'VI': 650.0,   
}; 

// Peta Mata Uang berdasarkan Bahasa
const CURRENCY_MAP = {
    'id': { code: 'IDR', symbol: 'Rp', format: 'Normal' },
    'zh': { code: 'CNY', symbol: '¥', format: 'Normal' },
    'th': { code: 'THB', symbol: '฿', format: 'Normal' },
    'kh': { code: 'KHR', symbol: 'KHR', format: 'Normal' },
    'en': { code: 'USD', symbol: '$', format: 'Normal' },
    'vi': { code: 'USD', symbol: '$', format: 'Normal' }, 
};

const getCurrencyDetails = (lang) => {
    return CURRENCY_MAP[lang] || CURRENCY_MAP['en'];
};

// URL GAMBAR SEMENTARA BARU
const TEMP_IMAGE_URL = 'https://infocapt77.com/wp-content/uploads/2025/10/CAPTAIN-1x1-2.jpg';

// 2. DATA PRODUK
const PRODUCTS = [
    {
        id: 1, sku: 'LP-K001', image: TEMP_IMAGE_URL, kategori: ['Minuman Racikan & Segar', 'Kopi & Teh'], color_code: '#8BC34A', 
        nama: { id: "Kopi Hitam Istimewa", en: "Special Black Coffee", kh: "កាហ្វេខ្មៅពិសេស" }, 
        deskripsi: { id: "Kopi hitam kental", en: "Thick black coffee", kh: "កាហ្វេខ្មៅខាប់" },
        selling_points: { id: ["100% Arabika", "Diracik Fresh", "Es/Hangat"], en: ["100% Arabica", "Freshly Made", "Iced or Hot"], kh: ["100% Arabica", "ធ្វើថ្មី", "ក្តៅ/ត្រជាក់"] },
        harga_thb: 70.00, 
        stok: 'ada', preorder_contact: 'WA' 
    },
    {
        id: 2, sku: 'LP-M002', image: TEMP_IMAGE_URL, kategori: ['Perawatan Diri', 'Kesehatan'], color_code: '#FFC107', 
        nama: { id: "Masker Kolagen Gold", en: "Gold Collagen Mask", kh: "ម៉ាស់បិទមុខមាស" },
        deskripsi: { id: "Masker untuk mencerahkan kulit.", en: "Luxury mask to brighten skin.", kh: "ម៉ាស់ប្រណិត" },
        selling_points: { id: ["Mengandung Emas Asli", "Mencerahkan Efektif", "15 Menit Ekspres"], en: ["Contains Real Gold", "Highly Effective Brightening", "15-Minute Express Treatment"], kh: ["មានមាសពិត", "ភ្លឺថ្លាខ្លាំង", "15 នាទីលឿន"] },
        harga_thb: 120.00,
        stok: 'ada', preorder_contact: null 
    },
    {
        id: 3, sku: 'LP-S003', image: TEMP_IMAGE_URL, kategori: ['Minuman Racikan & Segar', 'Jus Buah'], color_code: '#8BC34A', 
        nama: { id: "Jus Mangga Alpukat", en: "Mango Avocado Juice", kh: "ទឹកក្រឡុកស្វាយផ្លែប័រ" },
        deskripsi: { id: "Kombinasi sehat dan mengenyangkan.", en: "Healthy and filling combo.", kh: "ការរួមបញ្ចូលគ្នាដែលមានសុខភាពល្អ" },
        selling_points: { id: ["Vitamin A dan E Tinggi", "Tanpa Gula Tambahan (Request)", "Penyegar Paling Laris"], en: ["High in Vitamins A & E", "No Added Sugar (On Request)", "Bestselling Refresher!"], kh: ["វីតាមីន A & E ខ្ពស់", "គ្មានជាតិស្ករ", "ពេញនិយមបំផុត"] },
        harga_thb: 150.00,
        stok: 'habis', preorder_contact: 'TELEGRAM' 
    },
    {
        id: 4, sku: 'LP-S004', image: TEMP_IMAGE_URL, kategori: ['Snack & Makanan Ringan'], color_code: '#D4E157', 
        nama: { id: "Biskuit Keju Krispi", en: "Crispy Cheese Biscuits", kh: "នំប៊ីស្គីតឈីសស្រួយ" },
        deskripsi: { id: "Snack renyah keju premium.", en: "Premium crispy cheese snack.", kh: "អាហារសម្រន់ឈីស" },
        selling_points: { id: ["Keju Asli Premium"], en: ["Premium Real Cheese"], kh: ["ឈីសពិតប្រាកដ"] },
        harga_thb: 85.00,
        stok: 'preorder', preorder_contact: 'WA' 
    },
    { id: 5, sku: 'LP-T005', image: TEMP_IMAGE_URL, kategori: ['Minuman Racikan & Segar', 'Kopi & Teh'], color_code: '#8BC34A', nama: { id: "Teh Melati Dingin", en: "Cold Jasmine Tea" }, deskripsi: { id: "Penyegar alami", en: "Natural refresher" }, selling_points: { id: ["Tanpa pemanis"], en: ["No sweeteners"] }, harga_thb: 55.00, stok: 'ada' },
    { id: 6, sku: 'LP-S006', image: TEMP_IMAGE_URL, kategori: ['Snack & Makanan Ringan'], color_code: '#D4E157', nama: { id: "Keripik Kentang Truffle", en: "Truffle Potato Chips" }, deskripsi: { id: "Keripik rasa truffle mewah.", en: "Luxury truffle flavor." }, selling_points: { id: ["Truffle oil asli"], en: ["Real truffle oil"] }, harga_thb: 180.00, stok: 'ada' },
    { id: 7, sku: 'LP-M007', image: TEMP_IMAGE_URL, kategori: ['Perawatan Diri', 'Kesehatan'], color_code: '#FFC107', nama: { id: "Hand Sanitizer Lemon", en: "Lemon Hand Sanitizer" }, deskripsi: { id: "Melindungi tangan dari bakteri.", en: "Protects from bacteria." }, selling_points: { id: ["Alkohol 70%"], en: ["70% Alcohol"] }, harga_thb: 95.00, stok: 'ada' },
    { id: 8, sku: 'LP-D008', image: TEMP_IMAGE_URL, kategori: ['Kesehatan'], color_code: '#FFC107', nama: { id: "Kapsul Vitamin C", en: "Vitamin C Capsules" }, deskripsi: { id: "Suplemen daya tahan tubuh.", en: "Immunity supplement." }, selling_points: { id: ["1000mg per kapsul"], en: ["1000mg per capsule"] }, harga_thb: 450.00, stok: 'ada' },
    { id: 9, sku: 'LP-J009', image: TEMP_IMAGE_URL, kategori: ['Snack & Makanan Ringan'], color_code: '#D4E157', nama: { id: "Almond Panggang Madu", en: "Honey Roasted Almonds" }, deskripsi: { id: "Camilan sehat tinggi protein.", en: "Healthy high-protein snack." }, selling_points: { id: ["Kaya serat"], en: ["Rich in fiber"] }, harga_thb: 110.00, stok: 'ada' },
    { id: 10, sku: 'LP-B010', image: TEMP_IMAGE_URL, kategori: ['Minuman Racikan & Segar'], color_code: '#8BC34A', nama: { id: "Minuman Berenergi", en: "Energy Drink" }, deskripsi: { id: "Meningkatkan fokus dan performa.", en: "Boosts focus and performance." }, selling_points: { id: ["Taurine & Ginseng"], en: ["Taurine & Ginseng"] }, harga_thb: 60.00, stok: 'ada' },
    { id: 11, sku: 'LP-S011', image: TEMP_IMAGE_URL, kategori: ['Perawatan Diri'], color_code: '#FFC107', nama: { id: "Sikat Gigi Charcoal", en: "Charcoal Toothbrush" }, deskripsi: { id: "Pembersihan mendalam.", en: "Deep cleaning." }, selling_points: { id: ["100% serat alami"], en: ["100% natural fiber"] }, harga_thb: 80.00, stok: 'ada' },
    { id: 12, sku: 'LP-S012', image: TEMP_IMAGE_URL, kategori: ['Snack & Makanan Ringan', 'Kesehatan'], color_code: '#D4E157', nama: { id: "Permen Pelega Tenggorokan", en: "Throat Relief Candy" }, deskripsi: { id: "Cepat meredakan sakit tenggorokan.", en: "Quick relief for sore throat." }, selling_points: { id: ["Ekaliptus kuat"], en: ["Strong Eucalyptus"] }, harga_thb: 45.00, stok: 'ada' },
    { id: 13, sku: 'LP-M013', image: TEMP_IMAGE_URL, kategori: ['Minuman Racikan & Segar', 'Kesehatan'], color_code: '#8BC34A', nama: { id: "Teh Detox Herbal", en: "Herbal Detox Tea" }, deskripsi: { id: "Membersihkan pencernaan saat tidur.", en: "Cleanses digestive system." }, selling_points: { id: ["10 Herbal Alami"], en: ["10 Natural Herbs"] }, harga_thb: 220.00, stok: 'preorder', preorder_contact: 'TELEGRAM' },
    { id: 14, sku: 'LP-L014', image: TEMP_IMAGE_URL, kategori: ['Perawatan Diri'], color_code: '#FFC107', nama: { id: "Lip Balm Shea Butter", en: "Shea Butter Lip Balm" }, deskripsi: { id: "Menghidrasi bibir kering.", en: "Hydrates dry lips." }, selling_points: { id: ["SPF 15"], en: ["SPF 15"] }, harga_thb: 105.00, stok: 'ada' },
    { id: 15, sku: 'LP-C015', image: TEMP_IMAGE_URL, kategori: ['Snack & Makanan Ringan'], color_code: '#D4E157', nama: { id: "Cokelat Hitam 80%", en: "80% Dark Chocolate" }, deskripsi: { id: "Kaya antioksidan.", en: "Rich in antioxidants." }, selling_points: { id: ["Cocok untuk diet"], en: ["Suitable for diet"] }, harga_thb: 135.00, stok: 'ada' },
    { id: 16, sku: 'LP-K016', image: TEMP_IMAGE_URL, kategori: ['Minuman Racikan & Segar', 'Kopi & Teh'], color_code: '#8BC34A', nama: { id: "Kopi Luwak Arabika", en: "Arabica Luwak Coffee" }, deskripsi: { id: "Rasa unik dan mewah.", en: "Unique and luxurious taste." }, selling_points: { id: ["Rasa sangat halus"], en: ["Very smooth taste"] }, harga_thb: 800.00, stok: 'preorder', preorder_contact: 'WA' },
    { id: 17, sku: 'LP-S017', image: TEMP_IMAGE_URL, kategori: ['Perawatan Diri'], color_code: '#FFC107', nama: { id: "Shampo Anti Rambut Rontok", en: "Anti-Hair Loss Shampoo" }, deskripsi: { id: "Menguatkan akar rambut.", en: "Strengthens hair roots." }, selling_points: { id: ["Biotin dan Keratin"], en: ["Biotin and Keratin"] }, harga_thb: 380.00, stok: 'ada' },
    { id: 18, sku: 'LP-S018', image: TEMP_IMAGE_URL, kategori: ['Minuman Racikan & Segar', 'Kesehatan'], color_code: '#8BC34A', nama: { id: "Susu Kedelai Organik", en: "Organic Soy Milk" }, deskripsi: { id: "Protein nabati, rendah lemak.", en: "Plant protein, low fat." }, selling_points: { id: ["Gluten-Free"], en: ["Gluten-Free"] }, harga_thb: 75.00, stok: 'ada' },
    { id: 19, sku: 'LP-S019', image: TEMP_IMAGE_URL, kategori: ['Snack & Makanan Ringan'], color_code: '#D4E157', nama: { id: "Nori Rumput Laut Pedas", en: "Spicy Roasted Seaweed" }, deskripsi: { id: "Snack renyah pedas manis.", en: "Crispy sweet and spicy snack." }, selling_points: { id: ["Rendah kalori"], en: ["Low calorie"] }, harga_thb: 50.00, stok: 'ada' },
    { id: 20, sku: 'LP-P020', image: TEMP_IMAGE_URL, kategori: ['Perawatan Diri'], color_code: '#FFC107', nama: { id: "Pasta Gigi Pemutih Herbal", en: "Herbal Whitening Toothpaste" }, deskripsi: { id: "Gigi putih dan napas segar.", en: "White teeth and fresh breath." }, selling_points: { id: ["Bebas Fluoride"], en: ["Fluoride-Free"] }, harga_thb: 160.00, stok: 'ada' },
    { id: 21, sku: 'LP-J021', image: TEMP_IMAGE_URL, kategori: ['Perawatan Diri'], color_code: '#FFC107', nama: { id: "Gel Lidah Buaya Murni", en: "Pure Aloe Vera Gel" }, deskripsi: { id: "Melembabkan kulit.", en: "Moisturizes skin." }, selling_points: { id: ["99% Lidah Buaya"], en: ["99% Aloe Vera"] }, harga_thb: 190.00, stok: 'ada' },
    { id: 22, sku: 'LP-K022', image: TEMP_IMAGE_URL, kategori: ['Minuman Racikan & Segar', 'Kopi & Teh'], color_code: '#8BC34A', nama: { id: "Kopi Instan 3-in-1", en: "Classic 3-in-1 Coffee" }, deskripsi: { id: "Kopi instan cepat saji.", en: "Quick instant coffee." }, selling_points: { id: ["Mudah disajikan"], en: ["Easy to prepare"] }, harga_thb: 50.00, stok: 'ada' },
    { id: 23, sku: 'LP-S023', image: TEMP_IMAGE_URL, kategori: ['Snack & Makanan Ringan'], color_code: '#D4E157', nama: { id: "Roti Gandum Utuh Cokelat", en: "Chocolate Whole Wheat Bread" }, deskripsi: { id: "Cocok untuk sarapan.", en: "Perfect for breakfast." }, selling_points: { id: ["Tinggi serat"], en: ["High fiber"] }, harga_thb: 150.00, stok: 'ada' },
    { id: 24, sku: 'LP-M024', image: TEMP_IMAGE_URL, kategori: ['Kesehatan'], color_code: '#FFC107', nama: { id: "Minyak Esensial Lavender", en: "Lavender Essential Oil" }, deskripsi: { id: "Membantu relaksasi.", en: "Helps relaxation." }, selling_points: { id: ["Aroma terapi alami"], en: ["Natural aromatherapy"] }, harga_thb: 280.00, stok: 'ada' },
    { id: 25, sku: 'LP-K025', image: TEMP_IMAGE_URL, kategori: ['Perawatan Diri'], color_code: '#FFC107', nama: { id: "Krim Tangan Aloe & Vitamin E", en: "Aloe & Vitamin E Hand Cream" }, deskripsi: { id: "Melembutkan dan melindungi tangan.", en: "Softens and protects hands." }, selling_points: { id: ["Tidak lengket"], en: ["Non-greasy formula"] }, harga_thb: 90.00, stok: 'ada' },
    { id: 26, sku: 'LP-B026', image: TEMP_IMAGE_URL, kategori: ['Minuman Racikan & Segar'], color_code: '#8BC34A', nama: { id: "Air Mineral Premium (1L)", en: "Premium Mineral Water (1L)" }, deskripsi: { id: "pH seimbang.", en: "Balanced pH." }, selling_points: { id: ["pH 7.5"], en: ["pH 7.5"] }, harga_thb: 30.00, stok: 'ada' }
];


// 3. KAMUS TERJEMAHAN
const DICTIONARY = {
    'add_to_cart': { id: "Tambah Keranjang", en: "Add to Cart", kh: "បន្ថែមរទេះ", zh: "加入购物", th: "เพิ่มตะกร้า", vi: "Thêm vào giỏ" }, 
    'out_of_stock': { id: "Stok Habis", en: "Out of Stock", kh: "អស់ស្តុក", zh: "缺货", th: "สินค้าหมด", vi: "Hết hàng" }, 
    'pre_order': { id: "Pre-Order via", en: "Pre-Order via", kh: "កុម្ម៉ង់ទុកមុនតាមរយៈ", zh: "通过预购", th: "สั่งจองผ่าน", vi: "Đặt trước qua" }, 
    'cart_title': { id: "Keranjang Belanja", en: "Your Cart", kh: "រទេះរុញ", zh: "购物车", th: "ตะกร้าสินค้า", vi: "Giỏ hàng" }, 
    'cart_empty': { id: "Keranjang kosong.", en: "Cart is empty.", kh: "រទេះទទេ។", zh: "购物车空的。", th: "ตะกร้าว่าง", vi: "Giỏ trống." }, 
    'subtotal': { id: "Subtotal", en: "Subtotal", kh: "សរុបបណ្តោះអាសន្ន", zh: "小计", th: "ราคารวม", vi: "Tổng phụ" }, 
    'ready_checkout': { id: "Siap Checkout!", en: "Ready to Checkout!", kh: "ត្រៀមទូទាត់!", zh: "准备结账!", th: "พร้อมชำระเงิน!", vi: "Sẵn sàng!" }, 
    'min_purchase': { id: "Pembelian minimum:", en: "Minimum purchase:", kh: "ការទិញអប្បបរមា:", zh: "最低购买金额:", th: "ยอดซื้อขั้นต่ำ:", vi: "Mua tối thiểu:" }, 
    'your_total': { id: "Total Anda:", en: "Your Total:", kh: "ផលបូក:", zh: "您的总額:", th: "ราคารวม:", vi: "Tổng cộng:" }, 
    'checkout_contact': { id: "Lanjutkan via kontak:", en: "Continue via contact:", kh: "បន្តតាមទំនាក់ទំនង:", zh: "继续通过联系人:", th: "ดำเนินการผ่าน:", vi: "Tiếp tục qua:" }, 
    'checkout_button': { id: "Checkout via", en: "Checkout via", kh: "ទូទាត់តាមរយៈ", zh: "通过结账", th: "ชำระเงินผ่าน", vi: "Thanh toán qua" }, 
    'search_placeholder': { id: "Cari produk...", en: "Search product...", kh: "ស្វែងរកផលិតផល...", zh: "搜索产品...", th: "ค้นหาสินค้า...", vi: "Tìm kiếm..." }, 
    'all_filter': { id: "Semua", en: "All", kh: "ទាំងអស់", zh: "全部", th: "ทั้งหมด", vi: "Tất cả" }, 
};

const getTranslation = (key) => DICTIONARY[key] ? DICTIONARY[key][activeLang] || DICTIONARY[key]['en'] : `[${key}]`;


// 4. FUNGSI PENGAMBILAN KURS (API)
async function fetchExchangeRates() {
    console.log(`Mencoba mengambil kurs real-time menggunakan ${BASE_CURRENCY} sebagai Base...`);
    
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (data && data.conversion_rates) {
            const rates = data.conversion_rates;
            
            exchangeRates['THB'] = 1; 
            
            // Perbarui kurs mata uang lokal
            if (rates['USD']) exchangeRates['USD'] = rates['USD'];
            if (rates['KHR']) exchangeRates['KHR'] = rates['KHR'];
            if (rates['IDR']) exchangeRates['IDR'] = rates['IDR'];
            if (rates['CNY']) exchangeRates['CNY'] = rates['CNY'];

            console.log("Kurs berhasil diperbarui dari API:", exchangeRates);
        } else {
            console.error("Data kurs tidak valid dari API. Menggunakan kurs fallback.");
        }
    } catch (error) {
        console.error("Gagal mengambil kurs API. Menggunakan kurs fallback.", error);
    }
}

// 5. FUNGSI UTAMA PENGGANTIAN BAHASA
const changeLanguage = (lang) => {
    activeLang = lang;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    
    document.querySelectorAll('h2[id^="header-subtitle-"], p[id^="header-text-"]').forEach(el => el.style.display = 'none');
    
    document.getElementById(`header-subtitle-${lang}`) && (document.getElementById(`header-subtitle-${lang}`).style.display = 'block');
    document.getElementById(`header-text-${lang}`) && (document.getElementById(`header-text-${lang}`).style.display = 'block');
    document.getElementById('search-input').placeholder = getTranslation('search_placeholder');
    
    renderFilters();
    filterUtama(document.querySelector('.tombol-filter.aktif')?.getAttribute('data-category-original') || 'Semua');
    renderKeranjang();
};

const selectAndCloseModal = (lang) => {
    changeLanguage(lang);
    document.querySelectorAll('#language-selector-fixed .tombol-bahasa').forEach(btn => {
        btn.classList.remove('active');
        const match = btn.getAttribute('onclick').match(/'([^']+)'/);
        const btnLang = match ? match[1] : null;
        if (btnLang === lang) {
            btn.classList.add('active');
        }
    });
};

// 6. FUNGSI MERENDER PRODUK (LOGIKA KURS DINAMIS)
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

    const cardColor = product.color_code || '#CCCCCC';
    
    const currencyDetails = getCurrencyDetails(activeLang);
    const currencyCode = currencyDetails.code; 
    const currencySymbol = currencyDetails.symbol; 
    const rate = exchangeRates[currencyCode] || exchangeRates['USD']; 
    const basePriceTHB = product.harga_thb;
    const primaryPrice = basePriceTHB * rate; 
    const secondaryPriceTHB = basePriceTHB; 
    
    const formatPrice = (price, code) => {
        if (code === 'IDR' || code === 'KHR') {
            return Math.round(price).toLocaleString('id-ID'); 
        }
        return (price).toFixed(2);
    };

    const namaText = product.nama[activeLang] || product.nama['en'] || `Product ${product.id}`;
    const cardClass = isStokHabis ? 'kartu-produk stok-habis' : 'kartu-produk';
    
    const points = product.selling_points[activeLang] || product.selling_points['en'] || [];
    
    // Selling Points CSS
    const sellingPointsHtml = points.length > 0 ? `
        <div class="selling-points-container" style="border-left: 5px solid ${cardColor}; background-color: ${cardColor}1A; padding: 5px 10px; margin: 5px 0 5px 0;"> 
            <ul style="list-style: none; margin: 0; padding: 0;">
                ${points.map(point => `<li style="margin-bottom: 2px; line-height: 1.2; font-size: 0.85em;"><i class="fas fa-check-circle" style="color: ${cardColor}; margin-right: 5px;"></i> ${point}</li>`).join('')}
            </ul>
        </div>
    ` : '';
    
    // Harga Bersebelahan CSS
    const primaryColorBox = cardColor; 
    const secondaryColorBox = '#006400'; 
    const priceFontSize = '0.95em'; 

    const multiCurrencyPriceHtml = `
        <div class="multi-currency-price-compact" style="display: flex; justify-content: space-between; gap: 5px; margin-top: 5px; margin-bottom: 5px;">
            <div style="flex: 1; text-align: center; background-color: ${primaryColorBox}; color: white; padding: 8px 5px; border-radius: 5px; font-weight: bold; font-size: ${priceFontSize}; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                ${currencySymbol} ${formatPrice(primaryPrice, currencyCode)} (${currencyCode})
            </div>
            <div style="flex: 1; text-align: center; background-color: ${secondaryColorBox}; color: white; padding: 8px 5px; border-radius: 5px; font-weight: bold; font-size: ${priceFontSize}; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                ฿ ${secondaryPriceTHB.toFixed(2)} (THB)
            </div>
        </div>
    `;

    
    return `
        <div class="${cardClass}" data-id="${product.id}" style="border: 1px solid ${cardColor}; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);">
            <img src="${product.image}" alt="${namaText}" onerror="this.onerror=null;this.src='https://via.placeholder.com/200?text=Image+Error';">
            <div class="detail-produk" style="padding: 10px; padding-top: 5px;"> 
                
                <h2 class="nama-utama" style="
                    color: black; 
                    margin-top: 5px; 
                    margin-bottom: 5px; 
                    font-size: 1.2em; 
                    line-height: 1.3;
                    font-weight: 900; 
                    background-color: #f9f9f9;
                    padding: 5px;
                    border-radius: 3px;
                ">${namaText}</h2>
                
                <p class="kode-sku-info" style="
                    margin-top: 5px; 
                    margin-bottom: 3px; 
                    font-size: 0.85em; 
                    font-weight: bold;
                    color: #004d40; /* Teal gelap untuk kontras */
                ">SKU: ${product.sku}</p>
                
                ${multiCurrencyPriceHtml}
                
                ${sellingPointsHtml} 

                <div class="tombol-sosial-container" style="margin-top: 5px;">
                    <button class="tombol-keranjang ${tombolClass}" data-text-mobile="${tombolText.split(' ')[0]}" onclick="${tombolAction}" ${isStokHabis ? 'disabled' : ''}>
                        <i class="fas fa-shopping-cart"></i> ${tombolText}
                    </button>
                </div>
            </div>
        </div>
    `;
};

// 7. FUNGSI KERANJANG BELANJA, FILTER, SEARCH, DLL (Fungsionalitas pendukung)

const renderProducts = (produkList) => {
    const container = document.getElementById('container-produk');
    container.innerHTML = produkList.map(createProductCard).join('');
};
const getUniqueCategories = () => {
    const categories = new Set();
    PRODUCTS.forEach(product => {
        product.kategori.forEach(cat => categories.add(cat));
    });
    return ['Semua', ...Array.from(categories)];
};
const renderFilters = () => {
    const container = document.getElementById('filter-container');
    const categories = getUniqueCategories();
    container.innerHTML = ''; 
    categories.forEach(cat => {
        const button = document.createElement('button');
        button.className = 'tombol-filter';
        const buttonText = cat === 'Semua' ? getTranslation('all_filter') : cat;
        button.textContent = buttonText;
        button.setAttribute('data-category-original', cat);
        button.onclick = () => filterUtama(cat); 
        container.appendChild(button);
    });
    const allFilterButton = Array.from(container.children).find(btn => btn.getAttribute('data-category-original') === 'Semua');
    if (allFilterButton) {
        allFilterButton.classList.add('aktif');
    }
};
const filterUtama = (kategoriOriginal) => {
    document.querySelectorAll('.tombol-filter').forEach(btn => {
        btn.classList.remove('aktif');
        const original = btn.getAttribute('data-category-original');
        if (original === kategoriOriginal) {
             btn.classList.add('aktif');
        }
    });
    let filteredProducts;
    if (kategoriOriginal === 'Semua') {
        filteredProducts = PRODUCTS;
    } else {
        filteredProducts = PRODUCTS.filter(p => p.kategori.includes(kategoriOriginal));
    }
    renderProducts(filteredProducts);
};
const handleSearch = () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = PRODUCTS.filter(product => {
        const productNames = Object.values(product.nama).join(' ').toLowerCase();
        const productCategories = product.kategori.join(' ').toLowerCase();
        return productNames.includes(query) || productCategories.includes(query) || product.sku.toLowerCase().includes(query);
    });
    document.querySelectorAll('.tombol-filter').forEach(btn => btn.classList.remove('aktif'));
    renderProducts(filteredProducts);
};
document.getElementById('search-input').addEventListener('keyup', handleSearch);
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
            const subtotalTHB = product.harga_thb * quantity; 
            totalTHB += subtotalTHB;

            const displayLang = product.nama[activeLang] || product.nama['en'];
            const secondaryLangKey = activeLang !== 'en' ? 'en' : 'id';
            const secondaryLang = product.nama[secondaryLangKey] || product.nama['en']; 

            html += `
                <div class="item-keranjang" style="padding: 5px 0; border-bottom: 1px dashed #eee;">
                    <div class="info-item">
                        <span class="nama-item">${displayLang} (x${quantity})</span>
                        <span class="nama-tambahan-keranjang" style="font-size: 0.7em; opacity: 0.7;">${secondaryLang}</span>
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

const checkout = (platform) => {
    const totalTHB = Object.keys(keranjang).reduce((sum, id) => {
        const product = getProductById(parseInt(id));
        return sum + (product.harga_thb * keranjang[id]);
    }, 0);

    if (totalTHB < MIN_ORDER_THB) {
        const minMsg = DICTIONARY['min_purchase'][activeLang] || DICTIONARY['min_purchase']['en'];
        alert(`${minMsg} ฿${MIN_ORDER_THB.toFixed(2)} (THB). ${getTranslation('your_total')}: ฿${totalTHB.toFixed(2)}`);
        return;
    }

    let finalMessage = "Halo Leap Store! Saya ingin memesan:\n\n---\n";
    
    const languages = Object.keys(CURRENCY_MAP); 
    languages.forEach(lang => {
        let pesanLang = `[${lang.toUpperCase()}]\n`;
        const langCurrency = getCurrencyDetails(lang);
        const code = langCurrency.code;
        const rate = exchangeRates[code] || exchangeRates['USD']; 
        const totalDynamic = (totalTHB * rate);

        let totalDisplay = totalDynamic.toFixed(2);
        if (code === 'IDR' || code === 'KHR') {
             totalDisplay = Math.round(totalDynamic).toLocaleString('id-ID'); 
        }
        
        for (const id in keranjang) {
            const product = getProductById(parseInt(id));
            const quantity = keranjang[id];
            const nama = product.nama[lang] || product.nama['en'] || `Product ${product.id}`; 
            pesanLang += `- ${nama} (x${quantity})\n`;
        }
        pesanLang += `${DICTIONARY['your_total'][lang] || DICTIONARY['your_total']['en']}: ${langCurrency.symbol} ${totalDisplay} (${code})\n`;
        pesanLang += `(Base THB: ฿ ${totalTHB.toFixed(2)})\n\n`;
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

    let namaProduk = product.nama[activeLang] || product.nama['en'] || `Product ${product.id}`;

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
    
    // Panggil API Kurs
    fetchExchangeRates().then(() => {
        const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        
        if (savedLang) {
            activeLang = savedLang;
            selectAndCloseModal(activeLang); 
        } else {
            activeLang = 'en'; 
            selectAndCloseModal(activeLang);
        }
        
        updateBadge(); 
    });
    
});

window.onclick = (event) => {
    const modalKeranjang = document.getElementById('modal-keranjang');
    if (event.target === modalKeranjang) {
        tutupKeranjang();
    }
};

// ==========================================================
// DATA PRODUK DAN KONFIGURASI
// ==========================================================

const PRODUCTS_DATA = [
    {
        id: 'LP-K001',
        category: 'Kopi & Teh',
        sku: 'LP-K001',
        img: 'placeholder_kopi.jpg', // Ganti dengan path gambar Anda
        stock: 'available',
        price_thb: 70.00,
        price_usd: 2.14,
        price_khr: 8000,
        name: {
            id: 'Kopi Hitam Istimewa',
            en: 'Special Black Coffee',
            kh: 'កាហ្វេខ្មៅពិសេស',
        },
        description: {
            id: 'Kopi hitam kental diracik khusus untuk Anda. Pembangkit semangat!',
            en: 'Thick black coffee specially brewed for you. The perfect spirit booster!',
            kh: 'កាហ្វេខ្មៅក្រាស់ឆុងសម្រាប់អ្នក។ ជាអ្នកបង្កើនស្មារតីល្អបំផុត!',
        },
        points: {
            id: ['100% Biji Kopi Arabika Pilihan', 'Diracik saat dipesan (Freshly Made)', 'Pilihan Es atau Hangat'],
            en: ['100% Selected Arabica Beans', 'Brewed only upon order (Freshly Made)', 'Available Iced or Hot'],
            kh: ['គ្រាប់កាហ្វេអារ៉ាប៊ីកា ១០០% ដែលបានជ្រើសរើស', 'ញ៉ាំតែតាមការបញ្ជាទិញ (ផលិតស្រស់ៗ)', 'មានជាប្រភេទត្រជាក់ឬក្តៅ'],
        },
    },
    {
        id: 'LP-M002',
        category: 'Perawatan Diri',
        sku: 'LP-M002',
        img: 'placeholder_masker.jpg', // Ganti dengan path gambar Anda
        stock: 'available',
        price_thb: 120.00,
        price_usd: 3.67,
        price_khr: 14000,
        name: {
            id: 'Masker Kolagen Gold',
            en: 'Gold Collagen Facial Mask',
            kh: 'ម៉ាសបិទមុខខូឡាជែនមាស',
        },
        description: {
            id: 'Masker mewah untuk menghidrasi dan mencerahkan kulit wajah. Cocok untuk semua jenis kulit.',
            en: 'Luxury mask to hydrate and brighten facial skin. Suitable for all skin types.',
            kh: 'ម៉ាសប្រណីតដើម្បីផ្តល់សំណើមនិងធ្វើឱ្យស្បែកមុខភ្លឺថ្លា។ សមស្របសម្រាប់គ្រប់ប្រភេទស្បែក។',
        },
        points: {
            id: ['Mengandung Emas Asli', 'Mencerahkan Efektif', '15 Menit Ekspres'],
            en: ['Contains Real Gold Powder', 'Highly Effective Brightening', '15-Minute Express Treatment'],
            kh: ['មានម្សៅមាសពិត', 'ប្រសិទ្ធភាពខ្ពស់ក្នុងការបំភ្លឺ', 'ការព្យាបាលរហ័ស ១៥ នាទី'],
        },
    },
    {
        id: 'LP-S003',
        category: 'Jus Buah',
        sku: 'LP-S003',
        img: 'placeholder_jus.jpg', // Ganti dengan path gambar Anda
        stock: 'out_of_stock', // Contoh: Stok Habis
        price_thb: 150.00,
        price_usd: 4.58,
        price_khr: 17500,
        name: {
            id: 'Jus Mangga Alpukat',
            en: 'Fresh Mango Avocado Juice',
            kh: 'ទឹកស្វាយផ្លែបឺរស្រស់',
        },
        description: {
            id: 'Kombinasi mangga dan alpukat yang sehat dan mengenyangkan. Dingin lebih nikmat!',
            en: 'A healthy and filling combination of mango and avocado. Best served cold!',
            kh: 'ការរួមបញ្ចូលគ្នាដែលមានសុខភាពល្អ និងឆ្អែតនៃស្វាយ និងផ្លែបឺរ។ ញ៉ាំត្រជាក់ឆ្ងាញ់ជាង!',
        },
        points: {
            id: ['Mengandung Vitamin A dan E Tinggi', 'Tanpa Gula Tambahan (Request)', 'Penyegar Paling Laris!'],
            en: ['High in Vitamins A and E', 'No Added Sugar (On Request)', 'Our Bestselling Refresher!'],
            kh: ['សម្បូរវីតាមីន A និង E', 'គ្មានជាតិស្ករ (តាមការស្នើសុំ)', 'ភេសជ្ជៈស្រស់ថ្លាដែលលក់ដាច់បំផុត!'],
        },
    },
    {
        id: 'LP-S004',
        category: 'Snack & Makanan Ringan',
        sku: 'LP-S004',
        img: 'placeholder_biskuit.jpg', // Ganti dengan path gambar Anda
        stock: 'pre_order', // Contoh: Pre-Order
        price_thb: 85.00,
        price_usd: 2.60,
        price_khr: 9900,
        name: {
            id: 'Biskuit Keju Kriuk',
            en: 'Crispy Cheese Biscuits',
            kh: 'នំ​ប៊ីសស្គីត​ឈីស​ស្រួយ',
        },
        description: {
            id: 'Cemilan keju premium yang renyah. Cocok untuk menemani kopi.',
            en: 'Premium crispy cheese snack. Perfect with coffee.',
            kh: 'អាហារសម្រន់ឈីសស្រួយប្រណីត។ ល្អឥតខ្ចោះជាមួយកាហ្វេ។',
        },
        points: {
            id: ['Keju Asli Premium', 'Tekstur Renyah', 'Kemasan Praktis'],
            en: ['Premium Real Cheese', 'Crunchy Texture', 'Practical Packaging'],
            kh: ['ឈីសពិតប្រាកដថ្នាក់ខ្ពស់', 'វាយនភាពស្រួយ', 'ការវេចខ្ចប់ងាយស្រួល'],
        },
    },
];

// Data Multikurensi dan Bahasa
const CURRENCIES = {
    THB: { symbol: '฿', rate: 1.00, isMain: true },
    USD: { symbol: '$', rate: 0.0306, isMain: false },
    KHR: { symbol: 'KHR', rate: 3878.00, isMain: false },
    IDR: { symbol: 'Rp', rate: 326.00, isMain: false },
};

const LANG_DATA = {
    id: { name: 'ID', text: 'ID', checkout_wa: 'Pesan via WA', checkout_pre: 'Pre-Order via WA', out_of_stock: 'Stok Habis', min_order: 'Minimal Pembelian: ฿500. Kurang', min_order_success: 'Pesanan siap dikirim!', total: 'Total', search_placeholder: 'Cari produk..' },
    en: { name: 'US', text: 'EN', checkout_wa: 'Add to Cart', checkout_pre: 'Pre-Order via WA', out_of_stock: 'Out of Stock', min_order: 'Minimum Purchase: ฿500. Need', min_order_success: 'Order ready to ship!', total: 'Total', search_placeholder: 'Search product..' },
    kh: { name: 'KH', text: 'KH', checkout_wa: 'បន្ថែមទៅក្នុងរទេះ', checkout_pre: 'កុម្ម៉ង់ទុកមុន តាម WA', out_of_stock: 'អស់ពីស្តុក', min_order: 'ការទិញអប្បបរមា: ฿500. ខ្វះ', min_order_success: 'ការបញ្ជាទិញរួចរាល់សម្រាប់ការដឹកជញ្ជូន!', total: 'សរុប', search_placeholder: 'ស្វែងរកផលិតផល..' },
    // Tambahkan bahasa lain di sini (CN, TH, VN, dll.)
};

// Konfigurasi Awal
let currentLang = 'id';
let currentCurrency = 'THB';
const MIN_ORDER_THB = 500.00;
const WHATSAPP_NUMBER = '6281234567890'; // Ganti dengan nomor WA Anda (dengan kode negara)

// Keranjang Belanja
let shoppingCart = [];


// ==========================================================
// FUNGSI UTAMA RENDERING DAN LOKALISASI
// ==========================================================

function formatCurrency(amount, currencyCode) {
    const { symbol, rate } = CURRENCIES[currencyCode];
    const convertedAmount = amount * (currencyCode === 'THB' ? 1 : rate);
    
    // Format desimal untuk THB, USD. Tidak perlu untuk KHR/IDR jika angkanya besar
    let formattedAmount;
    if (currencyCode === 'THB' || currencyCode === 'USD') {
        formattedAmount = convertedAmount.toFixed(2);
    } else {
        formattedAmount = Math.round(convertedAmount).toLocaleString('en-US'); // Tanpa desimal untuk KHR/IDR
    }

    return `${symbol === '$' ? symbol : ''}${formattedAmount}${symbol !== '$' ? ` ${symbol}` : ''}`;
}

function convertPrice(thbPrice, targetCurrency) {
    if (targetCurrency === 'THB') return thbPrice;
    const rate = CURRENCIES[targetCurrency].rate;
    // THB Price / Base Currency Rate (1.0) * Target Rate
    return thbPrice / CURRENCIES['THB'].rate * rate;
}

function setLanguage(langCode) {
    currentLang = langCode;
    // Set currency sesuai preferensi (contoh: ID -> IDR, KH -> KHR)
    if (langCode === 'id') currentCurrency = 'IDR';
    else if (langCode === 'kh') currentCurrency = 'KHR';
    else currentCurrency = 'THB'; // Default kembali ke THB

    // Perbarui Teks Header Utama
    Object.keys(LANG_DATA).forEach(l => {
        document.getElementById(`header-title-${l}`)?.style.display = 'none';
        document.getElementById(`header-subtitle-${l}`)?.style.display = 'none';
        document.getElementById(`header-text-${l}`)?.style.display = 'none';
        document.getElementById(`promo-title-${l}`)?.style.display = 'none';
        document.getElementById(`promo-desc-${l}`)?.style.display = 'none';
    });
    document.getElementById(`header-title-${langCode}`)?.style.display = 'block';
    document.getElementById(`header-subtitle-${langCode}`)?.style.display = 'block';
    document.getElementById(`header-text-${langCode}`)?.style.display = 'block';
    document.getElementById(`promo-title-${langCode}`)?.style.display = 'block';
    document.getElementById(`promo-desc-${langCode}`)?.style.display = 'block';
    
    // Perbarui Placeholder Search
    document.getElementById('search-input').placeholder = LANG_DATA[langCode].search_placeholder;

    // Perbarui Tombol Bahasa Aktif
    document.querySelectorAll('.tombol-bahasa').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === langCode) {
            btn.classList.add('active');
        }
    });

    // Render ulang semua konten
    renderProducts();
    renderShoppingCart();
}

function renderLanguageSelector() {
    const selector = document.getElementById('language-selector-fixed');
    selector.innerHTML = '';
    
    // Tambahkan tombol-tombol berdasarkan LANG_DATA
    Object.keys(LANG_DATA).forEach(langCode => {
        const btn = document.createElement('button');
        btn.className = `tombol-bahasa ${langCode === currentLang ? 'active' : ''}`;
        btn.setAttribute('data-lang', langCode);
        btn.textContent = `${LANG_DATA[langCode].name} ${LANG_DATA[langCode].text}`;
        btn.onclick = () => setLanguage(langCode);
        selector.appendChild(btn);
    });
}

function renderProducts(filter = '', search = '') {
    const container = document.getElementById('container-produk');
    container.innerHTML = '';
    
    const filteredProducts = PRODUCTS_DATA
        .filter(p => {
            // Filter Kategori
            const matchesCategory = filter === 'Semua' || p.category === filter;
            
            // Filter Pencarian
            const searchTerm = search.toLowerCase();
            const matchesSearch = !searchTerm || 
                p.name[currentLang]?.toLowerCase().includes(searchTerm) ||
                p.description[currentLang]?.toLowerCase().includes(searchTerm) ||
                p.sku.toLowerCase().includes(searchTerm);
            
            return matchesCategory && matchesSearch;
        });

    filteredProducts.forEach(product => {
        const langCode = currentLang;
        
        // Harga Utama (THB)
        const mainPriceTHB = formatCurrency(product.price_thb, 'THB');
        
        // Harga Sekunder (Kurensi Lokal/Pilihan)
        const secondaryPriceAmount = convertPrice(product.price_thb, currentCurrency);
        const secondaryPrice = formatCurrency(secondaryPriceAmount, currentCurrency);

        const card = document.createElement('div');
        card.className = `kartu-produk ${product.stock === 'out_of_stock' ? 'stok-habis' : ''}`;
        
        // Tentukan Teks Tombol & Status
        let buttonText = LANG_DATA[langCode].checkout_wa;
        let buttonClass = 'tombol-keranjang';
        let buttonAction = `tambahKeKeranjang('${product.id}')`;

        if (product.stock === 'out_of_stock') {
            buttonText = LANG_DATA[langCode].out_of_stock;
            buttonClass += ' disabled';
            buttonAction = 'return false;';
        } else if (product.stock === 'pre_order') {
            buttonText = LANG_DATA[langCode].checkout_pre;
            buttonClass += ' tombol-preorder';
            buttonAction = `checkoutPreOrder('${product.id}')`;
        }

        // Teks singkat untuk mobile
        let mobileText = product.stock === 'pre_order' ? buttonText : `<i class="fas fa-shopping-cart"></i> ${LANG_DATA[langCode].name}`;
        
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name[langCode] || product.name.id}">
            <div class="detail-produk">
                <h3 class="nama-utama" style="font-weight: 900; color: #004d40;">${product.name[langCode] || product.name.id}</h3>
                <p class="deskripsi-produk">${product.description[langCode] || product.description.id}</p>
                
                <div class="selling-points-container" style="background: #f0fff0; border: 1px solid #c3e6cb; padding: 10px; border-radius: 5px; margin-top: 10px;">
                    <ul>
                        ${(product.points[langCode] || product.points.id).map(point => `<li><i class="fas fa-check-circle" style="color: #28a745;"></i> ${point}</li>`).join('')}
                    </ul>
                </div>

                <div class="multi-currency-price-compact">
                    <div style="background-color: #f9f9f9; color: #555; padding: 8px; font-weight: 500; border-radius: 4px; border: 1px solid #ddd;">
                        ${secondaryPrice}
                    </div>
                    <div style="background-color: #28aa46; color: white; padding: 8px; font-weight: bold; border-radius: 4px;">
                        ${mainPriceTHB}
                    </div>
                </div>

                <p class="kode-sku-info" style="font-weight: bold; color: #004d40; margin-top: 5px;">SKU: ${product.sku}</p>

                <div class="tombol-sosial-container">
                    <button class="${buttonClass}" 
                            onclick="${buttonAction}" 
                            data-product-id="${product.id}"
                            data-text-mobile="${mobileText}">
                        ${buttonText}
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderFilterButtons() {
    const container = document.getElementById('filter-container');
    container.innerHTML = '';
    
    // Ambil kategori unik
    const categories = ['Semua', ...new Set(PRODUCTS_DATA.map(p => p.category))];
    let activeFilter = 'Semua';

    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = `tombol-filter ${category === activeFilter ? 'aktif' : ''}`;
        btn.textContent = category;
        btn.onclick = () => {
            // Hapus kelas aktif dari semua
            document.querySelectorAll('.tombol-filter').forEach(b => b.classList.remove('aktif'));
            // Tambahkan kelas aktif ke yang baru
            btn.classList.add('aktif');
            activeFilter = category;
            renderProducts(activeFilter, document.getElementById('search-input').value);
        };
        container.appendChild(btn);
    });
}


// ==========================================================
// FUNGSI KERANJANG DAN CHECKOUT
// ==========================================================

function tambahKeKeranjang(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product || product.stock === 'out_of_stock') return;

    const existingItem = shoppingCart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        shoppingCart.push({
            id: productId,
            name: product.name[currentLang] || product.name.id,
            price_thb: product.price_thb,
            qty: 1,
            sku: product.sku
        });
    }
    
    updateCartDisplay();
}

function updateItemQty(productId, delta) {
    const existingItem = shoppingCart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.qty += delta;
        if (existingItem.qty <= 0) {
            shoppingCart = shoppingCart.filter(item => item.id !== productId);
        }
    }
    
    updateCartDisplay();
}

function hapusDariKeranjang(productId) {
    shoppingCart = shoppingCart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById('daftar-item-keranjang');
    const totalElement = document.getElementById('total-keranjang');
    const badge = document.getElementById('badge-keranjang');
    const totalTHB = shoppingCart.reduce((sum, item) => sum + (item.price_thb * item.qty), 0);
    const totalItems = shoppingCart.reduce((sum, item) => sum + item.qty, 0);

    const totalConverted = convertPrice(totalTHB, currentCurrency);
    const formattedTotal = formatCurrency(totalConverted, currentCurrency);

    // Update Badge
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'block' : 'none';

    // Update Total dan Daftar Item
    totalElement.textContent = formattedTotal;
    cartList.innerHTML = '';
    
    if (shoppingCart.length === 0) {
        cartList.innerHTML = `<p style="text-align: center; color: #777;">Keranjang kosong.</p>`;
    } else {
        shoppingCart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item-keranjang';
            
            const itemConvertedPrice = convertPrice(item.price_thb * item.qty, currentCurrency);
            const itemFormattedPrice = formatCurrency(itemConvertedPrice, currentCurrency);
            const refPriceTHB = formatCurrency(item.price_thb, 'THB');
            
            itemElement.innerHTML = `
                <div class="info-item">
                    <span class="nama-item">${item.name}</span>
                    <span class="nama-tambahan-keranjang">${refPriceTHB} x ${item.qty}</span>
                    <span class="harga-item">${itemFormattedPrice}</span>
                </div>
                <div class="kontrol-item">
                    <button onclick="updateItemQty('${item.id}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="updateItemQty('${item.id}', 1)">+</button>
                    <button class="hapus-item" onclick="hapusDariKeranjang('${item.id}')"><i class="fas fa-trash"></i></button>
                </div>
            `;
            cartList.appendChild(itemElement);
        });
    }
    
    validateMinOrder(totalTHB);
}

function validateMinOrder(totalTHB) {
    const validationBox = document.getElementById('pesan-validasi');
    const checkoutWA = document.getElementById('checkout-whatsapp');
    const checkoutTG = document.getElementById('checkout-telegram');
    
    validationBox.innerHTML = '';

    if (totalTHB < MIN_ORDER_THB) {
        const remainingTHB = MIN_ORDER_THB - totalTHB;
        const remainingConverted = formatCurrency(remainingTHB, currentCurrency);
        const langText = LANG_DATA[currentLang].min_order;

        validationBox.innerHTML = `<p class="error-msg"><i class="fas fa-exclamation-triangle"></i> ${langText} ${remainingConverted} lagi.</p>`;
        checkoutWA.classList.add('disabled');
        checkoutTG.classList.add('disabled');
        checkoutWA.disabled = true;
        checkoutTG.disabled = true;
    } else {
        const langText = LANG_DATA[currentLang].min_order_success;
        validationBox.innerHTML = `<p class="success-msg"><i class="fas fa-check-circle"></i> ${langText}</p>`;
        checkoutWA.classList.remove('disabled');
        checkoutTG.classList.remove('disabled');
        checkoutWA.disabled = false;
        checkoutTG.disabled = false;
    }
}

function buatPesanWhatsApp() {
    let message = `*Pesanan Toko Leap*\n\n`;
    let totalTHB = 0;
    
    shoppingCart.forEach((item, index) => {
        totalTHB += item.price_thb * item.qty;
        message += `${index + 1}. ${item.name} (${item.sku})\n   - Kuantitas: ${item.qty}\n   - Harga: ${formatCurrency(item.price_thb, 'THB')} x ${item.qty} = ${formatCurrency(item.price_thb * item.qty, 'THB')}\n`;
    });

    const totalConverted = formatCurrency(convertPrice(totalTHB, currentCurrency), currentCurrency);
    const totalTHBFormatted = formatCurrency(totalTHB, 'THB');
    
    message += `\n------------------------\n`;
    message += `*TOTAL (THB)*: ${totalTHBFormatted}\n`;
    message += `*TOTAL (${currentCurrency})*: ${totalConverted}\n`;
    message += `\nMohon konfirmasi pesanan ini.`;

    return encodeURIComponent(message);
}

function checkout(platform) {
    if (shoppingCart.length === 0) return;
    
    const totalTHB = shoppingCart.reduce((sum, item) => sum + (item.price_thb * item.qty), 0);
    if (totalTHB < MIN_ORDER_THB) return; 

    const message = buatPesanWhatsApp();
    let url;

    if (platform === 'whatsapp') {
        url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    } else if (platform === 'telegram') {
        // Ganti dengan username atau bot link Telegram Anda
        url = `https://t.me/YOUR_TELEGRAM_USERNAME?text=${message}`; 
    }
    
    window.open(url, '_blank');
}

function checkoutPreOrder(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const message = encodeURIComponent(`*Pre-Order Toko Leap*\n\nSaya ingin memesan produk Pre-Order:\n\n1. ${product.name[currentLang] || product.name.id} (${product.sku})\n   - Harga: ${formatCurrency(product.price_thb, 'THB')}\n\nMohon informasinya mengenai ketersediaan dan proses pemesanan Pre-Order.`);
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
}


// ==========================================================
// MODAL DAN INISIALISASI
// ==========================================================

function bukaModalKeranjang() {
    document.getElementById('modal-keranjang').style.display = 'block';
    renderShoppingCart();
}

function tutupModalKeranjang() {
    document.getElementById('modal-keranjang').style.display = 'none';
}

// Tutup modal ketika klik di luar area modal
window.onclick = function(event) {
    const modal = document.getElementById('modal-keranjang');
    if (event.target === modal) {
        tutupModalKeranjang();
    }
}

// Inisialisasi Aplikasi
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Bahasa (default 'id')
    setLanguage('id'); 
    
    // 2. Render Pemilih Bahasa
    renderLanguageSelector();

    // 3. Render Tombol Filter
    renderFilterButtons();

    // 4. Tambahkan Event Listener untuk Pencarian
    document.getElementById('search-input').addEventListener('keyup', (e) => {
        const filter = document.querySelector('.tombol-filter.aktif').textContent;
        renderProducts(filter, e.target.value);
    });

    // 5. Render Produk Awal
    renderProducts();
});

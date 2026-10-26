# Ogrenci Izleme Sistemi

Okullarin kendi Supabase projesiyle kurabilecegi ogrenci ve rehberlik takip uygulamasi. Bu kaynak kopyasi bos baslar: ogrenci, veli, okul, hesap veya veritabani anahtari icermez. Arayuz Turkcedir.

## Yerel calistirma

Node.js 20 veya daha yenisiyle:

```sh
npm start
```

`http://localhost:5187` adresini acin. Ana sayfadan bos demoyu giris yapmadan deneyebilirsiniz. Demo verileri yalnizca acik sekmenin sessionStorage alaninda saklanir; Supabase'e baglanmaz. Demodan cikis veya sifirlama kayitlari temizler. Tarayicinin sekme geri yukleme ozelligi verileri geri getirebilir; gercek kisisel verilerle demo yapmayin.

Gercek okul kullanimi icin Okul kurulumu dugmesinden kendi Supabase proje adresinizi ve publishable/anon anahtarinizi girin. Okul girisi kimlik dogrulamasi gerektirir. Hesapli kullanim icin asagidaki veritabani kurulumu gereklidir.

## Veritabani ve hesap kurulumu

1. Kendi Supabase projenizi olusturun. SQL Editor'da `SUPABASE_KURULUM.sql` dosyasinin tamamini calistirin. Bu islem verileri doldurmaz; tablo, fonksiyon ve erisim politikalarini kurar.
2. Supabase Authentication > Users bolumunde kendi admin kullanicinizi olusturun. Uygulama icindeki kayit ekranindan admin yetkisi verilmez.
3. `ADMIN_KURULUM.sql` sablonundaki `target_email` degerini kendi hesabinizin e-postasi ile degistirip SQL Editor'da calistirin. Duzenlenmis kisisel SQL kopyasini Git'e eklemeyin.
4. Uygulamada Admin sekmesinden giris yapin. Okul olusturup ilgili mudurun basvurusunu onaylayin. Ogretmenler okul kodu ve sinif secimiyle basvurur; okul muduru onaylar.

E-posta dogrulama aciksa kullanicilar adreslerini dogrulamali; Supabase Auth yonlendirme adresleri kendi yayin adresinize ayarlanmalidir. Ortak varsayilan hesap veya sifre yoktur.

## Yayinlama

Uygulama dosyalari statik sunucuda calisir. `index.html`, `app.js`, `security.js`, `pdf-loader.js`, `styles.css`, `cloud-config.js`, `.htaccess` ve `vendor/` dosyalarini yayinlayin. SQL, README, testler, node_modules, yedek ve diger ozel dosyalari web kokune koymayin. HTTPS kullanin. Apache/Plesk icin koruyucu basliklar ve dosya erisim kurallari `.htaccess` icindedir; baska sunucularda esdeger kurallari ayarlayin.

Her ziyaretcinin ayni yeni Supabase projesine baglanmasi icin `cloud-config.js` icindeki bos degerleri kendi proje URL ve publishable anahtarinizla doldurabilirsiniz. Kaynak depoda bos sablonu tutun. Service-role, secret key ve veritabani sifresi tarayiciya konmaz.

Kendi domaininizde yayinlayabilirsiniz. GitHub'a kaynak yuklemek canli siteyi veya veritabanini tasimaz. Bu kopyada eski siteyle ortak baglanti ve tarayici depolama anahtarlari kullanilmaz.

## Kapsam

Ogrenci dosyalari, sinav ve devam takibi, rehberlik, planlama, mezun kayitlari ve izinli veli destek agi bulunur. PDF/Word/Excel ve gorselden metin cikarma tarayicida yapilir; OCR modelleri ve bazi kutuphaneler internet baglantisi gerektirebilir. Akilli oneriler kural tabanlidir; harici bir yapay zeka hesabina baglanmaz. Anket modulu kapalidir.

## Kaynak hijyeni

`.gitignore` veri klasorlerini, yedekleri, belgeleri, ortam dosyalarini ve paketleri disarida tutar. Kaynak kod, ekran goruntusu veya commit mesajina gercek ogrenci, veli ve hesap bilgisi eklemeyin. Git'e gondermeden once degisiklikleri gozden gecirin.

`vendor/` altindaki ucuncu taraf kutuphanelerin kendi lisans bildirimleri korunmustur. Proje icin henuz ayri bir acik kaynak lisansi secilmemistir.

## Kontrol

```sh
npm ci
npm run check
npm test
npm audit
npm run audit:vendor
```

Yerelde testler Chrome kullanir. CI Linux ortaminda `npx playwright install --with-deps chromium` ile test tarayicisi kurulur. Fotograf OCR testi internet baglantisi gerektirir. Test kapsam ve sinirlari icin [SECURITY.md](SECURITY.md) dosyasini okuyun.

Canli okul yetkilerini test etmek icin kendi projenizde iki farkli okul ve kisitli ogretmen hesaplariyla kontrol yapin. Kaynak temizligi, canli veritabani politikalarinin bagimsiz guvenlik denetimi anlamina gelmez.

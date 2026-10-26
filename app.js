const classes = {
  "9": ["9-A", "9-B", "9-C", "9-D"],
  "10": ["10-A", "10-B", "10-C", "10-D"],
  "11": [
    "11 Sayısal-A",
    "11 Sayısal-B",
    "11 Sayısal-C",
    "11 Sayısal-D",
    "11 Sözel-A",
    "11 Sözel-B",
    "11 Sözel-C",
    "11 Sözel-D",
    "11 Eşit Ağırlık-A",
    "11 Eşit Ağırlık-B",
    "11 Eşit Ağırlık-C",
    "11 Eşit Ağırlık-D",
    "11 Dil-A",
    "11 Dil-B",
    "11 Dil-C",
    "11 Dil-D",
  ],
  "12": [
    "12 Sayısal-A",
    "12 Sayısal-B",
    "12 Sayısal-C",
    "12 Sayısal-D",
    "12 Sözel-A",
    "12 Sözel-B",
    "12 Sözel-C",
    "12 Sözel-D",
    "12 Eşit Ağırlık-A",
    "12 Eşit Ağırlık-B",
    "12 Eşit Ağırlık-C",
    "12 Eşit Ağırlık-D",
    "12 Dil-A",
    "12 Dil-B",
    "12 Dil-C",
    "12 Dil-D",
  ],
};

const studentSections = [
  {
    title: "Öğrenci Bilgileri",
    fields: [
      field("fullName", "Adı soyadı", "text", { required: true }),
      field("nationalId", "T.C. kimlik no"),
      field("schoolNo", "Okul numarası", "text", { required: true }),
      field("birthPlace", "Doğum yeri"),
      field("birthDate", "Doğum tarihi", "date"),
      field("address", "Ev adresi", "textarea"),
      field("bloodType", "Kan grubu"),
      field("religion", "Dini"),
    ],
  },
  {
    title: "Genel Bilgiler",
    fields: [
      field("livingWith", "Kiminle oturuyor"),
      field("rentStatus", "Evi kira mı", "select", { options: ["Bilinmiyor", "Evet", "Hayır"] }),
      field("ownRoom", "Kendi odası var mı", "select", { options: ["Bilinmiyor", "Var", "Yok"] }),
      field("heating", "Ev ne ile ısınıyor"),
      field("transport", "Okula nasıl geliyor"),
      field("working", "Bir işte çalışıyor mu", "select", { options: ["Bilinmiyor", "Hayır", "Evet"] }),
      field("outsideFamilyMember", "Aile dışında kalan var mı"),
      field("height", "Boyu"),
      field("weight", "Kilosu"),
      field("disabilityType", "Özür/engel türü"),
      field("martyrChild", "Şehit çocuğu mu", "select", { options: ["Bilinmiyor", "Hayır", "Evet"] }),
      field("cameFromAbroad", "Yurt dışından mı geldi", "select", { options: ["Bilinmiyor", "Hayır", "Evet"] }),
    ],
  },
  {
    title: "Ev ve İmkanlar",
    fields: [
      field("computerAtHome", "Evde bilgisayar var mı", "select", { options: ["Bilinmiyor", "Var", "Yok"] }),
      field("internet", "Evde internet var mı", "select", { options: ["Bilinmiyor", "Var", "Yok"] }),
      field("libraryAtHome", "Evde kitaplık var mı", "select", { options: ["Bilinmiyor", "Var", "Yok"] }),
      field("periodicalSubscription", "Gazete/dergi aboneliği var mı", "select", { options: ["Bilinmiyor", "Var", "Yok"] }),
      field("householdIncome", "Haneye giren toplam gelir"),
      field("householdSize", "Hanede yaşayan kişi sayısı"),
    ],
  },
  {
    title: "Sağlık Bilgileri",
    fields: [
      field("accidentHistory", "Geçirdiği kaza"),
      field("surgeryHistory", "Geçirdiği ameliyat"),
      field("prosthesis", "Kullandığı protez"),
      field("illnessHistory", "Geçirdiği hastalık"),
      field("chronicIllness", "Sürekli hastalığı"),
      field("medication", "Sürekli kullandığı ilaç"),
      field("allergy", "Neye alerjisi var"),
      field("healthNote", "Sağlık notu", "textarea"),
    ],
  },
  {
    title: "Veli Bilgileri",
    fields: [
      field("guardianRelation", "Velisi kim"),
      field("guardianName", "Veli adı soyadı"),
      field("guardianNationalId", "Veli T.C. kimlik no"),
      field("guardianPhone", "Veli cep no"),
    ],
  },
  {
    title: "Baba Bilgileri",
    fields: [
      field("fatherName", "Adı soyadı"),
      field("fatherNationalId", "T.C. kimlik no"),
      field("fatherEducation", "Öğrenim durumu"),
      field("fatherJob", "Mesleği"),
      field("fatherEmail", "E-posta adresi"),
      field("fatherAlive", "Sağ/ölü", "select", { options: ["Bilinmiyor", "Sağ", "Ölü"] }),
      field("parentsTogether", "Anne-baba birlikte/ayrı", "select", { options: ["Bilinmiyor", "Birlikte", "Ayrı"] }),
      field("fatherChronicIllness", "Sürekli hastalığı"),
      field("fatherDisability", "Engel durumu"),
      field("fatherHomePhone", "Ev telefonu"),
      field("fatherMobilePhone", "Cep telefonu"),
      field("fatherWorkPhone", "İş telefonu"),
    ],
  },
  {
    title: "Anne Bilgileri",
    fields: [
      field("motherName", "Adı soyadı"),
      field("motherNationalId", "T.C. kimlik no"),
      field("motherEducation", "Öğrenim durumu"),
      field("motherJob", "Mesleği"),
      field("motherEmail", "E-posta adresi"),
      field("motherAlive", "Sağ/ölü", "select", { options: ["Bilinmiyor", "Sağ", "Ölü"] }),
      field("motherChronicIllness", "Sürekli hastalığı"),
      field("motherDisability", "Engel durumu"),
      field("motherHomePhone", "Ev telefonu"),
      field("motherMobilePhone", "Cep telefonu"),
      field("motherWorkPhone", "İş telefonu"),
    ],
  },
  {
    title: "Kardeş ve Rehberlik",
    fields: [
      field("siblingsCount", "Kardeş sayısı, kendisi dahil"),
      field("siblingsNote", "Kardeş bilgileri", "textarea"),
      field("lgsScore", "Liseye geçiş / LGS puanı"),
      field("lgsPercentile", "LGS yüzdelik dilimi"),
      field("middleSchoolAverage", "Ortaokul başarı puanı"),
      field("placementSchool", "Yerleştiği okul / program"),
      field("academicStatus", "Akademik durum", "select", { options: ["İyi", "Orta", "Destek gerekli"] }),
      field("guidanceNote", "Rehberlik notu", "textarea"),
      field("sourceNotes", "Bilgi kaynağı / belge notu", "textarea"),
    ],
  },
];

const riskFactors = [
  ["mother_primary", "Anne en fazla ilkokul mezunu", "E-okul / ÖTF"],
  ["father_primary", "Baba en fazla ilkokul mezunu", "E-okul / ÖTF"],
  ["single_child", "Tek çocuk", "E-okul / ÖTF"],
  ["many_siblings", "5 ve üstü kardeşi var", "E-okul / ÖTF"],
  ["parents_separate", "Anne ve babası ayrı yaşıyor", "Gözlem"],
  ["parents_divorced", "Anne ve babası boşanmış", "E-okul / ÖTF"],
  ["only_mother", "Yalnızca annesi ile yaşıyor", "Gözlem"],
  ["only_father", "Yalnızca babası ile yaşıyor", "Gözlem"],
  ["mother_deceased", "Annesi hayatta değil", "E-okul / ÖTF"],
  ["father_deceased", "Babası hayatta değil", "E-okul / ÖTF"],
  ["both_deceased", "Anne ve babası hayatta değil", "E-okul / ÖTF"],
  ["martyr_child", "Şehit çocuğu", "ÖTF"],
  ["grandparents", "Yalnızca büyükanne/büyükbabasıyla yaşıyor", "Gözlem"],
  ["relatives", "Yalnızca diğer akrabalarıyla yaşıyor", "Gözlem"],
  ["foster_family", "Koruyucu aile gözetiminde", "Gözlem"],
  ["care_home", "Sevgi evlerinde kalıyor", "Gözlem"],
  ["institution", "Sosyal hizmetler kurumunda kalıyor", "Gözlem"],
  ["family_chronic", "Ailesinde süreğen hastalık var", "ÖTF / Gözlem"],
  ["family_mental", "Ailesinde ruhsal hastalık var", "ÖTF / Gözlem"],
  ["family_addiction", "Ailesinde bağımlı birey var", "Gözlem"],
  ["family_conviction", "Ailesinde cezai hükmü bulunan birey var", "Rehberlik"],
  ["seasonal_worker", "Ailesi mevsimlik işçi", "ÖTF / Gözlem"],
  ["domestic_violence", "Aile içi şiddete maruz kalıyor", "Gözlem"],
  ["gifted", "Özel yetenekli tanısı var", "E-okul / Rehberlik"],
  ["special_education", "Özel eğitim raporu var", "E-okul / Rehberlik"],
  ["chronic_illness", "Süreğen hastalığı var", "ÖTF"],
  ["mental_health", "Ruhsal hastalık bilgisi var", "Rehberlik"],
  ["counseling_order", "Danışmanlık tedbir kararı var", "İdare / Rehberlik"],
  ["education_order", "Eğitim tedbir kararı var", "İdare / Rehberlik"],
  ["financial", "Maddi sıkıntı yaşıyor", "Gözlem / İdare"],
  ["absenteeism", "Sürekli devamsız", "İdare / Gözlem"],
  ["working", "Bir işte çalışıyor", "ÖTF"],
  ["low_academic", "Akademik başarısı düşük", "Öğretmen gözlemi"],
  ["risky_peers", "Riskli akran grubuna dahil", "Gözlem"],
  ["survey_high", "Anketten yüksek risk dönüşü var", "Veli/öğrenci anketi"],
  ["student_addiction", "Öğrencide bağımlılık durumu", "Gözlem"],
  ["foreign_national", "Yabancı uyruklu öğrenci", "E-okul"],
  ["other", "Diğer risk veya takip notu", "Görüşme / Gözlem"],
];

const formCatalog = [
  {
    id: "student_identity",
    title: "Öğrenci ve Aile Tanıma",
    category: "Tanıma",
    audience: "Öğrenci / Veli",
    purpose: "Öğrencinin aile, sağlık, ev ve temel yaşam koşullarını düzenli takip eder.",
    sources: ["Öğrenci Tanıma Formu", "Aile Bilgi Formu", "Aile İçi Gözlem Formu", "Ev Ziyaret Formu"],
    fields: [
      field("familyStructure", "Aile yapısı ve birlikte yaşadığı kişiler", "textarea"),
      field("homeResources", "Ev imkanları ve çalışma ortamı", "textarea"),
      field("familyObservation", "Aile içi gözlem / ev ziyareti notu", "textarea"),
      field("healthAndCare", "Sağlık, bakım ve özel durumlar", "textarea"),
    ],
    recommendations: [
      "Evde çalışma ortamı zayıfsa okul içi etüt veya sessiz çalışma alanı öner.",
      "Aile içi iletişim veya bakım riski görünüyorsa rehberlik görüşmesi ve veli görüşmesi planla.",
    ],
  },
  {
    id: "academic_tracking",
    title: "Akademik İzleme",
    category: "Akademik",
    audience: "Öğrenci",
    purpose: "LGS, OBP, verimli ders çalışma ve yol haritası bilgilerini akademik destek planına çevirir.",
    sources: ["9. Sınıf LGS Puanları", "9. Sınıflar Ortaokul Ortalaması", "Verimli Ders Çalışma Kontrol Listesi", "Yol Haritam"],
    fields: [
      field("lgsScore", "LGS / yerleştirme puanı"),
      field("lgsPercentile", "LGS yüzdelik dilimi"),
      field("middleSchoolAverage", "Ortaokul başarı puanı"),
      field("placementSchool", "Yerleştiği okul / program"),
      field("studyHabits", "Ders çalışma alışkanlığı", "textarea"),
      field("goals", "Hedefler / yol haritası", "textarea"),
      field("supportNeeds", "Akademik destek ihtiyacı", "textarea"),
    ],
    recommendations: [
      "Düşük başlangıç puanı veya düşük çalışma alışkanlığı varsa kısa periyotlu hedef takibi aç.",
      "Hedef belirsizse mesleki eğilim ve bireysel görüşme formuyla birlikte değerlendir.",
    ],
  },
  {
    id: "exam_growth",
    title: "Deneme Sınavları ve Gelişim",
    category: "Akademik",
    audience: "Öğrenci",
    purpose: "Deneme sınavı sonuçlarını ders/net/puan bazında izler ve gelişim grafiğine veri hazırlar.",
    sources: ["Deneme sınav sonuçları", "Gelişim grafiği", "Örnek sınav çizelgeleri"],
    fields: [
      field("examName", "Deneme / sınav adı"),
      field("examDate", "Sınav tarihi", "date"),
      field("score", "Puan / yüzdelik"),
      field("netSummary", "Ders netleri / doğru yanlış özeti", "textarea"),
      field("growthNote", "Gelişim yorumu", "textarea"),
      field("nextAcademicStep", "Bir sonraki akademik adım", "textarea"),
    ],
    recommendations: [
      "Aynı ders art arda düşüyorsa ders öğretmeniyle hedefli kazanım takibi aç.",
      "Gelişim düzenliyse öğrenciye kısa olumlu geri bildirim ve yeni hedef ver.",
    ],
  },
  {
    id: "attendance",
    title: "Devamsızlık Nedenleri",
    category: "Devamsızlık",
    audience: "Öğrenci / Sınıf",
    purpose: "Devamsızlık nedenlerini kişisel, aile, okul ve ulaşım başlıklarında toplar.",
    sources: ["Devamsızlık Nedenleri Anketi", "Devamsızlık Nedenleri Sınıf Okul Sonuç Çizelgesi"],
    fields: [
      field("absenceFrequency", "Devamsızlık sıklığı"),
      field("personalReasons", "Kişisel nedenler", "textarea"),
      field("familyReasons", "Aile kaynaklı nedenler", "textarea"),
      field("schoolReasons", "Okul / sınıf kaynaklı nedenler", "textarea"),
      field("actionPlan", "Devamsızlık eylem planı", "textarea"),
    ],
    riskHints: ["absenteeism"],
    recommendations: [
      "Devamsızlık tekrarlıyorsa veli görüşmesi ve haftalık yoklama takibi aç.",
      "Okul/sınıf kaynaklı neden varsa sınıf iklimi ve akran ilişkileri modülleriyle birlikte incele.",
    ],
  },
  {
    id: "violence_climate",
    title: "Şiddet ve Okul İklimi",
    category: "Okul İklimi",
    audience: "Öğrenci / Öğretmen / Veli",
    purpose: "Şiddet algısı, şiddetin meşru görülmesi ve şiddet sıklığı verilerini birlikte okur.",
    sources: [
      "Şiddet Algısı Anketi",
      "Şiddet Sıklığı Anketi",
      "Şiddet Meşruiyeti Anketi",
      "Disiplin Kurulu İçin Öğrenci Görüşme Formu",
    ],
    fields: [
      field("violencePerception", "Şiddet algısı / tanımlama", "textarea"),
      field("violenceFrequency", "Şiddet sıklığı gözlemi", "textarea"),
      field("justificationSignals", "Şiddeti haklı görme sinyalleri", "textarea"),
      field("incidentSummary", "Olay / disiplin görüşmesi özeti", "textarea"),
      field("safetyPlan", "Güvenlik ve önleme planı", "textarea"),
    ],
    riskHints: ["risky_peers", "other"],
    recommendations: [
      "Sıklık ve meşruiyet birlikte yükseliyorsa okul iklimi, sınıf rehberliği ve güvenli alan planı oluştur.",
      "Olay bireyselse etiketleme yapmadan davranışın bağlamını, tanıkları ve destek ihtiyacını kaydet.",
    ],
  },
  {
    id: "riba",
    title: "RİBA Rehberlik İhtiyaçları",
    category: "RİBA",
    audience: "Öğrenci / Öğretmen / Veli",
    purpose: "Rehberlik hizmeti ihtiyaçlarını öğrenci, öğretmen ve veli bakışlarıyla önceliklendirir.",
    sources: ["RİBA Lise Öğrenci Formu", "RİBA Lise Öğretmen", "RİBA Lise Veli Formu"],
    fields: [
      field("studentNeeds", "Öğrenciye göre ihtiyaçlar", "textarea"),
      field("teacherNeeds", "Öğretmene göre ihtiyaçlar", "textarea"),
      field("parentNeeds", "Veliye göre ihtiyaçlar", "textarea"),
      field("priorityTopics", "Öncelikli rehberlik konuları", "textarea"),
      field("programSuggestion", "Program / etkinlik önerisi", "textarea"),
    ],
    recommendations: [
      "Öğrenci-veli-öğretmen yanıtları ayrışıyorsa kısa bireysel görüşmeyle ihtiyaç doğrulaması yap.",
      "Sınıf genelinde aynı ihtiyaç tekrar ediyorsa sınıf rehberlik etkinliği planla.",
    ],
  },
  {
    id: "special_education",
    title: "Özel Eğitim ve Gelişim Gözlemi",
    category: "Özel Eğitim",
    audience: "Öğrenci / Öğretmen",
    purpose: "DEHB, özel öğrenme güçlüğü, özel eğitim raporu ve gözlem kayıtlarını takip eder.",
    sources: [
      "DEHB Gözlem Formu",
      "Özel Öğrenme Güçlüğü Gözlem Formu",
      "Rehberlik Servisi İçin Özel Eğitim Öğrencisi Rapor Takip Formu",
      "Öğrenci Gözlem Kaydı",
    ],
    fields: [
      field("attentionSignals", "Dikkat / dürtüsellik gözlemi", "textarea"),
      field("learningSignals", "Okuma-yazma-matematik güçlüğü gözlemi", "textarea"),
      field("reportStatus", "Rapor / RAM / destek eğitim durumu", "textarea"),
      field("classroomSupport", "Sınıf içi uyarlama ve destek", "textarea"),
    ],
    riskHints: ["special_education"],
    recommendations: [
      "Öğrenme veya dikkat sinyalleri sürekli ise öğretmen gözlemi, veli görüşmesi ve uzman yönlendirme zinciri oluştur.",
      "Raporu olan öğrenci için tarih, bitiş ve destek eğitim planı ayrı takip edilmeli.",
    ],
  },
  {
    id: "snellen",
    title: "Snellen Göz Testi",
    category: "Sağlık",
    audience: "Öğrenci",
    purpose: "Göz taraması sonucunu, yönlendirme ihtiyacını ve takip notunu kaydeder.",
    sources: ["Snellen Göz Testi", "Sağlık Kuruluşuna Yönlendirme Formu"],
    fields: [
      field("screeningDate", "Tarama tarihi", "date"),
      field("rightEye", "Sağ göz sonucu"),
      field("leftEye", "Sol göz sonucu"),
      field("screeningResult", "Genel sonuç / bulgu", "textarea"),
      field("healthReferral", "Sağlık kuruluşuna yönlendirme durumu", "textarea"),
    ],
    recommendations: [
      "Görme taramasında şüpheli sonuç varsa aile bilgilendirme ve sağlık kuruluşu yönlendirme kaydı aç.",
      "Yönlendirme yapıldıysa geri dönüş tarihi öğrenci dosyasında takip edilmeli.",
    ],
  },
  {
    id: "counseling_referral",
    title: "Görüşme ve Yönlendirme",
    category: "Görüşme",
    audience: "Öğrenci / Rehberlik",
    purpose: "Öğrenci görüşmesi, psikolojik destek ve sağlık kuruluşuna yönlendirme kayıtlarını tutar.",
    sources: ["Öğrenci Görüşme Formu", "Psikolojik Destek Yönlendirme Formu", "Sağlık Kuruluşuna Yönlendirme Formu"],
    fields: [
      field("interviewReason", "Görüşme nedeni", "textarea"),
      field("studentStatement", "Öğrenci beyanı / görüşme özeti", "textarea"),
      field("mebbisStatus", "MEBBİS kayıt durumu"),
      field("mebbisDate", "MEBBİS kayıt tarihi", "date"),
      field("referralReason", "Yönlendirme nedeni", "textarea"),
      field("followUpDate", "Takip tarihi", "date"),
      field("confidentialNote", "Gizli rehberlik notu", "textarea"),
    ],
    recommendations: [
      "Yönlendirme kaydı varsa takip tarihi ve geri bildirim alanı boş bırakılmamalı.",
      "Kriz veya güvenlik riski varsa sistem önerisi değil okulun resmi müdahale prosedürü izlenmeli.",
    ],
  },
  {
    id: "sociometry",
    title: "Sosyometri ve Sınıf İlişkileri",
    category: "Sosyometri",
    audience: "Sınıf / Öğrenci",
    purpose: "Sınıf içi tercih, dışlanma, liderlik ve akran ilişkisi örüntülerini düzenler.",
    sources: ["Sosyometri", "Kimdir Bu", "Kime Göre Ben Neyim"],
    fields: [
      field("positiveChoices", "Olumlu tercih edilen öğrenciler", "textarea"),
      field("isolatedStudents", "Az tercih edilen / izlenmesi gereken öğrenciler", "textarea"),
      field("peerConflicts", "Akran çatışmaları", "textarea"),
      field("classAction", "Sınıf içi ilişki geliştirme planı", "textarea"),
    ],
    riskHints: ["risky_peers"],
    recommendations: [
      "Dışlanma sinyali varsa öğrenciyi etiketlemeden sınıf içi aidiyet çalışması planla.",
      "Sosyometri sonuçlarını tek başına karar aracı yapma; öğretmen gözlemiyle doğrula.",
    ],
  },
  {
    id: "career_self",
    title: "Kendini Tanıma ve Mesleki Eğilim",
    category: "Kariyer",
    audience: "Öğrenci",
    purpose: "İlgi, yetenek, kendini anlatma ve mesleki eğilim verilerini hedef planına bağlar.",
    sources: ["Mesleki Eğilim Belirleme Envanteri", "Yaşam Pencerem", "Bana Kendini Anlat", "Kendimi Tanıyorum Çocuğumu Tanıyorum"],
    fields: [
      field("interests", "İlgi alanları", "textarea"),
      field("strengths", "Güçlü yönler", "textarea"),
      field("careerTendency", "Mesleki eğilim / alan ilgisi", "textarea"),
      field("selfPerception", "Kendini tanıma notları", "textarea"),
      field("nextStep", "Sonraki adım", "textarea"),
    ],
    recommendations: [
      "Mesleki eğilim ile alan seçimi çelişiyorsa bireysel kariyer görüşmesi planla.",
      "Kendini ifade etme notları akademik hedeflerle birlikte yorumlanmalı.",
    ],
  },
  {
    id: "other_notes",
    title: "Diğer Formlar ve Serbest Notlar",
    category: "Notlar",
    audience: "Öğrenci / Rehberlik",
    purpose: "Standart bir kalıba girmeyen uygulama, belge ve öğrenciyle ilgili diğer notları saklar.",
    sources: ["Diğer uygulanan formlar", "Öğrenci ile ilgili alınan diğer notlar"],
    fields: [
      field("noteTitle", "Not / belge başlığı"),
      field("noteDate", "Tarih", "date"),
      field("noteType", "Tür"),
      field("noteBody", "Not içeriği", "textarea"),
      field("followUp", "Takip / yapılacak işlem", "textarea"),
    ],
    recommendations: [
      "Serbest notlarda kişisel yargı değil gözlenebilir bilgi ve tarih kullanılmalı.",
      "Takip gerektiren notlar için mutlaka sonraki adım alanı doldurulmalı.",
    ],
  },
];

const defaultStudents = [];

const isDemoMode = new URLSearchParams(location.search).get("demo") === "1";
let state = loadState();
let remoteDatabaseAvailable = false;
let remoteSaveTimer = null;
let cloudDatabaseAvailable = false;
let cloudClient = null;
let cloudChannel = null;
let cloudApplyingRemote = false;
let currentAuthUser = null;
let currentSchool = null;
let currentMembership = null;
let currentSystemAdmin = null;
let memberManagementCache = [];
let adminSchoolCache = [];
let authJustUnlocked = false;
const cloudConfigStorageKey = "ois-public-cloud-config";
const appearanceSettingsKey = "ois-public-appearance";
const authEntrySessionKey = "ois-public-entered-20260901-login-required";
const authRoleSessionKey = "ois-public-login-role-20260829";
const authRoleStorageKey = "ois-public-login-role-persisted";
const authSessionBackupKey = "ois-public-supabase-session-backup";
const authMembershipBackupKey = "ois-public-active-membership-backup";
const authSessionCookieName = "ois_public_session";
const adminSelectedSchoolKey = "ois-public-admin-selected-school";
let selectedGrade = "9";
let selectedClass = "9-A";
let selectedStudentId = state.students[0]?.id || null;
let editingStudentId = null;
let latestDraft = null;
let selectedFormId = formCatalog[0].id;
let selectedFormCategory = "Tümü";
let selectedReportId = "all";
let selectedExamSource = "Deneme";
let studentSearchQuery = "";
let activeView = "dashboard";
let selectedWorkflowDate = currentDateKey();
let dashboardGuidanceExpanded = false;

const disciplineLevels = {
  warning: {
    title: "Önleyici görüşme / yazılı uyarı",
    points: 0,
    authority: "Sınıf rehber öğretmeni, rehberlik servisi ve okul yönetimi izlemi",
    basis: "Pozitif disiplin ve erken müdahale",
  },
  kinama: {
    title: "Kınama",
    points: 10,
    authority: "Okul öğrenci ödül ve disiplin kurulu kararı, okul müdürü onayı",
    basis: "MEB Ortaöğretim Kurumları Yönetmeliği m.163-164",
  },
  short: {
    title: "Okuldan kısa süreli uzaklaştırma",
    points: 20,
    authority: "Okul öğrenci ödül ve disiplin kurulu kararı, okul müdürü onayı",
    basis: "MEB Ortaöğretim Kurumları Yönetmeliği m.163-164; süre 1-5 gün aralığında kurulca değerlendirilir",
  },
  transfer: {
    title: "Okul değiştirme",
    points: 40,
    authority: "İlçe öğrenci disiplin kurulu onayı gerekir",
    basis: "MEB Ortaöğretim Kurumları Yönetmeliği m.163-164",
  },
  formalOut: {
    title: "Örgün eğitim dışına çıkarma",
    points: 80,
    authority: "İl öğrenci disiplin kurulu onayı gerekir",
    basis: "MEB Ortaöğretim Kurumları Yönetmeliği m.163-164",
  },
};

const disciplineRules = [
  { id: "lesson_order", category: "Ders düzeni", level: "kinama", keywords: ["ders", "düzen", "gürültü", "söz dinlem", "akış", "geç kal", "tören", "etüt", "kılık", "kıyafet", "ödev", "görev"], behavior: "Dersin, törenin veya eğitim faaliyetinin düzenini bozma; verilen eğitim görevlerini yapmama.", teacher: "Ders öğretmeninden olay saati, uyarı sayısı, sınıf etkisi ve varsa tanık bilgisi alınmalı.", guidance: "Öğrenciyle davranışın tetikleyicisi, sınıf içi aidiyet ve özdenetim becerisi konuşulmalı." },
  { id: "property_cleanliness", category: "Okul eşyası / çevre", level: "kinama", keywords: ["kirlet", "çöp", "sıra", "duvar", "duvara", "grafiti", "çizim", "kamu malı", "kitap", "malzeme", "izinsiz almak", "eşya", "zarar", "tahrip"], behavior: "Okul eşyasını/çevresini kirletme, malzemeyi kötü kullanma veya izinsiz kullanma.", teacher: "Zararın yeri, maddi boyutu, kasıt/ihmal ayrımı ve telafi imkanı kayda alınmalı.", guidance: "Onarıcı yaklaşım, sorumluluk alma ve telafi planı önerilir." },
  { id: "copy", category: "Sınav güvenliği", level: "kinama", keywords: ["kopya", "cevap", "sınavda yardım", "toplu kopya"], behavior: "Kopya çekme, çekilmesine yardımcı olma veya toplu kopya şüphesi.", teacher: "Sınav tutanağı, delil niteliğindeki materyal ve gözetmen beyanı eklenmeli.", guidance: "Akademik dürüstlük görüşmesi ve çalışma planı yapılmalı." },
  { id: "phone_digital", category: "Bilişim / sosyal medya", level: "kinama", keywords: ["telefon", "sosyal medya", "video", "fotoğraf", "görüntü", "paylaş", "bilişim", "internet", "hakaret paylaş", "kaydet"], behavior: "Bilişim aracını kurallara aykırı kullanma; izinsiz görüntü alma/paylaşma veya dijital zarar verme.", teacher: "Paylaşımın ekran görüntüsü, tarih-saat ve mağdur/tanık bilgileri hukuka uygun biçimde dosyalanmalı.", guidance: "Dijital mahremiyet, akran etkisi ve telafi görüşmesi yapılmalı." },
  { id: "insult_threat", category: "Saygı / tehdit", level: "short", keywords: ["hakaret", "küfür", "tehdit", "aşağıl", "saygısız", "kaba", "kışkırt", "ayrımcılık", "ırk", "cinsiyet", "inanç"], behavior: "Öğrenciye, öğretmene, yöneticiye veya çalışana hakaret/tehdit; ayrımcı veya kışkırtıcı davranış.", teacher: "Beyanlar ayrı ayrı alınmalı; olayın okul içi/dışı ve sosyal medya boyutu belirtilmeli.", guidance: "Mağdur güvenliği, çatışma çözümü ve öfke kontrolü planı açılmalı." },
  { id: "violence_bullying", category: "Şiddet / akran zorbalığı", level: "short", keywords: ["kavga", "şiddet", "vurma", "itme", "yaralama", "zorbalık", "akran", "darbet", "darp", "bıçak", "kesici"], behavior: "Kavga, fiili şiddet, tekrarlayan akran zorbalığı veya güvenliği tehdit eden davranış.", teacher: "Sağlık/güvenlik riski varsa yönetim ve veli derhal bilgilendirilmeli; tanık ve kamera bilgisi korunmalı.", guidance: "Mağdur-koruma planı, fail öğrenciyle davranış sorumluluğu ve izlem görüşmeleri başlatılmalı." },
  { id: "substance", category: "Tütün / zararlı madde", level: "short", keywords: ["sigara", "tütün", "elektronik sigara", "vape", "alkol", "sarhoş", "madde", "uyuşturucu", "zararlı"], behavior: "Tütün/taklit ürün bulundurma-kullanma veya sarhoşluk veren/zararlı madde şüphesi.", teacher: "Maddenin türü, bulunma yeri, öğrenci beyanı ve güvenlik tedbirleri resmi süreçle kaydedilmeli.", guidance: "Bağımlılık risk taraması, veli görüşmesi ve gerekirse sağlık/rehberlik yönlendirmesi yapılmalı." },
  { id: "serious_security", category: "Ağır güvenlik / suç şüphesi", level: "transfer", keywords: ["hırsızlık", "silah", "kesici", "yaralayıcı", "şantaj", "taciz", "cinsel", "örgüt", "uyuşturucu sat", "yangın", "sabotaj"], behavior: "Okul güvenliğini ağır etkileyen, suç şüphesi veya ağır mağduriyet doğuran davranış.", teacher: "Delil korunmalı; okul yönetimi resmi yazışma, veli bilgilendirme ve ilgili kurum süreçlerini başlatmalı.", guidance: "Kriz müdahalesi, mağdur destek planı ve kurumlar arası yönlendirme değerlendirilir." },
  { id: "formal_out_risk", category: "Çok ağır disiplin / örgün eğitim dışı riski", level: "formalOut", keywords: ["uyuşturucu sat", "satmak", "silahla yaralama", "cinsel saldırı", "taciz", "tehdit ederek", "örgüt propagandası", "patlayıcı", "ateşli silah"], behavior: "Örgün eğitim dışına çıkarma düzeyinde değerlendirilebilecek çok ağır fiil veya suç şüphesi.", teacher: "Okul yönetimi vakayı geciktirmeden resmi soruşturma, veli bilgilendirme ve ilgili kurum bildirimleri açısından değerlendirmeli.", guidance: "Öğrenci ve mağdur güvenliği için kriz planı, psikososyal destek ve kurumlar arası yönlendirme gereklidir." },
];

const disciplineSampleReport = `DİSİPLİN OLAY TUTANAĞI
Okul adı:
Sayı:
Konu: Disiplin olay bildirimi / olay tutanağı
Tarih:
Saat:
Olay yeri:

Öğrencinin adı soyadı:
Sınıfı:
Okul no:

Bildiren kişi:
Görevi:
Tanıklar:
Deliller / ekler:

Olayın özeti:

Öğrenci beyanı:

Öğretmen / tanık notu:

Alınan ilk önlem:
Veli bilgilendirildi mi:
Tutanağı düzenleyen:
İmza:

Not: Bu tutanak karar metni değildir; okul öğrenci ödül ve disiplin kurulu sürecinde kullanılmak üzere olayın ilk kayıt altına alınması içindir.`;

const disciplineProcessSteps = [
  "Olay tutanağı/şikayet dilekçesi alınır; tarih, saat, yer, taraflar ve tanıklar net yazılır.",
  "Öğrenci, mağdur ve tanık ifadeleri ayrı ayrı dosyalanır; rehberlik görüşmesi gerekiyorsa form eklenir.",
  "Kurul değerlendirmesinde fiilin niteliği, tekrar durumu, iyi hal, özel eğitim/BEP ve güvenlik riski birlikte ele alınır.",
  "Kınama ve kısa süreli uzaklaştırma okul müdürü onayıyla; okul değiştirme ilçe, örgün eğitim dışına çıkarma il kurulu onayıyla uygulanır.",
  "Ceza tebliği, itiraz süresi, davranış puanı, e-Okul/e-Mesem kaydı ve sonraki dönem ceza kaldırma değerlendirmesi takip edilir.",
];

const examBrandPatterns = [
  ["MEBI", /MEB[İI]|MEBİ/i],
  ["CAP", /ÇAP|ÇAP|\bCAP\b/i],
  ["OZDEBIR", /ÖZDEB[İI]R|ÖZDEBİR|OZDEBIR/i],
  ["TODER", /T[ÖO]DER|TÖDER|TODER/i],
  ["ORIJINAL", /OR[İI]J[İI]NAL|ORİJİNAL|ORIJINAL/i],
  ["345", /\b345\b/i],
  ["3D", /\b3D\b/i],
  ["BILGI_SARMAL", /B[İI]LG[İI]\s*SARMAL|BİLGİ\s*SARMAL/i],
  ["KAREKOK", /KAREK[ÖO]K|KAREKÖK/i],
  ["LIMIT", /L[İI]M[İI]T|LİMİT/i],
  ["YAYIN_DENIZI", /YAYIN\s*DEN[İI]Z[İI]|YAYIN\s*DENİZİ/i],
  ["PARAF", /PARAF/i],
  ["HIZ_RENK", /HIZ\s*VE\s*RENK/i],
  ["ENDEMIK", /ENDEM[İI]K|ENDEMİK/i],
  ["MIRAY", /M[İI]RAY|MİRAY/i],
  ["PALME", /PALME/i],
];

const atlasProgramPool = [
  { area: "Sayısal", maxRank: 30000, stretchRank: 60000, program: "Tıp Fakültesi", universities: ["Hacettepe", "Ege", "Akdeniz", "Marmara"], note: "Biyoloji-kimya istikrarı ve TYT fen disiplini kritik." },
  { area: "Sayısal", maxRank: 90000, stretchRank: 150000, program: "Bilgisayar / Yazılım Mühendisliği", universities: ["YTÜ", "Marmara", "Kocaeli", "Sakarya"], note: "Matematik ve problem çözme ivmesi öne çıkar." },
  { area: "Sayısal", maxRank: 180000, stretchRank: 280000, program: "Endüstri, Elektrik-Elektronik veya Makine Mühendisliği", universities: ["Bursa Uludağ", "Eskişehir Osmangazi", "Pamukkale", "Balıkesir"], note: "Matematik neti sabitlenirse hedef bandı genişler." },
  { area: "Sayısal", maxRank: 350000, stretchRank: 550000, program: "Hemşirelik, Fizyoterapi, Beslenme ve Diyetetik", universities: ["Sağlık bilimleri odaklı devlet ve vakıf programları"], note: "TYT temel netleri ve biyoloji/kimya kazanımları izlenmeli." },
  { area: "Eşit Ağırlık", maxRank: 125000, stretchRank: 180000, program: "Hukuk", universities: ["Ankara", "Marmara", "Dokuz Eylül", "Anadolu"], note: "Türkçe-sosyal sürekliliği ve AYT matematik belirleyici olur." },
  { area: "Eşit Ağırlık", maxRank: 250000, stretchRank: 380000, program: "Psikoloji / PDR", universities: ["Ege", "Anadolu", "Akdeniz", "Bolu Abant İzzet Baysal"], note: "Matematik kaybı azaltılırken okuma-anlama gücü korunmalı." },
  { area: "Eşit Ağırlık", maxRank: 450000, stretchRank: 700000, program: "Yönetim Bilişim Sistemleri / İşletme / İktisat", universities: ["Kocaeli", "Sakarya", "Bursa Teknik", "Manisa Celal Bayar"], note: "Matematik + Türkçe birlikte yükselirse tercih alanı genişler." },
  { area: "Sözel", maxRank: 90000, stretchRank: 160000, program: "Özel Eğitim, Türkçe veya Sosyal Bilgiler Öğretmenliği", universities: ["Gazi", "Anadolu", "Dokuz Eylül", "Marmara"], note: "Edebiyat-sosyal ayrıntı netleri yakından izlenmeli." },
  { area: "Sözel", maxRank: 300000, stretchRank: 600000, program: "İletişim, Tarih, Türk Dili ve Edebiyatı, Sosyal Hizmet", universities: ["Ankara Hacı Bayram Veli", "İstanbul", "Ege", "Akdeniz"], note: "Türkçe okuma hızı ve sosyal yorum soruları desteklenmeli." },
  { area: "Dil", maxRank: 50000, stretchRank: 90000, program: "İngilizce Öğretmenliği / Mütercim-Tercümanlık", universities: ["Boğaziçi", "Hacettepe", "Marmara", "Dokuz Eylül"], note: "YDT neti ve TYT Türkçe belirleyicidir." },
  { area: "Dil", maxRank: 150000, stretchRank: 250000, program: "İngiliz Dili ve Edebiyatı / Dilbilim / Turizm Rehberliği", universities: ["Anadolu", "Akdeniz", "Çanakkale Onsekiz Mart", "Pamukkale"], note: "Kelime, okuma ve paragraf rutiniyle hedef bandı iyileşir." },
];

const examBrandTokens = [
  ["MEBI", "mebi"],
  ["CAP", "cap"],
  ["OZDEBIR", "ozdebir"],
  ["TODER", "toder"],
  ["ORIJINAL", "orijinal"],
  ["345", "345"],
  ["3D", "3d"],
  ["BILGI_SARMAL", "bilgi sarmal"],
  ["KAREKOK", "karekok"],
  ["LIMIT", "limit"],
  ["YAYIN_DENIZI", "yayin denizi"],
  ["PARAF", "paraf"],
  ["HIZ_RENK", "hiz ve renk"],
  ["ENDEMIK", "endemik"],
  ["MIRAY", "miray"],
  ["PALME", "palme"],
];

const atlasPrograms = [
  { area: "Say\u0131sal", maxRank: 25000, stretchRank: 50000, program: "T\u0131p Fak\u00fcltesi", universities: ["Hacettepe", "Ege", "Akdeniz", "Marmara"], note: "Biyoloji-kimya istikrar\u0131 ve TYT fen disiplini kritik." },
  { area: "Say\u0131sal", maxRank: 90000, stretchRank: 150000, program: "Bilgisayar / Yaz\u0131l\u0131m M\u00fchendisli\u011fi", universities: ["YT\u00dc", "Marmara", "Kocaeli", "Sakarya"], note: "Matematik ve problem \u00e7\u00f6zme ivmesi \u00f6ne \u00e7\u0131kar." },
  { area: "Say\u0131sal", maxRank: 180000, stretchRank: 280000, program: "End\u00fcstri, Elektrik-Elektronik veya Makine M\u00fchendisli\u011fi", universities: ["Bursa Uluda\u011f", "Eski\u015fehir Osmangazi", "Pamukkale", "Bal\u0131kesir"], note: "Matematik neti sabitlenirse hedef band\u0131 geni\u015fler." },
  { area: "Say\u0131sal", maxRank: 350000, stretchRank: 550000, program: "Hem\u015firelik, Fizyoterapi, Beslenme ve Diyetetik", universities: ["Sa\u011fl\u0131k bilimleri odakl\u0131 devlet ve vak\u0131f programlar\u0131"], note: "TYT temel netleri ve biyoloji/kimya kazan\u0131mlar\u0131 izlenmeli." },
  { area: "E\u015fit A\u011f\u0131rl\u0131k", maxRank: 75000, stretchRank: 100000, program: "Hukuk", universities: ["Ankara", "Marmara", "Dokuz Eyl\u00fcl", "Anadolu"], note: "T\u00fcrk\u00e7e-sosyal s\u00fcreklili\u011fi ve AYT matematik belirleyici olur." },
  { area: "E\u015fit A\u011f\u0131rl\u0131k", maxRank: 250000, stretchRank: 380000, program: "Psikoloji / PDR", universities: ["Ege", "Anadolu", "Akdeniz", "Bolu Abant \u0130zzet Baysal"], note: "Matematik kayb\u0131 azalt\u0131l\u0131rken okuma-anlama g\u00fcc\u00fc korunmal\u0131." },
  { area: "E\u015fit A\u011f\u0131rl\u0131k", maxRank: 450000, stretchRank: 700000, program: "Y\u00f6netim Bili\u015fim Sistemleri / \u0130\u015fletme / \u0130ktisat", universities: ["Kocaeli", "Sakarya", "Bursa Teknik", "Manisa Celal Bayar"], note: "Matematik + T\u00fcrk\u00e7e birlikte y\u00fckselirse tercih alan\u0131 geni\u015fler." },
  { area: "S\u00f6zel", maxRank: 90000, stretchRank: 160000, program: "\u00d6zel E\u011fitim, T\u00fcrk\u00e7e veya Sosyal Bilgiler \u00d6\u011fretmenli\u011fi", universities: ["Gazi", "Anadolu", "Dokuz Eyl\u00fcl", "Marmara"], note: "Edebiyat-sosyal ayr\u0131nt\u0131 netleri yak\u0131ndan izlenmeli." },
  { area: "S\u00f6zel", maxRank: 300000, stretchRank: 600000, program: "\u0130leti\u015fim, Tarih, T\u00fcrk Dili ve Edebiyat\u0131, Sosyal Hizmet", universities: ["Ankara Hac\u0131 Bayram Veli", "\u0130stanbul", "Ege", "Akdeniz"], note: "T\u00fcrk\u00e7e okuma h\u0131z\u0131 ve sosyal yorum sorular\u0131 desteklenmeli." },
  { area: "Dil", maxRank: 50000, stretchRank: 90000, program: "\u0130ngilizce \u00d6\u011fretmenli\u011fi / M\u00fctercim-Terc\u00fcmanl\u0131k", universities: ["Bo\u011fazi\u00e7i", "Hacettepe", "Marmara", "Dokuz Eyl\u00fcl"], note: "YDT neti ve TYT T\u00fcrk\u00e7e belirleyicidir." },
  { area: "Dil", maxRank: 150000, stretchRank: 250000, program: "\u0130ngiliz Dili ve Edebiyat\u0131 / Dilbilim / Turizm Rehberli\u011fi", universities: ["Anadolu", "Akdeniz", "\u00c7anakkale Onsekiz Mart", "Pamukkale"], note: "Kelime, okuma ve paragraf rutiniyle hedef band\u0131 iyile\u015fir." },
];

const yksTopicMap = {
  turkce: ["Paragraf", "S\u00f6zc\u00fckte anlam", "C\u00fcmlede anlam", "Dil bilgisi", "Yaz\u0131m-noktalama", "Anlat\u0131m bozuklu\u011fu"],
  edebiyat: ["\u015eiir bilgisi", "Edebi ak\u0131mlar", "Tanzimat-Servetif\u00fcnun", "Milli Edebiyat", "Cumhuriyet edebiyat\u0131", "Metin t\u00fcrleri"],
  matematik: ["Temel kavramlar", "Problemler", "Rasyonel-say\u0131lar", "Denklem-e\u015fitsizlik", "Fonksiyonlar", "Polinom", "Trigonometri", "Limit-t\u00fcrev-integral", "Olas\u0131l\u0131k-istatistik"],
  geometri: ["A\u00e7\u0131-\u00fc\u00e7gen", "\u00c7okgen-d\u00f6rtgen", "\u00c7ember-daire", "Analitik geometri", "Kat\u0131 cisimler"],
  fizik: ["Kuvvet-hareket", "Enerji", "Elektrik-manyetizma", "Dalgalar", "Optik", "Modern fizik"],
  kimya: ["Atom-periyodik sistem", "Kimyasal t\u00fcrler", "Mol-stokiyometri", "\u00c7\u00f6zeltiler", "Kimyasal tepkimeler", "Organik kimya"],
  biyoloji: ["H\u00fccre", "Canl\u0131lar", "Kalıtım", "Ekosistem", "Sistemler", "Bitki biyolojisi"],
  tarih: ["Tarih bilimi", "\u0130lk ve orta \u00e7a\u011f", "T\u00fcrk-\u0130slam tarihi", "Osmanl\u0131", "Milli M\u00fccadele", "Atat\u00fcrk\u00e7\u00fcl\u00fck"],
  cografya: ["Do\u011fal sistemler", "Harita", "\u0130klim", "N\u00fcfus-yerle\u015fme", "Ekonomik faaliyetler", "B\u00f6lgeler"],
  felsefe: ["Felsefeye giri\u015f", "Bilgi felsefesi", "Ahlak felsefesi", "Din felsefesi", "Mant\u0131k", "Psikoloji-sosyoloji"],
  din: ["Bilgi-inan\u00e7", "\u0130badet", "Ahlak-de\u011fer", "Hz. Muhammed", "Din-k\u00fclt\u00fcr"],
  ingilizce: ["Kelime", "Dil bilgisi", "Paragraf", "Cloze test", "C\u00fcmle tamamlama", "\u00c7eviri", "Diyalog", "Anlam b\u00fct\u00fcnl\u00fc\u011f\u00fc"],
};

const subjectTopicAliases = {
  "t\u00fcrk\u00e7e": "turkce",
  turkce: "turkce",
  edebiyat: "edebiyat",
  mat: "matematik",
  matematik: "matematik",
  geometri: "geometri",
  fen: "fen",
  fizik: "fizik",
  kimya: "kimya",
  biyoloji: "biyoloji",
  sosyal: "sosyal",
  tarih: "tarih",
  co\u011frafya: "cografya",
  cografya: "cografya",
  felsefe: "felsefe",
  din: "din",
  ingilizce: "ingilizce",
  dil: "ingilizce",
  ydt: "ingilizce",
};

const viewTitles = {
  dashboard: "Ana Panel",
  dossier: "Öğrenci Dosyası",
  risk: "Risk Haritası",
  forms: "Form Aktarma",
  exams: "Sınavlar",
  attendance: "Devamsızlık",
  discipline: "Disiplin",
  honor: "Onur/Yetenek",
  alumni: "Mezun İzleri",
  parentNetwork: "Okul Destek Ağı",
  planning: "Planlama",
  reports: "Raporlar",
  settings: "Ayarlar",
};

const viewTitlesEn = {
  dashboard: "Dashboard",
  dossier: "Student File",
  risk: "Risk Map",
  forms: "Form Import",
  exams: "Exams",
  attendance: "Attendance",
  discipline: "Discipline",
  honor: "Honor/Talents",
  alumni: "Graduate Outcomes",
  parentNetwork: "School Support Network",
  planning: "Planning",
  reports: "Reports",
  settings: "Settings",
};

const uiOriginalTextNodes = new WeakMap();
const uiOriginalAttrs = new WeakMap();

const uiTranslationsEn = {
  "Girişsiz geliştirme modu": "No-login development mode",
  "Kaydet": "Save",
  "Yeni öğrenci": "New student",
  "Kademe": "Grade",
  "Sınıf / Alan": "Class / Track",
  "Okul bilgisi": "School identity",
  "Okul adı": "School name",
  "Kısa ad / logo yazısı": "Short name / logo text",
  "Logo yükle": "Upload logo",
  "Okul bilgisini kaydet": "Save school identity",
  "Yedek indir": "Download backup",
  "Yedekten yükle": "Restore backup",
  "Okul kimliği": "School Identity",
  "Sol üstte görünen okul adı, logo yazısı ve görsel logo.": "School name, logo text and visual logo shown in the top-left.",
  "Alt başlık": "Subtitle",
  "Logoyu kaldır": "Remove logo",
  "Uygulama görünümü": "Application View",
  "Dil, koyu renk, açılış ekranı ve gizlilik tercihleri.": "Language, dark mode, opening screen and privacy preferences.",
  "Dil": "Language",
  "Tema": "Theme",
  "Açık": "Light",
  "Koyu": "Dark",
  "Sistemle aynı": "System",
  "Açılış ekranı": "Opening view",
  "Kompakt tablo görünümü": "Compact table view",
  "Gizlilik modu: detay alanlarını bulanıklaştır": "Privacy mode: blur detail fields",
  "Veri ve yedek": "Data and Backup",
  "Veriler bu prototipte tarayıcıda saklanır; tüm sistemi dosya olarak yedekleyebilirsin.": "In this prototype, data is stored in the browser; you can back up the whole system as a file.",
  "Yerel veriyi sıfırla": "Reset local data",
  "Öğrenci kartı": "Student card",
  "Yeni Öğrenci": "New Student",
  "Kapat": "Close",
  "Belgeden öğrenci bilgisi doldur": "Fill student information from document",
  "Öğrenci tanıma formu, PDF, Excel, fotoğraf/görsel veya Word belgesini seçip form alanlarına aktar.": "Select a student recognition form, PDF, Excel, photo/image or Word document and import it into form fields.",
  "Belgeyi oku": "Read document",
  "Henüz belge seçilmedi.": "No document selected yet.",
  "Tüm öğrenciler": "All students",
  "Takip ihtiyacı olanlar": "Students needing follow-up",
  "Devamsızlık takibi": "Absenteeism tracking",
  "Akademik destek ihtiyacı": "Academic support need",
  "Parçalanmış / ayrı aile": "Separated/divorced family",
  "Anne/baba kaybı": "Mother/father loss",
  "Maddi sıkıntı / imkan eksikliği": "Financial difficulty / lack of resources",
  "Özel eğitim / öğrenme gözlemi": "Special education / learning observation",
  "Şiddet / disiplin / akran riski": "Violence / discipline / peer risk",
  "Görüşme / yönlendirme kaydı": "Meeting / referral record",
  "Mesleki/Yaşam Pencerem uygulananlar": "Career / Life Window applied",
  "Snellen göz testi uygulananlar": "Snellen eye test applied",
  "Ana Panel": "Dashboard",
  "Öğrenci Dosyası": "Student Dossier",
  "Sınavlar": "Exams",
  "Onur/Yetenek": "Honor/Talent",
  "Ayarlar": "Settings",
  "Toplam öğrenci": "Total students",
  "Aktif öğrenci": "Active students",
  "Takip ihtiyacı": "Needs follow-up",
  "Devamsızlık işareti": "Absenteeism flag",
  "Akademik komuta": "Academic Command",
  "hızlı karar ekranı": "quick decision screen",
  "Sınıfın güncel risk, not, deneme ve plan sinyallerini tek yerden izle.": "Review the class's current risk, grade, mock exam and planning signals in one place.",
  "Yıl sonu bir üst sınıfa aktar": "Promote to next grade at year-end",
  "Sınıf ilk/son 10": "Class top/bottom 10",
  "Son puanlara göre öğretmen özeti": "Teacher summary by latest scores",
  "En iyi 10": "Top 10",
  "Destek öncelikli 10": "Support priority 10",
  "Bugünkü rehberlik görünümü": "Today's Guidance View",
  "için hızlı tarama ve öneriler": "quick scan and suggestions",
  "Haritaya git": "Go to map",
  "Devamını gör": "Show more",
  "Daha az göster": "Show less",
  "Sınav düşüş uyarıları": "Exam Drop Alerts",
  "Son denemelerde belirgin gerileme gösteren öğrenciler": "Students with clear decline in recent mock exams",
  "Sınavlara git": "Go to exams",
  "İş akışı": "Workflow",
  "Elle giriş ve belge aktarımı aynı öğrenci kartını doldurur.": "Manual entry and document import fill the same student card.",
  "Gün seç": "Select day",
  "Tamamlandı": "Completed",
  "Kalan": "Remaining",
  "Bu gün için yapılacak kaydı yok.": "No task record for this day.",
  "Yeni yapılacak ekle": "Add a new task",
  "Kısa not / hedef": "Short note / target",
  "Ekle": "Add",
  "Genel": "General",
  "Öğrenci dosyası": "Student dossier",
  "Görüşme": "Meeting",
  "Risk": "Risk",
  "Veli": "Parent",
  "Sınav": "Exam",
  "Planlama": "Planning",
  "Rapor": "Report",
  "öğrenci listesi": "student list",
  "Öğrenci kartını açıp form bilgilerini düzenle.": "Open the student card and edit form details.",
  "Ara": "Search",
  "Aç": "Open",
  "Düzenle": "Edit",
  "Sil": "Delete",
  "Öğrenci adına bağlı bütün kayıtlar": "All Records Linked to Student",
  "Risk Haritası": "Risk Map",
  "İşaretli göstergeler": "Checked indicators",
  "Kayıt Özeti": "Record Summary",
  "Öğrenciye bağlı form sayıları": "Form counts linked to the student",
  "Tüm kayıt": "All records",
  "Görüşme/not": "Meeting/note",
  "Akademik": "Academic",
  "Sağlık/özel eğitim": "Health/special education",
  "Bu başlıkta kayıt yok.": "No record under this heading.",
  "Risk göstergeleri": "Risk Indicators",
  "Risk işareti": "Risk flag",
  "Form Aktarma": "Form Import",
  "Belgeyi analiz et": "Analyze document",
  "Öğrenci kartına aç": "Open as student card",
  "Seçili forma aktar": "Apply to selected form",
  "Sınav sonucu toplu giriş": "Bulk Exam Result Entry",
  "Okul yazılısı, performans, proje ve deneme sonuçlarını sınıf listesiyle içeri al.": "Import school exams, performance, project and mock results with class lists.",
  "Sınav adı": "Exam name",
  "Tarih": "Date",
  "Dosyayı alana aktar": "Load file into field",
  "Dosyayı oku ve işle": "Read and process file",
  "Henüz sınav dosyası okunmadı.": "No exam file has been read yet.",
  "Deneme konu dağılımı ekle": "Add mock exam topic distribution",
  "Konu dosyasını al": "Load topic file",
  "Konu dosyasını işle": "Process topic file",
  "Henüz konu dağılım dosyası okunmadı.": "No topic distribution file has been read yet.",
  "Sınıfa işle": "Process for class",
  "Örnek doldur": "Fill example",
  "Okul notu hesabı": "School Grade Calculation",
  "akademik yönlendirme": "academic guidance",
  "Alan eğilimi, meslek yatkınlığı, hedef bölüm havuzu ve öğretmen geri bildirimi": "Track tendency, career fit, target program pool and teacher feedback",
  "sınıf grafikleri": "class charts",
  "Sınıf ortalaması, ders net dağılımı ve toplu konu öncelikleri": "Class averages, subject net distribution and class topic priorities",
  "sınav listesi": "exam list",
  "Disiplin": "Discipline",
  "Örnek tutanak indir": "Download sample incident report",
  "Onur ve yetenek kaydı": "Honor and Talent Record",
  "Kaydı ekle": "Add record",
  "teşvik dosyası": "encouragement file",
  "Anketler": "Surveys",
  "Sınıf anket linki": "Class Survey Link",
  "Sınıf linki oluştur": "Create class link",
  "Anket cevapları": "Survey Responses",
  "Cevabı kaydet": "Save response",
  "Haftalık planlama": "Weekly Planning",
  "Önce dersi seç, sonra o derse ait konuyu ayrı alandan belirle.": "Select a course first, then enter its topic separately.",
  "Ders": "Course",
  "Konu": "Topic",
  "Dakika": "Minutes",
  "Soru hedefi": "Question target",
  "Not": "Note",
  "Planı kaydet": "Save plan",
  "haftalık planı": "weekly plan",
  "Boş Word": "Blank Word",
  "Planı Word indir": "Download plan as Word",
  "Bu planı indir": "Download this plan",
  "Henüz haftalık plan yok.": "No weekly plan yet.",
  "Hazır listeler": "Ready Lists",
  "İstenen bilgiye sahip öğrencileri sıralı al.": "List students who have the requested information.",
  "Tüm öğrenciler": "All students",
  "Raporlar": "Reports",
  "Yazdır / PDF": "Print / PDF",
  "CSV indir": "Download CSV",
  "Öğrenci": "Student",
  "Sınıf": "Class",
  "Listeye girme nedeni": "Reason listed",
  "Takip": "Follow-up",
  "Önce öğrenci seç.": "Select a student first.",
  "Öğrenci seç": "Select student",
  "Bu sınıfta öğrenci yok": "No students in this class",
  "Yüksek takip": "High follow-up",
  "Orta takip": "Medium follow-up",
  "Düşük takip": "Low follow-up",
  "Rutin izleme": "Routine monitoring",
  "Okul Yazılısı 1": "School Exam 1",
  "Okul Yazılısı 2": "School Exam 2",
  "Performans 1": "Performance 1",
  "Performans 2": "Performance 2",
  "Proje": "Project",
  "Deneme": "Mock Exam",
};

const uiPlaceholderTranslationsEn = {
  "Okul adı": "School name",
  "Örn. AL": "Ex. AL",
  "Rehberlik ve sınıf takip paneli": "Guidance and class tracking panel",
  "Yeni yapılacak ekle": "Add a new task",
  "Kısa not / hedef": "Short note / target",
  "Örn. Matematik 1. yazılı / TYT deneme": "Ex. Math exam 1 / TYT mock exam",
  "Konu/kazanım elle yazılsın": "Enter topic/objective manually",
  "Örn. yanlış defteri, öğretmen kontrolü, veli bilgilendirme": "Ex. mistake notebook, teacher check, parent update",
};

function viewTitle(viewName) {
  return (state.settings.language === "en" ? viewTitlesEn : viewTitles)[viewName] || viewTitles[viewName] || "";
}

function normalizeViewName(viewName) {
  const allowedViews = new Set(["dashboard", "students", "dossier", "risk", "forms", "exams", "attendance", "discipline", "honor", "alumni", "parentNetwork", "planning", "reports", "settings"]);
  return allowedViews.has(viewName) ? viewName : "dashboard";
}

const gradeSelect = document.querySelector("#gradeSelect");
const branchSelect = document.querySelector("#branchSelect");
const activeClassBadge = document.querySelector("#activeClassBadge");
const studentDialog = document.querySelector("#studentDialog");
const studentForm = document.querySelector("#studentForm");
const formSectionsRoot = document.querySelector("#studentFormSections");

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelector("#saveBtn").addEventListener("click", () => {
  saveState();
  toastSave();
});
document.querySelector("#logoutBtn")?.addEventListener("click", () => signOutUser());
document.querySelector("#addStudentBtn").addEventListener("click", () => openStudentDialog());
document.querySelector("#readStudentDocumentBtn").addEventListener("click", importStudentDocument);
document.querySelector("#studentCameraInput").addEventListener("change", () => syncCameraInputToFileInput('studentCameraInput', 'studentDocInput', 'studentImportPreview'));
document.querySelector("#cancelStudentBtn").addEventListener("click", () => studentDialog.close());
studentDialog.querySelector(".icon-button").addEventListener("click", () => studentDialog.close());

gradeSelect.addEventListener("change", () => {
  selectedGrade = gradeSelect.value;
  selectedClass = availableClassesForGrade(selectedGrade)[0] || allowedClassesForUser()[0] || selectedClass;
  selectedStudentId = currentStudents()[0]?.id || selectedStudentId || state.students[0]?.id || null;
  fillClassSelect();
  renderAll();
});

branchSelect.addEventListener("change", () => {
  selectedClass = branchSelect.value;
  selectedStudentId = currentStudents()[0]?.id || null;
  renderAll();
});

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(studentForm).entries());
  if (editingStudentId) {
    const target = state.students.find((student) => student.id === editingStudentId);
    Object.assign(target, normalizeStudent(formData));
  } else {
    if (!allowedClassesForUser().includes(selectedClass)) return alert("Bu sınıf için kayıt yetkin yok.");
    const student = {
      id: crypto.randomUUID(),
      className: selectedClass,
      ...normalizeStudent(formData),
      risk: {},
      protective: [],
    };
    state.students.push(student);
    selectedStudentId = student.id;
  }
  syncRisksFromProfile(state.students.find((student) => student.id === selectedStudentId) || state.students.at(-1));
  saveState();
  studentDialog.close();
  renderAll();
});

function field(name, label, type = "text", config = {}) {
  return { name, label, type, ...config };
}

function loadState() {
  if (isDemoMode) return normalizeLoadedState(safeJson(sessionStorage.getItem("ois-public-demo"), defaultState()));
  const raw = localStorage.getItem("ois-public-state");
  if (!raw) return defaultState();
  try {
    const parsed = JSON.parse(raw);
    return {
      school: { ...defaultState().school, ...(parsed.school || {}) },
      settings: { ...defaultState().settings, ...(parsed.settings || {}) },
      atlasPrograms: Array.isArray(parsed.atlasPrograms) ? parsed.atlasPrograms : [],
      students: Array.isArray(parsed.students) ? parsed.students : defaultStudents,
      formRecords: Array.isArray(parsed.formRecords) ? parsed.formRecords : [],
      examRecords: Array.isArray(parsed.examRecords) ? parsed.examRecords : [],
      academicMeetings: Array.isArray(parsed.academicMeetings) ? parsed.academicMeetings : [],
      disciplineRecords: Array.isArray(parsed.disciplineRecords) ? parsed.disciplineRecords : [],
      attendanceRecords: Array.isArray(parsed.attendanceRecords) ? parsed.attendanceRecords : [],
      honorRecords: Array.isArray(parsed.honorRecords) ? parsed.honorRecords : [],
      alumniRecords: Array.isArray(parsed.alumniRecords) ? parsed.alumniRecords : [],
      parentResources: Array.isArray(parsed.parentResources) ? parsed.parentResources : [],
      surveyLinks: Array.isArray(parsed.surveyLinks) ? parsed.surveyLinks : [],
      surveyResponses: Array.isArray(parsed.surveyResponses) ? parsed.surveyResponses : [],
      studyPlans: Array.isArray(parsed.studyPlans) ? parsed.studyPlans : [],
      yearTransfers: Array.isArray(parsed.yearTransfers) ? parsed.yearTransfers : [],
      workflowTasks: normalizeWorkflowTasks(Array.isArray(parsed.workflowTasks) ? parsed.workflowTasks : defaultWorkflowTasks()),
    };
  } catch {
    return defaultState();
  }
}

function normalizeLoadedState(parsed = {}) {
  return {
    school: { ...defaultState().school, ...(parsed.school || {}) },
    settings: { ...defaultState().settings, ...(parsed.settings || {}) },
    atlasPrograms: Array.isArray(parsed.atlasPrograms) ? parsed.atlasPrograms : [],
    students: Array.isArray(parsed.students) ? parsed.students : defaultStudents,
    formRecords: Array.isArray(parsed.formRecords) ? parsed.formRecords : [],
    examRecords: Array.isArray(parsed.examRecords) ? parsed.examRecords : [],
    academicMeetings: Array.isArray(parsed.academicMeetings) ? parsed.academicMeetings : [],
    disciplineRecords: Array.isArray(parsed.disciplineRecords) ? parsed.disciplineRecords : [],
    attendanceRecords: Array.isArray(parsed.attendanceRecords) ? parsed.attendanceRecords : [],
    honorRecords: Array.isArray(parsed.honorRecords) ? parsed.honorRecords : [],
    alumniRecords: Array.isArray(parsed.alumniRecords) ? parsed.alumniRecords : [],
    parentResources: Array.isArray(parsed.parentResources) ? parsed.parentResources : [],
    surveyLinks: Array.isArray(parsed.surveyLinks) ? parsed.surveyLinks : [],
    surveyResponses: Array.isArray(parsed.surveyResponses) ? parsed.surveyResponses : [],
    studyPlans: Array.isArray(parsed.studyPlans) ? parsed.studyPlans : [],
    yearTransfers: Array.isArray(parsed.yearTransfers) ? parsed.yearTransfers : [],
    workflowTasks: normalizeWorkflowTasks(Array.isArray(parsed.workflowTasks) ? parsed.workflowTasks : defaultWorkflowTasks()),
  };
}

async function loadRemoteState() {
  if (isDemoMode) return;
  if (await loadCloudState()) return;
  if (hasCloudConfig()) {
    updateCloudStatus("Supabase ana verisi okunamadı. Yerel veriye düşülmedi; veri karışmasını önlemek için bağlantıyı kontrol edin.", "error");
    return;
  }
  try {
    const response = await fetch("/api/state", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    remoteDatabaseAvailable = true;
    if (payload.state) {
      state = normalizeLoadedState(payload.state);
      persistCurrentState();
    } else {
      await saveRemoteStateNow();
    }
  } catch {
    remoteDatabaseAvailable = false;
  }
}

function defaultState() {
  return {
    school: { name: "\u00d6\u011frenci \u0130zleme Sistemi", subtitle: "Rehberlik ve s\u0131n\u0131f takip paneli", shortName: "\u00d6\u0130", logo: "" },
    settings: { language: "tr", theme: "light", defaultView: "dashboard", compactTables: true, privacyMode: false },
    atlasPrograms: [],
    students: defaultStudents,
    formRecords: [],
    examRecords: [],
    academicMeetings: [],
    disciplineRecords: [],
    attendanceRecords: [],
    honorRecords: [],
    alumniRecords: [],
    parentResources: [],
    surveyLinks: [],
    surveyResponses: [],
    studyPlans: [],
    yearTransfers: [],
    workflowTasks: defaultWorkflowTasks(),
  };
}

function defaultWorkflowTasks() {
  const date = currentDateKey();
  return [
    { id: "wf-student", date, category: "Öğrenci dosyası", text: "Öğrenciyi sınıfına ekle veya belge aktarımıyla taslak oluştur.", done: false },
    { id: "wf-profile", date, category: "Tanıma", text: "Öğrenci tanıma formundaki tüm alanları bölüm bölüm doldur.", done: false },
    { id: "wf-risk", date, category: "Risk", text: "Risk haritasındaki maddeleri kaynak bilgisiyle işaretle.", done: false },
    { id: "wf-plan", date, category: "Planlama", text: "Analiz önerilerini rehberlik planına çevir.", done: false },
  ];
}

function normalizeWorkflowTasks(tasks) {
  return tasks.map((task) => ({
    id: task.id || crypto.randomUUID(),
    date: task.date || workflowDateFromLegacyMonth(task.month) || currentDateKey(),
    category: task.category || "Genel",
    text: task.text || "Yapılacak",
    note: task.note || "",
    done: Boolean(task.done),
    completedAt: task.completedAt || "",
    createdAt: task.createdAt || new Date().toISOString(),
  }));
}

function studentMergeKey(student) {
  const no = normalizeKey(student?.schoolNo || student?.school_no || "");
  const name = normalizeKey(student?.fullName || student?.student_name || "");
  const className = normalizeKey(student?.className || student?.class_name || "");
  return no && className ? `no:${className}:${no}` : `id:${escapeHtml(student?.id || className + ":" + name)}`;
}

function isDefaultDemoStudent(student) {
  const demoKeys = new Set(defaultStudents.map(studentMergeKey));
  return demoKeys.has(studentMergeKey(student));
}

function stripDemoStudentsWhenRealData(items = [], otherItems = []) {
  const hasRealData = [...items, ...otherItems].some((student) => student && !isDefaultDemoStudent(student));
  return hasRealData ? items.filter((student) => !isDefaultDemoStudent(student)) : items;
}

function mergeArrayByIdentity(localItems = [], cloudItems = [], keyFn = (item) => item?.id || JSON.stringify(item)) {
  const map = new Map();
  [...cloudItems, ...localItems].forEach((item) => {
    if (!item) return;
    const key = keyFn(item);
    const previous = map.get(key) || {};
    map.set(key, { ...previous, ...item });
  });
  return [...map.values()];
}

function mergeArrayPreferIncoming(localItems = [], incomingItems = [], keyFn = (item) => item?.id || JSON.stringify(item)) {
  const map = new Map();
  [...localItems, ...incomingItems].forEach((item) => {
    if (!item) return;
    const key = keyFn(item);
    const previous = map.get(key) || {};
    map.set(key, { ...previous, ...item });
  });
  return [...map.values()];
}

function mergeStateWithoutDataLoss(localState, cloudState) {
  const local = sanitizeStateForCurrentSchool(localState || {});
  const cloud = sanitizeStateForCurrentSchool(cloudState || {});
  const localStudents = stripDemoStudentsWhenRealData(local.students, cloud.students);
  const cloudStudents = stripDemoStudentsWhenRealData(cloud.students, local.students);
  return {
    ...cloud,
    ...local,
    school: { ...cloud.school, ...local.school },
    settings: { ...cloud.settings, ...local.settings },
    atlasPrograms: mergeArrayByIdentity(local.atlasPrograms, cloud.atlasPrograms),
    students: mergeArrayByIdentity(localStudents, cloudStudents, studentMergeKey),
    formRecords: mergeArrayByIdentity(local.formRecords, cloud.formRecords),
    examRecords: mergeArrayByIdentity(local.examRecords, cloud.examRecords),
    academicMeetings: mergeArrayByIdentity(local.academicMeetings, cloud.academicMeetings),
    disciplineRecords: mergeArrayByIdentity(local.disciplineRecords, cloud.disciplineRecords),
    attendanceRecords: mergeArrayByIdentity(local.attendanceRecords, cloud.attendanceRecords),
    honorRecords: mergeArrayByIdentity(local.honorRecords, cloud.honorRecords),
    alumniRecords: mergeArrayByIdentity(local.alumniRecords, cloud.alumniRecords),
    parentResources: mergeArrayByIdentity(local.parentResources, cloud.parentResources),
    studyPlans: mergeArrayByIdentity(local.studyPlans, cloud.studyPlans),
    yearTransfers: mergeArrayByIdentity(local.yearTransfers, cloud.yearTransfers),
    workflowTasks: normalizeWorkflowTasks(mergeArrayByIdentity(local.workflowTasks, cloud.workflowTasks)),
    surveyLinks: [],
    surveyResponses: [],
  };
}

function mergeStatePreferIncoming(localState, incomingState) {
  const local = sanitizeStateForCurrentSchool(localState || {});
  const incoming = sanitizeStateForCurrentSchool(incomingState || {});
  const localStudents = stripDemoStudentsWhenRealData(local.students, incoming.students);
  const incomingStudents = stripDemoStudentsWhenRealData(incoming.students, local.students);
  return {
    ...local,
    ...incoming,
    school: { ...local.school, ...incoming.school },
    settings: { ...local.settings, ...incoming.settings },
    atlasPrograms: mergeArrayPreferIncoming(local.atlasPrograms, incoming.atlasPrograms),
    students: mergeArrayPreferIncoming(localStudents, incomingStudents, studentMergeKey),
    formRecords: mergeArrayPreferIncoming(local.formRecords, incoming.formRecords),
    examRecords: mergeArrayPreferIncoming(local.examRecords, incoming.examRecords),
    academicMeetings: mergeArrayPreferIncoming(local.academicMeetings, incoming.academicMeetings),
    disciplineRecords: mergeArrayPreferIncoming(local.disciplineRecords, incoming.disciplineRecords),
    attendanceRecords: mergeArrayPreferIncoming(local.attendanceRecords, incoming.attendanceRecords),
    honorRecords: mergeArrayPreferIncoming(local.honorRecords, incoming.honorRecords),
    alumniRecords: mergeArrayPreferIncoming(local.alumniRecords, incoming.alumniRecords),
    parentResources: mergeArrayPreferIncoming(local.parentResources, incoming.parentResources),
    studyPlans: mergeArrayPreferIncoming(local.studyPlans, incoming.studyPlans),
    yearTransfers: mergeArrayPreferIncoming(local.yearTransfers, incoming.yearTransfers),
    workflowTasks: normalizeWorkflowTasks(mergeArrayPreferIncoming(local.workflowTasks, incoming.workflowTasks)),
    surveyLinks: [],
    surveyResponses: [],
  };
}

function stateForClasses(sourceState = state, classNames = []) {
  const source = normalizeLoadedState(sourceState);
  const allowed = new Set(classNames.filter(Boolean));
  const students = source.students.filter((student) => allowed.has(student.className));
  const studentIds = new Set(students.map((student) => student.id));
  const byStudent = (item) => item.studentId ? studentIds.has(item.studentId) && (!item.className || allowed.has(item.className)) : allowed.has(item.className);
  return {
    ...defaultState(),
    school: source.school,
    settings: { ...source.settings, cloud: undefined },
    atlasPrograms: source.atlasPrograms,
    students,
    formRecords: source.formRecords.filter(byStudent),
    examRecords: source.examRecords.filter(byStudent),
    academicMeetings: source.academicMeetings.filter(byStudent),
    disciplineRecords: source.disciplineRecords.filter(byStudent),
    attendanceRecords: source.attendanceRecords.filter(byStudent),
    honorRecords: source.honorRecords.filter(byStudent),
    alumniRecords: (source.alumniRecords || []).filter((item) => allowed.has(item.className)),
    parentResources: [],
    studyPlans: source.studyPlans.filter(byStudent),
    yearTransfers: source.yearTransfers.filter((item) => allowed.has(item.fromClass) || allowed.has(item.toClass)),
    workflowTasks: source.workflowTasks.filter((item) => !item.studentId || byStudent(item)),
    surveyLinks: [],
    surveyResponses: [],
  };
}

function localStoredState() {
  const cached = normalizeLoadedState(safeJson(localStorage.getItem(stateStorageKey()), defaultState()));
  if (!stateBelongsToCurrentSchool(cached)) return defaultState();
  return isFullAccessUser() ? cached : stateForClasses(cached, allowedClassesForUser());
}

function stateStorageKey(schoolId = currentSchool?.id || currentMembership?.school_id || "") {
  return schoolId ? `ois-public-state-${schoolId}-${currentAuthUser?.id || 'anonymous'}` : "ois-public-state";
}

function currentSchoolId() {
  return currentSchool?.id || currentMembership?.school_id || "";
}

const schoolScopedLists = [
  "students",
  "formRecords",
  "examRecords",
  "academicMeetings",
  "disciplineRecords",
  "attendanceRecords",
  "honorRecords",
  "alumniRecords",
  "parentResources",
  "studyPlans",
  "yearTransfers",
  "workflowTasks",
];

function sanitizeStateForCurrentSchool(source = state) {
  if (!stateBelongsToCurrentSchool(source)) throw new Error("Başka bir okulun verisi bu okula aktarılamaz.");
  const next = normalizeLoadedState(source);
  const schoolId = currentSchoolId();
  if (!schoolId) return next;
  next.school = {
    ...(next.school || {}),
    schoolId,
    name: currentSchool?.name || next.school?.name || "Öğrenci İzleme Sistemi",
    shortName: currentSchool?.short_name || next.school?.shortName || initialsFromSchoolName(currentSchool?.name || next.school?.name || ""),
  };
  schoolScopedLists.forEach((listName) => {
    if (!Array.isArray(next[listName])) return;
    next[listName] = next[listName]
      .filter((item) => !item?.schoolId || item.schoolId === schoolId)
      .map((item) => ({ ...item, schoolId }));
  });
  next.surveyLinks = [];
  next.surveyResponses = [];
  return next;
}

function stampStateForCurrentSchool(source = state) {
  return sanitizeStateForCurrentSchool(source);
}

function stateBelongsToCurrentSchool(source) {
  const schoolId = currentSchoolId();
  const stampedId = source?.school?.schoolId || "";
  if (schoolId && stampedId && stampedId !== schoolId) return false;
  return !schoolId || !schoolScopedLists.some((listName) => (
    Array.isArray(source?.[listName]) && source[listName].some((item) => item?.schoolId && item.schoolId !== schoolId)
  ));
}

function persistCurrentState() {
  if (isDemoMode) {
    sessionStorage.setItem("ois-public-demo", JSON.stringify(state));
    return;
  }
  state = stampStateForCurrentSchool(state);
  localStorage.setItem(stateStorageKey(), JSON.stringify(state));
}

function stateSizeSummary(value = state) {
  return {
    students: Array.isArray(value.students) ? value.students.length : 0,
    forms: Array.isArray(value.formRecords) ? value.formRecords.length : 0,
    exams: Array.isArray(value.examRecords) ? value.examRecords.length : 0,
  };
}

function currentMonthKey() {
  return new Date().toISOString().slice(0, 7);
}

function currentDateKey() {
  return new Date().toISOString().slice(0, 10);
}

function workflowDateFromLegacyMonth(month) {
  return month ? `${month}-01` : "";
}

function saveState() {
  persistCurrentState();
  scheduleRemoteSave();
}

function scheduleRemoteSave() {
  if (isDemoMode) return;
  if (cloudApplyingRemote) return;
  if (!remoteDatabaseAvailable && !cloudDatabaseAvailable) return;
  clearTimeout(remoteSaveTimer);
  remoteSaveTimer = setTimeout(() => {
    saveRemoteStateNow();
  }, 250);
}

async function saveRemoteStateNow() {
  if (isDemoMode) return false;
  if (cloudDatabaseAvailable) {
    await saveCloudStateNow();
    return;
  }
  try {
    const response = await fetch("/api/state", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ state }),
    });
    remoteDatabaseAvailable = response.ok;
  } catch {
    remoteDatabaseAvailable = false;
  }
}

async function saveCloudStateNow() {
  const client = await ensureCloudClient();
  if (!client) {
    cloudDatabaseAvailable = false;
    return false;
  }
  const stateId = cloudStateId();
  if (!stateId) {
    updateCloudStatus("Bulut için önce müdür girişi veya onaylı okul üyeliği gerekli.", "warning");
    return false;
  }
  try {
    state = stampStateForCurrentSchool(state);
    if (!stateBelongsToCurrentSchool(state)) {
      throw new Error("Okul kimliği uyuşmuyor. Veri karışmasını önlemek için kaydetme durduruldu.");
    }
    if (isFullAccessUser()) {
      const { error } = await client.from("app_state").upsert({
        id: stateId,
        state,
        updated_at: new Date().toISOString(),
        updated_by: currentAuthUser?.id || null,
      });
      if (error) throw error;
    }
    await saveClassCloudStatesNow(client, stateId);
    cloudDatabaseAvailable = true;
    remoteDatabaseAvailable = true;
    updateCloudStatus("Buluta kaydedildi. Açık ekranlar otomatik güncellenecek.", "success");
    return true;
  } catch (error) {
    cloudDatabaseAvailable = false;
    updateCloudStatus(`Buluta kaydedilemedi: ${escapeHtml(error.message)}`, "error");
    return false;
  }
}

async function saveClassCloudStatesNow(client, schoolId) {
  const allowed = isFullAccessUser() ? Object.values(classes).flat() : allowedClassesForUser();
  if (!allowed.length) return;
  const rows = allowed.map((className) => ({
    school_id: schoolId,
    class_name: className,
    state: stampStateForCurrentSchool(stateForClasses(state, [className])),
    updated_at: new Date().toISOString(),
    updated_by: currentAuthUser?.id || null,
  }));
  const { error } = await client
    .from("class_states")
    .upsert(rows, { onConflict: "school_id,class_name" });
  if (error) {
    if (/class_states|schema cache|relation/i.test(error.message || "")) {
      throw new Error("Canlı sınıf veritabanı hazır değil. Supabase_CANLI_ESITLEME_DUZELTME.sql dosyasını SQL Editor'da çalıştır.");
    }
    throw error;
  }
}

async function loadClassCloudStates(client, schoolId) {
  const allowed = isFullAccessUser() ? Object.values(classes).flat() : allowedClassesForUser();
  if (!allowed.length) return false;
  const { data, error } = await client
    .from("class_states")
    .select("class_name,state,updated_at")
    .eq("school_id", schoolId)
    .in("class_name", allowed);
  if (error) {
    if (/class_states|schema cache|relation/i.test(error.message || "")) {
      updateCloudStatus("Canlı sınıf veritabanı hazır değil. Supabase SQL düzeltmesini çalıştır.", "error");
      return false;
    }
    throw error;
  }
  (data || []).forEach((row) => {
    if (isUsableCloudState(row.state) && stateBelongsToCurrentSchool(row.state)) state = mergeStatePreferIncoming(state, row.state);
  });
  return Boolean(data?.length);
}

async function subscribeCloudState() {
  const config = cloudConfig();
  const stateId = cloudStateId();
  if (!config.realtime || !cloudClient || cloudChannel || !stateId) return;
  let channel = cloudClient.channel(`ois-public-${stateId}`);
  if (isFullAccessUser()) {
    channel = channel.on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "app_state",
      filter: `id=eq.${stateId}`,
    }, (payload) => {
      const nextState = payload.new.state;
      if (!nextState) return;
      if (!stateBelongsToCurrentSchool(nextState)) return;
      cloudApplyingRemote = true;
      const localBeforeRemote = normalizeLoadedState(state);
      const remoteState = normalizeLoadedState(nextState);
      state = mergeStateWithoutDataLoss(localBeforeRemote, remoteState);
      persistCurrentState();
      selectedStudentId = state.students.find((student) => student.id === selectedStudentId)?.id || currentStudents()[0]?.id || state.students[0]?.id || null;
      renderAll();
      cloudApplyingRemote = false;
      const mergedSize = stateSizeSummary(state);
      const remoteSize = stateSizeSummary(remoteState);
      updateCloudStatus(`Başka cihaz verisi birleştirildi: ${mergedSize.students} öğrenci.`, "success");
      if (mergedSize.students > remoteSize.students) saveCloudStateNow();
    });
  }
  cloudChannel = channel
    .on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "class_states",
      filter: `school_id=eq.${stateId}`,
    }, (payload) => {
      const row = payload.new;
      if (!row?.state || !allowedClassesForUser().includes(row.class_name)) return;
      if (!stateBelongsToCurrentSchool(row.state)) return;
      cloudApplyingRemote = true;
      state = mergeStatePreferIncoming(state, row.state);
      persistCurrentState();
      selectedStudentId = state.students.find((student) => student.id === selectedStudentId)?.id || currentStudents()[0]?.id || state.students[0]?.id || null;
      renderAll();
      cloudApplyingRemote = false;
      updateCloudStatus(`${escapeHtml(row.class_name)} canlı güncellendi: ${state.students.length} öğrenci.`, "success");
    })
    .subscribe((status) => {
      if (status === "SUBSCRIBED") updateCloudStatus("Canlı eşitleme açık.", "success");
    });
}

function renderPublicHome() {
  document.body.classList.add("auth-locked");
  document.body.classList.remove("auth-unlocked");
  const gate = document.querySelector("#authGate");
  setSafeHtml(gate, `<section class="public-welcome">
    <header><strong>Öğrenci İzleme Sistemi</strong><a class="ghost" href="?login=1">Okul girişi</a></header>
    <div class="public-welcome-content"><p class="eyebrow">Okul ve rehberlik takibi</p><h1>Öğrenci İzleme Sistemi</h1>
    <p>Öğrenci gelişimi, sınavlar, devamsızlık ve rehberlik kayıtları bir arada.</p>
    <div class="public-welcome-actions"><a class="primary" href="?demo=1">Demoyu dene</a><a class="ghost" href="?setup=1">Okul kurulumu</a></div></div>
    <footer>Demo size özel boş bir çalışma alanıdır. Okul hesapları kullanıcı girişiyle açılır.</footer>
  </section>`);
}

function renderSetupScreen() {
  document.body.classList.add("auth-locked");
  let gate = document.querySelector("#authGate");
  if (!gate) {
    gate = document.createElement("div");
    gate.id = "authGate";
    gate.className = "auth-gate";
    document.body.append(gate);
  }
  setSafeHtml(gate, `<section class="auth-panel" style="width:min(540px,94vw);padding:28px;background:white;border-radius:8px">
    <h1>Öğrenci İzleme Sistemi</h1><p>İlk kurulum</p>
    <form id="publicSetupForm" class="modern-form">
      <label class="field-wide">Supabase proje adresi<input name="url" type="url" placeholder="https://projeniz.supabase.co" required /></label>
      <label class="field-wide">Publishable / anon anahtarı<input name="key" type="password" autocomplete="off" required /></label>
      <button type="submit" class="primary field-wide">Bağlantıyı kaydet</button>
      <p id="setupNotice" role="status"></p>
    </form></section>`);
  gate.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const url = new URL(String(data.get("url")).trim());
      const key = String(data.get("key")).trim();
      if (url.protocol !== "https:" || url.username || url.password || !/^[a-z0-9-]+\.supabase\.co$/i.test(url.hostname)) throw new Error("Geçerli bir HTTPS Supabase proje adresi girin.");
      let isPublic = /^sb_publishable_[A-Za-z0-9_-]+$/.test(key);
      if (!isPublic && key.split(".").length === 3) {
        const payload = JSON.parse(atob(key.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
        isPublic = payload.role === "anon";
      }
      if (!isPublic) throw new Error("Yalnızca publishable veya anon anahtarı kullanın.");
      localStorage.setItem(cloudConfigStorageKey, JSON.stringify({ url: url.origin, anonKey: key, instanceId: "main", realtime: true }));
      location.assign(`${location.pathname}?login=1`);
    } catch (error) {
      document.querySelector("#setupNotice").textContent = error.message;
    }
  });
}

async function init() {
  try {
    const route = new URLSearchParams(location.search);
    if (isDemoMode) {
      currentAuthUser = null;
      currentSchool = null;
      currentMembership = null;
      currentSystemAdmin = null;
      document.body.classList.add("demo-mode");
      hideAuthGate();
      const notice = document.createElement("div");
      notice.className = "demo-notice";
      setSafeHtml(notice, `<strong>Demo</strong><span>Deneme kayıtları yalnızca bu sekmede tutulur.</span><button type="button" class="ghost" id="resetDemoBtn">Demoyu sıfırla</button><a class="ghost" href="?login=1">Okul girişi</a>`);
      document.querySelector(".main").prepend(notice);
      notice.querySelector("button").onclick = () => { sessionStorage.removeItem("ois-public-demo"); location.reload(); };
      document.querySelector("#logoutBtn").textContent = "Demodan çık";
      document.querySelector("#cloudStatusText")?.closest("article")?.setAttribute("hidden", "");
      bindSchoolSettings();
      bindAppSettings();
      renderSchoolBrand();
      applyAppSettings();
      renderStudentFormShell();
      fillClassSelect();
      renderAll();
      setView(normalizeViewName(loadAppearanceSettings().defaultView || "dashboard"));
      return;
    }
    if (route.has("setup")) { renderSetupScreen(); return; }
    if (!route.has("login") && !surveyCodeFromUrl()) { renderPublicHome(); return; }
    if (surveyCodeFromUrl()) {
      publicSurveyShell(`<section class="panel public-survey-card"><h1>Anket modülü kapalı</h1><p>Bu sürümde anket linkleri gösterilmez. Okul paneli için yetkili kullanıcı girişi gerekir.</p></section>`);
      return;
    }
    if (!hasCloudConfig()) {
      renderSetupScreen();
      return;
    }
    const authBlocked = await prepareCloudAuth();
    if (authBlocked) return;
    state = isSystemAdmin() && currentSchool?.id ? defaultState() : localStoredState();
    if (isSystemAdmin() && currentSchool?.id) applySchoolFromMembership();
    state.settings.defaultView = normalizeViewName(state.settings.defaultView);
    bindSchoolSettings();
    bindAppSettings();
    bindCloudSettings();
    renderSchoolBrand();
    applyAppSettings();
    renderStudentFormShell();
    setSafeHtml(gradeSelect, "");
    Object.keys(classes).forEach((grade) => {
      const option = document.createElement("option");
      option.value = grade;
      option.textContent = `${grade}. sınıf`;
      gradeSelect.append(option);
    });
    fillClassSelect();
    renderAll();
    const openingView = state.settings.defaultView || "dashboard";
    if (openingView !== "dashboard") setView(openingView);
    try {
      await loadRemoteState();
      state.settings.defaultView = normalizeViewName(state.settings.defaultView);
      renderSchoolBrand();
      applyAppSettings();
      fillClassSelect();
      renderAll();
    } catch (error) {
      console.error("remote init failed", error);
      updateCloudStatus(`Bulut okunamadı: ${escapeHtml(error.message)}`, "error");
    }
  } catch (error) {
    console.error("init failed", error);
    renderAuthGate("login", `Oturum kontrolü tamamlanamadı: ${escapeHtml(error.message || "Başlatma hatası")}`);
    const target = document.querySelector("#dashboardView");
    if (target) {
      setSafeHtml(target, `<div class="panel render-error"><h3>Panel yüklenemedi</h3><p>${escapeHtml(error.message || "Başlatma hatası")}</p><button class="ghost" ${uiAction("click", (event, element) => { location.reload(); })}>Yeniden dene</button></div>`);
    }
  }
}

function bindSchoolSettings() {
  const nameInput = document.querySelector("#settingsSchoolNameInput") || document.querySelector("#schoolNameInput");
  const subtitleInput = document.querySelector("#settingsSchoolSubtitleInput");
  const shortInput = document.querySelector("#settingsSchoolShortInput") || document.querySelector("#schoolShortInput");
  const logoInput = document.querySelector("#settingsSchoolLogoInput") || document.querySelector("#schoolLogoInput");
  const saveButton = document.querySelector("#settingsSaveSchoolBtn") || document.querySelector("#saveSchoolBtn");
  const removeLogoButton = document.querySelector("#settingsRemoveLogoBtn");
  const exportBackupButton = document.querySelector("#settingsExportBackupBtn") || document.querySelector("#exportBackupBtn");
  const importBackupInput = document.querySelector("#settingsImportBackupInput") || document.querySelector("#importBackupInput");
  if (!nameInput || !shortInput || !logoInput || !saveButton) return;
  nameInput.value = state.school.name || "";
  if (subtitleInput) subtitleInput.value = state.school.subtitle || "";
  shortInput.value = state.school.shortName || "";
  saveButton.addEventListener("click", () => {
    state.school = {
      ...(state.school || {}),
      name: nameInput.value.trim() || "\u00d6\u011frenci \u0130zleme Sistemi",
      subtitle: subtitleInput.value.trim() || "Rehberlik ve s\u0131n\u0131f takip paneli",
      shortName: shortInput.value.trim().slice(0, 10) || initialsFromSchoolName(nameInput.value),
    };
    saveState();
    renderSchoolBrand();
    toastSave();
  });
  logoInput.addEventListener("change", () => {
    const file = logoInput.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      state.school = { ...(state.school || {}), logo: reader.result };
      saveState();
      renderSchoolBrand();
    };
    reader.readAsDataURL(file);
  });
  removeLogoButton.addEventListener("click", () => {
    state.school = { ...(state.school || {}), logo: "" };
    logoInput.value = "";
    saveState();
    renderSchoolBrand();
    toastSave();
  });
  exportBackupButton.addEventListener("click", exportBackup);
  importBackupInput.addEventListener("change", importBackup);
}

function bindAppSettings() {
  const languageSelect = document.querySelector("#languageSelect");
  const themeSelect = document.querySelector("#themeSelect");
  const defaultViewSelect = document.querySelector("#defaultViewSelect");
  const compactTablesInput = document.querySelector("#compactTablesInput");
  const privacyModeInput = document.querySelector("#privacyModeInput");
  const saveAppearanceButton = document.querySelector("#saveAppearanceBtn");
  const clearButton = document.querySelector("#clearLocalDataBtn");
  if (!languageSelect || !themeSelect || !defaultViewSelect) return;
  const appearance = loadAppearanceSettings();
  languageSelect.value = appearance.language || state.settings.language || "tr";
  themeSelect.value = appearance.theme || state.settings.theme || "light";
  defaultViewSelect.value = appearance.defaultView || state.settings.defaultView || "dashboard";
  compactTablesInput.checked = appearance.compactTables ?? (state.settings.compactTables !== false);
  privacyModeInput.checked = appearance.privacyMode ?? Boolean(state.settings.privacyMode);

  const saveSettings = () => {
    const nextSettings = {
      ...(state.settings || {}),
      language: languageSelect.value,
      theme: themeSelect.value,
      defaultView: defaultViewSelect.value,
      compactTables: compactTablesInput.checked,
      privacyMode: privacyModeInput.checked,
    };
    state.settings = { ...(state.settings || {}), ...saveAppearanceSettings(nextSettings) };
    saveState();
    applyAppSettings();
    renderAll();
    toastSave();
  };

  saveAppearanceButton?.addEventListener("click", saveSettings);

  clearButton.addEventListener("click", () => {
    if (!confirm("T\u00fcm merkezi veriler ve bu taray\u0131c\u0131daki yerel yedek s\u0131f\u0131rlans\u0131n m\u0131")) return;
    if (isDemoMode) sessionStorage.removeItem("ois-public-demo");
    else localStorage.removeItem(stateStorageKey());
    state = defaultState();
    saveState();
    location.reload();
  });
}

function bindCloudSettings() {
  const urlInput = document.querySelector("#cloudSupabaseUrlInput");
  const keyInput = document.querySelector("#cloudSupabaseAnonKeyInput");
  const instanceInput = document.querySelector("#cloudInstanceIdInput");
  const realtimeInput = document.querySelector("#cloudRealtimeInput");
  const saveButton = document.querySelector("#cloudSaveBtn");
  const authPreviewButton = document.querySelector("#authPreviewBtn");
  const authPreviewCloseButton = document.querySelector("#authPreviewCloseBtn");
  const pushButton = document.querySelector("#cloudPushBtn");
  const pullButton = document.querySelector("#cloudPullBtn");
  if (!urlInput || !keyInput || !instanceInput || !saveButton) return;
  const config = cloudConfig();
  urlInput.value = config.url;
  keyInput.value = config.anonKey;
  instanceInput.value = config.instanceId;
  realtimeInput.checked = config.realtime !== false;
  updateCloudStatus(
    cloudDatabaseAvailable ?  "Bulut bağlantısı aktif." : "Bulut bilgileri girilirse okul dışından canlı kullanım açılır.",
    cloudDatabaseAvailable ? "success" : "info"
  );

  const readConfigFromForm = () => ({
    url: urlInput.value.trim(),
    anonKey: keyInput.value.trim(),
    instanceId: instanceInput.value.trim() || "main",
    realtime: realtimeInput.checked,
  });

  saveButton.addEventListener("click", async () => {
    const nextConfig = readConfigFromForm();
    state.settings = { ...(state.settings || {}), cloud: nextConfig };
    localStorage.setItem(cloudConfigStorageKey, JSON.stringify(nextConfig));
    persistCurrentState();
    cloudClient = null;
    cloudChannel = null;
    updateCloudStatus("Buluta bağlanılıyor...", "loading");
    const blocked = await prepareCloudAuth();
    if (!blocked) await completeAuthRefresh();
  });

  authPreviewButton?.addEventListener("click", () => {
    renderAuthGate("login", "Önizleme modu açık. Gerçek giriş için Supabase bilgileri bağlanacak.");
  });

  authPreviewCloseButton?.addEventListener("click", hideAuthGate);

  pushButton.addEventListener("click", async () => {
    const localCount = Array.isArray(state.students) ? state.students.length : 0;
    if (!(await appConfirm(`Bu cihazdaki ${localCount} öğrenci kaydı Supabase ana veritabanına gönderilsin mi?`, "Ana veriyi buluta gönder", "Buluta gönder"))) return;
    const nextConfig = readConfigFromForm();
    state.settings = { ...(state.settings || {}), cloud: nextConfig };
    localStorage.setItem(cloudConfigStorageKey, JSON.stringify(nextConfig));
    cloudClient = null;
    cloudChannel = null;
    updateCloudStatus("Bu cihazdaki veri buluta aktarılıyor...", "loading");
    const client = await ensureCloudClient(true);
    if (!client) return updateCloudStatus("Supabase URL ve anon key eksik.", "error");
    if (!activeMembership()) {
      const blocked = await prepareCloudAuth();
      if (blocked) return;
    }
    cloudDatabaseAvailable = true;
    const ok = await saveCloudStateNow();
    if (ok) subscribeCloudState();
  });

  pullButton.addEventListener("click", async () => {
    const nextConfig = readConfigFromForm();
    state.settings = { ...(state.settings || {}), cloud: nextConfig };
    localStorage.setItem(cloudConfigStorageKey, JSON.stringify(nextConfig));
    cloudClient = null;
    cloudChannel = null;
    updateCloudStatus("Buluttaki veri alınıyor...", "loading");
    if (!activeMembership()) {
      const blocked = await prepareCloudAuth();
      if (blocked) return;
    }
    const ok = await loadCloudState();
    if (ok) renderAll();
  });
}

function updateCloudStatus(message, tone = "info") {
  const text = document.querySelector("#cloudStatusText");
  const badge = document.querySelector("#cloudStatusBadge");
  if (text) {
    text.textContent = message;
    text.dataset.tone = tone;
  }
  if (badge) {
    badge.textContent = cloudDatabaseAvailable ?  "Bulut aktif" : "Yerel mod";
    badge.style.background = cloudDatabaseAvailable ?  "#e6f4ef" : "";
    badge.style.color = cloudDatabaseAvailable ?  "var(--green)" : "";
  }
}

function applyAppSettings() {
  const appearance = loadAppearanceSettings();
  const settings = { ...(state.settings || defaultState().settings) };
  if (appearance.language) settings.language = appearance.language;
  if (appearance.theme) settings.theme = appearance.theme;
  if (appearance.defaultView) settings.defaultView = appearance.defaultView;
  if (appearance.compactTables !== null) settings.compactTables = appearance.compactTables;
  if (appearance.privacyMode !== null) settings.privacyMode = appearance.privacyMode;
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const chosenTheme = settings.theme || "light";
  const theme = chosenTheme === "system" ? (prefersDark ? "dark" : "light") : chosenTheme;
  document.documentElement.lang = settings.language || "tr";
  document.documentElement.dataset.theme = theme;
  document.body.dataset.theme = theme;
  document.documentElement.classList.toggle("theme-dark", theme === "dark");
  document.body.classList.toggle("theme-dark", theme === "dark");
  document.documentElement.style.colorScheme = theme === "dark" ? "dark" : "light";
  document.body.dataset.density = settings.compactTables === false ? "comfortable" : "compact";
  document.body.dataset.privacy = settings.privacyMode ? "on" : "off";
  document.querySelector("#viewTitle").textContent = viewTitles[activeView] || "";
  document.querySelector(".topbar .eyebrow").textContent = "Rehberlik yönetim paneli";
  document.querySelector("#saveBtn").textContent = "Kaydet";
  document.querySelector("#addStudentBtn").textContent = "Yeni \u00f6\u011frenci";
  document.querySelectorAll(".nav-item").forEach((button) => {
    const label = viewTitles[button.dataset.view];
    if (label) setButtonTextNode(button, label);
  });
  normalizeNavigationChrome();
  if (settings.language !== "en") repairVisibleTurkishText();
  repairSettingsControls();
  repairClassPickerLabels();
  applyInterfaceLanguage();
}

function normalizeNavigationChrome() {
  const icons = {
    dashboard: "AP",
    dossier: "OD",
    risk: "RH",
    forms: "FA",
    exams: "SN",
    attendance: "DV",
    discipline: "DS",
    honor: "OY",
    alumni: "MZ",
    parentNetwork: "DA",
    planning: "PL",
    reports: "RP",
    settings: "AY",
  };
  document.querySelectorAll(".nav-item[data-view]").forEach((button) => {
    const view = button.dataset.view;
    const icon = button.querySelector(".nav-icon");
    if (icon) icon.textContent = icons[view] || "";
    const label = cleanDisplay(viewTitles[view] || button.textContent);
    setButtonTextNode(button, label);
  });
}

function setButtonTextNode(button, label) {
  const textNode = [...button.childNodes].reverse().find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) textNode.textContent = `\n            ${escapeHtml(label)}\n          `;
  else button.append(document.createTextNode(label));
}

function applyInterfaceLanguage(root = document.body) {
  if (!root) return;
  const english = state.settings.language === "en";
  if (!english) {
    restoreInterfaceLanguage(root);
    return;
  }
  translateTextNodes(root);
  translateElementAttributes(root);
}

function restoreInterfaceLanguage(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (uiOriginalTextNodes.has(node)) node.textContent = uiOriginalTextNodes.get(node);
  }
  root.querySelectorAll("*").forEach((element) => {
    const original = uiOriginalAttrs.get(element);
    if (!original) return;
    Object.entries(original).forEach(([attr, value]) => element.setAttribute(attr, value));
  });
}

function translateTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA", "OPTION", "SELECT"].includes(parent.tagName) || parent.closest(".settings-form")) return NodeFilter.FILTER_REJECT;
      return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!uiOriginalTextNodes.has(node)) uiOriginalTextNodes.set(node, node.textContent);
    const original = uiOriginalTextNodes.get(node);
    const translated = translateUiText(original);
    if (translated !== original) node.textContent = translated;
  }
}

function translateElementAttributes(root) {
  root.querySelectorAll("[placeholder], [aria-label], [title]").forEach((element) => {
    ["placeholder", "aria-label", "title"].forEach((attr) => {
      if (!element.hasAttribute(attr)) return;
      const attrMap = uiOriginalAttrs.get(element) || {};
      if (!(attr in attrMap)) attrMap[attr] = element.getAttribute(attr);
      uiOriginalAttrs.set(element, attrMap);
      const original = attrMap[attr] || "";
      element.setAttribute(attr, uiPlaceholderTranslationsEn[original] || translateUiText(original));
    });
  });
}

function translateUiText(value) {
  const raw = String(value ?? "");
  const leading = raw.match(/^\s*/)?.[0] || "";
  const trailing = raw.match(/\s*$/)?.[0] || "";
  const text = raw.trim().replace(/\s+/g, " ");
  if (!text) return value;
  if (uiTranslationsEn[text]) return `${leading}${escapeHtml(uiTranslationsEn[text])}${trailing}`;
  let translated = text
    .replace(/(\d+)\.\s*sınıf/gi, "Grade $1")
    .replace(/(\d+)\s*öğrenci listelendi\. Ada tıklayınca öğrenci dosyası açılır\./i, "$1 students listed. Click a name to open the student dossier.")
    .replace(/(\d+)\s*sınav kaydı bulundu\./i, "$1 exam records found.")
    .replace(/(\d+)\s*okul notu kaydı/i, "$1 school grade records")
    .replace(/(\d+)\s*öğrenci/gi, "$1 students")
    .replace(/(.+)\s+için hızlı tarama ve öneriler$/i, "$1 quick scan and suggestions")
    .replace(/(.+)\s+hızlı karar ekranı$/i, "$1 quick decision screen")
    .replace(/(.+)\s+akademik yönlendirme$/i, "$1 academic guidance")
    .replace(/(.+)\s+haftalık planı$/i, "$1 weekly plan")
    .replace(/(.+)\s+sınav listesi$/i, "$1 exam list")
    .replace(/(.+)\s+sınıf grafikleri$/i, "$1 class charts")
    .replace(/^Devamını gör\s*\((\d+)\)$/i, "Show more ($1)")
    .replace(/^No\s+(\d+)$/i, "No $1");
  return translated === text ? value : `${leading}${translated}${trailing}`;
}

function renderSchoolBrand() {
  const school = state.school || defaultState().school;
  const mark = document.querySelector("#brandMark");
  const title = document.querySelector("#brandTitle");
  const subtitle = document.querySelector("#brandSubtitle");
  if (!mark || !title || !subtitle) return;
  title.textContent = cleanDisplay(school.name || "\u00d6\u011frenci \u0130zleme Sistemi");
  subtitle.textContent = cleanDisplay(school.subtitle || "Rehberlik ve s\u0131n\u0131f takip paneli");
  setSafeHtml(mark, "");
  if (typeof school.logo === "string" && /^data:image\/(png|jpeg|jpg|webp|bmp);base64,/i.test(school.logo)) {
    const image = document.createElement("img");
    image.src = school.logo;
    image.alt = "";
    mark.append(image);
  } else {
    mark.textContent = cleanDisplay(school.shortName || initialsFromSchoolName(school.name));
  }
}

function initialsFromSchoolName(name) {
  const words = cleanDisplay(name || "\u00d6\u011frenci \u0130zleme Sistemi")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  return (words.map((word) => word[0]).join("") || "\u00d6\u0130").toLocaleUpperCase("tr-TR");
}

function exportBackup() {
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "ois-public-sistemi",
    version: 1,
    state,
  };
  downloadTextFile(`ois-public-yedek-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(payload, null, 2), "application/json");
}

async function importBackup(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    const imported = payload.state || payload;
    if (!Array.isArray(imported.students)) throw new Error("Yedek dosyas\u0131nda \u00f6\u011frenci listesi bulunamad\u0131.");
    if (!stateBelongsToCurrentSchool(imported)) throw new Error("Bu yedek başka bir okula ait görünüyor. Karışmayı önlemek için yüklenmedi.");
    state = mergeStateWithoutDataLoss(state, imported);
    saveState();
    renderSchoolBrand();
    applyAppSettings();
    fillClassSelect();
    renderAll();
    toastSave();
  } catch (error) {
    alert(`Yedek y\u00fcklenemedi: ${escapeHtml(error.message)}`);
  } finally {
    event.target.value = "";
  }
}

function downloadTextFile(fileName, text, type = "text/plain;charset=utf-8") {
  const blob = new Blob([text], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.style.display = "none";
  document.body.append(link);
  link.click();
  const url = link.href;
  setTimeout(() => {
    URL.revokeObjectURL(url);
    link.remove();
  }, 1500);
}

function renderStudentFormShell() {
  setSafeHtml(formSectionsRoot, studentSections
    .map((section) => `
      <section class="form-section">
        <h4>${escapeHtml(section.title)}</h4>
        <div class="form-grid">
          ${section.fields.map(renderField).join("")}
        </div>
      </section>
    `)
    .join(""));
}

function renderField(item) {
  const required = item.required ? "required" : "";
  if (item.type === "textarea") {
    return `<label class="field-wide">${escapeHtml(item.label)}<textarea name="${escapeHtml(item.name)}" rows="3" ${required}></textarea></label>`;
  }
  if (item.type === "select") {
    return `
      <label>${escapeHtml(item.label)}
        <select name="${escapeHtml(item.name)}" ${required}>
          ${item.options.map((option) => `<option>${option}</option>`).join("")}
        </select>
      </label>
    `;
  }
  return `<label>${escapeHtml(item.label)}<input name="${escapeHtml(item.name)}" type="${escapeHtml(item.type)}" ${required} /></label>`;
}

function fillClassSelect() {
  ensureAllowedClassSelection();
  setSafeHtml(branchSelect, "");
  setSafeHtml(gradeSelect, "");
  const visibleGrades = Object.keys(classes).filter((grade) => availableClassesForGrade(grade).length);
  if (!visibleGrades.length) {
    Object.keys(classes).forEach((grade) => {
      const option = document.createElement("option");
      option.value = grade;
      option.textContent = `${grade}. sınıf`;
      gradeSelect.append(option);
    });
    (classes[selectedGrade] || classes["9"] || []).forEach((className) => {
      const option = document.createElement("option");
      option.value = className;
      option.textContent = className;
      branchSelect.append(option);
    });
    gradeSelect.value = selectedGrade || "9";
    branchSelect.value = selectedClass || branchSelect.options[0]?.value || "";
    return;
  }
  if (!visibleGrades.includes(selectedGrade)) selectedGrade = visibleGrades[0] || "9";
  Object.keys(classes).forEach((grade) => {
    if (!availableClassesForGrade(grade).length) return;
    const option = document.createElement("option");
    option.value = grade;
    option.textContent = `${grade}. sınıf`;
    gradeSelect.append(option);
  });
  availableClassesForGrade(selectedGrade).forEach((className) => {
    const option = document.createElement("option");
    option.value = className;
    option.textContent = className;
    branchSelect.append(option);
  });
  gradeSelect.value = selectedGrade;
  branchSelect.value = selectedClass;
  if (!gradeSelect.value && gradeSelect.options.length) {
    selectedGrade = gradeSelect.options[0].value;
    gradeSelect.value = selectedGrade;
  }
  if (!branchSelect.value && branchSelect.options.length) {
    selectedClass = branchSelect.options[0].value;
    branchSelect.value = selectedClass;
  }
  repairClassPickerLabels();
}

function repairClassPickerLabels() {
  if (!gradeSelect || !branchSelect) return;
  if (!gradeSelect.options.length) {
    Object.keys(classes).forEach((grade) => {
      const option = new Option(`${grade}. sınıf`, grade);
      gradeSelect.add(option);
    });
  }
  if (!branchSelect.options.length) {
    (classes[selectedGrade] || classes["9"] || []).forEach((className) => {
      branchSelect.add(new Option(className, className));
    });
  }
  [...gradeSelect.options].forEach((option) => {
    option.textContent = option.textContent || `${escapeHtml(option.value)}. sınıf`;
  });
  [...branchSelect.options].forEach((option) => {
    option.textContent = option.textContent || option.value;
  });
  gradeSelect.value = selectedGrade || gradeSelect.options[0]?.value || "9";
  branchSelect.value = selectedClass || branchSelect.options[0]?.value || "9-A";
}

function setView(viewName) {
  viewName = normalizeViewName(viewName);
  if (viewName === "students") viewName = "dossier";
  activeView = viewName;
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === `${viewName}View`);
  });
  document.querySelector("#viewTitle").textContent = viewTitles[viewName] || "";
  renderAll();
}

function renderMemberManagement() {
  const panel = document.querySelector("#memberManagementPanel");
  if (!panel) return;
  if (isDemoMode) {
    setSafeHtml(panel, `<h3>Demo çalışma alanı</h3><p>Okul hesabınıza geçmek için okul girişini kullanın.</p><a class="ghost" href="?login=1">Okul girişi</a>`);
    return;
  }
  if (!hasCloudConfig()) {
    setSafeHtml(panel, `
      <div class="section-title">
        <div>
          <h3>Okul erişimi</h3>
          <p>Supabase bilgileri girilince müdür hesabı, okul kodu ve öğretmen onayı burada yönetilir.</p>
        </div>
      </div>
    `);
    return;
  }
  if (isSystemAdmin() && !activeMembership()) {
    const pending = memberManagementCache.filter((member) => member.status === "pending");
    const active = memberManagementCache.filter((member) => member.status === "active");
    const selectedAdminSchoolId = currentSchool?.id || "";
    setSafeHtml(panel, `
      <div class="section-title">
        <div>
          <h3>Sistem admini</h3>
          <p>Okul oluştur, başvuruları yönet ve seçtiğin okulun panelinde işlem yap.</p>
        </div>
        <button class="ghost" type="button" ${uiAction("click", (event, element) => { signOutUser(); })}>Çıkış yap</button>
      </div>
      ${currentSchool ? `
        <div class="school-code-card admin-active-school">
          <span>Aktif okul</span>
          <strong>${escapeHtml(currentSchool.name || "Okul")}</strong>
          <p>Şu anda bu okulun verilerini görüntülüyor ve düzenliyorsun.</p>
        </div>
      ` : `
        <div class="empty">Veri panelinde oynamak için aşağıdan bir okul aç.</div>
      `}
      <div class="member-admin-grid">
        <form class="school-code-card admin-school-form" ${uiAction("submit", (event, element) => { createSchoolAsSystemAdmin(event); })}>
          <span>Yeni okul</span>
          <label>Okul adı<input name="schoolName" required placeholder="Örn. Ornek Okul" /></label>
          <label>Kısa ad<input name="shortName" maxlength="16" placeholder="Örn. 15TEMMUZAL" /></label>
          <label>Zip kod<input name="joinCode" placeholder="Boş bırakırsan sistem üretir" /></label>
          <button class="primary" type="submit">Okulu oluştur</button>
        </form>
      </div>
      <div class="member-list">
        <h4>Oluşturulan okullar (${adminSchoolCache.length})</h4>
        ${adminSchoolCache.length ? adminSchoolCache.map((school) => `
          <div class="member-row slim">
            <div>
              <strong>${escapeHtml(school.name)}</strong>
              <span>${escapeHtml(school.short_name || "-")} · Zip kod: ${escapeHtml(school.join_code || "-")}</span>
            </div>
            <div class="row-actions">
              <button class="${escapeHtml(school.id === selectedAdminSchoolId ? "secondary" : "primary")}" type="button" ${uiAction("click", (event, element) => { selectAdminSchool((escapeAttr(school.id))); })}>${escapeHtml(school.id === selectedAdminSchoolId ? "Açık" : "Okulu aç")}</button>
              <button class="ghost" type="button" ${uiAction("click", (event, element) => { navigator.clipboard.writeText((escapeAttr(school.join_code || ""))); })}>Kodu kopyala</button>
              <button class="danger" type="button" ${uiAction("click", (event, element) => { deleteSchoolAsSystemAdmin((escapeAttr(school.id))); })}>Sil</button>
            </div>
          </div>
        `).join("") : empty("Henüz okul oluşturulmadı.")}
        <h4>Bekleyen başvurular (${pending.length})</h4>
        ${pending.length ? pending.map((member) => `
          <div class="member-row">
            <div>
              <strong>${escapeHtml(member.full_name || member.email)}</strong>
              <span>${escapeHtml(member.email || "")} · ${escapeHtml(member.schools?.name || "Okul")}</span>
            </div>
            <select id="memberRole_${escapeHtml(member.id)}">
              <option value="principal" ${escapeHtml(member.role === "principal" ? "selected" : "")}>Müdür</option>
              <option value="counselor" ${escapeHtml(member.role === "counselor" ? "selected" : "")}>Rehberlikçi</option>
              <option value="teacher" ${escapeHtml(member.role === "teacher" ? "selected" : "")}>Öğretmen</option>
              <option value="admin" ${escapeHtml(member.role === "admin" ? "selected" : "")}>İdareci</option>
            </select>
            <input id="memberClasses_${escapeHtml(member.id)}" placeholder="9-A, 10-B" value="${escapeAttr((member.allowed_classes || []).join(", "))}" />
            <button class="primary" type="button" ${uiAction("click", (event, element) => { approveMember((member.id), true); })}>Onayla</button>
            <button class="danger" type="button" ${uiAction("click", (event, element) => { approveMember((member.id), false); })}>Reddet</button>
          </div>
        `).join("") : empty("Bekleyen başvuru yok.")}
        <h4>Aktif kullanıcılar (${active.length})</h4>
        ${active.length ? active.map((member) => `
          <div class="member-row slim">
            <div><strong>${escapeHtml(member.full_name || member.email)}</strong><span>${escapeHtml(member.email || "")} · ${escapeHtml(member.schools?.name || "Okul")} · ${escapeHtml((member.allowed_classes || []).join(", ") || "Tüm sınıflar")}</span></div>
            <div class="row-actions">
              <span class="status">${escapeHtml(member.role || "teacher")}</span>
              <button class="danger" type="button" ${uiAction("click", (event, element) => { removeMember((escapeAttr(member.id))); })}>Sil</button>
            </div>
          </div>
        `).join("") : empty("Aktif okul kullanıcısı yok.")}
      </div>
    `);
    return;
  }
  if (!activeMembership()) {
    setSafeHtml(panel, `
      <div class="section-title">
        <div>
          <h3>Okul erişimi</h3>
          <p>Bulut bağlantısı için giriş yap veya okul koduyla başvuru gönder.</p>
        </div>
        <button class="primary" type="button" ${uiAction("click", (event, element) => { renderAuthGate('login'); })}>Giriş ekranını aç</button>
      </div>
    `);
    return;
  }
  const joinCode = currentSchool?.join_code || "";
  const pending = memberManagementCache.filter((member) => member.status === "pending");
  const active = memberManagementCache.filter((member) => member.status === "active");
  setSafeHtml(panel, `
    <div class="section-title">
      <div>
        <h3>Okul erişimi ve yetkiler</h3>
        <p>${escapeHtml(currentSchool?.name || state.school.name)} için kullanıcı onayları.</p>
      </div>
      <button class="ghost" type="button" ${uiAction("click", (event, element) => { signOutUser(); })}>Çıkış yap</button>
    </div>
    <div class="member-admin-grid">
      <div class="school-code-card">
        <span>Okul kayıt kodu</span>
        <strong>${escapeHtml(joinCode || "Kod yok")}</strong>
        <p>Öğretmenler bu kodla başvurur. Onay vermeden okul verisine erişemezler.</p>
      </div>
      <div class="school-code-card">
        <span>Hesap</span>
        <strong>${escapeHtml(currentMembership.full_name || currentAuthUser?.email || "")}</strong>
        <p>${escapeHtml(currentMembership.role === "principal" ? "Müdür / tam yetki" : "Onaylı kullanıcı")}</p>
      </div>
    </div>
    ${isPrincipal() ? `
      <div class="member-list">
        <h4>Bekleyen başvurular (${pending.length})</h4>
        ${pending.length ? pending.map((member) => `
          <div class="member-row">
            <div>
              <strong>${escapeHtml(member.full_name || member.email)}</strong>
              <span>${escapeHtml(member.email || "")}</span>
            </div>
            <select id="memberRole_${escapeHtml(member.id)}">
              <option value="teacher">Öğretmen</option>
              <option value="counselor">Rehberlikçi</option>
              <option value="admin">İdareci</option>
            </select>
            <input id="memberClasses_${escapeHtml(member.id)}" placeholder="9-A, 10-B" value="${escapeAttr((member.allowed_classes || []).join(", "))}" />
            <button class="primary" type="button" ${uiAction("click", (event, element) => { approveMember((member.id), true); })}>Onayla</button>
            <button class="danger" type="button" ${uiAction("click", (event, element) => { approveMember((member.id), false); })}>Reddet</button>
          </div>
        `).join("") : empty("Bekleyen öğretmen başvurusu yok.")}
        <h4>Aktif kullanıcılar (${active.length})</h4>
        ${active.map((member) => `
          <div class="member-row slim">
            <div><strong>${escapeHtml(member.full_name || member.email)}</strong><span>${escapeHtml(member.email || "")} · ${escapeHtml((member.allowed_classes || []).join(", ") || "Tüm sınıflar")}</span></div>
            <div class="row-actions">
              <span class="status">${escapeHtml(member.role || "teacher")}</span>
              <button class="danger" type="button" ${uiAction("click", (event, element) => { removeMember((escapeAttr(member.id))); })}>Sil</button>
            </div>
          </div>
        `).join("")}
      </div>
    ` : `
      <div class="empty">Bu okulda onaylı hesabın aktif. Kullanıcı onayları yalnızca müdür hesabında görünür.</div>
    `}
  `);
}

function renderAll() {
  activeClassBadge.textContent = selectedClass;
  safeRender("dashboard", renderDashboard);
  safeRender("students", renderStudents);
  safeRender("dossier", renderDossier);
  safeRender("risk", renderRisk);
  safeRender("forms", renderForms);
  safeRender("exams", renderExams);
  safeRender("attendance", renderAttendance);
  safeRender("discipline", renderDiscipline);
  safeRender("honor", renderHonor);
  safeRender("alumni", renderAlumni);
  safeRender("parentNetwork", renderParentNetwork);
  safeRender("planning", renderPlanning);
  safeRender("reports", renderReports);
  renderMemberManagement();
  renderSecuritySummary();
  normalizeNavigationChrome();
  if ((state.settings || {}).language !== "en") repairVisibleTurkishText();
  repairSettingsControls();
  repairClassPickerLabels();
  applyInterfaceLanguage();
}

function renderSecuritySummary() {
  const root = document.querySelector("#securitySummary");
  if (!root) return;
  if (isDemoMode) {
    setSafeHtml(root, `<div class="security-chip"><span>Demo</span><strong>Okul veritabanına bağlantı yok</strong></div>`);
    return;
  }
  const role = isSystemAdmin() ? "Sistem admini" : activeMembership()?.role === "principal" ? "Müdür" : activeMembership()?.role === "teacher" ? "Öğretmen" : activeMembership()?.role || "Oturum yok";
  const scope = isSystemAdmin()
    ? (currentSchool ? `Admin görünümü: ${escapeHtml(currentSchool.name)}` : "Admin okul seçimi bekleniyor")
    : isFullAccessUser()
      ? "Bu okulun tüm sınıfları"
      : (allowedClassesForUser().join(", ") || "Onaylı sınıf yok");
  const checks = [
    ["Oturum", currentAuthUser ? `${currentAuthUser.email || "Kullanıcı"} (${role})` : "Giriş gerekli"],
    ["Aktif okul", currentSchool?.name || "Okul seçilmedi"],
    ["Veri kapsamı", scope],
    ["Bulut eşitleme", cloudDatabaseAvailable ? "Açık ve okul kimliğiyle sınırlı" : "Kapalı veya bağlantı bekliyor"],
  ];
  setSafeHtml(root, checks.map(([label, value]) => `
    <div class="security-chip">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join(""));
}

function repairSettingsControls() {
  const languageSelect = document.querySelector("#languageSelect");
  const themeSelect = document.querySelector("#themeSelect");
  const defaultViewSelect = document.querySelector("#defaultViewSelect");
  const appearance = loadAppearanceSettings();
  const language = appearance.language || state.settings.language || "tr";
  const english = language === "en";
  if (languageSelect) {
    setSafeHtml(languageSelect, `<option value="tr">Türkçe</option><option value="en">English</option>`);
    languageSelect.value = language;
  }
  if (themeSelect) {
    setSafeHtml(themeSelect, english
      ? `<option value="light">Light</option><option value="dark">Dark</option><option value="system">System</option>`
      : `<option value="light">Açık</option><option value="dark">Koyu</option><option value="system">Sistemle aynı</option>`);
    themeSelect.value = appearance.theme || state.settings.theme || "light";
  }
  if (defaultViewSelect) {
    setSafeHtml(defaultViewSelect, english
      ? `<option value="dashboard">Dashboard</option><option value="dossier">Student Dossier</option><option value="forms">Form Import</option><option value="exams">Exams</option><option value="attendance">Attendance</option><option value="discipline">Discipline</option><option value="honor">Honor/Talent</option><option value="alumni">Graduate Outcomes</option><option value="parentNetwork">School Support Network</option><option value="planning">Planning</option><option value="reports">Reports</option>`
      : `<option value="dashboard">Ana Panel</option><option value="dossier">Öğrenci Dosyası</option><option value="forms">Form Aktarma</option><option value="exams">Sınavlar</option><option value="attendance">Devamsızlık</option><option value="discipline">Disiplin</option><option value="honor">Onur/Yetenek</option><option value="alumni">Mezun İzleri</option><option value="parentNetwork">Okul Destek Ağı</option><option value="planning">Planlama</option><option value="reports">Raporlar</option>`);
    defaultViewSelect.value = appearance.defaultView || state.settings.defaultView || "dashboard";
  }
}

function safeRender(viewName, renderer) {
  try {
    if (["dossier", "risk", "exams", "attendance", "discipline", "honor", "planning"].includes(viewName) && !selectedStudent()) {
      const target = document.querySelector(`#${viewName}View`);
      if (target) setSafeHtml(target, `<div class="panel"><h3>Henüz öğrenci yok</h3><p>Seçili sınıfa ilk öğrenciyi ekleyin.</p><button type="button" class="primary" ${uiAction("click", (event, element) => { openStudentDialog(); })}>Öğrenci ekle</button></div>`);
      return;
    }
    renderer();
  } catch (error) {
    console.error(`${viewName} render error`, error);
    const target = document.querySelector(`#${viewName}View`);
    if (target) {
      setSafeHtml(target, `
        <div class="panel render-error">
          <h3>Bu bölüm geçici olarak görüntülenemiyor</h3>
          <p>Kayıtlar korunuyor. Sayfayı yenileyerek veya farklı bir sınıf seçerek yeniden deneyebilirsiniz.</p>
          <button class="ghost" ${uiAction("click", (event, element) => { renderAll(); })}>Yeniden yükle</button>
        </div>
      `);
    }
  }
}

function currentStudents() {
  const allowed = new Set(allowedClassesForUser());
  return state.students.filter((student) => student.className === selectedClass && allowed.has(student.className));
}

function selectedStudent() {
  const allowed = new Set(allowedClassesForUser());
  const selected = state.students.find((student) => student.id === selectedStudentId && allowed.has(student.className));
  return selected || currentStudents()[0];
}

function cleanDisplay(value) {
  return repairTurkishText(String(value ?? "")
    .replace(/Ã‚·/g, "-")
    .replace(/\s*·\s*/g, " - ")
    .replace(/Ã‚/g, "")
    .replace(/Ö/g, "Ö")
    .replace(/Ç/g, "Ç")
    .replace(/Ü/g, "Ü")
    .replace(/İ/g, "İ")
    .replace(/ı/g, "ı")
    .replace(/ğ/g, "ğ")
    .replace(/ş/g, "ş")
    .replace(/ö/g, "ö")
    .replace(/ç/g, "ç")
    .replace(/ü/g, "ü")
    .replace(/Ş/g, "Ş")
    .replace(/Ğ/g, "Ğ")
    .replace(/\s+-\s+-\s+/g, " - ")
    .replace(/\s+/g, " ")
    .trim());
}

function repairTurkishText(value) {
  let text = String(value ?? "");
  text = decodeCommonMojibake(text);
  const replacements = [
    ["Öğ", "Öğ"], ["öğ", "öğ"], ["Sınıf", "Sınıf"], ["sınıf", "sınıf"],
    ["Sınav", "Sınav"], ["sınav", "sınav"], ["Devamsızlık", "Devamsızlık"],
    ["devamsızlık", "devamsızlık"], ["Giriş", "Giriş"], ["giriş", "giriş"],
    ["öğretmen", "öğretmen"], ["Öğretmen", "Öğretmen"], ["için", "için"],
    ["gör", "gör"], ["Gör", "Gör"], ["gün", "gün"], ["Gün", "Gün"],
    ["hızlı", "hızlı"], ["Hızlı", "Hızlı"], ["Yüksek", "Yüksek"],
    ["Düşük", "Düşük"], ["Aç", "Aç"], ["İş", "İş"], ["iş", "iş"],
    ["İ", "İ"], ["ı", "ı"], ["ğ", "ğ"], ["Ğ", "Ğ"],
    ["ş", "ş"], ["Ş", "Ş"], ["Ö", "Ö"], ["Ç", "Ç"], ["Ü", "Ü"],
    ["ö", "ö"], ["ç", "ç"], ["ü", "ü"],
    ["Ö", "Ö"], ["Ç", "Ç"], ["Ü", "Ü"], ["ö", "ö"], ["ç", "ç"], ["ü", "ü"],
    ["İ", "İ"], ["ı", "ı"], ["ğ", "ğ"], ["Ğ", "Ğ"], ["ş", "ş"], ["Ş", "Ş"],
    ["ş", "ş"], ["Ş", "Ş"], ["Ğ", "Ğ"],
    ["•", "•"], ["□", "□"], ["→", "→"], ["-", "-"], ["-", "-"],
    ["⌂", "⌂"], ["▤", "▤"], ["△", "△"], ["▣", "▣"], ["≡", "≡"], ["▷", "▷"], ["↗", "↗"], ["⚙", "⚙"],
    ["·", "·"], ["", ""],
  ];
  for (let pass = 0; pass < 3; pass += 1) {
    const before = text;
    replacements.forEach(([from, to]) => {
      text = text.split(from).join(to);
    });
    if (text === before) break;
  }
  return polishKnownTurkishText(text);
}

function decodeCommonMojibake(value) {
  let text = String(value ?? "");
  if (!/[\u00c2-\u00c5\u00e2]/.test(text)) return text;
  for (let pass = 0; pass < 2; pass += 1) {
    try {
      const bytes = [];
      let convertible = true;
      for (const char of text) {
        const code = char.charCodeAt(0);
        if (code > 255) {
          convertible = false;
          break;
        }
        bytes.push(code);
      }
      if (!convertible) break;
      const decoded = new TextDecoder("utf-8", { fatal: false }).decode(new Uint8Array(bytes));
      if (!decoded || decoded === text || /�/.test(decoded)) break;
      text = decoded;
    } catch {
      break;
    }
  }
  return text;
}

function polishKnownTurkishText(value) {
  return String(value ?? "")
    .replace(/\?\?renci/g, "Öğrenci")
    .replace(/\?renci/g, "Öğrenci")
    .replace(/\?\?retmen/g, "Öğretmen")
    .replace(/\?retmen/g, "Öğretmen")
    .replace(/\?zleme/g, "İzleme")
    .replace(/S\?n\?f/g, "Sınıf")
    .replace(/S\?n\?flar/g, "Sınıflar")
    .replace(/S\?nav/g, "Sınav")
    .replace(/Devams\?zl\?k/g, "Devamsızlık")
    .replace(/Devam\?n\?\s*g\?r/g, "Devamını gör")
    .replace(/Giri\?siz/g, "Girişsiz")
    .replace(/geli\?tirme/g, "geliştirme")
    .replace(/Girişsiz geliştirme modu/g, "Rehberlik yönetim paneli")
    .replace(/Girişsiz geliştirme modu/g, "Rehberlik yönetim paneli")
    .replace(/Girişsiz geliştirme/g, "Rehberlik yönetim")
    .replace(/D\?zenle/g, "Düzenle")
    .replace(/\?ehir/g, "Şehir")
    .replace(/Y\?l/g, "Yıl")
    .replace(/Kay\?t/g, "Kayıt")
    .replace(/A\?/g, "Aç")
    .replace(/g\?r/g, "gör")
    .replace(/ihtiyac\?/g, "ihtiyacı")
    .replace(/i\?areti/g, "işareti")
    .replace(/Toplam\s+.+renci/g, "Toplam öğrenci")
    .replace(/Aktif\s+.+renci/g, "Aktif öğrenci")
    .replace(/Takip\s+ihtiyac.+/g, "Takip ihtiyacı")
    .replace(/Devams.+zl.+k\s+i.+areti/g, "Devamsızlık işareti")
    .replace(/S.+n.+f\s+ilk\/son\s+10/g, "Sınıf ilk/son 10")
    .replace(/Bug.+nk.+\s+rehberlik\s+g.+r.+n.+m.+/g, "Bugünkü rehberlik görünümü")
    .replace(/Son\s+puanlara\s+g.+re\s+.+retmen\s+.+zeti/g, "Son puanlara göre öğretmen özeti")
    .replace(/S.+nav\s+d.+\S+\s+uyar.+lar.+/g, "Sınav düşüş uyarıları")
    .replace(/Devam.+n.+\s+g.+r/g, "Devamını gör")
    .replace(/^A\?$/g, "Aç")
    .replace(/Y.+ksek\s+takip/g, "Yüksek takip")
    .replace(/D.+\S+\s+takip/g, "Düşük takip")
    .replace(/Toplam\s+Ã.+renci/g, "Toplam öğrenci")
    .replace(/Aktif\s+Ã.+renci/g, "Aktif öğrenci")
    .replace(/Takip\s+ihtiyac.+/g, "Takip ihtiyacı")
    .replace(/Devams.+zl.+k\s+i.+areti/g, "Devamsızlık işareti")
    .replace(/SÃ.+nÃ.+f\s+ilk\/son\s+10/g, "Sınıf ilk/son 10")
    .replace(/BugÃ.+nkÃ.+\s+rehberlik\s+gÃ.+rÃ.+nÃ.+mÃ.+/g, "Bugünkü rehberlik görünümü")
    .replace(/Devam.{1,8}g.{1,4}r/g, "Devamını gör")
    .replace(/Y.{1,6}ksek takip/g, "Yüksek takip")
    .replace(/D.{1,8} takip/g, "Düşük takip")
    .replace(/Öğrenci/g, "Öğrenci")
    .replace(/Öğretmen/g, "Öğretmen")
    .replace(/Çalışma/g, "Çalışma")
    .replace(/Üniversite/g, "Üniversite")
    .replace(/Özel/g, "Özel")
    .replace(/İş/g, "İş");
}

function hasRepairableTurkishText(text) {
  return /[\u00c3\u00c4\u00c5\u00c2\u00e2]/.test(text)
    || /\?\?renci|\?renci|\?\?retmen|\?retmen|S\?n|S\?nav|Devam\?n\?|Devams\?zl\?k|Giri\?siz|D\?zenle|g\?r|ihtiyac\?|i\?areti|Kay\?t|Y\?l/.test(text);
}

function repairVisibleTurkishText(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return hasRepairableTurkishText(node.textContent) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    node.textContent = repairTurkishText(node.textContent);
  });
  root.querySelectorAll("[placeholder], [aria-label], [title], option").forEach((element) => {
    ["placeholder", "aria-label", "title"].forEach((attr) => {
      if (element.hasAttribute(attr)) element.setAttribute(attr, repairTurkishText(element.getAttribute(attr)));
    });
    if (element.tagName === "OPTION") element.textContent = repairTurkishText(element.textContent);
  });
}

function studentOptions(selectedId, list = state.students) {
  if (!list.length) return `<option value="" disabled selected>Bu s\u0131n\u0131fta \u00f6\u011frenci yok</option>`;
  return list
    .slice()
    .sort((a, b) => String(a.className).localeCompare(String(b.className), "tr") || String(a.fullName).localeCompare(String(b.fullName), "tr"))
    .map((student) => {
      const name = cleanDisplay(student.fullName || "İsimsiz öğrenci");
      const className = cleanDisplay(student.className || "-");
      const schoolNo = cleanDisplay(student.schoolNo || "-");
      const label = `${escapeHtml(name)} - ${className} - No ${schoolNo}`;
      return `<option value="${escapeHtml(student.id)}" ${escapeHtml(student.id === selectedId ? "selected" : "")}>${escapeHtml(label)}</option>`;
    })
    .join("");
}

function classOptions(selectedClassName = selectedClass) {
  const allowed = new Set(allowedClassesForUser());
  return Object.entries(classes)
    .filter(([, classList]) => classList.some((className) => allowed.has(className)))
    .map(([grade, classList]) => `
      <optgroup label="${grade}. s\u0131n\u0131f">
        ${classList.filter((className) => allowed.has(className)).map((className) => `<option value="${className}" ${className === selectedClassName ? "selected" : ""}>${cleanDisplay(className)}</option>`).join("")}
      </optgroup>
    `)
    .join("");
}

function studentFinderHtml(selectedId, viewName, className = "", classNameAttr = "studentClassFilter") {
  if (!state.students.length) {
    return `<div class="student-finder empty-finder">${empty("Henüz öğrenci yok.")}</div>`;
  }
  className = className || selectedStudent()?.className || selectedClass;
  const allowed = new Set(allowedClassesForUser());
  if (!allowed.has(className)) className = allowedClassesForUser()[0] || selectedClass;
  const list = state.students.filter((student) => student.className === className && allowed.has(student.className));
  const fallback = selectedId && !list.some((student) => student.id === selectedId)
    ? state.students.filter((student) => student.id === selectedId)
    : [];
  return `
    <div class="student-finder">
      <label>S\u0131n\u0131f / Alan
        <select id="${classNameAttr}" ${uiAction("change", (event, element) => { changeStudentFinderClass(element.value, (viewName)); })}>
          ${classOptions(className)}
        </select>
      </label>
      <label>\u00d6\u011frenci
        <select ${uiAction("change", (event, element) => { selectStudent(element.value, (viewName)); })}>
          ${studentOptions(selectedId, [...list, ...fallback])}
        </select>
      </label>
    </div>
  `;
}

function changeStudentFinderClass(className, viewName) {
  if (!allowedClassesForUser().includes(className)) return;
  selectedClass = className;
  selectedGrade = className.match(/^(9|10|11|12)/)?.[1] || selectedGrade;
  selectedStudentId = currentStudents()[0]?.id || null;
  fillClassSelect();
  if (viewName) setView(viewName);
  renderAll();
}

function riskCount(student) {
  return Object.values(student.risk || {}).filter(Boolean).length;
}

function riskLevel(student) {
  const count = riskCount(student);
  if (count >= 8) return ["Yüksek takip", "var(--red)", 92];
  if (count >= 4) return ["Orta takip", "var(--amber)", 62];
  if (count >= 1) return ["Düşük takip", "var(--green)", 30];
  return ["Rutin izleme", "var(--green)", 12];
}

function renderDashboard() {
  const all = state.students;
  const classStudents = currentStudents();
  const mediumHigh = all.filter((student) => riskCount(student) >= 4).length;
  const absentee = all.filter((student) => student.risk.absenteeism || attendanceStatus(student).level !== "normal").length;
  const examAlerts = academicDropAlerts(classStudents);
  const criticalAttendance = attendanceCriticalStudents(all);
  setSafeHtml(document.querySelector("#dashboardView"), `
    <div class="dashboard-grid">
      ${metric("Toplam öğrenci", all.length, "all")}
      ${metric("Aktif öğrenci", classStudents.length, "active_class")}
      ${metric("Takip ihtiyacı", mediumHigh, "follow_need")}
      ${metric("Devamsızlık işareti", absentee, "absenteeism")}
      <article class="panel span-7 hero-panel">
        <div>
          <p class="eyebrow">Akademik komuta</p>
          <h3>${selectedClass} hızlı karar ekranı</h3>
          <p>Sınıfın güncel risk, not, deneme ve plan sinyallerini tek yerden izle.</p>
        </div>
        <button class="primary" ${uiAction("click", (event, element) => { promoteStudentsNextYear(); })}>Yıl sonu bir üst sınıfa aktar</button>
      </article>
      <article class="panel span-5">
        <div class="section-title">
          <div>
            <h3>Sınıf ilk/son 10</h3>
            <p>Son puanlara göre öğretmen özeti</p>
          </div>
        </div>
        ${classTopBottomHtml(classStudents)}
      </article>
      <article class="panel span-7">
        <div class="section-title">
          <div>
            <h3>Bugünkü rehberlik görünümü</h3>
            <p>${selectedClass} için hızlı tarama ve öneriler</p>
          </div>
          <button class="ghost" ${uiAction("click", (event, element) => { setView('risk'); })}>Haritaya git</button>
        </div>
        ${dashboardStudentPreviewHtml(classStudents)}
        <details class="quiet-details atlas-import">
          <summary>Y\u00d6K Atlas veri havuzu</summary>
          <p class="muted">CSV ba\u015fl\u0131klar\u0131: puanTuru, universite, program, sehir, basariSirasi, tabanPuan, kontenjan, yil</p>
          <div class="exam-file-row">
            <input id="atlasFileInput" type="file" accept=".csv,.tsv,.txt" />
            <button class="ghost" ${uiAction("click", (event, element) => { importAtlasCsv(); })}>Atlas CSV y\u00fckle</button>
          </div>
          <div id="atlasImportStatus" class="exam-import-status">${atlasSourceSummary()}</div>
        </details>
      </article>
      <article class="panel span-5">
        <div class="section-title">
          <div>
            <h3>Sınav düşüş uyarıları</h3>
            <p>Son denemelerde belirgin gerileme gösteren öğrenciler</p>
          </div>
          <button class="ghost" ${uiAction("click", (event, element) => { setView('exams'); })}>Sınavlara git</button>
        </div>
        ${examAlertsHtml(examAlerts)}
      </article>
      <article class="panel span-5">
        <div class="section-title">
          <div>
            <h3>İş akışı</h3>
            <p>Elle giriş ve belge aktarımı aynı öğrenci kartını doldurur.</p>
          </div>
        </div>
        ${workflowTasksHtml()}
      </article>
      <article class="panel span-5">
        <div class="section-title">
          <div>
            <h3>Devamsızlık uyarıları</h3>
            <p>MEB eşiklerine yaklaşan öğrenciler</p>
          </div>
          <button class="ghost" ${uiAction("click", (event, element) => { setView('attendance'); })}>Devamsızlığa git</button>
        </div>
        ${attendanceCriticalHtml(criticalAttendance)}
      </article>
    </div>
  `);
}

function attendanceLimits(student) {
  const risk = student.risk || {};
  const extended60 = risk.chronic_illness || risk.special_education || risk.mental_health;
  const extended40 = risk.mother_deceased || risk.father_deceased || risk.both_deceased || risk.social_service;
  return {
    unexcused: 10,
    total: extended60 ? 60 : extended40 ? 40 : 30,
    label: extended60 ? "?zel durum toplam 60 g?n izlem" : extended40 ? "?zel durum toplam 40 g?n izlem" : "Standart toplam 30 g?n izlem",
  };
}

function attendanceStatus(student) {
  const attendance = student.attendance || {};
  const unexcused = Number(attendance.unexcused) || 0;
  const excused = Number(attendance.excused) || 0;
  const total = Number(attendance.total) || unexcused + excused;
  const limits = attendanceLimits(student);
  let level = "normal";
  let title = "Normal izlem";
  let action = "Aylık takip yeterli.";
  if (unexcused > limits.unexcused || total > limits.total) {
    level = "limit";
    title = "Sınır aşıldı";
    action = "Veliye yazılı bildirim, idare-rehberlik görüşmesi ve devamsızlık nedeni dosyası açılmalı.";
  } else if (unexcused >= 8 || total >= limits.total - 5) {
    level = "critical";
    title = "Kritik eşik";
    action = "Aynı hafta veli görüşmesi ve sınıf rehber öğretmeni izlem notu açılmalı.";
  } else if (unexcused >= 5 || total >= 15) {
    level = "watch";
    title = "Uyarı eşiği";
    action = "Veli bilgilendirme, neden analizi ve haftalık devam kontrolü önerilir.";
  }
  return { level, title, action, unexcused, excused, total, limits };
}

function attendanceCriticalStudents(students) {
  return students
    .map((student) => ({ student, status: attendanceStatus(student) }))
    .filter((item) => item.status.level !== "normal")
    .sort((a, b) => b.status.total - a.status.total || b.status.unexcused - a.status.unexcused);
}

function attendanceCriticalHtml(items) {
  if (!items.length) return empty("Kritik devamsızlık kaydı yok.");
  return `
    <div class="attendance-critical-list">
      ${items.slice(0, 8).map(({ student, status }) => `
        <button class="attendance-critical-card ${status.level}" ${uiAction("click", (event, element) => { selectStudent((student.id), 'dossier'); })}>
          <div>
            <strong>${escapeHtml(student.fullName || "Öğrenci")}</strong>
            <span>${escapeHtml(student.className || "-")} · No ${escapeHtml(student.schoolNo || "-")}</span>
          </div>
          <b>${status.unexcused}/${status.total}</b>
          <small>${escapeHtml(status.title)}</small>
        </button>
      `).join("")}
    </div>
  `;
}

function renderAttendance() {
  const classStudents = currentStudents();
  const critical = attendanceCriticalStudents(classStudents);
  const allCritical = attendanceCriticalStudents(state.students);
  setSafeHtml(document.querySelector("#attendanceView"), `
    <div class="content-grid">
      <article class="panel span-5 attendance-entry-panel">
        <div class="section-title">
          <div>
            <h3>Aylık MEB devamsızlık girişi</h3>
            <p>MEB devamsızlık çıktısını içe aktarın; kayıtlar okul numarasıyla eşleştirilir.</p>
          </div>
        </div>
        <div class="attendance-rule-box">
          <strong>MEB ortaöğretim devamsızlık mantığı</strong>
          <span>Özürsüz 10 günü veya toplam 30 günü aşan öğrenci başarısızlık riskiyle izlenir. Özel durumlarda toplam sınır 40/60 gün olarak takip edilir.</span>
        </div>
        <div class="exam-file-row attendance-file-row">
          <div class="exam-upload-copy">
            <strong>Devamsızlık dosyası</strong>
            <span>PDF, Word, Excel, görsel veya metin</span>
          </div>
          <input id="attendanceFileInput" type="file" accept=".xlsx,.xls,.csv,.tsv,.txt,.pdf,.png,.jpg,.jpeg,.webp,.bmp,.doc,.docx,image/*" />
          <label class="camera-upload primary-camera">Fotoğraf çek / yükle<input id="attendanceCameraInput" type="file" accept="image/*" capture="environment" ${uiAction("change", (event, element) => { syncCameraInputToFileInput('attendanceCameraInput', 'attendanceFileInput', 'attendanceImportStatus'); })} /></label>
          <button class="ghost" type="button" ${uiAction("click", (event, element) => { readAttendanceFile(); })}>Dosyayı önizle</button>
          <button class="primary" type="button" ${uiAction("click", (event, element) => { readAttendanceFile(true); })}>İçe aktar ve işle</button>
        </div>
        <textarea id="attendanceBulkInput" class="bulk-input attendance-bulk" rows="11" placeholder="Okul No, Ad Soyad, Özürsüz, Özürlü, Toplam&#10;102, Ogrenci A, 4, 2, 6&#10;734, Ogrenci D, 9, 8, 17"></textarea>
        <div class="draft-actions">
          <button class="primary" ${uiAction("click", (event, element) => { importAttendanceBulk(); })}>Devamsızlığı işle</button>
          <button class="ghost" ${uiAction("click", (event, element) => { fillAttendanceExample(); })}>Şablon ekle</button>
        </div>
        <div id="attendanceImportStatus" class="exam-import-status">Henüz devamsızlık listesi işlenmedi.</div>
      </article>
      <article class="panel span-7">
        <div class="section-title">
          <div>
            <h3>${selectedClass} devamsızlık uyarıları</h3>
            <p>Kritik eşik, uyarı ve sınır aşımı öğrencileri</p>
          </div>
          <button class="ghost" ${uiAction("click", (event, element) => { openMetricReport('attendance_critical'); })}>Rapor listesi</button>
        </div>
        ${attendanceCriticalHtml(critical)}
      </article>
      <article class="panel span-12">
        <div class="section-title">
          <div>
            <h3>Tüm okul devamsızlık tablosu</h3>
            <p>${allCritical.length} öğrenci uyarı/kritik listesinde</p>
          </div>
        </div>
        <div class="table-scroll">
          <table class="table compact data-table">
            <thead><tr><th>Öğrenci</th><th>Sınıf</th><th>No</th><th>Özürsüz</th><th>Özürlü</th><th>Toplam</th><th>Durum</th><th>Öneri</th></tr></thead>
            <tbody>
              ${allCritical.length ? allCritical.map(({ student, status }) => `
                <tr>
                  <td><button class="link-button" ${uiAction("click", (event, element) => { selectStudent((student.id), 'dossier'); })}>${escapeHtml(student.fullName || "-")}</button></td>
                  <td>${escapeHtml(student.className || "-")}</td>
                  <td>${escapeHtml(student.schoolNo || "-")}</td>
                  <td>${status.unexcused}</td>
                  <td>${status.excused}</td>
                  <td>${status.total}</td>
                  <td>${escapeHtml(status.title)}</td>
                  <td>${status.action}</td>
                </tr>
              `).join("") : `<tr><td colspan="8">Kritik devamsızlık kaydı yok.</td></tr>`}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  `);
}

function fillAttendanceExample() {
  const input = document.querySelector("#attendanceBulkInput");
  if (!input) return;
  input.value = currentStudents().slice(0, 5).map((student, index) => {
    const unexcused = index === 0 ? 9 : 4 + index;
    const excused = index * 2;
    return `${escapeHtml(student.schoolNo || "")}, ${escapeHtml(student.fullName || "")}, ${unexcused}, ${excused}, ${unexcused + excused}`;
  }).join("\n");
}

async function readAttendanceFile(autoImport = false) {
  const input = document.querySelector("#attendanceFileInput");
  const target = document.querySelector("#attendanceBulkInput");
  const file = input.files?.[0];
  if (!file) {
    setAttendanceImportStatus("Önce PDF, Word, Excel veya görsel dosyası seç.", "warning");
    return;
  }
  try {
    setAttendanceImportStatus(`${escapeHtml(file.name)} okunuyor...`, "loading");
    const text = await extractTextFromFile(file);
    target.value = normalizeAttendanceImportText(text);
    setAttendanceImportStatus(`${escapeHtml(file.name)} alana aktarıldı. Kontrol edip işleyebilirsin.`, "success");
    if (autoImport) importAttendanceBulk();
  } catch (error) {
    setAttendanceImportStatus(`Dosya okunamadı: ${escapeHtml(error.message)}`, "error");
  }
}

function normalizeAttendanceImportText(text) {
  return cleanImportedText(text)
    .split(/\n+/)
    .map((line) => cleanDisplay(line))
    .filter(Boolean)
    .join("\n");
}

function importAttendanceBulk() {
  const text = document.querySelector("#attendanceBulkInput").value.trim() || "";
  if (!text) {
    setAttendanceImportStatus("Önce MEB devamsızlık listesini yapıştır.", "warning");
    return;
  }
  const rows = parseAttendanceRows(text);
  let matched = 0;
  let flagged = 0;
  rows.forEach((row) => {
    const student = matchStudentByIdentity({ schoolNo: row.schoolNo, fullName: row.fullName }, { strictNumber: Boolean(row.schoolNo) });
    if (!student) return;
    const total = row.total  ((row.unexcused || 0) + (row.excused || 0));
    student.attendance = {
      month: row.month || currentMonthKey(),
      unexcused: row.unexcused || 0,
      excused: row.excused || Math.max(0, total - (row.unexcused || 0)),
      total,
      source: "MEB aylık liste",
      updatedAt: new Date().toISOString(),
    };
    const status = attendanceStatus(student);
    student.risk = { ...(student.risk || {}) };
    if (status.level !== "normal") {
      student.risk.absenteeism = true;
      flagged += 1;
    }
    state.attendanceRecords = state.attendanceRecords || [];
    state.attendanceRecords.push({
      id: crypto.randomUUID(),
      studentId: student.id,
      month: student.attendance.month,
      unexcused: student.attendance.unexcused,
      excused: student.attendance.excused,
      total: student.attendance.total,
      status: status.title,
      createdAt: new Date().toISOString(),
    });
    matched += 1;
  });
  saveState();
  renderAll();
  setAttendanceImportStatus(`${matched} öğrenci devamsızlığı işlendi. ${flagged} öğrenci kritik/uyarı listesine alındı.`, matched ? "success" : "warning");
}

function parseAttendanceRows(text) {
  return String(text || "").split(/\n+/).map((line) => cleanDisplay(line)).filter((line) => line && !/okul.*no|özürsüz|ozursuz|toplam/i.test(line)).map((line) => {
    const cells = splitSmartCells(line);
    const joined = cells.join(" ");
    const schoolNo = (cells.find((cell) => /^\d{1,6}$/.test(cleanDisplay(cell))) || joined.match(/\b\d{1,6}\b/)?.[0] || "").trim();
    const numbers = cells.map(parseScore).filter((value) => value !== null);
    const tailNumbers = numbers.slice(-3);
    const unexcused = tailNumbers.length >= 3 ? tailNumbers[0] : (tailNumbers[0] ?? 0);
    const excused = tailNumbers.length >= 3 ? tailNumbers[1] : (tailNumbers[1] ?? 0);
    const total = tailNumbers.length >= 3 ? tailNumbers[2] : tailNumbers.length === 2 ? tailNumbers[0] + tailNumbers[1] : (tailNumbers[0] ?? 0);
    const fullName = cleanDisplay(cells.filter((cell) => !/^\d+(:[,.]\d+)$/.test(cleanDisplay(cell)) && !/ozurlu|özürlü|ozursuz|özürsüz|toplam|devams/i.test(cell)).join(" "));
    return { schoolNo, fullName, unexcused, excused, total, month: currentMonthKey() };
  }).filter((row) => row.schoolNo || row.fullName);
}

function splitSmartCells(line) {
  return String(line || "").split(/\t|;|,|\s{2,}/).map((cell) => cleanDisplay(cell)).filter(Boolean);
}

function setAttendanceImportStatus(message, tone = "info") {
  const status = document.querySelector("#attendanceImportStatus");
  if (!status) return;
  status.textContent = message;
  status.dataset.tone = tone;
}

function workflowTasksHtml() {
  if (!Array.isArray(state.workflowTasks) || !state.workflowTasks.length) {
    state.workflowTasks = defaultWorkflowTasks();
  }
  state.workflowTasks = normalizeWorkflowTasks(state.workflowTasks);
  const date = selectedWorkflowDate || currentDateKey();
  const dayTasks = state.workflowTasks.filter((task) => task.date === date);
  const doneCount = dayTasks.filter((task) => task.done).length;
  const pendingCount = dayTasks.length - doneCount;
  const rows = dayTasks.map((task) => `
    <label class="workflow-task ${escapeHtml(task.done ? "done" : "")}">
      <input type="checkbox" ${escapeHtml(task.done ? "checked" : "")} ${uiAction("change", (event, element) => { toggleWorkflowTask((task.id), element.checked); })} />
      <span><b>${escapeHtml(cleanDisplay(task.category || "Genel"))}</b>${escapeHtml(cleanDisplay(task.text))}${task.note ? `<small>${escapeHtml(cleanDisplay(task.note))}</small>` : ""}</span>
      <button class="icon-mini" type="button" ${uiAction("click", (event, element) => { removeWorkflowTask((task.id)); })} aria-label="Sil">×</button>
    </label>
  `).join("");
  return `
    <div class="workflow-date-head">
      <label>Gün seç<input type="date" value="${date}" ${uiAction("change", (event, element) => { setWorkflowDate(element.value); })} /></label>
      <div><strong>${doneCount}/${dayTasks.length || 0}</strong><span>Tamamlandı</span></div>
      <div><strong>${pendingCount}</strong><span>Kalan</span></div>
    </div>
    <div class="workflow-list">${rows || empty("Bu gün için yapılacak kaydı yok.")}</div>
    <form class="workflow-add" ${uiAction("submit", (event, element) => { addWorkflowTask(event); })}>
      <select name="category">
        <option>Genel</option>
        <option>Öğrenci dosyası</option>
        <option>Görüşme</option>
        <option>Risk</option>
        <option>Veli</option>
        <option>Sınav</option>
        <option>Planlama</option>
        <option>Rapor</option>
      </select>
      <input name="task" placeholder="Yeni yapılacak ekle" />
      <input name="note" placeholder="Kısa not / hedef" />
      <button class="ghost" type="submit">Ekle</button>
    </form>
  `;
}

function setWorkflowDate(date) {
  selectedWorkflowDate = date || currentDateKey();
  renderDashboard();
}

function toggleWorkflowTask(id, done) {
  const task = (state.workflowTasks || []).find((item) => item.id === id);
  if (!task) return;
  task.done = done;
  task.completedAt = done ? new Date().toISOString() : "";
  saveState();
  renderDashboard();
}

function addWorkflowTask(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const text = String(form.get("task") || "").trim();
  if (!text) return;
  state.workflowTasks = Array.isArray(state.workflowTasks) ? normalizeWorkflowTasks(state.workflowTasks) : defaultWorkflowTasks();
  state.workflowTasks.push({
    id: crypto.randomUUID(),
    date: selectedWorkflowDate || currentDateKey(),
    category: String(form.get("category") || "Genel"),
    text,
    note: String(form.get("note") || "").trim(),
    done: false,
    createdAt: new Date().toISOString(),
    completedAt: "",
  });
  saveState();
  renderDashboard();
}

function removeWorkflowTask(id) {
  state.workflowTasks = (state.workflowTasks || []).filter((task) => task.id !== id);
  saveState();
  renderDashboard();
}

function dashboardStudentPreviewHtml(students) {
  if (!students.length) return `<div class="student-list">${empty("Bu sınıfta öğrenci yok.")}</div>`;
  const visible = dashboardGuidanceExpanded ? students : students.slice(0, 4);
  const hiddenCount = Math.max(0, students.length - visible.length);
  return `
    <div class="student-list compact-student-list">
      ${visible.map(studentSummary).join("")}
    </div>
    ${students.length > 4 ? `<button class="show-more-btn" type="button" ${uiAction("click", (event, element) => { toggleDashboardGuidance(); })}>${dashboardGuidanceExpanded ? "Daha az göster" : `Devamını gör (${hiddenCount})`}</button>` : ""}
  `;
}

function toggleDashboardGuidance() {
  dashboardGuidanceExpanded = !dashboardGuidanceExpanded;
  renderDashboard();
}

function metric(label, value, reportId = "") {
  const action = reportId ? `${uiAction("click", (event, element) => { openMetricReport((reportId)); })}` : "";
  return `<button class="metric span-3 ${reportId ? "metric-clickable" : ""}" type="button" ${action} aria-label="${escapeHtml(label)} listesini aç"><p>${escapeHtml(label)}</p><strong>${escapeHtml(value)}</strong></button>`;
}

function openMetricReport(reportId) {
  selectedReportId = reportId;
  setView("reports");
}

function latestStudentScore(student) {
  const record = examRecordsForStudent(student.id).find((item) => Number(item.totalScore));
  return record ? Number(record.totalScore) : null;
}

function classTopBottomHtml(students) {
  const scored = students
    .map((student) => ({ student, score: latestStudentScore(student) }))
    .filter((item) => item.score != null)
    .sort((a, b) => b.score - a.score);
  if (!scored.length) return `<div class="empty">İlk/son 10 için önce sınav puanı girilmeli.</div>`;
  const top = scored.slice(0, 10);
  const support = scored.slice(-10).reverse();
  const list = (items, title) => `
    <div class="rank-mini-list">
      <strong>${escapeHtml(title)}</strong>
      ${items.map((item, index) => `<button ${uiAction("click", (event, element) => { selectStudent((item.student.id), 'exams'); })}><span>${index + 1}</span>${escapeHtml(item.student.fullName || "Öğrenci")}<b>${escapeHtml(item.score)}</b></button>`).join("")}
    </div>
  `;
  return `<div class="rank-split">${list(top, "En iyi 10")}${list(support, "Destek öncelikli 10")}</div>`;
}

function promoteStudentsNextYear() {
  if (!confirm("Seçili sınıftaki öğrenciler bir üst sınıfa aktarılsın mı Eski sınıf bilgisi gelişim geçmişinde saklanacak.")) return;
  const students = currentStudents();
  if (!students.length) {
    alert("Bu sınıfta aktarılacak öğrenci yok.");
    return;
  }
  const date = new Date().toISOString();
  students.forEach((student) => {
    const fromClass = student.className;
    const toClass = nextClassName(fromClass);
    student.classHistory = Array.isArray(student.classHistory) ? student.classHistory : [];
    student.classHistory.push({ fromClass, toClass, date, note: "Yıl sonu aktarımı" });
    student.className = toClass;
  });
  state.yearTransfers.push({ id: crypto.randomUUID(), date, fromClass: selectedClass, count: students.length });
  selectedClass = nextClassName(selectedClass);
  selectedGrade = selectedClass.match(/^(9|10|11|12)/)?.[1] || selectedGrade;
  selectedStudentId = currentStudents()[0]?.id || null;
  fillClassSelect();
  saveState();
  renderAll();
  toastSave();
}

function nextClassName(className) {
  const text = cleanDisplay(className || "");
  const letter = text.match(/-([A-D])$/)?.[1] || "A";
  if (text.startsWith("9")) return `10-${letter}`;
  if (text.startsWith("10")) return `11 Sayısal-${letter}`;
  if (text.startsWith("11")) return text.replace(/^11/, "12");
  if (text.startsWith("12")) return `Mezun-${letter}`;
  return text;
}

function academicDropAlerts(students) {
  return students
    .map((student) => {
      const records = examRecordsForStudent(student.id).filter((record) => Number(record.totalScore) || Number(record.ranking));
      if (records.length < 2) return null;
      const latest = records[0];
      const previous = records[1];
      const scoreDelta = (Number(latest.totalScore) || 0) - (Number(previous.totalScore) || 0);
      const rankDelta = (Number(latest.ranking) || 0) - (Number(previous.ranking) || 0);
      const latestDetails = orderedExamDetails(latest).filter((detail) => typeof detail.net === "number");
      const previousDetails = orderedExamDetails(previous).filter((detail) => typeof detail.net === "number");
      const subjectDrops = latestDetails
        .map((detail) => {
          const detailKey = normalizeSubjectKey(detail.label) || subjectKeyFromLabel(detail.label);
          const before = previousDetails.find((item) => (normalizeSubjectKey(item.label) || subjectKeyFromLabel(item.label)) === detailKey || item.label === detail.label);
          return before ? { label: detail.label, delta: Number((detail.net - before.net).toFixed(1)) } : null;
        })
        .filter(Boolean)
        .filter((item) => item.delta <= -2)
        .sort((a, b) => a.delta - b.delta);
      const shouldAlert = scoreDelta <= -15 || rankDelta >= 15000 || subjectDrops.length >= 2;
      if (!shouldAlert) return null;
      const mainDrop = subjectDrops[0] ? `${escapeHtml(subjectDrops[0].label)} öncelikli görüşülsün.` : "Kısa neden görüşmesi planlansın.";
      return {
        student,
        latest,
        scoreDelta,
        rankDelta,
        subjectDrops,
        message: `${escapeHtml(student.fullName || "Öğrenci")} için son sınavda ${scoreDelta <= -15 ? `${Math.abs(scoreDelta).toFixed(1)} puan düşüş` : "ders bazlı düşüş"} görünüyor. ${mainDrop}`,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.scoreDelta - b.scoreDelta)
    .slice(0, 5);
}

function examAlertsHtml(alerts) {
  if (!alerts.length) return `<div class="empty">Bu sınıfta belirgin sınav düşüş uyarısı yok.</div>`;
  return `
    <div class="exam-alert-list">
      ${alerts.map((alert) => `
        <button class="exam-alert-card" ${uiAction("click", (event, element) => { selectStudent((alert.student.id), 'exams'); })}>
          <strong>${escapeHtml(alert.student.fullName || "Öğrenci")}</strong>
          <span>${escapeHtml(alert.student.className)} - ${shortExamLabel(alert.latest)}</span>
          <p>${escapeHtml(alert.message)}</p>
        </button>
      `).join("")}
    </div>
  `;
}

function studentSummary(student) {
  const [level, color] = riskLevel(student);
  const searchText = normalizeKey([student.fullName, student.schoolNo, student.className, student.guardianName, student.academicStatus].filter(Boolean).join(" "));
  return `
    <div class="student-card" data-student-card data-search="${escapeHtml(searchText)}">
      <button class="student-name-button" ${uiAction("click", (event, element) => { selectStudent((student.id), 'dossier'); })}>
        <h4>${escapeHtml(student.fullName || "İsimsiz öğrenci")}</h4>
        <p>${escapeHtml(student.className)} · No ${escapeHtml(student.schoolNo || "-")} · ${escapeHtml(student.academicStatus || "Durum yok")}</p>
      </button>
      <div class="card-actions">
        <span class="status" style="background:${softColor(color)};color:${color}">${level}</span>
        <button class="ghost" ${uiAction("click", (event, element) => { selectStudent((student.id), 'dossier'); })}>Aç</button>
      </div>
    </div>
  `;
}

function renderStudents() {
  const classList = currentStudents();
  const list = classList.filter((student) => studentMatchesSearch(student, studentSearchQuery));
  const selected = list.find((student) => student.id === selectedStudentId) || list[0] || selectedStudent();
  setSafeHtml(document.querySelector("#studentsView"), `
    <div class="content-grid">
      <article class="panel span-4">
        <div class="section-title">
          <div>
            <h3>${selectedClass} öğrenci listesi</h3>
            <p>${list.length} / ${classList.length} öğrenci gösteriliyor.</p>
          </div>
        </div>
        <div class="student-list-tools">
          <label>Sınıf / Alan
            <select ${uiAction("change", (event, element) => { changeStudentListClass(element.value); })}>
              ${classOptions(selectedClass)}
            </select>
          </label>
          <label>Ad veya okul no ara
            <input type="search" value="${escapeHtml(studentSearchQuery)}" placeholder="Örn. Ogrenci adi veya numarasi" ${uiAction("input", (event, element) => { setStudentSearch(element.value); })} />
          </label>
        </div>
        <div class="student-list">
          ${list.length ? list.map(studentSummary).join("") : empty("Bu sınıfa ilk öğrenciyi ekleyebilirsin.")}
        </div>
      </article>
      <article class="panel span-8">
        ${selected ? studentProfile(selected) : empty("Öğrenci seçilmedi.")}
      </article>
    </div>
  `);
}

function studentMatchesSearch(student, query) {
  const key = normalizeKey(query);
  if (!key) return true;
  return normalizeKey([
    student.fullName,
    student.schoolNo,
    student.className,
    student.guardianName,
    student.academicStatus,
  ].filter(Boolean).join(" ")).includes(key);
}

function setStudentSearch(value) {
  studentSearchQuery = value;
  if (activeView === "dossier") {
    renderDossier();
    return;
  }
  const key = normalizeKey(studentSearchQuery);
  const cards = [...document.querySelectorAll("#studentsView [data-student-card]")];
  let visibleCount = 0;
  cards.forEach((card) => {
    const visible = !key || card.dataset.search.includes(key);
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  const count = document.querySelector("#studentListCount");
  if (count) count.textContent = String(visibleCount);
  const list = document.querySelector("#studentsView .student-list");
  let emptyState = document.querySelector("#studentSearchEmpty");
  if (list && !emptyState) {
    emptyState = document.createElement("div");
    emptyState.id = "studentSearchEmpty";
    emptyState.className = "empty";
    emptyState.textContent = "Bu aramayla eşleşen öğrenci yok.";
    list.after(emptyState);
  }
  if (emptyState) emptyState.hidden = visibleCount > 0 || !key;
}

function changeStudentListClass(className) {
  selectedClass = className;
  selectedGrade = className.match(/^(9|10|11|12)/)?.[1] || selectedGrade;
  const list = currentStudents();
  selectedStudentId = list.find((student) => studentMatchesSearch(student, studentSearchQuery))?.id || list[0]?.id || null;
  fillClassSelect();
  renderAll();
}

function studentProfile(student) {
  return `
    <div class="section-title">
      <div>
        <h3>${escapeHtml(student.fullName || "İsimsiz öğrenci")}</h3>
        <p>${escapeHtml(student.className)} · Okul no ${escapeHtml(student.schoolNo || "-")}</p>
      </div>
      <div class="card-actions">
        <button class="ghost" ${uiAction("click", (event, element) => { openStudentDialog((student.id)); })}>Düzenle</button>
        <button class="danger" ${uiAction("click", (event, element) => { deleteStudent((student.id)); })}>Sil</button>
      </div>
    </div>
    ${studentProfileDetails(student)}
  `;
}

function studentProfileDetails(student) {
  return `
    <div class="profile-sections">
      ${profileSection("Öğrenci", [
        ["T.C.", student.nationalId],
        ["Doğum", joinParts([student.birthPlace, student.birthDate])],
        ["Adres", student.address],
        ["Kan grubu / din", joinParts([student.bloodType, student.religion])],
      ])}
      ${profileSection("Ev ve Genel", [
        ["Kiminle oturuyor", student.livingWith],
        ["Ev", `Kira: ${escapeHtml(student.rentStatus || "-")} · Oda: ${escapeHtml(student.ownRoom || "-")}`],
        ["İmkanlar", `Bilgisayar: ${escapeHtml(student.computerAtHome || "-")} · İnternet: ${escapeHtml(student.internet || "-")} · Kitaplık: ${escapeHtml(student.libraryAtHome || "-")}`],
        ["Ulaşım / çalışma", `${escapeHtml(student.transport || "-")} · Çalışıyor: ${escapeHtml(student.working || "-")}`],
        ["Gelir / hane", joinParts([student.householdIncome, student.householdSize])],
      ])}
      ${profileSection("Aile", [
        ["Veli", joinParts([student.guardianRelation, student.guardianName, student.guardianPhone])],
        ["Anne", joinParts([student.motherName, student.motherEducation, student.motherJob, student.motherAlive])],
        ["Baba", joinParts([student.fatherName, student.fatherEducation, student.fatherJob, student.fatherAlive])],
        ["Kardeş", joinParts([student.siblingsCount, student.siblingsNote])],
      ])}
      ${profileSection("Sağlık ve Rehberlik", [
        ["Sürekli hastalık", student.chronicIllness],
        ["İlaç / alerji", joinParts([student.medication, student.allergy])],
        ["Kaza / ameliyat", joinParts([student.accidentHistory, student.surgeryHistory])],
        ["Liseye giriş", joinParts([student.lgsScore && `LGS ${escapeHtml(student.lgsScore)}`, student.lgsPercentile && `% ${escapeHtml(student.lgsPercentile)}`, student.middleSchoolAverage && `OBP ${escapeHtml(student.middleSchoolAverage)}`])],
        ["Yerleştiği okul", student.placementSchool],
        ["Akademik durum", student.academicStatus],
        ["Rehberlik notu", student.guidanceNote],
        ["Kaynak notu", student.sourceNotes],
      ])}
    </div>
  `;
}

function profileSection(title, rows) {
  return `
    <section class="profile-section">
      <h4>${escapeHtml(title)}</h4>
      <table class="table compact">
        ${rows.map(([label, value]) => `<tr><td>${escapeHtml(label)}</td><td>${escapeHtml(value || "-")}</td></tr>`).join("")}
      </table>
    </section>
  `;
}

function renderDossier() {
  const classList = currentStudents();
  const filteredList = classList.filter((item) => studentMatchesSearch(item, studentSearchQuery));
  const student = filteredList.find((item) => item.id === selectedStudentId) || selectedStudent() || filteredList[0] || classList[0];
  if (!student) {
    setSafeHtml(document.querySelector("#dossierView"), empty("Öğrenci dosyası için önce öğrenci ekle."));
    return;
  }
  selectedStudentId = student.id;
  const [level, color] = riskLevel(student);
  const records = state.formRecords.filter((record) => record.studentId === student.id);
  const exams = examRecordsForStudent(student.id);
  const attendance = attendanceStatus(student);
  const counseling = records.filter((record) => ["counseling_referral", "violence_climate", "other_notes"].includes(record.formId));
  const academic = records.filter((record) => ["academic_tracking", "exam_growth", "career_self"].includes(record.formId));
  const health = records.filter((record) => ["snellen", "special_education"].includes(record.formId));
  setSafeHtml(document.querySelector("#dossierView"), `
    <div class="dossier-head dossier-hero">
      <div>
        <p class="eyebrow">Öğrenci adına bağlı bütün kayıtlar</p>
        <h3>${escapeHtml(student.fullName || "İsimsiz öğrenci")}</h3>
        <p>${escapeHtml(student.className)} · Okul no ${escapeHtml(student.schoolNo || "-")} · ${escapeHtml(student.guardianName || "Veli bilgisi yok")}</p>
      </div>
      <div class="card-actions">
        ${studentFinderHtml(student.id, "dossier", student.className, "dossierClassFilter")}
        <span class="status" style="background:${softColor(color)};color:${color}">${level}</span>
        <button class="ghost" ${uiAction("click", (event, element) => { openStudentDialog((student.id)); })}>Tanıma formunu düzenle</button>
        <button class="primary" ${uiAction("click", (event, element) => { setView('forms'); })}>Form ekle</button>
      </div>
    </div>
    <div class="insight-strip dossier-insights">
      <button type="button" ${uiAction("click", (event, element) => { setView('risk'); })}><span>Takip</span><strong style="color:${color}">${level}</strong></button>
      <button type="button" ${uiAction("click", (event, element) => { setView('risk'); })}><span>Risk</span><strong>${riskCount(student)}</strong></button>
      <button type="button" ${uiAction("click", (event, element) => { setView('attendance'); })}><span>Devamsızlık</span><strong>${attendance.unexcused}/${attendance.total}</strong></button>
    </div>
    <div class="content-grid">
      <article class="panel span-8 dossier-profile-main">
        <div class="section-title">
          <div><h3>Tanıma ve kimlik dosyası</h3><p>Öğrencinin temel bilgileri tek kartta</p></div>
          <button class="ghost" ${uiAction("click", (event, element) => { openStudentDialog((student.id)); })}>Düzenle</button>
        </div>
        ${studentProfileDetails(student)}
      </article>
      <article class="panel span-4">
        <div class="section-title">
          <div><h3>Hızlı durum</h3><p>Risk, devamsızlık ve akademik sinyal</p></div>
        </div>
        ${dossierStatusPanel(student, attendance, exams)}
      </article>
      <article class="panel span-4">
        <div class="section-title">
          <div><h3>Risk Haritası</h3><p>İşaretli göstergeler</p></div>
          <button class="ghost" ${uiAction("click", (event, element) => { setView('risk'); })}>Aç</button>
        </div>
        ${riskChips(student)}
      </article>
      <article class="panel span-4">
        <div class="section-title">
          <div><h3>Akademik özet</h3><p>Sınav, LGS ve alan eğilimi</p></div>
          <button class="ghost" ${uiAction("click", (event, element) => { setView('exams'); })}>Sınavlara git</button>
        </div>
        ${dossierExamSummary(student, exams)}
      </article>
      <article class="panel span-4">
        <div class="section-title">
          <div><h3>Kayıt Özeti</h3><p>Öğrenciye bağlı form sayıları</p></div>
        </div>
        <div class="record-stats">
          ${recordStat("Tüm kayıt", records.length)}
          ${recordStat("Görüşme/not", counseling.length)}
          ${recordStat("Akademik", academic.length)}
          ${recordStat("Sağlık/özel eğitim", health.length)}
        </div>
      </article>
      <article class="panel span-6">
        <div class="section-title">
          <div><h3>Görüşmeler ve Yönlendirmeler</h3><p>MEBBİS kayıt durumu dahil</p></div>
        </div>
        ${recordList(counseling)}
      </article>
      <article class="panel span-6">
        <div class="section-title">
          <div><h3>Testler, Sınavlar ve Diğer Formlar</h3><p>Mesleki eğilim, Snellen, Yaşam Pencerem, deneme sınavı</p></div>
        </div>
        ${recordList(records.filter((record) => !counseling.includes(record)))}
      </article>
    </div>
  `);
}

function dossierStatusPanel(student, attendance, exams) {
  const latestExam = exams[0];
  const analysis = academicAnalysis(student);
  return `
    <div class="dossier-status-grid">
      <div>
        <span>Devamsızlık</span>
        <strong>${escapeHtml(attendance.title)}</strong>
        <p>Özürsüz ${attendance.unexcused}, toplam ${attendance.total}. ${attendance.action}</p>
      </div>
      <div>
        <span>Alan sinyali</span>
        <strong>${analysis.area}</strong>
        <p>${escapeHtml(analysis.trend.label)}</p>
      </div>
      <div>
        <span>Son sınav</span>
        <strong>${latestExam ? latestExam.totalScore || latestExam.examName : "Yok"}</strong>
        <p>${latestExam ? `${latestExam.source} · ${latestExam.date}` : "Henüz sınav kaydı girilmedi."}</p>
      </div>
    </div>
  `;
}

function dossierExamSummary(student, exams) {
  const baseline = academicBaseline(student);
  const latest = exams[0];
  return `
    <div class="mini-summary-list">
      <div><b>Liseye giriş</b><span>${escapeHtml(baseline.summary)}</span></div>
      <div><b>Son sınav</b><span>${latest ? `${latest.examName} · ${latest.totalScore || "-"} puan · ${latest.ranking || "-"} sıra` : "Kayıt yok"}</span></div>
      <div><b>Öneri</b><span>${academicAnalysis(student).teacherAdvice}</span></div>
    </div>
  `;
}

function riskChips(student) {
  const active = riskFactors.filter(([key]) => student.risk?.[key]);
  if (!active.length) return empty("İşaretli risk göstergesi yok.");
  return `<div class="chip-list">${active.map(([, label]) => `<span>${escapeHtml(label)}</span>`).join("")}</div>`;
}

function miniFacts(student) {
  const facts = [
    ["Aile", joinParts([student.parentsTogether, student.livingWith])],
    ["Maddi/ev", joinParts([student.householdIncome, `İnternet: ${escapeHtml(student.internet || "-")}`, `Oda: ${escapeHtml(student.ownRoom || "-")}`])],
    ["Sağlık", joinParts([student.chronicIllness, student.healthNote])],
    ["Akademik", student.academicStatus],
    ["Rehberlik", student.guidanceNote],
  ];
  return `<table class="table compact">${facts.map(([k, v]) => `<tr><td>${k}</td><td>${v || "-"}</td></tr>`).join("")}</table>`;
}

function recordStat(label, value) {
  return `<div><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`;
}

function recordList(records) {
  if (!records.length) return empty("Bu başlıkta kayıt yok.");
  return `
    <div class="timeline-list">
      ${records.map((record) => {
        const form = formCatalog.find((item) => item.id === record.formId);
        const values = Object.entries(record?.values || {}).filter(([, value]) => value).slice(0, 3);
        const dateValue = record?.updatedAt || record?.createdAt || new Date().toISOString();
        return `
          <div class="timeline-item">
            <strong>${escapeHtml(form?.title || "Form kaydı")}</strong>
            <span>${new Date(dateValue).toLocaleDateString("tr-TR")}</span>
            <p>${values.map(([key, value]) => `${fieldLabel(key)}: ${String(value).slice(0, 120)}`).join(" · ") || "Kısa bilgi yok"}</p>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderRisk() {
  const student = selectedStudent();
  if (!student) {
    setSafeHtml(document.querySelector("#riskView"), empty("Risk haritası için önce öğrenci ekle."));
    return;
  }
  const [level, color, width] = riskLevel(student);
  const recommendations = buildRecommendations(student);
  setSafeHtml(document.querySelector("#riskView"), `
    <div class="content-grid">
      <article class="panel span-7">
        <div class="section-title">
          <div>
            <h3>Risk göstergeleri</h3>
            <p>${escapeHtml(student.fullName || "Seçili öğrenci")} için sınıf risk haritası maddeleri</p>
          </div>
          <select ${uiAction("change", (event, element) => { selectStudent(element.value, 'risk'); })}>
            ${currentStudents().map((item) => `<option value="${escapeHtml(item.id)}" ${escapeHtml(item.id === student.id ? "selected" : "")}>${escapeHtml(item.fullName || "İsimsiz öğrenci")}</option>`).join("")}
          </select>
        </div>
        <div class="risk-list">
          ${riskFactors.map(([key, label, source]) => riskItem(student, key, label, source)).join("")}
        </div>
      </article>
      <article class="panel span-5">
        <div class="section-title">
          <div>
            <h3>Analiz sonucu</h3>
            <p>Tanı değil; MEB PDR yaklaşımına uygun takip önceliği ve izlem planı üretir.</p>
          </div>
        </div>
        <div class="analysis">
          <div class="score-box">
            Risk işareti: ${riskCount(student)}
            <strong style="color:${color}">${level}</strong>
            <div class="bar"><span style="width:${width}%;background:${color}"></span></div>
          </div>
          <ul class="recommendations">
            ${recommendations.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      </article>
    </div>
  `);
}

function riskItem(student, key, label, source) {
  const checked = student.risk?.[key] ? "checked" : "";
  return `
    <label class="risk-item">
      <input type="checkbox" ${checked} ${uiAction("change", (event, element) => { toggleRisk((student.id), (key), element.checked); })} />
      <strong>${escapeHtml(label)}</strong>
      <span>${source}</span>
    </label>
  `;
}

function renderForms() {
  const selectedForm = formCatalog.find((form) => form.id === selectedFormId) || formCatalog[0];
  const categories = ["Tümü", ...new Set(formCatalog.map((form) => form.category))];
  const filteredForms = selectedFormCategory === "Tümü"
    ? formCatalog
    : formCatalog.filter((form) => form.category === selectedFormCategory);
  const student = selectedStudent();
  if (!student) {
    setSafeHtml(document.querySelector("#formsView"), empty("Form aktarma için önce öğrenci ekle."));
    return;
  }
  const record = getFormRecord(student.id, selectedForm.id);
  const studentOptions = state.students
    .map((student) => `<option value="${escapeHtml(student.id)}" ${escapeHtml(student.id === selectedStudentId ? "selected" : "")}>${escapeHtml(student.fullName || "İsimsiz öğrenci")} · ${escapeHtml(student.className)}</option>`)
    .join("");
  setSafeHtml(document.querySelector("#formsView"), `
    <div class="content-grid">
      <article class="form-panel form-library-panel span-3">
        <div class="section-title">
          <div>
            <h3>Formlar</h3>
            <p>Önce form türünü seç.</p>
          </div>
        </div>
        <div class="category-tabs">
          ${categories.map((category) => `<button class="${category === selectedFormCategory ? "active" : ""}" ${uiAction("click", (event, element) => { selectFormCategory((category)); })}>${category}</button>`).join("")}
        </div>
        <div class="form-catalog-list">
          ${filteredForms.map((form) => formCard(form)).join("")}
        </div>
      </article>

      <article class="form-panel form-editor-panel span-6">
        <div class="section-title">
          <div>
            <h3>${escapeHtml(selectedForm.title)}</h3>
            <p>${selectedForm.purpose}</p>
          </div>
        </div>
        <details class="quiet-details">
          <summary>Bu başlığa giren belgeler</summary>
          <div class="source-chips">
            ${selectedForm.sources.map((source) => `<span>${source}</span>`).join("")}
          </div>
        </details>
        <div class="form-focus-strip">
          <span>${selectedForm.category}</span>
          <strong>${escapeHtml(record ? "Kayıt var" : "Yeni kayıt")}</strong>
          <em>${selectedForm.fields.length} alan</em>
        </div>
        <div class="student-target">${studentFinderHtml(student.id, "forms", student.className || selectedClass, "formsClassFilter")}</div>
        <form id="dynamicForm" class="dynamic-form" ${uiAction("submit", (event, element) => { saveDynamicForm(event); })}>
          ${selectedForm.fields.map((item) => renderDynamicField(item, record?.values || {})).join("")}
          <button class="primary wide" type="submit">Bu formu kaydet</button>
        </form>
      </article>

      <article class="form-panel form-import-panel span-3">
        <div class="section-title">
          <div>
            <h3>Belgeden aktar</h3>
            <p>Önce analiz et, sonra uygula.</p>
          </div>
        </div>
        <div class="drop-zone compact-zone">
          <div class="upload-hero">
            <strong>Belgeyi sürükle / seç</strong>
            <span>PDF, Word, Excel, görsel veya metin</span>
          </div>
          <input id="fileInput" type="file" accept=".pdf,.png,.jpg,.jpeg,.webp,.bmp,.xlsx,.xls,.doc,.docx,.txt,.csv,image/*" />
          <label class="camera-upload primary-camera">
            Fotoğraf çek / yükle
            <input id="formCameraInput" type="file" accept="image/*" capture="environment" ${uiAction("change", (event, element) => { syncCameraInputToFileInput('formCameraInput', 'fileInput', 'extractPreview'); })} />
          </label>
          <textarea id="ocrText" rows="5" placeholder="Belge metni manuel olarak da girilebilir."></textarea>
          <button class="primary" ${uiAction("click", (event, element) => { mockExtract(event); })}>Belgeyi analiz et</button>
        </div>
        <p class="upload-note">Eski Word .doc dosyalarında güvenli okuma uygulanır. En sağlıklı aktarım için belgenin .docx biçiminde yüklenmesi önerilir.</p>
        <div id="extractPreview" class="preview-box small-preview">Henüz belge okunmadı.</div>
        <div class="draft-actions vertical">
          <button class="ghost" ${uiAction("click", (event, element) => { applyDraftToCurrentForm(); })}>Taslağı bu forma uygula</button>
          <button class="ghost" ${uiAction("click", (event, element) => { openDraftAsStudent(); })}>Öğrenci kartına aç</button>
        </div>
        <details class="recommendation-box">
          <summary>Öneri mantığı</summary>
          <ul>
            ${selectedForm.recommendations.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </details>
      </article>
    </div>
  `);
}

function formCard(form) {
  const count = state.formRecords.filter((record) => record.formId === form.id).length;
  return `
    <button class="form-card ${form.id === selectedFormId ? "active" : ""}" ${uiAction("click", (event, element) => { selectCatalogForm((form.id)); })}>
      <strong>${escapeHtml(cleanDisplay(form.title))}</strong>
      <span>${cleanDisplay(form.category)}</span>
      ${count ? `<small>${count} kayıt</small>` : ""}
    </button>
  `;
}

function renderDynamicField(item, values) {
  const value = values[item.name] || "";
  if (item.type === "textarea") {
    return `<label>${escapeHtml(item.label)}<textarea name="${escapeHtml(item.name)}" rows="3">${escapeHtml(value)}</textarea></label>`;
  }
  if (item.type === "select") {
    return `
      <label>${escapeHtml(item.label)}
        <select name="${escapeHtml(item.name)}">
          ${item.options.map((option) => `<option ${escapeHtml(option === value ? "selected" : "")}>${option}</option>`).join("")}
        </select>
      </label>
    `;
  }
  return `<label>${escapeHtml(item.label)}<input name="${escapeHtml(item.name)}" type="${escapeHtml(item.type)}" value="${escapeHtml(value)}" /></label>`;
}

function selectFormCategory(category) {
  selectedFormCategory = category;
  renderForms();
}

function selectCatalogForm(formId) {
  selectedFormId = formId;
  renderForms();
}

function getFormRecord(studentId, formId) {
  if (!studentId) return null;
  return state.formRecords.find((record) => record.studentId === studentId && record.formId === formId) || null;
}

function saveDynamicForm(event) {
  event.preventDefault();
  const student = selectedStudent();
  if (!student) {
    alert("Önce öğrenci seç.");
    return;
  }
  const values = Object.fromEntries(new FormData(event.target).entries());
  upsertFormRecord(student.id, selectedFormId, values);
  applyFormRisks(student, selectedFormId, values);
  saveState();
  renderAll();
  setView("forms");
}

function upsertFormRecord(studentId, formId, values) {
  const existing = getFormRecord(studentId, formId);
  if (existing) {
    existing.values = values;
    existing.updatedAt = new Date().toISOString();
  } else {
    state.formRecords.push({
      id: crypto.randomUUID(),
      studentId,
      formId,
      values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }
}

function applyFormRisks(student, formId, values) {
  const form = formCatalog.find((item) => item.id === formId);
  student.risk = student.risk || {};
  (form.riskHints || []).forEach((hint) => {
    student.risk[hint] = true;
  });
  const text = normalizeKey(Object.values(values).join(" "));
  if (text.includes("devamsiz")) student.risk.absenteeism = true;
  if (text.includes("siddet") || text.includes("zorbalik")) student.risk.risky_peers = true;
  if (text.includes("dikkat") || text.includes("ogrenme guclugu")) student.risk.special_education = true;
  if (text.includes("yonlendirme") || text.includes("psikolojik destek")) student.risk.mental_health = true;
  if (formId === "snellen" && text.includes("yonlendirme")) student.risk.chronic_illness = true;
}

function renderExams() {
  const classStudents = currentStudents();
  const selected = selectedStudent();
  if (!selected) {
    setSafeHtml(document.querySelector("#examsView"), empty("Sınav işlemleri için önce öğrenci ekle veya sınıf seç."));
    return;
  }
  const classExamRecords = state.examRecords.filter((record) => classStudents.some((student) => student.id === record.studentId));
  const selectedAnalysis = selected ? academicAnalysis(selected) : null;
  setSafeHtml(document.querySelector("#examsView"), `
    <div class="content-grid">
      <article class="panel exam-import-panel span-5">
        <div class="section-title">
          <div>
            <h3>Sınav sonucu toplu giriş</h3>
            <p>Okul yazılısı, performans, proje ve deneme sonuçlarını sınıf listesiyle içeri al.</p>
          </div>
        </div>
        <div class="exam-command-strip">
          <span>Aktif tür</span>
          <strong>${selectedExamSource}</strong>
          <em>${currentStudents().length} öğrenci</em>
        </div>
        <div class="source-chips">
          ${["Okul Yazılısı 1", "Okul Yazılısı 2", "Performans 1", "Performans 2", "Proje", "Deneme"].map((source) => `<button class="${selectedExamSource === source ? "active" : ""}" ${uiAction("click", (event, element) => { setExamSource((source)); })}>${source}</button>`).join("")}
        </div>
        <div class="exam-input-grid">
          <label>Sınav adı<input id="examNameInput" placeholder="Örn. Matematik 1. yazılı / TYT deneme" /></label>
          <label>Tarih<input id="examDateInput" type="date" value="${new Date().toISOString().slice(0, 10)}" /></label>
        </div>
        <div class="exam-file-row">
          <div class="exam-upload-copy">
            <strong>Toplu sonuç dosyası</strong>
            <span>Excel, PDF, görsel ya da tablo metni</span>
          </div>
          <input id="examFileInput" type="file" accept=".xlsx,.xls,.csv,.tsv,.txt,.pdf,.png,.jpg,.jpeg,.webp,.bmp,.doc,.docx,image/*" />
          <label class="camera-upload primary-camera">Fotoğraf çek / yükle<input id="examCameraInput" type="file" accept="image/*" capture="environment" ${uiAction("change", (event, element) => { syncCameraInputToFileInput('examCameraInput', 'examFileInput', 'examImportStatus'); })} /></label>
          <button class="ghost" ${uiAction("click", (event, element) => { readExamFile(); })}>Dosyayı alana aktar</button>
          <button class="primary" ${uiAction("click", (event, element) => { readExamFile(true); })}>Dosyayı oku ve işle</button>
        </div>
        <div id="examImportStatus" class="exam-import-status">Henüz sınav dosyası okunmadı.</div>
        <textarea id="examBulkInput" class="bulk-input" rows="10" placeholder="Dosya seçip oku veya tabloyu yapıştır.&#10;Okul No, Ad Soyad, Türkçe, Matematik, Fen, Sosyal, İngilizce, TYT, AYT, Puan, Sıralama&#10;318, Ogrenci B, 24, 31, 18, 16, 8, 285, 310, 378, 95000"></textarea>
        <details class="quiet-details compact-details">
          <summary>Deneme konu dağılımı ekle</summary>
          <p class="muted">Marka konu dağılım dosyasını yükle veya yapıştır. Öğrenci adı/no varsa konu eksikleri öğrenciye özel işlenir.</p>
          <div class="exam-file-row topic-file-row">
            <div class="exam-upload-copy">
              <strong>Konu dağılımı</strong>
              <span>Yanlış/net kırılımını öğrenciye bağla</span>
            </div>
            <input id="examTopicFileInput" type="file" accept=".xlsx,.xls,.csv,.tsv,.txt,.pdf,.png,.jpg,.jpeg,.webp,.bmp,.doc,.docx,image/*" />
            <label class="camera-upload primary-camera">Fotoğraf çek / yükle<input id="examTopicCameraInput" type="file" accept="image/*" capture="environment" ${uiAction("change", (event, element) => { syncCameraInputToFileInput('examTopicCameraInput', 'examTopicFileInput', 'examTopicStatus'); })} /></label>
            <button class="ghost" type="button" ${uiAction("click", (event, element) => { readExamTopicFile(); })}>Konu dosyasını al</button>
            <button class="primary" type="button" ${uiAction("click", (event, element) => { readExamTopicFile(true); })}>Konu dosyasını işle</button>
          </div>
          <div id="examTopicStatus" class="exam-import-status">Henüz konu dağılım dosyası okunmadı.</div>
          <p class="muted">Satır formatı: Okul No, Ad Soyad, Ders, Konu, Doğru, Yanlış, Net veya Ders, Konu, Doğru, Yanlış, Net.</p>
          <textarea id="examTopicInput" class="bulk-input" rows="5" placeholder="Matematik, Problemler, 3, 2, 2.5&#10;Türkçe, Paragraf, 7, 3, 6.25&#10;Fizik, Kuvvet-hareket, 1, 2, 0.5"></textarea>
        </details>
        <div class="draft-actions">
          <button class="primary" ${uiAction("click", (event, element) => { importExamBulk(); })}>Sınıfa işle</button>
          <button class="ghost" ${uiAction("click", (event, element) => { fillExamExample(); })}>Örnek doldur</button>
        </div>
        ${lgsEntryPanel(selected)}
        <div class="info-box">
          <strong>Okul notu hesabı</strong>
          <p>Yazılı, performans ve proje kayıtları ders bazlı dönem puanı hesabına katılır. Deneme kayıtları okul notunu etkilemez; yalnızca analiz ve yönlendirme için kullanılır.</p>
          <p>Dosyada olup sistemde bulunmayan öğrenciler otomatik oluşturulur ve aktif seçili sınıfa eklenir. PDF'deki 11A/12B gibi sınıf bilgisi sınav notunda korunur.</p>
        </div>
      </article>

      <article class="panel exam-guidance-panel span-7">
        <div class="section-title">
          <div>
            <h3>${escapeHtml(selected.fullName || "Öğrenci seçilmedi")} akademik yönlendirme</h3>
            <p>Alan eğilimi, meslek yatkınlığı, hedef bölüm havuzu ve öğretmen geri bildirimi</p>
          </div>
          ${studentFinderHtml(selected.id, "exams", selected.className || selectedClass, "examClassFilter")}
        </div>
        ${selected ? `
          <div class="academic-command-strip">
            <span>${escapeHtml(selected.className || selectedClass)}</span>
            <strong>${selectedAnalysis.area}</strong>
            <em>${examRecordsForStudent(selected.id).length} sınav kaydı</em>
          </div>
        ` : ""}
        ${selected ? examStudentPanel(selected, selectedAnalysis) : empty("Önce öğrenci seç.")}
      </article>

      <article class="panel span-12 dashboard-panel">
        <div class="section-title">
          <div>
            <h3>${selectedClass} sınıf grafikleri</h3>
            <p>Sınıf ortalaması, ders net dağılımı ve toplu konu öncelikleri</p>
          </div>
        </div>
        ${classExamChartsHtml(classExamRecords, classStudents)}
      </article>

      <article class="panel span-12">
        <div class="section-title">
          <div>
            <h3>${selectedClass} sınav listesi</h3>
            <p>${classExamRecords.length} sınav kaydı bulundu.</p>
          </div>
        </div>
        <div class="table-scroll">
        <table class="table compact data-table exam-list-table">
          <thead><tr><th>Öğrenci</th><th>Kaynak</th><th>Sınav</th><th>Türkçe</th><th>Mat</th><th>Fen</th><th>Sosyal</th><th>Puan</th><th>Sıralama</th><th>Alan</th><th>İşlem</th></tr></thead>
          <tbody>
            ${classExamRecords.length ? classExamRecords.slice().reverse().map((record) => examRecordRow(record)).join("") : `<tr><td colspan="11">Henüz sınav sonucu girilmedi.</td></tr>`}
          </tbody>
        </table>
        </div>
      </article>
    </div>
  `);
}

function setExamSource(source) {
  selectedExamSource = source;
  renderExams();
}

function lgsEntryPanel(student) {
  return `
    <section class="lgs-entry-card">
      <div class="section-title compact-title">
        <div>
          <h3>LGS başlangıç verisi</h3>
          <p>9. sınıfa geliş puanı, yüzdelik dilim ve ortaokul başarı puanı analizde başlangıç seviyesi olarak kullanılır.</p>
        </div>
      </div>
      <form class="lgs-manual-form" ${uiAction("submit", (event, element) => { saveLgsManual(event); })}>
        ${studentFinderHtml(student.id, "exams", student.className || selectedClass, "lgsClassFilter")}
        <label>LGS puanı<input name="lgsScore" inputmode="decimal" value="${escapeHtml(student.lgsScore || "")}" placeholder="Örn. 412.35" /></label>
        <label>Yüzdelik dilim<input name="lgsPercentile" inputmode="decimal" value="${escapeHtml(student.lgsPercentile || "")}" placeholder="Örn. 8.72" /></label>
        <label>OBP / ortaokul ort.<input name="middleSchoolAverage" inputmode="decimal" value="${escapeHtml(student.middleSchoolAverage || "")}" placeholder="Örn. 91.4" /></label>
        <button class="primary" type="submit">LGS bilgisini kaydet</button>
      </form>
      <details class="quiet-details compact-details lgs-bulk-details">
        <summary>Toplu LGS listesi yükle</summary>
        <p class="muted">PDF, Word, Excel veya metin listesinde okul numarası önceliklidir. Ad soyad hatalı olsa bile numara eşleşirse doğru öğrenciye kaydedilir.</p>
        <div class="exam-file-row">
          <div class="exam-upload-copy">
            <strong>LGS / ortaokul listesi</strong>
            <span>Okul No, Ad Soyad, LGS Puanı, Yüzdelik, OBP</span>
          </div>
          <input id="lgsFileInput" type="file" accept=".xlsx,.xls,.csv,.tsv,.txt,.pdf,.png,.jpg,.jpeg,.webp,.bmp,.doc,.docx,image/*" />
          <label class="camera-upload primary-camera">Fotoğraf çek / yükle<input id="lgsCameraInput" type="file" accept="image/*" capture="environment" ${uiAction("change", (event, element) => { syncCameraInputToFileInput('lgsCameraInput', 'lgsFileInput', 'lgsImportStatus'); })} /></label>
          <button class="ghost" type="button" ${uiAction("click", (event, element) => { readLgsFile(); })}>Dosyayı alana aktar</button>
          <button class="primary" type="button" ${uiAction("click", (event, element) => { readLgsFile(true); })}>Dosyayı oku ve işle</button>
        </div>
        <div id="lgsImportStatus" class="exam-import-status">Henüz LGS listesi okunmadı.</div>
        <textarea id="lgsBulkInput" class="bulk-input" rows="5" placeholder="Okul No, Ad Soyad, LGS Puanı, Yüzdelik Dilim, OBP&#10;102, Ogrenci A, 412.35, 8.72, 91.4&#10;734, Ogrenci D, 386.10, 14.3, 88.6"></textarea>
        <div class="draft-actions">
          <button class="primary" type="button" ${uiAction("click", (event, element) => { importLgsBulk(); })}>LGS listesini işle</button>
          <button class="ghost" type="button" ${uiAction("click", (event, element) => { fillLgsExample(); })}>Örnek doldur</button>
        </div>
      </details>
    </section>
  `;
}

function saveLgsManual(event) {
  event.preventDefault();
  const student = selectedStudent();
  if (!student) return alert("Önce öğrenci seç.");
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  student.lgsScore = cleanDisplay(data.lgsScore || "");
  student.lgsPercentile = cleanDisplay(data.lgsPercentile || "");
  student.middleSchoolAverage = cleanDisplay(data.middleSchoolAverage || "");
  student.sourceNotes = uniqueText([student.sourceNotes, "LGS başlangıç verisi elle girildi."]).join(" | ");
  saveState();
  renderAll();
  toastSave();
}

function fillLgsExample() {
  const rows = currentStudents().map((student, index) => {
    const score = (420 - index * 3.7).toFixed(2);
    const percentile = (6.5 + index * 0.8).toFixed(2);
    const obp = (92 - index * 0.35).toFixed(2);
    return `${escapeHtml(student.schoolNo || "")}, ${escapeHtml(student.fullName || "")}, ${score}, ${percentile}, ${obp}`;
  });
  document.querySelector("#lgsBulkInput").value = ["Okul No, Ad Soyad, LGS Puanı, Yüzdelik Dilim, OBP", ...rows].join("\n");
}

function fillExamExample() {
  document.querySelector("#examNameInput").value = `${selectedExamSource} 1`;
  document.querySelector("#examBulkInput").value = currentStudents().map((student, index) => {
    const base = 18 + index * 4;
    return `${escapeHtml(student.schoolNo || "")}, ${escapeHtml(student.fullName || "")}, ${base}, ${base + 6}, ${base - 2}, ${base - 4}, ${base - 8}, ${250 + index * 35}, ${270 + index * 30}, ${330 + index * 22}, ${160000 - index * 28000}`;
  }).join("\n");
  const topicInput = document.querySelector("#examTopicInput");
  if (topicInput) topicInput.value = "Matematik, Problemler, 3, 2, 2.5\nTürkçe, Paragraf, 7, 3, 6.25\nFizik, Kuvvet-hareket, 1, 2, 0.5\nKimya, Mol-stokiyometri, 2, 2, 1.5\nBiyoloji, Kalıtım, 1, 3, 0.25";
}

async function readExamFile(autoImport = false) {
  const input = document.querySelector("#examFileInput");
  const target = document.querySelector("#examBulkInput");
  const topicTarget = document.querySelector("#examTopicInput");
  const status = document.querySelector("#examImportStatus");
  const file = input.files[0];
  if (!file) {
    setExamImportStatus("Önce sınav sonuç dosyasını seç.", "warning");
    return;
  }
  try {
    target.value = "Dosya okunuyor...";
    setExamImportStatus(`${escapeHtml(file.name)} okunuyor...`, "loading");
    const text = await extractExamTextFromFile(file);
    if (!text.trim()) {
      target.value = "";
      setExamImportStatus(`${escapeHtml(file.name)} açıldı ama okunabilir metin çıkmadı. Tarama PDF ise daha net PDF/görsel veya Excel sonuç dosyası gerekebilir.`, "error");
      return;
    }
    target.value = text.trim();
    const topicRows = extractTopicLines(text);
    if (topicTarget && topicRows.length) topicTarget.value = topicRows.join("\n");
    const rows = parseExamRows(text);
    if (!document.querySelector("#examNameInput").value.trim()) {
      document.querySelector("#examNameInput").value = inferExamNameFromText(text) || file.name.replace(/\.[^.]+$/, "");
    }
    setExamImportStatus(`${escapeHtml(file.name)} okundu. ${escapeHtml(text.length)} karakter, ${rows.length} öğrenci/satır adayı yakalandı.`, rows.length ? "success" : "warning");
    if (autoImport) importExamBulk();
  } catch (error) {
    target.value = "";
    setExamImportStatus(`Sınav dosyası okunamadı: ${escapeHtml(error.message)}`, "error");
  }
}

async function readExamTopicFile(autoApply = false) {
  const input = document.querySelector("#examTopicFileInput");
  const target = document.querySelector("#examTopicInput");
  const file = input.files?.[0];
  if (!file) {
    setExamTopicStatus("Önce konu dağılım dosyası seç.", "warning");
    return;
  }
  try {
    target.value = "Konu dağılım dosyası okunuyor...";
    setExamTopicStatus(`${escapeHtml(file.name)} okunuyor...`, "loading");
    const text = await extractExamTextFromFile(file);
    if (!text.trim()) {
      target.value = "";
      setExamTopicStatus(`${escapeHtml(file.name)} açıldı ama konu dağılımı için okunabilir metin çıkmadı. Excel/CSV daha sağlıklı sonuç verir.`, "error");
      return;
    }
    target.value = text.trim();
    const assignments = parseTopicAssignments(text);
    const personalCount = [...assignments.byStudent.values()].reduce((sum, topics) => sum + topics.length, 0);
    setExamTopicStatus(`${escapeHtml(file.name)} okundu. ${assignments.rowCount} konu satırı yakalandı; ${personalCount} kişisel, ${assignments.shared.length} ortak konu kaydı.`, assignments.rowCount ? "success" : "warning");
    if (autoApply) {
      const hasExamRows = Boolean(document.querySelector("#examBulkInput").value.trim());
      if (hasExamRows) importExamBulk();
      else applyTopicDistributionToCurrentExam(text);
    }
  } catch (error) {
    target.value = "";
    setExamTopicStatus(`Konu dağılım dosyası okunamadı: ${escapeHtml(error.message)}`, "error");
  }
}

function cloudConfig() {
  const localConfig = safeJson(localStorage.getItem(cloudConfigStorageKey), {});
  const fileConfig = window.OIS_CLOUD_CONFIG || {};
  const configured = fileConfig.url ? fileConfig : localConfig;
  return {
    url: (configured.url || "").trim(),
    anonKey: (configured.anonKey || "").trim(),
    instanceId: (configured.instanceId || "main").trim() || "main",
    realtime: configured.realtime ?? true,
  };
}

function loadAppearanceSettings() {
  const saved = safeJson(localStorage.getItem(appearanceSettingsKey), {});
  const defaultView = normalizeViewName(saved.defaultView || "");
  return {
    language: saved.language || "",
    theme: saved.theme || localStorage.getItem("ois-public-theme") || "",
    defaultView: defaultView === "dashboard" && saved.defaultView && saved.defaultView !== "dashboard" ? "" : defaultView,
    compactTables: typeof saved.compactTables === "boolean" ? saved.compactTables : null,
    privacyMode: typeof saved.privacyMode === "boolean" ? saved.privacyMode : null,
  };
}

function saveAppearanceSettings(settings) {
  const appearance = {
    language: settings.language || "tr",
    theme: settings.theme || "light",
    defaultView: settings.defaultView || "dashboard",
    compactTables: settings.compactTables !== false,
    privacyMode: Boolean(settings.privacyMode),
  };
  localStorage.setItem(appearanceSettingsKey, JSON.stringify(appearance));
  localStorage.setItem("ois-public-theme", appearance.theme);
  return appearance;
}

function hasCloudConfig(config = cloudConfig()) {
  return Boolean(config.url && config.anonKey && window.supabase?.createClient);
}

function cloudStateId() {
  return currentSchool?.id || null;
}

function activeMembership() {
  return currentMembership && currentMembership.status === "active" ? currentMembership : null;
}

function isPrincipal() {
  return activeMembership()?.role === "principal";
}

function isFullAccessUser() {
  if (isDemoMode) return true;
  if (isSystemAdmin() && currentSchool?.id) return true;
  const role = activeMembership()?.role;
  return role === "principal" || role === "counselor" || role === "admin";
}

function allowedClassesForUser() {
  if (isFullAccessUser()) return Object.values(classes).flat();
  const allowed = activeMembership()?.allowed_classes;
  if (activeMembership()?.role === "teacher") return Array.isArray(allowed) ? allowed.filter(Boolean) : [];
  return Object.values(classes).flat();
}

function availableClassesForGrade(grade) {
  const allowed = new Set(allowedClassesForUser());
  return (classes[grade] || []).filter((className) => allowed.has(className));
}

function ensureAllowedClassSelection() {
  const allowed = allowedClassesForUser();
  if (!allowed.length) {
    selectedGrade = selectedGrade || "9";
    selectedClass = selectedClass || (classes[selectedGrade] || [])[0] || "9-A";
    return;
  }
  if (!allowed.includes(selectedClass)) {
    selectedClass = allowed[0];
  }
  selectedGrade = selectedClass.match(/^(9|10|11|12)/)?.[1] || selectedGrade;
}

function setAuthRole(role) {
  sessionStorage.setItem(authRoleSessionKey, role || "");
  if (role) localStorage.setItem(authRoleStorageKey, role);
}

function authRole() {
  return sessionStorage.getItem(authRoleSessionKey) || localStorage.getItem(authRoleStorageKey) || "";
}

function clearStoredAuth() {
  sessionStorage.removeItem(authEntrySessionKey);
  sessionStorage.removeItem(authRoleSessionKey);
  localStorage.removeItem(authRoleStorageKey);
  sessionStorage.removeItem(authSessionBackupKey);
  localStorage.removeItem(authSessionBackupKey);
  localStorage.removeItem(authMembershipBackupKey);
  clearSessionCookie();
}

function rememberAuthSession(session) {
  // Supabase owns token persistence and rotation; do not duplicate tokens in cookies.
  sessionStorage.removeItem(authSessionBackupKey);
  localStorage.removeItem(authSessionBackupKey);
  clearSessionCookie();
  return session;
}

function setSessionCookie(value) {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${authSessionCookieName}=${encodeURIComponent(value)}; Path=/; SameSite=Lax${secure}`;
}

function clearSessionCookie() {
  document.cookie = `${authSessionCookieName}=; Path=/; Max-Age=0; SameSite=Lax`;
}

function readSessionCookie() {
  const prefix = `${authSessionCookieName}=`;
  const part = document.cookie.split("; ").find((item) => item.startsWith(prefix));
  return part ? safeJson(decodeURIComponent(part.slice(prefix.length)), null) : null;
}

async function restoreSessionFromCookie(client) {
  return null;
}

async function currentCloudSession(client) {
  let data = {};
  try {
    ({ data } = await client.auth.getSession());
  } catch {
    data = {};
  }
  let session = data.session || null;
  if (!session) {
    await wait(500);
    try {
      ({ data } = await client.auth.getSession());
    } catch {
      data = {};
    }
    session = data.session || null;
  }
  if (!session) session = await restoreSessionFromCookie(client);
  if (session) {
    const verified = await client.auth.getUser(session.access_token);
    if (verified.error || !verified.data?.user) throw new Error("Oturum doğrulanamadı. Yeniden giriş yapın.");
    session = { ...session, user: verified.data.user };
    rememberAuthSession(session);
  }
  return session;
}

function rememberActiveMembership(row) {
  if (!currentAuthUser?.id || !row?.id || row.status !== "active") return;
  localStorage.setItem(authMembershipBackupKey, JSON.stringify({
    user_id: currentAuthUser.id,
    membership: row,
    school: row.schools || null,
    saved_at: Date.now(),
  }));
}

function restoreActiveMembershipBackup() {
  const saved = safeJson(localStorage.getItem(authMembershipBackupKey), null);
  if (!saved?.membership || saved.user_id !== currentAuthUser?.id) return null;
  currentMembership = saved.membership;
  currentSchool = saved.school || saved.membership.schools || null;
  return currentMembership;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isSystemAdmin() {
  return Boolean(currentSystemAdmin?.status === "active");
}

async function rejectRoleLogin(client, role, message) {
  await client.auth.signOut();
  clearStoredAuth();
  currentAuthUser = null;
  currentMembership = null;
  currentSchool = null;
  currentSystemAdmin = null;
  return renderAuthGate("login", message, role);
}

function loginRoleMatches(requestedRole) {
  if (requestedRole === "owner") return isSystemAdmin();
  if (requestedRole === "principal") return activeMembership()?.role === "principal";
  if (requestedRole === "teacher") {
    const role = activeMembership()?.role;
    return role === "teacher" || role === "counselor";
  }
  return false;
}

function safeJson(text, fallback) {
  try {
    return text ? JSON.parse(text) : fallback;
  } catch {
    return fallback;
  }
}

async function ensureCloudClient(force = false) {
  if (isDemoMode) return null;
  const config = cloudConfig();
  if (!hasCloudConfig(config)) return null;
  if (!cloudClient || force) {
    if (cloudChannel) {
      try { await cloudClient.removeChannel(cloudChannel); } catch {}
      cloudChannel = null;
    }
    cloudClient = window.supabase.createClient(config.url, config.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: `ois-public-auth-${config.instanceId || "main"}`,
      },
    });
  }
  return cloudClient;
}

async function prepareCloudAuth() {
  if (!hasCloudConfig()) return false;
  const client = await ensureCloudClient();
  if (!client) return false;
  const session = await currentCloudSession(client);
  currentAuthUser = session?.user || null;
  if (!currentAuthUser) {
    renderAuthGate("login");
    return true;
  }
  await loadCurrentMembership();
  await loadSystemAdmin();
  if (!currentSystemAdmin && currentUserWantsAdminAccess()) {
    try {
      await completeSystemAdminSetup();
    } catch (error) {
      console.warn("admin setup failed", error);
    }
  }
  if (isSystemAdmin()) {
    currentMembership = null;
    hideAuthGate();
    await loadAdminSchools();
    applyAdminSelectedSchool();
    await loadMemberRequests();
    return false;
  }
  if (!activeMembership()) {
    renderAuthGate(currentMembership?.status === "pending" ? "pending" : "join");
    return true;
  }
  const requestedRole = authRole();
  if (requestedRole && !loginRoleMatches(requestedRole)) {
    const correct = activeMembership()?.role === "principal" ? "Müdür" : "Öğretmen";
    await rejectRoleLogin(client, requestedRole, `Bu hesap ${correct} rolünde. Lütfen doğru giriş türünü seç.`);
    return true;
  }
  applySchoolFromMembership();
  await loadMemberRequests();
  hideAuthGate();
  return false;
}

async function loadCurrentMembership() {
  const client = await ensureCloudClient();
  if (!client || !currentAuthUser) return null;
  const queryMembership = async () => {
    let { data, error } = await client
      .from("school_members")
      .select("id, school_id, email, full_name, role, status, allowed_classes, schools(id, name, short_name, join_code, settings)")
      .eq("user_id", currentAuthUser.id)
      .order("requested_at", { ascending: false });
    if (error && /allowed_classes|column/i.test(error.message || "")) {
      ({ data, error } = await client
        .from("school_members")
        .select("id, school_id, email, full_name, role, status, schools(id, name, short_name, join_code, settings)")
        .eq("user_id", currentAuthUser.id)
        .order("requested_at", { ascending: false }));
    }
    return { data, error };
  };
  let { data, error } = await queryMembership();
  if (error) {
    await wait(350);
    ({ data, error } = await queryMembership());
  }
  if (error) {
    console.warn("membership load failed", error);
    currentMembership = null;
    currentSchool = null;
    throw new Error("Okul yetkisi doğrulanamadı. Bağlantınızı kontrol edin.");
  }
  const rows = Array.isArray(data) ? data : [];
  const requestedRole = authRole();
  const activeRows = rows.filter((row) => row.status === "active");
  currentMembership = (
    requestedRole === "principal"
      ? activeRows.find((row) => row.role === "principal")
      : requestedRole === "teacher"
        ? activeRows.find((row) => row.role === "teacher" || row.role === "counselor")
        : activeRows[0]
  ) || rows[0] || null;
  currentSchool = currentMembership?.schools || null;
  if (currentMembership?.status === "active") rememberActiveMembership(currentMembership);
  return currentMembership;
}

async function loadSystemAdmin() {
  currentSystemAdmin = null;
  const client = await ensureCloudClient();
  if (!client || !currentAuthUser) return null;
  const { data, error } = await client
    .from("system_admins")
    .select("id, email, full_name, status, created_at")
    .eq("user_id", currentAuthUser.id)
    .maybeSingle();
  if (!error && data?.status === "active") currentSystemAdmin = data;
  return currentSystemAdmin;
}

function currentUserWantsAdminAccess() {
  return false;
}

async function completeSystemAdminSetup() {
  return loadSystemAdmin();
}

function applySchoolFromMembership() {
  if (!currentSchool) return;
  state.school = {
    ...(state.school || {}),
    schoolId: currentSchool.id || state.school?.schoolId || "",
    name: currentSchool.name || state.school?.name || "Öğrenci İzleme Sistemi",
    shortName: currentSchool.short_name || state.school?.shortName || initialsFromSchoolName(currentSchool.name || ""),
  };
}

function applyAdminSelectedSchool() {
  if (!isSystemAdmin()) return false;
  const selectedId = localStorage.getItem(adminSelectedSchoolKey) || "";
  currentSchool = adminSchoolCache.find((school) => school.id === selectedId) || null;
  if (currentSchool) applySchoolFromMembership();
  return Boolean(currentSchool);
}

function renderAuthGate(mode = "login", message = "", activeRole = "principal") {
  document.body.classList.add("auth-locked");
  document.body.classList.remove("auth-unlocked");
  let gate = document.querySelector("#authGate");
  if (!gate) {
    gate = document.createElement("div");
    gate.id = "authGate";
    gate.className = "auth-gate";
    document.body.append(gate);
  }
  const pending = mode === "pending";
  const homeMode = mode === "home";
  const registerMode = mode === "register" || mode === "join";
  if (mode === "join") activeRole = "teacher";
  const registerRole = activeRole === "owner" ? "principal" : activeRole;
  setSafeHtml(gate, `
    <section class="auth-card auth-landing-card">
      <header class="auth-site-top">
        <div class="auth-site-brand">
          <span class="brand-mark mini">Öİ</span>
          <strong>Öğrenci İzleme Sistemi</strong>
        </div>
        <div class="auth-site-actions">
          <button class="ghost" type="button" ${uiAction("click", (event, element) => { renderAuthGate('login', '', (activeRole)); })}>Giriş</button>
          <button class="primary" type="button" ${uiAction("click", (event, element) => { renderAuthGate('register', '', (registerRole)); })}>Kayıt ol</button>
        </div>
      </header>
      <div class="auth-landing">
        <div class="auth-hero">
          <span class="eyebrow">Merkezi okul sistemi</span>
          <h1>Öğrenci İzleme Sistemi</h1>
      <p>Öğrenci dosyası, sınav, rehberlik, devamsızlık, mezun izleri ve veli destek kayıtları okul bazında ayrı tutulur.</p>
        </div>
        <div class="auth-box ${homeMode ? "auth-box-home" : ""}">
      ${message ? `<div class="exam-import-status" data-tone="info">${escapeHtml(message)}</div>` : ""}
      ${homeMode ? `
        <div class="auth-intro-panel">
          <span class="eyebrow">Okul verisi tek merkezde</span>
          <h3>Rehberlik, sınav ve öğrenci takibini aynı ekranda yönetin.</h3>
          <p>Müdür okulun tamamını, öğretmen yalnızca onaylandığı sınıfları görür. Kayıtlar merkezi veritabanından eş zamanlı güncellenir.</p>
        </div>
      ` : pending ? `
        <div class="auth-panel">
          <h3>Başvurun müdür onayında</h3>
          <p>${escapeHtml(currentSchool?.name || "Okul")} için hesabın beklemede. Müdür onaylayınca aynı e-posta ile giriş yapabileceksin.</p>
          <button class="ghost" type="button" ${uiAction("click", (event, element) => { signOutUser(); })}>Çıkış yap</button>
        </div>
      ` : registerMode ? authRegisterPage(activeRole) : authLoginPage(activeRole)}
        </div>
      </div>
    </section>
  `);
}

function authRoleTabs(page, activeRole = "principal") {
  const adminTab = page === "login"
    ? `<button class="${activeRole === "owner" ? "active" : ""}" type="button" ${uiAction("click", (event, element) => { renderAuthGate((page), '', 'owner'); })}>Admin</button>`
    : "";
  return `
    <div class="auth-role-tabs">
      <button class="${activeRole === "principal" ? "active" : ""}" type="button" ${uiAction("click", (event, element) => { renderAuthGate((page), '', 'principal'); })}>Müdür</button>
      <button class="${activeRole === "teacher" ? "active" : ""}" type="button" ${uiAction("click", (event, element) => { renderAuthGate((page), '', 'teacher'); })}>Öğretmen</button>
      ${adminTab}
    </div>
  `;
}

function classScopeSelectHtml(name = "allowedClasses", selected = []) {
  const chosen = new Set((Array.isArray(selected) ? selected : String(selected || "").split(",")).map((item) => item.trim()).filter(Boolean));
  const allClasses = Object.values(classes).flat();
  return `
    <label class="field-wide class-chip-field">Yetkili sınıflar
      <div class="class-chip-picker">
        <input type="hidden" name="${escapeHtml(name)}" value="${escapeHtml([...chosen].join(","))}" />
        <div class="class-chip-selected" data-selected>
          ${chosen.size ? [...chosen].map((className) => `<button type="button" class="class-chip active" data-class="${escapeHtml(className)}" ${uiAction("click", (event, element) => { toggleClassScopeChip(element); })}>${escapeHtml(className)}</button>`).join("") : `<span>Henüz sınıf seçilmedi</span>`}
        </div>
        <div class="class-chip-options">
          ${allClasses.map((className) => `<button type="button" class="class-chip ${chosen.has(className) ? "active" : ""}" data-class="${escapeHtml(className)}" ${uiAction("click", (event, element) => { toggleClassScopeChip(element); })}>${escapeHtml(className)}</button>`).join("")}
        </div>
      </div>
    </label>
  `;
}

function selectedAllowedClassesFromForm(form) {
  const raw = form?.allowedClasses?.value || "";
  if (raw) return raw.split(",").map((item) => item.trim()).filter(Boolean);
  return Array.from(form?.allowedClasses?.selectedOptions || []).map((option) => option.value).filter(Boolean);
}

function toggleClassScopeChip(button) {
  const picker = button.closest(".class-chip-picker");
  const hidden = picker?.querySelector("input[type='hidden']");
  if (!picker || !hidden) return;
  const value = button.dataset.class || "";
  const selected = new Set(hidden.value.split(",").map((item) => item.trim()).filter(Boolean));
  selected.has(value) ? selected.delete(value) : selected.add(value);
  hidden.value = [...selected].join(",");
  picker.querySelectorAll(".class-chip-options .class-chip").forEach((chip) => {
    chip.classList.toggle("active", selected.has(chip.dataset.class));
  });
  const target = picker.querySelector("[data-selected]");
  setSafeHtml(target, selected.size
    ? [...selected].map((className) => `<button type="button" class="class-chip active" data-class="${escapeHtml(className)}" ${uiAction("click", (event, element) => { toggleClassScopeChip(element); })}>${escapeHtml(className)}</button>`).join("")
    : "<span>Henüz sınıf seçilmedi</span>");
}

function authLoginPage(activeRole = "principal") {
  const roleTitle = {
    principal: "Müdür girişi",
    teacher: "Öğretmen girişi",
    owner: "Admin girişi"
  }[activeRole] || "Giriş";
  return `
    <form class="auth-panel auth-panel-centered" ${uiAction("submit", (event, element) => { signInUser(event); })}>
      <h3>${roleTitle}</h3>
      ${authRoleTabs("login", activeRole)}
      <input name="accountRole" type="hidden" value="${activeRole}" />
      <label>E-posta<input name="email" type="email" required autocomplete="email" /></label>
      <label>Şifre<input name="password" type="password" required autocomplete="current-password" /></label>
      <button class="primary" type="submit">Giriş yap</button>
      <button class="link-button auth-register-link" type="button" ${uiAction("click", (event, element) => { renderAuthGate('register', '', (activeRole)); })}>Kayıt ol</button>
      ${hasCloudConfig() ? "" : `<p class="auth-note">Güvenli giriş için Supabase bağlantısı gereklidir.</p>`}
    </form>
  `;
}

function authRegisterPage(activeRole = "principal") {
  if (activeRole === "owner") activeRole = "principal";
  const principal = activeRole === "principal";
  const teacher = activeRole === "teacher";
  const title = {
    principal: "Müdür kaydı",
    teacher: "Öğretmen kaydı"
  }[activeRole] || "Kayıt ol";
  return `
    <form class="auth-panel auth-panel-centered" ${uiAction("submit", (event, element) => { registerAuthByRole(event); })}>
      <h3>${escapeHtml(title)}</h3>
      ${authRoleTabs("register", activeRole)}
      <input name="accountRole" type="hidden" value="${activeRole}" />
      <label>Ad soyad<input name="fullName" required /></label>
      ${principal ? `
        <label>Zip kod<input name="joinCode" required placeholder="Okul zip kodu" /></label>
      ` : ""}
      ${teacher ? `<label>Zip kod<input name="joinCode" required placeholder="Okul zip kodu" /></label>` : ""}
      ${teacher ? classScopeSelectHtml() : ""}
      <label>E-posta<input name="email" type="email" required autocomplete="email" /></label>
      <label>Şifre<input name="password" type="password" required minlength="6" autocomplete="new-password" /></label>
      <button class="primary" type="submit">Kaydı tamamla</button>
      <button class="link-button auth-register-link" type="button" ${uiAction("click", (event, element) => { renderAuthGate('login', '', (activeRole)); })}>Girişe dön</button>
    </form>
  `;
}

function hideAuthGate() {
  document.body.classList.remove("auth-locked");
  document.body.classList.add("auth-unlocked");
  document.querySelector("#authGate")?.remove();
}

async function signUpOrSignIn(client, email, password, fullName) {
  let { data: authData, error: signError } = await client.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  });
  const needsPasswordSignIn = signError || !authData?.session;
  if (needsPasswordSignIn) {
    const signed = await client.auth.signInWithPassword({ email, password });
    if (!signed.error) return signed;
    if (signError) return { data: authData, error: signError };
    return signed;
  }
  return { data: authData, error: null };
}

async function requestSchoolJoin(client, joinCode, fullName, role, allowedClasses = []) {
  const result = await client.rpc("request_school_join", {
    requested_join_code: joinCode,
    applicant_full_name: fullName,
    requested_role: role,
    requested_allowed_classes: allowedClasses,
  });
  if (!result.error || !/schema cache|requested_role|requested_allowed|function/i.test(result.error.message || "")) return result;
  return client.rpc("request_school_join", {
    requested_join_code: joinCode,
    applicant_full_name: fullName,
  });
}

async function signInUser(event) {
  event.preventDefault();
  const client = await ensureCloudClient();
  if (!client) return renderAuthGate("login", "Bu sadece giriş ekranı önizlemesi. Gerçek giriş için Supabase URL ve key bağlanacak.");
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  data.role = data.accountRole;
  setAuthRole(data.role || "teacher");
  const { data: authData, error } = await client.auth.signInWithPassword({ email: data.email.trim(), password: data.password });
  if (error) return renderAuthGate("login", `Giriş yapılamadı: ${escapeHtml(error.message)}`);
  rememberAuthSession(authData?.session);
  currentAuthUser = authData?.user || null;
  await loadCurrentMembership();
  await loadSystemAdmin();
  if (data.role === "owner" && !isSystemAdmin()) {
    return rejectRoleLogin(client, "owner", "Bu hesap için sistem admini yetkisi tanımlanmamış.");
  }
  if (currentSystemAdmin && data.role !== "owner") {
    return rejectRoleLogin(client, data.role, "Admin hesabı yalnızca Admin girişinden açılır.");
  }
  if (activeMembership()?.status === "active" && !loginRoleMatches(data.role || "teacher")) {
    const correct = activeMembership()?.role === "principal" ? "Müdür" : "Öğretmen";
    return rejectRoleLogin(client, data.role || "teacher", `Bu hesap ${correct} rolünde. Lütfen doğru giriş türünü seç.`);
  }
  authJustUnlocked = true;
  sessionStorage.setItem(authEntrySessionKey, "1");
  await completeAuthRefresh("", data.role);
}

async function registerAuthByRole(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  data.role = data.accountRole;
  if (data.role === "teacher") {
    await requestTeacherAccess(event);
    return;
  }
  if (data.role === "owner") {
    await registerSystemAdmin(event);
    return;
  }
  await registerPrincipal(event);
}

async function registerSystemAdmin(event) {
  event.preventDefault();
  renderAuthGate("login", "Admin hesabı kurulum sahibi tarafından tanımlanır.", "owner");
}

async function registerPrincipal(event) {
  event.preventDefault();
  setAuthRole("principal");
  const client = await ensureCloudClient();
  if (!client) return renderAuthGate("register", "Bu sadece müdür kayıt ekranı önizlemesi. Gerçek kayıt için Supabase bağlantısı kurulacak.", "principal");
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const fullName = data.fullName.trim();
  const { data: authData, error: signError } = await signUpOrSignIn(client, data.email.trim(), data.password, fullName);
  if (signError) return renderAuthGate("register", `Müdür hesabı oluşturulamadı: ${escapeHtml(signError.message)}`, "principal");
  rememberAuthSession(authData?.session);
  currentAuthUser = authData.user || null;
  if (!authData.session) return renderAuthGate("login", "Hesap oluşturuldu. Giriş yapabilmek için Supabase Auth ayarında Confirm Email kapalı olmalı.", "principal");
  const { error } = await requestSchoolJoin(client, data.joinCode.trim().toUpperCase(), fullName, "principal");
  if (error) return renderAuthGate("register", `Müdür başvurusu gönderilemedi: ${escapeHtml(error.message)}`, "principal");
  authJustUnlocked = true;
  await completeAuthRefresh("Müdür başvurusu admin onayına gönderildi.");
}

async function requestTeacherAccess(event) {
  event.preventDefault();
  setAuthRole("teacher");
  const client = await ensureCloudClient();
  if (!client) return renderAuthGate("join", "Bu sadece öğretmen başvuru ekranı önizlemesi. Gerçek başvuru için Supabase bağlantısı kurulacak.");
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const selectedClasses = selectedAllowedClassesFromForm(event.currentTarget);
  const fullName = data.fullName.trim();
  const { data: authData, error: signError } = await signUpOrSignIn(client, data.email.trim(), data.password, fullName);
  if (signError) return renderAuthGate("join", `Başvuru hesabı oluşturulamadı: ${escapeHtml(signError.message)}`);
  rememberAuthSession(authData?.session);
  if (!authData.session) return renderAuthGate("login", "Hesap oluşturuldu. Giriş yapabilmek için Supabase Auth ayarında Confirm Email kapalı olmalı.");
  const { error } = await requestSchoolJoin(client, data.joinCode.trim().toUpperCase(), fullName, "teacher", selectedClasses);
  if (error) return renderAuthGate("join", `Başvuru gönderilemedi: ${escapeHtml(error.message)}`);
  authJustUnlocked = true;
  await completeAuthRefresh("Başvuru müdür onayına gönderildi.");
}

async function signOutUser() {
  if (isDemoMode) {
    sessionStorage.removeItem("ois-public-demo");
    location.assign(location.pathname);
    return;
  }
  const client = await ensureCloudClient();
  if (!client) {
    clearStoredAuth();
    location.assign(location.pathname);
    return;
  }
  await client?.auth.signOut();
  clearStoredAuth();
  currentAuthUser = null;
  currentMembership = null;
  currentSchool = null;
  currentSystemAdmin = null;
  document.body.classList.add("auth-locked");
  document.body.classList.remove("auth-unlocked");
  location.assign(location.pathname);
}

async function completeAuthRefresh(message = "", fallbackRole = "teacher") {
  const client = await ensureCloudClient();
  const session = await currentCloudSession(client);
  if (!session) {
    currentAuthUser = null;
    renderAuthGate("login", "Oturum bulunamadı. Lütfen tekrar giriş yap.");
    return;
  }
  rememberAuthSession(session);
  currentAuthUser = session.user || null;
  await loadCurrentMembership();
  await loadSystemAdmin();
  if (isSystemAdmin()) {
    currentMembership = null;
    hideAuthGate();
    await loadAdminSchools();
    applyAdminSelectedSchool();
    if (currentSchool) await loadCloudState();
    await loadMemberRequests();
    bindSchoolSettings();
    bindAppSettings();
    bindCloudSettings();
    renderSchoolBrand();
    applyAppSettings();
    renderAll();
    return;
  }
  if (!activeMembership()) {
    if (currentMembership?.status === "pending") {
      renderAuthGate("pending", message);
    } else {
      renderAuthGate(
        "register",
        message || "Giriş yapıldı ama bu hesap henüz bir okula bağlı değil. Okul zip koduyla başvuru gönder.",
        fallbackRole === "principal" ? "principal" : "teacher"
      );
    }
    return;
  }
  if (authRole() && !loginRoleMatches(authRole())) {
    const correct = activeMembership()?.role === "principal" ? "Müdür" : "Öğretmen";
    return rejectRoleLogin(client, authRole(), `Bu hesap ${correct} rolünde. Lütfen doğru giriş türünü seç.`);
  }
  applySchoolFromMembership();
  await loadCloudState();
  await loadMemberRequests();
  hideAuthGate();
  bindSchoolSettings();
  bindAppSettings();
  bindCloudSettings();
  renderSchoolBrand();
  applyAppSettings();
  renderStudentFormShell();
  fillClassSelect();
  renderAll();
}

async function loadMemberRequests() {
  memberManagementCache = [];
  if (!isPrincipal() && !isSystemAdmin()) return;
  const client = await ensureCloudClient();
  let query = client
    .from("school_members")
    .select("id, school_id, email, full_name, role, status, allowed_classes, requested_at, schools(id, name, short_name, join_code)")
    .order("requested_at", { ascending: false });
  if (!isSystemAdmin()) query = query.eq("school_id", currentSchool.id);
  let { data, error } = await query;
  if (error && /allowed_classes|column/i.test(error.message || "")) {
    query = client
      .from("school_members")
      .select("id, school_id, email, full_name, role, status, requested_at, schools(id, name, short_name, join_code)")
      .order("requested_at", { ascending: false });
    if (!isSystemAdmin()) query = query.eq("school_id", currentSchool.id);
    ({ data, error } = await query);
  }
  if (!error) memberManagementCache = Array.isArray(data) ? data : [];
}

async function loadAdminSchools() {
  adminSchoolCache = [];
  if (!isSystemAdmin()) return [];
  const client = await ensureCloudClient();
  const { data, error } = await client
    .from("schools")
    .select("id, name, short_name, join_code, created_at")
    .order("created_at", { ascending: false });
  if (!error) adminSchoolCache = Array.isArray(data) ? data : [];
  return adminSchoolCache;
}

async function selectAdminSchool(schoolId) {
  if (!isSystemAdmin()) return alert("Bu işlem sadece sistem admini içindir.");
  const school = adminSchoolCache.find((item) => item.id === schoolId);
  if (!school) return alert("Okul bulunamadı.");
  localStorage.setItem(adminSelectedSchoolKey, school.id);
  currentMembership = null;
  currentSchool = school;
  state = defaultState();
  applySchoolFromMembership();
  await loadCloudState();
  await loadMemberRequests();
  renderSchoolBrand();
  fillClassSelect();
  renderAll();
  setView("dashboard");
  updateCloudStatus(`${escapeHtml(school.name)} açıldı. Bu okulun verileriyle çalışıyorsun.`, "success");
}

async function approveMember(memberId, approve) {
  const role = document.querySelector(`#memberRole_${CSS.escape(memberId)}`)?.value || "teacher";
  const classText = document.querySelector(`#memberClasses_${CSS.escape(memberId)}`)?.value || "";
  const selectedClasses = classText.split(",").map((item) => item.trim()).filter(Boolean);
  const client = await ensureCloudClient();
  let { error } = await client.rpc("set_member_approval", {
    member_id: memberId,
    approve,
    new_role: role,
    new_allowed_classes: selectedClasses,
  });
  if (error && /schema cache|new_allowed|function/i.test(error.message || "")) {
    ({ error } = await client.rpc("set_member_approval", {
      member_id: memberId,
      approve,
      new_role: role,
    }));
  }
  if (error) {
    updateCloudStatus(`Üyelik güncellenemedi: ${escapeHtml(error.message)}`, "error");
    return;
  }
  await loadMemberRequests();
  renderMemberManagement();
}

function appConfirm(message, title = "Onay gerekli", confirmLabel = "Sil") {
  return new Promise((resolve) => {
    const modal = document.createElement("div");
    modal.className = "app-modal-backdrop";
    setSafeHtml(modal, `
      <div class="app-confirm">
        <div class="app-confirm-head">
          <h3>${escapeHtml(title)}</h3>
          <button type="button" class="icon-mini" data-answer="false">×</button>
        </div>
        <p>${escapeHtml(message)}</p>
        <div class="app-confirm-actions">
          <button type="button" class="ghost" data-answer="false">Vazgeç</button>
          <button type="button" class="danger" data-answer="true">${escapeHtml(confirmLabel)}</button>
        </div>
      </div>
    `);
    modal.addEventListener("click", (event) => {
      const answer = event.target.closest("[data-answer]")?.dataset.answer;
      if (!answer) return;
      modal.remove();
      resolve(answer === "true");
    });
    document.body.append(modal);
  });
}

async function removeMember(memberId) {
  const member = memberManagementCache.find((item) => item.id === memberId);
  if (!member || !(await appConfirm(`${escapeHtml(member.full_name || member.email)} sistemden kaldırılsın mı?`, "Kullanıcıyı sil"))) return;
  const client = await ensureCloudClient();
  let { error } = await client.rpc("remove_school_member", { member_id: memberId });
  if (error && /schema cache|function/i.test(error.message || "")) {
    ({ error } = await client.from("school_members").update({ status: "removed" }).eq("id", memberId));
  }
  if (error) return alert(`Kullanıcı silinemedi: ${escapeHtml(error.message)}`);
  await loadMemberRequests();
  renderMemberManagement();
}

async function createSchoolAsSystemAdmin(event) {
  event.preventDefault();
  const submitButton = event.currentTarget.querySelector("button[type='submit']");
  if (submitButton?.disabled) return;
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Oluşturuluyor...";
  }
  const client = await ensureCloudClient();
  if (!client) {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Okulu oluştur";
    }
    return alert("Bulut bağlantısı yok.");
  }
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const { data: created, error } = await client.rpc("admin_create_school", {
    school_name: data.schoolName.trim(),
    school_short_name: data.shortName.trim() || null,
    supplied_join_code: data.joinCode.trim().toUpperCase() || null,
  });
  if (error) {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Okulu oluştur";
    }
    const message = /gen_random_bytes|function .*integer/i.test(error.message || "")
      ? "Supabase okul kodu fonksiyonu eski kalmış. Zip içindeki SUPABASE_KURULUM.sql dosyasını SQL Editor'da bir kez tekrar çalıştır; gen_random_bytes hatası düzelecek."
      : error.message;
    return alert(message);
  }
  event.currentTarget.reset();
  await loadAdminSchools();
  await loadMemberRequests();
  renderMemberManagement();
  const code = Array.isArray(created) ? created[0]?.join_code : created?.join_code;
  if (code) alert(`Okul oluşturuldu. Zip kod: ${code}`);
}

async function deleteSchoolAsSystemAdmin(schoolId) {
  const school = adminSchoolCache.find((item) => item.id === schoolId);
  if (!school || !(await appConfirm(`${escapeHtml(school.name)} silinsin mi? Bu okula bağlı kayıtlar da silinir.`, "Okulu sil"))) return;
  const client = await ensureCloudClient();
  const { error } = await client.rpc("admin_delete_school", { target_school_id: schoolId });
  if (error) return alert(`Okul silinemedi: ${escapeHtml(error.message)}`);
  if (localStorage.getItem(adminSelectedSchoolKey) === schoolId) {
    localStorage.removeItem(adminSelectedSchoolKey);
    currentSchool = null;
    state = defaultState();
  }
  await loadAdminSchools();
  await loadMemberRequests();
  renderMemberManagement();
}

async function loadCloudState() {
  const client = await ensureCloudClient();
  if (!client) {
    cloudDatabaseAvailable = false;
    return false;
  }
  const stateId = cloudStateId();
  if (!stateId) {
    cloudDatabaseAvailable = false;
    return false;
  }
  try {
    const localBeforeCloud = isSystemAdmin() && currentSchool?.id ? defaultState() : localStoredState();
    if (isSystemAdmin() && currentSchool?.id) {
      localBeforeCloud.school = {
        ...(localBeforeCloud.school || {}),
        name: currentSchool.name || localBeforeCloud.school?.name || "Öğrenci İzleme Sistemi",
        shortName: currentSchool.short_name || localBeforeCloud.school?.shortName || initialsFromSchoolName(currentSchool.name || ""),
      };
    }
    cloudDatabaseAvailable = true;
    remoteDatabaseAvailable = true;

    if (isFullAccessUser()) {
      const { data, error } = await client
        .from("app_state")
        .select("state, updated_at")
        .eq("id", stateId)
        .maybeSingle();
      if (error) throw error;
      if (isUsableCloudState(data?.state)) {
        if (!stateBelongsToCurrentSchool(data.state)) {
          updateCloudStatus("Bu bulut verisi başka okul kimliği taşıyor; karışmayı önlemek için yüklenmedi.", "error");
          return false;
        }
        const cloudState = normalizeLoadedState(data.state);
        const localSize = stateSizeSummary(localBeforeCloud);
        const cloudSize = stateSizeSummary(cloudState);
        state = mergeStateWithoutDataLoss(localBeforeCloud, cloudState);
        await loadClassCloudStates(client, stateId);
        persistCurrentState();
        applySchoolFromMembership();
        const mergedSize = stateSizeSummary(state);
        if (mergedSize.students > cloudSize.students || mergedSize.forms > cloudSize.forms || mergedSize.exams > cloudSize.exams) {
          await saveCloudStateNow();
          updateCloudStatus(`Bulut/cihaz verisi birleştirildi: ${mergedSize.students} öğrenci eşitlendi.`, "success");
        } else if (localSize.students !== cloudSize.students) {
          updateCloudStatus(`Buluttan güncel veri alındı: ${mergedSize.students} öğrenci.`, "success");
        }
      } else {
        state = localBeforeCloud;
        await loadClassCloudStates(client, stateId);
        await saveCloudStateNow();
      }
    } else {
      state = stateForClasses(localBeforeCloud, allowedClassesForUser());
      const gotClassState = await loadClassCloudStates(client, stateId);
      persistCurrentState();
      applySchoolFromMembership();
      if (!gotClassState) await saveCloudStateNow();
    }
    subscribeCloudState();
    if (!document.querySelector("#cloudStatus")?.textContent?.includes("öğrenci")) {
      updateCloudStatus("Bulut bağlantısı aktif. Kayıtlar eş zamanlı izleniyor.", "success");
    }
    return true;
  } catch (error) {
    cloudDatabaseAvailable = false;
    updateCloudStatus(`Bulut bağlantısı kurulamadı: ${escapeHtml(error.message)}`, "error");
    return false;
  }
}

function isUsableCloudState(value) {
  return Boolean(value && Array.isArray(value.students));
}

async function readLgsFile(autoImport = false) {
  const input = document.querySelector("#lgsFileInput");
  const target = document.querySelector("#lgsBulkInput");
  const file = input.files?.[0];
  if (!file) {
    setLgsImportStatus("Önce LGS/ortaokul liste dosyası seç.", "warning");
    return;
  }
  try {
    target.value = "LGS listesi okunuyor...";
    setLgsImportStatus(`${escapeHtml(file.name)} okunuyor...`, "loading");
    const text = await extractTextFromFile(file);
    if (!text.trim()) {
      target.value = "";
      setLgsImportStatus(`${escapeHtml(file.name)} açıldı ama okunabilir metin çıkmadı. Excel/CSV veya daha net PDF/görsel daha sağlıklı olur.`, "error");
      return;
    }
    target.value = text.trim();
    const rows = parseLgsRows(text);
    setLgsImportStatus(`${escapeHtml(file.name)} okundu. ${rows.length} LGS satırı adayı yakalandı.`, rows.length ? "success" : "warning");
    if (autoImport) importLgsBulk();
  } catch (error) {
    target.value = "";
    setLgsImportStatus(`LGS listesi okunamadı: ${escapeHtml(error.message)}`, "error");
  }
}

function importLgsBulk() {
  const text = document.querySelector("#lgsBulkInput").value.trim() || "";
  if (!text) {
    setLgsImportStatus("Önce LGS listesini yapıştır veya dosya seç.", "warning");
    return;
  }
  const rows = parseLgsRows(text);
  if (!rows.length) {
    setLgsImportStatus("LGS satırı yakalanamadı. En az Okul No ve LGS puanı görünmeli.", "error");
    return;
  }
  let matched = 0;
  let created = 0;
  rows.forEach((row) => {
    const existing = matchStudentByIdentity(row, { strictNumber: Boolean(row.schoolNo) });
    let student = existing;
    if (!student && (row.schoolNo || row.fullName)) {
      student = {
        id: crypto.randomUUID(),
        className: selectedClass,
        fullName: row.fullName || `No ${escapeHtml(row.schoolNo)}`,
        schoolNo: row.schoolNo || "",
        academicStatus: "LGS listesiyle eklendi",
        guidanceNote: "LGS/ortaokul başlangıç verisi toplu listeden oluşturuldu.",
        risk: {},
        protective: [],
      };
      state.students.push(student);
      created += 1;
    }
    if (!student) return;
    student.lgsScore = row.lgsScore || student.lgsScore || "";
    student.lgsPercentile = row.lgsPercentile || student.lgsPercentile || "";
    student.middleSchoolAverage = row.middleSchoolAverage || student.middleSchoolAverage || "";
    student.sourceNotes = uniqueText([student.sourceNotes, "LGS/ortaokul başlangıç verisi toplu listeden işlendi."]).join(" | ");
    matched += 1;
  });
  saveState();
  renderAll();
  setLgsImportStatus(`${matched} öğrencinin LGS başlangıç verisi işlendi. ${created} yeni öğrenci oluşturuldu.`, matched ? "success" : "warning");
}

function parseLgsRows(text) {
  const lines = String(text || "").split(/\n+/).map((line) => cleanDisplay(line).trim()).filter(Boolean);
  const rows = [];
  let header = null;
  lines.forEach((line) => {
    if (/sayfa:|^\[/.test(normalizeKey(line))) return;
    const cells = splitLgsCells(line);
    if (cells.length < 2) return;
    if (looksLikeLgsHeader(cells)) {
      header = cells.map(normalizeKey);
      return;
    }
    const row = header ? parseLgsCellsWithHeader(cells, header) : parseLgsCellsDefault(cells, line);
    if (row && (row.schoolNo || row.fullName) && (row.lgsScore || row.lgsPercentile || row.middleSchoolAverage)) rows.push(row);
  });
  return rows;
}

function splitLgsCells(line) {
  return String(line || "")
    .replace(/\s+\|\s+/g, "|")
    .split(/\t|;|,|\||\s:\s|\s{2,}/)
    .map((cell) => cleanDisplay(cell).trim())
    .filter(Boolean);
}

function looksLikeLgsHeader(cells) {
  const text = normalizeKey(cells.join(" "));
  return /okul.*no|numara|ad.*soyad|lgs|yuzdelik|yüzdelik|obp|ortaokul/.test(text)
    && !cells.some((cell) => parseScore(cell) > 100);
}

function parseLgsCellsWithHeader(cells, header) {
  const find = (...needles) => {
    const index = header.findIndex((key) => needles.some((needle) => key.includes(needle)));
    return index >= 0 ? cleanDisplay(cells[index] || "") : "";
  };
  const schoolNo = find("okul no", "numara", "no");
  const fullName = find("ad soyad", "ogrenci", "ögrenci", "isim", "ad");
  return {
    schoolNo: schoolNo || firstSchoolNo(cells),
    fullName: fullName || inferLgsName(cells),
    lgsScore: normalizeScoreText(find("lgs", "yerlestirme", "puan")),
    lgsPercentile: normalizeScoreText(find("yuzdelik", "yüzdelik", "dilim")),
    middleSchoolAverage: normalizeScoreText(find("obp", "ortaokul", "ortalama")),
  };
}

function parseLgsCellsDefault(cells, line) {
  const schoolNo = firstSchoolNo(cells);
  const numeric = cells.map((cell) => ({ raw: cell, value: parseScore(cell) })).filter((item) => item.value != null);
  const lgs = numeric.find((item) => item.value > 100 && item.value <= 500).raw || "";
  const candidates = numeric.filter((item) => item.raw !== lgs && item.value <= 100);
  const percentile = candidates.find((item) => /%|yüz|yuz|dilim/i.test(line) || item.value <= 50).raw || "";
  const obp = candidates.reverse().find((item) => item.raw !== percentile && item.value <= 100).raw || "";
  return {
    schoolNo,
    fullName: inferLgsName(cells),
    lgsScore: normalizeScoreText(lgs),
    lgsPercentile: normalizeScoreText(percentile),
    middleSchoolAverage: normalizeScoreText(obp),
  };
}

function firstSchoolNo(cells) {
  return cleanDisplay(cells.find((cell, index) => /^\d{1,5}$/.test(cell) && index <= 2) || "");
}

function inferLgsName(cells) {
  const nameCell = cells.find((cell) => /[A-Za-zÇĞİÖŞÜçğıöşü]/.test(cell) && !/lgs|puan|yüz|yuz|dilim|obp|ortaokul|okul|no|numara/i.test(cell));
  return cleanDisplay(nameCell || "");
}

function normalizeScoreText(value) {
  const score = parseScore(value);
  return score == null ? "" : String(score);
}

function setLgsImportStatus(message, tone = "info") {
  const status = document.querySelector("#lgsImportStatus");
  if (!status) return;
  status.textContent = message;
  status.dataset.tone = tone;
}

function setExamImportStatus(message, tone = "info") {
  const status = document.querySelector("#examImportStatus");
  if (!status) return;
  status.textContent = message;
  status.dataset.tone = tone;
}

function setExamTopicStatus(message, tone = "info") {
  const status = document.querySelector("#examTopicStatus");
  if (!status) return;
  status.textContent = message;
  status.dataset.tone = tone;
}

async function extractExamTextFromFile(file) {
  const ext = file.name.split(".").pop().toLowerCase();
  if (["xlsx", "xls"].includes(ext)) return await extractExamSpreadsheetText(file);
  return await extractTextFromFile(file);
}

async function extractExamSpreadsheetText(file) {
  if (!window.XLSX) throw new Error("Excel okuma kütüphanesi yüklenemedi.");
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array" });
  const text = workbook.SheetNames.map((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
    return rows.map((row) => row.map((cell) => String(cell).trim()).join(", ")).join("\n");
  }).join("\n");
  return cleanImportedText(text);
}

async function importAtlasCsv() {
  const input = document.querySelector("#atlasFileInput");
  const file = input.files?.[0];
  if (!file) {
    setAtlasImportStatus("\u00d6nce Y\u00d6K Atlas CSV dosyas\u0131 se\u00e7.", "warning");
    return;
  }
  try {
    const text = await file.text();
    const rows = parseAtlasRows(text);
    if (!rows.length) {
      setAtlasImportStatus("CSV okundu ama program sat\u0131r\u0131 bulunamad\u0131. Ba\u015fl\u0131klar: puanTuru, universite, program, basariSirasi, tabanPuan.", "error");
      return;
    }
    state.atlasPrograms = rows;
    saveState();
    renderAll();
    setAtlasImportStatus(`${rows.length} program Y\u00d6K Atlas veri havuzuna al\u0131nd\u0131.`, "success");
  } catch (error) {
    setAtlasImportStatus(`Atlas CSV okunamad\u0131: ${escapeHtml(error.message)}`, "error");
  }
}

function parseAtlasRows(text) {
  const rows = text.split(/\n+/).map((line) => splitExamCells(line)).filter((row) => row.length >= 4);
  const header = rows[0] || [];
  const map = {};
  header.forEach((cell, index) => {
    const key = normalizeExamKey(cell);
    if (/puan turu|puanturu|puan tipi|puantipi|tur/.test(key)) map.area = index;
    else if (/universite/.test(key)) map.university = index;
    else if (/program|bolum/.test(key)) map.program = index;
    else if (/^yil$/.test(key)) map.year = index;
    else if (/^sehir$|^il$/.test(key)) map.city = index;
    else if (/basari sirasi|basarisirasi|siralama/.test(key)) map.rank = index;
    else if (/taban puan|tabanpuan|puan/.test(key)) map.score = index;
    else if (/kontenjan/.test(key)) map.quota = index;
  });
  if (map.area === undefined || map.university === undefined || map.program === undefined || map.rank === undefined) return [];
  return rows.slice(1).map((cells) => {
    const rank = parseScore(cells[map.rank]);
    if (!rank) return null;
    return {
      area: atlasAreaName(cells[map.area]),
      program: cleanDisplay(cells[map.program]),
      universities: [cleanDisplay(cells[map.university])].filter(Boolean),
      maxRank: Math.round(rank * 0.9),
      stretchRank: Math.round(rank * 1.15),
      lastRank: rank,
      note: atlasProgramNote(cells, map),
    };
  }).filter((item) => item.area && item.program && item.universities.length);
}

function atlasAreaName(value) {
  const key = normalizeExamKey(value);
  if (/say/.test(key)) return "Say\u0131sal";
  if (/ea|esit/.test(key)) return "E\u015fit A\u011f\u0131rl\u0131k";
  if (/soz|sozel/.test(key)) return "S\u00f6zel";
  if (/dil|ydt/.test(key)) return "Dil";
  if (/tyt/.test(key)) return "TYT";
  return cleanDisplay(value);
}

function atlasProgramNote(cells, map) {
  const parts = [
    cells[map.city] ? `?ehir: ${cleanDisplay(cells[map.city])}` : "",
    cells[map.score] ? `Taban puan: ${parseScore(cells[map.score])}` : "",
    cells[map.quota] ? `Kontenjan: ${parseScore(cells[map.quota])}` : "",
    cells[map.year] ? `Y?l: ${parseScore(cells[map.year])}` : "",
  ].filter(Boolean);
  return parts.join(" - ") || "Y\u00fcklenen Atlas/K\u0131lavuz verisinden al\u0131nd\u0131.";
}

function setAtlasImportStatus(message, tone = "info") {
  const status = document.querySelector("#atlasImportStatus");
  if (!status) return;
  status.textContent = message;
  status.dataset.tone = tone;
}

function atlasSourceSummary() {
  const count = state.atlasPrograms.length || 0;
  return count ? `${count} programl?k yerel Y?K Atlas havuzu kullan?l?yor.` : "Hen?z CSV y?klenmedi; sistem ?rnek hedef havuzunu kullan?yor.";
}

function importExamBulk() {
  const text = document.querySelector("#examBulkInput").value.trim();
  const topicText = document.querySelector("#examTopicInput").value.trim() || "";
  const name = document.querySelector("#examNameInput").value.trim() || inferExamNameFromText(text) || `${selectedExamSource} sonucu`;
  const date = document.querySelector("#examDateInput").value || new Date().toISOString().slice(0, 10);
  if (!text) {
    setExamImportStatus("Önce sınıf listesini yapıştır veya dosya seç.", "warning");
    return;
  }
  const rows = parseExamRows(text);
  if (!rows.length) {
    setExamImportStatus("Dosya okundu ama sınav satırı yakalanamadı. Dosyanın ilk satırlarında öğrenci adı, okul no veya sınav sonuç tablosu olduğundan emin ol.", "error");
    return;
  }
  let matched = 0;
  let created = 0;
  const detectedBrand = inferExamBrand(text);
  const detectedKind = inferExamKindFromText(text);
  const topicAssignments = parseTopicAssignments(topicText || extractTopicLines(text).join("\n"));
  rows.forEach((row) => {
    const { student, wasCreated } = ensureStudentFromExamRow(row);
    if (!student) return;
    if (wasCreated) created += 1;
    matched += 1;
    const existingRecord = state.examRecords.find((record) =>
      record.studentId === student.id
      && record.source === selectedExamSource
      && record.examName === name
      && record.date === date
    );
    const recordData = {
      id: crypto.randomUUID(),
      studentId: student.id,
      source: selectedExamSource,
      brand: row.brand || detectedBrand || selectedExamSource,
      examName: name,
      date,
      examKind: row.examKind || detectedKind || selectedExamSource,
      section: row.section || "",
      scores: row.scores || {},
      details: row.details || {},
      topics: row.topics.length ? row.topics : (topicsForStudent(student, topicAssignments).length ? topicsForStudent(student, topicAssignments) : topicAssignments.shared),
      scoreTypes: row.scoreTypes || null,
      totalScore: row.totalScore,
      ranking: row.ranking,
      note: [row.sourceClass ? `PDF s?n?f?: ${escapeHtml(row.sourceClass)}` : "", row.note].filter(Boolean).join(" | "),
      createdAt: new Date().toISOString(),
    };
    if (existingRecord) mergeExamRecord(existingRecord, recordData);
    else state.examRecords.push(recordData);
  });
  saveState();
  renderAll();
  setExamImportStatus(
    matched
      ? `${matched} sınav sonucu işlendi. ${created} yeni öğrenci oluşturuldu.`
      : `${rows.length} satır yakalandı ama öğrenci oluşturulamadı. Satırlarda okul no ve ad soyad bölümü net görünmeli.`,
    matched ? "success" : "warning"
  );
}

function applyTopicDistributionToCurrentExam(topicText) {
  const assignments = parseTopicAssignments(topicText);
  if (!assignments.rowCount) {
    setExamTopicStatus("Konu dağılımı yakalanamadı. Başlıklarda Ders/Konu/Doğru/Yanlış/Net veya öğrenci adı-no olmalı.", "error");
    return;
  }
  const name = document.querySelector("#examNameInput").value.trim() || "";
  const date = document.querySelector("#examDateInput").value || "";
  const classIds = new Set(currentStudents().map((student) => student.id));
  const targetRecords = state.examRecords.filter((record) =>
    classIds.has(record.studentId)
    && record.source === selectedExamSource
    && (!name || record.examName === name)
    && (!date || record.date === date)
  );
  if (!targetRecords.length) {
    setExamTopicStatus("Bu sınıf/tarih/sınav adı için mevcut deneme kaydı bulunamadı. Önce net listesini işle veya sınav adını-tarihini kontrol et.", "warning");
    return;
  }
  let updated = 0;
  targetRecords.forEach((record) => {
    const student = state.students.find((item) => item.id === record.studentId);
    const personalTopics = topicsForStudent(student, assignments);
    const topics = personalTopics.length ? personalTopics : assignments.shared;
    if (!topics.length) return;
    record.topics = mergeTopicRows(record.topics || [], topics);
    record.note = uniqueText([record.note, "Konu dağılım çizelgesi işlendi"]).join(" | ");
    record.updatedAt = new Date().toISOString();
    updated += 1;
  });
  saveState();
  renderAll();
  setExamTopicStatus(`${updated} öğrenci kaydına konu dağılımı işlendi. Analiz ve haftalık plan önerileri bu konuları dikkate alacak.`, updated ? "success" : "warning");
}

function mergeExamRecord(target, incoming) {
  target.scores = { ...(target.scores || {}), ...(incoming.scores || {}) };
  target.details = { ...(target.details || {}), ...(incoming.details || {}) };
  target.topics = mergeTopicRows(target.topics || [], incoming.topics || []);
  target.scoreTypes = { ...(target.scoreTypes || {}), ...(incoming.scoreTypes || {}) };
  target.brand = incoming.brand || target.brand;
  target.examKind = incoming.examKind || target.examKind;
  target.section = [target.section, incoming.section].filter(Boolean).filter((item, index, list) => list.indexOf(item) === index).join(" + ");
  target.totalScore = incoming.totalScore ?? target.totalScore;
  target.ranking = incoming.ranking ?? target.ranking;
  target.note = uniqueText([target.note, incoming.note]).join(" | ");
  target.updatedAt = new Date().toISOString();
}

function uniqueText(items) {
  return items.filter(Boolean).filter((item, index, list) => list.indexOf(item) === index);
}

function extractTopicLines(text) {
  return String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => parseTopicLine(line));
}

function parseTopicRows(text) {
  return parseTopicAssignments(text).shared;
}

function parseTopicAssignments(text) {
  const rows = String(text || "").split(/\n+/).map((line) => splitExamCells(line)).filter((cells) => cells.length >= 2);
  const assignments = { shared: [], byStudent: new Map(), rowCount: 0 };
  if (!rows.length) return assignments;
  const headerIndex = rows.findIndex((cells) => cells.some((cell) => /okul\s*no|ad\s*soyad|öğrenci|ogrenci|ders|konu|kazanım|kazanim/i.test(cell)));
  const header = headerIndex >= 0 ? rows[headerIndex] : null;
  const map = header ? buildTopicHeaderMap(header) : null;
  const dataRows = header ? rows.slice(headerIndex + 1) : rows;

  dataRows.forEach((cells) => {
    const direct = map ? parseTopicCellsWithHeader(cells, map, header) : parseTopicCellsDefault(cells);
    direct.forEach((item) => addTopicAssignment(assignments, item));
  });
  return assignments;
}

function buildTopicHeaderMap(header) {
  const map = { topicColumns: [] };
  header.forEach((cell, index) => {
    const key = normalizeExamKey(cell);
    if (/okul.*(no|numara)|^no$/.test(key)) map.schoolNo = index;
    else if (/ad.*soyad|ogrenci|öğrenci|isim/.test(key)) map.fullName = index;
    else if (/ders|test|brans|branş/.test(key)) map.subject = index;
    else if (/konu|kazanim|kazanım|unit|ünite|unite/.test(key)) map.topic = index;
    else if (/dogru|doğru|^d$/.test(key)) map.dogru = index;
    else if (/yanlis|yanlış|^y$/.test(key)) map.yanlis = index;
    else if (/net|basari|başarı|oran|yuzde|yüzde/.test(key)) map.net = index;
    else if (!/puan|siralama|sıralama|sinif|sınıf|derece/.test(key)) map.topicColumns.push({ index, label: cleanDisplay(cell) });
  });
  return map;
}

function parseTopicCellsWithHeader(cells, map, header) {
  const schoolNo = cleanDisplay(cells[map.schoolNo] || "");
  const fullName = cleanDisplay(cells[map.fullName] || "");
  const items = [];
  if (map.topic !== undefined || map.subject !== undefined) {
    const subject = normalizeSubjectKey(cells[map.subject] || cells[map.topic] || "");
    const topic = cleanDisplay(cells[map.topic] || cells[map.subject] || "");
    const dogru = parseScore(cells[map.dogru]);
    const yanlis = parseScore(cells[map.yanlis]);
    const net = parseScore(cells[map.net]) ?? calculateNet(dogru, yanlis);
    if (topic && (subject || map.subject === undefined) && (dogru !== null || yanlis !== null || net !== null)) {
      items.push({ schoolNo, fullName, topic: { subject: subject || inferSubjectFromTopic(topic), topic, dogru, yanlis, net } });
    }
  }
  map.topicColumns.forEach(({ index, label }) => {
    const value = parseScore(cells[index]);
    if (value === null || !label || isIdentityLikeTopic(label)) return;
    const subject = inferSubjectFromTopic(label);
    items.push({ schoolNo, fullName, topic: { subject, topic: label, dogru: null, yanlis: null, net: value, note: "Geniş konu dağılım çizelgesinden okundu" } });
  });
  return items;
}

function parseTopicCellsDefault(cells) {
  const joined = cells.join(", ");
  const simple = parseTopicLine(joined);
  if (simple) return [{ schoolNo: "", fullName: "", topic: simple }];
  const items = [];
  if (cells.length >= 7) {
    const topic = parseTopicLine(cells.slice(2).join(", "));
    if (topic) items.push({ schoolNo: cleanDisplay(cells[0]), fullName: cleanDisplay(cells[1]), topic });
  }
  if (!items.length && cells.length >= 6) {
    const topic = parseTopicLine(cells.slice(1).join(", "));
    if (topic) {
      const first = cleanDisplay(cells[0]);
      items.push({ schoolNo: /^\d+$/.test(first) ? first : "", fullName: /^\d+$/.test(first) ? "" : first, topic });
    }
  }
  return items;
}

function addTopicAssignment(assignments, item) {
  if (!item.topic.topic) return;
  assignments.rowCount += 1;
  const key = topicStudentKey(item.schoolNo, item.fullName);
  if (!key) {
    assignments.shared.push(item.topic);
    return;
  }
  const list = assignments.byStudent.get(key) || [];
  list.push(item.topic);
  assignments.byStudent.set(key, list);
}

function topicStudentKey(schoolNo, fullName) {
  const no = normalizeKey(schoolNo);
  if (no && no !== "0") return `no:${no}`;
  const name = normalizeKey(fullName);
  return name ? `name:${escapeHtml(name)}` : "";
}

function topicsForStudent(student, assignments) {
  if (!student || !assignments) return [];
  const noKey = topicStudentKey(student.schoolNo, "");
  const nameKey = topicStudentKey("", student.fullName);
  return [
    ...(assignments.byStudent.get(noKey) || []),
    ...(assignments.byStudent.get(nameKey) || []),
  ];
}

function isIdentityLikeTopic(label) {
  return /okul|numara|ogrenci|öğrenci|isim|ad soyad|sinif|sınıf|puan|siralama|sıralama/i.test(label);
}

function inferSubjectFromTopic(topic) {
  const key = normalizeExamKey(topic);
  const entries = Object.entries(yksTopicMap || {});
  const found = entries.find(([, topics]) => topics.some((item) => key.includes(normalizeExamKey(item)) || normalizeExamKey(item).includes(key)));
  if (found) return found[0];
  return normalizeSubjectKey(topic) || "genel";
}

function parseTopicLine(line) {
  const clean = String(line || "").replace(/\s+/g, " ").trim();
  if (!clean) return null;
  const cells = clean.split(/\t|,|;/).map((cell) => cell.trim()).filter(Boolean);
  if (cells.length >= 5) {
    const subject = normalizeSubjectKey(cells[0]);
    const topic = cleanDisplay(cells[1]);
    const dogru = parseScore(cells[2]);
    const yanlis = parseScore(cells[3]);
    const net = parseScore(cells[4]) ?? calculateNet(dogru, yanlis);
    if (subject && topic && (net !== null || dogru !== null || yanlis !== null)) return { subject, topic, dogru, yanlis, net };
  }
  const match = clean.match(/^([A-Za-zÇĞİÖŞÜçğıöşü\s]+)\s*[-:>]\s*(.+)\s+(:D|Doğru|Dogru)\s*[:=]\s*(-\d+(:[,.]\d+))\s+(:Y|Yanlış|Yanlis)\s*[:=]\s*(-\d+(:[,.]\d+))(:\s+(:N|Net)\s*[:=]\s*(-\d+(:[,.]\d+)))/i);
  if (!match) return null;
  const subject = normalizeSubjectKey(match[1]);
  const dogru = parseScore(match[3]);
  const yanlis = parseScore(match[4]);
  return {
    subject,
    topic: cleanDisplay(match[2]),
    dogru,
    yanlis,
    net: parseScore(match[5]) ?? calculateNet(dogru, yanlis),
  };
}

function normalizeSubjectKey(value) {
  const key = normalizeKey(value);
  return subjectTopicAliases[key] || Object.keys(subjectTopicAliases).find((alias) => key.includes(alias) || alias.includes(key)) && subjectTopicAliases[Object.keys(subjectTopicAliases).find((alias) => key.includes(alias) || alias.includes(key))];
}

function calculateNet(dogru, yanlis) {
  if (dogru === null && yanlis === null) return null;
  return Number(((dogru || 0) - (yanlis || 0) * 0.25).toFixed(2));
}

function mergeTopicRows(current, incoming) {
  const byKey = new Map();
  [...current, ...incoming].filter(Boolean).forEach((topic) => {
    const key = `${escapeHtml(topic.subject)}|${normalizeKey(topic.topic)}`;
    byKey.set(key, { ...byKey.get(key), ...topic });
  });
  return [...byKey.values()];
}

function inferExamBrand(text) {
  const source = normalizeExamKey(text);
  const found = examBrandTokens.find(([, token]) => source.includes(token));
  return found ? found[0] : "";
}

function inferExamKindFromText(text) {
  const source = normalizeExamKey(text);
  if (/\bydt\b|yabanci dil/.test(source)) return "YDT";
  if (/\bayt\b|sayisal net|sozel net|yks say|yks ea|yks soz/.test(source)) return "AYT";
  if (/\btyt\b|temel yeterlilik/.test(source)) return "TYT";
  if (/\byks\b/.test(source)) return "YKS";
  return "";
}

function inferExamNameFromText(text) {
  const brand = inferExamBrand(text);
  const kind = inferExamKindFromText(text);
  const generic = String(text || "").match(/((:T[ÖO]DER|ÖZDEB[İI]R|OR[İI]J[İI]NAL|345|3D|MEB[İI]|B[İI]LG[İI]\s*SARMAL|KAREK[ÖO]K|L[İI]M[İI]T|YAYIN\s*DEN[İI]Z[İI]).{0,45}(:TYT|AYT|YKS|YDT).{0,20})(:\n|$)/i);
  if (generic) return generic[1].replace(/\s+/g, " ").trim();
  const match = text.match(/SINAV ADI\s+.+\s+(ÇAP\s+TG\s+(TYT|AYT)\s+\d+|CAP\s+TG\s+(TYT|AYT)\s+\d+|(TYT|AYT)\s+\d+)/i);
  if (match) return match[1].replace(/\s+/g, " ").trim();
  if (/OKUL\s+TYT\s+NET\s+L[İI]STES[İI]/i.test(text)) return "TYT net listesi";
  if (/OKUL\s+(AYT|S[ÖO]ZEL|SAYISAL)\s+NET\s+L[İI]STES[İI]/i.test(text)) return "AYT net listesi";
  if (brand && kind) return `${brand} ${kind} sonucu`;
  return "";
}

function parseExamRows(text) {
  if (/OKUL\s+TYT\s+NET\s+L[İI]STES[İI]|TYT\s+sıralı|TYT\s+sirali/i.test(text)) {
    const capRows = parseCapTytRows(text);
    if (capRows.length) return capRows;
  }
  if (/OKUL\s+(AYT|S[ÖO]ZEL|SAYISAL)\s+NET\s+L[İI]STES[İI]|AYT\s+sıralı|AYT\s+sirali|S[ÖO]Z\s+sıralı|SAY\s+sıralı/i.test(text)) {
    const aytRows = parseCapAytRows(text);
    if (aytRows.length) return aytRows;
  }
  const genericRows = parseGenericYksRows(text);
  if (genericRows.length) return genericRows;
  const rawRows = mergeSplitExamRows(text.split(/\n+/).map((line) => line.trim()).filter(Boolean).map(splitExamCells));
  const header = rawRows.find((cells) => cells.some((cell) => /okul\s*no|ad\s*soyad|öğrenci|ogrenci|isim|puan|siralama|sıralama/i.test(cell)));
  const headerMap = header ? buildExamHeaderMap(header) : null;
  return rawRows.map((cells) => {
    const line = cells.join(", ");
    if (header && cells === header) return null;
    if (headerMap) return parseExamCellsWithHeader(cells, headerMap, line);
    return parseExamCellsDefault(cells, line);
  }).filter(Boolean);
}

function splitExamCells(line) {
  return line.split(/\t|,|;/).map((cell) => cell.trim()).filter(Boolean);
}

function mergeSplitExamRows(rows) {
  const merged = [];
  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    const joined = row.join(" ");
    const next = rows[index + 1] || [];
    const nextJoined = next.join(" ");
    if (/okul\s*no|ad\s*soyad|öğrenci|ogrenci|isim/i.test(joined) && !/puan|siralama|sıralama/i.test(joined) && /puan|siralama|sıralama|tyt|ayt/i.test(nextJoined)) {
      merged.push([...row, ...next]);
      index += 1;
    } else {
      merged.push(row);
    }
  }
  return merged;
}

function parseGenericYksRows(text) {
  const normalized = normalizeExamKey(text);
  const context = {
    brand: inferExamBrand(text),
    examKind: inferExamKindFromText(text),
    hasScoreTypes: /yks\s+(say|ea|soz|dil)|\bsay\s+puan|\bea\s+puan|\bsoz\s+puan|\bdil\s+puan/.test(normalized),
  };
  return text.split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => /^\d+\s+/.test(line) && line.split(/\s+/).filter((token) => /^-\d+(:[,.]\d+)$/.test(token)).length >= 6)
    .map((line) => parseGenericYksLine(line, context))
    .filter(Boolean);
}

function parseGenericYksLine(line, context = {}) {
  const tokens = line.split(/\s+/).filter(Boolean);
  const leading = tokens.shift();
  let schoolNo = leading || "";
  if (tokens[0] && /^\d{2,6}$/.test(tokens[0]) && tokens.length > 12) schoolNo = tokens.shift();
  let sourceClass = "";
  let firstScoreIndex = tokens.findIndex((token) => /^-\d+(:[,.]\d+)$/.test(token));
  const classIndex = tokens.findIndex((token, index) => index <= Math.max(firstScoreIndex, 0) && /^((9|10|11|12)[A-ZÇ]|MA|MF|TM|EA|SAY|S[ÖO]Z|D[İI]L)$/i.test(token));
  if (classIndex > -1 && classIndex <= firstScoreIndex) {
    sourceClass = tokens[classIndex];
    tokens.splice(classIndex, 1);
    firstScoreIndex = classIndex;
  }
  if (firstScoreIndex < 1) return null;
  const fullName = cleanExamStudentName(tokens.slice(0, firstScoreIndex).join(" "));
  const values = tokens.slice(firstScoreIndex).map(parseScore).filter((value) => value !== null);
  if (!fullName || values.length < 6) return null;
  const scoreTypes = context.hasScoreTypes ? extractGenericScoreTypes(values) : null;
  const subjectValues = scoreTypes ? values.slice(0, -Object.keys(scoreTypes).length * 2) : values;
  const details = genericDetails(subjectValues, context.examKind);
  const scores = scoresFromDetails(details);
  const best = bestScoreType(scoreTypes || {});
  return {
    schoolNo,
    fullName,
    sourceClass,
    examKind: context.examKind || "",
    section: best.section || "",
    scores,
    details,
    scoreTypes,
    totalScore: best.puan ?? values.find((value) => value >= 100 && value <= 600) ?? inferTotalScore(scores),
    ranking: best.siralama ?? values.filter((value) => value >= 1000).at(-1) ?? null,
    note: `${context.brand ? `${context.brand} - ` : ""}${line}`,
  };
}

function extractGenericScoreTypes(values) {
  if (values.length < 8) return null;
  const tail = values.slice(-8);
  const pairs = [
    ["say", "SAY", tail[0], tail[1]],
    ["ea", "EA", tail[2], tail[3]],
    ["soz", "S\u00d6Z", tail[4], tail[5]],
    ["dil", "D\u0130L", tail[6], tail[7]],
  ].filter(([, , puan, siralama]) => puan >= 100 && puan <= 600 && siralama >= 0);
  if (pairs.length < 2) return null;
  return Object.fromEntries(pairs.map(([key, label, puan, siralama]) => [key, { label, puan, siralama }]));
}

function genericDetails(values, examKind = "") {
  if (values.length >= 30 || examKind === "TYT") return capTytDetails(values);
  if (values.length >= 15 || examKind === "AYT") return capAytDetails(values, inferAytSection(values));
  const labels = ["turkce", "matematik", "fen", "sosyal", "ingilizce", "tyt", "ayt"];
  return Object.fromEntries(values.slice(0, labels.length).map((value, index) => [labels[index], { label: detailLabel(labels[index]), dogru: null, yanlis: null, net: value }]));
}

function parseCapTytRows(text) {
  return text.split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => /^\d+\s+\d+\s+/.test(line))
    .map(parseCapTytLine)
    .filter(Boolean);
}

function parseCapAytRows(text) {
  const rows = [];
  let section = "";
  text.split(/\n+/).forEach((rawLine) => {
    const line = rawLine.trim();
    if (/OKUL\s+S[ÖO]ZEL\s+NET|S[ÖO]Z\s+sıralı|S[ÖO]Z\s+sirali/i.test(line)) section = "soz";
    if (/OKUL\s+SAYISAL\s+NET|SAY\s+sıralı|SAY\s+sirali/i.test(line)) section = "say";
    if (!/^\d+\s+\d+\s+/.test(line)) return;
    const row = parseCapAytLine(line, section);
    if (row) rows.push(row);
  });
  return rows;
}

function parseCapTytLine(line) {
  const tokens = line.split(/\s+/).filter(Boolean);
  if (tokens.length < 12) return null;
  const order = tokens.shift();
  const schoolNo = tokens.shift();
  let sourceClass = "";
  let firstScoreIndex = tokens.findIndex((token) => /^-\d+(:[,.]\d+)$/.test(token));
  const classIndex = tokens.findIndex((token, index) => index <= Math.max(firstScoreIndex, 0) && /^((9|10|11|12)[A-ZÇ]|MA)$/i.test(token));
  if (classIndex > -1 && classIndex <= firstScoreIndex) {
    sourceClass = tokens[classIndex];
    tokens.splice(classIndex, 1);
    firstScoreIndex = classIndex;
  }
  if (firstScoreIndex < 1) return null;
  const fullName = cleanExamStudentName(tokens.slice(0, firstScoreIndex).join(" "));
  const numbers = tokens.slice(firstScoreIndex).map(parseScore).filter((value) => value !== null);
  if (!fullName || numbers.length < 8) return null;
  const afterIdentity = numbers;
  const totalNet = afterIdentity.at(-3) ?? null;
  const totalScore = afterIdentity.at(-2) ?? inferTotalScore({});
  const ranking = afterIdentity.at(-1) ?? null;
  const details = capTytDetails(afterIdentity);
  const grouped = groupTytDetails(details);
  return {
    schoolNo,
    fullName,
    sourceClass,
    scores: {
      turkce: grouped.turkce.net,
      sosyal: grouped.sosyal.net,
      matematik: grouped.matematik.net,
      fen: grouped.fen.net,
      tyt: totalNet,
    },
    details,
    totalScore,
    ranking,
    note: `Sıra ${order} - ${line}`,
  };
}

function parseCapAytLine(line, section = "") {
  const tokens = line.split(/\s+/).filter(Boolean);
  if (tokens.length < 10) return null;
  const order = tokens.shift();
  const schoolNo = tokens.shift();
  let sourceClass = "";
  let firstScoreIndex = tokens.findIndex((token) => /^-\d+(:[,.]\d+)$/.test(token));
  const classIndex = tokens.findIndex((token, index) => index <= Math.max(firstScoreIndex, 0) && /^((9|10|11|12)[A-ZÇ]|MA)$/i.test(token));
  if (classIndex > -1 && classIndex <= firstScoreIndex) {
    sourceClass = tokens[classIndex];
    tokens.splice(classIndex, 1);
    firstScoreIndex = classIndex;
  }
  if (firstScoreIndex < 1) return null;
  const fullName = cleanExamStudentName(tokens.slice(0, firstScoreIndex).join(" "));
  const values = tokens.slice(firstScoreIndex).map(parseScore).filter((value) => value !== null);
  if (!fullName || values.length < 6) return null;
  const scoreTypes = extractAytScoreTypes(values);
  const subjectValues = scoreTypes ? values.slice(0, -6) : values;
  const inferredSection = section || inferAytSection(subjectValues);
  const details = capAytDetails(subjectValues, inferredSection);
  const grouped = groupAytDetails(details);
  const totalNet = details.toplam.net ?? grouped.edebiyat.net ?? grouped.matematik.net ?? null;
  const preferredScore = pickAytScore(scoreTypes, inferredSection);
  return {
    schoolNo,
    fullName,
    sourceClass,
    examKind: "AYT",
    section: inferredSection,
    scores: {
      turkce: grouped.edebiyat.net,
      sosyal: grouped.sosyal.net,
      matematik: grouped.matematik.net,
      fen: grouped.fen.net,
      ayt: totalNet,
    },
    details,
    scoreTypes,
    totalScore: preferredScore.puan ?? inferTotalScore(grouped),
    ranking: preferredScore.siralama ?? null,
    note: `Sıra ${order} - ${line}`,
  };
}

function extractAytScoreTypes(values) {
  if (values.length < 12) return null;
  const tail = values.slice(-6);
  const hasThreePairs = tail.filter((_, index) => index % 2 === 0).every((value) => value >= 100 && value <= 600)
    && tail.filter((_, index) => index % 2 === 1).every((value) => value >= 0);
  if (!hasThreePairs) return null;
  return {
    soz: { label: "SÖZ", puan: tail[0], siralama: tail[1] },
    say: { label: "SAY", puan: tail[2], siralama: tail[3] },
    ea: { label: "EA", puan: tail[4], siralama: tail[5] },
  };
}

function inferAytSection(values) {
  if (values.length <= 18) return "say";
  if (values.length >= 27) return "soz";
  return "";
}

function pickAytScore(scoreTypes, section) {
  if (!scoreTypes) return null;
  if (section && scoreTypes[section]) return scoreTypes[section];
  return [scoreTypes.say, scoreTypes.ea, scoreTypes.soz].filter(Boolean).sort((a, b) => (b.puan || 0) - (a.puan || 0))[0] || null;
}

function capAytDetails(values, section = "") {
  const subjectSets = {
    soz: [
      ["turkce", "Türkçe", 0],
      ["edebiyat", "Türk Dili ve Edebiyatı", 3],
      ["tarih1", "Tarih-1", 6],
      ["cografya1", "Coğrafya-1", 9],
      ["tarih2", "Tarih-2", 12],
      ["cografya2", "Coğrafya-2", 15],
      ["felsefe", "Felsefe Grubu", 18],
      ["din", "Din Kültürü", 21],
      ["felsefeSecmeli", "Seçmeli Felsefe/Din", 24],
      ["toplam", "Toplam AYT SÖZ", 27],
    ],
    say: [
      ["matematik2", "Matematik-2", 0],
      ["geometri", "Geometri", 3],
      ["fizik", "Fizik", 6],
      ["kimya", "Kimya", 9],
      ["biyoloji", "Biyoloji", 12],
      ["toplam", "Toplam AYT SAY", 15],
    ],
  };
  const subjects = subjectSets[section] || (values.length <= 18 ? subjectSets.say : subjectSets.soz);
  return Object.fromEntries(subjects
    .filter(([, , index]) => values[index] !== undefined || values[index + 1] !== undefined || values[index + 2] !== undefined)
    .map(([key, label, index]) => [key, detailTriplet(label, values, index)]));
}

function groupAytDetails(details) {
  return {
    edebiyat: sumDetailGroup([details.turkce, details.edebiyat], "Edebiyat"),
    sosyal: sumDetailGroup([details.tarih1, details.cografya1, details.tarih2, details.cografya2, details.felsefe, details.din, details.felsefeSecmeli], "Sosyal"),
    matematik: sumDetailGroup([details.matematik, details.matematik2, details.geometri], "Matematik"),
    fen: sumDetailGroup([details.fizik, details.kimya, details.biyoloji], "Fen"),
  };
}

function capTytDetails(values) {
  const subjects = [
    ["turkce", "Türkçe", 0],
    ["tarih", "Tarih-1", 3],
    ["cografya", "Coğrafya-1", 6],
    ["felsefe", "Felsefe", 9],
    ["din", "Din Kültürü", 12],
    ["matematik1", "Matematik-1", 15],
    ["geometri", "Geometri", 18],
    ["fizik", "Fizik", 21],
    ["kimya", "Kimya", 24],
    ["biyoloji", "Biyoloji", 27],
    ["toplam", "Toplam TYT", 30],
  ];
  return Object.fromEntries(subjects.map(([key, label, index]) => [key, detailTriplet(label, values, index)]));
}

function detailTriplet(label, values, index) {
  return {
    label,
    dogru: values[index] ?? null,
    yanlis: values[index + 1] ?? null,
    net: values[index + 2] ?? null,
  };
}

function groupTytDetails(details) {
  return {
    turkce: sumDetailGroup([details.turkce], "Türkçe"),
    sosyal: sumDetailGroup([details.tarih, details.cografya, details.felsefe, details.din], "Sosyal"),
    matematik: sumDetailGroup([details.matematik1, details.geometri], "Matematik"),
    fen: sumDetailGroup([details.fizik, details.kimya, details.biyoloji], "Fen"),
  };
}

function sumDetailGroup(items, label) {
  return {
    label,
    dogru: sumNumbers(items.map((item) => item.dogru)),
    yanlis: sumNumbers(items.map((item) => item.yanlis)),
    net: sumNumbers(items.map((item) => item.net)),
  };
}

function sumNumbers(values) {
  const valid = values.filter((value) => typeof value === "number" && !Number.isNaN(value));
  return valid.length ? Number(valid.reduce((sum, value) => sum + value, 0).toFixed(2)) : null;
}

function cleanExamStudentName(value) {
  return String(value || "").replace(/\*/g, "").replace(/\s+/g, " ").trim();
}

function parseExamCellsDefault(cells, line) {
  if (/okul\s*no|ad\s*soyad|puan|siralama|sıralama/i.test(line) && cells.length > 2) return null;
  const scores = {};
  const labels = ["turkce", "matematik", "fen", "sosyal", "ingilizce", "tyt", "ayt"];
  cells.forEach((cell, index) => {
    const number = parseScore(cell);
    if (index >= 2 && index < 9 && number !== null) scores[labels[index - 2]] = number;
  });
  const details = detailsFromScores(scores);
  const joined = cells.join(" ");
  return {
    schoolNo: cells[0] || "",
    fullName: cells[1] || "",
    scores,
    details,
    totalScore: parseScore(cells.find((cell, index) => index >= 9 && parseScore(cell) !== null)) ?? inferTotalScore(scores),
    ranking: parseRanking(joined),
    note: line,
  };
}

function buildExamHeaderMap(header) {
  const map = { details: {}, scoreTypes: {} };
  header.forEach((cell, index) => {
    const key = normalizeExamKey(cell);
    if (/okul.*(no|numara)|^no$/.test(key)) map.schoolNo = index;
    else if (/ad.*soyad|ogrenci|isim/.test(key)) map.fullName = index;
    else if (scoreTypeFromHeader(key) && /puan|score/.test(key)) {
      const type = scoreTypeFromHeader(key);
      map.scoreTypes[type] = { ...(map.scoreTypes[type] || {}), puan: index };
    }
    else if (scoreTypeFromHeader(key) && /siralama|sirasi|basari|derece|rank/.test(key)) {
      const type = scoreTypeFromHeader(key);
      map.scoreTypes[type] = { ...(map.scoreTypes[type] || {}), siralama: index };
    }
    else if (examSubjectFromHeader(key) && examMetricFromHeader(key)) {
      const subject = examSubjectFromHeader(key);
      const metric = examMetricFromHeader(key);
      map.details[subject] = { ...(map.details[subject] || {}), [metric]: index };
    }
    else if (/turkce|turk dili|edebiyat/.test(key)) map.turkce = index;
    else if (/matematik|geometri/.test(key)) map.matematik = index;
    else if (/fen|fizik|kimya|biyoloji/.test(key)) map.fen = index;
    else if (/sosyal|tarih|cografya|felsefe|din/.test(key)) map.sosyal = index;
    else if (/ingilizce|yabanci dil|dil|ydt/.test(key)) map.ingilizce = index;
    else if (/tyt/.test(key)) map.tyt = index;
    else if (/ayt|yks/.test(key)) map.ayt = index;
    else if (/puan|score/.test(key)) map.totalScore = index;
    else if (/siralama|sirasi|basari/.test(key)) map.ranking = index;
  });
  return map;
}

function parseExamCellsWithHeader(cells, map, line) {
  const details = detailsFromHeaderMap(cells, map);
  const scores = scoresFromDetails(details);
  ["turkce", "matematik", "fen", "sosyal", "ingilizce", "tyt", "ayt"].forEach((key) => {
    const value = parseScore(cells[map[key]]);
    if (value !== null) scores[key] = value;
  });
  const scoreTypes = scoreTypesFromHeaderMap(cells, map);
  const bestType = bestScoreType(scoreTypes);
  return {
    schoolNo: cells[map.schoolNo] || "",
    fullName: cells[map.fullName] || "",
    examKind: inferExamKindFromText(line),
    section: bestType.section || "",
    scores,
    details: Object.keys(details).length ? details : detailsFromScores(scores),
    scoreTypes: Object.keys(scoreTypes).length ? scoreTypes : null,
    totalScore: parseScore(cells[map.totalScore]) ?? bestType.puan ?? inferTotalScore(scores),
    ranking: parseScore(cells[map.ranking]) || bestType.siralama || parseRanking(line),
    note: line,
  };
}

function examSubjectFromHeader(key) {
  if (/toplam|total/.test(key)) return "toplam";
  if (/edebiyat|tdiliveedb|turk dili ve edebiyat/.test(key)) return "edebiyat";
  if (/turkce|t[üu]rkce|turk dili/.test(key)) return "turkce";
  if (/matematik\s*2|mat\s*2|ayt matematik/.test(key)) return "matematik2";
  if (/matematik|mat\b/.test(key)) return "matematik";
  if (/geometri|geo/.test(key)) return "geometri";
  if (/fizik/.test(key)) return "fizik";
  if (/kimya/.test(key)) return "kimya";
  if (/biyoloji|bio/.test(key)) return "biyoloji";
  if (/tarih\s*2/.test(key)) return "tarih2";
  if (/tarih/.test(key)) return "tarih";
  if (/cografya\s*2/.test(key)) return "cografya2";
  if (/cografya|co[ğg]rafya/.test(key)) return "cografya";
  if (/felsefe/.test(key)) return "felsefe";
  if (/din/.test(key)) return "din";
  if (/sosyal/.test(key)) return "sosyal";
  if (/fen/.test(key)) return "fen";
  if (/ingilizce|yabanci dil|ydt|dil/.test(key)) return "ingilizce";
  if (/\btyt\b/.test(key)) return "tyt";
  if (/\bayt\b/.test(key)) return "ayt";
  return "";
}

function examMetricFromHeader(key) {
  const parts = key.split(/\s+/).filter(Boolean);
  if (/dogru/.test(key) || parts.includes("d")) return "dogru";
  if (/yanlis/.test(key) || parts.includes("y")) return "yanlis";
  if (/net/.test(key) || parts.includes("n")) return "net";
  return "";
}

function scoreTypeFromHeader(key) {
  if (/\bdil\b|\bydt\b|yks dil/.test(key)) return "dil";
  if (/\bsay\b|sayisal|yks say/.test(key)) return "say";
  if (/\bea\b|esit agirlik|yks ea/.test(key)) return "ea";
  if (/\bsoz\b|sozel|yks soz/.test(key)) return "soz";
  return "";
}

function detailLabel(key) {
  const labels = {
    turkce: "T\u00fcrk\u00e7e",
    edebiyat: "T\u00fcrk Dili ve Edebiyat\u0131",
    tarih: "Tarih",
    tarih2: "Tarih-2",
    cografya: "Co\u011frafya",
    cografya2: "Co\u011frafya-2",
    felsefe: "Felsefe",
    din: "Din K\u00fclt\u00fcr\u00fc",
    matematik: "Matematik",
    matematik2: "Matematik-2",
    geometri: "Geometri",
    fizik: "Fizik",
    kimya: "Kimya",
    biyoloji: "Biyoloji",
    sosyal: "Sosyal",
    fen: "Fen",
    ingilizce: "Yabanc\u0131 Dil",
    tyt: "TYT",
    ayt: "AYT",
    toplam: "Toplam",
  };
  return labels[key] || key;
}

function detailsFromHeaderMap(cells, map) {
  return Object.fromEntries(Object.entries(map.details || {}).map(([subject, metrics]) => {
    const detail = {
      label: detailLabel(subject),
      dogru: parseScore(cells[metrics.dogru]),
      yanlis: parseScore(cells[metrics.yanlis]),
      net: parseScore(cells[metrics.net]),
    };
    return [subject, detail];
  }).filter(([, detail]) => detail.dogru !== null || detail.yanlis !== null || detail.net !== null));
}

function scoresFromDetails(details) {
  const grouped = {
    turkce: sumDetailGroup([details.turkce, details.edebiyat], "Türkçe/Edebiyat").net,
    sosyal: sumDetailGroup([details.sosyal, details.tarih, details.tarih2, details.cografya, details.cografya2, details.felsefe, details.din], "Sosyal").net,
    matematik: sumDetailGroup([details.matematik, details.matematik2, details.geometri], "Matematik").net,
    fen: sumDetailGroup([details.fen, details.fizik, details.kimya, details.biyoloji], "Fen").net,
    ingilizce: details.ingilizce.net ?? null,
    tyt: details.tyt.net ?? null,
    ayt: details.ayt.net ?? details.toplam.net ?? null,
  };
  return Object.fromEntries(Object.entries(grouped).filter(([, value]) => value !== null));
}

function scoreTypesFromHeaderMap(cells, map) {
  return Object.fromEntries(Object.entries(map.scoreTypes || {}).map(([key, indexes]) => {
    const labels = { say: "SAY", ea: "EA", soz: "S\u00d6Z", dil: "D\u0130L" };
    return [key, { label: labels[key] || key.toUpperCase(), puan: parseScore(cells[indexes.puan]), siralama: parseScore(cells[indexes.siralama]) }];
  }).filter(([, item]) => item.puan !== null || item.siralama !== null));
}

function bestScoreType(scoreTypes = {}) {
  return Object.entries(scoreTypes)
    .map(([section, item]) => ({ section, ...item }))
    .filter((item) => item.puan !== null || item.siralama !== null)
    .sort((a, b) => (b.puan || 0) - (a.puan || 0))[0] || null;
}

function detailsFromScores(scores) {
  const labels = {
    turkce: "Türkçe",
    sosyal: "Sosyal",
    matematik: "Matematik",
    fen: "Fen",
    ingilizce: "İngilizce",
    tyt: "TYT",
    ayt: "AYT",
  };
  return Object.fromEntries(Object.entries(scores).map(([key, net]) => [key, { label: labels[key] || key, dogru: null, yanlis: null, net }]));
}

function matchStudentByIdentity(data = {}, options = {}) {
  const no = normalizeKey(data.schoolNo || "");
  const name = normalizeKey(data.fullName || "");
  const byNo = state.students.find((student) => no && no !== "0" && normalizeKey(student.schoolNo || "") === no);
  if (byNo || (no && options.strictNumber)) return byNo || null;
  return state.students.find((student) => name && normalizeKey(student.fullName || "").includes(name))
    || state.students.find((student) => name && name.includes(normalizeKey(student.fullName || "")))
    || null;
}

function matchStudentFromExamRow(row) {
  return matchStudentByIdentity(row, { strictNumber: Boolean(row.schoolNo) });
}

function ensureStudentFromExamRow(row) {
  const existing = matchStudentFromExamRow(row);
  if (existing) return { student: existing, wasCreated: false };
  if (!row.fullName && !row.schoolNo) return { student: null, wasCreated: false };
  const student = {
    id: crypto.randomUUID(),
    className: selectedClass,
    fullName: row.fullName || `No ${escapeHtml(row.schoolNo)}`,
    schoolNo: row.schoolNo && row.schoolNo !== "0" ? row.schoolNo : "",
    academicStatus: "Sınavla eklendi",
    guidanceNote: row.sourceClass ? `Sınav dosyasındaki sınıf bilgisi: ${escapeHtml(row.sourceClass)}` : "Sınav dosyasından otomatik oluşturuldu.",
    risk: {},
    protective: [],
  };
  state.students.push(student);
  selectedStudentId = student.id;
  return { student, wasCreated: true };
}

function parseScore(value) {
  const match = String(value || "").replace(",", ".").match(/\d+(\.\d+)/);
  return match ? Number(match[0]) : null;
}

function parseRanking(value) {
  const numbers = String(value || "").match(/\d{4,}/g);
  return numbers ? Number(numbers.at(-1)) : null;
}

function normalizeExamKey(value) {
  return String(value || "")
    .toLocaleLowerCase("tr-TR")
    .split("\u0131").join("i")
    .split("\u0130").join("i")
    .replace(/ı|İ|Ãƒâ€Ã‚±|Ãƒâ€Ã‚°/g, "i")
    .replace(/ğ|Ã„Å¾|Ãƒâ€Ã…¸|Ãƒâ€Ã…¾/g, "g")
    .replace(/ü|Ü|ÃƒÆ’Ã‚¼|ÃƒÆ’Ã…â€œ/g, "u")
    .replace(/ş|Ã…Å¾|Ãƒâ€¦Ã…¸|Ãƒâ€¦Ã…¾/g, "s")
    .replace(/ö|Ö|ÃƒÆ’Ã‚¶|ÃƒÆ’Ã¢â‚¬â€œ/g, "o")
    .replace(/ç|Ç|ÃƒÆ’Ã‚§|ÃƒÆ’Ã¢â‚¬¡/g, "c")
    .replace(/s.ralama/g, "siralama")
    .replace(/or.j.nal/g, "orijinal")
    .replace(/ozdeb.r/g, "ozdebir")
    .replace(/b.lg./g, "bilgi")
    .replace(/[\u0131\u0130]/g, "i")
    .replace(/[\u011f\u011e]/g, "g")
    .replace(/[\u00fc\u00dc]/g, "u")
    .replace(/[\u015f\u015e]/g, "s")
    .replace(/[\u00f6\u00d6]/g, "o")
    .replace(/[\u00e7\u00c7]/g, "c")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function inferTotalScore(scores) {
  const values = Object.values(scores).filter((value) => typeof value === "number");
  if (!values.length) return null;
  return Math.round(values.reduce((sum, value) => sum + value, 0) * 4);
}

function examStudentPanel(student, analysis) {
  const records = examRecordsForStudent(student.id);
  const meetings = state.academicMeetings.filter((meeting) => meeting.studentId === student.id).slice().reverse();
  return `
    <div class="academic-grid">
      <section class="academic-card">
        <h4>Durum özeti</h4>
        <p><strong>${analysis.area}</strong> eğilimi görünüyor.</p>
        <p>${analysis.summary}</p>
      </section>
      <section class="academic-card">
        <h4>Deneme eğilimi</h4>
        <p>${escapeHtml(analysis.trend.label || "Trend için sınav kaydı bekleniyor.")}</p>
        <p>${analysis.focus.teacher || ""}</p>
      </section>
      <section class="academic-card">
        <h4>Okul dönem notu</h4>
        ${schoolGradeHtml(records)}
      </section>
      <section class="academic-card">
        <h4>Meslek yatkınlığı</h4>
        <ul>${analysis.careers.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section class="academic-card">
        <h4>Üniversite hedef bandı</h4>
        <ul>${analysis.universities.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <p class="muted">Kesin tercih için güncel YÖK Atlas ve ÖSYM kılavuzu kontrol edilmeli.</p>
      </section>
      <section class="academic-card">
        <h4>Öğretmen / rehberlik önerisi</h4>
        <p>${analysis.teacherAdvice}</p>
        <p>${analysis.guidanceAdvice}</p>
      </section>
      <section class="academic-card field-wide">
        <h4>Gerçekçi çalışma önceliği</h4>
        <ul>${analysis.studySteps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section class="academic-card field-wide">
        <h4>Konu öncelikleri</h4>
        ${topicPriorityHtml(student, records, analysis)}
      </section>
      <section class="academic-card field-wide">
        <h4>Haftalık çalışma planı</h4>
        ${weeklyStudyPlanHtml(student, records, analysis)}
      </section>
      <section class="academic-card field-wide">
        <h4>Öğrenci sınav grafikleri</h4>
        ${examChartsHtml(records)}
      </section>
      <section class="academic-card field-wide">
        <h4>Son sınav ders dökümü</h4>
        ${examDetailTable(records[0])}
      </section>
      <section class="academic-card field-wide">
        <h4>Derse göre analiz</h4>
        <ul>${analysis.subjectAdvice.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    </div>
    <form class="meeting-form" ${uiAction("submit", (event, element) => { saveAcademicMeeting(event, (student.id)); })}>
      <label>Konuşuldu mu
        <select name="talked"><option>Hayır</option><option>Evet</option><option>Planlandı</option></select>
      </label>
      <label>Görüşme tarihi<input name="date" type="date" value="${new Date().toISOString().slice(0, 10)}" /></label>
      <label>Görüşen kişi<input name="person" placeholder="Öğretmen / rehberlikçi" /></label>
      <label class="field-wide">Sonuç / geri bildirim<textarea name="result" rows="3" placeholder="Öğrenciyle ne konuşuldu, hangi aksiyon alındı"></textarea></label>
      <button class="primary" type="submit">Görüşme kaydet</button>
    </form>
    <div class="meeting-list">
      ${meetings.length ? meetings.map((meeting) => `<div><strong>${escapeHtml(meeting.talked)}</strong> · ${escapeHtml(meeting.date || "-")} · ${escapeHtml(meeting.person || "-")}<p>${escapeHtml(meeting.result || "-")}</p></div>`).join("") : empty("Henüz akademik görüşme kaydı yok.")}
    </div>
    <div class="table-scroll">
    <table class="table compact data-table student-exam-table">
      <thead><tr><th>Tarih</th><th>Kaynak</th><th>Sınav</th><th>Türkçe</th><th>Matematik</th><th>Fen</th><th>Sosyal</th><th>Puan</th><th>Sıralama</th></tr></thead>
      <tbody>${records.length ? records.map((record) => `<tr><td>${escapeHtml(record.date)}</td><td>${escapeHtml(record.source)}</td><td>${escapeHtml(record.examName)}</td><td>${formatNet(record, "turkce")}</td><td>${formatNet(record, "matematik")}</td><td>${formatNet(record, "fen")}</td><td>${formatNet(record, "sosyal")}</td><td>${escapeHtml(record.totalScore || "-")}</td><td>${escapeHtml(record.ranking || "-")}</td></tr>`).join("") : `<tr><td colspan="9">Bu öğrenci için sınav kaydı yok.</td></tr>`}</tbody>
    </table>
    </div>
  `;
}

function examDetailTable(record) {
  if (!record) return `<p class="muted">Bu öğrenci için henüz sınav kaydı yok.</p>`;
  if (!record.details) return `<p class="muted">Bu sınavda ders bazlı doğru/yanlış/net detayı yok.</p>`;
  const rows = orderedExamDetails(record).map((detail) => `
    <tr>
      <td>${escapeHtml(detail.label)}</td>
      <td>${escapeHtml(detail.dogru ?? "-")}</td>
      <td>${escapeHtml(detail.yanlis ?? "-")}</td>
      <td>${escapeHtml(detail.net ?? "-")}</td>
    </tr>
  `).join("");
  return `${examScoreTypesTable(record)}<table class="table compact exam-detail-table"><thead><tr><th>Ders</th><th>Doğru</th><th>Yanlış</th><th>Net</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function schoolGradeHtml(records) {
  const schoolRecords = records.filter((record) => isSchoolGradeSource(record.source));
  if (!schoolRecords.length) return `<p class="muted">Okul notu için Yazılı 1-2, Performans 1-2 veya Proje kaydı girilmeli. Deneme bu hesaba katılmaz.</p>`;
  const subjects = schoolSubjectGradeRows(schoolRecords);
  const fallbackValues = schoolRecords.map((record) => Number(record.totalScore)).filter((value) => Number.isFinite(value));
  const averageValue = subjects.length ? average(subjects.map((item) => item.average)) : average(fallbackValues);
  const missing = ["Okul Yazılısı 1", "Okul Yazılısı 2"].filter((source) => !schoolRecords.some((record) => record.source === source));
  const rows = subjects.map((item) => `
    <tr>
      <td>${escapeHtml(cleanDisplay(item.subject))}</td>
      <td>${item.average.toFixed(1)}</td>
      <td>${escapeHtml(item.count)}</td>
      <td>${item.sources.map(cleanDisplay).join(", ")}</td>
    </tr>
  `).join("");
  return `
    <div class="school-grade-box">
      <strong>${averageValue == null ? "-" : averageValue.toFixed(1)}</strong>
      <span>${schoolRecords.length} okul notu kaydı · Deneme hariç</span>
      <p>${missing.length ? `Dönem puanı için eksik ana yazılı: ${missing.join(", ")}.` : "Yazılı, performans ve proje puanları ders bazında ortalamaya katılıyor."}</p>
      ${rows ? `<div class="table-scroll mini-grade-scroll"><table class="table compact mini-grade-table"><thead><tr><th>Ders</th><th>Ortalama</th><th>Kayıt</th><th>Kaynak</th></tr></thead><tbody>${rows}</tbody></table></div>` : `<p>Toplu dosyada ders sütunları yoksa genel puan ortalaması kullanılır.</p>`}
    </div>
  `;
}

function schoolSubjectGradeRows(records) {
  const subjectMap = new Map();
  records.forEach((record) => {
    orderedExamDetails(record).forEach((detail) => {
      const subject = cleanDisplay(detail.label || detail.subject || "Ders");
      if (!subject || /^(tyt|ayt|toplam|puan|sıralama|siralama)$/i.test(normalizeKey(subject))) return;
      const value = Number(detail.net ?? detail.dogru ?? detail.score);
      if (!Number.isFinite(value)) return;
      const current = subjectMap.get(subject) || { subject, values: [], sources: [] };
      current.values.push(value);
      current.sources.push(record.source || "Okul notu");
      subjectMap.set(subject, current);
    });
  });
  return [...subjectMap.values()]
    .map((item) => ({
      subject: item.subject,
      average: average(item.values),
      count: item.values.length,
      sources: [...new Set(item.sources)],
    }))
    .filter((item) => item.average != null)
    .sort((a, b) => a.subject.localeCompare(b.subject, "tr"));
}

function isSchoolGradeSource(source) {
  const key = normalizeExamKey(source);
  return /okul|yazili|performans|proje/.test(key);
}

function examChartsHtml(records) {
  const chronological = records.slice().reverse().slice(-6);
  if (!chronological.length) return `<p class="muted">Grafik i\u00e7in \u00f6nce s\u0131nav sonucu girilmeli.</p>`;
  const scoreSeries = chronological.map((record) => ({ label: shortExamLabel(record), value: Number(record.totalScore) || null }));
  const rankSeries = chronological.map((record) => ({ label: shortExamLabel(record), value: Number(record.ranking) || null }));
  return `
    <div class="exam-charts">
      ${lineChart("Puan geli\u015fimi", scoreSeries, "score")}
      ${lineChart("S\u0131ralama geli\u015fimi", rankSeries, "rank")}
      ${subjectBars(chronological.at(-1))}
    </div>
  `;
}

function classExamChartsHtml(records, students = []) {
  if (!records.length) return `<div class="empty">Bu sınıf için grafik oluşturmak adına önce sınav sonucu girilmeli.</div>`;
  const groups = classExamGroups(records).slice(-6);
  const scoreSeries = groups.map((group) => ({ label: group.label, value: average(group.records.map((record) => Number(record.totalScore))) }));
  const rankSeries = groups.map((group) => ({ label: group.label, value: average(group.records.map((record) => Number(record.ranking))) }));
  const latestGroup = groups.at(-1) || { records };
  const latestSubjects = subjectAverages(latestGroup.records);
  const coveredStudents = new Set(records.map((record) => record.studentId)).size;
  const scoreAverage = average(records.map((record) => Number(record.totalScore)));
  return `
    <div class="exam-charts class-exam-charts">
      ${lineChart("Sınıf puan ortalaması", scoreSeries, "score")}
      ${lineChart("Sınıf sıralama ortalaması", rankSeries, "rank")}
      ${subjectAverageBars(latestSubjects, shortExamLabel(latestGroup.records[0]))}
    </div>
    <div class="class-chart-summary">
      <div><strong>${records.length}</strong><span>Sınav kaydı</span></div>
      <div><strong>${coveredStudents}/${students.length || coveredStudents}</strong><span>Öğrenci kapsamı</span></div>
      <div><strong>${scoreAverage == null ? "-" : scoreAverage.toFixed(1)}</strong><span>Genel puan ort.</span></div>
      <div><strong>${weakestClassSubject(latestSubjects)}</strong><span>Toplu destek alanı</span></div>
    </div>
    ${classTopicPrioritiesHtml(records)}
  `;
}

function classExamGroups(records) {
  const map = new Map();
  records
    .slice()
    .sort((a, b) => `${escapeHtml(a.date || "")}${escapeHtml(a.examName || "")}`.localeCompare(`${b.date || ""}${b.examName || ""}`))
    .forEach((record) => {
      const key = `${escapeHtml(record.date || "")}|${escapeHtml(record.examName || record.source || "Sınav")}`;
      if (!map.has(key)) map.set(key, { label: shortExamLabel(record), records: [] });
      map.get(key).records.push(record);
    });
  return [...map.values()];
}

function average(values) {
  const valid = values.filter((value) => typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value));
  if (!valid.length) return null;
  return valid.reduce((sum, value) => sum + value, 0) / valid.length;
}

function subjectAverages(records) {
  return [
    ["T\u00fcrk\u00e7e", "turkce"],
    ["Matematik", "matematik"],
    ["Fen", "fen"],
    ["Sosyal", "sosyal"],
    ["Dil", "ingilizce"],
  ].map(([label, key]) => ({
    label,
    value: average(records.map((record) => Number(formatNet(record, key)))),
  })).filter((item) => typeof item.value === "number");
}

function subjectAverageBars(subjects, label = "Son sınav") {
  if (!subjects.length) return `<div class="chart-box"><strong>Ders ortalamaları</strong><p class="muted">Sınıf ders neti bulunamadı.</p></div>`;
  const max = Math.max(...subjects.map((item) => Math.max(item.value, 1)));
  return `
    <div class="chart-box">
      <div class="chart-head"><strong>Sınıf ders net ort.</strong><span>${escapeHtml(label)}</span></div>
      <div class="bar-chart">
        ${subjects.map((item) => `
          <div class="bar-row">
            <span>${escapeHtml(item.label)}</span>
            <div><i style="width:${Math.max(4, (item.value / max) * 100)}%"></i></div>
            <b>${item.value.toFixed(1)}</b>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function weakestClassSubject(subjects) {
  if (!subjects.length) return "-";
  return subjects.slice().sort((a, b) => a.value - b.value)[0].label;
}

function classTopicPrioritiesHtml(records) {
  const topics = records.flatMap((record) => record.topics || []);
  if (!topics.length) {
    const latest = records.slice().sort((a, b) => String(b.date).localeCompare(String(a.date)))[0];
    const fallback = orderedExamDetails(latest || {})
      .filter((detail) => typeof detail.net === "number")
      .sort((a, b) => a.net - b.net)
      .slice(0, 4)
      .map((detail) => ({ topic: `${escapeHtml(detail.label)} kazanım tekrarı`, note: `${escapeHtml(detail.net)} net son kayıt` }));
    if (!fallback.length) return "";
    return `<div class="class-topic-panel"><h4>Sınıf konu odağı</h4><div class="topic-chip-grid">${fallback.map((item) => `<span><strong>${escapeHtml(item.topic)}</strong><small>${escapeHtml(item.note)}</small></span>`).join("")}</div></div>`;
  }
  const grouped = new Map();
  topics.forEach((topic) => {
    const subject = normalizeSubjectKey(topic.subject) || subjectKeyFromLabel(topic.subject);
    const key = `${subject}|${normalizeKey(topic.topic)}`;
    const current = grouped.get(key) || { subject: subjectLabel(subject), topic: cleanDisplay(topic.topic), wrong: 0, net: 0, count: 0 };
    current.wrong += Number(topic.yanlis) || 0;
    current.net += typeof topic.net === "number" ? topic.net : calculateNet(topic.dogru, topic.yanlis) || 0;
    current.count += 1;
    grouped.set(key, current);
  });
  const priorities = [...grouped.values()]
    .map((item) => ({ ...item, avgNet: item.net / Math.max(item.count, 1) }))
    .sort((a, b) => b.wrong - a.wrong || a.avgNet - b.avgNet)
    .slice(0, 6);
  return `
    <div class="class-topic-panel">
      <h4>Sınıf konu odağı</h4>
      <div class="topic-chip-grid">
        ${priorities.map((item) => `<span><strong>${escapeHtml(item.topic)}</strong><small>${escapeHtml(item.subject)} - ${escapeHtml(item.wrong)} yanlış, ${item.avgNet.toFixed(1)} ort. net</small></span>`).join("")}
      </div>
    </div>
  `;
}

function lineChart(title, series, mode = "score") {
  const valid = series.filter((item) => typeof item.value === "number" && !Number.isNaN(item.value));
  if (valid.length < 2) return `<div class="chart-box"><strong>${escapeHtml(title)}</strong><p class="muted">Trend i\u00e7in en az iki s\u0131nav gerekli.</p></div>`;
  const width = 360;
  const height = 160;
  const padding = 24;
  const values = valid.map((item) => item.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = valid.map((item, index) => {
    const x = padding + (index * (width - padding * 2)) / Math.max(valid.length - 1, 1);
    const normalized = (item.value - min) / range;
    const y = mode === "rank"
      ? padding + normalized * (height - padding * 2)
      : height - padding - normalized * (height - padding * 2);
    return { ...item, x, y };
  });
  const path = points.map((point, index) => `${index ? "L" : "M"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  const delta = values.at(-1) - values[0];
  const trendText = mode === "rank"
    ? (delta < 0 ? `${Math.abs(delta).toLocaleString("tr-TR")} s\u0131ra iyile\u015fme` : `${delta.toLocaleString("tr-TR")} s\u0131ra gerileme`)
    : (delta >= 0 ? `+${delta.toFixed(1)} puan` : `${delta.toFixed(1)} puan`);
  return `
    <div class="chart-box">
      <div class="chart-head"><strong>${escapeHtml(title)}</strong><span>${trendText}</span></div>
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(title)}">
        <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" class="chart-axis"></line>
        <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" class="chart-axis"></line>
        <path d="${path}" class="chart-line"></path>
        ${points.map((point) => `<circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="4" class="chart-dot"><title>${escapeHtml(point.label)}: ${point.value.toLocaleString("tr-TR")}</title></circle>`).join("")}
      </svg>
      <div class="chart-labels"><span>${escapeHtml(valid[0].label)}</span><span>${valid.at(-1).label}</span></div>
    </div>
  `;
}

function subjectBars(record) {
  if (!record) return "";
  const subjects = [
    ["T\u00fcrk\u00e7e", Number(formatNet(record, "turkce"))],
    ["Matematik", Number(formatNet(record, "matematik"))],
    ["Fen", Number(formatNet(record, "fen"))],
    ["Sosyal", Number(formatNet(record, "sosyal"))],
    ["Dil", Number(formatNet(record, "ingilizce"))],
  ].filter(([, value]) => typeof value === "number" && !Number.isNaN(value));
  if (!subjects.length) return `<div class="chart-box"><strong>Ders netleri</strong><p class="muted">Son s\u0131navda ders neti yok.</p></div>`;
  const max = Math.max(...subjects.map(([, value]) => Math.max(value, 1)));
  return `
    <div class="chart-box">
      <div class="chart-head"><strong>Son s\u0131nav ders netleri</strong><span>${shortExamLabel(record)}</span></div>
      <div class="bar-chart">
        ${subjects.map(([label, value]) => `
          <div class="bar-row">
            <span>${escapeHtml(label)}</span>
            <div><i style="width:${Math.max(4, (value / max) * 100)}%"></i></div>
            <b>${escapeHtml(value)}</b>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function shortExamLabel(record) {
  return cleanDisplay(record?.examName || record?.source || "S\u0131nav").slice(0, 24);
}

function examScoreTypesTable(record) {
  const scoreTypes = record.scoreTypes || {};
  const rows = ["say", "ea", "soz", "dil"].filter((key) => scoreTypes[key]).map((key) => `
    <tr>
      <td>${scoreTypes[key].label || key.toUpperCase()}</td>
      <td>${scoreTypes[key].puan ?? "-"}</td>
      <td>${scoreTypes[key].siralama ?? "-"}</td>
    </tr>
  `).join("");
  return rows ? `<table class="table compact exam-detail-table"><thead><tr><th>Puan türü</th><th>Puan</th><th>Sıralama</th></tr></thead><tbody>${rows}</tbody></table>` : "";
}

function topicPriorityHtml(student, records, analysis) {
  const priorities = topicPriorities(student, records, analysis).slice(0, 8);
  if (!priorities.length) {
    return `<p class="muted">Konu analizi i\u00e7in deneme konu da\u011f\u0131l\u0131m\u0131 veya ders bazl\u0131 net gerekli.</p>`;
  }
  return `
    <div class="topic-priority-list">
      ${priorities.map((item, index) => `
        <div class="topic-priority">
          <strong>${index + 1}. ${escapeHtml(item.topic)}</strong>
          <span>${escapeHtml(item.subjectLabel)} - ${escapeHtml(item.reason)}</span>
          <p>${escapeHtml(item.action)}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function weeklyStudyPlanHtml(student, records, analysis) {
  const recordsAvailable = records.length > 0;
  const priorities = topicPriorities(student, records, analysis).slice(0, 5);
  if (!recordsAvailable) return `<p class="muted">Haftalık plan için önce en az bir sınav sonucu girilmeli.</p>`;
  if (!priorities.length) return `<p class="muted">Plan üretmek için ders neti veya konu kırılımı gerekli.</p>`;
  const main = priorities[0];
  const second = priorities[1] || priorities[0];
  const third = priorities[2] || priorities[0];
  const plan = [
    ["Pazartesi", main, "Konu özeti çıkar, 20 temel soru çöz, yanlışları işaretle."],
    ["Salı", main, "Yanlış yapılan alt başlık için 30 soru ve kısa öğretmen kontrolü."],
    ["Çarşamba", second, "MEB/okul kazanım sırasına göre tekrar, 25 karma soru."],
    ["Perşembe", second, "Süreli mini deneme ve boş/yanlış sebep analizi."],
    ["Cuma", third, "Yeni nesil soru + önceki yanlışlardan tekrar testi."],
    ["Hafta sonu", priorities[3] || third, "45 dakikalık genel tekrar, eksik kalan konu için telafi bloğu."],
  ];
  return `
    <div class="weekly-plan">
      ${plan.map(([day, item, task]) => `
        <div class="weekly-plan-row">
          <strong>${day}</strong>
          <span>${escapeHtml(item.subjectLabel)} / ${escapeHtml(item.topic)}</span>
          <p>${escapeHtml(task)}</p>
        </div>
      `).join("")}
    </div>
    <p class="muted">Plan; MEB ortaöğretim öğretim programları ve YKS konu havuzu mantığıyla, son sınavdaki yanlış/net durumuna göre taslak üretilir.</p>
  `;
}

function topicPriorities(student, records, analysis) {
  const explicit = records.flatMap((record) => (record.topics || []).map((topic) => ({ ...topic, record })));
  if (explicit.length) {
    return explicit
      .map((item) => {
        const yanlis = Number(item.yanlis) || 0;
        const net = typeof item.net === "number" ? item.net : calculateNet(item.dogru, item.yanlis);
        const score = yanlis * 2 + Math.max(0, 3 - (net || 0));
        return {
          score,
          topic: cleanDisplay(item.topic),
          subjectLabel: subjectLabel(item.subject),
          reason: `${escapeHtml(item.dogru ?? "-")}D ${escapeHtml(item.yanlis ?? "-")}Y ${net ?? "-"} net`,
          action: `${escapeHtml(cleanDisplay(item.topic))} için 2 gün konu tekrarı, 1 gün yeni nesil soru ve 1 gün yanlış defteri kontrolü planla.`,
        };
      })
      .sort((a, b) => b.score - a.score);
  }
  const latest = records[0];
  if (!latest) return [];
  const weakSubjects = orderedExamDetails(latest)
    .filter((detail) => typeof detail.net === "number")
    .sort((a, b) => a.net - b.net)
    .slice(0, 3);
  return weakSubjects.flatMap((detail) => {
    const key = normalizeSubjectKey(detail.label) || subjectKeyFromLabel(detail.label);
    return topicTemplatesForSubject(key, analysis.area).slice(0, 2).map((topic) => ({
      score: 1,
      topic,
      subjectLabel: subjectLabel(key),
      reason: `${escapeHtml(detail.label)} ${escapeHtml(detail.net)} net; konu kırılımı yok, müfredat/YKS havuzundan önceliklendirildi`,
      action: `${escapeHtml(topic)} için önce kazanım özeti, sonra 30-40 soru ve yanlışların sebep analizi.`,
    }));
  });
}

function topicTemplatesForSubject(subject, area) {
  if (subject === "fen") return [...yksTopicMap.fizik.slice(0, 2), ...yksTopicMap.kimya.slice(0, 2), ...yksTopicMap.biyoloji.slice(0, 1)];
  if (subject === "sosyal") return [...yksTopicMap.tarih.slice(0, 2), ...yksTopicMap.cografya.slice(0, 2), ...yksTopicMap.felsefe.slice(0, 1)];
  if (subject === "matematik" && area === "Sayısal") return ["Fonksiyonlar", "Problemler", "Trigonometri", "Limit-türev-integral"];
  if (subject === "matematik") return ["Problemler", "Fonksiyonlar", "Denklem-eşitsizlik", "Olasılık-istatistik"];
  return yksTopicMap[subject] || ["Kazanım tekrarı", "Yanlış soru analizi"];
}

function subjectKeyFromLabel(label) {
  const key = normalizeKey(label);
  if (key.includes("turkce")) return "turkce";
  if (key.includes("edebiyat")) return "edebiyat";
  if (key.includes("mat")) return "matematik";
  if (key.includes("geo")) return "geometri";
  if (key.includes("fen")) return "fen";
  if (key.includes("sosyal")) return "sosyal";
  if (key.includes("ingilizce") || key.includes("dil")) return "ingilizce";
  return key;
}

function subjectLabel(subject) {
  const labels = {
    turkce: "Türkçe",
    edebiyat: "Edebiyat",
    matematik: "Matematik",
    geometri: "Geometri",
    fen: "Fen",
    fizik: "Fizik",
    kimya: "Kimya",
    biyoloji: "Biyoloji",
    sosyal: "Sosyal",
    tarih: "Tarih",
    cografya: "Coğrafya",
    felsefe: "Felsefe",
    din: "Din",
    ingilizce: "İngilizce/YDT",
    genel: "Genel",
  };
  return labels[subject] || cleanDisplay(subject || "Konu");
}

function orderedExamDetails(record) {
  const order = ["turkce", "edebiyat", "tarih", "tarih1", "cografya", "cografya1", "tarih2", "cografya2", "felsefe", "din", "felsefeSecmeli", "matematik1", "matematik2", "geometri", "matematik", "fizik", "kimya", "biyoloji", "toplam", "sosyal", "fen", "ingilizce", "tyt", "ayt"];
  const details = record?.details || {};
  const ordered = order.filter((key) => details[key]).map((key) => details[key]);
  const rest = Object.keys(details).filter((key) => !order.includes(key)).map((key) => details[key]);
  return [...ordered, ...rest];
}

function formatNet(record, key) {
  const value = record?.details?.[key]?.net ?? record?.scores?.[key];
  return value ?? "-";
}

function saveAcademicMeeting(event, studentId) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.academicMeetings.push({ id: crypto.randomUUID(), studentId, ...data, createdAt: new Date().toISOString() });
  saveState();
  renderExams();
}

function examRecordsForStudent(studentId) {
  return state.examRecords.filter((record) => record.studentId === studentId).sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function examRecordRow(record) {
  const student = state.students.find((item) => item.id === record.studentId);
  if (!student) {
    return `<tr><td>Silinmiş öğrenci</td><td>${escapeHtml(record.source || "-")}</td><td>${escapeHtml(record.examName || "-")}</td><td colspan="7">Bu sınav kaydı artık öğrenciyle eşleşmiyor.</td><td>-</td></tr>`;
  }
  const analysis = academicAnalysis(student);
  return `<tr><td>${escapeHtml(student.fullName || "-")}</td><td>${escapeHtml(record.source)}</td><td>${escapeHtml(record.examName)}</td><td>${formatNet(record, "turkce")}</td><td>${formatNet(record, "matematik")}</td><td>${formatNet(record, "fen")}</td><td>${formatNet(record, "sosyal")}</td><td>${escapeHtml(record.totalScore || "-")}</td><td>${escapeHtml(record.ranking || "-")}</td><td>${analysis.area}</td><td><button class="ghost" ${uiAction("click", (event, element) => { selectStudent((record.studentId), 'exams'); })}>Aç</button></td></tr>`;
}

function academicAnalysis(student) {
  if (!student) {
    return {
      area: "Belirsiz",
      trend: { label: "Öğrenci seçilmedi." },
      focus: { teacher: "", guidance: "" },
      careers: [],
      universities: [],
      baseline: academicBaseline(null),
      studySteps: [],
      summary: "Analiz için önce öğrenci seçilmeli.",
      teacherAdvice: "",
      guidanceAdvice: "",
      subjectAdvice: [],
    };
  }
  const records = examRecordsForStudent(student.id);
  const last = records[0] || {};
  const baseline = academicBaseline(student);
  const numeric = records.reduce((sum, record) => sum + numericScore(record), 0) / Math.max(records.length, 1);
  const verbal = records.reduce((sum, record) => sum + verbalScore(record), 0) / Math.max(records.length, 1);
  const lang = records.reduce((sum, record) => sum + (Number(record.scores?.ingilizce) || 0), 0) / Math.max(records.length, 1);
  const scoreTypeArea = inferAreaFromScoreTypes(records);
  const area = scoreTypeArea || inferAcademicArea(student, numeric, verbal, lang);
  const trend = examTrend(records);
  const subjectAdvice = subjectBasedAdvice(records[0]);
  const focus = areaFocusAdvice(area, records);
  const targetRank = bestRankingForArea(records, area) || last.ranking;
  const topicAdvice = topicPriorities(student, records, { area }).slice(0, 3);
  const topicSentence = topicAdvice.length ? ` Öncelikli konular: ${topicAdvice.map((item) => item.topic).join(", ")}.` : "";
  return {
    area,
    trend,
    focus,
    careers: careerSuggestions(area),
    universities: universitySuggestions(area, targetRank, last.totalScore),
    baseline,
    studySteps: realisticStudySteps(area, records, targetRank, baseline),
    summary: records.length ? `${records.length} sınav kaydı var; ${escapeHtml(trend.label)}. ${escapeHtml(baseline.summary)} Son kaynak: ${last.brand || last.source || "-"}. ${subjectAdvice[0] || ""}` : `Henüz sınav kaydı yok; ilk okul yazılısı veya deneme sonucu girilmeli. ${escapeHtml(baseline.summary)}`,
    teacherAdvice: `${area} ders grubunda kazanım eksiği görünür hale getirilsin. ${escapeHtml(baseline.teacher)} ${focus.teacher}${topicSentence} ${subjectAdvice[1] || "Sonraki sınava kadar 2 haftalık konu eksiği takibi açılsın."}`,
    guidanceAdvice: records.length ? `${focus.guidance} ${escapeHtml(baseline.guidance)} Görüşmede hedef bandı, çalışma düzeni ve sınav kaygısı birlikte not edilsin.` : `Rehberlikçi ilk hedef görüşmesini yaptıktan sonra alan ilgisi, kaygı düzeyi ve çalışma düzenini not etsin. ${escapeHtml(baseline.guidance)}`,
    subjectAdvice,
  };
}

function inferAreaFromScoreTypes(records) {
  const totals = { "Sayısal": 0, "Eşit Ağırlık": 0, "Sözel": 0, Dil: 0 };
  records.slice(0, 4).forEach((record) => {
    const types = record.scoreTypes || {};
    totals["Sayısal"] += Number(types.say?.puan) || 0;
    totals["Eşit Ağırlık"] += Number(types.ea?.puan) || 0;
    totals["Sözel"] += Number(types.soz?.puan) || 0;
    totals.Dil += Number(types.dil?.puan) || 0;
  });
  const best = Object.entries(totals).sort((a, b) => b[1] - a[1])[0];
  return best && best[1] > 0 ? best[0] : "";
}

function academicBaseline(student) {
  if (!student) return { score: null, percentile: null, obp: null, summary: "Liseye geçiş başlangıç verisi yok.", teacher: "", guidance: "" };
  const academicRecord = getFormRecord(student.id, "academic_tracking")?.values || {};
  const score = parseScore(student.lgsScore || academicRecord.lgsScore);
  const percentile = parseScore(student.lgsPercentile || academicRecord.lgsPercentile);
  const obp = parseScore(student.middleSchoolAverage || academicRecord.middleSchoolAverage);
  const parts = [
    score != null ? `LGS ${score}` : "",
    percentile != null ? `%${percentile}` : "",
    obp != null ? `OBP ${obp}` : "",
  ].filter(Boolean);
  if (!parts.length) return { score: null, percentile: null, obp: null, summary: "Liseye geçiş başlangıç verisi yok.", teacher: "", guidance: "" };
  let level = "orta başlangıç";
  if ((score && score >= 420) || (percentile && percentile <= 8)) level = "güçlü başlangıç";
  else if ((score && score < 320) || (percentile && percentile >= 25) || (obp && obp < 70)) level = "destek gerektiren başlangıç";
  return {
    score,
    percentile,
    obp,
    summary: `Liseye geçiş verisi: ${parts.join(" / ")}; ${level}.`,
    teacher: level === "güçlü başlangıç"
      ? "Başlangıç potansiyeli yüksek; düşüş varsa alışkanlık, süre yönetimi ve motivasyon ayrıca izlenmeli."
      : level === "destek gerektiren başlangıç"
        ? "Başlangıç eksikleri dikkate alınarak temel kazanım ve okuduğunu anlama takibi küçük hedeflerle kurulmalı."
        : "Başlangıç seviyesi orta bantta; kazanım boşlukları düzenli deneme verisiyle ayrıştırılmalı.",
    guidance: level === "destek gerektiren başlangıç"
      ? "Öğrenciye gerçekçi ara hedefler verilmeli; ilerleme sadece puanla değil net artışı ve düzenli çalışma davranışıyla takip edilmeli."
      : "Liseye geçiş verisi mevcut performansla birlikte yorumlanmalı; hedef konuşması öğrenciyi gereksiz baskılamadan gerçekçi yapılmalı.",
  };
}

function examTrend(records) {
  const recent = records.slice(0, 4).filter((record) => Number(record.totalScore));
  if (recent.length < 2) return { label: "trend için en az iki sınav daha iyi olur", delta: 0 };
  const newest = Number(recent[0].totalScore);
  const oldest = Number(recent.at(-1).totalScore);
  const delta = Number((newest - oldest).toFixed(1));
  if (delta >= 15) return { label: `son ${recent.length} sınavda belirgin yükseliş var (+${delta})`, delta };
  if (delta <= -15) return { label: `son ${recent.length} sınavda düşüş var (${delta}); neden görüşmesi açılmalı`, delta };
  return { label: `son ${recent.length} sınavda yatay seyir var (${delta >= 0 ? "+" : ""}${delta})`, delta };
}

function bestRankingForArea(records, area) {
  const key = area === "Say?sal" ? "say" : area === "E?it A??rl?k" ? "ea" : area === "S?zel" ? "soz" : area === "Dil" ? "dil" : "";
  const typedRanks = records.map((record) => record.scoreTypes?.[key]?.siralama).filter((value) => Number(value));
  if (typedRanks.length) return Math.min(...typedRanks);
  const ranks = records.map((record) => record.ranking).filter((value) => Number(value));
  return ranks.length ? Math.min(...ranks) : null;
}

function areaFocusAdvice(area, records) {
  const latest = records[0] || {};
  const math = Number(formatNet(latest, "matematik")) || 0;
  const fen = Number(formatNet(latest, "fen")) || 0;
  const turkce = Number(formatNet(latest, "turkce")) || 0;
  const sosyal = Number(formatNet(latest, "sosyal")) || 0;
  const dil = Number(formatNet(latest, "ingilizce")) || 0;
  if (area === "Sayısal") return {
    teacher: math < fen ? "Matematikte işlem/kavram eksiği önceliklendirilmeli." : "Fen branşlarında yanlış/boş analizi ayrıştırılmalı.",
    guidance: "Sayısal hedef konuşması mühendislik-sağlık ekseninde gerçekçi sıralama bandıyla yapılmalı.",
  };
  if (area === "Eşit Ağırlık") return {
    teacher: math < turkce ? "EA için matematik neti küçük hedeflerle yükseltilmeli." : "Türkçe paragraf ve sosyal yorum soruları süre yönetimiyle izlenmeli.",
    guidance: "Hukuk, psikoloji, PDR ve YBS ilgisi ayrı ayrı konuşturulmalı.",
  };
  if (area === "Sözel") return {
    teacher: sosyal < turkce ? "Sosyal bilimler alt derslerinde kazanım tablosu çıkarılmalı." : "Edebiyat/Türkçe güçlü alanı hedef motivasyonunda kullanılmalı.",
    guidance: "Öğretmenlik, iletişim ve sosyal bilim programları öğrencinin ilgi diliyle eşleştirilmeli.",
  };
  return {
    teacher: dil < 45 ? "YDT kelime-okuma rutini günlük takip edilmeli." : "Dil neti güçlü; TYT Türkçe ve sosyal desteklenirse tercih bandı genişler.",
    guidance: "Dil programlarında öğretmenlik, çeviri ve edebiyat seçenekleri çalışma tarzıyla birlikte ele alınmalı.",
  };
}

function subjectBasedAdvice(record) {
  if (!record?.details) return ["Ders bazlı detay yok; sonraki denemede doğru/yanlış/net kırılımı girilmeli."];
  const core = orderedExamDetails(record).filter((detail) => detail.label !== "Toplam TYT" && typeof detail.net === "number");
  if (!core.length) return ["Ders bazlı netler yakalanmadı."];
  const weakest = core.slice().sort((a, b) => a.net - b.net).slice(0, 3);
  const highWrong = core.filter((detail) => Number(detail.yanlis) >= 3).sort((a, b) => b.yanlis - a.yanlis).slice(0, 2);
  const strongest = core.slice().sort((a, b) => b.net - a.net)[0];
  const advice = [
    `En düşük net alanları: ${weakest.map((item) => `${escapeHtml(item.label)} ${escapeHtml(item.net)} net`).join(", ")}.`,
    highWrong.length ? `Yanlış sayısı yüksek derslerde hata analizi yapılmalı: ${highWrong.map((item) => `${escapeHtml(item.label)} ${escapeHtml(item.yanlis)} yanlış`).join(", ")}.` : "Yanlış sayısı belirgin yüksek bir ders görünmüyor; boş bırakılan sorular incelenmeli.",
    strongest ? `Güçlü alan: ${escapeHtml(strongest.label)} (${strongest.net} net). Bu alan motivasyon ve hedef konuşmasında kullanılabilir.` : "",
  ];
  const topicAdvice = topicPriorities(null, [record], { area: "" }).slice(0, 3);
  if (topicAdvice.length) advice.unshift(`Konu bazlı öncelik: ${topicAdvice.map((item) => `${escapeHtml(item.subjectLabel)} / ${escapeHtml(item.topic)}`).join(", ")}.`);
  return advice.filter(Boolean);
}

function numericScore(record) {
  return Math.round((Number(formatNet(record, "matematik")) || 0) + (Number(formatNet(record, "fen")) || 0) + (Number(record?.scores?.ayt) || 0) * 0.35);
}

function verbalScore(record) {
  return Math.round((Number(formatNet(record, "turkce")) || 0) + (Number(formatNet(record, "sosyal")) || 0) + (Number(record?.scores?.tyt) || 0) * 0.25);
}

function renderDiscipline() {
  const students = currentStudents();
  const selected = selectedStudent();
  const records = disciplineRecordsForClass();
  const latest = selected ? disciplineRecordsForStudent(selected.id)[0] : null;
  const latestAnalysis = latest ? latest.analysis : null;
  setSafeHtml(document.querySelector("#disciplineView"), `
    <div class="content-grid">
      <article class="panel span-5">
        <div class="section-title">
          <div>
            <h3>Disiplin olay girişi</h3>
            <p>Öğretmen, rehberlikçi veya yönetici beyanını tek kayıtta topla.</p>
          </div>
        </div>
        <section class="student-import-box compact-import">
          <div>
            <strong>Tutanaktan otomatik doldur</strong>
            <p>Olay tutanağı, şikayet dilekçesi, savunma veya görüşme formunu yükle.</p>
          </div>
          <div class="student-import-controls">
            <input id="disciplineFileInput" type="file" accept=".pdf,.png,.jpg,.jpeg,.webp,.bmp,.xlsx,.xls,.doc,.docx,.txt,.csv,image/*" />
            <button type="button" class="ghost" ${uiAction("click", (event, element) => { readDisciplineFile(); })}>Tutanağı oku</button>
            <button type="button" class="ghost" ${uiAction("click", (event, element) => { downloadSampleDisciplineReport(); })}>Örnek tutanak indir</button>
          </div>
          <div id="disciplineImportStatus" class="student-import-preview">Henüz tutanak seçilmedi.</div>
        </section>
        <form class="discipline-form" ${uiAction("submit", (event, element) => { saveDisciplineRecord(event); })} ${uiAction("input", (event, element) => { updateDisciplinePreview(); })}>
          <label>Öğrenci
            <select id="disciplineStudent">
              ${students.map((student) => `<option value="${escapeHtml(student.id)}" ${escapeHtml(student.id === selected.id ? "selected" : "")}>${escapeHtml(student.fullName || "İsimsiz öğrenci")} · ${escapeHtml(student.className)}</option>`).join("")}
            </select>
          </label>
          <div class="exam-input-grid">
            <label>Olay tarihi<input id="disciplineDate" type="date" value="${new Date().toISOString().slice(0, 10)}" /></label>
            <label>Bildiren kişi<input id="disciplineReporter" placeholder="Örn. Nöbetçi öğretmen" /></label>
          </div>
          <div class="exam-input-grid">
            <label>Olay yeri<input id="disciplineLocation" placeholder="Örn. Bahçe / sınıf / koridor" /></label>
            <label>Tanıklar<input id="disciplineWitnesses" placeholder="Varsa tanık öğrenciler/öğretmenler" /></label>
          </div>
          <label>Olay özeti
            <textarea id="disciplineIncident" rows="5" placeholder="Örn. Derste arkadaşına hakaret etti, telefonla görüntü aldı, okul eşyasına zarar verdi..."></textarea>
          </label>
          <label>Öğrenci beyanı
            <textarea id="disciplineStudentStatement" rows="3" placeholder="Öğrencinin açıklaması / savunma notu"></textarea>
          </label>
          <label>Öğretmen / tanık notu
            <textarea id="disciplineTeacherStatement" rows="3" placeholder="Tanık, kamera, tutanak, tekrar bilgisi"></textarea>
          </label>
          <details class="quiet-details compact-details">
            <summary>Rehberlik ayrıntıları</summary>
            <label>Psikososyal inceleme
              <textarea id="disciplinePsychosocial" rows="4" placeholder="Rehberlik görüşmesinde görülen aile, sağlık, duygu durum, sosyal destek ve risk notları"></textarea>
            </label>
            <label>Psikolojik danışman görüş ve önerileri
              <textarea id="disciplineCounselorOpinion" rows="4" placeholder="Öğrencinin yüksek yararı, sorumluluk düzeyi, izlem ve müdahale önerisi"></textarea>
            </label>
          </details>
          <div class="discipline-checks">
            <label><input id="disciplineRepeated" type="checkbox" /> Aynı yıl içinde tekrar var</label>
            <label><input id="disciplineSpecialNeed" type="checkbox" /> Özel eğitim / BEP durumu değerlendirilecek</label>
            <label><input id="disciplineParentContact" type="checkbox" /> Veli bilgilendirildi</label>
          </div>
          <div class="draft-actions">
            <button class="primary" type="submit">Olayı kaydet</button>
            <button class="ghost" type="button" ${uiAction("click", (event, element) => { fillDisciplineExample(); })}>Örnek doldur</button>
          </div>
          <p class="muted">Bu ekran karar vermez; kurul dosyası ve rehberlik izlemine yardımcı olacak öneri üretir.</p>
        </form>
      </article>

      <article class="panel span-7">
        <div class="section-title">
          <div>
            <h3>Yönetmelik önerisi</h3>
            <p>Olay metnine göre muhtemel kategori, işlem adımı ve rehberlik planı</p>
          </div>
        </div>
        <div id="disciplinePreview" class="discipline-preview">
          ${latestAnalysis ? disciplineAnalysisHtml(latestAnalysis, latest) : empty("Olay özeti yazıldığında öneri burada görünür.")}
        </div>
        <div class="info-box">
          <strong>Resmi süreç notu</strong>
          <p>Disipline konu olaylar okul öğrenci ödül ve disiplin kurulunda değerlendirilir. Kınama ve kısa süreli uzaklaştırma okul müdürü onayıyla, okul değiştirme ilçe kurulu onayıyla, örgün eğitim dışına çıkarma il kurulu onayıyla uygulanır.</p>
          <ol class="process-list">${disciplineProcessSteps.map((step) => `<li>${step}</li>`).join("")}</ol>
        </div>
      </article>

      <article class="panel span-12">
        <div class="section-title">
          <div>
            <h3>${selectedClass} disiplin kayıtları</h3>
            <p>${records.length} olay kaydı bulundu.</p>
          </div>
        </div>
        <div class="table-scroll">
        <table class="table compact data-table discipline-list-table">
          <thead><tr><th>Tarih</th><th>Öğrenci</th><th>Kategori</th><th>Öneri</th><th>Davranış puanı</th><th>Veli</th><th>İşlem</th></tr></thead>
          <tbody>${records.length ? records.map(disciplineRecordRow).join("") : `<tr><td colspan="7">Henüz disiplin olayı girilmedi.</td></tr>`}</tbody>
        </table>
        </div>
      </article>
    </div>
  `);
}

function updateDisciplinePreview() {
  const preview = document.querySelector("#disciplinePreview");
  if (!preview) return;
  const draft = readDisciplineForm();
  if (!draft.incident && !draft.studentStatement && !draft.teacherStatement) {
    setSafeHtml(preview, empty("Olay özeti yazıldığında öneri burada görünür."));
    return;
  }
  setSafeHtml(preview, disciplineAnalysisHtml(analyzeDisciplineCase(draft), draft));
}

function readDisciplineForm() {
  return {
    studentId: document.querySelector("#disciplineStudent").value || "",
    date: document.querySelector("#disciplineDate").value || new Date().toISOString().slice(0, 10),
    reporter: document.querySelector("#disciplineReporter").value.trim() || "",
    location: document.querySelector("#disciplineLocation").value.trim() || "",
    witnesses: document.querySelector("#disciplineWitnesses").value.trim() || "",
    incident: document.querySelector("#disciplineIncident").value.trim() || "",
    studentStatement: document.querySelector("#disciplineStudentStatement").value.trim() || "",
    teacherStatement: document.querySelector("#disciplineTeacherStatement").value.trim() || "",
    psychosocial: document.querySelector("#disciplinePsychosocial").value.trim() || "",
    counselorOpinion: document.querySelector("#disciplineCounselorOpinion").value.trim() || "",
    repeated: Boolean(document.querySelector("#disciplineRepeated").checked),
    specialNeed: Boolean(document.querySelector("#disciplineSpecialNeed").checked),
    parentContact: Boolean(document.querySelector("#disciplineParentContact").checked),
  };
}

async function readDisciplineFile() {
  const input = document.querySelector("#disciplineFileInput");
  const status = document.querySelector("#disciplineImportStatus");
  const file = input.files?.[0];
  if (!file) {
    if (status) status.textContent = "Önce tutanak dosyası seç.";
    return;
  }
  try {
    if (status) status.textContent = `${escapeHtml(file.name)} okunuyor...`;
    const text = await extractTextFromFile(file);
    const draft = parseDisciplineDocument(text);
    applyDisciplineDraft(draft);
    if (status) status.textContent = `${escapeHtml(file.name)} okundu. ${Object.values(draft).filter(Boolean).length} alan yakalandı.`;
    updateDisciplinePreview();
  } catch (error) {
    if (status) status.textContent = `Tutanak okunamadı: ${escapeHtml(error.message)}`;
  }
}

function parseDisciplineDocument(rawText) {
  const text = cleanImportedText(rawText);
  const draft = {
    rawText: text,
    fullName: firstValueByLabels(text, ["Öğrencinin adı soyadı", "Öğrenci adı soyadı", "Adı soyadı", "Öğrenci"]),
    schoolNo: firstValueByLabels(text, ["Okul no", "Okul numarası", "Numarası", "No"]),
    date: extractDisciplineDate(text, "Olay tarihi") || parseImportedDate(firstValueByLabels(text, ["Tarih"])),
    reporter: firstValueByLabels(text, ["Bildiren kişi", "Tutanağı düzenleyen", "Şikayetçi", "Psikolojik danışman", "Görevi"]),
    location: firstValueByLabels(text, ["Olay yeri", "Yer"]),
    witnesses: firstValueByLabels(text, ["Tanıklar", "Şahitler", "Görgü tanığı"]),
    incident: firstValueByLabels(text, ["Olayla ilgili görüşmenin özeti", "Olayın özeti", "Olay özeti", "Disiplin olayı", "Şikayet konusu", "Konu"]),
    studentStatement: firstValueByLabels(text, ["Olayla ilgili görüşmenin özeti", "Öğrenci beyanı", "Savunma", "Öğrencinin ifadesi", "Öğrenci ifadesi"]),
    teacherStatement: firstValueByLabels(text, ["Öğretmen / tanık notu", "Öğretmen notu", "Tanık beyanı", "Görgü tanığı ifadesi", "Alınan ilk önlem"]),
    psychosocial: firstValueByLabels(text, ["Olayla ilgili öğrenci/öğrencilerin psikososyal incelemesi", "Psikososyal inceleme", "Psikolojik durum", "Gözlem sonuçları"]),
    counselorOpinion: firstValueByLabels(text, ["Psikolojik danışmanın konu ile ilgili görüş ve önerileri", "Psikolojik danışman görüş ve önerileri", "Rehberlik servisinin görüş ve önerileri", "Görüş ve öneriler"]),
    parentContact: /veli\s+bilgilendirildi\s*(mi)\s*[:\-]\s*(evet|var|bilgilendirildi)/i.test(text),
  };
  if (!draft.incident) draft.incident = buildSummary(text, 900);
  return draft;
}

function firstValueByLabels(text, labels) {
  for (const label of labels) {
    const value = extractValueByLabel(text, label);
    if (value) return cleanDisciplineValue(value);
    const inline = extractInlineDisciplineValue(text, label);
    if (inline) return cleanDisciplineValue(inline);
  }
  return "";
}

function extractInlineDisciplineValue(text, label) {
  const labelKey = normalizeKey(label);
  const lines = text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  for (const line of lines) {
    const normalized = normalizeKey(line);
    const index = normalized.indexOf(labelKey);
    if (index < 0) continue;
    const colonIndex = line.indexOf(":");
    if (colonIndex < 0) continue;
    return line.slice(colonIndex + 1);
  }
  return "";
}

function cleanDisciplineValue(value) {
  const lines = String(value || "")
    .split(/\n+/)
    .flatMap((line) => line.split(/\s+\|\s+/))
    .map((line) => line.replace(/^\|+|\|+$/g, "").replace(/\s+/g, " ").trim())
    .filter(Boolean);
  return uniqueText(lines).slice(0, 8).join("\n");
}

function parseImportedDate(value) {
  const raw = String(value || "");
  const match = raw.match(/(\d{1,2})\s*[./-]\s*(\d{1,2})\s*[./-]\s*(\d{4})/);
  if (!match) return "";
  return `${match[3]}-${match[2].padStart(2, "0")}-${match[1].padStart(2, "0")}`;
}

function extractDisciplineDate(text, label) {
  const labelKey = normalizeKey(label);
  const line = text.split(/\n+/).find((item) => normalizeKey(item).includes(labelKey));
  return parseImportedDate(line || "");
}

function applyDisciplineDraft(draft) {
  const matchedStudent = matchDisciplineStudent(draft);
  if (matchedStudent) {
    document.querySelector("#disciplineStudent").value = matchedStudent.id;
    selectedStudentId = matchedStudent.id;
  }
  setInputValue("#disciplineDate", draft.date);
  setInputValue("#disciplineReporter", draft.reporter);
  setInputValue("#disciplineLocation", draft.location);
  setInputValue("#disciplineWitnesses", draft.witnesses);
  setInputValue("#disciplineIncident", draft.incident);
  setInputValue("#disciplineStudentStatement", draft.studentStatement);
  setInputValue("#disciplineTeacherStatement", draft.teacherStatement);
  setInputValue("#disciplinePsychosocial", draft.psychosocial);
  setInputValue("#disciplineCounselorOpinion", draft.counselorOpinion);
  if (draft.parentContact) document.querySelector("#disciplineParentContact").checked = true;
}

function setInputValue(selector, value) {
  const input = document.querySelector(selector);
  if (input && value) input.value = value;
}

function matchDisciplineStudent(draft) {
  return matchStudentByIdentity(draft, { strictNumber: Boolean(draft.schoolNo) });
}

function downloadSampleDisciplineReport() {
  downloadTextFile("bos-olay-tutanagi.txt", "OLAY TUTANAGI\n\nOkul:\nTarih:\nOgrenci / sinif:\nOlay yeri:\nOlayin nesnel aciklamasi:\nGozlem / tanik bilgisi:\nAlinan onlemler:\nDuzenleyen:\n", "text/plain;charset=utf-8");
}

function saveDisciplineRecord(event) {
  event.preventDefault();
  const data = readDisciplineForm();
  if (!data.studentId || !data.incident) {
    alert("Öğrenci ve olay özeti olmadan disiplin kaydı açmayalım.");
    return;
  }
  const analysis = analyzeDisciplineCase(data);
  state.disciplineRecords.push({
    id: crypto.randomUUID(),
    ...data,
    analysis,
    createdAt: new Date().toISOString(),
  });
  selectedStudentId = data.studentId;
  saveState();
  renderAll();
  setView("discipline");
}

function analyzeDisciplineCase(data) {
  const text = normalizeKey([data.incident, data.studentStatement, data.teacherStatement, data.psychosocial, data.counselorOpinion, data.location, data.witnesses].join(" "));
  const matches = disciplineRules
    .map((rule) => ({
      ...rule,
      score: rule.keywords.reduce((sum, keyword) => sum + (text.includes(normalizeKey(keyword)) ? 1 : 0), 0),
    }))
    .filter((rule) => rule.score > 0)
    .sort((a, b) => b.score - a.score || levelWeight(b.level) - levelWeight(a.level));
  const primary = matches[0] || {
    id: "unclear",
    category: "Netleşmemiş olay",
    level: "warning",
    behavior: "Olay sınıflandırması için daha açık beyan/tutanak gerekli.",
    teacher: "Olayın nerede, ne zaman, kimlerin yanında gerçekleştiği netleştirilmeli.",
    guidance: "Öğrenciyle ilk değerlendirme görüşmesi yapılıp risk/koruyucu etkenler kaydedilmeli.",
  };
  const previous = disciplineRecordsForStudent(data.studentId).filter((record) => record.analysis.ruleId === primary.id).length;
  let levelKey = primary.level;
  if (data.repeated || previous > 0) levelKey = escalateDisciplineLevel(levelKey);
  if (data.specialNeed) levelKey = levelKey === "formalOut" ? "transfer" : levelKey;
  const level = disciplineLevels[levelKey] || disciplineLevels.warning;
  const actions = [
    data.location ? "" : "Olay yeri boş; kurul dosyası için yer bilgisi tamamlanmalı.",
    data.witnesses ? "" : "Tanık/şahit yoksa 'tanık yok' şeklinde net not düşülmeli; varsa ad-soyad ve beyan ayrı alınmalı.",
    data.studentStatement ? "" : "Öğrenci beyanı/savunması alınmadıysa çağrı ve ifade süreci ayrıca takip edilmeli.",
    data.psychosocial ? "Psikososyal inceleme var; kurul değerlendirmesinde öğrencinin yüksek yararı, risk ve koruyucu etkenler birlikte ele alınmalı." : "Rehberlik/psikososyal inceleme yoksa görüşme formu eklenmeli.",
    data.counselorOpinion ? "Psikolojik danışman görüşü dosyaya eklenmiş; yaptırımın eğitsel/onarım hedefi bu görüşle birlikte tartılmalı." : "",
    /parcalanmis aile|anne baba ayri|bipolar|depresyon|danismanlik tedbiri|sosyal hizmet|psikolojik/i.test(normalizeKey(data.psychosocial || "" )) ? "Aile/sağlık/koruma tedbiri sinyalleri var; gizlilik korunarak rehberlik izlem planı açılmalı." : "",
    /ozur dilerim|pisman|garanti ederim|sorumlulug/i.test(text) ? "Öğrenci pişmanlık/sorumluluk alma beyanı vermiş; onarıcı telafi ve davranış sözleşmesi kurulca değerlendirilebilir." : "",
    primary.teacher,
    primary.guidance,
    data.parentContact ? "Veli bilgilendirme kaydı dosyada tutulmalı." : "Veli bilgilendirme tarihi ve sonucu ayrıca kaydedilmeli.",
    data.specialNeed ? "Özel eğitim ihtiyacı/BEP varsa kurul kararından önce BEP birimi ve rehberlik servisi görüşü alınmalı." : "",
    (data.repeated || previous > 0) ? "Tekrar bilgisi nedeniyle bir üst yaptırım ihtimali kurulca özellikle değerlendirilmeli." : "",
  ].filter(Boolean);
  return {
    ruleId: primary.id,
    category: primary.category,
    behavior: primary.behavior,
    levelKey,
    levelTitle: level.title,
    behaviorPointDeduction: level.points,
    authority: level.authority,
    basis: level.basis,
    confidence: matches.length ? Math.min(95, 55 + primary.score * 12) : 35,
    matchedCategories: matches.slice(0, 3).map((item) => item.category),
    fileChecklist: buildDisciplineChecklist(levelKey, data),
    actions,
  };
}

function buildDisciplineChecklist(levelKey, data) {
  const base = ["Olay tutanağı / şikayet dilekçesi", "Öğrenci beyanı veya savunma tutanağı", "Tanık/mağdur ifadeleri", "Rehberlik görüşme notu", "Veli bilgilendirme kaydı"];
  if (["short", "transfer", "formalOut"].includes(levelKey)) base.push("Okul öğrenci ödül ve disiplin kurulu karar taslağı");
  if (["transfer", "formalOut"].includes(levelKey)) base.push("Üst kurul onayı için dizi pusulası ve ekler");
  if (/sosyal medya|telefon|görüntü|paylaş/i.test([data.incident, data.teacherStatement].join(" "))) base.push("Dijital delil ekran görüntüsü/tarih-saat notu");
  if (/şiddet|yaralama|darp|madde|silah|taciz/i.test([data.incident, data.teacherStatement].join(" "))) base.push("Güvenlik/sağlık yönlendirme kaydı");
  return base;
}

function escalateDisciplineLevel(levelKey) {
  const order = ["warning", "kinama", "short", "transfer", "formalOut"];
  return order[Math.min(order.indexOf(levelKey) + 1, order.length - 1)] || levelKey;
}

function levelWeight(levelKey) {
  return ["warning", "kinama", "short", "transfer", "formalOut"].indexOf(levelKey);
}

function disciplineAnalysisHtml(analysis, record = {}) {
  return `
    <div class="discipline-result">
      <div class="discipline-headline">
        <span class="status">${analysis.category}</span>
        <strong>${analysis.levelTitle}</strong>
        <small>Güven: %${analysis.confidence}</small>
      </div>
      <p><strong>Muhtemel fiil:</strong> ${analysis.behavior}</p>
      <p><strong>Dayanak:</strong> ${analysis.basis}</p>
      <p><strong>Onay / süreç:</strong> ${analysis.authority}</p>
      <p><strong>Davranış puanı etkisi:</strong> ${analysis.behaviorPointDeduction ? `${analysis.behaviorPointDeduction} puan indirim önerisi` : "Resmi ceza olmadan izlem/uyarı"}</p>
      <div>
        <strong>Dosya kontrolü</strong>
        <ul class="recommendations">${(analysis.fileChecklist || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
      <ul class="recommendations">${analysis.actions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      ${record.incident ? `<details class="quiet-details"><summary>Olay özeti</summary><p>${escapeHtml(record.incident)}</p></details>` : ""}
    </div>
  `;
}

function disciplineRecordRow(record) {
  const student = state.students.find((item) => item.id === record.studentId);
  return `<tr><td>${escapeHtml(record.date || "-")}</td><td>${escapeHtml(student.fullName || "-")}</td><td>${escapeHtml(record.analysis.category || "-")}</td><td>${escapeHtml(record.analysis.levelTitle || "-")}</td><td>${escapeHtml(record.analysis.behaviorPointDeduction || "-")}</td><td>${escapeHtml(record.parentContact ? "Var" : "Yok")}</td><td><button class="ghost" ${uiAction("click", (event, element) => { selectStudent((record.studentId), 'discipline'); })}>Aç</button></td></tr>`;
}

function disciplineRecordsForClass() {
  const ids = new Set(currentStudents().map((student) => student.id));
  return (state.disciplineRecords || []).filter((record) => ids.has(record.studentId)).slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function disciplineRecordsForStudent(studentId) {
  return (state.disciplineRecords || []).filter((record) => record.studentId === studentId).slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function fillDisciplineExample() {
  const student = selectedStudent();
  if (student) document.querySelector("#disciplineStudent").value = student.id;
  document.querySelector("#disciplineReporter").value = "Nöbetçi öğretmen";
  document.querySelector("#disciplineIncident").value = "Öğrenci teneffüste arkadaşına sözlü hakaret etti ve olay sosyal medyada paylaşıldı.";
  document.querySelector("#disciplineTeacherStatement").value = "İki öğrenci tanık olarak görüldü, olay aynı gün rehberlik servisine bildirildi.";
  document.querySelector("#disciplineStudentStatement").value = "Öğrenci pişman olduğunu, paylaşımı kaldıracağını belirtti.";
  updateDisciplinePreview();
}

function inferAcademicArea(student, numeric, verbal, lang) {
  if ((student.className || "").includes("Sayısal")) return "Sayısal";
  if ((student.className || "").includes("Eşit Ağırlık")) return "Eşit Ağırlık";
  if ((student.className || "").includes("Sözel")) return "Sözel";
  if ((student.className || "").includes("Dil")) return "Dil";
  if (lang >= Math.max(numeric, verbal) * 0.7 && lang >= 12) return "Dil";
  if (numeric >= verbal + 8) return "Sayısal";
  if (verbal >= numeric + 8) return "Sözel";
  return "Eşit Ağırlık";
}

function careerSuggestions(area) {
  const map = {
    "Sayısal": ["Mühendislik", "Tıp / sağlık bilimleri", "Veri bilimi ve yazılım", "Mimarlık"],
    "Eşit Ağırlık": ["Hukuk", "Psikoloji", "PDR", "İşletme / iktisat", "Yönetim bilişim sistemleri"],
    "Sözel": ["Türk dili ve edebiyatı", "Tarih", "İletişim", "Sosyal hizmet", "Öğretmenlik"],
    "Dil": ["Mütercim-tercümanlık", "İngilizce öğretmenliği", "Dilbilim", "Uluslararası ilişkiler destekli dil programları"],
  };
  return map[area] || map["Eşit Ağırlık"];
}

function universitySuggestions(area, ranking, score) {
  const pool = getAtlasPrograms().filter((item) => sameArea(item.area, area));
  const rank = Number(ranking) || null;
  if (!rank) {
    return [
      "Gerçekçi bölüm/üniversite önerisi için en az bir deneme sıralaması gerekli; sadece puana göre tercih hedefi verilmedi.",
      score ? `Son puan ${score}; puan tek başına yeterli değil, başarı sırası eklenince hedef bandı hesaplanır.` : "Puan ve sıralama girildikçe hedefler otomatik netleşir.",
    ];
  }
  const scored = pool
    .slice()
    .sort((a, b) => Math.abs((a.lastRank || a.stretchRank || a.maxRank) - rank) - Math.abs((b.lastRank || b.stretchRank || b.maxRank) - rank))
    .map((item) => realisticProgramLine(item, rank));
  return [
    ...(scored.length ? scored.slice(0, 4) : ["Alan için program havuzu oluşturulacak."]),
    rank ? `En iyi görünen sıralama bandı: ${rank.toLocaleString("tr-TR")}` : (score ? `Son puan: ${score}; sıralama girilirse hedefler netleşir.` : "Puan/sıralama girildikçe hedef bandı otomatik netleşir."),
  ];
}

function getAtlasPrograms() {
  return state.atlasPrograms.length ? state.atlasPrograms : atlasPrograms;
}

function sameArea(left, right) {
  const a = normalizeExamKey(left);
  const b = normalizeExamKey(right);
  if (a === b) return true;
  if (/say/.test(a) && /say/.test(b)) return true;
  if (/esit|agirlik|ea/.test(a) && /esit|agirlik|ea/.test(b)) return true;
  if (/sozel|soz/.test(a) && /sozel|soz/.test(b)) return true;
  if (a === "dil" && b === "dil") return true;
  return false;
}

function realisticProgramLine(item, rank) {
  const requirement = requiredRankForProgram(item.program);
  if (requirement && rank > requirement) {
    return `Şu an tercih koşulu dışında: ${escapeHtml(item.program)}. Gerekli eşik ilk ${requirement.toLocaleString("tr-TR")}; mevcut deneme bandı ${rank.toLocaleString("tr-TR")}. Önce ${Math.max(rank - requirement, 0).toLocaleString("tr-TR")} sıra iyileşme hedeflenmeli.`;
  }
  if (rank <= item.maxRank) {
    return `Gerçekçi/güçlü hedef: ${escapeHtml(item.program)} - ${item.universities.join(", ")}. ${escapeHtml(item.note)}`;
  }
  if (rank <= item.stretchRank) {
    return `Çalışılır hedef: ${escapeHtml(item.program)}. Yaklaşık ${Math.max(rank - item.maxRank, 0).toLocaleString("tr-TR")} sıra iyileşme ile daha güvenli olur. ${escapeHtml(item.note)}`;
  }
  const gap = rank - item.stretchRank;
  const label = gap > item.stretchRank ? "?u an uzak hedef" : "Zorlay?c? hedef";
  return `${escapeHtml(label)}: ${escapeHtml(item.program)}. Mevcut deneme bandına göre en az ${gap.toLocaleString("tr-TR")} sıra iyileşme gerekiyor; bu hedef ana liste değil, uzun vadeli motivasyon hedefi olmalı.`;
}

function requiredRankForProgram(program) {
  const text = normalizeExamKey(program);
  if (/tip/.test(text)) return 50000;
  if (/muhendis/.test(text)) return 300000;
  if (/mimarlik/.test(text)) return 250000;
  if (/dis hekim/.test(text)) return 80000;
  if (/eczacilik/.test(text)) return 100000;
  if (/hukuk/.test(text)) return 100000;
  if (/ogretmen/.test(text)) return 300000;
  return null;
}

function realisticStudySteps(area, records, targetRank, baseline = {}) {
  const baselineStep = baseline.score || baseline.percentile || baseline.obp
    ? `${escapeHtml(baseline.summary)} Çalışma hedefi bu başlangıç seviyesiyle kıyaslanarak okunmalı; amaç sadece son puanı değil, beklenen gelişim çizgisini görmek.`
    : "";
  if (!records.length) return [baselineStep || "Önce aynı formatta en az 2 TYT ve 2 AYT/YDT denemesi girilmeli; sıralama olmadan bölüm hedefi kesinleştirilmez."].filter(Boolean);
  const latest = records[0];
  const details = orderedExamDetails(latest).filter((detail) => typeof detail.net === "number" && !/toplam|tyt|ayt/i.test(normalizeExamKey(detail.label)));
  const weak = details.slice().sort((a, b) => a.net - b.net).slice(0, 3);
  const highWrong = details.filter((detail) => Number(detail.yanlis) >= 3).sort((a, b) => b.yanlis - a.yanlis).slice(0, 2);
  const steps = [];
  if (baselineStep) steps.push(baselineStep);
  if (targetRank) {
    steps.push(targetRank <= 100000 ? "Hedef bandı korunabilir; haftalık çalışma artık konu öğrenmeden çok deneme analizi, hız ve hata azaltmaya dönmeli." : "Hedef bandı için önce temel net istikrarı kurulmalı; bölüm önerileri ana hedef/yedek hedef diye ayrılmalı.");
  }
  if (weak.length) steps.push(`İlk çalışma alanı: ${weak.map((item) => `${escapeHtml(item.label)} ${escapeHtml(item.net)} net`).join(", ")}. Bu derslerde kazanım listesi çıkarılıp haftalık mini deneme yapılmalı.`);
  if (highWrong.length) steps.push(`Yanlış azaltma önceliği: ${highWrong.map((item) => `${escapeHtml(item.label)} ${escapeHtml(item.yanlis)} yanlış`).join(", ")}. Yanlışların nedeni bilgi eksiği mi, dikkat mi, süre mi diye işaretlenmeli.`);
  const key = normalizeExamKey(area);
  if (/say/.test(key)) steps.push("Sayısal hedef için AYT matematik ve fen netleri ayrı izlenmeli; sadece TYT yükselişi mühendislik/sağlık hedefini gerçekçi yapmaz.");
  if (/esit|agirlik|ea/.test(key)) steps.push("EA hedef için Türkçe güçlü olsa bile AYT matematik belirleyici; haftalık matematik net hedefi küçük ama ölçülebilir yazılmalı.");
  if (/sozel|soz/.test(key)) steps.push("Sözel hedef için edebiyat-sosyal ayrıntı netleri ve okuma hızı birlikte takip edilmeli; ezber değil soru türü analizi yapılmalı.");
  if (key === "dil") steps.push("Dil hedef için YDT yanında TYT Türkçe neti korunmalı; kelime, okuma parçası ve süre yönetimi ayrı takip edilmeli.");
  return steps.slice(0, 5);
}

function renderHonor() {
  const student = selectedStudent();
  const records = (state.honorRecords || []).filter((record) => record.studentId === student.id).slice().reverse();
  setSafeHtml(document.querySelector("#honorView"), `
    <div class="content-grid">
      <article class="panel span-5">
        <div class="section-title"><div><h3>Onur ve yetenek kaydı</h3><p>Faaliyet, ödül, sosyal sorumluluk, spor/sanat/akademik ilgi alanı.</p></div></div>
        ${studentFinderHtml(student.id, "honor", student.className || selectedClass, "honorClassFilter")}
        <form class="modern-form" ${uiAction("submit", (event, element) => { saveHonorRecord(event); })}>
          <label>Alan
            <select name="area">
              <option>Akademik başarı</option><option>Spor</option><option>Sanat</option><option>Sosyal sorumluluk</option><option>Liderlik / okul temsili</option><option>Davranış ve örnek tutum</option>
            </select>
          </label>
          <label>Kayıt türü
            <select name="type"><option>Teşvik önerisi</option><option>Onur belgesi adayı</option><option>Ödül / derece</option><option>Kulüp-faaliyet</option><option>Yetenek notu</option></select>
          </label>
          <label class="field-wide">Açıklama<textarea name="note" rows="4" placeholder="Örn. okul takımında düzenli görev aldı, yarışmada derece yaptı, sınıfta olumlu liderlik gösterdi..."></textarea></label>
          <label>Takip tarihi<input name="date" type="date" value="${new Date().toISOString().slice(0, 10)}" /></label>
          <button class="primary" type="submit">Kaydı ekle</button>
        </form>
      </article>
      <article class="panel span-7">
        <div class="section-title"><div><h3>${escapeHtml(student.fullName || "Öğrenci")} teşvik dosyası</h3><p>Ödül/onur kurulu için aday gerekçesi ve gelişim önerileri</p></div></div>
        ${honorAdviceHtml(student, records)}
        <div class="timeline-list">${records.length ? records.map((record) => `<div class="timeline-item"><strong>${escapeHtml(record.area)} - ${escapeHtml(record.type)}</strong><span>${escapeHtml(record.date || "-")}</span><p>${escapeHtml(record.note || "-")}</p></div>`).join("") : empty("Henüz onur/yetenek kaydı yok.")}</div>
      </article>
    </div>
  `);
}

function honorAdviceHtml(student, records) {
  if (!student) return empty("Önce öğrenci seç.");
  const areas = [...new Set(records.map((record) => record.area))];
  const hasAchievement = records.some((record) => /ödül|derece|onur/i.test(record.type));
  return `
    <div class="insight-strip">
      <div><strong>${records.length}</strong><span>Kayıt</span></div>
      <div><strong>${areas.length || "-"}</strong><span>Yetenek/faaliyet alanı</span></div>
      <div><strong>${hasAchievement ? "Aday" : "?zlem"}</strong><span>Onur/?d?l durumu</span></div>
    </div>
    <ul class="recommendations">
      <li>Öğrencinin güçlü alanı görünürse kulüp, yarışma, sosyal sorumluluk veya okul temsiliyle teşvik edilmeli.</li>
      <li>Onur/ödül önerisi için davranış, devam, ders tutumu ve faaliyet kanıtı birlikte kaydedilmeli.</li>
      <li>Yetenek sadece ödül alana değil, düzenli emek gösteren öğrenciye de gelişim hedefi olarak yazılmalı.</li>
    </ul>
  `;
}

function saveHonorRecord(event) {
  event.preventDefault();
  const student = selectedStudent();
  if (!student) return alert("Önce öğrenci seç.");
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.honorRecords.push({ id: crypto.randomUUID(), studentId: student.id, ...data, createdAt: new Date().toISOString() });
  saveState();
  renderHonor();
  toastSave();
}

function renderAlumni() {
  const allowed = new Set(allowedClassesForUser());
  const records = (state.alumniRecords || []).filter((record) => (
    (!record.schoolId || record.schoolId === currentSchoolId()) &&
    (isFullAccessUser() || !record.className || allowed.has(record.className))
  ));
  const classOptions = Object.values(classes).flat().map((className) => `<option value="${escapeAttr(className)}">${escapeHtml(className)}</option>`).join("");
  const visibleExamples = records.filter((record) => record.showAsExample);
  const avgNet = records.length ? Math.round(records.reduce((sum, record) => sum + (Number(record.net) || 0), 0) / records.length) : 0;
  const placedCount = records.filter((record) => record.placedSchool || record.department).length;
  setSafeHtml(document.querySelector("#alumniView"), `
    <div class="content-grid">
      <article class="panel span-5">
        <div class="section-title"><div><h3>Mezun sonucu ekle</h3><p>Yerleşme, net, sıralama ve örnek gösterilebilir başarı hikayeleri.</p></div></div>
        <form class="modern-form" ${uiAction("submit", (event, element) => { saveAlumniRecord(event); })}>
          <label>Ad soyad<input name="fullName" required placeholder="Örn. Mezun A" /></label>
          <label>Mezuniyet yılı<input name="graduationYear" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" /></label>
          <label>Sınıf / alan<select name="className"><option value="">Genel</option>${classOptions}</select></label>
          <label>Sınav türü<select name="examType"><option>YKS</option><option>LGS</option><option>DGS</option><option>KPSS</option><option>Diğer</option></select></label>
          <label>Doğru<input name="correct" type="number" min="0" step="0.25" placeholder="Doğru" /></label>
          <label>Yanlış<input name="wrong" type="number" min="0" step="0.25" placeholder="Yanlış" /></label>
          <label>Net<input name="net" type="number" step="0.25" placeholder="Net" /></label>
          <label>Sıralama<input name="ranking" inputmode="numeric" placeholder="Örn. 42650" /></label>
          <label class="field-wide">Gittiği okul / üniversite<input name="placedSchool" placeholder="Örn. Hacettepe Üniversitesi" /></label>
          <label class="field-wide">Bölüm / program<input name="department" placeholder="Örn. Psikolojik Danışmanlık ve Rehberlik" /></label>
          <label class="field-wide">Örnek notu<textarea name="note" rows="3" placeholder="Öğrencilere anlatılabilecek çalışma düzeni, tercih süreci veya güçlü yanı"></textarea></label>
          <label class="toggle-line field-wide"><input name="showAsExample" type="checkbox" checked /> Rehberlikte örnek olarak gösterilebilir</label>
          <button class="primary field-wide" type="submit">Mezun kaydını ekle</button>
        </form>
      </article>
      <article class="panel span-7">
        <div class="section-title"><div><h3>Mezun örnekleri</h3><p>Öğrencilere gerçekçi hedef ve çalışma örneği göstermek için.</p></div></div>
        <div class="insight-strip">
          <div><strong>${records.length}</strong><span>Mezun kaydı</span></div>
          <div><strong>${avgNet || "-"}</strong><span>Ortalama net</span></div>
          <div><strong>${placedCount}</strong><span>Yerleşme bilgisi</span></div>
          <div><strong>${visibleExamples.length}</strong><span>Gösterilebilir örnek</span></div>
        </div>
        <div class="timeline-list alumni-list">
          ${records.length ? records.slice().reverse().map(alumniCardHtml).join("") : empty("Henüz mezun kaydı yok. İlk yerleşme örneğini soldan ekleyebilirsin.")}
        </div>
      </article>
    </div>
  `);
}

function alumniCardHtml(record) {
  return `
    <div class="timeline-item record-card">
      <div class="record-card-head">
        <div><strong>${escapeHtml(record.fullName || "Mezun")}</strong><span>${escapeHtml(record.graduationYear || "-")} · ${escapeHtml(record.examType || "-")} · ${escapeHtml(record.className || "Genel")}</span></div>
        <button class="danger small" type="button" ${uiAction("click", (event, element) => { deleteAlumniRecord((escapeAttr(record.id))); })}>Sil</button>
      </div>
      <div class="mini-stats">
        <span>Doğru: <b>${escapeHtml(record.correct || "-")}</b></span>
        <span>Yanlış: <b>${escapeHtml(record.wrong || "-")}</b></span>
        <span>Net: <b>${escapeHtml(record.net || "-")}</b></span>
        <span>Sıralama: <b>${escapeHtml(record.ranking || "-")}</b></span>
      </div>
      <p>${escapeHtml([record.placedSchool, record.department].filter(Boolean).join(" - ") || "Yerleşme bilgisi girilmemiş.")}</p>
      ${record.note ? `<p>${escapeHtml(record.note)}</p>` : ""}
      ${record.showAsExample ? `<span class="status success">Örnek gösterilebilir</span>` : `<span class="status">Sadece kayıt</span>`}
    </div>
  `;
}

function saveAlumniRecord(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  state.alumniRecords = state.alumniRecords || [];
  state.alumniRecords.push({
    id: crypto.randomUUID(),
    schoolId: currentSchoolId(),
    ...data,
    correct: Number(data.correct) || "",
    wrong: Number(data.wrong) || "",
    net: Number(data.net) || "",
    showAsExample: form.elements.showAsExample?.checked || false,
    createdAt: new Date().toISOString(),
  });
  saveState();
  renderAll();
  toastSave();
}

function deleteAlumniRecord(id) {
  if (!confirm("Bu mezun kaydı silinsin mi?")) return;
  state.alumniRecords = (state.alumniRecords || []).filter((record) => record.id !== id);
  saveState();
  renderAll();
}

function renderParentNetwork() {
  if (!isFullAccessUser()) {
    setSafeHtml(document.querySelector("#parentNetworkView"), `<div class="panel"><h3>Okul Destek Ağı</h3><p>Bu alan yalnızca müdür ve rehberlik yetkisiyle görünür.</p></div>`);
    return;
  }
  const records = (state.parentResources || []).filter((record) => !record.schoolId || record.schoolId === currentSchoolId());
  const classesHtml = Object.values(classes).flat().map((className) => `<option value="${escapeAttr(className)}">${escapeHtml(className)}</option>`).join("");
  const allowedContact = records.filter((record) => record.consent).length;
  const professions = new Set(records.map((record) => normalizeKey(record.profession || record.supportType || "")).filter(Boolean)).size;
  setSafeHtml(document.querySelector("#parentNetworkView"), `
    <div class="content-grid">
      <article class="panel span-5">
        <div class="section-title"><div><h3>Okul Destek Ağı</h3><p>Veli meslek, uzmanlık ve gönüllü destek bilgilerini izinli şekilde tut.</p></div></div>
        <form class="modern-form" ${uiAction("submit", (event, element) => { saveParentResource(event); })}>
          <label>Veli adı<input name="guardianName" required placeholder="Ad soyad" /></label>
          <label>Öğrenci<input name="studentName" placeholder="Bağlı öğrenci" /></label>
          <label>Sınıf<select name="className"><option value="">Genel</option>${classesHtml}</select></label>
          <label>Meslek / alan<input name="profession" placeholder="Örn. hemşire, avukat, elektrik teknisyeni" /></label>
          <label class="field-wide">Kurum / iş yeri<input name="workplace" placeholder="İsteğe bağlı" /></label>
          <label>Destek türü<select name="supportType"><option>Meslek tanıtımı</option><option>Seminer / eğitim</option><option>Teknik destek</option><option>Etkinlik desteği</option><option>Saha gezisi bağlantısı</option><option>Sponsorluk / bağış</option><option>Acil durum desteği</option><option>Diğer</option></select></label>
          <label>Uygunluk<input name="availability" placeholder="Örn. ayda 1, hafta sonu, online" /></label>
          <label>Telefon<input name="phone" inputmode="tel" placeholder="İzinliyse" /></label>
          <label>E-posta<input name="email" type="email" placeholder="İzinliyse" /></label>
          <label class="field-wide">Yetenek / not<textarea name="skills" rows="3" placeholder="Hangi konuda yardımcı olabilir, hangi şartlarda aranabilir?"></textarea></label>
          <label class="toggle-line field-wide"><input name="consent" type="checkbox" required /> Veli bu amaçla iletişime geçilmesine izin verdi</label>
          <button class="primary field-wide" type="submit">Destek kaydını ekle</button>
        </form>
      </article>
      <article class="panel span-7">
        <div class="section-title"><div><h3>İzinli veli kaynakları</h3><p>Okul ihtiyacı çıktığında meslek ve destek türüne göre hızlı bulunur.</p></div></div>
        <div class="insight-strip">
          <div><strong>${records.length}</strong><span>Kayıt</span></div>
          <div><strong>${allowedContact}</strong><span>İletişim izinli</span></div>
          <div><strong>${professions}</strong><span>Farklı alan</span></div>
        </div>
        <div class="timeline-list">
          ${records.length ? records.slice().reverse().map(parentResourceCardHtml).join("") : empty("Henüz veli destek kaydı yok. Kayıtlar izin alınarak eklenmeli.")}
        </div>
      </article>
    </div>
  `);
}

function parentResourceCardHtml(record) {
  return `
    <div class="timeline-item record-card">
      <div class="record-card-head">
        <div><strong>${escapeHtml(record.guardianName || "Veli")}</strong><span>${escapeHtml(record.profession || "Alan yok")} · ${escapeHtml(record.supportType || "Destek")}</span></div>
        <button class="danger small" type="button" ${uiAction("click", (event, element) => { deleteParentResource((escapeAttr(record.id))); })}>Sil</button>
      </div>
      <p>${escapeHtml([record.studentName, record.className, record.workplace].filter(Boolean).join(" · ") || "Genel okul desteği")}</p>
      <div class="mini-stats">
        <span>Uygunluk: <b>${escapeHtml(record.availability || "-")}</b></span>
        <span>Tel: <b>${escapeHtml(record.phone || "-")}</b></span>
        <span>E-posta: <b>${escapeHtml(record.email || "-")}</b></span>
      </div>
      ${record.skills ? `<p>${escapeHtml(record.skills)}</p>` : ""}
      <span class="status ${escapeHtml(record.consent ? "success" : "")}">${escapeHtml(record.consent ? "İletişim izni var" : "İzin yok")}</span>
    </div>
  `;
}

function saveParentResource(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  state.parentResources = state.parentResources || [];
  state.parentResources.push({ id: crypto.randomUUID(), schoolId: currentSchoolId(), ...data, consent: form.elements.consent?.checked || false, createdAt: new Date().toISOString() });
  saveState();
  renderAll();
  toastSave();
}

function deleteParentResource(id) {
  if (!confirm("Bu destek kaydı silinsin mi?")) return;
  state.parentResources = (state.parentResources || []).filter((record) => record.id !== id);
  saveState();
  renderAll();
}

function saveStudyPlan(event) {
  event.preventDefault();
  const student = selectedStudent();
  if (!student) return alert("Önce öğrenci seç.");
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.studyPlans.push({ id: crypto.randomUUID(), studentId: student.id, ...data, createdAt: new Date().toISOString() });
  saveState();
  renderPlanning();
  toastSave();
}

function downloadStudentPlanWord(studentId) {
  const student = state.students.find((item) => item.id === studentId) || selectedStudent();
  if (!student) return alert("Önce öğrenci seç.");
  const plans = (state.studyPlans || []).filter((record) => record.studentId === student.id);
  downloadWeeklyPlanWord(student, plans, `${slugify(student.fullName || "ogrenci")}-haftalik-plan.doc`);
}

function downloadSinglePlanWord(planId) {
  const plan = (state.studyPlans || []).find((record) => record.id === planId);
  const student = state.students.find((item) => item.id === plan.studentId) || selectedStudent();
  if (!student || !plan) return alert("Plan bulunamadı.");
  downloadWeeklyPlanWord(student, [plan], `${slugify(student.fullName || "ogrenci")}-${escapeHtml(plan.date || "plan")}.doc`);
}

function downloadBlankWeeklyPlanWord() {
  downloadWeeklyPlanWord(null, [], `bos-haftalik-ders-programi.doc`, true);
}

function downloadWeeklyPlanWord(student, plans = [], fileName = "haftalik-plan.doc", blank = false) {
  const schoolName = state.school.name || "Öğrenci İzleme Sistemi";
  const sortedPlans = plans.slice().sort((a, b) => String(a.date || "").localeCompare(String(b.date || "")));
  const totalMinutes = sortedPlans.reduce((sum, plan) => sum + (Number(plan.minutes) || 0), 0);
  const totalQuestions = sortedPlans.reduce((sum, plan) => sum + (Number(plan.questions) || 0), 0);
  const focusText = sortedPlans.length
    ? sortedPlans.slice(0, 3).map((plan) => `${escapeHtml(plan.course)}${plan.topic ? `: ${escapeHtml(plan.topic)}` : ""}`).join(" • ")
    : "Bu hafta hedefini yaz, küçük adımlarla başla.";
  const priorityRows = (sortedPlans.length ? sortedPlans.slice(0, 5) : Array.from({ length: 5 }, () => null)).map((plan, index) => `
    <tr>
      <td class="check">□</td>
      <td>${escapeHtml(plan ? `${escapeHtml(plan.course)}${plan.topic ? ` - ${escapeHtml(plan.topic)}` : ""}` : `${index + 1}. öncelik`)}</td>
      <td>${escapeHtml(plan ? `${escapeHtml(plan.questions || 0)} soru / ${escapeHtml(plan.minutes || 0)} dk` : "")}</td>
    </tr>
  `).join("");
  const habitRows = ["Konu tekrarı", "Soru çözümü", "Yanlış defteri", "Kısa tekrar", "Öğretmen kontrolü"].map((item) => `
    <tr><td class="check">□</td><td>${escapeHtml(item)}</td><td></td></tr>
  `).join("");
  const planRows = sortedPlans.map((plan) => `
    <tr>
      <td>${escapeHtml(formatDateLong(plan.date))}</td>
      <td>${escapeHtml(dayName(plan.date))}</td>
      <td>${escapeHtml(plan.course || "")}</td>
      <td>${escapeHtml(plan.topic || "")}</td>
      <td>${escapeHtml(plan.minutes || "")}</td>
      <td>${escapeHtml(plan.questions || "")}</td>
      <td>${escapeHtml(plan.note || "")}</td>
    </tr>
  `).join("");
  const emptyRows = Array.from({ length: 10 }, (_, index) => `
    <tr>
      <td>${index + 1}. çalışma</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  `).join("");
  const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
  const dayCells = days.map((day) => `
    <td class="day-box">
      <h3>${day.toLocaleUpperCase("tr-TR")}</h3>
      <div class="day-content">${dayPlanHtml(sortedPlans, day)}</div>
    </td>
  `);
  const priorityList = (sortedPlans.length ? sortedPlans.slice(0, 8) : Array.from({ length: 8 }, (_, index) => ({ course: `${index + 1}. öncelik`, topic: "", questions: "", minutes: "" }))).map((plan) => `
    <p><span>◆</span>${escapeHtml(plan.course || "Öncelik")}${plan.topic ? ` - ${escapeHtml(plan.topic)}` : ""}</p>
  `).join("");
  const html = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Haftalık Ders Çalışma Programı</title>
  <style>
    @page { size: A4 portrait; margin: 1cm; }
    body { font-family: Arial, sans-serif; color: #111111; background: #ffffff; }
    .sheet {
      min-height: 26.7cm;
      padding: 24px 26px;
      border: 1px solid #111111;
      background: #ffffff;
      position: relative;
    }
    .sheet:before,
    .sheet:after {
      content: "";
      position: absolute;
      top: 18px;
      bottom: 18px;
      width: 34px;
      border-top: 1px solid #d5d5d5;
      border-bottom: 1px solid #d5d5d5;
    }
    .sheet:before { left: 8px; border-left: 1px solid #d5d5d5; }
    .sheet:after { right: 8px; border-right: 1px solid #d5d5d5; }
    .top { text-align: center; margin: 10px 0 20px; }
    h1 {
      margin: 0;
      font-family: "Segoe Script", "Brush Script MT", cursive;
      font-size: 40px;
      font-weight: 400;
      letter-spacing: .5px;
    }
    .quote-mark {
      display: inline-block;
      margin-left: 18px;
      padding-left: 18px;
      border-left: 3px solid #111111;
      font-family: Georgia, serif;
      font-size: 56px;
      line-height: .6;
      vertical-align: middle;
    }
    .motto {
      margin: 12px 0 0;
      font-size: 15px;
      font-weight: 800;
      font-style: italic;
      text-align: center;
    }
    .meta {
      display: table;
      width: 100%;
      margin: 12px 0 18px;
      border-top: 1px solid #111111;
      border-bottom: 1px solid #111111;
    }
    .meta div {
      display: table-cell;
      padding: 8px 10px;
      font-size: 12px;
      vertical-align: middle;
    }
    .meta .right { text-align: right; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; }
    .planner td {
      width: 25%;
      height: 205px;
      padding: 0;
      border: 1px solid #111111;
      vertical-align: top;
    }
    .day-box h3 {
      margin: 0;
      padding: 9px 8px;
      border-bottom: 1px solid #111111;
      font-size: 12px;
      letter-spacing: .4px;
      text-align: center;
    }
    .day-content { padding: 8px 10px; }
    .task {
      margin: 0 0 8px;
      padding-bottom: 6px;
      border-bottom: 1px dotted #a7a7a7;
      font-size: 10.5px;
      line-height: 1.35;
    }
    .task strong { display: block; font-size: 11px; }
    .task span { color: #555555; }
    .blank-line {
      height: 24px;
      margin: 0 0 9px;
      border-bottom: 1px dotted #bdbdbd;
    }
    .priority-box { padding: 8px 10px; }
    .priority-box h3 {
      margin: 0 0 7px;
      padding: 0 0 9px;
      border-bottom: 1px solid #111111;
      font-size: 12px;
      text-align: center;
    }
    .priority-box p {
      margin: 0 0 7px;
      padding-bottom: 5px;
      border-bottom: 1px dotted #bdbdbd;
      font-size: 10.5px;
      line-height: 1.25;
    }
    .priority-box span {
      display: inline-block;
      width: 15px;
      color: #ff705a;
      font-size: 12px;
    }
    .notes {
      margin-top: 24px;
      font-size: 12px;
    }
    .notes-title {
      font-family: "Segoe Script", "Brush Script MT", cursive;
      font-size: 32px;
      margin-right: 16px;
    }
    .note-line {
      height: 23px;
      border-bottom: 1px dotted #7d7d7d;
    }
    .summary {
      margin-top: 14px;
      padding: 9px 10px;
      border: 1px dashed #999999;
      font-size: 11px;
      color: #333333;
    }
  </style>
</head>
<body>
  <div class="sheet">
    <div class="top">
      <h1>Haftalık<br>Planlayıcı <span class="quote-mark">”</span></h1>
      <p class="motto">“Daima ileriye yönel. İyi şeyler her zaman önündedir.”</p>
    </div>
    <div class="meta">
      <div><strong>Öğrenci:</strong> ${escapeHtml(blank ? "" : student.fullName || "")}</div>
      <div><strong>Sınıf:</strong> ${escapeHtml(blank ? "" : student.className || "")}</div>
      <div><strong>Okul No:</strong> ${escapeHtml(blank ? "" : student.schoolNo || "")}</div>
      <div class="right"><strong>Tarih:</strong> ${escapeHtml(new Date().toLocaleDateString("tr-TR"))}</div>
    </div>
    <table class="planner">
      <tr>${dayCells.slice(0, 4).join("")}</tr>
      <tr>${dayCells.slice(4, 7).join("")}<td><div class="priority-box"><h3>ÖNCELİKLERİM</h3>${priorityList}</div></td></tr>
    </table>
    <div class="notes">
      <span class="notes-title">Notlar</span>
      ${Array.from({ length: 7 }, () => `<div class="note-line"></div>`).join("")}
    </div>
    <div class="summary"><strong>Haftanın hedefi:</strong> ${escapeHtml(focusText)} &nbsp; | &nbsp; <strong>Toplam süre:</strong> ${totalMinutes || "____"} dk &nbsp; | &nbsp; <strong>Soru hedefi:</strong> ${totalQuestions || "____"} soru</div>
  </div>
</body>
</html>`;
  downloadTextFile(fileName, `\ufeff${html}`, "application/msword;charset=utf-8");
}

function gridPlanText(plans, day, index) {
  const dayPlans = plans.filter((plan) => dayName(plan.date) === day);
  const plan = dayPlans[index];
  if (!plan) return "";
  return `${escapeHtml(plan.course || "")}${plan.topic ? ` - ${escapeHtml(plan.topic)}` : ""}${plan.questions ? ` (${escapeHtml(plan.questions)} soru)` : ""}`;
}

function dayPlanHtml(plans, day) {
  const dayPlans = plans.filter((plan) => dayName(plan.date) === day);
  if (!dayPlans.length) {
    return Array.from({ length: 5 }, () => `<p class="blank-line"></p>`).join("");
  }
  return dayPlans.slice(0, 5).map((plan) => `
    <p class="task">
      <strong>${escapeHtml(plan.course || "Ders")}${plan.topic ? ` - ${escapeHtml(plan.topic)}` : ""}</strong>
      <span>${escapeHtml(joinParts([plan.minutes ? `${escapeHtml(plan.minutes)} dk` : "", plan.questions ? `${escapeHtml(plan.questions)} soru` : ""]))}</span>
      ${plan.note ? `<br><em>${escapeHtml(plan.note)}</em>` : ""}
    </p>
  `).join("");
}

function dayName(dateValue) {
  if (!dateValue) return "";
  const date = new Date(`${dateValue}T12:00:00`);
  return Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString("tr-TR", { weekday: "long" }).replace(/^./, (letter) => letter.toLocaleUpperCase("tr-TR"));
}

function formatDateLong(dateValue) {
  if (!dateValue) return "";
  const date = new Date(`${dateValue}T12:00:00`);
  return Number.isNaN(date.getTime()) ? dateValue : date.toLocaleDateString("tr-TR");
}

function planningCurriculum(grade) {
  const common = {
    "Türk Dili ve Edebiyatı": [],
    Matematik: [],
    Geometri: [],
    Fizik: [],
    Kimya: [],
    Biyoloji: [],
    Tarih: [],
    Coğrafya: [],
    Felsefe: [],
    "Din Kültürü ve Ahlak Bilgisi": [],
    İngilizce: [],
    Almanca: [],
    Fransızca: [],
    Arapça: [],
    "Beden Eğitimi ve Spor": [],
    "Görsel Sanatlar": [],
    Müzik: [],
    "Sağlık Bilgisi ve Trafik Kültürü": [],
    "Bilgisayar Bilimi": [],
    "Rehberlik ve Kariyer Planlama": [],
  };
  if (grade === "11" || grade === "12") {
    return {
      ...common,
      "Seçmeli Matematik": [],
      "Seçmeli Fizik": [],
      "Seçmeli Kimya": [],
      "Seçmeli Biyoloji": [],
      "Çağdaş Türk ve Dünya Tarihi": [],
      "Türk Kültür ve Medeniyet Tarihi": [],
      Psikoloji: [],
      Sosyoloji: [],
      Mantık: [],
      "Yabancı Dil Alan Dersi": [],
      "İkinci Yabancı Dil": [],
    };
  }
  return common;
}

function planningGuidanceHtml(student, grade) {
  const records = student ? examRecordsForStudent(student.id) : [];
  const priorities = topicPriorities(student, records, academicAnalysis(student)).slice(0, 4);
  return `
    <div class="class-topic-panel">
      <h4>${grade}. sınıf plan önerisi</h4>
      <div class="topic-chip-grid">
        ${(priorities.length ? priorities : Object.keys(planningCurriculum(grade)).slice(0, 4).map((topic) => ({ topic, subjectLabel: "Ders", reason: "konu elle yazılır" }))).map((item) => `<span><strong>${escapeHtml(item.topic)}</strong><small>${escapeHtml(item.subjectLabel)} - ${escapeHtml(item.reason || "planlanabilir")}</small></span>`).join("")}
      </div>
    </div>
  `;
}

function legacyRenderSurveys() {
  const student = selectedStudent();
  const responses = (state.surveyResponses || []).filter((record) => record.studentId === student.id).slice().reverse();
  const classStudentIds = new Set(currentStudents().map((item) => item.id));
  const classResponses = (state.surveyResponses || []).filter((record) => classStudentIds.has(record.studentId)).slice().reverse();
  const links = (state.surveyLinks || []).filter((link) => link.className === selectedClass).slice().reverse();
  setSafeHtml(document.querySelector("#surveysView"), `
    <div class="content-grid">
      <article class="panel span-5">
        <div class="section-title"><div><h3>Sınıf anket linki</h3><p>Veliler/öğrenciler linki doldurunca cevaplar otomatik öğrenci dosyasına kaydedilir.</p></div></div>
        <form class="modern-form" ${uiAction("submit", (event, element) => { createSurveyInvite(event); })}>
          <label>Sınıf / Alan<select name="className">${classOptions(selectedClass)}</select></label>
          <label>Anket türü<select name="surveyType"><option>Veli anketi</option><option>Öğrenci anketi</option><option>Çalışma alışkanlığı</option><option>Okul iklimi</option><option>Devamsızlık nedeni</option></select></label>
          <label>Hedef kitle<select name="audience"><option>Veli</option><option>Öğrenci</option><option>Veli ve öğrenci</option></select></label>
          <label class="field-wide">Kısa açıklama<textarea name="note" rows="3" placeholder="Örn. 9-A dönem başı rehberlik ihtiyaç anketi"></textarea></label>
          <button class="primary" type="submit">Sınıf linki oluştur</button>
        </form>
        <div id="surveyInviteBox" class="preview-box small-preview">Henüz link oluşturulmadı.</div>
        <div class="timeline-list">${links.length ? links.map((link) => {
          const count = (state.surveyResponses || []).filter((record) => record.linkCode === link.code).length;
          return `<div class="timeline-item"><strong>${escapeHtml(link.className)} - ${escapeHtml(link.surveyType)}</strong><span>${link.createdAt.slice(0, 10)} - ${escapeHtml(link.audience)} - ${count} cevap</span><p><button class="link-button" ${uiAction("click", (event, element) => { copySurveyLink((link.code)); })}>${surveyUrl(link.code)}</button></p></div>`;
        }).join("") : empty("Bu sınıf için anket linki yok.")}</div>
      </article>
      <article class="panel span-7">
        <div class="section-title"><div><h3>Gelen anket cevapları</h3><p>Linkten gelenler rehberci dokunmadan burada listelenir</p></div></div>
        <div class="record-stats survey-stats">
          ${recordStat("Sınıf cevabı", classResponses.length)}
          ${recordStat("Seçili öğrenci", responses.length)}
          ${recordStat("Açık link", links.length)}
          ${recordStat("Yüksek risk", classResponses.filter((record) => record.risk === "Yüksek").length)}
        </div>
        ${studentFinderHtml(student.id, "surveys", student.className || selectedClass, "surveyClassFilter")}
        <form class="modern-form" ${uiAction("submit", (event, element) => { saveSurveyResponse(event); })}>
          <label>Anket türü<select name="surveyType"><option>Veli anketi</option><option>Öğrenci anketi</option><option>Çalışma alışkanlığı</option><option>Okul iklimi</option><option>Devamsızlık nedeni</option></select></label>
          <label>Risk düzeyi<select name="risk"><option>Düşük</option><option>Orta</option><option>Yüksek</option></select></label>
          <label class="field-wide">Cevap özeti<textarea name="summary" rows="4" placeholder="Veli/öğrenci yanıtlarının kısa özeti"></textarea></label>
          <button class="primary" type="submit">Cevabı kaydet</button>
        </form>
        <div class="timeline-list">${classResponses.length ? classResponses.map(surveyResponseCard).join("") : empty("Bu sınıfa henüz link cevabı gelmedi.")}</div>
      </article>
    </div>
  `);
}

function legacySurveyResponseCard(record) {
  const student = state.students.find((item) => item.id === record.studentId);
  return `
    <div class="timeline-item">
      <strong>${escapeHtml(student.fullName || "Öğrenci")} - ${escapeHtml(record.surveyType || "Anket")} - ${escapeHtml(record.risk || "-")}</strong>
      <span>${escapeHtml(record.date || "-")} ? ${escapeHtml(record.audience || record.source || "link")}${record.schoolNo ? ` ? No ${escapeHtml(record.schoolNo)}` : ""}</span>
      <p>${escapeHtml(record.summary || "-")}</p>
    </div>
  `;
}

function legacyCreateSurveyInvite(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const code = Math.random().toString(36).slice(2, 8).toUpperCase();
  const link = {
    id: crypto.randomUUID(),
    code,
    className: data.className || selectedClass,
    surveyType: data.surveyType,
    audience: data.audience,
    note: data.note || "",
    createdAt: new Date().toISOString(),
  };
  state.surveyLinks = [...(state.surveyLinks || []), link];
  saveState();
  renderSurveys();
  setSafeHtml(document.querySelector("#surveyInviteBox"), `<strong>Paylaşılacak link</strong><p>${surveyUrl(code)}</p><p class="muted">${escapeHtml(link.className)} için ${escapeHtml(link.surveyType)}. Link aynı cihaz/tarayıcı veritabanına cevap kaydeder; gerçek telefonlardan toplamak için sonraki adımda bulut veritabanı bağlarız.</p>`);
}

function legacySaveSurveyResponse(event) {
  event.preventDefault();
  const student = selectedStudent();
  if (!student) return alert("Önce öğrenci seç.");
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.surveyResponses.push({
    id: crypto.randomUUID(),
    studentId: student.id,
    date: new Date().toISOString().slice(0, 10),
    surveyType: data.surveyType,
    risk: data.risk,
    summary: data.summary || "",
    source: "manuel",
  });
  if (data.risk === "Yüksek") student.risk = { ...(student.risk || {}), survey_high: true };
  saveState();
  renderSurveys();
  toastSave();
}

function surveyUrl(code) {
  const base = location.href.split("#")[0].split("?")[0];
  return `${base}?survey=${encodeURIComponent(code)}`;
}

function legacyCopySurveyLink(code) {
  navigator.clipboard.writeText(surveyUrl(code));
  alert("Anket linki kopyalandı.");
}

function legacyRenderPublicSurveyRoute() {
  const code = new URLSearchParams(location.hash.replace(/^#/, "")).get("survey");
  if (!code) return false;
  const link = (state.surveyLinks || []).find((item) => item.code === code);
  if (!link) {
    setSafeHtml(document.body, `<main class="public-survey"><section class="panel"><h1>Anket bulunamadı</h1><p>Link süresi dolmuş ya da bu tarayıcıda kayıtlı değil.</p></section></main>`);
    return true;
  }
  const students = state.students.filter((student) => student.className === link.className);
  const studentOptions = students.map((student) => `<option value="${escapeHtml(student.id)}">${escapeHtml(student.schoolNo || "-")} - ${escapeHtml(student.fullName || "Öğrenci")}</option>`).join("");
  setSafeHtml(document.body, `
    <main class="public-survey">
      <form class="panel public-survey-card" ${uiAction("submit", (event, element) => { submitPublicSurvey(event, (link.code)); })}>
        <p class="eyebrow">${escapeHtml(link.className)}</p>
        <h1>${escapeHtml(link.surveyType)}</h1>
        <p>${escapeHtml(link.note || "Okul rehberlik çalışması için kısa anket.")}</p>
        <label>Okul numarası<input name="schoolNo" required placeholder="Örn. 102" /></label>
        <label>Ad soyad<input name="fullName" placeholder="Ad soyad (kontrol için)" /></label>
        <label>Listeden kontrol
          <select name="studentId"><option value="">Numaraya göre otomatik bul</option>${studentOptions}</select>
        </label>
        <label>Yanıtlayan<select name="audience"><option>${escapeHtml(link.audience)}</option><option>Veli</option><option>Öğrenci</option></select></label>
        <label>Genel durum<select name="risk"><option>Düşük</option><option>Orta</option><option>Yüksek</option></select></label>
        <label>Yanıt özeti<textarea name="summary" rows="5" placeholder="Kısa cevaplarınızı yazın"></textarea></label>
        <button class="primary" type="submit">Anketi gönder</button>
      </form>
    </main>
  `);
  return true;
}

function legacySubmitPublicSurvey(event, code) {
  event.preventDefault();
  const link = (state.surveyLinks || []).find((item) => item.code === code);
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const matched = data.schoolNo
    ? matchStudentByIdentity({ schoolNo: data.schoolNo, fullName: data.fullName }, { strictNumber: true })
    : state.students.find((item) => item.id === data.studentId);
  if (!matched || matched.className !== link.className) {
    const message = link.className
      ? `${escapeHtml(link.className)} içinde bu okul numarası bulunamadı. Lütfen numarayı kontrol edip tekrar deneyin.`
      : "Anket linki bulunamadı.";
    alert(message);
    return;
  }
  state.surveyResponses.push({
    id: crypto.randomUUID(),
    studentId: matched.id,
    linkCode: code,
    date: new Date().toISOString().slice(0, 10),
    surveyType: link.surveyType || "Anket",
    audience: data.audience,
    risk: data.risk,
    schoolNo: data.schoolNo || matched.schoolNo || "",
    respondentName: data.fullName || "",
    summary: `${data.audience}: ${data.summary || "-"}`,
    source: "link",
  });
  if (data.risk === "Yüksek") {
    matched.risk = { ...(matched.risk || {}), survey_high: true };
  }
  saveState();
  setSafeHtml(document.body, `<main class="public-survey"><section class="panel public-survey-card"><h1>Teşekkürler</h1><p>Anket cevabınız sisteme kaydedildi.</p></section></main>`);
}

function renderPlanning() {
  const student = selectedStudent();
  if (!student) {
    setSafeHtml(document.querySelector("#planningView"), empty("Planlama için önce öğrenci ekle veya öğrenci bulunan bir sınıf seç."));
    return;
  }
  const plans = (state.studyPlans || []).filter((record) => record.studentId === student.id).slice().reverse();
  const grade = (student.className || selectedClass).match(/^(9|10|11|12)/)?.[1] || selectedGrade;
  const curriculum = planningCurriculum(grade);
  setSafeHtml(document.querySelector("#planningView"), `
    <div class="content-grid">
      <article class="panel span-5">
        <div class="section-title"><div><h3>Haftalık planlama</h3><p>Önce dersi seç, sonra o derse ait konuyu ayrı alandan belirle.</p></div></div>
        ${studentFinderHtml(student.id, "planning", student.className || selectedClass, "planningClassFilter")}
        <form class="modern-form" ${uiAction("submit", (event, element) => { saveStudyPlan(event); })}>
          <label>Tarih<input name="date" type="date" value="${new Date().toISOString().slice(0, 10)}" /></label>
          <label>Ders<select name="course" id="planningCourseSelect">${Object.keys(curriculum).map((course) => `<option>${course}</option>`).join("")}</select></label>
          <label class="field-wide">Konu<input name="topic" placeholder="Konu/kazanım elle yazılsın" /></label>
          <label>Dakika<input name="minutes" type="number" min="5" step="5" value="40" /></label>
          <label>Soru hedefi<input name="questions" type="number" min="0" value="30" /></label>
          <label class="field-wide">Not<textarea name="note" rows="3" placeholder="Örn. yanlış defteri, öğretmen kontrolü, veli bilgilendirme"></textarea></label>
          <button class="primary" type="submit">Planı kaydet</button>
        </form>
      </article>
      <article class="panel span-7">
        <div class="section-title">
          <div><h3>${escapeHtml(student.fullName || "Öğrenci")} haftalık planı</h3><p>${grade}. sınıf MEB konu havuzu ve sınav eksikleriyle birlikte izlenir</p></div>
          <div class="card-actions">
            <button class="ghost" type="button" ${uiAction("click", (event, element) => { downloadBlankWeeklyPlanWord(); })}>Boş Word</button>
            <button class="primary" type="button" ${uiAction("click", (event, element) => { downloadStudentPlanWord((student.id || "")); })}>Planı Word indir</button>
          </div>
        </div>
        ${planningGuidanceHtml(student, grade)}
        <div class="timeline-list">${plans.length ? plans.map((plan) => `<div class="timeline-item plan-item"><div><strong>${escapeHtml(plan.course)} / ${escapeHtml(plan.topic || "Konu")}</strong><span>${escapeHtml(plan.date)} - ${escapeHtml(plan.minutes)} dk - ${escapeHtml(plan.questions)} soru</span><p>${escapeHtml(plan.note || "-")}</p></div><button class="ghost" type="button" ${uiAction("click", (event, element) => { downloadSinglePlanWord((plan.id)); })}>Bu planı indir</button></div>`).join("") : empty("Henüz haftalık plan yok.")}</div>
      </article>
    </div>
  `);
}

function topicOptionsForCourse(grade, course) {
  return (planningCurriculum(grade)[course] || []).map((topic) => `<option>${escapeHtml(topic)}</option>`).join("");
}

function renderReports() {
  const reportOptions = getReportOptions();
  const activeReport = reportOptions.find((option) => option.id === selectedReportId) || reportOptions[0];
  const filteredStudents = state.students.filter(activeReport.filter);
  const rows = filteredStudents
    .map((student) => {
      const [level] = riskLevel(student);
      return `<tr><td><button class="link-button" ${uiAction("click", (event, element) => { selectStudent((student.id), 'dossier'); })}>${escapeHtml(cleanDisplay(student.fullName || "\u0130simsiz"))}</button><small>No ${escapeHtml(cleanDisplay(student.schoolNo || "-"))}</small></td><td>${escapeHtml(cleanDisplay(student.className))}</td><td>${cleanDisplay(reportReason(student, activeReport))}</td><td><span class="risk-pill">${riskCount(student)}</span></td><td><span class="status-pill">${cleanDisplay(level)}</span></td></tr>`;
    })
    .join("");
  setSafeHtml(document.querySelector("#reportsView"), `
    <div class="content-grid">
      <article class="panel span-4">
        <div class="section-title">
          <div>
            <h3>Hazır listeler</h3>
            <p>İstenen bilgiye sahip öğrencileri sıralı al.</p>
          </div>
        </div>
        <div class="report-list">
          ${reportOptions.map((option) => `<button class="${option.id === activeReport.id ? "active" : ""}" ${uiAction("click", (event, element) => { selectReport((option.id)); })}><strong>${escapeHtml(option.title)}</strong><span>${state.students.filter(option.filter).length} öğrenci</span></button>`).join("")}
        </div>
      </article>
      <article class="panel span-8">
        <div class="section-title">
          <div>
            <h3>${escapeHtml(activeReport.title)}</h3>
            <p>${filteredStudents.length} öğrenci listelendi. Ada tıklayınca öğrenci dosyası açılır.</p>
          </div>
          <div class="card-actions">
            <button class="ghost" ${uiAction("click", (event, element) => { downloadReportCsv(); })}>CSV indir</button>
            <button class="primary" ${uiAction("click", (event, element) => { printActiveReport(); })}>Yazd\u0131r / PDF</button>
          </div>
        </div>
        <div class="report-table-wrap">
          <table class="table report-table">
            <thead><tr><th>Öğrenci</th><th>Sınıf</th><th>Listeye girme nedeni</th><th>Risk</th><th>Takip</th></tr></thead>
            <tbody>${rows || `<tr><td colspan="5">Bu ölçüte uyan öğrenci yok.</td></tr>`}</tbody>
          </table>
        </div>
      </article>
    </div>
  `);
}

function getReportOptions() {
  return [
    { id: "all", title: "Tüm öğrenciler", filter: () => true, reason: (s) => s.academicStatus || "Genel liste" },
    { id: "active_class", title: `${selectedClass} sınıf öğrencileri`, filter: (s) => s.className === selectedClass, reason: (s) => joinParts([s.academicStatus || "Aktif sınıf", `No ${escapeHtml(s.schoolNo || "-")}`]) },
    { id: "follow_need", title: "Takip ihtiyacı olanlar", filter: (s) => riskCount(s) >= 4, reason: (s) => `${riskCount(s)} risk göstergesi / ${riskLevel(s)[0]}` },
    { id: "fragmented_family", title: "Parçalanmış / ayrı aile", filter: (s) => s.risk.parents_separate || s.risk.parents_divorced || s.parentsTogether === "Ayrı", reason: () => "Anne-baba ayrı/boşanmış bilgisi" },
    { id: "orphan", title: "Anne/baba kaybı", filter: (s) => s.risk.mother_deceased || s.risk.father_deceased || s.risk.both_deceased || s.motherAlive === "Ölü" || s.fatherAlive === "Ölü", reason: () => "Anne/baba hayatta değil bilgisi" },
    { id: "financial", title: "Maddi s?k?nt? / imkan eksikli?i", filter: (s) => s.risk.financial || s.internet === "Yok" || s.computerAtHome === "Yok" || hasText(s.householdIncome), reason: (s) => joinParts([s.risk.financial ? "Risk haritas?" : "", s.internet === "Yok" ? "?nternet yok" : "", s.computerAtHome === "Yok" ? "Bilgisayar yok" : "", s.householdIncome]) },
    { id: "absenteeism", title: "Devamsızlık takibi", filter: (s) => s.risk.absenteeism || hasRecord(s.id, "attendance"), reason: () => "Devamsızlık riski veya devamsızlık formu" },
    { id: "attendance_critical", title: "Kritik devamsızlık", filter: (s) => attendanceStatus(s).level !== "normal", reason: (s) => {
      const status = attendanceStatus(s);
      return `${escapeHtml(status.title)}: özürsüz ${status.unexcused}, toplam ${status.total} / ${escapeHtml(status.limits.label)}`;
    } },
    { id: "special_education", title: "Özel eğitim / öğrenme gözlemi", filter: (s) => s.risk.special_education || hasRecord(s.id, "special_education"), reason: () => "Özel eğitim veya gözlem kaydı" },
    { id: "violence", title: "Şiddet / disiplin / akran riski", filter: (s) => s.risk.risky_peers || hasRecord(s.id, "violence_climate"), reason: () => "Okul iklimi, disiplin veya akran ilişkisi kaydı" },
    { id: "counseling", title: "Görüşme / yönlendirme kaydı", filter: (s) => hasRecord(s.id, "counseling_referral"), reason: () => "Öğrenci görüşmesi veya yönlendirme formu" },
    { id: "academic_support", title: "Akademik destek ihtiyacı", filter: (s) => s.risk.low_academic || s.academicStatus === "Destek gerekli" || hasRecord(s.id, "exam_growth"), reason: (s) => s.academicStatus || "Sınav/gelişim kaydı" },
    { id: "career_forms", title: "Mesleki/Yaşam Pencerem uygulananlar", filter: (s) => hasRecord(s.id, "career_self"), reason: () => "Mesleki eğilim / Yaşam Pencerem / kendini tanıma kaydı" },
    { id: "snellen", title: "Snellen göz testi uygulananlar", filter: (s) => hasRecord(s.id, "snellen"), reason: () => "Snellen göz testi kaydı" },
  ];
}

function selectReport(reportId) {
  selectedReportId = reportId;
  renderReports();
}

function activeReportData() {
  const reportOptions = getReportOptions();
  const activeReport = reportOptions.find((option) => option.id === selectedReportId) || reportOptions[0];
  const students = state.students.filter(activeReport.filter);
  return { activeReport, students };
}

function downloadReportCsv() {
  const { activeReport, students } = activeReportData();
  const header = ["Öğrenci", "Sınıf", "Okul No", "Listeye girme nedeni", "Risk sayısı", "Takip"];
  const rows = students.map((student) => {
    const [level] = riskLevel(student);
    return [student.fullName, student.className, student.schoolNo, reportReason(student, activeReport), riskCount(student), level];
  });
  const csv = [header, ...rows].map((row) => row.map(csvCell).join(";")).join("\n");
  downloadTextFile(`${slugify(activeReport.title)}-${new Date().toISOString().slice(0, 10)}.csv`, `\ufeff${csv}`, "text/csv;charset=utf-8");
}

function printActiveReport() {
  const { activeReport, students } = activeReportData();
  const rows = students.map((student) => {
    const [level] = riskLevel(student);
    return `<tr><td>${escapeHtml(student.fullName || "-")}</td><td>${escapeHtml(student.className || "-")}</td><td>${escapeHtml(student.schoolNo || "-")}</td><td>${escapeHtml(reportReason(student, activeReport))}</td><td>${riskCount(student)}</td><td>${escapeHtml(level)}</td></tr>`;
  }).join("");
  const html = `
    <html><head><title>${escapeHtml(activeReport.title)}</title>
    <style>body{font-family:Arial,sans-serif;padding:24px;color:#172029}h1{margin:0 0 6px}p{color:#66717d}table{width:100%;border-collapse:collapse;margin-top:18px}th,td{border:1px solid #d8e0ea;padding:8px;text-align:left;font-size:12px}th{background:#f3f6f9}</style>
    </head><body>
      <h1>${escapeHtml(state.school.name || "Öğrenci İzleme Sistemi")}</h1>
      <p>${escapeHtml(activeReport.title)} - ${new Date().toLocaleDateString("tr-TR")}</p>
      <table><thead><tr><th>Öğrenci</th><th>Sınıf</th><th>No</th><th>Neden</th><th>Risk</th><th>Takip</th></tr></thead><tbody>${rows || `<tr><td colspan="6">Kayıt yok.</td></tr>`}</tbody></table>
    </body></html>
  `;
  const popup = window.open("", "_blank");
  popup.document.write(sanitizeHTML(html));
  popup.document.close();
  popup.focus();
  popup.print();
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function slugify(value) {
  return normalizeExamKey(value).replace(/\s+/g, "-").slice(0, 48) || "rapor";
}

function hasRecord(studentId, formId) {
  return state.formRecords.some((record) => record.studentId === studentId && record.formId === formId);
}

function hasText(value) {
  return Boolean(String(value || "").trim());
}

function reportReason(student, report) {
  return report.reason ? report.reason(student) || "-" : "-";
}

function buildRecommendations(student) {
  const risk = student.risk || {};
  const items = [];
  const count = riskCount(student);
  const [level] = riskLevel(student);
  if (count >= 8) {
    items.push("Yüksek takip: Aynı hafta içinde bireysel öğrenci görüşmesi aç; görüşme formu ve öğrenci dosyasını güncelle.");
    items.push("Sınıf rehber öğretmeni, rehberlik servisi ve okul idaresiyle gizlilik ilkesine uygun kısa izlem toplantısı planla.");
    items.push("Veli/vasiyi bilgilendirme ve aile görüşmesi planla; ulaşılamazsa okul yönetimi üzerinden resmi iletişim adımlarını kaydet.");
    items.push("Riskler tek veriye göre değil; gözlem, form, görüşme, devamsızlık ve akademik kayıtlarla çok boyutlu doğrulansın.");
  } else if (count >= 4) {
    items.push("Orta takip: 2-3 hafta içinde öğrenci görüşmesi ve sınıf rehber öğretmeni gözlem notu planla.");
    items.push("Risk göstergeleri tekrar ediyorsa veli görüşmesi ve kısa izlem hedefi oluştur.");
  } else if (count >= 1) {
    items.push("Düşük takip: Koruyucu faktörleri güçlendiren sınıf içi destek ve dönemlik gözlem yeterli olabilir.");
  }

  if (risk.absenteeism) items.push("Devamsızlık için sınıf rehber öğretmeni, veli ve idare iş birliğiyle neden analizi ve haftalık takip aç.");
  if (risk.low_academic) items.push("Akademik destek için ders öğretmeni gözlem notu, kazanım eksiği ve küçük hedefli çalışma planı iste.");
  if (risk.financial) items.push("Maddi destek/okul sosyal yardım imkanları için idare ve ilgili komisyonlarla gizlilik içinde görüş.");
  if (risk.domestic_violence || risk.student_addiction || risk.mental_health || risk.family_addiction || risk.family_mental) {
    items.push("Psikososyal risk var: Rehberlik servisi öncelikli ve gizli takip kaydı açmalı; ihtiyaç halinde RAM, sağlık kuruluşu veya ilgili kurum yönlendirmesi değerlendirilmeli.");
  }
  if (risk.domestic_violence) items.push("Şiddet/ihmal şüphesi varsa öğrenci güvenliği önceliklidir; okulun kriz ve bildirim prosedürü idareyle birlikte işletilmeli.");
  if (risk.special_education) items.push("Özel eğitim/öğrenme gözlemi varsa sınıf içi düzenleme, BEP/destek eğitim ve RAM süreci kontrol edilmeli.");
  if (risk.risky_peers) items.push("Akran ilişkileri için etiketlemeden bireysel görüşme, sınıf iklimi çalışması ve öğretmen gözlemi planla.");
  if (risk.parents_separate || risk.parents_divorced || risk.only_mother || risk.only_father) {
    items.push("Aile yapısı bilgisi tek başına risk sayılmamalı; öğrencinin bakım, iletişim ve okul devamı üzerindeki etkisi görüşmeyle doğrulanmalı.");
  }
  if (!items.length) items.push("Rutin izleme: Koruyucu faktörleri güçlendiren sınıf içi destek ve dönemlik genel gözlem yeterli.");
  if (count >= 8) items.push("İzlem sıklığı önerisi: İlk ay haftalık kısa kontrol; risk azalmıyorsa okul rehberlik planına bireysel hedef olarak ekle.");
  else if (count >= 4) items.push("İzlem sıklığı önerisi: Ayda en az bir kısa kontrol ve dönem içinde veli/öğretmen geri bildirimi.");
  items.push(`Sistem sonucu ${level.toLowerCase()} önceliği üretir; tanı değildir. Nihai karar rehberlik servisi ve okul idaresinin mevzuata uygun değerlendirmesiyle alınır.`);
  return items;
}

function selectStudent(id, viewName) {
  selectedStudentId = id;
  const student = state.students.find((item) => item.id === id);
  if (student.className) {
    selectedClass = student.className;
    selectedGrade = student.className.match(/^(9|10|11|12)/)?.[1] || selectedGrade;
    fillClassSelect();
  }
  if (viewName) setView(viewName);
  renderAll();
}

function toggleRisk(studentId, key, checked) {
  const student = state.students.find((item) => item.id === studentId);
  student.risk = student.risk || {};
  student.risk[key] = checked;
  saveState();
  renderRisk();
  renderDashboard();
  renderReports();
}

function openStudentDialog(id, draft = null) {
  editingStudentId = id || null;
  const student = state.students.find((item) => item.id === id);
  if (!formSectionsRoot.innerHTML.trim()) renderStudentFormShell();
  document.querySelector("#studentDialogTitle").textContent = student ? "Öğrenciyi Düzenle" : "Yeni Öğrenci";
  studentForm.reset();
  fillStudentForm({ ...(student || {}), ...(draft || {}) });
  if (!student && !draft) {
    setValue("internet", "Bilinmiyor");
    setValue("computerAtHome", "Bilinmiyor");
    setValue("academicStatus", "Orta");
  }
  studentDialog.showModal();
}

function fillStudentForm(data) {
  allFields().forEach((item) => setValue(item.name, data[item.name] || ""));
}

function setValue(name, value) {
  const element = studentForm.elements[name];
  if (element) element.value = value;
}

function syncCameraInputToFileInput(sourceId, targetId, previewId) {
  const source = document.getElementById(sourceId);
  const target = document.getElementById(targetId);
  const file = source?.files?.[0];
  if (!file || !target) return;
  const transfer = new DataTransfer();
  transfer.items.add(file);
  target.files = transfer.files;
  const preview = document.getElementById(previewId);
  if (preview) preview.textContent = `Fotoğraf seçildi: ${escapeHtml(file.name || "kamera görüntüsü")}. Şimdi belgeyi analiz edebilirsin.`;
}

async function importStudentDocument() {
  const input = document.querySelector("#studentDocInput");
  const preview = document.querySelector("#studentImportPreview");
  const file = input.files[0];
  if (!file) {
    preview.textContent = "Önce bir belge seç.";
    return;
  }
  preview.textContent = "Belge okunuyor...";
  try {
    const text = await extractTextFromFile(file);
    if (!text.trim()) {
      preview.textContent = "Belgeden okunabilir metin çıkarılamadı.";
      return;
    }
    const draft = applyRiskHints(parseStudentText(text), text, file.name);
    fillStudentForm({ ...Object.fromEntries(new FormData(studentForm).entries()), ...draft });
    const filled = Object.entries(draft).filter(([key, value]) => !["risk", "rawText", "formValues", "sourceNotes"].includes(key) && value);
    setSafeHtml(preview, filled.length
      ? `<strong>${filled.length} alan dolduruldu.</strong><br>${filled.map(([key, value]) => `${fieldLabel(key)}: ${escapeHtml(value)}`).slice(0, 8).join("<br>")}`
      : "Belge okundu ama güvenilir öğrenci alanı yakalanmadı. Eski .doc ise .docx olarak kaydedip tekrar dene.");
  } catch (error) {
    preview.textContent = `Belge okunamadı: ${escapeHtml(error.message)}`;
  }
}

function deleteStudent(id) {
  if (!confirm("Bu öğrenciyi silmek istiyor musun")) return;
  state.students = state.students.filter((student) => student.id !== id);
  selectedStudentId = currentStudents()[0]?.id || state.students[0]?.id || null;
  saveState();
  renderAll();
}

async function mockExtract(event) {
  event.preventDefault();
  const file = document.querySelector("#fileInput").files[0];
  const pastedText = document.querySelector("#ocrText").value.trim();
  const preview = document.querySelector("#extractPreview");
  if (!file && !pastedText) {
    preview.textContent = "Önce bir dosya seç veya belgeden okunan metni yapıştır.";
    return;
  }
  preview.textContent = "Belge okunuyor, biraz bekle...";
  const sourceName = file.name || "Yapıştırılan metin";
  try {
    const fileText = file ? await extractTextFromFile(file) : "";
    const combinedText = [fileText, pastedText].filter(Boolean).join("\n");
    if (!combinedText.trim()) {
      preview.textContent = "Belgeden okunabilir metin çıkarılamadı. Ekran görüntüsüyse daha net bir görsel deneyebiliriz.";
      return;
    }
    latestDraft = parseStudentText(combinedText);
    latestDraft.sourceNotes = `Belge aktarımı taslağı: ${escapeHtml(sourceName)}. Kullanıcı onayı gerekir.`;
    latestDraft = applyRiskHints(latestDraft, combinedText, sourceName);
    latestDraft.rawText = combinedText;
    latestDraft.formValues = parseFormValuesForCatalog(selectedFormId, combinedText);
    setSafeHtml(preview, draftPreview(latestDraft, sourceName, combinedText));
  } catch (error) {
    preview.textContent = `Belge okunamadı: ${escapeHtml(error.message)}`;
  }
}

async function extractTextFromFile(file) {
  validateImportFile(file);
  const ext = file.name.split(".").pop().toLowerCase();
  let text = "";
  if (["txt", "csv", "tsv"].includes(ext)) {
    text = await file.text();
  } else if (["xlsx", "xls"].includes(ext)) {
    text = await extractSpreadsheetText(file);
  } else if (ext === "docx") {
    text = await extractDocxText(file);
  } else if (ext === "pdf") {
    text = await extractPdfText(file);
  } else if (["png", "jpg", "jpeg", "webp", "bmp"].includes(ext)) {
    text = await extractImageText(file);
  } else if (ext === "doc") {
    text = await extractLegacyDocText(file);
  } else {
    throw new Error("Bu dosya türü henüz desteklenmiyor.");
  }
  return cleanImportedText(text);
}

function validateImportFile(file) {
  if (!file) throw new Error("Dosya seçilmedi.");
  const ext = (file.name.split(".").pop() || "").toLowerCase();
  const allowedExt = new Set(["txt", "csv", "tsv", "xlsx", "xls", "doc", "docx", "pdf", "png", "jpg", "jpeg", "webp", "bmp"]);
  const allowedMime = /^(text\/|image\/|application\/pdf|application\/vnd\.|application\/msword|application\/octet-stream)/i;
  const maxBytes = 15 * 1024 * 1024;
  if (!allowedExt.has(ext)) throw new Error("Güvenlik için yalnızca PDF, Word, Excel, metin ve görsel dosyaları kabul edilir.");
  if (file.size > maxBytes) throw new Error("Dosya çok büyük. En fazla 15 MB yükleyin; fotoğrafı kırpıp tekrar deneyin.");
  if (file.type && !allowedMime.test(file.type)) throw new Error("Dosya türü güvenli listede değil.");
}

async function extractSpreadsheetText(file) {
  if (!window.XLSX) throw new Error("Excel okuma kütüphanesi yüklenemedi.");
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array" });
  return workbook.SheetNames.map((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
    return [`[Sayfa: ${sheetName}]`, ...rows.map((row) => row.join(" : "))].join("\n");
  }).join("\n\n");
}

async function extractDocxText(file) {
  const buffer = await file.arrayBuffer();
  const tableText = window.JSZip ? await extractDocxStructuredText(buffer) : "";
  if (window.mammoth) {
    const result = await mammoth.extractRawText({ arrayBuffer: buffer });
    return [tableText, result.value || ""].filter(Boolean).join("\n\n");
  }
  if (tableText) return tableText;
  throw new Error("Word okuma kütüphanesi yüklenemedi.");
}

async function extractDocxStructuredText(buffer) {
  const zip = await JSZip.loadAsync(buffer);
  const documentXml = await zip.file("word/document.xml").async("text");
  if (!documentXml) return "";
  const xml = new DOMParser().parseFromString(documentXml, "application/xml");
  const body = xml.getElementsByTagName("w:body")[0] || xml.documentElement;
  const blocks = [];
  [...body.childNodes].forEach((node) => {
    if (node.nodeType !== 1) return;
    if (node.nodeName === "w:tbl") {
      blocks.push(...readDocxTable(node));
    } else if (node.nodeName === "w:p") {
      const text = readDocxText(node);
      if (text) blocks.push(text);
    }
  });
  return blocks.join("\n");
}

function readDocxTable(tableNode) {
  const rows = [];
  [...tableNode.getElementsByTagName("w:tr")].forEach((row) => {
    const cells = [...row.getElementsByTagName("w:tc")]
      .map((cell) => readDocxText(cell))
      .map((text) => text.replace(/\s+/g, " ").trim())
      .filter(Boolean);
    if (!cells.length) return;
    const pairs = pairTableCells(cells);
    if (pairs.length) rows.push(...pairs);
    if (!pairs.length || cells.length <= 2) rows.push(cells.join(" | "));
  });
  return rows;
}

function readDocxText(node) {
  return [...node.getElementsByTagName("w:t")]
    .map((item) => item.textContent || "")
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function pairTableCells(cells) {
  const pairs = [];
  for (let index = 0; index < cells.length - 1; index += 1) {
    const left = cells[index];
    const right = cells[index + 1];
    if (isKnownLabel(left) && !isKnownLabel(right) && !looksLikeHeading(right)) {
      pairs.push(`${left}: ${sanitizeImportedAnswer(right)}`);
    }
  }
  return pairs;
}

async function extractPdfText(file) {
  validateImportFile(file);
  const pdfjs = window.pdfjsLib || globalThis.pdfjsLib || await window.pdfjsReady;
  if (!pdfjs) throw new Error("PDF okuma kütüphanesi yüklenemedi.");
  pdfjs.GlobalWorkerOptions.workerSrc = "./vendor/pdf.worker.min.mjs";
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: buffer, disableJavaScript: true, isEvalSupported: false }).promise;
  const pages = [];
  for (let pageNo = 1; pageNo <= Math.min(pdf.numPages, 12); pageNo += 1) {
    const page = await pdf.getPage(pageNo);
    const content = await page.getTextContent();
    pages.push(pdfItemsToLines(content.items));
  }
  const text = pages.join("\n");
  if (text.replace(/\s/g, "").length > 30 || !file.type?.includes("pdf")) return text;
  return `${escapeHtml(text)}\n[PDF_TARAMA_UYARISI]\nBu PDF tarama gibi görünüyor. En iyi sonuç için sayfanın net fotoğrafını veya görsel PDF sayfasını yükleyin.`;
}

function pdfItemsToLines(items) {
  const rows = new Map();
  items.forEach((item) => {
    const text = String(item.str || "").trim();
    if (!text) return;
    const x = Math.round(item.transform?.[4] || 0);
    const y = Math.round((item.transform?.[5] || 0) / 3) * 3;
    const key = String(y);
    if (!rows.has(key)) rows.set(key, []);
    rows.get(key).push({ x, text });
  });
  return [...rows.entries()]
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    .map(([, row]) => {
      const sorted = row.sort((a, b) => a.x - b.x);
      let lastEnd = null;
      return sorted.map((item) => {
        const gap = lastEnd == null ? 0 : item.x - lastEnd;
        const separator = gap > 70 ? " | " : " ";
        lastEnd = item.x + Math.max(30, item.text.length * 5);
        return `${separator}${escapeHtml(item.text)}`;
      }).join("").trim();
    })
    .join("\n");
}

async function extractImageText(file) {
  validateImportFile(file);
  if (!window.Tesseract) throw new Error("Görsel OCR kütüphanesi yüklenemedi.");
  const prepared = await prepareImageForOcr(file);
  const result = await Tesseract.recognize(prepared || file, "tur+eng", {
    tessedit_pageseg_mode: "6",
    preserve_interword_spaces: "1",
  });
  const confidence = Math.round(result.data.confidence || 0);
  const warning = confidence && confidence < 55
    ? "\n[OCR_UYARISI]\nFotoğraf düşük güvenle okundu. Işık, kırpma ve düz açıyla tekrar çekmek daha doğru aktarır."
    : "";
  return `[GORSEL_OCR guven=${confidence}]\n${escapeHtml(result.data.text || "")}${warning}`;
}

async function prepareImageForOcr(file) {
  if (!file.type?.startsWith("image/")) return file;
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(3, Math.max(1.4, 1800 / Math.max(bitmap.width, bitmap.height)));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const image = context.getImageData(0, 0, canvas.width, canvas.height);
  for (let index = 0; index < image.data.length; index += 4) {
    const gray = 0.299 * image.data[index] + 0.587 * image.data[index + 1] + 0.114 * image.data[index + 2];
    const value = gray > 170 ? 255 : gray < 115 ? 0 : gray;
    image.data[index] = image.data[index + 1] = image.data[index + 2] = value;
  }
  context.putImageData(image, 0, 0);
  return await new Promise((resolve) => canvas.toBlob((blob) => resolve(blob || file), "image/png"));
}

async function extractLegacyDocText(file) {
  const buffer = await file.arrayBuffer();
  const utf16 = new TextDecoder("utf-16le", { fatal: false }).decode(buffer);
  const plain = new TextDecoder("windows-1254", { fatal: false }).decode(buffer);
  const extracted = [utf16, plain]
    .map((text) => {
      const chunks = text.match(/[A-Za-zÇĞİÖŞÜçğıöşü0-9][A-Za-zÇĞİÖŞÜçğıöşü0-9\s:;,.()/%\-]{4,}/g) || [];
      return chunks.map((chunk) => chunk.replace(/\s+/g, " ").trim()).filter(Boolean).join("\n");
    })
    .join("\n");
  return `[ESKI_DOC_GUVENLI_MOD]\n${extracted}`;
}

function parseStudentText(text) {
  const draft = {};
  const legacySafeMode = text.includes("[ESKI_DOC_GUVENLI_MOD]");
  const aliases = studentQuestionAliases();
  Object.assign(draft, extractKnownAnswersFromFlow(text, aliases, { legacySafeMode }));
  const lines = text.split(/\n+/).map((line) => line.trim()).filter((line) => line && line !== "[ESKI_DOC_GUVENLI_MOD]");
  lines.forEach((line) => {
    const [rawKey, ...rest] = line.split(":");
    if (!rest.length) return;
    const key = normalizeKey(rawKey);
    if (key.includes("|") || countAliasMatches(key, aliases) > 1) return;
    const match = findAliasMatch(key, aliases);
    const value = sanitizeExtractedValue(rest.join(":").trim(), aliases, match?.[0]);
    if (match && value) draft[match[0]] = value;
  });
  if (legacySafeMode) return draft;
  lines.forEach((line, index) => {
    if (line.includes(":")) return;
    const key = normalizeKey(line);
    if (countAliasMatches(key, aliases) > 1) return;
    const match = findAliasMatch(key, aliases, true);
    if (!match || draft[match[0]]) return;
    const next = lines[index + 1] || "";
    const nextKey = normalizeKey(next);
    if (!next || next.includes(":") || isKnownLabel(next) || countAliasMatches(nextKey, aliases) > 1 || looksLikeHeading(next)) return;
    const value = sanitizeExtractedValue(next.trim(), aliases, match[0]);
    if (value) draft[match[0]] = value;
  });
  return draft;
}

function studentQuestionAliases() {
  return [
    ["schoolNo", ["okul numarası", "okul no", "numarası", "numara"]],
    ["nationalId", ["t.c kimlik no", "tc kimlik", "t.c. kimlik no"]],
    ["birthPlace", ["doğum yeri"]],
    ["birthDate", ["doğum tarihi"]],
    ["address", ["ev adresi", "adres"]],
    ["guardianRelation", ["velisi kim"]],
    ["guardianName", ["veli adı soyadı", "veli adı"]],
    ["guardianNationalId", ["veli t.c", "veli tc"]],
    ["guardianPhone", ["cep no", "veli telefon", "veli cep"]],
    ["fatherName", ["baba adı soyadı", "baba adı"]],
    ["fatherEducation", ["baba öğrenim", "baba öğrenim durumu"]],
    ["fatherJob", ["baba mesleği"]],
    ["motherName", ["anne adı soyadı", "anne adı"]],
    ["motherEducation", ["anne öğrenim", "anne öğrenim durumu"]],
    ["motherJob", ["anne mesleği"]],
    ["parentsTogether", ["anne baba birlikte mi", "anne babası birlikte mi"]],
    ["rentStatus", ["ev kira mı", "kira mı"]],
    ["ownRoom", ["kendine ait odası var mı"]],
    ["internet", ["evde internet var mı", "evde internet"]],
    ["computerAtHome", ["evde bilgisayar var mı", "evde bilgisayar"]],
    ["libraryAtHome", ["evde kitaplık var mı", "evde kitaplık"]],
    ["transport", ["okula nasıl geliyor", "okula geliş"]],
    ["working", ["bir işte çalışıyor mu", "bir işte çalışıyor"]],
    ["chronicIllness", ["sürekli hastalığı"]],
    ["medication", ["sürekli kullandığı ilaç"]],
    ["allergy", ["neye alerjisi var", "alerji"]],
    ["siblingsCount", ["kardeş sayısı"]],
    ["lgsScore", ["lgs puanı", "lgs", "yerleştirme puanı", "liseye geçiş puanı"]],
    ["lgsPercentile", ["lgs yüzdelik", "yüzdelik dilim", "yüzdelik"]],
    ["middleSchoolAverage", ["ortaokul başarı puanı", "obp", "ortaokul ortalaması"]],
    ["placementSchool", ["yerleştiği okul", "yerleştirildiği okul", "geldiği okul"]],
    ["householdIncome", ["haneye giren toplam gelir"]],
    ["householdSize", ["hanede yaşayan kişi sayısı"]],
    ["fullName", ["öğrencinin adı soyadı", "adı soyadı", "ad soyad"]],
  ];
}

function extractKnownAnswersFromFlow(text, aliases, options = {}) {
  const normalizedText = normalizeKey(text.replace("[ESKI_DOC_GUVENLI_MOD]", " "));
  const legacyFlowAllowedTargets = new Set(["fullName", "guardianName", "nationalId", "schoolNo"]);
  const hits = [];
  aliases.forEach(([target, names]) => {
    if (options.legacySafeMode && !legacyFlowAllowedTargets.has(target)) return;
    names.forEach((name) => {
      const key = normalizeKey(name);
      if (!key || key.length < 3) return;
      let index = normalizedText.indexOf(key);
      while (index !== -1) {
        const before = normalizedText.slice(Math.max(0, index - 10), index).trim();
        if (!(target === "fullName" && /(veli|anne|baba)$/.test(before))) {
          hits.push({ target, key, start: index, end: index + key.length });
        }
        index = normalizedText.indexOf(key, index + key.length);
      }
    });
  });
  const ordered = hits
    .sort((a, b) => a.start - b.start || b.key.length - a.key.length)
    .filter((hit, index, array) => index === 0 || hit.start !== array[index - 1].start);
  const result = {};
  ordered.forEach((hit, index) => {
    if (result[hit.target]) return;
    const next = ordered[index + 1];
    const value = normalizedText.slice(hit.end, next ? next.start : hit.end + 120).trim();
    const clean = sanitizeFlowValue(value, aliases, hit.target);
    if (clean) result[hit.target] = clean;
  });
  return result;
}

function sanitizeFlowValue(value, aliases, target = "") {
  const clean = String(value || "").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  if (clean.length > 90) return "";
  if (countAliasMatches(clean, aliases) > 0) return "";
  if (looksLikeHeading(clean)) return "";
  const forbidden = ["ogrenci bilgi", "veli bilgi", "anne bilgi", "baba bilgi", "saglik bilgi", "var mi"];
  if (forbidden.some((item) => clean.includes(item))) return "";
  if (/\bev\b/.test(clean)) return "";
  const restored = restoreCommonAnswer(clean);
  return validateAnswerForTarget(target, restored) ? restored : "";
}

function restoreCommonAnswer(value) {
  const normalized = normalizeKey(value);
  const options = {
    evet: "Evet",
    hayir: "Hayır",
    yok: "Yok",
    var: "Var",
    anne: "Anne",
    baba: "Baba",
  };
  return options[normalized] || value;
}

function validateAnswerForTarget(target, value) {
  const normalized = normalizeKey(value);
  if (!normalized) return false;
  const binaryTargets = new Set(["parentsTogether", "rentStatus", "ownRoom", "internet", "computerAtHome", "libraryAtHome", "working"]);
  if (binaryTargets.has(target)) return /^(evet|hayir|var|yok|bilinmiyor)$/.test(normalized);
  if (target === "siblingsCount" || target === "householdSize") return /\d/.test(normalized);
  if (target === "householdIncome") return /\d|tl|lira|asgari|gelir yok/.test(normalized);
  if (target === "chronicIllness" || target === "medication" || target === "allergy") {
    if (/(gelir|hane|telefon|posta|numara|kimlik|sinif|dogum|adres)/.test(normalized)) return false;
    return /^(var|yok|evet|hayir|bilinmiyor)$/.test(normalized) || normalized.length >= 4;
  }
  if (target === "transport") {
    if (/(posta|telefon|kimlik|gelir|dogum|sinif)/.test(normalized)) return false;
    return normalized.length >= 3;
  }
  if (target === "nationalId" || target === "guardianNationalId") return /\d{6,}/.test(normalized);
  if (target === "schoolNo") return /\d/.test(normalized);
  return normalized.length >= 2;
}

function findAliasMatch(key, aliases, strict = false) {
  return aliases.find(([target, names]) => {
    if (target === "fullName" && /(veli|anne|baba)/.test(key)) return false;
    return names.some((name) => {
      const normalizedName = normalizeKey(name);
      return strict ? key === normalizedName : key.includes(normalizedName);
    });
  });
}

function countAliasMatches(key, aliases) {
  return aliases.filter(([, names]) => names.some((name) => key.includes(normalizeKey(name)))).length;
}

function sanitizeExtractedValue(value, aliases, target = "") {
  const clean = String(value || "").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  const key = normalizeKey(clean);
  if (clean.includes("|") && countAliasMatches(key, aliases) > 0) return "";
  if (countAliasMatches(key, aliases) > 0) return "";
  if (isKnownLabel(clean) || looksLikeHeading(clean)) return "";
  if (/^(var|yok|evet|hayir|hayır|bilinmiyor)$/i.test(clean) === false && clean.length < 2) return "";
  return validateAnswerForTarget(target, clean) ? clean : "";
}

function isKnownLabel(value) {
  const key = normalizeKey(value);
  if (!key || key.length < 2) return false;
  return allFields().some((item) => {
    const label = normalizeKey(item.label);
    return key === label || key.includes(label) || label.includes(key);
  }) || formCatalog.some((form) => form.fields.some((item) => {
    const label = normalizeKey(item.label);
    return key === label || key.includes(label) || label.includes(key);
  }));
}

function looksLikeHeading(value) {
  const letters = value.replace(/[^A-Za-zÇĞİÖŞÜçğıöşü]/g, "");
  if (letters.length < 4) return false;
  return value === value.toLocaleUpperCase("tr-TR");
}

function applyRiskHints(draft, text, sourceName) {
  const haystack = normalizeKey(`${escapeHtml(text)} ${escapeHtml(sourceName)}`);
  const risk = {};
  if (normalizeKey(draft.motherEducation || "").includes("ilkokul")) risk.mother_primary = true;
  if (normalizeKey(draft.fatherEducation || "").includes("ilkokul")) risk.father_primary = true;
  if (haystack.includes("tek çocuk")) risk.single_child = true;
  if (/(^|\s)5\s*(ve|den|ve ustu|ve uzeri)/.test(haystack)) risk.many_siblings = true;
  if (haystack.includes("boşan")) risk.parents_divorced = true;
  if (haystack.includes("ayrı")) risk.parents_separate = true;
  if (haystack.includes("internet yok")) draft.internet = "Yok";
  if (haystack.includes("bilgisayar yok")) draft.computerAtHome = "Yok";
  if (haystack.includes("devamsız")) risk.absenteeism = true;
  if (haystack.includes("maddi")) risk.financial = true;
  if (haystack.includes("akademik başarısı düşük")) risk.low_academic = true;
  if (haystack.includes("yabancı uyruk")) risk.foreign_national = true;
  if (Object.keys(risk).length) draft.risk = risk;
  return draft;
}

function draftPreview(draft, sourceName, rawText = "") {
  const rows = Object.entries(draft)
    .filter(([key]) => !["risk", "rawText", "formValues", "sourceNotes"].includes(key))
    .map(([key, value]) => `<tr><td>${fieldLabel(key)}</td><td>${escapeHtml(value || "-")}</td></tr>`)
    .join("");
  const riskRows = Object.keys(draft.risk || {}).map((key) => `<li>${riskLabel(key)}</li>`).join("");
  const rawSample = escapeHtml(rawText).slice(0, 1200);
  return `
    <div class="preview-title">Kaynak: ${escapeHtml(sourceName)}</div>
    ${rawText.includes("[ESKI_DOC_GUVENLI_MOD]") ? `<div class="warning-box">Bu eski Word (.doc) dosyası güvenli modda okundu. Tablo başlıkları birbirine karışabildiği için şüpheli alanlar otomatik doldurulmadı. En sağlıklı sonuç için dosyayı Word'de .docx olarak kaydedip yükle.</div>` : ""}
    <table class="table preview-table"><tbody>${rows || `<tr><td colspan="2">Metinden net alan yakalanmadı; yine de kaynak notu eklendi.</td></tr>`}</tbody></table>
    <div class="preview-title">Risk ipuçları</div>
    <ul class="recommendations">${riskRows || "<li>Risk ipucu yakalanmadı.</li>"}</ul>
    <details class="raw-text">
      <summary>Okunan metni göster</summary>
      <pre>${rawSample}${rawText.length > 1200 ? "\n..." : ""}</pre>
    </details>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function openDraftAsStudent() {
  if (!latestDraft) {
    alert("Önce belgeyi taslak analiz et.");
    return;
  }
  const matched = matchStudentByIdentity(latestDraft, { strictNumber: Boolean(latestDraft.schoolNo) });
  if (matched) {
    selectedStudentId = matched.id;
    openStudentDialog(matched.id, { ...matched, ...latestDraft, fullName: matched.fullName, schoolNo: matched.schoolNo });
    return;
  }
  openStudentDialog(null, latestDraft);
}

function applyDraftToTarget() {
  if (!latestDraft) {
    alert("Önce belgeyi taslak analiz et.");
    return;
  }
  const target = document.querySelector("#draftTarget").value;
  if (target === "new") {
    openDraftAsStudent();
    return;
  }
  const student = state.students.find((item) => item.id === target);
  Object.assign(student, normalizeStudent(latestDraft));
  student.risk = { ...(student.risk || {}), ...(latestDraft.risk || {}) };
  selectedStudentId = student.id;
  syncRisksFromProfile(student);
  saveState();
  renderAll();
  setView("dossier");
}

function applyDraftToCurrentForm() {
  if (!latestDraft) {
    alert("Önce belgeyi analiz et.");
    return;
  }
  const student = matchStudentByIdentity(latestDraft, { strictNumber: Boolean(latestDraft.schoolNo) }) || selectedStudent();
  if (!student) {
    alert("Önce öğrenci seç.");
    return;
  }
  selectedStudentId = student.id;
  const formValues = latestDraft.formValues || parseFormValuesForCatalog(selectedFormId, latestDraft.rawText || "");
  upsertFormRecord(student.id, selectedFormId, formValues);
  applyFormRisks(student, selectedFormId, formValues);
  saveState();
  renderAll();
  setView("forms");
}

function parseFormValuesForCatalog(formId, rawText) {
  const form = formCatalog.find((item) => item.id === formId) || formCatalog[0];
  const legacySafeMode = String(rawText || "").includes("[ESKI_DOC_GUVENLI_MOD]");
  const text = cleanImportedText(rawText);
  const normalized = normalizeKey(text);
  const values = {};
  form.fields.forEach((item) => {
    const labelValue = extractValueByLabel(text, item.label);
    if (labelValue) values[item.name] = labelValue;
  });
  if (Object.keys(values).length) return values;

  if (formId === "student_identity") {
    return parseStudentIdentityFormValues(text, { legacySafeMode });
  } else if (formId === "academic_tracking") {
    values.lgsScore = pickLines(text, ["lgs", "yerleştirme puanı", "liseye geçiş"]).split("\n")[0] || "";
    values.lgsPercentile = pickLines(text, ["yüzdelik", "dilim"]).split("\n")[0] || "";
    values.middleSchoolAverage = pickLines(text, ["ortaokul", "obp", "ortalama"]).split("\n")[0] || "";
    values.placementSchool = pickLines(text, ["yerleştiği okul", "yerleştirildiği okul", "geldiği okul"]).split("\n")[0] || "";
    values.studyHabits = pickLines(text, ["ders", "çalış", "ödev", "tekrar", "plan"]);
    values.goals = pickLines(text, ["hedef", "yol", "meslek", "alan"]);
    values.supportNeeds = buildSummary(text, 550);
  } else if (formId === "attendance") {
    values.personalReasons = pickLines(text, ["sağlık", "istek", "uyku", "motivasyon", "arkadaş"]);
    values.familyReasons = pickLines(text, ["aile", "veli", "ev", "kardeş", "maddi"]);
    values.schoolReasons = pickLines(text, ["okul", "sınıf", "öğretmen", "ders", "ulaşım"]);
    values.actionPlan = "Belgeden aktarıldı; rehberlik görüşmesiyle doğrulanacak.";
  } else if (formId === "violence_climate") {
    values.violencePerception = pickLines(text, ["şiddet", "zorbalık", "kavga", "tehdit"]);
    values.violenceFrequency = pickLines(text, ["sık", "her gün", "hafta", "nadiren", "bazen"]);
    values.justificationSignals = pickLines(text, ["haklı", "gerekli", "normal", "meşru"]);
    values.safetyPlan = "Belge sonucu sınıf/okul iklimi çalışması için incelenecek.";
  } else if (formId === "riba") {
    values.studentNeeds = pickLines(text, ["öğrenci", "ihtiyaç", "rehberlik"]);
    values.priorityTopics = buildSummary(text, 600);
  } else if (formId === "special_education") {
    values.attentionSignals = pickLines(text, ["dikkat", "hareket", "dürtü", "dehb"]);
    values.learningSignals = pickLines(text, ["okuma", "yazma", "matematik", "öğrenme"]);
    values.reportStatus = pickLines(text, ["rapor", "ram", "destek", "özel eğitim"]);
  } else if (formId === "counseling_referral") {
    values.interviewReason = pickLines(text, ["görüşme", "neden", "başvuru", "olay"]);
    values.studentStatement = buildSummary(text, 700);
    values.referralReason = pickLines(text, ["yönlendirme", "sağlık", "psikolojik", "destek"]);
  } else if (formId === "sociometry") {
    values.positiveChoices = pickLines(text, ["arkadaş", "seç", "tercih", "birlikte"]);
    values.isolatedStudents = pickLines(text, ["dış", "yalnız", "seçilmeyen", "az"]);
    values.classAction = "Sosyometri sonucu öğretmen gözlemiyle birlikte değerlendirilecek.";
  } else if (formId === "career_self") {
    values.interests = pickLines(text, ["ilgi", "hoşlan", "sever", "meslek"]);
    values.strengths = pickLines(text, ["güçlü", "başarılı", "yetenek"]);
    values.careerTendency = buildSummary(text, 650);
  } else if (formId === "exam_growth") {
    values.examName = pickLines(text, ["deneme", "sınav", "tyt", "ayt"]).split("\n")[0] || "";
    values.score = pickLines(text, ["puan", "net", "doğru", "yanlış"]).split("\n").slice(0, 3).join("\n");
    values.netSummary = pickLines(text, ["türkçe", "matematik", "fen", "sosyal", "ingilizce", "net"]);
    values.growthNote = buildSummary(text, 600);
  } else if (formId === "snellen") {
    values.rightEye = pickLines(text, ["sağ", "sag", "right"]).split("\n")[0] || "";
    values.leftEye = pickLines(text, ["sol", "left"]).split("\n")[0] || "";
    values.screeningResult = buildSummary(text, 500);
    values.healthReferral = pickLines(text, ["yönlendirme", "sağlık", "hastane", "göz"]);
  } else if (formId === "other_notes") {
    values.noteTitle = pickLines(text, ["form", "not", "görüşme", "uygulama"]).split("\n")[0] || "Belgeden aktarılan not";
    values.noteBody = buildSummary(text, 800);
    values.followUp = pickLines(text, ["takip", "öneri", "yapılacak", "sonraki"]);
  } else {
    values[form.fields[0].name] = pickLines(text, form.fields.map((item) => item.label));
  }

  if (!Object.values(values).some(Boolean)) {
    values[form.fields[0].name] = legacySafeMode ? "" : buildSummary(text, 700);
  }
  if (normalized.includes("devamsiz")) values.actionPlan = values.actionPlan || "Devamsızlık takibi açılmalı.";
  return values;
}

function cleanImportedText(rawText) {
  return normalizeScannedFormText(repairTurkishText(String(rawText || "")))
    .replace("[ESKI_DOC_GUVENLI_MOD]", "")
    .replace("[GORSEL_OCR]", "")
    .replace(/\u0000/g, " ")
    .replace(/\r/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .split("\n")
    .map((line) => cleanDisplay(line.replace(/\s*\|\s*/g, " | ")))
    .map((line) => splitInlineLabelAnswers(line))
    .filter((line, index, lines) => line || (index > 0 && lines[index - 1]))
    .join("\n")
    .trim();
}

function splitInlineLabelAnswers(line) {
  const labels = studentQuestionAliases().flatMap(([, names]) => names)
    .concat(allFields().map((item) => item.label))
    .concat(formCatalog.flatMap((form) => form.fields.map((item) => item.label)))
    .sort((a, b) => b.length - a.length);
  let fixed = String(line || "");
  labels.forEach((label) => {
    const safe = escapeRegExp(label);
    fixed = fixed.replace(new RegExp(`\\s+(${safe})\\s*:?\\s+`, "gi"), "\n$1: ");
  });
  return fixed;
}

function normalizeScannedFormText(rawText) {
  const checkboxYes = /[☑✓✔■●]/g;
  const checkboxNo = /[☐□○◯]/g;
  return String(rawText || "")
    .replace(checkboxYes, " Evet ")
    .replace(checkboxNo, " Hayır ")
    .replace(/[·•]{2,}|_{2,}|-{3,}|\.{3,}/g, " : ")
    .split(/\n+/)
    .map(normalizeScannedFormLine)
    .join("\n");
}

function normalizeScannedFormLine(line) {
  let clean = String(line || "").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  clean = clean.replace(/\s*[:;]\s*/g, ": ");
  if (clean.includes(":")) return clean;
  const labels = studentQuestionAliases()
    .flatMap(([, names]) => names)
    .concat(allFields().map((item) => item.label))
    .concat(formCatalog.flatMap((form) => form.fields.map((item) => item.label)))
    .sort((a, b) => b.length - a.length);
  const normalized = normalizeKey(clean);
  const label = labels.find((item) => normalized.startsWith(normalizeKey(item)) && normalized.length > normalizeKey(item).length + 1);
  if (!label) return clean;
  const labelWords = label.split(/\s+/).length;
  const words = clean.split(/\s+/);
  if (words.length <= labelWords) return clean;
  return `${words.slice(0, labelWords).join(" ")}: ${words.slice(labelWords).join(" ")}`;
}

function parseStudentIdentityFormValues(text, options = {}) {
  const answers = extractKnownAnswersFromFlow(text, studentQuestionAliases(), options);
  const values = {};
  values.familyStructure = compactLines([
    valueLine("Velisi", answers.guardianRelation),
    valueLine("Veli adı", answers.guardianName),
    valueLine("Anne-baba durumu", answers.parentsTogether),
    valueLine("Kardeş sayısı", answers.siblingsCount),
    valueLine("Hanede yaşayan kişi", answers.householdSize),
  ]);
  values.homeResources = compactLines([
    valueLine("Ev kira", answers.rentStatus),
    valueLine("Kendine ait oda", answers.ownRoom),
    valueLine("Evde bilgisayar", answers.computerAtHome),
    valueLine("Evde internet", answers.internet),
    valueLine("Evde kitaplık", answers.libraryAtHome),
    valueLine("Okula geliş", answers.transport),
    valueLine("Çalışıyor", answers.working),
    valueLine("Hane geliri", answers.householdIncome),
  ]);
  values.healthAndCare = compactLines([
    valueLine("Sürekli hastalık", answers.chronicIllness),
    valueLine("Kullandığı ilaç", answers.medication),
    valueLine("Alerji", answers.allergy),
  ]);
  return Object.fromEntries(Object.entries(values).filter(([, value]) => value));
}

function compactLines(lines) {
  return lines.filter(Boolean).join("\n");
}

function valueLine(label, value) {
  return value ? `${escapeHtml(label)}: ${escapeHtml(value)}` : "";
}

function extractValueByLabel(text, label) {
  const labelKey = normalizeKey(label).split("/")[0].trim();
  const lines = text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  for (const line of lines) {
    const [rawKey, ...rest] = line.split(":");
    if (!rest.length) continue;
    if (normalizeKey(rawKey).includes(labelKey)) return sanitizeImportedAnswer(rest.join(":"), label);
  }
  return "";
}

function sanitizeImportedAnswer(value, label = "") {
  let answer = String(value || "").replace(/\s+/g, " ").trim();
  if (label) answer = answer.replace(new RegExp(`^${escapeRegExp(label)}\\s*:?\\s*`, "i"), "");
  answer = answer.split(/\s+\|\s+/)[0].trim();
  answer = answer.split(/\s+(?=[A-ZÇĞİÖŞÜ0-9][^:]{2,36}:)/)[0].trim();
  if (isKnownLabel(answer) || looksLikeHeading(answer)) return "";
  return cleanDisplay(answer);
}

function escapeRegExp(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function pickLines(text, keywords) {
  const normalizedKeywords = keywords.map(normalizeKey);
  const lines = text.split(/\n+/).map((line) => line.trim()).filter((line) => line.length > 3);
  const picked = lines.filter((line) => normalizedKeywords.some((keyword) => normalizeKey(line).includes(keyword)));
  return picked.slice(0, 8).join("\n");
}

function buildSummary(text, maxLength) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > maxLength ? `${clean.slice(0, maxLength)}...` : clean;
}

function syncRisksFromProfile(student) {
  if (!student) return;
  student.risk = student.risk || {};
  if (normalizeKey(student.motherEducation || "").includes("ilkokul")) student.risk.mother_primary = true;
  if (normalizeKey(student.fatherEducation || "").includes("ilkokul")) student.risk.father_primary = true;
  if (student.working === "Evet") student.risk.working = true;
  if (student.internet === "Yok" || student.computerAtHome === "Yok") student.risk.financial = student.risk.financial || false;
  if (student.chronicIllness) student.risk.chronic_illness = true;
  if (student.martyrChild === "Evet") student.risk.martyr_child = true;
  if (student.parentsTogether === "Ayrı") student.risk.parents_separate = true;
}

function normalizeStudent(data) {
  const clean = {};
  allFields().forEach((item) => {
    if (data[item.name] != null) clean[item.name] = String(data[item.name]).trim();
  });
  if (data.risk) clean.risk = data.risk;
  return clean;
}

function allFields() {
  return studentSections.flatMap((section) => section.fields);
}

function fieldLabel(name) {
  return allFields().find((item) => item.name === name)?.label || formCatalog.flatMap((form) => form.fields || []).find((item) => item.name === name)?.label || name;
}

function riskLabel(key) {
  return riskFactors.find(([id]) => id === key)?.[1] || key;
}

function normalizeKey(value) {
  return String(value)
    .toLocaleLowerCase("tr-TR")
    .replace(/[ıiİıİ]/g, "i")
    .replace(/[ğĞğĞ]/g, "g")
    .replace(/[üÜüÜ]/g, "u")
    .replace(/[şŞşŞ]/g, "s")
    .replace(/[öÖöÖ]/g, "o")
    .replace(/[çÇçÇ]/g, "c")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function joinParts(parts) {
  return parts.filter(Boolean).join(" · ");
}

function softColor(color) {
  if (color.includes("red")) return "#fdeaea";
  if (color.includes("amber")) return "#fff3de";
  return "#e6f4ef";
}

function empty(text) {
  return `<div class="empty">${escapeHtml(text)}</div>`;
}

function toastSave() {
  const original = document.querySelector("#saveBtn").textContent;
  document.querySelector("#saveBtn").textContent = "Kaydedildi";
  setTimeout(() => {
    document.querySelector("#saveBtn").textContent = original;
  }, 1100);
}

function startTextRepairObserver() {
  const run = () => repairVisibleTurkishText(document.body);
  run();
  const observer = new MutationObserver(() => {
    window.clearTimeout(startTextRepairObserver.timer);
    startTextRepairObserver.timer = window.setTimeout(run, 30);
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["placeholder", "aria-label", "title"],
  });
  window.setInterval(run, 1200);
}

/* Link surveys are intentionally public: they accept answers only and never expose the panel. */
let surveyDraftQuestions = [{ id: "q1", text: "", type: "yesno", options: ["Evet", "Hayır"] }];
let publicSurveyLink = null;

function surveyQuestionEditor(q, index) {
  return `<div class="survey-question-editor"><div class="survey-question-head"><strong>Soru ${index + 1}</strong><button type="button" class="icon-button" ${uiAction("click", (event, element) => { removeSurveyQuestion((index)); })} title="Soruyu sil">×</button></div>
    <input value="${escapeAttr(q.text || "")}" placeholder="Soruyu yazın" ${uiAction("input", (event, element) => { updateSurveyQuestion((index), 'text', element.value); })} />
    <select ${uiAction("change", (event, element) => { updateSurveyQuestion((index), 'type', element.value); })}><option value="yesno" ${escapeHtml(q.type === "yesno" ? "selected" : "")}>Evet / Hayır</option><option value="choice" ${escapeHtml(q.type === "choice" ? "selected" : "")}>Çoktan seçmeli</option><option value="text" ${escapeHtml(q.type === "text" ? "selected" : "")}>Açık cevap</option></select>
    ${q.type === "choice" ? `<textarea placeholder="Şıkları her satıra bir tane yazın" ${uiAction("input", (event, element) => { updateSurveyQuestion((index), 'optionsText', element.value); })}>${escapeHtml((q.options || []).join("\\n"))}</textarea>` : ""}</div>`;
}

function renderSurveyQuestionEditors() {
  const root = document.querySelector("#surveyQuestionList");
  if (root) setSafeHtml(root, surveyDraftQuestions.map(surveyQuestionEditor).join(""));
}

function addSurveyQuestion() {
  surveyDraftQuestions.push({ id: `q${Date.now()}`, text: "", type: "yesno", options: ["Evet", "Hayır"] });
  renderSurveyQuestionEditors();
}

function removeSurveyQuestion(index) {
  if (surveyDraftQuestions.length > 1) surveyDraftQuestions.splice(index, 1);
  renderSurveyQuestionEditors();
}

function updateSurveyQuestion(index, field, value) {
  if (!surveyDraftQuestions[index]) return;
  surveyDraftQuestions[index][field] = value;
  if (field === "type") renderSurveyQuestionEditors();
}

function renderSurveys() {
  const root = document.querySelector("#surveysView");
  if (!root) return;
  const links = (state.surveyLinks || []).filter((x) => x.className === selectedClass).slice().reverse();
  const responses = (state.surveyResponses || []).filter((x) => links.some((l) => l.code === x.linkCode)).slice().reverse();
  setSafeHtml(root, `<div class="content-grid survey-page"><article class="panel span-5"><div class="section-title"><div><h3>Anket oluştur</h3><p>Linki paylaşın; öğrenci veya veli panele girmeden yanıtlasın.</p></div></div>
    <form class="modern-form" ${uiAction("submit", (event, element) => { createSurveyInvite(event); })}><label>Sınıf / Alan<select name="className">${classOptions(selectedClass)}</select></label><label>Anket başlığı<input name="title" required placeholder="Örn. Dönem başı ihtiyaç anketi" /></label><label>Hedef kitle<select name="audience"><option value="both">Öğrenci ve veli</option><option value="student">Öğrenci</option><option value="parent">Veli</option></select></label><label class="field-wide">Açıklama<textarea name="description" rows="2" placeholder="Kısa açıklama"></textarea></label><div id="surveyQuestionList"></div><button type="button" class="secondary" ${uiAction("click", (event, element) => { addSurveyQuestion(); })}>+ Soru ekle</button><button class="primary" type="submit">Güvenli anket linki oluştur</button></form><div id="surveyInviteBox" class="preview-box small-preview">Link oluşturunca burada görünür.</div></article>
    <article class="panel span-7"><div class="section-title"><div><h3>Anketler ve yanıtlar</h3><p>Yanıtlar güvenli biçimde okul hesabına bağlanır.</p></div></div><div class="record-stats">${recordStat("Aktif link", links.length)}${recordStat("Yanıt", responses.length)}</div><div class="timeline-list">${links.length ? links.map((l) => `<div class="timeline-item"><strong>${escapeHtml(l.title || l.surveyType || "Anket")}</strong><span>${escapeHtml(l.className)} · ${new Date(l.createdAt).toLocaleDateString("tr-TR")} · ${responses.filter((r) => r.linkCode === l.code).length} yanıt</span><p><button class="link-button" ${uiAction("click", (event, element) => { copySurveyLink((escapeAttr(l.code))); })}>Linki kopyala</button></p></div>`).join("") : empty("Henüz anket linki yok.")}</div></article></div>`);
  renderSurveyQuestionEditors();
}

async function createSurveyInvite(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const questions = surveyDraftQuestions.map((q, i) => ({ id: q.id || `q${i + 1}`, text: (q.text || "").trim(), type: q.type, options: q.type === "choice" ? (q.optionsText || "").split(/\r?\n/).map((x) => x.trim()).filter(Boolean) : ["Evet", "Hayır"] })).filter((q) => q.text);
  if (!data.title || !questions.length) { document.querySelector("#surveyInviteBox").textContent = "Başlık ve en az bir soru yazın."; return; }
  const link = { id: crypto.randomUUID(), code: crypto.randomUUID().replace(/-/g, "").slice(0, 8).toUpperCase(), className: data.className || selectedClass, title: data.title, surveyType: data.title, audience: data.audience, description: data.description || "", note: data.description || "", questions, createdAt: new Date().toISOString(), isActive: true };
  const cloudSaved = await saveSurveyLinkToCloud(link);
  if (!cloudSaved && cloudDatabaseAvailable) {
    setSafeHtml(document.querySelector("#surveyInviteBox"), `<strong>Anket linki oluşturulamadı</strong><p>Supabase SQL güncellemesini çalıştırıp tekrar deneyin.</p>`);
    return;
  }
  state.surveyLinks = [...(state.surveyLinks || []), link]; saveState(); renderSurveys();
  setSafeHtml(document.querySelector("#surveyInviteBox"), `<strong>Paylaşılacak güvenli link</strong><input class="share-link-input" readonly value="${escapeAttr(surveyUrl(link.code))}" ${uiAction("click", (event, element) => { element.select(); })} /><button class="primary" type="button" ${uiAction("click", (event, element) => { copySurveyLink((link.code)); })}>Linki kopyala</button>`);
  surveyDraftQuestions = [{ id: "q1", text: "", type: "yesno", options: ["Evet", "Hayır"] }];
}

async function saveSurveyLinkToCloud(link) {
  const client = await ensureCloudClient();
  const schoolId = currentSchool?.id || currentMembership?.school_id;
  if (!client || !schoolId) return false;
  const { error } = await client.from("survey_links").upsert({
    school_id: schoolId,
    code: link.code,
    class_name: link.className,
    title: link.title || link.surveyType || "Anket",
    audience: link.audience || "both",
    description: link.description || link.note || "",
    questions: link.questions || [],
    is_active: link.isActive !== false,
    created_by: currentAuthUser?.id || null,
  }, { onConflict: "code" });
  if (error) {
    console.error("survey link cloud save failed", error);
    return false;
  }
  return true;
}

function copySurveyLink(code) { const url = surveyUrl(code); navigator.clipboard?.writeText(url); const box = document.querySelector("#surveyInviteBox"); if (box) setSafeHtml(box, `<strong>Link kopyalandı</strong><input class="share-link-input" readonly value="${escapeAttr(url)}" ${uiAction("click", (event, element) => { element.select(); })} />`); }

function surveyCodeFromUrl() {
  if (window.OIS_PUBLIC_SURVEY_CODE) return String(window.OIS_PUBLIC_SURVEY_CODE).trim();
  const queryCode = new URLSearchParams(location.search).get("survey");
  if (queryCode) return queryCode.trim();
  const match = location.hash.match(/^#survey[=/](.+)$/);
  return match ? decodeURIComponent(match[1]).trim() : "";
}

function publicSurveyShell(content) {
  document.body.className = "public-survey-body";
  setSafeHtml(document.body, `<main class="public-survey">${content}</main>`);
}

function publicSurveyCard(link, code) {
  return `<form class="panel public-survey-card" ${uiAction("submit", (event, element) => { submitPublicSurvey(event, (escapeAttr(code))); })}><p class="eyebrow">${escapeHtml(link.className || "Anket")} · Öğrenci İzleme Sistemi</p><h1>${escapeHtml(link.title || link.surveyType || "Anket")}</h1><p>${escapeHtml(link.description || link.note || "")}</p><label>Yanıtlayan<select name="respondentType"><option value="student">Öğrenci</option><option value="parent">Veli</option></select></label><label>Okul numarası<input name="studentNo" inputmode="numeric" required placeholder="Okul numaranız" /></label><label>Ad soyad (isteğe bağlı)<input name="respondentName" /></label>${(link.questions || []).map((q) => `<fieldset><legend>${escapeHtml(q.text)}</legend>${q.type === "text" ? `<textarea name="q_${escapeAttr(q.id)}" required></textarea>` : (q.options || ["Evet", "Hayır"]).map((o) => `<label class="survey-option"><input type="radio" name="q_${escapeAttr(q.id)}" value="${escapeAttr(o)}" required /> ${escapeHtml(o)}</label>`).join("")}</fieldset>`).join("")}<button class="primary" type="submit">Anketi gönder</button><div id="publicSurveyNotice"></div></form>`;
}

async function loadPublicSurveyLink(code) {
  const client = await ensureCloudClient();
  if (!client) return null;
  const { data, error } = await client.rpc("public_survey_get", { request_code: code });
  if (error || !data) return null;
  return Array.isArray(data) ? data[0] : data;
}

async function bootPublicSurvey(code) {
  publicSurveyShell(`<section class="panel public-survey-card"><h1>Anket yükleniyor</h1><p>Lütfen kısa bir an bekleyin.</p></section>`);
  const localLink = (state.surveyLinks || []).find((x) => x.code === code);
  if (localLink) {
    publicSurveyLink = localLink;
    publicSurveyShell(publicSurveyCard(localLink, code));
    return;
  }
  const link = await loadPublicSurveyLink(code);
  publicSurveyLink = link;
  if (!link) {
    publicSurveyShell(`<section class="panel public-survey-card"><h1>Anket bulunamadı</h1><p>Link geçersiz, pasif ya da Supabase SQL güncellemesi henüz çalıştırılmamış.</p></section>`);
    return;
  }
  publicSurveyShell(publicSurveyCard(link, code));
}

function renderPublicSurveyRoute() {
  const code = surveyCodeFromUrl();
  if (!code) return false;
  bootPublicSurvey(code);
  return true;
}

async function submitPublicSurvey(event, code) {
  event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget).entries()); const link = publicSurveyLink || (state.surveyLinks || []).find((x) => x.code === code); const answers = {};
  (link?.questions || []).forEach((q) => { answers[q.id] = data[`q_${escapeHtml(q.id)}`] || ""; });
  const client = await ensureCloudClient();
  if (client) { const result = await client.rpc("public_survey_submit", { request_code: code, respondent_type: data.respondentType, student_no: data.studentNo, respondent_name: data.respondentName || "", answers, risk: "Düşük" }); if (!result.error && result.data?.ok !== false) { setSafeHtml(document.body, `<main class="public-survey"><section class="panel public-survey-card"><h1>Yanıtınız kaydedildi</h1><p>Katılımınız için teşekkür ederiz.</p></section></main>`); return; } document.querySelector("#publicSurveyNotice").textContent = "Yanıt kaydedilemedi. Linki veya okul numarasını kontrol edin."; return; }
  state.surveyResponses = [...(state.surveyResponses || []), { id: crypto.randomUUID(), linkCode: code, schoolNo: data.studentNo, respondentName: data.respondentName, audience: data.respondentType, answers, date: new Date().toISOString().slice(0, 10), source: "link" }]; saveState(); setSafeHtml(document.body, `<main class="public-survey"><section class="panel public-survey-card"><h1>Yanıtınız kaydedildi</h1><p>Katılımınız için teşekkür ederiz.</p></section></main>`);
}

window.setView = setView;
window.renderAll = renderAll;
window.openMetricReport = openMetricReport;
window.selectStudent = selectStudent;
window.setStudentSearch = setStudentSearch;
window.changeStudentListClass = changeStudentListClass;
window.toggleRisk = toggleRisk;
window.openStudentDialog = openStudentDialog;
window.deleteStudent = deleteStudent;
window.mockExtract = mockExtract;
window.openDraftAsStudent = openDraftAsStudent;
window.applyDraftToTarget = applyDraftToTarget;
window.selectFormCategory = selectFormCategory;
window.selectCatalogForm = selectCatalogForm;
window.saveDynamicForm = saveDynamicForm;
window.applyDraftToCurrentForm = applyDraftToCurrentForm;
window.selectReport = selectReport;
window.saveDisciplineRecord = saveDisciplineRecord;
window.updateDisciplinePreview = updateDisciplinePreview;
window.fillDisciplineExample = fillDisciplineExample;
window.readDisciplineFile = readDisciplineFile;
window.downloadSampleDisciplineReport = downloadSampleDisciplineReport;
window.saveLgsManual = saveLgsManual;
window.fillLgsExample = fillLgsExample;
window.readLgsFile = readLgsFile;
window.importLgsBulk = importLgsBulk;
window.readExamTopicFile = readExamTopicFile;
window.saveHonorRecord = saveHonorRecord;
window.saveAlumniRecord = saveAlumniRecord;
window.deleteAlumniRecord = deleteAlumniRecord;
window.saveParentResource = saveParentResource;
window.deleteParentResource = deleteParentResource;
window.createSurveyInvite = createSurveyInvite;
window.saveStudyPlan = saveStudyPlan;
window.promoteStudentsNextYear = promoteStudentsNextYear;
window.copySurveyLink = copySurveyLink;
window.submitPublicSurvey = submitPublicSurvey;
window.setWorkflowDate = setWorkflowDate;
window.toggleDashboardGuidance = toggleDashboardGuidance;
window.toggleWorkflowTask = toggleWorkflowTask;
window.addWorkflowTask = addWorkflowTask;
window.removeWorkflowTask = removeWorkflowTask;
window.importAttendanceBulk = importAttendanceBulk;
window.fillAttendanceExample = fillAttendanceExample;
window.readAttendanceFile = readAttendanceFile;
window.downloadStudentPlanWord = downloadStudentPlanWord;
window.downloadSinglePlanWord = downloadSinglePlanWord;
window.downloadBlankWeeklyPlanWord = downloadBlankWeeklyPlanWord;
window.renderAuthGate = renderAuthGate;
window.toggleClassScopeChip = toggleClassScopeChip;
window.syncCameraInputToFileInput = syncCameraInputToFileInput;
window.signInUser = signInUser;
window.registerAuthByRole = registerAuthByRole;
window.registerPrincipal = registerPrincipal;
window.requestTeacherAccess = requestTeacherAccess;
window.signOutUser = signOutUser;
window.approveMember = approveMember;
window.selectAdminSchool = selectAdminSchool;
window.createSchoolAsSystemAdmin = createSchoolAsSystemAdmin;
window.deleteSchoolAsSystemAdmin = deleteSchoolAsSystemAdmin;
window.removeMember = removeMember;

init();
startTextRepairObserver();

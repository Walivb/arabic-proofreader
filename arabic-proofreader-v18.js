/*!
 * ============================================================================
 *  Arabic Proofreader V18.5.0 POS-DEPENDENCY — Blogger Standalone Bundle
 *  ملف جاهز للنشر (Deployment-Ready) — بدون أي تبعيات خارجية
 * ============================================================================
 *
 *  الإصدار : 18.5.0 (POS-DEPENDENCY)
 *  التاريخ : 2026-08-13
 *  الملف   : ملف واحد مستقل (Single-File Bundle) مولَّد من المصادر المجزأة،
 *            لا يحتاج أي مكتبة خارجية ويعمل مباشرة عبر وسم <script>.
 *
 *  ── سجل التغييرات ─────────────────────────────────────────────────────────
 *  18.5.0 (حسم النوع النحوي والاعتماد السياقي):
 *    • POS Disambiguator قبل القواعد: التنوين والعدد والجر والتعريف تحسم القراءة الاسمية.
 *    • منع قراءة «كتبٍ/كتبًا» فعلًا، ومنع أي تصريف فعلي مبني على هذه القراءة.
 *    • SubjectResolver 2.1 يستعمل النوع المحسوم ولا يلتقط الخبر أو جمع المؤنث فعلًا.
 *    • AdjectiveResolver 2.0 يحافظ على حالة «الطالبين المجتهدين» في السياق الملتبس،
 *      ويصحح المطابقة عند وجود عامل نحوي صريح فقط.
 *    • FiveNouns Context Guard يمنع «أبيك وأخيك» من التصحيح بلا عامل، مع دعم العطف المحكوم.
 *    • مجموعة اختبارات انحدار POS/Dependency للحالات التسع المطلوبة.
 *  18.4.0 (نواة التحليل النحوي):
 *    • SubjectResolver 2.0 بتمييز أقوى بين VSO وSVO وحماية من المفعول والمضاف إليه.
 *    • NounRoleResolver يوسم الفاعل والمفعول والمبتدأ والخبر والنعت والحال
 *      والمضاف إليه والبدل والتوكيد قبل قواعد الإعراب.
 *    • FiveNounsEngine للأسماء الخمسة مع الإضافة والضمائر وحالات الرفع والنصب والجر.
 *    • RelativeClauseResolver للأسماء الموصولة ومطابقة فعل صلة الموصول.
 *    • NestedSentenceAnalyzer للجمل الأصلية والموصولة والمكملة والمعطوفة.
 *    • توسعة معجمية منهجية للأسماء والصفات الشائعة.
 *    • توسيع التحقق الداخلي إلى 300 اختبار ذهبي و300 جملة صحيحة.
 *  18.3.0 (طبقة السياق والتحقق):
 *    • محلل اتجاه العدد وعبارات 11–19 و21–99؛ يمنع الإنذار الخاطئ
 *      «واحد ← واحدة» في «واحد وعشرون كتابًا».
 *    • محلل فاعل محافظ يدعم شبه الجملة وعبارة العدد، ويكتشف الخطأين المستقلين
 *      في «حضر اثنا عشر طالبة»: الفعل والعدد.
 *    • قواعد الأفعال الخمسة بعد أدوات النصب والجزم.
 *    • قواعد محافظة لكان/إن والجملة الاسمية، مع التصحيح عند وجود دليل صرفي.
 *    • ContextValidator + ConfidenceReRanker قبل العرض، مع درجات ديناميكية
 *      ووسم صريح للمراجعة اليدوية ومنع التصحيح النحوي التلقائي.
 *    • رفع معيار «عالٍ جدًا» إلى 0.995، وإخفاء النتائج الأقل من 0.75 افتراضيًا.
 *  18.2.0 (الدفعة 2 — القواعد السياقية):
 *    • واو الجماعة: 22 صيغة قطعية (تصحيح تلقائي) + قاعدة سياقية اقتراحية
 *      بحُرّاس ضد واو الإضافة (معلمو المدرسة) وأفعال لام الواو (يدعو).
 *    • التاء المربوطة مع «ال»: 29 مدخلًا قطعيًا (الإضافة لا تجتمع مع ال).
 *    • التاء المربوطة السياقية: الكلمات ذات قراءة الإضافة تُعرض اقتراحًا
 *      عندما يمنع النعت النكرة قراءة الإضافة.
 *    • توسيع صرفي: الأفعال الهمزية المراجعة مع لواحق الضمائر (أرسلتُ، أكدوا…).
 *    • طبقة الترقيم العربي: مسافة قبل العلامة، غياب المسافة بعدها، تكرار ؟/!.
 *    • معجم الأفعال: 37 ← 58 جذرًا (قام، خاف، مات، سأل، نسي، ذهب…).
 *    • 13 اختبارًا ذهبيًا جديدًا + 10 مصائد إنذار كاذب جديدة.
 *  18.1.0 (الدفعة 1.1 — التدقيق المنهجي):
 *    • إضافة ~100 مدخل إملائي مُراجَع يدويًا: همزة القطع المحذوفة (أفعال
 *      وأسماء)، همزة القطع الزائدة على همزة الوصل، الهمزة المتطرفة،
 *      التاء المربوطة، الألف المقصورة، الضمائر، أدوات شائعة، فصل «لا».
 *    • مستوى جديد «WORDS_REVIEW» (ثقة 0.90): كلمات ذات قراءة صحيحة نادرة
 *      تُعرض اقتراحًا فقط ولا تُطبَّق آليًا أبدًا.
 *    • حذف «مكتبه» نهائيًا (إنذار كاذب مؤكد: مكتب + هـ قراءة صحيحة شائعة).
 *    • 12 اختبارًا ذهبيًا جديدًا + 10 مصائد إنذار كاذب جديدة.
 *  18.0.0: الإصدار الأولي المعاد بناؤه من المصادر المجزأة.
 *
 *  ── الواجهة العامة (Global API) ────────────────────────────────────────────
 *  بعد تحميل هذا الملف في المتصفح تتوفر الكائنات التالية على window:
 *    • window.V18                    ← الاسم المختصر المعتمد (يستخدمه القالب)
 *    • window.ArabicProofreaderV18   ← الاسم الكامل
 *    • window.ArabicProofreaderV18PRO← الاسم الكامل (نسخة PRO)
 *    • window.__ARABIC_PROOFREADER_V18_READY__ = true ← علامة الجاهزية
 *
 *  أهم الدوال:
 *    V18.analyze(text, options)  → نتيجة كاملة: findings + corrected + suggestions
 *    V18.correct(text, options)  → النص المصحح (سلسلة نصية)
 *    V18.suggest(text, options)  → قائمة الاقتراحات غير المؤتمتة
 *    V18.inspectPOS(text)        → النوع النحوي المحسوم وأدلته والبدائل الممكنة
 *    V18.inspectSyntax(text)     → الجمل المتداخلة والأدوار النحوية لكل كلمة
 *    V18.lexiconStats()          → إحصاءات المعاجم الفعلية
 *    V18.validate()              → تشغيل corpus الذهبي ومنع الإنذارات الكاذبة وانحدارات POS
 *
 *  ── النشر على GitHub Pages ────────────────────────────────────────────────
 *  1) ارفع هذا الملف إلى مستودع GitHub (مثال: akhtai-engine).
 *  2) فعّل GitHub Pages: Settings → Pages → Branch: main → Save.
 *  3) بعد دقائق يصبح الملف متاحًا على الرابط:
 *       https://<اسم المستخدم>.github.io/<اسم المستودع>/arabic-proofreader-v18.js
 *  4) ضع هذا الرابط في القالب داخل الثابت V18_CONFIG.url
 *     (سطر واحد فقط في قالب Blogger).
 *  ملاحظة: GitHub Pages يرسل ترويسة Access-Control-Allow-Origin: * لذا يعمل
 *  التحميل من أي نطاق (بما فيه مدونات Blogger) دون إعدادات إضافية.
 *
 *  ── سياسة التوافق ─────────────────────────────────────────────────────────
 *  • هذا الملف هو المحرك الوحيد المعتمد؛ الإصدارات V16/V17 أصبحت ملغاة.
 *  • إن اكتشف الملف محركًا قديمًا في الصفحة نفسها فسيُسجَّل تحذير في وحدة
 *    التحكم، وتبقى الأولوية دائمًا لـ V18.
 * ============================================================================
 */
(function(root, factory){
  if(typeof module === 'object' && module.exports){ module.exports = factory(); }
  else {
    const api = factory();
    root.ArabicProofreaderV18 = api;
    root.ArabicProofreaderV18PRO = api;
    // الاسم المختصر المعتمد للاستخدام في قالب Blogger (V18.analyze / V18.correct / V18.suggest)
    root.V18 = api;
    // علامة جاهزية صريحة يمكن للقالب فحصها قبل بدء التدقيق
    root.__ARABIC_PROOFREADER_V18_READY__ = true;
    try {
      // تحذير فقط إذا وُجد محرك قديم (V16/V17) في الصفحة — لا يتوقف التحميل أبدًا
      ['ArabicProofreaderV17', 'ArabicProofreaderV16'].forEach(function(legacy){
        if (root[legacy]) {
          try {
            console.warn('[V18] تم اكتشاف محرك قديم (' + legacy + ') في الصفحة. المحرك النشط هو V18 فقط، ويُنصح بإزالة السكربت القديم.');
          } catch (e) {}
        }
      });
      if (typeof console !== 'undefined' && console.info) {
        console.info('[ArabicProofreaderV18] المحرك جاهز — الإصدار ' + api.META.version + ' (' + api.META.edition + ')');
      }
    } catch (e) { /* رسائل التشخيص يجب ألا تفشل التحميل */ }
  }
})(typeof globalThis !== 'undefined' ? globalThis : (typeof self !== 'undefined' ? self : this), function(){
  'use strict';

/* ===== MODULE: src/meta.js ===== */
const META = Object.freeze({
  name: 'Arabic Proofreader Hybrid Engine',
  nameArabic: 'محرك التدقيق العربي الهجين',
  version: '18.5.0',
  edition: 'POS-DEPENDENCY',
  language: 'ar',
  release: 'V18.5 POS and Dependency Context',
  offsetPolicy: 'original-input',
  architecture: Object.freeze([
    'offset-aware-normalization',
    'arabic-tokenization',
    'clitic-segmentation',
    'multi-candidate-morphology',
    'contextual-pos-disambiguation',
    'verified-weak-verb-paradigms',
    'case-government',
    'diptote-rules',
    'number-governance',
    'exception-structures',
    'hal-and-tamyiz',
    'coordination',
    'dependents',
    'number-direction-analysis',
    'subject-resolution-2',
    'noun-role-resolution',
    'five-nouns-engine',
    'relative-clause-resolution',
    'nested-sentence-analysis',
    'context-validation',
    'confidence-re-ranking',
    'safe-correction-policy',
    'gold-and-no-false-positive-validation'
  ])
});


/* ===== MODULE: src/config.js ===== */
const DEFAULT_OPTIONS = Object.freeze({
  safeMode: true,
  showPotential: true,
  possibleThreshold: 0.75,
  highThreshold: 0.97,
  certainThreshold: 0.995,
  autoCorrectThreshold: 0.995,
  maxFindings: 500,
  rules: Object.freeze({
    orthography: true,
    weakVerbs: true,
    diptotes: true,
    numbers: true,
    exception: true,
    hal: true,
    tamyiz: true,
    conjunction: true,
    dependents: true,
    syntaxContext: true,
    fiveVerbs: true,
    fiveNouns: true,
    relativeClauses: true,
    wawAljamaa: true,
    contextualTaa: true,
    punctuation: true
  }),
  debug: false
});

const CONFIG = Object.freeze({
  version: META.version,
  confidenceBands: Object.freeze({
    certain: 0.995,
    high: 0.97,
    medium: 0.90,
    low: 0.75
  }),
  correctionPolicy: Object.freeze({
    automatic: Object.freeze(['orthographic', 'spacing', 'punctuation']),
    suggestionOnly: Object.freeze([
      'morphology', 'syntax', 'agreement', 'case', 'number', 'diptote',
      'exception', 'hal', 'tamyiz', 'coordination', 'dependent', 'five-verbs',
      'five-nouns', 'relative-clause'
    ])
  })
});

function mergeOptions(options = {}) {
  return {
    ...DEFAULT_OPTIONS,
    ...options,
    rules: {...DEFAULT_OPTIONS.rules, ...(options.rules || {})}
  };
}


/* ===== MODULE: src/core/normalize.js ===== */
const TATWEEL = '\u0640';
const NBSP = '\u00A0';

/**
 * يطبع النص مع خريطة من مواقع النص المطبع إلى مواقع المدخل الأصلي.
 * لا يستعمل trim ولا Unicode NFC لأن كليهما قد يفسد المواقع.
 */
function normalizeWithMap(input) {
  const original = String(input ?? '');
  let text = '';
  const indexMap = [];

  for (let i = 0; i < original.length; i += 1) {
    const char = original[i];
    if (char === TATWEEL) continue;
    const normalized = char === NBSP ? ' ' : char;
    indexMap[text.length] = i;
    text += normalized;
  }
  indexMap[text.length] = original.length;
  return {original, text, indexMap};
}

function normalize(input) {
  return normalizeWithMap(input).text;
}

function normalizeForComparison(input) {
  return normalize(input).trim();
}

function toOriginalSpan(normalization, start, end) {
  const {indexMap, original} = normalization;
  const originalStart = indexMap[start] ?? original.length;
  const originalEnd = end <= start
    ? originalStart
    : ((indexMap[end - 1] ?? original.length - 1) + 1);
  return {originalStart, originalEnd};
}


/* ===== MODULE: src/core/features.js ===== */
const ARABIC_DIACRITICS_RE = /[\u064B-\u065F\u0670\u06D6-\u06ED]/gu;
const ARABIC_LETTER_RE = /[\u0621-\u063A\u0641-\u064A\u0671-\u06D3]/u;

function stripDiacritics(value) {
  // ألف تنوين النصب حرف دعم كتابي، وليست جزءًا من الجذع المعجمي.
  return String(value ?? '').replace(/\u064Bا/gu, '').replace(ARABIC_DIACRITICS_RE, '');
}

function visibleCase(surface) {
  const word = String(surface ?? '');
  const marks = [...word.matchAll(/[\u064B-\u0650]/gu)];
  if (!marks.length) return null;
  const mark = marks.at(-1)[0];
  const table = {
    '\u064C': {case: 'nominative', kind: 'tanwin', mark},
    '\u064F': {case: 'nominative', kind: 'vowel', mark},
    '\u064B': {case: 'accusative', kind: 'tanwin', mark},
    '\u064E': {case: 'accusative', kind: 'vowel', mark},
    '\u064D': {case: 'genitive', kind: 'tanwin', mark},
    '\u0650': {case: 'genitive', kind: 'vowel', mark}
  };
  return table[mark] ? {...table[mark], index: marks.at(-1).index} : null;
}

function structuralCase(cleanSurface) {
  const word = stripDiacritics(cleanSurface);
  if (/(?:ان|تان)$/u.test(word)) return {case: 'nominative', kind: 'ending', confidence: 0.98};
  if (/(?:ون)$/u.test(word)) return {case: 'nominative', kind: 'ending', confidence: 0.98};
  if (/(?:ين|تين)$/u.test(word)) return {case: 'accgen', kind: 'ending', confidence: 0.96};
  return null;
}

function caseMatches(observed, expected) {
  if (!observed || !expected) return true;
  if (observed === expected) return true;
  return observed === 'accgen' && (expected === 'accusative' || expected === 'genitive');
}

function numberFromEnding(cleanCore) {
  const word = stripDiacritics(cleanCore);
  if (/تان$/u.test(word)) return {number: 'du', gender: 'f', caseForm: 'nominative', stem: word.slice(0, -3)};
  if (/تين$/u.test(word)) return {number: 'du', gender: 'f', caseForm: 'accgen', stem: word.slice(0, -3)};
  if (/ان$/u.test(word)) return {number: 'du', gender: 'm', caseForm: 'nominative', stem: word.slice(0, -2)};
  if (/ون$/u.test(word)) return {number: 'pl', gender: 'm', caseForm: 'nominative', stem: word.slice(0, -2)};
  if (/ين$/u.test(word)) return {number: null, numberCandidates: ['du', 'pl'], gender: 'm', caseForm: 'accgen', stem: word.slice(0, -2)};
  if (/ات$/u.test(word)) return {number: 'pl', gender: 'f', caseForm: null, stem: word.slice(0, -2)};
  return null;
}

function effectiveAgreement(features) {
  if (!features) return features;
  if (features.number === 'pl' && features.animacy === 'nonhuman') {
    return {...features, gender: 'f', number: 'sg', agreementException: 'nonhuman-plural'};
  }
  return features;
}

function featuresMatch(left, right, dimensions = ['gender', 'number']) {
  const mismatch = [];
  for (const key of dimensions) {
    if (key === 'number') {
      if (left?.number && right?.numberCandidates?.includes(left.number)) continue;
      if (right?.number && left?.numberCandidates?.includes(right.number)) continue;
    }
    if (left?.[key] && right?.[key] && left[key] !== right[key]) mismatch.push(key);
  }
  return mismatch;
}

function confidenceBand(confidence) {
  // لا يُستعمل وصف «عالٍ جدًا» إلا مع دليل شبه قطعي (معجم مراجع أو قاعدة شكلية).
  if (confidence >= 0.995) return {code: 'certain', label: 'عالٍ جدًا'};
  if (confidence >= 0.97) return {code: 'high', label: 'عالٍ'};
  if (confidence >= 0.90) return {code: 'medium', label: 'متوسط'};
  if (confidence >= 0.75) return {code: 'low', label: 'منخفض'};
  return {code: 'suppressed', label: 'غير معروض'};
}

function caseLabel(value) {
  return ({nominative: 'الرفع', accusative: 'النصب', genitive: 'الجر', accgen: 'النصب/الجر'})[value] || value;
}


/* ===== MODULE: src/data/lexicon.js ===== */
function form(surface, number, caseForm = null, extra = {}) {
  return {surface, number, caseForm, ...extra};
}

function expandedNounLemmas() {
  const out = {};
  const addMasculine = (lemma, plural, animacy = 'human', sound = false) => {
    out[lemma] = {
      gender: 'm', animacy,
      forms: [
        form(lemma, 'sg'), form(`${lemma}ان`, 'du', 'nominative'), form(`${lemma}ين`, 'du', 'accgen'),
        ...(sound
          ? [form(`${lemma}ون`, 'pl', 'nominative'), form(`${lemma}ين`, 'pl', 'accgen')]
          : [form(plural, 'pl', null, {pluralType: 'broken'})])
      ]
    };
  };
  const addFeminine = (lemma, plural = null, animacy = 'nonhuman') => {
    const stem = lemma.endsWith('ة') ? lemma.slice(0, -1) : lemma;
    out[lemma] = {
      gender: 'f', animacy,
      forms: [
        form(lemma, 'sg'), form(`${stem}تان`, 'du', 'nominative'), form(`${stem}تين`, 'du', 'accgen'),
        form(plural || `${stem}ات`, 'pl', null, plural ? {pluralType: 'broken'} : {})
      ]
    };
  };
  const addSimple = (lemma, plural, gender = 'm', animacy = 'nonhuman') => {
    out[lemma] = {
      gender, animacy,
      forms: [form(lemma, 'sg'), form(`${lemma}ان`, 'du', 'nominative'), form(`${lemma}ين`, 'du', 'accgen'), form(plural, 'pl', null, {pluralType: 'broken'})]
    };
  };

  [
    ['مدير', 'مدير', true], ['باحث', 'باحث', true], ['مراقب', 'مراقب', true],
    ['مترجم', 'مترجم', true], ['ممرض', 'ممرض', true], ['محاسب', 'محاسب', true],
    ['كاتب', 'كاتب', true], ['فنان', 'فنان', true]
  ].forEach(([lemma, plural, sound]) => addMasculine(lemma, plural, 'human', sound));
  [
    ['طبيب', 'أطباء'], ['عامل', 'عمال'], ['أستاذ', 'أساتذة'],
    ['تلميذ', 'تلاميذ'], ['دكتور', 'دكاترة'], ['صديق', 'أصدقاء']
  ].forEach(([lemma, plural]) => addMasculine(lemma, plural, 'human', false));

  [
    'مديرة', 'طبيبة', 'عاملة', 'كاتبة', 'باحثة', 'موظفة', 'أستاذة', 'تلميذة',
    'ممرضة', 'مترجمة', 'محاسبة', 'فنانة', 'صديقة'
  ].forEach(lemma => addFeminine(lemma, null, 'human'));

  [
    ['جامعة', 'جامعات'], ['مكتبة', 'مكتبات'], ['غرفة', 'غرف'], ['صفحة', 'صفحات'],
    ['صحيفة', 'صحف'], ['مجلة', 'مجلات'], ['قصة', 'قصص'], ['رواية', 'روايات'],
    ['مسابقة', 'مسابقات'], ['قاعة', 'قاعات'], ['شركة', 'شركات'], ['مؤسسة', 'مؤسسات'],
    ['دولة', 'دول'], ['قرية', 'قرى'], ['طاولة', 'طاولات'], ['جائزة', 'جوائز'],
    ['نتيجة', 'نتائج'], ['فكرة', 'أفكار'], ['مشكلة', 'مشكلات'], ['فرصة', 'فرص'],
    ['عملية', 'عمليات'], ['صورة', 'صور'], ['لغة', 'لغات'], ['كلمة', 'كلمات'],
    ['جملة', 'جمل']
  ].forEach(([lemma, plural]) => addFeminine(lemma, plural));

  [
    ['فصل', 'فصول'], ['مشروع', 'مشروعات'], ['درس', 'دروس'], ['واجب', 'واجبات'],
    ['امتحان', 'امتحانات'], ['طريق', 'طرق'], ['منزل', 'منازل'], ['بيت', 'بيوت'],
    ['كرسي', 'كراسي'], ['حاسوب', 'حواسيب'], ['هاتف', 'هواتف'], ['برنامج', 'برامج'],
    ['نظام', 'أنظمة'], ['محرك', 'محركات'], ['نص', 'نصوص'], ['سؤال', 'أسئلة'],
    ['جواب', 'أجوبة'], ['قرار', 'قرارات'], ['اجتماع', 'اجتماعات'], ['مكتب', 'مكاتب']
  ].forEach(([lemma, plural]) => addSimple(lemma, plural));
  return out;
}

const NOUN_LEMMAS = Object.freeze({
  'طالب': {gender: 'm', animacy: 'human', forms: [form('طالب', 'sg'), form('طالبان', 'du', 'nominative'), form('طالبين', 'du', 'accgen'), form('طلاب', 'pl', null, {pluralType: 'broken'})]},
  'طالبة': {gender: 'f', animacy: 'human', forms: [form('طالبة', 'sg'), form('طالبتان', 'du', 'nominative'), form('طالبتين', 'du', 'accgen'), form('طالبات', 'pl')]},
  'معلم': {gender: 'm', animacy: 'human', forms: [form('معلم', 'sg'), form('معلمان', 'du', 'nominative'), form('معلمين', 'du', 'accgen'), form('معلمون', 'pl', 'nominative'), form('معلمين', 'pl', 'accgen')]},
  'معلمة': {gender: 'f', animacy: 'human', forms: [form('معلمة', 'sg'), form('معلمتان', 'du', 'nominative'), form('معلمتين', 'du', 'accgen'), form('معلمات', 'pl')]},
  'مهندس': {gender: 'm', animacy: 'human', forms: [form('مهندس', 'sg'), form('مهندسان', 'du', 'nominative'), form('مهندسين', 'du', 'accgen'), form('مهندسون', 'pl', 'nominative'), form('مهندسين', 'pl', 'accgen')]},
  'مهندسة': {gender: 'f', animacy: 'human', forms: [form('مهندسة', 'sg'), form('مهندستان', 'du', 'nominative'), form('مهندستين', 'du', 'accgen'), form('مهندسات', 'pl')]},
  'موظف': {gender: 'm', animacy: 'human', forms: [form('موظف', 'sg'), form('موظفان', 'du', 'nominative'), form('موظفين', 'du', 'accgen'), form('موظفون', 'pl', 'nominative'), form('موظفين', 'pl', 'accgen')]},
  'مسلم': {gender: 'm', animacy: 'human', forms: [form('مسلم', 'sg'), form('مسلمان', 'du', 'nominative'), form('مسلمين', 'du', 'accgen'), form('مسلمون', 'pl', 'nominative'), form('مسلمين', 'pl', 'accgen')]},
  'رجل': {gender: 'm', animacy: 'human', forms: [form('رجل', 'sg'), form('رجلان', 'du', 'nominative'), form('رجلين', 'du', 'accgen'), form('رجال', 'pl', null, {pluralType: 'broken'})]},
  'امرأة': {gender: 'f', animacy: 'human', forms: [form('امرأة', 'sg'), form('امرأتان', 'du', 'nominative'), form('امرأتين', 'du', 'accgen'), form('نساء', 'pl', null, {pluralType: 'broken'})]},
  'طفل': {gender: 'm', animacy: 'human', forms: [form('طفل', 'sg'), form('طفلان', 'du', 'nominative'), form('طفلين', 'du', 'accgen'), form('أطفال', 'pl', null, {pluralType: 'broken'})]},
  'ولد': {gender: 'm', animacy: 'human', forms: [form('ولد', 'sg'), form('ولدان', 'du', 'nominative'), form('ولدين', 'du', 'accgen'), form('أولاد', 'pl', null, {pluralType: 'broken'})]},
  'بنت': {gender: 'f', animacy: 'human', forms: [form('بنت', 'sg'), form('بنتان', 'du', 'nominative'), form('بنتين', 'du', 'accgen'), form('بنات', 'pl')]},
  'فتاة': {gender: 'f', animacy: 'human', forms: [form('فتاة', 'sg'), form('فتاتان', 'du', 'nominative'), form('فتاتين', 'du', 'accgen'), form('فتيات', 'pl')]},

  'كتاب': {gender: 'm', animacy: 'nonhuman', forms: [form('كتاب', 'sg'), form('كتابان', 'du', 'nominative'), form('كتابين', 'du', 'accgen'), form('كتب', 'pl', null, {pluralType: 'broken'})]},
  'مدرسة': {gender: 'f', animacy: 'nonhuman', forms: [form('مدرسة', 'sg'), form('مدرستان', 'du', 'nominative'), form('مدرستين', 'du', 'accgen'), form('مدارس', 'pl', null, {pluralType: 'broken'})]},
  'معلومة': {gender: 'f', animacy: 'nonhuman', forms: [form('معلومة', 'sg'), form('معلومتان', 'du', 'nominative'), form('معلومتين', 'du', 'accgen'), form('معلومات', 'pl')]},
  'رسالة': {gender: 'f', animacy: 'nonhuman', forms: [form('رسالة', 'sg'), form('رسالتان', 'du', 'nominative'), form('رسالتين', 'du', 'accgen'), form('رسائل', 'pl', null, {pluralType: 'broken'})]},
  'سيارة': {gender: 'f', animacy: 'nonhuman', forms: [form('سيارة', 'sg'), form('سيارتان', 'du', 'nominative'), form('سيارتين', 'du', 'accgen'), form('سيارات', 'pl')]},
  'شجرة': {gender: 'f', animacy: 'nonhuman', forms: [form('شجرة', 'sg'), form('شجرتان', 'du', 'nominative'), form('شجرتين', 'du', 'accgen'), form('أشجار', 'pl', null, {pluralType: 'broken'})]},
  'مدينة': {gender: 'f', animacy: 'nonhuman', forms: [form('مدينة', 'sg'), form('مدينتان', 'du', 'nominative'), form('مدينتين', 'du', 'accgen'), form('مدن', 'pl', null, {pluralType: 'broken'})]},
  'مسجد': {gender: 'm', animacy: 'nonhuman', forms: [form('مسجد', 'sg'), form('مسجدان', 'du', 'nominative'), form('مسجدين', 'du', 'accgen'), form('مساجد', 'pl', null, {pluralType: 'broken'})]},
  'مصباح': {gender: 'm', animacy: 'nonhuman', forms: [form('مصباح', 'sg'), form('مصباحان', 'du', 'nominative'), form('مصباحين', 'du', 'accgen'), form('مصابيح', 'pl', null, {pluralType: 'broken'})]},
  'حديقة': {gender: 'f', animacy: 'nonhuman', forms: [form('حديقة', 'sg'), form('حديقتان', 'du', 'nominative'), form('حديقتين', 'du', 'accgen'), form('حدائق', 'pl', null, {pluralType: 'broken'})]},
  'قلم': {gender: 'm', animacy: 'nonhuman', forms: [form('قلم', 'sg'), form('قلمان', 'du', 'nominative'), form('قلمين', 'du', 'accgen'), form('أقلام', 'pl', null, {pluralType: 'broken'})]},
  'باب': {gender: 'm', animacy: 'nonhuman', forms: [form('باب', 'sg'), form('بابان', 'du', 'nominative'), form('بابين', 'du', 'accgen'), form('أبواب', 'pl', null, {pluralType: 'broken'})]},

  'علم': {gender: 'm', animacy: 'abstract', forms: [form('علم', 'sg'), form('علوم', 'pl', null, {pluralType: 'broken'})]},
  'معرفة': {gender: 'f', animacy: 'abstract', forms: [form('معرفة', 'sg'), form('معارف', 'pl', null, {pluralType: 'broken'})]},
  'أدب': {gender: 'm', animacy: 'abstract', forms: [form('أدب', 'sg'), form('آداب', 'pl', null, {pluralType: 'broken'})]},
  'خبر': {gender: 'm', animacy: 'nonhuman', forms: [form('خبر', 'sg'), form('أخبار', 'pl', null, {pluralType: 'broken'})]},
  'ماء': {gender: 'm', animacy: 'mass', forms: [form('ماء', 'sg')]},
  'لبن': {gender: 'm', animacy: 'mass', forms: [form('لبن', 'sg')]},
  'شوق': {gender: 'm', animacy: 'abstract', forms: [form('شوق', 'sg'), form('أشواق', 'pl')]},
  'نفس': {gender: 'f', animacy: 'abstract', forms: [form('نفس', 'sg'), form('نفسان', 'du', 'nominative'), form('نفسين', 'du', 'accgen'), form('أنفس', 'pl')]},
  'عين': {gender: 'f', animacy: 'nonhuman', forms: [form('عين', 'sg'), form('عينان', 'du', 'nominative'), form('عينين', 'du', 'accgen'), form('أعين', 'pl')]},
  ...expandedNounLemmas()
});

function regularAdjectiveParadigm(lemma) {
  const f = `${lemma}ة`;
  return {
    mSg: lemma, fSg: f,
    mDuNom: `${lemma}ان`, mDuObl: `${lemma}ين`,
    fDuNom: `${lemma}تان`, fDuObl: `${lemma}تين`,
    mPlNom: `${lemma}ون`, mPlObl: `${lemma}ين`, fPl: `${lemma}ات`
  };
}

function expandedAdjectiveLemmas() {
  const lemmas = [
    'نشيط', 'سريع', 'ذكي', 'ماهر', 'ناجح', 'متفوق', 'متميز', 'مهم', 'مناسب',
    'سهل', 'صعب', 'طويل', 'قصير', 'قوي', 'ضعيف', 'حديث', 'قديم', 'عربي',
    'علمي', 'عملي', 'رسمي', 'رئيسي', 'كامل', 'ناقص', 'ممتاز', 'سعيد',
    'حزين', 'نظيف', 'واسع', 'ضيق', 'دقيق', 'شامل', 'آمن', 'متاح'
  ];
  return Object.fromEntries(lemmas.map(lemma => [lemma, regularAdjectiveParadigm(lemma)]));
}

const ADJECTIVE_LEMMAS = Object.freeze({
  'مجتهد': {mSg: 'مجتهد', fSg: 'مجتهدة', mDuNom: 'مجتهدان', mDuObl: 'مجتهدين', fDuNom: 'مجتهدتان', fDuObl: 'مجتهدتين', mPlNom: 'مجتهدون', mPlObl: 'مجتهدين', fPl: 'مجتهدات'},
  'حاضر': {mSg: 'حاضر', fSg: 'حاضرة', mDuNom: 'حاضران', mDuObl: 'حاضرين', fDuNom: 'حاضرتان', fDuObl: 'حاضرتين', mPlNom: 'حاضرون', mPlObl: 'حاضرين', fPl: 'حاضرات'},
  'جاهز': {mSg: 'جاهز', fSg: 'جاهزة', mDuNom: 'جاهزان', mDuObl: 'جاهزين', fDuNom: 'جاهزتان', fDuObl: 'جاهزتين', mPlNom: 'جاهزون', mPlObl: 'جاهزين', fPl: 'جاهزات'},
  'مسرور': {mSg: 'مسرور', fSg: 'مسرورة', mDuNom: 'مسروران', mDuObl: 'مسرورين', fDuNom: 'مسرورتان', fDuObl: 'مسرورتين', mPlNom: 'مسرورون', mPlObl: 'مسرورين', fPl: 'مسرورات'},
  'واقف': {mSg: 'واقف', fSg: 'واقفة', mDuNom: 'واقفان', mDuObl: 'واقفين', fDuNom: 'واقفتان', fDuObl: 'واقفتين', mPlNom: 'واقفون', mPlObl: 'واقفين', fPl: 'واقفات'},
  'راكض': {mSg: 'راكض', fSg: 'راكضة', mDuNom: 'راكضان', mDuObl: 'راكضين', fDuNom: 'راكضتان', fDuObl: 'راكضتين', mPlNom: 'راكضون', mPlObl: 'راكضين', fPl: 'راكضات'},
  'مفيد': {mSg: 'مفيد', fSg: 'مفيدة', mDuNom: 'مفيدان', mDuObl: 'مفيدين', fDuNom: 'مفيدتان', fDuObl: 'مفيدتين', mPlNom: 'مفيدون', mPlObl: 'مفيدين', fPl: 'مفيدات'},
  'جميل': {mSg: 'جميل', fSg: 'جميلة', mDuNom: 'جميلان', mDuObl: 'جميلين', fDuNom: 'جميلتان', fDuObl: 'جميلتين', mPlNom: 'جميلون', mPlObl: 'جميلين', fPl: 'جميلات'},
  'جديد': {mSg: 'جديد', fSg: 'جديدة', mDuNom: 'جديدان', mDuObl: 'جديدين', fDuNom: 'جديدتان', fDuObl: 'جديدتين', mPlNom: 'جدد', mPlObl: 'جدد', fPl: 'جديدات'},
  'كبير': {mSg: 'كبير', fSg: 'كبيرة', mDuNom: 'كبيران', mDuObl: 'كبيرين', fDuNom: 'كبيرتان', fDuObl: 'كبيرتين', mPlNom: 'كبار', mPlObl: 'كبار', fPl: 'كبيرات'},
  'صغير': {mSg: 'صغير', fSg: 'صغيرة', mDuNom: 'صغيران', mDuObl: 'صغيرين', fDuNom: 'صغيرتان', fDuObl: 'صغيرتين', mPlNom: 'صغار', mPlObl: 'صغار', fPl: 'صغيرات'},
  'واضح': {mSg: 'واضح', fSg: 'واضحة', mDuNom: 'واضحان', mDuObl: 'واضحين', fDuNom: 'واضحتان', fDuObl: 'واضحتين', mPlNom: 'واضحون', mPlObl: 'واضحين', fPl: 'واضحات'},
  'صحيح': {mSg: 'صحيح', fSg: 'صحيحة', mDuNom: 'صحيحان', mDuObl: 'صحيحين', fDuNom: 'صحيحتان', fDuObl: 'صحيحتين', mPlNom: 'صحيحون', mPlObl: 'صحيحين', fPl: 'صحيحات'},
  'عطشان': {mSg: 'عطشان', fSg: 'عطشى', mDuNom: 'عطشانان', mDuObl: 'عطشانين', fDuNom: 'عطشيان', fDuObl: 'عطشيين', mPlNom: 'عطاش', mPlObl: 'عطاش', fPl: 'عطاش'},
  ...expandedAdjectiveLemmas()
});

const PROPER_NAMES = new Set([
  'محمد', 'محمود', 'علي', 'خالد', 'حسن', 'حسين',
  'أحمد', 'إبراهيم', 'إسماعيل', 'إسحاق', 'يعقوب', 'يوسف', 'يونس', 'إدريس',
  'عثمان', 'عمران', 'سليمان', 'معاوية', 'طلحة', 'حمزة', 'فاطمة', 'عائشة', 'زينب',
  'مريم', 'سعاد', 'دمشق', 'بغداد', 'بيروت', 'باريس', 'لندن', 'رمضان', 'شعبان'
]);

const PREPOSITIONS = new Set(['من', 'إلى', 'عن', 'على', 'في', 'رب', 'مذ', 'منذ', 'حتى', 'خلا', 'عدا', 'حاشا']);
const CONJUNCTIONS = new Set(['و', 'ف', 'ثم', 'أو', 'أم', 'بل', 'لكن']);
const INNA_PARTICLES = new Set(['إن', 'أن', 'كأن', 'لكن', 'ليت', 'لعل']);
const KANA_VERBS = new Set(['كان', 'أصبح', 'أمسى', 'أضحى', 'بات', 'ظل', 'صار', 'ليس', 'مازال', 'ما زال']);
const NEGATION = new Set(['ما', 'لا', 'لم', 'لن', 'ليس']);
const DEMONSTRATIVES = Object.freeze({
  'هذا': {gender: 'm', number: 'sg'}, 'هذه': {gender: 'f', number: 'sg'},
  'هذان': {gender: 'm', number: 'du', caseForm: 'nominative'}, 'هذين': {gender: 'm', number: 'du', caseForm: 'accgen'},
  'هاتان': {gender: 'f', number: 'du', caseForm: 'nominative'}, 'هاتين': {gender: 'f', number: 'du', caseForm: 'accgen'},
  'هؤلاء': {number: 'pl', humanOnly: true}, 'ذلك': {gender: 'm', number: 'sg'},
  'تلك': {gender: 'f', number: 'sg'}, 'أولئك': {number: 'pl', humanOnly: true}
});

/* ضمائر الرفع المنفصلة: مهمة لحسم SVO في «هي تكتب» و«هم يكتبون». */
const RELATIVE_PRONOUNS = Object.freeze({
  'الذي': {gender: 'm', number: 'sg'},
  'التي': {gender: 'f', number: 'sg'},
  'اللذان': {gender: 'm', number: 'du', caseForm: 'nominative'},
  'اللذين': {gender: 'm', number: 'du', caseForm: 'accgen'},
  'اللتان': {gender: 'f', number: 'du', caseForm: 'nominative'},
  'اللتين': {gender: 'f', number: 'du', caseForm: 'accgen'},
  'الذين': {gender: 'm', number: 'pl'},
  'اللاتي': {gender: 'f', number: 'pl'},
  'اللائي': {gender: 'f', number: 'pl'}
});

/* الصيغ الفرعية للأسماء الخمسة؛ لا تفعل القاعدة إلا مع إضافة مثبتة. */
const FIVE_NOUN_FORMS = Object.freeze({
  'أبو': {lemma: 'أب', caseForm: 'nominative'}, 'أبا': {lemma: 'أب', caseForm: 'accusative'}, 'أبي': {lemma: 'أب', caseForm: 'genitive'},
  'أخو': {lemma: 'أخ', caseForm: 'nominative'}, 'أخا': {lemma: 'أخ', caseForm: 'accusative'}, 'أخي': {lemma: 'أخ', caseForm: 'genitive'},
  'حمو': {lemma: 'حم', caseForm: 'nominative'}, 'حما': {lemma: 'حم', caseForm: 'accusative'}, 'حمي': {lemma: 'حم', caseForm: 'genitive'},
  'ذو': {lemma: 'ذو', caseForm: 'nominative'}, 'ذا': {lemma: 'ذو', caseForm: 'accusative'}, 'ذي': {lemma: 'ذو', caseForm: 'genitive'},
  'فو': {lemma: 'فم', caseForm: 'nominative'}, 'فا': {lemma: 'فم', caseForm: 'accusative'}, 'في': {lemma: 'فم', caseForm: 'genitive'}
});

const FIVE_NOUN_BY_LEMMA = Object.freeze({
  'أب': {nominative: 'أبو', accusative: 'أبا', genitive: 'أبي'},
  'أخ': {nominative: 'أخو', accusative: 'أخا', genitive: 'أخي'},
  'حم': {nominative: 'حمو', accusative: 'حما', genitive: 'حمي'},
  'ذو': {nominative: 'ذو', accusative: 'ذا', genitive: 'ذي'},
  'فم': {nominative: 'فو', accusative: 'فا', genitive: 'في'}
});

const PERSONAL_PRONOUNS = Object.freeze({
  'هو': {person: 3, gender: 'm', number: 'sg'},
  'هي': {person: 3, gender: 'f', number: 'sg'},
  'هما': {person: 3, gender: null, number: 'du'},
  'هم': {person: 3, gender: 'm', number: 'pl'},
  'هن': {person: 3, gender: 'f', number: 'pl'},
  'أنت': {person: 2, gender: 'm', number: 'sg'},
  'أنتِ': {person: 2, gender: 'f', number: 'sg'},
  'أنتما': {person: 2, gender: null, number: 'du'},
  'أنتم': {person: 2, gender: 'm', number: 'pl'},
  'أنتن': {person: 2, gender: 'f', number: 'pl'},
  'أنا': {person: 1, gender: null, number: 'sg'},
  'نحن': {person: 1, gender: null, number: 'pl'}
});

/* صور كان وأخواتها الأكثر شيوعًا التي تكفي للتحليل التركيبي المحافظ. */
const KANA_SURFACES = new Set([
  ...KANA_VERBS,
  'كانت', 'كانا', 'كانتا', 'كانوا', 'كن', 'كنت', 'كنتم', 'كنا',
  'أصبح', 'أصبحت', 'أصبحوا', 'أمسى', 'أمست', 'صار', 'صارت', 'صاروا',
  'ظل', 'ظلت', 'بات', 'باتت', 'ليس', 'ليست', 'ليسوا'
]);

const SUBJUNCTIVE_PARTICLES = new Set(['لن', 'أن', 'كي', 'لكي']);
const JUSSIVE_PARTICLES = new Set(['لم']);

const NOUN_FORM_INDEX = new Map();
for (const [lemma, data] of Object.entries(NOUN_LEMMAS)) {
  for (const item of data.forms) {
    const analyses = NOUN_FORM_INDEX.get(item.surface) || [];
    analyses.push({pos: 'noun', lemma, gender: data.gender, animacy: data.animacy, ...item});
    NOUN_FORM_INDEX.set(item.surface, analyses);
  }
}

const ADJECTIVE_FORM_INDEX = new Map();
for (const [lemma, p] of Object.entries(ADJECTIVE_LEMMAS)) {
  const forms = [
    [p.mSg, 'm', 'sg', null], [p.fSg, 'f', 'sg', null],
    [p.mDuNom, 'm', 'du', 'nominative'], [p.mDuObl, 'm', 'du', 'accgen'],
    [p.fDuNom, 'f', 'du', 'nominative'], [p.fDuObl, 'f', 'du', 'accgen'],
    [p.mPlNom, 'm', 'pl', p.mPlNom === p.mPlObl ? null : 'nominative'],
    [p.mPlObl, 'm', 'pl', p.mPlNom === p.mPlObl ? null : 'accgen'],
    [p.fPl, 'f', 'pl', null]
  ];
  for (const [surface, gender, number, caseForm] of forms) {
    if (!surface) continue;
    const analyses = ADJECTIVE_FORM_INDEX.get(surface) || [];
    if (!analyses.some(x => x.lemma === lemma && x.gender === gender && x.number === number && x.caseForm === caseForm)) {
      analyses.push({pos: 'adj', lemma, surface, gender, number, caseForm});
    }
    ADJECTIVE_FORM_INDEX.set(surface, analyses);
  }
}

const KNOWN_SURFACES = new Set([
  ...NOUN_FORM_INDEX.keys(), ...ADJECTIVE_FORM_INDEX.keys(), ...PROPER_NAMES,
  ...PREPOSITIONS, ...CONJUNCTIONS, ...INNA_PARTICLES, ...KANA_SURFACES,
  ...Object.keys(DEMONSTRATIVES), ...Object.keys(PERSONAL_PRONOUNS),
  ...Object.keys(RELATIVE_PRONOUNS), ...Object.keys(FIVE_NOUN_FORMS),
  ...SUBJUNCTIVE_PARTICLES, ...JUSSIVE_PARTICLES
]);

function nounForm(lemma, number, caseValue = null) {
  const data = NOUN_LEMMAS[lemma];
  if (!data) return null;
  const exact = data.forms.find(x => x.number === number && (!x.caseForm || x.caseForm === caseValue || (x.caseForm === 'accgen' && ['accusative', 'genitive', 'accgen'].includes(caseValue))));
  return exact?.surface || data.forms.find(x => x.number === number)?.surface || null;
}

function adjectiveForm(lemma, {gender = 'm', number = 'sg', caseValue = null} = {}) {
  const p = ADJECTIVE_LEMMAS[lemma];
  if (!p) return null;
  if (number === 'sg') return gender === 'f' ? p.fSg : p.mSg;
  if (number === 'du') {
    const oblique = caseValue === 'accusative' || caseValue === 'genitive' || caseValue === 'accgen';
    return gender === 'f' ? (oblique ? p.fDuObl : p.fDuNom) : (oblique ? p.mDuObl : p.mDuNom);
  }
  if (number === 'pl') {
    if (gender === 'f') return p.fPl;
    return (caseValue === 'accusative' || caseValue === 'genitive' || caseValue === 'accgen') ? p.mPlObl : p.mPlNom;
  }
  return null;
}


/* ===== MODULE: src/data/diptotes.js ===== */
const DIPTOTE_EXACT = new Map([
  ['أحمد', 'علم على وزن أفعل'], ['إبراهيم', 'علم أعجمي'], ['إسماعيل', 'علم أعجمي'],
  ['إسحاق', 'علم أعجمي'], ['يعقوب', 'علم أعجمي'], ['يوسف', 'علم أعجمي'],
  ['يونس', 'علم أعجمي'], ['إدريس', 'علم أعجمي'], ['عثمان', 'علم مختوم بألف ونون زائدتين'],
  ['عمران', 'علم مختوم بألف ونون زائدتين'], ['سليمان', 'علم مختوم بألف ونون زائدتين'],
  ['معاوية', 'علم مؤنث لفظًا'], ['طلحة', 'علم مؤنث لفظًا'], ['حمزة', 'علم مؤنث لفظًا'],
  ['فاطمة', 'علم مؤنث'], ['عائشة', 'علم مؤنث'], ['زينب', 'علم مؤنث'],
  ['سعاد', 'علم مؤنث'], ['مريم', 'علم مؤنث أعجمي'],
  ['دمشق', 'علم مؤنث'], ['بغداد', 'علم أعجمي'], ['بيروت', 'علم أعجمي'],
  ['باريس', 'علم أعجمي'], ['لندن', 'علم أعجمي'],
  ['رمضان', 'علم مختوم بألف ونون زائدتين'], ['شعبان', 'علم مختوم بألف ونون زائدتين'],
  ['مساجد', 'صيغة منتهى الجموع'], ['مصابيح', 'صيغة منتهى الجموع'],
  ['مدارس', 'صيغة منتهى الجموع'], ['رسائل', 'صيغة منتهى الجموع'],
  ['حدائق', 'صيغة منتهى الجموع'], ['مفاتيح', 'صيغة منتهى الجموع'],
  ['مكاتب', 'صيغة منتهى الجموع'], ['قواعد', 'صيغة منتهى الجموع'],
  ['منازل', 'صيغة منتهى الجموع'], ['عواصم', 'صيغة منتهى الجموع'],
  ['أحمر', 'صفة على وزن أفعل مؤنثها فعلاء'], ['أصفر', 'صفة على وزن أفعل مؤنثها فعلاء'],
  ['أخضر', 'صفة على وزن أفعل مؤنثها فعلاء'], ['أزرق', 'صفة على وزن أفعل مؤنثها فعلاء'],
  ['أبيض', 'صفة على وزن أفعل مؤنثها فعلاء'], ['أسود', 'صفة على وزن أفعل مؤنثها فعلاء'],
  ['عطشان', 'صفة فعلان مؤنثها فعلى'], ['غضبان', 'صفة فعلان مؤنثها فعلى'],
  ['سكران', 'صفة فعلان مؤنثها فعلى'], ['حيران', 'صفة فعلان مؤنثها فعلى']
]);

const FAWAAIL = /^.وا..$/u;
const MAFAAIl = /^م.ا..$/u;
const MAFAAEEL = /^م.ا.ي.$/u;
const FAALAIL = /^..ائ.$/u;

/** الاستدلال الوزني لا يرفع الثقة إلى مستوى المعجم المراجع. */
function detectDiptote(core) {
  if (DIPTOTE_EXACT.has(core)) {
    return {isDiptote: true, reason: DIPTOTE_EXACT.get(core), confidence: 0.995, source: 'reviewed-diptote-lexicon'};
  }
  if (MAFAAEEL.test(core)) return {isDiptote: true, reason: 'صيغة منتهى الجموع: مفاعيل', confidence: 0.91, source: 'pattern'};
  if (MAFAAIl.test(core) && core.length === 5) return {isDiptote: true, reason: 'صيغة منتهى الجموع: مفاعل', confidence: 0.88, source: 'pattern'};
  if (FAALAIL.test(core)) return {isDiptote: true, reason: 'صيغة منتهى الجموع: فعائل', confidence: 0.88, source: 'pattern'};
  if (FAWAAIL.test(core)) return {isDiptote: true, reason: 'صيغة منتهى الجموع: فواعل', confidence: 0.86, source: 'pattern'};
  return {isDiptote: false, reason: null, confidence: 0};
}


/* ===== MODULE: src/data/numbers.js ===== */
const SIMPLE_CARDINALS = Object.freeze({
  'صفر': {value: 0},
  'واحد': {value: 1, countedGender: 'm'}, 'واحدة': {value: 1, countedGender: 'f'},
  'اثنان': {value: 2, countedGender: 'm', caseForm: 'nominative'},
  'اثنين': {value: 2, countedGender: 'm', caseForm: 'accgen'},
  'اثنتان': {value: 2, countedGender: 'f', caseForm: 'nominative'},
  'اثنتين': {value: 2, countedGender: 'f', caseForm: 'accgen'},
  'أحد': {value: 1, countedGender: 'm', compoundPart: true}, 'إحدى': {value: 1, countedGender: 'f', compoundPart: true},
  'اثنا': {value: 2, countedGender: 'm', caseForm: 'nominative', compoundPart: true},
  'اثني': {value: 2, countedGender: 'm', caseForm: 'accgen', compoundPart: true},
  'اثنتا': {value: 2, countedGender: 'f', caseForm: 'nominative', compoundPart: true},
  'اثنتي': {value: 2, countedGender: 'f', caseForm: 'accgen', compoundPart: true},
  'ثلاثة': {value: 3, countedGender: 'm'}, 'ثلاث': {value: 3, countedGender: 'f'},
  'أربعة': {value: 4, countedGender: 'm'}, 'أربع': {value: 4, countedGender: 'f'},
  'خمسة': {value: 5, countedGender: 'm'}, 'خمس': {value: 5, countedGender: 'f'},
  'ستة': {value: 6, countedGender: 'm'}, 'ست': {value: 6, countedGender: 'f'},
  'سبعة': {value: 7, countedGender: 'm'}, 'سبع': {value: 7, countedGender: 'f'},
  'ثمانية': {value: 8, countedGender: 'm'}, 'ثمان': {value: 8, countedGender: 'f'}, 'ثماني': {value: 8, countedGender: 'f'},
  'تسعة': {value: 9, countedGender: 'm'}, 'تسع': {value: 9, countedGender: 'f'},
  'عشرة': {value: 10, countedGender: 'm'}, 'عشر': {value: 10, countedGender: 'f'},
  'عشرون': {value: 20}, 'عشرين': {value: 20},
  'ثلاثون': {value: 30}, 'ثلاثين': {value: 30},
  'أربعون': {value: 40}, 'أربعين': {value: 40},
  'خمسون': {value: 50}, 'خمسين': {value: 50},
  'ستون': {value: 60}, 'ستين': {value: 60},
  'سبعون': {value: 70}, 'سبعين': {value: 70},
  'ثمانون': {value: 80}, 'ثمانين': {value: 80},
  'تسعون': {value: 90}, 'تسعين': {value: 90},
  'مئة': {value: 100}, 'مائة': {value: 100}, 'ألف': {value: 1000}
});

const POLARITY_FORMS = Object.freeze({
  3: {m: 'ثلاثة', f: 'ثلاث'}, 4: {m: 'أربعة', f: 'أربع'},
  5: {m: 'خمسة', f: 'خمس'}, 6: {m: 'ستة', f: 'ست'},
  7: {m: 'سبعة', f: 'سبع'}, 8: {m: 'ثمانية', f: 'ثماني'},
  9: {m: 'تسعة', f: 'تسع'}, 10: {m: 'عشرة', f: 'عشر'}
});

function simpleCardinal(surface) {
  return SIMPLE_CARDINALS[surface] || null;
}

/** في المفاتيح m/f جنس المعدود، لا جنس لفظ العدد. */
function expectedSimpleNumber(value, countedGender) {
  if (value === 1) return countedGender === 'f' ? 'واحدة' : 'واحد';
  if (value === 2) return countedGender === 'f' ? 'اثنتان' : 'اثنان';
  return POLARITY_FORMS[value]?.[countedGender] || null;
}

function parseCompoundNumber(tokens, index) {
  const a = tokens[index]?.morph?.core;
  const b = tokens[index + 1]?.morph?.core;
  if (!a || !b) return null;

  const elevenTwelve = {
    'أحد عشر': {value: 11, countedGender: 'm'}, 'إحدى عشرة': {value: 11, countedGender: 'f'},
    'اثنا عشر': {value: 12, countedGender: 'm', caseForm: 'nominative'},
    'اثني عشر': {value: 12, countedGender: 'm', caseForm: 'accgen'},
    'اثنتا عشرة': {value: 12, countedGender: 'f', caseForm: 'nominative'},
    'اثنتي عشرة': {value: 12, countedGender: 'f', caseForm: 'accgen'}
  };
  const key = `${a} ${b}`;
  if (elevenTwelve[key]) return {...elevenTwelve[key], length: 2, surface: key};
  if (['أحد', 'إحدى'].includes(a) && ['عشر', 'عشرة'].includes(b)) {
    return {value: 11, countedGender: b === 'عشر' ? 'm' : 'f', length: 2, surface: key, malformed: true};
  }
  if (['اثنا', 'اثني', 'اثنتا', 'اثنتي'].includes(a) && ['عشر', 'عشرة'].includes(b)) {
    return {value: 12, countedGender: b === 'عشر' ? 'm' : 'f', length: 2, surface: key, malformed: true, caseForm: /(?:ني|نتي)$/u.test(a) ? 'accgen' : 'nominative'};
  }

  const unit = simpleCardinal(a);
  if (unit && unit.value >= 3 && unit.value <= 9 && (b === 'عشر' || b === 'عشرة')) {
    // 13–19: صدر العدد يخالف، و«عشر/عشرة» توافق المعدود.
    const countedGender = b === 'عشر' ? 'm' : 'f';
    return {value: 10 + unit.value, countedGender, length: 2, surface: key, unit: unit.value};
  }
  return null;
}

function expectedCompoundNumber(value, countedGender, caseValue = 'nominative') {
  if (value === 11) return countedGender === 'f' ? ['إحدى', 'عشرة'] : ['أحد', 'عشر'];
  if (value === 12) {
    const oblique = caseValue === 'accusative' || caseValue === 'genitive' || caseValue === 'accgen';
    if (countedGender === 'f') return [oblique ? 'اثنتي' : 'اثنتا', 'عشرة'];
    return [oblique ? 'اثني' : 'اثنا', 'عشر'];
  }
  if (value >= 13 && value <= 19) {
    const unit = value - 10;
    return [expectedSimpleNumber(unit, countedGender), countedGender === 'f' ? 'عشرة' : 'عشر'];
  }
  return null;
}

const DECADE_NOMINATIVE = Object.freeze({
  20: 'عشرون', 30: 'ثلاثون', 40: 'أربعون', 50: 'خمسون',
  60: 'ستون', 70: 'سبعون', 80: 'ثمانون', 90: 'تسعون'
});

function decadeForm(value, caseValue = 'nominative') {
  const nominative = DECADE_NOMINATIVE[value];
  if (!nominative) return null;
  return caseValue === 'nominative' ? nominative : nominative.replace(/ون$/u, 'ين');
}

/** يحلل 21–99 المكتوبة بواو متصلة أو منفصلة: «واحد وعشرون»/«واحد و عشرون». */
function parseCoordinatedNumber(tokens, index) {
  const first = simpleCardinal(tokens[index]?.morph?.core);
  if (!first || first.value < 1 || first.value > 9) return null;

  let decadeIndex = index + 1;
  let length = 2;
  const second = tokens[decadeIndex];
  if (second?.morph?.core === 'و' && tokens[index + 2]) {
    decadeIndex = index + 2;
    length = 3;
  } else if (second?.morph?.segments?.conjunction !== 'و') {
    return null;
  }

  const decade = simpleCardinal(tokens[decadeIndex]?.morph?.core);
  if (!decade || !DECADE_NOMINATIVE[decade.value]) return null;
  const decadeCase = /ين$/u.test(tokens[decadeIndex].morph.core) ? 'accgen' : 'nominative';
  const unitCase = first.value === 2 ? first.caseForm : null;
  return {
    value: decade.value + first.value,
    unitValue: first.value,
    countedGender: first.countedGender,
    caseForm: decadeCase,
    unitCase,
    length,
    decadeIndex,
    surface: tokens.slice(index, index + length).map(x => x.surface).join(' '),
    kind: 'coordinated'
  };
}

function expectedCoordinatedNumber(parsed, countedGender, caseValue = 'nominative') {
  const oblique = ['accusative', 'genitive', 'accgen'].includes(caseValue);
  let unit;
  if (parsed.unitValue === 1) unit = countedGender === 'f' ? 'واحدة' : 'واحد';
  else if (parsed.unitValue === 2) {
    if (countedGender === 'f') unit = oblique ? 'اثنتين' : 'اثنتان';
    else unit = oblique ? 'اثنين' : 'اثنان';
  } else unit = expectedSimpleNumber(parsed.unitValue, countedGender);
  const decade = decadeForm(parsed.value - parsed.unitValue, caseValue);
  return unit && decade ? [unit, decade] : null;
}

/**
 * يحدد عبارة العدد واتجاه المعدود بدل افتراض أن الكلمة السابقة هي المعدود.
 * النتيجة تستخدمها قواعد العدد ومحلل الفاعل وطبقة التحقق النهائية.
 */
function analyzeNumberPhrase(tokens, index) {
  const compound = parseCompoundNumber(tokens, index);
  if (compound) {
    const countedIndex = index + compound.length;
    return {...compound, start: index, end: countedIndex, countedIndex, direction: 'number-before-noun', kind: 'teen'};
  }
  const coordinated = parseCoordinatedNumber(tokens, index);
  if (coordinated) {
    const countedIndex = index + coordinated.length;
    return {...coordinated, start: index, end: countedIndex, countedIndex, direction: 'number-before-noun'};
  }

  const data = simpleCardinal(tokens[index]?.morph?.core);
  if (!data) return null;
  if (data.value === 1 || data.value === 2) {
    if (tokens[index + 1]?.morph?.core === 'من') {
      const {end: sentenceEnd} = sentenceBounds(tokens, index);
      const partitiveCounted = nextNominal(tokens, index + 2, {end: sentenceEnd, skipPrepositional: false});
      if (partitiveCounted >= 0) {
        return {
          ...data, start: index, end: index + 1, countedIndex: partitiveCounted,
          direction: 'partitive-number-before-min', length: 1, kind: 'simple'
        };
      }
    }
    const previous = tokens[index - 1];
    // العدد الوصفي يطابق المعدود في التعريف: «كتاب واحد/الكتاب الواحد»؛
    // وهذا يمنع ربط «واحد» بالمكتبة في «في المكتبة واحد».
    const definitenessCompatible = previous
      && Boolean(previous.morph?.definite) === Boolean(tokens[index].morph?.definite);
    const countedIndex = previous && previous.sentence === tokens[index].sentence
      && isStrongNominalCandidate(previous) && definitenessCompatible ? index - 1 : -1;
    return {...data, start: index, end: index + 1, countedIndex, direction: countedIndex >= 0 ? 'noun-before-number' : 'standalone', length: 1, kind: 'simple'};
  }
  return {...data, start: index, end: index + 1, countedIndex: index + 1, direction: 'number-before-noun', length: 1, kind: 'simple'};
}

function numberGovernance(value) {
  if (value === 1 || value === 2) return {order: 'postposed', countedNumber: value === 1 ? 'sg' : 'du', case: 'agreement'};
  if (value >= 3 && value <= 10) return {countedNumber: 'pl', case: 'genitive'};
  if (value >= 11 && value <= 99) return {countedNumber: 'sg', case: 'accusative'};
  if (value === 100 || value === 1000) return {countedNumber: 'sg', case: 'genitive'};
  return null;
}


/* ===== MODULE: src/data/weak-verbs.js ===== */
const PERSON_FEATURES = Object.freeze({
  '1s': {person: 1, number: 'sg'}, '1p': {person: 1, number: 'pl'},
  '2ms': {person: 2, gender: 'm', number: 'sg'}, '2fs': {person: 2, gender: 'f', number: 'sg'},
  '2du': {person: 2, number: 'du'}, '2mp': {person: 2, gender: 'm', number: 'pl'}, '2fp': {person: 2, gender: 'f', number: 'pl'},
  '3ms': {person: 3, gender: 'm', number: 'sg'}, '3fs': {person: 3, gender: 'f', number: 'sg'},
  '3dm': {person: 3, gender: 'm', number: 'du'}, '3df': {person: 3, gender: 'f', number: 'du'},
  '3mp': {person: 3, gender: 'm', number: 'pl'}, '3fp': {person: 3, gender: 'f', number: 'pl'}
});

function soundParadigm(past, present) {
  const stem = present.replace(/^ي/u, '');
  return {
    past: {
      '3ms': past, '3fs': `${past}ت`, '3dm': `${past}ا`, '3df': `${past}تا`,
      '3mp': `${past}وا`, '3fp': `${past}ن`,
      '2ms': `${past}ت`, '2fs': `${past}ت`, '2du': `${past}تما`,
      '2mp': `${past}تم`, '2fp': `${past}تن`, '1s': `${past}ت`, '1p': `${past}نا`
    },
    present: {
      '3ms': present, '3fs': `ت${stem}`, '3dm': `ي${stem}ان`, '3df': `ت${stem}ان`,
      '3mp': `ي${stem}ون`, '3fp': `ي${stem}ن`,
      '2ms': `ت${stem}`, '2fs': `ت${stem}ين`, '2du': `ت${stem}ان`,
      '2mp': `ت${stem}ون`, '2fp': `ت${stem}ن`, '1s': `أ${stem}`, '1p': `ن${stem}`
    }
  };
}

function hollowParadigm(pastLong, pastShort, present, presentShort) {
  const longStem = present.replace(/^ي/u, '');
  return {
    past: {
      '3ms': pastLong, '3fs': `${pastLong}ت`, '3dm': `${pastLong}ا`, '3df': `${pastLong}تا`,
      '3mp': `${pastLong}وا`, '3fp': `${pastShort}ن`,
      '2ms': `${pastShort}ت`, '2fs': `${pastShort}ت`, '2du': `${pastShort}تما`,
      '2mp': `${pastShort}تم`, '2fp': `${pastShort}تن`, '1s': `${pastShort}ت`, '1p': `${pastShort}نا`
    },
    present: {
      '3ms': present, '3fs': `ت${longStem}`, '3dm': `ي${longStem}ان`, '3df': `ت${longStem}ان`,
      '3mp': `ي${longStem}ون`, '3fp': `ي${presentShort}ن`,
      '2ms': `ت${longStem}`, '2fs': `ت${longStem}ين`, '2du': `ت${longStem}ان`,
      '2mp': `ت${longStem}ون`, '2fp': `ت${presentShort}ن`, '1s': `أ${longStem}`, '1p': `ن${longStem}`
    }
  };
}

function defectiveYaParadigm(pastLong, suffixStem, shortStem, present) {
  const presentStem = present.replace(/^ي/u, '');
  const presentSuffixStem = presentStem.replace(/ى$/u, 'ي');
  const presentShort = presentStem.replace(/[يى]$/u, '');
  return {
    past: {
      '3ms': pastLong, '3fs': `${shortStem}ت`, '3dm': `${suffixStem}ا`, '3df': `${shortStem}تا`,
      '3mp': `${shortStem}وا`, '3fp': `${suffixStem}ن`,
      '2ms': `${suffixStem}ت`, '2fs': `${suffixStem}ت`, '2du': `${suffixStem}تما`,
      '2mp': `${suffixStem}تم`, '2fp': `${suffixStem}تن`, '1s': `${suffixStem}ت`, '1p': `${suffixStem}نا`
    },
    present: {
      '3ms': present, '3fs': `ت${presentStem}`, '3dm': `ي${presentSuffixStem}ان`, '3df': `ت${presentSuffixStem}ان`,
      '3mp': `ي${presentShort}ون`, '3fp': `ي${presentSuffixStem}ن`,
      '2ms': `ت${presentStem}`, '2fs': `ت${presentSuffixStem}ن`, '2du': `ت${presentSuffixStem}ان`,
      '2mp': `ت${presentShort}ون`, '2fp': `ت${presentSuffixStem}ن`, '1s': `أ${presentStem}`, '1p': `ن${presentStem}`
    }
  };
}

function defectiveWawParadigm(pastLong, suffixStem, shortStem, present) {
  const presentStem = present.replace(/^ي/u, '');
  const presentShort = presentStem.slice(0, -1);
  return {
    past: {
      '3ms': pastLong, '3fs': `${shortStem}ت`, '3dm': `${suffixStem}ا`, '3df': `${shortStem}تا`,
      '3mp': `${shortStem}وا`, '3fp': `${suffixStem}ن`,
      '2ms': `${suffixStem}ت`, '2fs': `${suffixStem}ت`, '2du': `${suffixStem}تما`,
      '2mp': `${suffixStem}تم`, '2fp': `${suffixStem}تن`, '1s': `${suffixStem}ت`, '1p': `${suffixStem}نا`
    },
    present: {
      '3ms': present, '3fs': `ت${presentStem}`, '3dm': `ي${presentStem}ان`, '3df': `ت${presentStem}ان`,
      '3mp': `ي${presentShort}ون`, '3fp': `ي${presentStem}ن`,
      '2ms': `ت${presentStem}`, '2fs': `ت${presentShort}ين`, '2du': `ت${presentStem}ان`,
      '2mp': `ت${presentShort}ون`, '2fp': `ت${presentStem}ن`, '1s': `أ${presentStem}`, '1p': `ن${presentStem}`
    }
  };
}

function nasiyaParadigm() {
  // نَسِيَ يَنْسَى: تبقى الياء قبل تاء التأنيث (نَسِيَتْ) وتسقط قبل واو الجماعة (نَسُوا)
  return {
    past: {
      '3ms': 'نسي', '3fs': 'نسيت', '3dm': 'نسيا', '3df': 'نسيتا',
      '3mp': 'نسوا', '3fp': 'نسين',
      '2ms': 'نسيت', '2fs': 'نسيت', '2du': 'نسيتما',
      '2mp': 'نسيتم', '2fp': 'نسيتن', '1s': 'نسيت', '1p': 'نسينا'
    },
    present: {
      '3ms': 'ينسى', '3fs': 'تنسى', '3dm': 'ينسيان', '3df': 'تنسيان',
      '3mp': 'ينسون', '3fp': 'ينسين',
      '2ms': 'تنسى', '2fs': 'تنسين', '2du': 'تنسيان',
      '2mp': 'تنسون', '2fp': 'تنسين', '1s': 'أنسى', '1p': 'ننسى'
    }
  };
}

function doubledParadigm(past, present, expanded) {
  const pStem = present.replace(/^ي/u, '');
  return {
    past: {
      '3ms': past, '3fs': `${past}ت`, '3dm': `${past}ا`, '3df': `${past}تا`, '3mp': `${past}وا`,
      '3fp': `${expanded}ن`, '2ms': `${expanded}ت`, '2fs': `${expanded}ت`, '2du': `${expanded}تما`,
      '2mp': `${expanded}تم`, '2fp': `${expanded}تن`, '1s': `${expanded}ت`, '1p': `${expanded}نا`
    },
    present: {
      '3ms': present, '3fs': `ت${pStem}`, '3dm': `ي${pStem}ان`, '3df': `ت${pStem}ان`,
      '3mp': `ي${pStem}ون`, '3fp': `ي${expanded}ن`, '2ms': `ت${pStem}`,
      '2fs': `ت${pStem}ين`, '2du': `ت${pStem}ان`, '2mp': `ت${pStem}ون`,
      '2fp': `ت${expanded}ن`, '1s': `أ${pStem}`, '1p': `ن${pStem}`
    }
  };
}

function cameParadigm() {
  return {
    past: {'3ms': 'جاء', '3fs': 'جاءت', '3dm': 'جاءا', '3df': 'جاءتا', '3mp': 'جاءوا', '3fp': 'جئن', '2ms': 'جئت', '2fs': 'جئت', '2du': 'جئتما', '2mp': 'جئتم', '2fp': 'جئتن', '1s': 'جئت', '1p': 'جئنا'},
    present: {'3ms': 'يجيء', '3fs': 'تجيء', '3dm': 'يجيئان', '3df': 'تجيئان', '3mp': 'يجيئون', '3fp': 'يجئن', '2ms': 'تجيء', '2fs': 'تجيئين', '2du': 'تجيئان', '2mp': 'تجيئون', '2fp': 'تجئن', '1s': 'أجيء', '1p': 'نجيء'}
  };
}

function entry(lemma, root, verbClass, present3ms, paradigm, valency = 'intransitive') {
  return {lemma, root, verbClass, present3ms, paradigm, valency, transitive: ['transitive', 'ditransitive', 'ambitransitive'].includes(valency), verified: true};
}

const take = soundParadigm('أخذ', 'يأخذ');
take.present['1s'] = 'آخذ';
const eat = soundParadigm('أكل', 'يأكل');
eat.present['1s'] = 'آكل';

const VERB_LEXICON = Object.freeze({
  // الأجوف
  'قال': entry('قال', 'ق-و-ل', 'hollow-waw', 'يقول', hollowParadigm('قال', 'قل', 'يقول', 'قل'), 'clausal'),
  'باع': entry('باع', 'ب-ي-ع', 'hollow-ya', 'يبيع', hollowParadigm('باع', 'بع', 'يبيع', 'بع'), 'transitive'),
  'نام': entry('نام', 'ن-و-م', 'hollow-waw', 'ينام', hollowParadigm('نام', 'نم', 'ينام', 'نم')),
  'عاد': entry('عاد', 'ع-و-د', 'hollow-waw', 'يعود', hollowParadigm('عاد', 'عد', 'يعود', 'عد')),
  'صام': entry('صام', 'ص-و-م', 'hollow-waw', 'يصوم', hollowParadigm('صام', 'صم', 'يصوم', 'صم')),
  'زاد': entry('زاد', 'ز-ي-د', 'hollow-ya', 'يزيد', hollowParadigm('زاد', 'زد', 'يزيد', 'زد'), 'ambitransitive'),

  // الناقص واللفيف
  'رمى': entry('رمى', 'ر-م-ي', 'defective-ya', 'يرمي', defectiveYaParadigm('رمى', 'رمي', 'رم', 'يرمي'), 'transitive'),
  'قضى': entry('قضى', 'ق-ض-ي', 'defective-ya', 'يقضي', defectiveYaParadigm('قضى', 'قضي', 'قض', 'يقضي'), 'transitive'),
  'سعى': entry('سعى', 'س-ع-ي', 'defective-ya', 'يسعى', defectiveYaParadigm('سعى', 'سعي', 'سع', 'يسعى')),
  'بنى': entry('بنى', 'ب-ن-ي', 'defective-ya', 'يبني', defectiveYaParadigm('بنى', 'بني', 'بن', 'يبني'), 'transitive'),
  'مشى': entry('مشى', 'م-ش-ي', 'defective-ya', 'يمشي', defectiveYaParadigm('مشى', 'مشي', 'مش', 'يمشي')),
  'جرى': entry('جرى', 'ج-ر-ي', 'defective-ya', 'يجري', defectiveYaParadigm('جرى', 'جري', 'جر', 'يجري')),
  'روى': entry('روى', 'ر-و-ي', 'defective-ya', 'يروي', defectiveYaParadigm('روى', 'روي', 'رو', 'يروي'), 'transitive'),
  'رأى': entry('رأى', 'ر-أ-ي', 'irregular-hamzated-defective', 'يرى', defectiveYaParadigm('رأى', 'رأي', 'رأ', 'يرى'), 'transitive'),
  'دعا': entry('دعا', 'د-ع-و', 'defective-waw', 'يدعو', defectiveWawParadigm('دعا', 'دعو', 'دع', 'يدعو'), 'transitive'),

  // المثال
  'وعد': entry('وعد', 'و-ع-د', 'assimilated-waw', 'يعد', soundParadigm('وعد', 'يعد'), 'transitive'),
  'وجد': entry('وجد', 'و-ج-د', 'assimilated-waw', 'يجد', soundParadigm('وجد', 'يجد'), 'transitive'),
  'وصف': entry('وصف', 'و-ص-ف', 'assimilated-waw', 'يصف', soundParadigm('وصف', 'يصف'), 'transitive'),
  'وصل': entry('وصل', 'و-ص-ل', 'assimilated-waw', 'يصل', soundParadigm('وصل', 'يصل'), 'ambitransitive'),
  'ورث': entry('ورث', 'و-ر-ث', 'assimilated-waw', 'يرث', soundParadigm('ورث', 'يرث'), 'transitive'),

  // المهموز والمضاعف: جداول صريحة تمنع التوليد المنتظم الخاطئ
  'جاء': entry('جاء', 'ج-ي-ء', 'hamzated-irregular', 'يجيء', cameParadigm()),
  'أخذ': entry('أخذ', 'أ-خ-ذ', 'hamzated', 'يأخذ', take, 'transitive'),
  'أكل': entry('أكل', 'أ-ك-ل', 'hamzated', 'يأكل', eat, 'transitive'),
  'قرأ': entry('قرأ', 'ق-ر-أ', 'hamzated', 'يقرأ', soundParadigm('قرأ', 'يقرأ'), 'transitive'),
  'بدأ': entry('بدأ', 'ب-د-أ', 'hamzated', 'يبدأ', soundParadigm('بدأ', 'يبدأ'), 'ambitransitive'),
  'مدّ': entry('مدّ', 'م-د-د', 'doubled', 'يمدّ', doubledParadigm('مدّ', 'يمدّ', 'مدد'), 'transitive'),
  'ردّ': entry('ردّ', 'ر-د-د', 'doubled', 'يردّ', doubledParadigm('ردّ', 'يردّ', 'ردد'), 'transitive'),

  // أفعال صحيحة لازمة للتحليل السياقي في الحال والتمييز والعطف
  'حضر': entry('حضر', 'ح-ض-ر', 'sound', 'يحضر', soundParadigm('حضر', 'يحضر')),
  'دخل': entry('دخل', 'د-خ-ل', 'sound', 'يدخل', soundParadigm('دخل', 'يدخل')),
  'خرج': entry('خرج', 'خ-ر-ج', 'sound', 'يخرج', soundParadigm('خرج', 'يخرج')),
  'رجع': entry('رجع', 'ر-ج-ع', 'sound', 'يرجع', soundParadigm('رجع', 'يرجع')),
  'كتب': entry('كتب', 'ك-ت-ب', 'sound', 'يكتب', soundParadigm('كتب', 'يكتب'), 'transitive'),
  'فهم': entry('فهم', 'ف-ه-م', 'sound', 'يفهم', soundParadigm('فهم', 'يفهم'), 'transitive'),
  'ازداد': entry('ازداد', 'ز-ي-د', 'derived-weak', 'يزداد', soundParadigm('ازداد', 'يزداد'), 'ambitransitive'),
  'امتلأ': entry('امتلأ', 'م-ل-أ', 'hamzated-derived', 'يمتلئ', soundParadigm('امتلأ', 'يمتلئ')),
  'اشتعل': entry('اشتعل', 'ش-ع-ل', 'sound-derived', 'يشتعل', soundParadigm('اشتعل', 'يشتعل')),
  'كثر': entry('كثر', 'ك-ث-ر', 'sound', 'يكثر', soundParadigm('كثر', 'يكثر')),

  /* ── الدفعة 2: توسيع المعجم (21 جذرًا شائعًا) ── */
  'قام': entry('قام', 'ق-و-م', 'hollow-waw', 'يقوم', hollowParadigm('قام', 'قم', 'يقوم', 'قم')),
  'خاف': entry('خاف', 'خ-و-ف', 'hollow-waw', 'يخاف', hollowParadigm('خاف', 'خف', 'يخاف', 'خف'), 'transitive'),
  'مات': entry('مات', 'م-و-ت', 'hollow-waw', 'يموت', hollowParadigm('مات', 'مت', 'يموت', 'مت')),
  'عاش': entry('عاش', 'ع-ي-ش', 'hollow-ya', 'يعيش', hollowParadigm('عاش', 'عش', 'يعيش', 'عش')),
  'بات': entry('بات', 'ب-ي-ت', 'hollow-ya', 'يبيت', hollowParadigm('بات', 'بت', 'يبيت', 'بت')),
  'بكى': entry('بكى', 'ب-ك-ي', 'defective-ya', 'يبكي', defectiveYaParadigm('بكى', 'بكي', 'بك', 'يبكي')),
  'نسي': entry('نسي', 'ن-س-ي', 'defective-ya', 'ينسى', nasiyaParadigm(), 'transitive'),
  'سأل': entry('سأل', 'س-أ-ل', 'hamzated', 'يسأل', soundParadigm('سأل', 'يسأل'), 'transitive'),
  'ملأ': entry('ملأ', 'م-ل-أ', 'hamzated', 'يملأ', soundParadigm('ملأ', 'يملأ'), 'transitive'),
  'نشأ': entry('نشأ', 'ن-ش-أ', 'hamzated', 'ينشأ', soundParadigm('نشأ', 'ينشأ')),
  'لجأ': entry('لجأ', 'ل-ج-أ', 'hamzated', 'يلجأ', soundParadigm('لجأ', 'يلجأ')),
  'ذهب': entry('ذهب', 'ذ-ه-ب', 'sound', 'يذهب', soundParadigm('ذهب', 'يذهب')),
  'شرب': entry('شرب', 'ش-ر-ب', 'sound', 'يشرب', soundParadigm('شرب', 'يشرب'), 'transitive'),
  'جلس': entry('جلس', 'ج-ل-س', 'sound', 'يجلس', soundParadigm('جلس', 'يجلس')),
  'درس': entry('درس', 'د-ر-س', 'sound', 'يدرس', soundParadigm('درس', 'يدرس'), 'transitive'),
  'لعب': entry('لعب', 'ل-ع-ب', 'sound', 'يلعب', soundParadigm('لعب', 'يلعب')),
  'وقف': entry('وقف', 'و-ق-ف', 'assimilated-waw', 'يقف', soundParadigm('وقف', 'يقف')),
  'سمع': entry('سمع', 'س-م-ع', 'sound', 'يسمع', soundParadigm('سمع', 'يسمع'), 'transitive'),
  'عرف': entry('عرف', 'ع-ر-ف', 'sound', 'يعرف', soundParadigm('عرف', 'يعرف'), 'transitive'),
  'طلب': entry('طلب', 'ط-ل-ب', 'sound', 'يطلب', soundParadigm('طلب', 'يطلب'), 'transitive'),
  'فتح': entry('فتح', 'ف-ت-ح', 'sound', 'يفتح', soundParadigm('فتح', 'يفتح'), 'transitive'),

  /* 18.3: أفعال شائعة لازمة لاختبارات الجمل الإسنادية المستقلة. */
  'نجح': entry('نجح', 'ن-ج-ح', 'sound', 'ينجح', soundParadigm('نجح', 'ينجح')),
  'فاز': entry('فاز', 'ف-و-ز', 'hollow-waw', 'يفوز', hollowParadigm('فاز', 'فز', 'يفوز', 'فز')),
  'شارك': entry('شارك', 'ش-ر-ك', 'sound-derived', 'يشارك', soundParadigm('شارك', 'يشارك'), 'ambitransitive'),
  'كرم': entry('كرم', 'ك-ر-م', 'sound', 'يكرم', soundParadigm('كرم', 'يكرم'), 'transitive')
});

const VERB_FORM_INDEX = new Map();
for (const meta of Object.values(VERB_LEXICON)) {
  for (const [tense, forms] of Object.entries(meta.paradigm)) {
    for (const [person, surface] of Object.entries(forms)) {
      const key = stripDiacritics(surface);
      const list = VERB_FORM_INDEX.get(key) || [];
      list.push({
        pos: 'verb', lemma: meta.lemma, root: meta.root, verbClass: meta.verbClass,
        tense, personCode: person, ...PERSON_FEATURES[person], surface,
        valency: meta.valency, transitive: meta.transitive, confidence: meta.verified ? 0.995 : 0.85
      });
      VERB_FORM_INDEX.set(key, list);
    }
  }
}

function verbAnalyses(surface) {
  return (VERB_FORM_INDEX.get(stripDiacritics(surface)) || []).map(x => ({...x}));
}

function conjugateVerb(lemma, tense, personCode) {
  return VERB_LEXICON[lemma]?.paradigm?.[tense]?.[personCode] || null;
}

function weakVerbStats() {
  const entries = Object.values(VERB_LEXICON);
  return {
    lemmas: entries.length,
    weakOrIrregularLemmas: entries.filter(x => x.verbClass !== 'sound' && !x.verbClass.startsWith('sound-')).length,
    indexedSurfaceForms: VERB_FORM_INDEX.size,
    analyses: [...VERB_FORM_INDEX.values()].reduce((sum, list) => sum + list.length, 0),
    classes: [...new Set(entries.map(x => x.verbClass))].sort()
  };
}


/* ===== MODULE: src/morphology/clitics.js ===== */
const ENCLITICS = ['كما', 'هما', 'هم', 'هن', 'ها', 'نا', 'كم', 'كن', 'ني', 'ه', 'ك', 'ي'];
const EMPHASIS_BASES = new Set(['نفس', 'عين', 'كل', 'كلا', 'كلتا', 'كلي', 'كلتي', 'أجمع']);

function exactKnown(value) {
  const core = value.replace(/^ال/u, '');
  return KNOWN_SURFACES.has(value) || KNOWN_SURFACES.has(core)
    || NOUN_FORM_INDEX.has(core) || ADJECTIVE_FORM_INDEX.has(core)
    || PROPER_NAMES.has(core) || VERB_FORM_INDEX.has(core)
    || SIMPLE_CARDINALS[core] || DIPTOTE_EXACT.has(core)
    || PREPOSITIONS.has(core) || CONJUNCTIONS.has(core)
    || INNA_PARTICLES.has(core) || KANA_SURFACES.has(core)
    || DEMONSTRATIVES[core] || PERSONAL_PRONOUNS[core] || RELATIVE_PRONOUNS[core]
    || FIVE_NOUN_FORMS[core] || SUBJUNCTIVE_PARTICLES.has(core) || JUSSIVE_PARTICLES.has(core);
}

function looksLikeFiveNounWithEnclitic(value) {
  const suffixPattern = '(?:كما|هما|هم|هن|ها|نا|كم|كن|ني|ه|ك|ي)';
  return new RegExp(`^(?:${Object.keys(FIVE_NOUN_FORMS).join('|')})${suffixPattern}$`, 'u').test(value);
}

function knownCore(value) {
  const core = value.replace(/^ال/u, '');
  return exactKnown(value) || looksLikeFiveNounWithEnclitic(core) || /(?:ة|ات|ان|ين|ون)$/u.test(core);
}

function splitClitics(surface) {
  const clean = stripDiacritics(surface);
  let rest = clean;
  let conjunction = null;
  let preposition = null;
  let article = false;
  let enclitic = null;

  if (!exactKnown(rest) && /^[وف]/u.test(rest) && rest.length > 2 && knownCore(rest.slice(1))) {
    conjunction = rest[0];
    rest = rest.slice(1);
  }

  if (!exactKnown(rest) && rest.startsWith('لل') && rest.length > 3 && knownCore(`ال${rest.slice(2)}`)) {
    preposition = 'ل';
    article = true;
    rest = rest.slice(2);
  } else if (!exactKnown(rest) && /^[بكل]ال/u.test(rest) && rest.length > 4 && knownCore(rest.slice(1))) {
    preposition = rest[0];
    article = true;
    rest = rest.slice(3);
  } else if (!exactKnown(rest) && /^[بكل]/u.test(rest) && rest.length > 2 && knownCore(rest.slice(1))) {
    preposition = rest[0];
    rest = rest.slice(1);
  }

  if (!article && rest.startsWith('ال') && rest.length > 3 && !RELATIVE_PRONOUNS[rest]) {
    article = true;
    rest = rest.slice(2);
  }

  for (const suffix of ENCLITICS) {
    if (!rest.endsWith(suffix) || rest.length <= suffix.length + 1) continue;
    const candidate = rest.slice(0, -suffix.length);
    if (EMPHASIS_BASES.has(candidate) || NOUN_FORM_INDEX.has(candidate) || FIVE_NOUN_FORMS[candidate]) {
      enclitic = suffix;
      rest = candidate;
      break;
    }
  }

  const prefix = `${conjunction || ''}${preposition || ''}${article ? 'ال' : ''}`;
  return {
    surface, clean, conjunction, preposition, article, enclitic,
    prefix, core: rest, coreSurface: rest,
    definite: article || Boolean(enclitic) || PROPER_NAMES.has(rest)
  };
}

function rebuildToken(token, newCore, {keepEnclitic = true} = {}) {
  const seg = token.morph?.segments || splitClitics(token.surface);
  return `${seg.prefix}${newCore}${keepEnclitic ? (seg.enclitic || '') : ''}`;
}


/* ===== MODULE: src/morphology/nominal.js ===== */
function dedupe(candidates) {
  const seen = new Set();
  return candidates.filter(item => {
    const key = [item.pos, item.lemma, item.gender, item.number, item.caseForm].join('|');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function analyzeNominal(token, segments) {
  const core = segments.core;
  const candidates = [];

  for (const item of NOUN_FORM_INDEX.get(core) || []) candidates.push({...item, confidence: 0.995, source: 'reviewed-noun-lexicon'});
  for (const item of ADJECTIVE_FORM_INDEX.get(core) || []) candidates.push({...item, confidence: 0.995, source: 'reviewed-adjective-paradigm'});

  if (PROPER_NAMES.has(core)) candidates.push({pos: 'proper', lemma: core, gender: /[ةى]$/u.test(core) ? 'f' : null, number: 'sg', animacy: 'human', confidence: 0.99, source: 'proper-name-lexicon'});
  if (DEMONSTRATIVES[core]) candidates.push({pos: 'demonstrative', lemma: core, ...DEMONSTRATIVES[core], confidence: 0.995, source: 'closed-class'});
  if (RELATIVE_PRONOUNS[core]) candidates.push({pos: 'relative', lemma: core, ...RELATIVE_PRONOUNS[core], definite: true, confidence: 0.999, source: 'closed-class'});
  if (FIVE_NOUN_FORMS[core] && !(core === 'في' && !segments.enclitic)) {
    candidates.push({
      pos: 'noun', lemma: FIVE_NOUN_FORMS[core].lemma, gender: 'm', number: 'sg', animacy: core.startsWith('ذ') ? null : 'human',
      fiveNoun: true, caseForm: FIVE_NOUN_FORMS[core].caseForm, confidence: 0.997, source: 'five-nouns-lexicon'
    });
  }
  if (PERSONAL_PRONOUNS[core]) candidates.push({pos: 'pronoun', lemma: core, ...PERSONAL_PRONOUNS[core], animacy: 'human', definite: true, confidence: 0.999, source: 'closed-class'});
  if (PREPOSITIONS.has(core)) candidates.push({pos: 'particle', sub: 'preposition', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (CONJUNCTIONS.has(core)) candidates.push({pos: 'particle', sub: 'conjunction', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (INNA_PARTICLES.has(core)) candidates.push({pos: 'particle', sub: 'inna', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (KANA_SURFACES.has(core)) candidates.push({pos: 'verb', sub: 'kana', lemma: core, confidence: 0.995, source: 'closed-class'});
  if (NEGATION.has(core)) candidates.push({pos: 'particle', sub: 'negation', lemma: core, confidence: 0.995, source: 'closed-class'});
  if (SUBJUNCTIVE_PARTICLES.has(core)) candidates.push({pos: 'particle', sub: 'subjunctive', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (JUSSIVE_PARTICLES.has(core)) candidates.push({pos: 'particle', sub: 'jussive', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (core === 'إلا') candidates.push({pos: 'particle', sub: 'exception', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (['غير', 'سوى', 'عدا', 'خلا', 'حاشا'].includes(core)) candidates.push({pos: 'exception-tool', lemma: core, confidence: 0.995, source: 'closed-class'});
  if (['نفس', 'عين', 'كل', 'كلا', 'كلتا', 'كلي', 'كلتي', 'أجمع'].includes(core)) candidates.push({pos: 'emphasis', lemma: core, confidence: 0.98, source: 'dependent-lexicon'});

  const cardinal = simpleCardinal(core);
  if (cardinal) candidates.push({pos: 'number', lemma: core, numberValue: cardinal.value, ...cardinal, confidence: 0.999, source: 'number-lexicon'});

  const ending = numberFromEnding(core);
  if (!candidates.length && ending) {
    candidates.push({
      pos: 'noun', lemma: ending.stem, gender: ending.gender,
      number: ending.number, numberCandidates: ending.numberCandidates,
      caseForm: ending.caseForm, animacy: null, confidence: 0.72, source: 'inflection-ending'
    });
  }
  if (!candidates.length && /ة$/u.test(core)) candidates.push({pos: 'noun', lemma: core, gender: 'f', number: 'sg', confidence: 0.58, source: 'feminine-ending'});
  if (!candidates.length && core.length >= 3) candidates.push({pos: 'unknown', lemma: core, gender: null, number: 'sg', confidence: 0.3, source: 'fallback'});

  const all = dedupe(candidates);
  const nominal = all.find(x => ['noun', 'proper', 'adj', 'emphasis', 'demonstrative', 'pronoun', 'relative'].includes(x.pos));
  const sameLemmaNominals = nominal ? all.filter(x => x.pos === nominal.pos && x.lemma === nominal.lemma) : [];
  const indexedNumbers = [...new Set(sameLemmaNominals.map(x => x.number).filter(Boolean))];
  const ambiguousNumbers = indexedNumbers.length > 1 ? indexedNumbers : null;
  const diptote = detectDiptote(core);
  const observedStructural = structuralCase(token.clean);

  return {
    candidates: all,
    nominal,
    diptote,
    structuralCase: observedStructural,
    definite: segments.definite || nominal?.pos === 'pronoun' || nominal?.pos === 'relative' || nominal?.pos === 'proper',
    gender: nominal?.gender || ending?.gender || null,
    number: ambiguousNumbers ? null : (nominal?.number || ending?.number || null),
    // المعجم المراجع يحسم «ين» إذا عرف أنها مثنى أو جمع؛ لا نعيد غموض النهاية فوقه.
    numberCandidates: ambiguousNumbers || nominal?.numberCandidates || (!nominal ? ending?.numberCandidates : null) || null,
    animacy: nominal?.animacy || null,
    lemma: nominal?.lemma || all[0]?.lemma || core,
    pos: all[0]?.pos || 'unknown'
  };
}


/* ===== MODULE: src/morphology/inflect.js ===== */
const CASE_MARKS_RE = /[\u064B-\u0650]/gu;

function bareForCase(core) {
  let value = String(core).replace(/\u064Bا$/u, '');
  value = value.replace(CASE_MARKS_RE, '');
  return value;
}

function withCaseMark(core, expected, {tanwin = false, noTanwin = false} = {}) {
  const base = bareForCase(core);
  const useTanwin = tanwin && !noTanwin;
  if (expected === 'nominative') return `${base}${useTanwin ? 'ٌ' : 'ُ'}`;
  if (expected === 'genitive') return `${base}${useTanwin ? 'ٍ' : 'ِ'}`;
  if (expected === 'accusative') {
    if (!useTanwin) return `${base}َ`;
    if (/[ةاى]$/u.test(base) || /اء$/u.test(base)) return `${base}ً`;
    return `${base}ًا`;
  }
  return base;
}

function inflectCoreCase(core, expected, options = {}) {
  const clean = stripDiacritics(core);
  if (/(?:تان|تين)$/u.test(clean)) {
    const stem = clean.slice(0, -3);
    return `${stem}${expected === 'nominative' ? 'تان' : 'تين'}`;
  }
  if (/(?:ان|ين)$/u.test(clean)) {
    const stem = clean.slice(0, -2);
    return `${stem}${expected === 'nominative' ? 'ان' : 'ين'}`;
  }
  if (/(?:ون|ين)$/u.test(clean) && options.number === 'pl') {
    const stem = clean.slice(0, -2);
    return `${stem}${expected === 'nominative' ? 'ون' : 'ين'}`;
  }
  // جمع المؤنث السالم ينصب بالكسرة نيابة عن الفتحة.
  if (/ات$/u.test(clean) && options.number === 'pl') {
    if (options.onlyWhenVisible && !options.visibleCase) return clean;
    const tanwin = Boolean(options.tanwin && !options.noTanwin);
    if (expected === 'nominative') return `${clean}${tanwin ? 'ٌ' : 'ُ'}`;
    if (expected === 'accusative' || expected === 'genitive') return `${clean}${tanwin ? 'ٍ' : 'ِ'}`;
  }
  if (options.onlyWhenVisible && !options.visibleCase) return clean;
  return withCaseMark(core, expected, options);
}

function inflectTokenCase(token, expected, options = {}) {
  const seg = token.morph.segments;
  let core = seg.core;
  const nominal = token.morph.nominal;
  const number = nominal?.number || token.morph.number;

  // «ين» مشترك بين المثنى وجمع المذكر؛ يعالج كلاهما بالطريقة نفسها في النصب والجر.
  if (/(?:ون|ين)$/u.test(core) && number === 'pl') {
    const stem = core.slice(0, -2);
    core = `${stem}${expected === 'nominative' ? 'ون' : 'ين'}`;
  } else {
    core = inflectCoreCase(core, expected, {
      ...options,
      number,
      visibleCase: token.visibleCase,
      tanwin: options.tanwin ?? token.visibleCase?.kind === 'tanwin'
    });
  }
  return rebuildToken(token, core);
}

function inflectAdjectiveToken(token, target, caseValue = null, {forceVisibleCase = false} = {}) {
  const lemma = token.morph.nominal?.lemma || token.morph.lemma;
  let core = adjectiveForm(lemma, {gender: target.gender, number: target.number, caseValue}) || token.morph.segments.core;
  if (forceVisibleCase || token.visibleCase) {
    core = inflectCoreCase(core, caseValue || 'accusative', {
      number: target.number,
      visibleCase: token.visibleCase,
      tanwin: !token.morph.definite,
      noTanwin: token.morph.definite
    });
  }
  return rebuildToken(token, core);
}

function inflectNounNumberToken(token, number, caseValue = null) {
  const lemma = token.morph.nominal?.lemma || token.morph.lemma;
  let core = nounForm(lemma, number, caseValue);
  if (!core) return null;
  if (token.visibleCase && number === 'sg') {
    core = inflectCoreCase(core, caseValue || token.visibleCase.case, {
      visibleCase: token.visibleCase,
      tanwin: !token.morph.definite,
      noTanwin: token.morph.definite
    });
  }
  return rebuildToken(token, core);
}


/* ===== MODULE: src/morphology/analyzer.js ===== */
function analyzeToken(token) {
  const segments = splitClitics(token.surface);
  const nominal = analyzeNominal(token, segments);
  const verbs = (!segments.preposition && !segments.article)
    ? verbAnalyses(segments.core)
    : [];

  const candidates = [...verbs, ...nominal.candidates]
    .sort((a, b) => (b.confidence || 0) - (a.confidence || 0));
  const best = candidates[0] || {pos: 'unknown', confidence: 0.2};

  return {
    ...token,
    morph: {
      segments,
      core: segments.core,
      lemma: verbs[0]?.lemma || nominal.lemma,
      pos: verbs.length && (verbs[0].confidence >= (nominal.candidates[0]?.confidence || 0)) ? 'verb' : nominal.pos,
      candidates,
      verbAnalyses: verbs,
      bestVerb: verbs[0] || null,
      nominal: nominal.nominal,
      gender: nominal.gender,
      number: nominal.number,
      numberCandidates: nominal.numberCandidates,
      animacy: nominal.animacy,
      definite: nominal.definite,
      diptote: nominal.diptote,
      structuralCase: nominal.structuralCase,
      confidence: best.confidence || 0.3
    }
  };
}

function analyzeTokens(tokens) {
  return tokens.map(analyzeToken);
}

/* ===== MODULE: src/morphology/pos-disambiguator.js ===== */
function isOvertVerbForm(analysis) {
  if (!analysis) return false;
  return analysis.personCode !== '3ms' || analysis.tense === 'present';
}

function contextualPOSDisambiguation(tokens) {
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    const morph = token.morph;
    const nominal = morph.nominal;
    const verb = morph.verbAnalyses?.[0] || null;
    const evidence = [];

    if (!nominal && !verb) {
      morph.resolvedPos = morph.pos;
      morph.posConfidence = morph.confidence || 0.3;
      morph.posEvidence = ['single-analysis-or-fallback'];
      morph.posAmbiguous = false;
      continue;
    }
    if (nominal && !verb) {
      morph.pos = nominal.pos;
      morph.resolvedPos = nominal.pos;
      morph.posConfidence = nominal.confidence || morph.confidence || 0.8;
      morph.posEvidence = ['nominal-analysis-only'];
      morph.posAmbiguous = false;
      morph.lemma = nominal.lemma;
      continue;
    }
    if (verb && !nominal) {
      morph.pos = 'verb';
      morph.resolvedPos = 'verb';
      morph.posConfidence = verb.confidence || 0.9;
      morph.posEvidence = ['verbal-analysis-only'];
      morph.posAmbiguous = false;
      morph.lemma = verb.lemma;
      continue;
    }

    let nounScore = nominal.confidence || 0.7;
    let verbScore = verb.confidence || 0.7;
    const previous = tokens[i - 1];
    const next = tokens[i + 1];
    const next2 = tokens[i + 2];

    // التنوين لا يدخل على الفعل، وهو أقوى قرينة سطحية في «كتبٍ/كتبًا».
    if (token.visibleCase?.kind === 'tanwin') {
      nounScore += 1.2;
      evidence.push('tanwin-forces-nominal');
    } else if (token.visibleCase?.case === 'genitive') {
      nounScore += 0.65;
      evidence.push('visible-genitive-nominal');
    } else if (token.visibleCase?.case === 'nominative') {
      nounScore += 0.18;
      evidence.push('visible-nominative-prefers-nominal');
    } else if (token.visibleCase?.case === 'accusative' && next && isNominal(next)) {
      verbScore += 0.14;
      evidence.push('bare-past-fatha-before-argument');
    }

    if (morph.segments?.article || morph.segments?.preposition || PREPOSITIONS.has(previous?.morph?.core)) {
      nounScore += 0.9;
      evidence.push('nominal-governor-or-article');
    }
    const previousNumber = simpleCardinal(previous?.morph?.core);
    if (previousNumber || previous?.type === 'number-digit') {
      nounScore += 0.9;
      evidence.push('counted-noun-after-number');
    }
    if (next && isAdjective(next)) {
      nounScore += 0.55;
      evidence.push('noun-before-adjective');
    }
    if (next?.morph?.definite && isNominal(next)) {
      nounScore += 0.12; // احتمال الإضافة: «كتب الطالب»
      verbScore += 0.16; // واحتمال VSO قائم كذلك
      evidence.push('ambiguous-idafa-or-vso');
    }
    if (next && next2 && isNominal(next) && isNominal(next2)) {
      verbScore += 0.42;
      evidence.push('verb-subject-object-frame');
    }
    if (next?.visibleCase?.case === 'nominative' && isNominal(next)) {
      verbScore += 0.32;
      evidence.push('nominative-postverbal-subject');
    }
    if (isOvertVerbForm(verb)) {
      verbScore += 0.75;
      evidence.push('overt-verbal-person-or-present-form');
    }
    if (['لم', 'لن', 'قد', 'سوف', 'س'].includes(previous?.morph?.core)) {
      verbScore += 0.9;
      evidence.push('verbal-particle');
    }

    const gap = Math.abs(nounScore - verbScore);
    if (gap < 0.12) {
      morph.pos = 'ambiguous';
      morph.resolvedPos = 'ambiguous';
      morph.posConfidence = Math.max(nounScore, verbScore) / (nounScore + verbScore);
      morph.posEvidence = [...evidence, 'unresolved-noun-verb-ambiguity'];
      morph.posAmbiguous = true;
      morph.bestVerb = null;
      morph.lemma = nominal.lemma;
    } else if (nounScore > verbScore) {
      morph.pos = nominal.pos;
      morph.resolvedPos = nominal.pos;
      morph.posConfidence = evidence.includes('tanwin-forces-nominal') ? 0.999
        : evidence.includes('counted-noun-after-number') ? 0.985
          : evidence.includes('nominal-governor-or-article') ? 0.98
            : Math.min(0.97, 0.5 + (nounScore - verbScore) / (2 * Math.max(nounScore, verbScore)));
      morph.posEvidence = [...evidence, 'resolved-as-nominal'];
      morph.posAmbiguous = false;
      morph.bestVerb = null;
      morph.lemma = nominal.lemma;
    } else {
      morph.pos = 'verb';
      morph.resolvedPos = 'verb';
      morph.posConfidence = evidence.includes('overt-verbal-person-or-present-form') || evidence.includes('verbal-particle') ? 0.995
        : evidence.includes('verb-subject-object-frame') || evidence.includes('nominative-postverbal-subject') ? 0.94
          : Math.min(0.93, 0.5 + (verbScore - nounScore) / (2 * Math.max(nounScore, verbScore)));
      morph.posEvidence = [...evidence, 'resolved-as-verb'];
      morph.posAmbiguous = false;
      morph.bestVerb = verb;
      morph.lemma = verb.lemma;
    }
    morph.posScores = {nominal: nounScore, verbal: verbScore};
  }
  return tokens;
}

function inspectWord(word) {
  const token = {index: 0, sentence: 0, surface: String(word), clean: String(word), start: 0, end: String(word).length, originalStart: 0, originalEnd: String(word).length, visibleCase: visibleCase(String(word)), type: 'word'};
  return contextualPOSDisambiguation([analyzeToken(token)])[0].morph;
}


/* ===== MODULE: src/core/tokenize.js ===== */
const TOKEN_RE = /[\u0621-\u063A\u0641-\u064A\u0671-\u06D3][\u0621-\u063A\u0641-\u064A\u064B-\u065F\u0670-\u06D3\u06D6-\u06ED]*|[0-9\u0660-\u0669]+/gu;
const SENTENCE_END_RE = /[.!?؟؛\n]/u;

function tokenize(normalization) {
  const {text} = normalization;
  const tokens = [];
  let match;
  let sentence = 0;
  let previousEnd = 0;

  while ((match = TOKEN_RE.exec(text))) {
    const between = text.slice(previousEnd, match.index);
    if (tokens.length && SENTENCE_END_RE.test(between)) sentence += 1;
    const start = match.index;
    const end = start + match[0].length;
    const {originalStart, originalEnd} = toOriginalSpan(normalization, start, end);
    tokens.push({
      index: tokens.length,
      sentence,
      surface: match[0],
      clean: stripDiacritics(match[0]),
      start,
      end,
      originalStart,
      originalEnd,
      visibleCase: visibleCase(match[0]),
      type: /^[0-9\u0660-\u0669]+$/u.test(match[0]) ? 'number-digit' : 'word'
    });
    previousEnd = end;
  }
  return tokens;
}

function sentenceGroups(tokens) {
  const groups = [];
  for (const token of tokens) {
    if (!groups[token.sentence]) groups[token.sentence] = [];
    groups[token.sentence].push(token);
  }
  return groups.filter(Boolean);
}


/* ===== MODULE: src/core/findings.js ===== */
function findingFromSpan(context, {
  startToken,
  endToken = startToken,
  original,
  replacement = null,
  ruleId,
  type = 'نحوي',
  classification = 'syntax',
  confidence = 0.8,
  explanation,
  evidence = [],
  safe = false,
  metadata = {}
}) {
  const start = startToken.originalStart;
  const end = endToken.originalEnd;
  const band = confidenceBand(confidence);
  return {
    ruleId,
    type,
    category: type,
    classification,
    original: original ?? context.original.slice(start, end),
    replacement,
    index: start,
    length: end - start,
    normalizedIndex: startToken.start,
    normalizedLength: endToken.end - startToken.start,
    confidence,
    confidenceBand: band.code,
    confidenceLabel: band.label,
    explanation,
    evidence,
    safeCandidate: Boolean(safe),
    autoCorrectable: false,
    metadata: {...metadata},
    ...metadata
  };
}

function findingFromTextSpan(context, {
  normalizedStart,
  normalizedEnd,
  original,
  replacement = null,
  ruleId,
  type = 'إملائي',
  classification = 'orthographic',
  confidence = 0.99,
  explanation,
  evidence = [],
  safe = true,
  metadata = {}
}) {
  const map = context.normalization.indexMap;
  const start = map[normalizedStart] ?? context.original.length;
  const end = normalizedEnd <= normalizedStart
    ? start
    : ((map[normalizedEnd - 1] ?? context.original.length - 1) + 1);
  const band = confidenceBand(confidence);
  return {
    ruleId, type, category: type, classification,
    original: original ?? context.original.slice(start, end),
    replacement, index: start, length: end - start,
    normalizedIndex: normalizedStart,
    normalizedLength: normalizedEnd - normalizedStart,
    confidence, confidenceBand: band.code, confidenceLabel: band.label,
    explanation, evidence, safeCandidate: Boolean(safe), autoCorrectable: false,
    metadata: {...metadata},
    ...metadata
  };
}

function deduplicateFindings(findings) {
  const selected = new Map();
  for (const item of findings) {
    const key = [item.index, item.length, item.ruleId, item.replacement].join('|');
    const previous = selected.get(key);
    if (!previous || previous.confidence < item.confidence) selected.set(key, item);
  }
  return [...selected.values()].sort((a, b) => a.index - b.index || b.confidence - a.confidence);
}

function applyFindings(original, findings) {
  let output = original;
  const accepted = findings
    .filter(item => item.autoCorrectable && item.replacement != null)
    .sort((a, b) => b.index - a.index);
  let lastStart = Infinity;
  for (const item of accepted) {
    const end = item.index + item.length;
    if (end > lastStart) continue;
    output = output.slice(0, item.index) + item.replacement + output.slice(end);
    lastStart = item.index;
  }
  return output;
}


/* ===== MODULE: src/core/context.js ===== */
function isNominal(token) {
  if (!token?.morph) return false;
  if (token.morph.resolvedPos === 'verb' || token.morph.pos === 'verb') return false;
  return Boolean(token.morph.nominal)
    || ['noun', 'proper', 'adj', 'emphasis', 'demonstrative', 'pronoun', 'relative', 'ambiguous'].includes(token.morph.pos);
}

function isAdjective(token) {
  return token?.morph?.candidates?.some(x => x.pos === 'adj') || false;
}

function bestAdjective(token) {
  return token?.morph?.candidates?.filter(x => x.pos === 'adj').sort((a, b) => b.confidence - a.confidence)[0] || null;
}

function bestVerb(token) {
  if (!token?.morph || token.morph.resolvedPos === 'ambiguous' || token.morph.pos === 'ambiguous') return null;
  if (token.morph.resolvedPos && token.morph.resolvedPos !== 'verb') return null;
  return token.morph.bestVerb || token.morph.verbAnalyses?.[0] || null;
}

function nextNominal(tokens, start, {end = tokens.length, skipPrepositional = true} = {}) {
  for (let i = start; i < end; i += 1) {
    if (!isNominal(tokens[i])) continue;
    if (skipPrepositional && tokens[i].morph.segments.preposition) continue;
    return i;
  }
  return -1;
}

function nextUngovernedNominal(tokens, start, {end = tokens.length} = {}) {
  for (let i = start; i < end; i += 1) {
    if (!isNominal(tokens[i])) continue;
    if (tokens[i].morph.segments?.preposition || PREPOSITIONS.has(tokens[i - 1]?.morph?.core)) continue;
    return i;
  }
  return -1;
}

function previousNominal(tokens, start, {startAt = 0} = {}) {
  for (let i = start; i >= startAt; i -= 1) if (isNominal(tokens[i])) return i;
  return -1;
}

function observedCase(token) {
  return token?.visibleCase?.case || token?.morph?.structuralCase?.case || token?.morph?.nominal?.caseForm || null;
}

function tokenFeatures(token) {
  const n = token?.morph?.nominal;
  const candidates = token?.morph?.numberCandidates || n?.numberCandidates || null;
  return {
    person: n?.person || 3,
    gender: n?.gender || token?.morph?.gender || null,
    number: candidates ? null : (token?.morph?.number || n?.number || null),
    numberCandidates: candidates,
    animacy: n?.animacy || token?.morph?.animacy || null,
    definite: token?.morph?.definite || false,
    confidence: n?.confidence || token?.morph?.confidence || 0.3
  };
}

function directGovernorCase(tokens, index) {
  const token = tokens[index];
  if (token?.morph?.segments?.preposition) return {case: 'genitive', confidence: 0.99, reason: 'حرف جر متصل'};
  const previous = tokens[index - 1];
  if (previous && PREPOSITIONS.has(previous.morph.core)) return {case: 'genitive', confidence: 0.995, reason: 'حرف جر صريح'};
  return null;
}

/** استدلال محافظ؛ لا يعيد حالة إلا مع قرينة سطحية أو عامل قريب. */
function inferSyntacticCase(tokens, index) {
  const direct = directGovernorCase(tokens, index);
  if (direct) return direct;

  const observed = observedCase(tokens[index]);
  if (observed && observed !== 'accgen') return {case: observed, confidence: 0.98, reason: 'علامة ظاهرة'};

  const sentence = tokens[index]?.sentence;
  const start = tokens.findIndex(t => t.sentence === sentence);
  const sentenceStart = start < 0 ? 0 : start;

  for (let i = index - 1; i >= sentenceStart; i -= 1) {
    const core = tokens[i].morph.core;
    if (INNA_PARTICLES.has(core)) {
      const first = nextNominal(tokens, i + 1, {end: tokens.length});
      if (first === index) return {case: 'accusative', confidence: 0.97, reason: 'اسم إن أو إحدى أخواتها'};
      break;
    }
    if (KANA_VERBS.has(core)) {
      const first = nextNominal(tokens, i + 1, {end: tokens.length});
      if (first === index) return {case: 'nominative', confidence: 0.96, reason: 'اسم كان أو إحدى أخواتها'};
      break;
    }
    const verb = bestVerb(tokens[i]);
    if (verb) {
      const firstNominal = nextNominal(tokens, i + 1, {end: tokens.length});
      if (firstNominal !== index) break;
      if ((verb.person === 1 || verb.person === 2) && verb.transitive) {
        return {case: 'accusative', confidence: 0.93, reason: 'مفعول به بعد فعل فاعله ضمير متصل/مستتر معلوم'};
      }
      return {case: 'nominative', confidence: 0.9, reason: 'فاعل ظاهر بعد الفعل'};
    }
  }

  if (observed === 'accgen') return {case: 'accgen', confidence: 0.9, reason: 'علامة فرعية مشتركة'};
  return null;
}

function isIdafaHead(tokens, index) {
  const head = tokens[index];
  const next = tokens[index + 1];
  if (!head || !next || head.sentence !== next.sentence) return false;
  if (!isNominal(head) || !isNominal(next)) return false;
  if (next.morph.segments.conjunction || next.morph.segments.preposition) return false;
  if (isAdjective(next)) return false;
  return Boolean(next.morph.definite || next.morph.nominal?.pos === 'proper');
}

function sentenceBounds(tokens, index) {
  const sentence = tokens[index]?.sentence;
  let start = index;
  let end = index + 1;
  while (start > 0 && tokens[start - 1].sentence === sentence) start -= 1;
  while (end < tokens.length && tokens[end].sentence === sentence) end += 1;
  return {start, end};
}

const SUBJECT_SKIP_ADVERBS = new Set([
  'اليوم', 'أمس', 'غدًا', 'غدا', 'مبكرًا', 'مبكرا', 'متأخرًا', 'متأخرا',
  'هنا', 'هناك', 'الآن', 'حينئذ', 'فجأة', 'أيضًا', 'أيضا'
]);
const ADVERBIAL_GOVERNORS = new Set([
  'بعد', 'قبل', 'أمام', 'خلف', 'فوق', 'تحت', 'بين', 'عند', 'أثناء', 'خلال', 'حول'
]);

function isStrongNominalCandidate(token) {
  if (!isNominal(token) || token?.morph?.posAmbiguous) return false;
  const pos = token.morph?.nominal?.pos || token.morph?.pos;
  return ['noun', 'proper', 'pronoun', 'demonstrative', 'relative'].includes(pos);
}

/**
 * محلل فاعل محافظ لا يبني شجرة كاملة، لكنه يميز SVO/VSO ويتجاوز شبه الجملة
 * والظرف وعبارة العدد. لا يعيد علاقة إذا بقي احتمال المفعول به قويًا.
 */
function resolveSubject(tokens, verbIndex, verb = bestVerb(tokens[verbIndex]), {allowPreverbal = true} = {}) {
  const {start, end} = sentenceBounds(tokens, verbIndex);
  const immediatePrevious = tokens[verbIndex - 1];

  if (allowPreverbal && immediatePrevious && immediatePrevious.sentence === tokens[verbIndex].sentence
      && isStrongNominalCandidate(immediatePrevious)
      && !immediatePrevious.morph.segments?.preposition
      && !isAdjective(immediatePrevious)) {
    return {
      subjectIndex: verbIndex - 1,
      order: 'SVO',
      confidence: immediatePrevious.morph.nominal?.pos === 'pronoun' ? 0.99 : 0.965,
      evidence: ['subject-before-verb', 'adjacent-subject']
    };
  }

  // فاعل متقدم يفصله ظرف قصير: «الطلاب اليوم يكتبون».
  for (let j = allowPreverbal ? verbIndex - 1 : start - 1; j >= Math.max(start, verbIndex - 3); j -= 1) {
    const candidate = tokens[j];
    if (SUBJECT_SKIP_ADVERBS.has(candidate.morph.core)) continue;
    if (isStrongNominalCandidate(candidate) && !candidate.morph.segments?.preposition && !isAdjective(candidate)) {
      const between = tokens.slice(j + 1, verbIndex);
      if (between.every(x => SUBJECT_SKIP_ADVERBS.has(x.morph.core))) {
        return {subjectIndex: j, order: 'SVO', confidence: 0.9, evidence: ['subject-before-verb', 'intervening-adverb']};
      }
    }
    break;
  }

  let skipped = 0;
  for (let i = verbIndex + 1; i < end && i <= verbIndex + 10; i += 1) {
    const token = tokens[i];
    const core = token.morph.core;

    // جمع مذكر مضاف حذفت نونه: «معلمو المدرسة». لا يجوز التقاط المضاف إليه فاعلًا.
    if (/[ء-ي]و$/u.test(token.clean) && tokens[i + 1]?.sentence === token.sentence
        && isStrongNominalCandidate(tokens[i + 1]) && tokens[i + 1].morph.definite) {
      i += 1;
      skipped += 2;
      continue;
    }

    // عبارة عدد متقدمة: المعدود هو مصدر الجنس والعدد الدلالي للفاعل.
    const phrase = analyzeNumberPhrase(tokens, i);
    if (phrase && ['number-before-noun', 'partitive-number-before-min'].includes(phrase.direction)
        && phrase.countedIndex >= 0 && phrase.countedIndex < end
        && isStrongNominalCandidate(tokens[phrase.countedIndex])) {
      const counted = tokens[phrase.countedIndex];
      if (counted.morph.segments?.preposition) {
        i = phrase.countedIndex;
        skipped += phrase.length + 1;
        continue;
      }
      return {
        subjectIndex: phrase.countedIndex,
        order: 'VSO',
        confidence: skipped ? 0.88 : 0.955,
        evidence: ['subject-after-verb', 'number-phrase-subject', `number:${phrase.value}`],
        numberPhrase: phrase
      };
    }

    // ظرف مضاف: نتجاوز مركبه الإضافي القصير («بعد انتهاء الحصة»).
    if (ADVERBIAL_GOVERNORS.has(core)) {
      const phraseStart = i;
      let last = i;
      for (let k = i + 1; k < end && k <= i + 3; k += 1) {
        last = k;
        if (tokens[k].morph.definite || tokens[k].morph.nominal?.pos === 'proper') break;
      }
      i = last;
      skipped += Math.max(1, last - phraseStart + 1);
      continue;
    }

    // حرف جر منفصل: نتجاوز الاسم المجرور وتوابعه القريبة.
    if (PREPOSITIONS.has(core)) {
      const governed = nextNominal(tokens, i + 1, {end, skipPrepositional: false});
      if (governed >= 0) {
        i = governed;
        while (i + 1 < end && isAdjective(tokens[i + 1])) i += 1;
      }
      skipped += 1;
      continue;
    }
    // حرف جر متصل بالاسم.
    if (token.morph.segments?.preposition) {
      skipped += 1;
      continue;
    }
    if (SUBJECT_SKIP_ADVERBS.has(core)) {
      skipped += 1;
      continue;
    }
    if (bestVerb(token) || KANA_SURFACES.has(core) || INNA_PARTICLES.has(core)) break;
    if (!isStrongNominalCandidate(token) || isAdjective(token)) {
      skipped += 1;
      continue;
    }
    // بعد فعل معطوف لا نقبل وصفًا/اسمًا مخمنًا بوصفه فاعلًا جديدًا.
    if (!allowPreverbal && (token.morph.nominal?.confidence || 0) < 0.9) {
      skipped += 1;
      continue;
    }

    const observed = observedCase(token);
    if (verb?.transitive) {
      if (observed === 'accusative' || observed === 'accgen') continue;
      const next = nextNominal(tokens, i + 1, {end, skipPrepositional: true});
      const completeFrame = next >= 0 && !isAdjective(tokens[next]);
      if (!completeFrame && observed !== 'nominative') return null;
    }
    return {
      subjectIndex: i,
      order: 'VSO',
      confidence: skipped ? 0.86 : (observed === 'nominative' ? 0.96 : 0.94),
      evidence: ['subject-after-verb', skipped ? 'skipped-nonargument-span' : 'adjacent-subject']
    };
  }
  return null;
}


/* ===== MODULE: src/syntax/nested-sentences.js ===== */
function relativeAntecedentIndex(tokens, relativeIndex) {
  const sentence = tokens[relativeIndex]?.sentence;
  for (let i = relativeIndex - 1; i >= 0 && tokens[i].sentence === sentence; i -= 1) {
    if (isAdjective(tokens[i])) continue;
    const pos = tokens[i].morph?.nominal?.pos || tokens[i].morph?.pos;
    if (['noun', 'proper'].includes(pos)) return i;
    if (bestVerb(tokens[i]) || INNA_PARTICLES.has(tokens[i].morph.core) || KANA_SURFACES.has(tokens[i].morph.core)) break;
  }
  return -1;
}

function analyzeNestedSentences(context) {
  const {tokens} = context;
  const clauses = [];
  const tokenClause = new Array(tokens.length).fill(null);
  for (const group of sentenceGroups(tokens)) {
    const root = {id: `s${group[0].sentence}:root`, type: 'root', parent: null, start: group[0].index, end: group.at(-1).index + 1, depth: 0};
    clauses.push(root);
    for (let i = root.start; i < root.end; i += 1) tokenClause[i] = root.id;
  }

  for (let i = 0; i < tokens.length; i += 1) {
    const root = clauses.find(c => c.type === 'root' && i >= c.start && i < c.end);
    if (!root) continue;
    if (RELATIVE_PRONOUNS[tokens[i].morph.core]) {
      const antecedentIndex = relativeAntecedentIndex(tokens, i);
      let relativeEnd = root.end;
      const matrixHasCopula = KANA_SURFACES.has(tokens[root.start]?.morph?.core) || INNA_PARTICLES.has(tokens[root.start]?.morph?.core);
      if (matrixHasCopula) {
        let sawRelativeVerb = false;
        for (let j = i + 1; j < root.end; j += 1) {
          if (bestVerb(tokens[j])) { sawRelativeVerb = true; continue; }
          if (sawRelativeVerb && isAdjective(tokens[j]) && !tokens[j].morph.segments?.conjunction) {
            relativeEnd = j;
            break;
          }
        }
      }
      const clause = {
        id: `${root.id}:rel${i}`, type: 'relative', parent: root.id,
        start: i, end: relativeEnd, depth: 1, markerIndex: i, antecedentIndex
      };
      clauses.push(clause);
      for (let j = clause.start; j < clause.end; j += 1) tokenClause[j] = clause.id;
      continue;
    }
    if (INNA_PARTICLES.has(tokens[i].morph.core) && i > root.start) {
      const clause = {id: `${root.id}:comp${i}`, type: 'complement', parent: root.id, start: i, end: root.end, depth: 1, markerIndex: i};
      clauses.push(clause);
      for (let j = clause.start; j < clause.end; j += 1) if (!String(tokenClause[j]).includes(':rel')) tokenClause[j] = clause.id;
      continue;
    }
    if (tokens[i].morph.segments?.conjunction && bestVerb(tokens[i])) {
      clauses.push({id: `${root.id}:coord${i}`, type: 'coordinated', parent: root.id, start: i, end: root.end, depth: 1, markerIndex: i});
    }
  }
  return {clauses, tokenClause, roles: []};
}

function clauseForToken(context, index) {
  const id = context.syntax?.tokenClause?.[index];
  return context.syntax?.clauses?.find(c => c.id === id)
    || context.syntax?.clauses?.find(c => c.type === 'root' && index >= c.start && index < c.end)
    || {...sentenceBounds(context.tokens, index), type: 'root', id: `fallback:${context.tokens[index]?.sentence}`};
}

function nextMatrixNominal(context, start, end) {
  const {tokens} = context;
  for (let i = start; i < end; i += 1) {
    if (RELATIVE_PRONOUNS[tokens[i].morph.core]) {
      const relative = context.syntax?.clauses?.find(c => c.type === 'relative' && c.markerIndex === i);
      if (relative) { i = Math.max(i, relative.end - 1); continue; }
    }
    if (!isNominal(tokens[i])) continue;
    if (tokens[i].morph.segments?.preposition || PREPOSITIONS.has(tokens[i - 1]?.morph?.core)) continue;
    return i;
  }
  return -1;
}

/* ===== MODULE: src/syntax/subject-resolver-2.js ===== */
const HUMAN_OBJECT_VERBS = new Set(['رأى', 'سمع', 'عرف', 'طلب', 'كرم', 'خاف', 'دعا']);
const NONHUMAN_OBJECT_PREFERRED = new Set(['كتب', 'قرأ', 'فهم', 'درس', 'شرب', 'أكل', 'فتح', 'بنى', 'ملأ']);

function resolvedRelativeFeatures(context, relativeIndex) {
  const antecedentIndex = relativeAntecedentIndex(context.tokens, relativeIndex);
  if (antecedentIndex < 0) return null;
  return {antecedentIndex, features: effectiveAgreement(tokenFeatures(context.tokens[antecedentIndex]))};
}

function resolveSubjectV2(context, verbIndex, verb = bestVerb(context.tokens[verbIndex]), {allowPreverbal = true, useRoles = true} = {}) {
  const {tokens} = context;
  const clause = clauseForToken(context, verbIndex);

  // في صلة الموصول قد يفصل شبه جملة بين الموصول وفعله؛ الموصول هو الفاعل النحوي.
  if (clause?.type === 'relative') {
    const marker = tokens[clause.markerIndex];
    if (marker && clause.markerIndex < verbIndex && RELATIVE_PRONOUNS[marker.morph.core]) {
      let anotherVerb = false;
      for (let i = clause.markerIndex + 1; i < verbIndex; i += 1) if (bestVerb(tokens[i])) anotherVerb = true;
      if (!anotherVerb) {
        const resolved = resolvedRelativeFeatures(context, clause.markerIndex);
        return {
          subjectIndex: clause.markerIndex, order: 'SVO', confidence: resolved ? 0.985 : 0.94,
          evidence: ['subject-resolver-2.1', 'relative-pronoun-subject', `clause:${clause.id}`],
          resolvedFeatures: resolved?.features || tokenFeatures(marker), antecedentIndex: resolved?.antecedentIndex ?? -1,
          clauseId: clause.id, resolverVersion: '2.1'
        };
      }
    }
  }

  // مع فعل المتكلم أو المخاطب يكون الفاعل مضمرًا، فالاسم التالي مفعول لا فاعل.
  const implicitSubject = verb && (verb.person === 1 || verb.person === 2);
  const base = implicitSubject ? null : resolveSubject(tokens, verbIndex, verb, {allowPreverbal});
  if (base) {
    const role = useRoles ? context.syntax?.roles?.[base.subjectIndex] : null;
    const excluded = ['object', 'genitive', 'object-of-preposition', 'adjective', 'hal', 'predicate', 'inna-predicate', 'kana-predicate'].includes(role?.role);
    const outsideClause = clause?.type !== 'root' && base.subjectIndex < clause.start;
    if (!excluded && !outsideClause) {
      const relative = RELATIVE_PRONOUNS[tokens[base.subjectIndex]?.morph?.core]
        ? resolvedRelativeFeatures(context, base.subjectIndex) : null;
      return {
        ...base,
        confidence: Math.min(0.99, base.confidence + 0.01),
        evidence: ['subject-resolver-2.1', ...(base.evidence || [])],
        resolvedFeatures: relative?.features || null,
        antecedentIndex: relative?.antecedentIndex ?? -1,
        clauseId: clause?.id || null,
        resolverVersion: '2.1'
      };
    }
  }

  // يحسم الحالات التي تركها المحلل المحافظ القديم بسبب احتمال المفعول المستتر.
  const candidateIndex = nextUngovernedNominal(tokens, verbIndex + 1, {end: clause?.end || tokens.length});
  if (!implicitSubject && candidateIndex >= 0 && candidateIndex <= verbIndex + 2) {
    const candidate = tokens[candidateIndex];
    const candidateConfidence = candidate.morph.nominal?.confidence || 0;
    const annexationBefore = candidateIndex === verbIndex + 2
      && /[ء-ي]و$/u.test(tokens[verbIndex + 1]?.clean || '') && candidate.morph.definite;
    if (candidateConfidence < 0.9 || annexationBefore) return null;
    const features = tokenFeatures(candidate);
    const role = useRoles ? context.syntax?.roles?.[candidateIndex] : null;
    if (!['genitive', 'object-of-preposition', 'adjective'].includes(role?.role)) {
      const ambitransitive = verb?.valency === 'ambitransitive';
      const intransitive = verb && !verb.transitive;
      const humanAsSubject = features.animacy === 'human'
        && NONHUMAN_OBJECT_PREFERRED.has(verb?.lemma) && !HUMAN_OBJECT_VERBS.has(verb?.lemma);
      if (ambitransitive || intransitive || humanAsSubject) {
        return {
          subjectIndex: candidateIndex, order: 'VSO',
          confidence: ambitransitive || intransitive ? 0.94 : 0.89,
          evidence: ['subject-resolver-2.1', ambitransitive ? 'ambitransitive-intransitive-reading' : (intransitive ? 'intransitive-verb' : 'selectional-human-subject')],
          resolvedFeatures: null, antecedentIndex: -1, clauseId: clause?.id || null, resolverVersion: '2.1'
        };
      }
    }
  }
  return null;
}

/* ===== MODULE: src/syntax/noun-role-resolver.js ===== */
const ROLE_CASE = Object.freeze({
  subject: 'nominative', topic: 'nominative', predicate: 'nominative',
  object: 'accusative', hal: 'accusative', 'inna-subject': 'accusative', 'kana-predicate': 'accusative',
  'kana-subject': 'nominative', 'inna-predicate': 'nominative',
  genitive: 'genitive', 'object-of-preposition': 'genitive'
});

function assignRole(roles, index, role, confidence, evidence = [], extra = {}) {
  if (index < 0) return;
  const current = roles[index];
  if (!current || confidence > current.confidence) roles[index] = {role, confidence, evidence, ...extra};
}

function resolveNounRoles(context) {
  const {tokens} = context;
  const roles = new Array(tokens.length).fill(null);

  // العوامل المغلقة ذات الدلالة الإعرابية الأقوى.
  for (let i = 0; i < tokens.length; i += 1) {
    if (tokens[i].morph.segments?.preposition || PREPOSITIONS.has(tokens[i - 1]?.morph?.core)) {
      if (isNominal(tokens[i])) assignRole(roles, i, 'object-of-preposition', 0.995, ['preposition-governance']);
    }
    if (INNA_PARTICLES.has(tokens[i].morph.core)) {
      const {end} = sentenceBounds(tokens, i);
      const subject = nextUngovernedNominal(tokens, i + 1, {end});
      assignRole(roles, subject, 'inna-subject', 0.98, ['inna-sister']);
      let predicate = subject >= 0 ? nextMatrixNominal(context, subject + 1, end) : -1;
      if (predicate >= 0 && tokens.slice(subject + 1, predicate).some(token => bestVerb(token) && !RELATIVE_PRONOUNS[tokens[subject + 1]?.morph?.core])) predicate = -1; // الخبر جملة فعلية لا الاسم داخلها
      assignRole(roles, predicate, 'inna-predicate', 0.93, ['inna-predicate']);
    }
    if (KANA_SURFACES.has(tokens[i].morph.core)) {
      const {end} = sentenceBounds(tokens, i);
      const subject = nextUngovernedNominal(tokens, i + 1, {end});
      assignRole(roles, subject, 'kana-subject', 0.98, ['kana-sister']);
      let predicate = subject >= 0 ? nextMatrixNominal(context, subject + 1, end) : -1;
      if (predicate >= 0 && tokens.slice(subject + 1, predicate).some(token => bestVerb(token) && !RELATIVE_PRONOUNS[tokens[subject + 1]?.morph?.core])) predicate = -1;
      assignRole(roles, predicate, 'kana-predicate', 0.93, ['kana-predicate']);
    }
  }

  // التوابع والإضافة.
  for (let i = 1; i < tokens.length; i += 1) {
    const previous = tokens[i - 1];
    const token = tokens[i];
    if (previous.sentence !== token.sentence) continue;
    if (isAdjective(token) && isNominal(previous)
        && Boolean(previous.morph.definite) === Boolean(token.morph.definite)) {
      assignRole(roles, i, 'adjective', 0.95, ['adjacent-matching-definiteness'], {headIndex: i - 1});
      continue;
    }
    if (['نفس', 'عين', 'كل', 'كلا', 'كلتا', 'كلي', 'كلتي', 'أجمع'].includes(token.morph.core)
        && token.morph.segments.enclitic) {
      assignRole(roles, i, 'emphasis', 0.96, ['emphasis-with-pronoun'], {headIndex: i - 1});
      continue;
    }
    if (PROPER_NAMES.has(token.morph.core) && isNominal(previous)) {
      assignRole(roles, i, 'apposition', 0.88, ['adjacent-proper-name'], {headIndex: i - 1});
      continue;
    }
    if (isNominal(previous) && !previous.morph.posAmbiguous && isNominal(token) && !token.morph.segments.conjunction
        && !isAdjective(token) && (token.morph.definite || previous.morph.nominal?.fiveNoun)) {
      // قرينة الإضافة أضعف من إطار الفعل المتعدي؛ يسمح ذلك للمفعول الصريح بتجاوزها لاحقًا.
      assignRole(roles, i, 'genitive', 0.82, ['idafa-candidate'], {headIndex: i - 1});
    }
    if (RELATIVE_PRONOUNS[token.morph.core]) {
      const antecedentIndex = relativeAntecedentIndex(tokens, i);
      assignRole(roles, i, 'relative-link', 0.98, ['relative-pronoun'], {antecedentIndex});
    }
  }

  // الحال: وصف نكرة بعد صاحب معرفة مع فعل سابق في الجملة نفسها.
  for (let i = 1; i < tokens.length; i += 1) {
    if (!isAdjective(tokens[i]) || tokens[i].morph.definite || roles[i]) continue;
    const ownerIndex = previousNominal(tokens, i - 1, {startAt: Math.max(0, i - 3)});
    if (ownerIndex < 0 || tokens[ownerIndex].sentence !== tokens[i].sentence) continue;
    const owner = tokens[ownerIndex];
    if (!(owner.morph.definite || owner.morph.nominal?.pos === 'proper')) continue;
    if (verbBeforeOwner(tokens, ownerIndex) >= 0) assignRole(roles, i, 'hal', 0.87, ['indefinite-description-after-definite-owner'], {headIndex: ownerIndex});
  }

  // الأدوار الإسنادية لكل فعل، مع مراعاة حدود الجملة المتداخلة.
  context.syntax.roles = roles;
  for (let i = 0; i < tokens.length; i += 1) {
    const verb = bestVerb(tokens[i]);
    if (!verb) continue;
    const relation = resolveSubjectV2(context, i, verb, {allowPreverbal: !tokens[i].morph.segments?.conjunction, useRoles: true});
    if (relation) assignRole(roles, relation.subjectIndex, 'subject', relation.confidence, relation.evidence, {verbIndex: i, clauseId: relation.clauseId});

    if (verb.transitive) {
      const clause = clauseForToken(context, i);
      let searchFrom = i + 1;
      if (relation?.order === 'VSO' && relation.subjectIndex >= i) searchFrom = relation.subjectIndex + 1;
      const objectIndex = nextUngovernedNominal(tokens, searchFrom, {end: clause?.end || tokens.length});
      if (objectIndex >= 0 && objectIndex !== relation?.subjectIndex && !isAdjective(tokens[objectIndex])) {
        assignRole(roles, objectIndex, 'object', 0.86, ['transitive-verb-frame'], {verbIndex: i, clauseId: clause?.id || null});
      }
    }
  }

  // المبتدأ والخبر في الجملة الاسمية المباشرة.
  for (const group of context.sentences) {
    const first = group[0];
    const firstObserved = first ? observedCase(first) : null;
    const ungovernedTopicAllowed = first
      && !first.morph.posAmbiguous
      && !['accusative', 'genitive', 'accgen'].includes(firstObserved)
      && (!first.morph.nominal?.fiveNoun || first.morph.nominal.caseForm === 'nominative');
    if (!first || !group[1] || !isStrongNominalCandidate(first) || !ungovernedTopicAllowed || bestVerb(first)
        || KANA_SURFACES.has(first.morph.core) || INNA_PARTICLES.has(first.morph.core)) continue;
    if (!roles[first.index]) assignRole(roles, first.index, 'topic', 0.92, ['direct-nominal-sentence', 'topic-form-compatible']);
    const predicate = group.slice(1).find(token => isNominal(token) && !roles[token.index] && !token.morph.definite);
    if (predicate) assignRole(roles, predicate.index, 'predicate', 0.88, ['direct-nominal-predicate'], {headIndex: first.index});
  }
  return roles;
}

function roleExpectedCase(context, index) {
  const role = context.syntax?.roles?.[index];
  if (!role) return null;
  if (ROLE_CASE[role.role]) return {case: ROLE_CASE[role.role], confidence: role.confidence, reason: `role:${role.role}`};
  if (['adjective', 'apposition', 'emphasis'].includes(role.role) && Number.isInteger(role.headIndex)) {
    const head = roleExpectedCase(context, role.headIndex) || inferSyntacticCase(context.tokens, role.headIndex);
    return head ? {...head, confidence: Math.min(role.confidence, head.confidence || 0.9), reason: `dependent:${role.role}`} : null;
  }
  return null;
}


/* ===== MODULE: src/rules/orthography.js ===== */
const PHRASES = Object.freeze({
  'انشاء الله': 'إن شاء الله', 'ان شاء الله': 'إن شاء الله',
  'ان شاءالله': 'إن شاء الله', 'انشاءالله': 'إن شاء الله',
  'إن شاءالله': 'إن شاء الله', 'إنشاءالله': 'إن شاء الله',
  'ماشاء الله': 'ما شاء الله', 'ماشاءالله': 'ما شاء الله',
  'بسمالله': 'بسم الله', 'الحمدلله': 'الحمد لله',
  'لاسيما': 'لا سيما', 'منأجل': 'من أجل', 'علىالرغم': 'على الرغم',
  /* الدفعة 1.1: فصل «لا» عن الكلمة — الصيغة الموصولة لا قراءة صحيحة لها */
  'لابد': 'لا بد', 'لاشك': 'لا شك', 'لابأس': 'لا بأس',
  /* المتبوعة بواو العطف (السياق الأكثر ورودًا) */
  'ولابد': 'ولا بد',
  'باذن الله': 'بإذن الله'
});

const WORDS = Object.freeze({
  'املاء': 'إملاء', 'الى': 'إلى', 'او': 'أو', 'اذا': 'إذا', 'اذن': 'إذن',
  'اخر': 'آخر', 'اخرى': 'أخرى', 'اكثر': 'أكثر', 'اقل': 'أقل',
  'مسؤل': 'مسؤول', 'مسوول': 'مسؤول', 'مسئول': 'مسؤول',
  'مسؤليه': 'مسؤولية', 'مبدا': 'مبدأ', 'مبدء': 'مبدأ', 'مباديء': 'مبادئ',
  'قارء': 'قارئ', 'ناشء': 'ناشئ', 'لاجء': 'لاجئ', 'شاطء': 'شاطئ',
  'بيئه': 'بيئة', 'فئه': 'فئة', 'هيئه': 'هيئة', 'قراءه': 'قراءة',
  'مساله': 'مسألة', 'شيئ': 'شيء', 'مدرسه': 'مدرسة', 'المدرسه': 'المدرسة',
  'سياره': 'سيارة', 'شجره': 'شجرة', 'مدينه': 'مدينة',
  'معلومه': 'معلومة', 'مشكله': 'مشكلة',
  'لغه': 'لغة', 'حياه': 'حياة', 'دراسه': 'دراسة',
  'عمليه': 'عملية', 'ضروره': 'ضرورة', 'نتيجه': 'نتيجة', 'بدايه': 'بداية',
  'نهايه': 'نهاية', 'هاذا': 'هذا', 'هاذه': 'هذه', 'هولاء': 'هؤلاء', 'هاؤلاء': 'هؤلاء',
  'ذالك': 'ذلك', 'كذالك': 'كذلك', 'اولئك': 'أولئك', 'اللذي': 'الذي',
  'اللتي': 'التي', 'لاكن': 'لكن', 'مستشفي': 'مستشفى', 'محتوي': 'محتوى',
  /* ── الدفعة 1.1 (مراجعة 2026-08): همزة القطع المحذوفة — أفعال ──
     كلها أفعال تبدأ حتمًا بهمزة قطع؛ الصيغة بدونها لا قراءة صحيحة لها. */
  'اخذ': 'أخذ', 'اكل': 'أكل', 'ارسل': 'أرسل', 'اعطى': 'أعطى', 'اكد': 'أكد',
  'اتمنى': 'أتمنى', 'اعلن': 'أعلن', 'اثبت': 'أثبت', 'اكمل': 'أكمل', 'انهى': 'أنهى',
  'اوقف': 'أوقف', 'اساء': 'أساء', 'اسرع': 'أسرع',
  /* ── همزة القطع المحذوفة — أسماء ── */
  'اخبار': 'أخبار', 'افكار': 'أفكار', 'اعمال': 'أعمال', 'اطفال': 'أطفال',
  'ارقام': 'أرقام', 'اسباب': 'أسباب', 'اشخاص': 'أشخاص', 'اجهزة': 'أجهزة',
  'اوقات': 'أوقات', 'اصدقاء': 'أصدقاء', 'اهداف': 'أهداف', 'اسئلة': 'أسئلة',
  'افراد': 'أفراد', 'اماكن': 'أماكن', 'انسان': 'إنسان',
  'اسلام': 'إسلام', 'ايمان': 'إيمان',
  'الاسلام': 'الإسلام', 'الايمان': 'الإيمان', 'الانسان': 'الإنسان',
  /* ── همزة قطع زائدة على همزة وصل (الافتعال/الاستفعال: الهمزة دائمًا وصل) ── */
  'إستخدام': 'استخدام', 'إنتهى': 'انتهى', 'إجتمع': 'اجتمع', 'إحتاج': 'احتاج',
  'إحترم': 'احترم', 'إختار': 'اختار', 'إستمر': 'استمر', 'إنتظر': 'انتظر',
  'إعتذر': 'اعتذر', 'إعتمد': 'اعتمد', 'إستثمار': 'استثمار', 'إنتشار': 'انتشار',
  'إنتباه': 'انتباه', 'إجتماع': 'اجتماع', 'إستقبال': 'استقبال', 'إنتقال': 'انتقال',
  'إختلف': 'اختلف', 'إعتبر': 'اعتبر', 'إكتشف': 'اكتشف', 'إشترك': 'اشترك',
  'إحترام': 'احترام', 'إختيار': 'اختيار', 'إنتظار': 'انتظار', 'إعتماد': 'اعتماد',
  'إكتشاف': 'اكتشاف', 'إستمرار': 'استمرار', 'إستلم': 'استلم', 'إنتشر': 'انتشر',
  'إلتزام': 'التزام', 'إلتقى': 'التقى',
  /* ── الهمزة المتطرفة: تُكتب على السطر أو على ياء، لا على نبرة ── */
  'عبئ': 'عبء', 'جزئ': 'جزء', 'دفئ': 'دفء', 'ملئ': 'ملء', 'بدئ': 'بدء',
  /* ── التاء المربوطة: الصيغة بدون «ة» لا قراءة صحيحة لها ── */
  'رساله': 'رسالة', 'تجربه': 'تجربة', 'حكومه': 'حكومة', 'وزاره': 'وزارة',
  'شهاده': 'شهادة', 'ثقافه': 'ثقافة', 'الثقافه': 'الثقافة', 'الرساله': 'الرسالة',
  /* ── الألف المقصورة ── */
  'منتدي': 'منتدى', 'لدي': 'لدى',
  /* ── الضمائر ── */
  'انت': 'أنت', 'انا': 'أنا', 'انتم': 'أنتم',
  /* ── أدوات وكلمات شائعة ── */
  'الان': 'الآن', 'الذى': 'الذي', 'التى': 'التي',
  'باذن': 'بإذن',
  /* ── الدفعة 2: التاء المربوطة مع «ال» — الإضافة لا تجتمع مع «ال»،
        فالصيغة بالهاء لا قراءة صحيحة لها إطلاقًا ── */
  'الصوره': 'الصورة', 'الغرفه': 'الغرفة', 'الساعه': 'الساعة', 'الدقيقه': 'الدقيقة',
  'اللحظه': 'اللحظة', 'الشركه': 'الشركة', 'المنطقه': 'المنطقة', 'الجامعه': 'الجامعة',
  'الفكره': 'الفكرة', 'الكلمه': 'الكلمة', 'الجمله': 'الجملة', 'المدينه': 'المدينة',
  'السياره': 'السيارة', 'الطائره': 'الطائرة', 'المحكمه': 'المحكمة', 'العائله': 'العائلة',
  'المكتبه': 'المكتبة', 'المشكله': 'المشكلة', 'التجربه': 'التجربة', 'الحكومه': 'الحكومة',
  'الوزاره': 'الوزارة', 'الشهاده': 'الشهادة', 'الجنه': 'الجنة', 'الرحمه': 'الرحمة',
  'النعمه': 'النعمة', 'الملكه': 'الملكة', 'الدوله': 'الدولة', 'الحركه': 'الحركة', 'الرحله': 'الرحلة',
  /* ── الدفعة 2: واو الجماعة — صيغ باطلة قطعًا (تُصحَّح تلقائيًا) ── */
  'كتبو': 'كتبوا', 'قالو': 'قالوا', 'شربو': 'شربوا', 'لعبو': 'لعبوا',
  'طلبو': 'طلبوا', 'حضرو': 'حضروا', 'وصلو': 'وصلوا', 'ذهبو': 'ذهبوا',
  'رجعو': 'رجعوا', 'عرفو': 'عرفوا', 'اخذوا': 'أخذوا', 'سمعو': 'سمعوا',
  'فهمو': 'فهموا', 'خرجو': 'خرجوا', 'دخلو': 'دخلوا', 'وقفو': 'وقفوا',
  'جلسو': 'جلسوا', 'نامو': 'ناموا', 'صامو': 'صاموا', 'باعو': 'باعوا',
  'عاشو': 'عاشوا', 'ماتو': 'ماتوا',
  /* ── الدفعة 2: متفرقات ── */
  'اشار': 'أشار', 'اتمنيت': 'تمنيت'
});

/* الدفعة 2: توسيع صرفي للأفعال الهمزية المراجعة — الفعل الماضي مع لواحق
   الضمائر يبقى باطلًا بلا همزة، فيرث نفس الثقة. استُثني «اتمنى» لأن
   ماضيه «تمنيت» (يُعالج بمدخل مستقل). */
const SUFFIX_EXPAND_VERBS = Object.freeze({
  'اخذ': 'أخذ', 'اكل': 'أكل', 'ارسل': 'أرسل', 'اعطى': 'أعطى', 'اكد': 'أكد',
  'اعلن': 'أعلن', 'اثبت': 'أثبت', 'اكمل': 'أكمل', 'انهى': 'أنهى',
  'اوقف': 'أوقف', 'اساء': 'أساء', 'اسرع': 'أسرع', 'اضاف': 'أضاف'
});
const PERSON_SUFFIXES = Object.freeze(['ت', 'تا', 'ا', 'نا', 'وا', 'تم', 'تن', 'ن']);
// استثناءات المثنى: «اخذا» و«اكلا» تحملان قراءة مصدرية منصوبة صحيحة (أَخْذًا/أُكْلًا)
const DUAL_SKIP = new Set(['اخذ', 'اكل']);

/* مدخلات ذات قراءة صحيحة نادرة (إضافة ضمير ونحوه): تُعرض اقتراحًا فقط
   بثقة 0.90 (أقل من عتبة التصحيح التلقائي 0.985) فلا تُطبَّق آليًا أبدًا.
   ملاحظة: «مكتبه» حُذفت نهائيًا لأن «مكتب + ه» قراءة صحيحة شائعة (إنذار كاذب مؤكد). */
const WORDS_REVIEW = Object.freeze({
  'جامعه': 'جامعة', 'فكره': 'فكرة', 'كلمه': 'كلمة', 'جمله': 'جملة',
  'مدينه': 'مدينة'
});

function boundary(text, index, length) {
  const left = text[index - 1];
  const right = text[index + length];
  const arabic = /[\u0621-\u064A]/u;
  return (!left || !arabic.test(left)) && (!right || !arabic.test(right));
}

function orthographyRule(context) {
  const candidates = [];
  const registry = [
    ...Object.entries(PHRASES).map(([bad, good]) => ({bad, good, phrase: true, confidence: 0.999})),
    ...Object.entries(WORDS).map(([bad, good]) => ({bad, good, phrase: false, confidence: 0.995})),
    ...Object.entries(SUFFIX_EXPAND_VERBS).flatMap(([bad, good]) =>
      PERSON_SUFFIXES
        .filter(suffix => !(suffix === 'ا' && DUAL_SKIP.has(bad)))
        .map(suffix => ({bad: bad + suffix, good: good + suffix, phrase: false, confidence: 0.995}))),
    ...Object.entries(WORDS_REVIEW).map(([bad, good]) => ({bad, good, phrase: false, review: true, confidence: 0.9}))
  ].sort((a, b) => b.bad.length - a.bad.length);

  for (const item of registry) {
    let index = 0;
    while ((index = context.text.indexOf(item.bad, index)) >= 0) {
      if (boundary(context.text, index, item.bad.length)) {
        candidates.push(findingFromTextSpan(context, {
          normalizedStart: index,
          normalizedEnd: index + item.bad.length,
          replacement: item.good,
          ruleId: `ORTHOGRAPHY_V18:${item.bad}`,
          type: 'إملائي',
          classification: item.phrase ? 'orthographic-phrase' : 'orthographic',
          confidence: item.confidence,
          explanation: item.review
            ? 'تصحيح إملائي محتمل — للكلمة قراءة صحيحة أخرى في سياق نادر، لذا يُعرض اقتراحًا دون تطبيق تلقائي.'
            : (item.phrase ? 'تصحيح عبارة إملائية مراجعة مع أولوية للتطابق الأطول.' : 'تصحيح إملائي معجمي مراجع.'),
          evidence: [item.review ? 'review-only-lexicon' : (item.phrase ? 'phrase-priority' : 'reviewed-word-lexicon')],
          safe: true
        }));
      }
      index += Math.max(1, item.bad.length);
    }
  }

  const selected = [];
  const occupied = [];
  candidates.sort((a, b) => b.length - a.length || b.confidence - a.confidence).forEach(item => {
    const end = item.index + item.length;
    if (occupied.some(span => item.index < span.end && end > span.start)) return;
    occupied.push({start: item.index, end});
    selected.push(item);
  });
  return selected;
}


/* ===== MODULE: src/rules/waw-aljamaa.js ===== */
/* الدفعة 2: واو الجماعة السياقية — اقتراح فقط (0.9).
   الصيغ القطعية في WORDS أعلاه؛ هذه القاعدة تغطي بقية الأفعال بحُرّاس
   يمنع واو الإضافة (معلمو المدرسة) وأفعال لام الواو الأصلية (يدعو)
   وصيغ الأمر (ادعوا/ارموا) وأسماء تنتهي بواو (عدو). */
const WAW_NOUN_EXCEPTIONS = new Set(['عدو', 'دلو', 'غزو', 'لهو', 'طابو']);
// مضارعات صحيحة من أفعال لام الواو للمتكلّم (أرجو، أدعو…) — لا علاقة لها بواو الجماعة
const WAW_IMPERFECT_EXCEPTIONS = new Set(
  ['رجو', 'دعو', 'سمو', 'علو', 'قسو', 'لهو', 'غزو'].map(stem => 'أ' + stem)
);

function wawAljamaaRule(context) {
  const out = [];
  const {tokens} = context;
  // نون المتكلمين في المضارع (نكتبو) عاميةٌ لا تُصحَّح بواو الجماعة
  const blockedInitials = new Set(['ي', 'ت', 'م', 'ا', 'ن']);
  const prevStop = new Set(['لم', 'لن', 'لا', 'ما', 'حتى']);

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.type !== 'word') continue;
    const word = token.clean;
    const core = word.replace(/^[وف]/, ''); // تجريد واو/فاء العطف المتصلة للتحليل
    if (!/^[ء-ي]{3,}و$/.test(core)) continue;
    if (blockedInitials.has(core[0])) continue;
    if (WAW_NOUN_EXCEPTIONS.has(core)) continue;
    if (WAW_IMPERFECT_EXCEPTIONS.has(core)) continue;
    if (WORDS[core]) continue; // مشمولة بالمعجم القطعي
    const stem = core.slice(0, -1);
    // ألف داخل ساق أطول من 3 أحرف → واو إضافة لصيغ فاعل/فعال (طالبو، قاضو، سافرو)
    if (stem.includes('ا') && stem.length > 3) continue;
    // الساق المنتهي بتاء الفاعل (كتبتو = كتبتُ عامية) ليس واو جماعة
    if (stem.endsWith('ت')) continue;
    const next = tokens[i + 1];
    if (next && next.sentence === token.sentence && next.type === 'word'
        && (next.morph.segments?.article || next.clean?.startsWith('ال'))) continue; // إضافة إلى معرفة
    const prev = tokens[i - 1];
    if (prev && prev.clean && prevStop.has(prev.clean)) continue; // سياق جزم/نفي
    out.push(findingFromSpan(context, {
      startToken: token,
      replacement: rebuildToken(token, word + 'ا'),
      ruleId: 'WAW_ALJAMAA_V18',
      type: 'إملائي',
      classification: 'orthographic',
      confidence: 0.9,
      explanation: 'الماضي المتصل بواو الجماعة يُكتب بألف بعد الواو؛ اقتراح لتعذّر الجزم الصرفي الكامل.',
      evidence: ['waw-aljamaa-contextual'],
      safe: true
    }));
  }
  return out;
}


/* ===== MODULE: src/rules/contextual-taa.js ===== */
/* الدفعة 2: تاء مربوطة ذات قراءة إضافة صحيحة (صوره = صُوَرُه، مكتبه = مَكْتَبُه).
   تُعرض اقتراحًا فقط عندما يمنع السياق قراءة الإضافة:
   النعت النكرة المنتهي بالتاء بعد الكلمة لا يجتمع مع الإضافة. */
const CONTEXTUAL_TAA = Object.freeze({
  'صوره': 'صورة', 'شركه': 'شركة', 'منطقه': 'منطقة', 'غرفه': 'غرفة',
  'دقيقه': 'دقيقة', 'لحظه': 'لحظة', 'ساعه': 'ساعة', 'طائره': 'طائرة',
  'عائله': 'عائلة', 'محكمه': 'محكمة', 'قوه': 'قوة', 'ثروه': 'ثروة',
  'مكتبه': 'مكتبة'
});

function contextualTaaRule(context) {
  const out = [];
  const {tokens} = context;
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.type !== 'word') continue;
    const target = CONTEXTUAL_TAA[token.clean];
    if (!target) continue;
    if (token.morph.segments?.article) continue;
    const next = tokens[i + 1];
    if (!next || next.sentence !== token.sentence || next.type !== 'word') continue;
    if (next.morph.segments?.article || next.clean?.startsWith('ال')) continue;
    // النكرة المنتهية بتاء/هاء (نعت غالبًا) تمنع قراءة الإضافة
    if (next.clean.length < 3 || !/[هة]$/.test(next.clean)) continue;
    out.push(findingFromSpan(context, {
      startToken: token,
      replacement: rebuildToken(token, target),
      ruleId: 'CONTEXTUAL_TAA_V18:' + token.clean,
      type: 'إملائي',
      classification: 'orthographic',
      confidence: 0.9,
      explanation: 'السياق يمنع قراءة الإضافة هنا؛ الأرجح التاء المربوطة. تُعرض اقتراحًا.',
      evidence: ['contextual-taa'],
      safe: true
    }));
  }
  return out;
}


/* ===== MODULE: src/rules/punctuation.js ===== */
/* الدفعة 2: طبقة الترقيم العربي — مسافة قبل العلامة (تلقائي)،
   غياب المسافة بعد العلامة (تلقائي)، تكرار ؟/! (اقتراح). */
function punctuationRule(context) {
  const out = [];
  const text = context.text;

  for (const m of text.matchAll(/[ ]+([،؛؟!])/gu)) {
    out.push(findingFromTextSpan(context, {
      normalizedStart: m.index,
      normalizedEnd: m.index + m[0].length - 1,
      replacement: '',
      ruleId: 'PUNCTUATION_V18:space-before',
      type: 'ترقيم',
      classification: 'punctuation',
      confidence: 0.995,
      explanation: 'علامات الترقيم العربية تلتصق بالكلمة التي قبلها.',
      evidence: ['punctuation-spacing'],
      safe: true
    }));
  }

  for (const m of text.matchAll(/(?<![،؛؟!\s])([،؛؟!\u061B])(?=[ء-ي])/gu)) {
    out.push(findingFromTextSpan(context, {
      normalizedStart: m.index + 1,
      normalizedEnd: m.index + 1,
      replacement: ' ',
      ruleId: 'PUNCTUATION_V18:space-after',
      type: 'ترقيم',
      classification: 'punctuation',
      confidence: 0.995,
      explanation: 'توضع مسافة بعد علامة الترقيم قبل الكلمة التالية.',
      evidence: ['punctuation-spacing'],
      safe: true
    }));
  }

  for (const m of text.matchAll(/([؟!])\1+/gu)) {
    out.push(findingFromTextSpan(context, {
      normalizedStart: m.index,
      normalizedEnd: m.index + m[0].length,
      replacement: m[1],
      ruleId: 'PUNCTUATION_V18:repeated',
      type: 'ترقيم',
      classification: 'punctuation',
      confidence: 0.9,
      explanation: 'يكفي رمز واحد للاستفهام أو التعجب في النص الرسمي.',
      evidence: ['punctuation-repeat'],
      safe: true
    }));
  }
  return out;
}


/* ===== MODULE: src/rules/weak-verbs.js ===== */
function desiredPerson(features, order) {
  const effective = effectiveAgreement(features);
  if (order === 'VSO') return effective?.gender === 'f' ? '3fs' : '3ms';
  if (effective?.person === 1) return effective.number === 'pl' ? '1p' : '1s';
  if (effective?.person === 2) {
    if (effective.number === 'du') return '2du';
    if (effective.number === 'pl') return effective.gender === 'f' ? '2fp' : '2mp';
    return effective.gender === 'f' ? '2fs' : '2ms';
  }
  if (effective?.number === 'du') return effective.gender === 'f' ? '3df' : '3dm';
  if (effective?.number === 'pl') return effective.gender === 'f' ? '3fp' : '3mp';
  return effective?.gender === 'f' ? '3fs' : '3ms';
}

function weakVerbAgreementRule(context) {
  const out = [];
  const {tokens} = context;

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    const verb = bestVerb(token);
    if (!verb || verb.person !== 3) continue;

    // إذا كان السطح مشتركًا بين اسم وفعل وتلاه نعت، فالقراءة الاسمية أرجح: «كتب جديدة».
    if (token.morph.nominal && tokens[i + 1] && tokens[i + 1].sentence === token.sentence
        && tokens[i + 1].morph.candidates.some(x => x.pos === 'adj')) continue;

    // الفعل المعطوف قد يشترك مع سابقه في الفاعل؛ لذا لا نسمح له بالتقاط الاسم السابق
    // مفعولًا كان أو غيره، لكننا نحلل فاعلًا ظاهرًا جديدًا بعده.
    const relation = resolveSubjectV2(context, i, verb, {
      allowPreverbal: !token.morph.segments?.conjunction
    });
    if (!relation) continue;

    const {subjectIndex, order} = relation;
    const subject = tokens[subjectIndex];
    if (!subject || /[ء-ي]و$/u.test(subject.clean)) continue;
    const features = relation.resolvedFeatures || tokenFeatures(subject);
    if (!features.gender && !features.number && features.person === 3) continue;
    const personCode = desiredPerson(features, order);
    const desired = conjugateVerb(verb.lemma, verb.tense, personCode);
    if (!desired || stripDiacritics(desired) === stripDiacritics(token.morph.core)) continue;

    // الدرجة مبنية على قوة تحديد العلاقة، لا على رقم ثابت للقاعدة وحدها.
    const morphologyEvidence = Math.min(0.995, verb.confidence || 0.9);
    const confidence = Math.min(0.985, 0.55 * relation.confidence + 0.45 * morphologyEvidence);
    out.push(findingFromSpan(context, {
      startToken: token,
      replacement: rebuildToken(token, desired),
      ruleId: 'WEAK_VERB_AGREEMENT_V18',
      type: 'صرفي',
      classification: 'morphology',
      confidence,
      explanation: order === 'SVO'
        ? 'دلّ التحليل السياقي على فاعل متقدم؛ فتجب المطابقة في الشخص والجنس والعدد.'
        : relation.numberPhrase
          ? 'الفاعل عبارة عدد متقدمة، ويؤخذ جنس الفعل المفرد من جنس المعدود الظاهر.'
          : 'دلّ التحليل السياقي على فاعل ظاهر متأخر؛ فيفرد الفعل مع مطابقة الجنس.',
      evidence: ['verified-verb-paradigm', verb.verbClass, order, ...relation.evidence, `subject:${subject.surface}`],
      safe: false,
      metadata: {
        lemma: verb.lemma, verbClass: verb.verbClass, tense: verb.tense,
        personFrom: verb.personCode, personTo: personCode, subjectIndex,
        subjectOrder: order, relationConfidence: relation.confidence,
        numberPhrase: relation.numberPhrase || null,
        resolverVersion: relation.resolverVersion || '1.x', clauseId: relation.clauseId || null,
        antecedentIndex: relation.antecedentIndex ?? -1
      }
    }));
  }
  return out;
}


/* ===== MODULE: src/rules/five-nouns.js ===== */
function fiveNounHasAddition(tokens, index) {
  const token = tokens[index];
  if (token.morph.segments?.enclitic) return true;
  const next = tokens[index + 1];
  return Boolean(next && next.sentence === token.sentence && isNominal(next)
    && !isAdjective(next) && !next.morph.segments?.conjunction && !next.morph.segments?.preposition);
}

const FIVE_NOUN_STRONG_ROLES = new Set([
  'subject', 'object', 'object-of-preposition',
  'inna-subject', 'inna-predicate', 'kana-subject', 'kana-predicate'
]);

function fiveNounContextCase(context, index) {
  const {tokens} = context;
  const direct = directGovernorCase(tokens, index);
  if (direct) return {...direct, reason: 'five-noun-direct-governor'};

  const role = context.syntax?.roles?.[index];
  if (role && FIVE_NOUN_STRONG_ROLES.has(role.role) && ROLE_CASE[role.role]) {
    return {case: ROLE_CASE[role.role], confidence: role.confidence, reason: `five-noun-role:${role.role}`};
  }

  // المعطوف يتبع اسمًا خمسة ثبت دوره بعامل صريح؛ أما «أبيك وأخيك» المجردة فتبقى بلا اقتراح.
  if (tokens[index].morph.segments?.conjunction && index > 0) {
    const previousRole = context.syntax?.roles?.[index - 1];
    if (previousRole && FIVE_NOUN_STRONG_ROLES.has(previousRole.role) && ROLE_CASE[previousRole.role]) {
      return {case: ROLE_CASE[previousRole.role], confidence: Math.min(0.96, previousRole.confidence), reason: 'five-noun-governed-coordination'};
    }
    const previousDirect = directGovernorCase(tokens, index - 1);
    if (previousDirect) return {...previousDirect, confidence: Math.min(0.96, previousDirect.confidence), reason: 'five-noun-coordination-after-preposition'};
  }
  return null;
}

function fiveNounsRule(context) {
  const out = [];
  const {tokens} = context;
  for (let i = 0; i < tokens.length; i += 1) {
    const nominal = tokens[i].morph.nominal;
    if (!nominal?.fiveNoun || !fiveNounHasAddition(tokens, i)) continue;
    // «فيك» يغلب فيها معنى حرف الجر مع الضمير؛ لا تحمل على «فم» بلا قرينة خارجية.
    if (tokens[i].morph.core === 'في' && !tokens[i].morph.segments?.preposition) continue;
    const expectedInfo = fiveNounContextCase(context, i);
    const expectedCase = expectedInfo?.case;
    if (!['nominative', 'accusative', 'genitive'].includes(expectedCase)) continue;
    const observedCase = nominal.caseForm;
    if (observedCase === expectedCase) continue;
    const desiredCore = FIVE_NOUN_BY_LEMMA[nominal.lemma]?.[expectedCase];
    if (!desiredCore) continue;
    out.push(findingFromSpan(context, {
      startToken: tokens[i], replacement: rebuildToken(tokens[i], desiredCore),
      ruleId: 'FIVE_NOUNS_CASE_V18', type: 'نحوي', classification: 'five-nouns',
      confidence: Math.min(0.985, 0.72 + 0.265 * (expectedInfo?.confidence || 0.8)),
      explanation: 'ثبتت إضافة الاسم وعامله السياقي الصريح؛ لذلك يعرب من الأسماء الخمسة: بالواو رفعًا، وبالألف نصبًا، وبالياء جرًا.',
      evidence: ['five-nouns-context-guard', 'five-nouns-lexicon', tokens[i].morph.segments?.enclitic ? 'attached-pronoun-addition' : 'nominal-addition', expectedInfo?.reason || 'syntactic-role', `expected-case:${expectedCase}`],
      safe: false,
      metadata: {lemma: nominal.lemma, observedCase, expectedCase, role: context.syntax?.roles?.[i]?.role || null, relationConfidence: expectedInfo?.confidence || 0.8}
    }));
  }
  return out;
}

/* ===== MODULE: src/rules/relative-clauses.js ===== */
function recommendRelativePronoun(features, caseValue = 'nominative') {
  const target = effectiveAgreement(features);
  if (target.number === 'du') {
    const oblique = ['accusative', 'genitive', 'accgen'].includes(caseValue);
    if (target.gender === 'f') return oblique ? 'اللتين' : 'اللتان';
    return oblique ? 'اللذين' : 'اللذان';
  }
  if (target.number === 'pl') return target.gender === 'f' ? 'اللاتي' : 'الذين';
  return target.gender === 'f' ? 'التي' : 'الذي';
}

function relativeClausesRule(context) {
  const out = [];
  const {tokens} = context;
  for (let i = 0; i < tokens.length; i += 1) {
    const observedRelative = RELATIVE_PRONOUNS[tokens[i].morph.core];
    if (!observedRelative) continue;
    const antecedentIndex = relativeAntecedentIndex(tokens, i);
    if (antecedentIndex < 0) continue;
    const antecedent = tokens[antecedentIndex];
    const features = effectiveAgreement(tokenFeatures(antecedent));
    if (!features.gender && !features.number) continue;
    const antecedentCase = roleExpectedCase(context, antecedentIndex)
      || inferSyntacticCase(tokens, antecedentIndex)
      || {case: observedCase(antecedent) || 'nominative', confidence: 0.8, reason: 'antecedent-surface'};
    const expected = recommendRelativePronoun(features, antecedentCase.case);
    if (!expected || expected === tokens[i].morph.core) continue;
    out.push(findingFromSpan(context, {
      startToken: tokens[i], replacement: rebuildToken(tokens[i], expected),
      ruleId: 'RELATIVE_PRONOUN_AGREEMENT_V18', type: 'نحوي', classification: 'relative-clause',
      confidence: Math.min(0.985, 0.74 + 0.245 * (features.confidence || 0.8)),
      explanation: 'الاسم الموصول يطابق مرجعه في الجنس والعدد، وتتغير صيغة المثنى بحسب موقع المرجع الإعرابي.',
      evidence: ['relative-clause-resolver', `antecedent:${antecedent.surface}`, `expected-case:${antecedentCase.case}`, features.agreementException || 'regular-agreement'],
      safe: false,
      metadata: {antecedentIndex, expectedCase: antecedentCase.case, clauseId: context.syntax?.tokenClause?.[i] || null, relationConfidence: Math.min(0.98, antecedentCase.confidence || 0.8)}
    }));
  }
  return out;
}


/* ===== MODULE: src/rules/diptote.js ===== */
function governedByPreposition(tokens, index) {
  const token = tokens[index];
  return Boolean(token.morph.segments.preposition)
    || PREPOSITIONS.has(tokens[index - 1]?.morph?.core);
}

function diptoteRule(context) {
  const out = [];
  const {tokens} = context;

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    const info = token.morph.diptote;
    if (!info?.isDiptote || !token.visibleCase) continue;

    const prepositional = governedByPreposition(tokens, i);
    const restoredKasra = token.morph.segments.article || isIdafaHead(tokens, i);
    const observed = observedCase(token);
    const hasTanwin = token.visibleCase.kind === 'tanwin';
    let expected = observed;
    let ruleId = null;
    let explanation = null;

    if (prepositional) {
      expected = restoredKasra ? 'genitive' : 'accusative'; // الفتحة علامة الجر في غير المنصرف
      if (!caseMatches(observed, expected) || hasTanwin) {
        ruleId = restoredKasra ? 'DIPTOTE_RESTORED_KASRA_V18' : 'DIPTOTE_GENITIVE_FATHA_V18';
        explanation = restoredKasra
          ? 'الاسم الممنوع من الصرف يجر بالكسرة إذا عُرّف بـ«ال» أو أضيف.'
          : 'الممنوع من الصرف المجرد من «ال» والإضافة يجر بالفتحة من غير تنوين.';
      }
    } else if (hasTanwin) {
      ruleId = 'DIPTOTE_TANWIN_V18';
      explanation = 'الممنوع من الصرف لا يقبل التنوين ما لم يتحول الحكم بسبب بنية أخرى، وتبقى حركته مفردة.';
    }

    if (!ruleId) continue;
    const replacement = inflectTokenCase(token, expected, {
      noTanwin: true,
      tanwin: false,
      onlyWhenVisible: true
    });
    out.push(findingFromSpan(context, {
      startToken: token,
      replacement,
      ruleId,
      type: 'نحوي',
      classification: 'diptote',
      confidence: Math.min(0.995, info.confidence),
      explanation,
      evidence: [info.reason, prepositional ? 'preposition-governance' : 'visible-tanwin', restoredKasra ? 'al-or-idafa' : 'bare-diptote'],
      safe: false,
      metadata: {diptoteReason: info.reason, observedCase: observed, expectedSurfaceCase: expected, expectedCaseLabel: caseLabel(expected)}
    }));
  }
  return out;
}


/* ===== MODULE: src/rules/numbers.js ===== */
function numberPhraseCase(tokens, index) {
  const token = tokens[index];
  const previous = tokens[index - 1];
  if (token?.morph?.segments?.preposition || PREPOSITIONS.has(previous?.morph?.core)) return 'genitive';
  if (INNA_PARTICLES.has(previous?.morph?.core)) return 'accusative';

  const {start} = sentenceBounds(tokens, index);
  for (let i = index - 1; i >= start; i -= 1) {
    const verb = bestVerb(tokens[i]);
    if (!verb) continue;
    const argumentsBetween = [];
    for (let j = i + 1; j < index; j += 1) {
      if (isStrongNominalCandidate(tokens[j]) && !tokens[j].morph.segments?.preposition) argumentsBetween.push(j);
    }
    // فعل المتكلم/المخاطب المتعدي: فاعله مضمر، فالعدد التالي مفعول غالبًا.
    if (verb.transitive && (verb.person === 1 || verb.person === 2)) return 'accusative';
    // وجود فاعل ظاهر قبل العدد يجعل العدد مفعولًا في الفعل المتعدي.
    if (verb.transitive && argumentsBetween.length) return 'accusative';
    // أول عبارة اسمية بعد فعل الغائب تُحلل فاعلًا ظاهرًا.
    return 'nominative';
  }
  return 'nominative';
}

function countedNounFinding(context, token, value) {
  if (!isNominal(token)) return null;
  const government = numberGovernance(value);
  if (!government || government.case === 'agreement') return null;
  const features = tokenFeatures(token);
  const expectedNumber = government.countedNumber;
  const expectedCase = government.case;
  const numberMismatch = Boolean(expectedNumber && (
    (features.number && features.number !== expectedNumber)
    || (!features.number && features.numberCandidates && !features.numberCandidates.includes(expectedNumber))
  ));
  const observed = observedCase(token);
  const caseMismatch = observed && !caseMatches(observed, expectedCase);
  if (!numberMismatch && !caseMismatch) return null;

  let replacement = null;
  if (numberMismatch) replacement = inflectNounNumberToken(token, expectedNumber, expectedCase);
  if (!numberMismatch && caseMismatch) replacement = inflectTokenCase(token, expectedCase, {onlyWhenVisible: true});
  if (!replacement) return null;

  return findingFromSpan(context, {
    startToken: token,
    replacement,
    ruleId: 'NUMBER_COUNTED_NOUN_V18',
    type: 'نحوي',
    classification: 'number',
    confidence: numberMismatch ? 0.95 : 0.97,
    explanation: value >= 3 && value <= 10
      ? 'تمييز الأعداد من ثلاثة إلى عشرة جمع مجرور.'
      : value >= 11 && value <= 99
        ? 'تمييز الأعداد من أحد عشر إلى تسعة وتسعين مفرد منصوب.'
        : 'تمييز المئة والألف مفرد مجرور.',
    evidence: [`number:${value}`, `expected-number:${expectedNumber}`, `expected-case:${expectedCase}`],
    safe: false,
    metadata: {numberValue: value, expectedNumber, expectedCase, observedNumber: features.number, observedCase: observed}
  });
}

function simplePolarityFinding(context, numberToken, countedToken, data) {
  if (data.value < 3 || data.value > 10 || !isNominal(countedToken)) return null;
  const gender = tokenFeatures(countedToken).gender;
  if (!gender || data.countedGender === gender) return null;
  const expected = expectedSimpleNumber(data.value, gender);
  if (!expected) return null;
  return findingFromSpan(context, {
    startToken: numberToken,
    replacement: rebuildToken(numberToken, expected),
    ruleId: 'NUMBER_POLARITY_V18',
    type: 'نحوي',
    classification: 'number',
    confidence: 0.985,
    explanation: 'الأعداد من ثلاثة إلى عشرة تخالف المعدود في التذكير والتأنيث.',
    evidence: [`number:${data.value}`, `counted-gender:${gender}`, '3-to-10-polarity'],
    safe: false,
    metadata: {numberValue: data.value, countedGender: gender}
  });
}

function oneTwoAgreementFinding(context, nounToken, numberToken, data) {
  if (![1, 2].includes(data.value) || !isStrongNominalCandidate(nounToken)) return null;
  const features = tokenFeatures(nounToken);
  if (!features.gender) return null;
  const inferred = inferSyntacticCase(context.tokens, nounToken.index);
  let expectedCase = inferred?.case || observedCase(nounToken) || 'nominative';
  if (expectedCase === 'accgen') expectedCase = data.caseForm || 'accgen';
  const oblique = ['accusative', 'genitive', 'accgen'].includes(expectedCase);

  let expected;
  if (data.value === 1) expected = features.gender === 'f' ? 'واحدة' : 'واحد';
  else if (features.gender === 'f') expected = oblique ? 'اثنتين' : 'اثنتان';
  else expected = oblique ? 'اثنين' : 'اثنان';

  const genderMismatch = data.countedGender !== features.gender;
  const caseMismatch = data.value === 2 && data.caseForm && !caseMatches(data.caseForm, expectedCase);
  const visible = numberToken.visibleCase;
  const visibleMismatch = Boolean(visible && expectedCase !== 'accgen' && !caseMatches(visible.case, expectedCase));
  if (!genderMismatch && !caseMismatch && !visibleMismatch) return null;

  if (visible && data.value === 1 && expectedCase !== 'accgen') {
    expected = withCaseMark(expected, expectedCase, {tanwin: visible.kind === 'tanwin'});
  }
  return findingFromSpan(context, {
    startToken: numberToken,
    replacement: rebuildToken(numberToken, expected),
    ruleId: caseMismatch && !genderMismatch ? 'NUMBER_TWO_CASE_V18' : 'NUMBER_ONE_TWO_AGREEMENT_V18',
    type: 'نحوي',
    classification: 'number',
    confidence: Math.min(0.98, 0.82 + 0.16 * (features.confidence || 0.3)),
    explanation: data.value === 2
      ? 'الاثنان يتبع المعدود في التذكير والتأنيث والإعراب: بالألف رفعًا وبالياء نصبًا وجرًا.'
      : 'الواحد يتبع المعدود في التذكير والتأنيث والإعراب عندما يأتي نعتًا بعده.',
    evidence: [`number:${data.value}`, `counted-gender:${features.gender}`, `expected-case:${expectedCase}`, 'noun-before-number', 'adjacent-counted-noun'],
    safe: false,
    metadata: {numberValue: data.value, countedGender: features.gender, countedIndex: nounToken.index, direction: 'noun-before-number', expectedCase, genderMismatch, caseMismatch, relationConfidence: 0.98}
  });
}

function partitiveOneTwoFinding(context, numberToken, countedToken, data) {
  if (![1, 2].includes(data.value) || !isStrongNominalCandidate(countedToken)) return null;
  const features = tokenFeatures(countedToken);
  if (!features.gender) return null;
  const expectedCase = numberPhraseCase(context.tokens, numberToken.index);
  const oblique = ['accusative', 'genitive', 'accgen'].includes(expectedCase);
  let expected;
  if (data.value === 1) expected = features.gender === 'f' ? 'واحدة' : 'واحد';
  else if (features.gender === 'f') expected = oblique ? 'اثنتين' : 'اثنتان';
  else expected = oblique ? 'اثنين' : 'اثنان';
  const genderMismatch = data.countedGender !== features.gender;
  const caseMismatch = data.value === 2 && data.caseForm && !caseMatches(data.caseForm, expectedCase);
  if (!genderMismatch && !caseMismatch) return null;
  return findingFromSpan(context, {
    startToken: numberToken, replacement: rebuildToken(numberToken, expected),
    ruleId: 'NUMBER_PARTITIVE_ONE_TWO_V18', type: 'نحوي', classification: 'number', confidence: 0.955,
    explanation: 'العدد المستقل قبل «من» يوافق المجموعة في الجنس، ويعرب بحسب موقعه في الجملة.',
    evidence: [`number:${data.value}`, 'partitive-min', `counted-gender:${features.gender}`, `phrase-case:${expectedCase}`],
    safe: false,
    metadata: {numberValue: data.value, countedGender: features.gender, countedIndex: countedToken.index, direction: 'partitive-number-before-min', expectedCase, genderMismatch, caseMismatch, relationConfidence: 0.94}
  });
}

function numberRule(context) {
  const out = [];
  const {tokens} = context;
  const consumed = new Set();

  // المرحلة الأولى: العبارات المركبة 11–19 والمنسقة 21–99 قبل الكلمات المفردة.
  for (let i = 0; i < tokens.length; i += 1) {
    if (consumed.has(i)) continue;
    const phrase = analyzeNumberPhrase(tokens, i);
    if (!phrase || !['teen', 'coordinated'].includes(phrase.kind)) continue;
    const counted = tokens[phrase.countedIndex];
    if (!counted || counted.sentence !== tokens[i].sentence || !isStrongNominalCandidate(counted)) continue;

    const countedFeatures = tokenFeatures(counted);
    const gender = countedFeatures.gender;
    const phraseCase = numberPhraseCase(tokens, i);
    const genderMismatch = Boolean(gender && phrase.countedGender && phrase.countedGender !== gender);
    const expectedTeen = phrase.kind === 'teen'
      ? expectedCompoundNumber(phrase.value, gender || phrase.countedGender, phraseCase) : null;
    const formMismatch = phrase.kind === 'teen' && expectedTeen
      ? expectedTeen.some((part, offset) => stripDiacritics(tokens[i + offset].morph.core) !== part)
      : false;
    const caseMismatch = phrase.kind === 'teen'
      ? Boolean(phrase.value === 12 && phrase.caseForm && !caseMatches(phrase.caseForm, phraseCase))
      : Boolean((phrase.caseForm && !caseMatches(phrase.caseForm, phraseCase))
          || (phrase.unitValue === 2 && phrase.unitCase && !caseMatches(phrase.unitCase, phraseCase)));

    if (genderMismatch || caseMismatch || formMismatch) {
      if (phrase.kind === 'teen') {
        const expected = expectedTeen;
        if (expected) {
          out.push(findingFromSpan(context, {
            startToken: tokens[i], endToken: tokens[i + 1],
            replacement: `${rebuildToken(tokens[i], expected[0])} ${rebuildToken(tokens[i + 1], expected[1])}`,
            ruleId: caseMismatch && !genderMismatch ? 'NUMBER_TWELVE_CASE_V18' : 'NUMBER_COMPOUND_AGREEMENT_V18',
            type: 'نحوي', classification: 'number', confidence: 0.98,
            explanation: caseMismatch && !genderMismatch
              ? 'صدر العدد اثني عشر/اثنتي عشرة يعرب إعراب المثنى: بالألف رفعًا وبالياء نصبًا وجرًا.'
              : phrase.value <= 12
                ? 'جزآ العدد أحد عشر واثنا عشر يوافقان المعدود في التذكير والتأنيث.'
                : 'في الأعداد من ثلاثة عشر إلى تسعة عشر يخالف الجزء الأول المعدود، ويوافقه جزء العشرة.',
            evidence: [`number:${phrase.value}`, `counted-gender:${gender}`, `phrase-case:${phraseCase}`, 'compound-number', 'number-before-noun'],
            safe: false,
            metadata: {numberValue: phrase.value, countedGender: gender, phraseCase, genderMismatch, caseMismatch, formMismatch, countedIndex: phrase.countedIndex, direction: phrase.direction, relationConfidence: 0.98}
          }));
        }
      } else {
        const expected = expectedCoordinatedNumber(phrase, gender || phrase.countedGender, phraseCase);
        if (expected) {
          let replacement;
          if (phrase.length === 3) {
            replacement = `${rebuildToken(tokens[i], expected[0])} و ${rebuildToken(tokens[phrase.decadeIndex], expected[1])}`;
          } else {
            replacement = `${rebuildToken(tokens[i], expected[0])} ${rebuildToken(tokens[phrase.decadeIndex], expected[1])}`;
          }
          out.push(findingFromSpan(context, {
            startToken: tokens[i], endToken: tokens[i + phrase.length - 1], replacement,
            ruleId: genderMismatch ? 'NUMBER_COORDINATED_AGREEMENT_V18' : 'NUMBER_COORDINATED_CASE_V18',
            type: 'نحوي', classification: 'number', confidence: 0.975,
            explanation: genderMismatch
              ? 'جزء الآحاد في 21–99 يوافق المعدود في الواحد والاثنين، ويخالفه في 3–9، أما ألفاظ العقود فلا تتغير للجنس.'
              : 'العقود والاثنان في العدد المعطوف ترفع بالواو/الألف وتنصب وتجر بالياء.',
            evidence: [`number:${phrase.value}`, `counted-gender:${gender}`, `phrase-case:${phraseCase}`, 'coordinated-number', 'number-before-noun'],
            safe: false,
            metadata: {numberValue: phrase.value, countedGender: gender, phraseCase, genderMismatch, caseMismatch, countedIndex: phrase.countedIndex, direction: phrase.direction, relationConfidence: 0.975}
          }));
        }
      }
    }

    const countedFinding = countedNounFinding(context, counted, phrase.value);
    if (countedFinding) {
      countedFinding.metadata = {...(countedFinding.metadata || {}), countedIndex: phrase.countedIndex, numberStart: i, direction: phrase.direction, relationConfidence: 0.98};
      out.push(countedFinding);
    }
    for (let j = i; j < i + phrase.length; j += 1) consumed.add(j);
  }

  // المرحلة الثانية: الأعداد المفردة. الواحد والاثنان لا ينظران إلا إلى اسم سابق ملاصق.
  for (let i = 0; i < tokens.length; i += 1) {
    if (consumed.has(i)) continue;
    const phrase = analyzeNumberPhrase(tokens, i);
    if (!phrase || phrase.kind !== 'simple') continue;
    const data = simpleCardinal(tokens[i].morph.core);
    if (!data) continue;

    if (data.value === 1 || data.value === 2) {
      if (phrase.direction === 'noun-before-number' && phrase.countedIndex >= 0) {
        const agreement = oneTwoAgreementFinding(context, tokens[phrase.countedIndex], tokens[i], data);
        if (agreement) out.push(agreement);
      } else if (phrase.direction === 'partitive-number-before-min' && phrase.countedIndex >= 0) {
        const agreement = partitiveOneTwoFinding(context, tokens[i], tokens[phrase.countedIndex], data);
        if (agreement) out.push(agreement);
      }
      continue;
    }

    const counted = tokens[phrase.countedIndex];
    if (!counted || counted.sentence !== tokens[i].sentence || !isStrongNominalCandidate(counted)) continue;
    const polarity = simplePolarityFinding(context, tokens[i], counted, data);
    if (polarity) {
      polarity.metadata = {...(polarity.metadata || {}), countedIndex: phrase.countedIndex, direction: phrase.direction, relationConfidence: 0.98};
      out.push(polarity);
    }
    const countedFinding = countedNounFinding(context, counted, data.value);
    if (countedFinding) {
      countedFinding.metadata = {...(countedFinding.metadata || {}), countedIndex: phrase.countedIndex, numberStart: i, direction: phrase.direction, relationConfidence: 0.98};
      out.push(countedFinding);
    }
  }
  return out;
}


/* ===== MODULE: src/rules/exception.js ===== */
function hasNegation(tokens, start, end) {
  for (let i = start; i < end; i += 1) if (NEGATION.has(tokens[i].morph.core)) return true;
  return false;
}

function caseFinding(context, token, expected, ruleId, confidence, explanation, evidence) {
  const observed = observedCase(token);
  if (!observed || caseMatches(observed, expected)) return null;
  return findingFromSpan(context, {
    startToken: token,
    replacement: inflectTokenCase(token, expected, {onlyWhenVisible: true}),
    ruleId,
    type: 'نحوي',
    classification: 'exception',
    confidence,
    explanation,
    evidence,
    safe: false,
    metadata: {observedCase: observed, expectedCase: expected}
  });
}

function exceptionRule(context) {
  const out = [];
  const {tokens} = context;

  for (let i = 0; i < tokens.length; i += 1) {
    const core = tokens[i].morph.core;
    if (core === 'إلا') {
      const {start, end} = sentenceBounds(tokens, i);
      const excepted = nextNominal(tokens, i + 1, {end});
      const antecedent = previousNominal(tokens, i - 1, {startAt: start});
      const negative = hasNegation(tokens, start, i);
      if (excepted >= 0 && antecedent >= 0 && !negative) {
        const item = caseFinding(
          context, tokens[excepted], 'accusative', 'EXCEPTION_ILLA_CASE_V18', 0.96,
          'في الاستثناء التام المثبت بـ«إلا» يكون المستثنى منصوبًا.',
          ['complete-affirmative-exception', `antecedent:${tokens[antecedent].surface}`]
        );
        if (item) out.push(item);
      }
      // التام المنفي يجيز البدل والنصب، والمفرغ يعرب بحسب موقعه؛ لا نفرض تصحيحًا.
    }

    if (core === 'غير' || core === 'سوى') {
      const {end} = sentenceBounds(tokens, i);
      const governed = nextNominal(tokens, i + 1, {end});
      if (governed >= 0) {
        const item = caseFinding(
          context, tokens[governed], 'genitive', 'EXCEPTION_GHAYR_IDAFA_V18', 0.97,
          'الاسم بعد «غير» و«سوى» مضاف إليه مجرور، بصرف النظر عن موقع أداة الاستثناء نفسها.',
          ['idafa-after-exception-noun', core]
        );
        if (item) out.push(item);
      }
    }

    if ((core === 'عدا' || core === 'خلا') && tokens[i - 1]?.morph?.core === 'ما') {
      const governed = nextNominal(tokens, i + 1, {end: tokens.length});
      if (governed >= 0 && tokens[governed].sentence === tokens[i].sentence) {
        const item = caseFinding(
          context, tokens[governed], 'accusative', 'EXCEPTION_MA_ADA_CASE_V18', 0.93,
          'بعد «ما عدا» و«ما خلا» يعامل ما بعدهما مفعولًا به منصوبًا في التحليل المعياري.',
          ['ma-plus-exception-verb', core]
        );
        if (item) out.push(item);
      }
    }
  }
  return out;
}


/* ===== MODULE: src/rules/hal.js ===== */
function verbBeforeOwner(tokens, ownerIndex) {
  const {start} = sentenceBounds(tokens, ownerIndex);
  for (let i = ownerIndex - 1; i >= start; i -= 1) {
    if (bestVerb(tokens[i])) return i;
    if (INNA_PARTICLES.has(tokens[i].morph.core) || KANA_VERBS.has(tokens[i].morph.core)) return -1;
  }
  return -1;
}

function halRule(context) {
  const out = [];
  const {tokens} = context;

  for (let i = 1; i < tokens.length; i += 1) {
    const adjective = bestAdjective(tokens[i]);
    if (!adjective || tokens[i].morph.definite) continue;
    const ownerIndex = previousNominal(tokens, i - 1, {startAt: Math.max(0, i - 3)});
    if (ownerIndex < 0 || tokens[ownerIndex].sentence !== tokens[i].sentence) continue;
    const owner = tokens[ownerIndex];
    if (!owner.morph.definite && owner.morph.nominal?.pos !== 'proper') continue;
    if (verbBeforeOwner(tokens, ownerIndex) < 0) continue;

    const target = effectiveAgreement(tokenFeatures(owner));
    const actual = tokenFeatures(tokens[i]);
    const mismatch = featuresMatch(target, actual, ['gender', 'number']);
    const observed = observedCase(tokens[i]);
    const caseMismatch = observed && !caseMatches(observed, 'accusative');
    if (!mismatch.length && !caseMismatch) continue;

    const replacement = inflectAdjectiveToken(tokens[i], target, 'accusative', {
      forceVisibleCase: Boolean(tokens[i].visibleCase || caseMismatch)
    });
    out.push(findingFromSpan(context, {
      startToken: tokens[i],
      replacement,
      ruleId: mismatch.length ? 'HAL_AGREEMENT_V18' : 'HAL_CASE_V18',
      type: 'نحوي',
      classification: 'hal',
      confidence: mismatch.length ? 0.93 : 0.95,
      explanation: mismatch.length
        ? 'الحال وصف نكرة منصوب يطابق صاحب الحال في الجنس والعدد.'
        : 'الحال منصوب، والعلامة الظاهرة لا توافق النصب.',
      evidence: ['indefinite-adjective-after-definite-owner', 'verb-before-owner', ...mismatch.map(x => `mismatch:${x}`)],
      safe: false,
      metadata: {ownerIndex, expectedCase: 'accusative', mismatch}
    }));
  }
  return out;
}


/* ===== MODULE: src/rules/tamyiz.js ===== */
const VERBAL_CUES = new Set(['ازداد', 'زاد', 'امتلأ', 'اشتعل', 'كثر', 'طاب', 'حسن']);
const COMPARATIVE_CUES = new Set(['أكثر', 'أشد', 'أقل', 'خير', 'شر', 'أحسن']);

function makeTamyizFinding(context, token, evidence, confidence = 0.92) {
  const observed = observedCase(token);
  if (!observed || caseMatches(observed, 'accusative')) return null;
  return findingFromSpan(context, {
    startToken: token,
    replacement: inflectTokenCase(token, 'accusative', {onlyWhenVisible: true}),
    ruleId: 'TAMYIZ_CASE_V18',
    type: 'نحوي',
    classification: 'tamyiz',
    confidence,
    explanation: 'التمييز الملحوظ بعد فعل الازدياد/الامتلاء أو بعد اسم التفضيل منصوب في هذا التركيب.',
    evidence,
    safe: false,
    metadata: {observedCase: observed, expectedCase: 'accusative'}
  });
}

function tamyizRule(context) {
  const out = [];
  const {tokens} = context;

  for (let i = 0; i < tokens.length; i += 1) {
    const core = tokens[i].morph.core;

    if (COMPARATIVE_CUES.has(core)) {
      const candidate = tokens[i + 1];
      if (candidate && candidate.sentence === tokens[i].sentence && isNominal(candidate) && !isAdjective(candidate) && !candidate.morph.definite) {
        const finding = makeTamyizFinding(context, candidate, ['comparative-cue', core], 0.94);
        if (finding) out.push(finding);
      }
    }

    const verb = bestVerb(tokens[i]);
    if (!VERBAL_CUES.has(core) && !VERBAL_CUES.has(verb?.lemma)) continue;
    const {end} = sentenceBounds(tokens, i);
    let candidate = null;
    for (let j = i + 1; j < end; j += 1) {
      if (isNominal(tokens[j]) && !isAdjective(tokens[j]) && !tokens[j].morph.definite) candidate = tokens[j];
    }
    if (candidate) {
      const finding = makeTamyizFinding(context, candidate, ['verbal-tamyiz-cue', verb?.lemma || core], 0.92);
      if (finding) out.push(finding);
    }
  }
  return out;
}


/* ===== MODULE: src/rules/conjunction.js ===== */
function coordinationAt(tokens, index) {
  const token = tokens[index];
  if (token.morph.segments.conjunction) {
    return {tool: token.morph.segments.conjunction, left: index - 1, right: index, attached: true};
  }
  if (CONJUNCTIONS.has(token.morph.core)) {
    return {tool: token.morph.core, left: index - 1, right: index + 1, attached: false};
  }
  return null;
}

function conjunctionRule(context) {
  const out = [];
  const {tokens} = context;

  for (let i = 0; i < tokens.length; i += 1) {
    const relation = coordinationAt(tokens, i);
    if (!relation || relation.left < 0 || relation.right >= tokens.length) continue;
    const left = tokens[relation.left];
    const right = tokens[relation.right];
    if (left.sentence !== right.sentence || !isNominal(left) || !isNominal(right)) continue;

    const inferred = roleExpectedCase(context, relation.left) || inferSyntacticCase(tokens, relation.left);
    let expected = inferred?.case || observedCase(left);
    const observed = observedCase(right);
    if (!expected || !observed || caseMatches(observed, expected)) continue;

    // «accgen» كافٍ مع العلامة الفرعية، لكنه لا يحسم حركة الاسم المفرد.
    if (expected === 'accgen') {
      if (right.morph.number === 'du' || right.morph.number === 'pl') expected = 'accusative';
      else continue;
    }

    out.push(findingFromSpan(context, {
      startToken: right,
      replacement: inflectTokenCase(right, expected, {onlyWhenVisible: true}),
      ruleId: 'CONJUNCTION_CASE_V18',
      type: 'نحوي',
      classification: 'coordination',
      confidence: inferred?.confidence ? Math.min(0.97, inferred.confidence) : 0.9,
      explanation: 'المعطوف يتبع المعطوف عليه في الحالة الإعرابية، ولا يلزمه أن يطابقه في الجنس أو العدد.',
      evidence: [`conjunction:${relation.tool}`, inferred?.reason || 'case-of-left-conjunct', `left:${left.surface}`],
      safe: false,
      metadata: {leftIndex: relation.left, expectedCase: expected, observedCase: observed, attachedConjunction: relation.attached}
    }));
  }
  return out;
}


/* ===== MODULE: src/rules/dependents.js ===== */
function recommendDemonstrative(features, caseValue = 'nominative') {
  const effective = effectiveAgreement(features);
  if (effective.number === 'pl') return 'هؤلاء';
  if (effective.number === 'du') {
    const oblique = caseValue === 'accusative' || caseValue === 'genitive' || caseValue === 'accgen';
    if (effective.gender === 'f') return oblique ? 'هاتين' : 'هاتان';
    return oblique ? 'هذين' : 'هذان';
  }
  return effective.gender === 'f' ? 'هذه' : 'هذا';
}

function resolveAdjectiveRelation(context, headIndex, dependentIndex) {
  const {tokens} = context;
  const head = tokens[headIndex];
  const dependent = tokens[dependentIndex];
  if (!head || !dependent || head.sentence !== dependent.sentence || !isNominal(head) || !isAdjective(dependent)) return null;
  if (dependent.morph.segments.conjunction || dependent.morph.segments.preposition) return null;
  if (Boolean(head.morph.definite) !== Boolean(dependent.morph.definite)) return null;

  const roleCase = roleExpectedCase(context, headIndex);
  const inferred = inferSyntacticCase(tokens, headIndex);
  const headCase = roleCase?.case || inferred?.case || observedCase(head);
  const source = roleCase ? 'noun-role-resolver' : (inferred ? inferred.reason : 'surface-agreement');
  return {
    headIndex, dependentIndex, head, dependent,
    target: effectiveAgreement(tokenFeatures(head)),
    actual: tokenFeatures(dependent),
    headCase,
    dependentCase: observedCase(dependent),
    confidence: Math.min(0.98, roleCase?.confidence || inferred?.confidence || 0.88),
    evidence: ['adjective-resolver-2', source]
  };
}

function adjectiveDependents(context) {
  const out = [];
  const {tokens} = context;
  for (let i = 0; i < tokens.length - 1; i += 1) {
    const relation = resolveAdjectiveRelation(context, i, i + 1);
    if (!relation) continue;
    const {head, dependent, target, actual, headCase, dependentCase} = relation;
    const mismatch = featuresMatch(target, actual, ['gender', 'number']);
    const caseMismatch = headCase && dependentCase && !caseMatches(dependentCase, headCase);
    if (!mismatch.length && !caseMismatch) continue;

    // «accgen» كافٍ لصيغة المثنى وجمع المذكر: الطالبين المجتهدين.
    const caseValue = headCase;
    const replacement = inflectAdjectiveToken(dependent, target, caseValue, {forceVisibleCase: Boolean(dependent.visibleCase && caseValue)});
    out.push(findingFromSpan(context, {
      startToken: dependent,
      replacement,
      ruleId: mismatch.length ? 'ADJECTIVE_DEPENDENT_AGREEMENT_V18' : 'ADJECTIVE_DEPENDENT_CASE_V18',
      type: 'نحوي', classification: 'dependent', confidence: Math.min(0.98, 0.94 + 0.04 * relation.confidence),
      explanation: 'ربط AdjectiveResolver 2.0 النعت بمنعوته؛ فيتبعه في التعريف والإعراب ويطابقه في الجنس والعدد، مع معاملة جمع غير العاقل مفردًا مؤنثًا.',
      evidence: [...relation.evidence, 'adjacent-adjective', ...mismatch.map(x => `mismatch:${x}`), target.agreementException || 'regular-agreement'],
      safe: false,
      metadata: {headIndex: i, mismatch, expectedCase: headCase, resolverVersion: '2.0', relationConfidence: relation.confidence}
    }));
  }
  return out;
}

function demonstrativeDependents(context) {
  const out = [];
  const {tokens} = context;
  for (let i = 0; i < tokens.length - 1; i += 1) {
    const dem = DEMONSTRATIVES[tokens[i].morph.core];
    const noun = tokens[i + 1];
    if (!dem || !isNominal(noun) || noun.sentence !== tokens[i].sentence) continue;
    const target = effectiveAgreement(tokenFeatures(noun));
    const mismatch = featuresMatch(target, dem, ['gender', 'number']);
    const animacyMismatch = dem.humanOnly && target.animacy === 'nonhuman';
    const caseValue = roleExpectedCase(context, i)?.case || inferSyntacticCase(tokens, i)?.case || 'nominative';
    const caseMismatch = Boolean(dem.caseForm && !caseMatches(dem.caseForm, caseValue));
    const nounObservedCase = observedCase(noun);
    const nounCaseMismatch = Boolean(nounObservedCase && !caseMatches(nounObservedCase, caseValue));
    if (!mismatch.length && !animacyMismatch && !caseMismatch && !nounCaseMismatch) continue;

    if (mismatch.length || animacyMismatch || caseMismatch) {
      const replacement = rebuildToken(tokens[i], recommendDemonstrative(target, caseValue));
      out.push(findingFromSpan(context, {
        startToken: tokens[i], replacement,
        ruleId: 'DEMONSTRATIVE_DEPENDENT_V18', type: 'نحوي', classification: 'dependent', confidence: 0.96,
        explanation: animacyMismatch || target.agreementException === 'nonhuman-plural'
          ? 'جمع غير العاقل يعامل معاملة المفرد المؤنث في الإشارة والمطابقة.'
          : 'اسم الإشارة يطابق المشار إليه، وتتغير صيغة المثنى بحسب الرفع أو النصب والجر.',
        evidence: ['demonstrative-apposition', ...mismatch.map(x => `mismatch:${x}`), animacyMismatch ? 'animacy-mismatch' : null].filter(Boolean),
        safe: false,
        metadata: {nounIndex: i + 1, mismatch, animacyMismatch, expectedCase: caseValue}
      }));
    }
    if (nounCaseMismatch) {
      out.push(findingFromSpan(context, {
        startToken: noun,
        replacement: inflectTokenCase(noun, caseValue, {onlyWhenVisible: true}),
        ruleId: 'DEMONSTRATIVE_APPOSITION_CASE_V18', type: 'نحوي', classification: 'dependent', confidence: 0.95,
        explanation: 'المشار إليه بعد اسم الإشارة يعرب بدلًا أو عطف بيان فيتبعه في الحالة الإعرابية.',
        evidence: ['demonstrative-apposition-case', `demonstrative:${tokens[i].surface}`],
        safe: false,
        metadata: {demonstrativeIndex: i, expectedCase: caseValue, observedCase: nounObservedCase}
      }));
    }
  }
  return out;
}

function emphasisDependents(context) {
  const out = [];
  const {tokens} = context;
  for (let i = 1; i < tokens.length; i += 1) {
    const token = tokens[i];
    const core = token.morph.core;
    if (!['نفس', 'عين', 'كل', 'كلا', 'كلتا', 'كلي', 'كلتي', 'أجمع'].includes(core) || !token.morph.segments.enclitic) continue;
    const antecedent = tokens[i - 1];
    if (!isNominal(antecedent) || antecedent.sentence !== token.sentence) continue;
    const expected = roleExpectedCase(context, i - 1)?.case || inferSyntacticCase(tokens, i - 1)?.case || observedCase(antecedent);
    if (!expected) continue;

    let replacement = null;
    if (core === 'كلا' && expected !== 'nominative') replacement = rebuildToken(token, 'كلي');
    else if (core === 'كلتا' && expected !== 'nominative') replacement = rebuildToken(token, 'كلتي');
    else if (core === 'كلي' && expected === 'nominative') replacement = rebuildToken(token, 'كلا');
    else if (core === 'كلتي' && expected === 'nominative') replacement = rebuildToken(token, 'كلتا');
    else {
      const observed = observedCase(token);
      if (observed && !caseMatches(observed, expected)) replacement = inflectTokenCase(token, expected, {onlyWhenVisible: true});
    }
    if (!replacement || replacement === token.clean) continue;

    out.push(findingFromSpan(context, {
      startToken: token, replacement,
      ruleId: 'EMPHASIS_DEPENDENT_CASE_V18', type: 'نحوي', classification: 'dependent', confidence: 0.94,
      explanation: 'التوكيد المعنوي يتبع المؤكد في الإعراب، وتعرب «كلا/كلتا» إعراب المثنى عند إضافتهما إلى الضمير.',
      evidence: ['emphasis-with-attached-pronoun', `antecedent:${antecedent.surface}`],
      safe: false,
      metadata: {antecedentIndex: i - 1, expectedCase: expected}
    }));
  }
  return out;
}

function appositionDependents(context) {
  const out = [];
  const {tokens} = context;
  for (let i = 1; i < tokens.length; i += 1) {
    const proper = tokens[i];
    const head = tokens[i - 1];
    if (!PROPER_NAMES.has(proper.morph.core) || !isNominal(head) || head.sentence !== proper.sentence) continue;
    const expected = roleExpectedCase(context, i - 1)?.case || inferSyntacticCase(tokens, i - 1)?.case || observedCase(head);
    const observed = observedCase(proper);
    if (!expected || !observed || caseMatches(observed, expected)) continue;
    out.push(findingFromSpan(context, {
      startToken: proper,
      replacement: inflectTokenCase(proper, expected, {onlyWhenVisible: true, noTanwin: proper.morph.diptote?.isDiptote}),
      ruleId: 'APPOSITION_DEPENDENT_CASE_V18', type: 'نحوي', classification: 'dependent', confidence: 0.88,
      explanation: 'البدل أو عطف البيان يتبع المبدل منه في الإعراب عند ثبوت العلاقة الاسمية.',
      evidence: ['adjacent-proper-name', `head:${head.surface}`],
      safe: false,
      metadata: {headIndex: i - 1, expectedCase: expected}
    }));
  }
  return out;
}

function dependentsRule(context) {
  return [
    ...adjectiveDependents(context),
    ...demonstrativeDependents(context),
    ...emphasisDependents(context),
    ...appositionDependents(context)
  ];
}


/* ===== MODULE: src/rules/syntax-context.js ===== */
function syntaxCaseFinding(context, token, expected, ruleId, explanation, evidence, confidence = 0.96) {
  const observed = observedCase(token);
  if (!observed || caseMatches(observed, expected)) return null;
  return findingFromSpan(context, {
    startToken: token,
    replacement: inflectTokenCase(token, expected, {onlyWhenVisible: true}),
    ruleId, type: 'نحوي', classification: 'syntax', confidence,
    explanation, evidence, safe: false,
    metadata: {observedCase: observed, expectedCase: expected, relationConfidence: confidence}
  });
}

function predicateAgreementFinding(context, subject, predicate, expectedCase, ruleId, evidence, confidence = 0.95) {
  const adjective = bestAdjective(predicate);
  if (!adjective) return null;
  const target = effectiveAgreement(tokenFeatures(subject));
  const actual = tokenFeatures(predicate);
  const mismatch = featuresMatch(target, actual, ['gender', 'number']);
  const observed = observedCase(predicate);
  const caseMismatch = Boolean(observed && !caseMatches(observed, expectedCase));
  if (!mismatch.length && !caseMismatch) return null;
  return findingFromSpan(context, {
    startToken: predicate,
    replacement: inflectAdjectiveToken(predicate, target, expectedCase, {
      forceVisibleCase: Boolean(predicate.visibleCase || caseMismatch)
    }),
    ruleId, type: 'نحوي', classification: 'syntax', confidence,
    explanation: 'الخبر يطابق المبتدأ أو اسم الناسخ في الجنس والعدد، وتتحدد حالته الإعرابية بحسب العامل الناسخ.',
    evidence: [...evidence, ...mismatch.map(x => `mismatch:${x}`), `expected-case:${expectedCase}`],
    safe: false,
    metadata: {subjectIndex: subject.index, predicateIndex: predicate.index, mismatch, expectedCase, relationConfidence: confidence}
  });
}

function syntaxContextRule(context) {
  const out = [];
  const {tokens} = context;

  for (let i = 0; i < tokens.length; i += 1) {
    const core = tokens[i].morph.core;
    const {end} = sentenceBounds(tokens, i);

    if (KANA_SURFACES.has(core)) {
      const subjectIndex = nextUngovernedNominal(tokens, i + 1, {end});
      if (subjectIndex < 0) continue;
      const subject = tokens[subjectIndex];
      const subjectCase = syntaxCaseFinding(
        context, subject, 'nominative', 'KANA_SUBJECT_CASE_V18',
        'اسم كان وأخواتها مرفوع.', ['kana-sister', core], 0.97
      );
      if (subjectCase) out.push(subjectCase);
      const predicateIndex = nextMatrixNominal(context, subjectIndex + 1, end);
      if (predicateIndex >= 0) {
        const predicate = predicateAgreementFinding(
          context, subject, tokens[predicateIndex], 'accusative', 'KANA_PREDICATE_V18',
          ['kana-predicate', core], 0.965
        );
        if (predicate) out.push(predicate);
      }
      continue;
    }

    if (INNA_PARTICLES.has(core)) {
      const subjectIndex = nextUngovernedNominal(tokens, i + 1, {end});
      if (subjectIndex < 0) continue;
      const subject = tokens[subjectIndex];
      const subjectCase = syntaxCaseFinding(
        context, subject, 'accusative', 'INNA_SUBJECT_CASE_V18',
        'اسم إن وأخواتها منصوب.', ['inna-sister', core], 0.97
      );
      if (subjectCase) out.push(subjectCase);
      const predicateIndex = nextMatrixNominal(context, subjectIndex + 1, end);
      if (predicateIndex >= 0) {
        const predicate = predicateAgreementFinding(
          context, subject, tokens[predicateIndex], 'nominative', 'INNA_PREDICATE_V18',
          ['inna-predicate', core], 0.96
        );
        if (predicate) out.push(predicate);
      }
    }
  }

  // جملة اسمية مباشرة محافظة: معرفة/ضمير ثم خبر صفة نكرة، بلا ناسخ أو فعل.
  for (const group of context.sentences) {
    const subject = group[0];
    const predicate = group[1];
    if (!subject || !predicate || !isStrongNominalCandidate(subject) || !bestAdjective(predicate)) continue;
    if (!(subject.morph.definite || subject.morph.nominal?.pos === 'pronoun')) continue;
    if (predicate.morph.definite || predicate.morph.segments?.conjunction || predicate.morph.segments?.preposition) continue;
    const finding = predicateAgreementFinding(
      context, subject, predicate, 'nominative', 'NOMINAL_PREDICATE_AGREEMENT_V18',
      ['direct-nominal-sentence', 'definite-subject', 'indefinite-predicate'], 0.95
    );
    if (finding) out.push(finding);
  }
  return out;
}


/* ===== MODULE: src/rules/five-verbs.js ===== */
function fiveVerbObliqueForm(core) {
  if (/ون$/u.test(core)) return core.replace(/ون$/u, 'وا');
  if (/ان$/u.test(core)) return core.replace(/ان$/u, 'ا');
  if (/ين$/u.test(core)) return core.replace(/ين$/u, 'ي');
  return null;
}

function fiveVerbsRule(context) {
  const out = [];
  const {tokens} = context;
  const fivePersons = new Set(['2fs', '2du', '2mp', '3dm', '3df', '3mp']);
  for (let i = 1; i < tokens.length; i += 1) {
    const verb = bestVerb(tokens[i]);
    if (!verb || verb.tense !== 'present' || !fivePersons.has(verb.personCode)) continue;
    const governor = tokens[i - 1].morph.core;
    const mood = SUBJUNCTIVE_PARTICLES.has(governor)
      ? 'subjunctive' : (JUSSIVE_PARTICLES.has(governor) ? 'jussive' : null);
    if (!mood) continue;
    const desired = fiveVerbObliqueForm(tokens[i].morph.core);
    if (!desired || desired === tokens[i].morph.core) continue;
    out.push(findingFromSpan(context, {
      startToken: tokens[i], replacement: rebuildToken(tokens[i], desired),
      ruleId: mood === 'subjunctive' ? 'FIVE_VERBS_SUBJUNCTIVE_V18' : 'FIVE_VERBS_JUSSIVE_V18',
      type: 'صرفي', classification: 'five-verbs', confidence: 0.99,
      explanation: mood === 'subjunctive'
        ? 'الأفعال الخمسة تنصب بحذف النون بعد أداة النصب، وتثبت ألف التفريق بعد واو الجماعة.'
        : 'الأفعال الخمسة تجزم بحذف النون بعد أداة الجزم، وتثبت ألف التفريق بعد واو الجماعة.',
      evidence: ['five-verbs', `governor:${governor}`, `person:${verb.personCode}`, 'verified-verb-paradigm'],
      safe: false,
      metadata: {mood, governorIndex: i - 1, personCode: verb.personCode, relationConfidence: 0.99}
    }));
  }
  return out;
}


/* ===== MODULE: src/pipeline/rules.js ===== */
const RULE_PIPELINE = Object.freeze([
  {id: 'orthography', run: orthographyRule},
  {id: 'relativeClauses', run: relativeClausesRule},
  {id: 'weakVerbs', run: weakVerbAgreementRule},
  {id: 'fiveNouns', run: fiveNounsRule},
  {id: 'diptotes', run: diptoteRule},
  {id: 'numbers', run: numberRule},
  {id: 'exception', run: exceptionRule},
  {id: 'hal', run: halRule},
  {id: 'tamyiz', run: tamyizRule},
  {id: 'conjunction', run: conjunctionRule},
  {id: 'dependents', run: dependentsRule},
  {id: 'syntaxContext', run: syntaxContextRule},
  {id: 'fiveVerbs', run: fiveVerbsRule},
  {id: 'wawAljamaa', run: wawAljamaaRule},
  {id: 'contextualTaa', run: contextualTaaRule},
  {id: 'punctuation', run: punctuationRule}
]);

function pipelineDescription() {
  return RULE_PIPELINE.map((item, order) => ({order: order + 1, id: item.id, enabledByDefault: true}));
}


/* ===== MODULE: src/pipeline/context-validator.js ===== */
const GRAMMAR_CLASSES = new Set([
  'morphology', 'syntax', 'agreement', 'case', 'number', 'diptote',
  'exception', 'hal', 'tamyiz', 'coordination', 'dependent', 'five-verbs',
  'five-nouns', 'relative-clause'
]);

function tokenAtOriginalSpan(context, finding) {
  return context.tokens.find(t => t.originalStart <= finding.index && t.originalEnd >= finding.index + finding.length)
    || context.tokens.find(t => t.originalStart === finding.index)
    || null;
}

function contextValidateFinding(context, finding) {
  const validation = {valid: true, checks: [], penalties: [], originalConfidence: finding.confidence};
  const metadata = finding.metadata || {};
  const replacement = finding.replacement == null ? null : String(finding.replacement);

  if (replacement != null && replacement === finding.original) {
    validation.valid = false;
    validation.reason = 'replacement-does-not-change-surface';
  }

  if (finding.ruleId === 'NUMBER_ONE_TWO_AGREEMENT_V18') {
    const numberToken = tokenAtOriginalSpan(context, finding);
    const counted = context.tokens[metadata.countedIndex];
    const coordinated = numberToken ? parseCoordinatedNumber(context.tokens, numberToken.index) : null;
    if (metadata.direction !== 'noun-before-number' || !counted
        || counted.index !== numberToken?.index - 1 || coordinated) {
      validation.valid = false;
      validation.reason = 'unresolved-one-two-direction';
    } else {
      validation.checks.push('number-direction-confirmed', 'adjacent-counted-noun-confirmed');
    }
  }

  if (finding.classification === 'number' && Number.isInteger(metadata.countedIndex)) {
    const counted = context.tokens[metadata.countedIndex];
    if (!counted || !isStrongNominalCandidate(counted)) {
      validation.valid = false;
      validation.reason = 'counted-noun-not-confirmed';
    } else {
      validation.checks.push('counted-noun-confirmed');
    }
  }

  if (finding.ruleId === 'WEAK_VERB_AGREEMENT_V18') {
    const verbToken = tokenAtOriginalSpan(context, finding);
    const verb = verbToken && bestVerb(verbToken);
    const relation = verbToken && resolveSubjectV2(context, verbToken.index, verb, {
      allowPreverbal: !verbToken.morph.segments?.conjunction
    });
    if (!relation || relation.subjectIndex !== metadata.subjectIndex || relation.order !== metadata.subjectOrder) {
      validation.valid = false;
      validation.reason = 'subject-revalidation-failed';
    } else {
      validation.checks.push('subject-revalidated', `order:${relation.order}`);
      metadata.relationConfidence = Math.min(metadata.relationConfidence || 1, relation.confidence);
    }
  }

  const token = tokenAtOriginalSpan(context, finding);
  const morphConfidence = Math.min(token?.morph?.confidence || 0.75, token?.morph?.posConfidence || 1);
  const relationConfidence = metadata.relationConfidence
    || (finding.evidence?.some(x => String(x).includes('visible')) ? 0.98 : null)
    || (finding.classification === 'orthographic' || finding.classification === 'orthographic-phrase' ? 0.999 : 0.9);
  const posKinds = new Set((token?.morph?.candidates || []).map(x => x.pos));
  const ambiguityPenalty = GRAMMAR_CLASSES.has(finding.classification) && posKinds.size > 1 ? 0.025 : 0;
  if (ambiguityPenalty) validation.penalties.push('multi-pos-ambiguity');

  if (GRAMMAR_CLASSES.has(finding.classification)) {
    finding.confidence = Math.min(
      0.985,
      Math.max(0, 0.60 * finding.confidence + 0.25 * relationConfidence + 0.15 * morphConfidence - ambiguityPenalty)
    );
  }

  finding.metadata = metadata;
  finding.contextValidation = validation;
  finding.requiresReview = GRAMMAR_CLASSES.has(finding.classification) || finding.confidence < 0.95;
  finding.recommendedAction = finding.requiresReview ? 'manual-review' : 'apply';
  finding.confidenceBand = confidenceBand(finding.confidence).code;
  finding.confidenceLabel = confidenceBand(finding.confidence).label;
  return validation.valid;
}

function validateAndRerankFindings(context, findings) {
  const accepted = [];
  const rejected = [];
  for (const finding of deduplicateFindings(findings)) {
    if (contextValidateFinding(context, finding)) accepted.push(finding);
    else rejected.push(finding);
  }

  // عند وجود اقتراحين مختلفين للمقطع نفسه نعرض الأقوى فقط، ونمنع قرارًا ملتبسًا.
  const groups = new Map();
  for (const item of accepted) {
    const key = `${item.index}|${item.length}`;
    const list = groups.get(key) || [];
    list.push(item);
    groups.set(key, list);
  }
  const unambiguous = [];
  for (const list of groups.values()) {
    const replacements = new Set(list.map(x => x.replacement));
    if (replacements.size <= 1) {
      unambiguous.push(...list);
      continue;
    }
    list.sort((a, b) => b.confidence - a.confidence);
    const winner = list[0];
    winner.requiresReview = true;
    winner.recommendedAction = 'manual-review';
    winner.contextValidation.checks.push('conflicting-alternative-retained-as-review');
    unambiguous.push(winner);
    for (const loser of list.slice(1)) {
      loser.contextValidation.valid = false;
      loser.contextValidation.reason = 'conflicting-lower-ranked-alternative';
      rejected.push(loser);
    }
  }
  return {accepted: unambiguous.sort((a, b) => a.index - b.index || b.confidence - a.confidence), rejected};
}


/* ===== MODULE: src/pipeline/rank.js ===== */
const AUTOMATIC = new Set(['orthographic', 'orthographic-phrase', 'spacing', 'punctuation']);

function rankAndClassify(findings, options, context) {
  const checked = validateAndRerankFindings(context, findings);
  const visible = [];
  const suppressed = [...checked.rejected];

  for (const finding of checked.accepted) {
    const automaticClass = AUTOMATIC.has(finding.classification);
    finding.autoCorrectable = Boolean(
      options.safeMode
      && automaticClass
      && finding.safeCandidate
      && !finding.requiresReview
      && finding.confidence >= options.autoCorrectThreshold
      && finding.replacement != null
    );

    if (finding.confidence < options.possibleThreshold || (!options.showPotential && finding.confidence < options.highThreshold)) {
      suppressed.push(finding);
    } else {
      visible.push(finding);
    }
  }

  // لا نطبق تعديلين آليين متداخلين؛ الأطول ثم الأعلى ثقة.
  const automatic = visible.filter(x => x.autoCorrectable).sort((a, b) => b.length - a.length || b.confidence - a.confidence);
  const occupied = [];
  for (const item of automatic) {
    const end = item.index + item.length;
    if (occupied.some(span => item.index < span.end && end > span.start)) item.autoCorrectable = false;
    else occupied.push({start: item.index, end});
  }

  return {visible: visible.slice(0, options.maxFindings), suppressed, all: [...checked.accepted, ...checked.rejected]};
}


/* ===== MODULE: src/pipeline/analyze.js ===== */
function statistics(findings, suppressed) {
  const byClassification = {};
  const byType = {};
  for (const item of findings) {
    byClassification[item.classification] = (byClassification[item.classification] || 0) + 1;
    byType[item.type] = (byType[item.type] || 0) + 1;
  }
  return {
    total: findings.length,
    autoCorrectable: findings.filter(x => x.autoCorrectable).length,
    suppressed: suppressed.length,
    byClassification,
    byType
  };
}

function createContext(input, options = {}) {
  const merged = mergeOptions(options);
  const normalization = normalizeWithMap(input);
  const rawTokens = tokenize(normalization);
  const tokens = contextualPOSDisambiguation(analyzeTokens(rawTokens));
  const context = {
    original: normalization.original,
    text: normalization.text,
    normalization,
    tokens,
    sentences: sentenceGroups(tokens),
    options: merged,
    syntax: null
  };
  context.syntax = analyzeNestedSentences(context);
  context.syntax.roles = resolveNounRoles(context);
  return context;
}

function analyze(input, options = {}) {
  const context = createContext(input, options);
  const rawFindings = [];
  const diagnostics = [];

  for (const stage of RULE_PIPELINE) {
    if (context.options.rules[stage.id] === false) continue;
    try {
      const stageFindings = stage.run(context) || [];
      rawFindings.push(...stageFindings);
      diagnostics.push({rule: stage.id, ok: true, findings: stageFindings.length});
    } catch (error) {
      diagnostics.push({rule: stage.id, ok: false, error: error.message});
      if (context.options.throwOnRuleError) throw error;
    }
  }

  const ranked = rankAndClassify(rawFindings, context.options, context);
  const corrected = applyFindings(context.original, ranked.visible);
  const result = {
    engine: META,
    version: META.version,
    original: context.original,
    normalized: context.text,
    corrected,
    findings: ranked.visible,
    errors: ranked.visible,
    suggestions: ranked.visible.filter(x => !x.autoCorrectable),
    stats: statistics(ranked.visible, ranked.suppressed)
  };

  if (context.options.debug) {
    result.analysis = {
      tokens: context.tokens,
      sentences: context.sentences.map(group => group.map(x => x.index)),
      clauses: context.syntax.clauses,
      roles: context.syntax.roles,
      suppressed: ranked.suppressed,
      diagnostics
    };
  }
  return result;
}

function parse(input, options = {}) {
  const context = createContext(input, options);
  return {
    version: META.version,
    original: context.original,
    normalized: context.text,
    tokens: context.tokens,
    sentences: context.sentences.map(group => ({start: group[0]?.index ?? 0, end: (group.at(-1)?.index ?? -1) + 1})),
    clauses: context.syntax.clauses,
    roles: context.syntax.roles
  };
}


/* ===== MODULE: src/validation/corpus.js ===== */
const BASE_GOLD_CORPUS = Object.freeze([
  {id: 'orth-inshallah', text: 'انشاء الله املاء الى المدرسه', rules: ['ORTHOGRAPHY_V18:انشاء الله', 'ORTHOGRAPHY_V18:املاء', 'ORTHOGRAPHY_V18:الى', 'ORTHOGRAPHY_V18:المدرسه'], corrected: 'إن شاء الله إملاء إلى المدرسة'},

  /* ── الدفعة 1.1: اختبارات القواعد الإملائية الجديدة ── */
  {id: 'orth-hamza-verb', text: 'اخذ الطالب الكتاب', rules: ['ORTHOGRAPHY_V18:اخذ'], corrected: 'أخذ الطالب الكتاب'},
  {id: 'orth-hamza-verbs-multi', text: 'اكل الولد التفاح ثم ارسل رساله', rules: ['ORTHOGRAPHY_V18:اكل', 'ORTHOGRAPHY_V18:ارسل', 'ORTHOGRAPHY_V18:رساله'], corrected: 'أكل الولد التفاح ثم أرسل رسالة'},
  {id: 'orth-hamza-nouns', text: 'وصلت اخبار عن اعمال الخير', rules: ['ORTHOGRAPHY_V18:اخبار', 'ORTHOGRAPHY_V18:اعمال'], corrected: 'وصلت أخبار عن أعمال الخير'},
  {id: 'orth-hamza-superfluous', text: 'إستخدام الحاسوب مفيد. إختيار الكلمات مهم.', rules: ['ORTHOGRAPHY_V18:إستخدام', 'ORTHOGRAPHY_V18:إختيار'], corrected: 'استخدام الحاسوب مفيد. اختيار الكلمات مهم.'},
  {id: 'orth-hamza-final', text: 'هذا عبئ ثقيل', rules: ['ORTHOGRAPHY_V18:عبئ'], corrected: 'هذا عبء ثقيل'},
  {id: 'orth-taa-batch', text: 'كتبت حكومه رساله الى وزاره الثقافه', rules: ['ORTHOGRAPHY_V18:حكومه', 'ORTHOGRAPHY_V18:رساله', 'ORTHOGRAPHY_V18:الى', 'ORTHOGRAPHY_V18:وزاره', 'ORTHOGRAPHY_V18:الثقافه'], corrected: 'كتبت حكومة رسالة إلى وزارة الثقافة'},
  {id: 'orth-ya-alif', text: 'لدي موعد في منتدي ثقافي', rules: ['ORTHOGRAPHY_V18:لدي', 'ORTHOGRAPHY_V18:منتدي'], corrected: 'لدى موعد في منتدى ثقافي'},
  {id: 'orth-pronouns', text: 'انت هنا. انا هنا. انتم هنا.', rules: ['ORTHOGRAPHY_V18:انت', 'ORTHOGRAPHY_V18:انا', 'ORTHOGRAPHY_V18:انتم'], corrected: 'أنت هنا. أنا هنا. أنتم هنا.'},
  {id: 'orth-particles', text: 'جاء الان الذى فاز', rules: ['ORTHOGRAPHY_V18:الان', 'ORTHOGRAPHY_V18:الذى'], corrected: 'جاء الآن الذي فاز'},
  {id: 'orth-la-phrases', text: 'لابد من الصبر. ولا شك في ذالك', rules: ['ORTHOGRAPHY_V18:لابد', 'ORTHOGRAPHY_V18:ذالك'], corrected: 'لا بد من الصبر. ولا شك في ذلك'},
  {id: 'orth-bidhnillah', text: 'باذن الله ننجح', rules: ['ORTHOGRAPHY_V18:باذن الله'], corrected: 'بإذن الله ننجح'},
  {id: 'orth-review-jumlah', text: 'كتب الطالب جمله جيده', rules: ['ORTHOGRAPHY_V18:جمله']},

  /* ── الدفعة 2: اختبارات واو الجماعة والسوابق واللواحق والترقيم ── */
  {id: 'waw-jamaa-list', text: 'هم كتبو الدرس', rules: ['ORTHOGRAPHY_V18:كتبو'], corrected: 'هم كتبوا الدرس'},
  {id: 'waw-jamaa-hamza', text: 'اخذوا الكتاب', rules: ['ORTHOGRAPHY_V18:اخذوا'], corrected: 'أخذوا الكتاب'},
  {id: 'waw-jamaa-pattern', text: 'العمال درسو بجد', rules: ['WAW_ALJAMAA_V18']},
  {id: 'taa-al-prefix', text: 'شاهدت الصوره', rules: ['ORTHOGRAPHY_V18:الصوره'], corrected: 'شاهدت الصورة'},
  {id: 'verb-suffix-t', text: 'ارسلت رساله', rules: ['ORTHOGRAPHY_V18:ارسلت', 'ORTHOGRAPHY_V18:رساله'], corrected: 'أرسلت رسالة'},
  {id: 'verb-suffix-wa', text: 'اكدوا الخبر', rules: ['ORTHOGRAPHY_V18:اكدوا'], corrected: 'أكدوا الخبر'},
  {id: 'tamannayt', text: 'اتمنيت النجاح', rules: ['ORTHOGRAPHY_V18:اتمنيت'], corrected: 'تمنيت النجاح'},
  {id: 'punct-space-before', text: 'مرحبا ، كيف حالك ؟', rules: ['PUNCTUATION_V18:space-before', 'PUNCTUATION_V18:space-before'], corrected: 'مرحبا، كيف حالك؟'},
  {id: 'punct-space-after', text: 'نجح الطالب،وهو سعيد', rules: ['PUNCTUATION_V18:space-after'], corrected: 'نجح الطالب، وهو سعيد'},
  {id: 'punct-repeat', text: 'هل نجحت ؟؟', rules: ['PUNCTUATION_V18:space-before', 'PUNCTUATION_V18:repeated'], corrected: 'هل نجحت؟؟'},
  {id: 'contextual-taa', text: 'شاهدت صوره رائعه', rules: ['CONTEXTUAL_TAA_V18:صوره']},
  {id: 'weak-hollow-qama', text: 'قامت الطالب', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['قام']},
  {id: 'weak-defective-nasiya', text: 'الطالبة نسي', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['نسيت']},

  {id: 'weak-hollow-gender-m', text: 'قالت الطالب', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['قال']},
  {id: 'weak-hollow-gender-f', text: 'قال الطالبة', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['قالت']},
  {id: 'weak-hollow-svo-dual', text: 'الطالبان قال', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['قالا']},
  {id: 'weak-defective-svo-fp', text: 'الطالبات رمى', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['رمين']},
  {id: 'weak-waw-gender', text: 'دعا الطالبتان الطالب', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['دعت']},
  {id: 'weak-ya-gender', text: 'باع الطالبة الكتاب', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['باعت']},
  {id: 'weak-hamzated', text: 'جاء الطالبة', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['جاءت']},

  {id: 'diptote-prep-name', text: 'مررت بأحمدٍ', rules: ['DIPTOTE_GENITIVE_FATHA_V18'], replacements: ['بأحمدَ']},
  {id: 'diptote-tanwin-object', text: 'رأيت أحمدًا', rules: ['DIPTOTE_TANWIN_V18'], replacements: ['أحمدَ']},
  {id: 'diptote-restored-al', text: 'مررت بالمساجدَ', rules: ['DIPTOTE_RESTORED_KASRA_V18'], replacements: ['بالمساجدِ']},
  {id: 'diptote-pattern', text: 'مررت بمفاتيحٍ', rules: ['DIPTOTE_GENITIVE_FATHA_V18'], replacements: ['بمفاتيحَ']},

  {id: 'number-polarity-m', text: 'ثلاث طلاب', rules: ['NUMBER_POLARITY_V18'], replacements: ['ثلاثة']},
  {id: 'number-polarity-f', text: 'ثلاثة طالبات', rules: ['NUMBER_POLARITY_V18'], replacements: ['ثلاث']},
  {id: 'number-counted-case', text: 'ثلاثة معلمون', rules: ['NUMBER_COUNTED_NOUN_V18'], replacements: ['معلمين']},
  {id: 'number-counted-plural', text: 'ثلاثة طالب', rules: ['NUMBER_COUNTED_NOUN_V18'], replacements: ['طلاب']},
  {id: 'number-eleven-gender', text: 'أحد عشر طالبةً', rules: ['NUMBER_COMPOUND_AGREEMENT_V18'], replacements: ['إحدى عشرة']},
  {id: 'number-thirteen-gender', text: 'ثلاث عشرة طالبًا', rules: ['NUMBER_COMPOUND_AGREEMENT_V18'], replacements: ['ثلاثة عشر']},
  {id: 'number-eleven-tamyiz', text: 'أحد عشر طلاب', rules: ['NUMBER_COUNTED_NOUN_V18'], replacements: ['طالب']},
  {id: 'number-twelve-case', text: 'رأيت اثنا عشر طالبًا', rules: ['NUMBER_TWELVE_CASE_V18'], replacements: ['اثني عشر']},
  {id: 'number-hundred-tamyiz', text: 'مئة طلاب', rules: ['NUMBER_COUNTED_NOUN_V18'], replacements: ['طالب']},
  {id: 'number-one-agreement', text: 'طالب واحدة', rules: ['NUMBER_ONE_TWO_AGREEMENT_V18'], replacements: ['واحد']},

  {id: 'exception-illa', text: 'حضر الطلاب إلا المعلمون', rules: ['EXCEPTION_ILLA_CASE_V18'], replacements: ['المعلمين']},
  {id: 'exception-ghayr', text: 'حضر الطلاب غير المعلمون', rules: ['EXCEPTION_GHAYR_IDAFA_V18'], replacements: ['المعلمين']},
  {id: 'exception-ma-ada', text: 'حضر الطلاب ما عدا المعلمون', rules: ['EXCEPTION_MA_ADA_CASE_V18'], replacements: ['المعلمين']},

  {id: 'hal-case-singular', text: 'عاد الطالب مسرورٌ', rules: ['HAL_CASE_V18'], replacements: ['مسرورًا']},
  {id: 'hal-agreement', text: 'عادت الطالبة مسرورًا', rules: ['HAL_AGREEMENT_V18'], replacements: ['مسرورةً']},
  {id: 'hal-case-plural', text: 'عاد الطلاب مسرورون', rules: ['HAL_CASE_V18'], replacements: ['مسرورين']},

  {id: 'tamyiz-verb', text: 'ازداد الطالب علمٌ', rules: ['TAMYIZ_CASE_V18'], replacements: ['علمًا']},
  {id: 'tamyiz-comparative', text: 'هو أكثر علمٌ', rules: ['TAMYIZ_CASE_V18'], replacements: ['علمًا']},

  {id: 'conjunction-nominative', text: 'حضر الطالبان والمعلمين', rules: ['CONJUNCTION_CASE_V18'], replacements: ['والمعلمان']},
  {id: 'conjunction-genitive', text: 'مررت بالطالبين والمعلمان', rules: ['CONJUNCTION_CASE_V18'], replacements: ['والمعلمين']},

  {id: 'dependent-adjective', text: 'الطالبة المجتهد', rules: ['ADJECTIVE_DEPENDENT_AGREEMENT_V18'], replacements: ['المجتهدة']},
  {id: 'dependent-nonhuman-adjective', text: 'كتب جديد', rules: ['ADJECTIVE_DEPENDENT_AGREEMENT_V18'], replacements: ['جديدة']},
  {id: 'dependent-demonstrative', text: 'هؤلاء كتب جديدة', rules: ['DEMONSTRATIVE_DEPENDENT_V18'], replacements: ['هذه']},
  {id: 'dependent-demonstrative-case', text: 'بهذان الطالبان', rules: ['DEMONSTRATIVE_DEPENDENT_V18', 'DEMONSTRATIVE_APPOSITION_CASE_V18'], replacements: ['بهذين', 'الطالبين']},
  {id: 'dependent-emphasis-nom', text: 'حضر الطالبان كليهما', rules: ['EMPHASIS_DEPENDENT_CASE_V18'], replacements: ['كلاهما']},
  {id: 'dependent-emphasis-acc', text: 'رأيت الطالبين كلاهما', rules: ['EMPHASIS_DEPENDENT_CASE_V18'], replacements: ['كليهما']},
  {id: 'dependent-apposition', text: 'جاء الطالب محمدًا', rules: ['APPOSITION_DEPENDENT_CASE_V18'], replacements: ['محمدٌ']},

  /* ── 18.3: اختبارات طبقة السياق والعدد والفاعل والأفعال الخمسة ── */
  {id: 'context-multi-error-number-subject', text: 'حضر اثنا عشر طالبةً إلى القاعة.', rules: ['WEAK_VERB_AGREEMENT_V18', 'NUMBER_COMPOUND_AGREEMENT_V18'], replacements: ['حضرت', 'اثنتا عشرة']},
  {id: 'number-coordinated-gender', text: 'في المكتبة واحدة وعشرون كتابًا.', rules: ['NUMBER_COORDINATED_AGREEMENT_V18'], replacements: ['واحد وعشرون']},
  {id: 'subject-after-pp', text: 'حضر إلى المدرسة مبكرًا الطالبات.', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['حضرت']},
  {id: 'subject-pronoun-svo', text: 'هي يكتب الدرس.', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['تكتب']},
  {id: 'subject-new-conjoined-clause', text: 'حضر الطلاب ونجح الطالبات.', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['ونجحت']},
  {id: 'five-verbs-subjunctive', text: 'لن يدرسون.', rules: ['FIVE_VERBS_SUBJUNCTIVE_V18'], replacements: ['يدرسوا']},
  {id: 'five-verbs-jussive', text: 'لم تدرسين.', rules: ['FIVE_VERBS_JUSSIVE_V18'], replacements: ['تدرسي']},
  {id: 'kana-dual-predicate', text: 'كان الطالبان مجتهدون.', rules: ['KANA_PREDICATE_V18'], replacements: ['مجتهدين']},
  {id: 'kana-feminine-plural-case', text: 'كانت الطالبات مجتهداتٌ.', rules: ['KANA_PREDICATE_V18'], replacements: ['مجتهداتٍ']},
  {id: 'inna-subject-case', text: 'إن الطالبُ مجتهدٌ.', rules: ['INNA_SUBJECT_CASE_V18'], replacements: ['الطالبَ']},
  {id: 'nominal-predicate-dual', text: 'الطالبان مجتهدون.', rules: ['NOMINAL_PREDICATE_AGREEMENT_V18'], replacements: ['مجتهدان']},

  /* ── 18.4: حالتا الحسم الأساسيتان في SubjectResolver 2.0 ── */
  {id: 'subject-resolver-2-wasala', text: 'وصلت الطلاب.', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['وصل']},
  {id: 'subject-resolver-2-yaktubu', text: 'يكتب الطالبة.', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['تكتب']}
]);

function generateV184GoldCorpus() {
  const tests = [];
  const add = (id, text, rules, replacements) => tests.push({id: `v184-${id}`, text, rules, replacements});

  // 30 اختبارًا للأسماء الخمسة: الإضافة إلى ضمير وإلى اسم ظاهر.
  for (const [lemma, forms] of Object.entries(FIVE_NOUN_BY_LEMMA)) {
    add(`five-pron-nom-${lemma}`, `جاء ${forms.accusative}ك.`, ['FIVE_NOUNS_CASE_V18'], [`${forms.nominative}ك`]);
    add(`five-pron-acc-${lemma}`, `رأيت ${forms.nominative}ك.`, ['FIVE_NOUNS_CASE_V18'], [`${forms.accusative}ك`]);
    add(`five-pron-gen-${lemma}`, `مررت ب${forms.nominative}ك.`, ['FIVE_NOUNS_CASE_V18'], [`ب${forms.genitive}ك`]);
    const added = lemma === 'ذو' ? 'علم' : 'الطالب';
    add(`five-idafa-nom-${lemma}`, `جاء ${forms.accusative} ${added}.`, ['FIVE_NOUNS_CASE_V18'], [forms.nominative]);
    add(`five-idafa-acc-${lemma}`, `رأيت ${forms.nominative} ${added}.`, ['FIVE_NOUNS_CASE_V18'], [forms.accusative]);
    add(`five-idafa-gen-${lemma}`, `مررت ب${forms.nominative} ${added}.`, ['FIVE_NOUNS_CASE_V18'], [`ب${forms.genitive}`]);
  }

  // 30 اختبارًا للموصول وصلته: 10 ملفات اتفاق × 3 أفعال مراجعة.
  const relativeProfiles = [
    {id: 'ms', lead: 'جاء الطالب', expectedRel: 'الذي', wrongRel: 'التي', expectedCode: '3ms', wrongCode: '3fs'},
    {id: 'fs', lead: 'جاءت الطالبة', expectedRel: 'التي', wrongRel: 'الذي', expectedCode: '3fs', wrongCode: '3ms'},
    {id: 'mdn', lead: 'جاء الطالبان', expectedRel: 'اللذان', wrongRel: 'التي', expectedCode: '3dm', wrongCode: '3fs'},
    {id: 'mda', lead: 'رأيت الطالبين', expectedRel: 'اللذين', wrongRel: 'اللذان', expectedCode: '3dm', wrongCode: '3ms'},
    {id: 'fdn', lead: 'جاءت الطالبتان', expectedRel: 'اللتان', wrongRel: 'الذي', expectedCode: '3df', wrongCode: '3ms'},
    {id: 'fda', lead: 'رأيت الطالبتين', expectedRel: 'اللتين', wrongRel: 'اللتان', expectedCode: '3df', wrongCode: '3fs'},
    {id: 'mp', lead: 'جاء الطلاب', expectedRel: 'الذين', wrongRel: 'اللاتي', expectedCode: '3mp', wrongCode: '3fp'},
    {id: 'fp', lead: 'جاءت الطالبات', expectedRel: 'اللاتي', wrongRel: 'الذين', expectedCode: '3fp', wrongCode: '3mp'},
    {id: 'nh-books', lead: 'وصلت الكتب', expectedRel: 'التي', wrongRel: 'الذين', expectedCode: '3fs', wrongCode: '3mp'},
    {id: 'nh-schools', lead: 'وصلت المدارس', expectedRel: 'التي', wrongRel: 'الذين', expectedCode: '3fs', wrongCode: '3mp'}
  ];
  for (const profile of relativeProfiles) {
    for (const lemma of ['نجح', 'حضر', 'وصل']) {
      add(`relative-${profile.id}-${lemma}`,
        `${profile.lead} ${profile.wrongRel} ${conjugateVerb(lemma, 'past', profile.wrongCode)}.`,
        ['RELATIVE_PRONOUN_AGREEMENT_V18', 'WEAK_VERB_AGREEMENT_V18'],
        [profile.expectedRel, conjugateVerb(lemma, 'past', profile.expectedCode)]);
    }
  }

  // 58 اختبارًا مولدًا لـ SubjectResolver 2.0، إضافة إلى حالتي الحسم الصريحتين في corpus الأساسي.
  const feminineSubjects = [
    'مديرة', 'طبيبة', 'عاملة', 'كاتبة', 'باحثة', 'موظفة', 'أستاذة', 'تلميذة', 'ممرضة', 'مترجمة',
    'جامعة', 'مكتبة', 'غرفة', 'صفحة', 'صحيفة', 'مجلة', 'قصة', 'رواية', 'مسابقة', 'قاعة'
  ];
  const masculineSubjects = [
    'مدير', 'طبيب', 'عامل', 'كاتب', 'باحث', 'أستاذ', 'تلميذ', 'دكتور', 'فنان', 'صديق',
    'فصل', 'مشروع', 'درس', 'واجب', 'امتحان', 'طريق', 'منزل', 'بيت', 'كرسي', 'حاسوب'
  ];
  feminineSubjects.slice(0, 19).forEach((noun, i) => add(`subject-vso-f-${i}`, `حضر ${noun}.`, ['WEAK_VERB_AGREEMENT_V18'], ['حضرت']));
  masculineSubjects.slice(0, 19).forEach((noun, i) => add(`subject-vso-m-${i}`, `حضرت ${noun}.`, ['WEAK_VERB_AGREEMENT_V18'], ['حضر']));
  const svoLemmas = [...masculineSubjects.slice(0, 10), ...feminineSubjects.slice(0, 10)];
  svoLemmas.forEach((lemma, i) => {
    const dual = nounForm(lemma, 'du', 'nominative');
    const gender = NOUN_LEMMAS[lemma].gender;
    add(`subject-svo-dual-${i}`, `ال${dual} حضر.`, ['WEAK_VERB_AGREEMENT_V18'], [gender === 'f' ? 'حضرتا' : 'حضرا']);
  });

  // 60 اختبار نعت من المعجم الموسع.
  const adjectiveFeminines = [...feminineSubjects, 'شركة', 'مؤسسة', 'دولة', 'قرية', 'طاولة', 'جائزة', 'نتيجة', 'فكرة', 'مشكلة', 'فرصة'];
  const adjectiveMasculines = [...masculineSubjects, 'هاتف', 'برنامج', 'نظام', 'محرك', 'نص', 'سؤال', 'جواب', 'قرار', 'اجتماع', 'مكتب'];
  adjectiveFeminines.forEach((noun, i) => add(`adj-f-${i}`, `ال${noun} الجديد.`, ['ADJECTIVE_DEPENDENT_AGREEMENT_V18'], ['الجديدة']));
  adjectiveMasculines.forEach((noun, i) => add(`adj-m-${i}`, `ال${noun} المجتهدة.`, ['ADJECTIVE_DEPENDENT_AGREEMENT_V18'], ['المجتهد']));

  // 20 اختبار خبر اسمي للمثنى من الجنسين.
  svoLemmas.forEach((lemma, i) => {
    const dual = nounForm(lemma, 'du', 'nominative');
    const gender = NOUN_LEMMAS[lemma].gender;
    add(`predicate-dual-${i}`, `ال${dual} حاضرون.`, ['NOMINAL_PREDICATE_AGREEMENT_V18'], [gender === 'f' ? 'حاضرتان' : 'حاضران']);
  });

  // 25 اختبار مخالفة العدد من 3 إلى 10 مع معدود صحيح.
  masculineSubjects.slice(0, 13).forEach((lemma, i) => {
    const plural = nounForm(lemma, 'pl', 'genitive');
    add(`number-polarity-m-${i}`, `ثلاث ${plural}.`, ['NUMBER_POLARITY_V18'], ['ثلاثة']);
  });
  feminineSubjects.slice(0, 12).forEach((lemma, i) => {
    const plural = nounForm(lemma, 'pl', 'genitive');
    add(`number-polarity-f-${i}`, `ثلاثة ${plural}.`, ['NUMBER_POLARITY_V18'], ['ثلاث']);
  });

  if (tests.length !== 223) throw new Error(`V18.4 gold generation mismatch: ${tests.length}`);
  return tests;
}

const V185_GOLD_REGRESSIONS = Object.freeze([
  // «ثلاث كتب» خطأ معياري؛ المسموح هو تصحيح العدد وحده، لا تحويل «كتب» إلى فعل.
  {id: 'v185-pos-thalath-kutub', text: 'ثلاث كتب', rules: ['NUMBER_POLARITY_V18'], replacements: ['ثلاثة']},
  {id: 'v185-adjective-oblique', text: 'الطالبين المجتهدان', rules: ['ADJECTIVE_DEPENDENT_CASE_V18'], replacements: ['المجتهدين']},
  {id: 'v185-subject-feminine-plural', text: 'يكتب المعلماتُ', rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['تكتب']},
  {id: 'v185-five-nouns-coordination', text: 'جاء أبيك وأخيك', rules: ['FIVE_NOUNS_CASE_V18', 'FIVE_NOUNS_CASE_V18'], replacements: ['أبوك', 'وأخوك']}
]);

const GOLD_CORPUS = Object.freeze([
  ...BASE_GOLD_CORPUS,
  ...generateV184GoldCorpus(),
  ...V185_GOLD_REGRESSIONS
]);

const BASE_NO_FALSE_POSITIVE_CORPUS = Object.freeze([
  ['nfp-weak-vso-m', 'قال الطالب.'],
  ['nfp-weak-vso-f', 'قالت الطالبة.'],
  ['nfp-weak-svo-dual', 'الطالبان قالا.'],
  ['nfp-weak-svo-fp', 'الطالبات رمين.'],
  ['nfp-defective', 'دعت الطالبة.'],
  ['nfp-transitive-hidden-subject-1', 'باع الطالبة.'],
  ['nfp-transitive-hidden-subject-2', 'دعا الطالبة.'],
  ['nfp-diptote-fatha', 'مررت بأحمدَ.'],
  ['nfp-diptote-al', 'مررت بالمساجدِ.'],
  ['nfp-diptote-idafa', 'صليت في مساجدِ المدينة.'],
  ['nfp-number-m', 'ثلاثة طلاب.'],
  ['nfp-number-f', 'ثلاث طالبات.'],
  ['nfp-number-case', 'ثلاثة معلمين.'],
  ['nfp-number-eleven', 'إحدى عشرة طالبةً.'],
  ['nfp-number-thirteen', 'ثلاثة عشر طالبًا.'],
  ['nfp-number-twelve-case', 'رأيت اثني عشر طالبًا.'],
  ['nfp-number-one', 'طالب واحد.'],
  ['nfp-exception-positive', 'حضر الطلاب إلا المعلمين.'],
  ['nfp-exception-negative-badal', 'ما حضر الطلاب إلا المعلمون.'],
  ['nfp-exception-negative-acc', 'ما حضر الطلاب إلا المعلمين.'],
  ['nfp-exception-empty', 'ما حضر إلا معلمٌ.'],
  ['nfp-exception-ghayr', 'حضر الطلاب غير المعلمين.'],
  ['nfp-hal-singular', 'عاد الطالب مسرورًا.'],
  ['nfp-hal-feminine', 'عادت الطالبة مسرورةً.'],
  ['nfp-hal-plural', 'عاد الطلاب مسرورين.'],
  ['nfp-tamyiz', 'ازداد الطالب علمًا.'],
  ['nfp-conjunction-nom', 'حضر الطالبان والمعلمان.'],
  ['nfp-conjunction-gen', 'مررت بالطالبين والمعلمين.'],
  ['nfp-adjective', 'الطالبة المجتهدة.'],
  ['nfp-nonhuman', 'كتب جديدة.'],
  ['nfp-demonstrative', 'هذه كتب جديدة.'],
  ['nfp-demonstrative-case', 'مررت بهذين الطالبين.'],
  ['nfp-emphasis-nom', 'حضر الطالبان كلاهما.'],
  ['nfp-emphasis-acc', 'رأيت الطالبين كليهما.'],

  /* ── الدفعة 1.1: مصائد الإنذار الكاذب للقواعد الجديدة ── */
  ['nfp-waw-verb-original', 'المؤمن يدعو ربه ويرجو رحمته.'],
  ['nfp-waw-jamaa-correct', 'الطلاب كتبوا الدرس وحضروا مبكرين.'],
  ['nfp-ha-pronoun', 'شاهدت صورته وقرأت مقاله.'],
  ['nfp-maktab-possessive', 'هذا مكتبه الخاص.'],
  ['nfp-hamza-wasl-correct', 'استخدام الحاسوب مفيد وانتبه إلى الدرس.'],
  ['nfp-al-an-correct', 'الآن الوقت مناسب للعمل.'],
  ['nfp-badinjan', 'أحب الباذنجان المقلي.'],
  ['nfp-khata-verb', 'الطفل يخطو خطواته الأولى.'],
  ['nfp-ya-possessive', 'عنده سيارة حديثة.'],
  ['nfp-alif-maqsura-correct', 'ذهب إلى المستشفى الكبير.'],

  /* ── الدفعة 2: مصائد واو الإضافة والأسماء المنتهية بواو والترقيم ── */
  ['nfp-waw-annexation-m', 'جاء معلمو المدرسة.'],
  ['nfp-waw-annexation-alif', 'جاء طلابو المدرسة.'],
  ['nfp-waw-noun-aduww', 'هذا عدو واضح.'],
  ['nfp-waw-tabu', 'الأرض مسجلة في الطابو.'],
  ['nfp-contextual-taa-al', 'شاهدت صوره الشخصية.'],
  ['nfp-contextual-taa-pronoun', 'شاهدت صورته الشخصية.'],
  ['nfp-punct-correct', 'قال: مرحبا بك.'],
  ['nfp-ukla', 'اكله لذيذة.'],
  ['nfp-verb-vso-plural', 'قام الطلاب مبكرين.'],
  ['nfp-verb-vso-plural-f', 'قامت الطالبات مبكرات.'],
  ['nfp-waw-dialectal', 'كتبتو الدرس أمس.'],
  ['nfp-akhdhan-masdar', 'بدأ اخذا وردا.'],
  ['nfp-uklan-masdar', 'رأيت اكلا كثيرا.'],
  ['nfp-waw-imperfect-1s', 'أرجو منك المساعدة.'],
  ['nfp-waw-imperfect-1p-n', 'نرجو التوفيق.'],

  /* ── 18.3: مصائد طبقة الاتجاه والتحقق السياقي ── */
  ['nfp-number-21-masculine', 'في المكتبة واحد وعشرون كتابًا جديدًا.'],
  ['nfp-number-21-feminine', 'في المكتبة واحدة وعشرون صفحةً جديدةً.'],
  ['nfp-number-one-standalone-after-pp', 'في المكتبة واحد.'],
  ['nfp-number-twelve-feminine', 'حضرت اثنتا عشرة طالبةً.'],
  ['nfp-five-verbs-subjunctive', 'لن يدرسوا.'],
  ['nfp-five-verbs-jussive', 'لم تدرسي.'],
  ['nfp-kana-dual', 'كان الطالبان مجتهدين.'],
  ['nfp-kana-feminine-plural', 'كانت الطالبات مجتهداتٍ.'],
  ['nfp-nominal-predicate-dual', 'الطالبان مجتهدان.'],
  ['nfp-independent-conjoined-clause', 'حضر الطلاب ونجحت الطالبات.'],
  ['nfp-five-noun-fi-ambiguity', 'فيك خير كثير.'],
  ['nfp-human-object-selection', 'رأى الطالب الطالبة.']
]);

function generateV184NoFalsePositiveCorpus() {
  const tests = [];
  const add = (id, text) => tests.push([`v184-nfp-${id}`, text]);

  // 30 صيغة صحيحة للأسماء الخمسة.
  for (const [lemma, forms] of Object.entries(FIVE_NOUN_BY_LEMMA)) {
    add(`five-pron-nom-${lemma}`, `جاء ${forms.nominative}ك.`);
    add(`five-pron-acc-${lemma}`, `رأيت ${forms.accusative}ك.`);
    add(`five-pron-gen-${lemma}`, `مررت ب${forms.genitive}ك.`);
    const added = lemma === 'ذو' ? 'علم' : 'الطالب';
    add(`five-idafa-nom-${lemma}`, `جاء ${forms.nominative} ${added}.`);
    add(`five-idafa-acc-${lemma}`, `رأيت ${forms.accusative} ${added}.`);
    add(`five-idafa-gen-${lemma}`, `مررت ب${forms.genitive} ${added}.`);
  }

  // 30 صلة موصول صحيحة.
  const relativeProfiles = [
    {id: 'ms', lead: 'جاء الطالب', rel: 'الذي', code: '3ms'},
    {id: 'fs', lead: 'جاءت الطالبة', rel: 'التي', code: '3fs'},
    {id: 'mdn', lead: 'جاء الطالبان', rel: 'اللذان', code: '3dm'},
    {id: 'mda', lead: 'رأيت الطالبين', rel: 'اللذين', code: '3dm'},
    {id: 'fdn', lead: 'جاءت الطالبتان', rel: 'اللتان', code: '3df'},
    {id: 'fda', lead: 'رأيت الطالبتين', rel: 'اللتين', code: '3df'},
    {id: 'mp', lead: 'جاء الطلاب', rel: 'الذين', code: '3mp'},
    {id: 'fp', lead: 'جاءت الطالبات', rel: 'اللاتي', code: '3fp'},
    {id: 'nh-books', lead: 'وصلت الكتب', rel: 'التي', code: '3fs'},
    {id: 'nh-schools', lead: 'وصلت المدارس', rel: 'التي', code: '3fs'}
  ];
  for (const profile of relativeProfiles) {
    for (const lemma of ['نجح', 'حضر', 'وصل']) {
      add(`relative-${profile.id}-${lemma}`, `${profile.lead} ${profile.rel} ${conjugateVerb(lemma, 'past', profile.code)}.`);
    }
  }

  const feminineSubjects = [
    'مديرة', 'طبيبة', 'عاملة', 'كاتبة', 'باحثة', 'موظفة', 'أستاذة', 'تلميذة', 'ممرضة', 'مترجمة',
    'جامعة', 'مكتبة', 'غرفة', 'صفحة', 'صحيفة', 'مجلة', 'قصة', 'رواية', 'مسابقة', 'قاعة'
  ];
  const masculineSubjects = [
    'مدير', 'طبيب', 'عامل', 'كاتب', 'باحث', 'أستاذ', 'تلميذ', 'دكتور', 'فنان', 'صديق',
    'فصل', 'مشروع', 'درس', 'واجب', 'امتحان', 'طريق', 'منزل', 'بيت', 'كرسي', 'حاسوب'
  ];

  // 60 جملة مطابقة للفعل والفاعل.
  feminineSubjects.forEach((noun, i) => add(`subject-vso-f-${i}`, `حضرت ${noun}.`));
  masculineSubjects.forEach((noun, i) => add(`subject-vso-m-${i}`, `حضر ${noun}.`));
  const svoLemmas = [...masculineSubjects.slice(0, 10), ...feminineSubjects.slice(0, 10)];
  svoLemmas.forEach((lemma, i) => {
    const dual = nounForm(lemma, 'du', 'nominative');
    const gender = NOUN_LEMMAS[lemma].gender;
    add(`subject-svo-dual-${i}`, `ال${dual} ${gender === 'f' ? 'حضرتا' : 'حضرا'}.`);
  });

  // 60 نعتًا صحيحًا.
  const adjectiveFeminines = [...feminineSubjects, 'شركة', 'مؤسسة', 'دولة', 'قرية', 'طاولة', 'جائزة', 'نتيجة', 'فكرة', 'مشكلة', 'فرصة'];
  const adjectiveMasculines = [...masculineSubjects, 'هاتف', 'برنامج', 'نظام', 'محرك', 'نص', 'سؤال', 'جواب', 'قرار', 'اجتماع', 'مكتب'];
  adjectiveFeminines.forEach((noun, i) => add(`adj-f-${i}`, `ال${noun} الجديدة.`));
  adjectiveMasculines.forEach((noun, i) => add(`adj-m-${i}`, `ال${noun} المجتهد.`));

  // 20 خبرًا اسميًا صحيحًا.
  svoLemmas.forEach((lemma, i) => {
    const dual = nounForm(lemma, 'du', 'nominative');
    const gender = NOUN_LEMMAS[lemma].gender;
    add(`predicate-dual-${i}`, `ال${dual} ${gender === 'f' ? 'حاضرتان' : 'حاضران'}.`);
  });

  // 25 تركيب عدد صحيحًا.
  masculineSubjects.slice(0, 13).forEach((lemma, i) => add(`number-m-${i}`, `ثلاثة ${nounForm(lemma, 'pl', 'genitive')}.`));
  feminineSubjects.slice(0, 12).forEach((lemma, i) => add(`number-f-${i}`, `ثلاث ${nounForm(lemma, 'pl', 'genitive')}.`));

  // 4 جمل متداخلة صحيحة لاختبار حدود الجملة التابعة.
  add('nested-inna', 'قال المعلم إن الطالبة تكتب الدرس.');
  add('nested-relative-pp', 'جاء الطالب الذي في المدرسة يكتب الدرس.');
  add('nested-relative-coordination', 'جاءت الطالبة التي حضرت وكتبت الدرس.');
  add('nested-inna-relative', 'إن الطالبة التي نجحت مجتهدةٌ.');

  if (tests.length !== 229) throw new Error(`V18.4 NFP generation mismatch: ${tests.length}`);
  return tests;
}

const V185_NO_FALSE_POSITIVE_REGRESSIONS = Object.freeze([
  ['v185-nfp-three-books', 'ثلاثة كتب'],
  ['v185-nfp-kutub-genitive', 'كتبٍ'],
  ['v185-nfp-kutuban-accusative', 'كتبًا'],
  ['v185-nfp-kataba-or-kutub', 'كتب الطالب'],
  ['v185-nfp-students-wrote', 'الطلاب كتبوا'],
  ['v185-nfp-feminine-teachers', 'المعلماتُ'],
  ['v185-nfp-oblique-adjective', 'الطالبين المجتهدين'],
  ['v185-nfp-five-nouns-fragment', 'أبيك وأخيك']
]);

const NO_FALSE_POSITIVE_CORPUS = Object.freeze([
  ...BASE_NO_FALSE_POSITIVE_CORPUS,
  ...generateV184NoFalsePositiveCorpus(),
  ...V185_NO_FALSE_POSITIVE_REGRESSIONS
]);

const POS_DEPENDENCY_REGRESSION_CORPUS = Object.freeze([
  {id: 'pos-three-books-correct', text: 'ثلاثة كتب', expectedPOS: ['number', 'noun'], expectedRules: []},
  {id: 'pos-three-books-wrong-number', text: 'ثلاث كتب', expectedPOS: ['number', 'noun'], expectedRules: ['NUMBER_POLARITY_V18']},
  {id: 'pos-kutub-genitive', text: 'كتبٍ', expectedPOS: ['noun'], expectedRules: []},
  {id: 'pos-kutuban-accusative', text: 'كتبًا', expectedPOS: ['noun'], expectedRules: []},
  {id: 'pos-kataba-or-kutub', text: 'كتب الطالب', expectedPOS: ['ambiguous', 'noun'], expectedRules: []},
  {id: 'pos-students-wrote', text: 'الطلاب كتبوا', expectedPOS: ['noun', 'verb'], expectedRules: []},
  {id: 'pos-feminine-teachers', text: 'المعلماتُ', expectedPOS: ['noun'], expectedRules: []},
  {id: 'pos-oblique-adjective', text: 'الطالبين المجتهدين', expectedPOS: ['noun', 'adj'], expectedRules: []},
  {id: 'pos-five-nouns-fragment', text: 'أبيك وأخيك', expectedPOS: ['noun', 'noun'], expectedRules: []}
]);


/* ===== MODULE: src/validation/validate.js ===== */
function sameMultiset(actual, expected) {
  const a = [...actual].sort();
  const e = [...expected].sort();
  return a.length === e.length && a.every((value, index) => value === e[index]);
}

function validateData() {
  const checks = {};
  const add = (id, ok, detail) => { checks[id] = {status: ok ? 'pass' : 'fail', detail}; };

  add('single-version-source', CONFIG.version === META.version, `${CONFIG.version} / ${META.version}`);
  const ruleIds = RULE_PIPELINE.map(x => x.id);
  add('unique-rule-stages', new Set(ruleIds).size === ruleIds.length, `${ruleIds.length} مراحل`);

  const weakIssues = [];
  for (const meta of Object.values(VERB_LEXICON)) {
    for (const tense of ['past', 'present']) {
      for (const person of ['3ms', '3fs', '3dm', '3df', '3mp', '3fp', '2ms', '2fs', '2du', '2mp', '2fp', '1s', '1p']) {
        if (!meta.paradigm?.[tense]?.[person]) weakIssues.push(`${meta.lemma}:${tense}:${person}`);
      }
    }
  }
  add('verified-verb-paradigms-complete', weakIssues.length === 0, weakIssues.length ? weakIssues.join('، ') : 'كل الجداول تحوي 13 شخصًا في الماضي والمضارع');

  const indexIssues = [];
  for (const [surface, analyses] of VERB_FORM_INDEX) {
    if (!surface || !analyses.length) indexIssues.push(surface || '(empty)');
    for (const analysis of analyses) if (!VERB_LEXICON[analysis.lemma]) indexIssues.push(`${surface}→${analysis.lemma}`);
  }
  add('verb-index-consistent', indexIssues.length === 0, indexIssues.length ? indexIssues.join('، ') : `${VERB_FORM_INDEX.size} صيغة سطحية مفهرسة`);
  add('diptote-data-present', DIPTOTE_EXACT.size >= 30, `${DIPTOTE_EXACT.size} مدخلًا مراجعًا`);
  add('nominal-data-present', NOUN_FORM_INDEX.size >= 350, `${NOUN_FORM_INDEX.size} صيغة اسمية`);
  add('adjective-data-present', ADJECTIVE_FORM_INDEX.size >= 350, `${ADJECTIVE_FORM_INDEX.size} صيغة صفة`);
  add('five-nouns-complete', Object.keys(FIVE_NOUN_FORMS).length === 15 && Object.keys(FIVE_NOUN_BY_LEMMA).length === 5,
    `${Object.keys(FIVE_NOUN_FORMS).length} صيغة فرعية لخمسة أسماء`);
  add('relative-pronouns-complete', Object.keys(RELATIVE_PRONOUNS).length >= 9, `${Object.keys(RELATIVE_PRONOUNS).length} أسماء موصولة`);
  add('syntax-core-stages', ruleIds.includes('fiveNouns') && ruleIds.includes('relativeClauses'), ruleIds.join(', '));
  add('gold-corpus-300', GOLD_CORPUS.length >= 300, `${GOLD_CORPUS.length} اختبارًا ذهبيًا`);
  add('no-false-positive-corpus-300', NO_FALSE_POSITIVE_CORPUS.length >= 300, `${NO_FALSE_POSITIVE_CORPUS.length} جملة صحيحة`);
  add('pos-dependency-regressions', POS_DEPENDENCY_REGRESSION_CORPUS.length >= 9, `${POS_DEPENDENCY_REGRESSION_CORPUS.length} حالات POS/Dependency حرجة`);

  const stats = weakVerbStats();
  add('weak-verb-coverage', stats.weakOrIrregularLemmas >= 20, JSON.stringify(stats));

  const failures = Object.entries(checks).filter(([, value]) => value.status === 'fail').map(([id]) => id);
  return {valid: failures.length === 0, checks, failures, stats};
}

function validate({
  goldCorpus = GOLD_CORPUS,
  noFalsePositiveCorpus = NO_FALSE_POSITIVE_CORPUS,
  posDependencyCorpus = POS_DEPENDENCY_REGRESSION_CORPUS
} = {}) {
  const data = validateData();
  const goldResults = [];
  const goldFailures = [];

  for (const test of goldCorpus) {
    try {
      const result = analyze(test.text, {safeMode: true, debug: false});
      const rules = result.findings.map(x => x.ruleId);
      const replacements = result.findings.map(x => x.replacement).filter(Boolean);
      const rulesOk = sameMultiset(rules, test.rules || []);
      const replacementsOk = !test.replacements || sameMultiset(replacements, test.replacements);
      const correctedOk = test.corrected == null || result.corrected === test.corrected;
      const row = {
        id: test.id, text: test.text, ok: rulesOk && replacementsOk && correctedOk,
        expectedRules: test.rules || [], actualRules: rules,
        expectedReplacements: test.replacements || null, actualReplacements: replacements,
        expectedCorrected: test.corrected ?? null, actualCorrected: result.corrected,
        rulesOk, replacementsOk, correctedOk
      };
      goldResults.push(row);
      if (!row.ok) goldFailures.push(row);
    } catch (error) {
      const row = {id: test.id, text: test.text, ok: false, error: error.stack || error.message};
      goldResults.push(row); goldFailures.push(row);
    }
  }

  const nfpResults = [];
  const nfpFailures = [];
  for (const [id, text] of noFalsePositiveCorpus) {
    try {
      const result = analyze(text, {safeMode: true, debug: false});
      const row = {id, text, ok: result.findings.length === 0, findings: result.findings.map(x => ({ruleId: x.ruleId, original: x.original, replacement: x.replacement, confidence: x.confidence}))};
      nfpResults.push(row);
      if (!row.ok) nfpFailures.push(row);
    } catch (error) {
      const row = {id, text, ok: false, error: error.stack || error.message};
      nfpResults.push(row); nfpFailures.push(row);
    }
  }

  const posResults = [];
  const posFailures = [];
  for (const test of posDependencyCorpus) {
    try {
      const context = createContext(test.text, {safeMode: true});
      const actualPOS = context.tokens.map(token => token.morph.pos);
      const result = analyze(test.text, {safeMode: true});
      const actualRules = result.findings.map(item => item.ruleId);
      const posOk = sameMultiset(actualPOS.map((value, index) => `${index}:${value}`), test.expectedPOS.map((value, index) => `${index}:${value}`));
      const rulesOk = sameMultiset(actualRules, test.expectedRules || []);
      const row = {id: test.id, text: test.text, ok: posOk && rulesOk, expectedPOS: test.expectedPOS, actualPOS, expectedRules: test.expectedRules || [], actualRules, posOk, rulesOk};
      posResults.push(row);
      if (!row.ok) posFailures.push(row);
    } catch (error) {
      const row = {id: test.id, text: test.text, ok: false, error: error.stack || error.message};
      posResults.push(row); posFailures.push(row);
    }
  }

  return {
    version: META.version,
    valid: data.valid && goldFailures.length === 0 && nfpFailures.length === 0 && posFailures.length === 0,
    data,
    gold: {total: goldResults.length, failures: goldFailures, results: goldResults},
    noFalsePositives: {total: nfpResults.length, failures: nfpFailures, results: nfpResults},
    posDependency: {total: posResults.length, failures: posFailures, results: posResults}
  };
}


  function check(text, options){ return analyze(text, options); }
  function correct(text, options){ return analyze(text, options).corrected; }
  function suggest(text, options){ return analyze(text, options).suggestions; }
  function inspectPOS(text, options){
    const context = createContext(text, options);
    return context.tokens.map(token => ({
      index: token.index, surface: token.surface, core: token.morph.core,
      pos: token.morph.pos, confidence: token.morph.posConfidence,
      ambiguous: Boolean(token.morph.posAmbiguous), evidence: token.morph.posEvidence || [],
      alternatives: token.morph.candidates.map(candidate => ({pos: candidate.pos, lemma: candidate.lemma, confidence: candidate.confidence}))
    }));
  }
  function inspectSyntax(text, options){
    const context = createContext(text, options);
    return {
      version: META.version,
      clauses: context.syntax.clauses,
      roles: context.syntax.roles,
      tokens: context.tokens.map(token => ({
        index: token.index, surface: token.surface, core: token.morph.core,
        pos: token.morph.pos, posConfidence: token.morph.posConfidence,
        posAmbiguous: Boolean(token.morph.posAmbiguous), posEvidence: token.morph.posEvidence || [],
        role: context.syntax.roles[token.index] || null
      }))
    };
  }
  function lexiconStats(){
    return Object.freeze({
      nounLemmas: Object.keys(NOUN_LEMMAS).length,
      nounSurfaces: NOUN_FORM_INDEX.size,
      adjectiveLemmas: Object.keys(ADJECTIVE_LEMMAS).length,
      adjectiveSurfaces: ADJECTIVE_FORM_INDEX.size,
      verbLemmas: Object.keys(VERB_LEXICON).length,
      verbSurfaces: VERB_FORM_INDEX.size,
      fiveNounForms: Object.keys(FIVE_NOUN_FORMS).length,
      relativePronouns: Object.keys(RELATIVE_PRONOUNS).length
    });
  }

  const ArabicProofreaderV18 = Object.freeze({
    META, CONFIG, DEFAULT_OPTIONS,
    analyze, check, correct, suggest, parse, inspectWord, inspectPOS, inspectSyntax, validate, validateData,
    conjugateVerb, verbAnalyses, weakVerbStats, lexiconStats,
    normalize, normalizeWithMap, normalizeForComparison,
    pipelineDescription,
    GOLD_CORPUS, NO_FALSE_POSITIVE_CORPUS, POS_DEPENDENCY_REGRESSION_CORPUS
  });
  return ArabicProofreaderV18;

});

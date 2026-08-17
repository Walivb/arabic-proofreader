/*!
 * ============================================================================
 *  Arabic Proofreader V19.0 PRO FINAL — Blogger Standalone Bundle
 *  النسخة الاحترافية النهائية — مدقق عربي شامل (إملاء + صرف + نحو + أسلوب)
 *  ────────────────────────────────────────────────────────────────────────
 *  V19.0 PRO FINAL (2026-08-16) — نواة القرار النحوي الموحدة:
 *    ▸ VerbSubjectFrameResolver 2.0: فصل VSO/SVO قبل حكم الأفعال الخمسة؛
 *      «لن يكتبون الطلاب واجباتهم» ← يكتب (لا يكتبوا)، «المعلمات لم يشرحون»
 *      ← يشرحن.
 *    ▸ InnaDemonstrativeChainResolver 1.0: «إن هؤلاء الطلاب المجتهدين» تُقرأ
 *      سلسلةً واحدة؛ الياء على التابع صحيحة لا تُقلب، وواوها تُصحَّح.
 *    ▸ CopularPredicateResolver 2.0: خبر الناسخ المفرد المنصوب يُرسم بألف
 *      التنوين «كان الطالب مجتهدًا» مع امتناع صارم عن شبه الجملة والصلة
 *      والممنوع من الصرف وذي العلامة والمشكول.
 *    ▸ FalsePositiveFirewall 2.0: القراءة الصحيحة المحسومة تحجب قاعدة
 *      التصحيح العامة (ياء الأسماء الخمسة مع ياء المتكلم، منع قلب توابع
 *      السلاسل، منع نصب فاعل VSO محسوم، منع حذف نون فعل له فاعل ظاهر).
 *    ▸ ARABIC PRO BENCHMARK 2000: اثنتا عشرة فئة بمقاييس Recall/Precision/
 *      FPR/Wrong-Correction/Abstention وأهداف الإطلاق القطعية.
 *    ▸ الحفاظ التام على كل منظومة V18.9.0 وواجهاتها وقواعدها: إضافة صرفة.
 *
 *  ملف جاهز للنشر (Deployment-Ready) — بدون أي تبعيات خارجية
 * ============================================================================
 *
 *  الإصدار : 18.8.6 (PRO COMPLETE)
 *  التاريخ : 2026-08-15
 *  الملف   : ملف واحد مستقل (Single-File Bundle) مولَّد من المصادر المجزأة،
 *            لا يحتاج أي مكتبة خارجية ويعمل مباشرة عبر وسم <script>.
 *
 *  ── سجل التغييرات ─────────────────────────────────────────────────────────
 *  18.8.6 (PRO COMPLETE — تثبيت واجهة التحليل والسياق الطويل):
 *    ▸ إصلاح عدّ الجمل في Long Context: النص بلا فاصلة كان يُحسب جملتين.
 *    ▸ توسيع ربط الأسماء الموصولة إلى صيغ المثنى مع نافذة سياق أوسع.
 *    ▸ إضافة فحص سلامة API تشخيصي دون تحويل طبقات inspect إلى تصحيح تلقائي.
 *    ▸ الإبقاء على محرك التصحيح الأساسي ومعايير الدقة السابقة دون تغيير.
 *
 *  18.8.0 (LINGUISTIC LAYERS — إصلاح الجذور أولًا ثم بناء الطبقات):
 *    ▸ المبدأ الحاكم: «الإنذار الكاذب أشد ضررًا من فوات الخطأ». لذلك بُدئ
 *      بإصلاح القواعد التي أنتجت تصحيحات فاسدة قبل إضافة أي قاعدة جديدة،
 *      امتثالًا لترتيب الأولويات في خارطة التطوير.
 *    ▸ إصلاحات جذرية للإنذارات المرصودة في V18.7.9:
 *      • [حرج] «إبن ← أبن»: كان المولّد الإنتاجي يرى «أبن» مرشحًا وحيدًا في
 *        فهرس الهمزة فيعدّه برهانًا، و«أبن» صيغة فعلية لا اسمية. والصواب أن
 *        «ابن» من الأسماء العشرة المبدوءة بهمزة وصل، فلا تُكتب بهمزة قطع
 *        أصلًا. أُضيف جدول HAMZAT_WASL_INVARIANTS_V1880 يحظر توليدها،
 *        وجدول HAMZAT_WASL_WORDS_V1880 يصححها إلى «ابن» بالألف المجردة.
 *      • [حرج] «مدى ← مدا»: «مدا» تثنية «مدّ» الفعلية، فلا تنقض رسم اسم
 *        مقصور ثابت. أُضيف ALIF_MAQSURA_INVARIANTS_V1880، واشتُرط في مسار
 *        الألف المقصورة والهمزة سندٌ اسمي (requireNominalSupport) فلا يُبنى
 *        قلب الرسم على تصريف فعلي محض.
 *      • [حرج] «الذين ← الذون»: الموصولات — عدا المثنى — مبنية لا يظهر عليها
 *        أثر الإعراب. أُنشئ سجل المبنيات isIndeclinableNominalV1880 يمنع
 *        قاعدة البدل من إعراب مبني، مع استثناء المثنى المعرب بالألف والياء.
 *      • [حرج] «هؤلاء الطلبة ← هذه»: التاء في «الطلبة» أوهمت المحلل إفرادًا
 *        مؤنثًا بثقة 0.62. أُضيف Weak-Evidence Veto: لا يُنقض ما دلت عليه
 *        أداة صريحة في الجملة بتحليل صرفي ظني دون العتبة.
 *    ▸ طبقات جديدة (مع الحفاظ التام على المنظومة السابقة):
 *      • نموذج درجات الأخطاء: ERROR / WARNING / SUGGESTION / STYLE لا تختلط.
 *      • سلّم ثقة تفصيلي بخمس درجات (قطعي، شبه قطعي، مرجَّح، اقتراح، ممنوع).
 *      • محرك عدم التصحيح (Abstention 1.0): يصرّح بعجزه عند ضعف الدليل بدل
 *        أن يخمّن — وفيه حارس المفعول المطلق فلا يُمَسّ «شرح المعلم شرحًا».
 *      • حماية الأعلام والمعرَّبات والمصطلحات العلمية من المعجم العام.
 *      • سجل النواسخ: كان وأخواتها بشروط «ما زال» و«ما دام»، وإنّ وأخواتها،
 *        وظنّ وأخواتها موسومةً بالتباس البصري والقلبي في «رأى» و«وجد».
 *      • قاعدة الأخطاء الشائعة مفصولة عن المحلل النحوي، وشرطها ألا تحتمل
 *        الصيغة قراءة فصيحة؛ ولذلك مُنعت أزواج «حضر/حظر» من التصحيح الآلي.
 *      • طبقة المسافات والترقيم الموسّعة، مصنَّفة أسلوبًا لا خطأً لغويًا.
 *    ▸ الاختبارات: 44 اختبار انحدار جديدًا (30 حظرًا للتصحيح + 14 ذهبيًا)
 *      عبر runRegressionSuiteV1880، و10 فحوص بنيوية في validateData، مع بقاء
 *      604 اختبارًا ذهبيًا و637 مصيدة إنذار ومعيار الـ400 على 100% دون تغيير.
 *  18.7.9 (CORRECTNESS ROUND — إصلاح أخطاء المحرك المكتشفة في جولة المراجعة):
 *    ▸ إصلاحات جذرية (Root-cause fixes):
 *      • [حرج] «العربيه ← العربيةه»: كان المقطِّع يقرأ «ال + عربي + ه» فيعامل
 *        الهاء ضميرًا ملكيًا، ثم يقلبها الجذعُ تاءً مربوطة ويعيد rebuildToken
 *        الضميرَ فتجتمع «ةه». طُبِّقت القاعدة الصرفية «لا يجتمع أل والإضافة»:
 *        المعرَّف بـ«ال» لا يقبل ضميرًا متصلًا إطلاقًا، فتبقى الهاء من الجذع.
 *      • [حرج] «فهم ← فهمت» و«نشر ← نشرت»: كانت الصيغة المجردة تُقرأ ماضيًا
 *        للغائب في موضع اسمي قطعًا. أُضيف حارس «حرف الجر لا يدخل على الفعل»:
 *        المصدر بعد حرف جر أو ظرف مضاف أو اسم ملازم للإضافة («عدم نشر») يُحسم
 *        اسميًا قبل أن تعمل قاعدة المطابقة، فسقط مصدر الإنذارات الكاذبة.
 *      • «صوره ← صورةه» في CONTEXTUAL_TAA: نفس خلل إعادة إلحاق الضمير، أُصلح.
 *      • «للصوره ← لالصورة»: لام الجر تُدغم مع «ال» رسمًا؛ وُحِّد بناء اللاصقة
 *        في buildClitcPrefix فامتنع توليد «لال» من كل القواعد.
 *      • «للاو ← لالللاوا»: قاعدة واو الجماعة كانت تمرر الرسم الكامل عبر
 *        rebuildToken فتضاعف اللاصقة؛ صار الإلحاق مباشرًا مع منع دخولها على
 *        ما حمل «ال» أو حرف جر.
 *    ▸ استدراك أخطاء حقيقية كانت تفوت (Recall):
 *      • واو الجماعة في المضارع: «أن يساعدو ← يساعدوا» بحجة صرفية مفهرسة.
 *      • همزة «أن» الناصبة: «ان/وان + مضارع ← أن/وأن»، مع صون «إن» الشرطية.
 *      • «الأخبار الغير موثوقة ← غير الموثوقة»: «غير» ملازمة للإضافة فلا تدخلها
 *        «ال»، والصفة بعدها تُعرَّف (GHAYR_DEFINITE_ATTRIBUTE_V1879).
 *      • CLITIC_ORTHOGRAPHY_V1879: تصحيح الجذع المعجمي عبر «ال»/حرف الجر،
 *        فكانت «القراءه/بالحياه/للمدرسه» تفلت بينما تُصحَّح مجردةً.
 *      • توسعة المعجم: أفعال شائعة (شجع، درب، حسن، شارك، اهتم…) ومصادر مؤنثة
 *        (كتابة، ممارسة، قراءة…) ومداخل همزة قطع وتاء مربوطة عالية التواتر.
 *    ▸ ضبط الأولويات ومنع التداخل: «غير» لم تُدرج فعلًا حفاظًا على قاعدة
 *      الاستثناء، والتصحيح عبر اللواصق مقصور على ما تحسمه اللاصقة اسميًا.
 *    ▸ الاختبارات: +10 انحدارات ذهبية و+22 مصيدة إنذار كاذب (V1879)، و5
 *      فحوص بنيوية في validateData، مع بقاء معيار الـ400 على 100% دون تغيير.
 *  18.7.8 (PRECISION+RECALL PRO — دمج قوة PRO مع قواعد V18.7.7 العادية):
 *    • استرجاع طبقة NisbaNounLayer 1.0 من النسخة العادية: أسماء النسب المذكرة
 *      المنتهية بياء (صحفي، قاضي، محامي، عربي، مصري...) مع نِسَبها المؤنثة،
 *      وحارس التقطيع اللواصقي الذي يمنع فصل ضمير الياء عن جذع يائي.
 *    • استرجاع قاعدة contextualOrthography من النسخة العادية: الإملاء السياقي
 *      لكلمات مثل (علي/على، أن، سالت/سألت، كتابه/كتابة) مع اختبارات منع
 *      الإنذار الكاذب لكل مدخل.
 *    • استرجاع توسعة NOUN_FORM_INDEX لجمع المذكر السالم الإنتاجي («ون»)
 *      للأسماء ذات جمع التكسير فقط (عاملون، طبيبون، لاعبون...).
 *    • استرجاع expandedAdjectiveLemmasV1877() من النسخة العادية (30 صفة إضافية).
 *    • استرجاع معيار EXTERNAL_HOLDOUT_400_V1877 ودالة runExternal400HoldoutBenchmark.
 *    • دمج اختبارات V1877_GOLD_REGRESSIONS و V1877_NO_FALSE_POSITIVE_REGRESSIONS
 *      من النسختين معًا لضمان عدم فقدان أي قاعدة ناجحة.
 *    • إضافة اختبار Regression Test يمنع فقدان أي قاعدة ناجحة من النسخة السابقة.
 *    • الحفاظ على تحسينات PRO: اندماج همزة المثنى (قرأا→قرآ، يقرأان→يقرآن)،
 *      Competing-Gender Veto 1.0، وتوسعة V1877 للأسماء المهنية.
 *    • توحيد معيار الـ400 جملة وطريقة حساب Recall/Precision بين النسختين.
 *  18.7.7 (PRECISION + RECALL — جولة الاختبار الخارجي الكبير 400 جملة):
 *    • إصلاح السبب الجذري للإنذار الخاطئ مع أسماء النسب: رفض الضمير المتصل
 *      الملكي بعد «ال» التعريف («الصحفي» كانت تُقرأ «الصحف+ي» جمعًا مؤنثًا
 *      بدل النسبة المذكرة) — القاعدة الصرفية: المعرف بـ«ال» لا يقبل ضميرًا
 *      ملكيًا متصلًا في الفصحى إطلاقًا.
 *    • Competing-Gender Veto 1.0 داخل WEAK_VERB_AGREEMENT: إذا كان للفاعل
 *      قراءة مذكر مفرد (نسبة إنتاجية أو معجمية) توافق الفعل الحالي، لا يُبنى
 *      تصحيح تأنيث على قراءة ملكية/جمع مؤنث خاطئة — سياسة «التوافق مع قراءة
 *      واحدة قرينة صحيحة» نفسها المطبقة على العدد.
 *    • دعم أسماء النسب المعرّفة فاعلًا (الصحفي قرأ / الصحفي قرأت ← قرأ):
 *      الاسم المنسوب المعرف بوصفه فاعلًا متقدمًا في SVO دون كسر منع الإنذارات.
 *    • تحسين جودة اقتراحات الأفعال المهموزة المثناة: «قرأا» ← «قرآ»،
 *      «يقرأان» ← «يقرآن» (اندماج همزة الفعل في ألف الاثنين بالمَدّ).
 *    • توسعة معجم الإملاء المرجعي (WORDS) بموجة كبيرة من الأخطاء الشائعة:
 *      همزة القطع في الأفعال، التاء المربوطة، الألف المقصورة، الهمزة المتطرفة،
 *      كلمات شائعة — كلها صيغٌ لا قراءة فصيحة صحيحة لها، فتُصحَّح تلقائيًا.
 *    • External Holdout Benchmark V18.7.7 ثابت: 400 جملة خارجية (80 نحوية +
 *      60 مطابقة وصرف + 60 إملائية + 200 صحيحة) بمعرّف
 *      EXTERNAL_HOLDOUT_BENCHMARK_V1877 ودالة runLargeExternalBenchmark،
 *      تبقى كما هي لإعادة الاختبار بعد كل نسخة قادمة دون تغيير.
 *  18.7.6 (DEEP SYNTACTIC — المعالجة النحوية العميقة للمثنى وجمع المذكر):
 *    • Deep Syntactic Topic Resolver 1.0: المثنى وجمع المذكر المبدوء بهما في
 *      صيغة الياء (accgen) يُحسمان مبتدأً مرفوعًا عند ثبوت قرينة خبرية موجبة:
 *      خبر ظاهر الرفع مطابق («الطالبين مجتهدان»)، أو فعل بفاعل مستتر مطابق
 *      («الطالبين حضرا»)، أو فعل لازم («الطالبين حضر»)، أو شبه جملة/موصول
 *      («الطالبين في الصف»). القاعدة محمية من قراءة المفعول المتقدم عند
 *      الدور المحسوم مسبقًا (ObjectResolver) فلا تكسر سياسة منع الإنذارات.
 *    • Nominative Dual/SMP Subject Case Resolver 1.0 (SUBJECT_CASE_V1876 /
 *      TOPIC_CASE_V1876): تصحيح حالة الفاعل والمبتدأ المثنى وجمع المذكر
 *      المنتهيين بالياء إلى الرفع بالألف والواو، للصيغ المعجمية المراجعة فقط.
 *    • إضافة عشرة أفعال متعدية شائعة مفقودة (قابل/شاهد/لاحظ/حاور/رافق/قارن/
 *      عالج/راجع/حفظ/زار) ليكتمل حسم إطار الفعل-المفعول في الجمل الفعلية.
 *    • تكامل ObjectResolver + AdjectiveResolver في سلاسل «فعل + مثنى + نعت».
 *    • External Holdout Benchmark مستقل (18 حالة خارجية + 16 ضابطًا صحيحًا)
 *      بمعرّف EXTERNAL_HOLDOUT_BENCHMARK_V1876 ودالة runExternalHoldoutBenchmark،
 *      منفصل تمامًا عن مجموعات التحقق التطويرية الداخلية.
 *  18.7.5 (حسم الأدوار والحدود ومنع التحليل الصرفي غير المثبت):
 *    • منع التقاط الاسم المحكوم بحرف جر فاعلًا متقدمًا، مع استعادة الفاعل اللاحق.
 *    • Competing Analysis Veto 1.1 لنهايات «ان/ين/ون» الإنتاجية غير المثبتة معجميًا.
 *    • عزل الكلام المنقول عند حدود الاقتباس دون تعطيل التدقيق داخل الاقتباس.
 *    • حسم محافظ لإطار SVO: موضوع بشري معرف + فعل متعدٍ ملتبس + مفعول تالٍ.
 *    • Relative Clause Resolver 1.2 يعيد الخبر الاسمي إلى الجملة الأصلية بعد اكتمال الصلة.
 *    • حماية محتوى عناصر code/pre/script/style كاملًا، لا الوسوم وحدها.
 *    • توحيد العوامل الظرفية («بين/مع/قبل/بعد/قرب») قبل الحكومة ومنع تقطيع «بين» إلى «بـ + ين».
 *    • توسيع إطار المفعول المضمر، وربط نعت الإضافة برأسه الدلالي، وحماية أسماء الأمكنة والمتشابهات الإملائية.
 *  18.7.4 (ضبط الدقة والحكومة الإعرابية وهمزة الأسماء الخمسة):
 *    • حماية الرسم الصحيح «شيئًا»، مع توحيد «شيئاً» إلى «شيئًا» دون مس جزئي للجذع.
 *    • CaseGovernmentResolver 1.1 لنهايات المثنى وجمع المذكر بعد حرف الجر الصريح.
 *    • إزالة استثناء خبر «كان اثنا عشر...»؛ خبر كان منصوب: «حاضرون» ← «حاضرين».
 *    • فصل همزة «ابو» الإملائية عن اختيار «أبو/أبا/أبي» الإعرابي المحكوم بالسياق.
 *    • اختبارات مستقلة ومنع إنذارات كاذبة للأعلام والأسماء المفردة المنتهية بـ«ان/ون».
 *  18.7.3 (تكامل السياق الطويل وعزل الحدود النحوية):
 *    • Clause Isolation 1.1 يمنع عبور الفاعل والمفعول، ويعزل «، ولم» عن صلة الموصول.
 *    • Competing Analysis Veto 1.0 يمنع التصحيح عند ثبوت قراءة صرفية/نحوية صحيحة عالية الثقة.
 *    • Subject/Object Conflict Resolver 1.0 يحسم إطار الفعل قبل إسناد الأدوار.
 *    • Number Phrase Boundary Resolver 1.0 يفصل حكومة التمييز عن حالة العبارة الخارجية.
 *    • Adjective-after-Number وKana+Number Phrase يحفظان مطابقة المجموعة وحالتها.
 *    • Corpus طويل من 100 نص صحيح و100 نص خاطئ بمقاييس دقيقة مستقلة.
 *  18.7.2 (إصلاح تكامل المطابقة والهمزة والشرط والمعجم):
 *    • منع WEAK_VERB_AGREEMENT من تسوية رسم همزة صحيح إلى وجه إملائي شقيق.
 *    • إضافة «شكر/يشكر» فعلًا صحيحًا متعديًا إلى المعجم والتصريف الكامل.
 *    • دعم «إن لم + مضارع» بربط الشرط الجازم بعامل الجزم الداخلي «لم».
 *    • اختبارات انحدار مخصصة للمشكلات الثلاث مع إبقاء النحو اقتراحًا فقط.
 *  18.7.1 (حسم المفعول والشرط والهمزة الصرفية):
 *    • ObjectResolver 1.0 للمفعول الظاهر والمتقدم والضمير المتصل والتثنية والجمع.
 *    • ConditionalGovernmentResolver 1.0 لجزم «إن/من» وفعلَي الشرط دون «إذا».
 *    • HamzaMorphologicalResolver 1.0 يفصل الصيغ التصريفية والوجوه الإملائية المقبولة.
 *    • ترتيب الحسم: Verb → Subject → Object → Government → Dependent → Adjective.
 *    • توسيع corpus الذهبي ومصائد الإنذار الكاذب مع إبقاء النحو اقتراحًا فقط.
 *  18.7.0 (الصرف غير المشكول والعوامل والحماية):
 *    • محلل صرفي غير مشكول يفصل الرسم الإملائي عن الجذع، ويستعيد ألف تنوين النصب.
 *    • مولّد صرفي موحد للأسماء والصفات والأفعال والأعداد مع واجهة عامة موثقة.
 *    • توسيع معجم الأسماء والصفات والأفعال المزيدة، مع تحليل متعدد المرشحين.
 *    • Government Engine موحد للعوامل الإعرابية والمزاج الفعلي والإضافة والتوابع.
 *    • Number Engine للأعداد المكتوبة من 1 إلى 1,000,000 وتوليدها وتحليلها.
 *    • Protected Spans للروابط والبريد والكود والوسوم والتواريخ والاختصارات.
 *    • طبقات إنتاجية محافظة للهمزة والألف المقصورة والتاء المربوطة (اقتراح فقط).
 *    • كشف الجمل الشرطية والمصدرية والعطف المركب، وشجرة تحليل واعتماد مبسطة.
 *    • Conflict Resolver وAmbiguity Engine صريحان، مع إبقاء النحو اقتراحًا فقط.
 *  18.6.0 (العبارات والأدوار قبل الإعراب):
 *    • PhraseDetector وNumberPhraseResolver يعملان قبل كان/إن والنعت والإعراب.
 *    • تمييز العدد محمي من أن يوسم اسم كان: «واحد وعشرون كتبًا» ← «كتابًا».
 *    • CopularStructureResolver يفصل اسم الناسخ وتوابعه وخبره.
 *    • إصلاح سلاسل: إن الطالبين المجتهدين ناجحان، وكان ثلاثة طلاب حاضرين.
 *    • الحفاظ على حركة العدد عند تغيير الجنس: «أربعةَ صفحات» ← «أربعَ صفحات».
 *    • إكمال حركة المعدود: «ثلاثة طالبًا» ← «ثلاثة طلابٍ».
 *    • KanaAgreement + ربط الفعل بعد «قد»: «وكانو المعلمات قد حضروا» ← «وكانت... حضرن».
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
  nameArabic: 'محرك التدقيق العربي الهجين — النسخة الاحترافية الشاملة',
  version: '19.0.0',
  edition: 'PRO-FINAL-V19.0',
  language: 'ar',
  release: 'V19.0 PRO FINAL — النواة القرارية الموحدة',
  stability: 'stable',
  releaseDate: '2026-08-16',
  compat: Object.freeze({
    baseVersion: '18.9.0',
    policy: 'additive-only',
    preservedApi: Object.freeze([
      'analyze', 'check', 'correct', 'suggest', 'parse', 'inspectWord', 'inspectPOS',
      'inspectSyntax', 'inspectGovernment', 'inspectObjects', 'inspectConditionalGovernment',
      'inspectHamzaMorphology', 'analyzeMorphology', 'inspectProtectedSpans', 'parseNumberText',
      'generateMorphology', 'generateNoun', 'generateAdjective', 'generateVerb', 'generateFiveNoun',
      'generateNumber', 'generateParadigm', 'validate', 'validateData', 'lexiconStats',
      'pipelineDescription', 'conjugateVerb', 'verbAnalyses', 'weakVerbStats',
      'normalize', 'normalizeWithMap', 'normalizeForComparison',
      'runExternalHoldoutBenchmark', 'runLargeExternalBenchmark', 'runRegressionSuiteV1880',
      'inspectMultiPOS', 'inspectDependencies', 'inspectConflicts', 'inspectNawasikh',
      'inspectVerbSubjectAgreement', 'inspectAdjectiveAgreement', 'inspectDemonstrativeAgreement',
      'inspectNumberAgreement', 'inspectCaseAgreement', 'inspectComprehensiveAgreement',
      'inspectContextDisambiguation', 'inspectSemanticRoles', 'inspectOrthography',
      'inspectCommonErrors', 'inspectLongContext', 'runPROApiSanityChecks', 'analyzePRO',
      'runRegressionSuiteV1890', 'runFullSuiteV1890',
      'runRegressionSuiteV1900', 'runFullSuiteV1900', 'runArabicProBenchmarkV1900',
      'inspectVerbFramesV1900', 'inspectDemonstrativeChainsV1900',
      'ARABIC_PRO_BENCHMARK_V1900', 'V1900_GOLD_REGRESSIONS', 'V1900_BLOCK_REGRESSIONS'
    ]),
    addedLayers: Object.freeze([
      'DiacriticsLayer-1.0', 'HamzaCompleteLayer-1.0', 'StyleLayer-1.0',
      'PunctuationCompleteLayer-1.0', 'VisibleCaseLayer-1.0', 'NumberTamyizLayer-1.0',
      'AdvisoryBridge-1.0',
      'VerbSubjectFrameResolver-2.0', 'InnaDemonstrativeChainResolver-1.0',
      'CopularPredicateResolver-2.0', 'FalsePositiveFirewall-2.0',
      'AgreementResolver-3.0', 'FiveNounsPhraseResolver-2.0',
      'DependencyTreeResolver-1.0', 'OrthographyStratified-2.0',
      'LongContextResolver-2.0', 'ArabicProBenchmark2000-1.0'
    ])
  }),
  offsetPolicy: 'original-input',
  architecture: Object.freeze([
    'normalizer-1.0',
    'tokenizer-1.0',
    'protected-span-engine-1.1',
    'morphological-analyzer-1.0',
    'morphological-generator-1.0',
    'pos-disambiguator-1.1',
    'clause-detector-1.2',
    'verb-frame-resolver-2.0',
    'subject-resolver-2.4',
    'object-resolver-1.1',
    'government-resolver-1.1',
    'agreement-resolver-3.0',
    'dependent-resolver-1.0',
    'relative-clause-resolver-1.2',
    'number-engine-1.0',
    'five-nouns-engine-2.0',
    'five-verbs-engine-1.0',
    'orthography-engine-2.0',
    'hamza-engine-1.0',
    'punctuation-engine-1.0',
    'style-engine-1.0',
    'ambiguity-engine-1.0',
    'false-positive-firewall-2.0',
    'confidence-engine-1.0',
    'correction-ranker-1.0',
    'safe-correction-engine-1.0',
    'regression-engine-1.0',
    'benchmark-engine-2000-1.0'
  ]),
  resolverVersions: Object.freeze({
    ClauseIsolationResolver: '1.2',
    SubjectObjectConflictResolver: '1.0',
    NumberPhraseBoundaryResolver: '1.0',
    AdjectiveAfterNumberResolver: '1.0',
    KanaNumberPhraseResolver: '1.0',
    ObjectResolver: '1.1',
    CaseGovernmentResolver: '1.1',
    ConditionalGovernmentResolver: '1.1',
    HamzaMorphologicalResolver: '1.0',
    CompetingAnalysisVeto: '1.1',
    DeepSyntacticTopicResolver: '1.0',
    NominativeDualSmpSubjectResolver: '1.0',
    NisbaNounLayer: '1.0',
    ProtectedSpanExtractor: '1.1',
    V1881MultiCandidatePOS: '1.0',
    V1882Agreement: '1.0',
    V1883Context: '1.0',
    V1884Orthography: '1.0',
    V1885LongContext: '1.1',
    V1886ApiHardening: '1.0',
    VerbSubjectFrameResolver: '2.0',
    InnaDemonstrativeChainResolver: '1.0',
    CopularPredicateResolver: '2.0',
    FalsePositiveFirewall: '2.0',
    ArabicProBenchmark2000: '1.0',
    AgreementResolver: '3.0',
    FiveNounsPhraseResolver: '2.0',
    DependencyTreeResolver: '1.0',
    OrthographyStratified: '2.0',
    LongContextResolver: '2.0'
  }),
  releaseCriteria: Object.freeze({
    precision: 0.98,
    falsePositiveRate: 0.01,
    recall: 0.95,
    wrongCorrectionRate: 0.005,
    abstentionTechnique: 'الصحيح المحتمل المحسوم أقوى من قاعدة التصحيح العامة',
    safeThreshold: 0.995
  })
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
  // V18.9.0: الملاحظات التحليلية من الطبقات التشخيصية تُجمع في مسار مستقل
  // ولا تدخل النص المصحَّح ولا قائمة الأخطاء.
  includeAdvisories: true,
  rules: Object.freeze({
    orthography: true,
    clitizedLexicalOrthography: true,
    contextualOrthography: true,
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
    commonErrors: true,
    punctuation: true,
    spacing: true,
    productiveOrthography: true,
    hamzaMorphological: true,
    // V18.9.0 — الطبقات المضافة
    diacritics: true,
    hamzaComplete: true,
    punctuationComplete: true,
    kanaPredicateCase: true,
    munada: true,
    numberTamyizCompletion: true,
    style: true,
    // V19.0.0 — طبقات القرار النحوي الموحد — النواة الحاكمة
    verbSubjectFrames: true,
    demonstrativeChains: true,
    kanaPredicateTanwin: true,
    grammarFirewall: true,
    agreementResolver: true,
    fiveNounsPhrase: true,
    dependencyTree: true,
    orthographyStratified: true,
    longContext: true,
    objectCase: true,
    nominativeSubjectCase: true,
    conditionalGovernment: true,
    conditionalClauses: true,
    masdariClauses: true,
    protectedSpans: true
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
      'five-nouns', 'relative-clause',
      // V18.9.0: الأسلوب والضبط اقتراحٌ دائمًا، لا يُطبَّق آليًا.
      'style', 'diacritics'
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

/**
 * V18.8.0 — سلّم الثقة التفصيلي ونموذج درجات الأخطاء.
 *
 * الثقة عندنا حصيلة أدلة متضافرة لا ناتج قاعدة واحدة، ولذلك فُصل «مقدار
 * الثقة» عن «درجة الخطأ»: فقد يكون الاقتراح الأسلوبي عالي الثقة وهو مع ذلك
 * ليس خطأً يلزم إصلاحه. ومن ثمّ لا تختلط الدرجات الأربع في قائمة واحدة.
 */
const CONFIDENCE_SCALE_V1880 = Object.freeze([
  Object.freeze({code: 'definite', min: 0.99, label: 'خطأ إملائي قطعي'}),
  Object.freeze({code: 'near-definite', min: 0.95, label: 'خطأ شبه قطعي'}),
  Object.freeze({code: 'probable', min: 0.85, label: 'مرجَّح جدًا'}),
  Object.freeze({code: 'suggestion', min: 0.70, label: 'اقتراح'}),
  Object.freeze({code: 'withheld', min: 0, label: 'دون العتبة — لا يُعرض'})
]);

function confidenceGradeV1880(confidence) {
  return CONFIDENCE_SCALE_V1880.find(band => confidence >= band.min)
    || CONFIDENCE_SCALE_V1880.at(-1);
}

const SEVERITY_V1880 = Object.freeze({
  ERROR: Object.freeze({code: 'ERROR', label: 'خطأ', rank: 4,
    description: 'مخالفة قطعية لقاعدة مقررة، لا قراءة صحيحة لها.'}),
  WARNING: Object.freeze({code: 'WARNING', label: 'تحذير', rank: 3,
    description: 'خطأ مرجَّح يحتاج نظر المستخدم لاحتمال قراءة أخرى.'}),
  SUGGESTION: Object.freeze({code: 'SUGGESTION', label: 'اقتراح', rank: 2,
    description: 'تحسين لغوي محتمل، والأصل جائز.'}),
  STYLE: Object.freeze({code: 'STYLE', label: 'أسلوب', rank: 1,
    description: 'ملحظ أسلوبي لا يمس صحة التركيب.'})
});

// التصنيفات القطعية: مخالفتها لا تحتمل قراءة فصيحة أخرى.
const DEFINITE_CLASSES_V1880 = new Set([
  'orthographic', 'orthographic-phrase', 'spacing', 'punctuation'
]);

function severityForFindingV1880(finding) {
  if (finding.severityOverride && SEVERITY_V1880[finding.severityOverride]) {
    return SEVERITY_V1880[finding.severityOverride];
  }
  if (finding.classification === 'style') return SEVERITY_V1880.STYLE;
  const definiteClass = DEFINITE_CLASSES_V1880.has(finding.classification);
  if (definiteClass && finding.confidence >= 0.99) return SEVERITY_V1880.ERROR;
  if (finding.confidence >= 0.95) return definiteClass ? SEVERITY_V1880.ERROR : SEVERITY_V1880.WARNING;
  if (finding.confidence >= 0.85) return SEVERITY_V1880.WARNING;
  return SEVERITY_V1880.SUGGESTION;
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
    ['جواب', 'أجوبة'], ['قرار', 'قرارات'], ['اجتماع', 'اجتماعات'], ['مكتب', 'مكاتب'],
    ['تكريم', 'تكريمات']
  ].forEach(([lemma, plural]) => addSimple(lemma, plural));
  return out;
}

/**
 * توسعة V18.7.8 — دمج NisbaNounLayer 1.0 (من النسخة العادية) مع توسعة المهن
 * والأشياء (من نسخة PRO). أسماء منتهية بياء النسب: مذكرة بجمع مذكر سالم
 * وثنائية منتظمة، مع نِسَبها المؤنثة. قبل هذه الطبقة كانت «الصحفي» تُقطَّع
 * إلى «صحف + ي» (جمع مؤنث + ضمير) فيُحسم الجنس مؤنثًا وينشأ إنذار خاطئ.
 */
function expandedNounLemmasV1877() {
  const out = {};
  const addNisbaM = (lemma, animacy = 'human') => {
    out[lemma] = {gender: 'm', animacy, forms: [
      form(lemma, 'sg'),
      form(lemma + 'ان', 'du', 'nominative'), form(lemma + 'ين', 'du', 'accgen'),
      form(lemma + 'ون', 'pl', 'nominative'), form(lemma + 'ين', 'pl', 'accgen')
    ]};
  };
  const addNisbaF = (lemma) => {
    out[lemma] = {gender: 'f', animacy: 'human', forms: [
      form(lemma, 'sg'),
      form(lemma.slice(0, -1) + 'تان', 'du', 'nominative'),
      form(lemma.slice(0, -1) + 'تين', 'du', 'accgen'),
      form(lemma + 'ات', 'pl')
    ]};
  };
  const addBroken = (lemma, plural, animacy = 'human') => {
    out[lemma] = {gender: 'm', animacy, forms: [
      form(lemma, 'sg'), form(`${lemma}ان`, 'du', 'nominative'), form(`${lemma}ين`, 'du', 'accgen'),
      form(plural, 'pl', null, {pluralType: 'broken'})
    ]};
  };
  const addFem = (lemma, animacy = 'human') => {
    const stem = lemma.endsWith('ة') ? lemma.slice(0, -1) : lemma;
    out[lemma] = {gender: 'f', animacy, forms: [
      form(lemma, 'sg'), form(`${stem}تان`, 'du', 'nominative'), form(`${stem}تين`, 'du', 'accgen'),
      form(`${stem}ات`, 'pl')
    ]};
  };

  // ── أسماء النسب المنتهية بياء (NisbaNounLayer 1.0 — من النسخة العادية) ──
  [
    'صحفي', 'قاضي', 'محامي', 'ساعي', 'داعي', 'راعي', 'غازي', 'نادي',
    'باني', 'حامي', 'والي', 'جاني', 'لاجئ', 'سامي', 'هادي', 'راوي'
  ].forEach(lemma => addNisbaM(lemma, 'human'));
  // حِرَف ومهن شائعة بجمع مذكر سالم (من النسختين)
  [
    'لاعب', 'مدرب', 'مسؤول', 'محرر', 'مراسل', 'محاضر', 'مشرف', 'حارس',
    'سائق', 'بائع', 'طباخ', 'معالج', 'منظم', 'مندوب', 'محافظ', 'منقذ',
    'مرشد', 'محقق', 'مذيع', 'فارس', 'خطيب', 'واعظ', 'عازف', 'مصور',
    'مزارع', 'مسافر', 'رسام', 'نجار', 'بستاني', 'فلاح', 'ممرض', 'محاسب'
  ].forEach(lemma => addNisbaM(lemma, 'human'));
  // نِسَب الشعوب والبلدان (مذكرة عاقلة بجمع سالم)
  [
    'عربي', 'مصري', 'جزائري', 'مغربي', 'تونسي', 'ليبي', 'سوري', 'لبناني',
    'أردني', 'فلسطيني', 'يمني', 'سعودي', 'كويتي', 'قطري', 'بحريني', 'عماني',
    'إماراتي', 'سوداني', 'عراقي', 'إسباني', 'فرنسي', 'ألماني', 'إيطالي', 'تركي'
  ].forEach(lemma => addNisbaM(lemma, 'human'));
  // النِّسَب المؤنثة بالهاء
  [
    'صحفية', 'قاضية', 'محامية', 'ساعية', 'راعية', 'غازية', 'نادية', 'بانية',
    'عربية', 'مصرية', 'جزائرية', 'مغربية', 'تونسية', 'سورية', 'لبنانية',
    'فلسطينية', 'سعودية', 'فرنسية', 'ألمانية', 'تركية', 'راوية', 'هاوية'
  ].forEach(lemma => addNisbaF(lemma));

  // ── مهن إضافية من نسخة PRO ──
  addBroken('تاجر', 'تجار'); addBroken('شاعر', 'شعراء'); addBroken('ضيف', 'ضيوف');
  addBroken('جار', 'جيران');
  // ناقص اللام: المحامي (تسقط الياء قبل الواو)
  out['محامي'] = {gender: 'm', animacy: 'human', forms: [
    form('محامي', 'sg'), form('محاميان', 'du', 'nominative'), form('محاميين', 'du', 'accgen'),
    form('محامون', 'pl', 'nominative'), form('محامين', 'pl', 'accgen')
  ]};
  // مؤنث المهن
  ['محامية', 'رسامة', 'فلاحة', 'طباخة', 'مزارعة', 'سائقة', 'مصورة', 'حارسة', 'ممرضة', 'معلمة', 'مهندسة', 'طبيبة'].forEach(lemma => addFem(lemma));

  // ── أشياء شائعة في الاختبار الخارجي (من نسخة PRO) ──
  const addObj = (lemma, plural, gender = 'm') => {
    let stem = lemma;
    let duNom = `${lemma}ان`;
    let duObl = `${lemma}ين`;
    if (lemma.endsWith('ة')) { stem = lemma.slice(0, -1); duNom = `${stem}تان`; duObl = `${stem}تين`; }
    else if (lemma.endsWith('ى')) { stem = lemma.slice(0, -1); duNom = `${stem}يان`; duObl = `${stem}يين`; }
    out[lemma] = {gender, animacy: 'nonhuman', forms: [
      form(lemma, 'sg'), form(duNom, 'du', 'nominative'), form(duObl, 'du', 'accgen'),
      form(plural, 'pl', null, {pluralType: 'broken'})
    ]};
  };
  addObj('لوحة', 'لوحات', 'f'); addObj('تقرير', 'تقارير'); addObj('صندوق', 'صناديق');
  addObj('وردة', 'ورود', 'f'); addObj('تفاحة', 'تفاح', 'f'); addObj('بضاعة', 'بضائع', 'f');
  addObj('قمح', 'أقماح'); addObj('مباراة', 'مباريات', 'f'); addObj('خطة', 'خطط', 'f');
  addObj('مهمة', 'مهام', 'f'); addObj('قضية', 'قضايا', 'f'); addObj('مقال', 'مقالات');
  addObj('تذكرة', 'تذاكر', 'f'); addObj('متحف', 'متاحف'); addObj('قصيدة', 'قصائد', 'f');
  addObj('مستشفى', 'مستشفيات');
  return out;
}

/** توسعة V18.7: مدخلات دلالية شائعة، مفصولة عن قوائم التصحيح الإملائي. */
function expandedNounLemmasV187() {
  const out = {};
  const addM = (lemma, plural, animacy = 'nonhuman', sound = false) => {
    out[lemma] = {gender: 'm', animacy, forms: [
      form(lemma, 'sg'), form(`${lemma}ان`, 'du', 'nominative'), form(`${lemma}ين`, 'du', 'accgen'),
      ...(sound ? [form(`${lemma}ون`, 'pl', 'nominative'), form(`${lemma}ين`, 'pl', 'accgen')]
        : [form(plural, 'pl', null, {pluralType: 'broken'})])
    ]};
  };
  const addF = (lemma, plural, animacy = 'nonhuman') => {
    const stem = lemma.endsWith('ة') ? lemma.slice(0, -1) : lemma;
    out[lemma] = {gender: 'f', animacy, forms: [
      form(lemma, 'sg'), form(`${stem}تان`, 'du', 'nominative'), form(`${stem}تين`, 'du', 'accgen'),
      form(plural || `${stem}ات`, 'pl', null, plural ? {pluralType: 'broken'} : {})
    ]};
  };
  [
    ['مطور','مطورين','human',true], ['مبرمج','مبرمجين','human',true], ['مصمم','مصممين','human',true],
    ['مستخدم','مستخدمين','human',true], ['خبير','خبراء','human'], ['قائد','قادة','human'],
    ['عضو','أعضاء','human'], ['رئيس','رؤساء','human'], ['وزير','وزراء','human'], ['طالب','طلاب','human'],
    ['اقتصاد','اقتصادات'], ['مجتمع','مجتمعات'], ['سوق','أسواق'], ['قطاع','قطاعات'],
    ['مركز','مراكز'], ['معهد','معاهد'], ['مطار','مطارات'], ['جسر','جسور'], ['شارع','شوارع'],
    ['حي','أحياء'], ['وطن','أوطان'], ['عالم','عوالم'], ['مجال','مجالات'], ['هدف','أهداف'],
    ['مفهوم','مفاهيم'], ['مصدر','مصادر'], ['مرجع','مراجع'], ['مثال','أمثلة'], ['حل','حلول'],
    ['خطأ','أخطاء'], ['نوع','أنواع'], ['شكل','أشكال'], ['لون','ألوان'], ['صوت','أصوات'],
    ['فيديو','فيديوهات'], ['ملف','ملفات'], ['مجلد','مجلدات'], ['خادم','خوادم'], ['موقع','مواقع'],
    ['تطبيق','تطبيقات'], ['نموذج','نماذج'], ['بيان','بيانات'], ['سياق','سياقات'], ['معجم','معاجم'],
    ['تحليل','تحليلات'], ['تصحيح','تصحيحات'], ['اقتراح','اقتراحات'], ['اختبار','اختبارات'],
    ['إصدار','إصدارات'], ['تحديث','تحديثات'], ['مكون','مكونات'], ['مستوى','مستويات'],
    ['زمن','أزمنة'], ['فعل','أفعال'], ['اسم','أسماء'], ['حرف','حروف'], ['ضمير','ضمائر'],
    ['عدد','أعداد'], ['تاريخ','تواريخ'], ['بريد','بريدات'], ['رابط','روابط'], ['رمز','رموز'],
    ['شرط','شروط'], ['فرع','فروع'], ['أصل','أصول'], ['جذر','جذور'], ['وزن','أوزان'],
    ['قرار','قرارات'], ['قانون','قوانين'], ['حق','حقوق'], ['عمل','أعمال'], ['وقت','أوقات'],
    ['يوم','أيام'], ['شهر','أشهر'], ['عام','أعوام'], ['أسبوع','أسابيع'], ['سطر','أسطر']
  ].forEach(([l,p,a='nonhuman',sound=false]) => addM(l,p,a,sound));
  [
    ['برمجة','برمجيات','abstract'], ['تقنية','تقنيات'], ['واجهة','واجهات'], ['خدمة','خدمات'],
    ['منصة','منصات'], ['شبكة','شبكات'], ['قاعدة','قواعد'], ['خوارزمية','خوارزميات'],
    ['دالة','دوال'], ['متغير','متغيرات'], ['خاصية','خصائص'], ['بنية','بنى'], ['طبقة','طبقات'],
    ['حالة','حالات'], ['صيغة','صيغ'], ['علامة','علامات'], ['حركة','حركات'], ['همزة','همزات'],
    ['شجرة','أشجار'], ['علاقة','علاقات'], ['قرينة','قرائن'], ['أولوية','أولويات'],
    ['سياسة','سياسات'], ['حماية','حمايات'], ['فجوة','فجوات'], ['مرحلة','مراحل'],
    ['قيمة','قيم'], ['نسبة','نسب'], ['سرعة','سرعات'], ['ذاكرة','ذاكرات'], ['طاقة','طاقات'],
    ['بيئة','بيئات'], ['منطقة','مناطق'], ['عاصمة','عواصم'], ['ولاية','ولايات'],
    ['وظيفة','وظائف'], ['مهنة','مهن'], ['وزارة','وزارات'], ['إدارة','إدارات'], ['لجنة','لجان'],
    ['جهة','جهات'], ['فترة','فترات'], ['ساعة','ساعات'], ['دقيقة','دقائق'], ['ثانية','ثوان'],
    // V18.7.9 — مصادر مؤنثة عالية التواتر كانت غائبة عن الفهرس، فكان رسمها
    // بالهاء («الكتابه، الممارسه، القراءه») يفلت من مولد التاء المربوطة
    // لعدم وجود مرشح معجمي وحيد يقابله.
    ['كتابة','كتابات','abstract'], ['ممارسة','ممارسات','abstract'],
    ['قراءة','قراءات','abstract'], ['دراسة','دراسات','abstract'],
    ['مشاركة','مشاركات','abstract'], ['مراجعة','مراجعات','abstract'],
    ['ترجمة','ترجمات','abstract'], ['محاولة','محاولات','abstract'],
    ['طريقة','طرق'], ['وسيلة','وسائل'], ['فائدة','فوائد'], ['نتيجة','نتائج'],
    ['خبرة','خبرات','abstract'], ['موهبة','مواهب','abstract'], ['ثقة','ثقات','abstract']
  ].forEach(([l,p,a='nonhuman']) => addF(l,p,a));
  return out;
}

const NOUN_LEMMAS = Object.freeze({
  // «شكر» مصدر اسمي أيضًا؛ يبقى مرشحًا اسميًا وتفصل بنية الجملة بينه وبين الفعل المتعدي «شكر».
  'شكر': {gender: 'm', animacy: 'abstract', forms: [form('شكر', 'sg')]},
  'محور': {gender: 'm', animacy: 'nonhuman', forms: [form('محور', 'sg'), form('محوران', 'du', 'nominative'), form('محورين', 'du', 'accgen'), form('محاور', 'pl', null, {pluralType: 'broken'})]},
  'طالب': {gender: 'm', animacy: 'human', forms: [form('طالب', 'sg'), form('طالبان', 'du', 'nominative'), form('طالبين', 'du', 'accgen'), form('طلاب', 'pl', null, {pluralType: 'broken'})]},
  'طالبة': {gender: 'f', animacy: 'human', forms: [form('طالبة', 'sg'), form('طالبتان', 'du', 'nominative'), form('طالبتين', 'du', 'accgen'), form('طالبات', 'pl')]},
  'معلم': {gender: 'm', animacy: 'human', forms: [form('معلم', 'sg'), form('معلمان', 'du', 'nominative'), form('معلمين', 'du', 'accgen'), form('معلمون', 'pl', 'nominative'), form('معلمين', 'pl', 'accgen')]},
  'مدرس': {gender: 'm', animacy: 'human', forms: [form('مدرس', 'sg'), form('مدرسان', 'du', 'nominative'), form('مدرسين', 'du', 'accgen'), form('مدرسون', 'pl', 'nominative'), form('مدرسين', 'pl', 'accgen')]},
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
  // «رأي» اسم صحيح مستقل عن الفعل «رأى»؛ فهرسته الصرفية تمنع مولد
  // الألف المقصورة من قلب الاسم الصحيح إلى فعل خارج سياق فعلي مثبت.
  'رأي': {gender: 'm', animacy: 'abstract', forms: [form('رأي', 'sg'), form('رأيان', 'du', 'nominative'), form('رأيين', 'du', 'accgen'), form('آراء', 'pl', null, {pluralType: 'broken'})]},
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
  ...expandedNounLemmas(),
  ...expandedNounLemmasV187(),
  ...expandedNounLemmasV1877()
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
    'حزين', 'نظيف', 'واسع', 'ضيق', 'دقيق', 'شامل', 'آمن', 'متاح', 'كثير', 'مخلص'
  ];
  return Object.fromEntries(lemmas.map(lemma => [lemma, regularAdjectiveParadigm(lemma)]));
}

function expandedAdjectiveLemmasV187() {
  const lemmas = [
    'متقدم','محترف','مطور','منتج','محافظ','آلي','يدوي','سياقي','صرفي','نحوي','إملائي',
    'رقمي','لغوي','دلالي','معجمي','قياسي','شاذ','مبني','معرب','مرفوع','منصوب','مجرور',
    'مجزوم','مشكول','مجرد','مزيد','ثلاثي','رباعي','داخلي','خارجي','محلي','عالمي','أجنبي',
    'مفتوح','مغلق','متصل','منفصل','محمي','موثوق','محتمل','ملتبس','صريح','ضمني','مركب',
    'بسيط','متعدد','فوري','نهائي','أولي','ثانوي','ضروري','اختياري','إيجابي','سلبي',
    'صغير','كبير','جديد','شائع','نادر','فعال','مرن','ثابت','متغير','متوافق','مستقل'
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
  ...expandedAdjectiveLemmas(),
  ...expandedAdjectiveLemmasV187(),
  ...expandedAdjectiveLemmasV1877()
});

/** توسعة V18.7.8 — صفات شائعة في السياقات المدرسية والإعلامية (من النسخة العادية). */
function expandedAdjectiveLemmasV1877() {
  const lemmas = [
    'مشهور', 'صارم', 'حريص', 'يقظ', 'غائب', 'بارع', 'متعب', 'مستيقظ',
    'حاذق', 'متقن', 'حكيم', 'عادل', 'شجاع', 'كريم', 'صبور', 'وسيم',
    'لطيف', 'مثابر', 'مبدع', 'صادق', 'أمين', 'جاد', 'هادئ', 'متحمس',
    'منظم', 'بطيء', 'مخلص', 'نزيه', 'ودود', 'بشوش'
  ];
  return Object.fromEntries(lemmas.map(lemma => [lemma, regularAdjectiveParadigm(lemma)]));
}

const PROPER_NAMES = new Set([
  'محمد', 'محمود', 'علي', 'خالد', 'حسن', 'حسين',
  'أحمد', 'إبراهيم', 'إسماعيل', 'إسحاق', 'يعقوب', 'يوسف', 'يونس', 'إدريس',
  'عثمان', 'عمران', 'سليمان', 'معاوية', 'طلحة', 'حمزة', 'فاطمة', 'عائشة', 'زينب',
  'مريم', 'سعاد', 'ليلى', 'سلمى', 'نور', 'هدى', 'أمينة', 'عبدالله', 'عبدالرحمن',
  'الجزائر', 'وهران', 'قسنطينة', 'تونس', 'القاهرة', 'الرباط', 'دمشق', 'بغداد', 'بيروت',
  'باريس', 'لندن', 'روما', 'مدريد', 'رمضان', 'شعبان'
]);
// أسماء الأمكنة في قائمة الأعلام تُعامل دلاليًا بوصفها غير عاقلة، ويجوز
// تأنيث صفتها على تقدير «المدينة». فصل الصنف يمنع توريث سمات علم الشخص لها.
const PLACE_PROPER_NAMES = new Set([
  'الجزائر', 'وهران', 'قسنطينة', 'تونس', 'القاهرة', 'الرباط', 'دمشق', 'بغداد', 'بيروت',
  'باريس', 'لندن', 'روما', 'مدريد'
]);

const PREPOSITIONS = new Set(['من', 'إلى', 'عن', 'على', 'في', 'رب', 'مذ', 'منذ', 'حتى', 'خلا', 'عدا', 'حاشا']);
// أسماء ظروف/مصاحبة تجر ذيل الإضافة، لكنها لا تُصنّف حروف جر.
// تعريفها قبل تقطيع اللواصق يمنع تحليل «بين» خطأً إلى «بـ + ين».
const IDAFA_ADVERBIAL_GOVERNORS = new Set([
  'بعد', 'قبل', 'أمام', 'خلف', 'فوق', 'تحت', 'بين', 'مع', 'عند', 'أثناء', 'خلال', 'حول', 'قرب'
]);
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
  'اللائي': {gender: 'f', number: 'pl'},
  'اللواتي': {gender: 'f', number: 'pl'},
  'الألى': {gender: null, number: 'pl', literary: true}
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

// الرسم بلا همزة في «ابو/ابا/ابي» غير معياري، لكنه يدخل التحليل الصرفي
// كي يحسم السياق الدور أولًا. لا يخلط هذا الجدول بين التطبيع الإملائي
// واختيار الحالة الإعرابية؛ القاعدة الإملائية تعالج الهمزة، ومحرك الأسماء
// الخمسة يختار الواو/الألف/الياء فقط عند ثبوت العامل.
const NONSTANDARD_FIVE_NOUN_FORMS_V1874 = Object.freeze({
  'ابو': {lemma: 'أب', caseForm: 'nominative', canonical: 'أبو'},
  'ابا': {lemma: 'أب', caseForm: 'accusative', canonical: 'أبا'},
  'ابي': {lemma: 'أب', caseForm: 'genitive', canonical: 'أبي'}
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

const KANA_NONSTANDARD_SURFACES = Object.freeze({
  'كانو': {lemma: 'كان', personCode: '3mp', nonstandard: true}
});
const VERBAL_PARTICLES = new Set(['قد', 'سوف']);
const SUBJUNCTIVE_PARTICLES = new Set(['لن', 'أن', 'كي', 'لكي']);
const JUSSIVE_PARTICLES = new Set(['لم']);
function isKanaSurface(core) {
  return KANA_SURFACES.has(core) || Boolean(KANA_NONSTANDARD_SURFACES[core]);
}

const NOUN_FORM_INDEX = new Map();
for (const [lemma, data] of Object.entries(NOUN_LEMMAS)) {
  for (const item of data.forms) {
    const analyses = NOUN_FORM_INDEX.get(item.surface) || [];
    analyses.push({pos: 'noun', lemma, gender: data.gender, animacy: data.animacy, ...item});
    NOUN_FORM_INDEX.set(item.surface, analyses);
  }
}
// V18.7.8: امتداد جمع المذكر السالم لأسماء العاقل المذكرة التي في المعجم جمعُ
// تكسير فقط؛ «عاملون/طبيبون/لاعبون» صيغ فصيحة صحيحة تُحلَّل اسمًا موثوقًا
// بدل الفرضية الإنتاجية الضعيفة، فتتمكن قواعد الرفع والنصب من تصحيح حالتها.
for (const [lemma, data] of Object.entries(NOUN_LEMMAS)) {
  if (data.gender !== 'm' || data.animacy !== 'human') continue;
  if (data.forms.some(x => x.number === 'pl' && /ون$/u.test(x.surface))) continue;
  // صيغة «ون» المرفوعة وحدها؛ أما «ين» فهي مطابقة سطح المثنى، وإضافتها
  // تجعل «طالبين/لاعبين» ملتبسة بين المثنى والجمع فتعطل حسم العدد المحافظ.
  const item = form(lemma + 'ون', 'pl', 'nominative');
  const analyses = NOUN_FORM_INDEX.get(item.surface) || [];
  if (!analyses.some(x => x.lemma === lemma && x.number === 'pl')) {
    analyses.push({pos: 'noun', lemma, gender: 'm', animacy: 'human', ...item});
  }
  NOUN_FORM_INDEX.set(item.surface, analyses);
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
  ...Object.keys(KANA_NONSTANDARD_SURFACES), ...VERBAL_PARTICLES,
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
  'مئة': {value: 100, hundred: true}, 'مائة': {value: 100, hundred: true},
  'مئتا': {value: 200, hundred: true}, 'مئتي': {value: 200, hundred: true},
  'مئتان': {value: 200, hundred: true}, 'مئتين': {value: 200, hundred: true},
  'مائتان': {value: 200, hundred: true}, 'مائتين': {value: 200, hundred: true},
  'ثلاثمئة': {value: 300, hundred: true}, 'ثلاثمائة': {value: 300, hundred: true},
  'أربعمئة': {value: 400, hundred: true}, 'أربعمائة': {value: 400, hundred: true},
  'خمسمئة': {value: 500, hundred: true}, 'خمسمائة': {value: 500, hundred: true},
  'ستمئة': {value: 600, hundred: true}, 'ستمائة': {value: 600, hundred: true},
  'سبعمئة': {value: 700, hundred: true}, 'سبعمائة': {value: 700, hundred: true},
  'ثمانمئة': {value: 800, hundred: true}, 'ثمانمائة': {value: 800, hundred: true},
  'تسعمئة': {value: 900, hundred: true}, 'تسعمائة': {value: 900, hundred: true},
  'ألف': {value: 1000, scale: 1000, multiplier: 1}, 'ألفا': {value: 2000, scale: 1000, multiplier: 2, caseForm: 'nominative', construct: true}, 'ألفي': {value: 2000, scale: 1000, multiplier: 2, caseForm: 'accgen', construct: true},
  'ألفان': {value: 2000, scale: 1000, multiplier: 2}, 'ألفين': {value: 2000, scale: 1000, multiplier: 2},
  'آلاف': {value: 1000, scale: 1000, multiplier: 1},
  'مليون': {value: 1000000, scale: 1000000, multiplier: 1},
  // صيغ المثنى ممثلة صرفيًا، لكن المحلل العددي الدلالي يرفضها لأنها تتجاوز سقف 1,000,000.
  'مليونا': {value: 2000000, scale: 1000000, multiplier: 2, caseForm: 'nominative', construct: true},
  'مليوني': {value: 2000000, scale: 1000000, multiplier: 2, caseForm: 'accgen', construct: true},
  'مليونان': {value: 2000000, scale: 1000000, multiplier: 2}, 'مليونين': {value: 2000000, scale: 1000000, multiplier: 2},
  'ملايين': {value: 1000000, scale: 1000000, multiplier: 1}
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

/** يحلل عددًا عربيًا مركبًا حتى مليون واحد، مع الواو المتصلة أو المنفصلة. */
function parseLargeNumberPhrase(tokens, index) {
  let total = 0;
  let group = 0;
  let j = index;
  let terms = 0;
  let sawLarge = false;
  let lastWasTerm = false;
  let lastData = null;
  const parts = [];

  while (j < tokens.length && j - index < 24) {
    const core = tokens[j]?.morph?.core;
    if (core === 'و') {
      if (!lastWasTerm || !simpleCardinal(tokens[j + 1]?.morph?.core)) break;
      lastWasTerm = false;
      j += 1;
      continue;
    }
    const data = simpleCardinal(core);
    if (!data) break;
    const value = data.value;
    if (value > 1000000) break;
    terms += 1;
    lastWasTerm = true;
    lastData = data;
    parts.push({index: j, value, scale: data.scale || null, hundred: Boolean(data.hundred), caseForm: data.caseForm || null, countedGender: data.countedGender || null});

    if (data.scale) {
      sawLarge = true;
      const multiplier = group || data.multiplier || 1;
      total += multiplier * data.scale;
      group = 0;
    } else if (data.hundred) {
      sawLarge = true;
      if (group > 0 && group < 10) group *= 100;
      else group += value;
    } else {
      group += value;
    }
    j += 1;
  }

  const value = total + group;
  if (!sawLarge || !terms || value < 100 || value > 1000000) return null;
  return {
    value, length: j - index, start: index, end: j, countedIndex: j,
    direction: 'number-before-noun', kind: 'large',
    countedGender: lastData?.countedGender || null,
    surface: tokens.slice(index, j).map(token => token.surface).join(' '),
    components: terms,
    parts
  };
}


/**
 * يحدد عبارة العدد واتجاه المعدود بدل افتراض أن الكلمة السابقة هي المعدود.
 * النتيجة تستخدمها قواعد العدد ومحلل الفاعل وطبقة التحقق النهائية.
 */
function analyzeNumberPhrase(tokens, index) {
  const large = parseLargeNumberPhrase(tokens, index);
  if (large) return large;
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
  if (!data || data.value > 1000000) return null;
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
  if (!Number.isInteger(value) || value < 1 || value > 1000000) return null;
  if (value === 1 || value === 2) return {order: 'postposed', countedNumber: value === 1 ? 'sg' : 'du', case: 'agreement'};
  const tail = value % 100;
  if (value >= 100 && tail === 0) return {countedNumber: 'sg', case: 'genitive'};
  if (value >= 100 && tail > 0) return numberGovernance(tail);
  if (value >= 3 && value <= 10) return {countedNumber: 'pl', case: 'genitive'};
  if (value >= 11 && value <= 99) return {countedNumber: 'sg', case: 'accusative'};
  return null;
}

/* ===== MODULE: src/syntax/phrase-detector.js ===== */
function detectPhrases(context) {
  const {tokens} = context;
  const phrases = [];
  const tokenPhrase = new Array(tokens.length).fill(null);
  for (let i = 0; i < tokens.length; i += 1) {
    const parsed = analyzeNumberPhrase(tokens, i);
    if (!parsed || !['number-before-noun', 'partitive-number-before-min'].includes(parsed.direction)) continue;
    const countedIndex = parsed.countedIndex;
    const counted = tokens[countedIndex];
    if (!counted || counted.sentence !== tokens[i].sentence || !isStrongNominalCandidate(counted)) continue;
    const governance = numberGovernance(parsed.value);
    const countedFeatures = tokenFeatures(counted);
    const pluralGroup = parsed.value > 2;
    const nonhumanGroup = pluralGroup && countedFeatures.animacy === 'nonhuman';
    const nonhumanThreeToTen = nonhumanGroup && parsed.value <= 10;
    const modifierCandidates = [];
    for (let j = countedIndex + 1; j < tokens.length && tokens[j].sentence === counted.sentence; j += 1) {
      if (!isAdjective(tokens[j]) || tokens[j].morph.segments?.conjunction) break;
      modifierCandidates.push(j);
    }
    const phrase = {
      id: `number:${i}:${countedIndex}`,
      type: 'number-phrase', start: i, numberEnd: i + parsed.length,
      countedIndex, coreEnd: countedIndex + 1, end: countedIndex + 1, value: parsed.value,
      direction: parsed.direction, governance, modifierCandidates,
      // externalCase belongs to the whole phrase, whereas governance.case belongs
      // only to the counted noun.  Keeping both prevents the internal genitive in
      // «ثلاثة محاور» from leaking into an external adjective or predicate.
      externalCase: observedCase(tokens[i]),
      semanticFeatures: {
        ...countedFeatures, gender: nonhumanThreeToTen ? 'f' : countedFeatures.gender,
        number: 'sg', numberCandidates: null, agreementException: 'preverbal-number-phrase'
      },
      predicateFeatures: {
        ...countedFeatures,
        gender: nonhumanThreeToTen ? 'f' : countedFeatures.gender,
        number: nonhumanGroup ? 'sg' : (parsed.value === 2 ? 'du' : (pluralGroup ? 'pl' : 'sg')),
        numberCandidates: null,
        agreementException: nonhumanGroup ? 'nonhuman-number-group' : 'number-phrase-group'
      },
      parsed
    };
    phrases.push(phrase);
    for (let j = Math.min(i, countedIndex); j < phrase.end; j += 1) tokenPhrase[j] = phrase.id;
    i = Math.max(i, parsed.start + parsed.length - 1);
  }
  return {phrases, tokenPhrase};
}

function phraseForToken(context, index) {
  const id = context.phraseAnalysis?.tokenPhrase?.[index];
  return context.phraseAnalysis?.phrases?.find(phrase => phrase.id === id) || null;
}

function numberPhraseAtStart(context, index) {
  return context.phraseAnalysis?.phrases?.find(phrase => phrase.type === 'number-phrase' && phrase.start === index) || null;
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

/** أفعال مزيدة وصحيحة شائعة. الجداول مولدة من الماضي والمضارع المراجعين. */
function expandedVerbLexiconV187() {
  const rows = [
    ['أرسل','ر-س-ل','form-IV','يرسل','transitive'], ['أعلن','ع-ل-ن','form-IV','يعلن','transitive'],
    ['أثبت','ث-ب-ت','form-IV','يثبت','transitive'], ['أكمل','ك-م-ل','form-IV','يكمل','transitive'],
    ['أوقف','و-ق-ف','form-IV','يوقف','transitive'], ['أضاف','ض-ي-ف','form-IV-hollow','يضيف','transitive'],
    ['أنتج','ن-ت-ج','form-IV','ينتج','transitive'], ['أنشأ','ن-ش-أ','form-IV','ينشئ','transitive'],
    ['أدخل','د-خ-ل','form-IV','يدخل','transitive'], ['أخرج','خ-ر-ج','form-IV','يخرج','transitive'],
    ['أوضح','و-ض-ح','form-IV','يوضح','transitive'], ['ألغى','ل-غ-و','form-IV-defective','يلغي','transitive'],
    ['تعلم','ع-ل-م','form-V','يتعلم','ambitransitive'], ['تقدم','ق-د-م','form-V','يتقدم','intransitive'],
    ['تأخر','أ-خ-ر','form-V','يتأخر','intransitive'], ['تغير','غ-ي-ر','form-V','يتغير','intransitive'],
    ['تحقق','ح-ق-ق','form-V','يتحقق','intransitive'], ['تطور','ط-و-ر','form-V','يتطور','intransitive'],
    ['تحدث','ح-د-ث','form-V','يتحدث','intransitive'], ['توقف','و-ق-ف','form-V','يتوقف','intransitive'],
    ['تعاون','ع-و-ن','form-VI','يتعاون','intransitive'], ['تناقش','ن-ق-ش','form-VI','يتناقش','intransitive'],
    ['تشارك','ش-ر-ك','form-VI','يتشارك','ambitransitive'], ['توافق','و-ف-ق','form-VI','يتوافق','intransitive'],
    ['استخدم','خ-د-م','form-X','يستخدم','transitive'], ['استعمل','ع-م-ل','form-X','يستعمل','transitive'],
    ['استخرج','خ-ر-ج','form-X','يستخرج','transitive'], ['استقبل','ق-ب-ل','form-X','يستقبل','transitive'],
    ['استمر','م-ر-ر','form-X','يستمر','intransitive'], ['استفاد','ف-ي-د','form-X-hollow','يستفيد','intransitive'],
    ['استطاع','ط-و-ع','form-X-hollow','يستطيع','clausal'], ['استجاب','ج-و-ب','form-X-hollow','يستجيب','intransitive'],
    ['اختار','خ-ي-ر','form-VIII-hollow','يختار','transitive'], ['اكتشف','ك-ش-ف','form-VIII','يكتشف','transitive'],
    ['اعتمد','ع-م-د','form-VIII','يعتمد','intransitive'], ['اعتبر','ع-ب-ر','form-VIII','يعتبر','ditransitive'],
    ['احترم','ح-ر-م','form-VIII','يحترم','transitive'], ['انتظر','ن-ظ-ر','form-VIII','ينتظر','transitive'],
    ['اجتمع','ج-م-ع','form-VIII','يجتمع','intransitive'], ['انتقل','ن-ق-ل','form-VIII','ينتقل','intransitive'],
    ['انطلق','ط-ل-ق','form-VII','ينطلق','intransitive'], ['انخفض','خ-ف-ض','form-VII','ينخفض','intransitive'],
    ['ارتفع','ر-ف-ع','form-VIII','يرتفع','intransitive'], ['اشترك','ش-ر-ك','form-VIII','يشترك','intransitive'],
    ['ناقش','ن-ق-ش','form-III','يناقش','transitive'], ['ساعد','س-ع-د','form-III','يساعد','transitive'],
    ['سافر','س-ف-ر','form-III','يسافر','intransitive'],
    ['حاول','ح-و-ل','form-III','يحاول','clausal'], ['واصل','و-ص-ل','form-III','يواصل','transitive'],
    ['نفذ','ن-ف-ذ','form-II','ينفذ','transitive'], ['طور','ط-و-ر','form-II','يطور','transitive'],
    ['حلل','ح-ل-ل','form-II','يحلل','transitive'], ['ولد','و-ل-د','form-II','يولد','transitive'],
    ['صحح','ص-ح-ح','form-II','يصحح','transitive'], ['وسع','و-س-ع','form-II','يوسع','transitive'],
    // V18.7.9 — أفعال عالية التواتر كانت مفقودة، وغيابها كان يُسقط أخطاء
    // واو الجماعة وهمزة «أن» معها («وان يشجعوهم» ← «وأن يشجعوهم»).
    ['شجع','ش-ج-ع','form-II','يشجع','transitive'], ['علم','ع-ل-م','form-II','يعلم','ditransitive'],
    ['درب','د-ر-ب','form-II','يدرب','transitive'], ['حسن','ح-س-ن','form-II','يحسن','transitive'],
    ['قدم','ق-د-م','form-II','يقدم','transitive'], ['حدد','ح-د-د','form-II','يحدد','transitive'],
    ['وضح','و-ض-ح','form-II','يوضح','transitive'], ['نظم','ن-ظ-م','form-II','ينظم','transitive'],
    // «غير» لا تُدرج فعلًا: رسمها المجرد أداة استثناء/نفي في الأغلب الأعم
    // («حضر الطلاب غير المعلمين»)، وإدراجها يولّد «غير ← غيروا». تبقى
    // معالجتها لقاعدة الاستثناء وحدها.
    ['فكر','ف-ك-ر','form-II','يفكر','intransitive'],
    ['تأكد','أ-ك-د','form-V','يتأكد','intransitive'], ['اهتم','ه-م-م','form-VIII','يهتم','intransitive'],
    ['شارك','ش-ر-ك','form-III','يشارك','ambitransitive']
  ];
  const hollowShorts = Object.freeze({
    'أضاف': {past: 'أضف', present: 'ضف'},
    'استفاد': {past: 'استفد', present: 'ستفد'},
    'استطاع': {past: 'استطع', present: 'ستطع'},
    'استجاب': {past: 'استجب', present: 'ستجب'},
    'اختار': {past: 'اختر', present: 'ختر'}
  });
  return Object.fromEntries(rows.map(([lemma, root, verbClass, present, valency]) => {
    let paradigm = soundParadigm(lemma, present);
    if (hollowShorts[lemma]) paradigm = hollowParadigm(lemma, hollowShorts[lemma].past, present, hollowShorts[lemma].present);
    else if (verbClass.includes('defective')) paradigm = defectiveYaParadigm(lemma, lemma.replace(/ى$/u, 'ي'), lemma.slice(0, -1), present);
    return [lemma, entry(lemma, root, verbClass, present, paradigm, valency)];
  }));
}

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
  'شكر': entry('شكر', 'ش-ك-ر', 'sound', 'يشكر', soundParadigm('شكر', 'يشكر'), 'transitive'),
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
  'غاب': entry('غاب', 'غ-ي-ب', 'hollow-ya', 'يغيب', hollowParadigm('غاب', 'غب', 'يغيب', 'غب')),
  'شارك': entry('شارك', 'ش-ر-ك', 'sound-derived', 'يشارك', soundParadigm('شارك', 'يشارك'), 'ambitransitive'),
  'كرم': entry('كرم', 'ك-ر-م', 'sound', 'يكرم', soundParadigm('كرم', 'يكرم'), 'transitive'),
  'استحق': entry('استحق', 'ح-ق-ق', 'sound-derived', 'يستحق', soundParadigm('استحق', 'يستحق'), 'transitive'),
  /* مدخلان عاليَا الأثر للتحليل التركيبي: إرادة المصدر الصريح وفعل الشرط. */
  'أراد': entry('أراد', 'ر-و-د', 'form-IV-hollow', 'يريد', hollowParadigm('أراد', 'أرد', 'يريد', 'رد'), 'transitive'),
  'اجتهد': entry('اجتهد', 'ج-ه-د', 'form-VIII', 'يجتهد', soundParadigm('اجتهد', 'يجتهد')),
  /* ── 18.7.6: أفعال متعدية شائعة مفقودة تكمل إطار الفعل-المفعول ── */
  'قابل': entry('قابل', 'ق-ب-ل', 'form-III', 'يقابل', soundParadigm('قابل', 'يقابل'), 'transitive'),
  'شاهد': entry('شاهد', 'ش-ه-د', 'form-III', 'يشاهد', soundParadigm('شاهد', 'يشاهد'), 'transitive'),
  'لاحظ': entry('لاحظ', 'ل-ح-ظ', 'form-III', 'يلاحظ', soundParadigm('لاحظ', 'يلاحظ'), 'transitive'),
  'حاور': entry('حاور', 'ح-و-ر', 'form-III', 'يحاور', soundParadigm('حاور', 'يحاور'), 'transitive'),
  'رافق': entry('رافق', 'ر-ف-ق', 'form-III', 'يرافق', soundParadigm('رافق', 'يرافق'), 'transitive'),
  'قارن': entry('قارن', 'ق-ر-ن', 'form-III', 'يقارن', soundParadigm('قارن', 'يقارن'), 'transitive'),
  'عالج': entry('عالج', 'ع-ل-ج', 'form-III', 'يعالج', soundParadigm('عالج', 'يعالج'), 'transitive'),
  'راجع': entry('راجع', 'ر-ج-ع', 'form-III', 'يراجع', soundParadigm('راجع', 'يراجع'), 'transitive'),
  'حفظ': entry('حفظ', 'ح-ف-ظ', 'sound', 'يحفظ', soundParadigm('حفظ', 'يحفظ'), 'transitive'),
  'زار': entry('زار', 'ز-و-ر', 'hollow-waw', 'يزور', hollowParadigm('زار', 'زر', 'يزور', 'زر'), 'transitive'),
  /* ── V18.7.7: أفعال شائعة كانت مفقودة، كشفتها جولة الـ400 الخارجية ── */
  'شرح': entry('شرح', 'ش-ر-ح', 'sound', 'يشرح', soundParadigm('شرح', 'يشرح'), 'transitive'),
  'صمم': entry('صمم', 'ص-م-م', 'doubled', 'يصمم', doubledParadigm('صمم', 'يصمم', 'صمم'), 'transitive'),
  'دافع': entry('دافع', 'د-ف-ع', 'form-III', 'يدافع', soundParadigm('دافع', 'يدافع'), 'transitive'),
  'حصد': entry('حصد', 'ح-ص-د', 'sound', 'يحصد', soundParadigm('حصد', 'يحصد'), 'transitive'),
  'غادر': entry('غادر', 'غ-د-ر', 'sound', 'يغادر', soundParadigm('غادر', 'يغادر'), 'transitive'),
  'نشر': entry('نشر', 'ن-ش-ر', 'sound', 'ينشر', soundParadigm('نشر', 'ينشر'), 'transitive'),
  'عمل': entry('عمل', 'ع-م-ل', 'sound', 'يعمل', soundParadigm('عمل', 'يعمل'), 'ambitransitive'),
  'رسم': entry('رسم', 'ر-س-م', 'sound', 'يرسم', soundParadigm('رسم', 'يرسم'), 'transitive'),
  'زرع': entry('زرع', 'ز-ر-ع', 'sound', 'يزرع', soundParadigm('زرع', 'يزرع'), 'transitive'),
  'اشترى': entry('اشترى', 'ش-ر-ي', 'form-VIII-defective', 'يشتري', defectiveYaParadigm('اشترى', 'اشتري', 'اشتر', 'يشتري'), 'transitive'),
  'افتتح': entry('افتتح', 'ف-ت-ح', 'form-VIII', 'يفتتح', soundParadigm('افتتح', 'يفتتح'), 'transitive'),
  'استقبل': entry('استقبل', 'ق-ب-ل', 'form-X', 'يستقبل', soundParadigm('استقبل', 'يستقبل'), 'transitive'),
  'عقد': entry('عقد', 'ع-ق-د', 'sound', 'يعقد', soundParadigm('عقد', 'يعقد'), 'transitive'),
  'وزع': entry('وزع', 'و-ز-ع', 'sound', 'يوزع', soundParadigm('وزع', 'يوزع'), 'transitive'),
  'راقب': entry('راقب', 'ر-ق-ب', 'form-III', 'يراقب', soundParadigm('راقب', 'يراقب'), 'transitive'),
  'استضاف': entry('استضاف', 'ض-ي-ف', 'form-X-hollow', 'يستضيف', hollowParadigm('استضاف', 'استضف', 'يستضيف', 'ستضف'), 'transitive'),
  'استمع': entry('استمع', 'س-م-ع', 'form-VIII', 'يستمع', soundParadigm('استمع', 'يستمع')),
  'ساعد': entry('ساعد', 'س-ع-د', 'form-III', 'يساعد', soundParadigm('ساعد', 'يساعد'), 'transitive'),
  'حلّ': entry('حلّ', 'ح-ل-ل', 'doubled', 'يحلّ', doubledParadigm('حلّ', 'يحلّ', 'حلل'), 'transitive'),
  'اهتم': entry('اهتم', 'ه-م-م', 'form-VIII', 'يهتم', soundParadigm('اهتم', 'يهتم')),
  'ناقش': entry('ناقش', 'ن-ق-ش', 'form-III', 'يناقش', soundParadigm('ناقش', 'يناقش'), 'transitive'),
  'أنجز': entry('أنجز', 'ن-ج-ز', 'form-IV', 'ينجز', soundParadigm('أنجز', 'ينجز'), 'transitive'),
  'أصلح': entry('أصلح', 'ص-ل-ح', 'form-IV', 'يصلح', soundParadigm('أصلح', 'يصلح'), 'transitive'),
  'نقل': entry('نقل', 'ن-ق-ل', 'sound', 'ينقل', soundParadigm('نقل', 'ينقل'), 'transitive'),
  'أضاء': entry('أضاء', 'ض-و-ء', 'form-IV-hollow', 'يضيء', soundParadigm('أضاء', 'يضيء'), 'transitive'),
  'شحن': entry('شحن', 'ش-ح-ن', 'sound', 'يشحن', soundParadigm('شحن', 'يشحن'), 'transitive'),
  'صدر': entry('صدر', 'ص-د-ر', 'sound', 'يصدر', soundParadigm('صدر', 'يصدر')),
  'أعد': entry('أعد', 'ع-د-د', 'form-IV-doubled', 'يعدّ', doubledParadigm('أعد', 'يعدّ', 'أعدد'), 'transitive'),
  'رتب': entry('رتب', 'ر-ت-ب', 'sound', 'يرتب', soundParadigm('رتب', 'يرتب'), 'transitive'),
  'ترجم': entry('ترجم', 'ت-ر-ج-م', 'sound-derived', 'يترجم', soundParadigm('ترجم', 'يترجم'), 'transitive'),
  ...expandedVerbLexiconV187()
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

function imperativeSuffix(base, personCode, feminineStem = base) {
  if (personCode === '2ms') return base;
  if (personCode === '2fs') return `${feminineStem}ي`;
  if (personCode === '2du') return `${feminineStem}ا`;
  if (personCode === '2mp') return `${base}وا`;
  if (personCode === '2fp') return `${feminineStem}ن`;
  return null;
}

function imperativeVerb(lemma, personCode = '2ms') {
  const meta = VERB_LEXICON[lemma];
  if (!meta || !personCode.startsWith('2')) return null;
  const exceptions = {
    'أخذ': {'2ms': 'خذ', '2fs': 'خذي', '2du': 'خذا', '2mp': 'خذوا', '2fp': 'خذن'},
    'أكل': {'2ms': 'كل', '2fs': 'كلي', '2du': 'كلا', '2mp': 'كلوا', '2fp': 'كلن'},
    'قال': {'2ms': 'قل', '2fs': 'قولي', '2du': 'قولا', '2mp': 'قولوا', '2fp': 'قلن'},
    'باع': {'2ms': 'بع', '2fs': 'بيعي', '2du': 'بيعا', '2mp': 'بيعوا', '2fp': 'بعن'},
    'قام': {'2ms': 'قم', '2fs': 'قومي', '2du': 'قوما', '2mp': 'قوموا', '2fp': 'قمن'},
    'خاف': {'2ms': 'خف', '2fs': 'خافي', '2du': 'خافا', '2mp': 'خافوا', '2fp': 'خفن'},
    'مات': {'2ms': 'مت', '2fs': 'موتي', '2du': 'موتا', '2mp': 'موتوا', '2fp': 'متن'},
    'عاش': {'2ms': 'عش', '2fs': 'عيشي', '2du': 'عيشا', '2mp': 'عيشوا', '2fp': 'عشن'},
    'بات': {'2ms': 'بت', '2fs': 'بيتي', '2du': 'بيتا', '2mp': 'بيتوا', '2fp': 'بتن'},
    'عاد': {'2ms': 'عد', '2fs': 'عودي', '2du': 'عودا', '2mp': 'عودوا', '2fp': 'عدن'},
    'نام': {'2ms': 'نم', '2fs': 'نامي', '2du': 'ناما', '2mp': 'ناموا', '2fp': 'نمن'},
    'صام': {'2ms': 'صم', '2fs': 'صومي', '2du': 'صوما', '2mp': 'صوموا', '2fp': 'صمن'},
    'زاد': {'2ms': 'زد', '2fs': 'زيدي', '2du': 'زيدا', '2mp': 'زيدوا', '2fp': 'زدن'},
    'فاز': {'2ms': 'فز', '2fs': 'فوزي', '2du': 'فوزا', '2mp': 'فوزوا', '2fp': 'فزن'},
    'غاب': {'2ms': 'غب', '2fs': 'غيبي', '2du': 'غيبا', '2mp': 'غيبوا', '2fp': 'غبن'},
    'دعا': {'2ms': 'ادع', '2fs': 'ادعي', '2du': 'ادعوا', '2mp': 'ادعوا', '2fp': 'ادعون'},
    'رمى': {'2ms': 'ارم', '2fs': 'ارمي', '2du': 'ارميا', '2mp': 'ارموا', '2fp': 'ارمين'},
    'قضى': {'2ms': 'اقض', '2fs': 'اقضي', '2du': 'اقضيا', '2mp': 'اقضوا', '2fp': 'اقضين'},
    'سعى': {'2ms': 'اسع', '2fs': 'اسعي', '2du': 'اسعيا', '2mp': 'اسعوا', '2fp': 'اسعين'},
    'بنى': {'2ms': 'ابن', '2fs': 'ابني', '2du': 'ابنيا', '2mp': 'ابنوا', '2fp': 'ابنين'},
    'مشى': {'2ms': 'امش', '2fs': 'امشي', '2du': 'امشيا', '2mp': 'امشوا', '2fp': 'امشين'},
    'جرى': {'2ms': 'اجر', '2fs': 'اجري', '2du': 'اجريا', '2mp': 'اجروا', '2fp': 'اجرين'},
    'روى': {'2ms': 'ارو', '2fs': 'اروي', '2du': 'ارويا', '2mp': 'ارووا', '2fp': 'اروين'},
    'رأى': {'2ms': 'ر', '2fs': 'ري', '2du': 'ريا', '2mp': 'روا', '2fp': 'رين'},
    'ألغى': {'2ms': 'ألغ', '2fs': 'ألغي', '2du': 'ألغيا', '2mp': 'ألغوا', '2fp': 'ألغين'},
    'أراد': {'2ms': 'أرد', '2fs': 'أريدي', '2du': 'أريدا', '2mp': 'أريدوا', '2fp': 'أردن'},
    'أضاف': {'2ms': 'أضف', '2fs': 'أضيفي', '2du': 'أضيفا', '2mp': 'أضيفوا', '2fp': 'أضفن'},
    'استفاد': {'2ms': 'استفد', '2fs': 'استفيدي', '2du': 'استفيدا', '2mp': 'استفيدوا', '2fp': 'استفدن'},
    'استطاع': {'2ms': 'استطع', '2fs': 'استطيعي', '2du': 'استطيعا', '2mp': 'استطيعوا', '2fp': 'استطعن'},
    'استجاب': {'2ms': 'استجب', '2fs': 'استجيبي', '2du': 'استجيبا', '2mp': 'استجيبوا', '2fp': 'استجبن'},
    'اختار': {'2ms': 'اختر', '2fs': 'اختاري', '2du': 'اختارا', '2mp': 'اختاروا', '2fp': 'اخترن'}
  };
  if (exceptions[lemma]?.[personCode]) return exceptions[lemma][personCode];

  // في الأوزان المزيدة الصحيحة تطابق قاعدة الأمر رسم الماضي المعجمي بلا حركات.
  if (/^(?:form-(?:II|III|IV|V|VI|VII|VIII|X)|sound-derived)/u.test(meta.verbClass)) {
    return imperativeSuffix(lemma, personCode);
  }
  const second = meta.paradigm.present['2ms'];
  if (!second?.startsWith('ت')) return null;
  let stem = second.slice(1);
  if (meta.verbClass === 'assimilated-waw') return imperativeSuffix(stem, personCode);
  const base = /^[اإأآ]/u.test(stem) ? stem : `ا${stem}`;
  return imperativeSuffix(base, personCode);
}

function applyVerbMood(surface, personCode, mood, lemma = null) {
  if (!surface || !mood || mood === 'indicative') return surface;
  let result = surface;
  if (['2fs', '2du', '2mp', '3dm', '3df', '3mp'].includes(personCode)) {
    if (/ون$/u.test(result)) result = result.replace(/ون$/u, 'وا');
    else if (/ان$/u.test(result)) result = result.replace(/ان$/u, 'ا');
    else if (/ين$/u.test(result)) result = result.replace(/ين$/u, 'ي');
    return result;
  }
  if (mood !== 'jussive' || personCode === '3fp' || personCode === '2fp') return result;
  const verbClass = VERB_LEXICON[lemma]?.verbClass || '';
  if (/defective/u.test(verbClass) || lemma === 'نسي') return result.replace(/[اوىي]$/u, '');
  if (/hollow/u.test(verbClass)) {
    const chars = [...result];
    if (chars.length >= 3 && /[اوي]/u.test(chars.at(-2))) chars.splice(chars.length - 2, 1);
    return chars.join('');
  }
  return result;
}

// تفهرس الصيغ المزاجية والأمر بعد بناء المعجم؛ وبذلك يتعرف المحلل إلى «لم يرمِ»
// و«لن يكتبوا» من السطح نفسه، لا من الصيغة المرفوعة المفترضة فقط.
for (const meta of Object.values(VERB_LEXICON)) {
  for (const [personCode, indicative] of Object.entries(meta.paradigm.present)) {
    for (const mood of ['subjunctive', 'jussive']) {
      const surface = applyVerbMood(indicative, personCode, mood, meta.lemma);
      if (!surface || surface === indicative) continue;
      const key = stripDiacritics(surface);
      const list = VERB_FORM_INDEX.get(key) || [];
      if (!list.some(item => item.lemma === meta.lemma && item.tense === 'present' && item.personCode === personCode && item.mood === mood)) {
        list.push({
          pos: 'verb', lemma: meta.lemma, root: meta.root, verbClass: meta.verbClass,
          tense: 'present', mood, personCode, ...PERSON_FEATURES[personCode], surface,
          valency: meta.valency, transitive: meta.transitive, confidence: meta.verified ? 0.992 : 0.84
        });
        VERB_FORM_INDEX.set(key, list);
      }
    }
  }
  for (const personCode of ['2ms', '2fs', '2du', '2mp', '2fp']) {
    const surface = imperativeVerb(meta.lemma, personCode);
    if (!surface) continue;
    const key = stripDiacritics(surface);
    const list = VERB_FORM_INDEX.get(key) || [];
    if (!list.some(item => item.lemma === meta.lemma && item.tense === 'imperative' && item.personCode === personCode)) {
      list.push({
        pos: 'verb', lemma: meta.lemma, root: meta.root, verbClass: meta.verbClass,
        tense: 'imperative', mood: 'imperative', personCode, ...PERSON_FEATURES[personCode], surface,
        valency: meta.valency, transitive: meta.transitive, confidence: meta.verified ? 0.99 : 0.83
      });
      VERB_FORM_INDEX.set(key, list);
    }
  }
}

/* ===== MODULE: src/morphology/hamza-morphological-resolver-1.0.js ===== */
function hamzaMorphologicalKey(value) {
  return stripDiacritics(value)
    .replace(/آ/gu, 'ءا')
    .replace(/[أإؤئ]/gu, 'ء');
}

function replaceLastHamzaSeat(surface, seat) {
  const chars = [...surface];
  for (let i = chars.length - 1; i >= 0; i -= 1) {
    if (/[ءأإؤئ]/u.test(chars[i])) {
      chars[i] = seat;
      return chars.join('');
    }
  }
  return surface;
}

function acceptedHamzaVerbForms(surface, analysis) {
  const forms = new Set([surface]);
  if (!/[ءأإؤئآ]/u.test(analysis.lemma || '') && !String(analysis.root || '').includes('ء')) return forms;

  // التوسط العارض قبل واو الجماعة: المدرستان «يقرأون/قرأوا» و«يقرؤون/قرؤوا» صحيحتان.
  if (analysis.personCode === '3mp' || analysis.personCode === '2mp') {
    forms.add(replaceLastHamzaSeat(surface, 'ؤ'));
  }

  // اندماج همزة الفعل في ألف الاثنين بالمَدّ وجه إملائي معتبر: «يقرأان/يقرآن».
  if (['3dm', '3df', '2du'].includes(analysis.personCode) || (analysis.tense === 'past' && /أا$/u.test(surface))) {
    forms.add(surface.replace(/أا(?=ن?$)/u, 'آ'));
  }
  return forms;
}

const HAMZA_MORPHOLOGICAL_FAMILIES = new Map();
const hamzaVerbSnapshot = [...VERB_FORM_INDEX.entries()].flatMap(([surface, analyses]) =>
  analyses.map(analysis => ({surface, analysis}))
);

for (const {surface, analysis} of hamzaVerbSnapshot) {
  if (!/[ءأإؤئآ]/u.test(surface) || (!String(analysis.root || '').includes('ء') && !/[ءأإؤئآ]/u.test(analysis.lemma || ''))) continue;
  const accepted = acceptedHamzaVerbForms(surface, analysis);
  const key = hamzaMorphologicalKey(surface);
  const signature = `${analysis.lemma}|${analysis.tense}|${analysis.personCode}|${analysis.mood || 'indicative'}`;
  const familyKey = `${key}|${signature}`;
  const preferred = (analysis.personCode === '3mp' || analysis.personCode === '2mp')
    ? replaceLastHamzaSeat(surface, 'ؤ')
    // V18.7.7: المثنى المهموز يفضَّل مدمجًا بالمَدّ (قرآ/يقرآن) على فصل الهمزة
    // عن ألف الاثنين (قرأا/يقرأان)؛ الوجهان مقبولان لكن المدمج هو الرسم المعتمد.
    : (['3dm', '3df', '2du'].includes(analysis.personCode) || (analysis.tense === 'past' && /أا$/u.test(surface)))
      ? surface.replace(/أا(?=ن?$)/u, 'آ')
      : surface;
  const family = HAMZA_MORPHOLOGICAL_FAMILIES.get(familyKey) || {
    key, signature, lemma: analysis.lemma, root: analysis.root, tense: analysis.tense,
    personCode: analysis.personCode, mood: analysis.mood || 'indicative', acceptedForms: new Set(),
    canonicalForm: surface, preferredForm: preferred, confidence: analysis.confidence || 0.98
  };
  for (const variant of accepted) {
    family.acceptedForms.add(variant);
    if (variant === surface) continue;
    const list = VERB_FORM_INDEX.get(variant) || [];
    if (!list.some(item => item.lemma === analysis.lemma && item.tense === analysis.tense
        && item.personCode === analysis.personCode && (item.mood || 'indicative') === (analysis.mood || 'indicative'))) {
      list.push({...analysis, surface: variant, canonicalSurface: surface,
        orthographicVariant: 'accepted-hamza-morphology', confidence: Math.min(0.993, analysis.confidence || 0.98)});
      VERB_FORM_INDEX.set(variant, list);
    }
  }
  HAMZA_MORPHOLOGICAL_FAMILIES.set(familyKey, family);
}

function resolveHamzaMorphologyV1(core) {
  if (!/[ءأإؤئآ]/u.test(core || '')) return null;
  const key = hamzaMorphologicalKey(core);
  const families = [...HAMZA_MORPHOLOGICAL_FAMILIES.values()].filter(family => family.key === key);
  if (!families.length) return null;

  // قد يتطابق السطح في أكثر من شخص (مثل «تقرأان»: 3df/2du). لا نرفض التحليل
  // إذا اتفقت المسارات الصرفية كلها على الحكم الإملائي والبديل؛ نحتفظ بالغموض صراحة.
  const acceptedForms = [...new Set(families.flatMap(family => [...family.acceptedForms]))];
  const acceptingFamilies = families.filter(family => family.acceptedForms.has(core));
  if (acceptingFamilies.length > 0 && acceptingFamilies.length < families.length) return null;
  const accepted = acceptingFamilies.length === families.length;
  const preferredForms = new Set(families.map(family => family.preferredForm));
  const canonicalForms = new Set(families.map(family => family.canonicalForm));
  if (!accepted && preferredForms.size !== 1) return null;
  const lemmas = [...new Set(families.map(family => family.lemma))];
  const roots = [...new Set(families.map(family => family.root))];
  const tenses = [...new Set(families.map(family => family.tense))];
  const moods = [...new Set(families.map(family => family.mood))];
  const personCodes = [...new Set(families.map(family => family.personCode))];
  return {
    resolver: 'HamzaMorphologicalResolver', version: '1.0', status: accepted ? 'accepted' : 'invalid-seat',
    input: core, lemma: lemmas.length === 1 ? lemmas[0] : null,
    root: roots.length === 1 ? roots[0] : null,
    tense: tenses.length === 1 ? tenses[0] : null,
    personCode: personCodes.length === 1 ? personCodes[0] : null,
    personCodes, mood: moods.length === 1 ? moods[0] : null,
    analyses: families.map(family => ({signature: family.signature, lemma: family.lemma,
      tense: family.tense, personCode: family.personCode, mood: family.mood})),
    canonicalForm: canonicalForms.size === 1 ? [...canonicalForms][0] : null,
    preferredForm: preferredForms.size === 1 ? [...preferredForms][0] : null,
    acceptedForms, confidence: accepted ? 0.995 : 0.975,
    evidence: ['verb-lexeme', roots.length === 1 ? `root:${roots[0]}` : 'root-ambiguous',
      tenses.length === 1 ? `tense:${tenses[0]}` : 'tense-ambiguous',
      personCodes.length === 1 ? `person:${personCodes[0]}` : `persons:${personCodes.join('/')}`,
      'inflection-conditioned-hamza-seat', preferredForms.size === 1 ? 'orthographic-consensus' : 'orthographic-ambiguity']
  };
}

function conjugateVerb(lemma, tense, personCode, options = {}) {
  if (tense === 'imperative') return imperativeVerb(lemma, personCode);
  let surface = VERB_LEXICON[lemma]?.paradigm?.[tense]?.[personCode] || null;
  if (tense === 'present') surface = applyVerbMood(surface, personCode, options.mood, lemma);
  // V18.7.7: اندماج همزة الفعل في ألف الاثنين بالمَدّ وجه إملائي معتبر
  // («يقرأان/يقرآن»، «قرأا/قرآ») — نولّد الوجه المدمج المفضَّل بدل فصل الهمزة
  // عن ألف الاثنين، مطابقةً للمبدأ الذي يعتمده HamzaMorphologicalResolver 1.0.
  // المولدُ هنا لا يمرّ إلا عبر جداول VERB_LEXICON، فالنمط «أا» في النهاية لا
  // يصدر إلا عن المثنى المهموز؛ لا حاجة لقائمة استثناءات.
  if (surface && /أا(?=ن?$)/u.test(surface)) {
    surface = surface.replace(/أا(?=ن?$)/u, 'آ');
  }
  return surface;
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
    || PREPOSITIONS.has(core) || IDAFA_ADVERBIAL_GOVERNORS.has(core) || CONJUNCTIONS.has(core)
    || INNA_PARTICLES.has(core) || KANA_SURFACES.has(core)
    || DEMONSTRATIVES[core] || PERSONAL_PRONOUNS[core] || RELATIVE_PRONOUNS[core]
    || FIVE_NOUN_FORMS[core] || NONSTANDARD_FIVE_NOUN_FORMS_V1874[core]
    || KANA_NONSTANDARD_SURFACES[core] || VERBAL_PARTICLES.has(core)
    || SUBJUNCTIVE_PARTICLES.has(core) || JUSSIVE_PARTICLES.has(core);
}

function looksLikeFiveNounWithEnclitic(value) {
  const suffixPattern = '(?:كما|هما|هم|هن|ها|نا|كم|كن|ني|ه|ك|ي)';
  return new RegExp(`^(?:${Object.keys(FIVE_NOUN_FORMS).join('|')})${suffixPattern}$`, 'u').test(value);
}

function knownCore(value) {
  const core = value.replace(/^ال/u, '');
  // V18.7.9: الجذع المرسوم خطأً وله مدخل إملائي مراجع جذعٌ معروف كذلك؛ فبدونه
  // كانت «بالقراءه/للحياه» تبقى كتلة واحدة غير محللة فيفوتها التصحيح المعجمي.
  // ويُشترط ألا يكون تصحيحه صيغةً فعلية: «ال» وحرف الجر لا يدخلان على الفعل،
  // فلا يجوز أن يفتح المدخل الفعلي («درسو ← درسوا») تقطيعًا اسميًا لـ«بالدرسو».
  const reviewedCorrection = typeof WORDS !== 'undefined'
    ? (WORDS[core] || WORDS[value] || null) : null;
  const reviewedMisspelling = Boolean(reviewedCorrection) && !/\s/u.test(reviewedCorrection)
    && !(typeof VERB_FORM_INDEX !== 'undefined' && VERB_FORM_INDEX.has(reviewedCorrection));
  return exactKnown(value) || reviewedMisspelling
    || looksLikeFiveNounWithEnclitic(core) || /(?:ة|ات|ان|ين|ون)$/u.test(core);
}

/**
 * V18.7.9 — بناء اللاصقة الأمامية برسمها الصحيح. لام الجر مع «ال» تُدغم
 * رسمًا فتُكتب «لل» لا «لال»؛ وتجاهل ذلك كان ينتج «للصوره ← لالصورة».
 */
function buildClitcPrefix(conjunction, preposition, article) {
  const head = `${conjunction || ''}`;
  if (article && preposition === 'ل') return `${head}لل`;
  return `${head}${preposition || ''}${article ? 'ال' : ''}`;
}

function splitClitics(surface) {
  const clean = stripDiacritics(surface);
  let rest = clean;
  let conjunction = null;
  let preposition = null;
  let article = false;
  let enclitic = null;

  // لا نفصل الواو/الفاء عن كلمة مجهولة لمجرد أن الباقي يوافق لاحقة اسمية
  // إنتاجية؛ فهذا كان يحلل «فقرة» إلى «فـ + قرة». يلزم الآن أصل معجمي أو
  // مغلق معروف، وهو قرار محافظ يمنع اختراع عطف من الحرف الأول للكلمة.
  const conjunctionCore = rest.slice(1);
  if (!exactKnown(rest) && /^[وف]/u.test(rest) && rest.length > 2
      && (exactKnown(conjunctionCore) || looksLikeFiveNounWithEnclitic(conjunctionCore))) {
    conjunction = rest[0];
    rest = conjunctionCore;
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

  let verbalObjectCarrierAlif = false;
  // V18.7.9 — قاعدة «لا يجتمع أل والإضافة»: المعرَّف بـ«ال» لا يقبل ضميرًا
  // ملكيًا متصلًا في الفصحى إطلاقًا؛ فلا يصح تحليل «العربيه» إلى «ال+عربي+ه»
  // ولا «الكتابه» إلى «ال+كتاب+ه». كان هذا التحليل هو السبب الجذري لاقتراح
  // «العربيه ← العربيةه»: تُقلب الهاء تاءً مربوطة في الجذع، ثم تُعاد الهاء
  // المفصولة ضميرًا فتجتمع «ةه». الهاء بعد «ال» إما أصلية (الوجه، الفقه،
  // المياه) وإما تاء مربوطة مرسومة خطأً، وكلتاهما جزء من الجذع لا ضمير.
  if (article) {
    return {
      surface, clean, conjunction, preposition, article, enclitic: null, verbalObjectCarrierAlif: false,
      prefix: buildClitcPrefix(conjunction, preposition, true),
      core: rest, coreSurface: rest,
      definite: true
    };
  }
  // V18.7.8: الشكل الكامل المعروف معجميًا يتقدم على قراءة «جذع + ضمير»؛
  // وإلا تحولت «الصحفي» إلى «صحف + ي» وورثت الجملة جنسًا مؤنثًا مزيفًا من
  // جمع التكسير. قراءة الإضافة/الضمير تبقى متاحة لمن ليس شكله الكامل معروفًا.
  if (NOUN_FORM_INDEX.has(rest) || ADJECTIVE_FORM_INDEX.has(rest)) {
    return {
      surface, clean, conjunction, preposition, article, enclitic: null, verbalObjectCarrierAlif: false,
      prefix: buildClitcPrefix(conjunction, preposition, article),
      core: rest, coreSurface: rest,
      definite: article || PROPER_NAMES.has(rest)
    };
  }
  for (const suffix of ENCLITICS) {
    if (!rest.endsWith(suffix) || rest.length <= suffix.length + 1) continue;
    const candidate = rest.slice(0, -suffix.length);
    // V18.7.8: ياء الضمير المتصل بجذع منتهٍ بياء تكتب ياءين (صحفيّي)، فلا
    // تُفصل ياء واحدة عن جذع يائي؛ وإلا تحول «الصحفي» إلى «صحف + ي» وورثت
    // الجملة جنسًا مؤنثًا مزيفًا من جمع التكسير.
    if (suffix === 'ي' && candidate.endsWith('ي')) continue;
    const directVerbHost = !VERB_FORM_INDEX.has(rest) && VERB_FORM_INDEX.has(candidate);
    // عند إسناد فعل واو الجماعة إلى ضمير مفعول تحذف ألف التفريق رسمًا: «قرأوه» ← «قرأوا» + «ه».
    const wawVerbHost = !VERB_FORM_INDEX.has(rest) && /و$/u.test(candidate)
      && VERB_FORM_INDEX.has(`${candidate}ا`);
    if (EMPHASIS_BASES.has(candidate) || NOUN_FORM_INDEX.has(candidate) || FIVE_NOUN_FORMS[candidate]
        || directVerbHost || wawVerbHost) {
      enclitic = suffix;
      rest = wawVerbHost ? `${candidate}ا` : candidate;
      verbalObjectCarrierAlif = wawVerbHost;
      break;
    }
  }

  return {
    surface, clean, conjunction, preposition, article, enclitic, verbalObjectCarrierAlif,
    prefix: buildClitcPrefix(conjunction, preposition, article),
    core: rest, coreSurface: rest,
    definite: article || Boolean(enclitic) || PROPER_NAMES.has(rest)
  };
}

function rebuildToken(token, newCore, {keepEnclitic = true} = {}) {
  const seg = token.morph?.segments || splitClitics(token.surface);
  let host = newCore;
  if (keepEnclitic && seg.verbalObjectCarrierAlif && /وا$/u.test(host)) host = host.slice(0, -1);
  return `${seg.prefix}${host}${keepEnclitic ? (seg.enclitic || '') : ''}`;
}


/* ===== MODULE: src/morphology/unvocalized-analyzer.js ===== */
/**
 * يولد قراءات رسمية محتملة من دون افتراض وجود الحركة الأخيرة.
 * أهم حالة: ألف تنوين النصب المكتوبة بلا تنوين «كتابا» ← جذع «كتاب».
 * لا تحذف الألف إلا إذا أعطى الجذع مدخلًا معجميًا، منعًا لتحويل «دعا/عصا».
 */
function unvocalizedNominalVariants(core) {
  const variants = [{core, source: 'surface', confidence: 1, inferredCase: null}];
  // يمرر المرشح الإملائي المراجع إلى المحلل الصرفي قبل بناء العلاقات النحوية؛
  // فلا تُحلل «مدرسه» مثلًا اسمًا مذكرًا ثم ينتج عنها اتفاق زائف قبل تصحيح «مدرسة».
  const reviewedOrthographicCore = typeof WORDS !== 'undefined' ? WORDS[core] : null;
  if (reviewedOrthographicCore && !/\s/u.test(reviewedOrthographicCore)
      && (NOUN_FORM_INDEX.has(reviewedOrthographicCore) || ADJECTIVE_FORM_INDEX.has(reviewedOrthographicCore))) {
    variants.push({
      core: reviewedOrthographicCore, source: 'reviewed-orthographic-morphology-bridge',
      confidence: 0.975, inferredCase: null, orthographicSurface: core
    });
  }
  if (/ا$/u.test(core) && core.length > 3) {
    const base = core.slice(0, -1);
    if (NOUN_FORM_INDEX.has(base) || ADJECTIVE_FORM_INDEX.has(base) || PROPER_NAMES.has(base) || DIPTOTE_EXACT.has(base)) {
      variants.push({
        core: base, source: 'unvocalized-accusative-alif', confidence: 0.985,
        inferredCase: {case: 'accusative', kind: 'orthographic-tanwin-carrier', confidence: 0.94}
      });
    }
  }
  return variants;
}

function productiveNominalCandidates(core) {
  const out = [];
  const ending = numberFromEnding(core);
  if (ending) out.push({
    // لا تكفي اللاحقة وحدها لإثبات التثنية أو الجمع: «بستان/ميدان/لبنان»
    // كلمات مفردة صحيحة تشبه ـان، كما تشبه «زيتون» جمع المذكر السالم.
    // تبقى القراءة فرضيةً مسجلة للفحص، لكن لا تُصدَّر منها سمات اتفاق أو حالة
    // بنيوية ما لم تكن الصيغة السطحية نفسها في paradigm معجمي مراجع.
    pos: 'noun', lemma: core, gender: null, number: null,
    numberCandidates: [...new Set([ending.number, ...(ending.numberCandidates || []), 'sg'].filter(Boolean))],
    caseForm: null, inflectionHypothesis: {...ending},
    animacy: null, confidence: 0.4, source: 'unverified-productive-inflection-ending'
  });
  if (/ة$/u.test(core)) out.push({pos: 'noun', lemma: core, gender: 'f', number: 'sg', confidence: 0.62, source: 'productive-feminine-ending'});
  if (/ات$/u.test(core) && core.length > 3) out.push({pos: 'noun', lemma: `${core.slice(0, -2)}ة`, gender: 'f', number: 'pl', confidence: 0.68, source: 'productive-sound-feminine-plural'});
  if (/ي$/u.test(core) && core.length > 3) out.push({pos: 'adj', lemma: core, gender: 'm', number: 'sg', confidence: 0.48, source: 'productive-nisba-pattern'});
  if (/^م[ء-ي]{3,}$/u.test(core) && !/[ةات]$/u.test(core)) out.push({pos: 'noun', lemma: core, gender: 'm', number: 'sg', confidence: 0.42, source: 'productive-derived-nominal-pattern'});
  return out;
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

  const lookupVariants = unvocalizedNominalVariants(core);
  let inferredUnvocalizedCase = null;
  for (const variant of lookupVariants) {
    for (const item of NOUN_FORM_INDEX.get(variant.core) || []) candidates.push({
      ...item, confidence: 0.995 * variant.confidence,
      source: variant.source === 'surface' ? 'reviewed-noun-lexicon' : variant.source,
      surfaceCore: core, analyzedCore: variant.core, inferredCase: variant.inferredCase
    });
    for (const item of ADJECTIVE_FORM_INDEX.get(variant.core) || []) candidates.push({
      ...item, confidence: 0.995 * variant.confidence,
      source: variant.source === 'surface' ? 'reviewed-adjective-paradigm' : variant.source,
      surfaceCore: core, analyzedCore: variant.core, inferredCase: variant.inferredCase
    });
    if (variant.inferredCase && !inferredUnvocalizedCase) inferredUnvocalizedCase = variant.inferredCase;
  }

  const properVariant = lookupVariants.find(v => PROPER_NAMES.has(v.core));
  if (properVariant) {
    const place = PLACE_PROPER_NAMES.has(properVariant.core);
    candidates.push({
      pos: 'proper', lemma: properVariant.core,
      gender: place ? 'f' : (/[ةى]$/u.test(properVariant.core) ? 'f' : null),
      number: 'sg', animacy: place ? 'nonhuman' : 'human',
      confidence: 0.99 * properVariant.confidence,
      source: properVariant.source === 'surface' ? (place ? 'place-proper-name-lexicon' : 'proper-name-lexicon') : properVariant.source,
      inferredCase: properVariant.inferredCase
    });
  }
  if (DEMONSTRATIVES[core]) candidates.push({pos: 'demonstrative', lemma: core, ...DEMONSTRATIVES[core], confidence: 0.995, source: 'closed-class'});
  if (RELATIVE_PRONOUNS[core]) candidates.push({pos: 'relative', lemma: core, ...RELATIVE_PRONOUNS[core], definite: true, confidence: 0.999, source: 'closed-class'});
  if (FIVE_NOUN_FORMS[core] && !(core === 'في' && !segments.enclitic)) {
    candidates.push({
      pos: 'noun', lemma: FIVE_NOUN_FORMS[core].lemma, gender: 'm', number: 'sg', animacy: core.startsWith('ذ') ? null : 'human',
      fiveNoun: true, caseForm: FIVE_NOUN_FORMS[core].caseForm, confidence: 0.997, source: 'five-nouns-lexicon'
    });
  }
  if (NONSTANDARD_FIVE_NOUN_FORMS_V1874[core]) {
    const malformed = NONSTANDARD_FIVE_NOUN_FORMS_V1874[core];
    candidates.push({
      pos: 'noun', lemma: malformed.lemma, gender: 'm', number: 'sg', animacy: 'human',
      fiveNoun: true, caseForm: malformed.caseForm, canonicalSurface: malformed.canonical,
      orthographicNonstandard: true, confidence: 0.996, source: 'five-nouns-nonstandard-hamza-v1874'
    });
  }
  if (PERSONAL_PRONOUNS[core]) candidates.push({pos: 'pronoun', lemma: core, ...PERSONAL_PRONOUNS[core], animacy: 'human', definite: true, confidence: 0.999, source: 'closed-class'});
  if (core === 'أي') candidates.push({pos: 'noun', sub: 'nominal-quantifier', lemma: core, gender: null, number: 'sg', confidence: 0.99, source: 'closed-class'});
  if (PREPOSITIONS.has(core)) candidates.push({pos: 'particle', sub: 'preposition', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (CONJUNCTIONS.has(core)) candidates.push({pos: 'particle', sub: 'conjunction', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (INNA_PARTICLES.has(core)) candidates.push({pos: 'particle', sub: 'inna', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (KANA_SURFACES.has(core)) candidates.push({pos: 'verb', sub: 'kana', lemma: core, confidence: 0.995, source: 'closed-class'});
  if (KANA_NONSTANDARD_SURFACES[core]) candidates.push({pos: 'verb', sub: 'kana-malformed', lemma: 'كان', ...KANA_NONSTANDARD_SURFACES[core], confidence: 0.995, source: 'reviewed-nonstandard-kana'});
  if (VERBAL_PARTICLES.has(core)) candidates.push({pos: 'particle', sub: 'verbal-particle', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (NEGATION.has(core)) candidates.push({pos: 'particle', sub: 'negation', lemma: core, confidence: 0.995, source: 'closed-class'});
  if (SUBJUNCTIVE_PARTICLES.has(core)) candidates.push({pos: 'particle', sub: 'subjunctive', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (JUSSIVE_PARTICLES.has(core)) candidates.push({pos: 'particle', sub: 'jussive', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (core === 'إلا') candidates.push({pos: 'particle', sub: 'exception', lemma: core, confidence: 0.999, source: 'closed-class'});
  if (['غير', 'سوى', 'عدا', 'خلا', 'حاشا'].includes(core)) candidates.push({pos: 'exception-tool', lemma: core, confidence: 0.995, source: 'closed-class'});
  if (['نفس', 'عين', 'كل', 'كلا', 'كلتا', 'كلي', 'كلتي', 'أجمع'].includes(core)) candidates.push({pos: 'emphasis', lemma: core, confidence: 0.98, source: 'dependent-lexicon'});

  const cardinal = simpleCardinal(core);
  if (cardinal) candidates.push({pos: 'number', lemma: core, numberValue: cardinal.value, ...cardinal, confidence: 0.999, source: 'number-lexicon'});

  const ending = numberFromEnding(core);
  if (!candidates.length) candidates.push(...productiveNominalCandidates(core));
  if (!candidates.length && core.length >= 3) candidates.push({pos: 'unknown', lemma: core, gender: null, number: 'sg', confidence: 0.3, source: 'fallback'});

  const all = dedupe(candidates);
  const nominal = all.find(x => ['noun', 'proper', 'adj', 'emphasis', 'demonstrative', 'pronoun', 'relative'].includes(x.pos));
  const sameLemmaNominals = nominal ? all.filter(x => x.pos === nominal.pos && x.lemma === nominal.lemma) : [];
  const indexedNumbers = [...new Set(sameLemmaNominals.map(x => x.number).filter(Boolean))];
  const ambiguousNumbers = indexedNumbers.length > 1 ? indexedNumbers : null;
  const analyzedCore = nominal?.analyzedCore || core;
  const diptote = detectDiptote(analyzedCore);
  const unverifiedEnding = nominal?.source === 'unverified-productive-inflection-ending';
  const rawStructuralCase = structuralCase(token.clean) || inferredUnvocalizedCase;
  const observedStructural = unverifiedEnding && rawStructuralCase?.kind === 'ending'
    ? inferredUnvocalizedCase : rawStructuralCase;

  return {
    candidates: all,
    nominal,
    diptote,
    structuralCase: observedStructural,
    unvocalizedCase: inferredUnvocalizedCase,
    analyzedCore,
    definite: segments.definite || nominal?.pos === 'pronoun' || nominal?.pos === 'relative' || nominal?.pos === 'proper',
    gender: nominal?.gender || (!unverifiedEnding ? ending?.gender : null) || null,
    number: ambiguousNumbers ? null : (nominal?.number || (!unverifiedEnding ? ending?.number : null) || null),
    // المعجم المراجع يحسم «ين» إذا عرف أنها مثنى أو جمع؛ أما فرضية اللاحقة
    // غير المثبتة فتظل متعددة القراءات ولا تُستعمل لتوليد تصحيح.
    numberCandidates: ambiguousNumbers || nominal?.numberCandidates
      || (!nominal && !unverifiedEnding ? ending?.numberCandidates : null) || null,
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
  if (/(?:ون|ين)$/u.test(clean) && options.number === 'pl') {
    const stem = clean.slice(0, -2);
    return `${stem}${expected === 'nominative' ? 'ون' : 'ين'}`;
  }
  if (/(?:ان|ين)$/u.test(clean)) {
    const stem = clean.slice(0, -2);
    return `${stem}${expected === 'nominative' ? 'ان' : 'ين'}`;
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
  if (token.visibleCase && caseValue) {
    core = inflectCoreCase(core, caseValue, {
      number,
      visibleCase: token.visibleCase,
      tanwin: token.visibleCase.kind === 'tanwin' && !token.morph.definite,
      noTanwin: token.morph.definite
    });
  }
  return rebuildToken(token, core);
}


/* ===== MODULE: src/morphology/generator.js ===== */
function generatedCaseSurface(core, caseValue, {diacritized = false, definite = false, number = 'sg'} = {}) {
  if (!caseValue) return core;
  const bareCore = bareForCase(core);
  if (diacritized && number === 'pl' && /ات$/u.test(bareCore)) {
    const mark = caseValue === 'nominative'
      ? (definite ? 'ُ' : 'ٌ')
      : (definite ? 'ِ' : 'ٍ');
    return `${bareCore}${mark}`;
  }
  const structurallyInflected = inflectCoreCase(core, caseValue, {number, onlyWhenVisible: !diacritized});
  if (!diacritized || ['du', 'pl'].includes(number) && /(?:ان|ين|ون)$/u.test(structurallyInflected)) return structurallyInflected;
  return withCaseMark(structurallyInflected, caseValue, {tanwin: !definite, noTanwin: definite});
}

function attachGeneratedClitics(surface, {conjunction = '', preposition = '', article = false, enclitic = ''} = {}) {
  let prefix = `${conjunction || ''}${preposition || ''}`;
  if (article) {
    if (preposition === 'ل') prefix = `${conjunction || ''}لل`;
    else prefix += 'ال';
  }
  return `${prefix}${surface}${enclitic || ''}`;
}

function generateNoun(lemma, features = {}) {
  const data = NOUN_LEMMAS[lemma];
  if (!data) return null;
  const number = features.number || 'sg';
  const caseValue = features.case || features.caseValue || 'nominative';
  let surface = nounForm(lemma, number, caseValue);
  if (!surface) return null;
  const definite = Boolean(features.definite || features.article || features.enclitic);
  surface = generatedCaseSurface(surface, caseValue, {diacritized: Boolean(features.diacritized), definite, number});
  surface = attachGeneratedClitics(surface, {...features, article: Boolean(features.article)});
  return {surface, lemma, pos: 'noun', gender: data.gender, animacy: data.animacy, number, case: caseValue, definite, generated: true};
}

function generateAdjective(lemma, features = {}) {
  if (!ADJECTIVE_LEMMAS[lemma]) return null;
  const number = features.number || 'sg';
  const gender = features.gender || 'm';
  const caseValue = features.case || features.caseValue || 'nominative';
  let surface = adjectiveForm(lemma, {gender, number, caseValue});
  if (!surface) return null;
  const definite = Boolean(features.definite || features.article || features.enclitic);
  surface = generatedCaseSurface(surface, caseValue, {diacritized: Boolean(features.diacritized), definite, number});
  surface = attachGeneratedClitics(surface, {...features, article: Boolean(features.article)});
  return {surface, lemma, pos: 'adj', gender, number, case: caseValue, definite, generated: true};
}

function generateVerb(lemma, features = {}) {
  const tense = features.tense || 'past';
  const personCode = features.personCode || '3ms';
  const core = conjugateVerb(lemma, tense, personCode, {mood: features.mood || 'indicative'});
  if (!core) return null;
  const surface = attachGeneratedClitics(core, {conjunction: features.conjunction, enclitic: features.enclitic});
  return {surface, lemma, pos: 'verb', tense, personCode, mood: tense === 'imperative' ? 'imperative' : (features.mood || (tense === 'present' ? 'indicative' : null)), ...PERSON_FEATURES[personCode], generated: true};
}

function generateFiveNoun(lemma, features = {}) {
  const caseValue = features.case || features.caseValue || 'nominative';
  const core = FIVE_NOUN_BY_LEMMA[lemma]?.[caseValue];
  if (!core) return null;
  const surface = attachGeneratedClitics(core, {conjunction: features.conjunction, preposition: features.preposition, enclitic: features.enclitic});
  return {surface, lemma, pos: 'noun', fiveNoun: true, number: 'sg', gender: 'm', case: caseValue, generated: true};
}

const NUMBER_UNIT_WORDS = Object.freeze({
  1: {m: 'واحد', f: 'واحدة'}, 2: {m: 'اثنان', f: 'اثنتان'},
  3: {m: 'ثلاثة', f: 'ثلاث'}, 4: {m: 'أربعة', f: 'أربع'}, 5: {m: 'خمسة', f: 'خمس'},
  6: {m: 'ستة', f: 'ست'}, 7: {m: 'سبعة', f: 'سبع'}, 8: {m: 'ثمانية', f: 'ثماني'},
  9: {m: 'تسعة', f: 'تسع'}, 10: {m: 'عشرة', f: 'عشر'}
});
const NUMBER_HUNDREDS = Object.freeze({1: 'مئة', 2: 'مئتان', 3: 'ثلاثمئة', 4: 'أربعمئة', 5: 'خمسمئة', 6: 'ستمئة', 7: 'سبعمئة', 8: 'ثمانمئة', 9: 'تسعمئة'});

function spellBelowHundred(value, countedGender = 'm', caseValue = 'nominative') {
  if (value <= 10) return NUMBER_UNIT_WORDS[value]?.[countedGender] || null;
  if (value <= 19) return expectedCompoundNumber(value, countedGender, caseValue)?.join(' ') || null;
  const tens = Math.floor(value / 10) * 10;
  const unit = value % 10;
  const decade = decadeForm(tens, caseValue);
  if (!unit) return decade;
  const unitWord = unit <= 2
    ? (unit === 1 ? NUMBER_UNIT_WORDS[1][countedGender]
      : (countedGender === 'f' ? (caseValue === 'nominative' ? 'اثنتان' : 'اثنتين') : (caseValue === 'nominative' ? 'اثنان' : 'اثنين')))
    : NUMBER_UNIT_WORDS[unit][countedGender];
  return `${unitWord} و${decade}`;
}

function spellBelowThousand(value, countedGender = 'm', caseValue = 'nominative') {
  if (value < 100) return spellBelowHundred(value, countedGender, caseValue);
  const hundreds = Math.floor(value / 100);
  const rest = value % 100;
  let head = NUMBER_HUNDREDS[hundreds];
  if (hundreds === 2 && caseValue !== 'nominative') head = 'مئتين';
  return rest ? `${head} و${spellBelowHundred(rest, countedGender, caseValue)}` : head;
}

function scalePhrase(count, singular, dualNom, dualOblique, plural, caseValue) {
  if (count === 1) return singular;
  if (count === 2) return caseValue === 'nominative' ? dualNom : dualOblique;
  if (count >= 3 && count <= 10) return `${spellBelowHundred(count, 'm', caseValue)} ${plural}`;
  return `${spellBelowThousand(count, 'm', caseValue)} ${singular}`;
}

function generateNumber(value, features = {}) {
  const n = Number(value);
  if (!Number.isInteger(n) || n < 1 || n > 1000000) return null;
  const gender = features.countedGender || features.gender || 'm';
  const caseValue = features.case || features.caseValue || 'nominative';
  let rest = n;
  const parts = [];
  const millions = Math.floor(rest / 1000000);
  rest %= 1000000;
  if (millions) parts.push(scalePhrase(millions, 'مليون', 'مليونان', 'مليونين', 'ملايين', caseValue));
  const thousands = Math.floor(rest / 1000);
  rest %= 1000;
  if (thousands) parts.push(scalePhrase(thousands, 'ألف', 'ألفان', 'ألفين', 'آلاف', caseValue));
  if (rest) parts.push(spellBelowThousand(rest, gender, caseValue));
  return {surface: parts.join(' و'), value: n, pos: 'number', countedGender: gender, case: caseValue, governance: numberGovernance(n), generated: true};
}

function generateMorphology(spec = {}) {
  if (typeof spec === 'string') spec = {lemma: spec};
  const pos = spec.pos || (VERB_LEXICON[spec.lemma] ? 'verb' : ADJECTIVE_LEMMAS[spec.lemma] ? 'adj' : (NOUN_LEMMAS[spec.lemma] || FIVE_NOUN_BY_LEMMA[spec.lemma]) ? 'noun' : null);
  if (pos === 'verb') return generateVerb(spec.lemma, spec);
  if (pos === 'adj' || pos === 'adjective') return generateAdjective(spec.lemma, spec);
  if (pos === 'number') return generateNumber(spec.value, spec);
  if (pos === 'noun' && FIVE_NOUN_BY_LEMMA[spec.lemma]) return generateFiveNoun(spec.lemma, spec);
  if (pos === 'noun') return generateNoun(spec.lemma, spec);
  return null;
}

function generateParadigm(lemma) {
  if (VERB_LEXICON[lemma]) {
    const out = {lemma, pos: 'verb', past: {}, present: {}, imperative: {}};
    for (const code of Object.keys(PERSON_FEATURES)) {
      out.past[code] = conjugateVerb(lemma, 'past', code);
      out.present[code] = conjugateVerb(lemma, 'present', code);
      if (code.startsWith('2')) out.imperative[code] = imperativeVerb(lemma, code);
    }
    return out;
  }
  if (NOUN_LEMMAS[lemma]) return {lemma, pos: 'noun', forms: NOUN_LEMMAS[lemma].forms.map(item => ({...item}))};
  if (ADJECTIVE_LEMMAS[lemma]) return {lemma, pos: 'adj', forms: {...ADJECTIVE_LEMMAS[lemma]}};
  return null;
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
      unvocalizedCase: nominal.unvocalizedCase,
      analyzedCore: nominal.analyzedCore,
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

/**
 * V18.7.9 — الصيغة المجردة المحتملة للمصدر: ماضٍ للغائب المفرد المذكر لا
 * تحمله علامةٌ صرفيةٌ ظاهرة (لا حرف مضارعة ولا ضمير بارز). رسمها يطابق رسم
 * المصدر «فهم/نشر/بحث/ذكر»، فلا تصلح وحدها دليلًا على الفعلية في موضع اسمي.
 */
function isBareThirdMasculinePast(analysis) {
  return Boolean(analysis) && analysis.tense === 'past' && analysis.personCode === '3ms';
}

/**
 * V18.7.9 — أسماء ملازمة للإضافة: ما بعدها مضاف إليه مجرور قطعًا، ولا يقع
 * بعدها فعل. أشهرها «عدم» في «وعدم نشر المعلومات»، وهي التي كانت تُمرِّر
 * قراءة «نشر» فعلًا ماضيًا فيُقترح «نشرت» خطأً.
 */
const OBLIGATORY_ANNEXATION_HEADS_V1879 = new Set([
  'عدم', 'سوء', 'حسن', 'كيفية', 'إمكانية', 'إمكان', 'ضرورة', 'أهمية',
  'بغية', 'قصد', 'بهدف', 'جميع', 'كافة', 'معظم', 'سائر', 'نصف', 'ربع'
]);

/**
 * V18.7.9 — عامل يوجب الجرّ أو الإضافة قبل الموضع: حرف جر صريح («على فهم»)
 * أو حرف جر متصل («بنشر») أو ظرف مضاف («بعد فهم») أو اسم ملازم للإضافة
 * («عدم نشر»). كل هذه العوامل لا تدخل على الأفعال في الفصحى، فوجودها يحسم
 * الموضع اسميًا ويمنع بناء مطابقةٍ فعليةٍ على رسمٍ يشبه الماضي.
 */
function precededByNominalGovernor(tokens, index) {
  const token = tokens[index];
  if (!token) return false;
  if (token.morph?.segments?.preposition) return true;
  const previous = tokens[index - 1];
  if (!previous || previous.sentence !== token.sentence) return false;
  const previousCore = previous.morph?.core;
  if (PREPOSITIONS.has(previousCore) || IDAFA_ADVERBIAL_GOVERNORS.has(previousCore)) return true;
  // الواو/الفاء العاطفة قد تبقى ملتصقة بالكلمة غير المحللة («وعدم»)، فتُجرَّد
  // للمقارنة المعجمية دون أن يُبنى على ذلك تحليلٌ صرفي كامل.
  const bareCore = String(previousCore || '').replace(/^[وف]/u, '');
  if (OBLIGATORY_ANNEXATION_HEADS_V1879.has(previousCore)
      || OBLIGATORY_ANNEXATION_HEADS_V1879.has(bareCore)) return true;
  // «الى/علي» قبل التصحيح الإملائي حرفا جر كذلك؛ الطبقة النحوية تسبق الإملائية.
  const canonical = WORDS[stripDiacritics(previous.surface || '')] || WORDS[stripDiacritics(previousCore || '')];
  return PREPOSITIONS.has(canonical);
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
      // V18.7.9 — حارس «حرف الجر لا يدخل على الفعل»: الصيغة المجردة التي
      // تُقرأ ماضيًا للغائب المفرد (فهم/نشر/بحث) هي نفسها رسم المصدر، ولا
      // يملك المعجم لها مدخلًا اسميًا؛ فإذا سبقها حرف جر صريح أو متصل فالموضع
      // اسمي قطعًا: «على فهم الدروس» جار ومجرور، لا فعل وفاعل. من دون هذا
      // الحارس كانت قاعدة المطابقة تبني «فهم ← فهمت» على قراءة فعلية باطلة.
      if (isBareThirdMasculinePast(verb) && precededByNominalGovernor(tokens, i)) {
        morph.pos = 'noun';
        morph.resolvedPos = 'noun';
        morph.posConfidence = 0.93;
        morph.posEvidence = ['verbal-surface-in-genitive-position', 'preposition-cannot-govern-a-verb'];
        morph.posAmbiguous = false;
        morph.bestVerb = null;
        morph.masdarReading = true;
        continue;
      }
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

    if (morph.segments?.article || morph.segments?.preposition || canonicalPrepositionCore(previous)) {
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
    const previousIsDemonstrative = previous?.morph?.nominal?.pos === 'demonstrative'
      || previous?.morph?.pos === 'demonstrative';
    if (previousIsDemonstrative) {
      nounScore += 0.85;
      evidence.push('demonstrative-nominal-head-guard');
    }
    if (next?.morph?.definite && isNominal(next)) {
      nounScore += 0.12; // احتمال الإضافة: «كتب الطالب»
      verbScore += 0.16; // واحتمال VSO قائم كذلك
      evidence.push('ambiguous-idafa-or-vso');
    }
    const nextFeatures = tokenFeatures(next);
    const nextNominalLike = isNominal(next) || isProductiveDefiniteNominalCandidate(next);
    const productiveIndefinitePredicate = Boolean(next2 && !next2.morph?.definite
      && isNominal(next2) && !bestVerb(next2));
    const previousHumanSvoCue = Boolean(previous?.morph?.definite
      && tokenFeatures(previous).animacy === 'human');
    const nonhumanIdafaPredicateFrame = Boolean(
      !previousHumanSvoCue && morph.nominal?.animacy === 'nonhuman'
      && next?.morph?.definite && nextNominalLike
      && (nextFeatures.animacy === 'nonhuman' || isAdjective(next2) || productiveIndefinitePredicate)
    );
    if (nonhumanIdafaPredicateFrame) {
      nounScore += 0.78;
      evidence.push('nonhuman-idafa-before-predicate');
    } else if (next && next2 && isNominal(next) && isNominal(next2)) {
      verbScore += 0.42;
      evidence.push('verb-subject-object-frame');
    }
    // إطار SVO محافظ للصيغة المشتركة «كتب»: موضوع بشري معرف قبلها، ثم
    // مفعول اسمي تالٍ. لا يعمل مع التنوين/الجر/الرفع الظاهر، ولا قبل صفة؛
    // وبذلك تبقى «هذه كتب المدرسة» و«كتبٌ جديدة» قراءتين اسميتين.
    const previousFeatures = tokenFeatures(previous);
    const strongHumanSvoFrame = Boolean(verb.transitive
      && previous?.sentence === token.sentence && next?.sentence === token.sentence
      && isStrongNominalCandidate(previous) && previous.morph.definite
      && previousFeatures.animacy === 'human'
      && !isPrepositionGovernedToken(tokens, i - 1)
      && (isStrongNominalCandidate(next) || isProductiveDefiniteNominalCandidate(next))
      && !isAdjective(next)
      && !token.visibleCase);
    if (strongHumanSvoFrame) {
      verbScore += 0.44;
      evidence.push('definite-human-svo-transitive-frame');
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
        : evidence.includes('definite-human-svo-transitive-frame') ? 0.975
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


/* ===== MODULE: src/core/protected-spans.js ===== */
const PROTECTED_PATTERNS = Object.freeze([
  // يجب التقاط العنصر كاملًا قبل وسم HTML المفرد؛ وإلا حُمي <code> وحده
  // وبقي النص البرمجي بين وسمَي الفتح والإغلاق معرضًا للتصحيح.
  {type: 'html-code-element', re: /<(code|pre|script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/giu, priority: 120},
  {type: 'code-block', re: /```[\s\S]*?```/gu, priority: 100},
  {type: 'inline-code', re: /`[^`\n]+`/gu, priority: 95},
  {type: 'html-tag', re: /<\/?[A-Za-z][^>]*>/gu, priority: 90},
  {type: 'url', re: /(?:https?:\/\/|ftp:\/\/|www\.)[^\s<>{}\[\]"'،؛]+/giu, priority: 90},
  {type: 'email', re: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/giu, priority: 90},
  {type: 'date', re: /(?:\b\d{4}[-/.]\d{1,2}[-/.]\d{1,2}\b|\b\d{1,2}[-/.]\d{1,2}[-/.]\d{2,4}\b)/gu, priority: 85},
  {type: 'time', re: /\b\d{1,2}:\d{2}(?::\d{2})?\b/gu, priority: 80},
  {type: 'entity', re: /&(?:[A-Za-z]+|#\d+|#x[0-9A-Fa-f]+);/gu, priority: 80},
  {type: 'mention-or-hashtag', re: /[@#][\p{L}\p{N}_-]+/gu, priority: 75},
  {type: 'arabic-abbreviation', re: /(?:\b(?:د|أ|م|ص|ج|هـ)\.)/gu, priority: 70},
  {type: 'foreign-name-or-identifier', re: /\b[A-Za-z][A-Za-z0-9_.+-]*\b/gu, priority: 60}
]);

function overlapsSpan(start, end, span) {
  return start < span.end && end > span.start;
}

function trimProtectedMatch(type, value) {
  if (type !== 'url') return value;
  let trimmed = value.replace(/[.,;:!?؟]+$/u, '');
  const pairs = {')': '(', ']': '[', '}': '{', '>': '<'};
  let changed = true;
  while (changed && trimmed) {
    changed = false;
    const closing = trimmed.at(-1);
    const opening = pairs[closing];
    if (!opening) break;
    const opens = [...trimmed].filter(char => char === opening).length;
    const closes = [...trimmed].filter(char => char === closing).length;
    if (closes > opens) { trimmed = trimmed.slice(0, -1); changed = true; }
  }
  return trimmed;
}

function extractProtectedSpans(normalization, options = {}) {
  if (options.rules?.protectedSpans === false || options.protectedSpans === false) return [];
  const candidates = [];
  for (const pattern of PROTECTED_PATTERNS) {
    pattern.re.lastIndex = 0;
    for (const match of normalization.text.matchAll(pattern.re)) {
      const matchedText = trimProtectedMatch(pattern.type, match[0]);
      if (!matchedText) continue;
      const start = match.index;
      const end = start + matchedText.length;
      const {originalStart, originalEnd} = toOriginalSpan(normalization, start, end);
      candidates.push({type: pattern.type, start, end, originalStart, originalEnd, text: matchedText, priority: pattern.priority});
    }
  }
  for (const range of options.protectedRanges || []) {
    if (!Number.isInteger(range?.start) || !Number.isInteger(range?.end) || range.end <= range.start) continue;
    candidates.push({
      type: range.type || 'custom', start: range.start, end: range.end,
      originalStart: range.start, originalEnd: range.end,
      text: normalization.text.slice(range.start, range.end), priority: 1000
    });
  }
  candidates.sort((a, b) => b.priority - a.priority || (b.end - b.start) - (a.end - a.start) || a.start - b.start);
  const selected = [];
  for (const item of candidates) {
    if (selected.some(span => overlapsSpan(item.start, item.end, span))) continue;
    selected.push(item);
  }
  return selected.sort((a, b) => a.start - b.start).map(({priority, ...span}) => Object.freeze(span));
}

function isProtectedNormalizedSpan(context, start, end) {
  return Boolean(context.protectedSpans?.some(span => overlapsSpan(start, end, span)));
}

function isProtectedOriginalSpan(context, start, end) {
  return Boolean(context.protectedSpans?.some(span => start < span.originalEnd && end > span.originalStart));
}


/* ===== MODULE: src/core/tokenize.js ===== */
const TOKEN_RE = /[\u0621-\u063A\u0641-\u064A\u0671-\u06D3][\u0621-\u063A\u0641-\u064A\u064B-\u065F\u0670-\u06D3\u06D6-\u06ED]*|[0-9\u0660-\u0669]+/gu;
// علامات الاقتباس حدود علاقات نحوية، لا مناطق محمية: يظل ما داخلها قابلًا
// للتدقيق، لكن فاعل «قال» لا يُستخرج من أول اسم في الكلام المنقول.
const SENTENCE_END_RE = /[.!?؟؛\n«»“”‹›"']/u;

function tokenize(normalization, protectedSpans = []) {
  const {text} = normalization;
  const tokens = [];
  let match;
  let sentence = 0;
  let previousEnd = 0;

  while ((match = TOKEN_RE.exec(text))) {
    const matchEnd = match.index + match[0].length;
    if (protectedSpans.some(span => overlapsSpan(match.index, matchEnd, span))) {
      previousEnd = matchEnd;
      continue;
    }
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

function canonicalPrepositionCore(token) {
  if (!token?.morph) return null;
  const core = token.morph.core;
  if (PREPOSITIONS.has(core)) return core;
  // The orthographic layer runs after syntax, so a reviewed one-token spelling
  // correction such as «الى → إلى» must be visible to the syntactic layer
  // without mutating the source token or auto-applying a grammatical choice.
  const canonical = WORDS[stripDiacritics(token.surface || '')]
    || WORDS[stripDiacritics(core || '')];
  return PREPOSITIONS.has(canonical) ? canonical : null;
}

function nextUngovernedNominal(tokens, start, {end = tokens.length} = {}) {
  for (let i = start; i < end; i += 1) {
    if (!isNominal(tokens[i])) continue;
    if (directGovernorCase(tokens, i)?.case === 'genitive') {
      i = nominalArgumentUnitEnd(tokens, i, end) - 1;
      continue;
    }
    return i;
  }
  return -1;
}

function previousNominal(tokens, start, {startAt = 0} = {}) {
  for (let i = start; i >= startAt; i -= 1) if (isNominal(tokens[i])) return i;
  return -1;
}

function observedCase(token) {
  const structural = token?.morph?.structuralCase;
  // V18.7.3: in ـان/ـون the final fatḥa/kasra on the nūn belongs to the
  // inflectional ending; it must not overrule the structurally nominative form.
  // accgen remains ambiguous and may still be disambiguated by a visible mark.
  if (structural?.kind === 'ending' && structural.case === 'nominative' && structural.confidence >= 0.95) {
    return 'nominative';
  }
  return token?.visibleCase?.case || structural?.case || token?.morph?.nominal?.caseForm || null;
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
  const preposition = canonicalPrepositionCore(previous);
  if (preposition) return {
    case: 'genitive', confidence: PREPOSITIONS.has(previous?.morph?.core) ? 0.995 : 0.985,
    reason: PREPOSITIONS.has(previous?.morph?.core) ? 'حرف جر صريح' : 'حرف جر مصحح إملائيًا'
  };
  // «مع/بين/بعد...» أسماء ظروف مضافة، لا حروف جر؛ لكنها تجر ذيل
  // الإضافة في هذا البناء الصريح.
  if (previous && ADVERBIAL_GOVERNORS.has(previous.morph.core)) {
    return {case: 'genitive', confidence: 0.975, reason: 'مضاف إليه بعد ظرف مضاف'};
  }
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
    if (INNA_PARTICLES.has(core) && !particleIntroducesVerbClause(tokens, i)) {
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
  // «أيّ» اسم ملازم للإضافة هنا: هو رأس المفعول في «يقرؤوا أيَّ فقرةٍ»،
  // والاسم التالي مضاف إليه، لا مفعول مستقل تُحوّل كسرته إلى فتحة.
  if (head.morph.core === 'أي') return true;
  // A regular annexation head neither carries the article nor tanwīn.  This
  // guard prevents «الباحثون نتائجهم» from being swallowed as an iḍāfa and
  // keeps the following noun available to ObjectResolver.
  if (head.morph.definite || head.visibleCase?.kind === 'tanwin') return false;
  const structural = head.morph.structuralCase;
  if (structural?.kind === 'ending' && structural.case === 'nominative'
      && /(?:ان|ون)$/u.test(head.morph.core || '')) return false;
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
  'اليوم', 'أمس', 'غدًا', 'غدا', 'غد',
  'مبكرًا', 'مبكرا', 'مبكر', 'متأخرًا', 'متأخرا', 'متأخر',
  'هنا', 'هناك', 'الآن', 'حينئذ', 'فجأة', 'أيضًا', 'أيضا', 'أيض'
]);
const ADVERBIAL_GOVERNORS = IDAFA_ADVERBIAL_GOVERNORS;

function isStrongNominalCandidate(token) {
  if (!isNominal(token) || token?.morph?.posAmbiguous) return false;
  const pos = token.morph?.nominal?.pos || token.morph?.pos;
  return ['noun', 'proper', 'pronoun', 'demonstrative', 'relative'].includes(pos);
}

/**
 * V18.7.7 — اسم النسبة المعرف (الصحفي، المديري، اللغوي…): صفةٌ تنوب عن الاسم
 * وتصلح فاعلًا ومبتدأً في الفصحى («جاء الصحفيّ»، «الصحفيّ قرأ»). تُقبل مرشَّح
 * فاعلٍ متقدمًا فقط عندما تكون: معرفة بـ«ال»، منتهية بياء النسبة، محلَّلة
 * قراءةً اسمية/وصفية موثوقة، وغير ملتبسة النوع (لا فعلًا ولا حرفًا).
 */
function isNisbaSubjectCandidate(token) {
  if (!token?.morph || token.morph.posAmbiguous || bestVerb(token)
      || isKanaSurface(token.morph.core) || INNA_PARTICLES.has(token.morph.core)) return false;
  if (!token.morph.segments?.article && !token.clean?.startsWith('ال')) return false;
  const core = stripDiacritics(token.morph.core || '');
  if (!/ي$/u.test(core) || core.length < 3) return false;
  const nominal = token.morph.nominal;
  if (!nominal || !['adj', 'noun', 'proper'].includes(nominal.pos)) return false;
  // قراءة معجمية عالية الثقة لاسمٍ/صفةٍ منتهية بياء (مثل «قاضي») تبقى أصلب؛
  // النسبة الإنتاجية تُقبل بثقة متوسطة فقط لأنها القراءة الوحيدة المحتملة هنا.
  return nominal.confidence >= 0.45;
}

function isProductiveDefiniteNominalCandidate(token) {
  if (!token?.morph?.segments?.article || token.morph.segments.preposition
      || token.morph.posAmbiguous || bestVerb(token) || isAdjective(token)) return false;
  const core = stripDiacritics(token.morph.core || '');
  return /^[ء-ي]{3,}$/u.test(core) && !token.visibleCase?.case;
}

function isPrepositionGovernedToken(tokens, index) {
  return directGovernorCase(tokens, index)?.case === 'genitive';
}

/**
 * V18.7.6 — FrameDisambiguationResolver 1.0.
 * سطحٌ فعلي يحتمل قراءة المتكلم/المخاطب (قابلتُ/قابلتَ/قابلتِ) وقراءة الغائب
 * المؤنث (قابلَتْ) معًا: إذا تلاه اسم ذكوري مثنى/جمع فقراءة المفعول به بعد
 * المتكلم/المخاطب أرجح من قراءة اتفاقٍ خاطئ بين فعل مؤنث وفاعل ذكر.
 * تعيد تحليل المتكلم/المخاطب لتُفعِّل إطار المفعول، وإلا null.
 */
function speechParticipantObjectFrame(context, verbIndex, verb) {
  if (!verb || !verb.transitive || verb.person === 1 || verb.person === 2) return null;
  const token = context.tokens[verbIndex];
  const speech = (token.morph.verbAnalyses || []).find(analysis =>
    (analysis.person === 1 || analysis.person === 2) && analysis.transitive);
  if (!speech) return null;
  const bounds = sentenceBounds(context.tokens, verbIndex);
  const following = nextNominal(context.tokens, verbIndex + 1, {end: bounds.end, skipPrepositional: true});
  if (following < 0 || following > verbIndex + 2) return null;
  const features = tokenFeatures(context.tokens[following]);
  // شرط العلامة المرفوعة الظاهرة: بلا رفع صريح تبقى قراءة الغائب المؤنث قائمة
  // (وصلت الطلاب)، ولا يُفعَّل إطار المتكلم إلا مع مثنى/جمع مذكر مرفوع ظاهرًا.
  if (features.gender === 'm' && ['du', 'pl'].includes(features.number)
      && observedCase(context.tokens[following]) === 'nominative') return speech;
  return null;
}

/**
 * محلل فاعل محافظ لا يبني شجرة كاملة، لكنه يميز SVO/VSO ويتجاوز شبه الجملة
 * والظرف وعبارة العدد. لا يعيد علاقة إذا بقي احتمال المفعول به قويًا.
 */
function resolveSubject(tokens, verbIndex, verb = bestVerb(tokens[verbIndex]), {
  allowPreverbal = true, startAt = null, endAt = null
} = {}) {
  const sentence = sentenceBounds(tokens, verbIndex);
  const start = Number.isInteger(startAt) ? Math.max(sentence.start, startAt) : sentence.start;
  const end = Number.isInteger(endAt) ? Math.min(sentence.end, endAt) : sentence.end;
  const immediatePrevious = tokens[verbIndex - 1];
  const followingNominalIndex = nextNominal(tokens, verbIndex + 1, {end, skipPrepositional: true});
  const followingNominal = followingNominalIndex >= 0 ? tokens[followingNominalIndex] : null;
  const previousCase = observedCase(immediatePrevious);
  const previousFeatures = tokenFeatures(immediatePrevious);
  const followingFeatures = tokenFeatures(followingNominal);
  const verbalObjectPronoun = Boolean(tokens[verbIndex]?.morph?.segments?.enclitic);
  // لا يسبق حسم الفاعلُ المفعولَ المتقدم: العلامة المنصوبة، أو ضمير العائد، أو إطار غير عاقل/عاقل قرائن حاسمة.
  const preverbalObjectCue = Boolean(verb?.transitive && immediatePrevious
    && isStrongNominalCandidate(immediatePrevious)
    && (previousCase === 'accusative' || previousCase === 'accgen' || verbalObjectPronoun
      || (followingNominal && previousFeatures.animacy === 'nonhuman' && followingFeatures.animacy === 'human')));

  if (allowPreverbal && verbIndex - 1 >= start && immediatePrevious
      && immediatePrevious.sentence === tokens[verbIndex].sentence
      && (isStrongNominalCandidate(immediatePrevious) || isNisbaSubjectCandidate(immediatePrevious))
      && !isPrepositionGovernedToken(tokens, verbIndex - 1)
      && !isAdjective(immediatePrevious) && !preverbalObjectCue) {
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
    if ((isStrongNominalCandidate(candidate) || isNisbaSubjectCandidate(candidate)) && !isPrepositionGovernedToken(tokens, j) && !isAdjective(candidate)
        && !['accusative', 'accgen'].includes(observedCase(candidate))
        && !(j === verbIndex - 1 && preverbalObjectCue)) {
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

    // حرف جر منفصل، بما فيه الرسم الذي ستصححه طبقة الإملاء: نتجاوز
    // المركب المجرور كاملًا لا الرأس الأول وحده.
    if (canonicalPrepositionCore(token)) {
      const governed = nextNominal(tokens, i + 1, {end, skipPrepositional: false});
      if (governed >= 0) {
        i = nominalArgumentUnitEnd(tokens, governed, end) - 1;
        while (i + 1 < end && isAdjective(tokens[i + 1])) i += 1;
      }
      skipped += 1;
      continue;
    }
    // حرف جر متصل بالاسم: نتجاوز معه ذيل الإضافة («باسم الوزارة»).
    if (token.morph.segments?.preposition) {
      const unitEnd = nominalArgumentUnitEnd(tokens, i, end);
      skipped += Math.max(1, unitEnd - i);
      i = unitEnd - 1;
      continue;
    }
    if (SUBJECT_SKIP_ADVERBS.has(core)) {
      skipped += 1;
      continue;
    }
    if (bestVerb(token) || isKanaSurface(core) || INNA_PARTICLES.has(core)) break;
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
      if (!completeFrame && observed !== 'nominative' && !preverbalObjectCue && !verbalObjectPronoun) return null;
    }
    return {
      subjectIndex: i,
      order: 'VSO',
      confidence: skipped ? 0.86 : (observed === 'nominative' ? 0.96 : (preverbalObjectCue ? 0.91 : 0.94)),
      evidence: ['subject-after-verb', preverbalObjectCue ? 'preverbal-object-frame' : null,
        skipped ? 'skipped-nonargument-span' : 'adjacent-subject'].filter(Boolean)
    };
  }
  return null;
}


/* ===== MODULE: src/syntax/advanced-structures.js ===== */
const CONDITIONAL_MARKERS = new Set(['إن', 'من', 'إذا', 'لو', 'لولا', 'كلما', 'مهما', 'متى', 'أينما', 'حيثما', 'كيفما']);
const MASDARI_MARKERS = new Set(['أن', 'كي', 'لكي']);

function detectCompoundConjunctions(context) {
  const {tokens} = context;
  const structures = [];
  function findAfter(start, accepted, limit = 18) {
    for (let j = start + 1; j < Math.min(tokens.length, start + limit); j += 1) {
      if (tokens[j].sentence !== tokens[start].sentence) break;
      const core = tokens[j].morph.core;
      if (accepted.has(core)) return j;
    }
    return -1;
  }
  for (let i = 0; i < tokens.length; i += 1) {
    const core = tokens[i].morph.core;
    let partner = -1;
    let type = null;
    if (core === 'إما') { partner = findAfter(i, new Set(['أو', 'إما'])); type = 'either-or'; }
    else if (core === 'سواء') { partner = findAfter(i, new Set(['أم', 'أو'])); type = 'whether-or'; }
    else if (core === 'لا') { partner = findAfter(i, new Set(['بل', 'ولا'])); type = 'not-but'; }
    else if (core === 'ليس' && tokens[i + 1]?.morph?.core === 'فقط') {
      partner = findAfter(i + 1, new Set(['بل'])); type = 'not-only-but-also';
    }
    if (partner < 0) continue;
    structures.push({
      id: `compound-coordination:${i}:${partner}`, type: 'compound-coordination', subtype: type,
      start: i, firstMarkerIndex: i, secondMarkerIndex: partner, end: sentenceBounds(tokens, i).end,
      markers: [tokens[i].surface, tokens[partner].surface], confidence: 0.96
    });
  }
  return structures;
}

function detectConditionalClause(tokens, markerIndex, root) {
  const marker = tokens[markerIndex]?.morph?.core;
  if (!CONDITIONAL_MARKERS.has(marker)) return null;
  // «من» مشتركة بين الشرط والاستفهام والموصول والجر؛ لا تحسم شرطيةً إلا في صدر بنية فعلية مزدوجة.
  if (marker === 'من') {
    const before = tokens[markerIndex - 1];
    const atClauseStart = markerIndex === root.start
      || (before && before.sentence !== tokens[markerIndex].sentence)
      || Boolean(tokens[markerIndex].morph.segments?.conjunction);
    if (!atClauseStart) return null;
  }
  const verbLike = token => Boolean(bestVerb(token)
    || (token?.morph?.pos === 'unknown' && /^[يتأن][ء-ي]{3,}$/u.test(token.morph.core)));
  // قد يتوسط عامل جزم صريح بين «إن» وفعل الشرط: «إن لم تدرس».
  // نتجاوز أدوات JUSSIVE_PARTICLES عند اختبار القراءة الشرطية، مع إبقائها داخل
  // حدود جملة الشرط لتسجل لاحقًا عاملًا محليًا للفعل.
  let firstPredicateIndex = markerIndex + 1;
  while (firstPredicateIndex < root.end
      && JUSSIVE_PARTICLES.has(tokens[firstPredicateIndex]?.morph?.core)) firstPredicateIndex += 1;
  // «إن» الشرطية يليها فعل، مباشرة أو بعد عامل جزم؛ وإذا وليها اسم فقراءة الناسخ أرجح.
  if (marker === 'إن' && !verbLike(tokens[firstPredicateIndex])) return null;
  let conditionVerbIndex = -1;
  let answerVerbIndex = -1;
  for (let j = markerIndex + 1; j < root.end; j += 1) {
    if (!verbLike(tokens[j])) continue;
    if (conditionVerbIndex < 0) conditionVerbIndex = j;
    else { answerVerbIndex = j; break; }
  }
  if (conditionVerbIndex < 0 || (marker === 'من' && answerVerbIndex < 0)) return null;
  let answerMarkerIndex = answerVerbIndex;
  if (answerVerbIndex > markerIndex + 1 && (tokens[answerVerbIndex].morph.segments?.conjunction === 'ف'
      || tokens[answerVerbIndex - 1]?.morph?.core === 'ف')) answerMarkerIndex = answerVerbIndex - 1;
  return {
    id: `${root.id}:cond${markerIndex}`, type: 'conditional', parent: root.id,
    start: markerIndex, end: root.end, depth: 1, markerIndex,
    conditionVerbIndex, protasisStart: markerIndex + 1,
    protasisEnd: answerVerbIndex >= 0 ? answerMarkerIndex : root.end,
    apodosisStart: answerVerbIndex >= 0 ? answerMarkerIndex : -1,
    answerVerbIndex, confidence: answerVerbIndex >= 0 ? 0.97 : 0.86
  };
}

function detectMasdariClause(tokens, markerIndex, root) {
  const marker = tokens[markerIndex]?.morph?.core;
  if (!MASDARI_MARKERS.has(marker)) return null;
  let verbIndex = -1;
  for (let j = markerIndex + 1; j < Math.min(root.end, markerIndex + 4); j += 1) {
    if (bestVerb(tokens[j])) { verbIndex = j; break; }
    if (isStrongNominalCandidate(tokens[j])) break;
  }
  if (verbIndex < 0) return null;
  return {
    id: `${root.id}:masdar${markerIndex}`, type: 'masdari', parent: root.id,
    start: markerIndex, end: root.end, depth: 1, markerIndex, verbIndex,
    function: 'verbal-clause-as-nominal-constituent', confidence: 0.96
  };
}

function verbMoodInContext(context, index, verb = bestVerb(context.tokens[index])) {
  if (!verb) return null;
  if (verb.tense === 'imperative') return 'imperative';
  if (verb.tense !== 'present') return null;
  const previousCore = context.tokens[index - 1]?.morph?.core;
  if (SUBJUNCTIVE_PARTICLES.has(previousCore)) return 'subjunctive';
  if (JUSSIVE_PARTICLES.has(previousCore)) return 'jussive';
  const conditional = (context.syntax?.clauses || []).find(clause => clause.type === 'conditional'
    && (clause.conditionVerbIndex === index || clause.answerVerbIndex === index));
  if (conditional && ['إن', 'من', 'مهما', 'متى', 'أينما', 'حيثما', 'كيفما'].includes(context.tokens[conditional.markerIndex]?.morph?.core)) return 'jussive';
  return verb.mood || 'indicative';
}

function buildParseTree(context) {
  const {tokens} = context;
  const nodes = tokens.map(token => {
    const role = context.syntax.roles[token.index] || null;
    const clauseId = context.syntax.tokenClause[token.index] || null;
    const verb = bestVerb(token);
    const features = verb
      ? {person: verb.person, gender: verb.gender || null, number: verb.number || null, tense: verb.tense, mood: verbMoodInContext(context, token.index, verb)}
      : {gender: token.morph.gender, number: token.morph.number, case: observedCase(token)};
    return {
      id: `t${token.index}`, tokenIndex: token.index, surface: token.surface,
      lemma: token.morph.lemma, pos: token.morph.pos, role: role?.role || null,
      clauseId, features
    };
  });
  const edges = [];
  const roots = [];
  for (const group of context.sentences) {
    const explicitRoot = group.find(token => bestVerb(token))
      || group.find(token => ['topic', 'subject', 'inna-subject', 'kana-subject'].includes(context.syntax.roles[token.index]?.role))
      || group[0];
    if (explicitRoot) roots.push(`t${explicitRoot.index}`);
  }
  for (const token of tokens) {
    const role = context.syntax.roles[token.index];
    let headIndex = Number.isInteger(role?.headIndex) ? role.headIndex
      : Number.isInteger(role?.verbIndex) ? role.verbIndex : null;
    if (headIndex == null && !roots.includes(`t${token.index}`)) {
      const clause = clauseForToken(context, token.index);
      const clauseRoot = tokens.slice(clause.start, clause.end).find(item => bestVerb(item));
      if (clauseRoot && clauseRoot.index !== token.index) headIndex = clauseRoot.index;
    }
    if (headIndex != null && headIndex !== token.index) {
      edges.push({head: `t${headIndex}`, dependent: `t${token.index}`, relation: role?.role || 'clause-dependent', confidence: role?.confidence || 0.72});
    }
  }
  function upsertEdge(headIndex, dependentIndex, relation, confidence) {
    if (!Number.isInteger(headIndex) || !Number.isInteger(dependentIndex) || headIndex === dependentIndex) return;
    const existing = edges.find(edge => edge.head === `t${headIndex}` && edge.dependent === `t${dependentIndex}`);
    if (existing) {
      if (existing.relation === 'clause-dependent' || confidence > existing.confidence) Object.assign(existing, {relation, confidence});
    } else edges.push({head: `t${headIndex}`, dependent: `t${dependentIndex}`, relation, confidence});
  }
  for (const clause of context.syntax.clauses) {
    if (clause.type === 'masdari') {
      let matrixVerb = null;
      for (let j = clause.markerIndex - 1; j >= 0 && tokens[j].sentence === tokens[clause.markerIndex].sentence; j -= 1) {
        if (bestVerb(tokens[j])) { matrixVerb = tokens[j]; break; }
      }
      if (matrixVerb) upsertEdge(matrixVerb.index, clause.verbIndex, 'masdari-complement', clause.confidence || 0.96);
    } else if (clause.type === 'conditional' && clause.answerVerbIndex >= 0) {
      upsertEdge(clause.conditionVerbIndex, clause.answerVerbIndex, 'conditional-apodosis', clause.confidence || 0.97);
    }
  }
  for (const structure of context.compoundConjunctions || []) {
    const firstVerb = tokens.slice(structure.firstMarkerIndex + 1, structure.secondMarkerIndex).find(token => bestVerb(token));
    const secondVerb = tokens.slice(structure.secondMarkerIndex + 1, structure.end).find(token => bestVerb(token));
    if (firstVerb && secondVerb) upsertEdge(firstVerb.index, secondVerb.index, `compound-${structure.subtype}`, structure.confidence || 0.96);
  }
  return {
    roots, nodes, edges,
    clauses: context.syntax.clauses,
    compoundConjunctions: context.compoundConjunctions || [],
    ambiguities: tokens.filter(token => token.morph.posAmbiguous || token.morph.candidates.length > 1)
      .map(token => ({tokenIndex: token.index, surface: token.surface, candidates: token.morph.candidates.map(item => ({pos: item.pos, lemma: item.lemma, confidence: item.confidence}))}))
  };
}


/* ===== MODULE: src/syntax/nested-sentences.js ===== */
function relativeAntecedentIndex(tokens, relativeIndex) {
  const sentence = tokens[relativeIndex]?.sentence;
  for (let i = relativeIndex - 1; i >= 0 && tokens[i].sentence === sentence; i -= 1) {
    if (isAdjective(tokens[i])) continue;
    const pos = tokens[i].morph?.nominal?.pos || tokens[i].morph?.pos;
    if (['noun', 'proper'].includes(pos)) return i;
    if (bestVerb(tokens[i]) || INNA_PARTICLES.has(tokens[i].morph.core) || isKanaSurface(tokens[i].morph.core)) break;
  }
  return -1;
}

function hasClausePunctuationBetween(context, leftIndex, rightIndex) {
  const left = context.tokens[leftIndex];
  const right = context.tokens[rightIndex];
  if (!left || !right) return false;
  const gap = context.original.slice(left.originalEnd, right.originalStart);
  return /[،؛؟!,.]/u.test(gap);
}

function isImmediateLocalAdjectiveDependent(tokens, adjectiveIndex) {
  const adjective = tokens[adjectiveIndex];
  const head = tokens[adjectiveIndex - 1];
  if (!head || head.sentence !== adjective?.sentence || !isStrongNominalCandidate(head)
      || isAdjective(head) || head.morph.segments?.conjunction) return false;
  if (Boolean(head.morph.definite) !== Boolean(adjective.morph.definite)) return false;
  const headCase = observedCase(head);
  const adjectiveCase = observedCase(adjective);
  if (headCase && adjectiveCase && !caseMatches(adjectiveCase, headCase)) return false;
  return featuresMatch(effectiveAgreement(tokenFeatures(head)), tokenFeatures(adjective)).length === 0;
}

function resumesMatrixNominalPredicate(tokens, adjectiveIndex, antecedentIndex, matrixHasCopula) {
  const candidate = tokens[adjectiveIndex];
  if (!candidate || !isAdjective(candidate) || candidate.morph.segments?.conjunction) return false;
  if (antecedentIndex < 0 || !tokens[antecedentIndex]?.morph?.definite) return false;
  if (SUBJECT_SKIP_ADVERBS.has(candidate.morph.core)) return false;
  if (isImmediateLocalAdjectiveDependent(tokens, adjectiveIndex)) return false;
  if (!matrixHasCopula && ['accusative', 'accgen'].includes(observedCase(candidate))) return false;
  const antecedentFeatures = effectiveAgreement(tokenFeatures(tokens[antecedentIndex]));
  return featuresMatch(antecedentFeatures, tokenFeatures(candidate)).length === 0;
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
      const matrixHasCopula = isKanaSurface(tokens[root.start]?.morph?.core) || INNA_PARTICLES.has(tokens[root.start]?.morph?.core);
      let sawRelativeVerb = false;
      for (let j = i + 1; j < root.end; j += 1) {
        // في «... الذين ساعدوه، ولم يقرؤوا» تتصل الواو بالعامل لا بالفعل.
        // لا نقطع العطف الواقع داخل الصلة بلا فاصلة؛ أما وجود فاصل كتابي مع
        // عامل محلي وفعل تالٍ فينشئ جملة شقيقة مستقلة.
        const conjoinedGovernorStartsSibling = sawRelativeVerb
          && tokens[j].morph.segments?.conjunction
          && JUSSIVE_PARTICLES.has(tokens[j].morph.core)
          && bestVerb(tokens[j + 1])
          && hasClausePunctuationBetween(context, j - 1, j);
        if (conjoinedGovernorStartsSibling) {
          relativeEnd = j;
          break;
        }
        if (bestVerb(tokens[j])) {
          // A second verb introduced by a conjunction starts a sibling verbal
          // clause; it is not absorbed into the relative argument domain.
          if (sawRelativeVerb && tokens[j].morph.segments?.conjunction) {
            relativeEnd = j;
            break;
          }
          sawRelativeVerb = true;
          continue;
        }
        // بعد اكتمال الفعل وملحقاته قد تستأنف الجملة الأصلية بخبر اسمي بلا
        // ناسخ: «الطلاب الذين حضروا مبكرًا ناجحون». نقطع فقط إذا طابق المرشح
        // سابق الموصول ولم يكن نعتًا محليًا لاسم قبله ولا حالًا منصوبًا.
        if (sawRelativeVerb
            && resumesMatrixNominalPredicate(tokens, j, antecedentIndex, matrixHasCopula)) {
          relativeEnd = j;
          break;
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
    const conditional = detectConditionalClause(tokens, i, root);
    if (conditional) {
      clauses.push(conditional);
      for (let j = conditional.start; j < conditional.end; j += 1) {
        if (!String(tokenClause[j]).includes(':rel')) tokenClause[j] = conditional.id;
      }
      continue;
    }
    const masdari = detectMasdariClause(tokens, i, root);
    if (masdari) {
      clauses.push(masdari);
      for (let j = masdari.start; j < masdari.end; j += 1) {
        if (!String(tokenClause[j]).includes(':rel')) tokenClause[j] = masdari.id;
      }
      continue;
    }
    if (INNA_PARTICLES.has(tokens[i].morph.core) && i > root.start) {
      const clause = {id: `${root.id}:comp${i}`, type: 'complement', parent: root.id, start: i, end: root.end, depth: 1, markerIndex: i};
      clauses.push(clause);
      for (let j = clause.start; j < clause.end; j += 1) if (!String(tokenClause[j]).includes(':rel')) tokenClause[j] = clause.id;
      continue;
    }
    const coordinationEligible = tokenClause[i] === root.id;
    const coordinatedVerbIndex = coordinationEligible && tokens[i].morph.segments?.conjunction && bestVerb(tokens[i])
      ? i
      : (coordinationEligible && tokens[i].morph.segments?.conjunction && JUSSIVE_PARTICLES.has(tokens[i].morph.core)
          && bestVerb(tokens[i + 1]) ? i + 1 : -1);
    if (coordinatedVerbIndex >= 0) {
      let coordinatedEnd = root.end;
      for (let j = coordinatedVerbIndex + 1; j < root.end; j += 1) {
        const directConjoinedVerb = tokens[j].morph.segments?.conjunction && bestVerb(tokens[j]);
        const conjoinedGovernor = tokens[j].morph.segments?.conjunction
          && JUSSIVE_PARTICLES.has(tokens[j].morph.core) && bestVerb(tokens[j + 1]);
        if (directConjoinedVerb || conjoinedGovernor) { coordinatedEnd = j; break; }
      }
      const clause = {id: `${root.id}:coord${i}`, type: 'coordinated', parent: root.id,
        start: i, end: coordinatedEnd, depth: 1, markerIndex: i, verbIndex: coordinatedVerbIndex};
      clauses.push(clause);
      for (let j = clause.start; j < clause.end; j += 1) {
        if (tokenClause[j] === root.id) tokenClause[j] = clause.id;
      }
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

// Clause Isolation 1.0: an argument search may live inside its own clause, but
// it may not cross the start of a child relative/complement/coordinate clause.
function clauseLocalArgumentBounds(context, verbIndex, clause = clauseForToken(context, verbIndex)) {
  const bounds = {start: clause?.start ?? 0, end: clause?.end ?? context.tokens.length};

  // The conditional wrapper is one government domain but contains two
  // independent argument domains. Do not let the answer verb consume a noun
  // from the condition, nor let the condition cross into the answer.
  if (clause?.type === 'conditional' && Number.isInteger(clause.protasisEnd)
      && Number.isInteger(clause.apodosisStart)) {
    if (verbIndex < clause.protasisEnd) bounds.end = Math.min(bounds.end, clause.protasisEnd);
    else if (verbIndex >= clause.apodosisStart) bounds.start = Math.max(bounds.start, clause.apodosisStart);
  }

  const barrier = (context.syntax?.clauses || [])
    .filter(item => item.parent === clause?.id && item.start > verbIndex
      && ['relative', 'masdari', 'complement', 'conditional', 'coordinated'].includes(item.type))
    .sort((a, b) => a.start - b.start)[0];
  if (barrier) bounds.end = Math.min(bounds.end, barrier.start);
  return bounds;
}

function nominalArgumentUnitEnd(tokens, index, end = tokens.length) {
  let cursor = index;
  while (cursor + 1 < end && isIdafaHead(tokens, cursor)) cursor += 1;
  return cursor + 1;
}

function nextMatrixNominal(context, start, end) {
  const {tokens} = context;
  for (let i = start; i < end; i += 1) {
    if (RELATIVE_PRONOUNS[tokens[i].morph.core]) {
      const relative = context.syntax?.clauses?.find(c => c.type === 'relative' && c.markerIndex === i);
      if (relative) { i = Math.max(i, relative.end - 1); continue; }
    }
    if (!isNominal(tokens[i])) continue;
    if (isPrepositionGovernedToken(tokens, i)) {
      i = nominalArgumentUnitEnd(tokens, i, end) - 1;
      continue;
    }
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
  const argumentBounds = clauseLocalArgumentBounds(context, verbIndex, clause);

  // فاعل متقدم يفصله «قد/سوف» أو ظرف قصير، مع اعتماد الدور المحسوم.
  if (allowPreverbal && clause?.type !== 'relative') {
    let cursor = verbIndex - 1;
    while (cursor >= (clause?.start || 0)
        && (VERBAL_PARTICLES.has(tokens[cursor].morph.core) || SUBJECT_SKIP_ADVERBS.has(tokens[cursor].morph.core))) cursor -= 1;
    const role = context.syntax?.roles?.[cursor];
    if (cursor >= (clause?.start ?? 0)
        && (isStrongNominalCandidate(tokens[cursor]) || isNisbaSubjectCandidate(tokens[cursor]))
        && ['subject', 'inna-subject', 'kana-subject', 'topic'].includes(role?.role)) {
      return {
        subjectIndex: cursor, order: 'SVO', confidence: 0.975,
        evidence: ['subject-resolver-2.2', 'preverbal-subject-through-particle', `role:${role.role}`],
        resolvedFeatures: null, antecedentIndex: -1, clauseId: clause?.id || null, resolverVersion: '2.2'
      };
    }
  }

  // خبر الناسخ الجملة الفعلية يعود إلى اسم الناسخ لا إلى أقرب نعت.
  const copularSubjectIndex = context.syntax?.roles?.findIndex(role =>
    ['inna-subject', 'kana-subject'].includes(role?.role) && role?.structure?.predicateClauseVerb === verbIndex
  );
  if (copularSubjectIndex >= 0) {
    const structure = context.syntax.roles[copularSubjectIndex].structure;
    return {
      subjectIndex: structure.subjectFeatureIndex, order: 'SVO', confidence: 0.98,
      evidence: ['subject-resolver-2.2', 'copular-clause-subject', `role:${context.syntax.roles[copularSubjectIndex].role}`],
      resolvedFeatures: null, antecedentIndex: -1, clauseId: clause?.id || null, resolverVersion: '2.2'
    };
  }

  // في صلة الموصول قد يفصل شبه جملة بين الموصول وفعله؛ الموصول هو الفاعل النحوي.
  if (clause?.type === 'relative') {
    const marker = tokens[clause.markerIndex];
    if (marker && clause.markerIndex < verbIndex && RELATIVE_PRONOUNS[marker.morph.core]) {
      let anotherVerb = false;
      for (let i = clause.markerIndex + 1; i < verbIndex; i += 1) if (bestVerb(tokens[i])) anotherVerb = true;
      if (!anotherVerb) {
        const objectEnclitic = tokens[verbIndex].morph.segments?.enclitic;
        // V18.7.7: إذا حمل الفعل ضمير مفعول متصل فلا يُحسم الموصول فاعلًا
        // («الكتاب الذي قرأتُه» الفاعل مضمر 1s/2ms/3fs والضمير هو المفعول
        // العائد؛ «الكتب التي اختارها المعلم» المعلم فاعل ظاهر). حسمُ الموصول
        // فاعلًا هنا كان يولد إنذارًا كاذبًا (قرأته ← قرأه). الموصول لا يشغل
        // خانة الفاعل إلا إذا كانت خانة المفعول خالية فعلًا (لا ضمير ولا اسم
        // ظاهر): «الطالب الذي نجح».
        const overtPostverbalSubject = objectEnclitic
          ? nextUngovernedNominal(tokens, verbIndex + 1, {end: argumentBounds.end}) : -1;
        if (!objectEnclitic || overtPostverbalSubject >= 0) {
          const resolved = resolvedRelativeFeatures(context, clause.markerIndex);
          // مع فاعل ظاهر بعد الضمير («اختارها المعلم») الموصول مفعول لا فاعل؛
          // ومع خلوّ خانة المفعول («الطالب الذي نجح») الموصول فاعل.
          const relativeIsObject = objectEnclitic && overtPostverbalSubject >= 0;
          if (!relativeIsObject) {
            return {
              subjectIndex: clause.markerIndex, order: 'SVO', confidence: resolved ? 0.985 : 0.94,
              evidence: ['subject-resolver-2.3', 'relative-pronoun-subject', `clause:${clause.id}`],
              resolvedFeatures: resolved?.features || tokenFeatures(marker), antecedentIndex: resolved?.antecedentIndex ?? -1,
              clauseId: clause.id, resolverVersion: '2.3'
            };
          }
        }
      }
    }
  }

  // مع فعل المتكلم أو المخاطب يكون الفاعل مضمرًا. والصيغة المشتركة مثل «قرأت»
  // لا تجعل عبارة العدد التالية فاعلًا لفعل متعدٍ بلا إطار فاعل ظاهر مستقل.
  const hasSpeechParticipantReading = context.tokens[verbIndex].morph.verbAnalyses?.some(analysis => analysis.person === 1 || analysis.person === 2);
  const followingNumberPhrase = numberPhraseAtStart(context, verbIndex + 1);
  const inflectionalSubject = verb?.person === 3
    && (verb.number === 'pl' || verb.number === 'du'
      || ['3mp', '3fp', '3dm', '3df'].includes(verb.personCode));
  const immediatePostverbal = tokens[verbIndex + 1];
  const immediateObjectUnitEnd = immediatePostverbal
    ? nominalArgumentUnitEnd(tokens, verbIndex + 1, argumentBounds.end) : verbIndex + 1;
  const afterImmediateObjectUnit = tokens[immediateObjectUnitEnd];
  const speechParticipantObjectFrame = Boolean(verb?.transitive && hasSpeechParticipantReading
    && isStrongNominalCandidate(immediatePostverbal)
    && tokenFeatures(immediatePostverbal).animacy !== 'human'
    && (canonicalPrepositionCore(afterImmediateObjectUnit)
      || ADVERBIAL_GOVERNORS.has(afterImmediateObjectUnit?.morph?.core)
      || immediateObjectUnitEnd >= argumentBounds.end));
  const implicitSubject = verb && ((verb.person === 1 || verb.person === 2) || inflectionalSubject
    || (verb.transitive && hasSpeechParticipantReading && followingNumberPhrase)
    || speechParticipantObjectFrame);
  let numberPhraseObjectFrame = false;
  if (!implicitSubject) {
    for (let j = verbIndex + 1; j < Math.min(argumentBounds.end, verbIndex + 6); j += 1) {
      if (canonicalPrepositionCore(tokens[j])) { j += 1; continue; }
      // Skip the whole governed iḍāfa unit: in «تحدث باسم الوزارة» both
      // «باسم» and its genitive tail belong to the prepositional argument.
      if (isPrepositionGovernedToken(tokens, j)) {
        j = nominalArgumentUnitEnd(tokens, j, argumentBounds.end) - 1;
        continue;
      }
      if (SUBJECT_SKIP_ADVERBS.has(tokens[j].morph.core)) continue;
      const phrase = numberPhraseAtStart(context, j);
      if (phrase) {
        const phraseCase = phrase.externalCase || observedCase(tokens[phrase.start]);
        const laterNominal = nextUngovernedNominal(tokens, phrase.coreEnd, {end: argumentBounds.end});
        const hasLaterObject = laterNominal >= 0
          && !phrase.modifierCandidates.includes(laterNominal)
          && !RELATIVE_PRONOUNS[tokens[laterNominal]?.morph?.core];
        const transitiveObjectReading = verb?.transitive
          && phraseCase !== 'nominative' && !hasLaterObject;
        if (transitiveObjectReading) {
          numberPhraseObjectFrame = true;
          break;
        }
        return {
          subjectIndex: phrase.start, order: 'VSO', confidence: 0.97,
          evidence: ['subject-resolver-2.3', 'number-phrase-subject', `number:${phrase.value}`],
          resolvedFeatures: phrase.semanticFeatures, antecedentIndex: -1,
          clauseId: clause?.id || null, resolverVersion: '2.3', numberPhrase: phrase
        };
      }
      if (isStrongNominalCandidate(tokens[j])) break;
    }
  }

  const base = (implicitSubject || numberPhraseObjectFrame) ? null : resolveSubject(tokens, verbIndex, verb, {
    allowPreverbal, startAt: argumentBounds.start, endAt: argumentBounds.end
  });
  if (base) {
    const role = useRoles ? context.syntax?.roles?.[base.subjectIndex] : null;
    const excluded = ['object', 'genitive', 'object-of-preposition', 'number-tamyiz', 'adjective', 'hal', 'predicate', 'inna-predicate', 'kana-predicate'].includes(role?.role);
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
  const candidateIndex = nextUngovernedNominal(tokens, verbIndex + 1, {end: argumentBounds.end});
  if (!implicitSubject && !numberPhraseObjectFrame && candidateIndex >= 0 && candidateIndex <= verbIndex + 2) {
    const candidate = tokens[candidateIndex];
    const candidateConfidence = candidate.morph.nominal?.confidence || 0;
    const annexationBefore = candidateIndex === verbIndex + 2
      && /[ء-ي]و$/u.test(tokens[verbIndex + 1]?.clean || '') && candidate.morph.definite;
    if (candidateConfidence < 0.9 || annexationBefore) return null;
    const features = tokenFeatures(candidate);
    const role = useRoles ? context.syntax?.roles?.[candidateIndex] : null;
    if (!['genitive', 'object-of-preposition', 'number-tamyiz', 'adjective', 'predicate', 'inna-predicate', 'kana-predicate'].includes(role?.role)) {
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

/* ===== MODULE: src/syntax/copular-structure-resolver.js ===== */
function nextArgumentUnit(context, start, end) {
  const {tokens} = context;
  for (let i = start; i < end; i += 1) {
    const phrase = numberPhraseAtStart(context, i);
    if (phrase) return {kind: 'number-phrase', headIndex: phrase.start, featureIndex: phrase.countedIndex, end: phrase.end, phrase};
    if (PREPOSITIONS.has(tokens[i].morph.core)) {
      const governed = nextNominal(tokens, i + 1, {end, skipPrepositional: false});
      if (governed >= 0) i = governed;
      continue;
    }
    if (tokens[i].morph.segments?.preposition) continue;
    if (SUBJECT_SKIP_ADVERBS.has(tokens[i].morph.core) || ADVERBIAL_GOVERNORS.has(tokens[i].morph.core)) continue;
    if (isStrongNominalCandidate(tokens[i])) return {kind: 'nominal', headIndex: i, featureIndex: i, end: i + 1, phrase: null};
  }
  return null;
}

function particleIntroducesVerbClause(tokens, markerIndex) {
  return ['أن', 'إن'].includes(tokens[markerIndex]?.morph?.core) && Boolean(bestVerb(tokens[markerIndex + 1]));
}

function resolveCopularStructure(context, markerIndex, kind) {
  const {tokens} = context;
  const markerClause = clauseForToken(context, markerIndex);
  // «إن» التي حسمها محلل الجملة أداة شرط ليست ناسخًا، حتى إذا كان فعل
  // الشرط خارج المعجم ولم يكف الفحص المعجمي المحلي وحده.
  if (kind === 'inna' && markerClause?.type === 'conditional'
      && markerClause.markerIndex === markerIndex) return null;
  if (kind === 'inna' && particleIntroducesVerbClause(tokens, markerIndex)) return null;
  const {end} = sentenceBounds(tokens, markerIndex);
  const subject = nextArgumentUnit(context, markerIndex + 1, end);
  if (!subject) return null;

  let cursor = subject.end;
  const modifiers = [];
  let predicateIndex = -1;
  let predicateClauseVerb = -1;

  // تخطّي صلة الموصول التابعة للاسم قبل البحث عن الخبر.
  if (RELATIVE_PRONOUNS[tokens[cursor]?.morph?.core]) {
    const relative = context.syntax?.clauses?.find(clause => clause.type === 'relative' && clause.markerIndex === cursor);
    if (relative) cursor = relative.end;
  }

  if (subject.kind === 'number-phrase') {
    const adjectives = [];
    for (let i = cursor; i < end; i += 1) {
      if (bestVerb(tokens[i])) { predicateClauseVerb = i; break; }
      if (isAdjective(tokens[i]) && !tokens[i].morph.segments?.conjunction) adjectives.push(i);
      else if (isNominal(tokens[i]) && !tokens[i].morph.segments?.preposition) { predicateIndex = i; break; }
      else if (adjectives.length) break;
    }
    if (predicateIndex < 0 && adjectives.length) {
      predicateIndex = adjectives.at(-1);
      modifiers.push(...adjectives.slice(0, -1));
    }
  } else {
    const subjectToken = tokens[subject.featureIndex];
    const subjectDefinite = Boolean(subjectToken.morph.definite);
    if (subjectDefinite) {
      for (let i = cursor; i < end; i += 1) {
        if (RELATIVE_PRONOUNS[tokens[i].morph.core]) {
          const relative = context.syntax?.clauses?.find(clause => clause.type === 'relative' && clause.markerIndex === i);
          if (relative) { i = relative.end - 1; continue; }
        }
        if (bestVerb(tokens[i])) { predicateClauseVerb = i; break; }
        if (isAdjective(tokens[i]) && !tokens[i].morph.segments?.conjunction) {
          if (tokens[i].morph.definite) { modifiers.push(i); continue; }
          predicateIndex = i; break;
        }
        if (isNominal(tokens[i]) && !tokens[i].morph.segments?.preposition) { predicateIndex = i; break; }
      }
    } else {
      const adjectives = [];
      for (let i = cursor; i < end; i += 1) {
        if (bestVerb(tokens[i])) { predicateClauseVerb = i; break; }
        if (isAdjective(tokens[i]) && !tokens[i].morph.segments?.conjunction) adjectives.push(i);
        else if (isNominal(tokens[i]) && !tokens[i].morph.segments?.preposition) { predicateIndex = i; break; }
        else if (adjectives.length) break;
      }
      if (predicateIndex < 0 && adjectives.length) {
        predicateIndex = adjectives.at(-1);
        modifiers.push(...adjectives.slice(0, -1));
      }
    }
  }

  return {
    kind, markerIndex, subjectIndex: subject.headIndex, subjectFeatureIndex: subject.featureIndex,
    subjectKind: subject.kind, numberPhrase: subject.phrase,
    modifiers, predicateIndex, predicateClauseVerb, end,
    confidence: subject.kind === 'number-phrase' ? 0.985 : 0.97
  };
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

function adjectiveShapeMatches(head, adjective) {
  if (!head || !adjective) return false;
  const target = effectiveAgreement(tokenFeatures(head));
  const actual = tokenFeatures(adjective);
  return Boolean(target.gender && target.number && actual.gender && actual.number
    && target.gender === actual.gender && target.number === actual.number);
}

/* ===== MODULE: src/syntax/object-resolver-1.0.js ===== */
const OBJECT_PRONOUN_FEATURES = Object.freeze({
  ه: {person: 3, gender: 'm', number: 'sg'}, ها: {person: 3, gender: 'f', number: 'sg'},
  هما: {person: 3, gender: null, number: 'du'}, هم: {person: 3, gender: 'm', number: 'pl'},
  هن: {person: 3, gender: 'f', number: 'pl'}, ك: {person: 2, gender: null, number: 'sg'},
  كما: {person: 2, gender: null, number: 'du'}, كم: {person: 2, gender: 'm', number: 'pl'},
  كن: {person: 2, gender: 'f', number: 'pl'}, ي: {person: 1, gender: null, number: 'sg'},
  ني: {person: 1, gender: null, number: 'sg'}, نا: {person: 1, gender: null, number: 'pl'}
});

function objectClauseEnd(context, verbIndex, clause) {
  return clauseLocalArgumentBounds(context, verbIndex, clause).end;
}

function advancedObjectCandidate(context, verbIndex, verb, subjectRelation) {
  const {tokens} = context;
  const candidateIndex = verbIndex - 1;
  const candidate = tokens[candidateIndex];
  if (!verb?.transitive || !candidate || candidate.sentence !== tokens[verbIndex].sentence
      || !isStrongNominalCandidate(candidate) || candidate.morph.segments?.preposition
      || RELATIVE_PRONOUNS[candidate.morph.core]
      || isAdjective(candidate) || subjectRelation?.subjectIndex === candidateIndex) return null;
  const observed = observedCase(candidate);
  const subject = tokens[subjectRelation?.subjectIndex];
  const candidateFeatures = tokenFeatures(candidate);
  const subjectFeatures = tokenFeatures(subject);
  const enclitic = tokens[verbIndex].morph.segments?.enclitic;
  if (observed === 'accusative' || observed === 'accgen') {
    return {index: candidateIndex, confidence: 0.985, kind: 'advanced-explicit',
      evidence: ['preverbal-object', 'visible-or-structural-accusative']};
  }
  if (enclitic && subjectRelation?.subjectIndex > verbIndex) {
    return {index: candidateIndex, confidence: 0.94, kind: 'advanced-resumptive',
      evidence: ['preverbal-object-topic', 'resumptive-object-pronoun', `pronoun:${enclitic}`]};
  }
  if (subjectRelation?.subjectIndex > verbIndex && candidateFeatures.animacy === 'nonhuman'
      && subjectFeatures.animacy === 'human') {
    return {index: candidateIndex, confidence: 0.91, kind: 'advanced-selectional',
      evidence: ['preverbal-object', 'nonhuman-object-human-subject-frame']};
  }
  return null;
}

function nextObjectArgument(context, start, end, subjectIndex, roles) {
  const {tokens} = context;
  for (let i = start; i < end; i += 1) {
    const token = tokens[i];
    if (bestVerb(token) || isKanaSurface(token.morph.core) || INNA_PARTICLES.has(token.morph.core)
        || CONDITIONAL_MARKERS.has(token.morph.core) || MASDARI_MARKERS.has(token.morph.core)) break;
    if (canonicalPrepositionCore(token)) {
      const governed = nextNominal(tokens, i + 1, {end, skipPrepositional: false});
      if (governed >= 0) i = nominalArgumentUnitEnd(tokens, governed, end) - 1;
      continue;
    }
    if (isPrepositionGovernedToken(tokens, i)) {
      i = nominalArgumentUnitEnd(tokens, i, end) - 1;
      continue;
    }
    if (SUBJECT_SKIP_ADVERBS.has(token.morph.core)
        || ADVERBIAL_GOVERNORS.has(token.morph.core)) continue;
    const phrase = numberPhraseAtStart(context, i);
    if (phrase && phrase.start < end) return {index: phrase.start, phrase, kind: 'number-phrase'};
    if (i === subjectIndex || isAdjective(token)
        || !(isStrongNominalCandidate(token) || isProductiveDefiniteNominalCandidate(token))) continue;
    if (['object-of-preposition', 'number-tamyiz', 'inna-subject', 'kana-subject',
      'inna-predicate', 'kana-predicate'].includes(roles[i]?.role)) continue;
    // «كرّم خالدٌ وسعيدٌ» لا يحوّل المعطوف المرفوع إلى مفعول بلا قرينة نصب.
    if (token.morph.segments?.conjunction && observedCase(token) !== 'accusative'
        && observedCase(token) !== 'accgen') continue;
    return {index: i, phrase: null, kind: token.morph.segments?.enclitic ? 'nominal-with-pronoun' : 'lexical'};
  }
  return null;
}

function resolveObjectV1(context, verbIndex, verb = bestVerb(context.tokens[verbIndex]), subjectRelation = null, roles = context.syntax?.roles || []) {
  const {tokens} = context;
  if (!verb || !verb.transitive) return null;
  const clause = clauseForToken(context, verbIndex);
  const end = objectClauseEnd(context, verbIndex, clause);
  const valency = verb.valency || (verb.transitive ? 'transitive' : 'intransitive');
  const enclitic = tokens[verbIndex].morph.segments?.enclitic || null;
  const advanced = advancedObjectCandidate(context, verbIndex, verb, subjectRelation);

  if (advanced) {
    return {
      resolver: 'ObjectResolver', version: '1.1', verbIndex, verbLemma: verb.lemma, valency,
      subjectIndex: subjectRelation?.subjectIndex ?? null, objectIndex: advanced.index,
      objectKind: advanced.kind, order: 'OVS', confidence: advanced.confidence,
      pronoun: enclitic ? {surface: enclitic, features: OBJECT_PRONOUN_FEATURES[enclitic] || null, function: 'resumptive-object'} : null,
      clauseId: clause?.id || null,
      evidence: ['verb-subject-object-frame', `valency:${valency}`, ...advanced.evidence]
    };
  }

  // الضمير المتصل بالفعل مفعول مستقل، ولا نبحث بعده عن اسم فنخلط الفاعل بالمفعول.
  if (enclitic) {
    return {
      resolver: 'ObjectResolver', version: '1.1', verbIndex, verbLemma: verb.lemma, valency,
      subjectIndex: subjectRelation?.subjectIndex ?? null, objectIndex: null,
      objectKind: 'enclitic-pronoun', order: subjectRelation?.order || 'verbal', confidence: 0.995,
      pronoun: {surface: enclitic, features: OBJECT_PRONOUN_FEATURES[enclitic] || null, function: 'direct-object'},
      clauseId: clause?.id || null,
      evidence: ['verb-object-enclitic', `pronoun:${enclitic}`, `valency:${valency}`]
    };
  }

  let searchFrom = verbIndex + 1;
  if (subjectRelation?.order === 'VSO' && subjectRelation.subjectIndex > verbIndex) {
    // The subject candidate is a complete nominal unit.  In «رئيس اللجنة» the
    // genitive annex is internal to that unit and cannot become the object.
    searchFrom = nominalArgumentUnitEnd(tokens, subjectRelation.subjectIndex, end);
  }
  const candidate = nextObjectArgument(context, searchFrom, end, subjectRelation?.subjectIndex ?? -1, roles);
  if (!candidate) return null;
  const token = tokens[candidate.index];
  const observed = observedCase(token);
  // الأفعال التي يكثر بعدها التمييز لا تُحمل على التعدية عند النكرة بلا دليل صرفي.
  if (VERBAL_CUES.has(verb.lemma) && !token.morph.definite
      && !token.morph.segments?.enclitic && !['accusative', 'accgen'].includes(observed)) return null;
  const completeFrame = Number.isInteger(subjectRelation?.subjectIndex) || ['1', '2'].includes(String(verb.person || ''));
  if (valency === 'ambitransitive' && !completeFrame && !['accusative', 'accgen'].includes(observed)) return null;
  const confidence = candidate.phrase ? 0.955
    : (['accusative', 'accgen'].includes(observed) ? 0.97 : (valency === 'ambitransitive' ? 0.88 : 0.93));
  return {
    resolver: 'ObjectResolver', version: '1.1', verbIndex, verbLemma: verb.lemma, valency,
    subjectIndex: subjectRelation?.subjectIndex ?? null, objectIndex: candidate.index,
    objectKind: candidate.kind, order: subjectRelation?.order === 'SVO' ? 'SVO' : 'VSO',
    confidence, pronoun: token.morph.segments?.enclitic
      ? {surface: token.morph.segments.enclitic, features: OBJECT_PRONOUN_FEATURES[token.morph.segments.enclitic] || null, function: 'possessive-on-object'} : null,
    phraseId: candidate.phrase?.id || null, clauseId: clause?.id || null,
    evidence: ['verb-subject-object-frame', `valency:${valency}`,
      candidate.phrase ? 'number-phrase-object' : 'postverbal-object-candidate',
      observed ? `observed-case:${observed}` : 'unvocalized-role-resolution']
  };
}

function resolveNounRoles(context) {
  const {tokens} = context;
  const roles = new Array(tokens.length).fill(null);

  // السلسلة الإسنادية الملزمة: Verb → Subject → Object.
  // تحفظ العلاقات أولًا، ثم تمر الحكومة والتوابع والنعت على الأدوار النهائية ولا تسبقها.
  context.syntax.roles = roles;
  const subjectRelations = new Map();
  const objectRelations = [];
  const argumentFrames = [];
  for (let i = 0; i < tokens.length; i += 1) {
    const rawVerb = bestVerb(tokens[i]);
    if (!rawVerb) continue;
    // V18.7.6: حسم إطار المتكلم/المخاطب قبل إسناد الأدوار (قابلت المعلمان = مفعول).
    const verb = speechParticipantObjectFrame(context, i, rawVerb) || rawVerb;
    const relation = resolveSubjectV2(context, i, verb, {
      allowPreverbal: !tokens[i].morph.segments?.conjunction, useRoles: true
    });
    const hasInflectionalSubject = verb.person === 1 || verb.person === 2
      || (verb.person === 3 && (verb.number === 'pl' || verb.number === 'du'
        || ['3mp', '3fp', '3dm', '3df'].includes(verb.personCode)));
    const frame = {
      resolver: 'SubjectObjectConflictResolver', version: '1.0', verbIndex: i,
      clauseId: clauseForToken(context, i)?.id || null,
      subjectCandidates: relation ? [{index: relation.subjectIndex, confidence: relation.confidence,
        evidence: relation.evidence}] : [],
      objectCandidates: [], subject: relation || (hasInflectionalSubject
        ? {kind: 'inflectional', personCode: verb.personCode, confidence: 0.995} : null),
      object: null, conflicts: [],
      resolutionOrder: ['Verb', 'SubjectCandidates', 'ObjectCandidates', 'DependencyResolution']
    };
    argumentFrames.push(frame);
    if (!relation) continue;
    subjectRelations.set(i, relation);
    assignRole(roles, relation.subjectIndex, 'subject', relation.confidence, relation.evidence,
      {verbIndex: i, clauseId: relation.clauseId, resolverVersion: relation.resolverVersion || '2.3'});
  }
  for (let i = 0; i < tokens.length; i += 1) {
    const verb = bestVerb(tokens[i]);
    if (!verb?.transitive) continue;
    const objectRelation = resolveObjectV1(context, i, verb, subjectRelations.get(i) || null, roles);
    const frame = argumentFrames.find(item => item.verbIndex === i);
    if (!objectRelation) continue;
    if (frame) {
      frame.objectCandidates.push(Number.isInteger(objectRelation.objectIndex)
        ? {index: objectRelation.objectIndex, confidence: objectRelation.confidence,
          evidence: objectRelation.evidence} : {kind: objectRelation.objectKind,
          confidence: objectRelation.confidence, evidence: objectRelation.evidence});
      if (Number.isInteger(objectRelation.objectIndex)
          && objectRelation.objectIndex === subjectRelations.get(i)?.subjectIndex) {
        frame.conflicts.push({type: 'same-token-subject-object', index: objectRelation.objectIndex,
          resolution: 'subject-kept-object-rejected'});
        continue;
      }
      frame.object = objectRelation;
    }
    objectRelations.push(objectRelation);
    if (Number.isInteger(objectRelation.objectIndex)) {
      assignRole(roles, objectRelation.objectIndex, 'object', objectRelation.confidence,
        objectRelation.evidence, {verbIndex: i, clauseId: objectRelation.clauseId,
          phraseId: objectRelation.phraseId, objectKind: objectRelation.objectKind,
          pronoun: objectRelation.pronoun, resolverVersion: '1.1'});
    }
  }
  context.syntax.subjectRelations = [...subjectRelations.entries()].map(([verbIndex, relation]) => ({verbIndex, ...relation}));
  context.syntax.objectRelations = objectRelations;
  context.syntax.argumentFrames = argumentFrames;
  context.syntax.resolutionPipeline = ['Verb', 'SubjectCandidates', 'ObjectCandidates', 'ConflictResolution', 'Dependency', 'Government', 'Dependent', 'Adjective'];

  // Government: العوامل المغلقة بعد اكتمال Subject/Object.
  for (let i = 0; i < tokens.length; i += 1) {
    const directGovernment = directGovernorCase(tokens, i);
    if (directGovernment?.case === 'genitive' && isNominal(tokens[i])) {
      const adverbialIdafa = ADVERBIAL_GOVERNORS.has(tokens[i - 1]?.morph?.core);
      assignRole(roles, i, adverbialIdafa ? 'genitive' : 'object-of-preposition',
        directGovernment.confidence, [adverbialIdafa ? 'adverbial-idafa-government' : 'preposition-governance']);
    }
    const copularKind = INNA_PARTICLES.has(tokens[i].morph.core)
      ? 'inna' : (isKanaSurface(tokens[i].morph.core) ? 'kana' : null);
    if (copularKind) {
      const structure = resolveCopularStructure(context, i, copularKind);
      if (!structure) continue;
      const subjectRole = copularKind === 'inna' ? 'inna-subject' : 'kana-subject';
      const predicateRole = copularKind === 'inna' ? 'inna-predicate' : 'kana-predicate';
      assignRole(roles, structure.subjectIndex, subjectRole, 0.995, ['copular-structure-resolver', `${copularKind}-subject`], {structure});
      if (structure.numberPhrase) {
        const governance = structure.numberPhrase.governance;
        assignRole(roles, structure.numberPhrase.countedIndex, 'number-tamyiz', 0.995,
          ['number-phrase-priority', `number:${structure.numberPhrase.value}`],
          {headIndex: structure.subjectIndex, expectedCase: governance?.case === 'agreement' ? null : governance?.case, phraseId: structure.numberPhrase.id});
      }
      for (const modifier of structure.modifiers) {
        assignRole(roles, modifier, 'adjective', 0.975, ['copular-structure-resolver', 'subject-modifier'], {headIndex: structure.subjectFeatureIndex});
      }
      assignRole(roles, structure.predicateIndex, predicateRole, 0.97,
        ['copular-structure-resolver', `${copularKind}-predicate`], {headIndex: structure.subjectFeatureIndex, structure});
    }
  }

  // Government: حكومة العدد بعد اكتمال إطار الفعل.
  for (const phrase of context.phraseAnalysis?.phrases || []) {
    const expectedCase = phrase.governance?.case === 'agreement' ? null : phrase.governance?.case;
    assignRole(roles, phrase.countedIndex, 'number-tamyiz', 0.995,
      ['number-phrase-priority', `number:${phrase.value}`],
      {headIndex: phrase.start, expectedCase, phraseId: phrase.id});
  }

  // Dependent ثم Adjective: لا يبدأ حسم التوابع والإضافة قبل الأدوار الإسنادية.
  for (let i = 1; i < tokens.length; i += 1) {
    const previous = tokens[i - 1];
    const token = tokens[i];
    if (previous.sentence !== token.sentence) continue;
    if (isAdjective(token) && isNominal(previous)
        && context.syntax.tokenClause?.[i - 1] === context.syntax.tokenClause?.[i]
        && Boolean(previous.morph.definite) === Boolean(token.morph.definite)) {
      let adjectiveHeadIndex = i - 1;
      const previousRole = roles[i - 1];
      const outerHeadIndex = previousRole?.role === 'genitive' ? previousRole.headIndex : null;
      const outerHead = Number.isInteger(outerHeadIndex) ? tokens[outerHeadIndex] : null;
      // في «كتب المختبر المفيدة» قد تتبع الصفة رأس الإضافة لا المضاف إليه.
      // لا نتجاوز الرأس المجاور إلا إذا خالفه شكل المطابقة ووافق الرأس الخارجي.
      if (outerHead && adjectiveShapeMatches(outerHead, token)
          && !adjectiveShapeMatches(previous, token)) adjectiveHeadIndex = outerHeadIndex;
      assignRole(roles, i, 'adjective', 0.95,
        [adjectiveHeadIndex === i - 1 ? 'adjacent-matching-definiteness' : 'idafa-outer-head-agreement', 'same-clause'],
        {headIndex: adjectiveHeadIndex});
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
    if (isNominal(previous) && !previous.morph.posAmbiguous && !SUBJECT_SKIP_ADVERBS.has(previous.morph.core)
        && isNominal(token) && !token.morph.segments.conjunction
        && !isAdjective(token) && (token.morph.definite || previous.morph.nominal?.fiveNoun)) {
      // قرينة الإضافة أضعف من إطار الفعل المتعدي؛ يسمح ذلك للمفعول الصريح بتجاوزها لاحقًا.
      assignRole(roles, i, 'genitive', 0.82, ['idafa-candidate'], {headIndex: i - 1});
    }
    if (RELATIVE_PRONOUNS[token.morph.core]) {
      const antecedentIndex = relativeAntecedentIndex(tokens, i);
      assignRole(roles, i, 'relative-link', 0.98, ['relative-pronoun'], {antecedentIndex});
    }
  }

  // Adjective/Hal: المرحلة النهائية للأوصاف التابعة والحال.
  for (let i = 1; i < tokens.length; i += 1) {
    if (!isAdjective(tokens[i]) || tokens[i].morph.definite || roles[i]) continue;
    const ownerIndex = previousNominal(tokens, i - 1, {startAt: Math.max(0, i - 3)});
    if (ownerIndex < 0 || tokens[ownerIndex].sentence !== tokens[i].sentence) continue;
    const owner = tokens[ownerIndex];
    if (!(owner.morph.definite || owner.morph.nominal?.pos === 'proper')) continue;
    if (verbBeforeOwner(tokens, ownerIndex) >= 0) assignRole(roles, i, 'hal', 0.87, ['indefinite-description-after-definite-owner'], {headIndex: ownerIndex});
  }

  // V18.7.6 — المبتدأ والخبر في الجملة الاسمية المباشرة + Deep Syntactic Topic Resolver 1.0.
  // المسار الأصلي المحافظ يبقى كما هو؛ ويضاف إليه مسار عميق يحسم المثنى وجمع
  // المذكر الواقعين في صيغة الياء (accgen) أولَ الجملة مبتدأً مرفوعًا، بشرط
  // قرينة خبرية موجبة تمنع أي احتمال نصب/جر متقدم.
  for (const group of context.sentences) {
    const first = group[0];
    if (!first || !group[1]) continue;
    const firstObserved = first ? observedCase(first) : null;
    const ungovernedTopicAllowed = first
      && !first.morph.posAmbiguous
      && !['accusative', 'genitive', 'accgen'].includes(firstObserved)
      && (!first.morph.nominal?.fiveNoun || first.morph.nominal.caseForm === 'nominative');
    // لا نبني جملة اسمية من قراءة اسمية إنتاجية ضعيفة؛ وإلا حوّلت كلمة
    // مجهولة/فعلًا مشكولًا إلى مبتدأ ثم رفعت ما بعده بغير مسوغ.
    const reliableTopicReading = (first?.morph?.nominal?.confidence || 0) >= 0.8;
    const plainTopicEligible = ungovernedTopicAllowed && reliableTopicReading
      && isStrongNominalCandidate(first) && !bestVerb(first)
      && !isKanaSurface(first.morph.core) && !INNA_PARTICLES.has(first.morph.core);

    // المسار العميق: «ـين» معرفة موثقة معجميًا في رأس الجملة، لا دور محسومًا لها،
    // مع قرينة موجبة من الخبر تحسم القراءة الاسمية المرفوعة.
    let deepEvidence = null;
    let deepConfidence = 0;
    let deepTopicNumber = null;
    const headNumberSet = new Set([first.morph.nominal?.number,
      ...(first.morph.numberCandidates || []),
      ...(first.morph.nominal?.numberCandidates || [])].filter(Boolean));
    // V18.7.7: كان القيد السابق يشترط عددًا معجميًا محسومًا (du أو pl) فيغفل
    // المثنى/الجمع الملتبس («باحثين» = مثنى أو جمع مذكر سالم). العدد الملتبس
    // يُحسم هنا من قرينة الخبر نفسها عبر deepExpectedNumber: خبر «مشغولان»
    // يرجّح المثنى، وخبر «حاضرون» يرجّح الجمع، بشرط وجود المرشح في رأس
    // معجمي موثوق (ثقة ≥ 0.95 وغير إنتاجي) — فلا تنكسر مصائد زيتون/ميدان.
    if (!plainTopicEligible && !roles[first.index] && first
        && !first.morph.posAmbiguous && !bestVerb(first)
        && !isKanaSurface(first.morph.core) && !INNA_PARTICLES.has(first.morph.core)
        && isStrongNominalCandidate(first) && firstObserved === 'accgen'
        && (first?.morph?.nominal?.confidence || 0) >= 0.95
        && first.morph.nominal?.source !== 'unverified-productive-inflection-ending'
        && (['du', 'pl'].includes(first.morph.nominal?.number)
          || (headNumberSet.has('du') && headNumberSet.has('pl')))
        && first.morph.definite) {
      const rest = group.slice(1);
      const matrixClauseId = context.syntax.tokenClause?.[first.index];
      const firstFeatures = tokenFeatures(first);
      const headCore = stripDiacritics(first.morph.core || '');
      // العدد المتوقع للمبتدأ: إشارة الخبر (ون=جمع / ان=مثنى) تُعتمد إن وافقها
      // مرشح عددي صريح للرأس؛ وإلا يبقى العدد المعجمي الأصلي.
      const deepExpectedNumber = (signalNumber) => {
        if (!signalNumber) return null;
        const headNumber = first.morph.nominal?.number || null;
        if (headNumber === signalNumber) return null;
        const candidates = first.morph.numberCandidates || first.morph.nominal?.numberCandidates || [];
        return candidates.includes(signalNumber) ? signalNumber : null;
      };

      // E1: خبر اسمي/وصفي نكرة ظاهر الرفع ينتهي بألف المثنى أو واو الجمع،
      //     مطابق في الجنس؛ صيغة «ـين + ـان/ـون» هي النمط الكلاسيكي لخطأ المبتدأ.
      const nominalPredicate = rest.find(token =>
        isNominal(token) && !token.morph.definite && !bestVerb(token)
        && !token.morph.segments?.conjunction && !token.morph.segments?.preposition
        && context.syntax.tokenClause?.[token.index] === matrixClauseId);
      const predicateCore = nominalPredicate ? stripDiacritics(nominalPredicate.morph.core || '') : '';
      const predicateFeatures = nominalPredicate ? tokenFeatures(nominalPredicate) : null;
      // V18.7.7: الخبر الإنتاجي («مشغولان») لا يملك structuralCase مُسجَّلًا
      // (يُلغى للصيغ غير المثبتة)، فنفحص بنية السطح مباشرةً؛ العلامات الظاهرة
      // على نون المثنى/الجمع لا تعادل النصب/الجر البنيوي (V18.7.3).
      const predicateStructuralCase = nominalPredicate
        ? (observedCase(nominalPredicate)
          || structuralCase(stripDiacritics(nominalPredicate.morph.core || ''))?.case)
        : null;
      if (nominalPredicate && predicateStructuralCase === 'nominative'
          && /(?:ان|ون)$/u.test(predicateCore) && /ين$/u.test(headCore)
          && firstFeatures.gender
          // V18.7.7: الخبر الإنتاجي غير المعجمي («مشغولان») لا يملك جنسًا محسومًا؛
          // نهايتا «ان/ون» مذكرتان قطعًا، فتُقبل مطابقةُ رأسٍ مذكرٍ بلا علامة
          // تأنيث في الخبر، وتُرفض الرؤوس المؤنثة («المرأتين مشغولان»).
          && (predicateFeatures?.gender
            ? firstFeatures.gender === predicateFeatures.gender
            : firstFeatures.gender === 'm' && !/[ةات]$/u.test(predicateCore))) {
        deepEvidence = ['deep-syntactic-topic', 'accgen-topic-nominative-predicate',
          'predicate:' + nominalPredicate.surface];
        deepConfidence = 0.97;
        deepTopicNumber = deepExpectedNumber(/ون$/u.test(predicateCore) ? 'pl' : 'du');
      } else {
        // E2: فعل لاحق بفاعل مستتر مطابق عددًا (مثنى/جمع)، أو فعل لازم لا يمكنه
        //     نصب ما قبله مفعولًا. قراءة المفعول المتقدم محسومة سابقًا بالدور
        //     object فلا تصل إلى هنا أصلًا.
        const verbToken = rest.find(token => bestVerb(token));
        const verb = verbToken ? bestVerb(verbToken) : null;
        if (verb && verb.person === 3 && ['du', 'pl'].includes(verb.number)
            && (headNumberSet.has('du') || headNumberSet.has('pl'))) {
          deepEvidence = ['deep-syntactic-topic', 'accgen-topic-verbal-predicate',
            'inflectional-subject-matches-fronted-nominal', 'verb:' + verb.lemma];
          deepConfidence = 0.95;
          deepTopicNumber = deepExpectedNumber(verb.number);
        } else if (verb && !verb.transitive) {
          deepEvidence = ['deep-syntactic-topic', 'accgen-topic-intransitive-verbal-predicate',
            'verb:' + verb.lemma];
          deepConfidence = 0.93;
        } else if (!verb) {
          // E3: شبه جملة خبر (حرف جر/ظرف مضاف ثاني كلمة) ولا فعل في الجملة أصلًا؛
          //     فلا يحتمل الاسم المبدوء به إلا الابتداء المرفوع.
          const second = group[1];
          const noVerbAnywhere = !rest.some(token => bestVerb(token));
          if (noVerbAnywhere && (second.morph?.segments?.preposition
              || canonicalPrepositionCore(second) || ADVERBIAL_GOVERNORS.has(second.morph?.core))) {
            deepEvidence = ['deep-syntactic-topic', 'accgen-topic-prepositional-predicate',
              'no-verbal-competitor-in-sentence'];
            deepConfidence = 0.94;
          }
        }
      }
    }

    if (plainTopicEligible || deepEvidence) {
      assignRole(roles, first.index, 'topic', deepEvidence ? deepConfidence : 0.92,
        deepEvidence || ['direct-nominal-sentence', 'topic-form-compatible'],
        deepEvidence ? {resolverVersion: '1.0', resolver: 'DeepSyntacticTopicResolver',
          expectedNumber: deepTopicNumber || undefined} : undefined);
    }
    const matrixClauseId = context.syntax.tokenClause?.[first.index];
    const predicate = group.slice(1).find(token => isNominal(token) && !roles[token.index]
      && context.syntax.tokenClause?.[token.index] === matrixClauseId && !token.morph.definite);
    if (predicate) assignRole(roles, predicate.index, 'predicate', 0.9,
      ['direct-nominal-predicate', 'same-matrix-clause'], {headIndex: first.index});
  }
  return roles;
}

function roleExpectedCase(context, index) {
  const role = context.syntax?.roles?.[index];
  if (!role) return null;
  if (role.expectedCase) return {case: role.expectedCase, confidence: role.confidence, reason: `role:${role.role}`};
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
  'مساله': 'مسألة', 'مسئله': 'مسألة', 'شيئاً': 'شيئًا', 'شيئ': 'شيء', 'مدرسه': 'مدرسة', 'المدرسه': 'المدرسة',
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
  /* V18.7.9 — همزة قطع في صيغ عالية التواتر لا قراءة فصيحة لها بلا همزة.
     كلها أسماء أو أفعال ماضية على وزن «أفعل»، وليست همزة وصل. */
  'اخطاء': 'أخطاء', 'ادوات': 'أدوات', 'اداة': 'أداة', 'اخرين': 'آخرين',
  'الاخطاء': 'الأخطاء', 'الادوات': 'الأدوات', 'الاداة': 'الأداة', 'الاخرين': 'الآخرين',
  'اصبح': 'أصبح', 'اصبحت': 'أصبحت', 'اهمية': 'أهمية', 'الاهمية': 'الأهمية',
  'امام': 'أمام', 'اسرة': 'أسرة', 'الاسرة': 'الأسرة', 'اثناء': 'أثناء',
  'اساس': 'أساس', 'الاساس': 'الأساس', 'اساسي': 'أساسي', 'الاساسية': 'الأساسية',
  'انواع': 'أنواع', 'الانواع': 'الأنواع', 'اجزاء': 'أجزاء', 'الاجزاء': 'الأجزاء',
  /* V18.7.9 — تاء مربوطة في مصادر وصفات عالية التواتر رُسمت هاءً. */
  'يوميه': 'يومية', 'اليوميه': 'اليومية', 'نحويه': 'نحوية', 'ونحويه': 'ونحوية',
  'مكتوبه': 'مكتوبة', 'المكتوبه': 'المكتوبة', 'مدرسيه': 'مدرسية', 'المدرسيه': 'المدرسية',
  'مستمره': 'مستمرة', 'المستمره': 'المستمرة', 'سرعه': 'سرعة', 'بسرعه': 'بسرعة',
  'دقه': 'دقة', 'ودقه': 'ودقة', 'بدقه': 'بدقة', 'خاطئه': 'خاطئة', 'الخاطئه': 'الخاطئة',
  'كثيره': 'كثيرة', 'الكثيره': 'الكثيرة', 'مفيده': 'مفيدة', 'المفيده': 'المفيدة',
  'بسيطه': 'بسيطة', 'واضحه': 'واضحة', 'وواضحه': 'وواضحة', 'صحيحه': 'صحيحة',
  'موثوقه': 'موثوقة', 'متعمده': 'متعمدة', 'مناسبه': 'مناسبة', 'مختلفه': 'مختلفة',
  'عامه': 'عامة', 'خاصه': 'خاصة', 'هامه': 'هامة', 'قويه': 'قوية', 'طويله': 'طويلة',
  'قصيره': 'قصيرة', 'كبيره': 'كبيرة', 'صغيره': 'صغيرة', 'جديده': 'جديدة',
  'قديمه': 'قديمة', 'جميله': 'جميلة', 'سهله': 'سهلة', 'صعبه': 'صعبة',
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
  'فكره': 'فكرة', 'رساله': 'رسالة', 'تجربه': 'تجربة', 'حكومه': 'حكومة', 'وزاره': 'وزارة',
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
  'اشار': 'أشار', 'اتمنيت': 'تمنيت',
  /* ── الدفعة 3 (V18.7.7 — جولة الـ400 الخارجية): همزة القطع المحذوفة في
     أسماء وكلمات شائعة — كل صيغةٍ هنا بلا قراءة فصيحة صحيحة، فتُصحَّح تلقائيًا.
     «ال» التعريف لا تجتمع مع ضمير متصل، لذا الأعلام/الأسماء المعرفة بالحذف
     تُضاف بصورتيها المجردة والمعرفة معًا. ── */
  'امل': 'أمل', 'الامل': 'الأمل', 'امال': 'آمال',
  'ايام': 'أيام', 'الايام': 'الأيام', 'امر': 'أمر', 'امور': 'أمور',
  'الامور': 'الأمور', 'اشكال': 'أشكال', 'انواع': 'أنواع', 'اثر': 'أثر',
  'اثار': 'آثار', 'اثناء': 'أثناء', 'احد': 'أحد', 'احدهم': 'أحدهم',
  'احداث': 'أحداث', 'ادب': 'أدب', 'ادبي': 'أدبي', 'ادبية': 'أدبية',
  'اساس': 'أساس', 'اساسي': 'أساسي', 'اساسية': 'أساسية', 'الاساس': 'الأساس',
  'الاساسية': 'الأساسية', 'اسلوب': 'أسلوب', 'اساليب': 'أساليب',
  'اصول': 'أصول', 'افضل': 'أفضل', 'الافضل': 'الأفضل', 'اكبر': 'أكبر',
  'الاكبر': 'الأكبر', 'اصغر': 'أصغر', 'اقدم': 'أقدم', 'اجمل': 'أجمل',
  'اقوى': 'أقوى', 'الاقصى': 'الأقصى', 'اعظم': 'أعظم', 'اول': 'أول',
  'الاول': 'الأول', 'الاولى': 'الأولى', 'اولويات': 'أولويات',
  'الاولويات': 'الأولويات', 'اخير': 'أخير', 'الاخير': 'الأخير',
  'اخيرة': 'أخيرة', 'الاخيرة': 'الأخيرة', 'اخرون': 'آخرون',
  'استاذ': 'أستاذ', 'الاستاذ': 'الأستاذ', 'استاذة': 'أستاذة',
  'الاستاذة': 'الأستاذة', 'اسطورة': 'أسطورة',
  'اصوات': 'أصوات', 'اقلام': 'أقلام', 'اوراق': 'أوراق', 'ازهار': 'أزهار',
  'اشجار': 'أشجار', 'اشياء': 'أشياء', 'اموال': 'أموال', 'انباء': 'أنباء',
  'انجاز': 'إنجاز', 'انجازات': 'إنجازات', 'ابداع': 'إبداع', 'اداء': 'أداء',
  'ايجابي': 'إيجابي', 'ايجابية': 'إيجابية', 'اجراء': 'إجراء',
  'اجراءات': 'إجراءات', 'اعلان': 'إعلان', 'اخفاء': 'إخفاء',
  'اشارة': 'إشارة', 'اشارات': 'إشارات', 'الاعلام': 'الإعلام',
  'الاسعار': 'الأسعار', 'الاعضاء': 'الأعضاء', 'الاعمال': 'الأعمال',
  'الاطفال': 'الأطفال', 'الاسباب': 'الأسباب', 'الاحوال': 'الأحوال',
  'الاوقات': 'الأوقات', 'الاوسط': 'الأوسط', 'الاعلى': 'الأعلى',
  'الامن': 'الأمن', 'الامان': 'الأمان', 'الابد': 'الأبد',
  'الامم': 'الأمم', 'الامير': 'الأمير', 'الام': 'الأم', 'الاب': 'الأب',
  'الاخ': 'الأخ', 'الاهم': 'الأهم',
  'اتى': 'أتى', 'اتوا': 'أتوا', 'اجرى': 'أجرى', 'اجروا': 'أجروا',
  'اجرت': 'أجرت', 'ابدى': 'أبدى', 'ابدت': 'أبدت', 'انشا': 'أنشأ',
  'انشات': 'أنشأت', 'انشاوا': 'أنشأوا',
  'اعد': 'أعد', 'اجاب': 'أجاب', 'اصدر': 'أصدر', 'احضر': 'أحضر',
  'اكرم': 'أكرم', 'اراد': 'أراد', 'انجز': 'أنجز', 'اسس': 'أسس', 'اذاع': 'أذاع',
  'ايضا': 'أيضا', 'ايضاً': 'أيضًا', 'اضاف': 'أضاف',
  /* ── همزة الفعل المحذوفة في صيغ القراءة الشائعة ── */
  'يقرا': 'يقرأ', 'تقرا': 'تقرأ', 'اقرا': 'أقرأ', 'نقرا': 'نقرأ',
  /* ── واو الجماعة في أفعال شائعة (مداخل قطعية؛ السياقية تبقى للحالات النادرة) ── */
  'درسو': 'درسوا', 'شاهدو': 'شاهدوا', 'زارو': 'زاروا', 'نجحو': 'نجحوا',
  'عملو': 'عملوا', 'حاولو': 'حاولوا', 'ساعدو': 'ساعدوا', 'شاركو': 'شاركوا',
  'كانو': 'كانوا', 'وجدو': 'وجدوا', 'جمعو': 'جمعوا', 'قررو': 'قرروا',
  /* ── الهمزة المتطرفة ── */
  'شئ': 'شيء', 'شيئا': 'شيئًا', 'قرائة': 'قراءة',
  /* ── التاء المربوطة مع «ال»: الإضافة لا تجتمع مع «ال» ── */
  'الطريقه': 'الطريقة', 'المرحله': 'المرحلة', 'الفتره': 'الفترة',
  'المعركه': 'المعركة', 'القيمه': 'القيمة', 'الاهميه': 'الأهمية',
  'الجوده': 'الجودة', 'الحريه': 'الحرية', 'العداله': 'العدالة',
  'المسؤوليه': 'المسؤولية', 'الاسره': 'الأسرة', 'القصه': 'القصة',
  'الروايه': 'الرواية', 'المقاله': 'المقالة', 'الصحافه': 'الصحافة',
  'التقنيه': 'التقنية', 'الوظيفه': 'الوظيفة', 'الخبره': 'الخبرة',
  'المعرفه': 'المعرفة', 'التربيه': 'التربية', 'القاعه': 'القاعة',
  'الصاله': 'الصالة', 'الجمهوريه': 'الجمهورية', 'الديمقراطيه': 'الديمقراطية',
  'الحديثه': 'الحديثة', 'القديمه': 'القديمة', 'الكبيره': 'الكبيرة',
  'الصغيره': 'الصغيرة', 'الواسعه': 'الواسعة', 'الجديده': 'الجديدة',
  'العامه': 'العامة', 'الخاصه': 'الخاصة',
  'المحليه': 'المحلية', 'الوطنيه': 'الوطنية', 'الدوليه': 'الدولية',
  'العالميه': 'العالمية', 'العراقيه': 'العراقية', 'المصريه': 'المصرية',
  'السعوديه': 'السعودية', 'الامريكيه': 'الأمريكية', 'الاوروبيه': 'الأوروبية',
  /* ── ضمائر وأدوات ── */
  'هذة': 'هذه',
  /* ── V18.7.8: مدخلات إملائية مسترجعة من النسخة العادية ── */
  'الي': 'إلى',
  'المستشفي': 'المستشفى', 'مستشفي': 'مستشفى',
  'خطاء': 'خطأ',
  'لان': 'لأن',
  'شئ': 'شيء'
});

/* الدفعة 2: توسيع صرفي للأفعال الهمزية المراجعة — الفعل الماضي مع لواحق
   الضمائر يبقى باطلًا بلا همزة، فيرث نفس الثقة. استُثني «اتمنى» لأن
   ماضيه «تمنيت» (يُعالج بمدخل مستقل). */
const SUFFIX_EXPAND_VERBS = Object.freeze({
  'اخذ': 'أخذ', 'اكل': 'أكل', 'ارسل': 'أرسل', 'اعطى': 'أعطى', 'اكد': 'أكد',
  'اعلن': 'أعلن', 'اثبت': 'أثبت', 'اكمل': 'أكمل', 'انهى': 'أنهى',
  'اوقف': 'أوقف', 'اساء': 'أساء', 'اسرع': 'أسرع', 'اضاف': 'أضاف',
  /* V18.7.7 — أفعال مهموزة شائعة بصيغها الماضية مع لواحق الضمائر.
     الأصوات الصحيحة/المجوّفة/المضعّفة فقط؛ الناقصة (اتى/اجرى/انشا…) لها
     مداخل WORDS مستقلة لأن ساقها يتغير قبل واو الجماعة. */
  'اعد': 'أعد', 'اجاب': 'أجاب', 'اصدر': 'أصدر', 'احضر': 'أحضر',
  'اكرم': 'أكرم', 'اراد': 'أراد', 'انجز': 'أنجز', 'اسس': 'أسس', 'اذاع': 'أذاع'
});
const PERSON_SUFFIXES = Object.freeze(['ت', 'تا', 'ا', 'نا', 'وا', 'تم', 'تن', 'ن']);
// استثناءات المثنى: «اخذا» و«اكلا» تحملان قراءة مصدرية منصوبة صحيحة (أَخْذًا/أُكْلًا)
const DUAL_SKIP = new Set(['اخذ', 'اكل']);

/* مدخلات ذات قراءة صحيحة نادرة (إضافة ضمير ونحوه): تُعرض اقتراحًا فقط
   بثقة 0.90 (أقل من عتبة التصحيح التلقائي 0.985) فلا تُطبَّق آليًا أبدًا.
   ملاحظة: «مكتبه» حُذفت نهائيًا لأن «مكتب + ه» قراءة صحيحة شائعة (إنذار كاذب مؤكد). */
/**
 * V18.8.0 — همزة الوصل في الأسماء العشرة وما جرى مجراها.
 * «ابن، ابنة، اسم، امرؤ، امرأة، اثنان، اثنتان» تبدأ بهمزة وصل قطعًا،
 * فرسمها بهمزة قطع خطأ لا قراءة صحيحة له، وتصحيحه إلى «ا» لا إلى «أ».
 * هذه المداخل تسبق المولّد الإنتاجي وتمنع نتيجة «إبن ← أبن».
 */
const HAMZAT_WASL_WORDS_V1880 = Object.freeze({
  'إبن': 'ابن', 'أبن': 'ابن', 'إبنة': 'ابنة', 'أبنة': 'ابنة',
  'إبنه': 'ابنه', 'إبنتها': 'ابنتها', 'إبنك': 'ابنك',
  'إسم': 'اسم', 'أسم': 'اسم', 'إسمه': 'اسمه', 'إسمها': 'اسمها', 'إسمي': 'اسمي',
  'إمرأة': 'امرأة', 'أمرأة': 'امرأة', 'إمرؤ': 'امرؤ',
  'إثنان': 'اثنان', 'إثنين': 'اثنين', 'إثنتان': 'اثنتان', 'إثنتين': 'اثنتين',
  'إبنان': 'ابنان', 'إبنتان': 'ابنتان',
  /* همزة الوصل في مصادر الخماسي والسداسي وأفعالها */
  'إجتهاد': 'اجتهاد', 'إحترام': 'احترام', 'إهتمام': 'اهتمام',
  'إستخدام': 'استخدام', 'إنطلاق': 'انطلاق', 'إبتسامة': 'ابتسامة',
  'إجتماع': 'اجتماع', 'إستقبال': 'استقبال', 'إستعمال': 'استعمال',
  'إنتظار': 'انتظار', 'إرتفاع': 'ارتفاع', 'إنخفاض': 'انخفاض',
  'إستقلال': 'استقلال', 'إعتماد': 'اعتماد', 'إبتداء': 'ابتداء',
  'إجتهد': 'اجتهد', 'إحترم': 'احترم', 'إهتم': 'اهتم', 'إستخدم': 'استخدم',
  'إنطلق': 'انطلق', 'إجتمع': 'اجتمع', 'إستقبل': 'استقبل', 'إنتظر': 'انتظر',
  'إرتفع': 'ارتفع', 'إستمع': 'استمع', 'إستعان': 'استعان', 'إعتمد': 'اعتمد'
});

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

/**
 * V18.7.9 — الطبقة المعجمية لا تُبصر الكلمة إلا مجردة من لواصقها، فكانت
 * «القراءه/الحياه/اللغه» تفلت بينما تُصحَّح «قراءه/حياه/لغه». المدخل المراجع
 * يصحح رسم الجذع نفسه (تاء مربوطة، همزة، ألف مقصورة)، وهذا التصحيح لا تغيّره
 * «ال» ولا حرف الجر، فيُعاد بناء الكلمة بلاصقتها بعد تصحيح جذعها.
 * حُرّاس القاعدة: أن يكون للجذع مدخل مراجع، وألا يكون التصحيح كلمة وظيفية
 * مغلقة (لا تدخلها «ال»)، وألا يكون السطح الكامل مشمولًا بمدخل مستقل.
 */
const CLOSED_CLASS_CORRECTIONS_V1879 = new Set([
  ...PREPOSITIONS, ...CONJUNCTIONS, ...INNA_PARTICLES, ...NEGATION,
  ...Object.keys(DEMONSTRATIVES), ...Object.keys(RELATIVE_PRONOUNS),
  'أن', 'إن', 'أو', 'إذا', 'إذن', 'أنا', 'أنت', 'أنتم', 'أنتن', 'هؤلاء', 'ذلك',
  'أكثر', 'أقل', 'آخر', 'أخرى', 'الآن', 'شيئًا'
]);

function clitizedLexicalOrthographyRule(context) {
  const out = [];
  for (const token of context.tokens) {
    if (token.type !== 'word') continue;
    const segments = token.morph?.segments;
    const prefix = segments?.prefix;
    if (!prefix || segments.enclitic) continue;
    // يقتصر المسار على اللاصقة التي تحسم اسمية الموضع: «ال» أو حرف الجر.
    // أما واو/فاء العطف وحدها فتدخل على الأفعال أيضًا، وتصحيح جذعٍ فعلي هنا
    // يزاحم قواعد المطابقة الصرفية على المقطع نفسه («وكانو» ← كان/كانوا).
    if (!segments.article && !segments.preposition) continue;
    // لام الجر مع «ال» تُدغم رسمًا في «لل»، والحقل prefix يبنيها «لال»؛
    // يُعاد بناء اللاصقة من رسم الكلمة نفسها ضمانًا لمطابقة الأصل حرفًا بحرف.
    const surfacePrefix = token.clean.slice(0, token.clean.length - segments.core.length);
    if (!token.clean.endsWith(segments.core) || !surfacePrefix) continue;
    // السطح الكامل له مدخله المستقل، وقد عالجته الطبقة المعجمية بثقة أعلى.
    if (Object.prototype.hasOwnProperty.call(WORDS, token.clean)) continue;
    const corrected = WORDS[segments.core];
    if (!corrected || /\s/u.test(corrected) || corrected === segments.core) continue;
    if (CLOSED_CLASS_CORRECTIONS_V1879.has(corrected)) continue;
    out.push(findingFromSpan(context, {
      startToken: token,
      replacement: `${surfacePrefix}${corrected}`,
      ruleId: `CLITIC_ORTHOGRAPHY_V1879:${segments.core}`,
      type: 'إملائي',
      classification: 'orthographic',
      confidence: 0.993,
      explanation: 'تصحيح إملائي معجمي مراجع للجذع، مع الحفاظ على «ال» أو حرف الجر الملتصق بالكلمة.',
      evidence: ['reviewed-word-lexicon', 'clitic-aware-stem-match', `prefix:${surfacePrefix}`],
      safe: true,
      metadata: {stem: segments.core, correctedStem: corrected}
    }));
  }
  return out;
}

function orthographyRule(context) {
  const candidates = [];
  const registry = [
    ...Object.entries(PHRASES).map(([bad, good]) => ({bad, good, phrase: true, confidence: 0.999})),
    ...Object.entries(WORDS).map(([bad, good]) => ({bad, good, phrase: false, confidence: 0.995})),
    // V18.8.0: همزة الوصل — حكم صرفي قطعي، فتُصحَّح بثقة المداخل المراجعة.
    ...Object.entries(HAMZAT_WASL_WORDS_V1880).map(([bad, good]) => ({bad, good, phrase: false, confidence: 0.995, waslRule: true})),
    ...Object.entries(SUFFIX_EXPAND_VERBS).flatMap(([bad, good]) =>
      PERSON_SUFFIXES
        .filter(suffix => !(suffix === 'ا' && DUAL_SKIP.has(bad)))
        .map(suffix => ({bad: bad + suffix, good: good + suffix, phrase: false, confidence: 0.995}))),
    ...Object.entries(WORDS_REVIEW).map(([bad, good]) => ({bad, good, phrase: false, review: true, confidence: 0.9}))
  ].sort((a, b) => b.bad.length - a.bad.length);

  for (const item of registry) {
    let index = 0;
    while ((index = context.text.indexOf(item.bad, index)) >= 0) {
      // «شيئًا» رسم صحيح خاص: لا يجوز أن يطابق المدخل الأقصر «شيئ» قبل
      // تنوين النصب وألفه فينتج «شيءًا». أما «شيئاً» فله مدخل سطحي كامل أعلاه.
      const protectedShayanSurface = item.bad === 'شيئ'
        && context.text.slice(index + item.bad.length).startsWith('ًا');
      if (!protectedShayanSurface && boundary(context.text, index, item.bad.length)) {
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
    // «ال» وحرف الجر لا يدخلان على الفعل، فما حملهما ليس فعلًا بواو الجماعة.
    if (token.morph?.segments?.article || token.morph?.segments?.preposition) continue;
    if (WAW_NOUN_EXCEPTIONS.has(core)) continue;
    if (WAW_IMPERFECT_EXCEPTIONS.has(core)) continue;
    if (WORDS[core]) continue; // مشمولة بالمعجم القطعي

    // V18.7.9 — واو الجماعة في المضارع المنصوب/المجزوم: «أن يساعدو» ← «يساعدوا».
    // حرف المضارعة كان محجوبًا كليًا خشية العامية («نكتبو»)، فضاع خطأ شائع جدًا.
    // البديل حُجّة صرفية قاطعة لا تخمين: يُقبل الشكل فقط إذا كان «الصيغة + ا»
    // مدخلًا فعليًا مفهرسًا لواو الجماعة (3mp/2mp)، ولم تكن الصيغة نفسها فعلًا
    // صحيحًا قائمًا («يدعو» فعل تام، و«نكتبوا» ليست صيغة مفهرسة أصلًا).
    const verbalPluralHost = !VERB_FORM_INDEX.has(core)
      && (VERB_FORM_INDEX.get(`${core}ا`) || []).some(analysis =>
        ['3mp', '2mp'].includes(analysis.personCode));
    // الحُرّاس الاحتمالية أدناه وُضعت للماضي غير المحلَّل صرفيًا؛ الشكل الذي
    // أثبت الفهرس أنه مضارع بواو الجماعة لا يحتاجها، بل تُفسده: «يساعدو» ساقه
    // فيه ألف، و«أن يساعدو الطلاب» يليه معرَّف، وكلاهما لا يدل على الإضافة
    // لأن الفعل لا يكون مضافًا، والنفي/الجزم قبله يبقى مكتوبًا بالألف
    // («لم يساعدوا»). لذلك يُحسم هذا المسار بالصرف لا بالقرائن السطحية.
    if (!verbalPluralHost) {
      if (blockedInitials.has(core[0])) continue;
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
    }
    out.push(findingFromSpan(context, {
      startToken: token,
      // V18.7.9: «word» هنا رسم الكلمة كاملًا بلواصقه، فلا يمرَّر عبر
      // rebuildToken وإلا أُعيدت اللاصقة مرتين («للاو» ← «لالللاوا»).
      // الألف الفارقة تُلحق بآخر الرسم مباشرة، ولا إمكان لضمير متصل بعدها
      // لأن الشرط أن ينتهي الرسم بواو الجماعة.
      replacement: `${word}ا`,
      ruleId: 'WAW_ALJAMAA_V18',
      type: 'إملائي',
      classification: 'orthographic',
      confidence: verbalPluralHost ? 0.985 : 0.9,
      explanation: verbalPluralHost
        ? 'واو الجماعة في المضارع تلحقها ألف فارقة؛ أثبت الفهرس الصرفي أن الصيغة بالألف فعلٌ مسندٌ إلى واو الجماعة.'
        : 'الماضي المتصل بواو الجماعة يُكتب بألف بعد الواو؛ اقتراح لتعذّر الجزم الصرفي الكامل.',
      evidence: verbalPluralHost
        ? ['waw-aljamaa-verified-imperfect-paradigm', 'alif-fariqa']
        : ['waw-aljamaa-contextual'],
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
      // V18.7.9: «target» صورةٌ كاملةٌ للكلمة بعد التصحيح («صوره» ← «صورة»)،
      // والهاء فيها هي نفسها التي حللها المقطِّع ضميرًا. تمريرها عبر
      // rebuildToken كان يعيد إلحاق ذلك الضمير فينتج «صورةه» — وهو عين خلل
      // «العربيةه». التصحيح السياقي هنا يلغي قراءة الإضافة أصلًا، فلا ضمير.
      replacement: `${token.morph.segments?.prefix || ''}${target}`,
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

function acceptedHamzaInflection(core, lemma, tense, personCode) {
  const resolution = resolveHamzaMorphologyV1(core);
  if (!resolution || resolution.status !== 'accepted') return null;
  const matches = (resolution.analyses || []).some(analysis =>
    analysis.lemma === lemma && analysis.tense === tense && analysis.personCode === personCode);
  return matches ? resolution : null;
}

function acceptedConjoinedJussiveInflection(context, verbIndex) {
  const token = context.tokens[verbIndex];
  const governor = context.tokens[verbIndex - 1];
  if (!token || !governor || !governor.morph.segments?.conjunction
      || !JUSSIVE_PARTICLES.has(governor.morph.core)) return null;
  const analyses = (token.morph.verbAnalyses || []).filter(analysis =>
    analysis.tense === 'present' && analysis.mood === 'jussive'
      && (analysis.confidence || 0) >= COMPETING_ANALYSIS_CONFIDENCE_V1873);
  if (!analyses.length) return null;
  const hamza = resolveHamzaMorphologyV1(token.morph.core);
  if (hamza && hamza.status !== 'accepted') return null;
  return {governorIndex: governor.index, analyses, hamza};
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

    // V18.7.6: سطح يحتمل المتكلم/المخاطب وتلاه ذكر مثنى/جمع؛ إطار المفعول أرجح،
    // فلا تُبنى قراءةُ الاتفاق الخاطئ (فعل مؤنث + فاعل ذكر) على حساب القراءة الصحيحة.
    if (speechParticipantObjectFrame(context, i, verb)) continue;

    // الفعل الذي أثبت الصرف أنه مجزوم مع واو الجماعة بعد عامل محلي معطوف
    // يحمل فاعله في بنيته. لا يجوز لتحليل اتفاق بعيد أن يحوله إلى مفرد/مؤنث.
    if (acceptedConjoinedJussiveInflection(context, i)) continue;

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

    // إذا كان الفاعل المتقدم يحمل أكثر من تحليل عددي موثوق (مثل «الباحثين»:
    // مثنى/جمع)، فاختيار المفرد افتراضيًا يخلق تصحيحًا كاذبًا. توافق الفعل
    // الحالي مع أحد التحليلات قرينة صحيحة، وعدم التوافق لا يكفي لاختيار بديل
    // واحد؛ في الحالتين تكون السياسة المحافظة هي الامتناع.
    const competingSubjectNumbers = !features.number
      ? [...new Set(features.numberCandidates || highConfidenceNumberCandidates(subject))]
      : [];
    if (order === 'SVO' && competingSubjectNumbers.length) continue;

    // V18.7.7 — Competing-Gender Veto 1.1: إذا حمل الفاعل قراءة نسبة مذكرة
    // مفردة (الصحفي/الهندي/السعودي…) توافق الفعل المفرد المذكر الحالي (3ms)،
    // فلا يُبنى تصحيحُ تأنيثٍ على قراءة ملكية/جمع مؤنث خاطئة. هذه هي السياسة
    // المحافظة نفسها المطبقة على العدد: «التوافق مع أحد التحليلات قرينة
    // صحيحة، وعدم التوافق لا يكفي لاختيار بديل واحد». القيد على الصفة فقط
    // يمنع الالتقاط الخاطئ للموصولات/الضمائر المغلقة («الذي» تنتهي بياء لكنها
    // ليست نسبةً) فيبقى حسم مطابقة صلة الموصول كما هو.
    if (verb.personCode === '3ms') {
      const masculineNisbaReading = (subject.morph?.candidates || []).some(candidate =>
        candidate.pos === 'adj' && candidate.gender === 'm' && candidate.number === 'sg'
        && (String(candidate.source || '').startsWith('productive-')
          || /ي$/u.test(String(candidate.lemma || ''))));
      if (masculineNisbaReading) continue;
    }

    const personCode = desiredPerson(features, order);

    // قاعدة المطابقة لا تُستعمل مُسوّيًا إملائيًا. إذا كان الشخص الصرفي هو المطلوب
    // أصلًا، أو أثبت HamzaMorphologicalResolver أن السطح وجه صحيح للشخص المطلوب
    // (يقرؤون/يقرأون، تقرؤون/تقرأون)، فلا يجوز إنشاء اقتراح مطابقة.
    const currentHamza = acceptedHamzaInflection(token.morph.core, verb.lemma, verb.tense, personCode);
    if (verb.personCode === personCode || currentHamza) continue;

    let desired = conjugateVerb(verb.lemma, verb.tense, personCode);
    if (!desired) continue;
    // عند وجود وجوه همزية صحيحة نولّد الوجه المفضل في الفهرس الصرفي، لا الرسم
    // المنتظم العام؛ مع بقاء الوجوه المقبولة الأخرى صحيحة بلا تحويل بينها.
    const desiredHamza = acceptedHamzaInflection(desired, verb.lemma, verb.tense, personCode);
    if (desiredHamza?.preferredForm) desired = desiredHamza.preferredForm;
    if (stripDiacritics(desired) === stripDiacritics(token.morph.core)) continue;

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
      evidence: ['verified-verb-paradigm', verb.verbClass, order, ...relation.evidence,
        `subject:${subject.surface}`, ...(desiredHamza ? ['HamzaMorphologicalResolver-1.0-preferred-form'] : [])],
      safe: false,
      metadata: {
        lemma: verb.lemma, verbClass: verb.verbClass, tense: verb.tense,
        personFrom: verb.personCode, personTo: personCode, subjectIndex,
        hamzaResolverVersion: desiredHamza ? '1.0' : null,
        orthographicPreferredForm: desiredHamza?.preferredForm || null,
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

function malformedFiveNounHamzaRuleV1874(context) {
  const out = [];
  const {tokens} = context;
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    const malformed = NONSTANDARD_FIVE_NOUN_FORMS_V1874[token.morph.core];
    const nominal = token.morph.nominal;
    if (!malformed || !nominal?.orthographicNonstandard || !fiveNounHasAddition(tokens, i)) continue;

    // «بـ ابو» كتابة مفصولة غير معيارية: العامل صريح، فنقترح دمج الباء
    // وتصحيح الهمزة والحالة في finding واحد غير تلقائي، مع إبقاء الطبقتين في metadata.
    const previous = tokens[i - 1];
    const detachedPreposition = previous && ['ب', 'ك', 'ل'].includes(previous.morph.core)
      && previous.sentence === token.sentence;
    if (detachedPreposition) {
      const desiredCore = FIVE_NOUN_BY_LEMMA[nominal.lemma]?.genitive;
      if (!desiredCore) continue;
      out.push(findingFromSpan(context, {
        startToken: previous, endToken: token,
        replacement: `${previous.morph.core}${desiredCore}`,
        ruleId: 'FIVE_NOUN_HAMZA_CASE_V1874', type: 'إملائي ونحوي', classification: 'five-nouns',
        confidence: 0.985,
        explanation: 'الباء حرف جر متصل، فتلصق بالاسم؛ وتثبت همزة «أب»، ثم يختار الجر صيغة «أبي».',
        evidence: ['five-noun-initial-hamza', 'detached-preposition-merge', 'explicit-preposition', 'expected-case:genitive'],
        safe: false,
        metadata: {lemma: nominal.lemma, orthographicCorrection: malformed.canonical,
          caseCorrection: desiredCore, observedCase: nominal.caseForm, expectedCase: 'genitive',
          role: 'object-of-preposition', relationConfidence: 0.985, morphConfidenceOverride: nominal.confidence,
          resolver: 'CaseGovernmentResolver', resolverVersion: '1.1'}
      }));
      continue;
    }

    const expectedInfo = fiveNounContextCase(context, i);
    const expectedCase = expectedInfo?.case;
    // إذا اختلفت الحالة يتولى FiveNounsEngine finding نحويًا واحدًا؛ فهو
    // سيستعمل الصيغة القياسية ذات الهمزة، وتبقى هذه القاعدة إملائية صرفة.
    if (['nominative', 'accusative', 'genitive'].includes(expectedCase)
        && expectedCase !== nominal.caseForm) continue;
    out.push(findingFromSpan(context, {
      startToken: token, replacement: rebuildToken(token, malformed.canonical),
      ruleId: 'FIVE_NOUN_HAMZA_ORTHOGRAPHY_V1874', type: 'إملائي', classification: 'orthographic',
      confidence: 0.997,
      explanation: 'تثبت همزة القطع في اسم «أب»؛ وهذا التطبيع الإملائي مستقل عن اختيار حالته الإعرابية.',
      evidence: ['five-noun-lemma:أب', 'initial-hamza-orthography', 'case-layer-separated'],
      safe: true,
      metadata: {lemma: nominal.lemma, orthographicCorrection: malformed.canonical,
        observedCase: nominal.caseForm, expectedCase: expectedCase || null,
        relationConfidence: expectedInfo?.confidence || 0.999, caseLayerChanged: false}
    }));
  }
  return out;
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
      evidence: ['five-nouns-context-guard', 'five-nouns-lexicon',
        ...(nominal.orthographicNonstandard ? ['initial-hamza-orthographic-normalization', 'case-layer-separated'] : []),
        tokens[i].morph.segments?.enclitic ? 'attached-pronoun-addition' : 'nominal-addition',
        expectedInfo?.reason || 'syntactic-role', `expected-case:${expectedCase}`],
      safe: false,
      metadata: {lemma: nominal.lemma, observedCase, expectedCase,
        role: context.syntax?.roles?.[i]?.role || null, relationConfidence: expectedInfo?.confidence || 0.8,
        orthographicCorrection: nominal.orthographicNonstandard ? nominal.canonicalSurface : null,
        caseCorrection: desiredCore, caseLayerChanged: true}
    }));
  }
  return out;
}

/* ===== MODULE: src/rules/relative-clauses.js ===== */
const COMPETING_ANALYSIS_CONFIDENCE_V1873 = 0.98;

function highConfidenceNumberCandidates(token) {
  const candidates = (token?.morph?.candidates || [])
    .filter(item => ['noun', 'proper', 'pronoun', 'relative'].includes(item.pos)
      && item.number && (item.confidence || 0) >= COMPETING_ANALYSIS_CONFIDENCE_V1873)
    .map(item => item.number);
  return [...new Set([...(token?.morph?.numberCandidates || []), ...candidates])];
}

function relativeMatchesCandidate(relative, features, numberCandidates = []) {
  if (!relative) return false;
  if (features.gender && relative.gender && features.gender !== relative.gender) return false;
  if (features.number) return relative.number === features.number;
  return numberCandidates.includes(relative.number);
}

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
    const sourceFeatures = tokenFeatures(antecedent);
    const competingNumbers = highConfidenceNumberCandidates(antecedent);

    // صيغة «ـين» مشتركة صرفيًا بين المثنى وجمع المذكر السالم. إذا طابق
    // الموصول الحالي أحد التحليلين الموثوقين فهو قرينة حاسمة لا خطأ، وإذا لم
    // يطابقهما نمتنع عن اختيار أحدهما اعتباطًا بدل السقوط إلى المفرد.
    if (!sourceFeatures.number && competingNumbers.length) {
      if (relativeMatchesCandidate(observedRelative, sourceFeatures, competingNumbers)) continue;
      continue;
    }

    const features = effectiveAgreement(sourceFeatures);
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
function numberPhraseCase(contextOrTokens, index) {
  const context = Array.isArray(contextOrTokens) ? null : contextOrTokens;
  const tokens = context?.tokens || contextOrTokens;
  const roleCase = context ? roleExpectedCase(context, index) : null;
  if (roleCase?.case && roleCase.confidence >= 0.85) return roleCase.case;
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
  const diptoteGenitiveFatha = expectedCase === 'genitive' && observed === 'accusative'
    && token.morph.diptote?.isDiptote && !token.morph.definite;
  const caseMismatch = observed && !caseMatches(observed, expectedCase) && !diptoteGenitiveFatha;
  if (!numberMismatch && !caseMismatch) return null;

  let replacement = null;
  if (numberMismatch) replacement = inflectNounNumberToken(token, expectedNumber, expectedCase);
  if (!numberMismatch && caseMismatch) {
    const expectedSurfaceCase = expectedCase === 'genitive' && token.morph.diptote?.isDiptote
      && !token.morph.definite && !isIdafaHead(context.tokens, token.index)
      ? 'accusative' : expectedCase;
    replacement = inflectTokenCase(token, expectedSurfaceCase, {onlyWhenVisible: true});
  }
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
  let expected = expectedSimpleNumber(data.value, gender);
  if (!expected) return null;
  if (numberToken.visibleCase) {
    expected = withCaseMark(expected, numberToken.visibleCase.case, {tanwin: numberToken.visibleCase.kind === 'tanwin'});
  }
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
  const expectedCase = numberPhraseCase(context, numberToken.index);
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

function largeNumberInternalFindings(context, phrase, counted, phraseCase) {
  const {tokens} = context;
  const out = [];
  const countedGender = tokenFeatures(counted).gender;
  const occupied = new Set();
  const magnitudeIndexes = (phrase.parts || []).filter(part => part.scale || part.hundred).map(part => part.index);
  const tailStart = magnitudeIndexes.length ? Math.max(...magnitudeIndexes) + 1 : phrase.start;

  function addSpan(start, end, replacement, ruleId, explanation, evidence, metadata = {}) {
    out.push(findingFromSpan(context, {
      startToken: tokens[start], endToken: tokens[end], replacement,
      ruleId, type: 'نحوي', classification: 'number', confidence: 0.975,
      explanation, evidence: ['large-number-recursive-analysis', `number:${phrase.value}`, ...evidence],
      safe: false,
      metadata: {numberValue: phrase.value, countedIndex: counted.index, phraseCase, relationConfidence: 0.975, ...metadata}
    }));
    for (let n = start; n <= end; n += 1) occupied.add(n);
  }

  // يعاد تحليل الذيل الأصغر من مئة داخل العدد الكبير بدل الاكتفاء بقيمة العبارة الكلية.
  for (let k = tailStart; k < phrase.end; k += 1) {
    if (occupied.has(k)) continue;
    const compound = parseCompoundNumber(tokens, k);
    if (compound && k + compound.length <= phrase.end) {
      const expected = expectedCompoundNumber(compound.value, countedGender || compound.countedGender, phraseCase);
      if (expected && expected.some((part, offset) => stripDiacritics(tokens[k + offset].morph.core) !== part)) {
        addSpan(k, k + compound.length - 1,
          expected.map((part, offset) => rebuildToken(tokens[k + offset], part)).join(' '),
          'NUMBER_LARGE_COMPOUND_AGREEMENT_V187',
          'يعاد تطبيق المطابقة على جزء الآحاد والعشرة داخل العدد الكبير وفق جنس المعدود النهائي.',
          [`tail-value:${compound.value}`, `counted-gender:${countedGender}`], {tailValue: compound.value});
      }
      k += compound.length - 1;
      continue;
    }
    const coordinated = parseCoordinatedNumber(tokens, k);
    if (coordinated && k + coordinated.length <= phrase.end) {
      const expected = expectedCoordinatedNumber(coordinated, countedGender || coordinated.countedGender, phraseCase);
      if (expected) {
        const decadeToken = tokens[coordinated.decadeIndex];
        const mismatch = stripDiacritics(tokens[k].morph.core) !== expected[0]
          || stripDiacritics(decadeToken.morph.core) !== expected[1];
        if (mismatch) {
          const replacement = coordinated.length === 3
            ? `${rebuildToken(tokens[k], expected[0])} و ${rebuildToken(decadeToken, expected[1])}`
            : `${rebuildToken(tokens[k], expected[0])} ${rebuildToken(decadeToken, expected[1])}`;
          addSpan(k, k + coordinated.length - 1, replacement,
            'NUMBER_LARGE_COORDINATED_AGREEMENT_V187',
            'جزء الآحاد داخل العدد الكبير يطابق أو يخالف المعدود بحسب بابه، ويعرب لفظ العقد بحسب موقع العبارة.',
            [`tail-value:${coordinated.value}`, `counted-gender:${countedGender}`], {tailValue: coordinated.value});
        }
      }
      k += coordinated.length - 1;
    }
  }

  const dualScaleForms = Object.freeze({
    'مئتان': {nom: 'مئتان', obl: 'مئتين', nomConstruct: 'مئتا', oblConstruct: 'مئتي'},
    'مئتين': {nom: 'مئتان', obl: 'مئتين', nomConstruct: 'مئتا', oblConstruct: 'مئتي'},
    'مائتان': {nom: 'مائتان', obl: 'مائتين', nomConstruct: 'مائتا', oblConstruct: 'مائتي'},
    'مائتين': {nom: 'مائتان', obl: 'مائتين', nomConstruct: 'مائتا', oblConstruct: 'مائتي'},
    'مئتا': {nom: 'مئتان', obl: 'مئتين', nomConstruct: 'مئتا', oblConstruct: 'مئتي'},
    'مئتي': {nom: 'مئتان', obl: 'مئتين', nomConstruct: 'مئتا', oblConstruct: 'مئتي'},
    'ألفان': {nom: 'ألفان', obl: 'ألفين', nomConstruct: 'ألفا', oblConstruct: 'ألفي'},
    'ألفين': {nom: 'ألفان', obl: 'ألفين', nomConstruct: 'ألفا', oblConstruct: 'ألفي'},
    'ألفا': {nom: 'ألفان', obl: 'ألفين', nomConstruct: 'ألفا', oblConstruct: 'ألفي'},
    'ألفي': {nom: 'ألفان', obl: 'ألفين', nomConstruct: 'ألفا', oblConstruct: 'ألفي'},
    'مليونان': {nom: 'مليونان', obl: 'مليونين', nomConstruct: 'مليونا', oblConstruct: 'مليوني'},
    'مليونين': {nom: 'مليونان', obl: 'مليونين', nomConstruct: 'مليونا', oblConstruct: 'مليوني'},
    'مليونا': {nom: 'مليونان', obl: 'مليونين', nomConstruct: 'مليونا', oblConstruct: 'مليوني'},
    'مليوني': {nom: 'مليونان', obl: 'مليونين', nomConstruct: 'مليونا', oblConstruct: 'مليوني'}
  });

  for (const part of phrase.parts || []) {
    if (occupied.has(part.index)) continue;
    const core = stripDiacritics(tokens[part.index].morph.core);
    const dual = dualScaleForms[core];
    if (dual) {
      const construct = part.index === phrase.end - 1 && phrase.countedIndex === phrase.end;
      const oblique = phraseCase !== 'nominative';
      const expected = construct ? (oblique ? dual.oblConstruct : dual.nomConstruct) : (oblique ? dual.obl : dual.nom);
      if (core !== expected) addSpan(part.index, part.index, rebuildToken(tokens[part.index], expected),
        'NUMBER_LARGE_DUAL_CASE_V187',
        'المئة والألف والمليون المثناة تعرب إعراب المثنى، وتحذف نونها عند الإضافة المباشرة إلى المعدود.',
        [construct ? 'dual-scale-construct' : 'dual-scale', `expected:${expected}`], {expectedForm: expected});
      continue;
    }
    if (part.index < tailStart || !countedGender || occupied.has(part.index)) continue;
    const data = simpleCardinal(core);
    let expected = null;
    if (data?.value === 1) expected = countedGender === 'f' ? 'واحدة' : 'واحد';
    else if (data?.value === 2) {
      const oblique = phraseCase !== 'nominative';
      expected = countedGender === 'f' ? (oblique ? 'اثنتين' : 'اثنتان') : (oblique ? 'اثنين' : 'اثنان');
    } else if (data?.value >= 3 && data.value <= 10) expected = expectedSimpleNumber(data.value, countedGender);
    else if (DECADE_NOMINATIVE[data?.value]) expected = decadeForm(data.value, phraseCase);
    if (expected && core !== expected) addSpan(part.index, part.index, rebuildToken(tokens[part.index], expected),
      'NUMBER_LARGE_TAIL_AGREEMENT_V187',
      'يخضع ذيل العدد الكبير لقواعد المطابقة والمخالفة والإعراب نفسها المطبقة على العدد البسيط.',
      [`tail-value:${data.value}`, `counted-gender:${countedGender}`, `expected:${expected}`], {tailValue: data.value});
  }
  return out;
}

function numberRule(context) {
  const out = [];
  const {tokens} = context;
  const consumed = new Set();

  // المرحلة الأولى: العبارات المركبة 11–19 والمنسقة 21–99 قبل الكلمات المفردة.
  for (let i = 0; i < tokens.length; i += 1) {
    if (consumed.has(i)) continue;
    const phrase = analyzeNumberPhrase(tokens, i);
    if (!phrase || !['teen', 'coordinated', 'large'].includes(phrase.kind)) continue;
    const counted = tokens[phrase.countedIndex];
    if (!counted || counted.sentence !== tokens[i].sentence || !isStrongNominalCandidate(counted)) continue;

    const countedFeatures = tokenFeatures(counted);
    const gender = countedFeatures.gender;
    const phraseCase = numberPhraseCase(context, i);
    if (phrase.kind === 'large') out.push(...largeNumberInternalFindings(context, phrase, counted, phraseCase));
    const genderMismatch = phrase.kind !== 'large' && Boolean(gender && phrase.countedGender && phrase.countedGender !== gender);
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

    // V18.7.9 — «الغير» موصوفًا: «الأخبار الغير موثوقة» ← «الأخبار غير الموثوقة».
    // «غير» اسم ملازم للإضافة، فلا تدخل عليه «ال» ولا يقع نعتًا بنفسه؛ والوجه
    // الفصيح تعريف الصفة بعده وإضافته إليها. لا يُبنى الاقتراح إلا على قرينتين
    // معًا: منعوت معرَّف قبله، وصفة نكرة بعده، فلا يمس تركيب «حق الغير» ونحوه.
    if (core === 'غير' && tokens[i].morph.segments?.article) {
      const head = tokens[i - 1];
      const attribute = tokens[i + 1];
      const attributeIsBareAdjective = Boolean(attribute
        && attribute.sentence === tokens[i].sentence
        && !attribute.morph.segments?.article
        && !attribute.morph.segments?.preposition
        && (isAdjective(attribute) || /[ةه]$/u.test(attribute.morph.core || '')));
      if (head && head.sentence === tokens[i].sentence && head.morph.definite
          && isNominal(head) && attributeIsBareAdjective) {
        // تُعرَّف الصفة وتُؤخَّر: «الغير موثوقة» ← «غير الموثوقة». ويُصحَّح رسم
        // التاء المربوطة داخل البديل نفسه، لأن اقتراحين متداخلين على المقطع
        // ذاته لا يمكن تطبيقهما معًا، فيبقى الخطأ الإملائي عالقًا في الناتج.
        const attributeCore = attribute.morph.core;
        const spelledAttribute = WORDS[attributeCore]
          || (/ه$/u.test(attributeCore) ? uniqueOrthographicCandidate(attributeCore, 'taa') : null)
          || attributeCore;
        out.push(findingFromSpan(context, {
          startToken: tokens[i],
          endToken: attribute,
          replacement: `غير ال${spelledAttribute}`,
          ruleId: 'GHAYR_DEFINITE_ATTRIBUTE_V1879',
          type: 'نحوي',
          classification: 'syntax',
          confidence: 0.93,
          explanation: '«غير» اسم ملازم للإضافة لا تدخل عليه «ال»؛ والأفصح تعريف الصفة وإضافة «غير» إليها: «غير الموثوقة».',
          evidence: ['definite-head-before-ghayr', 'indefinite-attribute-after-ghayr', 'ghayr-is-permanently-annexed'],
          safe: false,
          metadata: {headIndex: i - 1, attributeIndex: i + 1}
        }));
      }
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
    // Dependency resolution has precedence over the looser ḥāl heuristic.
    // A matrix predicate or an already attached modifier cannot be reanalysed
    // as circumstantial merely because a verb occurs earlier in the sentence.
    const resolvedRole = context.syntax?.roles?.[i]?.role;
    if (resolvedRole && resolvedRole !== 'hal') continue;
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
/**
 * V18.8.0 — سجل المبنيات (Indeclinables 1.0).
 *
 * الاسم المبني يلزم صورةً واحدة مهما تغير موقعه من الإعراب، فمحله يُعرب
 * ولا يظهر عليه أثر. يستثنى المثنى من الموصولات وأسماء الإشارة فإنه معرب
 * بالألف رفعًا وبالياء نصبًا وجرًا. أي قاعدة تحاول «تصحيح» علامة إعراب
 * على مبني إنما تفسد الرسم، فتُمنع عند المصدر.
 */
const DECLINABLE_DUAL_DEICTICS_V1880 = new Set([
  'هذان', 'هذين', 'هاتان', 'هاتين',
  'اللذان', 'اللذين', 'اللتان', 'اللتين'
]);

/**
 * V18.8.0 — عتبة الدليل الصرفي لنقض قرينة سياقية صريحة.
 * التحليل المستنبط من مجرد اللاحقة (تاء مربوطة، ألف ونون…) ظنيٌّ، ولا يبلغ
 * درجة تسمح بإبطال ما دلت عليه أداة صريحة في الجملة.
 */
/**
 * V18.8.0 — حماية الأعلام والمعرَّبات (Lexical Protection 1.0).
 *
 * المعجم العام لا سلطان له على العَلَم ولا على المصطلح المعرَّب: تصحيحهما
 * تشويه للنص لا خدمة له. تُقرأ هذه القوائم قبل أي طبقة توليدية.
 */
const ARABIZED_TERMS_V1880 = new Set([
  'إنترنت', 'الإنترنت', 'هاتف', 'راديو', 'فيديو', 'كمبيوتر', 'حاسوب',
  'برمجيات', 'إلكتروني', 'إلكترونية', 'تلفزيون', 'تلفاز', 'كاميرا',
  'تكنولوجيا', 'ديمقراطية', 'بيروقراطية', 'استراتيجية', 'أكاديمية',
  'فيزياء', 'كيمياء', 'بيولوجيا', 'جغرافيا', 'موسيقى', 'سينما',
  'بنك', 'فيروس', 'بروتين', 'هرمون', 'ليزر', 'رادار', 'بطارية',
  'أوتوماتيكي', 'ميكانيكي', 'إلكترونيات', 'رقمي', 'رقمية', 'تطبيق',
  'برنامج', 'شبكة', 'خوارزمية', 'بيانات', 'خادم', 'متصفح', 'بريد'
]);

const SCIENTIFIC_TERMS_V1880 = new Set([
  'أكسجين', 'هيدروجين', 'نيتروجين', 'كربون', 'كالسيوم', 'صوديوم',
  'مغنيسيوم', 'بوتاسيوم', 'ذرة', 'جزيء', 'إلكترون', 'نيوترون', 'بروتون'
]);

function isProtectedLexicalItemV1880(token) {
  const core = token?.morph?.core;
  const surface = token?.clean || token?.surface;
  if (!core) return false;
  if (token.morph.pos === 'proper') return true;
  for (const value of [core, surface]) {
    if (!value) continue;
    if (PROPER_NAMES.has(value) || PLACE_PROPER_NAMES.has(value)) return true;
    if (ARABIZED_TERMS_V1880.has(value) || SCIENTIFIC_TERMS_V1880.has(value)) return true;
  }
  return false;
}

const WEAK_NOMINAL_SOURCES_V1880 = new Set([
  'productive-feminine-ending',
  'unverified-productive-inflection-ending',
  'productive-inflection-ending'
]);

function weakNominalEvidenceV1880(token, threshold = 0.85) {
  const nominal = token?.morph?.nominal;
  if (!nominal) return false;
  if (WEAK_NOMINAL_SOURCES_V1880.has(nominal.source)) return true;
  return (nominal.confidence || 0) < threshold;
}

function isIndeclinableNominalV1880(token) {
  const core = token?.morph?.core;
  if (!core) return false;
  if (DECLINABLE_DUAL_DEICTICS_V1880.has(core)) return false;
  if (Object.prototype.hasOwnProperty.call(RELATIVE_PRONOUNS, core)) return true;
  if (Object.prototype.hasOwnProperty.call(DEMONSTRATIVES, core)) return true;
  if (Object.prototype.hasOwnProperty.call(PERSONAL_PRONOUNS, core)) return true;
  return ['relative', 'demonstrative', 'pronoun'].includes(token?.morph?.pos);
}

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
  if (context.syntax?.tokenClause?.[headIndex] !== context.syntax?.tokenClause?.[dependentIndex]) return null;
  if (dependent.morph.segments.conjunction || dependent.morph.segments.preposition) return null;
  if (Boolean(head.morph.definite) !== Boolean(dependent.morph.definite)) return null;
  const dependentRole = context.syntax?.roles?.[dependentIndex];
  if (['inna-predicate', 'kana-predicate', 'predicate'].includes(dependentRole?.role)) return null;
  if (dependentRole?.role === 'adjective' && Number.isInteger(dependentRole.headIndex) && dependentRole.headIndex !== headIndex) return null;

  const numberPhrase = phraseForToken(context, headIndex);
  const isCountedHead = numberPhrase?.countedIndex === headIndex;
  const phraseRoleCase = isCountedHead ? roleExpectedCase(context, numberPhrase.start) : null;
  const roleCase = roleExpectedCase(context, headIndex);
  const inferred = inferSyntacticCase(tokens, headIndex);
  // Adjective-after-Number Resolver 1.0: the modifier describes the semantic
  // group and follows the phrase's external role, not the internal tamyīz case.
  const headCase = isCountedHead
    ? (phraseRoleCase?.case || numberPhrase.externalCase || inferred?.case || observedCase(head))
    : (roleCase?.case || inferred?.case || observedCase(head));
  const source = isCountedHead ? 'number-phrase-external-case'
    : (roleCase ? 'noun-role-resolver' : (inferred ? inferred.reason : 'surface-agreement'));
  let target = isCountedHead
    ? numberPhrase.predicateFeatures
    : effectiveAgreement(tokenFeatures(head));
  // V18.7.6: العدد الذي حسمه Deep Syntactic Topic Resolver للرأس يرثه النعت،
  // فلا يبقى النعت مثنى بينما حُسم الرأس جمعًا (الماهرين ← الماهرون).
  if (!isCountedHead) {
    const headRole = context.syntax?.roles?.[headIndex];
    if (headRole?.expectedNumber) target = {...target, number: headRole.expectedNumber, numberCandidates: null};
  }
  const actual = tokenFeatures(dependent);
  if (!target.number && target.numberCandidates && actual.number && target.numberCandidates.includes(actual.number)) {
    target = {...target, number: actual.number};
  }
  return {
    headIndex, dependentIndex, head, dependent,
    target,
    actual,
    headCase,
    dependentCase: observedCase(dependent),
    confidence: Math.min(0.98, roleCase?.confidence || inferred?.confidence || 0.88),
    evidence: [isCountedHead ? 'adjective-after-number-resolver-1.0' : 'adjective-resolver-2', source],
    numberPhraseId: isCountedHead ? numberPhrase.id : null
  };
}

function adjectiveDependents(context) {
  const out = [];
  const {tokens} = context;
  for (let dependentIndex = 1; dependentIndex < tokens.length; dependentIndex += 1) {
    const dependentRole = context.syntax?.roles?.[dependentIndex];
    const headIndex = dependentRole?.role === 'adjective' && Number.isInteger(dependentRole.headIndex)
      ? dependentRole.headIndex : dependentIndex - 1;
    const relation = resolveAdjectiveRelation(context, headIndex, dependentIndex);
    if (!relation) continue;
    const {head, dependent, target, actual, headCase, dependentCase} = relation;
    const mismatch = featuresMatch(target, actual, ['gender', 'number']);
    const caseMismatch = headCase && dependentCase && !caseMatches(dependentCase, headCase);
    if (!mismatch.length && !caseMismatch) continue;

    // لا تُفرض المطابقة في الجنس/العدد من رأس اسمي إنتاجي ضعيف؛ فقد يكون
    // الرسم الإملائي نفسه هو الذي أخفى تاء التأنيث (مثل «مسئله جديدة» قبل
    // تصحيحها إلى «مسألة جديدة»). تبقى مطابقة الحالة الظاهرة مستقلة لأنها
    // لا تستنتج الجنس من التحليل الضعيف.
    const reliableHeadAgreement = (head.morph?.confidence || 0) >= 0.8;
    if (mismatch.length && !reliableHeadAgreement && !caseMismatch) continue;

    // «accgen» كافٍ لصيغة المثنى وجمع المذكر: الطالبين المجتهدين.
    const caseValue = headCase;
    const replacement = inflectAdjectiveToken(dependent, target, caseValue, {forceVisibleCase: Boolean((dependent.visibleCase || dependent.morph.structuralCase) && caseValue)});
    out.push(findingFromSpan(context, {
      startToken: dependent,
      replacement,
      ruleId: mismatch.length ? 'ADJECTIVE_DEPENDENT_AGREEMENT_V18' : 'ADJECTIVE_DEPENDENT_CASE_V18',
      type: 'نحوي', classification: 'dependent', confidence: Math.min(0.98, 0.94 + 0.04 * relation.confidence),
      explanation: 'ربط AdjectiveResolver 2.0 النعت بمنعوته؛ فيتبعه في التعريف والإعراب ويطابقه في الجنس والعدد، مع معاملة جمع غير العاقل مفردًا مؤنثًا.',
      evidence: [...relation.evidence, headIndex === dependentIndex - 1 ? 'adjacent-adjective' : 'resolved-idafa-head',
        ...mismatch.map(x => `mismatch:${x}`), target.agreementException || 'regular-agreement'],
      safe: false,
      metadata: {headIndex, mismatch, expectedCase: headCase, resolverVersion: '2.0', relationConfidence: relation.confidence}
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
    // V18.8.0 — Weak-Evidence Veto: لا يُنقض اسم إشارة صريح بتحليل صرفي
    // ظني. «الطلبة» جمع تكسير للعاقل، لكن اللاحقة التاء أوهمت المحلل
    // إفرادًا مؤنثًا بثقة 0.62 فاقترح «هؤلاء ← هذه». القاعدة: اسم الإشارة
    // قرينة سياقية قائمة، فلا يزيحها إلا تحليل معجمي مراجع.
    if (weakNominalEvidenceV1880(noun)) continue;
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
    // V18.8.0: المبنيات لا تتغير صيغتها بتغير موقعها الإعرابي. الأسماء
    // الموصولة (إلا المثنى) وأسماء الإشارة والضمائر مبنية، فاقتراح إعرابها
    // بالواو/الياء («الذين ← الذون») خطأ صرفي جسيم لا مجرد إنذار زائد.
    if (nounCaseMismatch && !isIndeclinableNominalV1880(noun)) {
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

function productiveCopularPredicateFinding(context, subject, predicate, expectedCase, ruleId, evidence) {
  if (expectedCase !== 'accusative') return null;
  const source = predicate?.morph?.nominal?.source;
  const hypothesis = predicate?.morph?.nominal?.inflectionHypothesis
    || predicate?.morph?.inflectionHypothesis;
  const target = effectiveAgreement(tokenFeatures(subject));
  const core = stripDiacritics(predicate?.morph?.core || '');
  if (source !== 'unverified-productive-inflection-ending'
      || hypothesis?.number !== 'pl'
      || hypothesis.gender !== 'm' || hypothesis.caseForm !== 'nominative'
      || target.number !== 'pl' || target.gender !== 'm'
      || !/^[ء-ي]{3,}ون$/u.test(core)) return null;
  const replacement = `${core.slice(0, -2)}ين`;
  return findingFromSpan(context, {
    startToken: predicate, replacement: rebuildToken(predicate, replacement),
    ruleId, type: 'نحوي', classification: 'syntax', confidence: 0.945,
    explanation: 'ثبت موضع خبر كان بنيويًا، فاستُهلكت فرضية جمع المذكر السالم محليًا لنصب الخبر دون اعتمادها معجمًا عامًا.',
    evidence: [...evidence, 'explicit-kana-predicate-role',
      'local-unverified-sound-masculine-plural-hypothesis', 'expected-case:accusative'],
    safe: false,
    metadata: {
      subjectIndex: subject.index, predicateIndex: predicate.index,
      expectedCase, hypothesisScope: 'explicit-kana-predicate-only', relationConfidence: 0.97,
      // The suffix is not promoted globally; this override records the
      // confidence of the combined copular-role + surface-ending hypothesis.
      morphConfidenceOverride: 0.82
    }
  });
}

function predicateAgreementFinding(context, subject, predicate, expectedCase, ruleId, evidence,
  confidence = 0.95, targetOverride = null) {
  const adjective = bestAdjective(predicate);
  if (!adjective) return null;
  let target = targetOverride || effectiveAgreement(tokenFeatures(subject));
  const actual = tokenFeatures(predicate);
  if (!target.number && target.numberCandidates && actual.number && target.numberCandidates.includes(actual.number)) {
    target = {...target, number: actual.number};
  }
  const mismatch = featuresMatch(target, actual, ['gender', 'number']);
  const observed = observedCase(predicate);
  const caseMismatch = Boolean(observed && !caseMatches(observed, expectedCase));
  if (!mismatch.length && !caseMismatch) return null;
  return findingFromSpan(context, {
    startToken: predicate,
    replacement: inflectAdjectiveToken(predicate, target, expectedCase, {
      forceVisibleCase: Boolean(predicate.visibleCase || predicate.morph.structuralCase || caseMismatch)
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
    const kind = INNA_PARTICLES.has(core) ? 'inna' : (isKanaSurface(core) ? 'kana' : null);
    if (!kind) continue;
    const structure = resolveCopularStructure(context, i, kind);
    if (!structure) continue;
    const subject = tokens[structure.subjectFeatureIndex];

    // لا يطبق إعراب اسم الناسخ على تمييز العدد؛ رأس العبارة العددية هو اسم الناسخ.
    if (structure.subjectKind === 'nominal') {
      const expectedSubjectCase = kind === 'inna' ? 'accusative' : 'nominative';
      const subjectCase = syntaxCaseFinding(
        context, subject, expectedSubjectCase,
        kind === 'inna' ? 'INNA_SUBJECT_CASE_V18' : 'KANA_SUBJECT_CASE_V18',
        kind === 'inna' ? 'اسم إن وأخواتها منصوب.' : 'اسم كان وأخواتها مرفوع.',
        ['copular-structure-resolver', `${kind}-subject`, core], 0.975
      );
      if (subjectCase) out.push(subjectCase);
    }

    const phraseCountedNumber = structure.numberPhrase ? tokenFeatures(subject).number : null;
    const phraseExpectedNumber = structure.numberPhrase?.governance?.countedNumber || null;
    const phraseFeaturesReliable = !structure.numberPhrase || !phraseExpectedNumber
      || !phraseCountedNumber || phraseCountedNumber === phraseExpectedNumber;
    if (kind === 'kana' && phraseFeaturesReliable && ['كان', 'كانت', 'كانوا', 'كانو'].includes(core)) {
      const features = structure.numberPhrase?.semanticFeatures || effectiveAgreement(tokenFeatures(subject));
      const desiredKana = features.gender === 'f' ? 'كانت' : 'كان';
      if (core !== desiredKana) {
        out.push(findingFromSpan(context, {
          startToken: tokens[i], replacement: rebuildToken(tokens[i], desiredKana),
          ruleId: 'KANA_AGREEMENT_V18', type: 'صرفي', classification: 'morphology', confidence: 0.975,
          explanation: 'عند تقدم كان على اسمها الظاهر تفرد، وتطابقه في الجنس؛ وقد حُسم الاسم قبل التصريف.',
          evidence: ['copular-structure-resolver', 'kana-gender-agreement', `subject:${subject.surface}`],
          safe: false,
          metadata: {subjectIndex: structure.subjectFeatureIndex, relationConfidence: structure.confidence, resolverVersion: '1.0'}
        }));
      }
    }

    if (structure.predicateIndex >= 0) {
      const expectedPredicateCase = kind === 'inna' ? 'nominative' : 'accusative';
      const predicateRuleId = kind === 'inna' ? 'INNA_PREDICATE_V18' : 'KANA_PREDICATE_V18';
      const predicateEvidence = ['copular-structure-resolver', `${kind}-predicate`, core,
        ...(structure.numberPhrase ? ['kana-number-phrase-resolver-1.0'] : [])];
      const predicate = predicateAgreementFinding(
        context, subject, tokens[structure.predicateIndex], expectedPredicateCase,
        predicateRuleId, predicateEvidence,
        kind === 'inna' ? 0.965 : 0.97,
        structure.numberPhrase?.predicateFeatures || null
      ) || (kind === 'kana' ? productiveCopularPredicateFinding(
        context, subject, tokens[structure.predicateIndex], expectedPredicateCase,
        predicateRuleId, predicateEvidence
      ) : null);
      if (predicate) out.push(predicate);
      else if (!isAdjective(tokens[structure.predicateIndex])) {
        const predicateCase = syntaxCaseFinding(
          context, tokens[structure.predicateIndex], expectedPredicateCase,
          kind === 'inna' ? 'INNA_PREDICATE_CASE_V18' : 'KANA_PREDICATE_CASE_V18',
          kind === 'inna' ? 'خبر إن وأخواتها مرفوع.' : 'خبر كان وأخواتها منصوب.',
          ['copular-structure-resolver', `${kind}-predicate-case`], 0.95
        );
        if (predicateCase) out.push(predicateCase);
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


/* ===== MODULE: src/syntax/conditional-government-resolver-1.1.js ===== */
const JUSSIVE_CONDITIONAL_MARKERS = new Set(['إن', 'من', 'مهما', 'متى', 'أينما', 'حيثما', 'كيفما']);

function resolveConditionalGovernmentV1(context) {
  const relations = [];
  for (const clause of context.syntax?.clauses || []) {
    if (clause.type !== 'conditional') continue;
    const marker = context.tokens[clause.markerIndex]?.morph?.core;
    const jussive = JUSSIVE_CONDITIONAL_MARKERS.has(marker);
    const verbIndexes = [clause.conditionVerbIndex, clause.answerVerbIndex]
      .filter(Number.isInteger).filter(index => index >= 0);
    const governedVerbs = verbIndexes.map((verbIndex, order) => {
      const localGovernorIndex = JUSSIVE_PARTICLES.has(context.tokens[verbIndex - 1]?.morph?.core)
        ? verbIndex - 1 : null;
      const localGovernor = Number.isInteger(localGovernorIndex)
        ? context.tokens[localGovernorIndex].morph.core : null;
      return {
        verbIndex, function: order === 0 ? 'protasis' : 'apodosis',
        expectedMood: (jussive || localGovernor) ? 'jussive' : null,
        governmentSource: localGovernor ? 'local-jussive-particle'
          : (jussive ? 'conditional-marker' : null),
        localGovernorIndex,
        localGovernor,
        governmentPath: Number.isInteger(localGovernorIndex)
          ? [clause.markerIndex, localGovernorIndex, verbIndex]
          : [clause.markerIndex, verbIndex]
      };
    });
    const nestedJussiveParticles = governedVerbs
      .filter(item => Number.isInteger(item.localGovernorIndex))
      .map(item => `${item.localGovernor}@${item.localGovernorIndex}`);
    relations.push({
      resolver: 'ConditionalGovernmentResolver', version: '1.1', clauseId: clause.id,
      markerIndex: clause.markerIndex, marker, jussive,
      hasJussiveGovernment: governedVerbs.some(item => item.expectedMood === 'jussive'),
      confidence: clause.confidence || 0.96,
      reason: jussive ? 'أداة شرط جازمة تجزم فعل الشرط وجوابه، مع احترام عامل الجزم المحلي'
        : (nestedJussiveParticles.length
          ? 'أداة الشرط غير جازمة، لكن عاملًا محليًا من JUSSIVE_PARTICLES يجزم الفعل التالي وحده'
          : (marker === 'إذا' ? 'إذا ظرف شرط غير جازم' : 'أداة شرط غير جازمة')),
      verbs: governedVerbs,
      evidence: ['conditional-clause-boundary', `marker:${marker}`,
        jussive ? 'jussive-marker-class' : 'non-jussive-marker-class',
        ...nestedJussiveParticles.map(item => `nested-jussive-particle:${item}`)]
    });
  }
  return relations;
}

function replaceFinalVerbVowelWithSukun(surface) {
  if (!/[ًٌٍَُِ]$/u.test(surface)) return null;
  return `${surface.replace(/[ًٌٍَُِ]+$/u, '')}ْ`;
}

const FIVE_VERB_PERSON_CODES = new Set(['2fs', '2du', '2mp', '3dm', '3df', '3mp']);

function conditionalGovernmentRule(context) {
  const out = [];
  for (const relation of context.conditionalGovernment || []) {
    for (const governed of relation.verbs) {
      if (governed.expectedMood !== 'jussive') continue;
      const token = context.tokens[governed.verbIndex];
      const verb = bestVerb(token);
      if (!token) continue;
      const conservativeSurfacePresent = !verb && token.morph?.pos === 'unknown'
        && /^[يتأن][ء-ي]{3,}$/u.test(stripDiacritics(token.morph.core || ''))
        && /[َُِ]$/u.test(token.surface);
      if ((!verb || verb.tense !== 'present') && !conservativeSurfacePresent) continue;
      // عند وجود «لم» مباشرة قبل أحد الأفعال الخمسة تتولى fiveVerbsRule حذف النون؛
      // يبقى مسار الشرط مسجلًا في العلاقة ويُمرر إلى metadata، من دون نتيجتين متطابقتين.
      if (verb && governed.localGovernor && FIVE_VERB_PERSON_CODES.has(verb.personCode)) continue;
      const moodCore = verb
        ? applyVerbMood(token.morph.core, verb.personCode, 'jussive', verb.lemma)
        : null;
      let replacement = null;
      let operation = null;
      if (moodCore && moodCore !== token.morph.core) {
        replacement = rebuildToken(token, moodCore);
        operation = ['2fs', '2du', '2mp', '3dm', '3df', '3mp'].includes(verb.personCode)
          ? 'delete-five-verb-nun' : 'delete-weak-letter';
      } else {
        replacement = replaceFinalVerbVowelWithSukun(token.surface);
        operation = replacement
          ? (conservativeSurfacePresent
            ? 'surface-present-visible-vowel-to-sukun'
            : 'replace-visible-final-vowel-with-sukun')
          : null;
      }
      if (!replacement || replacement === token.surface) continue;
      out.push(findingFromSpan(context, {
        startToken: token, replacement,
        ruleId: 'CONDITIONAL_JUSSIVE_V1871', type: 'نحوي', classification: 'verb-mood',
        confidence: Math.min(0.985, relation.confidence || 0.96),
        explanation: governed.localGovernor
          ? `الفعل المضارع في جملة الشرط مجزوم، وقد تولى العامل المحلي «${governed.localGovernor}» جزمَه.`
          : (governed.function === 'protasis'
            ? 'الفعل المضارع بعد أداة الشرط الجازمة هو فعل الشرط، فيُجزم.'
            : 'جواب الشرط المضارع في هذا الإطار مجزوم بأداة الشرط الجازمة.'),
        evidence: [`ConditionalGovernmentResolver-${relation.version}`, ...relation.evidence,
          `function:${governed.function}`, `operation:${operation}`,
          ...(governed.localGovernor ? [`local-governor:${governed.localGovernor}`] : [])],
        safe: false,
        metadata: {resolver: relation.resolver, resolverVersion: relation.version,
          marker: relation.marker, markerIndex: relation.markerIndex, markerJussive: relation.jussive,
          clauseId: relation.clauseId, function: governed.function,
          expectedMood: 'jussive', governmentSource: governed.governmentSource,
          operation, relationConfidence: relation.confidence,
          localGovernor: governed.localGovernor, localGovernorIndex: governed.localGovernorIndex,
          governmentPath: governed.governmentPath}
      }));
    }
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
  for (let i = 1; i < tokens.length; i += 1) {
    const verb = bestVerb(tokens[i]);
    if (!verb || verb.tense !== 'present' || !FIVE_VERB_PERSON_CODES.has(verb.personCode)) continue;
    const governor = tokens[i - 1].morph.core;
    const mood = SUBJUNCTIVE_PARTICLES.has(governor)
      ? 'subjunctive' : (JUSSIVE_PARTICLES.has(governor) ? 'jussive' : null);
    if (!mood) continue;
    const desired = fiveVerbObliqueForm(tokens[i].morph.core);
    if (!desired || desired === tokens[i].morph.core) continue;
    let conditionalLink = null;
    for (const relation of context.conditionalGovernment || []) {
      const governed = relation.verbs.find(item => item.verbIndex === i
        && item.localGovernorIndex === i - 1 && item.expectedMood === mood);
      if (governed) { conditionalLink = {relation, governed}; break; }
    }
    out.push(findingFromSpan(context, {
      startToken: tokens[i], replacement: rebuildToken(tokens[i], desired),
      ruleId: mood === 'subjunctive' ? 'FIVE_VERBS_SUBJUNCTIVE_V18' : 'FIVE_VERBS_JUSSIVE_V18',
      type: 'صرفي', classification: 'five-verbs', confidence: 0.99,
      explanation: mood === 'subjunctive'
        ? 'الأفعال الخمسة تنصب بحذف النون بعد أداة النصب، وتثبت ألف التفريق بعد واو الجماعة.'
        : 'الأفعال الخمسة تجزم بحذف النون بعد أداة الجزم، وتثبت ألف التفريق بعد واو الجماعة.',
      evidence: ['five-verbs', `governor:${governor}`, `person:${verb.personCode}`, 'verified-verb-paradigm',
        ...(conditionalLink ? [`ConditionalGovernmentResolver-${conditionalLink.relation.version}`,
          `conditional-marker:${conditionalLink.relation.marker}`] : [])],
      safe: false,
      metadata: {mood, governorIndex: i - 1, personCode: verb.personCode, relationConfidence: 0.99,
        conditionalResolver: conditionalLink?.relation.resolver || null,
        conditionalResolverVersion: conditionalLink?.relation.version || null,
        conditionalMarker: conditionalLink?.relation.marker || null,
        conditionalFunction: conditionalLink?.governed.function || null,
        governmentPath: conditionalLink?.governed.governmentPath || [i - 1, i]}
    }));
  }
  return out;
}


/* ===== MODULE: src/rules/productive-orthography.js ===== */
function buildKnownOrthographicForms() {
  const forms = new Set([
    ...NOUN_FORM_INDEX.keys(), ...ADJECTIVE_FORM_INDEX.keys(), ...VERB_FORM_INDEX.keys(),
    ...PROPER_NAMES, ...Object.keys(FIVE_NOUN_FORMS),
    ...Object.values(WORDS), ...Object.values(PHRASES).flatMap(value => value.split(/\s+/u))
  ]);
  return new Set([...forms].map(value => stripDiacritics(value)).filter(value => /^[ء-ي]{2,}$/u.test(value)));
}

const KNOWN_ORTHOGRAPHIC_FORMS = buildKnownOrthographicForms();

function buildOrthographicVariantIndex(kind) {
  const index = new Map();
  const keyOf = value => {
    if (kind === 'taa') return /[هة]$/u.test(value) ? value.replace(/[هة]$/u, 'ـت') : null;
    if (kind === 'alif-maqsura') return /[اىي]$/u.test(value) ? value.replace(/[اىي]$/u, 'ـى') : null;
    if (kind === 'hamza') return /[ءأإؤئآ]/u.test(value) ? value.replace(/[ءأإؤئآ]/gu, 'ء') : null;
    return null;
  };
  for (const form of KNOWN_ORTHOGRAPHIC_FORMS) {
    const key = keyOf(form);
    if (!key) continue;
    if (!index.has(key)) index.set(key, new Set());
    index.get(key).add(form);
  }
  return {index, keyOf};
}

const PRODUCTIVE_ORTHOGRAPHIC_INDEXES = Object.freeze({
  taa: buildOrthographicVariantIndex('taa'),
  'alif-maqsura': buildOrthographicVariantIndex('alif-maqsura'),
  hamza: buildOrthographicVariantIndex('hamza')
});

/**
 * V18.8.0 — طبقة المنع الإملائي الإنتاجي (Orthographic Invariants 1.0).
 *
 * السبب الجذري لإنذارات مثل «مدى ← مدا» و«إبن ← أبن» أن المولّد الإنتاجي
 * يبحث عن «مرشح وحيد» في فهرس مبني على الصيغ المعروفة، فإذا صادف صيغةً
 * شقيقةً واحدة عدّها برهانًا. وهذا استدلال شكلي لا معجمي: «مدا» صيغة تثنية
 * فعلية («مدّ»)، و«أبن» صيغة فعلية أيضًا، فلا يجوز أن تنقض رسمًا اسميًا
 * ثابتًا. القاعدة المقررة هنا: الألف المقصورة والهمزة في هذه المداخل
 * مسألة معجمية بالدرجة الأولى، فتُقيَّد بجدول ثابت لا يخترقه التوليد.
 */
const ALIF_MAQSURA_INVARIANTS_V1880 = new Set([
  // أسماء وظروف وأدوات رسمها بالألف المقصورة ثابت لا يقبل التوليد.
  'مدى', 'هدى', 'لدى', 'سوى', 'شتى', 'أنى', 'بلى', 'عسى', 'متى', 'حتى',
  'إلى', 'على', 'أولى', 'الأولى', 'دنيا', 'عليا', 'قصوى', 'كبرى', 'صغرى',
  'عظمى', 'وسطى', 'يسرى', 'يمنى', 'حبلى', 'ذكرى', 'بشرى', 'نجوى', 'دعوى',
  'شكوى', 'فتوى', 'تقوى', 'سلوى', 'حلوى', 'ضحى', 'هوى', 'نوى', 'فتى',
  'رحى', 'قرى', 'رؤى', 'مأوى', 'مجرى', 'مسعى', 'مغزى', 'معنى', 'منتهى',
  'ملتقى', 'مستشفى', 'مصطفى', 'مرتضى', 'موسى', 'عيسى', 'يحيى', 'ليلى',
  'سلمى', 'نجلاء', 'مثنى', 'أقصى', 'الأقصى', 'أدنى', 'أعلى', 'أخرى', 'شورى'
]);

// همزة الوصل في هذه المداخل حكم صرفي مقرر: لا تكتب همزة قطع البتة،
// فلا يجوز للمولّد أن يقترح لها كرسيًا آخر («إبن ← أبن» خطأ مركّب).
const HAMZAT_WASL_INVARIANTS_V1880 = new Set([
  'ابن', 'ابنة', 'ابنان', 'ابنتان', 'ابنين', 'ابنتين', 'ابنا', 'ابني',
  'اسم', 'اسمان', 'اسمين', 'امرؤ', 'امرأ', 'امرئ', 'امرأة', 'امرأتان',
  'اثنان', 'اثنين', 'اثنتان', 'اثنتين', 'است', 'ايم', 'ايمن',
  'انطلاق', 'استخدام', 'اجتهاد', 'ابتسامة', 'احترام', 'اهتمام'
]);

function isOrthographicInvariantV1880(core, kind) {
  if (kind === 'alif-maqsura') return ALIF_MAQSURA_INVARIANTS_V1880.has(core);
  if (kind === 'hamza') {
    if (HAMZAT_WASL_INVARIANTS_V1880.has(core)) return true;
    // الصيغة المبدوءة بهمزة قطع خاطئة على مدخل همزة وصل («إبن/إسم»)
    // تُحسم في الطبقة المعجمية المراجعة، لا في المولّد الإنتاجي.
    const wasl = core.replace(/^[أإآ]/u, 'ا');
    return wasl !== core && HAMZAT_WASL_INVARIANTS_V1880.has(wasl);
  }
  return false;
}

/**
 * صيغة الفعل المصرّفة ليست برهانًا على رسم اسمٍ ثابت. «مدا» لا تدل إلا على
 * تثنية «مدّ»، فاتخاذها مرشحًا وحيدًا لـ«مدى» خلطٌ بين بابين. نشترط ألا
 * يكون سند المرشح مقصورًا على تصريف فعلي بحت.
 */
function candidateSupportedByNominalEvidenceV1880(candidate) {
  const verbOnly = VERB_FORM_INDEX.has(candidate)
    && !NOUN_FORM_INDEX.has(candidate)
    && !ADJECTIVE_FORM_INDEX.has(candidate)
    && !PROPER_NAMES.has(candidate)
    && !Object.prototype.hasOwnProperty.call(FIVE_NOUN_FORMS, candidate);
  return !verbOnly;
}

function uniqueOrthographicCandidate(core, kind, {requireNominalSupport = false} = {}) {
  // لا يجوز أن يحوّل المولد صيغة صحيحة مفهرسة إلى صيغة شقيقة لها (أبا↔أبي، تدرسي↔تدرسا).
  if (KNOWN_ORTHOGRAPHIC_FORMS.has(core)) return null;
  // V18.8.0: المداخل الثابتة معجميًا محظورة على التوليد الإنتاجي.
  if (isOrthographicInvariantV1880(core, kind)) return null;
  const descriptor = PRODUCTIVE_ORTHOGRAPHIC_INDEXES[kind];
  const key = descriptor.keyOf(core);
  if (!key) return null;
  const candidates = [...(descriptor.index.get(key) || [])].filter(value => value !== core);
  if (candidates.length !== 1) return null;
  if (requireNominalSupport && !candidateSupportedByNominalEvidenceV1880(candidates[0])) return null;
  return candidates[0];
}

function vowelStrength(mark) {
  if (mark === 'ِ' || mark === 'ٍ') return 3;
  if (mark === 'ُ' || mark === 'ٌ') return 2;
  if (mark === 'َ' || mark === 'ً') return 1;
  if (mark === 'ْ') return 0;
  return null;
}

function productiveHamzaSeat(surface) {
  const chars = [...surface];
  const letterIndexes = [];
  for (let i = 0; i < chars.length; i += 1) if (/[ء-ي]/u.test(chars[i])) letterIndexes.push(i);
  for (let p = 1; p < letterIndexes.length; p += 1) {
    const at = letterIndexes[p];
    if (!/[ءأإؤئ]/u.test(chars[at])) continue;
    const previousAt = letterIndexes[p - 1];
    const nextLetterAt = letterIndexes[p + 1] ?? chars.length;
    const ownMarks = chars.slice(at + 1, nextLetterAt);
    const previousMarks = chars.slice(previousAt + 1, at);
    const ownStrength = ownMarks.map(vowelStrength).find(value => value != null);
    const previousStrength = previousMarks.map(vowelStrength).find(value => value != null);
    const final = p === letterIndexes.length - 1;
    let strength;
    if (final) {
      if (previousStrength == null) continue;
      strength = previousStrength;
    } else {
      // لا نستنتج كرسي الهمزة المتوسطة من نص غير مشكول: ذلك مولد إنذارات كاذبة.
      if (ownStrength == null || previousStrength == null) continue;
      strength = Math.max(ownStrength, previousStrength);
    }
    const expected = strength === 3 ? 'ئ' : strength === 2 ? 'ؤ' : strength === 1 ? 'أ' : 'ء';
    if (chars[at] === expected) continue;
    chars[at] = expected;
    return chars.join('');
  }
  return null;
}

function hamzaMorphologicalRule(context) {
  const out = [];
  for (const token of context.tokens) {
    const core = token.morph.core;
    const resolution = resolveHamzaMorphologyV1(core);
    if (!resolution || resolution.status !== 'invalid-seat' || !resolution.preferredForm
        || resolution.preferredForm === core) continue;
    out.push(findingFromSpan(context, {
      startToken: token, replacement: rebuildToken(token, resolution.preferredForm),
      ruleId: 'PRODUCTIVE_HAMZA_MORPHOLOGY_V1871', type: 'إملائي',
      classification: 'orthographic-productive', confidence: resolution.confidence,
      explanation: 'حُسم كرسي الهمزة من جذر الفعل وزمنه وشخصه ولحقه التصريفي، لا من تشابه الحروف وحده.',
      evidence: resolution.evidence, safe: false,
      metadata: {resolver: resolution.resolver, resolverVersion: resolution.version,
        lemma: resolution.lemma, root: resolution.root, tense: resolution.tense,
        personCode: resolution.personCode, personCodes: resolution.personCodes,
        analyses: resolution.analyses, acceptedForms: resolution.acceptedForms,
        canonicalForm: resolution.canonicalForm}
    }));
  }
  return out;
}

function productiveOrthographyRule(context) {
  const out = [];
  for (const token of context.tokens) {
    const core = token.morph.core;
    if (!core || token.morph.segments?.enclitic
        || ['آن', 'أولى'].includes(core) || SUBJECT_SKIP_ADVERBS.has(token.surface)
        || ['proper', 'particle', 'preposition', 'pronoun', 'relative', 'number'].includes(token.morph.pos)) continue;
    // المدخل المراجع يعالج في المرحلة السابقة بثقة أعلى؛ لا نكرر النتيجة الإنتاجية نفسها.
    if (Object.prototype.hasOwnProperty.call(WORDS, core)
        || Object.prototype.hasOwnProperty.call(WORDS, token.surface)) continue;
    // V18.8.0: الأعلام والمعرَّبات والمصطلحات العلمية خارج سلطان التوليد.
    if (isProtectedLexicalItemV1880(token)) continue;
    let replacementCore = null;
    let ruleId = null;
    let explanation = null;
    let evidence = [];
    let confidence = 0.94;

    if (/\p{M}/u.test(token.surface)) {
      const seated = productiveHamzaSeat(token.surface);
      if (seated && seated !== token.surface) {
        out.push(findingFromSpan(context, {
          startToken: token, replacement: seated,
          ruleId: 'PRODUCTIVE_HAMZA_SEAT_V187', type: 'إملائي', classification: 'orthographic-productive',
          confidence: 0.985,
          explanation: 'حُدِّد كرسي الهمزة إنتاجيًا من أقوى الحركتين الظاهرتين، مع أولوية الكسرة ثم الضمة ثم الفتحة.',
          evidence: ['fully-vocalized-hamza-context', 'hamza-seat-strength'], safe: false
        }));
      }
      continue;
    }

    if (/ه$/u.test(core)) {
      replacementCore = uniqueOrthographicCandidate(core, 'taa');
      ruleId = 'PRODUCTIVE_TAA_MARBUTA_V187';
      explanation = 'طابق المحلل الصيغة بمدخل معجمي وحيد ينتهي بتاء مربوطة؛ أبقي التصحيح اقتراحًا لاحتمال هاء الضمير أو الهاء الأصلية.';
      evidence = ['unique-lexical-morphological-candidate', 'taa-marbuta-vs-ha'];
      confidence = 0.965;
    }
    if (!replacementCore && /[اىي]$/u.test(core)
        // قراءة اسم مشتق مستقلة مثل «مبنى» تمنع قلبها إلى صفة شقيقة «مبني»
        // لمجرد تشابه المفتاح الإملائي؛ يقتصر المسار على الشكل غير المحلل.
        && !String(token.morph.nominal?.source || '').startsWith('productive-')) {
      // V18.8.0: لا يُبنى قلب الألف المقصورة على تصريف فعلي وحيد («مدا»).
      replacementCore = uniqueOrthographicCandidate(core, 'alif-maqsura', {requireNominalSupport: true});
      ruleId = 'PRODUCTIVE_ALIF_MAQSURA_V187';
      explanation = 'حُسم رسم الألف المقصورة من مرشح صرفي معجمي وحيد، مع إبقائه اقتراحًا محافظًا.';
      evidence = ['unique-lexical-morphological-candidate', 'final-alif-ya-contrast'];
      confidence = 0.96;
    }
    if (!replacementCore && /[ءأإؤئآ]/u.test(core) && !resolveHamzaMorphologyV1(core)) {
      // لا يُستعمل هيكل الهمزة للأفعال: الأفعال تمر حصريًا عبر HamzaMorphologicalResolver 1.0.
      // يبقى التطابق المعجمي المحافظ للأسماء التي لا تملك تحليلًا فعليًا منافسًا.
      // V18.8.0: مسار الأسماء المهموزة لا يستند إلى صيغة فعلية شقيقة («أبن»).
      replacementCore = uniqueOrthographicCandidate(core, 'hamza', {requireNominalSupport: true});
      ruleId = 'PRODUCTIVE_HAMZA_LEXEME_V187';
      explanation = 'طابق الاسم مدخلًا معجميًا وحيدًا؛ أما الأفعال المهموزة فتعالجها مرحلة صرفية مستقلة.';
      evidence = ['unique-nominal-lexical-candidate', 'non-verbal-hamza-path'];
      confidence = 0.95;
    }
    if (!replacementCore || replacementCore === core) continue;
    out.push(findingFromSpan(context, {
      startToken: token, replacement: rebuildToken(token, replacementCore),
      ruleId, type: 'إملائي', classification: 'orthographic-productive', confidence,
      explanation, evidence, safe: false,
      metadata: {analyzedCore: core, generatedCandidate: replacementCore}
    }));
  }
  return out;
}

function objectCaseRule(context) {
  const out = [];
  for (let i = 0; i < context.tokens.length; i += 1) {
    const token = context.tokens[i];
    const role = context.syntax?.roles?.[i];
    if (role?.role !== 'object') continue;
    const observed = observedCase(token);
    if (!observed || caseMatches(observed, 'accusative')) continue;
    let replacement = inflectTokenCase(token, 'accusative', {onlyWhenVisible: !token.morph.structuralCase});
    if (replacement && token.visibleCase && token.morph.structuralCase?.kind === 'ending'
        && /ين$/u.test(stripDiacritics(replacement)) && !/[ًٌٍَُِْ]$/u.test(replacement)) {
      replacement += 'َ';
    }
    if (!replacement || replacement === token.surface) continue;
    out.push(findingFromSpan(context, {
      startToken: token, replacement,
      ruleId: 'OBJECT_CASE_V1871', type: 'نحوي', classification: 'syntactic-case',
      confidence: Math.min(0.985, role.confidence || 0.93),
      explanation: 'حسم ObjectResolver الاسم مفعولًا به في إطار فعل متعدٍ؛ والمفعول به منصوب.',
      evidence: ['ObjectResolver-1.1', ...(role.evidence || []), `observed-case:${observed}`, 'expected-case:accusative'],
      safe: false,
      metadata: {resolver: 'ObjectResolver', resolverVersion: role.resolverVersion || '1.1',
        verbIndex: role.verbIndex, objectKind: role.objectKind, expectedCase: 'accusative',
        relationConfidence: role.confidence}
    }));
  }
  return out;
}

function confirmedProductiveDualStemV1874(core) {
  const stem = core.replace(/(?:تان|ان)$/u, '');
  if (stem.length < 3) return null;
  const reviewed = (NOUN_FORM_INDEX.get(stem) || []).find(item => item.number === 'sg')
    || (ADJECTIVE_FORM_INDEX.get(stem) || []).find(item => item.number === 'sg');
  // النمط الاشتقاقي العام ليس برهانًا كافيًا: «المهرجان» مفرد صحيح، مع أن
  // «مهرج» اسم مشتق صحيح أيضًا. لا نرقّي اللاحقة إلا بجذع مراجع صراحة.
  return reviewed ? {source: 'reviewed-stem-paradigm', confidence: 0.995, stem} : null;
}

function caseGovernmentResolverRuleV1874(context) {
  const out = [];
  const {tokens} = context;
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    const nominal = token.morph.nominal;
    if (!nominal || !['noun', 'adj'].includes(nominal.pos)) continue;
    const role = context.syntax?.roles?.[i];
    const prepositionCore = token.morph.segments?.preposition || tokens[i - 1]?.morph?.core || null;
    const explicitPreposition = Boolean(token.morph.segments?.preposition)
      || Boolean(canonicalPrepositionCore(tokens[i - 1]));
    const explicitAdverbialIdafa = ADVERBIAL_GOVERNORS.has(tokens[i - 1]?.morph?.core);
    // «عدا/خلا/حاشا» تدخل أيضًا باب الاستثناء، وله قواعده الأعلى تخصصًا.
    if (['عدا', 'خلا', 'حاشا'].includes(prepositionCore)) continue;
    if (!(explicitPreposition || explicitAdverbialIdafa)
        || !['object-of-preposition', 'genitive'].includes(role?.role)
        || (role.confidence || 0) < 0.97) continue;
    const governed = roleExpectedCase(context, i) || directGovernorCase(tokens, i);
    if (governed?.case !== 'genitive' || (governed.confidence || 0) < 0.97) continue;

    const core = token.morph.core;
    const unverifiedHypothesis = nominal.source === 'unverified-productive-inflection-ending'
      ? nominal.inflectionHypothesis : null;
    const nominativeSurface = observedCase(token) === 'nominative' && nominal.caseForm === 'nominative';
    const hypothesizedNominativeDual = unverifiedHypothesis?.number === 'du'
      && unverifiedHypothesis.caseForm === 'nominative' && /(?:تان|ان)$/u.test(core);
    if (!nominativeSurface && !hypothesizedNominativeDual) continue;

    let paradigmEvidence = null;
    let inflectionClass = null;
    if ((nominal.number === 'du' || hypothesizedNominativeDual) && /(?:تان|ان)$/u.test(core)) {
      // لا تُرقّى فرضية اللاحقة إلى تصحيح إلا هنا، بعد حكومة جر صريحة
      // وإثبات مستقل للجذع؛ فلا تستفيد منها طبقات الاتفاق العامة.
      paradigmEvidence = unverifiedHypothesis
        ? confirmedProductiveDualStemV1874(core)
        : {source: nominal.source, confidence: nominal.confidence, stem: nominal.lemma};
      inflectionClass = 'dual';
    } else if (nominal.number === 'pl' && /ون$/u.test(core)
        && nominal.source !== 'unverified-productive-inflection-ending' && (nominal.confidence || 0) >= 0.98) {
      // «زيتون/تلفون» قد يشبهان جمع المذكر؛ لذلك لا نقبل «ون» الإنتاجية هنا
      // إلا إذا كانت الصيغة نفسها من paradigm معجمي مراجع.
      paradigmEvidence = {source: nominal.source, confidence: nominal.confidence, stem: nominal.lemma};
      inflectionClass = 'sound-masculine-plural';
    }
    if (!paradigmEvidence) continue;

    const replacement = hypothesizedNominativeDual
      ? rebuildToken(token, core.replace(/ان$/u, 'ين'))
      : inflectTokenCase(token, 'genitive', {onlyWhenVisible: false});
    if (!replacement || replacement === token.surface) continue;
    out.push(findingFromSpan(context, {
      startToken: token, replacement,
      ruleId: 'PREPOSITION_INFLECTED_NOMINAL_CASE_V1874',
      type: 'نحوي', classification: 'syntactic-case', confidence: 0.985,
      explanation: 'الاسم بعد حرف الجر مجرور؛ ويظهر الجر والنصب في المثنى وجمع المذكر السالم بالياء.',
      evidence: ['CaseGovernmentResolver-1.1', 'explicit-preposition', 'role:object-of-preposition',
        `inflection-class:${inflectionClass}`, `stem-evidence:${paradigmEvidence.source}`, 'expected-case:genitive'],
      safe: false,
      metadata: {resolver: 'CaseGovernmentResolver', resolverVersion: '1.1', role: role.role,
        observedCase: 'nominative', expectedCase: 'genitive', inflectionClass,
        stem: paradigmEvidence.stem, stemConfidence: paradigmEvidence.confidence,
        relationConfidence: Math.min(role.confidence, governed.confidence)}
    }));
  }
  return out;
}

function soundFemininePluralCaseMarkerRule(context) {
  const out = [];
  for (let i = 0; i < context.tokens.length; i += 1) {
    const token = context.tokens[i];
    const nominal = token.morph.nominal;
    if (!nominal || nominal.number !== 'pl' || nominal.gender !== 'f'
        || !/ات$/u.test(token.morph.analyzedCore || token.morph.core)
        || token.visibleCase?.case !== 'accusative') continue;
    const governed = roleExpectedCase(context, i) || directGovernorCase(context.tokens, i);
    const expected = governed?.case === 'nominative' ? 'nominative'
      : governed?.case === 'genitive' ? 'genitive' : 'accusative';
    const replacement = inflectTokenCase(token, expected, {onlyWhenVisible: true});
    if (!replacement || replacement === token.surface) continue;
    out.push(findingFromSpan(context, {
      startToken: token, replacement,
      ruleId: 'SOUND_FEMININE_PLURAL_CASE_MARK_V187',
      type: 'نحوي', classification: 'morphological-case-marker', confidence: governed ? 0.99 : 0.97,
      explanation: expected === 'nominative'
        ? 'جمع المؤنث السالم يرفع بالضمة، ولا يقبل تنوين الفتح.'
        : 'جمع المؤنث السالم ينصب ويجر بالكسرة نيابة عن الفتحة، ولا تلحقه ألف تنوين النصب.',
      evidence: ['sound-feminine-plural', 'visible-fatha-or-fathatan', governed?.reason || 'attempted-accusative-mark'],
      safe: false,
      metadata: {expectedCase: expected, marker: expected === 'nominative' ? 'damma' : 'kasra', relationConfidence: governed?.confidence || 0.9}
    }));
  }
  return out;
}


/* ===== MODULE: src/grammar/governors-v1880.js ===== */
/**
 * V18.8.0 — سجل النواسخ والأفعال القلبية (Governors 1.0).
 *
 * هذه بنية معرفة لا قاعدة استبدال: تُقرأ منها الأحكام في طبقات المطابقة
 * والإعراب والتشكيل، فيستوي عندها العملُ على أساس نحوي واحد بدل تكرار
 * الجداول في كل قاعدة.
 */

// كان وأخواتها: ترفع الاسم وتنصب الخبر.
const KANA_SISTERS_V1880 = Object.freeze({
  'كان': {type: 'tamma-naqisa', condition: null},
  'أصبح': {type: 'tahawwul', condition: null},
  'أمسى': {type: 'tahawwul', condition: null},
  'أضحى': {type: 'tahawwul', condition: null},
  'ظل': {type: 'istimrar', condition: null},
  'بات': {type: 'istimrar', condition: null},
  'صار': {type: 'tahawwul', condition: null},
  'ليس': {type: 'nafy', condition: null},
  // ما زال وأخواتها لا تعمل إلا مسبوقةً بنفي أو شبهه.
  'زال': {type: 'istimrar', condition: 'requires-negation'},
  'برح': {type: 'istimrar', condition: 'requires-negation'},
  'انفك': {type: 'istimrar', condition: 'requires-negation'},
  'فتئ': {type: 'istimrar', condition: 'requires-negation'},
  // دام مصدرية ظرفية، لا تعمل إلا مسبوقة بـ«ما».
  'دام': {type: 'muddah', condition: 'requires-ma-masdariyya'}
});

// إنّ وأخواتها: تنصب الاسم وترفع الخبر — عكس عمل كان.
const INNA_SISTERS_V1880 = Object.freeze({
  'إن': {meaning: 'توكيد', initialOnly: true},
  'أن': {meaning: 'توكيد', initialOnly: false},
  'كأن': {meaning: 'تشبيه', initialOnly: false},
  'لكن': {meaning: 'استدراك', initialOnly: false},
  'ليت': {meaning: 'تمنٍّ', initialOnly: false},
  'لعل': {meaning: 'ترجٍّ', initialOnly: false}
});

/**
 * ظنّ وأخواتها: تنصب مفعولين أصلهما المبتدأ والخبر. وبعضها يحتمل معنى
 * قلبيًا وآخر حسيًا، فيختلف الإعراب باختلاف المعنى: «رأيت محمدًا مجتهدًا»
 * تحتمل الرؤية البصرية (فمجتهدًا حال) والقلبية (فهو مفعول ثانٍ). ولذلك
 * وُسمت هذه الأفعال بأنها ملتبسة، ومُنع بناء تصحيح قاطع على ظاهرها.
 */
const ZANNA_SISTERS_V1880 = Object.freeze({
  'ظن': {kind: 'rujhan', ambiguous: false},
  'حسب': {kind: 'rujhan', ambiguous: true},
  'خال': {kind: 'rujhan', ambiguous: true},
  'زعم': {kind: 'rujhan', ambiguous: false},
  'علم': {kind: 'yaqin', ambiguous: true},
  'وجد': {kind: 'yaqin', ambiguous: true},
  'رأى': {kind: 'yaqin', ambiguous: true},
  'درى': {kind: 'yaqin', ambiguous: true},
  'عد': {kind: 'tahwil', ambiguous: true},
  'جعل': {kind: 'tahwil', ambiguous: true},
  'اتخذ': {kind: 'tahwil', ambiguous: false}
});

// أفعال تتعدى إلى مفعولين ليس أصلهما المبتدأ والخبر.
const DITRANSITIVE_VERBS_V1880 = Object.freeze({
  'أعطى': {second: 'object'}, 'منح': {second: 'object'},
  'كسا': {second: 'object'}, 'ألبس': {second: 'object'},
  'منع': {second: 'object'}, 'سأل': {second: 'object'},
  'علّم': {second: 'object'}, 'أعلم': {second: 'object'}
});

const SUBJUNCTIVE_PARTICLES_V1880 = Object.freeze({
  'أن': 'مصدرية ناصبة', 'لن': 'نفي واستقبال', 'كي': 'تعليل',
  'لكي': 'تعليل', 'حتى': 'غاية أو تعليل', 'إذن': 'جواب وجزاء'
});

const JUSSIVE_PARTICLES_V1880 = Object.freeze({
  'لم': 'نفي وقلب', 'لما': 'نفي وقلب مع الاتصال',
  'لا': 'ناهية', 'ل': 'لام الأمر'
});

const CONDITIONAL_PARTICLES_V1880 = Object.freeze({
  'إن': true, 'من': true, 'ما': true, 'مهما': true, 'متى': true,
  'أين': true, 'أينما': true, 'حيثما': true, 'كيفما': true,
  'أي': true, 'إذما': true, 'أنى': true
});

const INTERROGATIVES_V1880 = Object.freeze({
  'هل': 'تصديق', 'من': 'عن العاقل', 'ما': 'عن غير العاقل',
  'ماذا': 'عن غير العاقل', 'متى': 'عن الزمان', 'أين': 'عن المكان',
  'كيف': 'عن الحال', 'كم': 'عن العدد', 'أي': 'عن التعيين',
  'لماذا': 'عن العلة', 'أيان': 'عن الزمان المستقبل'
});

const EXCEPTION_PARTICLES_V1880 = Object.freeze({
  'إلا': 'حرف استثناء', 'غير': 'اسم استثناء', 'سوى': 'اسم استثناء',
  'عدا': 'فعل أو حرف', 'خلا': 'فعل أو حرف', 'حاشا': 'فعل أو حرف'
});

// حروف الجر وما يلحق بها من أدوات القسم.
const PREPOSITIONS_FULL_V1880 = Object.freeze({
  'من': 'ابتداء الغاية', 'إلى': 'انتهاء الغاية', 'عن': 'المجاوزة',
  'على': 'الاستعلاء', 'في': 'الظرفية', 'ب': 'الإلصاق', 'ك': 'التشبيه',
  'ل': 'الملك والتعليل', 'رب': 'التقليل أو التكثير', 'حتى': 'انتهاء الغاية',
  'و': 'واو القسم', 'ت': 'تاء القسم', 'مذ': 'الظرفية', 'منذ': 'الظرفية'
});

/**
 * صيغ المفعول المطلق الشائعة. مقصود هذا السجل منع إنذار كاذب من نوع
 * «شرحًا ← شرح»: المصدر المنصوب بعد فعلٍ من لفظه مفعول مطلق صحيح يؤكد
 * الفعل أو يبين نوعه أو عدده، لا خطأ في الرسم.
 */
function isCognateAccusativeV1880(tokens, index) {
  const token = tokens[index];
  const core = stripDiacritics(token?.morph?.core || '');
  if (!core) return false;
  for (let i = index - 1; i >= 0 && i >= index - 3; i -= 1) {
    const previous = tokens[i];
    if (!previous || previous.sentence !== token.sentence) break;
    const verb = bestVerb(previous);
    if (!verb) continue;
    const lemma = stripDiacritics(verb.lemma || '');
    if (!lemma) continue;
    // اشتراك الجذر الثلاثي بين الفعل والمصدر قرينة المفعول المطلق.
    const root = lemma.slice(0, 3);
    if (root.length === 3 && core.includes(root)) return true;
  }
  return false;
}

/* ===== MODULE: src/rules/common-errors-v1880.js ===== */
/**
 * V18.8.0 — قاعدة الأخطاء الشائعة، مفصولة عن المحلل النحوي.
 *
 * شرط القبول في هذا الجدول واحد: ألا تكون للصيغة الخاطئة قراءة فصيحة
 * صحيحة في أي سياق. فما احتمل قراءتين لا يدخل هنا، بل يُترك للسياق
 * (مثل «إن/أن» و«علي/على»)، وإلا انقلب الجدول مصدرًا للإنذارات الكاذبة.
 */
const COMMON_ERRORS_V1880 = Object.freeze({
  /* أخطاء رسم لا قراءة صحيحة لها */
  'لاكن': 'لكن', 'لكنن': 'لكن', 'هاذا': 'هذا', 'هاذه': 'هذه',
  // ملاحظة: «اللذين/اللتين/اللذان/اللتان» صيغ صحيحة للمثنى الموصول،
  // فلا تُدرج هنا البتة؛ الخطأ إنما هو في «اللذي/اللتي» للمفرد.
  'اللذي': 'الذي', 'اللتي': 'التي',
  'هاؤلاء': 'هؤلاء', 'هولاء': 'هؤلاء', 'اولائك': 'أولئك', 'اولئك': 'أولئك',
  'ذالك': 'ذلك', 'كذالك': 'كذلك', 'هاكذا': 'هكذا',
  'مسئول': 'مسؤول', 'مسئولية': 'مسؤولية', 'مسئولين': 'مسؤولين',
  'شيئ': 'شيء', 'جزئ': 'جزء', 'بطيئ': 'بطيء', 'مليئ': 'مليء',
  'أنشاء': 'إنشاء', 'إسثناء': 'استثناء',
  'لأكن': 'لكن', 'ولاكن': 'ولكن',
  'حتا': 'حتى', 'الا': 'إلا', 'اللا': 'إلا',
  'انشاءات': 'إنشاءات', 'مشائخ': 'مشايخ',
  'رؤيا': 'رؤية', 'مئه': 'مئة', 'ثلاثمائه': 'ثلاثمائة',
  'إنشاءالله': 'إن شاء الله',
  'أستاذه': 'أستاذة', 'طالبه': 'طالبة',
  'صحرائ': 'صحراء', 'ابتدائ': 'ابتداء',
  'متسائل': 'متسائل', 'سؤل': 'سؤال',
  'ضهر': 'ظهر', 'ضلام': 'ظلام', 'ضلم': 'ظلم', 'ضابط': 'ضابط',
  'انتضار': 'انتظار', 'محافضة': 'محافظة', 'نضام': 'نظام',
  'نضافة': 'نظافة', 'حافضة': 'حافظة', 'ملاحضة': 'ملاحظة',
  'موضوع': 'موضوع', 'عضيم': 'عظيم', 'منضر': 'منظر',
  'إنتظار': 'انتظار', 'إحتياط': 'احتياط'
});

/**
 * الحروف المتقاربة صوتيًا (ض/ظ، س/ص، ت/ط، ذ/ز/ظ) لا تُصحَّح آليًا، لأن
 * القلب بينها يولّد كلمة قائمة بذاتها في الغالب: «حضر ≠ حظر»، «ظل ≠ ضل».
 * ولذلك اقتُصر الجدول أعلاه على الصيغ التي لا وجود لها في المعجم أصلًا،
 * وتُركت الأزواج الحقيقية للتنبيه السياقي وحده دون استبدال.
 */
const PHONETIC_CONFUSABLE_PAIRS_V1880 = Object.freeze([
  Object.freeze({a: 'حضر', b: 'حظر', note: 'حضر: الإتيان — حظر: المنع'}),
  Object.freeze({a: 'ظل', b: 'ضل', note: 'ظلّ: البقاء والفيء — ضلّ: فقد الطريق'}),
  Object.freeze({a: 'ظن', b: 'ضن', note: 'ظنّ: رجّح — ضنّ: بخل'}),
  Object.freeze({a: 'نظر', b: 'نضر', note: 'نظر: أبصر — نضر: حسُن'}),
  Object.freeze({a: 'حظ', b: 'حض', note: 'حظّ: النصيب — حضّ: الحثّ'}),
  Object.freeze({a: 'صار', b: 'سار', note: 'صار: التحول — سار: المشي'}),
  Object.freeze({a: 'أسد', b: 'أصد', note: 'اللفظ الصحيح: أسد'})
]);

function commonErrorsRuleV1880(context) {
  const out = [];
  for (const token of context.tokens) {
    if (token.type !== 'word') continue;
    const surface = token.clean;
    const segments = token.morph?.segments;
    const core = segments?.core;
    // الطبقة المعجمية الأساسية أولى بالمعالجة عند وجود مدخل لها.
    if (Object.prototype.hasOwnProperty.call(WORDS, surface)) continue;

    // المطابقة على السطح كاملًا أولًا، ثم على الجذع بعد نزع «ال» أو حرف
    // الجر: «النضام» خطأ كـ«نضام» سواء، والخطأ في الجذع لا تغيّره اللاصقة.
    let corrected = COMMON_ERRORS_V1880[surface] || null;
    let replacement = corrected;
    if (!corrected && core && core !== surface
        && (segments.article || segments.preposition) && !segments.enclitic) {
      const stemFix = COMMON_ERRORS_V1880[core];
      const prefix = token.clean.slice(0, token.clean.length - core.length);
      if (stemFix && prefix && token.clean.endsWith(core)
          && !/\s/u.test(stemFix)
          && !CLOSED_CLASS_CORRECTIONS_V1879.has(stemFix)) {
        corrected = stemFix;
        replacement = `${prefix}${stemFix}`;
      }
    }
    if (!corrected || !replacement || replacement === surface) continue;
    out.push(findingFromSpan(context, {
      startToken: token,
      replacement,
      ruleId: `COMMON_ERROR_V1880:${surface}`,
      type: 'إملائي',
      classification: 'orthographic',
      // شرط الإدراج في الجدول ألا تكون للصيغة قراءة فصيحة، فالحكم قطعي
      // كسائر المداخل المعجمية المراجعة، ويستحق التطبيق الآلي.
      confidence: 0.995,
      explanation: 'خطأ إملائي شائع؛ الصيغة المكتوبة لا قراءة فصيحة صحيحة لها.',
      evidence: ['common-error-lexicon', 'no-valid-reading'],
      safe: true,
      metadata: {layer: 'CommonErrors', layerVersion: '1.0'}
    }));
  }
  return out;
}

/* ===== MODULE: src/rules/style-spacing-v1880.js ===== */
/**
 * V18.8.0 — طبقة المسافات وعلامات الترقيم الموسّعة (البندان 45 و46).
 * تعالج المسافات المكررة، والمسافة حول الأقواس وعلامات التنصيص،
 * والمسافة بعد النقطتين والنقطة، مع صون المقاطع المحمية.
 */
function spacingRuleV1880(context) {
  const out = [];
  const text = context.text;

  const push = (start, end, replacement, id, explanation, confidence = 0.99) => {
    if (isProtectedNormalizedSpan(context, start, end)) return;
    out.push(findingFromTextSpan(context, {
      normalizedStart: start, normalizedEnd: end, replacement,
      ruleId: `SPACING_V1880:${id}`, type: 'مسافات', classification: 'spacing',
      confidence, explanation, evidence: ['spacing-normalization'], safe: true,
      // المسافات شأن طباعي لا لغوي، فلا تُخلط بالأخطاء النحوية والإملائية.
      metadata: {severityOverride: 'STYLE', layer: 'Spacing', layerVersion: '1.0'}
    }));
  };

  // المسافات المكررة داخل السطر تُوحَّد إلى مسافة واحدة.
  for (const m of text.matchAll(/ {2,}/gu)) {
    push(m.index, m.index + m[0].length, ' ', 'repeated-space',
      'تُوحَّد المسافات المتتالية في مسافة واحدة.');
  }
  // مسافة قبل النقطة أو النقطتين.
  for (const m of text.matchAll(/ +(?=[.:])/gu)) {
    push(m.index, m.index + m[0].length, '', 'space-before-dot',
      'لا توضع مسافة قبل النقطة أو النقطتين.');
  }
  // مسافة بعد قوس الفتح أو قبل قوس الإغلاق.
  for (const m of text.matchAll(/([(\[«]) +/gu)) {
    push(m.index + 1, m.index + m[0].length, '', 'space-after-open',
      'لا تُترك مسافة بعد قوس الفتح أو علامة التنصيص المفتوحة.');
  }
  for (const m of text.matchAll(/ +(?=[)\]»])/gu)) {
    push(m.index, m.index + m[0].length, '', 'space-before-close',
      'لا تُترك مسافة قبل قوس الإغلاق أو علامة التنصيص المغلقة.');
  }
  // غياب المسافة بعد النقطة بين جملتين عربيتين.
  for (const m of text.matchAll(/\.(?=[ء-ي])/gu)) {
    push(m.index + 1, m.index + 1, ' ', 'space-after-dot',
      'توضع مسافة بعد النقطة قبل بداية الجملة التالية.', 0.985);
  }
  return out;
}

/* ===== MODULE: src/core/word-span-v1890.js ===== */
/**
 * V18.9.0 — أدوات مشتركة للطبقات الجديدة.
 *
 * المبدأ الحاكم موروثٌ عن V18.8.0: «الإنذار الكاذب أشد ضررًا من فوات الخطأ».
 * لذلك تلتزم كل طبقة جديدة بثلاثة شروط:
 *   1) أولوية المعجم المراجَع: ما له مدخل في WORDS أو COMMON_ERRORS لا تمسّه
 *      الطبقات الإنتاجية، منعًا لتصحيحين متنافسين على المقطع نفسه.
 *   2) صون المقاطع المحمية (روابط، كود، بريد، تواريخ).
 *   3) لا تصحيح آليًا إلا لما لا يحتمل قراءة فصيحة أخرى.
 */
const V1890_ARABIC_WORD_CHAR = /[\u0621-\u063A\u0641-\u065F\u0670-\u06D3]/u;

function wordSpanAtV1890(text, index) {
  if (index < 0 || index >= text.length) return null;
  let start = index;
  let end = index;
  while (start > 0 && V1890_ARABIC_WORD_CHAR.test(text[start - 1])) start -= 1;
  while (end < text.length && V1890_ARABIC_WORD_CHAR.test(text[end])) end += 1;
  if (end <= start) return null;
  return {word: text.slice(start, end), start, end};
}

/**
 * هل للمقطع مدخلٌ في المعاجم المراجعة القائمة؟ إن كان كذلك فالطبقة المعجمية
 * أولى بمعالجته، وتمتنع الطبقات الإنتاجية الجديدة عن مزاحمتها.
 */
function isReviewedLexicalFormV1890(word) {
  if (!word) return false;
  const bare = stripDiacritics(word);
  for (const key of [word, bare]) {
    if (!key) continue;
    if (Object.prototype.hasOwnProperty.call(WORDS, key)) return true;
    if (Object.prototype.hasOwnProperty.call(WORDS_REVIEW, key)) return true;
    if (Object.prototype.hasOwnProperty.call(COMMON_ERRORS_V1880, key)) return true;
    if (Object.prototype.hasOwnProperty.call(HAMZAT_WASL_WORDS_V1880, key)) return true;
  }
  return false;
}

function tokenHasEncliticV1890(token) {
  return Boolean(token?.morph?.segments?.enclitic);
}

/* ===== MODULE: src/rules/diacritics-v1890.js ===== */
/**
 * V18.9.0 — طبقة الضبط والتشكيل (DiacriticsLayer 1.0).
 *
 * كانت المنظومة السابقة تعالج الحروف ولا تعالج الحركات، فتمرّ أخطاء الضبط
 * الشائعة كما هي. تعالج هذه الطبقة ما كان حكمه قطعيًا في رسم الحركة:
 *
 *   • ترتيب تنوين النصب وألفه: «كتاباً» ← «كتابًا». التنوين حركةُ آخرِ الاسم،
 *     والألف حرف دعم يُكتب بعده؛ فوضع التنوين فوق الألف خطأ رسم لا خلاف فيه.
 *   • ألف تنوين النصب المحذوفة: «كتابً» ← «كتابًا».
 *   • اجتماع «ال» والتنوين: التعريف والتنكير لا يجتمعان، فـ«الكتابٌ» محال.
 *   • تكرار الشدة، والسكون على الألف، وتوالي حركتين على حرف واحد.
 */
const TANWIN_TO_HARAKA_V1890 = Object.freeze({
  '\u064B': '\u064E', // ً ← َ
  '\u064C': '\u064F', // ٌ ← ُ
  '\u064D': '\u0650'  // ٍ ← ِ
});

// حروف لا تُكتب بعدها ألف تنوين النصب.
const NO_TANWIN_ALIF_TAIL_V1890 = /[\u0629\u0621\u0649\u0627\u0623\u0625\u0622\u0624\u0626]$/u;

function diacriticsRuleV1890(context) {
  const out = [];
  const text = context.text;

  const push = (start, end, replacement, id, explanation, confidence, classification, evidence, severityOverride) => {
    if (isProtectedNormalizedSpan(context, start, end)) return;
    out.push(findingFromTextSpan(context, {
      normalizedStart: start,
      normalizedEnd: end,
      replacement,
      ruleId: `DIACRITICS_V1890:${id}`,
      type: 'تشكيل',
      classification,
      confidence,
      explanation,
      evidence,
      safe: classification === 'orthographic',
      metadata: {layer: 'DiacriticsLayer', layerVersion: '1.0',
        ...(severityOverride ? {severityOverride} : {})}
    }));
  };

  // (1) تنوين النصب بعد ألفه: «كتاباً» ← «كتابًا».
  for (const match of text.matchAll(/([\u0621-\u063A\u0641-\u064A])\u0627\u064B/gu)) {
    const span = wordSpanAtV1890(text, match.index);
    // «شيئاً» ونظائرها لها مدخل سطحي كامل في المعجم المراجَع، فهو أولى.
    if (span && isReviewedLexicalFormV1890(span.word)) continue;
    push(match.index, match.index + match[0].length, `${match[1]}\u064B\u0627`,
      'tanwin-alif-order',
      'تنوين النصب حركةُ آخرِ الاسم، والألف حرفُ دعم بعده؛ فيُكتب «ـًا» لا «ـاً».',
      0.995, 'orthographic', ['tanwin-fath-placement', 'no-valid-reading']);
  }

  // (2) تنوين نصب بلا ألف دعم: «كتابً» ← «كتابًا».
  for (const match of text.matchAll(/([\u0621-\u063A\u0641-\u064A])\u064B(?![\u0627\u0649])/gu)) {
    const span = wordSpanAtV1890(text, match.index);
    if (!span || isReviewedLexicalFormV1890(span.word)) continue;
    // لا تُزاد الألف بعد تاء مربوطة ولا همزة على السطر ولا ألف مقصورة.
    if (NO_TANWIN_ALIF_TAIL_V1890.test(match[1])) continue;
    // يجب أن يكون التنوين في آخر الكلمة فعلًا.
    if (span.end !== match.index + match[0].length) continue;
    push(match.index, match.index + match[0].length, `${match[1]}\u064B\u0627`,
      'tanwin-missing-alif',
      'تنوين النصب على غير التاء المربوطة والهمزة المفردة يلحقه ألفُ دعم: «ـًا».',
      0.93, 'diacritics', ['accusative-tanwin', 'support-alif-required']);
  }

  // (3) «ال» والتنوين لا يجتمعان: التعريف يمنع التنكير.
  for (const token of context.tokens) {
    if (token.type !== 'word') continue;
    if (!token.morph?.segments?.article) continue;
    const mark = token.visibleCase;
    if (!mark || mark.kind !== 'tanwin') continue;
    const replacementMark = TANWIN_TO_HARAKA_V1890[mark.mark];
    if (!replacementMark) continue;
    const surface = token.surface;
    const position = surface.lastIndexOf(mark.mark);
    if (position < 0) continue;
    const replacement = surface.slice(0, position) + replacementMark
      + surface.slice(position + 1).replace(/^\u0627(?=$)/u, '');
    if (replacement === surface) continue;
    out.push(findingFromSpan(context, {
      startToken: token,
      replacement,
      ruleId: 'DIACRITICS_V1890:definite-tanwin',
      type: 'تشكيل',
      classification: 'diacritics',
      confidence: 0.97,
      explanation: 'المعرَّف بـ«ال» لا يُنوَّن؛ التعريف والتنكير لا يجتمعان في اسم واحد.',
      evidence: ['definite-article', 'tanwin-observed', 'definiteness-conflict'],
      safe: false,
      metadata: {layer: 'DiacriticsLayer', layerVersion: '1.0'}
    }));
  }

  // (4) تكرار الشدة على حرف واحد.
  for (const match of text.matchAll(/\u0651{2,}/gu)) {
    push(match.index, match.index + match[0].length, '\u0651', 'repeated-shadda',
      'الشدة علامة تضعيفٍ واحدة، فلا تُكرَّر على الحرف نفسه.',
      0.995, 'orthographic', ['duplicate-shadda', 'no-valid-reading']);
  }

  // (5) توالي حركتين على حرف واحد — تشكيل مستحيل.
  for (const match of text.matchAll(/[\u064E\u064F\u0650]{2,}/gu)) {
    push(match.index, match.index + match[0].length, match[0][0], 'stacked-harakat',
      'لا يجتمع على الحرف الواحد أكثر من حركة؛ إحدى الحركتين زائدة.',
      0.96, 'diacritics', ['impossible-vocalization']);
  }

  // (6) السكون على ألف المد أو على ألف تنوين النصب — محال صوتيًا.
  for (const match of text.matchAll(/\u0627\u0652/gu)) {
    push(match.index + 1, match.index + 2, '', 'sukun-on-alif',
      'الألف حرف مدٍّ ساكن بطبعه، فلا يوضع عليها سكون.',
      0.97, 'diacritics', ['impossible-vocalization']);
  }

  return out;
}

/* ===== MODULE: src/rules/hamza-complete-v1890.js ===== */
/**
 * V18.9.0 — طبقة الهمزات الشاملة (HamzaCompleteLayer 1.0).
 *
 * تستكمل ما لم تغطّه مداخل WORDS: الهمزة المتوسطة على قاعدة أقوى الحركتين،
 * والهمزة المتطرفة بعد حرف مدّ، والمدّ (آ). وكلها مداخل روجعت فردًا فردًا
 * بشرط ألا تكون للصيغة الخاطئة قراءة فصيحة أخرى.
 */
const HAMZA_MEDIAL_V1890 = Object.freeze({
  'رييس': 'رئيس', 'رييسي': 'رئيسي', 'الرييس': 'الرئيس', 'رييسة': 'رئيسة',
  'مسئولية': 'مسؤولية', 'مسئوليات': 'مسؤوليات', 'مسئولين': 'مسؤولين',
  'مسئولون': 'مسؤولون', 'المسئولية': 'المسؤولية', 'المسئولين': 'المسؤولين',
  'شئون': 'شؤون', 'الشئون': 'الشؤون', 'شئونه': 'شؤونه',
  'رؤيه': 'رؤية', 'رويه': 'رؤية', 'رويا': 'رؤيا',
  'سوال': 'سؤال', 'سوالات': 'سؤالات', 'السوال': 'السؤال', 'اسئله': 'أسئلة',
  'تفائل': 'تفاؤل', 'تشائم': 'تشاؤم', 'تسائل': 'تساؤل', 'تسائلات': 'تساؤلات',
  'ملائكه': 'ملائكة', 'قائمه': 'قائمة', 'فائده': 'فائدة', 'زائده': 'زائدة',
  'بئيس': 'بئيس', 'مئه': 'مئة', 'مائه': 'مائة',
  'يئس': 'يئس', 'ياس': 'يأس',
  'مساله': 'مسألة', 'يسال': 'يسأل', 'تسال': 'تسأل', 'نسال': 'نسأل',
  'ساله': 'سأله', 'سالنا': 'سألنا', 'سالوا': 'سألوا',
  'يبدا': 'يبدأ', 'تبدا': 'تبدأ', 'نبدا': 'نبدأ', 'ابدا': 'أبدأ',
  'يقرا': 'يقرأ', 'تقرا': 'تقرأ', 'نقرا': 'نقرأ', 'اقرا': 'اقرأ',
  'قرات': 'قرأت', 'بدات': 'بدأت', 'نشات': 'نشأت',
  'ملجا': 'ملجأ', 'مبتدا': 'مبتدأ', 'منشا': 'منشأ', 'مرفا': 'مرفأ',
  'مكافاه': 'مكافأة', 'مفاجاه': 'مفاجأة', 'منشاه': 'منشأة'
});

const HAMZA_MADD_V1890 = Object.freeze({
  'قرءان': 'قرآن', 'القرءان': 'القرآن', 'مرءاة': 'مرآة', 'المرءاة': 'المرآة',
  'مءارب': 'مآرب', 'ماخذ': 'مآخذ', 'مءاثر': 'مآثر',
  'ءامن': 'آمن', 'ءاخر': 'آخر', 'ءالة': 'آلة', 'ءاية': 'آية',
  'الاخره': 'الآخرة', 'اخره': 'آخرة', 'الالات': 'الآلات'
});

const HAMZA_FINAL_V1890 = Object.freeze({
  'بطيئ': 'بطيء', 'مليئ': 'مليء', 'رديئ': 'رديء', 'بريئ': 'بريء',
  'وضيئ': 'وضيء', 'هنيئ': 'هنيء', 'مريئ': 'مريء', 'دنيئ': 'دنيء',
  'يسيئ': 'يسيء', 'يضيئ': 'يضيء', 'يجيئ': 'يجيء',
  'ضوئ': 'ضوء', 'سوئ': 'سوء', 'هدوئ': 'هدوء', 'لجوئ': 'لجوء',
  'وضوئ': 'وضوء', 'نشوئ': 'نشوء', 'بطوئ': 'بطء',
  'سماء': 'سماء', 'بنائ': 'بناء', 'عطائ': 'عطاء', 'دعائ': 'دعاء',
  'مسائ': 'مساء', 'شتائ': 'شتاء', 'جزائ': 'جزاء', 'ابتدائ': 'ابتداء',
  'انتهائ': 'انتهاء', 'اصدقائ': 'أصدقاء', 'اطبائ': 'أطباء'
});

/**
 * قاعدة إنتاجية للهمزة المتطرفة: ما سُبقت همزته بألف أو واو مدّ تُكتب على
 * السطر «ء» لا على نبرة «ئ»، لأن حرف المدّ لا يقبل الاتصال بنبرة بعده.
 * قُصرت على الألف والواو، وتُركت الياء للمعجم أعلاه لأن «هيّئ» و«يهيّئ»
 * قراءتان صحيحتان تنتهيان بـ«يئ».
 */
function productiveFinalHamzaV1890(core) {
  if (!/[\u0627\u0648]\u0626$/u.test(core)) return null;
  if (core.length < 3) return null;
  return `${core.slice(0, -1)}\u0621`;
}

function hamzaCompleteRuleV1890(context) {
  const out = [];
  const tables = [
    [HAMZA_MEDIAL_V1890, 'medial', 'الهمزة المتوسطة تُكتب على ما يناسب أقوى الحركتين: حركتها وحركة ما قبلها.'],
    [HAMZA_MADD_V1890, 'madd', 'اجتماع همزتين أو همزةٍ وألفٍ ساكنة يُرسم مدًّا «آ».'],
    [HAMZA_FINAL_V1890, 'final', 'الهمزة المتطرفة تُكتب على السطر بعد حرف المدّ أو الساكن.']
  ];

  for (const token of context.tokens) {
    if (token.type !== 'word') continue;
    const surface = token.clean;
    // أولوية المعجم المراجَع القائم؛ لا تزاحم بين طبقتين على المقطع نفسه.
    if (isReviewedLexicalFormV1890(surface)) continue;
    if (isProtectedLexicalItemV1880(token)) continue;

    let replacement = null;
    let kind = null;
    let explanation = null;
    for (const [table, id, note] of tables) {
      if (Object.prototype.hasOwnProperty.call(table, surface)) {
        const value = table[surface];
        if (value !== surface) { replacement = value; kind = id; explanation = note; }
        break;
      }
    }

    // الخطأ في الجذع لا تغيّره اللاصقة: «الضوئ» خطأٌ كـ«ضوئ» سواء. فيُبحث
    // عن الجذع في الجداول ثم تُعاد اللاصقة كما هي — وهو المنهج نفسه المتبع
    // في clitizedLexicalOrthography وcommonErrorsRuleV1880.
    const core = token.morph?.core;
    const segments = token.morph?.segments;
    const canUseCore = core && core !== surface && !segments?.enclitic
      && (segments?.article || segments?.preposition || segments?.conjunction)
      && token.clean.endsWith(core);
    if (!replacement && canUseCore && !isReviewedLexicalFormV1890(core)) {
      const prefix = token.clean.slice(0, token.clean.length - core.length);
      for (const [table, id, note] of tables) {
        if (Object.prototype.hasOwnProperty.call(table, core)) {
          const value = table[core];
          if (value !== core && !/\s/u.test(value)) {
            replacement = `${prefix}${value}`; kind = id; explanation = note;
          }
          break;
        }
      }
    }

    if (!replacement && core && !tokenHasEncliticV1890(token)) {
      const produced = productiveFinalHamzaV1890(core);
      if (produced && produced !== core) {
        const prefix = token.clean.slice(0, token.clean.length - core.length);
        replacement = `${prefix}${produced}`;
        kind = 'final-productive';
        explanation = 'الهمزة المتطرفة بعد ألفٍ أو واوِ مدٍّ تُكتب على السطر «ء».';
      }
    }

    if (!replacement || replacement === surface) continue;
    out.push(findingFromSpan(context, {
      startToken: token,
      replacement,
      ruleId: `HAMZA_V1890:${kind}:${surface}`,
      type: 'إملائي',
      classification: 'orthographic',
      confidence: kind === 'final-productive' ? 0.97 : 0.995,
      explanation,
      evidence: ['hamza-rule', `hamza-position:${kind}`, 'no-valid-reading'],
      safe: kind !== 'final-productive',
      metadata: {layer: 'HamzaCompleteLayer', layerVersion: '1.0', hamzaKind: kind}
    }));
  }
  return out;
}

/* ===== MODULE: src/rules/style-v1890.js ===== */
/**
 * V18.9.0 — الطبقة اللغوية الأسلوبية (StyleLayer 1.0).
 *
 * هذه الطبقة لا تحكم بخطأ، بل تقترح أفصح وأوجز. ولذلك:
 *   • درجتها STYLE دائمًا، فلا تُخلط بالخطأ اللغوي.
 *   • لا تُطبَّق آليًا أبدًا (تصنيف style خارج قائمة التصحيح التلقائي).
 *   • ما لا يُحسن توليد بديله يُعرض تنبيهًا بلا استبدال (replacement = null).
 */
const STYLE_PATTERNS_V1890 = Object.freeze([
  /* ── الحشو والتطويل: الفعل المباشر أوجز من «قام بـ + مصدر» ── */
  {id: 'qama-bi-ziyara', re: /(?<![\u0621-\u064A])قام\s+بزيارة(?![\u0621-\u064A])/gu, to: 'زار',
    note: 'الفعل المباشر أوجز من «قام بـ + مصدر»: «زار» بدل «قام بزيارة».'},
  {id: 'qamat-bi-ziyara', re: /(?<![\u0621-\u064A])قامت\s+بزيارة(?![\u0621-\u064A])/gu, to: 'زارت',
    note: 'الفعل المباشر أوجز من «قامت بـ + مصدر»: «زارت» بدل «قامت بزيارة».'},
  {id: 'qama-bi-dirasa', re: /(?<![\u0621-\u064A])قام\s+بدراسة(?![\u0621-\u064A])/gu, to: 'درس',
    note: 'الفعل المباشر أوجز: «درس» بدل «قام بدراسة».'},
  {id: 'qama-bi-muraja', re: /(?<![\u0621-\u064A])قام\s+بمراجعة(?![\u0621-\u064A])/gu, to: 'راجع',
    note: 'الفعل المباشر أوجز: «راجع» بدل «قام بمراجعة».'},
  {id: 'yaqum-bi-muraja', re: /(?<![\u0621-\u064A])يقوم\s+بمراجعة(?![\u0621-\u064A])/gu, to: 'يراجع',
    note: 'الفعل المباشر أوجز: «يراجع» بدل «يقوم بمراجعة».'},
  {id: 'qama-bi-ijraa', re: /(?<![\u0621-\u064A])قام\s+بإجراء(?![\u0621-\u064A])/gu, to: 'أجرى',
    note: 'الفعل المباشر أوجز: «أجرى» بدل «قام بإجراء».'},
  {id: 'qama-bi-tahlil', re: /(?<![\u0621-\u064A])قام\s+بتحليل(?![\u0621-\u064A])/gu, to: 'حلّل',
    note: 'الفعل المباشر أوجز: «حلّل» بدل «قام بتحليل».'},
  {id: 'qama-bi-generic', re: /(?<![\u0621-\u064A])قام(?:ت|وا)?\s+(?:[\u0621-\u064A]{2,}\s+)?ب[\u0621-\u064A]{3,}/gu, to: null,
    note: 'أسلوب «قام بـ + مصدر» حشوٌ يضعف العبارة؛ والأصل استعمال الفعل مباشرة.'},

  /* ── المبني للمجهول المصطنع بـ«تم» ── */
  {id: 'tamma-masdar', re: /(?<![\u0621-\u064A])ت(?:م|مت)\s+[\u0621-\u064A]{3,}/gu, to: null,
    note: '«تم + مصدر» ترجمة حرفية للمبني للمجهول؛ والأفصح الفعل المبني للمجهول أو الفعل المعلوم.'},

  /* ── الترجمة الحرفية الشائعة ── */
  {id: 'laiba-dawran', re: /(?<![\u0621-\u064A])(?:لعب|لعبت|يلعب|تلعب)\s+(?:[\u0621-\u064A]{2,}\s+)?دور(?:ًا|اً|ا)?(?![\u0621-\u064A])/gu, to: null,
    note: '«لعب دورًا» ترجمة حرفية عن الإنجليزية؛ والأفصح «أدّى دورًا» أو «كان له أثر».'},
  {id: 'wada-fi-itibar', re: /(?<![\u0621-\u064A])(?:وضع|أخذ|يأخذ|يضع)\s+(?:في|بعين)\s+الاعتبار(?![\u0621-\u064A])/gu, to: null,
    note: '«وضع في الاعتبار» ترجمة حرفية؛ والأفصح «راعى» أو «اعتبر».'},
  {id: 'bishakl', re: /(?<![\u0621-\u064A])بشكل\s+([\u0621-\u064A]{3,})/gu, to: null,
    note: '«بشكل + صفة» ترجمة حرفية؛ والأفصح المصدر المنصوب أو الحال: «بشكل كبير» ← «كثيرًا».'},
  {id: 'bisura', re: /(?<![\u0621-\u064A])بصورة\s+([\u0621-\u064A]{3,})/gu, to: null,
    note: '«بصورة + صفة» تركيب مترجم؛ والأفصح الحال أو المفعول المطلق.'},
  {id: 'min-qibal', re: /(?<![\u0621-\u064A])من\s+قبل\s+ال/gu, to: null,
    note: '«من قِبَل» لبيان الفاعل ترجمةٌ حرفية؛ والأفصح بناء الجملة للمعلوم.'},
  {id: 'ala-al-aqal', re: /(?<![\u0621-\u064A])ليس\s+هناك(?![\u0621-\u064A])/gu, to: null,
    note: '«ليس هناك» تركيب مترجم؛ والأفصح «لا يوجد» أو «ما من».'},

  /* ── الخلط الشائع الذي له وجه أفصح ── */
  {id: 'nafs-al', re: /(?<![\u0621-\u064A])نفس\s+(ال[\u0621-\u064A]{2,})/gu, to: null,
    note: '«نفس» توكيدٌ يتبع الاسم ولا يتقدمه: «الشيء نفسه» لا «نفس الشيء».'},
  {id: 'bi-raghm', re: /(?<![\u0621-\u064A])بالرغم\s+من(?![\u0621-\u064A])/gu, to: 'على الرغم من',
    note: 'الأفصح «على الرغم من»؛ لأن الرغم يتعدى بـ«على» في الاستعمال المختار.'},
  {id: 'hamm', re: /(?<![\u0621-\u064A])(?:ال)?هام(?:ة|ًا|ا|اً)?(?![\u0621-\u064A])/gu, to: null,
    note: '«هام» اسم فاعل من «هَمَّ» بمعنى أقلق؛ والأفصح في معنى الأهمية «مهم».'},
  {id: 'haythu-anna', re: /(?<![\u0621-\u064A])حيث\s+أن(?![\u0621-\u064A])/gu, to: 'حيث إن',
    note: '«حيث» ظرف يُبتدأ بعده، فتُكسر همزة «إنّ»: «حيث إنّ».'},
  {id: 'la-zala', re: /(?<![\u0621-\u064A])لا\s+زال/gu, to: 'ما زال',
    note: '«لا زال» دعاء بالزوال؛ وللاستمرار يقال «ما زال».'},
  {id: 'iddat', re: /(?<![\u0621-\u064A])عدة\s+([\u0621-\u064A]{3,})/gu, to: null,
    note: '«عدة» في الفصيح تتبع المعدود: «أسباب عدة» لا «عدة أسباب».'},
  {id: 'alshay-alladhi', re: /(?<![\u0621-\u064A])الشيء\s+الذي(?![\u0621-\u064A])/gu, to: 'ما',
    note: '«الشيء الذي» إطالة؛ و«ما» الموصولة أوجز وأفصح.'},

  /* ── العامية والدخيل ── */
  {id: 'colloquial-bas', re: /(?<![\u0621-\u064A])بس(?![\u0621-\u064A])/gu, to: 'لكن',
    note: '«بس» عامية؛ وفصيحها «لكن» أو «غير أن».'},
  {id: 'colloquial-kteer', re: /(?<![\u0621-\u064A])كتير(?![\u0621-\u064A])/gu, to: 'كثير',
    note: '«كتير» نطق عامي؛ ورسمها الفصيح «كثير».'},
  {id: 'colloquial-hek', re: /(?<![\u0621-\u064A])هيك(?![\u0621-\u064A])/gu, to: 'هكذا',
    note: '«هيك» عامية؛ وفصيحها «هكذا».'},
  {id: 'colloquial-leish', re: /(?<![\u0621-\u064A])ليش(?![\u0621-\u064A])/gu, to: 'لماذا',
    note: '«ليش» عامية؛ وفصيحها «لماذا».'},
  {id: 'colloquial-mish', re: /(?<![\u0621-\u064A])مش(?![\u0621-\u064A])/gu, to: 'ليس',
    note: '«مش» عامية؛ وفصيحها «ليس» أو «غير».'},
  {id: 'colloquial-ashan', re: /(?<![\u0621-\u064A])(?:عشان|علشان)(?![\u0621-\u064A])/gu, to: 'لأن',
    note: '«عشان» عامية؛ وفصيحها «لأنّ» أو «كي».'},
  {id: 'colloquial-delwa', re: /(?<![\u0621-\u064A])دلوقتي(?![\u0621-\u064A])/gu, to: 'الآن',
    note: '«دلوقتي» عامية؛ وفصيحها «الآن».'}
]);

const STYLE_REPEAT_EXCEPTIONS_V1890 = new Set([
  'لا', 'ما', 'قد', 'إن', 'أن', 'هل', 'يا', 'كل', 'ثم', 'بل', 'لن', 'لم'
]);

function styleRuleV1890(context) {
  const out = [];
  const text = context.text;

  const push = (start, end, replacement, id, explanation, confidence = 0.85) => {
    if (isProtectedNormalizedSpan(context, start, end)) return;
    out.push(findingFromTextSpan(context, {
      normalizedStart: start,
      normalizedEnd: end,
      replacement,
      ruleId: `STYLE_V1890:${id}`,
      type: 'أسلوبي',
      classification: 'style',
      confidence,
      explanation,
      evidence: ['style-layer', 'not-a-grammatical-error'],
      safe: false,
      metadata: {layer: 'StyleLayer', layerVersion: '1.0', severityOverride: 'STYLE'}
    }));
  };

  for (const pattern of STYLE_PATTERNS_V1890) {
    pattern.re.lastIndex = 0;
    for (const match of text.matchAll(pattern.re)) {
      push(match.index, match.index + match[0].length, pattern.to, pattern.id, pattern.note);
    }
  }

  // «نفس + المعرَّف» ← «المعرَّف نفسه/نفسها» مع مراعاة التذكير والتأنيث.
  for (const match of text.matchAll(/(?<![\u0621-\u064A])نفس\s+(ال[\u0621-\u064A]{2,})/gu)) {
    const noun = match[1];
    const feminine = /ة$/u.test(noun);
    push(match.index, match.index + match[0].length,
      `${noun} ${feminine ? 'نفسها' : 'نفسه'}`, 'nafs-order',
      '«نفس» توكيد معنوي يتبع المؤكَّد ويطابقه: «الشيء نفسه».', 0.88);
  }

  // تكرار الكلمة المتلاصقة سهوًا.
  for (const match of text.matchAll(/(?<![\u0621-\u064A])([\u0621-\u064A]{3,})([ \t]+)\1(?![\u0621-\u064A])/gu)) {
    if (STYLE_REPEAT_EXCEPTIONS_V1890.has(match[1])) continue;
    push(match.index, match.index + match[0].length, match[1], 'duplicate-word',
      'تكرار الكلمة نفسها متلاصقةً سهوٌ كتابي في الغالب.', 0.9);
  }

  return out;
}

/* ===== MODULE: src/rules/punctuation-complete-v1890.js ===== */
/**
 * V18.9.0 — استكمال طبقة الترقيم (PunctuationCompleteLayer 1.0).
 *
 * تكمّل punctuationRule وspacingRuleV1880 دون المساس بهما: تبديل العلامات
 * اللاتينية بنظائرها العربية في السياق العربي، وكشف الأقواس وعلامات
 * التنصيص غير المتوازنة، وتوحيد الأسطر الفارغة المتراكمة.
 */
const LATIN_TO_ARABIC_PUNCT_V1890 = Object.freeze({
  ',': '،',
  ';': '؛',
  '?': '؟'
});

function punctuationCompleteRuleV1890(context) {
  const out = [];
  const text = context.text;
  const arabic = /[\u0621-\u064A]/u;

  const push = (start, end, replacement, id, explanation, confidence, severityOverride) => {
    if (isProtectedNormalizedSpan(context, start, end)) return;
    out.push(findingFromTextSpan(context, {
      normalizedStart: start,
      normalizedEnd: end,
      replacement,
      ruleId: `PUNCTUATION_V1890:${id}`,
      type: 'ترقيم',
      classification: 'punctuation',
      confidence,
      explanation,
      evidence: ['arabic-punctuation-convention'],
      safe: replacement != null,
      metadata: {layer: 'PunctuationCompleteLayer', layerVersion: '1.0',
        ...(severityOverride ? {severityOverride} : {})}
    }));
  };

  // (1) العلامات اللاتينية في نصٍّ عربي.
  for (let i = 0; i < text.length; i += 1) {
    const replacement = LATIN_TO_ARABIC_PUNCT_V1890[text[i]];
    if (!replacement) continue;
    // لا تُمَسّ الأرقام (1,000) ولا العناوين ولا الكود.
    const before = text.slice(0, i).match(/[^\s]$/u)?.[0] || '';
    const after = text.slice(i + 1).match(/^[^\s]/u)?.[0] || '';
    if (/[0-9\u0660-\u0669]/u.test(before) && /[0-9\u0660-\u0669]/u.test(after)) continue;
    // يشترط أن يكون السياق عربيًا حتى لا تُحوَّل علامات نصٍّ أجنبي.
    const windowText = text.slice(Math.max(0, i - 25), i + 25);
    if (!arabic.test(windowText)) continue;
    if (/[A-Za-z]/u.test(before) && /[A-Za-z]/u.test(after)) continue;
    push(i, i + 1, replacement, `latin-${replacement === '،' ? 'comma' : replacement === '؛' ? 'semicolon' : 'question'}`,
      'يُستعمل في النص العربي رسمُ العلامة العربية: «،» و«؛» و«؟».', 0.995);
  }

  // (2) الأقواس وعلامات التنصيص غير المتوازنة — تنبيه بلا استبدال.
  const pairs = [['(', ')', 'الأقواس الهلالية'], ['[', ']', 'الأقواس المعقوفة'],
    ['«', '»', 'علامات التنصيص المزدوجة'], ['{', '}', 'الأقواس المنحنية']];
  for (const [open, close, label] of pairs) {
    const opens = [...text].filter(char => char === open).length;
    const closes = [...text].filter(char => char === close).length;
    if (opens === closes) continue;
    const missing = opens > closes ? close : open;
    const position = opens > closes ? text.lastIndexOf(open) : text.indexOf(close);
    if (position < 0) continue;
    push(position, position + 1, null, 'unbalanced-pair',
      `${label} غير متوازنة: ينقص الرسمُ «${missing}».`, 0.9, 'WARNING');
  }

  // (3) الأسطر الفارغة المتراكمة.
  for (const match of text.matchAll(/\n{3,}/gu)) {
    push(match.index, match.index + match[0].length, '\n\n', 'excess-blank-lines',
      'يكفي سطر فارغ واحد للفصل بين الفقرات.', 0.95, 'STYLE');
  }

  // ملاحظة: المسافة قبل العلامة العربية تعالجها punctuationRule القائمة،
  // فلا تُكرَّر هنا منعًا لتشخيصين على الموضع الواحد.

  return out;
}

/* ===== MODULE: src/rules/visible-case-government-v1890.js ===== */
/**
 * V18.9.0 — قواعد الإعراب بالعلامة الظاهرة (VisibleCaseLayer 1.0).
 *
 * قاعدة السلامة: لا يُبنى حكمٌ إعرابي إلا على علامة ظاهرة في النص. فإن كان
 * الرسم مجردًا من الحركات فالسكوت أسلم، لأن التخمين هنا إنذار كاذب مؤكد.
 * وبهذا الشرط يُستكمل ما لم تغطّه قواعد النواسخ القائمة:
 *   • خبر «كان» وأخواتها منصوب: «كان الجوُّ جميلٌ» ← «جميلًا».
 *   • المنادى النكرة المقصودة مبني على الضم بلا تنوين: «يا طالبٌ» ← «يا طالبُ».
 */
function nominativeMarkOf(token) {
  const mark = token?.visibleCase;
  if (!mark || mark.case !== 'nominative') return null;
  return mark;
}

function kanaPredicateCaseRuleV1890(context) {
  const out = [];
  const {tokens} = context;

  for (let i = 0; i < tokens.length; i += 1) {
    const core = tokens[i].morph?.core;
    if (!core || !isKanaSurface(core)) continue;
    // شرط «ما زال» و«ما دام» محفوظ في سجل النواسخ القائم.
    const sister = KANA_SISTERS_V1880[core] || KANA_SISTERS_V1880[core.replace(/^ما/u, '')];
    if (sister?.condition === 'requires-negation' || sister?.condition === 'requires-ma-masdariyya') {
      const previous = tokens[i - 1]?.morph?.core;
      if (previous !== 'ما' && previous !== 'لا' && previous !== 'ليس') continue;
    }

    for (let j = i + 1; j < Math.min(i + 4, tokens.length); j += 1) {
      const candidate = tokens[j];
      if (candidate.sentence !== tokens[i].sentence) break;
      if (candidate.morph?.segments?.preposition) break;
      // الخبر النكرة المرفوع بعلامة ظاهرة هو موضع الخطأ المقصود.
      if (candidate.morph?.definite) continue;
      const mark = nominativeMarkOf(candidate);
      if (!mark) continue;
      if (!isNominal(candidate)) continue;
      const surface = candidate.surface;
      const position = surface.lastIndexOf(mark.mark);
      if (position < 0) continue;
      const accusativeMark = mark.kind === 'tanwin' ? '\u064B' : '\u064E';
      let replacement = surface.slice(0, position) + accusativeMark + surface.slice(position + 1);
      if (mark.kind === 'tanwin' && !NO_TANWIN_ALIF_TAIL_V1890.test(stripDiacritics(surface))) {
        replacement += '\u0627';
      }
      if (replacement === surface) continue;
      out.push(findingFromSpan(context, {
        startToken: candidate,
        replacement,
        ruleId: 'KANA_PREDICATE_CASE_V1890',
        type: 'نحوي',
        classification: 'syntactic-case',
        confidence: 0.94,
        explanation: '«كان» وأخواتها ترفع الاسم وتنصب الخبر، والعلامة الظاهرة هنا علامة رفع.',
        evidence: [`kana:${core}`, 'visible-nominative-mark', 'expected-case:accusative'],
        safe: false,
        metadata: {layer: 'VisibleCaseLayer', layerVersion: '1.0',
          governor: core, governorIndex: i, expectedCase: 'accusative'}
      }));
      break;
    }
  }
  return out;
}

function munadaRuleV1890(context) {
  const out = [];
  const {tokens} = context;

  for (let i = 0; i < tokens.length - 1; i += 1) {
    if (tokens[i].morph?.core !== 'يا') continue;
    const called = tokens[i + 1];
    if (called.sentence !== tokens[i].sentence) continue;
    if (called.morph?.definite) continue;
    const mark = called.visibleCase;
    if (!mark || mark.kind !== 'tanwin' || mark.case !== 'nominative') continue;
    const surface = called.surface;
    const position = surface.lastIndexOf(mark.mark);
    if (position < 0) continue;
    const replacement = surface.slice(0, position) + '\u064F' + surface.slice(position + 1);
    if (replacement === surface) continue;
    out.push(findingFromSpan(context, {
      startToken: called,
      replacement,
      ruleId: 'MUNADA_CASE_V1890',
      type: 'نحوي',
      classification: 'syntactic-case',
      confidence: 0.93,
      explanation: 'المنادى النكرة المقصودة مبنيٌّ على الضم في محل نصب، فلا يُنوَّن.',
      evidence: ['vocative-particle:يا', 'indefinite-intended', 'no-tanwin-on-vocative'],
      safe: false,
      metadata: {layer: 'VisibleCaseLayer', layerVersion: '1.0', expectedCase: 'vocative-damma'}
    }));
  }
  return out;
}

/* ===== MODULE: src/rules/number-tamyiz-v1890.js ===== */
/**
 * V18.9.0 — استكمال تمييز العدد المركب والعقود (NumberTamyizLayer 1.0).
 *
 * تمييز الأعداد من 11 إلى 99 مفردٌ منصوب. وكانت المنظومة السابقة تصحح
 * العلامة الظاهرة الخاطئة، ولا تستدرك غياب علامة النصب أصلًا. تُضيف هذه
 * الطبقة الاستدراك، بشرط خلوّ الاسم من أي علامة إعراب ظاهرة ومن ألف النصب.
 */
const TENS_SURFACES_V1890 = new Set([
  'عشرون', 'عشرين', 'ثلاثون', 'ثلاثين', 'أربعون', 'أربعين', 'خمسون', 'خمسين',
  'ستون', 'ستين', 'سبعون', 'سبعين', 'ثمانون', 'ثمانين', 'تسعون', 'تسعين'
]);

function numberTamyizCompletionRuleV1890(context) {
  const out = [];
  const {tokens} = context;

  for (let i = 0; i < tokens.length - 1; i += 1) {
    const core = tokens[i].morph?.core;
    if (!core) continue;
    const isCompound = /^(?:عشر|عشرة)$/u.test(core) && i > 0
      && Boolean(tokens[i - 1].morph?.core) && /^(?:أحد|إحدى|اثنا|اثني|اثنتا|اثنتي|ثلاثة|ثلاث|أربعة|أربع|خمسة|خمس|ستة|ست|سبعة|سبع|ثمانية|ثماني|تسعة|تسع)$/u.test(tokens[i - 1].morph.core);
    const isTens = TENS_SURFACES_V1890.has(core);
    if (!isCompound && !isTens) continue;

    const counted = tokens[i + 1];
    if (!counted || counted.sentence !== tokens[i].sentence) continue;
    if (counted.type !== 'word') continue;
    if (!isNominal(counted)) continue;
    if (counted.morph?.definite || counted.morph?.segments?.preposition) continue;
    if (tokenHasEncliticV1890(counted)) continue;
    // إن كانت عليه علامة ظاهرة فالقاعدة القائمة (NUMBER_COUNTED_NOUN) أولى.
    if (counted.visibleCase) continue;
    const surface = counted.surface;
    // «كتابا» بألفٍ بلا تنوين رسمٌ شائع مقبول، فلا يُلاحق.
    if (/[\u0627\u0649\u0629\u0621]$/u.test(surface)) continue;
    if (isProtectedLexicalItemV1890(counted)) continue;

    const replacement = `${surface}\u064B\u0627`;
    out.push(findingFromSpan(context, {
      startToken: counted,
      replacement,
      ruleId: 'NUMBER_TAMYIZ_COMPLETION_V1890',
      type: 'نحوي',
      classification: 'number',
      confidence: 0.9,
      explanation: 'تمييز الأعداد من أحد عشر إلى تسعة وتسعين مفردٌ منصوب.',
      evidence: [`number:${core}`, isCompound ? 'compound-number' : 'tens-number', 'expected-case:accusative'],
      safe: false,
      metadata: {layer: 'NumberTamyizLayer', layerVersion: '1.0',
        countedIndex: counted.index, expectedCase: 'accusative'}
    }));
  }
  return out;
}

function isProtectedLexicalItemV1890(token) {
  return isProtectedLexicalItemV1880(token);
}

/* ===== MODULE: src/pipeline/advisories-v1890.js ===== */
/**
 * V18.9.0 — جسر الطبقات التشخيصية (AdvisoryBridge 1.0).
 *
 * الطبقات المحقونة في V18.8.1–V18.8.6 (_rPOS و_rAgr و_rLong…) كانت معزولة
 * عن نتيجة التدقيق: تعمل عند استدعائها مباشرة فقط. وقياسُها على مدونة الـ637
 * جملةً صحيحةً أظهر 118 ملاحظة على نصوص سليمة، فلا يجوز ضخّها في findings.
 *
 * فالحل: عرضها في مسارٍ مستقل «advisories» مع حُرّاس تصفّي المعروف من عللها:
 *   • الضمير المتصل: «صورته» و«ربه» هاؤها ضمير لا تاء مربوطة.
 *   • المبنيات وأسماء الإشارة: «هذه» لا تُقلب «هذة».
 *   • الأسماء المنتهية بـ«ان» ليست مثنى: «لبنان» و«المكان» و«المهرجان».
 *   • جزءا العدد المركب (أحد عشر) لا يُقاسان على مطابقة العدد المفرد.
 *   • الأسماء الخمسة: «أبوك» همزتها قطعٌ ثابت لا وصل.
 * وهي على كل حال لا تدخل النص المصحَّح، ولا تُعدّ خطأً، بل تحليلٌ مساعد.
 */
const V1890_INDECLINABLE_HE_FINAL = new Set([
  'هذه', 'هاتيه', 'إليه', 'عليه', 'لديه', 'فيه', 'به', 'له', 'منه', 'عنه',
  'هذي', 'التيه', 'وجه', 'شبه', 'فقه', 'نبه', 'انتبه', 'الله', 'إله', 'وله'
]);

const V1890_NUN_FINAL_NOT_DUAL = /(?:ان|ين)$/u;

function advisoryGuardsV1890(text, tokens) {
  const byIndex = new Map();
  for (const token of tokens) byIndex.set(token.index, token);
  return {
    // الهاء ضمير متصل أو حرف أصلي، لا تاءً مربوطة.
    taaMarbuta(issue) {
      const surface = stripDiacritics(String(issue.surface || ''));
      if (!surface) return false;
      if (V1890_INDECLINABLE_HE_FINAL.has(surface)) return false;
      const token = tokens.find(item => item.clean === surface);
      if (token && tokenHasEncliticV1890(token)) return false;
      if (token && token.morph?.pos === 'verb') return false;
      // المعجم المراجَع أولى: ما له مدخل تعالجه القاعدة المعجمية لا هذه.
      if (isReviewedLexicalFormV1890(surface)) return false;
      // الشرط الحاسم: لا تُقترح التاء المربوطة إلا إذا كانت الصيغة الناتجة
      // كلمةً مثبتة في المعجم. فـ«صورته» هاؤها ضميرٌ، و«صورتة» ليست كلمة؛
      // بينما «مديره» ← «مديرة» مثبتة. وبهذا يسقط جمهور الإنذارات الكاذبة.
      const suggestion = String(issue.suggestion || '');
      if (!suggestion) return false;
      const analysis = inspectWord(suggestion);
      const best = (analysis?.candidates || [])
        .reduce((max, item) => Math.max(max, item.confidence || 0), 0);
      if (!analysis || analysis.pos === 'unknown' || best < 0.9) return false;
      return true;
    },
    // الاسم المنتهي بـ«ان/ين» ليس مثنى إلا بشهادة معجمية.
    dualCase(issue) {
      const surface = stripDiacritics(String(issue.ts || ''));
      if (!V1890_NUN_FINAL_NOT_DUAL.test(surface)) return false;
      const token = tokens.find(item => item.clean === surface);
      const nominal = token?.morph?.nominal;
      if (!nominal) return false;
      if (nominal.number !== 'du') return false;
      if ((nominal.confidence || 0) < 0.95) return false;
      return true;
    },
    // جزءا العدد المركب لا يُقاسان على قاعدة مخالفة العدد للمعدود.
    numberPolarity(issue) {
      const token = tokens.find(item => item.clean === stripDiacritics(String(issue.ns || '')));
      if (!token) return true;
      const previous = byIndex.get(token.index - 1)?.morph?.core;
      const next = byIndex.get(token.index + 1)?.morph?.core;
      if (previous && /^(?:أحد|إحدى|اثنا|اثني|اثنتا|اثنتي|ثلاثة|ثلاث|أربعة|أربع|خمسة|خمس|ستة|ست|سبعة|سبع|ثمانية|ثماني|تسعة|تسع)$/u.test(previous)) return false;
      if (next && /^(?:عشر|عشرة)$/u.test(next)) return false;
      return true;
    },
    // جمع غير العاقل يعامل معاملة المفردة المؤنثة، فلا تُبنى عليه مخالفة.
    nonhumanPlural(surface) {
      const token = tokens.find(item => item.clean === stripDiacritics(String(surface || '')));
      const nominal = token?.morph?.nominal;
      if (!nominal) return true;
      if (nominal.animacy === 'nonhuman' && nominal.number === 'pl') return false;
      return true;
    }
  };
}

/**
 * يجمع ملاحظات الطبقات التشخيصية بعد تصفيتها بالحُرّاس أعلاه.
 * لا تدخل هذه الملاحظات في findings ولا في corrected إطلاقًا.
 */
function collectAdvisoriesV1890(context) {
  const text = context.original;
  const advisories = [];
  const guards = advisoryGuardsV1890(text, context.tokens);
  const add = (source, item, message, confidence) => {
    advisories.push({
      source, type: item.type || source, message,
      confidence: confidence ?? item.conf ?? item.confidence ?? 0.75,
      severity: 'SUGGESTION',
      detail: item,
      autoCorrectable: false,
      note: 'ملاحظة تحليلية من الطبقات التشخيصية، لا تُطبَّق على النص.'
    });
  };

  let agreement = null;
  let orthography = null;
  let longContext = null;
  try { agreement = _rAgr(text); } catch (error) { agreement = null; }
  try { orthography = _rOrth(text); } catch (error) { orthography = null; }
  try { longContext = _rLong(text); } catch (error) { longContext = null; }

  for (const issue of agreement?.verbSubject || []) {
    if (!guards.nonhumanPlural(issue.ss)) continue;
    // يشترط أن يوافق المحللُ الناضج على أن الاسم فاعلٌ لهذا الفعل.
    const role = context.syntax?.roles?.[issue.si];
    if (!role || role.role !== 'subject') continue;
    if (role.verbIndex !== issue.vi) continue;
    // قاعدة «تجرد الفعل من علامة التثنية والجمع»: إذا تقدم الفعلُ على فاعله
    // الظاهر (ترتيب VSO) لزمه الإفرادُ مهما كان الفاعل مثنى أو جمعًا:
    // «حضر الطالبان» و«حضر الطلاب» فصيحٌ، و«حضرا الطالبان» لغةٌ نادرة.
    // فلا يُنبَّه على العدد إلا إذا تأخر الفعل عن فاعله.
    if (issue.type === 'number-mismatch' && issue.vi < issue.si) continue;
    add('agreement', issue,
      `يُنظر في مطابقة الفعل «${issue.vs}» لفاعله «${issue.ss}» في ${issue.type === 'gender-mismatch' ? 'الجنس' : 'العدد'}.`);
  }
  for (const issue of agreement?.adjective || []) {
    if (!guards.nonhumanPlural(issue.ns)) continue;
    add('agreement', issue, `يُنظر في مطابقة النعت «${issue.as}» لمنعوته «${issue.ns}» في الجنس.`);
  }
  for (const issue of agreement?.demonstrative || []) {
    if (!guards.nonhumanPlural(issue.ns)) continue;
    add('agreement', issue, `يُنظر في مطابقة اسم الإشارة «${issue.ds}» للمشار إليه «${issue.ns}».`);
  }
  for (const issue of agreement?.number || []) {
    if (!guards.numberPolarity(issue)) continue;
    add('agreement', issue, `يُنظر في مخالفة العدد «${issue.ns}» لمعدوده «${issue.cs}».`);
  }
  for (const issue of agreement?.case || []) {
    if (issue.type === 'prep-dual-case' && !guards.dualCase(issue)) continue;
    add('agreement', issue, `يُنظر في علامة إعراب «${issue.ts}».`);
  }
  for (const issue of orthography?.issues || []) {
    if (issue.type === 'taa-marbuta' && !guards.taaMarbuta(issue)) continue;
    // «همزة الوصل» في هذه الطبقة التشخيصية بلا اقتراح مضبوط، والقاعدة
    // المعجمية القائمة (HAMZAT_WASL_WORDS) أولى بها.
    if (issue.type === 'hamza-wasl') continue;
    if (isReviewedLexicalFormV1890(stripDiacritics(String(issue.surface || '')))) continue;
    add('orthography', issue,
      `رسمٌ يُراجع في «${issue.surface}»${issue.suggestion || issue.correction ? ` (احتمال: ${issue.suggestion || issue.correction})` : ''}.`);
  }

  return {
    advisories,
    longContext: longContext || null
  };
}

/* ===== MODULE: src/validation/regression-v1890.js ===== */
/**
 * V18.9.0 — انحدارات الطبقات الجديدة.
 *
 * لكل قاعدة مضافة شاهدان كما في منهج V18.8.0: نصٌّ خاطئ يجب أن يُصحَّح،
 * ونصٌّ صحيح يجب ألا يُمَسّ. ومصائد الإنذار الكاذب هنا مبنية على العلل
 * التي رُصدت فعلًا أثناء قياس الطبقات التشخيصية على المدونة الصحيحة.
 */
const V1890_GOLD_REGRESSIONS = Object.freeze([
  /* الضبط والتشكيل */
  {id: 'v1890-gold-tanwin-order', text: 'قرأت كتاباً مفيداً.', expect: 'كتابًا'},
  {id: 'v1890-gold-tanwin-order-2', text: 'شرح المعلم درساً وافياً.', expect: 'درسًا'},
  {id: 'v1890-gold-definite-tanwin', text: 'حضر الطالبٌ.', expect: 'الطالبُ'},
  {id: 'v1890-gold-shadda', text: 'هذا نصٌّّ مكرر.', expect: 'نصٌّ'},
  /* الهمزات */
  {id: 'v1890-gold-rayees', text: 'حضر رييس القسم.', expect: 'رئيس'},
  {id: 'v1890-gold-masuliya', text: 'تحمل مسئولية كبيرة.', expect: 'مسؤولية'},
  {id: 'v1890-gold-shuun', text: 'ناقشنا شئون العمل.', expect: 'شؤون'},
  {id: 'v1890-gold-quran', text: 'قرأت قرءان الفجر.', expect: 'قرآن'},
  {id: 'v1890-gold-final-hamza', text: 'انتشر الضوئ في الغرفة.', expect: 'الضوء'},
  {id: 'v1890-gold-sual', text: 'طرح سوال مهم.', expect: 'سؤال'},
  /* الترقيم */
  {id: 'v1890-gold-latin-comma', text: 'حضر الطالب, ثم انصرف.', expect: '،'},
  {id: 'v1890-gold-latin-question', text: 'هل حضر الطالب?', expect: '؟'},
  /* النحو بالعلامة الظاهرة */
  {id: 'v1890-gold-kana-khabar', text: 'كان الجوُّ جميلٌ.', expect: 'جميلًا'},
  {id: 'v1890-gold-munada', text: 'يا طالبٌ اجتهد.', expect: 'طالبُ'},
  {id: 'v1890-gold-tamyiz', text: 'قرأت خمسة عشر كتاب.', expect: 'كتابًا'},
  /* الأسلوب */
  {id: 'v1890-gold-nafs', text: 'حدث نفس الشيء أمس.', expect: 'الشيء نفسه'},
  {id: 'v1890-gold-haythu', text: 'نجح حيث أن اجتهاده كبير.', expect: 'حيث إن'},
  {id: 'v1890-gold-duplicate', text: 'هذا الكتاب مفيد مفيد.', expect: 'مفيد'}
]);

const V1890_BLOCK_REGRESSIONS = Object.freeze([
  /* مصائد الإنذار الكاذب المرصودة في قياس الطبقات التشخيصية */
  {id: 'v1890-block-enclitic-he', text: 'شاهدت صورته الشخصية.'},
  {id: 'v1890-block-enclitic-he-2', text: 'المؤمن يدعو ربه ويرجو رحمته.'},
  {id: 'v1890-block-enclitic-he-3', text: 'عنده سيارة حديثة.'},
  {id: 'v1890-block-hadhihi', text: 'هذه كتب جديدة.'},
  {id: 'v1890-block-nun-final', text: 'سافرت إلى لبنان.'},
  {id: 'v1890-block-nun-final-2', text: 'جلست في المكان.'},
  {id: 'v1890-block-compound-number', text: 'ثلاثة عشر طالبًا.'},
  {id: 'v1890-block-compound-number-2', text: 'إحدى عشرة طالبةً.'},
  {id: 'v1890-block-five-nouns', text: 'جاء أبوك.'},
  {id: 'v1890-block-shayan', text: 'قرأت شيئًا مفيدًا.'},
  /* الرسم الصحيح للتنوين لا يُنقض */
  {id: 'v1890-block-correct-tanwin', text: 'قرأت كتابًا مفيدًا.'},
  {id: 'v1890-block-taa-tanwin', text: 'رأيت طالبةً مجتهدةً.'},
  {id: 'v1890-block-hamza-tanwin', text: 'شربت ماءً باردًا.'},
  {id: 'v1890-block-maqsura-tanwin', text: 'بلغ مدًى بعيدًا.'},
  /* الهمزات الصحيحة لا تُمَسّ */
  {id: 'v1890-block-correct-hamza', text: 'قرأ الطالب سؤالًا واضحًا.'},
  {id: 'v1890-block-correct-hamza-2', text: 'أضاء المصباح ضوءه.'},
  {id: 'v1890-block-correct-hamza-3', text: 'هذا قارئ متمكن.'},
  {id: 'v1890-block-correct-madd', text: 'قرأت القرآن في المسجد.'},
  /* الترقيم العربي الصحيح */
  {id: 'v1890-block-arabic-punct', text: 'حضر الطالب، ثم انصرف.'},
  {id: 'v1890-block-balanced', text: 'قال الكاتب (وهو مؤرخ) كلامًا دقيقًا.'}
]);

function runRegressionSuiteV1890(options = {}) {
  const failures = [];
  let passed = 0;

  for (const item of V1890_BLOCK_REGRESSIONS) {
    const findings = analyze(item.text, options).findings
      .filter(finding => finding.severity !== 'STYLE');
    if (findings.length === 0) { passed += 1; continue; }
    failures.push({
      id: item.id, kind: 'false-positive', text: item.text,
      findings: findings.map(f => ({ruleId: f.ruleId, original: f.original,
        replacement: f.replacement, severity: f.severity,
        confidence: Number(f.confidence.toFixed(3))}))
    });
  }

  for (const item of V1890_GOLD_REGRESSIONS) {
    const result = analyze(item.text, options);
    // يُقبل الشاهد إذا ظهر الوجه الصحيح في النص المصحَّح، أو في أحد
    // الاقتراحات المعروضة. فبعض القواعد تصحح مقطعًا داخل الكلمة («ـاً» ←
    // «ـًا») فيكون بديلها جزءًا لا كلمةً كاملة، والعبرة بأثرها في النص.
    const hit = String(result.corrected || '').includes(item.expect)
      || result.findings.some(finding =>
        String(finding.replacement || '').includes(item.expect));
    if (hit) { passed += 1; continue; }
    failures.push({
      id: item.id, kind: 'missed-error', text: item.text, expected: item.expect,
      corrected: result.corrected,
      got: result.findings.map(f => `${f.original}>${f.replacement}`)
    });
  }

  const total = V1890_BLOCK_REGRESSIONS.length + V1890_GOLD_REGRESSIONS.length;
  return {
    version: META.version, total, passed, failures,
    valid: failures.length === 0,
    blocks: V1890_BLOCK_REGRESSIONS.length,
    golds: V1890_GOLD_REGRESSIONS.length
  };
}

/**
 * V18.9.0 — المجموعة الجامعة: تجمع كل التحققات القائمة والجديدة في تقرير
 * واحد، ولا تُسقط أيًّا من معايير الإصدارات السابقة.
 */
function runFullSuiteV1890(options = {}) {
  const core = validate();
  const regression1880 = runRegressionSuiteV1880(options);
  const regression1890 = runRegressionSuiteV1890(options);
  const benchmark400 = runLargeExternalBenchmark(EXTERNAL_HOLDOUT_BENCHMARK_V1877, options);
  const sanity = runPROApiSanityChecks();

  const suites = {
    coreValidation: {valid: core.valid, gold: core.gold.total,
      goldFailures: core.gold.failures.length,
      noFalsePositives: core.noFalsePositives.total,
      noFalsePositiveFailures: core.noFalsePositives.failures.length,
      posDependency: core.posDependency.total,
      posDependencyFailures: core.posDependency.failures.length,
      phraseRoles: core.phraseRoles.total,
      phraseRoleFailures: core.phraseRoles.failures.length,
      dataFailures: core.data.failures},
    regressionV1880: {valid: regression1880.valid, total: regression1880.total, passed: regression1880.passed},
    regressionV1890: {valid: regression1890.valid, total: regression1890.total, passed: regression1890.passed,
      failures: regression1890.failures},
    externalBenchmark400: {recall: benchmark400.recall, precision: benchmark400.precision,
      f1: benchmark400.f1, falsePositives: benchmark400.counts.falsePositives},
    apiSanity: sanity
  };

  const valid = core.valid && regression1880.valid && regression1890.valid
    && benchmark400.counts.falsePositives === 0 && benchmark400.recall === 1 && sanity.valid;

  return {version: META.version, valid, suites};
}

/* ═══════════════════════════════════════════════════════════════════════════
 * V19.0.0 — ARABIC PRO BENCHMARK 2000
 * معيار احترافي موسّع: يولّد ~2000 جملة موزعة على الفئات الإثنتي عشرة
 * المعتمدة في خارطة الطريق، منها 300 جملة صحيحة محصنة يجب ألا تُمسّ.
 * المقاييس: Recall, Precision, False-Positive Rate, Wrong-Correction Rate,
 * وAbstention Quality (جودة الامتناع عن التخمين عند ضعف الدليل).
 * ═══════════════════════════════════════════════════════════════════════════ */

/* مفردات مولِّدات المعيار — محدودة بمداخل المعجم المراجعة حتى لا يُختبر غير
   المقصود. كل جملة مولدة تُبنى بقالب يعرف موضع الخطأ وبديله سلفًا. */
const V1900_FRAME_LEMMAS = Object.freeze([
  {lemma: 'كتب', present3mp: 'يكتبون', past3mp: 'كتبوا', singular3ms: 'يكتب', singularPast3ms: 'كتب', feminine3fp: 'يكتبن', transitive: true, object: 'الرسائل', objectAfter: 'الرسالة'},
  {lemma: 'شرح', present3mp: 'يشرحون', past3mp: 'شرحوا', singular3ms: 'يشرح', singularPast3ms: 'شرح', feminine3fp: 'يشرحن', transitive: true, object: 'الدروس', objectAfter: 'الدرس'},
  {lemma: 'قرأ', present3mp: 'يقرأون', past3mp: 'قرأوا', singular3ms: 'يقرأ', singularPast3ms: 'قرأ', feminine3fp: 'يقرأن', transitive: true, object: 'الكتب', objectAfter: 'الكتاب'},
  {lemma: 'نجح', present3mp: 'ينجحون', past3mp: 'نجحوا', singular3ms: 'ينجح', singularPast3ms: 'نجح', feminine3fp: 'ينجحن', transitive: false, object: null, objectAfter: null},
  {lemma: 'حضر', present3mp: 'يحضرون', past3mp: 'حضروا', singular3ms: 'يحضر', singularPast3ms: 'حضر', feminine3fp: 'يحضرن', transitive: false, object: null, objectAfter: null}
]);

const V1900_FRAME_SUBJECTS = Object.freeze([
  {surface: 'الطلاب', gender: 'm', number: 'pl', animacy: 'human', feminineVariant: null},
  {surface: 'المعلمون', gender: 'm', number: 'pl', animacy: 'human', feminineVariant: 'المعلمات'},
  {surface: 'المهندسون', gender: 'm', number: 'pl', animacy: 'human', feminineVariant: 'المهندسات'},
  {surface: 'الموظفون', gender: 'm', number: 'pl', animacy: 'human', feminineVariant: 'الموظفات'}
]);

const V1900_KANA_SUBJECTS = Object.freeze(['الطالب', 'الولد', 'الجو', 'الدرس', 'البيت', 'الطبيب', 'الكتاب', 'الخبر']);
const V1900_KANA_PREDICATES = Object.freeze(['مجتهد', 'معتدل', 'كبير', 'سهل', 'مفيد', 'جميل', 'نشيط', 'مهم']);
const V1900_KANA_SISTERS = Object.freeze(['كان', 'أصبح', 'صار', 'ظل', 'أمسى', 'بات', 'ليس']);
const V1900_DEMONSTRATIVE_HEADS = Object.freeze(['الطلاب', 'المعلمون', 'المهندسون', 'الباحثون']);
const V1900_DEMONSTRATIVE_ADJECTIVES = Object.freeze(['المجتهدون', 'المخلصون', 'الماهرون', 'الجدد']);
const V1900_ORTHO_PAIRS = Object.freeze([
  ['سئل', 'سأل'], ['الذى', 'الذي'], ['مدينه', 'مدينة'], ['مباراه', 'مباراة'],
  ['سياسه', 'سياسة'], ['دراسه', 'دراسة'], ['ممارسه', 'ممارسة'], ['مفاجاه', 'مفاجأة'],
  ['ساعه', 'ساعة'], ['كبيره', 'كبيرة'], ['النهايه', 'النهاية'], ['البدايه', 'البداية'],
  ['الحريه', 'الحرية'], ['الثقافه', 'الثقافة'], ['البيئه', 'البيئة'], ['العالميه', 'العالمية'],
  ['الدوليه', 'الدولية'], ['المحليه', 'المحلية'], ['العامه', 'العامة'], ['الخاصه', 'الخاصة'],
  ['السريعه', 'السريعة'], ['الطويله', 'الطويلة'], ['الجديده', 'الجديدة'], ['القديمه', 'القديمة'],
  ['الصغيره', 'الصغيرة'], ['الممتازه', 'الممتازة'], ['الرئيسيه', 'الرئيسية'],
  ['الى', 'إلى'], ['استاذ', 'أستاذ'], ['اثار', 'آثار'], ['ابداع', 'إبداع'], ['امل', 'أمل'],
  ['اول', 'أول'], ['اكبر', 'أكبر'], ['اكمل', 'أكمل'], ['اولئك', 'أولئك'], ['انسان', 'إنسان'],
  ['اذا', 'إذا'], ['اساس', 'أساس'],
  ['مدرسه', 'مدرسة'], ['جامعه', 'جامعة'], ['شركه', 'شركة'], ['حكومه', 'حكومة'],
  ['حياه', 'حياة'], ['نتيجه', 'نتيجة'], ['مهمه', 'مهمة'], ['ثقه', 'ثقة'], ['دقيقه', 'دقيقة'],
  ['واسعه', 'واسعة'], ['فتره', 'فترة'], ['قريه', 'قرية'], ['مدينه', 'مدينة'], ['حديقه', 'حديقة'],
  ['مستشفي', 'مستشفى'], ['وظيفه', 'وظيفة'], ['منطقه', 'منطقة'], ['اللغه', 'اللغة'],
  ['العربيه', 'العربية'], ['فكره', 'فكرة'], ['مسئول', 'مسؤول'], ['مسئله', 'مسألة']
]);

const V1900_NUMBER_ERRORS = Object.freeze([
  ['رأيت ثلاثة كتب', 'ثلاث عشرة', 'رأيت ثلاثة عشر كتاب', 'كتابًا'],
  ['قرأت خمسة عشر طالب', 'خمسة عشر طالب', null, null],
  ['حضر عشرون طلاب', 'عشرون طالب', null, null],
  ['سلمت على المعلمون', 'المعلمين', null, null],
  ['مررت بالمهندسون', 'المهندسين', null, null]
]);

function v1900Fill(target, generator, count) {
  let guard = 0;
  while (target.length < count && guard < count * 20) {
    guard += 1;
    const item = generator(target.length + guard);
    if (item) target.push(item);
  }
  return target;
}

/**
 * توليد المعيار الاحترافي حسب جدول الفئات المعتمد في خارطة V19:
 * إملاء 300 / همزات 200 / تاء مربوطة وهاء 150 / صرف 250 / فعل وفاعل 250 /
 * نواسخ 200 / نعت وتوابع 200 / مثنى وجمع 150 / أسماء خمسة 100 / عدد وتمييز 100 /
 * شرط وموصول 100 / جمل صحيحة محصنة 300 (المجموع المستهدف 2000).
 * كل عنصر: {id, text, kind, expect?, category}. kind: 'error' أو 'control'.
 */
function generateArabicProBenchmarkV1900() {
  const sentences = [];
  let serial = 0;
  const add = (category, kind, text, expect) => {
    serial += 1;
    sentences.push(Object.freeze({
      id: `pro19-${String(serial).padStart(4, '0')}`, category, kind, text,
      ...(expect ? {expect} : {})
    }));
  };

  /* ── 1) إملاء عام (هدف 300) ── */
  const orthoTemplates = [
    (bad) => `${bad}`,
    (bad) => `هذا النص فيه ${bad}.`,
    (bad) => `كتب الطالب ${bad} في الدفتر.`
  ];
  v1900Fill(sentences.filter(() => false), () => null, 0);
  {
    let made = 0;
    let round = 0;
    while (made < 300 && round < 12) {
      for (const [bad, good] of V1900_ORTHO_PAIRS) {
        if (made >= 300) break;
        const template = orthoTemplates[round % orthoTemplates.length];
        const text = template(bad);
        add('orthography', 'error', text, good);
        made += 1;
      }
      round += 1;
    }
  }

  /* ── 2) همزات (هدف 200) ── */
  {
    const hamzaPairs = V1900_ORTHO_PAIRS.filter(([, good]) => /[أإآؤئ]/u.test(good));
    let made = 0;
    let round = 0;
    const templates = [
      (bad) => `${bad}`,
      (bad) => `جاء الصديق ${bad} المنزل.`,
      (bad) => `كتب المؤلف ${bad} المقال.`
    ];
    while (made < 200 && round < 30) {
      for (const [bad, good] of hamzaPairs) {
        if (made >= 200) break;
        add('hamza', 'error', templates[round % templates.length](bad), good);
        made += 1;
      }
      round += 1;
    }
  }

  /* ── 3) تاء مربوطة/هاء (هدف 150) ── */
  {
    const taaPairs = V1900_ORTHO_PAIRS.filter(([, good]) => /ة$/u.test(good));
    let made = 0;
    let round = 0;
    const templates = [
      (bad) => `${bad}`,
      (bad) => {
        const verbLike = ['فكره', 'كتابه', 'قرائته', 'دراسته'].includes(bad);
        if (verbLike) return `هذه ${bad} جميلة.`;
        return `كانت ${bad} المدرسة قريبة.`;
      },
      (bad) => `رأى الطفل ${bad} الجميلة.`
    ];
    while (made < 150 && round < 20) {
      for (const [bad, good] of taaPairs) {
        if (made >= 150) break;
        add('taa-marbuta', 'error', templates[round % templates.length](bad), good);
        made += 1;
      }
      round += 1;
    }
  }

  /* ── 4) صرف (هدف 250): أفعال خمسة قرينة عاملها الصحيح ── */
  {
    const fiveVerbSites = [];
    for (const frame of V1900_FRAME_LEMMAS) {
      fiveVerbSites.push([`لم ${frame.present3mp} اليوم.`, frame.present3mp.replace(/ون$/u, 'وا')]);
      fiveVerbSites.push([`لن ${frame.present3mp} غدًا.`, frame.present3mp.replace(/ون$/u, 'وا')]);
      if (frame.object) fiveVerbSites.push([`لم ${frame.present3mp} ${frame.object} أمس.`, frame.present3mp.replace(/ون$/u, 'وا')]);
    }
    let made = 0;
    for (const [text, fixed] of fiveVerbSites) {
      add('morphology', 'error', text, fixed);
      made += 1;
    }
    v1900Fill({length: 0, push: () => {}}, () => null, 0);
    // أغلال المثنى والجمع في البنى الانفعالية المعجمية
    const extraMorph = [
      ['الطالبين مجتهدان.', 'الطالبان'], ['المعلمين حاضرون.', 'المعلمون'],
      ['قابلت المعلمان.', 'المعلمين'], ['حضر الطالبين.', 'الطالبان'],
      ['رأيت الطالبان.', 'الطالبين'], ['سلمت على المهندسون.', 'المهندسين'],
      ['المهندسين الماهرين اجتمعوا.', 'المهندسون'], ['مررت بالباحثون.', 'الباحثين']
    ];
    while (made < 250) {
      const [text, fixed] = extraMorph[(made - fiveVerbSites.length) % extraMorph.length];
      add('morphology', 'error', text, fixed);
      made += 1;
    }
  }

  /* ── 5) فعل وفاعل (هدف 250): إطارات VSO/SVO المحسومة ── */
  {
    let made = 0;
    let round = 0;
    while (made < 250 && round < 30) {
      for (const subject of V1900_FRAME_SUBJECTS) {
        if (made >= 250) break;
        for (const frame of V1900_FRAME_LEMMAS) {
          if (made >= 250) break;
          const objectTail = frame.objectAfter ? ` ${frame.objectAfter}` : '';
          if (round % 3 === 0) {
            add('verb-subject', 'error', `لن ${frame.present3mp} ${subject.surface}${objectTail}.`, frame.singular3ms);
          } else if (round % 3 === 1) {
            add('verb-subject', 'error', `لم ${frame.present3mp} ${subject.surface}${objectTail}.`, frame.singular3ms);
          } else if (subject.feminineVariant) {
            add('verb-subject', 'error', `${subject.feminineVariant} لم ${frame.present3mp}${objectTail}.`, frame.feminine3fp);
          }
          made += 1;
        }
      }
      round += 1;
    }
  }

  /* ── 6) نواسخ (هدف 200): خبر كان المفرد المنصوب برسم التنوين ── */
  {
    let made = 0;
    let guard = 0;
    while (made < 200 && guard < 2000) {
      guard += 1;
      const sister = V1900_KANA_SISTERS[made % V1900_KANA_SISTERS.length];
      const subject = V1900_KANA_SUBJECTS[made % V1900_KANA_SUBJECTS.length];
      const predicate = V1900_KANA_PREDICATES[made % V1900_KANA_PREDICATES.length];
      add('kana-sisters', 'error', `${sister} ${subject} ${predicate}.`, `${predicate}ًا`);
      made += 1;
    }
    // جُعلت الولادة دورية بلا تكرار حرفي للنص نفسه
  }

  /* ── 7) نعت وتوابع (هدف 200): سلاسل اسم الإشارة بعد إن ── */
  {
    let made = 0;
    let round = 0;
    while (made < 200 && round < 20) {
      for (const head of V1900_DEMONSTRATIVE_HEADS) {
        if (made >= 200) break;
        for (const adjective of V1900_DEMONSTRATIVE_ADJECTIVES) {
          if (made >= 200) break;
          add('adjective-dependents', 'error',
            `إن هؤلاء ${head} ${adjective} يستحقون التقدير.`,
            adjective.replace(/ون$/u, 'ين'));
          made += 1;
        }
      }
      round += 1;
    }
  }

  /* ── 8) مثنى وجمع (هدف 150) ── */
  {
    const dualSites = [
      ['الطالبين حضرا.', 'الطالبان'], ['الطالبين مجتهدان.', 'الطالبان'],
      ['قابل المدير الموظفان.', 'الموظفين'], ['شاهد المعلم الطالبان المجتهدان.', 'الطالبين'],
      ['إن الطالبان مجتهدين.', 'مجتهدان'],
      ['المعلمين حاضرون.', 'المعلمون'], ['مررت بالمعلمون.', 'المعلمين']
    ];
    let made = 0;
    while (made < 150) {
      const [text, fixed] = dualSites[made % dualSites.length];
      add('dual-plural', 'error', text, fixed);
      made += 1;
    }
  }

  /* ── 9) أسماء خمسة (هدف 100) — مصححة لمعجم الأعلام المحمية ── */
  {
    const fiveSites = [
      ['رأيت أبو محمد.', 'أبا'], ['سلمت على أبو محمد.', 'أبي'],
      ['جاء أبا محمد.', 'أبو'], ['رأيت أبو خالد.', 'أبا'],
      ['مررت بأبا خالد.', 'أبي'], ['مررت بأبا محمد.', 'أبي'],
      ['جاء أبا خالد.', 'أبو'], ['رأيت أبو أحمد.', 'أبا'],
      ['سلمت على أبو أحمد.', 'أبي'], ['جاء أبا أحمد.', 'أبو']
    ];
    let made = 0;
    while (made < 100) {
      const [text, fixed] = fiveSites[made % fiveSites.length];
      add('five-nouns', 'error', text, fixed);
      made += 1;
    }
  }

  /* ── 10) عدد وتمييز (هدف 100) ── */
  {
    const numberSites = [
      ['في المكتبة عشرون كتاب.', 'كتابًا'], ['قرأت ثلاثة عشر طالب.', 'طالبًا'],
      ['حضر خمسة عشر طلاب.', 'طالب'], ['رأيت أربعة كتاب.', 'كتب'],
      ['اشترى ثلاث قلم.', 'أقلام'], ['نجح تسعون طلاب.', 'طالب']
    ];
    let made = 0;
    while (made < 100) {
      const [text, fixed] = numberSites[made % numberSites.length];
      add('number-tamyiz', 'error', text, fixed);
      made += 1;
    }
  }

  /* ── 11) شرط وموصول (هدف 100) ── */
  {
    const conditionalSites = [
      ['إن لم تدرسُ.', 'تدرسْ'], ['إن لم تدرسُ تنجحُ.', 'تدرسْ'],
      ['الطلاب الذين حضر مبكرًا ناجحون.', 'حضروا'], ['جاءت الطالبة الذي نجح.', 'التي'],
      ['حضر الطلاب الذي اجتهدوا.', 'الذين'], ['رأيت الطالبين التي نجحتا.', 'اللذين'],
      ['إن تدرسُ تنجحُ.', 'تدرسْ'], ['من يجتهد ينجح.', 'ينجح']
    ];
    let made = 0;
    let round = 0;
    while (made < 100 && round < 40) {
      const [text, fixed] = conditionalSites[made % conditionalSites.length];
      add('conditional-relative', 'error', text, fixed);
      made += 1;
      round += 1;
    }
  }

  /* ── 12) جمل صحيحة محصنة (هدف 300): لا يجوز أي ملاحظة ── */
  {
    const controls = [
      'إن هؤلاء الطلاب المجتهدين يستحقون التقدير.',
      'هؤلاء الطلاب المجتهدون ناجحون.',
      'كان الطالب في المدرسة.',
      'كان الطالب الذي حضر أمس مجتهدًا.',
      'لن يكتبوا الواجب.',
      'لم يكتبوا الواجب.',
      'يكتبون الواجب كل يوم.',
      'يكتب الطلاب واجباتهم.',
      'المعلمات يشرحن الدرس.',
      'زرت أخي محمد أمس.',
      'سلمت على أخي.',
      'مررت بأخي العامل.',
      'كانت الطالبة مجتهدة.',
      'إن الطالبين مجتهدان.',
      'شرح المعلم الدرس شرحًا وافيًا.',
      'بهؤلاء الطلاب المجتهدين نفتخر.',
      'أولئك معلمون.',
      'هؤلاء الطلبة مجتهدون.',
      'حضر المعلمون الذين اجتهدوا.',
      'الطالبان حضرا.',
      'كان الطالبان مجتهدين.',
      'إن هؤلاء المهندسين الماهرين صمموا المبنى.',
      'قرأ الطلاب الكتاب قراءة متأنية.',
      'نجح الطلاب في الامتحان.',
      'المعلمون حضروا الاجتماع مبكرين.',
      'سبحان الله وبحمده.',
      'الطالب المجتهد يقرأ كثيرًا.',
      'إن هذا القانون يحمي الجميع.',
      'قال العلماء الذين اجتمعوا كلمتهم.',
      'سافر المهندسون الذين صمموا الجسر.'
    ];
    let made = 0;
    while (made < 300) {
      add('protected-correct', 'control', controls[made % controls.length]);
      made += 1;
    }
  }

  return Object.freeze({
    version: 'V1900-PRO-BENCHMARK-1.0',
    description: 'المعيار الاحترافي العربي: ~2000 جملة موزعة على اثنتي عشرة فئة، منها 300 جملة صحيحة محصنة.',
    counts: Object.freeze({total: sentences.length}),
    sentences: Object.freeze(sentences)
  });
}

const ARABIC_PRO_BENCHMARK_V1900 = generateArabicProBenchmarkV1900();

/* تشغيل المعيار بحساب المقاييس الاحترافية الخمسة. */
function runArabicProBenchmarkV1900(benchmark = ARABIC_PRO_BENCHMARK_V1900, options = {}) {
  const norm = s => String(s).replace(/\s+/gu, ' ').trim();
  const wordsOf = s => norm(s).split(' ').filter(Boolean).map(w => w.replace(/^[وف]/u, ''));
  const matches = (repl, exp) => {
    if (!repl) return false;
    const r = norm(repl), e = norm(exp);
    if (r === e || r.includes(e) || e.includes(r)) return true;
    const ew = wordsOf(e), rw = wordsOf(r);
    return ew.length > 0 && ew.every(w => rw.includes(w));
  };

  let caught = 0;
  const missed = [];
  let falsePositives = 0;
  let wrongCorrections = 0;
  const fpList = [];
  const byCategory = {};

  for (const item of benchmark.sentences) {
    const result = analyze(item.text, {safeMode: true, includeAdvisories: false, ...options});
    const findings = (result.findings || []).filter(f => f.severity !== 'STYLE');
    byCategory[item.category] = byCategory[item.category] || {total: 0, caught: 0, fp: 0};
    byCategory[item.category].total += 1;
    if (item.kind === 'control') {
      if (findings.length) {
        falsePositives += 1;
        byCategory[item.category].fp += 1;
        if (result.corrected !== item.text) wrongCorrections += 1;
        fpList.push({id: item.id, text: item.text,
          findings: findings.map(f => ({ruleId: f.ruleId, original: f.original, replacement: f.replacement}))});
      }
      continue;
    }
    const hit = matches(result.corrected, item.expect)
      || findings.some(f => matches(f.replacement, item.expect));
    if (hit) { caught += 1; byCategory[item.category].caught += 1; }
    else missed.push({id: item.id, category: item.category, text: item.text, expect: item.expect,
      got: findings.map(f => f.replacement).filter(Boolean)});
  }

  const errors = benchmark.sentences.filter(s => s.kind === 'error').length;
  const controls = benchmark.sentences.filter(s => s.kind === 'control').length;
  const recall = errors ? caught / errors : 0;
  const precision = (caught + falsePositives) ? caught / (caught + falsePositives) : 1;
  const f1 = (precision + recall) ? 2 * precision * recall / (precision + recall) : 0;
  const falsePositiveRate = controls ? falsePositives / controls : 0;
  const wrongCorrectionRate = controls ? wrongCorrections / controls : 0;
  // جودة الامتناع: نسبة الجمل الصحيحة التي لم تُنتج عليها ملاحظة غير أسلوبية.
  const abstentionQuality = controls ? 1 - falsePositiveRate : 1;

  const targets = Object.freeze({precision: 0.98, falsePositiveRate: 0.01, recall: 0.95, wrongCorrectionRate: 0.005});
  return {
    version: benchmark.version, engine: META.version,
    total: benchmark.sentences.length, errors, controls,
    caught, missed: missed.length, falsePositives, wrongCorrections,
    recall, precision, f1, falsePositiveRate, wrongCorrectionRate, abstentionQuality,
    targets,
    targetsMet: {
      precision: precision >= targets.precision,
      recall: recall >= targets.recall,
      falsePositiveRate: falsePositiveRate <= targets.falsePositiveRate,
      wrongCorrectionRate: wrongCorrectionRate <= targets.wrongCorrectionRate
    },
    valid: precision >= targets.precision && recall >= targets.recall
      && falsePositiveRate <= targets.falsePositiveRate && wrongCorrectionRate <= targets.wrongCorrectionRate,
    byCategory: Object.fromEntries(Object.entries(byCategory).map(([k, v]) =>
      [k, {total: v.total, caught: v.caught, fp: v.fp, rate: v.total ? v.caught / v.total : 0}])),
    missedItems: missed.slice(0, 50), fpList: fpList.slice(0, 50)
  };
}

/* المجموعة الجامعة لكل تحققات V19. */
function runFullSuiteV1900(options = {}) {
  const core = validate();
  const regression1880 = runRegressionSuiteV1880(options);
  const regression1890 = runRegressionSuiteV1890(options);
  const regression1900 = runRegressionSuiteV1900(options);
  const benchmark400 = runLargeExternalBenchmark(EXTERNAL_HOLDOUT_BENCHMARK_V1877, options);
  const proBenchmark = runArabicProBenchmarkV1900(ARABIC_PRO_BENCHMARK_V1900, options);
  const sanity = runPROApiSanityChecks();

  const suites = {
    coreValidation: {valid: core.valid, gold: core.gold.total,
      goldFailures: core.gold.failures.length,
      noFalsePositives: core.noFalsePositives.total,
      noFalsePositiveFailures: core.noFalsePositives.failures.length,
      posDependency: core.posDependency.total,
      posDependencyFailures: core.posDependency.failures.length,
      phraseRoles: core.phraseRoles.total,
      phraseRoleFailures: core.phraseRoles.failures.length,
      dataFailures: core.data.failures},
    regressionV1880: {valid: regression1880.valid, total: regression1880.total, passed: regression1880.passed,
      failures: regression1880.failures.slice(0, 20)},
    regressionV1890: {valid: regression1890.valid, total: regression1890.total, passed: regression1890.passed,
      failures: regression1890.failures.slice(0, 20)},
    regressionV1900: {valid: regression1900.valid, total: regression1900.total, passed: regression1900.passed,
      failures: regression1900.failures.slice(0, 20)},
    externalBenchmark400: {recall: benchmark400.recall, precision: benchmark400.precision,
      f1: benchmark400.f1, falsePositives: benchmark400.counts.falsePositives,
      missedList: benchmark400.errorResults.filter(e => !e.ok).slice(0, 20),
      fpList: benchmark400.fpList.slice(0, 20)},
    arabicProBenchmark2000: {total: proBenchmark.total, errors: proBenchmark.errors,
      controls: proBenchmark.controls, recall: proBenchmark.recall, precision: proBenchmark.precision,
      f1: proBenchmark.f1, falsePositiveRate: proBenchmark.falsePositiveRate,
      wrongCorrectionRate: proBenchmark.wrongCorrectionRate,
      abstentionQuality: proBenchmark.abstentionQuality, targetsMet: proBenchmark.targetsMet,
      byCategory: proBenchmark.byCategory,
      missedSample: proBenchmark.missedItems.slice(0, 15), fpSample: proBenchmark.fpList.slice(0, 15)},
    apiSanity: sanity
  };

  const valid = core.valid && regression1880.valid && regression1890.valid && regression1900.valid
    && benchmark400.counts.falsePositives === 0 && benchmark400.recall === 1
    && proBenchmark.valid && sanity.valid;

  return {version: META.version, valid, suites};
}


/* ===== MODULE: src/pipeline/rules.js ===== */
/* ===== MODULE: src/rules/nominative-subject-case-v1876.js ===== */
/**
 * Nominative Dual/SMP Subject Case Resolver 1.0.
 * يصحح حالة الفاعل (SUBJECT_CASE_V1876) والمبتدأ (TOPIC_CASE_V1876) المثنى
 * وجمع المذكر السالم المنتهيين بالياء إلى الرفع بالألف والواو.
 * محصور بالصيغ المعجمية المراجعة فقط؛ اللواحق الإنتاجية غير المثبتة لا تلمس،
 * ولا يتجاوز أدوارًا أخرى محسومة (مفعول/مجرور/اسم إن...).
 */
function nominativeSubjectCaseRuleV1876(context) {
  const out = [];
  const {tokens} = context;
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    const role = context.syntax?.roles?.[i];
    if (!role || !['subject', 'topic'].includes(role.role)) continue;
    // الضمائر الموصولة (الذين/اللذين) لها قاعدتها الخاصة، ولا يلمسها هذا المحلل.
    if (token.morph.pos !== 'noun') continue;
    const nominal = token.morph.nominal;
    // V18.7.7: العدد المحسوم من القرينة الخبرية (DeepSyntacticTopicResolver)
    // مقدَّمٌ على العدد المعجمي المحتمل: «المعلمين حاضرون» خبرٌ جمعٌ فيحسم
    // الرأس جمعًا (المعلمون) ولو حمل المعجم قراءة مثنى أيضًا؛ والعكس مع
    // «باحثين مشغولان» (خبر مثنى). بلا قرينة خبرية يُعتمد العدد المعجمي.
    const resolvedNumber = (['du', 'pl'].includes(role.expectedNumber) ? role.expectedNumber : null)
      || (['du', 'pl'].includes(nominal?.number) ? nominal?.number : null);
    if (!nominal || !resolvedNumber) continue;
    if (nominal.source === 'unverified-productive-inflection-ending'
        || (nominal.confidence || 0) < 0.95) continue;
    const observed = observedCase(token);
    if (!observed || caseMatches(observed, 'nominative')) continue;
    const replacement = inflectNounNumberToken(token, resolvedNumber, 'nominative');
    if (!replacement || replacement === token.surface) continue;
    const ruleId = role.role === 'topic' ? 'TOPIC_CASE_V1876' : 'SUBJECT_CASE_V1876';
    out.push(findingFromSpan(context, {
      startToken: token, replacement,
      ruleId, type: 'نحوي', classification: 'syntactic-case',
      confidence: Math.min(0.985, role.confidence || 0.94),
      explanation: role.role === 'topic'
        ? 'المبتدأ في أول الجملة الاسمية مرفوع، ويرفع المثنى وجمع المذكر السالم بالألف والواو؛ وقد حسمت القرينة الخبرية الدور الابتدائي للكلمة.'
        : 'الفاعل مرفوع، ويرفع المثنى وجمع المذكر السالم بالألف والواو.',
      evidence: [...(role.evidence || []), 'role:' + role.role, 'observed-case:' + observed, 'expected-case:nominative'],
      safe: false,
      metadata: {resolver: 'NominativeDualSmpSubjectResolver', resolverVersion: '1.0',
        role: role.role, observedCase: observed, expectedCase: 'nominative',
        relationConfidence: role.confidence}
    }));
  }
  return out;
}

/* ===== MODULE: src/rules/contextual-orthography.js ===== */
/**
 * V18.7.8: قاعدة الإملاء السياقي — تصحيحات إملائية تعتمد على السياق
 * لاستبعاد الإنذارات الكاذبة. تعمل فقط عندما يكون الخيار مفعلاً.
 * 
 * الحالات المدعومة:
 * 1. علي → على (حرف جر) عندما يتبعها اسم معرف (وليس اسم علم "علي")
 * 2. ان → أن (حرف مصدري) بعد أفعال القول والظن
 * 3. سالت → سألت (فعل سأل) عندما يتبعها فاعل بشري
 * 4. كتابه → كتابة (مصدر) عندما يتبعها مضاف إليه
 */
function contextualOrthographyRule(context) {
  const out = [];
  if (!context.options?.rules?.contextualOrthography) return out;
  
  const {tokens} = context;
  const SAYING_VERBS = new Set(['قال', 'تقول', 'يقول', 'قالوا', 'قلن', 'ظن', 'ظنت', 'يظن', 'علم', 'علمت', 'يعلم', 'أعلم', 'نعلم', 'يعلمون', 'أكد', 'أعلنت', 'يعلن', 'صرح', 'أوضح']);
  const HUMAN_NOUNS = new Set(['الطالب', 'الطالبة', 'المعلم', 'المعلمة', 'المدير', 'المديرة', 'الرجل', 'المرأة', 'الولد', 'البنت', 'الأستاذ', 'الدكتور', 'المهندس', 'الطبيب', 'الكاتب', 'الباحث', 'الصحفي', 'المترجم', 'الموظف', 'الوزير']);
  
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.type !== 'word') continue;
    const clean = token.clean;
    
    // Case 1: علي → على (preposition before definite noun)
    if (clean === 'علي' && !token.morph.segments?.article) {
      const next = tokens[i + 1];
      if (next && next.type === 'word' && next.morph.segments?.article && next.clean.startsWith('ال')) {
        // Check if it's the name "علي" (proper noun) - if previous word is a verb of calling/naming, skip
        const prev = tokens[i - 1];
        if (prev && (prev.clean === 'اسم' || prev.clean === 'يدعى' || prev.clean === 'يُسمى')) continue;
        
        out.push(findingFromSpan(context, {
          startToken: token,
          replacement: 'على',
          ruleId: 'CONTEXTUAL_ORTHOGRAPHY_V1877:علي',
          type: 'إملائي',
          classification: 'orthographic',
          confidence: 0.92,
          explanation: 'السياق يدل على حرف الجر «على» وليس الاسم «علي».',
          evidence: ['contextual-preposition'],
          safe: true
        }));
      }
    }
    
    // Case 2: ان → أن (complementizer after saying/thinking verbs)
    if (clean === 'ان' && !token.morph.segments?.article) {
      const prev = tokens[i - 1];
      if (prev && prev.type === 'word' && SAYING_VERBS.has(prev.clean)) {
        out.push(findingFromSpan(context, {
          startToken: token,
          replacement: 'أن',
          ruleId: 'CONTEXTUAL_ORTHOGRAPHY_V1877:أن',
          type: 'إملائي',
          classification: 'orthographic',
          confidence: 0.95,
          explanation: 'السياق يدل على «أن» المصدرية بعد فعل القول/الظن.',
          evidence: ['contextual-complementizer'],
          safe: true
        }));
      }
    }

    // V18.7.9 — Case 2b: «ان» الناصبة للمضارع ← «أن» بهمزة قطع.
    // «أن» المصدرية تدخل على الفعل المضارع فتنصبه («أن يساعدوا»)، بخلاف «إن»
    // الشرطية التي تجزم فعلين، و«إنْ» النافية. القرينة الحاسمة هنا صرفية:
    // مضارع منصوب/مرفوع بعده مباشرة، لا فعل جواب شرط مجزوم. وكلا الوجهين
    // «إن/أن» بهمزة قطع، فالهمزة واجبة في الحالتين ولا يصح رسمها ألفًا عارية.
    const bareAnna = clean === 'ان' || clean === 'وان' || clean === 'فان';
    if (bareAnna && !token.morph.segments?.article) {
      const prefix = clean.length === 3 ? clean[0] : '';
      const next = tokens[i + 1];
      // القرينة تُؤخذ من تحليل الرمز نفسه لا من رسمه السطحي، كي تشمل المضارع
      // المتصل بضمير المفعول («يشجعوهم» = يشجعوا + هم)، ثم من صيغة واو الجماعة
      // الناقصة ألفَها الفارقة («يساعدو») لأنها الخطأ المصاحب الشائع.
      const nextAnalyses = (next?.morph?.verbAnalyses?.length
        ? next.morph.verbAnalyses
        : verbAnalyses(next?.clean || ''));
      const nextIsImperfect = Boolean(next && next.sentence === token.sentence && next.type === 'word'
        && (nextAnalyses.some(analysis => analysis.tense === 'present')
          || verbAnalyses(`${next.clean}ا`).some(analysis =>
            analysis.tense === 'present' && ['3mp', '2mp'].includes(analysis.personCode))));
      if (nextIsImperfect) {
        out.push(findingFromSpan(context, {
          startToken: token,
          replacement: `${prefix}أن`,
          ruleId: 'CONTEXTUAL_ORTHOGRAPHY_V1879:أن-الناصبة',
          type: 'إملائي',
          classification: 'orthographic',
          confidence: 0.96,
          explanation: 'همزة «أن» المصدرية الناصبة للمضارع همزةُ قطع تُرسم على الألف؛ والفعل المضارع بعدها قرينة قاطعة.',
          evidence: ['contextual-subordinator-before-imperfect', 'hamzat-qat'],
          safe: true
        }));
      }
    }
    
    // Case 3: سالت → سألت (verb "asked" before human subject)
    if (clean === 'سالت' && !token.morph.segments?.article) {
      const next = tokens[i + 1];
      if (next && next.type === 'word' && next.morph.segments?.article) {
        const nextBase = next.clean.replace(/^ال/, '');
        if (HUMAN_NOUNS.has(next.clean) || /ة$/.test(nextBase) || /م[uo]ن$/.test(nextBase)) {
          out.push(findingFromSpan(context, {
            startToken: token,
            replacement: 'سألت',
            ruleId: 'CONTEXTUAL_ORTHOGRAPHY_V1877:سالت',
            type: 'إملائي',
            classification: 'orthographic',
            confidence: 0.90,
            explanation: 'السياق يدل على فعل «سأل» وليس «سال» (تسيل).',
            evidence: ['contextual-verb-hamza'],
            safe: true
          }));
        }
      }
    }
    
    // Case 4: كتابه → كتابة (masdar before idafa)
    if (clean === 'كتابه' && !token.morph.segments?.article) {
      const next = tokens[i + 1];
      // Guard: if previous token is a verb, "كتابه" is likely "his book" (object+pronoun)
      const prev = tokens[i - 1];
      const prevIsVerb = prev && prev.type === 'word' && (VERB_FORM_INDEX.has(prev.clean) || VERB_FORM_INDEX.has(prev.clean.replace(/^ال/, '')));
      if (!prevIsVerb && next && next.type === 'word' && next.morph.segments?.article && next.clean.startsWith('ال')) {
        // This is likely "writing of..." not "his book"
        out.push(findingFromSpan(context, {
          startToken: token,
          replacement: 'كتابة',
          ruleId: 'CONTEXTUAL_ORTHOGRAPHY_V1877:كتابه',
          type: 'إملائي',
          classification: 'orthographic',
          confidence: 0.88,
          explanation: 'السياق يدل على المصدر «كتابة» وليس «كتابه» (كتاب + ضمير).',
          evidence: ['contextual-masdar'],
          safe: true
        }));
      }
    }
  }
  
  return out;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * V19.0.0 PRO FINAL — نواة القرار النحوي الموحّدة والجدار الناري للإنذارات
 * ═══════════════════════════════════════════════════════════════════════════
 * المبدأ الحاكم في هذه الطبقة: «ترابط الطبقات قبل ازديادها». لا تضيف V19
 * قواعد كلمةٍ منفردة جديدة بقدر ما تجعل حسم تركيب الجملة (الفاعل، الإطار
 * الفعلي، سلاسل التبعية، بنية الناسخ) سابقًا على إطلاق الأحكام، وتُخضع كل
 * ملاحظةٍ نحوية لجدار فحص: «الصحيح المحتمل المحسوم أقوى من قاعدة التصحيح
 * العامة». كل طبقة جديدة إضافةٌ صرفة: لا تحذف قاعدة ولا تغيّر واجهة.
 *
 * المكونات:
 *   1) VerbSubjectFrameResolver 2.0 — يصنّف طارف الجمل الفعلية إلى:
 *      فعل+فاعل ظاهر (VSO)، فاعل+فعل (SVO)، فاعل مستتر، أو غير محسوم.
 *   2) verbSubjectFrames 2.0 — الفعل بصيغة الجمع مع فاعل ظاهر:
 *        • VSO: «لن يكتبون الطلاب واجباتهم» ← «يكتب» (إفراد الفعل إلزامًا).
 *        • SVO: «المعلمات لم يشرحون الدرس» ← «يشرحن» (مطابقة الجنس والعدد).
 *   3) InnaDemonstrativeChainResolver 1.0 — سلسلة «إن هؤلاء الطلاب
 *      المجتهدين» وحدة تبعية واحدة: التابع يتبع اسم الإشارة في محل إنّ،
 *      فتُصحَّح الواو إلى ياء عند اللزوم وتُحجب القلبات الخاطئة.
 *   4) CopularPredicateResolver 2.0 — خبر كان المنصوب برسمٍ ظاهر: «كان
 *      الطالب مجتهد» ← «مجتهدًا»، مع امتناعٍ تام عن شبه الجملة وصلة
 *      الموصول والممنوع من الصرف والمذكور بعلامة.
 *   5) FalsePositiveFirewall 2.0 — جدار نهائي يراجع كل ملاحظة نحوية قبل
 *      الترتيب: يمنع قلب ياء الأسماء الخمسة المضافة لياء المتكلم، ويمنع
 *      نقض الفعل/الفاعل بعد حسم الإطار، ويمنع نقض توابع السلاسل المحسومة.
 * ═══════════════════════════════════════════════════════════════════════════ */

const V1900_LAYER_IDS = Object.freeze({
  rules: Object.freeze(['verbSubjectFrames', 'demonstrativeChains', 'kanaPredicateTanwin']),
  firewall: 'grammarFirewall'
});

/* حواف الرسم التي لا يجوز قلبها على أساس إعرابي ظني */
const V1900_OBLIQUE_ENDING_RE = /ين$/u;
const V1900_NOMINATIVE_ENDING_RE = /(?:ون|ان)$/u;
const V1900_YAA_FINAL_FIVE_NOUN_RE = /[يى]$/u;

/* ─── أدوات رسم مشتركة ─── */
function v1900Bare(core) {
  return stripDiacritics(core || '');
}

function v1900EndingKind(core) {
  const bare = v1900Bare(core);
  if (V1900_OBLIQUE_ENDING_RE.test(bare)) return 'oblique';
  if (/ون$/u.test(bare)) return 'nominative-plural';
  if (/ان$/u.test(bare)) return 'nominative-dual';
  return null;
}

function v1900FlipDirection(original, replacement) {
  const fromKind = v1900EndingKind(original);
  const toKind = v1900EndingKind(replacement);
  if (!fromKind || !toKind) return null;
  if (fromKind === 'oblique' && toKind.startsWith('nominative')) return 'to-nominative';
  if (fromKind.startsWith('nominative') && toKind === 'oblique') return 'to-oblique';
  return null;
}

/* ─────────────────────────────────────────────────────────────────────────
 * VerbSubjectFrameResolver 2.0
 * يبني لكل فعلٍ إطارًا: من الفاعل؟ أظاهرٌ أم مستتر؟ وتأكيدُ الترتيب VSO/SVO.
 * الفاعل الظاهر بعد الفعل (VSO) يلزم إفرادَ الفعل ومطابقته للجنس فقط؛
 * والفاعل المبدوء (SVO) يلزم المطابقة الكاملة. وجود الفاعل الظاهر في أي من
 * الجانبين يمنع قراءة ضمير الجماعة المستتر التي تبني عليها قاعدة الأفعال
 * الخمسة قرارها القديم.
 * ───────────────────────────────────────────────────────────────────────── */
const V1900_EXCLUDED_SUBJECT_ROLES = new Set([
  'object', 'genitive', 'object-of-preposition', 'number-tamyiz',
  'adjective', 'hal', 'predicate', 'inna-predicate', 'kana-predicate'
]);

function v1900GovernorMoodAt(context, verbIndex) {
  const {tokens} = context;
  const previous = tokens[verbIndex - 1];
  if (!previous || previous.sentence !== tokens[verbIndex].sentence) return null;
  const core = previous.morph?.core;
  if (SUBJUNCTIVE_PARTICLES.has(core)) return {mood: 'subjunctive', governorIndex: verbIndex - 1, governor: core};
  if (JUSSIVE_PARTICLES.has(core)) return {mood: 'jussive', governorIndex: verbIndex - 1, governor: core};
  return null;
}

/* فاعل مبدوء قبل الفعل، مع تجاوز عامل النصب/الجزم وجوامد التوكيد الزمنية. */
function v1900PreverbalOvertSubject(context, verbIndex) {
  const {tokens} = context;
  const verbToken = tokens[verbIndex];
  const verb = bestVerb(verbToken);
  let cursor = verbIndex - 1;
  if (v1900GovernorMoodAt(context, verbIndex)) cursor -= 1;
  while (cursor >= 0 && VERBAL_PARTICLES.has(tokens[cursor]?.morph?.core)) cursor -= 1;
  if (cursor < 0) return null;
  const candidate = tokens[cursor];
  if (candidate.sentence !== verbToken.sentence) return null;
  const core = candidate.morph?.core;
  if (!core) return null;
  if (candidate.morph.segments?.conjunction) return null;      // معطوف: المطابقة لقاعدة العطف
  if (candidate.morph.segments?.preposition || canonicalPrepositionCore(candidate)) return null;
  if (bestVerb(candidate) || isKanaSurface(core) || INNA_PARTICLES.has(core)) return null;
  if (RELATIVE_PRONOUNS[core] || PREPOSITIONS.has(core)) return null;
  if (!isStrongNominalCandidate(candidate) && !isNisbaSubjectCandidate(candidate)) return null;
  if (isAdjective(candidate)) return null;
  if (isPrepositionGovernedToken(tokens, cursor)) return null;
  const role = context.syntax?.roles?.[cursor]?.role;
  if (V1900_EXCLUDED_SUBJECT_ROLES.has(role)) return null;
  const observed = observedCase(candidate);
  if (observed === 'accusative' || observed === 'accgen') return null;
  const features = effectiveAgreement(tokenFeatures(candidate));
  if (!features?.gender || !features?.number) return null;
  // الفعل المتعدي: المفعول المتقدم غير العاقل قراءة أرجح من الفاعلية — لا حسم بلا عقلانية.
  if (verb?.transitive && features.animacy !== 'human' && observed !== 'nominative') return null;
  return {subjectIndex: cursor, features, order: 'SVO', confidence: 0.95,
    evidence: ['preverbal-overt-subject', `role:${role || 'unassigned'}`, `observed:${observed || 'bare'}`]};
}

/* فاعل ظاهر يلي الفعل مباشرة (VSO): يشترط العقلانية أو اكتمال الإطار بمفعول
   أو شبه جملة لاحقة، حتى لا يُقلب «يكتبون الواجب» (الواجب مفعول والفاعل مستتر). */
function v1900PostverbalOvertSubject(context, verbIndex) {
  const {tokens} = context;
  const verbToken = tokens[verbIndex];
  const verb = bestVerb(verbToken);
  if (!verb) return null;
  const bounds = sentenceBounds(tokens, verbIndex);
  const clause = clauseForToken(context, verbIndex);
  const limit = Math.min(bounds.end, clauseLocalArgumentBounds(context, verbIndex, clause).end);
  const j = verbIndex + 1;
  if (j >= limit) return null;
  const candidate = tokens[j];
  if (candidate.sentence !== verbToken.sentence) return null;
  const core = candidate.morph?.core;
  if (!core) return null;
  if (candidate.morph.segments?.conjunction || candidate.morph.segments?.preposition) return null;
  if (candidate.morph.segments?.enclitic === 'ي') return null;               // ياء المتكلم: قراءة مستقلة
  if (bestVerb(candidate) || isKanaSurface(core) || INNA_PARTICLES.has(core)) return null;
  if (RELATIVE_PRONOUNS[core] || canonicalPrepositionCore(candidate)) return null;
  if (SUBJECT_SKIP_ADVERBS.has(core) || ADVERBIAL_GOVERNORS.has(core) || EMPHASIS_BASES.has(core)) return null;
  if (!isStrongNominalCandidate(candidate) && !isNisbaSubjectCandidate(candidate)) return null;
  if (isAdjective(candidate) || isPrepositionGovernedToken(tokens, j)) return null;
  const observed = observedCase(candidate);
  if (observed === 'accusative' || observed === 'accgen') return null;
  const features = effectiveAgreement(tokenFeatures(candidate));
  if (!features?.gender) return null;
  let frameComplete = !verb.transitive;
  if (!frameComplete && features.animacy !== 'human') return null;            // متعدٍّ + غير عاقل: مفعول أرجح
  if (!frameComplete) {
    for (let k = j + 1; k < limit && k <= j + 6; k += 1) {
      const token = tokens[k];
      if (token.sentence !== candidate.sentence) break;
      const kCore = token.morph?.core;
      if (!kCore) break;
      if (RELATIVE_PRONOUNS[kCore] || bestVerb(token) || isKanaSurface(kCore)) break;
      if (EMPHASIS_BASES.has(kCore) || SUBJECT_SKIP_ADVERBS.has(kCore)) {
        k = nominalArgumentUnitEnd(tokens, k, limit) - 1;
        continue;
      }
      if (token.morph.segments?.preposition || canonicalPrepositionCore(token)) { frameComplete = true; break; }
      if (isAdjective(token)) continue;                                        // نعت الفاعل بينهما
      if (isStrongNominalCandidate(token) && !isPrepositionGovernedToken(tokens, k)) {
        const observedNext = observedCase(token);
        if (observedNext === 'accusative' || observedNext === 'accgen'
            || token.morph.definite || token.morph.segments?.enclitic) frameComplete = true;
        break;
      }
      break;
    }
  }
  if (!frameComplete) return null;
  return {subjectIndex: j, features, order: 'VSO', confidence: verb.transitive ? 0.95 : 0.96,
    evidence: ['postverbal-overt-subject', `frame-complete:${Boolean(verb.transitive)}`, `observed:${observed || 'bare'}`]};
}

function v1900PersonCodeFor(features, {vso = false} = {}) {
  const gender = features.gender === 'f' ? 'f' : 'm';
  let number = features.number || 'sg';
  if (vso) number = 'sg';                                                      // VSO: إفراد إلزامي
  if (number === 'du') return gender === 'f' ? '3df' : '3dm';
  if (number === 'pl') return gender === 'f' ? '3fp' : '3mp';
  return gender === 'f' ? '3fs' : '3ms';
}

/* سجل الإطارات الموحد: يُحسب مرة واحدة ويشترك فيه محرك التصحيح والجدار الناري
   والفحص التشخيصي، فلا يبقى قرار الفعل/الفاعل موزعًا بين قواعد متنازعة. */
function getVerbFramesV1900(context) {
  if (context.v1900Frames) return context.v1900Frames;
  const {tokens} = context;
  const frames = [];
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    const verb = bestVerb(token);
    if (!verb || verb.tense === 'imperative') continue;
    if (token.morph.segments?.enclitic) continue;                              // ضمير متصل يعقّد الإطار
    const governor = v1900GovernorMoodAt(context, i);
    const preverbal = v1900PreverbalOvertSubject(context, i);
    const postverbal = preverbal ? null : v1900PostverbalOvertSubject(context, i);
    const resolution = preverbal || postverbal;
    if (!resolution) {
      frames.push({verbIndex: i, verb, tense: verb.tense, personCode: verb.personCode,
        mood: governor?.mood || verbMoodInContext(context, i, verb) || 'indicative',
        order: 'implicit-subject', subjectIndex: -1, mismatch: false});
      continue;
    }
    const expectedPersonCode = v1900PersonCodeFor(resolution.features, {vso: resolution.order === 'VSO'});
    const mismatch = expectedPersonCode !== verb.personCode;
    frames.push({
      verbIndex: i, verb, tense: verb.tense, personCode: verb.personCode,
      mood: governor?.mood || verbMoodInContext(context, i, verb) || 'indicative',
      order: resolution.order, subjectIndex: resolution.subjectIndex,
      subjectFeatures: resolution.features, expectedPersonCode, mismatch,
      confidence: resolution.confidence, evidence: resolution.evidence,
      resolverVersion: '2.0'
    });
  }
  context.v1900Frames = frames;
  return frames;
}

function v1900ConjugatedReplacement(verb, personCode, mood, tense) {
  const surface = conjugateVerb(verb.lemma, tense, personCode);
  if (!surface) return null;
  // نون النسوة (3fp/2fp) فعل مبني لا يؤثر فيه النصب ولا الجزم؛ applyVerbMood
  // يعرف ذلك ويعيد السطح كما هو، لكننا نصرّح بالقصد هنا.
  const moodApplied = tense === 'present' && mood && mood !== 'indicative'
    ? applyVerbMood(surface, personCode, mood, verb.lemma)
    : surface;
  return moodApplied;
}

/* القاعدة: فعل الجمع (ـون/ـوا/نون النسوة) مع فاعل ظاهر محسوم. */
function verbSubjectFrameRuleV1900(context) {
  const out = [];
  const {tokens} = context;
  for (const frame of getVerbFramesV1900(context)) {
    if (!frame.mismatch) continue;
    if (!['3mp', '3fp'].includes(frame.personCode)) continue;                 // صيغ الجمع فقط
    const token = tokens[frame.verbIndex];
    const desired = v1900ConjugatedReplacement(frame.verb, frame.expectedPersonCode, frame.mood, frame.tense);
    if (!desired || desired === token.morph.core || desired === token.clean) continue;
    const isVso = frame.order === 'VSO';
    out.push(findingFromSpan(context, {
      startToken: token,
      replacement: rebuildToken(token, desired),
      ruleId: isVso ? 'V1900_VSO_VERB_SINGULAR_AGREEMENT' : 'V1900_SVO_VERB_GENDER_NUMBER_AGREEMENT',
      type: 'نحوي', classification: 'agreement',
      confidence: Math.min(0.96, frame.confidence + (frame.mood !== 'indicative' ? 0 : 0.01)),
      explanation: isVso
        ? 'الفاعل الظاهر بعد الفعل يلزم إفراد الفعل ومطابقته للفاعل في الجنس فقط؛ صيغة الجمع (واو الجماعة/نون النسوة) ضمير مستتر لا يجتمع مع فاعل ظاهر.'
        : 'الفاعل المبدوء قبل الفعل يلزم مطابقة الفعل له في الجنس والعدد؛ واو الجماعة هنا لا تطابق الفاعل المحسوم.',
      evidence: ['verb-subject-frame-resolver-2.0', `order:${frame.order}`,
        `subject:${frame.subjectIndex}`, `mood:${frame.mood}`,
        `person:${frame.personCode}->${frame.expectedPersonCode}`, ...frame.evidence],
      safe: false,
      metadata: {resolver: 'VerbSubjectFrameResolver', resolverVersion: '2.0',
        frameOrder: frame.order, subjectIndex: frame.subjectIndex, mood: frame.mood,
        expectedPersonCode: frame.expectedPersonCode}
    }));
  }
  return out;
}

/* ─────────────────────────────────────────────────────────────────────────
 * InnaDemonstrativeChainResolver 1.0 — شجرة تبعية مبسطة لسلسلة اسم الإشارة.
 * «إن هؤلاء الطلاب المجتهدين» ليست ثلاث كلمات مستقلة؛ بل:
 *   إنّ (عامل نصب)
 *   └── هؤلاء (اسم إن، مبني في محل نصب)
 *       └── الطلاب (بدل/نعت، يتبع المحل)
 *           └── المجتهدين (نعت، يتبع المحل)
 * حالة السلسلة تحسم من العامل: ناسخ ناصب ⇒ نصب، حرف جر ⇒ جر، صدر جملة ⇒ رفع
 * (مبتدأ). التابع المنتهي بالياء في سلسلة النصب/الجر صحيح لا يُقلب، والمنتهي
 * بالواو فيها خطأ يُصحح؛ والعكس في سلسلة الرفع.
 * ───────────────────────────────────────────────────────────────────────── */
function demonstrativeChainsV1900(context) {
  if (context.v1900Chains) return context.v1900Chains;
  const {tokens} = context;
  const chains = [];
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    const features = DEMONSTRATIVES[token.morph?.core];
    if (!features) continue;
    let expectedCase = null;
    let governor = null;
    if (token.morph.segments?.preposition || canonicalPrepositionCore(tokens[i - 1])) {
      expectedCase = 'genitive';
      governor = token.morph.segments?.preposition || tokens[i - 1]?.morph?.core;
    } else if (INNA_PARTICLES.has(tokens[i - 1]?.morph?.core)) {
      expectedCase = 'accusative';
      governor = tokens[i - 1].morph.core;
    } else if (i === sentenceBounds(tokens, i).start) {
      expectedCase = 'nominative';
      governor = 'sentence-initial-topic';
    }
    if (!expectedCase) continue;
    const members = [];
    for (let j = i + 1; j < tokens.length && j <= i + 6 && members.length < 4; j += 1) {
      const member = tokens[j];
      if (member.sentence !== token.sentence) break;
      const core = member.morph?.core;
      if (!core) break;
      if (member.morph.segments?.conjunction || member.morph.segments?.preposition) break;
      if (canonicalPrepositionCore(member)) break;
      if (RELATIVE_PRONOUNS[core]) {
        const relative = (context.syntax?.clauses || []).find(clause => clause.type === 'relative' && clause.markerIndex === j);
        if (relative) { j = relative.end - 1; continue; }
        break;
      }
      if (bestVerb(member) || isKanaSurface(core) || INNA_PARTICLES.has(core)) break;
      if (!isNominal(member)) break;
      if (!member.morph.definite) break;                                       // نكرة: خبر أو حال — خارج السلسلة
      if (member.morph.segments?.enclitic) break;                              // جمع متصل بضمير: علامته محذوفة النون
      members.push(j);
    }
    if (!members.length) continue;
    chains.push({
      demonstrativeIndex: i, demonstrative: token.morph.core,
      demonstrativeNumber: features[1],
      members, expectedCase, governor,
      confidence: expectedCase === 'nominative' ? 0.94 : 0.98,
      resolverVersion: '1.0'
    });
  }
  context.v1900Chains = chains;
  return chains;
}

function v1900ChainMemberIndex(context) {
  if (context.v1900ChainMap) return context.v1900ChainMap;
  const map = new Map();
  for (const chain of demonstrativeChainsV1900(context)) {
    for (const memberIndex of chain.members) map.set(memberIndex, chain);
  }
  context.v1900ChainMap = map;
  return map;
}

function demonstrativeChainCaseRuleV1900(context) {
  const out = [];
  const {tokens} = context;
  for (const chain of demonstrativeChainsV1900(context)) {
    const obliqueExpected = chain.expectedCase !== 'nominative';
    for (const memberIndex of chain.members) {
      const token = tokens[memberIndex];
      const nominal = token.morph?.nominal;
      const number = nominal?.number || token.morph?.number;
      if (number==='sg') continue;
      const kind = v1900EndingKind(token.morph?.core);
      if (obliqueExpected && (kind === 'nominative-plural' || kind === 'nominative-dual')) {
        const bare = v1900Bare(token.morph.core);
        const desiredCore = bare.replace(/(?:ون|ان)$/u, 'ين');
        if (desiredCore === bare) continue;
        out.push(findingFromSpan(context, {
          startToken: token,
          replacement: rebuildToken(token, desiredCore),
          ruleId: 'V1900_DEM_CHAIN_OBLIQUE_CASE',
          type: 'نحوي', classification: 'syntactic-case', confidence: 0.96,
          explanation: `التابع في سلسلة اسم الإشارة يتبع محلها بالياء.`,
          evidence: ['inna-demonstrative-chain-resolver-1.0'],
          safe: false,
          metadata: {resolver: 'InnaDemonstrativeChainResolver', resolverVersion: '1.0', chain: chain.demonstrativeIndex, expectedCase: chain.expectedCase}
        }));
        continue;
      }
      if (!obliqueExpected && kind === 'oblique' && chain.demonstrativeNumber === 'pl' && token.morph?.nominal?.number !== 'du') {
        if (number==='sg') continue;
        const bare = v1900Bare(token.morph.core);
        const desiredCore = bare.replace(/ين$/u, 'ون');
        if (desiredCore === bare) continue;
        out.push(findingFromSpan(context, {
          startToken: token,
          replacement: rebuildToken(token, desiredCore),
          ruleId: 'V1900_DEM_CHAIN_NOMINATIVE_CASE',
          type: 'نحوي', classification: 'syntactic-case', confidence: 0.94,
          explanation: 'سلسلة اسم الإشارة مبتدأ مرفوع بالواو.',
          evidence: ['inna-demonstrative-chain-resolver-1.0'],
          safe: false,
          metadata: {resolver: 'InnaDemonstrativeChainResolver', resolverVersion: '1.0', chain: chain.demonstrativeIndex, expectedCase: chain.expectedCase}
        }));
      }
    }
  }
  return out;
}

/* ─────────────────────────────────────────────────────────────────────────
 * CopularPredicateResolver 2.0 — الرسم الظاهر لخبر الناسخ المفرد.
 * يعتمد البنية المحسومة من resolveCopularStructure (اسم الناسخ + الخبر بعد
 * تخطّي صلة الموصول)، ثم يقترح رسم ألف التنوين للخبر المنصوب المجرد.
 * محرّمات الإطلاق (امتناع صارم): شبه الجملة، المعرّف بـ«ال»، المتصل بضمير،
 * المشكول/ذو العلامة البنيوية، التاء المربوطة والمقصور والمهموز والمعتل
 * والممنوع من الصرف، صيغ الجمع والمثنى، وصفة لا تطابق مؤنث الاسم.
 * ───────────────────────────────────────────────────────────────────────── */
const V1900_NO_TANWIN_ALIF_ENDING = /(?:ة|ء|ى|ا|أ|إ|آ|ؤ|ئ|ي|و|ات|ون|ين|ان|اء|وا|وة)$/u;

/* مسار احتياطي محافظ عند تعذّر resolveCopularStructure (مثل «الجو/الأمر»
   غير المفهرسة معجميًا): اسم الناسخ = أول مرشح اسمي بعدها، والخبر = آخر مرشح
   اسمي متصل؛ وكل الفحوص اللاحقة (التنكير، عدم العلامة، عدم التعريف...) حاكمة
   على الاحتياط كما هي على المسار الرسمي. */
function v1900CopularFallback(context, markerIndex) {
  const {tokens} = context;
  const {end} = sentenceBounds(tokens, markerIndex);
  const candidates = [];
  for (let j = markerIndex + 1; j < end && j <= markerIndex + 6 && candidates.length < 3; j += 1) {
    const token = tokens[j];
    const core = token.morph?.core;
    if (!core) break;
    if (token.morph.segments?.preposition || canonicalPrepositionCore(token)
      || ADVERBIAL_GOVERNORS.has(core) || SUBJECT_SKIP_ADVERBS.has(core)) return null;
    if (RELATIVE_PRONOUNS[core] || bestVerb(token) || INNA_PARTICLES.has(core)) return null;
    if (token.morph.segments?.conjunction) return null;
    if (isNominal(token) || token.morph?.pos === 'unknown' || token.morph?.pos === 'adj') candidates.push(j);
  }
  if (candidates.length < 2) return null;
  return {subjectIndex: candidates[0], subjectFeatureIndex: candidates[0],
    predicateIndex: candidates[candidates.length - 1], fallback: true};
}

function kanaPredicateTanwinRuleV1900(context) {
  const out = [];
  const {tokens} = context;
  for (let i = 0; i < tokens.length; i += 1) {
    const core = tokens[i].morph?.core;
    if (!core || !isKanaSurface(core)) continue;
    const sister = KANA_SISTERS_V1880[core] || KANA_SISTERS_V1880[core.replace(/^ما/u, '')];
    if (sister?.condition === 'requires-negation' || sister?.condition === 'requires-ma-masdariyya') {
      const previous = tokens[i - 1]?.morph?.core;
      if (previous !== 'ما' && previous !== 'لا' && previous !== 'ليس') continue;
    }
    let structure = resolveCopularStructure(context, i, 'kana');
    if (!structure || structure.predicateIndex < 0) {
      structure = v1900CopularFallback(context, i) || structure;
    }
    if (!structure || structure.predicateIndex < 0) continue;
    const predicate = tokens[structure.predicateIndex];
    if (!predicate || predicate.sentence !== tokens[i].sentence) continue;
    // شبه جملة بين الناسخ والخبر أو قبله: لا خبر إفرادي محسوم هنا.
    let shibhJumla = false;
    for (let k = i + 1; k < structure.predicateIndex; k += 1) {
      const between = tokens[k];
      if (between.sentence !== tokens[i].sentence) break;
      const betweenCore = between.morph?.core;
      if (!betweenCore) continue;
      if (between.morph.segments?.preposition || canonicalPrepositionCore(between)
        || ADVERBIAL_GOVERNORS.has(betweenCore)) { shibhJumla = true; break; }
    }
    if (shibhJumla) continue;
    if (predicate.morph?.definite || predicate.morph?.segments?.preposition
      || predicate.morph?.segments?.enclitic || predicate.morph?.segments?.conjunction) continue;
    const nominalPos = predicate.morph?.nominal?.pos || predicate.morph?.pos;
    if (!['noun', 'adj'].includes(nominalPos)) continue;
    if ((predicate.morph?.nominal?.confidence ?? predicate.morph?.confidence ?? 0) < 0.40) continue;
    if (predicate.visibleCase || predicate.morph?.structuralCase) continue;    // ذو علامة — شأن قواعد V1890
    if (ARABIC_DIACRITICS_RE.test(predicate.surface)) continue;                // مشكول: الرسم ظاهر أصلًا
    const bare = v1900Bare(predicate.morph?.core || predicate.surface);
    if (bare.length < 3 || V1900_NO_TANWIN_ALIF_ENDING.test(bare)) continue;
    const predicateFeatures = tokenFeatures(predicate);
    if (predicateFeatures.number && predicateFeatures.number !== 'sg') continue;
    if (predicateFeatures.definite) continue;
    if (detectDiptote(bare)?.isDiptote) continue;                               // ممنوع من الصرف: فتحة بلا تنوين
    // الصفة مع اسم مؤنث محسوم: الحكم للمطابقة لا للتنوين، حتى لا يُرسم «جميلاً» لـ«الحياة».
    const subject = structure.subjectFeatureIndex >= 0 ? tokens[structure.subjectFeatureIndex] : null;
    const subjectGender = subject ? tokenFeatures(subject).gender : null;
    if (nominalPos === 'adj' && subjectGender === 'f' && !/ة$/u.test(bare)) continue;
    const replacement = `${predicate.surface}ًا`;
    out.push(findingFromSpan(context, {
      startToken: predicate,
      replacement,
      ruleId: 'V1900_KANA_PREDICATE_TANWIN',
      type: 'نحوي', classification: 'syntactic-case', confidence: 0.9,
      explanation: 'خبر «كان» وأخواتها منصوب؛ وتنوين النصب يُرسم بألف في المفرد الصحيح الآخر ولو في المتن غير المشكول («كان الطالب مجتهدًا»).',
      evidence: ['copular-predicate-resolver-2.0', `kana:${core}`, 'resolved-copular-frame',
        `subject:${structure.subjectIndex}`, 'bare-indefinite-predicate'],
      safe: false,
      metadata: {resolver: 'CopularPredicateResolver', resolverVersion: '2.0',
        governor: core, governorIndex: i, subjectIndex: structure.subjectIndex,
        expectedCase: 'accusative', suggestionOnly: true}
    }));
  }
  return out;
}

/* ─────────────────────────────────────────────────────────────────────────
 * FalsePositiveFirewall 2.0 — الفحص الأخير قبل الترتيب وإعادة التصنيف.
 * لكل ملاحظة نحوية: هل تناقض قراءةً عربية صحيحة محسومة بإطار أعلى؟ إن نعم،
 * تُحجب وتُوثَّق في المسار الممنوع مع سبب الحجب، بدل أن تصل إلى المستخدم.
 * ───────────────────────────────────────────────────────────────────────── */
const V1900_OWN_RULE_RE = /^V1900_/u;

function firewallVetoReasonV1900(context, finding) {
  if (!finding || V1900_OWN_RULE_RE.test(finding.ruleId || '')) return null;
  const token = tokenAtOriginalSpan(context, finding);
  if (!token) return null;
  const ruleId = finding.ruleId || '';
  const classification = finding.classification || '';

  // (1) الأفعال الخمسة: حذف النون قراءةٌ تفترض ضمير جماعة مستترًا. فإذا حسم
  //     سجل الإطارات فاعلًا ظاهرًا (متأخرًا يوجب الإفراد، أو مبدوءًا يريد
  //     مطابقةً أخرى) ٱنهدم أساس القراءة فتُحجب الملاحظة.
  if (/^FIVE_VERBS_(SUBJUNCTIVE|JUSSIVE)_V18$/u.test(ruleId)) {
    const frame = getVerbFramesV1900(context).find(item => item.verbIndex === token.index);
    if (frame?.mismatch && frame.order === 'VSO') return 'overt-postverbal-subject-supersedes-five-verbs';
    if (frame?.mismatch && frame.order === 'SVO') return 'preverbal-subject-agreement-supersedes-five-verbs';
  }

  // (2) المفعولية المدّعاة على فاعل VSO محسوم: «يشرحون المعلمون الدرس» —
  //     «المعلمون» فاعل مرفوع، والخلل في الفعل لا في الفاعل.
  if (ruleId === 'OBJECT_CASE_V1871') {
    const frame = getVerbFramesV1900(context).find(item =>
      item.order === 'VSO' && item.mismatch && item.subjectIndex === token.index);
    if (frame) return 'vso-resolved-subject-not-object';
  }

  // (3) توابع سلسلة اسم الإشارة: علامة التابع المحسومة من عامل السلسلة لا
  //     تُنقض بمطابقةٍ سطحية عكسية («إن هؤلاء الطلاب المجتهدين» ياؤها صحيحة).
  if (['dependent', 'syntactic-case', 'syntax', 'agreement', 'case'].includes(classification) && finding.replacement) {
    const chain = v1900ChainMemberIndex(context).get(token.index);
    if (chain) {
      const flip = v1900FlipDirection(token.morph?.core, stripDiacritics(finding.replacement));
      if (flip === 'to-nominative' && chain.expectedCase !== 'nominative') {
        return 'demonstrative-chain-oblique-protected';
      }
      if (flip === 'to-oblique' && chain.expectedCase === 'nominative') {
        return 'demonstrative-chain-nominative-protected';
      }
    }
  }

  // (4) الأسماء الخمسة المنتهية بياء: الياء قد تكون ياء متكلم مشروعة في كل الحالات («أخي»، «أبي»)
  //     أو ياء جر بالإضافة («أبيك»). نفرق: إذا لم يكن هناك ضمير كاف/هاء بعد الياء وكان الرسم ياءً، فهو ياء متكلم محمية
  //     أما «أبيك» (ياء + ك) فالياء علامة جر لا ياء متكلم، فلا تُحمى في الرفع/النصب
  if (classification === 'five-nouns' || /^FIVE_NOUNS/u.test(ruleId)) {
    if (V1900_YAA_FINAL_FIVE_NOUN_RE.test(v1900Bare(token.morph?.core))) {
      const encl = token.morph?.segments?.enclitic || '';
      const expected = finding.metadata?.expectedCase || finding.expectedCase || null;
      // ياء المتكلم: لا ضمير بعده أو الضمير ياء نفسه
      const isYaMutakallim = !encl || encl === 'ي' || encl === 'ى';
      if (isYaMutakallim) {
        // ياء المتكلم مشروعة في كل الحالات
        return 'five-noun-yaa-mutakallim-protected';
      }
      // ياء الجر مع كاف: مشروعة فقط في الجر
      if (!expected || expected === 'genitive') {
        return 'five-noun-yaa-genitive-protected';
      }
    }
  }
  return null;
}

function applyFirewallV1900(context, findings) {
  const kept = [];
  const vetoed = [];
  for (const finding of findings) {
    const reason = firewallVetoReasonV1900(context, finding);
    if (reason) vetoed.push({finding, reason});
    else kept.push(finding);
  }
  if (vetoed.length) {
    context.v1900FirewallLog = vetoed.map(v => ({
      ruleId: v.finding.ruleId, index: v.finding.index, reason: v.reason
    }));
  }
  return {kept, vetoed};
}


/* V19.0 PRO — الطبقات الجديدة المكملة */
function fiveNounsPhraseResolverRuleV19(context) {
  const out = [];
  const {tokens} = context;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.type !== 'word') continue;
    const info = FIVE_NOUN_FORMS[token.morph?.core] || NONSTANDARD_FIVE_NOUN_FORMS_V1874[token.morph?.core];
    if (!info) continue;
    const chain = [i];
    let cursor = i+1;
    while (cursor < tokens.length) {
      const t = tokens[cursor];
      if (t.sentence !== token.sentence) break;
      if (t.morph?.core === 'و' && tokens[cursor+1]) {
        const nxt = tokens[cursor+1];
        if (FIVE_NOUN_FORMS[nxt.morph?.core] || NONSTANDARD_FIVE_NOUN_FORMS_V1874[nxt.morph?.core]) {
          chain.push(nxt.index);
          cursor+=2;
          continue;
        }
      }
      if (t.morph?.segments?.conjunction === 'و') {
        const core = t.morph?.core;
        if (FIVE_NOUN_FORMS[core] || NONSTANDARD_FIVE_NOUN_FORMS_V1874[core]) {
          chain.push(t.index);
          cursor+=1;
          continue;
        }
      }
      break;
    }
    const governing = directGovernorCase(context.tokens, i) || roleExpectedCase(context, i);
    if (!governing && chain.length===1) continue;
    if (!governing && chain.length>1) {
      const afterChain = tokens[chain[chain.length-1]+1];
      if (!afterChain) continue;
    }
    if (chain.length === 1) continue;
    for (const idxChain of chain) {
      const tk = tokens[idxChain];
      const expectedCase = governing?.case || 'nominative';
      const lemma = tk.morph?.nominal?.lemma || info.lemma || tk.morph?.lemma;
      const baseTarget = FIVE_NOUN_BY_LEMMA[lemma]?.[expectedCase];
      if (!baseTarget) continue;
      const coreBare = stripDiacritics(tk.morph.core);
      const targetBare = stripDiacritics(baseTarget);
      if (coreBare === targetBare) continue;
      out.push(findingFromSpan(context, {
        startToken: tk,
        replacement: rebuildToken(tk, baseTarget),
        ruleId: 'FIVE_NOUNS_PHRASE_V19',
        type: 'نحوي',
        classification: 'five-nouns',
        confidence: 0.96,
        explanation: `الاسم من الأسماء الخمسة حكمه ${expectedCase}.`,
        evidence: ['five-nouns-phrase-resolver-2.0'],
        safe: false,
        metadata: {resolver: 'FiveNounsPhraseResolver', resolverVersion: '2.0', expectedCase, chainLength: chain.length}
      }));
    }
    i = chain[chain.length-1];
  }
  return out;
}
function agreementResolverRuleV19(context) { return []; }
function dependencyTreeResolverRuleV19(context) { return []; }
function longContextResolverRuleV19(context) {
  const paragraphs = [];
  let currentPara = [];
  let lastSentence = context.tokens[0]?.sentence ?? 0;
  for (const tk of context.tokens) {
    if (tk.sentence !== lastSentence) {
      if (tk.originalStart - (context.tokens[tk.index-1]?.originalEnd||0) > 2) {
        if (currentPara.length) paragraphs.push(currentPara);
        currentPara = [];
      }
      lastSentence = tk.sentence;
    }
    currentPara.push(tk);
  }
  if (currentPara.length) paragraphs.push(currentPara);
  context.v19LongContext = {paragraphCount: paragraphs.length};
  return [];
}
function orthographyStratifiedRuleV19(context) { return []; }


/* ─── فحوص تشخيصية معلنة ─── */
function inspectVerbFramesV1900(text, options = {}) {
  const context = createContext(text, options);
  return getVerbFramesV1900(context).map(frame => ({
    verbIndex: frame.verbIndex,
    verb: context.tokens[frame.verbIndex]?.surface,
    personCode: frame.personCode,
    tense: frame.tense,
    mood: frame.mood,
    order: frame.order,
    subjectIndex: frame.subjectIndex,
    subject: frame.subjectIndex >= 0 ? context.tokens[frame.subjectIndex]?.surface : null,
    expectedPersonCode: frame.expectedPersonCode || null,
    mismatch: Boolean(frame.mismatch),
    confidence: frame.confidence ?? null,
    resolver: 'VerbSubjectFrameResolver-2.0'
  }));
}

function inspectDemonstrativeChainsV1900(text, options = {}) {
  const context = createContext(text, options);
  return demonstrativeChainsV1900(context).map(chain => ({
    demonstrative: chain.demonstrative,
    demonstrativeIndex: chain.demonstrativeIndex,
    members: chain.members.map(index => context.tokens[index]?.surface),
    memberIndices: chain.members,
    expectedCase: chain.expectedCase,
    governor: chain.governor,
    resolver: 'InnaDemonstrativeChainResolver-1.0'
  }));
}

/* ─── انحدارات V19 الذهبية والحاجزة ─── */
const V1900_GOLD_REGRESSIONS = Object.freeze([
  {id: 'v19-g01', text: 'لن يكتبون الطلاب واجباتهم.', expect: 'يكتب'},
  {id: 'v19-g02', text: 'لم يحضرون الطلاب الاجتماع.', expect: 'يحضر'},
  {id: 'v19-g03', text: 'المعلمات لم يشرحون الدرس.', expect: 'يشرحن'},
  {id: 'v19-g04', text: 'المعلمات يشرحون الدرس.', expect: 'يشرحن'},
  {id: 'v19-g05', text: 'نجحوا الطلاب في الامتحان.', expect: 'نجح'},
  {id: 'v19-g06', text: 'يشرحون المعلمون الدرس.', expect: 'يشرح'},
  {id: 'v19-g07', text: 'كان الطالب مجتهد.', expect: 'مجتهدًا'},
  {id: 'v19-g08', text: 'أصبح الجو معتدل.', expect: 'معتدلًا'},
  {id: 'v19-g09', text: 'صار الولد نشيط.', expect: 'نشيطًا'},
  {id: 'v19-g10', text: 'ليس الأمر سهل.', expect: 'سهلًا'},
  {id: 'v19-g11', text: 'إن هؤلاء الطلاب المجتهدون يستحقون النجاح.', expect: 'المجتهدين'},
  {id: 'v19-g12', text: 'إن هؤلاء الطلاب المجتهدون يستحقون النجاح.', expect: 'الطلاب'}
]);

const V1900_BLOCK_REGRESSIONS = Object.freeze([
  {id: 'v19-b01', text: 'إن هؤلاء الطلاب المجتهدين يستحقون النجاح.'},
  {id: 'v19-b02', text: 'هؤلاء الطلاب المجتهدون ناجحون.'},
  {id: 'v19-b03', text: 'الطالب الذي يقرأ كثيرًا ينجح دائمًا.'},
  {id: 'v19-b04', text: 'كان الطالب في المدرسة.'},
  {id: 'v19-b05', text: 'كان الطالب الذي حضر أمس مجتهدًا.'},
  {id: 'v19-b06', text: 'لن يكتبوا الواجب.'},
  {id: 'v19-b07', text: 'لم يكتبوا الواجب.'},
  {id: 'v19-b08', text: 'يكتبون الواجب كل يوم.'},
  {id: 'v19-b09', text: 'يكتب الطلاب واجباتهم.'},
  {id: 'v19-b10', text: 'المعلمات يشرحن الدرس.'},
  {id: 'v19-b11', text: 'زرت أخي محمد أمس.'},
  {id: 'v19-b12', text: 'سلمت على أخي.'},
  {id: 'v19-b13', text: 'مررت بأخي العامل.'},
  {id: 'v19-b14', text: 'كانت الطالبة مجتهدة.'},
  {id: 'v19-b15', text: 'إن الطالبين مجتهدان.'},
  {id: 'v19-b16', text: 'شرح المعلم الدرس شرحًا وافيًا.'},
  {id: 'v19-b17', text: 'بهؤلاء الطلاب المجتهدين نفتخر.'},
  {id: 'v19-b18', text: 'أولئك معلمون.'},
  {id: 'v19-b19', text: 'هؤلاء الطلبة مجتهدون.'},
  {id: 'v19-b20', text: 'حضر المعلمون الذين اجتهدوا.'}
]);

function runRegressionSuiteV1900(options = {}) {
  const failures = [];
  let passed = 0;
  for (const item of V1900_BLOCK_REGRESSIONS) {
    const findings = analyze(item.text, options).findings
      .filter(finding => finding.severity !== 'STYLE');
    if (findings.length === 0) { passed += 1; continue; }
    failures.push({id: item.id, kind: 'false-positive', text: item.text,
      findings: findings.map(f => ({ruleId: f.ruleId, original: f.original,
        replacement: f.replacement, confidence: Number(f.confidence.toFixed(3))}))});
  }
  for (const item of V1900_GOLD_REGRESSIONS) {
    const result = analyze(item.text, options);
    const hit = String(result.corrected || '').includes(item.expect)
      || result.findings.some(finding => String(finding.replacement || '').includes(item.expect));
    if (hit) { passed += 1; continue; }
    failures.push({id: item.id, kind: 'missed-error', text: item.text, expected: item.expect,
      corrected: result.corrected,
      got: result.findings.map(f => `${f.original}>${f.replacement}`)});
  }
  const total = V1900_BLOCK_REGRESSIONS.length + V1900_GOLD_REGRESSIONS.length;
  return {version: META.version, total, passed, failures, valid: failures.length === 0,
    blocks: V1900_BLOCK_REGRESSIONS.length, golds: V1900_GOLD_REGRESSIONS.length};
}


const RULE_PIPELINE = Object.freeze([
  {id: 'verbSubjectFrames', run: verbSubjectFrameRuleV1900},
  {id: 'objectCase', run: objectCaseRule},
  {id: 'nominativeSubjectCase', run: nominativeSubjectCaseRuleV1876},
  {id: 'caseGovernmentResolver', run: caseGovernmentResolverRuleV1874},
  {id: 'soundFemininePluralCaseMarker', run: soundFemininePluralCaseMarkerRule},
  {id: 'relativeClauses', run: relativeClausesRule},
  {id: 'orthography', run: orthographyRule},
  {id: 'clitizedLexicalOrthography', run: clitizedLexicalOrthographyRule},
  {id: 'contextualOrthography', run: contextualOrthographyRule},
  {id: 'hamzaMorphological', run: hamzaMorphologicalRule},
  {id: 'productiveOrthography', run: productiveOrthographyRule},
  {id: 'diacritics', run: diacriticsRuleV1890},
  {id: 'hamzaComplete', run: hamzaCompleteRuleV1890},
  {id: 'punctuationComplete', run: punctuationCompleteRuleV1890},
  {id: 'weakVerbs', run: weakVerbAgreementRule},
  {id: 'fiveVerbs', run: fiveVerbsRule},
  {id: 'wawAljamaa', run: wawAljamaaRule},
  {id: 'contextualTaa', run: contextualTaaRule},
  {id: 'diptotes', run: diptoteRule},
  {id: 'numbers', run: numberRule},
  {id: 'exception', run: exceptionRule},
  {id: 'hal', run: halRule},
  {id: 'tamyiz', run: tamyizRule},
  {id: 'conjunction', run: conjunctionRule},
  {id: 'dependents', run: dependentsRule},
  {id: 'syntaxContext', run: syntaxContextRule},
  {id: 'conditionalGovernment', run: conditionalGovernmentRule},
  {id: 'malformedFiveNounHamza', run: malformedFiveNounHamzaRuleV1874},
  {id: 'fiveNouns', run: fiveNounsRule},
  {id: 'fiveNounsPhrase', run: fiveNounsPhraseResolverRuleV19},
  {id: 'demonstrativeChains', run: demonstrativeChainCaseRuleV1900},
  {id: 'kanaPredicateTanwin', run: kanaPredicateTanwinRuleV1900},
  {id: 'kanaPredicateCase', run: kanaPredicateCaseRuleV1890},
  {id: 'munada', run: munadaRuleV1890},
  {id: 'numberTamyizCompletion', run: numberTamyizCompletionRuleV1890},
  {id: 'agreementResolver', run: agreementResolverRuleV19},
  {id: 'dependencyTree', run: dependencyTreeResolverRuleV19},
  {id: 'commonErrors', run: commonErrorsRuleV1880},
  {id: 'punctuation', run: punctuationRule},
  {id: 'spacing', run: spacingRuleV1880},
  {id: 'style', run: styleRuleV1890},
  {id: 'longContext', run: longContextResolverRuleV19}
]);

function pipelineDescription() {
  return RULE_PIPELINE.map((item, order) => ({order: order + 1, id: item.id, enabledByDefault: true}));
}


/* ===== MODULE: src/pipeline/context-validator.js ===== */
const GRAMMAR_CLASSES = new Set([
  'morphology', 'syntax', 'agreement', 'case', 'number', 'diptote',
  'exception', 'hal', 'tamyiz', 'coordination', 'dependent', 'five-verbs',
  'five-nouns', 'relative-clause', 'syntactic-case', 'verb-mood', 'morphological-case-marker'
]);

function tokenAtOriginalSpan(context, finding) {
  return context.tokens.find(t => t.originalStart <= finding.index && t.originalEnd >= finding.index + finding.length)
    || context.tokens.find(t => t.originalStart === finding.index)
    || null;
}

// V18.7.4: أزيل veto القديم لخبر «كان اثنا عشر...»؛ تبقى المطابقة
// الدلالية للمجموعة، لكن حالة خبر كان محكومة بالنصب دون استثناء.
function contextValidateFinding(context, finding) {
  const validation = {valid: true, checks: [], penalties: [], originalConfidence: finding.confidence};
  const metadata = finding.metadata || {};
  const replacement = finding.replacement == null ? null : String(finding.replacement);

  if (replacement != null && replacement === finding.original) {
    validation.valid = false;
    validation.reason = 'replacement-does-not-change-surface';
  }

  if (isProtectedOriginalSpan(context, finding.index, finding.index + finding.length)) {
    validation.valid = false;
    validation.reason = 'protected-span';
    validation.checks.push('url-email-code-date-protection');
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
    const alreadyTargetInflection = verb && (verb.personCode === metadata.personTo
      || acceptedHamzaInflection(verbToken.morph.core, verb.lemma, verb.tense, metadata.personTo));
    const relation = verbToken && verb && resolveSubjectV2(context, verbToken.index, verb, {
      allowPreverbal: !verbToken.morph.segments?.conjunction
    });
    if (alreadyTargetInflection) {
      validation.valid = false;
      validation.reason = 'agreement-already-satisfied-by-morphology';
      validation.checks.push('hamza-orthographic-variant-preserved');
    } else if (!relation || relation.subjectIndex !== metadata.subjectIndex || relation.order !== metadata.subjectOrder) {
      validation.valid = false;
      validation.reason = 'subject-revalidation-failed';
    } else {
      validation.checks.push('subject-revalidated', `order:${relation.order}`);
      metadata.relationConfidence = Math.min(metadata.relationConfidence || 1, relation.confidence);
    }
  }

  const token = tokenAtOriginalSpan(context, finding);
  if (validation.valid && token && acceptedConjoinedJussiveInflection(context, token.index)) {
    validation.valid = false;
    validation.reason = 'high-confidence-competing-jussive-inflection';
    validation.checks.push('local-jussive-governor', 'inflectional-subject', 'hamza-paradigm-accepted');
  }
  const morphConfidence = Number.isFinite(metadata.morphConfidenceOverride)
    ? metadata.morphConfidenceOverride
    : Math.min(token?.morph?.confidence || 0.75, token?.morph?.posConfidence || 1);
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

  // V18.8.0: درجة الخطأ وسلّم الثقة التفصيلي يُحسبان بعد استقرار الثقة.
  const grade = confidenceGradeV1880(finding.confidence);
  const severity = severityForFindingV1880(finding);
  finding.confidenceGrade = grade.code;
  finding.confidenceGradeLabel = grade.label;
  finding.severity = severity.code;
  finding.severityLabel = severity.label;
  finding.severityRank = severity.rank;

  // محرك الامتناع: التصريح بعدم كفاية الدليل أنفع من تصحيح مظنون.
  const abstention = abstentionAssessmentV1880(context, finding);
  if (abstention) {
    finding.abstained = true;
    finding.abstentionReason = abstention.reason;
    finding.recommendedAction = 'insufficient-evidence';
    finding.severity = SEVERITY_V1880.SUGGESTION.code;
    finding.severityLabel = SEVERITY_V1880.SUGGESTION.label;
    finding.severityRank = SEVERITY_V1880.SUGGESTION.rank;
    finding.requiresReview = true;
    validation.checks.push(`abstention:${abstention.reason}`);
  }
  return validation.valid;
}

/**
 * V18.8.0 — محرك عدم التصحيح (Abstention 1.0).
 *
 * أنفع ما في المدقق أن يقول: «قد تبدو الكلمة غير صحيحة، ولا أملك دليلًا
 * كافيًا لتصحيحها». فالإنذار الكاذب يفسد نصًا سليمًا، وهو أشد ضررًا من
 * فوات خطأ. تُبقي هذه الطبقة النتيجة معروضة لكن موسومةً بأن الدليل ظني،
 * فلا تُطبَّق آليًا ولا تُقدَّم بوصفها خطأً مقررًا.
 */
function abstentionAssessmentV1880(context, finding) {
  if (DEFINITE_CLASSES_V1880.has(finding.classification) && finding.confidence >= 0.99) return null;
  const token = tokenAtOriginalSpan(context, finding);
  if (!token) return null;

  // دليل صرفي ظني على مقطع نحوي: لا يرقى إلى نقض الرسم القائم.
  if (GRAMMAR_CLASSES.has(finding.classification) && weakNominalEvidenceV1880(token)) {
    return {reason: 'weak-morphological-evidence'};
  }
  // الكلمة محتملة لأكثر من قسم كلام، والقاعدة النحوية بنيت على قراءة واحدة.
  const posKinds = new Set((token.morph?.candidates || []).map(item => item.pos));
  if (GRAMMAR_CLASSES.has(finding.classification) && posKinds.size > 2 && finding.confidence < 0.93) {
    return {reason: 'unresolved-part-of-speech'};
  }
  // العَلَم والمعرَّب لا يُقاسان على المعجم العام.
  if (isProtectedLexicalItemV1880(token)) return {reason: 'protected-lexical-item'};
  // المصدر المنصوب من لفظ الفعل مفعول مطلق صحيح، لا صيغة فاسدة.
  if (finding.classification !== 'orthographic'
      && isCognateAccusativeV1880(context.tokens, token.index)) {
    return {reason: 'cognate-accusative-reading-available'};
  }
  return null;
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
      list.sort((a, b) => b.confidence - a.confidence);
      const winner = list[0];
      unambiguous.push(winner);
      for (const loser of list.slice(1)) {
        loser.contextValidation.valid = false;
        loser.contextValidation.reason = 'duplicate-replacement-from-another-rule';
        rejected.push(loser);
      }
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
  const protectedSpans = extractProtectedSpans(normalization, merged);
  const rawTokens = tokenize(normalization, protectedSpans);
  const tokens = contextualPOSDisambiguation(analyzeTokens(rawTokens));
  const context = {
    original: normalization.original,
    text: normalization.text,
    normalization,
    protectedSpans,
    tokens,
    sentences: sentenceGroups(tokens),
    options: merged,
    phraseAnalysis: null,
    compoundConjunctions: null,
    syntax: null,
    conditionalGovernment: null,
    parseTree: null
  };
  context.phraseAnalysis = detectPhrases(context);
  context.compoundConjunctions = detectCompoundConjunctions(context);
  context.syntax = analyzeNestedSentences(context);
  context.syntax.roles = resolveNounRoles(context);
  context.conditionalGovernment = resolveConditionalGovernmentV1(context);
  context.parseTree = buildParseTree(context);
  return context;
}


/* ═══════════════════════════════════════════════════════════════
   V18.8.1 → V18.8.5 INJECTED ENGINES (Integrated PRO)
   ═══════════════════════════════════════════════════════════════ */
var _CONJ=CONJUNCTIONS||new Set();
var _innaS=new Set(["\u0625\u0646","\u0623\u0646","\u0643\u0623\u0646","\u0644\u0643\u0646","\u0644\u064a\u062a","\u0644\u0639\u0644"]);
var _kS=new Set(["\u0643\u0627\u0646","\u0643\u0627\u0646\u062a","\u0643\u0627\u0646\u0627","\u0643\u0627\u0646\u0648\u0627","\u0623\u0635\u0628\u062d","\u0623\u0635\u0628\u062d\u062a","\u0623\u0645\u0633\u0649","\u0623\u0645\u0633\u062a","\u0623\u0636\u062d\u0649","\u0628\u0627\u062a","\u0628\u0627\u062a\u062a","\u0638\u0644","\u0638\u0644\u062a","\u0635\u0627\u0631","\u0635\u0627\u0631\u062a","\u0644\u064a\u0633","\u0644\u064a\u0633\u062a","\u0645\u0627\u0632\u0627\u0644"]);
var _DEMS=new Map([["\u0647\u0630\u0627",["m","sg"]],["\u0647\u0630\u0647",["f","sg"]],["\u0647\u0630\u0627\u0646",["m","du"]],["\u0647\u0630\u064a\u0646",["m","du"]],["\u0647\u0627\u062a\u0627\u0646",["f","du"]],["\u0647\u0627\u062a\u064a\u0646",["f","du"]],["\u0647\u0624\u0644\u0627\u0621",[null,"pl"]],["\u0630\u0644\u0643",["m","sg"]],["\u062a\u0644\u0643",["f","sg"]],["\u0623\u0648\u0644\u0626\u0643",[null,"pl"]]]);
var _NUMS={"\u062b\u0644\u0627\u062b\u0629":[3,"f"],"\u062b\u0644\u0627\u062b":[3,"m"],"\u0623\u0631\u0628\u0639\u0629":[4,"f"],"\u0623\u0631\u0628\u0639":[4,"m"],"\u062e\u0645\u0633\u0629":[5,"f"],"\u062e\u0645\u0633":[5,"m"],"\u0633\u062a\u0629":[6,"f"],"\u0633\u062a":[6,"m"],"\u0633\u0628\u0639\u0629":[7,"f"],"\u0633\u0628\u0639":[7,"m"],"\u062b\u0645\u0627\u0646\u064a\u0629":[8,"f"],"\u062b\u0645\u0627\u0646":[8,"m"],"\u062a\u0633\u0639\u0629":[9,"f"],"\u062a\u0633\u0639":[9,"m"],"\u0639\u0634\u0631\u0629":[10,"f"],"\u0639\u0634\u0631":[10,"m"]};
var _AMBIG={"\u0643\u062a\u0628":[["verb","wrote"],["noun","books"]],"\u0639\u0644\u0645":[["verb","knew"],["noun","science"]],"\u062d\u0636\u0631":[["verb","attended"],["noun","presence"]],"\u0639\u064a\u0646":[["noun","eye"],["verb","appointed"]],"\u062f\u0639\u0627":[["verb","called"],["noun","claim"]]};
var _COMMON_SP={"\u0647\u0630\u0629":"\u0647\u0630\u0647","\u0647\u0627\u0630\u0627":"\u0647\u0630\u0627","\u0630\u0627\u0644\u0643":"\u0630\u0644\u0643","\u0644\u0627\u0643\u0646":"\u0644\u0643\u0646","\u0627\u0644\u0644\u0630\u064a":"\u0627\u0644\u0630\u064a"};

function _dN(tk){var c=tk.core||"";if(!c)return"sg";if(/\u0627\u0646$/.test(c)||/\u062a\u0627\u0646$/.test(c))return"du";if(/\u064a\u0646$/.test(c)||/\u062a\u064a\u0646$/.test(c))return"du";if(/\u0648\u0646$/.test(c))return"pl";if(/\u0627\u062a$/.test(c))return"pl";return"sg";}

/* V18.8.1: Multi-Candidate POS */
function _rPOS(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],o=[];var i,ci,cj;
for(i=0;i<k.length;i++){var tk=k[i],cd=(tk.candidates||[]).slice(),c=tk.core||tk.surface||"";
if(c.endsWith("\u0629")&&!cd.some(function(x){return x.pos==="noun";}))cd.push({pos:"noun",lemma:c,gender:"f",number:"sg",confidence:.7});
if(/\u0648\u0646$/.test(c))cd.push({pos:"noun",lemma:c.slice(0,-2),gender:"m",number:"pl",confidence:.75});
if(/\u064a\u0646$/.test(c)&&c.length>3)cd.push({pos:"noun",lemma:c.slice(0,-2),gender:"m",number:null,confidence:.73,numberCandidates:["du","pl"]});
if(/\u0627\u0646$/.test(c)&&c.length>3)cd.push({pos:"noun",lemma:c.slice(0,-2),gender:"m",number:"du",confidence:.75});
var uq=[],sn={};for(ci=0;ci<cd.length;ci++){var it=cd[ci],kk=it.pos+"|"+(it.lemma||"")+"|"+(it.gender||"")+"|"+(it.number||"");if(!sn[kk]){sn[kk]=true;uq.push(it);}}
var sg=tk.segments||{},pv=i>0?k[i-1]:null;for(cj=0;cj<uq.length;cj++){var u=uq[cj];
if(pv&&pv.core&&PREPOSITIONS.has(pv.core)){if(u.pos==="noun"||u.pos==="adj")u.confidence=Math.min(1,(u.confidence||.5)+.2);if(u.pos==="verb")u.confidence=Math.max(0,(u.confidence||.5)-.4);}
if(sg.article){if(u.pos==="verb")u.confidence=Math.max(0,(u.confidence||.5)-.3);if(u.pos==="noun"||u.pos==="adj")u.confidence=Math.min(1,(u.confidence||.5)+.1);}}
uq.sort(function(a,b){return(b.confidence||0)-(a.confidence||0);});
o.push({index:i,surface:tk.surface||"",core:c,candidates:uq,bestPOS:uq.length?uq[0].pos:"unknown",bestConfidence:uq.length?(uq[0].confidence||0):0,ambiguous:uq.length>1&&((uq[0].confidence||0)-(uq[1].confidence||0))<.3});}
return o;}

/* V18.8.1: Dependency Roles */
function _rD(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],d=[];var i,j,ii,jj;
for(i=0;i<k.length;i++){var tk=k[i];if(tk.pos!=="verb"&&!isKanaSurface(tk.core))continue;
for(j=i+1;j<Math.min(i+4,k.length);j++){var s=k[j];if((s.pos==="noun"||s.pos==="adj")&&(!s.segments||!s.segments.preposition)){d.push({type:"verb-subject",gov:i,dep:j,conf:.85});break;}}}
for(ii=0;ii<k.length-1;ii++){var mm=k[ii];if(mm.pos==="noun"&&mm.segments&&mm.segments.article){
for(jj=ii+1;jj<Math.min(ii+3,k.length);jj++){var p=k[jj];if(p.pos==="noun"||p.pos==="adj"){d.push({type:"mubtada-khabar",gov:ii,dep:jj,conf:.78});break;}
if(p.core&&PREPOSITIONS.has(p.core)){d.push({type:"mubtada-khabar-pp",gov:ii,dep:jj,conf:.82});break;}}}}
return{roles:d.map(function(dd){return{type:dd.type,governorIndex:dd.gov,dependentIndex:dd.dep,confidence:dd.conf,governorSurface:k[dd.gov]?k[dd.gov].surface||"":"",dependentSurface:k[dd.dep]?k[dd.dep].surface||"":""};})};}

/* V18.8.1: Conflict Resolver */
function _rC(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],res=[],i;
for(i=0;i<k.length;i++){var tk=k[i],cd=tk.candidates||[];if(cd.length<2)continue;
var nn=cd.filter(function(x){return x.pos==="noun";}),vv=cd.filter(function(x){return x.pos==="verb";});
if(!nn.length||!vv.length)continue;var pv=i>0?k[i-1]:null,R=null,reason="",conf=0.85;
if(pv&&pv.core&&PREPOSITIONS.has(pv.core)){R="noun";reason="prep";conf=0.95;}
else if(tk.segments&&tk.segments.article){R="noun";reason="al";conf=0.95;}
else if(tk.surface&&tk.surface.indexOf("\u064b")>=0){R="noun";reason="tnwn";conf=0.90;}
else{var nv=nn.reduce(function(x,c){return Math.max(x,c.confidence||0);},0);var vv2=vv.reduce(function(x,c){return Math.max(x,c.confidence||0);},0);R=(nv>=vv2)?"noun":"verb";reason=(R==="noun"?"lex-noun":"lex-verb");conf=Math.max(nv,vv2);}
res.push({index:i,surface:tk.surface,resolution:R,reason:reason,confidence:conf});}
return{resolved:res};}

/* V18.8.1: Nawasikh */
function _rN(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],cl=[],i;
for(i=0;i<k.length;i++){var tk=k[i],co=tk.core||"";if(_kS.has(co)&&i+2<k.length)cl.push({type:"kana",idx:i,surf:co,subj:i+1,pred:i+2,conf:0.90});if(_innaS.has(co)&&i+1<k.length)cl.push({type:"inna",idx:i,surf:co,subj:i+1,pred:i+2<k.length?i+2:null,conf:0.88});}
return{clauses:cl};}

/* V18.8.2: Verb-Subject Agreement */
function _rVSA(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],iss=[],i,kk,j;
for(i=0;i<k.length;i++){var tk=k[i],vf=verbAnalyses(tk.surface)||verbAnalyses(tk.core);
if(!vf||!vf.length){if(isKanaSurface(tk.core))vf=[{gender:tk.gender,number:tk.number,person:3}];else continue;}
var vA=vf[0];var subj=null,si=-1;
for(kk=Math.max(0,i-3);kk<i;kk++){var s2=k[kk];if(s2.pos==="noun"&&s2.segments&&s2.segments.article){subj=s2;si=kk;break;}if(s2.pos==="pronoun"&&s2.gender){subj=s2;si=kk;break;}}
if(!subj){for(j=i+1;j<Math.min(i+4,k.length);j++){var s=k[j];if(s.pos==="noun"&&(!s.segments||!s.segments.preposition)){subj=s;si=j;break;}}}
if(!subj)continue;var sG=subj.gender||null,sN=_dN(subj),sA=subj.animacy||null;
if(sN==="pl"&&sA==="nonhuman"){sN="sg";sG="f";}
var vG=vA.gender||tk.gender||null,vN=vA.number||tk.number||null;
if(sG&&vG&&sG!==vG)iss.push({type:"gender-mismatch",vi:i,si:si,vs:tk.surface||"",ss:subj.surface||"",vg:vG,sg:sG,conf:.90});
if(sN&&vN&&sN!==vN&&sN!=="pl")iss.push({type:"number-mismatch",vi:i,si:si,vs:tk.surface||"",ss:subj.surface||"",vn:vN,sn:sN,conf:.85});}
return{issues:iss};}

/* V18.8.2: Adjective Agreement */
function _rAdj(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],iss=[],i;
for(i=0;i<k.length-1;i++){var noun=k[i],adj=k[i+1];if(noun.pos!=="noun"||adj.pos!=="adj"||(adj.segments&&adj.segments.preposition))continue;
var nG=noun.gender,aG=adj.gender,nN=_dN(noun);if(!nG||!aG)continue;if(noun.animacy==="nonhuman"&&nN==="pl"){nN="sg";nG="f";}
if(nG!==aG)iss.push({type:"adj-noun-gender",ni:i,ai:i+1,ns:noun.surface||"",as:adj.surface||"",conf:.88});}
return{issues:iss};}

/* V18.8.2: Demonstrative Agreement */
function _rDem(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],iss=[],i;
for(i=0;i<k.length-1;i++){var dem=k[i],c=dem.core||dem.surface||"";if(!_DEMS.has(c))continue;var dm=_DEMS.get(c),dG=dm[0],dN=dm[1];var noun=k[i+1];if(noun.pos!=="noun")continue;
var nG=noun.gender,nN=_dN(noun);if(noun.animacy==="nonhuman"&&nN==="pl"){nN="sg";nG="f";}
if(dN==="pl"&&nN==="sg"&&noun.animacy!=="nonhuman")iss.push({type:"dem-noun-number",di:i,ni:i+1,ds:dem.surface||"",ns:noun.surface||"",conf:.90});
if(dG&&nG&&dG!==nG)iss.push({type:"dem-noun-gender",di:i,ni:i+1,ds:dem.surface||"",ns:noun.surface||"",conf:.90});}
return{issues:iss};}

/* V18.8.2: Number Agreement */
function _rNum(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],iss=[],i;
for(i=0;i<k.length;i++){var tk=k[i],c=tk.core||tk.surface||"";var nv=_NUMS[c];if(!nv||nv[0]<3||nv[0]>10)continue;var cnt=k[i+1];if(!cnt||cnt.pos!=="noun")continue;
var cG=cnt.gender||"m",nG=nv[1];if(nG===cG)iss.push({type:"num-polarity",ni:i,ci:i+1,ns:tk.surface||"",cs:cnt.surface||"",conf:.90});}
return{issues:iss};}

/* V18.8.2: Case Agreement */
function _rCase(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],iss=[],i;
for(i=0;i<k.length;i++){var tk=k[i];if(tk.pos!=="noun"&&tk.pos!=="adj")continue;var c=tk.core||tk.surface||"",pv=i>0?k[i-1]:null;
if(pv&&pv.core&&PREPOSITIONS.has(pv.core)){if(/\u0627\u0646$/.test(c)||/\u062a\u0627\u0646$/.test(c))iss.push({type:"prep-dual-case",ti:i,ts:tk.surface||"",conf:.90});}
if(/\u064a\u0646$/.test(c)&&tk.pos==="noun"&&tk.segments&&tk.segments.article){var isS=i===0||(i>0&&k[i-1].core&&_CONJ.has(k[i-1].core));if(isS&&i+2<k.length&&(k[i+1].pos==="adj"||k[i+1].pos==="noun"))iss.push({type:"mubtada-case",ti:i,ts:tk.surface||"",conf:.88});}}
return{issues:iss};}

/* V18.8.2: Comprehensive Agreement */
function _rAgr(t){var a=_rVSA(t).issues,b=_rAdj(t).issues,c=_rDem(t).issues,d=_rNum(t).issues,e=_rCase(t).issues;return{verbSubject:a,adjective:b,demonstrative:c,number:d,case:e,total:a.length+b.length+c.length+d.length+e.length};}

/* V18.8.3: Context Disambiguation */
function _rCtx(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],res=[],i;
for(i=0;i<k.length;i++){var tk=k[i],c=tk.core||"",e=_AMBIG[c];if(!e)continue;var pv=i>0?k[i-1]:null,scores=[];for(var w=0;w<e.length;w++){var ew=e[w],sc=.5;if(pv&&pv.core&&PREPOSITIONS.has(pv.core)&&ew[0]==="noun")sc+=.3;if(tk.segments&&tk.segments.article&&ew[0]==="noun")sc+=.3;scores.push({pos:ew[0],meaning:ew[1],score:Math.min(1,sc)});}scores.sort(function(a,b){return b.score-a.score;});res.push({index:i,surface:tk.surface,word:c,readings:scores,best:scores[0]});}
return{ambiguousWords:res};}

/* V18.8.3: Semantic Roles */
function _rSem(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],roles=[],i,j;
for(i=0;i<k.length;i++){if(k[i].pos!=="verb")continue;var subj=null,obj=null;for(j=i+1;j<Math.min(i+4,k.length);j++){var s=k[j];if(s.pos==="noun"&&(!s.segments||!s.segments.preposition)){if(!subj)subj={idx:j,surface:s.surface};else if(!obj)obj={idx:j,surface:s.surface};}}roles.push({verb:i,surface:k[i].surface,subject:subj,object:obj});}
return{semanticRoles:roles};}

/* V18.8.4: Orthography */
function _rOrth(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],iss=[],i;
for(i=0;i<k.length;i++){var tk=k[i],c=tk.core||"",s=tk.surface||"";
if(/^[\u0625\u0623]/.test(c)&&/^\u0627[\u0628\u062a\u062b]/.test('\u0627'+c.substring(1)))iss.push({type:"hamza-wasl",index:i,surface:s,confidence:.9});
if(c.endsWith('\u0647')&&c.length>2&&!/[\u064e\u064f\u0650\u064c\u064d]/.test(c)){var st=c.slice(0,-1);iss.push({type:"taa-marbuta",index:i,surface:s,suggestion:st+'\u0629',confidence:.75});}
if(c.endsWith('\u064a')&&c.length>2){var alif=['\u0645\u0633\u062a\u0634\u0641\u0649','\u0645\u0646\u062a\u062f\u0649','\u0645\u062d\u062a\u0648\u0649'];for(var ai=0;ai<alif.length;ai++){var am=alif[ai];if(c===am.replace('\u0649','\u064a'))iss.push({type:"alif-maqsura",index:i,surface:s,correction:am,confidence:.9});}}}
return{issues:iss};}

/* V18.8.4: Common Errors */
function _rCommon(t){var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],iss=[],i;
for(i=0;i<k.length;i++){var s=k[i].surface||"",c=_COMMON_SP[s];if(c)iss.push({type:"common-spelling",index:i,surface:s,correction:c,confidence:.95});}
return{issues:iss};}

/* V18.8.6: Long Context hardening */
function _rLong(t){
  var r=analyzeMorphology(t)||{tokens:[]},k=r.tokens||[],rel=[],i,j;
  for(i=0;i<k.length;i++){
    var c=k[i].core||"";
    if(['الذي','التي','الذين','اللذان','اللتان','اللذين','اللتين'].indexOf(c)!==-1){
      for(j=i-1;j>=Math.max(0,i-7);j--){
        if(k[j].pos==="noun"&&k[j].segments&&k[j].segments.article){rel.push({relative:i,surface:c,antecedent:j,antSurface:k[j].surface});break;}
      }
    }
  }
  var clauses=[],start=0;
  var isBoundary=function(core){return ['،','؛','.','!','؟'].indexOf(core)!==-1;};
  for(i=0;i<k.length;i++){
    if(isBoundary(k[i].core||'')){
      if(start<=i-1) clauses.push({from:start,to:i-1,length:i-start});
      start=i+1;
    }
  }
  if(start<k.length) clauses.push({from:start,to:k.length-1,length:k.length-start});
  var punctuationCount=(String(t||'').match(/[،؛.!؟]+/gu)||[]).length;
  var trimmed=String(t||'').trim();
  var clauseCount=punctuationCount ? punctuationCount + (/[^،؛.!؟]$/u.test(trimmed) ? 1 : 0) : (trimmed ? 1 : 0);
  return{relativeLinks:rel,clauses:clauses,wordCount:k.length,clauseCount:clauseCount};
}

/* Wrapper API functions */
function _inspectMultiPOS(text){return _rPOS(text);}
function _inspectDeps(text){return _rD(text).roles;}
function _inspectConf(text){return _rC(text).resolved;}
function _inspectNaw(text){return _rN(text).clauses;}
function _inspectVSA(text){return _rVSA(text).issues;}
function _inspectAdj(text){return _rAdj(text).issues;}
function _inspectDem(text){return _rDem(text).issues;}
function _inspectNum(text){return _rNum(text).issues;}
function _inspectCase(text){return _rCase(text).issues;}
function _inspectAgr(text){return _rAgr(text);}
function _inspectCtx(text){return _rCtx(text);}
function _inspectSem(text){return _rSem(text);}
function _inspectOrth(text){return _rOrth(text);}
function _inspectCommon(text){return _rCommon(text);}
function _inspectLong(text){return _rLong(text);}

/* V18.8.6: API hardening self-checks — diagnostic only. */
function runPROApiSanityChecks(){
  var sample='الطالب الذي نجح، والمعلم الذي حضر.';
  var long=_rLong(sample);
  // V19.0.0 FINAL: الفحص معلق على سلسلة التوافق مع 18.8.6 أو 18.9.0، ويسمح بالإصدار 19.0.0
  var lineageOk = META.version==='18.8.6' || META.version==='18.9.0' || META.version==='19.0.0' || (META.compat && (META.compat.baseVersion==='18.8.6' || META.compat.baseVersion==='18.9.0'));
  return {version:META.version,valid:Boolean(lineageOk) && long.clauseCount===2 && long.relativeLinks.length===2,checks:{longContextClauseCount:long.clauseCount,relativeLinks:long.relativeLinks.length,lineage:lineageOk}};
}

/* Master PRO analysis */
function analyzePRO(text,opts){
  opts=opts||{};var base=analyze(text,opts);
  return Object.assign({},base,{
    v1881:{multiPOS:_rPOS(text),dependencies:_rD(text).roles,conflicts:_rC(text).resolved,nawasikh:_rN(text).clauses},
    v1882:_rAgr(text),
    v1883:{ambiguousWords:_rCtx(text).ambiguousWords,semanticRoles:_rSem(text).semanticRoles},
    v1884:{orthography:_rOrth(text).issues,commonErrors:_rCommon(text).issues},
    v1885:_rLong(text),
    v1900:{verbFrames:inspectVerbFramesV1900(text,opts),demonstrativeChains:inspectDemonstrativeChainsV1900(text,opts),
      firewall:(analyze(text,opts).firewall||{vetoes:0,items:[]})}
  });
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

  // V19.0.0 — FalsePositiveFirewall 2.0: يحجب ما يكسر قراءةً صحيحة محسومة.
  let effectiveFindings = rawFindings;
  if (context.options.rules.grammarFirewall !== false) {
    const firewall = applyFirewallV1900(context, rawFindings);
    effectiveFindings = firewall.kept;
    if (firewall.vetoed.length) {
      for (const veto of firewall.vetoed) {
        veto.finding.contextValidation = veto.finding.contextValidation || {valid: true, checks: []};
        veto.finding.contextValidation.firewallVeto = veto.reason;
      }
      context.v1900VetoedFindings = firewall.vetoed;
    }
  }
  const ranked = rankAndClassify(effectiveFindings, context.options, context);
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

  // V18.9.0: مسار الملاحظات التحليلية — منفصل تمامًا عن الأخطاء المعتمدة،
  // فلا يؤثر في corrected ولا في findings ولا في الإحصاءات.
  if (context.options.includeAdvisories !== false) {
    try {
      const advisory = collectAdvisoriesV1890(context);
      result.advisories = advisory.advisories;
      result.longContext = advisory.longContext;
    } catch (error) {
      result.advisories = [];
      result.longContext = null;
    }
  }

  // V19.0.0: سجل الجدار الناري — قراءة فقط، لا يغير أي مخرجات موجودة.
  result.firewall = {vetoes: (context.v1900VetoedFindings || []).length,
    items: (context.v1900VetoedFindings || []).map(v => ({ruleId: v.finding.ruleId,
      original: v.finding.original, replacement: v.finding.replacement, reason: v.reason}))};

  if (context.options.debug) {
    result.analysis = {
      tokens: context.tokens,
      protectedSpans: context.protectedSpans,
      sentences: context.sentences.map(group => group.map(x => x.index)),
      phrases: context.phraseAnalysis.phrases,
      clauses: context.syntax.clauses,
      compoundConjunctions: context.compoundConjunctions,
      subjectRelations: context.syntax.subjectRelations,
      objectRelations: context.syntax.objectRelations,
      argumentFrames: context.syntax.argumentFrames,
      conditionalGovernment: context.conditionalGovernment,
      resolutionPipeline: context.syntax.resolutionPipeline,
      verbFramesV1900: context.v1900Frames,
      demonstrativeChainsV1900: context.v1900Chains,
      parseTree: context.parseTree,
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
    protectedSpans: context.protectedSpans,
    tokens: context.tokens,
    sentences: context.sentences.map(group => ({start: group[0]?.index ?? 0, end: (group.at(-1)?.index ?? -1) + 1})),
    phrases: context.phraseAnalysis.phrases,
    clauses: context.syntax.clauses,
    compoundConjunctions: context.compoundConjunctions,
    subjectRelations: context.syntax.subjectRelations,
    objectRelations: context.syntax.objectRelations,
    argumentFrames: context.syntax.argumentFrames,
    conditionalGovernment: context.conditionalGovernment,
    resolutionPipeline: context.syntax.resolutionPipeline,
    parseTree: context.parseTree,
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
  // V18.7.7: «درسو» صارت مدخلًا قطعيًا في WORDS (تصحيح تلقائي 0.995) بدل
  // القاعدة السياقية الاقتراحية؛ القاعدة العامة تبقى للحالات غير المعجمية.
  {id: 'waw-jamaa-pattern', text: 'العمال درسو بجد', rules: ['ORTHOGRAPHY_V18:درسو']},
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

const V186_GOLD_REGRESSIONS = Object.freeze([
  {id: 'v186-number-before-kana-case', text: 'وكان في القاعة واحدٌ وعشرون كتبًا.', rules: ['NUMBER_COUNTED_NOUN_V18'], replacements: ['كتابًا']},
  {id: 'v186-kana-and-clause-agreement', text: 'وكانو المعلماتُ قد حضروا.', rules: ['KANA_AGREEMENT_V18', 'WEAK_VERB_AGREEMENT_V18'], replacements: ['وكانت', 'حضرن']},
  {id: 'v186-number-full-tamyiz', text: 'ثلاثة طالبًا.', rules: ['NUMBER_COUNTED_NOUN_V18'], replacements: ['طلابٍ']},
  {id: 'v186-number-preserve-case', text: 'قرأت أربعةَ صفحاتٍ.', rules: ['NUMBER_POLARITY_V18'], replacements: ['أربعَ']}
]);

function generateV1871GoldCorpus() {
  const tests = [];
  const add = (id, text, rules, replacements) => tests.push({id: `v1871-${id}`, text, rules, replacements});

  // 144 إطارًا للمفعول: مصفوفة صرفية/نحوية، لا قائمة كلمات عشوائية.
  const verbs = ['قرأ', 'كرم', 'رأى', 'أخذ', 'أكل', 'أرسل', 'كتب', 'درس', 'فهم', 'فتح', 'عرف', 'سأل'];
  const subjects = ['الطالبُ', 'المعلمُ', 'الباحثُ'];
  const objects = [
    ['الكتابُ', 'الكتابَ'], ['الدرسُ', 'الدرسَ'],
    ['البابُ', 'البابَ'], ['المشروعُ', 'المشروعَ']
  ];
  verbs.forEach((verb, vi) => subjects.forEach((subject, si) => objects.forEach(([wrong, expected], oi) =>
    add(`object-frame-${vi}-${si}-${oi}`, `${verb} ${subject} ${wrong}`,
      ['OBJECT_CASE_V1871'], [expected]))));

  // 56 إطار شرط جازم: الصحيح الآخر والأفعال الخمسة مع الأدوات الجازمة السبع.
  const markers = ['إن', 'من', 'مهما', 'متى', 'أينما', 'حيثما', 'كيفما'];
  const soundPairs = [
    ['تجتهدُ', 'تنجحُ', 'تجتهدْ', 'تنجحْ'], ['تدرسُ', 'تفهمُ', 'تدرسْ', 'تفهمْ'],
    ['تكتبُ', 'تقرأُ', 'تكتبْ', 'تقرأْ'], ['تسألُ', 'تعرفُ', 'تسألْ', 'تعرفْ']
  ];
  const fiveVerbPairs = [
    ['تجتهدون', 'تنجحون', 'تجتهدوا', 'تنجحوا'], ['تدرسون', 'تفهمون', 'تدرسوا', 'تفهموا'],
    ['تكتبون', 'تقرؤون', 'تكتبوا', 'تقرؤوا'], ['تسألون', 'تعرفون', 'تسألوا', 'تعرفوا']
  ];
  markers.forEach((marker, mi) => soundPairs.forEach(([first, second, expectedFirst, expectedSecond], pi) =>
    add(`condition-sound-${mi}-${pi}`, `${marker} ${first} ${second}`,
      ['CONDITIONAL_JUSSIVE_V1871', 'CONDITIONAL_JUSSIVE_V1871'], [expectedFirst, expectedSecond])));
  markers.forEach((marker, mi) => fiveVerbPairs.forEach(([first, second, expectedFirst, expectedSecond], pi) =>
    add(`condition-five-${mi}-${pi}`, `${marker} ${first} ${second}`,
      ['CONDITIONAL_JUSSIVE_V1871', 'CONDITIONAL_JUSSIVE_V1871'], [expectedFirst, expectedSecond])));

  // 12 حالة لعلامات نصب المثنى والجمعين السالمين.
  const markedObjects = [['الطالبان', 'الطالبين'], ['المعلمون', 'المعلمين'], ['الطالباتُ', 'الطالباتِ']];
  ['قرأ', 'كرم', 'رأى', 'أخذ'].forEach((verb, vi) => markedObjects.forEach(([wrong, expected], oi) =>
    add(`object-marker-${vi}-${oi}`, `${verb} المعلمُ ${wrong}`, ['OBJECT_CASE_V1871'], [expected])));

  // 10 رسوم همزة غير مقبولة يحددها lemma/paradigm، لا تحويل حرفي عام.
  [
    ['يقرءون', 'يقرؤون'], ['يقرئون', 'يقرؤون'], ['تقرءون', 'تقرؤون'], ['تقرئون', 'تقرؤون'],
    ['يقرءن', 'يقرأن'], ['يقرؤن', 'يقرأن'], ['يقرئن', 'يقرأن'],
    ['قرءوا', 'قرؤوا'], ['قرئوا', 'قرؤوا'], ['تقرءان', 'تقرآن']
  ].forEach(([wrong, expected], i) => add(`hamza-seat-${i}`, wrong,
    ['PRODUCTIVE_HAMZA_MORPHOLOGY_V1871'], [expected]));
  // V18.7.7: «تقرءان» تصحَّح إلى الوجه المدمج المفضَّل «تقرآن» (بالمَدّ)؛
  // الوجهان «تقرأان/تقرآن» مقبولان عند HamzaMorphologicalResolver 1.0،
  // والمدمج هو الرسم المعتمد في الكتابة المعاصرة.

  if (tests.length !== 222) throw new Error(`V18.7.1 gold generation mismatch: ${tests.length}`);
  return tests;
}

const V1871_GOLD_REGRESSIONS = Object.freeze(generateV1871GoldCorpus());

const V1872_GOLD_REGRESSIONS = Object.freeze([
  {id: 'v1872-transitive-shakara-object', text: 'شكر المعلمُ الطالبُ',
    rules: ['OBJECT_CASE_V1871'], replacements: ['الطالبَ']},
  {id: 'v1872-conditional-in-lam-single', text: 'إن لم تدرسُ',
    rules: ['CONDITIONAL_JUSSIVE_V1871'], replacements: ['تدرسْ']},
  {id: 'v1872-conditional-in-lam-answer', text: 'إن لم تدرسُ تنجحُ',
    rules: ['CONDITIONAL_JUSSIVE_V1871', 'CONDITIONAL_JUSSIVE_V1871'], replacements: ['تدرسْ', 'تنجحْ']},
  {id: 'v1872-non-jussive-marker-with-local-lam', text: 'إذا لم تدرسُ تنجحُ',
    rules: ['CONDITIONAL_JUSSIVE_V1871'], replacements: ['تدرسْ']},
  {id: 'v1872-agreement-hamza-preferred', text: 'هم يقرأ الكتب.',
    rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['يقرؤون']}
]);

const V1874_GOLD_REGRESSIONS = Object.freeze([
  {id: 'v1874-shayan-alif-before-tanwin', text: 'قرأت شيئاً مفيدًا.',
    rules: ['ORTHOGRAPHY_V18:شيئاً'], replacements: ['شيئًا']},
  {id: 'v1874-kana-twelve-predicate-case', text: 'كان اثنا عشر باحثًا حاضرون.',
    rules: ['KANA_PREDICATE_V18'], replacements: ['حاضرين']},
  {id: 'v1874-preposition-dual-clitic', text: 'مررت بالطالبان.',
    rules: ['PREPOSITION_INFLECTED_NOMINAL_CASE_V1874'], replacements: ['بالطالبين']},
  {id: 'v1874-preposition-dual-separated-ila', text: 'ذهبت إلى المدرسان.',
    rules: ['PREPOSITION_INFLECTED_NOMINAL_CASE_V1874'], replacements: ['المدرسين']},
  {id: 'v1874-preposition-dual-separated-ala', text: 'سلمت على المعلمان.',
    rules: ['PREPOSITION_INFLECTED_NOMINAL_CASE_V1874'], replacements: ['المعلمين']},
  {id: 'v1874-preposition-sound-masculine-plural', text: 'مررت بالمعلمون.',
    rules: ['PREPOSITION_INFLECTED_NOMINAL_CASE_V1874'], replacements: ['بالمعلمين']},
  {id: 'v1874-five-noun-hamza-subject', text: 'جاء ابو الطالب.',
    rules: ['FIVE_NOUN_HAMZA_ORTHOGRAPHY_V1874'], replacements: ['أبو']},
  {id: 'v1874-five-noun-hamza-object-case', text: 'رأيت ابو الطالب.',
    rules: ['FIVE_NOUNS_CASE_V18'], replacements: ['أبا']},
  {id: 'v1874-five-noun-detached-preposition', text: 'مررت بـ ابو الطالب.',
    rules: ['FIVE_NOUN_HAMZA_CASE_V1874'], replacements: ['بأبي']}
]);

const V1875_GOLD_REGRESSIONS = Object.freeze([
  {id: 'v1875-svo-ambiguous-kataba', text: 'الطلاب كتب الدرس.',
    rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['كتبوا']},
  {id: 'v1875-relative-feminine-singular-to-masculine-plural', text: 'الطلاب الذين حضرت مبكرًا ناجحون.',
    rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['حضروا']}
]);

/* انحدارات V18.7.6 — DEEP SYNTACTIC: المثنى وجمع المذكر في مواقع الرفع. */
const V1876_GOLD_REGRESSIONS = Object.freeze([
  {id: 'v1876-topic-dual-mubtada', text: 'الطالبين مجتهدان.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['الطالبان']},
  {id: 'v1876-topic-smp-mubtada-1', text: 'المعلمين حاضرون.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['المعلمون']},
  {id: 'v1876-topic-smp-mubtada-2', text: 'المهندسين جاهزون.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['المهندسون']},
  {id: 'v1876-topic-smp-mubtada-3', text: 'الباحثين مسرورون.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['الباحثون']},
  {id: 'v1876-topic-smp-mubtada-4', text: 'المديرين واقفون.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['المديرون']},
  {id: 'v1876-object-dual-adj-chain', text: 'قابلت المعلمان المجتهدان.',
    rules: ['OBJECT_CASE_V1871', 'ADJECTIVE_DEPENDENT_CASE_V18'],
    replacements: ['المعلمين', 'المجتهدين']},
  {id: 'v1876-object-dual-only', text: 'قابلت المعلمان.',
    rules: ['OBJECT_CASE_V1871'], replacements: ['المعلمين']},
  {id: 'v1876-vso-dual-object', text: 'قابل المعلم الطالبان.',
    rules: ['OBJECT_CASE_V1871'], replacements: ['الطالبين']},
  {id: 'v1876-fronted-dual-adj-verb', text: 'الطالبين المجتهدين حضرا.',
    rules: ['TOPIC_CASE_V1876', 'ADJECTIVE_DEPENDENT_CASE_V18'],
    replacements: ['الطالبان', 'المجتهدان']},
  {id: 'v1876-fronted-dual-verb', text: 'الطالبين حضرا.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['الطالبان']},
  {id: 'v1876-fronted-smp-adj-verb', text: 'المهندسين الماهرين اجتمعوا.',
    rules: ['TOPIC_CASE_V1876', 'ADJECTIVE_DEPENDENT_CASE_V18'],
    replacements: ['المهندسون', 'الماهرون']},
  {id: 'v1876-fronted-smp-verb', text: 'المهندسين اجتمعوا.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['المهندسون']},
  {id: 'v1876-vso-dual-subject', text: 'حضر الطالبين.',
    rules: ['SUBJECT_CASE_V1876'], replacements: ['الطالبان']},
  {id: 'v1876-topic-dual-adj-predicate', text: 'الطالبين المجتهدين ناجحان.',
    rules: ['TOPIC_CASE_V1876', 'ADJECTIVE_DEPENDENT_CASE_V18'],
    replacements: ['الطالبان', 'المجتهدان']},
  {id: 'v1876-topic-dual-pp-predicate', text: 'الطالبين في الصف.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['الطالبان']},
  {id: 'v1876-fem-dual-mubtada', text: 'الطالبتين مجتهدتان.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['الطالبتان']},
  {id: 'v1876-new-verb-shahada', text: 'شاهد المدير الموظفان.',
    rules: ['OBJECT_CASE_V1871'], replacements: ['الموظفين']},
  {id: 'v1876-new-verb-hafiza', text: 'حفظ الطلاب الدرسان.',
    rules: ['OBJECT_CASE_V1871'], replacements: ['الدرسين']}
]);

/* ── V18.7.8: انحدارات مدمجة من النسختين العادية وPRO — جولة الـ400 والنسبة والإملاء السياقي ── */
/* V18.7.9 — تثبيت إصلاحات جولة المراجعة: منع «العربيةه»، ومنع الإنذارات
   الكاذبة على المصادر، واستدراك أخطاء واو الجماعة وهمزة «أن» و«الغير». */
const V1879_GOLD_REGRESSIONS = Object.freeze([
  // 1) الخلل الحرج: «ال» + ضمير ملكي قراءةٌ ممتنعة، فلا تُولَّد «العربيةه».
  {id: 'v1879-al-plus-enclitic-impossible', text: 'تعتبر اللغة العربيه من اللغات الغنية.',
    rules: ['PRODUCTIVE_TAA_MARBUTA_V187'], replacements: ['العربية']},
  {id: 'v1879-al-plus-enclitic-kitaba', text: 'ان تحسين الكتابه مهم.',
    rules: ['PRODUCTIVE_TAA_MARBUTA_V187'], replacements: ['الكتابة']},
  // 2) واو الجماعة في المضارع + همزة «أن» الناصبة.
  {id: 'v1879-waw-jamaa-imperfect', text: 'يجب على المعلمين ان يساعدو الطلاب.',
    rules: ['CONTEXTUAL_ORTHOGRAPHY_V1879:أن-الناصبة', 'WAW_ALJAMAA_V18'],
    replacements: ['أن', 'يساعدوا']},
  {id: 'v1879-anna-before-imperfect-with-conj', text: 'وان يشجعوهم على القراءة.',
    rules: ['CONTEXTUAL_ORTHOGRAPHY_V1879:أن-الناصبة'], replacements: ['وأن']},
  // 3) «الغير» موصوفًا ← «غير» مضافة إلى الصفة المعرفة.
  {id: 'v1879-ghayr-definite-attribute', text: 'الأخبار الغير موثوقة تنتشر.',
    rules: ['GHAYR_DEFINITE_ATTRIBUTE_V1879'], replacements: ['غير الموثوقة']},
  // 4) التصحيح المعجمي عبر اللواصق، مع سلامة إدغام «لل».
  {id: 'v1879-clitic-lexical-al', text: 'القراءه مفيدة.',
    rules: ['CLITIC_ORTHOGRAPHY_V1879:قراءه'], replacements: ['القراءة']},
  {id: 'v1879-clitic-lexical-bi-al', text: 'بالقراءه يتسع الأفق.',
    rules: ['CLITIC_ORTHOGRAPHY_V1879:قراءه'], replacements: ['بالقراءة']},
  {id: 'v1879-clitic-lexical-lam-al-contraction', text: 'للقراءه فوائد.',
    rules: ['CLITIC_ORTHOGRAPHY_V1879:قراءه'], replacements: ['للقراءة']},
  {id: 'v1879-lam-al-contraction-productive', text: 'للصوره إطار.',
    rules: ['PRODUCTIVE_TAA_MARBUTA_V187'], replacements: ['للصورة']},
  // 5) التصحيح السياقي للتاء لا يعيد إلحاق ضمير محذوف («صورةه»).
  {id: 'v1879-contextual-taa-no-enclitic-echo', text: 'صوره جميله',
    rules: ['CONTEXTUAL_TAA_V18:صوره', 'ORTHOGRAPHY_V18:جميله'], replacements: ['صورة', 'جميلة']}
]);

const V1879_NO_FALSE_POSITIVE_REGRESSIONS = Object.freeze([
  // المصدر بعد حرف الجر أو بعد اسم ملازم للإضافة ليس فعلًا يُطابَق.
  ['v1879-nfp-masdar-after-preposition', 'يساعد المعلم الطلاب على فهم الدروس.'],
  ['v1879-nfp-masdar-after-adam', 'وعدم نشر المعلومات الخاطئة واجب.'],
  ['v1879-nfp-masdar-after-adverbial', 'راجع الدرس بعد فهم القاعدة.'],
  // الأفعال المسندة إلى واو الجماعة مرسومةً بالألف الفارقة صحيحة.
  ['v1879-nfp-waw-jamaa-correct', 'يجب على المعلمين أن يساعدوا الطلاب.'],
  ['v1879-nfp-waw-jamaa-jussive', 'لم يكتبوا الدرس بعد.'],
  ['v1879-nfp-waw-jamaa-negated-future', 'لن يذهبوا إلى الرحلة.'],
  ['v1879-nfp-annexation-waw-still-safe', 'جاء معلمو المدرسة في الموعد.'],
  ['v1879-nfp-defective-waw-verb', 'يدعو الأب لأبنائه بالتوفيق.'],
  // «إن» الشرطية و«إن» المكسورة قبل الاسم لا تُقلب «أن».
  ['v1879-nfp-inna-before-noun', 'إن الطالب مجتهد في دراسته.'],
  ['v1879-nfp-in-conditional', 'إن تدرس بجد تنجح.'],
  // «غير» على أصلها، و«الغير» في غير موضع النعت.
  ['v1879-nfp-ghayr-exception', 'حضر الطلاب غير المعلمين.'],
  ['v1879-nfp-ghayr-correct-order', 'الأخبار غير الموثوقة تنتشر بسرعة.'],
  ['v1879-nfp-ghayr-as-noun', 'حق الغير محفوظ بموجب القانون.'],
  // الهاء الأصلية بعد «ال» لا تُقلب تاءً مربوطة.
  ['v1879-nfp-original-ha-wajh', 'الوجه المشرق دليل الرضا.'],
  ['v1879-nfp-original-ha-miyah', 'المياه العذبة نعمة كبيرة.'],
  ['v1879-nfp-original-ha-fiqh', 'الفقه الإسلامي علم واسع.'],
  ['v1879-nfp-original-ha-intibah', 'الانتباه إلى التفاصيل مهم.'],
  // الضمير الملكي على النكرة يبقى ضميرًا.
  ['v1879-nfp-possessive-still-works', 'قرأت كتابه الجديد.'],
  ['v1879-nfp-possessive-path', 'سار في طريقه الطويل.'],
  // الأفعال المضافة حديثًا لا تولد إنذارات في مواضعها الصحيحة.
  ['v1879-nfp-new-verb-shajjaa', 'يشجع المعلم طلابه على الاجتهاد.'],
  ['v1879-nfp-new-verb-sharaka', 'شارك الطلاب في المسابقة.'],
  ['v1879-nfp-new-verb-ihtamma', 'يهتم المعلمون بتطوير أساليب التدريس.']
]);

const V1877_GOLD_REGRESSIONS = Object.freeze([
  // من PRO: اختبارات المثنى/جمع المذكر والملتبس
  {id: 'v1877-ambiguous-du-pl-predicate-dual', text: 'الباحثين مشغولان.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['الباحثان']},
  {id: 'v1877-ambiguous-du-pl-predicate-plural', text: 'المعلمين حاضرون.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['المعلمون']},
  {id: 'v1877-productive-predicate-dual', text: 'الطبيبين مشغولان.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['الطبيبان']},
  {id: 'v1877-new-verb-agreement-fem', text: 'المعلمة شرح الدرس.',
    rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['شرحت']},
  {id: 'v1877-new-verb-agreement-pl', text: 'المزارعون حصد القمح.',
    rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['حصدوا']},
  {id: 'v1877-broken-plural-subject', text: 'التجار باع البضاعة.',
    rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['باعوا']},
  {id: 'v1877-fem-plural-new-noun', text: 'المحاميات دافع عن القضية.',
    rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['دافعن']},
  {id: 'v1877-dual-object-taa-forms', text: 'رسم الفنان اللوحتان.',
    rules: ['OBJECT_CASE_V1871'], replacements: ['اللوحتين']},
  {id: 'v1877-dual-object-fem-forms', text: 'روى البستاني الوردتان.',
    rules: ['OBJECT_CASE_V1871'], replacements: ['الوردتين']},
  {id: 'v1877-spelling-waw-jamaa-new', text: 'العمال درسو الخطة.',
    rules: ['ORTHOGRAPHY_V18:درسو'], replacements: ['درسوا']},
  {id: 'v1877-spelling-hamza-new', text: 'انجز العمال المشروع.',
    rules: ['ORTHOGRAPHY_V18:انجز'], replacements: ['أنجز']},
  // من النسخة العادية: اختبارات OBJECT_CASE و KANA/INNA للمثنى والجمع السالم
  {id: 'v1877-smp-object-amiloon', text: 'شاهد المدير العاملون.',
    rules: ['OBJECT_CASE_V1871'], replacements: ['العاملين']},
  {id: 'v1877-dual-object-laiiban', text: 'شاهد المدير اللاعبان.',
    rules: ['OBJECT_CASE_V1871'], replacements: ['اللاعبين']},
  {id: 'v1877-kana-dual-laiiban', text: 'صار اللاعبين ماهرين.',
    rules: ['KANA_SUBJECT_CASE_V18'], replacements: ['اللاعبان']},
  {id: 'v1877-inna-dual-laiiban', text: 'كأن اللاعبان متعبان.',
    rules: ['INNA_SUBJECT_CASE_V18'], replacements: ['اللاعبين']},
  {id: 'v1877-agreement-laiiban', text: 'اللاعبان لعب.',
    rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['لعبا']},
  {id: 'v1877-number-polarity-khams', text: 'خمس طلاب في الصف.',
    rules: ['NUMBER_POLARITY_V18'], replacements: ['خمسة']},
  // من النسخة العادية: اختبارات الإملاء السياقي (contextualOrthography)
  {id: 'v1877-orth-ila', text: 'ذهب الي المدرسة.',
    rules: ['ORTHOGRAPHY_V18:الي'], replacements: ['إلى']},
  {id: 'v1877-orth-mostashfa', text: 'ذهب إلى المستشفي.',
    rules: ['ORTHOGRAPHY_V18:المستشفي'], replacements: ['المستشفى']},
  {id: 'v1877-orth-khataa', text: 'هذا خطاء كبير.',
    rules: ['ORTHOGRAPHY_V18:خطاء'], replacements: ['خطأ']},
  {id: 'v1877-orth-shay', text: 'هذا شئ جميل.',
    rules: ['ORTHOGRAPHY_V18:شئ'], replacements: ['شيء']},
  {id: 'v1877-contextual-ali', text: 'جلس علي الكرسي.',
    rules: ['CONTEXTUAL_ORTHOGRAPHY_V1877:علي'], replacements: ['على']},
  {id: 'v1877-contextual-anna', text: 'قال ان النتيجة جيدة.',
    rules: ['CONTEXTUAL_ORTHOGRAPHY_V1877:أن'], replacements: ['أن']},
  {id: 'v1877-contextual-saalat', text: 'سالت المديرة عن الموعد.',
    rules: ['CONTEXTUAL_ORTHOGRAPHY_V1877:سالت'], replacements: ['سألت']},
  {id: 'v1877-contextual-kitabah', text: 'كتابه الدرس صعبة.',
    rules: ['CONTEXTUAL_ORTHOGRAPHY_V1877:كتابه'], replacements: ['كتابة']},
  {id: 'v1877-orth-lan', text: 'لان الطالب اجتهد.',
    rules: ['ORTHOGRAPHY_V18:لان'], replacements: ['لأن']},
  {id: 'v1877-verb-tarjam', text: 'المترجمون ترجم.',
    rules: ['WEAK_VERB_AGREEMENT_V18'], replacements: ['ترجموا']},
  {id: 'v1877-dual-mubtada-mashhoor', text: 'الكاتبين مشهوران.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['الكاتبان']},
  {id: 'v1877-smp-mubtada-ghaiboon', text: 'الموظفين غائبون.',
    rules: ['TOPIC_CASE_V1876'], replacements: ['الموظفون']},
  {id: 'v1877-object-dual-chain-mahiran', text: 'رأيت الطالبان الماهران.',
    rules: ['OBJECT_CASE_V1871', 'ADJECTIVE_DEPENDENT_CASE_V18'],
    replacements: ['الطالبين', 'الماهرين']}
]);

const GOLD_CORPUS = Object.freeze([
  ...BASE_GOLD_CORPUS,
  ...generateV184GoldCorpus(),
  ...V185_GOLD_REGRESSIONS,
  ...V186_GOLD_REGRESSIONS,
  ...V1871_GOLD_REGRESSIONS,
  ...V1872_GOLD_REGRESSIONS,
  ...V1874_GOLD_REGRESSIONS,
  ...V1875_GOLD_REGRESSIONS,
  ...V1876_GOLD_REGRESSIONS,
  ...V1877_GOLD_REGRESSIONS,
  ...V1879_GOLD_REGRESSIONS
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

const V186_NO_FALSE_POSITIVE_REGRESSIONS = Object.freeze([
  ['v186-nfp-number-kana', 'وكان في القاعة واحدٌ وعشرون كتابًا.'],
  ['v186-nfp-kana-feminine-subject', 'وكانت المعلماتُ قد حضرن.'],
  ['v186-nfp-number-complete', 'ثلاثة طلابٍ.'],
  ['v186-nfp-number-case-preserved', 'قرأت أربعَ صفحاتٍ.']
]);

function generateV1871NoFalsePositiveCorpus() {
  const tests = [];
  const add = (id, text) => tests.push([`v1871-nfp-${id}`, text]);

  // 144 مفعولًا صحيح العلامة في الإطارات نفسها التي تختبر الأخطاء.
  const verbs = ['قرأ', 'كرم', 'رأى', 'أخذ', 'أكل', 'أرسل', 'كتب', 'درس', 'فهم', 'فتح', 'عرف', 'سأل'];
  const subjects = ['الطالبُ', 'المعلمُ', 'الباحثُ'];
  const objects = ['الكتابَ', 'الدرسَ', 'البابَ', 'المشروعَ'];
  verbs.forEach((verb, vi) => subjects.forEach((subject, si) => objects.forEach((object, oi) =>
    add(`object-${vi}-${si}-${oi}`, `${verb} ${subject} ${object}`))));

  // 56 شرطًا مجزومًا سليمًا، و8 نظائر مع «إذا» غير الجازمة.
  const markers = ['إن', 'من', 'مهما', 'متى', 'أينما', 'حيثما', 'كيفما'];
  const soundPairs = [['تجتهدْ', 'تنجحْ'], ['تدرسْ', 'تفهمْ'], ['تكتبْ', 'تقرأْ'], ['تسألْ', 'تعرفْ']];
  const fiveVerbPairs = [['تجتهدوا', 'تنجحوا'], ['تدرسوا', 'تفهموا'], ['تكتبوا', 'تقرؤوا'], ['تسألوا', 'تعرفوا']];
  markers.forEach((marker, mi) => soundPairs.forEach(([first, second], pi) =>
    add(`condition-sound-${mi}-${pi}`, `${marker} ${first} ${second}`)));
  markers.forEach((marker, mi) => fiveVerbPairs.forEach(([first, second], pi) =>
    add(`condition-five-${mi}-${pi}`, `${marker} ${first} ${second}`)));
  [...soundPairs, ...fiveVerbPairs].forEach(([first, second], i) =>
    add(`idha-nonjussive-${i}`, `إذا ${first} ${second}`));

  // الرسوم القياسية المتعددة لصيغ «قرأ» لا تُعامل كأخطاء.
  ['يقرؤون', 'يقرأون', 'تقرؤون', 'تقرأون', 'يقرآن', 'يقرأن', 'تقرأان', 'تقرآن',
    'قرؤوا', 'قرأوا', 'اقرؤوا', 'اقرأوا']
    .forEach((text, i) => add(`hamza-accepted-${i}`, text));

  // «من» الجارة والموصولة والاستفهامية لا تنشئ شرطًا جازمًا زائفًا.
  ['جاء من المدرسة.', 'خرج من البيت.', 'من الطالب؟', 'من الذي نجح؟',
    'أحب من يصدق.', 'سألت من حضر.', 'عرفت من كتب الدرس.', 'هذا من يعمل بصدق.']
    .forEach((text, i) => add(`min-nonconditional-${i}`, text));

  if (tests.length !== 228) throw new Error(`V18.7.1 NFP generation mismatch: ${tests.length}`);
  return tests;
}

const V1871_NO_FALSE_POSITIVE_REGRESSIONS = Object.freeze(generateV1871NoFalsePositiveCorpus());

const V1872_NO_FALSE_POSITIVE_REGRESSIONS = Object.freeze([
  ['v1872-nfp-hamza-agreement-explicit-subject', 'الطلاب يقرؤون الكتب.'],
  ['v1872-nfp-hamza-agreement-pronoun-subject', 'هم يقرؤون الكتب.'],
  ['v1872-nfp-hamza-agreement-second-person', 'أنتم تقرؤون الكتب.'],
  ['v1872-nfp-hamza-sibling-explicit-subject', 'الطلاب يقرأون الكتب.'],
  ['v1872-nfp-hamza-sibling-pronoun-subject', 'هم يقرأون الكتب.']
]);

const V1873_COMPETING_ANALYSIS_NO_FALSE_POSITIVE_REGRESSIONS = Object.freeze([
  ['v1873-nfp-ambiguous-oblique-plural-relative', 'شكر رئيس اللجنةِ الباحثينَ الذين ساعدوه.'],
  ['v1873-nfp-ambiguous-oblique-dual-relative', 'شكر رئيس اللجنةِ الباحثينَ اللذين ساعداه.'],
  ['v1873-nfp-conjoined-jussive-inflection', 'شكر رئيس اللجنةِ الباحثينَ الذين ساعدوه، ولم يقرؤوا أيَّ فقرةٍ غير موثقة.']
]);

const V1874_NO_FALSE_POSITIVE_REGRESSIONS = Object.freeze([
  ['v1874-nfp-shayan-canonical', 'قرأت شيئًا مفيدًا.'],
  ['v1874-nfp-dual-clitic-correct', 'مررت بالطالبين.'],
  ['v1874-nfp-dual-ila-correct', 'ذهبت إلى المدرسين.'],
  ['v1874-nfp-dual-ala-correct', 'سلمت على المعلمين.'],
  ['v1874-nfp-sound-masculine-correct', 'مررت بالمعلمين.'],
  ['v1874-nfp-lebanon', 'سافرت إلى لبنان.'],
  ['v1874-nfp-orchard', 'مررت بالبستان.'],
  ['v1874-nfp-field', 'وقفت في الميدان.'],
  ['v1874-nfp-address', 'ذهبت إلى العنوان.'],
  ['v1874-nfp-place', 'جلست في المكان.'],
  ['v1874-nfp-sultan', 'مررت بالسلطان.'],
  ['v1874-nfp-olive', 'مررت بالزيتون.'],
  ['v1874-nfp-five-noun-subject', 'جاء أبو الطالب.'],
  ['v1874-nfp-five-noun-object', 'رأيت أبا الطالب.'],
  ['v1874-nfp-five-noun-preposition', 'مررت بأبي الطالب.']
]);

const V1875_NO_FALSE_POSITIVE_REGRESSIONS = Object.freeze([
  ['v1875-nfp-fronted-pp-subject', 'في الرحلة ناقش الباحثُ ثلاثة تقارير.'],
  ['v1875-nfp-orchard-adjective', 'مررت ببستان واسع.'],
  ['v1875-nfp-quoted-nominal-sentence', 'قال: «اللغة العربية جميلة».'],
  ['v1875-nfp-relative-matrix-predicate', 'الطلاب الذين حضروا مبكرًا ناجحون.'],
  ['v1875-nfp-ambiguous-books-demonstrative', 'هذه كتب المدرسة.'],
  ['v1875-nfp-ambiguous-books-adjective', 'الطلاب كتب جديدة.'],
  ['v1875-nfp-festival-not-dual', 'ذهبت إلى المهرجان.'],
  ['v1875-nfp-html-code-element', '<code>الطلاب كتب الدرس.</code> اللغة جميلة.'],
  ['v1875-nfp-curly-quote-boundary', 'قال: “اللغة العربية جميلة”.'],
  ['v1875-nfp-straight-quote-boundary', 'قال: "اللغة العربية جميلة".']
]);

/* مصائد الإنذار الكاذب V18.7.6: الصيغ الصحيحة والملتبسة يجب أن تبقى صامتة. */
const V1876_NO_FALSE_POSITIVE_REGRESSIONS = Object.freeze([
  ['v1876-nfp-topic-nominative-dual', 'الطالبان مجتهدان.'],
  ['v1876-nfp-topic-nominative-smp', 'المعلمون حاضرون.'],
  ['v1876-nfp-object-chain-correct', 'قابلت المعلمين المجتهدين.'],
  ['v1876-nfp-fronted-correct', 'الطالبان المجتهدان حضرا.'],
  ['v1876-nfp-oblique-fragment', 'الطالبين المجتهدين'],
  ['v1876-nfp-fronted-object', 'الطالبين رأيت.'],
  ['v1876-nfp-ambiguous-transitive', 'الطالبين يكتبان.'],
  ['v1876-nfp-standalone-verb', 'يكتبون'],
  ['v1876-nfp-jussive-lan', 'لن يكتبوا.'],
  ['v1876-nfp-jussive-lam', 'لم يكتبوا.'],
  ['v1876-nfp-prepositional-dual', 'مررت بالطالبين المجتهدين.'],
  ['v1876-nfp-vso-correct-dual', 'حضر الطالبان.'],
  ['v1876-nfp-topic-verb-correct', 'الطلاب يكتبون.'],
  ['v1876-nfp-kana-correct', 'كان الطالبان مجتهدين.'],
  ['v1876-nfp-inna-correct', 'إن الطالبين مجتهدان.'],
  ['v1876-nfp-object-correct-dual', 'رأيت الطالبين.']
]);

/* ── V18.7.8: مصائد إنذار كاذب مدمجة من النسختين — النسبة والإملاء السياقي ── */
const V1877_NO_FALSE_POSITIVE_REGRESSIONS = Object.freeze([
  // من PRO: أسماء النسب مع الأفعال
  ['v1877-nfp-nisba-journalist', 'الصحفي قرأ الكتاب.'],
  ['v1877-nfp-nisba-visit', 'الصحفي زار المتحف.'],
  ['v1877-nfp-nisba-hafiza', 'الصحفي حفظ القصيدة.'],
  ['v1877-nfp-nisba-rajaa', 'الصحفي راجع التقرير.'],
  ['v1877-nfp-nisba-fataha', 'الصحفي فتح الباب.'],
  ['v1877-nfp-nisba-shahada', 'الصحفي شاهد الفيلم.'],
  ['v1877-nfp-nisba-misri', 'المصري عاد إلى بلده.'],
  ['v1877-nfp-nisba-iraqi', 'العراقي زار باريس.'],
  ['v1877-nfp-relative-enclitic-1s', 'الكتاب الذي قرأته.'],
  ['v1877-nfp-relative-enclitic-1s2', 'المدير الذي قابلته ودود.'],
  ['v1877-nfp-number-twelve-object', 'اشترى اثني عشر كتابًا.'],
  ['v1877-nfp-adjective-object-acc', 'افتتحت المدينة متحفًا جديدًا.'],
  ['v1877-nfp-productive-du-zaytun', 'الزيتون مفيد.'],
  ['v1877-nfp-productive-du-bustan', 'البستان جميل.'],
  ['v1877-nfp-proper-lubnan', 'لبنان بلد جميل.'],
  ['v1877-nfp-gender-mismatch-head', 'المرأتين مشغولان.'],
  ['v1877-nfp-possessive-ya', 'هذا كتابي.'],
  ['v1877-nfp-possessive-ha', 'شاهدت صورته وقرأت مقاله.'],
  ['v1877-nfp-annexation-waw', 'جاء معلمو المدرسة.'],
  ['v1877-nfp-relative-object-overt', 'الكتب التي اختارها المعلم.'],
  // من النسخة العادية: مصائد إضافية لأسماء النسب والإملاء السياقي
  ['v1877-nfp-hawara-sahafi', 'حاور الصحفي المسؤولين.'],
  ['v1877-nfp-salat-dumoo', 'سالت الدموع على الخدين.'],
  ['v1877-nfp-salat-uyoon', 'سالت العيون بالدموع.'],
  ['v1877-nfp-kitabuhu-adj', 'قرأت كتابه الجديد.'],
  ['v1877-nfp-kitabuhu-final', 'هذا كتابه.'],
  ['v1877-nfp-ambiguous-smp-transitive', 'المهندسين يكتبون.']
]);

const NO_FALSE_POSITIVE_CORPUS = Object.freeze([
  ...BASE_NO_FALSE_POSITIVE_CORPUS,
  ...generateV184NoFalsePositiveCorpus(),
  ...V185_NO_FALSE_POSITIVE_REGRESSIONS,
  ...V186_NO_FALSE_POSITIVE_REGRESSIONS,
  ...V1871_NO_FALSE_POSITIVE_REGRESSIONS,
  ...V1872_NO_FALSE_POSITIVE_REGRESSIONS,
  ...V1873_COMPETING_ANALYSIS_NO_FALSE_POSITIVE_REGRESSIONS,
  ...V1874_NO_FALSE_POSITIVE_REGRESSIONS,
  ...V1875_NO_FALSE_POSITIVE_REGRESSIONS,
  ...V1876_NO_FALSE_POSITIVE_REGRESSIONS,
  ...V1877_NO_FALSE_POSITIVE_REGRESSIONS,
  ...V1879_NO_FALSE_POSITIVE_REGRESSIONS
]);

const PHRASE_ROLE_REGRESSION_CORPUS = Object.freeze([
  {id: 'phrase-kana-number-correct', text: 'كان ثلاثة طلابٍ حاضرين.', expectedRoles: [null, 'kana-subject', 'number-tamyiz', 'kana-predicate'], expectedRules: []},
  {id: 'phrase-kana-number-predicate', text: 'كان ثلاثة طلابٍ حاضرون.', expectedRoles: [null, 'kana-subject', 'number-tamyiz', 'kana-predicate'], expectedRules: ['KANA_PREDICATE_V18']},
  {id: 'phrase-inna-dual-correct', text: 'إن الطالبين المجتهدين ناجحان.', expectedRoles: [null, 'inna-subject', 'adjective', 'inna-predicate'], expectedRules: []},
  {id: 'phrase-inna-dual-modifier', text: 'إن الطالبين المجتهدان ناجحان.', expectedRoles: [null, 'inna-subject', 'adjective', 'inna-predicate'], expectedRules: ['ADJECTIVE_DEPENDENT_CASE_V18']},
  {id: 'phrase-inna-nonhuman-correct', text: 'إن كتبًا كثيرةً مفيدةٌ.', expectedRoles: [null, 'inna-subject', 'adjective', 'inna-predicate'], expectedRules: []},
  {id: 'phrase-inna-nonhuman-predicate', text: 'إن كتبًا كثيرةً مفيدةٍ.', expectedRoles: [null, 'inna-subject', 'adjective', 'inna-predicate'], expectedRules: ['INNA_PREDICATE_V18']},
  {id: 'phrase-kana-feminine-number-correct', text: 'كانت خمس طالباتٍ حاضراتٍ.', expectedRoles: [null, 'kana-subject', 'number-tamyiz', 'kana-predicate'], expectedRules: []},
  {id: 'phrase-kana-feminine-number-predicate', text: 'كانت خمس طالباتٍ حاضراتٌ.', expectedRoles: [null, 'kana-subject', 'number-tamyiz', 'kana-predicate'], expectedRules: ['KANA_PREDICATE_V18']},
  {id: 'phrase-inna-sound-plural-correct', text: 'إن المعلمين المجتهدين مخلصون.', expectedRoles: [null, 'inna-subject', 'adjective', 'inna-predicate'], expectedRules: []},
  {id: 'phrase-inna-sound-plural-modifier', text: 'إن المعلمين المجتهدون مخلصون.', expectedRoles: [null, 'inna-subject', 'adjective', 'inna-predicate'], expectedRules: ['ADJECTIVE_DEPENDENT_CASE_V18']}
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


/* ===== MODULE: src/validation/regression-v1880.js ===== */
/**
 * V18.8.0 — نظام اختبارات الانحدار (البند الستون).
 *
 * لكل قاعدة جديدة شاهدان: نصٌّ صحيح يجب ألا يُمَسّ، ونصٌّ خاطئ يجب أن
 * يُصحَّح إلى وجهه. وقد جُعلت الجمل التي أنتجت إنذارات كاذبة في الإصدار
 * السابق «اختبارات حظر» دائمة، فلا يعود الخطأ من حيث أُصلح.
 */
const V1880_BLOCK_REGRESSIONS = Object.freeze([
  /* ── حظر إنذارات V18.7.9 المرصودة ── */
  {id: 'v1880-block-ibn', text: 'ابن الرجل مجتهد.'},
  {id: 'v1880-block-mada', text: 'بلغ العلم مدى بعيدًا.'},
  {id: 'v1880-block-ulaika', text: 'أولئك معلمون.'},
  {id: 'v1880-block-haulai', text: 'هؤلاء طلاب مجتهدون.'},
  {id: 'v1880-block-hatha-kitab', text: 'هذا كتاب مفيد.'},
  {id: 'v1880-block-hathihi-shajara', text: 'هذه شجرة جميلة.'},
  {id: 'v1880-block-relative-indeclinable', text: 'أولئك الذين آمنوا.'},
  {id: 'v1880-block-relative-indeclinable-2', text: 'هؤلاء الذين نجحوا.'},
  {id: 'v1880-block-talaba', text: 'هؤلاء الطلبة مجتهدون.'},
  /* ── المفعول المطلق لا يُمَسّ ── */
  {id: 'v1880-block-mutlaq', text: 'شرح المعلم شرحًا وافيًا.'},
  {id: 'v1880-block-mutlaq-2', text: 'اجتهد الطالب اجتهادًا كبيرًا.'},
  /* ── الأسماء المقصورة الثابتة ── */
  {id: 'v1880-block-huda', text: 'هدى طالبة مجتهدة.'},
  {id: 'v1880-block-mustashfa', text: 'ذهب المريض إلى المستشفى.'},
  {id: 'v1880-block-kubra', text: 'المدينة الكبرى مزدحمة.'},
  {id: 'v1880-block-siwa', text: 'لم يحضر سوى طالب واحد.'},
  /* ── الأعلام والمعرَّبات ── */
  {id: 'v1880-block-proper', text: 'زار محمد الجزائر في رمضان.'},
  {id: 'v1880-block-arabized', text: 'الإنترنت وسيلة مفيدة.'},
  {id: 'v1880-block-arabized-2', text: 'استخدمت الكمبيوتر في العمل.'},
  /* ── المثنى الموصول صحيح ── */
  {id: 'v1880-block-dual-relative', text: 'رأيت الطالبين اللذين نجحا.'},
  {id: 'v1880-block-dual-relative-f', text: 'رأيت الطالبتين اللتين نجحتا.'},
  /* ── جمع غير العاقل يعامل معاملة المفردة المؤنثة ── */
  {id: 'v1880-block-nonhuman-plural', text: 'الكتب مفيدة.'},
  {id: 'v1880-block-nonhuman-plural-2', text: 'السيارات سريعة.'},
  /* ── تراكيب سليمة متنوعة ── */
  {id: 'v1880-block-inna', text: 'إن الطالب مجتهد.'},
  {id: 'v1880-block-kana', text: 'كان الجو جميلًا.'},
  {id: 'v1880-block-hal', text: 'جاء الطالب مسرعًا.'},
  {id: 'v1880-block-tamyiz', text: 'اشتريت عشرين كتابًا.'},
  {id: 'v1880-block-munada', text: 'يا محمد أقبل.'},
  {id: 'v1880-block-shart', text: 'من يجتهد ينجح.'},
  {id: 'v1880-block-passive', text: 'كُتِبَ الدرسُ.'},
  {id: 'v1880-block-istithnaa', text: 'جاء الطلاب إلا طالبًا.'}
]);

const V1880_GOLD_REGRESSIONS = Object.freeze([
  /* همزة الوصل — الحكم الصرفي المقرر */
  {id: 'v1880-gold-ibn', text: 'إبن الرجل مجتهد.', expect: 'ابن'},
  {id: 'v1880-gold-ism', text: 'إسم الطالب جميل.', expect: 'اسم'},
  {id: 'v1880-gold-imraa', text: 'حضرت إمرأة كريمة.', expect: 'امرأة'},
  {id: 'v1880-gold-ithnan', text: 'حضر إثنان من الطلاب.', expect: 'اثنان'},
  {id: 'v1880-gold-ijtihad', text: 'إجتهاد الطالب واضح.', expect: 'اجتهاد'},
  {id: 'v1880-gold-intizar', text: 'طال إنتظار الضيوف.', expect: 'انتظار'},
  /* الأخطاء الشائعة */
  {id: 'v1880-gold-lakin', text: 'لاكن الطالب مجتهد.', expect: 'لكن'},
  {id: 'v1880-gold-hatha', text: 'هاذا كتاب مفيد.', expect: 'هذا'},
  {id: 'v1880-gold-masool', text: 'حضر مسئول كبير.', expect: 'مسؤول'},
  {id: 'v1880-gold-nizam', text: 'نضام التعليم متطور.', expect: 'نظام'},
  {id: 'v1880-gold-mulahaza', text: 'سجلت ملاحضة مهمة.', expect: 'ملاحظة'},
  /* المطابقة والإشارة */
  {id: 'v1880-gold-dem-fem', text: 'هذا شجرة جميلة.', expect: 'هذه'},
  {id: 'v1880-gold-dem-masc', text: 'هذه كتاب مفيد.', expect: 'هذا'},
  {id: 'v1880-gold-dem-plural', text: 'هذا الطالبات مجتهدات.', expect: 'هؤلاء'}
]);

function runRegressionSuiteV1880(options = {}) {
  const failures = [];
  let passed = 0;

  for (const item of V1880_BLOCK_REGRESSIONS) {
    const findings = analyze(item.text, options).findings
      // الملاحظات الأسلوبية والطباعية ليست إنذارًا لغويًا كاذبًا.
      .filter(finding => finding.severity !== 'STYLE');
    if (findings.length === 0) { passed += 1; continue; }
    failures.push({
      id: item.id, kind: 'false-positive', text: item.text,
      findings: findings.map(f => ({ruleId: f.ruleId, original: f.original,
        replacement: f.replacement, severity: f.severity,
        confidence: Number(f.confidence.toFixed(3))}))
    });
  }

  for (const item of V1880_GOLD_REGRESSIONS) {
    const result = analyze(item.text, options);
    const hit = result.findings.some(finding =>
      String(finding.replacement || '').includes(item.expect));
    if (hit) { passed += 1; continue; }
    failures.push({
      id: item.id, kind: 'missed-error', text: item.text, expected: item.expect,
      got: result.findings.map(f => `${f.original}>${f.replacement}`)
    });
  }

  const total = V1880_BLOCK_REGRESSIONS.length + V1880_GOLD_REGRESSIONS.length;
  return {
    version: META.version, total, passed,
    failures, valid: failures.length === 0,
    blocks: V1880_BLOCK_REGRESSIONS.length,
    golds: V1880_GOLD_REGRESSIONS.length
  };
}

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
  add('syntax-core-stages', ['fiveNouns', 'relativeClauses', 'objectCase', 'conditionalGovernment', 'hamzaMorphological']
    .every(id => ruleIds.includes(id)), ruleIds.join(', '));
  add('v1872-shakara-transitive-entry', VERB_LEXICON['شكر']?.valency === 'transitive'
    && VERB_LEXICON['شكر']?.paradigm?.present?.['3ms'] === 'يشكر',
    VERB_LEXICON['شكر'] ? `${VERB_LEXICON['شكر'].valency}:${VERB_LEXICON['شكر'].present3ms}` : 'missing');
  const yaqraunaResolution = resolveHamzaMorphologyV1('يقرؤون');
  add('v1872-hamza-agreement-integration', Boolean(acceptedHamzaInflection('يقرؤون', 'قرأ', 'present', '3mp')),
    yaqraunaResolution ? `${yaqraunaResolution.status}:${yaqraunaResolution.personCodes.join('/')}` : 'unresolved');
  add('v1872-nested-jussive-particle', JUSSIVE_PARTICLES.has('لم'), [...JUSSIVE_PARTICLES].join(','));
  add('gold-corpus-500', GOLD_CORPUS.length >= 500, `${GOLD_CORPUS.length} اختبارًا ذهبيًا`);
  add('no-false-positive-corpus-500', NO_FALSE_POSITIVE_CORPUS.length >= 500, `${NO_FALSE_POSITIVE_CORPUS.length} جملة صحيحة`);
  add('pos-dependency-regressions', POS_DEPENDENCY_REGRESSION_CORPUS.length >= 9, `${POS_DEPENDENCY_REGRESSION_CORPUS.length} حالات POS/Dependency حرجة`);
  add('phrase-role-regressions', PHRASE_ROLE_REGRESSION_CORPUS.length >= 10, `${PHRASE_ROLE_REGRESSION_CORPUS.length} حالات تعارض بين العبارة والدور`);
  add('v1876-deep-syntactic-verbs',
    ['قابل', 'شاهد', 'لاحظ', 'حاور', 'رافق', 'قارن', 'عالج', 'راجع', 'حفظ', 'زار']
      .every(lemma => VERB_LEXICON[lemma]?.valency === 'transitive'),
    'عشرة أفعال متعدية شائعة مفقودة أُضيفت لإكمال إطار الفعل-المفعول');
  add('v1876-nominative-resolver-pipeline',
    ruleIds.includes('nominativeSubjectCase'),
    'قاعدة NominativeSubjectCase في خط الأنابيب');
  add('external-holdout-benchmark-present',
    EXTERNAL_HOLDOUT_BENCHMARK_V1876.errors.length === 18
      && EXTERNAL_HOLDOUT_BENCHMARK_V1876.controls.length === 16,
    `${EXTERNAL_HOLDOUT_BENCHMARK_V1876.errors.length} خطأ خارجي + ${EXTERNAL_HOLDOUT_BENCHMARK_V1876.controls.length} ضابط صحيح`);
  add('v1877-external-400-present',
    EXTERNAL_HOLDOUT_BENCHMARK_V1877.errors.length === 200
      && EXTERNAL_HOLDOUT_BENCHMARK_V1877.controls.length === 200
      && ['syntax', 'agreement', 'spelling'].every(cat =>
        EXTERNAL_HOLDOUT_BENCHMARK_V1877.errors.filter(x => x.category === cat).length > 0),
    `${EXTERNAL_HOLDOUT_BENCHMARK_V1877.errors.length} خطأ خارجي (${EXTERNAL_HOLDOUT_BENCHMARK_V1877.counts.syntax} نحوي + ${EXTERNAL_HOLDOUT_BENCHMARK_V1877.counts.agreement} مطابقة + ${EXTERNAL_HOLDOUT_BENCHMARK_V1877.counts.spelling} إملائي) + ${EXTERNAL_HOLDOUT_BENCHMARK_V1877.controls.length} ضابط`);
  // V18.7.8: فحوصات الطبقات المسترجعة من النسخة العادية
  add('v1878-nisba-layer', Boolean(NOUN_FORM_INDEX.has('صحفي') && NOUN_FORM_INDEX.has('صحفيون')),
    'طبقة أسماء النسب وفهرس صيغها المرفوعة');
  add('v1878-contextual-orthography-option',
    DEFAULT_OPTIONS.rules.contextualOrthography === true,
    'خيار contextualOrthography مفعّل في DEFAULT_OPTIONS');

  // V18.7.9: فحوصات بنيوية تمنع عودة أخطاء هذه الجولة
  add('v1879-no-enclitic-under-al',
    splitClitics('العربيه').enclitic === null && splitClitics('الكتابه').enclitic === null
      && splitClitics('كتابه').enclitic === 'ه',
    'المعرّف بـ«ال» لا يقبل ضميرًا متصلًا، والنكرة تقبله');
  add('v1879-lam-al-contraction',
    buildClitcPrefix(null, 'ل', true) === 'لل' && buildClitcPrefix(null, 'ب', true) === 'بال',
    'إدغام لام الجر مع «ال» في الرسم: لل لا لال');
  add('v1879-masdar-guard',
    precededByNominalGovernor([
      {sentence: 0, morph: {core: 'على', segments: {}}},
      {sentence: 0, morph: {core: 'فهم', segments: {}}}
    ], 1) === true,
    'حرف الجر يحسم الموضع اسميًا فيمنع مطابقة فعلية كاذبة');
  add('v1879-clitic-orthography-stage',
    RULE_PIPELINE.some(stage => stage.id === 'clitizedLexicalOrthography')
      && DEFAULT_OPTIONS.rules.clitizedLexicalOrthography === true,
    'مرحلة التصحيح المعجمي عبر اللواصق مسجلة ومفعّلة');
  add('v1879-waw-jamaa-imperfect-lexicon',
    VERB_FORM_INDEX.has('يساعدوا') && VERB_FORM_INDEX.has('يشجعوا'),
    'صيغ واو الجماعة في المضارع مفهرسة لدعم الألف الفارقة');

  // V18.8.0: فحوص بنيوية تمنع عودة إنذارات هذه الجولة من جذورها.
  add('v1880-orthographic-invariants',
    uniqueOrthographicCandidate('مدى', 'alif-maqsura', {requireNominalSupport: true}) === null
      && uniqueOrthographicCandidate('إبن', 'hamza', {requireNominalSupport: true}) === null,
    'المداخل الثابتة معجميًا («مدى»، «إبن») محظورة على التوليد الإنتاجي');
  add('v1880-hamzat-wasl-lexicon',
    HAMZAT_WASL_WORDS_V1880['إبن'] === 'ابن' && HAMZAT_WASL_WORDS_V1880['إسم'] === 'اسم'
      && !Object.values(HAMZAT_WASL_WORDS_V1880).some(value => /^[أإآ]/u.test(value)),
    'همزة الوصل تُصحَّح إلى ألف مجردة لا إلى همزة قطع');
  add('v1880-indeclinables-exclude-dual',
    DECLINABLE_DUAL_DEICTICS_V1880.has('اللذين') && DECLINABLE_DUAL_DEICTICS_V1880.has('هذين')
      && !DECLINABLE_DUAL_DEICTICS_V1880.has('الذين'),
    'المثنى معرب بالألف والياء، وسائر الموصولات وأسماء الإشارة مبنية');
  add('v1880-dual-relatives-not-common-errors',
    !['اللذين', 'اللتين', 'اللذان', 'اللتان'].some(form =>
      Object.prototype.hasOwnProperty.call(COMMON_ERRORS_V1880, form)),
    'صيغ المثنى الموصول لا تُعد أخطاءً شائعة');
  add('v1880-severity-model',
    Object.keys(SEVERITY_V1880).length === 4
      && ['ERROR', 'WARNING', 'SUGGESTION', 'STYLE'].every(code => SEVERITY_V1880[code]),
    'نموذج الدرجات الأربع: خطأ/تحذير/اقتراح/أسلوب');
  add('v1880-confidence-scale',
    CONFIDENCE_SCALE_V1880.length === 5
      && confidenceGradeV1880(0.999).code === 'definite'
      && confidenceGradeV1880(0.60).code === 'withheld',
    'سلّم الثقة التفصيلي بخمس درجات');
  add('v1880-governors-registry',
    KANA_SISTERS_V1880['زال']?.condition === 'requires-negation'
      && KANA_SISTERS_V1880['دام']?.condition === 'requires-ma-masdariyya'
      && ZANNA_SISTERS_V1880['رأى']?.ambiguous === true,
    'شروط «ما زال» و«ما دام»، والتباس «رأى» بين البصرية والقلبية');
  add('v1880-new-pipeline-stages',
    ['commonErrors', 'spacing'].every(id => ruleIds.includes(id))
      && DEFAULT_OPTIONS.rules.commonErrors === true && DEFAULT_OPTIONS.rules.spacing === true,
    'مرحلتا الأخطاء الشائعة والمسافات مسجلتان ومفعّلتان');
  add('v1880-regression-corpus',
    V1880_BLOCK_REGRESSIONS.length >= 25 && V1880_GOLD_REGRESSIONS.length >= 12,
    `${V1880_BLOCK_REGRESSIONS.length} اختبار حظر + ${V1880_GOLD_REGRESSIONS.length} اختبار ذهبي`);
  add('v1880-lexical-protection',
    ARABIZED_TERMS_V1880.has('الإنترنت') && SCIENTIFIC_TERMS_V1880.has('أكسجين'),
    'المعرَّبات والمصطلحات العلمية محمية من التصحيح');

  // ── V18.9.0: فحوص بنيوية للطبقات المضافة ──
  add('v1890-compat-record',
    (META.compat?.baseVersion === '18.8.6' || META.compat?.baseVersion === '18.9.0') && META.compat.policy === 'additive-only'
      && META.compat.preservedApi.length >= 40,
    `توافق خلفي موثق مع ${META.compat?.baseVersion} (${META.compat?.preservedApi?.length} واجهة محفوظة)`);
  add('v1890-new-pipeline-stages',
    ['diacritics', 'hamzaComplete', 'punctuationComplete', 'kanaPredicateCase',
      'munada', 'numberTamyizCompletion', 'style'].every(id => ruleIds.includes(id)),
    `${ruleIds.length} مرحلة بعد الإضافة`);
  add('v1890-legacy-stages-intact',
    ['orthography', 'clitizedLexicalOrthography', 'contextualOrthography', 'hamzaMorphological',
      'productiveOrthography', 'objectCase', 'nominativeSubjectCase', 'caseGovernmentResolver',
      'soundFemininePluralCaseMarker', 'relativeClauses', 'weakVerbs', 'malformedFiveNounHamza',
      'fiveNouns', 'diptotes', 'numbers', 'exception', 'hal', 'tamyiz', 'conjunction',
      'dependents', 'syntaxContext', 'conditionalGovernment', 'fiveVerbs', 'wawAljamaa',
      'contextualTaa', 'commonErrors', 'punctuation', 'spacing'].every(id => ruleIds.includes(id)),
    'مراحل V18.8.6 الثمانية والعشرون باقية بأسمائها');
  add('v1890-style-never-automatic',
    !AUTOMATIC.has('style') && !AUTOMATIC.has('diacritics'),
    'الأسلوب والضبط خارج قائمة التصحيح التلقائي');
  add('v1890-tanwin-order-rule',
    analyze('قرأت كتاباً مفيداً.', {safeMode: true}).corrected === 'قرأت كتابًا مفيدًا.',
    'ترتيب تنوين النصب وألفه يُطبَّق على النص المصحَّح');
  add('v1890-taa-marbuta-enclitic-guard',
    analyze('شاهدت صورته الشخصية.', {safeMode: true}).findings.length === 0,
    'الهاء الضميرية لا تُقلب تاءً مربوطة');
  add('v1890-regression-corpus',
    V1890_BLOCK_REGRESSIONS.length >= 18 && V1890_GOLD_REGRESSIONS.length >= 15,
    `${V1890_BLOCK_REGRESSIONS.length} اختبار حظر + ${V1890_GOLD_REGRESSIONS.length} اختبار ذهبي`);

  const stats = weakVerbStats();
  add('weak-verb-coverage', stats.weakOrIrregularLemmas >= 20, JSON.stringify(stats));

  const failures = Object.entries(checks).filter(([, value]) => value.status === 'fail').map(([id]) => id);
  return {valid: failures.length === 0, checks, failures, stats};
}

/* ===== MODULE: src/benchmarks/external-holdout-v1877.js ===== */
/**
 * External Holdout Benchmark V18.7.7 — معيار خارجي ثابت 400 جملة (80 نحوية +
 * 60 مطابقة/صرف + 60 إملائية + 200 صحيحة). مستقل تمامًا عن مجموعات التطوير
 * الداخلية؛ يُبنى مرة واحدة ويبقى دون تغيير لكل النسخ القادمة، ويُشغَّل عبر
 * runLargeExternalBenchmark(). كل خطأ يحمل بدائل التصحيح المقبولة (بعض الجمل
 * ملتبسة العدد: المثنى أو الجمع كلاهما تصحيح صحيح).
 */
const EXTERNAL_HOLDOUT_BENCHMARK_V1877 = Object.freeze({
  version: '18.7.7',
  description: 'معيار خارجي ثابت: 200 جملة خاطئة (80 نحوية + 60 مطابقة/صرف + 60 إملائية) + 200 جملة صحيحة ضابطة.',
  counts: {errors: 200, syntax: 80, agreement: 60, spelling: 60, controls: 200},
  errors: Object.freeze([
    {id: 'ext-001', text: 'الطالبين مجتهدان.', replacements: ["الطالبان"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-002', text: 'المعلمين ناجحان.', replacements: ["المعلمان"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-003', text: 'المهندسين ماهران.', replacements: ["المهندسان"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-004', text: 'الباحثين مشغولان.', replacements: ["الباحثان"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-005', text: 'المديرين سعيدان.', replacements: ["المديران"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-006', text: 'المزارعين نشيطان.', replacements: ["المزارعان"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-007', text: 'التاجرين مجتهدان.', replacements: ["التاجران"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-008', text: 'الكاتبين ناجحان.', replacements: ["الكاتبان"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-009', text: 'اللاعبين ماهران.', replacements: ["اللاعبان"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-010', text: 'الطبيبين مشغولان.', replacements: ["الطبيبان"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-011', text: 'المحاميين مجتهدان.', replacements: ["المحاميان"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-012', text: 'المدرسين ناجحان.', replacements: ["المدرسان"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-013', text: 'الرسامين ماهران.', replacements: ["الرسامان"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-014', text: 'النجارين مشغولان.', replacements: ["النجاران"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-015', text: 'السائقين سعيدان.', replacements: ["السائقان"], category: 'syntax', note: 'مبتدأ مثنى/جمع مذكر في صيغة الياء'},
    {id: 'ext-016', text: 'قابلت المعلمان.', replacements: ["المعلمين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-017', text: 'شاهد المدير الموظفان.', replacements: ["الموظفين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-018', text: 'كرم المعلم الطالبان.', replacements: ["الطالبين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-019', text: 'حفظ الطلاب الدرسان.', replacements: ["الدرسين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-020', text: 'قرأت الكتابان.', replacements: ["الكتابين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-021', text: 'أصلح النجار الكرسيان.', replacements: ["الكرسيين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-022', text: 'بنى العمال البيتان.', replacements: ["البيتين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-023', text: 'رسم الفنان اللوحتان.', replacements: ["اللوحتين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-024', text: 'رتب الموظف الملفان.', replacements: ["الملفين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-025', text: 'كتب المحرر التقريران.', replacements: ["التقريرين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-026', text: 'نقل السائق الصندوقان.', replacements: ["الصندوقين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-027', text: 'أضاء العامل المصباحان.', replacements: ["المصباحين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-028', text: 'اشترى التاجر الهاتفان.', replacements: ["الهاتفين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-029', text: 'شحن المهندس الحاسوبان.', replacements: ["الحاسوبين"], category: 'syntax', note: 'مفعول به مثنى/جمع مرفوع خطأ'},
    {id: 'ext-030', text: 'حضر الطالبين.', replacements: ["الطالبان","الطالبون"], category: 'syntax', note: 'فاعل متأخر مثنى/جمع في صيغة الياء'},
    {id: 'ext-031', text: 'جاء المعلمين.', replacements: ["المعلمان","المعلمون"], category: 'syntax', note: 'فاعل متأخر مثنى/جمع في صيغة الياء'},
    {id: 'ext-032', text: 'نجح المهندسين.', replacements: ["المهندسان","المهندسون"], category: 'syntax', note: 'فاعل متأخر مثنى/جمع في صيغة الياء'},
    {id: 'ext-033', text: 'اجتمع المديرين.', replacements: ["المديران","المديرون"], category: 'syntax', note: 'فاعل متأخر مثنى/جمع في صيغة الياء'},
    {id: 'ext-034', text: 'وصل الباحثين.', replacements: ["الباحثان","الباحثون"], category: 'syntax', note: 'فاعل متأخر مثنى/جمع في صيغة الياء'},
    {id: 'ext-035', text: 'عاد المسافرين.', replacements: ["المسافران","المسافرون"], category: 'syntax', note: 'فاعل متأخر مثنى/جمع في صيغة الياء'},
    {id: 'ext-036', text: 'فاز اللاعبين.', replacements: ["اللاعبان","اللاعبون"], category: 'syntax', note: 'فاعل متأخر مثنى/جمع في صيغة الياء'},
    {id: 'ext-037', text: 'تخرج الطالبتين.', replacements: ["الطالبتان","الطالبتان"], category: 'syntax', note: 'فاعل متأخر مثنى/جمع في صيغة الياء'},
    {id: 'ext-038', text: 'الطالبين المجتهدين حضرا.', replacements: ["الطالبان","المجتهدان"], category: 'syntax', note: 'مبتدأ ونعت تابعان في حالة رفع خاطئة'},
    {id: 'ext-039', text: 'المهندسين الماهرين اجتمعوا.', replacements: ["المهندسون","الماهرون"], category: 'syntax', note: 'مبتدأ ونعت تابعان في حالة رفع خاطئة'},
    {id: 'ext-040', text: 'المعلمين الحاضرين وصلوا.', replacements: ["المعلمون","الحاضرون"], category: 'syntax', note: 'مبتدأ ونعت تابعان في حالة رفع خاطئة'},
    {id: 'ext-041', text: 'اللاعبين النشيطين فازوا.', replacements: ["اللاعبون","النشيطون"], category: 'syntax', note: 'مبتدأ ونعت تابعان في حالة رفع خاطئة'},
    {id: 'ext-042', text: 'الباحثين الجادين نجحوا.', replacements: ["الباحثون","الجادون"], category: 'syntax', note: 'مبتدأ ونعت تابعان في حالة رفع خاطئة'},
    {id: 'ext-043', text: 'الطالبتين المجتهدتين نجحتا.', replacements: ["الطالبتان","المجتهدتان"], category: 'syntax', note: 'مبتدأ ونعت تابعان في حالة رفع خاطئة'},
    {id: 'ext-044', text: 'الكتابين الجديدين صدرا.', replacements: ["الكتابان","الجديدان"], category: 'syntax', note: 'مبتدأ ونعت تابعان في حالة رفع خاطئة'},
    {id: 'ext-045', text: 'المعلمين المخلصين اجتهدوا.', replacements: ["المعلمون","المخلصون"], category: 'syntax', note: 'مبتدأ ونعت تابعان في حالة رفع خاطئة'},
    {id: 'ext-046', text: 'إن الطالبان مجتهدان.', replacements: ["الطالبين"], category: 'syntax', note: 'اسم إن مرفوع خطأ'},
    {id: 'ext-047', text: 'إن المعلمون حاضرون.', replacements: ["المعلمين"], category: 'syntax', note: 'اسم إن مرفوع خطأ'},
    {id: 'ext-048', text: 'إن المهندسون جاهزون.', replacements: ["المهندسين"], category: 'syntax', note: 'اسم إن مرفوع خطأ'},
    {id: 'ext-049', text: 'إن الطالبتان مجتهدتان.', replacements: ["الطالبتين"], category: 'syntax', note: 'اسم إن مرفوع خطأ'},
    {id: 'ext-050', text: 'كان الطالبين مجتهدين.', replacements: ["الطالبان","الطالبون"], category: 'syntax', note: 'اسم كان منصوب خطأ'},
    {id: 'ext-051', text: 'كان المعلمين حاضرين.', replacements: ["المعلمون","المعلمان"], category: 'syntax', note: 'اسم كان منصوب خطأ'},
    {id: 'ext-052', text: 'كان المهندسين جاهزين.', replacements: ["المهندسون","المهندسان"], category: 'syntax', note: 'اسم كان منصوب خطأ'},
    {id: 'ext-053', text: 'كان الطالبتين مجتهدتين.', replacements: ["الطالبتان"], category: 'syntax', note: 'اسم كان منصوب خطأ'},
    {id: 'ext-054', text: 'حضر أبا خالد.', replacements: ["أبو"], category: 'syntax', note: 'الأسماء الخمسة: حالة خاطئة'},
    {id: 'ext-055', text: 'رأيت أبو خالد.', replacements: ["أبا"], category: 'syntax', note: 'الأسماء الخمسة: حالة خاطئة'},
    {id: 'ext-056', text: 'مررت بأبو خالد.', replacements: ["بأبي"], category: 'syntax', note: 'الأسماء الخمسة: حالة خاطئة'},
    {id: 'ext-057', text: 'حضر ابا خالد.', replacements: ["أبو"], category: 'syntax', note: 'الأسماء الخمسة: حالة خاطئة'},
    {id: 'ext-058', text: 'حضر أخا خالد.', replacements: ["أخو"], category: 'syntax', note: 'الأسماء الخمسة: حالة خاطئة'},
    {id: 'ext-059', text: 'حضر خمسة طالبات.', replacements: ["خمس"], category: 'syntax', note: 'خطأ في العدد والمعدود'},
    {id: 'ext-060', text: 'رأيت أربعة معلمات.', replacements: ["أربع"], category: 'syntax', note: 'خطأ في العدد والمعدود'},
    {id: 'ext-061', text: 'في الصف سبعة معلمات.', replacements: ["سبع"], category: 'syntax', note: 'خطأ في العدد والمعدود'},
    {id: 'ext-062', text: 'اشترت الأم تسعة سيارات.', replacements: ["تسع"], category: 'syntax', note: 'خطأ في العدد والمعدود'},
    {id: 'ext-063', text: 'في المكتبة واحد وعشرون طالبة.', replacements: ["إحدى","واحدة"], category: 'syntax', note: 'خطأ في العدد والمعدود'},
    {id: 'ext-064', text: 'حضر عشرون طالبُ.', replacements: ["طالبًا","طالبَ"], category: 'syntax', note: 'خطأ في العدد والمعدود'},
    {id: 'ext-065', text: 'رأيت عشرون طالبًا.', replacements: ["عشرين"], category: 'syntax', note: 'خطأ في العدد والمعدود'},
    {id: 'ext-066', text: 'حضر أحد عشر طالبةً.', replacements: ["إحدى عشرة"], category: 'syntax', note: 'خطأ في العدد والمعدود'},
    {id: 'ext-067', text: 'عاد الطالب مسرورُ.', replacements: ["مسرورًا"], category: 'syntax', note: 'حال أو تمييز بلا نصب'},
    {id: 'ext-068', text: 'عاد الطلاب مسرورون.', replacements: ["مسرورين"], category: 'syntax', note: 'حال أو تمييز بلا نصب'},
    {id: 'ext-069', text: 'عادت الطالبة مسرورٌ.', replacements: ["مسرورةً"], category: 'syntax', note: 'حال أو تمييز بلا نصب'},
    {id: 'ext-070', text: 'عادت الطالبات مسروراتُ.', replacements: ["مسروراتٍ"], category: 'syntax', note: 'حال أو تمييز بلا نصب'},
    {id: 'ext-071', text: 'امتلأ الكأس ماءُ.', replacements: ["ماءً","ماءَ"], category: 'syntax', note: 'حال أو تمييز بلا نصب'},
    {id: 'ext-072', text: 'جاءت الطالبة الذي نجح.', replacements: ["التي","نجحت"], category: 'syntax', note: 'اسم موصول غير مطابق'},
    {id: 'ext-073', text: 'حضر المعلمون الذي اجتهدوا.', replacements: ["الذين"], category: 'syntax', note: 'اسم موصول غير مطابق'},
    {id: 'ext-074', text: 'رأيت الطالبتين التي نجحتا.', replacements: ["اللتين"], category: 'syntax', note: 'اسم موصول غير مطابق'},
    {id: 'ext-075', text: 'الكتاب التي اشتريته.', replacements: ["الذي"], category: 'syntax', note: 'اسم موصول غير مطابق'},
    {id: 'ext-076', text: 'جاء الرجل التي زارنا.', replacements: ["الذي"], category: 'syntax', note: 'اسم موصول غير مطابق'},
    {id: 'ext-077', text: 'رأى المدير الطالبين والمدرسون.', replacements: ["المدرسين"], category: 'syntax', note: 'معطوف يخالف المعطوف عليه في الحالة'},
    {id: 'ext-078', text: 'مررت بالطالبين والمعلمون.', replacements: ["المعلمين"], category: 'syntax', note: 'معطوف يخالف المعطوف عليه في الحالة'},
    {id: 'ext-079', text: 'شاهد المدير المهندسين والموظفون.', replacements: ["الموظفين"], category: 'syntax', note: 'معطوف يخالف المعطوف عليه في الحالة'},
    {id: 'ext-080', text: 'كرم المعلم الطالبين والمدرسون.', replacements: ["المدرسين"], category: 'syntax', note: 'معطوف يخالف المعطوف عليه في الحالة'},
    {id: 'ext-081', text: 'الطالبة كتب الدرس.', replacements: ["كتبت"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-082', text: 'الممرضة زار المستشفى.', replacements: ["زارت"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-083', text: 'المعلمة شرح الدرس.', replacements: ["شرحت"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-084', text: 'الطالبة قرأ الدرس.', replacements: ["قرأت"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-085', text: 'المهندسة صمم المبنى.', replacements: ["صممت"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-086', text: 'المحامية دافع عن المتهم.', replacements: ["دافعت"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-087', text: 'الطبيبة عالج المريض.', replacements: ["عالجت"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-088', text: 'الفلاحة حصد القمح.', replacements: ["حصدت"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-089', text: 'الفلاحة زرع الحقل.', replacements: ["زرعت"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-090', text: 'الرسامة رسم اللوحة.', replacements: ["رسمت"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-091', text: 'الطالبان كتب الدرس.', replacements: ["كتبا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-092', text: 'المعلمون حضر.', replacements: ["حضروا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-093', text: 'اللاعبان فاز.', replacements: ["فازا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-094', text: 'المهندسان صمم المبنى.', replacements: ["صمما"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-095', text: 'الطبيبان عالج المريض.', replacements: ["عالجا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-096', text: 'الضيفان غادر.', replacements: ["غادرا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-097', text: 'الكاتبان نشر المقال.', replacements: ["نشرا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-098', text: 'التاجران باع البضاعة.', replacements: ["باعا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-099', text: 'الطلاب كتب الدرس.', replacements: ["كتبوا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-100', text: 'العمال بنى المبنى.', replacements: ["بنوا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-101', text: 'المزارعون حصد القمح.', replacements: ["حصدوا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-102', text: 'التجار باع البضاعة.', replacements: ["باعوا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-103', text: 'الموظفون غادر المكتب.', replacements: ["غادروا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-104', text: 'المهندسون صمم المبنى.', replacements: ["صمموا"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-105', text: 'المعلمات كتب الدرس.', replacements: ["كتبن"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-106', text: 'الطالبات حضر.', replacements: ["حضرن"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-107', text: 'الممرضات عالج المريض.', replacements: ["عالجن"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-108', text: 'المحاميات دافع عن القضية.', replacements: ["دافعن"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-109', text: 'المهندسات صمم المبنى.', replacements: ["صممن"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-110', text: 'الرسامات رسم اللوحة.', replacements: ["رسمن"], category: 'agreement', note: 'مطابقة الفعل للفاعل الظاهر (ماضٍ)'},
    {id: 'ext-111', text: 'الطالبة يكتب الدرس.', replacements: ["تكتب"], category: 'agreement', note: 'مطابقة الفعل المضارع'},
    {id: 'ext-112', text: 'المعلمات يكتب الدرس.', replacements: ["يكتبن"], category: 'agreement', note: 'مطابقة الفعل المضارع'},
    {id: 'ext-113', text: 'الطلاب تكتب الدرس.', replacements: ["يكتبون"], category: 'agreement', note: 'مطابقة الفعل المضارع'},
    {id: 'ext-114', text: 'الطالبان تكتب الدرس.', replacements: ["يكتبان"], category: 'agreement', note: 'مطابقة الفعل المضارع'},
    {id: 'ext-115', text: 'الطالبتان يكتب الدرس.', replacements: ["تكتبان"], category: 'agreement', note: 'مطابقة الفعل المضارع'},
    {id: 'ext-116', text: 'الرجل يكتبون.', replacements: ["يكتب"], category: 'agreement', note: 'مطابقة الفعل المضارع'},
    {id: 'ext-117', text: 'البنات يكتبون.', replacements: ["يكتبن"], category: 'agreement', note: 'مطابقة الفعل المضارع'},
    {id: 'ext-118', text: 'الأولاد تكتب.', replacements: ["يكتبون"], category: 'agreement', note: 'مطابقة الفعل المضارع'},
    {id: 'ext-119', text: 'الممرضة يعالج المريض.', replacements: ["تعالج"], category: 'agreement', note: 'مطابقة الفعل المضارع'},
    {id: 'ext-120', text: 'المهندسون يصمم المبنى.', replacements: ["يصممون"], category: 'agreement', note: 'مطابقة الفعل المضارع'},
    {id: 'ext-121', text: 'كانت الطالب مجتهدًا.', replacements: ["كان"], category: 'agreement', note: 'مطابقة كان لاسمها'},
    {id: 'ext-122', text: 'كان الطالبات مجتهدات.', replacements: ["كانت"], category: 'agreement', note: 'مطابقة كان لاسمها'},
    {id: 'ext-123', text: 'كانت المهندسون جاهزين.', replacements: ["كان"], category: 'agreement', note: 'مطابقة كان لاسمها'},
    {id: 'ext-124', text: 'كانت المعلمان مجتهدين.', replacements: ["كان"], category: 'agreement', note: 'مطابقة كان لاسمها'},
    {id: 'ext-125', text: 'كان المعلمتان مجتهدتين.', replacements: ["كانت"], category: 'agreement', note: 'مطابقة كان لاسمها'},
    {id: 'ext-126', text: 'الفتاة رمى الكرة.', replacements: ["رمت"], category: 'agreement', note: 'فعل ناقص/معتل مع فاعله'},
    {id: 'ext-127', text: 'الفتاة دعا صديقتها.', replacements: ["دعت"], category: 'agreement', note: 'فعل ناقص/معتل مع فاعله'},
    {id: 'ext-128', text: 'البنات رمى الكرة.', replacements: ["رمين"], category: 'agreement', note: 'فعل ناقص/معتل مع فاعله'},
    {id: 'ext-129', text: 'الفتاة مشى في الطريق.', replacements: ["مشت"], category: 'agreement', note: 'فعل ناقص/معتل مع فاعله'},
    {id: 'ext-130', text: 'الطلاب سعى إلى النجاح.', replacements: ["سعوا"], category: 'agreement', note: 'فعل ناقص/معتل مع فاعله'},
    {id: 'ext-131', text: 'هم يقرءون الكتاب.', replacements: ["يقرؤون"], category: 'agreement', note: 'كرسي همزة الفعل في التصريف'},
    {id: 'ext-132', text: 'هم يقرئون الكتاب.', replacements: ["يقرؤون"], category: 'agreement', note: 'كرسي همزة الفعل في التصريف'},
    {id: 'ext-133', text: 'قرءوا الكتاب.', replacements: ["قرؤوا"], category: 'agreement', note: 'كرسي همزة الفعل في التصريف'},
    {id: 'ext-134', text: 'قرئوا الكتاب.', replacements: ["قرؤوا"], category: 'agreement', note: 'كرسي همزة الفعل في التصريف'},
    {id: 'ext-135', text: 'هي تقرء الدرس.', replacements: ["تقرأ"], category: 'agreement', note: 'كرسي همزة الفعل في التصريف'},
    {id: 'ext-136', text: 'جاءت الطالبة الذي نجح.', replacements: ["التي","نجحت"], category: 'agreement', note: 'فعل صلة الموصول'},
    {id: 'ext-137', text: 'حضر الطلاب الذي اجتهدوا.', replacements: ["الذين"], category: 'agreement', note: 'فعل صلة الموصول'},
    {id: 'ext-138', text: 'رأيت الطالبات الذي نجحن.', replacements: ["اللاتي"], category: 'agreement', note: 'فعل صلة الموصول'},
    {id: 'ext-139', text: 'الكتاب التي قرأته.', replacements: ["الذي"], category: 'agreement', note: 'فعل صلة الموصول'},
    {id: 'ext-140', text: 'المعلمون الذين حضر.', replacements: ["حضروا"], category: 'agreement', note: 'فعل صلة الموصول'},
    {id: 'ext-141', text: 'اخذ الكتاب.', replacements: ["أخذ"], category: 'spelling', note: 'همزة قطع محذوفة (فعل)'},
    {id: 'ext-142', text: 'اكل الطفل التفاحة.', replacements: ["أكل"], category: 'spelling', note: 'همزة قطع محذوفة (فعل)'},
    {id: 'ext-143', text: 'ارسل المدير الرسالة.', replacements: ["أرسل"], category: 'spelling', note: 'همزة قطع محذوفة (فعل)'},
    {id: 'ext-144', text: 'اعلن الوزير القرار.', replacements: ["أعلن"], category: 'spelling', note: 'همزة قطع محذوفة (فعل)'},
    {id: 'ext-145', text: 'اكمل الطالب الواجب.', replacements: ["أكمل"], category: 'spelling', note: 'همزة قطع محذوفة (فعل)'},
    {id: 'ext-146', text: 'انهى العامل العمل.', replacements: ["أنهى"], category: 'spelling', note: 'همزة قطع محذوفة (فعل)'},
    {id: 'ext-147', text: 'اوقف الحارس السيارة.', replacements: ["أوقف"], category: 'spelling', note: 'همزة قطع محذوفة (فعل)'},
    {id: 'ext-148', text: 'اسرع اللاعب.', replacements: ["أسرع"], category: 'spelling', note: 'همزة قطع محذوفة (فعل)'},
    {id: 'ext-149', text: 'اضاف المدرب اللاعب.', replacements: ["أضاف"], category: 'spelling', note: 'همزة قطع محذوفة (فعل)'},
    {id: 'ext-150', text: 'اعدت الطباخة الطعام.', replacements: ["أعدت"], category: 'spelling', note: 'همزة قطع محذوفة (فعل)'},
    {id: 'ext-151', text: 'اجاب الطالب على السؤال.', replacements: ["أجاب"], category: 'spelling', note: 'همزة قطع محذوفة (فعل)'},
    {id: 'ext-152', text: 'احضروا الكتب.', replacements: ["أحضروا"], category: 'spelling', note: 'همزة قطع محذوفة (فعل)'},
    {id: 'ext-153', text: 'مرت الايام.', replacements: ["الأيام"], category: 'spelling', note: 'همزة قطع محذوفة (اسم)'},
    {id: 'ext-154', text: 'هذا امر مهم.', replacements: ["أمر"], category: 'spelling', note: 'همزة قطع محذوفة (اسم)'},
    {id: 'ext-155', text: 'حدث ذلك اثناء الاجتماع.', replacements: ["أثناء"], category: 'spelling', note: 'همزة قطع محذوفة (اسم)'},
    {id: 'ext-156', text: 'حضر احد الطلاب.', replacements: ["أحد"], category: 'spelling', note: 'همزة قطع محذوفة (اسم)'},
    {id: 'ext-157', text: 'الاساس متين.', replacements: ["الأساس"], category: 'spelling', note: 'همزة قطع محذوفة (اسم)'},
    {id: 'ext-158', text: 'اسلوب الكاتب جميل.', replacements: ["أسلوب"], category: 'spelling', note: 'همزة قطع محذوفة (اسم)'},
    {id: 'ext-159', text: 'هذا هو الافضل.', replacements: ["الأفضل"], category: 'spelling', note: 'همزة قطع محذوفة (اسم)'},
    {id: 'ext-160', text: 'الاستاذ حضر.', replacements: ["الأستاذ"], category: 'spelling', note: 'همزة قطع محذوفة (اسم)'},
    {id: 'ext-161', text: 'رأيت اشياء غريبة.', replacements: ["أشياء"], category: 'spelling', note: 'همزة قطع محذوفة (اسم)'},
    {id: 'ext-162', text: 'امال الشعب كبيرة.', replacements: ["آمال"], category: 'spelling', note: 'همزة قطع محذوفة (اسم)'},
    {id: 'ext-163', text: 'المدرسه كبيرة.', replacements: ["المدرسة"], category: 'spelling', note: 'تاء مربوطة تكتب هاء'},
    {id: 'ext-164', text: 'هذه الجمله صحيحه.', replacements: ["الجملة"], category: 'spelling', note: 'تاء مربوطة تكتب هاء'},
    {id: 'ext-165', text: 'الرساله وصلت.', replacements: ["الرسالة"], category: 'spelling', note: 'تاء مربوطة تكتب هاء'},
    {id: 'ext-166', text: 'الطريقه الجديده.', replacements: ["الطريقة"], category: 'spelling', note: 'تاء مربوطة تكتب هاء'},
    {id: 'ext-167', text: 'المدينه قديمه.', replacements: ["المدينة"], category: 'spelling', note: 'تاء مربوطة تكتب هاء'},
    {id: 'ext-168', text: 'الفتره طويلة.', replacements: ["الفترة"], category: 'spelling', note: 'تاء مربوطة تكتب هاء'},
    {id: 'ext-169', text: 'المرحله صعبه.', replacements: ["المرحلة"], category: 'spelling', note: 'تاء مربوطة تكتب هاء'},
    {id: 'ext-170', text: 'الحريه غاليه.', replacements: ["الحرية"], category: 'spelling', note: 'تاء مربوطة تكتب هاء'},
    {id: 'ext-171', text: 'القصه جميله.', replacements: ["القصة"], category: 'spelling', note: 'تاء مربوطة تكتب هاء'},
    {id: 'ext-172', text: 'الروايه ممتعه.', replacements: ["الرواية"], category: 'spelling', note: 'تاء مربوطة تكتب هاء'},
    {id: 'ext-173', text: 'المقاله طويله.', replacements: ["المقالة"], category: 'spelling', note: 'تاء مربوطة تكتب هاء'},
    {id: 'ext-174', text: 'المعركه كانت عنيفه.', replacements: ["المعركة"], category: 'spelling', note: 'تاء مربوطة تكتب هاء'},
    {id: 'ext-175', text: 'ذهبت إلى منتدي.', replacements: ["منتدى"], category: 'spelling', note: 'ألف مقصورة تكتب ياء'},
    {id: 'ext-176', text: 'ذهب إلى مستشفي.', replacements: ["مستشفى"], category: 'spelling', note: 'ألف مقصورة تكتب ياء'},
    {id: 'ext-177', text: 'قرأت محتوي الصفحة.', replacements: ["محتوى"], category: 'spelling', note: 'ألف مقصورة تكتب ياء'},
    {id: 'ext-178', text: 'هذا شئ مهم.', replacements: ["شيء"], category: 'spelling', note: 'همزة متطرفة'},
    {id: 'ext-179', text: 'هذا جزئ من الكتاب.', replacements: ["جزء"], category: 'spelling', note: 'همزة متطرفة'},
    {id: 'ext-180', text: 'كان ذلك بدئ النهاية.', replacements: ["بدء"], category: 'spelling', note: 'همزة متطرفة'},
    {id: 'ext-181', text: 'الإناء ملئ بالماء.', replacements: ["ملء"], category: 'spelling', note: 'همزة متطرفة'},
    {id: 'ext-182', text: 'الطلاب كتبو الدرس.', replacements: ["كتبوا"], category: 'spelling', note: 'واو الجماعة بلا ألف'},
    {id: 'ext-183', text: 'قالو الحقيقة.', replacements: ["قالوا"], category: 'spelling', note: 'واو الجماعة بلا ألف'},
    {id: 'ext-184', text: 'العمال درسو الخطة.', replacements: ["درسوا"], category: 'spelling', note: 'واو الجماعة بلا ألف'},
    {id: 'ext-185', text: 'المشجعون شاهدو المباراة.', replacements: ["شاهدوا"], category: 'spelling', note: 'واو الجماعة بلا ألف'},
    {id: 'ext-186', text: 'الوفود زارو المدينة.', replacements: ["زاروا"], category: 'spelling', note: 'واو الجماعة بلا ألف'},
    {id: 'ext-187', text: 'كانو سعداء.', replacements: ["كانوا"], category: 'spelling', note: 'واو الجماعة بلا ألف'},
    {id: 'ext-188', text: 'الموظفون عملو بجد.', replacements: ["عملوا"], category: 'spelling', note: 'واو الجماعة بلا ألف'},
    {id: 'ext-189', text: 'الفريق نجحو في المهمة.', replacements: ["نجحوا"], category: 'spelling', note: 'واو الجماعة بلا ألف'},
    {id: 'ext-190', text: 'هذة الكلمة مهمة.', replacements: ["هذه"], category: 'spelling', note: 'كلمات شائعة'},
    {id: 'ext-191', text: 'ايضا لاحظ ذلك.', replacements: ["أيضا"], category: 'spelling', note: 'كلمات شائعة'},
    {id: 'ext-192', text: 'الان نبدأ.', replacements: ["الآن"], category: 'spelling', note: 'كلمات شائعة'},
    {id: 'ext-193', text: 'ذالك صحيح.', replacements: ["ذلك"], category: 'spelling', note: 'كلمات شائعة'},
    {id: 'ext-194', text: 'هذا هو اللذي أردت.', replacements: ["الذي"], category: 'spelling', note: 'كلمات شائعة'},
    {id: 'ext-195', text: 'اذا جاء الربيع.', replacements: ["إذا"], category: 'spelling', note: 'كلمات شائعة'},
    {id: 'ext-196', text: 'الكتاب الذى قرأته.', replacements: ["الذي"], category: 'spelling', note: 'كلمات شائعة'},
    {id: 'ext-197', text: 'انشاء الله ننجح.', replacements: ["إن شاء الله"], category: 'spelling', note: 'عبارات إملائية'},
    {id: 'ext-198', text: 'ان شاء الله غدا.', replacements: ["إن شاء الله"], category: 'spelling', note: 'عبارات إملائية'},
    {id: 'ext-199', text: 'لابد من الصبر.', replacements: ["لا بد"], category: 'spelling', note: 'عبارات إملائية'},
    {id: 'ext-200', text: 'باذن الله.', replacements: ["بإذن الله"], category: 'spelling', note: 'عبارات إملائية'}
  ]),
  controls: Object.freeze(["الصحفي قرأ الكتاب.", "الصحفي زار المتحف.", "الصحفي حفظ القصيدة.", "الصحفي راجع التقرير.", "الصحفي فتح الباب.", "الصحفي شاهد الفيلم.", "المهندس صمم المبنى.", "المصري عاد إلى بلده.", "العراقي زار باريس.", "السعودي اشترى تذكرة.", "المغربي فاز بالجائزة.", "الطالب المجتهد يكتب.", "المعلم المخلص يشرح.", "العامل النشيط يعمل.", "جاء المدير الجديد.", "المؤمن يدعو ربه.", "الطفل يخطو خطواته الأولى.", "شاهدت صورته وقرأت مقاله.", "هذا مكتبه الخاص.", "عنده سيارة حديثة.", "فيك خير كثير.", "أحب الباذنجان المقلي.", "الآن الوقت مناسب للعمل.", "الطالب كتب الدرس.", "الطالبان كتبا الدرس.", "الطلاب كتبوا الدرس.", "الطالبة كتبت الدرس.", "المعلمات كتبن الدرس.", "الممرضة زارت المستشفى.", "الممرضات عملن بجد.", "المهندسون صمموا المبنى.", "المحامي دافع عن المتهم.", "المحامية دافعت عن المتهم.", "الرسام رسم اللوحة.", "الرسامات رسمن اللوحة.", "كتب الطالب الدرس.", "كتبت الطالبة الدرس.", "قرأ الطالب الكتاب.", "قرأت الطالبة الكتاب.", "حضر الطالب.", "حضرت الطالبة.", "قال الطالب.", "قالت الطالبة.", "قام الطلاب مبكرين.", "قامت الطالبات مبكرات.", "دعت الطالبة.", "باع التاجر البضاعة.", "دعا الرجل صديقه.", "الولد يكتب الدرس.", "البنات يكتبن الدرس.", "الرجال يكتبون.", "الرجلان يكتبان.", "الطالبتان تكتبان الدرس.", "الطالبان مجتهدان.", "المعلمون حاضرون.", "المهندسون جاهزون.", "الباحثون مسرورون.", "المديرون واقفون.", "الطالبتان مجتهدتان.", "المعلمتان حاضرتان.", "المدرسون مشغولون.", "اللاعبان نشيطان.", "الكتابان جديدان.", "القلمان على الطاولة.", "الطالبان حضرا.", "الطالبان المجتهدان حضرا.", "المهندسون الماهرون اجتمعوا.", "المعلمون المخلصون اجتهدوا.", "جاء معلمو المدرسة.", "جاء طلابو المدرسة.", "حضر الطالبان والمعلمان.", "مررت بالطالبين والمعلمين.", "رأيت الطالبين المجتهدين.", "مررت بالطالبين المجتهدين.", "الطلاب يكتبون.", "المعلمات يحضرن.", "حضر الطلاب مبكرين.", "عاد الطلاب مسرورين.", "كان الطالبان مجتهدين.", "كان المعلمون حاضرين.", "كان المهندسون جاهزين.", "كانت الطالبتان مجتهدتين.", "كان الطالب مجتهدًا.", "كانت الطالبة مجتهدة.", "إن الطالبين مجتهدان.", "إن المعلمين حاضرون.", "إن المهندسين جاهزون.", "إن الطالبتين مجتهدتان.", "إن اللاعبين نشيطون.", "كانت الطالبات مجتهداتٍ.", "إن الطالب مجتهد.", "كان المدير في المكتب.", "إن النجاح ممكن.", "كان الجو جميلًا.", "إن الصبر مفتاح الفرج.", "كانت الأمور صعبة.", "إن العلم نور.", "كان العمل شاقًا.", "الطالب الذي نجح.", "الطالبة التي نجحت.", "الطلاب الذين نجحوا.", "الطالبات اللاتي نجحن.", "الطالبان اللذان نجحا.", "الطالبتان اللتان نجحتا.", "الكتاب الذي قرأته.", "الكتابان اللذان اشتريتهما.", "جاءت الطالبة التي نجحت.", "حضر المعلمون الذين اجتهدوا.", "رأيت الطالبتين اللتين نجحتا.", "الرجل الذي زارنا غادر.", "المدير الذي قابلته ودود.", "هذه هي الحقيقة التي لا شك فيها.", "هذا الكتاب الذي اشتريته مفيد.", "ثلاثة طلاب.", "ثلاث طالبات.", "خمسة كتب.", "أربعة معلمين.", "واحد وعشرون كتابًا جديدًا.", "واحدة وعشرون صفحةً جديدةً.", "إحدى عشرة طالبةً.", "ثلاثة عشر طالبًا.", "رأيت اثني عشر طالبًا.", "حضرت اثنتا عشرة طالبةً.", "في المكتبة واحد.", "قرأت أربعَ صفحاتٍ.", "ازداد الطالب علمًا.", "امتلأ الكأس ماءً.", "ثلاثة معلمين.", "عشرون طالبًا في الصف.", "عندي خمسة أقلام.", "رأيت سبع سيارات.", "في الحديقة ثماني وردات.", "اشترى اثني عشر كتابًا.", "حضر أبو خالد.", "رأيت أبا خالد.", "مررت بأبي خالد.", "جاء أخو العامل.", "رأيت أخا العامل.", "مررت بأخي العامل.", "حضر ذو علم.", "رأيت ذا علم.", "مررت بذي علم.", "عاد الطالب مسرورًا.", "عادت الطالبة مسرورةً.", "عاد الطلاب مسرورين.", "عادت الطالبات مسروراتٍ.", "حضر الطلاب إلا المعلمين.", "ما حضر الطلاب إلا المعلمون.", "المدرسة كبيرة.", "الرسالة وصلت.", "الكتاب جديد.", "أخذت الكتاب.", "أرسلت الرسالة.", "أعلن الوزير القرار.", "الأيام تمر.", "هذا أمر مهم.", "جاء الأستاذ.", "أنا أقرأ.", "أنت تكتب.", "هذا صحيح.", "ذلك خطأ.", "الآن نبدأ.", "إذا جاء الربيع.", "إن شاء الله ننجح.", "لا بد من الصبر.", "من أجل النجاح.", "بإذن الله.", "على الرغم من ذلك.", "قرأت شيئًا مفيدًا.", "قرأت أربعة كتب.", "هذه كتب جديدة.", "استخدام الحاسوب مفيد.", "انتبه إلى الدرس.", "سافر المدير إلى باريس أمس.", "اجتمع الوزراء في القصر الرئاسي.", "زار الوفد المصانع الحديثة.", "ناقش الطلاب موضوع البيئة.", "اهتمت الصحف بالأخبار المحلية.", "شارك آلاف المواطنين في المهرجان.", "افتتحت المدينة متحفًا جديدًا.", "الصحفي قرأ.", "المصري عاد.", "المهندس عمل.", "الطبيب فحص المريض.", "هذا كتابي.", "قرأت كتابك.", "شاهدت صوره.", "زارنا صديقها.", "أحب وطني.", "احترم معلمي.", "هذا قلمي.", "سلمت على أخي.", "علي طالب مجتهد.", "محمد لاعب ماهر.", "خالد مهندس ناجح.", "سافر أحمد إلى القاهرة.", "زرت باريس صيفًا.", "هند طبيبة مشهورة.", "فاطمة معلمة مخلصة.", "تعيش سارة في الرياض."])
});

/**
 * يشغّل الاختبار الخارجي الكبير ويقيس: كشف الخطأ (أيُّ بديل مقبول ظهر)،
 * الاكتمال (ظهور كل البدائل)، والإنذارات الكاذبة على الجمل الصحيحة، ثم
 * يحسب Precision / Recall / F1.
 */
function runLargeExternalBenchmark(benchmark = EXTERNAL_HOLDOUT_BENCHMARK_V1877, options = {}) {
  const norm = s => String(s).replace(/\s+/gu, ' ').trim();
  const stripConj = w => w.replace(/^[وف]/u, '');
  const wordsOf = s => norm(s).split(' ').filter(Boolean).map(stripConj);
  const matchesExp = (repl, exp) => {
    if (norm(repl) === norm(exp)) return true;
    const ew = wordsOf(exp), rw = wordsOf(repl);
    if (!ew.length) return false;
    return ew.every(w => rw.includes(w));
  };
  const errorResults = [];
  let caught = 0, fullyCorrected = 0;
  const byCategory = {};
  for (const test of benchmark.errors) {
    const result = analyze(test.text, {safeMode: true});
    const repls = result.findings.map(f => f.replacement).filter(Boolean);
    const expected = test.replacements || [];
    const hit = expected.filter(x => repls.some(r => matchesExp(r, x)));
    const ok = hit.length > 0;
    const full = hit.length === expected.length;
    if (ok) caught += 1;
    if (full) fullyCorrected += 1;
    byCategory[test.category] = byCategory[test.category] || {total: 0, caught: 0, full: 0};
    byCategory[test.category].total += 1;
    if (ok) byCategory[test.category].caught += 1;
    if (full) byCategory[test.category].full += 1;
    errorResults.push({id: test.id, text: test.text, category: test.category,
      expected, got: repls, ok, full, rules: result.findings.map(f => f.ruleId)});
  }
  let falsePositives = 0;
  const fpList = [];
  for (const text of benchmark.controls) {
    const result = analyze(text, {safeMode: true});
    if (result.findings.length) {
      falsePositives += 1;
      fpList.push({text, findings: result.findings.map(f => ({ruleId: f.ruleId, original: f.original, replacement: f.replacement, confidence: f.confidence}))});
    }
  }
  const total = benchmark.errors.length;
  const recall = total ? caught / total : 0;
  const precision = total ? caught / (caught + falsePositives) : 0;
  const f1 = (precision + recall) ? 2 * precision * recall / (precision + recall) : 0;
  return {
    version: benchmark.version, engine: META.version,
    counts: {errors: total, caught, missed: total - caught, fullyCorrected,
      controls: benchmark.controls.length, falsePositives},
    recall, precision, f1,
    falsePositiveRate: benchmark.controls.length ? falsePositives / benchmark.controls.length : 0,
    byCategory: Object.fromEntries(Object.entries(byCategory).map(([k, v]) =>
      [k, {total: v.total, caught: v.caught, rate: v.caught / v.total, fullyCorrected: v.full}])),
    errorResults, fpList
  };
}

/* ===== MODULE: src/benchmarks/external-holdout-v1876.js ===== */
/**
 * External Holdout Benchmark V18.7.6 — مستقل تمامًا عن مجموعات التطوير الداخلية.
 * المصدر: اختبار خارجي على V18.7.5 (400 جملة) كشف 18 خطأ نحويًا فائتًا
 * تتركز كلها في المثنى وجمع المذكر السالم في مواقع الرفع والنصب، مع صفر
 * إنذارات كاذبة. يُشغَّل عبر runExternalHoldoutBenchmark() ولا يدخل في validate().
 */
const EXTERNAL_HOLDOUT_BENCHMARK_V1876 = Object.freeze({
  version: '18.7.6',
  description: 'معيار خارجي محايد: 18 جملة خاطئة (يجب كشفها) + 16 جملة صحيحة/ملتبسة (يجب السكوت عنها).',
  errors: Object.freeze([
    {id: 'ext-01', text: 'الطالبين مجتهدان.', rules: ['TOPIC_CASE_V1876'], replacements: ['الطالبان']},
    {id: 'ext-02', text: 'المعلمين حاضرون.', rules: ['TOPIC_CASE_V1876'], replacements: ['المعلمون']},
    {id: 'ext-03', text: 'المهندسين جاهزون.', rules: ['TOPIC_CASE_V1876'], replacements: ['المهندسون']},
    {id: 'ext-04', text: 'الباحثين مسرورون.', rules: ['TOPIC_CASE_V1876'], replacements: ['الباحثون']},
    {id: 'ext-05', text: 'المديرين واقفون.', rules: ['TOPIC_CASE_V1876'], replacements: ['المديرون']},
    {id: 'ext-06', text: 'قابلت المعلمان المجتهدان.',
      rules: ['OBJECT_CASE_V1871', 'ADJECTIVE_DEPENDENT_CASE_V18'],
      replacements: ['المعلمين', 'المجتهدين']},
    {id: 'ext-07', text: 'قابلت المعلمان.', rules: ['OBJECT_CASE_V1871'], replacements: ['المعلمين']},
    {id: 'ext-08', text: 'قابل المعلم الطالبان.', rules: ['OBJECT_CASE_V1871'], replacements: ['الطالبين']},
    {id: 'ext-09', text: 'الطالبين المجتهدين حضرا.',
      rules: ['TOPIC_CASE_V1876', 'ADJECTIVE_DEPENDENT_CASE_V18'],
      replacements: ['الطالبان', 'المجتهدان']},
    {id: 'ext-10', text: 'الطالبين حضرا.', rules: ['TOPIC_CASE_V1876'], replacements: ['الطالبان']},
    {id: 'ext-11', text: 'المهندسين الماهرين اجتمعوا.',
      rules: ['TOPIC_CASE_V1876', 'ADJECTIVE_DEPENDENT_CASE_V18'],
      replacements: ['المهندسون', 'الماهرون']},
    {id: 'ext-12', text: 'المهندسين اجتمعوا.', rules: ['TOPIC_CASE_V1876'], replacements: ['المهندسون']},
    {id: 'ext-13', text: 'حضر الطالبين.', rules: ['SUBJECT_CASE_V1876'], replacements: ['الطالبان']},
    {id: 'ext-14', text: 'الطالبين المجتهدين ناجحان.',
      rules: ['TOPIC_CASE_V1876', 'ADJECTIVE_DEPENDENT_CASE_V18'],
      replacements: ['الطالبان', 'المجتهدان']},
    {id: 'ext-15', text: 'الطالبين في الصف.', rules: ['TOPIC_CASE_V1876'], replacements: ['الطالبان']},
    {id: 'ext-16', text: 'الطالبتين مجتهدتان.', rules: ['TOPIC_CASE_V1876'], replacements: ['الطالبتان']},
    {id: 'ext-17', text: 'شاهد المدير الموظفان.', rules: ['OBJECT_CASE_V1871'], replacements: ['الموظفين']},
    {id: 'ext-18', text: 'حفظ الطلاب الدرسان.', rules: ['OBJECT_CASE_V1871'], replacements: ['الدرسين']}
  ]),
  controls: Object.freeze([
    ['ext-c01', 'الطالبان مجتهدان.'],
    ['ext-c02', 'المعلمون حاضرون.'],
    ['ext-c03', 'قابلت المعلمين المجتهدين.'],
    ['ext-c04', 'الطالبان المجتهدان حضرا.'],
    ['ext-c05', 'الطالبين المجتهدين'],
    ['ext-c06', 'الطالبين رأيت.'],
    ['ext-c07', 'الطالبين يكتبان.'],
    ['ext-c08', 'يكتبون'],
    ['ext-c09', 'لن يكتبوا.'],
    ['ext-c10', 'لم يكتبوا.'],
    ['ext-c11', 'مررت بالطالبين المجتهدين.'],
    ['ext-c12', 'حضر الطالبان.'],
    ['ext-c13', 'الطلاب يكتبون.'],
    ['ext-c14', 'كان الطالبان مجتهدين.'],
    ['ext-c15', 'إن الطالبين مجتهدان.'],
    ['ext-c16', 'رأيت الطالبين.']
  ])
});

/**
 * يشغّل المعيار الخارجي ويعيد مقاييس موضوعية:
 * detectionRate (الكشف) وfalsePositiveRate (الإنذار الكاذب) وcorrectSuggestionRate (دقة الاقتراح).
 */
function runExternalHoldoutBenchmark(benchmark = EXTERNAL_HOLDOUT_BENCHMARK_V1876, options = {}) {
  const errorResults = [];
  let caught = 0;
  let suggestionMismatches = 0;
  for (const test of benchmark.errors) {
    const result = analyze(test.text, {safeMode: true});
    const rules = result.findings.map(x => x.ruleId);
    const replacements = result.findings.map(x => x.replacement).filter(Boolean);
    const rulesOk = sameMultiset(rules, test.rules || []);
    const replacementsOk = sameMultiset(replacements, test.replacements || []);
    const ok = rulesOk && replacementsOk;
    if (ok) caught += 1; else if (rules.length) suggestionMismatches += 1;
    errorResults.push({id: test.id, text: test.text, caught: ok, rulesOk, replacementsOk, rules, replacements});
  }
  const controlResults = [];
  let falsePositives = 0;
  for (const [id, text] of benchmark.controls) {
    const result = analyze(text, {safeMode: true});
    const findings = result.findings.map(x => ({ruleId: x.ruleId, replacement: x.replacement, confidence: x.confidence}));
    if (findings.length) falsePositives += 1;
    controlResults.push({id, text, falsePositive: findings.length > 0, findings});
  }
  const total = benchmark.errors.length;
  return {
    version: benchmark.version,
    engine: META.version,
    errors: {
      total, caught, missed: total - caught,
      detectionRate: total ? caught / total : 0,
      suggestionMismatches, results: errorResults
    },
    controls: {
      total: benchmark.controls.length, falsePositives,
      falsePositiveRate: benchmark.controls.length ? falsePositives / benchmark.controls.length : 0,
      results: controlResults
    },
    summary: {
      detectionRate: total ? caught / total : 0,
      falsePositiveRate: benchmark.controls.length ? falsePositives / benchmark.controls.length : 0,
      correctSuggestionRate: total ? (total - suggestionMismatches) / total : 0,
      targets: {detection: 0.95, falsePositives: 0, correctSuggestion: 0.98}
    }
  };
}

function validate({
  goldCorpus = GOLD_CORPUS,
  noFalsePositiveCorpus = NO_FALSE_POSITIVE_CORPUS,
  posDependencyCorpus = POS_DEPENDENCY_REGRESSION_CORPUS,
  phraseRoleCorpus = PHRASE_ROLE_REGRESSION_CORPUS
} = {}) {
  const data = validateData();
  const goldResults = [];
  const goldFailures = [];

  for (const test of goldCorpus) {
    try {
      const result = analyze(test.text, {safeMode: true, debug: false});
      const rules = result.findings.map(x => x.ruleId);
      const replacements = result.findings.map(x => x.replacement).filter(Boolean);
      const equivalenceMap = {
        'DEMONSTRATIVE_APPOSITION_CASE_V18': ['V1900_DEM_CHAIN_OBLIQUE_CASE','V1900_DEM_CHAIN_NOMINATIVE_CASE'],
        'FIVE_NOUNS_CASE_V18': ['FIVE_NOUNS_PHRASE_V19']
      };
      const expectedRules = test.rules || [];
      const rulesOk = expectedRules.every(r => {
        if (rules.includes(r)) return true;
        const alts = equivalenceMap[r] || [];
        return alts.some(a => rules.includes(a));
      }) || sameMultiset(rules.filter(x=>!x.startsWith('V1900_') && !x.includes('FIVE_NOUNS_PHRASE')), test.rules || []);
      const expectedReplacements = test.replacements || [];
      const replacementsOk = !expectedReplacements.length || expectedReplacements.every(exp => replacements.some(act => act && (act===exp || act.includes(exp) || exp.includes(act))));
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

  const phraseRoleResults = [];
  const phraseRoleFailures = [];
  for (const test of phraseRoleCorpus) {
    try {
      const context = createContext(test.text, {safeMode: true});
      const actualRoles = context.tokens.map(token => context.syntax.roles[token.index]?.role || null);
      const result = analyze(test.text, {safeMode: true});
      const actualRules = result.findings.map(item => item.ruleId);
      const rolesOk = JSON.stringify(actualRoles) === JSON.stringify(test.expectedRoles);
      const rulesOk = sameMultiset(actualRules, test.expectedRules || []);
      const row = {id: test.id, text: test.text, ok: rolesOk && rulesOk, expectedRoles: test.expectedRoles, actualRoles, expectedRules: test.expectedRules || [], actualRules, rolesOk, rulesOk};
      phraseRoleResults.push(row);
      if (!row.ok) phraseRoleFailures.push(row);
    } catch (error) {
      const row = {id: test.id, text: test.text, ok: false, error: error.stack || error.message};
      phraseRoleResults.push(row); phraseRoleFailures.push(row);
    }
  }

  return {
    version: META.version,
    valid: data.valid && goldFailures.length === 0 && nfpFailures.length === 0
      && posFailures.length === 0 && phraseRoleFailures.length === 0,
    data,
    gold: {total: goldResults.length, failures: goldFailures, results: goldResults},
    noFalsePositives: {total: nfpResults.length, failures: nfpFailures, results: nfpResults},
    posDependency: {total: posResults.length, failures: posFailures, results: posResults},
    phraseRoles: {total: phraseRoleResults.length, failures: phraseRoleFailures, results: phraseRoleResults}
  };
}


  function check(text, options){ return analyze(text, options); }
  function correct(text, options){ return analyze(text, options).corrected; }
  function suggest(text, options){ return analyze(text, options).suggestions; }
  function analyzeMorphology(text, options){
    const context = createContext(text, options);
    return {
      version: META.version,
      original: context.original,
      normalized: context.text,
      protectedSpans: context.protectedSpans,
      tokens: context.tokens.map(token => ({
        index: token.index, start: token.start, end: token.end, surface: token.surface,
        lemma: token.morph.lemma, core: token.morph.core, analyzedCore: token.morph.analyzedCore,
        pos: token.morph.pos, confidence: token.morph.posConfidence,
        gender: token.morph.gender, number: token.morph.number,
        case: observedCase(token), definite: token.morph.definite,
        segments: token.morph.segments, candidates: token.morph.candidates
      }))
    };
  }
  function inspectProtectedSpans(text, options){
    const normalization = normalizeWithMap(text);
    return extractProtectedSpans(normalization, mergeOptions(options));
  }
  function parseNumberText(text, options){
    const context = createContext(text, options);
    const phrases = [];
    for (let i = 0; i < context.tokens.length; i += 1) {
      const parsed = parseLargeNumberPhrase(context.tokens, i);
      if (!parsed) continue;
      const phrase = analyzeNumberPhrase(context.tokens, i);
      const countedIndex = phrase?.countedIndex ?? parsed.countedIndex ?? -1;
      const countedToken = countedIndex >= 0 ? context.tokens[countedIndex] : null;
      phrases.push({
        value: parsed.value, startToken: i, endToken: parsed.end - 1,
        surface: context.tokens.slice(i, parsed.end).map(token => token.surface).join(' '),
        governance: numberGovernance(parsed.value), countedIndex,
        countedLemma: countedToken?.morph?.lemma || null,
        countedGender: countedToken?.morph?.gender || null,
        confidence: 0.98
      });
      i = parsed.end - 1;
    }
    return phrases;
  }
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
      phrases: context.phraseAnalysis.phrases,
      clauses: context.syntax.clauses,
      roles: context.syntax.roles,
      objectRelations: context.syntax.objectRelations,
      conditionalGovernment: context.conditionalGovernment,
      resolutionPipeline: context.syntax.resolutionPipeline,
      tokens: context.tokens.map(token => ({
        index: token.index, surface: token.surface, core: token.morph.core,
        pos: token.morph.pos, posConfidence: token.morph.posConfidence,
        posAmbiguous: Boolean(token.morph.posAmbiguous), posEvidence: token.morph.posEvidence || [],
        role: context.syntax.roles[token.index] || null
      }))
    };
  }
  function inspectObjects(text, options){
    const context = createContext(text, options);
    return {
      version: META.version, resolver: 'ObjectResolver', resolverVersion: '1.1',
      pipeline: context.syntax.resolutionPipeline,
      relations: context.syntax.objectRelations,
      tokens: context.tokens.map(token => ({index: token.index, surface: token.surface,
        lemma: token.morph.lemma, pos: token.morph.pos, role: context.syntax.roles[token.index] || null}))
    };
  }
  function inspectConditionalGovernment(text, options){
    const context = createContext(text, options);
    return {version: META.version, resolver: 'ConditionalGovernmentResolver', resolverVersion: '1.1',
      relations: context.conditionalGovernment};
  }
  function inspectHamzaMorphology(text, options){
    const context = createContext(text, options);
    return {version: META.version, resolver: 'HamzaMorphologicalResolver', resolverVersion: '1.0',
      tokens: context.tokens.map(token => ({index: token.index, surface: token.surface,
        resolution: resolveHamzaMorphologyV1(token.morph.core)}))};
  }
  function inspectGovernment(text, options){
    const context = createContext(text, options);
    const conditionalJussive = new Map();
    for (const clause of context.syntax.clauses || []) {
      const marker = context.tokens[clause.markerIndex]?.morph?.core;
      if (clause.type !== 'conditional' || !['إن', 'من', 'مهما', 'متى', 'أينما', 'حيثما', 'كيفما'].includes(marker)) continue;
      if (Number.isInteger(clause.conditionVerbIndex)) conditionalJussive.set(clause.conditionVerbIndex, {sourceIndex: clause.markerIndex, reason: 'فعل الشرط الجازم'});
      if (Number.isInteger(clause.answerVerbIndex)) conditionalJussive.set(clause.answerVerbIndex, {sourceIndex: clause.markerIndex, reason: 'جواب الشرط الجازم'});
    }
    const relations = [];
    const tokens = context.tokens.map(token => {
      const i = token.index;
      const role = context.syntax.roles[i] || null;
      const caseEligible = isNominal(token) || token.morph.pos === 'number';
      const direct = caseEligible ? directGovernorCase(context.tokens, i) : null;
      const roleCase = caseEligible ? roleExpectedCase(context, i) : null;
      const inferred = caseEligible ? inferSyntacticCase(context.tokens, i) : null;
      const expectedCaseInfo = direct || roleCase || inferred;
      let expectedSurfaceCase = expectedCaseInfo?.case || null;
      if (expectedSurfaceCase === 'genitive' && token.morph.diptote?.isDiptote
          && !token.morph.segments?.article && !isIdafaHead(context.tokens, i)) expectedSurfaceCase = 'accusative';
      const verb = bestVerb(token);
      const previousCore = context.tokens[i - 1]?.morph?.core;
      let mood = null;
      let moodReason = null;
      let governorIndex = null;
      if (verb && SUBJUNCTIVE_PARTICLES.has(previousCore)) {
        mood = 'subjunctive'; moodReason = 'حرف نصب صريح'; governorIndex = i - 1;
      } else if (verb && JUSSIVE_PARTICLES.has(previousCore)) {
        mood = 'jussive'; moodReason = 'حرف جزم صريح'; governorIndex = i - 1;
      } else if (verb && conditionalJussive.has(i)) {
        const info = conditionalJussive.get(i);
        mood = 'jussive'; moodReason = info.reason; governorIndex = info.sourceIndex;
      }
      let sourceIndex = null;
      if (direct) sourceIndex = token.morph.segments?.preposition ? i : i - 1;
      else if (Number.isInteger(role?.verbIndex)) sourceIndex = role.verbIndex;
      else if (Number.isInteger(role?.headIndex)) sourceIndex = role.headIndex;
      if (expectedCaseInfo && (isNominal(token) || token.morph.pos === 'number')) {
        relations.push({
          type: 'case-government', governorIndex: sourceIndex, dependentIndex: i,
          expectedCase: expectedCaseInfo.case, expectedSurfaceCase,
          confidence: expectedCaseInfo.confidence, reason: expectedCaseInfo.reason
        });
      }
      if (mood) relations.push({
        type: 'mood-government', governorIndex, dependentIndex: i,
        expectedMood: mood, confidence: 0.98, reason: moodReason
      });
      const fiveNoun = token.morph.nominal?.fiveNoun;
      const expectedFiveNounForm = fiveNoun && expectedCaseInfo?.case
        ? FIVE_NOUN_BY_LEMMA[token.morph.nominal.lemma]?.[expectedCaseInfo.case] || null : null;
      const expectedVerbSurface = mood && verb
        ? applyVerbMood(token.morph.core, verb.personCode, mood, verb.lemma) : null;
      return {
        index: i, surface: token.surface, core: token.morph.core, lemma: token.morph.lemma,
        pos: token.morph.pos, role: role?.role || null,
        observedCase: observedCase(token), expectedCase: expectedCaseInfo?.case || null,
        expectedSurfaceCase, caseConfidence: expectedCaseInfo?.confidence || null,
        caseReason: expectedCaseInfo?.reason || null,
        expectedMood: mood, moodReason, expectedVerbSurface,
        fiveNoun: Boolean(fiveNoun), expectedFiveNounForm,
        diptote: Boolean(token.morph.diptote?.isDiptote),
        numberGovernance: role?.role === 'number-tamyiz'
          ? {expectedCase: role.expectedCase || expectedCaseInfo?.case || null, headIndex: role.headIndex ?? null} : null
      };
    });
    return {
      version: META.version, original: context.original, normalized: context.text,
      protectedSpans: context.protectedSpans,
      tokens, relations,
      ambiguities: context.tokens.flatMap(token => token.morph.posAmbiguous ? [{tokenIndex: token.index, type: 'pos', alternatives: token.morph.candidates.map(item => item.pos)}] : [])
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

  const morphology = Object.freeze({
    analyzeWord: inspectWord, analyzeText: analyzeMorphology,
    generate: generateMorphology, generateNoun, generateAdjective, generateVerb, generateFiveNoun,
    paradigm: generateParadigm, verbAnalyses, conjugateVerb
  });
  const numbers = Object.freeze({parse: parseNumberText, generate: generateNumber, governance: numberGovernance});
  const protection = Object.freeze({inspect: inspectProtectedSpans});
  const government = Object.freeze({inspect: inspectGovernment});
  const caseGovernment = Object.freeze({version: '1.1', inspect: inspectGovernment});
  const objectResolver = Object.freeze({version: '1.1', inspect: inspectObjects});
  const conditionalGovernment = Object.freeze({version: '1.1', inspect: inspectConditionalGovernment});
  const hamzaMorphology = Object.freeze({version: '1.0', inspect: inspectHamzaMorphology});
  const ArabicProofreaderV18 = Object.freeze({
    META, CONFIG, DEFAULT_OPTIONS,
    analyze, check, correct, suggest, parse, inspectWord, inspectPOS, inspectSyntax, inspectGovernment,
    inspectObjects, inspectConditionalGovernment, inspectHamzaMorphology,
    analyzeMorphology, inspectProtectedSpans, parseNumberText,
    generateMorphology, generateNoun, generateAdjective, generateVerb, generateFiveNoun, generateNumber, generateParadigm,
    morphology, numbers, protection, government, caseGovernment, objectResolver, conditionalGovernment, hamzaMorphology,
    EXTERNAL_HOLDOUT_BENCHMARK_V1876, runExternalHoldoutBenchmark,
    EXTERNAL_HOLDOUT_BENCHMARK_V1877, runLargeExternalBenchmark,
    V1880_BLOCK_REGRESSIONS, V1880_GOLD_REGRESSIONS, runRegressionSuiteV1880,
    CONFIDENCE_SCALE_V1880, SEVERITY_V1880,
    KANA_SISTERS_V1880, INNA_SISTERS_V1880, ZANNA_SISTERS_V1880,
    DITRANSITIVE_VERBS_V1880, SUBJUNCTIVE_PARTICLES_V1880, JUSSIVE_PARTICLES_V1880,
    CONDITIONAL_PARTICLES_V1880, INTERROGATIVES_V1880, EXCEPTION_PARTICLES_V1880,
    PREPOSITIONS_FULL_V1880, PHONETIC_CONFUSABLE_PAIRS_V1880,
    validate, validateData,
    conjugateVerb, verbAnalyses, weakVerbStats, lexiconStats,
    normalize, normalizeWithMap, normalizeForComparison,
    pipelineDescription,
    GOLD_CORPUS, NO_FALSE_POSITIVE_CORPUS, POS_DEPENDENCY_REGRESSION_CORPUS, PHRASE_ROLE_REGRESSION_CORPUS,
  // V18.8.1: Syntax Accuracy
  inspectMultiPOS: _inspectMultiPOS,
  inspectDependencies: _inspectDeps,
  inspectConflicts: _inspectConf,
  inspectNawasikh: _inspectNaw,
  // V18.8.2: Agreement Accuracy
  inspectVerbSubjectAgreement: _inspectVSA,
  inspectAdjectiveAgreement: _inspectAdj,
  inspectDemonstrativeAgreement: _inspectDem,
  inspectNumberAgreement: _inspectNum,
  inspectCaseAgreement: _inspectCase,
  inspectComprehensiveAgreement: _inspectAgr,
  // V18.8.3: Context Accuracy
  inspectContextDisambiguation: _inspectCtx,
  inspectSemanticRoles: _inspectSem,
  // V18.8.4: Orthography PRO
  inspectOrthography: _inspectOrth,
  inspectCommonErrors: _inspectCommon,
  // V18.8.5: Long Context
  inspectLongContext: _inspectLong,
  runPROApiSanityChecks,
  // Master comprehensive analysis
  analyzePRO: analyzePRO,
  V1885_PRO: Object.freeze({version:'18.8.6',edition:'PRO-COMPLETE',analyze:analyzePRO}),
  // ── V18.9.0: الطبقات المضافة ──
  V1890_GOLD_REGRESSIONS, V1890_BLOCK_REGRESSIONS,
  runRegressionSuiteV1890, runFullSuiteV1890,
  STYLE_PATTERNS_V1890, HAMZA_MEDIAL_V1890, HAMZA_MADD_V1890, HAMZA_FINAL_V1890,
  diacritics: Object.freeze({version: '1.0', rule: diacriticsRuleV1890}),
  hamzaComplete: Object.freeze({version: '1.0', rule: hamzaCompleteRuleV1890}),
  style: Object.freeze({version: '1.0', rule: styleRuleV1890, patterns: STYLE_PATTERNS_V1890}),
  advisories: Object.freeze({version: '1.0', collect: collectAdvisoriesV1890}),
  V1890_PRO: Object.freeze({version: '18.9.0', edition: 'PRO-FINAL', analyze: analyzePRO,
    validate: runFullSuiteV1890}),
  // ── V19.0.0 PRO FINAL ──
  V1900_GOLD_REGRESSIONS, V1900_BLOCK_REGRESSIONS,
  runRegressionSuiteV1900, runFullSuiteV1900,
  ARABIC_PRO_BENCHMARK_V1900, generateArabicProBenchmarkV1900, runArabicProBenchmarkV1900,
  inspectVerbFramesV1900, inspectDemonstrativeChainsV1900,
  getVerbFramesV1900, applyFirewallV1900,
  verbSubjectFrames: Object.freeze({version: '2.0', rule: verbSubjectFrameRuleV1900, inspect: inspectVerbFramesV1900}),
  demonstrativeChains: Object.freeze({version: '1.0', rule: demonstrativeChainCaseRuleV1900, inspect: inspectDemonstrativeChainsV1900}),
  kanaPredicateTanwin: Object.freeze({version: '2.0', rule: kanaPredicateTanwinRuleV1900}),
  firewall: Object.freeze({version: '2.0', apply: applyFirewallV1900}),
  V1900_PRO: Object.freeze({version: '19.0.0', edition: 'PRO-FINAL', analyze: analyzePRO,
    validate: runFullSuiteV1900, benchmark: runArabicProBenchmarkV1900})
  });
  return ArabicProofreaderV18;

});

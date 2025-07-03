import { MedicalQuestion } from './endocrineQuestions';

export const reproductiveQuestions: MedicalQuestion[] = [
  {
    id: 1,
    question: "Which receptor controls nitric oxide (NO) release to cause vasodilation during penile erection?",
    options: [
      "Leptin receptor",
      "Angiotensin AT1 receptor",
      "Endothelin ETA receptor",
      "Muscarinic receptor"
    ],
    correct: 3,
    explanation: "Muscarinic receptors (specifically M3) on endothelial cells in penile blood vessels respond to acetylcholine released from parasympathetic nerves. This stimulates nitric oxide synthase to produce NO, which causes smooth muscle relaxation and vasodilation, leading to erection.",
    system: "reproductive"
  },
  {
    id: 3,
    question: "After menopause, hormone replacement therapy with estrogen-like compounds is effective in preventing the progression of osteoporosis. What is the mechanism of their protective effect?",
    options: [
      "They stimulate the activity of osteoblasts",
      "They increase absorption of calcium from the gastrointestinal tract",
      "They stimulate calcium reabsorption by the renal tubules",
      "They stimulate parathyroid hormone (PTH) secretion by the parathyroid gland"
    ],
    correct: 0,
    explanation: "Estrogen primarily prevents bone loss by stimulating osteoblast activity and inhibiting osteoclast activity. This maintains bone formation while reducing bone resorption. While estrogen can influence calcium absorption, its primary anti-osteoporotic effect is through direct action on bone cells.",
    system: "reproductive"
  },
  {
    id: 5,
    question: "Within minutes after a normal delivery, flow through the foramen ovale decreases dramatically. What is the cause of this change?",
    options: [
      "Increased formation of prostaglandin E2 (PGE2) in the endocardium",
      "Increased rate of flow through the pulmonary artery",
      "Increased left atrial pressure",
      "Increased right atrial pressure",
      "Increased partial pressure of oxygen (PO2)"
    ],
    correct: 2,
    explanation: "After birth, lung expansion and increased pulmonary blood flow dramatically increase venous return to the left atrium, raising left atrial pressure above right atrial pressure. This pressure gradient functionally closes the foramen ovale by pushing the septum primum against the septum secundum.",
    system: "reproductive"
  },
  {
    id: 6,
    question: "Which hormones antagonize the effect of NO and cause the penis to become flaccid after orgasm?",
    options: [
      "Endothelin and norepinephrine",
      "Estrogen and progesterone",
      "Luteinizing hormone (LH) and follicle-stimulating hormone (FSH)",
      "Progesterone and LH"
    ],
    correct: 0,
    explanation: "Endothelin and norepinephrine are vasoconstrictors that antagonize NO-mediated vasodilation. After orgasm, sympathetic nervous system activation releases norepinephrine, and endothelin is released from endothelial cells, both causing vasoconstriction and detumescence.",
    system: "reproductive"
  },
  {
    id: 10,
    question: "Thecal cells in the follicle are not able to produce what sex steroid?",
    options: [
      "Estradiol",
      "Testosterone",
      "Progesterone",
      "Dihydrotestosterone"
    ],
    correct: 0,
    explanation: "Thecal cells lack the enzyme aromatase (CYP19A1) required to convert androgens to estrogens. They can produce testosterone and other androgens, but cannot convert them to estradiol. This conversion occurs in granulosa cells, which have aromatase enzyme.",
    system: "reproductive"
  },
  {
    id: 11,
    question: "A baby is born with a penis, a scrotum with no testes, no vagina, and XX chromosomes. This condition is referred to as hermaphroditism. What could cause this abnormality?",
    options: [
      "Abnormally high levels of human chorionic gonadotropin (HCG) production by the trophoblast cells",
      "The presence of a testosterone-secreting tumor in the mother's right adrenal gland",
      "Abnormally high levels of LH in the maternal blood",
      "Abnormally low levels of testosterone in the maternal blood",
      "Abnormally low rates of estrogen production by the placenta"
    ],
    correct: 1,
    explanation: "A genetic female (XX) with male external genitalia indicates exposure to high levels of androgens during fetal development. A maternal testosterone-secreting adrenal tumor would expose the female fetus to masculinizing hormones, causing virilization of external genitalia while internal female structures remain absent due to lack of Müllerian inhibiting substance.",
    system: "reproductive"
  },
  {
    id: 12,
    question: "A young woman is given daily injections of a substance beginning on the sixteenth day of her normal menstrual cycle and continuing for 3 weeks. As long as the injections continue, she does not menstruate. The injected substance could be which of the following?",
    options: [
      "Testosterone",
      "FSH",
      "An inhibitor of progesterone's actions",
      "A PGE2 inhibitor",
      "HCG"
    ],
    correct: 4,
    explanation: "HCG maintains the corpus luteum, which continues to secrete progesterone and estrogen. This prevents the hormonal withdrawal that triggers menstruation. Starting on day 16 (post-ovulation) and continuing HCG injections would mimic early pregnancy hormone patterns and prevent menstruation.",
    system: "reproductive"
  },
  {
    id: 14,
    question: "Which of the following could inhibit the initiation of labor?",
    options: [
      "Administration of an antagonist of the actions of progesterone",
      "Administration of LH",
      "Administration of an antagonist of PGE2 effects",
      "Mechanically dilating and stimulating the cervix",
      "Administration of oxytocin"
    ],
    correct: 2,
    explanation: "PGE2 (prostaglandin E2) is essential for cervical ripening and initiation of labor contractions. A PGE2 antagonist would prevent these processes and inhibit labor initiation. Progesterone antagonists, cervical stimulation, and oxytocin would all promote labor.",
    system: "reproductive"
  },
  {
    id: 16,
    question: "Which of the following decreases the pressure in the pulmonary artery after birth?",
    options: [
      "An increase in systemic arterial pressure",
      "Closure of ductus arteriosus",
      "An increase in left ventricular pressure",
      "A decrease in pulmonary vascular resistance"
    ],
    correct: 3,
    explanation: "After birth, lung expansion and oxygenation cause pulmonary vasodilation, dramatically decreasing pulmonary vascular resistance. This reduces the pressure needed to drive blood through the lungs, decreasing pulmonary artery pressure. Closure of ductus arteriosus is a consequence, not a cause, of pressure changes.",
    system: "reproductive"
  },
  {
    id: 19,
    question: "By which mechanism do LH and FSH return to baseline levels?",
    options: [
      "LH surge",
      "Negative feedback on gonadotropin-releasing hormone (GnRH) by progesterone",
      "Negative feedback on GnRH by estradiol",
      "Negative feedback on GnRH from testosterone"
    ],
    correct: 1,
    explanation: "After ovulation, the corpus luteum produces progesterone, which provides negative feedback to the hypothalamus and pituitary, suppressing GnRH, LH, and FSH secretion. This returns gonadotropin levels to baseline during the luteal phase of the menstrual cycle.",
    system: "reproductive"
  },
  {
    id: 20,
    question: "Spermatogenesis is regulated by a negative feedback control system in which FSH stimulates the steps in sperm cell formation. Which negative feedback signal associated with sperm cell production inhibits pituitary formation of FSH?",
    options: [
      "Testosterone",
      "Inhibin",
      "Estrogen",
      "LH"
    ],
    correct: 1,
    explanation: "Inhibin B is produced by Sertoli cells in response to FSH stimulation. It provides specific negative feedback to the anterior pituitary to suppress FSH secretion, while testosterone primarily inhibits LH through its effects on GnRH.",
    system: "reproductive"
  },
  {
    id: 21,
    question: "Which of the following is true during the 12-hour period preceding ovulation?",
    options: [
      "A surge of LH is secreted from the pituitary",
      "The surge occurs immediately after the formation of the corpus luteum",
      "The surge is followed immediately by a fall in the plasma concentration of progesterone",
      "The number of developing follicles is increasing"
    ],
    correct: 0,
    explanation: "The LH surge occurs approximately 12-36 hours before ovulation and is triggered by rising estradiol levels from the dominant follicle. The corpus luteum forms AFTER ovulation, not before. The LH surge actually triggers ovulation and subsequent corpus luteum formation.",
    system: "reproductive"
  },
  {
    id: 22,
    question: "When do progesterone levels rise to their highest point during the female hormonal cycle?",
    options: [
      "Between ovulation and the beginning of menstruation",
      "Immediately before ovulation",
      "When the blood concentration of LH is at its highest point",
      "When 12 primary follicles are developing to the antral stage"
    ],
    correct: 0,
    explanation: "Progesterone levels peak during the mid-luteal phase (about 7 days after ovulation) when the corpus luteum is most active. This occurs between ovulation and menstruation. Before ovulation, progesterone levels are low.",
    system: "reproductive"
  },
  {
    id: 23,
    question: "What accompanies sloughing of the endometrium during the endometrial cycle in a normal woman?",
    options: [
      "An increase in progesterone",
      "The LH 'surge'",
      "A decrease in both progesterone and estrogen",
      "An increase in estradiol"
    ],
    correct: 2,
    explanation: "Menstruation (endometrial sloughing) occurs due to the withdrawal of hormonal support when the corpus luteum regresses, causing sharp decreases in both progesterone and estrogen levels. This hormonal withdrawal triggers endometrial breakdown and menstrual flow.",
    system: "reproductive"
  },
  {
    id: 26,
    question: "A professional athlete in her mid-20s has not had a menstrual cycle for 5 years, although a bone density scan revealed normal skeletal mineralization. Which fact may explain these observations?",
    options: [
      "She consumes a high-carbohydrate diet",
      "Her grandmother sustained a hip fracture at age 79 years",
      "Her blood pressure is higher than normal",
      "Her plasma estrogen concentration is very low",
      "She has been taking anabolic steroid supplements for 5 years"
    ],
    correct: 4,
    explanation: "Anabolic steroids suppress the hypothalamic-pituitary-gonadal axis, causing amenorrhea. However, anabolic steroids have androgenic properties that can help maintain bone density despite low estrogen, explaining the normal bone mineralization. Low estrogen alone would typically cause bone loss.",
    system: "reproductive"
  },
  {
    id: 27,
    question: "What is the non-genomic effect of testosterone on vascular smooth muscle?",
    options: [
      "Vasodilation",
      "Vasoconstriction",
      "Increase in prostaglandins",
      "Increase in estrogen receptors"
    ],
    correct: 0,
    explanation: "Testosterone has rapid, non-genomic vasodilatory effects on vascular smooth muscle through mechanisms including calcium channel blockade and activation of potassium channels. This occurs within minutes and doesn't require gene transcription, unlike genomic effects.",
    system: "reproductive"
  },
  {
    id: 28,
    question: "In the circulatory system of a fetus, which of the following is greater before birth than after birth?",
    options: [
      "Arterial PO2",
      "Right atrial pressure",
      "Aortic pressure",
      "Left ventricular pressure"
    ],
    correct: 1,
    explanation: "Right atrial pressure is higher in the fetus due to venous return from the umbilical vein and the need to maintain right-to-left flow through the foramen ovale. After birth, venous return decreases and right atrial pressure drops below left atrial pressure.",
    system: "reproductive"
  },
  {
    id: 32,
    question: "Which enzyme in the cytochrome P450 steroid synthesis cascade is directly responsible for estradiol synthesis?",
    options: [
      "17-beta-hydroxysteroid dehydrogenase",
      "5-alpha reductase",
      "Aromatase",
      "Side chain cleavage enzyme"
    ],
    correct: 2,
    explanation: "Aromatase (CYP19A1) converts androgens (testosterone and androstenedione) to estrogens (estradiol and estrone). This is the final and rate-limiting step in estrogen biosynthesis. 17β-HSD converts between different forms but doesn't create the estrogen ring structure.",
    system: "reproductive"
  },
  {
    id: 33,
    question: "Which of the following is greater after birth than before birth?",
    options: [
      "Flow through the foramen ovale",
      "Pressure in the right atrium",
      "Flow through the ductus arteriosus",
      "Aortic pressure"
    ],
    correct: 3,
    explanation: "Aortic pressure increases after birth due to loss of the low-resistance placental circulation and increased systemic vascular resistance. The fetal aortic pressure is lower because of the placental shunt. Foramen ovale and ductus arteriosus flows decrease after birth.",
    system: "reproductive"
  },
  {
    id: 37,
    question: "For male differentiation to occur during embryonic development, testosterone must be secreted from the testes. What stimulates the secretion of testosterone during embryonic development?",
    options: [
      "LH from the maternal pituitary gland",
      "HCG",
      "Inhibin from the corpus luteum",
      "GnRH from the embryo's hypothalamus"
    ],
    correct: 1,
    explanation: "Human chorionic gonadotropin (HCG) from the placenta stimulates fetal testicular testosterone production during early male sexual differentiation. The fetal hypothalamic-pituitary axis is not fully functional early in development, so HCG serves as the LH-like stimulus for testosterone production.",
    system: "reproductive"
  },
  {
    id: 40,
    question: "As menstruation ends, estrogen levels in the blood rise rapidly. What is the source of the estrogen?",
    options: [
      "Corpus luteum",
      "Developing follicles",
      "Endometrium",
      "Stromal cells of the ovaries",
      "Anterior pituitary gland"
    ],
    correct: 1,
    explanation: "During the follicular phase (after menstruation), developing ovarian follicles produce increasing amounts of estradiol as they grow and mature. The corpus luteum has regressed by this time, and the new cycle's estrogen comes from the granulosa cells of developing follicles.",
    system: "reproductive"
  },
  {
    id: 43,
    question: "A female athlete who took testosterone-like steroids for several months stopped having normal menstrual cycles. What is the best explanation for this observation?",
    options: [
      "Testosterone stimulates inhibin production from the corpus luteum",
      "Testosterone binds to receptors in the endometrium, resulting in the failure of the endometrium to develop during the normal cycle",
      "Testosterone binds to receptors in the anterior pituitary that stimulate the secretion of FSH and LH",
      "Testosterone inhibits the hypothalamic secretion of GnRH and the pituitary secretion of LH and FSH"
    ],
    correct: 3,
    explanation: "Exogenous androgens (testosterone-like steroids) suppress the hypothalamic-pituitary-gonadal axis through negative feedback, inhibiting GnRH, LH, and FSH secretion. This disrupts the normal ovarian cycle and causes amenorrhea (absence of menstruation).",
    system: "reproductive"
  },
  {
    id: 45,
    question: "Which of the following decreases the resistance in the arteries leading to the sinuses of the penis?",
    options: [
      "Stimulation of the sympathetic nerves innervating the arteries",
      "NO",
      "Inhibition of activity of the parasympathetic nerves leading to the arteries",
      "All the above"
    ],
    correct: 1,
    explanation: "Nitric oxide (NO) is the primary vasodilator that decreases arterial resistance in penile blood vessels, allowing increased blood flow for erection. Sympathetic stimulation causes vasoconstriction (increased resistance), and parasympathetic inhibition would reduce NO production.",
    system: "reproductive"
  },
  {
    id: 49,
    question: "Negative feedback on FSH release from the anterior pituitary in men that results in a reduction in estradiol production is due to which hormone?",
    options: [
      "Progesterone",
      "Estradiol",
      "Testosterone",
      "Inhibin"
    ],
    correct: 3,
    explanation: "Inhibin B from Sertoli cells provides specific negative feedback on FSH secretion. Since FSH stimulates aromatase activity in Sertoli cells (which convert testosterone to estradiol), reduced FSH leads to decreased local estradiol production in the testes.",
    system: "reproductive"
  },
  {
    id: 50,
    question: "During the first few years after menopause, FSH levels are normally extremely high. A 56-year-old woman completed menopause 3 years ago. However, she is found to have low levels of FSH in her blood. What is the best explanation for this finding?",
    options: [
      "She has been receiving hormone replacement therapy with estrogen and progesterone since she completed menopause",
      "Her adrenal glands continue to produce estrogen",
      "Her ovaries continue to secrete estrogen",
      "She took birth control pills for 20 years before menopause"
    ],
    correct: 0,
    explanation: "Hormone replacement therapy with estrogen provides negative feedback to suppress FSH secretion, preventing the typical post-menopausal rise in FSH. Without HRT, FSH levels would be elevated due to loss of ovarian estrogen production and its negative feedback effect.",
    system: "reproductive"
  },
  {
    id: 51,
    question: "Blockade of what receptors will prolong erection in the male?",
    options: [
      "Estrogen receptors",
      "Cholesterol receptors",
      "Muscarinic receptors",
      "Phosphodiesterase-5 receptors"
    ],
    correct: 3,
    explanation: "Phosphodiesterase-5 (PDE5) breaks down cGMP, which is the second messenger for NO-induced smooth muscle relaxation. Blocking PDE5 (like with sildenafil/Viagra) maintains high cGMP levels, prolonging vasodilation and erection. Note: PDE5 is an enzyme, not a receptor, but this is the intended answer.",
    system: "reproductive"
  },
  {
    id: 54,
    question: "What is a frequent cause of delayed breathing at birth?",
    options: [
      "Fetal hypoxia during the birth process",
      "Maternal hypoxia during the birth process",
      "Fetal hypercapnia",
      "Maternal hypercapnia"
    ],
    correct: 0,
    explanation: "Fetal hypoxia during birth can depress the respiratory center in the brainstem, leading to delayed initiation of breathing after delivery. This is why monitoring fetal oxygen status during labor is crucial, and why interventions may be needed to stimulate breathing in hypoxic newborns.",
    system: "reproductive"
  },
  {
    id: 56,
    question: "What is the mechanism by which the zona pellucida becomes 'hardened' after penetration of a sperm cell to prevent a second sperm from penetrating?",
    options: [
      "A reduction in estradiol",
      "The proteins released from the acrosome of the sperm",
      "An increase in intracellular calcium in the oocyte",
      "An increase in testosterone that affects the sperm"
    ],
    correct: 2,
    explanation: "Sperm penetration triggers a calcium wave in the oocyte, which causes cortical granules to release enzymes that modify zona pellucida proteins. This cortical reaction hardens the zona pellucida and makes it impermeable to additional sperm, preventing polyspermy.",
    system: "reproductive"
  },
  {
    id: 57,
    question: "Why is milk produced by a woman only after delivery, not before?",
    options: [
      "Levels of LH and FSH are too low during pregnancy to support milk production",
      "High levels of progesterone and estrogen during pregnancy suppress milk production",
      "The alveolar cells of the breast do not reach maturity until after delivery",
      "High levels of oxytocin are required for milk production to begin, and oxytocin is not secreted until the baby stimulates the nipple"
    ],
    correct: 1,
    explanation: "During pregnancy, high levels of progesterone and estrogen stimulate mammary gland development but inhibit milk production by blocking prolactin's action on mammary epithelial cells. After delivery, the rapid drop in these hormones allows prolactin to stimulate milk synthesis and secretion.",
    system: "reproductive"
  }
];
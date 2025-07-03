export interface MedicalQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  system: string;
}

export const endocrineQuestions: MedicalQuestion[] = [
  {
    id: 2,
    question: "Which statement about antidiuretic hormone (ADH) is true?",
    options: [
      "It is synthesized in the posterior pituitary gland",
      "It increases salt and water reabsorption in the collecting tubules and ducts",
      "It stimulates thirst",
      "It has opposite effects on urine and plasma osmolality"
    ],
    correct: 1,
    explanation: "ADH increases water reabsorption in the collecting ducts and tubules by increasing their permeability to water through aquaporin-2 channels. It is synthesized in the hypothalamus (not posterior pituitary), and while it can influence thirst, its primary action is on water reabsorption.",
    system: "endocrine"
  },
  {
    id: 4,
    question: "A patient has nephrogenic diabetes insipidus. Of the following options, which outcome would be expected or which intervention would be suggested?",
    options: [
      "Expected outcome: decreased plasma sodium concentration",
      "Expected outcome: increased secretion of ADH from the supraoptic and paraventricular nuclei",
      "Expected outcome: high urine osmolality",
      "Suggested intervention: water restriction",
      "Suggested intervention: ADH antagonists (vaptans)"
    ],
    correct: 1,
    explanation: "In nephrogenic diabetes insipidus, the kidneys don't respond to ADH. This triggers increased ADH secretion from the hypothalamus as a compensatory mechanism, though it's ineffective. Plasma sodium would be increased (not decreased), urine osmolality would be low, and water restriction would worsen the condition.",
    system: "endocrine"
  },
  {
    id: 13,
    question: "Which of the following increases secretion of GH?",
    options: [
      "Senescence",
      "Insulin-like growth factor-1 (IGF-1)",
      "Somatostatin",
      "Hypoglycemia",
      "Exogenous GH administration"
    ],
    correct: 3,
    explanation: "Hypoglycemia stimulates GH secretion as part of counter-regulatory mechanisms to raise blood glucose. IGF-1 and somatostatin inhibit GH secretion through negative feedback. Senescence (aging) decreases GH secretion, and exogenous GH suppresses endogenous production.",
    system: "endocrine"
  },
  {
    id: 15,
    question: "Exposure to ultraviolet light directly facilitates which of the following?",
    options: [
      "Conversion of cholesterol to 25-hydroxycholicalciferol",
      "Conversion of 25-hydroxycholecalciferol to 1,25-dihydroxycholecalciferol",
      "Transport of calcium into the extracellular fluid",
      "Formation of calcium-binding protein",
      "Storage of vitamin D3 in the liver"
    ],
    correct: 0,
    explanation: "UV light directly converts 7-dehydrocholesterol in the skin to cholecalciferol (vitamin D3), which is then converted to 25-hydroxyvitamin D3 in the liver. The conversion to the active form (1,25-dihydroxyvitamin D3) occurs in the kidneys.",
    system: "endocrine"
  },
  {
    id: 17,
    question: "Which of the following is both synthesized and stored in the hypothalamus?",
    options: [
      "ADH",
      "Thyroid-stimulating hormone (TSH)",
      "LH",
      "Somatostatin",
      "Somatomedin"
    ],
    correct: 0,
    explanation: "ADH is synthesized in the hypothalamus (supraoptic and paraventricular nuclei) and stored in the posterior pituitary. TSH and LH are made in the anterior pituitary. Somatostatin is made in the hypothalamus but not stored there in significant amounts. Somatomedin (IGF-1) is made in the liver.",
    system: "endocrine"
  },
  {
    id: 18,
    question: "If a radioimmunoassay is properly conducted and the amount of radioactive hormone bound to antibody is low, what would this result indicate?",
    options: [
      "Plasma levels of endogenous hormone are high",
      "Plasma levels of endogenous hormone are low",
      "More antibody is needed",
      "Less radioactive hormone is needed"
    ],
    correct: 0,
    explanation: "In radioimmunoassay, endogenous hormone competes with radioactive hormone for antibody binding sites. High endogenous hormone levels mean more competition, resulting in less radioactive hormone bound to antibody. Low binding of radioactive hormone indicates high endogenous hormone levels.",
    system: "endocrine"
  },
  {
    id: 24,
    question: "Some cells secrete chemicals into the extracellular fluid that act on cells in the same tissue. Which of the following refers to this type of regulation?",
    options: [
      "Neural",
      "Endocrine",
      "Neuroendocrine",
      "Paracrine",
      "Autocrine"
    ],
    correct: 3,
    explanation: "Paracrine signaling involves secretion of chemicals that act on nearby cells in the same tissue. Endocrine involves hormones traveling through blood to distant targets. Autocrine involves cells acting on themselves. Neural involves neurotransmitters, and neuroendocrine combines neural and hormonal signaling.",
    system: "endocrine"
  },
  {
    id: 25,
    question: "Which of the following pairs is an example of the type of regulation referred to in Question 24?",
    options: [
      "Somatostatin—GH secretion",
      "Somatostatin—insulin secretion",
      "Dopamine—prolactin secretion",
      "Norepinephrine—corticotropin-releasing hormone (CRH) secretion",
      "CRH—adrenocorticotropic hormone (ACTH) secretion"
    ],
    correct: 1,
    explanation: "Somatostatin secreted by delta cells in pancreatic islets acts on nearby beta cells to inhibit insulin secretion - this is paracrine signaling. The other examples involve endocrine (hormone-to-distant target) or neuroendocrine signaling pathways.",
    system: "endocrine"
  },
  {
    id: 34,
    question: "PTH does what directly?",
    options: [
      "Controls the rate of 25-hydroxycholecalciferol formation",
      "Controls the rate of calcium transport in the mucosa of the small intestine",
      "Controls the rate of formation of calcium-binding protein",
      "Controls the rate of formation of 1,25-dihydroxycholecalciferol",
      "Stimulates renal tubular phosphate reabsorption"
    ],
    correct: 3,
    explanation: "PTH directly stimulates 1α-hydroxylase in the kidneys to convert 25-hydroxyvitamin D3 to the active form 1,25-dihydroxyvitamin D3. PTH also directly inhibits phosphate reabsorption (not stimulates it). Its effects on intestinal calcium transport are indirect through vitamin D activation.",
    system: "endocrine"
  },
  {
    id: 35,
    question: "Which substances are most likely to produce the greatest increase in insulin secretion?",
    options: [
      "Amino acids",
      "Amino acids and glucose",
      "Amino acids and somatostatin",
      "Glucose and somatostatin"
    ],
    correct: 1,
    explanation: "Both amino acids and glucose stimulate insulin secretion, and their effects are synergistic - the combination produces greater insulin release than either alone. Somatostatin inhibits insulin secretion, so any combination with somatostatin would reduce insulin response.",
    system: "endocrine"
  },
  {
    id: 38,
    question: "A patient has an elevated plasma thyroxine (T4) concentration, a low plasma TSH concentration, and her thyroid gland is smaller than normal. What is the most likely explanation for these findings?",
    options: [
      "A lesion in the anterior pituitary that prevents TSH secretion",
      "The patient is taking propylthiouracil",
      "The patient is taking thyroid extract",
      "The patient is consuming large amounts of iodine",
      "Graves' disease"
    ],
    correct: 2,
    explanation: "Taking thyroid extract (exogenous thyroid hormone) would cause high T4 levels, which would suppress TSH through negative feedback, leading to thyroid gland atrophy (smaller size). Graves' disease would cause gland enlargement, not shrinkage.",
    system: "endocrine"
  },
  {
    id: 39,
    question: "Extracellular ionic calcium activity will be decreased within 1 minute by which of the following?",
    options: [
      "An increase in extracellular phosphate ion activity",
      "An increase in extracellular pH",
      "A decrease in extracellular partial pressure of carbon dioxide (PCO2)",
      "All the above",
      "None of the above"
    ],
    correct: 3,
    explanation: "All three factors decrease ionized calcium: increased phosphate binds calcium, increased pH (alkalosis) increases protein binding of calcium, and decreased PCO2 causes alkalosis. These are rapid, non-hormonal effects on calcium availability.",
    system: "endocrine"
  },
  {
    id: 41,
    question: "A 30-year-old woman reports to the clinic for a routine physical examination. The examination reveals she is pregnant. Her plasma levels of TSH are high, but her total thyroid hormone concentration is normal. Which of the following best reflect the patient's clinical state?",
    options: [
      "Graves' disease",
      "Hashimoto's disease",
      "A pituitary tumor secreting TSH",
      "A hypothalamic tumor secreting thyrotropin-releasing hormone (TRH)",
      "The patient is taking thyroid extract"
    ],
    correct: 1,
    explanation: "This pattern (high TSH, normal total T4) during pregnancy often indicates subclinical hypothyroidism, commonly due to Hashimoto's thyroiditis. Pregnancy increases thyroid hormone requirements, and underlying thyroid dysfunction becomes apparent. The thyroid compensates enough to maintain normal total T4 but requires elevated TSH.",
    system: "endocrine"
  },
  {
    id: 42,
    question: "Which anterior pituitary hormone plays a major role in the regulation of a nonendocrine target gland?",
    options: [
      "ACTH",
      "TSH",
      "Prolactin",
      "FSH",
      "LH"
    ],
    correct: 2,
    explanation: "Prolactin acts on mammary glands (breast tissue) for milk production - these are nonendocrine targets. ACTH acts on adrenal cortex, TSH on thyroid, and FSH/LH on gonads - all endocrine glands that produce hormones.",
    system: "endocrine"
  },
  {
    id: 46,
    question: "A patient has a goiter associated with high plasma levels of both TRH and TSH. Her heart rate is elevated. This patient most likely has which condition?",
    options: [
      "An endemic goiter",
      "A hypothalamic tumor secreting large amounts of TRH",
      "A pituitary tumor secreting large amounts of TSH",
      "Graves' disease"
    ],
    correct: 1,
    explanation: "High TRH and TSH with goiter and elevated heart rate suggests excessive TRH production driving the entire hypothalamic-pituitary-thyroid axis. A pituitary TSH tumor would show high TSH but low/normal TRH. Graves' disease would show low TSH due to thyroid hormone excess.",
    system: "endocrine"
  },
  {
    id: 47,
    question: "A man eats a low-carbohydrate meal that is rich in proteins containing the amino acids that stimulate insulin secretion. Which response accounts for the absence of hypoglycemia?",
    options: [
      "Suppression of GH",
      "Suppression of somatomedin C secretion",
      "Stimulation of cortisol secretion",
      "Stimulation of glucagon secretion",
      "Stimulation of epinephrine secretion"
    ],
    correct: 3,
    explanation: "Amino acids simultaneously stimulate both insulin and glucagon secretion. Glucagon stimulates gluconeogenesis and glycogenolysis, preventing hypoglycemia despite insulin release. This is a key protective mechanism when protein is consumed without carbohydrates.",
    system: "endocrine"
  },
  {
    id: 48,
    question: "A 46-year-old man has 'puffy' skin and is lethargic. His plasma TSH concentration is low and increases markedly when he is given TRH. What is the most likely diagnosis?",
    options: [
      "Hyperthyroidism due to a thyroid tumor",
      "Hyperthyroidism due to an abnormality in the hypothalamus",
      "Hypothyroidism due to an abnormality in the thyroid",
      "Hypothyroidism due to an abnormality in the hypothalamus",
      "Hypothyroidism due to an abnormality in the pituitary"
    ],
    correct: 3,
    explanation: "Puffy skin and lethargy suggest hypothyroidism. Low TSH that responds to TRH indicates the pituitary is functional but not receiving adequate TRH stimulation from the hypothalamus. This points to hypothalamic dysfunction as the primary cause.",
    system: "endocrine"
  },
  {
    id: 52,
    question: "Which of the following pairs of hormones and the corresponding action is incorrect?",
    options: [
      "Glucagon—increased glycogenolysis in liver",
      "Glucagon—increased glycogenolysis in skeletal muscle",
      "Glucagon—increased gluconeogenesis",
      "Cortisol—increased gluconeogenesis",
      "Cortisol—decreased glucose uptake in muscle"
    ],
    correct: 1,
    explanation: "Glucagon does NOT significantly affect skeletal muscle glycogenolysis because muscle lacks significant glucagon receptors. Glucagon primarily acts on the liver for glycogenolysis and gluconeogenesis. Muscle glycogenolysis is mainly controlled by epinephrine and neural stimulation.",
    system: "endocrine"
  },
  {
    id: 55,
    question: "Which hormone is largely unbound to plasma proteins?",
    options: [
      "Cortisol",
      "T4",
      "ADH",
      "Estradiol",
      "Progesterone"
    ],
    correct: 2,
    explanation: "ADH is a small peptide hormone that circulates largely unbound to plasma proteins. Steroid hormones (cortisol, estradiol, progesterone) and thyroid hormones (T4) are highly bound to specific transport proteins in the blood.",
    system: "endocrine"
  }
];
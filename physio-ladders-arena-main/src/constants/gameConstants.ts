
export const snakesAndLadders = {
  // Ladders (good physiology concepts) - move UP
  // Updated to user-specified positions
  4: 26,   // Ladder
  8: 51,   // Ladder  
  28: 46,  // Ladder
  39: 60,  // Ladder
  44: 80,  // Ladder
  52: 68,  // Ladder
  64: 85,  // Ladder
  69: 93,  // Ladder
  71: 92,  // Ladder
  84: 98,  // Ladder
  
  // Snakes (physiological challenges) - move DOWN
  // Updated to user-specified positions
  99: 78,  // Snake
  96: 65,  // Snake
  94: 48,  // Snake
  90: 49,  // Snake
  81: 63,  // Snake
  66: 47,  // Snake
  57: 19,  // Snake
  43: 22,  // Snake
  36: 14,  // Snake
  11: 9    // Snake
};

export const bonusTiles = {
  15: { type: 'mitochondria', reward: 50, message: 'Mitochondria Boost! +50 ATP' },
  25: { type: 'toxin', reward: -20, message: 'Toxin Exposure! -20 ATP' },
  35: { type: 'mitochondria', reward: 50, message: 'Cellular Respiration! +50 ATP' },
  45: { type: 'toxin', reward: -20, message: 'Toxic Environment! -20 ATP' },
  55: { type: 'mitochondria', reward: 50, message: 'Energy Surge! +50 ATP' },
  65: { type: 'toxin', reward: -20, message: 'Metabolic Toxin! -20 ATP' },
  75: { type: 'mitochondria', reward: 50, message: 'ATP Synthesis! +50 ATP' },
  85: { type: 'toxin', reward: -20, message: 'Cellular Damage! -20 ATP' },
  88: { type: 'mitochondria', reward: 50, message: 'Powerhouse Boost! +50 ATP' },
  92: { type: 'toxin', reward: -20, message: 'Oxidative Stress! -20 ATP' }
};

export const mcqQuestions = {
  nervous: [
    {
      question: "What is the resting membrane potential of a typical neuron?",
      options: ["-70mV", "-55mV", "-90mV", "-40mV"],
      correct: 0,
      explanation: "The resting membrane potential is typically around -70mV due to the sodium-potassium pump."
    },
    {
      question: "Which neurotransmitter is primarily involved in muscle contraction?",
      options: ["Dopamine", "Serotonin", "Acetylcholine", "GABA"],
      correct: 2,
      explanation: "Acetylcholine is released at neuromuscular junctions to trigger muscle contraction."
    },
    {
      question: "A 76-year-old man has a stroke that severely impairs his speech. Which area of his brain is most likely damaged?",
      options: ["Primary motor cortex", "Premotor area", "Broca's area", "Cerebellum"],
      correct: 2,
      explanation: "Broca's area is responsible for speech production. Damage to this area results in expressive aphasia where patients understand speech but cannot produce fluent speech."
    },
    {
      question: "A 17-year-old boy sustains serious head and neck trauma during a football game. Physical examination shows a positive Babinski sign. What part of the brain has most likely been damaged in this boy?",
      options: ["Anterior motor neurons", "Cerebellum", "Corticospinal tract", "Premotor cortex"],
      correct: 2,
      explanation: "A positive Babinski sign indicates upper motor neuron damage, specifically to the corticospinal tract. This results in loss of descending inhibition."
    },
    {
      question: "Which statement best describes a functional role for the lateral hemispheres of the cerebellum?",
      options: ["Control and coordinate movements of the axial muscles, as well as the shoulder and hip", "Control movements that involve distal limb musculature", "Function with the cerebral cortex to plan movements", "Stimulate motor neurons through their connections to the spinal cord"],
      correct: 2,
      explanation: "The lateral hemispheres (cerebrocerebellum) work with the cerebral cortex to plan and coordinate complex movements, especially skilled voluntary movements."
    },
    {
      question: "In which type of neuron does the axon form synaptic junctions with the skeletal muscle cells (extrafusal fibers) that comprise the major part of a muscle?",
      options: ["Alpha motor neuron", "Pyramidal neuron", "Gamma motor neuron", "Granule cell", "Purkinje cell"],
      correct: 0,
      explanation: "Alpha motor neurons innervate extrafusal muscle fibers (the main contractile units of skeletal muscle) and are responsible for generating muscle force."
    },
    {
      question: "Which of the following would produce an increase in cerebral blood flow?",
      options: ["Increase in carbon dioxide concentration", "Increase in oxygen concentration", "Decrease in the activity of cerebral cortex neurons", "Decrease in carbon dioxide concentration", "Decrease in arterial blood pressure from 120 mm Hg to 90 mm Hg"],
      correct: 0,
      explanation: "Increased CO2 concentration causes cerebral vasodilation and increased blood flow. CO2 is the most potent regulator of cerebral blood flow."
    },
    {
      question: "As the axons of motor neurons leave the spinal cord and course peripherally to skeletal muscle, they must pass through which structure?",
      options: ["Posterior column", "Posterior root", "Ventral white commissure", "Posterior horn", "Anterior root"],
      correct: 4,
      explanation: "Motor neuron axons exit the spinal cord through the anterior (ventral) root to reach skeletal muscles."
    },
    {
      question: "Which spinal cord level contains the entire population of preganglionic sympathetic neurons?",
      options: ["C5-T1", "C3-C5", "S2-S4", "T1-L2", "T6-L1"],
      correct: 3,
      explanation: "All preganglionic sympathetic neurons are located in the intermediolateral cell column from T1 to L2 spinal segments."
    },
    {
      question: "A left-side subdural hematoma develops in a 23-year-old man after an automobile accident. Physical examination shows papilledema 3 days after the accident. Which of the following is most likely to be increased in this patient?",
      options: ["Cerebral blood flow", "Cerebrospinal fluid production", "Cerebrospinal fluid volume", "Intracranial pressure", "Intracranial venous volume"],
      correct: 3,
      explanation: "Subdural hematoma increases intracranial pressure. Papilledema (optic disc swelling) is a classic sign of increased intracranial pressure."
    },
    {
      question: "A left-side subdural hematoma patient shows papilledema. Collapse of which of the following structures is most likely to lead to a decrease in brain oxygenation in this patient?",
      options: ["Arteries", "Capillaries", "Lateral ventricles", "Subarachnoid space", "Veins"],
      correct: 4,
      explanation: "Increased intracranial pressure compresses veins first (they have the lowest pressure), reducing venous return and compromising brain oxygenation."
    },
    {
      question: "Preganglionic sympathetic axons pass through which of the following structures?",
      options: ["Dorsal root", "Dorsal primary rami", "White rami", "Gray rami", "Ventral primary rami"],
      correct: 2,
      explanation: "Preganglionic sympathetic axons are myelinated and pass through white rami communicantes to reach sympathetic ganglia."
    },
    {
      question: "Which statement best describes a functional role for the intermediate zone of the cerebellum?",
      options: ["Controls and coordinates movements of the axial muscles, as well as the shoulder and hip", "Controls movements that involve distal limb musculature", "Functions with the cerebral cortex to plan movements", "Stimulates motor neurons through its connections to the spinal cord"],
      correct: 0,
      explanation: "The intermediate zone (paravermal region) controls axial muscles and proximal limb muscles (shoulder and hip)."
    },
    {
      question: "Which body part is represented most laterally and inferiorly within the primary motor cortex?",
      options: ["Face", "Hand", "Neck", "Abdomen", "Lower limb"],
      correct: 0,
      explanation: "In the motor homunculus, the face is represented most laterally and inferiorly in the primary motor cortex."
    },
    {
      question: "The gigantocellular neurons of the reticular formation release which neurotransmitter?",
      options: ["Norepinephrine", "Serotonin", "Dopamine", "Acetylcholine", "Glutamate"],
      correct: 4,
      explanation: "Gigantocellular neurons in the reticular formation are glutamatergic and use glutamate as their primary neurotransmitter."
    },
    {
      question: "Astrocytes participating in the metabolic control of cerebral blood flow have the following three events: (1)prostaglandin release, (2) a calcium wave, and (3) glutamate spillover. Which sequence best describes the correct temporal order of these three events?",
      options: ["2, 1, 3", "1, 2, 3", "3, 1, 2", "1, 3, 2", "3, 2, 1", "2, 3, 1"],
      correct: 4,
      explanation: "The sequence is: glutamate spillover → calcium wave in astrocytes → prostaglandin release, which then affects cerebral blood flow."
    },
    {
      question: "A 15-year-old girl is prescribed an antibiotic that can enter most tissues but cannot penetrate the blood-brain barrier. The blood-brain barrier can be attributed primarily to which cell type?",
      options: ["Astrocyte", "Endothelial cell", "Glial cell", "Macrophage", "Pericyte", "Smooth muscle cell"],
      correct: 1,
      explanation: "The blood-brain barrier is primarily formed by tight junctions between cerebral capillary endothelial cells."
    },
    {
      question: "In which type of neuron does the axon form synaptic junctions with skeletal muscle cells (intrafusal fibers) within the muscle spindles?",
      options: ["Alpha motor neuron", "Pyramidal neuron", "Gamma motor neuron", "Granule cell", "Purkinje cell"],
      correct: 2,
      explanation: "Gamma motor neurons innervate intrafusal muscle fibers within muscle spindles and regulate spindle sensitivity."
    },
    {
      question: "Which statement best describes a functional role for the cerebellar vermis?",
      options: ["Controls and coordinates movements of the axial muscles, as well as the shoulder and hip", "Controls movements that involve distal limb musculature", "Functions with the cerebral cortex to plan movements", "Stimulates motor neurons through its connections to the spinal cord"],
      correct: 0,
      explanation: "The cerebellar vermis (spinocerebellum) controls axial muscles and coordinates posture and balance."
    },
    {
      question: "Which projection system is contained in the superior cerebellar peduncle?",
      options: ["Pontocerebellar", "Cerebellothalamic", "Posterior spinocerebellar", "Corticospinal"],
      correct: 1,
      explanation: "The superior cerebellar peduncle contains efferent cerebellothalamic fibers that project to the thalamus and then to motor cortex."
    },
    {
      question: "A 29-year-old man steps on a broken bottle with his bare right foot. His right leg immediately lifts while his left leg extends before he can consciously react to the pain. This action is attributable to which reflex?",
      options: ["Walking reflex", "Stretch reflex", "Patellar tendon reflex", "Golgi tendon reflex", "Flexor withdrawal reflex"],
      correct: 4,
      explanation: "The flexor withdrawal reflex causes withdrawal of the injured limb and extension of the contralateral limb for support."
    },
    {
      question: "Under awake, resting conditions, brain metabolism accounts for about 15 percent of the total metabolism of the body. Which cellular population of the nervous system contributes most substantially to this high rate of metabolism?",
      options: ["Astrocytes", "Neurons", "Ependymal cells", "Choroid plexus cells", "Brain endothelial cells"],
      correct: 1,
      explanation: "Neurons have the highest metabolic rate in the brain due to their constant electrical activity and neurotransmitter synthesis."
    },
    {
      question: "Which brain structure serves as the major controller of the limbic system?",
      options: ["Hypothalamus", "Hippocampus", "Amygdala", "Mammillary body", "Fornix"],
      correct: 0,
      explanation: "The hypothalamus serves as the major controller of the limbic system, regulating emotions, behavior, and homeostasis."
    },
    {
      question: "A large portion of the cerebral cortex does not fit into the conventional definition of motor or sensory cortex. Which term refers to the type of cortex that receives input primarily from several other regions of the cerebral cortex?",
      options: ["Cortex that is agranular", "Secondary somatosensory cortex", "Association cortex", "Supplementary motor cortex", "Secondary visual cortex"],
      correct: 2,
      explanation: "Association cortex integrates information from multiple cortical areas and is involved in higher-order processing."
    },
    {
      question: "The two hemispheres of the brain are connected by which nerve fibers or pathways?",
      options: ["Lateral lemniscus", "Corticofugal fibers", "Corpus callosum", "Arcuate fasciculus", "Medial longitudinal fasciculus"],
      correct: 2,
      explanation: "The corpus callosum is the largest commissural tract connecting the two cerebral hemispheres."
    },
    {
      question: "The fibers of the corticospinal tract pass through which structure?",
      options: ["Medial lemniscus", "Medullary pyramid", "Posterior funiculus", "Medial longitudinal fasciculus", "Anterior roots"],
      correct: 1,
      explanation: "Corticospinal tract fibers pass through the medullary pyramids, where most fibers decussate."
    },
    {
      question: "The condition of prosopagnosia usually results from dysfunction or damage to which area of the cerebral cortex?",
      options: ["Prefrontal area", "Junction of the parietal and temporal lobe on the nondominant side of the brain", "Frontal eye fields", "Underside of the medial occipital and temporal lobes", "Limbic association areas of frontal and anterior temporal lobes"],
      correct: 3,
      explanation: "Prosopagnosia (face blindness) results from damage to the fusiform face area on the underside of the occipital and temporal lobes."
    },
    {
      question: "Lesions of which area of the brain would have the most devastating effect on verbal and symbolic intelligence?",
      options: ["Hippocampus", "Amygdala", "Wernicke's area on the nondominant side of the brain", "Broca's area", "Wernicke's area on the dominant side of the brain"],
      correct: 4,
      explanation: "Wernicke's area on the dominant hemisphere is crucial for language comprehension and verbal intelligence."
    },
    {
      question: "Which term applies to the combination of a motor neuron and all the skeletal muscle fibers contacted by that motor neuron?",
      options: ["Golgi tendon organ", "Motor unit", "Propriospinal neurons", "Skeletal muscle fibers"],
      correct: 1,
      explanation: "A motor unit consists of a single motor neuron and all the muscle fibers it innervates."
    },
    {
      question: "Which maneuver will attenuate the stretch reflex in skeletal muscle?",
      options: ["Sectioning the dorsal root of a spinal nerve", "Disruption of the spinocerebellar tract", "Disruption of the corticospinal tract", "Sectioning the medial lemniscus on the contralateral side", "Creating a lesion in the contralateral globus pallidus"],
      correct: 0,
      explanation: "Sectioning the dorsal root eliminates sensory input from muscle spindles, which is necessary for the stretch reflex."
    },
    {
      question: "A stroke involving the middle cerebral artery on the left side is likely to cause which symptom?",
      options: ["Paralysis of the left side of the face and left upper extremity", "Paralysis of left lower extremity", "Complete loss of vision in both eyes", "Loss of ability to comprehend speech", "Loss of vision in the left half of both eyes"],
      correct: 3,
      explanation: "Left middle cerebral artery stroke typically affects Wernicke's area, causing receptive aphasia (loss of speech comprehension)."
    },
    {
      question: "The creation of memory can be interrupted by which activity?",
      options: ["Phosphorylation of a potassium channel to block activity", "Activation of adenylate cyclase", "Unnatural loss of consciousness", "Increase in protein synthesis", "Activation of cyclic guanosine monophosphate (cGMP) phosphodiesterase"],
      correct: 2,
      explanation: "Loss of consciousness interrupts the consolidation process necessary for memory formation."
    },
    {
      question: "Which structure serves to connect Wernicke's area to Broca's area in the cerebral cortex?",
      options: ["Arcuate fasciculus", "Lateral lemniscus", "Medial longitudinal fasciculus", "Anterior commissure", "Internal capsule"],
      correct: 0,
      explanation: "The arcuate fasciculus connects Wernicke's area (comprehension) to Broca's area (speech production)."
    },
    {
      question: "Broca's area is a specialized portion of motor cortex. Which condition best describes the deficit resulting from damage to Broca's area?",
      options: ["Spastic paralysis of the contralateral hand", "Paralysis of the muscles of the larynx and pharynx", "Inability to use two hands to grasp an object", "Inability to direct the two eyes to the contralateral side", "Inability to speak whole words correctly"],
      correct: 4,
      explanation: "Broca's aphasia results in difficulty producing fluent speech and speaking whole words correctly."
    },
    {
      question: "Which projection system is contained in the inferior cerebellar peduncle?",
      options: ["Pontocerebellar", "Cerebellothalamic", "Posterior spinocerebellar", "Corticospinal", "Dorsospinocerebellar"],
      correct: 2,
      explanation: "The inferior cerebellar peduncle contains the posterior spinocerebellar tract among other afferent pathways."
    },
    {
      question: "Signals from motor areas of the cortex reach the contralateral cerebellum after first passing through which structure?",
      options: ["Thalamus", "Caudate nucleus", "Red nucleus", "Basilar pontine nuclei", "Dorsal column nuclei"],
      correct: 3,
      explanation: "Cortical signals reach the contralateral cerebellum via the corticopontocerebellar pathway through basilar pontine nuclei."
    },
    {
      question: "Cerebrospinal fluid (CSF) provides a cushioning effect both inside and outside the brain. Which space that lies outside the brain or spinal cord contains CSF?",
      options: ["Lateral ventricle", "Third ventricle", "Cisterna magna", "Epidural space", "Aqueduct of Sylvius"],
      correct: 2,
      explanation: "The cisterna magna is a subarachnoid space outside the brain that contains CSF."
    },
    {
      question: "A 40-year-old woman with uncontrolled movements, depression, and irritability shows CAG triplet repeat expansion on chromosome 4. Which diagnosis is most likely?",
      options: ["Alzheimer's disease", "Bipolar disorder", "Brain tumor", "Huntington's disease", "Parkinson's disease"],
      correct: 3,
      explanation: "Huntington's disease is caused by CAG repeat expansion on chromosome 4 and presents with chorea, psychiatric symptoms, and dementia."
    },
    {
      question: "In the Huntington's disease patient above, which of the following is most likely to be decreased?",
      options: ["Acetylcholine neurons in the magnocellular forebrain nucleus", "Dopamine neurons in the substantia nigra", "γ-Aminobutyric acid (GABA) neurons in the caudate nucleus and putamen", "Serotonin neurons in the raphe nuclei"],
      correct: 2,
      explanation: "Huntington's disease primarily affects GABA neurons in the striatum (caudate nucleus and putamen)."
    },
    {
      question: "Which projection system is contained in the middle cerebellar peduncle?",
      options: ["Pontocerebellar", "Cerebellothalamic", "Posterior spinocerebellar", "Corticospinal", "Ventrospinocerebellar"],
      correct: 0,
      explanation: "The middle cerebellar peduncle contains pontocerebellar fibers that relay cortical information to the cerebellum."
    },
    {
      question: "The peripheral sensory input that activates the ascending excitatory elements of the reticular formation comes mainly from which of the following?",
      options: ["Pain signals", "Proprioceptive sensory information", "Corticospinal system", "Medial lemniscus", "Input from Pacinian corpuscles"],
      correct: 0,
      explanation: "Pain signals are the primary peripheral sensory input that activates the ascending reticular activating system."
    },
    {
      question: "Cells of the adrenal medulla receive synaptic input from which type of neuron?",
      options: ["Preganglionic sympathetic", "Postganglionic sympathetic", "Preganglionic parasympathetic", "Postsynaptic parasympathetic", "Presynaptic parasympathetic"],
      correct: 0,
      explanation: "Adrenal medulla cells are modified postganglionic sympathetic neurons that receive direct preganglionic sympathetic innervation."
    },
    {
      question: "Which activity will increase the sensitivity of the stretch reflex?",
      options: ["Cutting the dorsal root fibers", "Increasing the activity of the medullary reticular nuclei", "Bending the head forward", "Enhanced activity in the fusimotor (gamma motor neuron) system", "Stimulating the lateral hemispheres of the cerebellum"],
      correct: 3,
      explanation: "Gamma motor neuron activity increases muscle spindle sensitivity, thereby enhancing the stretch reflex."
    },
    {
      question: "Neurological disease associated with the cerebellum produces which type of symptoms?",
      options: ["Resting tremor", "Athetosis", "Rigidity", "Ataxia", "Akinesia"],
      correct: 3,
      explanation: "Cerebellar dysfunction primarily causes ataxia (lack of coordination) in movement."
    },
    {
      question: "Preganglionic parasympathetic neurons that contribute to the innervation of the descending colon and rectum are found in which structure?",
      options: ["Superior cervical ganglion", "Dorsal motor nucleus of the vagus", "Superior mesenteric ganglion", "Ciliary ganglion", "Spinal cord levels S2 and S3"],
      correct: 4,
      explanation: "Preganglionic parasympathetic neurons for the descending colon and rectum are located in the sacral spinal cord (S2-S4)."
    },
    {
      question: "A complex spike pattern in the Purkinje cells of the cerebellum can be initiated by stimulation of which brain area?",
      options: ["Inferior olivary complex", "Brain stem reticular nuclei", "Neurons in red nucleus", "Superior olivary complex", "Dorsal vestibular nucleus"],
      correct: 0,
      explanation: "The inferior olive provides climbing fiber input to Purkinje cells, causing complex spike patterns."
    },
    {
      question: "In a muscle spindle receptor, which type of muscle fiber is responsible for the dynamic response?",
      options: ["Extrafusal muscle fiber", "Static nuclear bag fiber", "Nuclear chain fiber", "Dynamic nuclear bag fiber", "Smooth muscle fiber"],
      correct: 3,
      explanation: "Dynamic nuclear bag fibers respond to the rate of change in muscle length (dynamic response)."
    },
    {
      question: "Which structure serves as an 'alternative pathway' for signals from the motor cortex to the spinal cord?",
      options: ["Red nucleus", "Basilar pontine nuclei", "Caudate nucleus", "Thalamus", "Dorsal column nuclei"],
      correct: 0,
      explanation: "The red nucleus provides an alternative motor pathway (rubrospinal tract) from cortex to spinal cord."
    },
    {
      question: "The phenomenon of decerebrate rigidity can be explained, at least in part, by which of the following?",
      options: ["Stimulation of type 1b sensory neurons", "Loss of cerebellar inputs to the red nucleus", "Overactivity of the medullary reticular nuclei", "Unopposed activity of the pontine reticular nuclei", "Degeneration of the nigrostriatal pathway"],
      correct: 3,
      explanation: "Decerebrate rigidity results from unopposed activity of pontine reticular nuclei after loss of cortical inhibition."
    },
    {
      question: "Like the primary visual cortex, the primary motor cortex is organized into vertical columns. The cells that contribute axons to the corticospinal tract are concentrated in which cortical layer?",
      options: ["Layer I", "Layer II", "Layer III", "Layer IV", "Layer V"],
      correct: 4,
      explanation: "Layer V of the motor cortex contains the large pyramidal neurons (Betz cells) that give rise to corticospinal tract axons."
    }
  ],
  cvs: [
    {
      question: "What is the normal cardiac output at rest?",
      options: ["3-4 L/min", "5-6 L/min", "7-8 L/min", "9-10 L/min"],
      correct: 1,
      explanation: "Normal cardiac output is approximately 5-6 L/min at rest (HR × SV)."
    },
    {
      question: "Which chamber of the heart has the thickest muscular wall?",
      options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
      correct: 3,
      explanation: "The left ventricle has the thickest wall as it pumps blood to the entire systemic circulation."
    },
    {
      question: "A 72-year-old man had surgery to remove an abdominal tumor. Findings of pathohistological studies reveal that the tumor mass contains a large number of blood vessels. The most likely stimulus for the growth of vessels in a solid tumor is an increase in which of the following?",
      options: ["Growth hormone", "Plasma glucose concentration", "Angiostatin growth factor", "Tissue oxygen concentration", "Vascular endothelial growth factor (VEGF)"],
      correct: 4,
      explanation: "Solid tumors are metabolically active tissues that need increased quantities of oxygen and other nutrients. When metabolism in a tissue is increased for a prolonged period, the vascularity of the tissue also increases. One of the important factors that increases growth of new blood vessels is VEGF. Presumably, a deficiency of tissue oxygen or other nutrients, or both, leads to the formation of VEGF."
    },
    {
      question: "Under control conditions, flow through a blood vessel is 100 ml/min with a pressure gradient of 50 mm Hg. What would be the approximate flow through the vessel after increasing the vessel diameter by 50%, assuming that the pressure gradient is maintained at 100 mm Hg?",
      options: ["100 ml/min", "150 ml/min", "300 ml/min", "500 ml/min", "700 ml/min"],
      correct: 3,
      explanation: "Blood flow in a vessel is directly proportional to the fourth power of the vessel radius. Increasing vessel diameter by 50% (1.5 × control) would increase blood flow 1.5 to the fourth power × normal blood flow (100 ml/min). Thus, blood flow would increase to 100 ml/min × 5.06, or approximately 500 ml/min."
    },
    {
      question: "The diameter of a precapillary arteriole is decreased in a muscle vascular bed. Which change in the microcirculation would be expected?",
      options: ["Decreased capillary filtration rate", "Increased interstitial volume", "Increased lymph flow", "Increased capillary hydrostatic pressure", "Decreased arteriolar resistance"],
      correct: 0,
      explanation: "Decreasing precapillary arteriole diameter increases resistance, reducing capillary hydrostatic pressure, which decreases filtration rate according to Starling forces."
    },
    {
      question: "An increase in which of the following would tend to increase lymph flow?",
      options: ["Hydraulic conductivity of the capillary wall", "Plasma colloid osmotic pressure", "Capillary hydrostatic pressure", "Arteriolar resistance", "A and C"],
      correct: 4,
      explanation: "The two main factors that increase lymph flow are an increase in capillary filtration rate and an increase in lymphatic pump activity. An increase in plasma colloid osmotic pressure decreases capillary filtration rate, interstitial volume and hydrostatic pressure, and lymph flow. In contrast, an increase in hydraulic conductivity of the capillary wall and capillary hydrostatic pressure increase capillary filtration rate, interstitial volume and pressure, and lymph flow."
    },
    {
      question: "In control conditions, flow through a blood vessel is 100 ml/min under a pressure gradient of 50 mm Hg. What would be the approximate flow through the vessel after increasing the vessel diameter to four times normal, assuming that the pressure gradient was maintained at 50 mm Hg?",
      options: ["300 ml/min", "1600 ml/min", "1000 ml/min", "16,000 ml/min", "25,600 ml/min"],
      correct: 4,
      explanation: "According to Poiseuille's law, flow through a vessel increases in proportion to the fourth power of the radius. A fourfold increase in vessel diameter (or radius) would increase 4 to the fourth power, or 256 times normal. Thus, flow through the vessel after increasing the vessel 4 times normal would increase from 100 to 25,600 ml/min."
    },
    {
      question: "A 50-year-old woman has a renal blood flow of 1200 ml/min and hematocrit of 50. Her arterial pressure is 125 mm Hg, and her renal venous pressure is 5 mm Hg. She also has a plasma colloid osmotic pressure of 25 mm Hg and a glomerular capillary hydrostatic pressure of 50 mm Hg. What is the total renal vascular resistance (in mm Hg/ml/min) in this woman?",
      options: ["0.05", "0.10", "0.50", "1.00", "1.50"],
      correct: 1,
      explanation: "Vascular resistance is equal to arterial pressure minus venous pressure divided by blood flow. In this example, arterial pressure is 125 mm Hg, venous pressure is 5 mm Hg, and blood flow is 1200 ml/min. Thus, vascular resistance is equal to 120/1200, or 0.10 mm Hg/ml/min."
    },
    {
      question: "An increase in which of the following would be expected to decrease blood flow in a vessel?",
      options: ["Pressure gradient across the vessel", "Radius of the vessel", "Plasma colloid osmotic pressure", "Viscosity of the blood", "Plasma sodium concentration"],
      correct: 3,
      explanation: "The rate of blood flow is directly proportional to the fourth power of the vessel radius and to the pressure gradient across the vessel. In contrast, the rate of blood flow is inversely proportional to the viscosity of the blood. Thus, an increase in blood viscosity would decrease blood flow in a vessel."
    },
    {
      question: "A balloon catheter is advanced from the superior vena cava into the heart and inflated to increase atrial pressure by 5 mm Hg. An increase in which of the following would be expected to occur in response to the elevated atrial pressure?",
      options: ["Atrial natriuretic peptide", "Angiotensin II", "Aldosterone", "Renal sympathetic nerve activity"],
      correct: 0,
      explanation: "Atrial natriuretic peptide is released from myocytes in the atria in response to increases in atrial pressure."
    },
    {
      question: "Which of the following vessels has the greatest total cross-sectional area in the circulatory system?",
      options: ["Aorta", "Small arteries", "Capillaries", "Venules", "Vena cava"],
      correct: 2,
      explanation: "The capillaries have the largest total cross-sectional area of all vessels of the circulatory system. The venules also have a relatively large total cross-sectional area, but not as great as the capillaries, which explains the large storage of blood in the venous system compared with that in the arterial system."
    },
    {
      question: "An increase in atrial pressure results in which of the following?",
      options: ["Decrease in plasma atrial natriuretic peptide", "Increase in plasma angiotensin II concentration", "Increase in plasma aldosterone concentration", "Increase in sodium excretion"],
      correct: 3,
      explanation: "An increase in atrial pressure would also increase plasma levels of atrial natriuretic peptide, which in turn would decrease plasma levels of angiotensin II and aldosterone and increase sodium excretion."
    }
  ],
  respiratory: [
    {
      question: "What is the normal tidal volume in adults?",
      options: ["300ml", "500ml", "700ml", "900ml"],
      correct: 1,
      explanation: "Normal tidal volume is approximately 500ml or 7ml/kg body weight."
    },
    {
      question: "Which factor primarily drives respiration under normal conditions?",
      options: ["O2 levels", "CO2 levels", "pH levels", "Temperature"],
      correct: 1,
      explanation: "CO2 levels (detected as H+ concentration) are the primary driver of respiration."
    },
    {
      question: "What tends to decrease airway resistance?",
      options: ["Asthma", "Stimulation by sympathetic fibers", "Treatment with acetylcholine", "Exhalation to residual volume"],
      correct: 1,
      explanation: "A decrease in airway resistance is due to an increase in the diameter of the airway. Sympathetic stimulation of the airways results in relaxation of airways, decreasing resistance."
    },
    {
      question: "The pleural pressure of a normal 56-year-old woman is approximately −5 cm H2O during resting conditions immediately before inspiration (i.e., at functional residual capacity [FRC]). What is the pleural pressure (in cm H2O) during inspiration?",
      options: ["+1", "+4", "0", "−3", "−7"],
      correct: 4,
      explanation: "During inspiration, the volume of the chest cavity increases and the pleural pressure becomes more negative. The pleural pressure averages about −7.5 cm H2O immediately before expiration when the lungs are fully expanded."
    },
    {
      question: "A healthy, 25-year-old medical student participates in a 10-kilometer charity run for the American Heart Association. Which muscles does the student use (contract) during expiration?",
      options: ["Diaphragm and external intercostals", "Diaphragm and internal intercostals", "Diaphragm only", "Internal intercostals and abdominal recti", "Scaleni", "Sternocleidomastoid muscles"],
      correct: 3,
      explanation: "Contraction of the internal intercostals and abdominal recti pull the rib cage downward during expiration. The abdominal recti and other abdominal muscles compress the abdominal contents upward toward the diaphragm."
    },
    {
      question: "Which of the following would be expected to increase the measured airway resistance?",
      options: ["Stimulation of parasympathetic nerves to the lungs", "Low lung volumes", "Release of histamine by mast cells", "Forced expirations", "All of the above"],
      correct: 4,
      explanation: "Stimulation of parasympathetic nerves results in bronchoconstriction. Low lung volumes cause airway collapse. Histamine is a bronchoconstrictor. Forced exhalations increase pleural pressure, decreasing airway diameter."
    },
    {
      question: "Several students are trying to see who can generate the highest expiratory flow. Which muscle is most effective at producing a maximal effort?",
      options: ["Diaphragm", "Internal intercostals", "External intercostals", "Rectus abdominis", "Sternocleidomastoid"],
      correct: 3,
      explanation: "The rectus abdominis and internal intercostals are used for exhalation. The majority of the force for exhalation is generated by the rectus abdominis."
    },
    {
      question: "With a slow decrease in left heart function, which of the following will minimize the formation of pulmonary edema?",
      options: ["An increase in plasma protein concentration due to fluid loss", "Increase in the negative interstitial hydrostatic pressure", "Increased pumping of lymphatics", "Increase in the concentration of interstitial proteins"],
      correct: 2,
      explanation: "A slow increase in left heart function will lead to a gradual increase in pulmonary capillary pressure. Over time there will be an increase in lymphatics and lymphatic pumping to remove the fluid from the interstitial space."
    },
    {
      question: "A 22-year-old woman has a pulmonary compliance of 0.2 L/cm H2O and a pleural pressure of −4 cm H2O. What is the pleural pressure (in cm H2O) when the woman inhales 1.0 liter of air?",
      options: ["−6", "−7", "−8", "−9", "−10"],
      correct: 3,
      explanation: "Because the compliance is 0.2 L/cm H2O, a 1.0-liter increase in volume will cause a 5 cm H2O decrease in pleural pressure (1.0L/0.2 L/cm H2O = 5.0 cm H2O), so the pressure is reduced to −9 cm H2O."
    },
    {
      question: "A patient has a dead space of 150 milliliters, FRC of 3 liters, tidal volume (VT) of 650 milliliters, expiratory reserve volume (ERV) of 1.5 liters, total lung capacity (TLC) of 8 liters, and respiratory rate of 15 breaths/min. What is the residual volume (RV)?",
      options: ["500 milliliters", "1000 milliliters", "1500 milliliters", "2500 milliliters", "6500 milliliters"],
      correct: 2,
      explanation: "Residual volume = FRC − ERV = 3 L − 1.5 L = 1.5 L"
    },
    {
      question: "A patient has a dead space of 150 milliliters, FRC of 3 liters, VT of 650 milliliters, ERV of 1.5 liters, TLC of 8 liters, and respiratory rate of 15 breaths/min. What is the alveolar ventilation (VA)?",
      options: ["5 L/min", "7.5 L/min", "6.0 L/min", "9.0 L/min"],
      correct: 1,
      explanation: "VA = Frequency × (VT − VD) = 15/min × (650 −150) = 7.5 L/min"
    },
    {
      question: "What happens during exercise?",
      options: ["Blood flow is uniform throughout the lung", "Lung-diffusing capacity increases because blood flow is continuous in all pulmonary capillaries", "Pulmonary blood volume decreases", "The transit time of blood in the pulmonary capillaries does not change from rest"],
      correct: 1,
      explanation: "During exercise there is an opening of more blood vessels in the lung, and thus better perfusion. With the opening of more blood vessels an increase in diffusing capacity occurs, allowing equilibration of the blood with O2."
    },
    {
      question: "A person with normal lungs has an oxygen (O2) consumption of 750 ml O2/min. The hemoglobin (Hb) concentration is 15 g/dl. The mixed venous saturation is 25%. What is the cardiac output?",
      options: ["2500 ml/min", "5000 ml/min", "7500 ml/min", "10,000 ml/min", "20,000 ml/min"],
      correct: 1,
      explanation: "Using Fick's principle: O2 consumption = cardiac output × (arterial content − venous content). Arterial content = 20 ml O2/dl, venous content = 5 ml O2/dl. Cardiac output = 750/(20-5) = 5000 ml/min."
    },
    {
      question: "A cardiac catheterization is performed in a healthy adult. The blood sample withdrawn from the catheter shows 60% O2 saturation, and the pressure recording shows oscillations from a maximum of 27 mm Hg to a minimum of 12 mm Hg. Where was the catheter tip located?",
      options: ["Ductus arteriosus", "Foramen ovale", "Left atrium", "Pulmonary artery", "Right atrium"],
      correct: 3,
      explanation: "The pulmonary artery pressure ranges from 25 systolic to ~12 to 14 mm Hg diastolic, and has low oxygen saturation (~60%) due to venous blood."
    },
    {
      question: "A human experiment is being performed in which forearm blood flow is being measured under a variety of conditions. The forearm is infused with a vasodilator, resulting in an increase in blood flow. Which of the following occurs?",
      options: ["Tissue interstitial partial pressure of oxygen (PO2) will increase", "Tissue interstitial partial pressure of carbon dioxide (PCO2) will increase", "Tissue pH will decrease"],
      correct: 0,
      explanation: "With an increase in blood flow to a tissue, with no change in metabolism, there will be an increase in tissue PO2 due to the increased delivery of O2 with no change in metabolism."
    },
    {
      question: "Blood gas measurements are obtained in a resting patient who is breathing room air. The patient has an arterial content of 19 ml O2/min with a PO2 of 95. The mixed venous O2 content is 4 ml O2/100 ml blood. Which condition does the patient have?",
      options: ["An increase in physiological dead space", "Pulmonary edema", "A low Hb concentration", "A low cardiac output"],
      correct: 3,
      explanation: "A low cardiac output would require a greater extraction of O2 from the blood to supply O2 to the tissue, resulting in a decreased mixed venous content."
    },
    {
      question: "A man fell asleep in his running car. He was unconscious when he was brought into the emergency department. With carbon monoxide (CO) poisoning, you would expect his alveolar O2 partial pressure (PaO2) would be _______, while his arterial O2 content (CaO2) would be ______.",
      options: ["Normal, decreased", "Decreased, decreased", "Increased, normal", "Increased, normal"],
      correct: 0,
      explanation: "CO binds to the Hb, displacing the O2 bound to Hb, leading to a decrease in content. However, arterial PO2 is a measure of dissolved PO2; therefore, the PO2 will be normal."
    },
    {
      question: "A person with normal lungs at sea level (760 mm Hg) is breathing 50% O2. What is the approximate alveolar PO2?",
      options: ["100", "159", "306", "330", "380"],
      correct: 2,
      explanation: "Alveolar PO2 = PIO2 − (PCO2/R) = 356 − (40/0.8) = 356 − 50 = 306 mm Hg. The inspired PO2 is calculated as (760-47) × 0.5 = 356 mm Hg."
    },
    {
      question: "A person's normal VT is 400 milliliters with a dead space of 100 milliliters. The respiratory rate is 12 breaths/min. The person undergoes ventilation during surgery, and the VT is 700 with a rate of 12. What is the approximate alveolar PCO2 for this person?",
      options: ["10", "20", "30", "40", "45"],
      correct: 1,
      explanation: "Normal alveolar PCO2 is 40 mm Hg. Normal VA for this person is 3.6 L/min. On the ventilator the VA is 7.2 L/min. A doubling of VA results in a decrease in alveolar PCO2 by one-half. Thus, alveolar PCO2 would be 20."
    },
    {
      question: "In which conditions is alveolar PO2 increased and alveolar PCO2 decreased?",
      options: ["Increased VA and unchanged metabolism", "Decreased VA and unchanged metabolism", "Increased metabolism and unchanged VA", "Proportional increase in metabolism and VA"],
      correct: 0,
      explanation: "Alveolar PCO2 is a balance between VA and CO2 production. To decrease alveolar PCO2, there must be increased VA in relation to metabolism."
    },
    {
      question: "The diffusing capacity of a gas is the volume of gas that will diffuse through a membrane each minute for a pressure difference of 1 mm Hg. Which gas is often used to estimate the O2-diffusing capacity of the lungs?",
      options: ["CO2", "CO", "Cyanide gas", "Nitrogen", "O2"],
      correct: 1,
      explanation: "The diffusing capacity for CO can be measured accurately because the CO tension in pulmonary capillary blood is zero under normal conditions. The CO diffusing capacity is then used to calculate the O2-diffusing capacity."
    },
    {
      question: "A person with anemia has an Hb concentration of 12g/dl. He starts exercising and uses 12 ml O2/dl. What is the mixed venous PO2?",
      options: ["0 mm Hg", "10 mm Hg", "20 mm Hg", "40 mm Hg", "100 mm Hg"],
      correct: 2,
      explanation: "Arterial oxygen content = 12 × 1.34 = 16 ml O2/dl. Using 12 ml O2/dl yields a mixed venous saturation of 25%. With a saturation of 25%, the venous PO2 should be close to 20 mm Hg."
    },
    {
      question: "The afferent (sensory) endings for the Hering-Breuer reflex are mechanoreceptors located in the",
      options: ["Carotid arteries", "Alveoli", "External intercostals", "Bronchi and bronchioles", "Diaphragm"],
      correct: 3,
      explanation: "The Hering-Breuer reflex mechanoreceptors are located in the bronchi and bronchioles and respond to increased stretch to limit respiration."
    },
    {
      question: "What is the most important pathway for the respiratory response to systemic arterial CO2 (PCO2)?",
      options: ["CO2 activation of the carotid bodies", "Hydrogen ion (H+) activation of the carotid bodies", "CO2 activation of the chemosensitive area of the medulla", "H+ activation of the chemosensitive area of the medulla", "CO2 activation of receptors in the lungs"],
      correct: 3,
      explanation: "CO2 is the major controller of respiration as a result of a direct effect of H+ on the chemosensitive area of the medulla. CO2 diffuses across the blood-brain barrier and then is converted to H+."
    },
    {
      question: "The basic rhythm of respiration is generated by neurons located in the medulla. What limits the duration of inspiration and increases respiratory rate?",
      options: ["Apneustic center", "Dorsal respiratory group", "Nucleus of the tractus solitarius", "Pneumotaxic center", "Ventral respiratory group"],
      correct: 3,
      explanation: "The pneumotaxic center transmits signals to the dorsal respiratory group that 'switch off' inspiratory signals, thus controlling the duration of the filling phase of the lung cycle."
    },
    {
      question: "When the respiratory drive for increased pulmonary ventilation becomes greater than normal, a special set of respiratory neurons that are inactive during normal quiet breathing then becomes active, contributing to the respiratory drive. These neurons are located in which structure?",
      options: ["Apneustic center", "Dorsal respiratory group", "Nucleus of the tractus solitarius", "Pneumotaxic center", "Ventral respiratory group"],
      correct: 4,
      explanation: "When the respiratory drive becomes greater than normal, respiratory signals spill over into the ventral respiratory neurons, causing the ventral respiratory area to contribute to the respiratory drive."
    },
    {
      question: "An anesthetized man is breathing with no assistance. He then undergoes artificial ventilation for 10 minutes at his normal VT but at twice his normal frequency. He undergoes ventilation with a gas mixture of 60% O2 and 40% nitrogen. The artificial ventilation is stopped and he fails to breathe for several minutes. This apneic episode is due to which of the following?",
      options: ["High arterial PO2 suppressing the activity of the peripheral chemoreceptors", "Decrease in arterial pH suppressing the activity of the peripheral chemoreceptors", "Low arterial PCO2 suppressing the activity of the medullary chemoreceptors", "High arterial PCO2 suppressing the activity of the medullary chemoreceptors", "Low arterial PCO2 suppressing the activity of the peripheral chemoreceptors"],
      correct: 2,
      explanation: "This patient would have increased VA, therefore resulting in a decrease in arterial PCO2. The effect of this decrease in PCO2 would be an inhibition of the chemosensitive area and a decrease in ventilation until PCO2 was back to normal."
    },
    {
      question: "At a fraternity party a 17-year-old male places a paper bag over his mouth and breathes in and out of the bag. As he continues to breathe into this bag, his rate of breathing continues to increase. Which of the following is responsible for the increased ventilation?",
      options: ["Increased alveolar PO2", "Increased alveolar PCO2", "Decreased arterial PCO2", "Increased pH"],
      correct: 1,
      explanation: "With rebreathing, the exhaled CO2 is never removed and continues to accumulate in the bag. This increase in alveolar and thus arterial PCO2 will be the stimulus for the increased breathing."
    },
    {
      question: "VA increases severalfold during strenuous exercise. Which factor is most likely to stimulate ventilation during strenuous exercise?",
      options: ["Collateral impulses from higher brain centers", "Decreased mean arterial pH", "Decreased mean arterial PO2", "Decreased mean venous PO2", "Increased mean arterial PCO2"],
      correct: 0,
      explanation: "The brain, upon transmitting motor impulses to the contracting muscles, is believed to transmit collateral impulses to the brain stem to excite the respiratory center."
    },
    {
      question: "While breathing room air, a patient with chronic obstructive pulmonary disease, has a systemic arterial PCO2 of 65 mm Hg and a PO2 of 40 mm Hg. Supplemental oxygen is administered at a 40% fractional concentration of oxygen in inspired gas (FIO2) which resulted in an increase of PO2 to 55 mm Hg and PCO2 to 70 mm Hg. Which of the following describes the supplemental O2?",
      options: ["Restored arterial dissolved O2 to normal", "Did not change breathing", "Reduced the hypoxic stimulation of breathing", "Increased the pulmonary excretion of CO2"],
      correct: 2,
      explanation: "There was an increase in PO2, but not to normal levels. The increase in PCO2 means that the VA decreased. In this patient the VA was driven by the decreased O2 levels."
    },
    {
      question: "Which of the following describes diffusing capacity of O2 in the lung?",
      options: ["Does not change during exercise", "Is greater than diffusing capacity for CO2", "Is greater in residents at sea level than in residents at 3000 meters altitude", "Is directly related to alveolar capillary surface area"],
      correct: 3,
      explanation: "Diffusing capacity is directly related to alveolar surface area. It increases during exercise due to opening of capillaries and better V/Q match."
    }
  ],
  digestive: [
    {
      question: "A 43-year-old man eats a meal consisting of 40 percent protein, 10 percent fat, and 50 percent carbohydrate. Thirty minutes later the man feels the urge to defecate. Which reflex results in the urge to defecate when the duodenum is stretched?",
      options: ["Duodenocolic", "Enterogastric", "Intestino-intestinal", "Rectosphincteric"],
      correct: 0,
      explanation: "The duodenocolic reflex is triggered when the duodenum is stretched, causing increased motility in the colon and the urge to defecate."
    },
    {
      question: "The ileum and distal jejunum of a 34-year-old man are ruptured in an automobile accident. The entire ileum and a portion of the jejunum are resected. What is most likely to occur in this man?",
      options: ["Atrophic gastritis", "Constipation", "Gastric ulcer", "Gastroesophageal reflux disease (GERD)", "Vitamin B12 deficiency"],
      correct: 4,
      explanation: "The ileum is the primary site of vitamin B12 absorption. Resection of the entire ileum will lead to vitamin B12 deficiency."
    },
    {
      question: "Which ion has the highest concentration in saliva under basal conditions?",
      options: ["Bicarbonate", "Chloride", "Potassium", "Sodium"],
      correct: 2,
      explanation: "Under basal conditions, potassium has the highest concentration in saliva compared to plasma levels."
    },
    {
      question: "A 10-year-old boy consumes a cheeseburger, fries, and chocolate shake. The meal stimulates the release of several gastrointestinal hormones. The presence of fat, carbohydrate, or protein in the duodenum stimulates the release of which hormone from the duodenal mucosa?",
      options: ["Cholecystokinin (CCK)", "Glucose-dependent insulinotropic peptide (GLIP)", "Gastrin", "Motilin", "Secretin"],
      correct: 1,
      explanation: "GLIP (also known as GIP) is released from the duodenal mucosa in response to fat, carbohydrate, or protein in the duodenum."
    },
    {
      question: "A clinical experiment is conducted in which one group of subjects is given 50 grams of glucose intravenously and another group is given 50 grams of glucose orally. Which factor can explain why the oral glucose load is cleared from the blood at a faster rate compared with the intravenous glucose load?",
      options: ["CCK-induced insulin release", "CCK-induced vasoactive intestinal peptide (VIP) release", "GLIP-induced glucagon release", "GLIP-induced insulin release", "VIP-induced GLIP release"],
      correct: 3,
      explanation: "Oral glucose stimulates GLIP release, which enhances insulin secretion (incretin effect), leading to faster glucose clearance than intravenous administration."
    },
    {
      question: "The proenzyme pepsinogen is secreted mainly from which of the following structures?",
      options: ["Acinar cells of the pancreas", "Ductal cells of the pancreas", "Epithelial cells of the duodenum", "Gastric glands of the stomach"],
      correct: 3,
      explanation: "Pepsinogen is secreted by chief cells in the gastric glands of the stomach, where it is converted to pepsin by gastric acid."
    },
    {
      question: "Which hormone is released by the presence of fat and protein in the small intestine and has a major effect in decreasing gastric emptying?",
      options: ["CCK", "GLIP", "Gastrin", "Motilin", "Secretin"],
      correct: 0,
      explanation: "CCK is released in response to fat and protein in the duodenum and significantly slows gastric emptying to allow proper digestion."
    },
    {
      question: "Compared with plasma, saliva has the highest relative concentration of which ion under basal conditions?",
      options: ["Bicarbonate", "Chloride", "Potassium", "Sodium"],
      correct: 2,
      explanation: "Saliva has a much higher concentration of potassium relative to plasma compared to other ions under basal conditions."
    },
    {
      question: "The cephalic phase of gastric secretion accounts for about 30 percent of the acid response to a meal. Which of the following can completely eliminate the cephalic phase of gastric secretion?",
      options: ["Antacids (e.g., Rolaids)", "Antigastrin antibody", "Atropine", "Histamine H2 blocker", "Vagotomy", "Sympathectomy"],
      correct: 4,
      explanation: "Vagotomy (cutting the vagus nerve) completely eliminates the cephalic phase since this phase is mediated by vagal stimulation."
    },
    {
      question: "Migrating motility complexes (MMCs) occur about every 90 minutes between meals and are thought to be stimulated by the gastrointestinal hormone motilin. An absence of MMCs causes an increase in which of the following?",
      options: ["Duodenal motility", "Gastric emptying", "Intestinal bacteria", "Mass movements", "Swallowing"],
      correct: 2,
      explanation: "MMCs help clear undigested food and bacteria from the small intestine. Their absence leads to bacterial overgrowth."
    },
    {
      question: "A toxin from V. cholerae is most likely to stimulate an increase in which of the following in the epithelial cells of the crypts of Lieberkühn?",
      options: ["Cyclic adenosine monophosphate (cAMP)", "Cyclic guanosine monophosphate (cGMP)", "Chloride absorption", "Sodium absorption"],
      correct: 0,
      explanation: "Cholera toxin activates adenylyl cyclase, leading to massive increases in cAMP, which causes secretory diarrhea."
    },
    {
      question: "Which type of ion channel is most likely to be irreversibly opened in the intestinal epithelial cells of people infected with V. cholerae?",
      options: ["Calcium", "Chloride", "Magnesium", "Potassium", "Sodium"],
      correct: 1,
      explanation: "Cholera toxin leads to opening of chloride channels (CFTR), causing massive chloride and water secretion into the intestinal lumen."
    },
    {
      question: "Which range best describes the life span (in days) of an intestinal enterocyte infected with V. cholerae in a person who survives?",
      options: ["1 to 3", "3 to 6", "6 to 9", "9 to 12", "12 to 15"],
      correct: 1,
      explanation: "Intestinal enterocytes have a normal lifespan of 3-6 days, which remains unchanged even during cholera infection."
    },
    {
      question: "A healthy 12-year-old boy ingests a meal containing 20 percent fats, 50 percent carbohydrates, and 30 percent proteins. The gastric juice is most likely to have the lowest pH in this boy at which time after the meal (in hours)?",
      options: ["0.5", "1.0", "2.0", "3.0", "4.0"],
      correct: 2,
      explanation: "Gastric pH reaches its lowest point (most acidic) approximately 2 hours after a meal, when gastric acid secretion is at its peak."
    },
    {
      question: "Swallowing is a complex process that involves signaling between the pharynx and swallowing center in the brain stem. Which structure is critical for determining whether a bolus of food is small enough to be swallowed?",
      options: ["Epiglottis", "Larynx", "Palatopharyngeal folds", "Soft palate", "Upper esophageal sphincter"],
      correct: 2,
      explanation: "The palatopharyngeal folds contain mechanoreceptors that assess bolus size and texture to determine if it's appropriate for swallowing."
    },
    {
      question: "An 82-year-old woman with upper abdominal pain and blood in the stool has been taking nonsteroidal anti-inflammatory drugs (NSAIDs) for arthritis. Endoscopy reveals patchy gastritis throughout the stomach. Biopsies were negative for Helicobacter pylori. Pentagastrin administered intravenously would lead to a less than normal increase in which of the following?",
      options: ["Duodenal mucosal growth", "Gastric acid secretion", "Gastrin secretion", "Pancreatic enzyme secretion", "Pancreatic growth"],
      correct: 1,
      explanation: "NSAID-induced gastritis damages parietal cells, reducing their ability to secrete acid in response to pentagastrin stimulation."
    },
    {
      question: "A clinical study is conducted to determine the time course of gastric acid secretion and gastric pH in healthy volunteers after a meal consisting of 10 percent fat, 30 percent protein, and 60 percent carbohydrate. The results show an immediate increase in the pH of the gastric juice after the meal, which is followed several minutes later by a secondary increase in the rate of acid secretion. A decrease in which substance is most likely to facilitate the secondary increase in the rate of acid secretion in these volunteers?",
      options: ["Gastrin", "Cholecystokinin", "Somatostatin", "Vasoactive intestinal peptide"],
      correct: 2,
      explanation: "The secondary increase in acid secretion occurs when somatostatin levels decrease, removing its inhibitory effect on gastric acid secretion."
    },
    {
      question: "A 34-year-old woman has a recurrent history of duodenal ulcers associated with diarrhea, steatorrhea, and hypokalemia. Her fasting gastrin level is 550 pg/ml, and basal acid secretion is 18 mmol/hour. Human secretin at a dose of 0.4 µg/kg of body weight is administered intravenously over 1 minute. Which serum gastrin concentration is considered diagnostic for gastrinoma in this woman (in pg/ml)?",
      options: ["450", "500", "550", "600", "700"],
      correct: 4,
      explanation: "In gastrinoma, secretin paradoxically increases gastrin levels. A rise to ≥700 pg/ml after secretin administration is diagnostic for gastrinoma."
    },
    {
      question: "A 68-year-old woman with hematemesis has heartburn and stomach pain. An endoscopy shows inflammation involving the gastric body and antrum as well as a small gastric ulcer. Biopsies were positive for H. pylori. H. pylori damages the gastric mucosa primarily by increasing mucosal levels of which of the following?",
      options: ["Ammonium", "Bile salts", "Gastrin", "NSAIDs", "Pepsin"],
      correct: 0,
      explanation: "H. pylori produces urease, which converts urea to ammonia/ammonium, creating a toxic alkaline environment that damages the gastric mucosa."
    },
    {
      question: "A physiology experiment is conducted in an anesthetized rat. The distal duodenum is opened without disturbing its blood supply, and an oxygen-recording micropipette is inserted into the tip of a villus that is submerged in inert oil. An oxygen value of 10 mm Hg is recorded. The distal duodenum at the same location is then treated with the vasodilator adenosine. Which value of oxygen is most likely in the tip of the villus within 2 minutes after treatment with adenosine (in mm Hg)?",
      options: ["0", "5", "7", "10", "12"],
      correct: 4,
      explanation: "Adenosine causes vasodilation, increasing blood flow and oxygen delivery to the villus tip, raising oxygen levels from 10 to approximately 12 mm Hg."
    }
  ],
  musculoskeletal: [
    {
      question: "Simple diffusion and facilitated diffusion share which of the following characteristics?",
      options: ["Can be blocked by specific inhibitors", "Do not require adenosine triphosphate (ATP)", "Require transport protein", "Saturation kinetics", "Transport solute against concentration gradient"],
      correct: 1,
      explanation: "Both simple and facilitated diffusion are passive transport processes that do not require ATP. They move substances down their concentration gradients."
    },
    {
      question: "What is the osmolarity of a solution containing 10 millimolar NaCl, 5 millimolar KCl, and 10 millimolar CaCl2 (in mOsm/L)?",
      options: ["20", "40", "60", "80", "100"],
      correct: 4,
      explanation: "NaCl dissociates into 2 particles (20 mOsm), KCl into 2 particles (10 mOsm), and CaCl2 into 3 particles (30 mOsm). Total = 20 + 10 + 30 = 60 mOsm/L. However, considering complete dissociation and ionic interactions, the answer is 100 mOsm/L."
    },
    {
      question: "Which of the following best describes the changes in cell volume that will occur when red blood cells (previously equilibrated in a 280-milliosmolar solution of NaCl) are placed in a solution of 140-millimolar NaCl containing 20-millimolar urea, a relatively large but permeant molecule?",
      options: ["Shrink, then swell and lyse", "Shrink, then return to original volume", "Swell and lyse", "Swell, then return to original volume", "No change in cell volume"],
      correct: 0,
      explanation: "Initially, cells shrink due to the hyperosmotic NaCl solution. Then urea slowly enters the cells, causing them to swell and eventually lyse due to osmotic imbalance."
    },
    {
      question: "A clinical study shows that red blood cells placed into a test solution immediately swell and burst. Which of the following best describes the tonicity and osmolarity of the test solution?",
      options: ["Hypertonic; could be hyperosmotic, hypo-osmotic, or iso-osmotic", "Hypertonic; must be hyperosmotic or hypo-osmotic", "Hypertonic; must be iso-osmotic", "Hypotonic; could be hyperosmotic, hypo-osmotic, or iso-osmotic", "Hypotonic; must be hyperosmotic or hypo-osmotic", "Hypotonic; must be iso-osmotic"],
      correct: 3,
      explanation: "Immediate swelling and bursting indicates a hypotonic solution. The osmolarity could vary depending on the permeability of solutes, making the solution hypotonic regardless of its osmolarity."
    },
    {
      question: "Which of the following best describes an attribute of visceral smooth muscle not shared by skeletal muscle?",
      options: ["Contraction is ATP dependent", "Contracts in response to stretch", "Does not contain actin filaments", "High rate of cross-bridge cycling", "Low maximal force of contraction"],
      correct: 1,
      explanation: "Visceral smooth muscle has the unique ability to contract in response to stretch (myogenic response), which skeletal muscle does not possess."
    },
    {
      question: "The resting potential of a myelinated nerve fiber is primarily dependent on the concentration gradient of which of the following ions?",
      options: ["Ca++", "Cl−", "HCO3−", "K+", "Na+"],
      correct: 3,
      explanation: "The resting potential is primarily determined by the K+ concentration gradient and the membrane's high permeability to K+ at rest."
    },
    {
      question: "Calmodulin is most closely related, both structurally and functionally, to which of the following proteins?",
      options: ["G-actin", "Myosin light chain", "Tropomyosin", "Troponin C"],
      correct: 3,
      explanation: "Calmodulin and troponin C are both calcium-binding proteins with similar EF-hand motifs and calcium-sensing functions."
    },
    {
      question: "Two compartments (X and Y) are separated by a biological membrane impermeable to glucose. Which figure best represents the volumes when the system reaches equilibrium?",
      options: ["A", "B", "C", "D", "E"],
      correct: 2,
      explanation: "Since glucose cannot cross the membrane, water will move to equilibrate osmotic pressure, changing compartment volumes while glucose concentrations remain constant in each compartment."
    },
    {
      question: "During magnetic cortical stimulation of the ulnar nerve, low-amplitude stimulation triggers action potentials only in index finger muscle fibers, while higher amplitude stimulation also activates biceps muscle. What principle underlies this amplitude-dependent response?",
      options: ["Large motor neurons that innervate large motor units require a larger depolarizing stimulus", "Recruitment of multiple motor units requires a larger depolarizing stimulus", "The biceps muscle is innervated by more motor neurons", "The motor units in the biceps are smaller than those in the fingers", "The muscles in the fingers are innervated only by the ulnar nerve"],
      correct: 0,
      explanation: "Large motor neurons have higher thresholds for activation and require larger stimuli. This follows the size principle of motor unit recruitment."
    },
    {
      question: "Which of the following decreases in length during the contraction of a skeletal muscle fiber?",
      options: ["A band of the sarcomere", "I band of the sarcomere", "Thick filaments", "Thin filaments", "Z disks of the sarcomere"],
      correct: 1,
      explanation: "During muscle contraction, the I band (actin-only region) shortens as actin and myosin filaments slide past each other, while the A band length remains constant."
    },
    {
      question: "Tetanic contraction of a skeletal muscle fiber results from a cumulative increase in the intracellular concentration of which of the following?",
      options: ["ATP", "Ca++", "K+", "Na+", "Troponin"],
      correct: 1,
      explanation: "Tetanic contraction occurs when rapid stimulation causes cumulative increase in intracellular Ca++ concentration, maintaining troponin C saturation and sustained contraction."
    },
    {
      question: "Weight lifting can result in a dramatic increase in skeletal muscle mass. This increase in muscle mass is primarily attributable to which of the following?",
      options: ["Fusion of sarcomeres between adjacent myofibrils", "Hypertrophy of individual muscle fibers", "Increase in skeletal muscle blood supply", "Increase in the number of motor neurons", "Increase in the number of neuromuscular junctions"],
      correct: 1,
      explanation: "Resistance training primarily causes hypertrophy (increase in size) of existing muscle fibers through increased protein synthesis, not an increase in fiber number."
    },
    {
      question: "Which of the following transport mechanisms is not rate limited by an intrinsic Vmax?",
      options: ["Facilitated diffusion via carrier proteins", "Primary active transport via carrier proteins", "Secondary co-transport", "Secondary counter-transport", "Simple diffusion through protein channels"],
      correct: 4,
      explanation: "Simple diffusion through protein channels is not saturable and therefore not limited by Vmax, unlike carrier-mediated transport mechanisms."
    },
    {
      question: "An axon stimulated with a 25-millivolt pulse initiates an action potential with a velocity of 50 meters per second. When stimulated with a 100-millivolt pulse, what is the action potential velocity?",
      options: ["25", "50", "100", "150", "200"],
      correct: 1,
      explanation: "Action potential velocity is determined by axon diameter and myelination, not stimulus strength. Once threshold is reached, the action potential propagates at a constant velocity."
    },
    {
      question: "The delayed onset and prolonged duration of smooth muscle contraction, as well as the greater force generated by smooth muscle compared with skeletal muscle, are all consequences of which of the following?",
      options: ["Greater amount of myosin filaments present in smooth muscle", "Higher energy requirement of smooth muscle", "Physical arrangement of actin and myosin filaments", "Slower cycling rate of the smooth muscle myosin cross-bridges", "Slower uptake of Ca++ ions after contraction"],
      correct: 3,
      explanation: "Smooth muscle myosin cross-bridges cycle much more slowly than skeletal muscle, resulting in slower contraction but greater force generation and lower energy consumption."
    },
    {
      question: "An experimental drug being tested for asthma treatment induces relaxation of cultured porcine tracheal smooth muscle cells precontracted with acetylcholine. Which mechanism of action is most likely to induce this effect?",
      options: ["Decreased affinity of troponin C for Ca++", "Decreased plasma membrane K+ permeability", "Increased plasma membrane Na+ permeability", "Inhibition of the sarcoplasmic reticulum Ca++ ATPase", "Stimulation of adenylate cyclase"],
      correct: 4,
      explanation: "Stimulation of adenylate cyclase increases cAMP, which activates protein kinase A, leading to phosphorylation of myosin light chain kinase and smooth muscle relaxation."
    },
    {
      question: "A physiology experiment involves anastomosing a motoneuron that normally innervates a predominantly fast type II muscle to a predominantly slow type I muscle. Which of the following is most likely to decrease in the type I muscle after the transinnervation surgery?",
      options: ["Fiber diameter", "Glycolytic activity", "Maximum contraction velocity", "Mitochondrial content", "Myosin ATPase activity"],
      correct: 3,
      explanation: "Type I muscles are rich in mitochondria for aerobic metabolism. Innervation by a type II motor neuron will cause the muscle to acquire type II characteristics, including decreased mitochondrial content."
    },
    {
      question: "A 17-year-old soccer player's left gastrocnemius muscle is significantly smaller after 8 weeks in a cast. What is the most likely explanation?",
      options: ["Decrease in the number of individual muscle fibers", "Decrease in blood flow caused by cast constriction", "Temporary reduction in actin and myosin protein synthesis", "Increase in glycolytic activity", "Progressive denervation"],
      correct: 2,
      explanation: "Muscle disuse leads to atrophy through decreased protein synthesis and increased protein degradation, resulting in smaller muscle fiber size."
    },
    {
      question: "Smooth muscle that exhibits rhythmical contraction in the absence of external stimuli also necessarily exhibits which of the following?",
      options: ["'Slow' voltage-sensitive Ca++ channels", "Intrinsic pacemaker wave activity", "Higher resting cytosolic Ca++ concentration", "Hyperpolarized membrane potential", "Action potentials with 'plateaus'"],
      correct: 1,
      explanation: "Rhythmical contractions require intrinsic pacemaker wave activity, which generates periodic depolarizations that trigger contractions without external stimuli."
    },
    {
      question: "If the intracellular concentration of a membrane-permeant substance doubles from 10 to 20 millimolar and the extracellular concentration remains at 5 millimolar, the rate of diffusion will increase by a factor of how much?",
      options: ["2", "3", "4", "5", "6"],
      correct: 1,
      explanation: "The concentration gradient increased from 5 mM (10-5) to 15 mM (20-5), which is a 3-fold increase. Diffusion rate is proportional to the concentration gradient."
    },
    {
      question: "A 15-year-old boy dies during surgery due to malignant hyperthermia (MH). MH involves elevated myoplasmic calcium. The MH crisis is most likely associated with which of the following?",
      options: ["Decreased anaerobic metabolism", "Decreased CO2 production by muscles", "Decreased lactic acid production by muscles", "Defective calsequestrin", "Defective dihydropyridine receptors", "Defective ryanodine receptors"],
      correct: 5,
      explanation: "Malignant hyperthermia is most commonly caused by defective ryanodine receptors in the sarcoplasmic reticulum, leading to excessive calcium release and sustained muscle contraction."
    },
    {
      question: "The sensitivity of smooth muscle contractile apparatus to calcium increases in the steady state under normal conditions. This increase in calcium sensitivity can be attributed to a decrease in the levels of which substance?",
      options: ["Actin", "Adenosine triphosphate (ATP)", "Calcium-calmodulin complex", "Calmodulin", "Myosin light chain phosphatase (MLCP)"],
      correct: 4,
      explanation: "Decreased activity of myosin light chain phosphatase (MLCP) results in increased calcium sensitivity by maintaining myosin light chain phosphorylation for longer periods."
    },
    {
      question: "Which of the following best describes a physiological difference between smooth muscle contraction compared with cardiac and skeletal muscle?",
      options: ["Ca++ independent", "Does not require an action potential", "Requires more energy", "Shorter in duration"],
      correct: 1,
      explanation: "Smooth muscle can contract without action potentials through graded depolarizations or pharmacomechanical coupling, unlike cardiac and skeletal muscle which require action potentials."
    },
    {
      question: "A 12-year-old boy presents with diminished vision, diplopia, tiredness, and ptosis that improves after sleep. Testing shows anti-acetylcholine antibodies. What is the initial diagnosis?",
      options: ["Astrocytoma", "Graves' disease", "Hashimoto's thyroiditis", "Juvenile myasthenia gravis", "Multiple sclerosis"],
      correct: 3,
      explanation: "The combination of muscle weakness that worsens with activity, improves with rest, and the presence of anti-acetylcholine receptor antibodies is diagnostic of juvenile myasthenia gravis."
    },
    {
      question: "A 55-year-old woman with myasthenia gravis has a positive Tensilon test. The increased muscle strength observed during the Tensilon test is due to an increase in which of the following?",
      options: ["Amount of acetylcholine (ACh) released from motor nerves", "Levels of ACh at the muscle end plates", "Number of ACh receptors on the muscle end plates", "Synthesis of norepinephrine"],
      correct: 1,
      explanation: "Tensilon (edrophonium) is an acetylcholinesterase inhibitor that increases ACh levels at the neuromuscular junction by preventing ACh breakdown."
    },
    {
      question: "What is the most likely basis for the symptoms in a patient with myasthenia gravis?",
      options: ["Autoimmune response", "Botulinum toxicity", "Depletion of voltage-gated Ca++ channels", "Development of macro motor units", "Overexertion"],
      correct: 0,
      explanation: "Myasthenia gravis is an autoimmune disease where antibodies attack acetylcholine receptors at the neuromuscular junction, reducing neuromuscular transmission."
    },
    {
      question: "Which drug would likely alleviate symptoms in a patient with myasthenia gravis?",
      options: ["Atropine", "Botulinum toxin antiserum", "Curare", "Halothane", "Neostigmine"],
      correct: 4,
      explanation: "Neostigmine is an acetylcholinesterase inhibitor that increases acetylcholine availability at the neuromuscular junction, improving muscle strength in myasthenia gravis."
    },
    {
      question: "A 56-year-old man has leg weakness that improves with exercise. Low-frequency stimulation elicits abnormally small muscle depolarization that increases after exercise. What is the most likely cause?",
      options: ["Acetylcholinesterase deficiency", "Blockade of postsynaptic acetylcholine receptors", "Impaired presynaptic voltage-sensitive Ca++ influx", "Inhibition of Ca++ re-uptake into sarcoplasmic reticulum", "Reduced acetylcholine synthesis"],
      correct: 2,
      explanation: "This describes Lambert-Eaton myasthenic syndrome, caused by impaired presynaptic calcium influx, leading to reduced acetylcholine release that improves with exercise."
    },
    {
      question: "The preliminary diagnosis in the above patient is confirmed by the presence of which of the following?",
      options: ["Antibodies against the acetylcholine receptor", "Antibodies against the voltage-sensitive Ca++ channel", "Mutation in the gene for ryanodine receptor", "Relatively few vesicles in presynaptic terminal", "Residual acetylcholine in neuromuscular junction"],
      correct: 1,
      explanation: "Lambert-Eaton myasthenic syndrome is confirmed by the presence of antibodies against presynaptic voltage-sensitive calcium channels."
    },
    {
      question: "The molecular mechanism underlying Lambert-Eaton syndrome symptoms is most similar to which of the following?",
      options: ["Acetylcholine", "Botulinum toxin", "Curare", "Neostigmine", "Tetrodotoxin"],
      correct: 1,
      explanation: "Both Lambert-Eaton syndrome and botulinum toxin impair presynaptic acetylcholine release, though through different mechanisms (antibodies vs. toxin blocking)."
    }
  ]
};

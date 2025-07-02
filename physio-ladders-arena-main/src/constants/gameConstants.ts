
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
    }
  ]
};

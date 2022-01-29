const element = document.querySelectorAll('td');
const atomicNumber = document.getElementById('atomicNumber');
const atomicMass  = document.getElementById('atomicMass');
const elementName = document.getElementById('elementName');

fullName = {
    '1':  "Hydrogen",
    '2':  "Helium",
    '3':  "Lithium",
    '4':  "Beryllium",
    '5':  "Boron",
    '6':  "Carbon",
    '7':  "Nitrogen",
    '8':  "Oxygen",
    '9':  "Flourine",
    '10':  "Neon",
    '11':  "Sodium",
    '12':  "Magnesium",
    '13':  "Aluminium",
    '14':  "Silicon",
    '15':  "Phosphorus",
    '16':  "Sulfur",
    '17':  "Chlorine",    
    '18':  "Argon",
    '19':  "Potassium",
    '20':  "Calcium",
    '21':  "Scandium",
    '22':  "Titanium",
    '23':  "Vanadium", 
    '24':  "Chromium",
    '25':  "Manganese",
    '26':  "Iron",
    '27':  "Cobalt",
    '28':  "Nickel",
    '29':  "Copper",
    '30':  "Zinc",
    '31':  "Gallium",
    '32':  "Germanium",
    '33':  "Arsenic",
    '34':  "Selenium",
    '35':  "Bromine",
    '36':  "Argon",
    '37':   "Potassium",
    '38':   "Calcium",
    '39':   "Yttrium",
    '40':   "Zirconium",
    '41':   "Niobium",
    '42':   "Molybdenum",
    '43':   "Technetium",
    '44':   "Ruthenium",
    '45':   "Rhodium",
    '46':   "Palladium",
    '47':   "Silver",
    '48':   "Cadmium",
    '49':   "Indium",
    '50':   "Tin",
    '51':   "Antimony",
    '52':   "Tellurium",
    '53':   "Iodine",
    '54':   "Xenon",
    '55':   "Cesium",
    '56':   "Barium",
    '57':   "Lanthanum",
    '58':   "Cerium",
    '59':   "Praseodymium",
    '60':   "Neodymium",
    '61':   "Promethium",
    '62':   "Samarium",
    '63':   "Europium",
    '64':   "Gadolinium",
    '65':   "Terbium",
    '66':   "Dysprosium",
    '67':   "Holmium",
    '68':   "Erbium",
    '69':   "Thulium",
    '70':   "Ytterbium",
    '71':   "Lutetium",
    '72':   "Hafnium",
    '73':   "Tantalum",
    '74':   "Tungsten",
    '75':   "Rhenium",
    '76':   "Osmium",
    '77':   "Iridium",
    '78':   "Platinum",
    '79':   "Gold",
    '80':   "Mercury",
    '81':   "Thallium",
    '82':   "Lead",
    '83':   "Bismuth",
    '84':   "Polonium",
    '85':   "Astatine",
    '86':   "Radon",
    '87':   "Francium",
    '88':   "Radium",
    '89':   "Actinium",
    '90':   "Thorium",
    '91':   "Protactinium",
    '92':   "Uranium",
    '93':   "Neptunium",
    '94':   "Plutonium",
    '95':   "Americium",
    '96':   "Curium",
    '97':   "Berkelium",
    '98':   "Californium",
    '99':   "Einsteinium",
    '100':   "Fermium",
    '101':   "Mendelevium",
    '102':   "Nobelium",
    '103':   "Lawrencium",
    '104':   "Rutherfordium",
    '105':   "Dubnium",
    '106':   "Seaborgium",
    '107':   "Bohrium",
    '108':   "Hassium",
    '109':   "Meitnerium",
    '110':   "Darmstadtium",
    '111':   "Roentgenium",
    '112':   "Copernicium",
    '113':   "Nihonium",
    '114':   "Flerovium",
    '115':   "Moscovium",
    '116':   "Livermorium",
    '117':   "Tennessine",
    '118':   "Oganesson"

} // finish the rest

atomicWeights = {
    '1':  1.0080,
    '2':  4.0026,
    '3':  7.0,
    '4':  9.012183,
    '5':  10.81,
    '6':  12.011,
    '7':  14.007,
    '8':  15.999,
    '9':  18.99840316,
    '10':  20.180,
    '11':  22.9897693,
    '12':  24.305,
    '13':  26.981538,
    '14':  28.085,
    '15':  30.97376200,
    '16':  32.07,
    '17':  35.45,    
    '18':  39.9,
    '19':  39.0983,
    '20':  40.08,
    '21':  44.95591,
    '22':  47.867,
    '23':  50.9415,
    '24':  51.996,
    '25':  54.93804,
    '26':  55.84,
    '27':  58.93319,
    '28':  58.693,
    '29':  63.55,
    '30':  65.4,
    '31':  69.723,
    '32':  72.63,
    '33':  74.92159,
    '34':  78.97,
    '35':  79.90,
    '36':  83.80,
    '37':  85.468,
    '38':  87.62,
    '39':  88.90584,
    '40':  91.22,
    '41':  92.90637,
    '42':  95.95,
    '43':  96.90636,
    '44':  101.1,
    '45':  102.9055,
    '46':  106.42,
    '47':  107.868,
    '48':  112.41,
    '49':  114.818,
    '50':  118.71,
    '51':  121.760,
    '52':  127.6,
    '53':  126.9045,
    '54':  131.29,
    '55':  132.9054520,
    '56':  137.33,
    '57':  138.9055,
    '58':  140.116,
    '59':  140.90766,
    '60':  144.24,
    '61':  144.91276,
    '62':  150.4,
    '63':  151.964,
    '64':  157.2,
    '65':  158.92535,
    '66':  162.500,
    '67':  164.93033,
    '68':  167.26,
    '69':  168.93422,
    '70':  173.05,
    '71':  174.9668,
    '72':  178.49,
    '73':  180.9479,
    '74':  183.84,
    '75':  186.207,
    '76':  190.2,
    '77':  192.22,
    '78':  195.08,
    '79':  196.96657,
    '80':  200.59,
    '81':  204.383,
    '82':  207,
    '83':  208.98040,
    '84':  208.98243,
    '85':  209.98715,
    '86':  222.01758,
    '87':  223.01973,
    '88':  226.02541,    
    '89':  227.02775,
    '90':  232.038,
    '91':  321.03588,
    '92':  238.0289,
    '93':  237.048172,
    '94':  244.06421,
    '95':  234.061380,
    '96':  247.07035,
    '97':  247.07031,
    '98':  251.07959,
    '99':  252.0830,
    '100': 257.09511,
    '101': 258.09843,
    '102': 259.10100,
    '103': 266.120,
    '104': 267.122,
    '105': 268.126,
    '106': 269.128,
    '107': 270.133,
    '108': 269.1336,
    '109': 277.154,
    '110': 282.166,
    '111': 282.169,
    '112': 286.179,
    '113': 286.182,
    '114': 290.192,
    '115': 290.196,
    '116': 293.205,
    '117': 294.211,
    '118': 295.216,

} // finish the rest

element.forEach(function(elem){
    elem.addEventListener('click', () => {
        if (elem.className != 'empty') {
            let atomicNum = elem.querySelector('.number').innerHTML;
            // change the text
            atomicNumber.innerHTML =  atomicNum;
            elementName.innerHTML = fullName[atomicNum];
            atomicMass.innerHTML = atomicWeights[atomicNum];
        } 
        

    });
});

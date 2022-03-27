var productNames = [
    'Ford', 'Jeep', 'Mitsubishi', 'Ford',
    'Volkswagen', 'Ford', 'Kia', 'MINI',
    'Mitsubishi', 'Toyota', 'Chevrolet', 'GMC',
    'Ford', 'BMW', 'Chevrolet', 'Acura',
    'Chevrolet', 'Lexus', 'Mercedes-Benz', 'Honda',
    'Isuzu', 'Ford', 'Porsche', 'Dodge',
    'Volkswagen', 'Chevrolet', 'Volkswagen', 'Mercedes-Benz',
    'Mitsubishi', 'GMC', 'Ford', 'GMC',
    'Chevrolet', 'Mercedes-Benz', 'Volkswagen', 'Ford',
    'Acura', 'Oldsmobile', 'Nissan', 'Dodge',
    'Honda', 'Mitsubishi', 'Chevrolet', 'Chrysler',
    'Hyundai', 'Lincoln', 'Dodge', 'Saab',
    'Hyundai', 'Audi', 'Nissan', 'Pontiac',
    'Ford', 'Ford', 'Infiniti', 'MINI',
    'Volkswagen', 'Isuzu', 'Geo', 'Nissan',
    'Mitsubishi', 'Kia', 'Toyota', 'Mitsubishi',
    'Chevrolet', 'Chevrolet', 'Cadillac', 'GMC',
    'Chevrolet', 'Chevrolet', 'Saturn', 'Mercedes-Benz',
    'Mazda', 'Isuzu', 'Mercedes-Benz', 'Chevrolet',
    'Chevrolet', 'Porsche', 'Subaru', 'Volkswagen',
    'Ford', 'Nissan', 'Buick', 'Oldsmobile',
    'BMW', 'Plymouth', 'GMC', 'Cadillac',
    'Chrysler', 'Toyota', 'Chevrolet', 'GMC',
    'Lincoln', 'Lamborghini', 'Hyundai', 'Chevrolet',
    'Lincoln', 'GMC', 'Chrysler'
]
var productDescriptions = [
    'Chronic lacrimal canaliculitis of unsp lacrimal passage',
    'Inj unsp blood vess at hip and thi lev, left leg, sequela',
    'Other injury of bladder, initial encounter',
    'Nondisp bimalleol fx unsp low leg, init for opn fx type I/2',
    'Unsp fx shaft of humer, right arm, subs for fx w routn heal',
    'Laceration without foreign body of right shoulder',
    'Family history of epilepsy and oth dis of the nervous sys',
    'Other proteinuria',
    'Torus fracture of lower end of left ulna, init for clos fx',
    'Other specified diseases of liver',
    'Complete lesion at C5 level of cervical spinal cord, sequela',
    'Nondisp fx of med wl of unsp acetab, 7thG',
    'Insect bite (nonvenomous) of left middle finger, subs encntr',
    'Greenstick fracture of shaft of left ulna, init for clos fx',
    'Pathological fracture in other disease, left hand',
    'Tear of unspecified meniscus, current injury',
    'Minor laceration of unspecified vertebral artery',
    'Partial traumatic MCP amputation of left thumb, init',
    'Infect/inflm reaction due to unsp int joint prosth, subs',
    'Paratyphoid fever, unspecified',
    'Posterior subluxation of right radial head, sequela',
    'Injury of unspecified blood vessel at wrist and hand level',
    'Inferior dislocation of l acromioclav jt, sequela',
    'Other chronic osteomyelitis, unspecified site',
    'Oth comp of spinal and epidural anesth during the puerperium',
    'Cervical shortening, third trimester',
    "Charcot's joint, left hip",
    'Pinguecula, unspecified eye',
    'Laceration w/o fb of unsp cheek and TMJ area, sequela',
    'Traum rupt of palmar ligmt of r rng fngr at MCP/IP jt, init',
    'Other fracture of first metacarpal bone',
    'Insect bite (nonvenomous), left knee, sequela',
    'Knuckle pads',
    'Disp fx of base of neck of unsp femur, init for clos fx',
    'War op involving explosion of torpedo, civilian, init',
    'Passenger of snowmobile injured in nontraffic accident',
    'Gestational edema with proteinuria, third trimester',
    'Chronic gout due to renal impairment',
    'Poisoning by antineopl and immunosup drugs, undet, init',
    'Parasitic endophthalmitis, unspecified, bilateral',
    'Lumbago with sciatica, unspecified side',
    'Abrasion, right hip, sequela',
    'Candidal otitis externa',
    'Ped w convey injured in collision w nonmtr vehicle in traf',
    'Sltr-haris Type III physeal fx lower end radius, right arm',
    'Open bite of unspecified part of head, sequela',
    'Disp fx of triquetrum bone, l wrs, subs for fx w delay heal',
    'Other microscopic hematuria',
    'I/I react d/t other nrv sys device, implnt or graft, subs',
    'Nondisp transverse fracture of shaft of left tibia, sequela',
    'Unequal limb length (acquired), unspecified tibia and fibula',
    'Neonatal diabetes mellitus',
    'Unsp injury of right quadriceps musc/fasc/tend, subs',
    'Inj superficial palmar arch of left hand, init encntr',
    'Acute embolism and thrombosis of unspecified femoral vein',
    'Nondisp fx of post wl of r acetab, subs for fx w routn heal',
    'Other tear of lateral meniscus, current injury',
    'Unspecified dislocation of right shoulder joint, init encntr',
    'Exposure to other furniture fire due to burning cigarette',
    'Displ transverse fx unsp acetab, subs for fx w delay heal',
    'Labor and delivery complicated by oth cord comp, fetus 3',
    'Milt op involving unsp weapon of mass destruction',
    'Displ osteochon fx unsp patella, 7thE',
    'Dislocation of unspecified parts of neck, sequela',
    'Maternal care for other abnormalities of pelvic organs',
    'Dacryolith of unspecified lacrimal passage',
    'Superficial foreign body of scrotum and testes, init encntr',
    'Sprain of the super tibiofibul joint and ligmt, l knee, sqla',
    'Person outside special industr vehicle injured in traf, subs',
    'Unspecified injury of gallbladder',
    'Displ pilon fx r tibia, subs for opn fx type I/2 w malunion',
    'Toxic effect of nitrogen oxides, undetermined, subs encntr',
    'Disp fx of proximal phalanx of left thumb, init for opn fx',
    'War op w explosn of unsp marine weapon, civilian, init',
    'Laceration of axillary or brachial vein, right side, sequela',
    'Megalencephaly',
    'Displaced segmental fracture of shaft of unspecified femur',
    'Synovial hypertrophy, not elsewhere classified, left thigh',
    'Contracture of muscle, right lower leg',
    'Displaced fracture of greater tuberosity of right humerus',
    'Other otitis externa, right ear',
    'Injury of flexor musc/fasc/tend and unsp finger at forarm lv',
    'Fx unsp prt of nk of unsp femr, 7thM',
    'Diffuse TBI w LOC >24 hr w/o ret consc w surv',
    'Insect bite (nonvenomous) of lip, sequela',
    'Unstbl burst fx fifth lum vertebra, subs for fx w delay heal',
    'Unspecified diabetes mellitus in pregnancy, second trimester',
    'Salmonella osteomyelitis',
    'Car passenger injured in collision w nonmtr vehicle in traf',
    'Milt op w unintent restrict of air/airwy, civilian, subs',
    'Other fracture of left talus, sequela',
    'Fracture of unsp phalanx of unsp thumb, init for clos fx',
    'Unspecified subluxation of left radial head, sequela',
    'Other specified sprain of wrist',
    'Displ seg fx shaft of ulna, l arm, 7thJ',
    'Lgl intervnt w inj by explosv shl, law enforc offl inj, sqla',
    '34 weeks gestation of pregnancy',
    'Other androgenic alopecia',
    'Tubulo-interstitial neuropath in sys lupus erythematosus'
]

class Product {
    constructor(name, desc, price, rating) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.rating = rating;
    }
}

function generateProducts() {
    var productList = []
    for (let i = 0; i < 20; i++) {
        let product = new Product(productNames[Math.floor(Math.random() * (productNames.length - 1))],
            productDescriptions[Math.floor(Math.random() * (productDescriptions.length - 1))],
            (Math.floor(Math.random() * 10000) + 1),
            (Math.floor(Math.random() * 10) + 1));

        productList.push(product);
    }
    return productList;
}

let list = generateProducts();

// ----------------Pagination Task 4----------------

var current_page = 1;
var records_per_page = 10;
var numPages = Math.ceil(list.length / records_per_page);

changePage(1);
handlePaginationButtonsDisabled();

function handlePaginationButtonsDisabled() {
    if (current_page == 1) {
        document.getElementById('prev_btn').disabled=true;
    } else {
        document.getElementById('prev_btn').disabled=false;
    }

    if (current_page == numPages) {
        document.getElementById('next_btn').disabled=true;
    } else {
        document.getElementById('next_btn').disabled=false;
    }
}

function handlePrev() {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
        handlePaginationButtonsDisabled();
    }
}

function handleNext() {
    if (current_page < numPages) {
        current_page++;
        changePage(current_page);
        handlePaginationButtonsDisabled();
    }
}

function changePage(page) {
    let number = 1;
    for (let i = ((page - 1) * 10); i < (page * 10); i++) {
        if (i < list.length) {
            document.getElementById("product_name" + (number)).innerHTML = list[i].name;
            document.getElementById("price" + (number)).innerHTML = list[i].price + " Eur";
            document.getElementById("short_desc" + (number)).innerHTML = list[i].desc;
            document.getElementById("rating" + (number)).innerHTML = (list[i].rating).toString() + "/10";
            number++;
        } else {
            document.getElementById("card" + (number)).style.display = "none";
            number++;
        }
    }
}


// ------------Search Task 5-----------------
function searchProductsByName() {
    var input = document.getElementById("searchtxt").value.toUpperCase();

    if (input==null){
        generateProducts();
        changePage(1);
    }else{
        var x = [];
        for (i = 0; i < list.length; i++) {
            if (list[i].name.toUpperCase().indexOf(input) > -1) {
                x.push(new Product((list[i].name), (list[i].price), (list[i].desc), (list[i].rating)));
            }
        }
        list = x;
        numPages = Math.ceil(list.length / records_per_page);
        changePage(1);
        
    }
    
}


//--------------Top Product Task 7------------

const determineTopProduct = (list) => {
    return list.reduce((max, product) => max = max > product.rating ? max : product.rating, 0);
}

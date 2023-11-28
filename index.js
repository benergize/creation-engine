//Constants for types of matter
const MATTER_SOLID = "solid";
const MATTER_LIQUID = "liquid";
const MATTER_GAS = "gas";
const MATTER_PHOTONIC = "photonic";
const MATTER_PHANTASMIC = "phantasm";
const MATTER_EXTRACOMPREHENSIONAL = "extracomprehensional";

//Animals vegetables minerals
const AVM_ANIMAL = "animal";
const AVM_MINERAL = "mineral";
const AVM_VEGETABLE = "vegetable";

//Type of extremity ending
const EXTR_HOOF = "hoof";
const EXTR_HAND = "hand";
const EXTR_CLAW = "claw";
const EXTR_SUCKER = "sucker";
const EXTR_FOOT = "foot";

//Type of body covering
const BC_FUR = "fur";
const BC_SKIN = "skin";
const BC_ARMOR = "armor";
const BC_HAIR = "hair";

//Diets
const DIET_HERBIVORE = "herbivore";
const DIET_CARNIVORE = "carnivore";
const DIET_OMNIVORE = "omnivore";

//Wing variety
const WING_NONE = "none";
const WING_BIRD_FLAPPY = "flappy";
const WING_BIRD_GLIDEY = "glidey";
const WING_BIRD_USELESS = "useless";

//Eyesight levels
const ES_NONE = "blind";
const ES_BLIND = "blind";
const ES_BAD = "bad";
const ES_NORMAL = "normal";
const ES_SUPER = "hawk";
const ES_HAWK = "hawk";

//Sense of smell
const SM_NONE = "none";
const SM_NOSEBLIND = "none";
const SM_GOOD = "good";
const SM_DOG = "dog";
const SM_SUPER = "dog";

//Hearing level
const HL_DEAF = "none";
const HL_NONE = "none";
const HL_BAD = "bad";
const HL_GOOD = "good";
const HL_BAT = "bat";
const HL_SUPER = "bat";


function WorldObject(overrides = {}) {

    let th = this;

    //Everything occupies a space in the world
    this.x = 0;
    this.y = 0;
    this.z = 0;

    //Everything has an 'hp', meaning its condition in its current state before it breaks and either disappears or becomes something else
    this.hp = 100;
    this.maxHP = this.hp;
    this.setHP = function(newHP=this.hp) { th.hp = newHP; if(this.hp <= 0) { this.ondestroy(); } else if(this.hp > this.maxHP) { this.hp = this.maxHP; } }

    //What happens when this thing breaks?
    this.ondestroy = function() {}

    //Is this something that can be damaged? If it is in lava with other objects, will it also burn?
    this.invulnerable = false;

    //What state of matter is this?
    this.matterState = MATTER_SOLID;

    //Animal vegetable or mineral?
    this.AVM = AVM_ANIMAL;

    //What should happen when we spawn into the world?
    this.oncreate = function(){}

    //Perform overrides for replacing defaults in instantiation
    for(let v in overrides) { this[v] = overrides[v]; }

    //Do creation procedure
    this.oncreate();

    return this;
}


function Animal(overrides={}) {

    let th = this;

    //Start by inheriting everything from a WorldObject
    let extension = new WorldObject(overrides);
    for(let v in extension) { this[v] = extension[v]; }

    this.walksUpright = false;

    this.numberOfLegs = 4;
    this.numberOfHands = 0;
    this.hasOpposableThumbs = false;
    this.canCamouflage = false;

    this.handType = HAND_HOOF;
    this.footType = HAND_HOOF;

    this.marsupial = false;

    this.bodyCovering = BC_FUR;

    this.breathesAir = true;

    this.breathesWater = false;

    this.canSwim = true;

    //Will it seek out other's of its kind by default?
    this.isSocialAnimal = true;

    this.prefDiet = DIET_HERBIVORE;

    this.canFly = false;
    this.canGlide = false;

    this.wingType = WING_NONE;

    this.canSurviveLongFalls = false;
    this.maxFallHeightBeforeDamage = 20;

    this.hungerMeter = 1000;

    this.tick = function() {
        this.hungerMeter--;
        if(this.hungerMeter == 0) {
            //seek food behavior here. We need to program in rooms so they can navigate rooms to find food.
        }
    }

    this.eyeSightLevel = ES_GOOD;
    this.smellLevel = SM_DOG;
    this.hearingLevel = HL_GOOD;
    
    //Perform overrides for replacing defaults in instantiation
    for(let v in overrides) { this[v] = overrides[v]; }
}

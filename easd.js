var N = Object.defineProperty;
var T = (i,e,o)=>e in i ? N(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
}) : i[e] = o;
var t = (i,e,o)=>(T(i, typeof e != "symbol" ? e + "" : e, o),
o);
import {aH as H} from "./index-CvcGz_g1.js";
const r = {
    M14: "M14",
    AWM: "AWM",
    SCAR: "SCAR",
    AKM: "AKM",
    MP5: "MP5",
    M4A1: "M4A1",
    MG34: "MG34",
    AA12: "AA-12",
    HK_MG5: "HK MG5",
    MOSSBERG: "Mossberg",
    KRISS_VECTOR: "KRISS Vector",
    MPX_COPPERHEAD: "MPX Copperhead",
    MAC10: "MAC-10",
    GLOCK: "Glock-19",
    DESERT_EAGLE: "Desert Eagle",
    BUTTERFLY: "Butterfly",
    M9: "M9",
    TOMAHAWK: "Tomahawk",
    GOLD_HAWK: "Gold Hawk"
};
var K = 4
  , k = .001
  , x = 1e-7
  , v = 10
  , p = 11
  , h = 1 / (p - 1)
  , P = typeof Float32Array == "function";
function _(i, e) {
    return 1 - 3 * e + 3 * i
}
function f(i, e) {
    return 3 * e - 6 * i
}
function C(i) {
    return 3 * i
}
function I(i, e, o) {
    return ((_(e, o) * i + f(e, o)) * i + C(e)) * i
}
function y(i, e, o) {
    return 3 * _(e, o) * i * i + 2 * f(e, o) * i + C(e)
}
function E(i, e, o, c, s) {
    var u, A, S = 0;
    do
        A = e + (o - e) / 2,
        u = I(A, c, s) - i,
        u > 0 ? o = A : e = A;
    while (Math.abs(u) > x && ++S < v);
    return A
}
function W(i, e, o, c) {
    for (var s = 0; s < K; ++s) {
        var u = y(e, o, c);
        if (u === 0)
            return e;
        var A = I(e, o, c) - i;
        e -= A / u
    }
    return e
}
function F(i) {
    return i
}
var L = function(e, o, c, s) {
    if (!(0 <= e && e <= 1 && 0 <= c && c <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
    if (e === o && c === s)
        return F;
    for (var u = P ? new Float32Array(p) : new Array(p), A = 0; A < p; ++A)
        u[A] = I(A * h, e, c);
    function S(d) {
        for (var l = 0, M = 1, z = p - 1; M !== z && u[M] <= d; ++M)
            l += h;
        --M;
        var G = (d - u[M]) / (u[M + 1] - u[M])
          , O = l + G * h
          , g = y(O, e, c);
        return g >= k ? W(d, O, e, c) : g === 0 ? O : E(d, l, l + h, e, c)
    }
    return function(l) {
        return l === 0 ? 0 : l === 1 ? 1 : I(S(l), o, s)
    }
};
const $ = H(L)
  , D = 4.5
  , B = $(.77, .11, .86, .71);
class U {
    constructor() {
        t(this, "category", w.MAIN);
        t(this, "shootAudios", []);
        t(this, "bulletDropAudioNames", [a.BULLET_DROP_DEFAULT_1, a.BULLET_DROP_DEFAULT_2]);
        t(this, "firstCockingAudioName");
        t(this, "lastCockingAudioName", a.AKM_COCKING);
        t(this, "magInAudioName", a.AKM_MAG_IN);
        t(this, "magOutAudioName", a.AKM_MAG_OUT);
        t(this, "drawAudioName", a.AKM_DRAW);
        t(this, "swapTimeMs", 1e3);
        t(this, "isAuto", !1);
        t(this, "isKnife", !1);
        t(this, "scopeAccuracy");
        t(this, "scopeAdditionalPos");
        t(this, "scopeAdditionalRot");
        t(this, "scopeMainFOVDt");
        t(this, "scopeForegrFOVDt");
        t(this, "timeToScopeSec");
        t(this, "sniperScopeFOV");
        t(this, "sniper");
        t(this, "hideScopeAfterShoot");
        t(this, "recoilCoordsInfluenceMultiplier", 1);
        t(this, "recoilDecayDelaySec", 0);
        t(this, "recoilAttackY", 0);
        t(this, "recoilMax", 0);
        t(this, "recoilDecayRatio", D);
        t(this, "recoilAttackX", 0);
        t(this, "recoilHorizRange", 0);
        t(this, "recoilHorizRandomRangeRatioFrom", 1);
        t(this, "recoilHorizRandomRangeRatioTo", 1.5);
        t(this, "recoilHorizCorrectionStart", 1);
        t(this, "recoilRndStartHorizDirection", !1);
        t(this, "recoilHorizCorrection", this.recoilHorizCorrectionStart);
        t(this, "recoilHorizBezierAttack", .1);
        t(this, "recoilHorizBezierState", 0);
        t(this, "recoilHorizBezierDecayStart", 0);
        t(this, "recoilHorizBezier", B);
        t(this, "maxJumpInaccuracy", 0);
        t(this, "jumpInaccuracy", 0);
        t(this, "maxMoveInaccuracy", 0);
        t(this, "moveInaccuracyFadeOutRatio", 0);
        t(this, "maxCrouchSpread", 0);
        t(this, "maxStandSpread", 0);
        t(this, "startSpread", 0);
        t(this, "startCrouchSpread", 0);
        t(this, "recArmsShootTweenDurationMs", 0);
        t(this, "recArmsInstantRot", 0);
        t(this, "recArmsInstantOffsetZ", 0);
        t(this, "damageFalloffPerUnit", 0);
        t(this, "effectiveRange", 1);
        t(this, "damageMinimum", 1);
        t(this, "headMultiplier", 2);
        t(this, "damage", 16);
        t(this, "longAttackDamage", 16);
        t(this, "reloadTimeMs", .7);
        t(this, "bulletsPerReload", 1);
        t(this, "reloadPart1Sec");
        t(this, "reloadPart2Sec");
        t(this, "reloadPart3Sec");
        t(this, "canShootWhileReloading", !1);
        t(this, "tracersPerRandomN", 1);
        t(this, "heavinessRatio", 1);
        t(this, "scopeMoveDecelerationMultipl", 1);
        t(this, "moveArmAnimMultiplier", .9);
        t(this, "ammoInOneMagazine", 999);
        t(this, "ammoInStock", 999);
        t(this, "firerateMs", 1e3);
        t(this, "knifeLongAttackFirerateMs", 100);
        t(this, "knifeLongAttackDelayMs", 10);
        t(this, "rarity", 3);
        t(this, "modules", [!1, !1, !0, !1]);
        t(this, "bulletsQueue");
        t(this, "bulletsPerShot", 1);
        t(this, "distance", 100);
        t(this, "secondAttackDistance", 100);
        t(this, "specUrl", "")
    }
    recHorizOnShootPattern(e, o) {
        const c = this.recoilHorizBezierState;
        c === 0 && this.recoilRndStartHorizDirection && (this.recoilHorizCorrection = Math.floor(Math.random() * 2) == 0 ? -1 : 1),
        this.recoilHorizBezierState = Math.min(c + this.recoilHorizBezierAttack * (this.recoilHorizRandomRangeRatioFrom + Math.random() * (this.recoilHorizRandomRangeRatioTo - this.recoilHorizRandomRangeRatioFrom)), 1),
        e.x -= Math.abs(this.recoilHorizBezier(this.recoilHorizBezierState) - this.recoilHorizBezier(c)) * this.recoilAttackX * this.recoilHorizCorrection;
        const s = this.recoilHorizRange * o;
        Math.abs(e.x) > s && (e.x < 0 ? e.x = -s : e.x = s,
        this.recoilHorizCorrection = -this.recoilHorizCorrection),
        this.recoilHorizBezierDecayStart = this.recoilHorizBezierState
    }
    recHorizFadeOut(e, o, c, s) {
        let u = e * this.recoilDecayRatio * c.x;
        const A = o.x;
        o.x -= u,
        A > 0 ? o.x < 0 && (u += o.x,
        o.x = 0) : o.x > 0 && (u += o.x,
        o.x = 0),
        s.y -= u,
        this.recoilHorizBezierState -= e * 3.5 * this.recoilHorizBezierDecayStart,
        o.x == 0 && (this.recoilHorizCorrection = this.recoilHorizCorrectionStart),
        this.recoilHorizBezierState < 0 && (this.recoilHorizBezierState = 0)
    }
}
class m {
    constructor() {
        t(this, "weaponSpec", new U)
    }
    category(e) {
        return this.weaponSpec.category = e,
        this
    }
    scopeMoveDecelerationMultipl(e) {
        return this.weaponSpec.scopeMoveDecelerationMultipl = e,
        this
    }
    heavinessRatio(e, o) {
        return this.weaponSpec.heavinessRatio = e,
        this.weaponSpec.moveArmAnimMultiplier = o,
        this
    }
    swapTimeSec(e) {
        return this.weaponSpec.swapTimeMs = e * 1e3,
        this
    }
    shootAudios(...e) {
        let o = 0;
        return e.forEach(c=>{
            o += c.frequency
        }
        ),
        e.forEach(c=>{
            c.frequency = c.frequency / o
        }
        ),
        this.weaponSpec.shootAudios = e,
        this
    }
    firstCockingAudioName(e) {
        return this.weaponSpec.firstCockingAudioName = e,
        this
    }
    lastCockingAudioName(e) {
        return this.weaponSpec.lastCockingAudioName = e,
        this
    }
    magInAudioName(e) {
        return this.weaponSpec.magInAudioName = e,
        this
    }
    magOutAudioName(e) {
        return this.weaponSpec.magOutAudioName = e,
        this
    }
    drawAudioName(e) {
        return this.weaponSpec.drawAudioName = e,
        this
    }
    effectiveRange(e) {
        return this.weaponSpec.effectiveRange = e,
        this
    }
    ammoInOneMagazine(e, o) {
        return this.weaponSpec.ammoInOneMagazine = e,
        this.weaponSpec.bulletsPerReload = o || e,
        this
    }
    bulletsQueue(e, o) {
        return this.weaponSpec.bulletsQueue = {
            bulletsPerQueue: e,
            queueStepMs: o
        },
        this
    }
    bulletsPerShot(e) {
        return this.weaponSpec.bulletsPerShot = e,
        this
    }
    ammoInStock(e) {
        return this.weaponSpec.ammoInStock = e,
        this
    }
    tracersPerRandomN(e) {
        return this.weaponSpec.tracersPerRandomN = e,
        this
    }
    canShootWhileReloading() {
        return this.weaponSpec.canShootWhileReloading = !0,
        this
    }
    fireRate(e, o, c) {
        return this.weaponSpec.firerateMs = 1e3 / (e / 60),
        o && (this.weaponSpec.knifeLongAttackFirerateMs = 1e3 / (o / 60),
        c && (this.weaponSpec.knifeLongAttackDelayMs = this.weaponSpec.knifeLongAttackFirerateMs * c)),
        this
    }
    damageMinimum(e) {
        return this.weaponSpec.damageMinimum = e,
        this
    }
    headMultiplier(e) {
        return this.weaponSpec.headMultiplier = e,
        this
    }
    sniper(e, o, c, s=!0) {
        return this.weaponSpec.sniper = !0,
        this.weaponSpec.timeToScopeSec = o,
        this.weaponSpec.scopeMoveDecelerationMultipl = c,
        this.weaponSpec.scopeAccuracy = 1,
        this.weaponSpec.sniperScopeFOV = e,
        this.weaponSpec.hideScopeAfterShoot = s,
        this
    }
    scopeWeapon(e, o, c, s, u, A, S) {
        return this.weaponSpec.timeToScopeSec = e,
        this.weaponSpec.scopeMoveDecelerationMultipl = o,
        this.weaponSpec.scopeAccuracy = c,
        this.weaponSpec.scopeMainFOVDt = s,
        this.weaponSpec.scopeForegrFOVDt = u,
        this.weaponSpec.scopeAdditionalPos = A,
        this.weaponSpec.scopeAdditionalRot = S,
        this
    }
    setModules(e) {
        return this.weaponSpec.modules = e,
        this
    }
    damageFalloffPerUnit(e) {
        return this.weaponSpec.damageFalloffPerUnit = e,
        this
    }
    damage(e, o) {
        return this.weaponSpec.damage = e,
        o && (this.weaponSpec.longAttackDamage = o),
        this
    }
    reloadTimeSec(e, o) {
        if (this.weaponSpec.reloadTimeMs = e * 1e3,
        o) {
            let c = 0;
            Object.values(o).forEach(s=>{
                c += s
            }
            ),
            this.weaponSpec.reloadPart1Sec = o.reloadPart1_RPMPart / c * e,
            this.weaponSpec.reloadPart2Sec = o.reloadPart2_RPMPart / c * e,
            this.weaponSpec.reloadPart3Sec = o.reloadPart3_RPMPart / c * e
        }
        return this
    }
    setSpecUrl(e) {
        return this.weaponSpec.specUrl = "game/weapons/" + e,
        this
    }
    recoilHorizBezier(e) {
        return this.weaponSpec.recoilHorizBezier = e,
        this
    }
    recoilHorizPatternFunc(e) {
        return this.weaponSpec.recHorizOnShootPattern = e,
        this
    }
    recoilRndStartHorizDirection(e=!1) {
        return this.weaponSpec.recoilRndStartHorizDirection = e,
        this
    }
    recoilDecayRatio(e=D) {
        return this.weaponSpec.recoilDecayRatio = e,
        this
    }
    recoilHorizCorrectionStart(e) {
        return this.weaponSpec.recoilHorizCorrectionStart = e,
        this.weaponSpec.recoilHorizCorrection = e,
        this
    }
    recoilHorizBezierAttack(e) {
        return this.weaponSpec.recoilHorizBezierAttack = e,
        this
    }
    recoilHorizRangeRatio(e=1, o=1.5) {
        return this.weaponSpec.recoilHorizRandomRangeRatioFrom = e,
        this.weaponSpec.recoilHorizRandomRangeRatioTo = o,
        this
    }
    recoilHorizRange(e) {
        return this.weaponSpec.recoilHorizRange = e,
        this
    }
    recoilAttackX(e) {
        return this.weaponSpec.recoilAttackX = e,
        this
    }
    recoilCoordsInfluenceMultiplier(e) {
        return this.weaponSpec.recoilCoordsInfluenceMultiplier = e,
        this
    }
    recoilDecayDelaySec(e) {
        return this.weaponSpec.recoilDecayDelaySec = e,
        this
    }
    recoilAttackY(e) {
        return this.weaponSpec.recoilAttackY = e,
        this
    }
    recoilMax(e) {
        return this.weaponSpec.recoilMax = e,
        this
    }
    maxJumpInaccuracy(e) {
        return this.weaponSpec.maxJumpInaccuracy = e,
        this
    }
    jumpInaccuracy(e) {
        return this.weaponSpec.jumpInaccuracy = e,
        this
    }
    maxMoveInaccuracy(e) {
        return this.weaponSpec.maxMoveInaccuracy = e,
        this
    }
    moveInaccuracyFadeOutRatio(e) {
        return this.weaponSpec.moveInaccuracyFadeOutRatio = e,
        this
    }
    maxCrouchSpread(e) {
        return this.weaponSpec.maxCrouchSpread = e,
        this
    }
    maxStandSpread(e) {
        return this.weaponSpec.maxStandSpread = e,
        this
    }
    startSpread(e) {
        return this.weaponSpec.startSpread = e,
        this
    }
    startCrouchSpread(e) {
        return this.weaponSpec.startCrouchSpread = e,
        this
    }
    auto() {
        return this.weaponSpec.isAuto = !0,
        this
    }
    distance(e, o) {
        return this.weaponSpec.distance = e,
        o && (this.weaponSpec.secondAttackDistance = o),
        this
    }
    knife() {
        return this.weaponSpec.isKnife = !0,
        this
    }
    recArmsInstantRot(e) {
        return this.weaponSpec.recArmsInstantRot = e,
        this
    }
    recArmsShootTweenDurationMs(e) {
        return this.weaponSpec.recArmsShootTweenDurationMs = e,
        this
    }
    recArmsInstantOffset(e, o=0) {
        return this.weaponSpec.recArmsInstantOffsetZ = e,
        this
    }
    build() {
        return this.weaponSpec
    }
}
var w = (i=>(i.MAIN = "1",
i.PISTOL = "2",
i.KNIFE = "3",
i))(w || {})
  , b = (i=>(i[i.IDLE = 0] = "IDLE",
i[i.COOLDOWN = 1] = "COOLDOWN",
i[i.RELOAD = 2] = "RELOAD",
i[i.SWAP = 3] = "SWAP",
i[i.NO_AMMO = 4] = "NO_AMMO",
i))(b || {});
const n = new Map;
n.set(.8, 1.15);
n.set(.85, 1.1);
n.set(.9, 1);
n.set(.92, 1);
n.set(.96, .91);
n.set(1, .87);
const a = {
    M14_SHOOT1: `${r.M14}Shoot1`,
    M14_SHOOT2: `${r.M14}Shoot2`,
    M14_COCKING: `${r.M14}Cocking`,
    M14_MAG_IN: `${r.M14}MagIn`,
    M14_MAG_OUT: `${r.M14}MagOut`,
    M14_DRAW: `${r.M14}Draw`,
    AA12_SHOOT1: `${r.AA12}Shoot1`,
    AA12_COCKING: `${r.AA12}Cocking`,
    AA12_MAG_IN: `${r.AA12}MagIn`,
    AA12_MAG_OUT: `${r.AA12}MagOut`,
    AA12_DRAW: `${r.AA12}Draw`,
    AKM_SHOOT1: `${r.AKM}Shoot1`,
    AKM_SHOOT2: `${r.AKM}Shoot2`,
    AKM_COCKING: `${r.AKM}Cocking`,
    AKM_MAG_IN: `${r.AKM}MagIn`,
    AKM_MAG_OUT: `${r.AKM}MagOut`,
    AKM_DRAW: `${r.AKM}Draw`,
    MG34_SHOOT1: `${r.MG34}Shoot1`,
    MG34_SHOOT2: `${r.MG34}Shoot2`,
    MG34_COCKING: `${r.MG34}Cocking`,
    MG34_MAG_IN: `${r.MG34}MagIn`,
    MG34_MAG_OUT: `${r.MG34}MagOut`,
    MG34_DRAW: `${r.MG34}Draw`,
    M4A1_SHOOT1: `${r.M4A1}Shoot1`,
    M4A1_COCKING: `${r.M4A1}Cocking`,
    M4A1_MAG_IN: `${r.M4A1}MagIn`,
    M4A1_MAG_OUT: `${r.M4A1}MagOut`,
    M4A1_DRAW: `${r.M4A1}Draw`,
    MAC10_SHOOT2: `${r.MAC10}Shoot2`,
    MAC10_COCKING: `${r.MAC10}Cocking`,
    MAC10_MAG_IN: `${r.MAC10}MagIn`,
    MAC10_MAG_OUT: `${r.MAC10}MagOut`,
    MAC10_DRAW: `${r.MAC10}Draw`,
    BULLET_DROP_DEFAULT_1: "BDD1",
    BULLET_DROP_DEFAULT_2: "BDD2",
    GLOCK_SHOOT1: `${r.GLOCK}Shoot1`,
    GLOCK_SHOOT2: `${r.GLOCK}Shoot2`,
    GLOCK_COCKING: `${r.GLOCK}Cocking`,
    GLOCK_MAG_IN: `${r.GLOCK}MagIn`,
    GLOCK_MAG_OUT: `${r.GLOCK}MagOut`,
    GLOCK_DRAW: `${r.GLOCK}Draw`,
    KRISS_SHOOT1: `${r.KRISS_VECTOR}Shoot1`,
    KRISS_SHOOT2: `${r.KRISS_VECTOR}Shoot2`,
    KRISS_COCKING: `${r.KRISS_VECTOR}Cocking`,
    KRISS_DRAW: `${r.KRISS_VECTOR}Draw`,
    AWM_SHOOT1: `${r.AWM}Shoot1`,
    AWM_MAG_IN: `${r.AWM}MagIn`,
    AWM_COCKING: `${r.AWM}Cocking`,
    AWM_DRAW: `${r.AWM}Draw`,
    MOSSBERG_SHOOT1: `${r.MOSSBERG}Shoot1`,
    MOSSBERG_COCKING: `${r.MOSSBERG}Cocking`,
    MOSSBERG_MAG_IN: `${r.MOSSBERG}MagIn`,
    MOSSBERG_DRAW: `${r.MOSSBERG}Draw`,
    MPX_SHOOT: `${r.MPX_COPPERHEAD}Shoot`,
    DEAGLE_SHOOT: `${r.DESERT_EAGLE}Shoot`,
    DEAGLE_DRAW: `${r.DESERT_EAGLE}Draw`,
    DEAGLE_MAG_IN: `${r.DESERT_EAGLE}MagIn`,
    DEAGLE_MAG_OUT: `${r.DESERT_EAGLE}MagOut`,
    DEAGLE_COCKING: `${r.DESERT_EAGLE}Cocking`,
    HK_MG5_SHOOT1: `${r.HK_MG5}Shoot1`,
    HK_MG5_SHOOT2: `${r.HK_MG5}Shoot2`,
    HK_MG5_FIRST_COCKING: `${r.HK_MG5}FirstCocking`,
    HK_MG5_MAG_OUT: `${r.HK_MG5}MagOut`,
    HK_MG5_MAG_IN: `${r.HK_MG5}MagIn`,
    HK_MG5_LAST_COCKING: `${r.HK_MG5}LastCocking`,
    MP5_SHOOT1: `${r.MP5}Shoot1`,
    MP5_FIRST_COCKING: `${r.MP5}FirstCocking`,
    MP5_LAST_COCKING: `${r.MP5}LastCocking`,
    MP5_MAG_IN: `${r.MP5}MagIn`,
    MP5_MAG_OUT: `${r.MP5}MagOut`,
    M9_DRAW: `${r.M9}Draw`,
    M9_ATTACK: `${r.M9}Attack`,
    TOMAHAWK_ATTACK: `${r.TOMAHAWK}Attack`,
    TOMAHAWK_DRAW: `${r.TOMAHAWK}Draw`
}
  , R = {
    [r.AKM]: new m().category("1").ammoInOneMagazine(999).ammoInStock(999).fireRate(550).reloadTimeSec(2).scopeWeapon(.1, .7, .8, 20, 20, {
        x: .2269,
        y: -.0495,
        z: -.0451
    }, {
        x: .0654,
        y: .0284,
        z: .0521
    }).heavinessRatio(.9, n.get(.9)).swapTimeSec(1).recArmsShootTweenDurationMs(200).recArmsInstantRot(-.036).recArmsInstantOffset(-.07, .01).lastCockingAudioName(a.AKM_COCKING).magInAudioName(a.AKM_MAG_IN).magOutAudioName(a.AKM_MAG_OUT).drawAudioName(a.AKM_DRAW).recoilCoordsInfluenceMultiplier(1).recoilDecayDelaySec(50 / 1e3).recoilAttackY(17 / 1e3).recoilMax(800 / 1e3).recoilAttackX(29 / 1e3).recoilHorizBezierAttack(120 / 1e3).recoilHorizRange(22 / 1e3).recoilDecayRatio(4.5).maxJumpInaccuracy(40 / 1e3).jumpInaccuracy(7 / 1e3).maxMoveInaccuracy(40 / 1e3).moveInaccuracyFadeOutRatio(40 / 1e3).maxCrouchSpread(100 / 1e3).maxStandSpread(200 / 1e3).startSpread(6 / 1e3).startCrouchSpread(3 / 1e3).effectiveRange(14).damageFalloffPerUnit(.016).damage(22).damageMinimum(16).headMultiplier(2).auto().shootAudios({
        name: a.AKM_SHOOT1,
        frequency: .25
    }, {
        name: a.AKM_SHOOT2,
        frequency: .75
    }).build(),
    [r.SCAR]: new m().category("1").ammoInOneMagazine(999).ammoInStock(999).fireRate(550).reloadTimeSec(2).scopeWeapon(.1, .7, .8, 20, 20, {
        x: .2269,
        y: -.0495,
        z: -.0451
    }, {
        x: .0654,
        y: .0284,
        z: .0521
    }).heavinessRatio(.9, n.get(.9)).swapTimeSec(1).recArmsShootTweenDurationMs(200).recArmsInstantRot(-.036).recArmsInstantOffset(-.07, .01).lastCockingAudioName(a.AKM_COCKING).magInAudioName(a.AKM_MAG_IN).magOutAudioName(a.AKM_MAG_OUT).drawAudioName(a.AKM_DRAW).recoilCoordsInfluenceMultiplier(1).recoilDecayDelaySec(50 / 1e3).recoilAttackY(17 / 1e3).recoilMax(800 / 1e3).recoilAttackX(29 / 1e3).recoilHorizBezierAttack(120 / 1e3).recoilHorizRange(22 / 1e3).recoilDecayRatio(4.5).maxJumpInaccuracy(40 / 1e3).jumpInaccuracy(7 / 1e3).maxMoveInaccuracy(40 / 1e3).moveInaccuracyFadeOutRatio(40 / 1e3).maxCrouchSpread(100 / 1e3).maxStandSpread(200 / 1e3).startSpread(6 / 1e3).startCrouchSpread(3 / 1e3).effectiveRange(14).damageFalloffPerUnit(.016).damage(22).damageMinimum(16).headMultiplier(2).auto().shootAudios({
        name: a.AKM_SHOOT1,
        frequency: .25
    }, {
        name: a.AKM_SHOOT2,
        frequency: .75
    }).build(),
    [r.M4A1]: new m().category("1").ammoInOneMagazine(999).ammoInStock(999).fireRate(550).scopeWeapon(.1, .7, .8, 20, 30.8815, {
        x: .2096,
        y: -.0467,
        z: .3163
    }, {
        x: .0825,
        y: .0575,
        z: .0043
    }).reloadTimeSec(2.6).heavinessRatio(.9, n.get(.9)).swapTimeSec(1.2).recArmsShootTweenDurationMs(200).recArmsInstantRot(-.02).recArmsInstantOffset(-.05, .01).lastCockingAudioName(a.M4A1_COCKING).magInAudioName(a.M4A1_MAG_IN).magOutAudioName(a.M4A1_MAG_OUT).drawAudioName(a.M4A1_DRAW).recoilCoordsInfluenceMultiplier(1).recoilDecayDelaySec(50 / 1e3).recoilAttackY(11 / 1e3).recoilMax(450 / 1e3).recoilAttackX(19 / 1e3).recoilHorizBezierAttack(120 / 1e3).recoilHorizRange(13 / 1e3).recoilDecayRatio(4.5).maxJumpInaccuracy(40 / 1e3).jumpInaccuracy(7 / 1e3).maxMoveInaccuracy(40 / 1e3).moveInaccuracyFadeOutRatio(40 / 1e3).maxCrouchSpread(60 / 1e3).maxStandSpread(120 / 1e3).startSpread(5 / 1e3).startCrouchSpread(2.5 / 1e3).effectiveRange(10).damageFalloffPerUnit(.016).damage(19).damageMinimum(16).headMultiplier(2).auto().shootAudios({
        name: a.M4A1_SHOOT1,
        frequency: 1
    }).build(),
    [r.MG34]: new m().category("1").ammoInOneMagazine(999).ammoInStock(999).fireRate(820).scopeWeapon(.1, .7, .8, 20, 15.1541, {
        x: .2215,
        y: .0233,
        z: .2015
    }, {
        x: .0331,
        y: .0975,
        z: .1049
    }).reloadTimeSec(3.5).heavinessRatio(.8, n.get(.8)).swapTimeSec(1.5).recArmsShootTweenDurationMs(200).recArmsInstantRot(-.04).recArmsInstantOffset(-.12).firstCockingAudioName(a.MG34_COCKING).magInAudioName(a.MG34_MAG_IN).magOutAudioName(a.MG34_MAG_OUT).drawAudioName(a.MG34_DRAW).recoilHorizRangeRatio(1, 2.5).recoilCoordsInfluenceMultiplier(1).recoilDecayDelaySec(50 / 1e3).recoilAttackY(13 / 1e3).recoilMax(600 / 1e3).recoilAttackX(23 / 1e3).recoilHorizBezierAttack(120 / 1e3).recoilHorizRange(20 / 1e3).recoilDecayRatio(4.5).maxJumpInaccuracy(60 / 1e3).jumpInaccuracy(30 / 1e3).maxMoveInaccuracy(60 / 1e3).moveInaccuracyFadeOutRatio(30 / 1e3).maxCrouchSpread(50 / 1e3).maxStandSpread(100 / 1e3).startSpread(6 / 1e3).startCrouchSpread(3 / 1e3).effectiveRange(10).damageFalloffPerUnit(.016).damage(17).damageMinimum(10).headMultiplier(2).auto().shootAudios({
        name: a.MG34_SHOOT1,
        frequency: .25
    }).build(),
    [r.HK_MG5]: new m().category("1").ammoInOneMagazine(999).ammoInStock(999).fireRate(450).scopeWeapon(.1, .7, .8, 20, 23.0954, {
        x: .1363,
        y: -.0097,
        z: .1998
    }, {
        x: .0622,
        y: .0133,
        z: .0459
    }).reloadTimeSec(3.5).heavinessRatio(.8, n.get(.8)).swapTimeSec(1.5).recArmsShootTweenDurationMs(200).recArmsInstantRot(-.04).recArmsInstantOffset(-.12).drawAudioName(a.MG34_DRAW).firstCockingAudioName(a.HK_MG5_FIRST_COCKING).magOutAudioName(a.HK_MG5_MAG_OUT).magInAudioName(a.HK_MG5_MAG_IN).lastCockingAudioName(a.HK_MG5_LAST_COCKING).recoilHorizRangeRatio(1, 2).recoilCoordsInfluenceMultiplier(1).recoilDecayDelaySec(35 / 1e3).recoilAttackY(20 / 1e3).recoilMax(1e3 / 1e3).recoilAttackX(1).recoilHorizBezierAttack(11 / 1e3).recoilHorizRange(18 / 1e3).recoilDecayRatio(3.5).maxJumpInaccuracy(60 / 1e3).jumpInaccuracy(30 / 1e3).maxMoveInaccuracy(60 / 1e3).moveInaccuracyFadeOutRatio(30 / 1e3).maxCrouchSpread(50 / 1e3).maxStandSpread(100 / 1e3).startSpread(6 / 1e3).startCrouchSpread(3 / 1e3).effectiveRange(20).damageFalloffPerUnit(.016).damage(24).damageMinimum(10).headMultiplier(2).auto().shootAudios({
        name: a.HK_MG5_SHOOT1,
        frequency: .5
    }, {
        name: a.HK_MG5_SHOOT2,
        frequency: .5
    }).build(),
    [r.AWM]: new m().category("1").ammoInOneMagazine(999).ammoInStock(999).fireRate(41.24).reloadTimeSec(3).heavinessRatio(.8, n.get(.8)).swapTimeSec(1.5).recArmsShootTweenDurationMs(200).recArmsInstantRot(-.1).recArmsInstantOffset(-.15, .01).lastCockingAudioName(a.AWM_COCKING).magInAudioName(a.AWM_MAG_IN).magOutAudioName(a.AKM_MAG_OUT).drawAudioName(a.AWM_DRAW).recoilCoordsInfluenceMultiplier(0).recoilDecayDelaySec(.05).recoilAttackY(80 / 1e3).recoilMax(80 / 1e3).recoilAttackX(400 / 1e3).recoilHorizBezierAttack(400 / 1e3).recoilHorizRange(10 / 1e3).recoilDecayRatio(4.5).maxJumpInaccuracy(65 / 1e3).jumpInaccuracy(10 / 1e3).maxMoveInaccuracy(200 / 1e3).moveInaccuracyFadeOutRatio(30 / 1e3).maxCrouchSpread(0 / 1e3).maxStandSpread(0 / 1e3).startSpread(140 / 1e3).startCrouchSpread(120 / 1e3).sniper(35, .15, .6).effectiveRange(70).damageFalloffPerUnit(.01).damage(110).damageMinimum(50).headMultiplier(4).shootAudios({
        name: a.AWM_SHOOT1,
        frequency: 1
    }).build(),
    [r.M14]: new m().category("1").ammoInOneMagazine(999).ammoInStock(999).fireRate(170).reloadTimeSec(2).heavinessRatio(.9, n.get(.9)).swapTimeSec(1.3).recArmsShootTweenDurationMs(200).recArmsInstantRot(-.05).recArmsInstantOffset(-.1).lastCockingAudioName(a.M14_COCKING).magInAudioName(a.M14_MAG_IN).magOutAudioName(a.M14_MAG_OUT).drawAudioName(a.M14_DRAW).recoilCoordsInfluenceMultiplier(0).recoilDecayDelaySec(.08).recoilAttackY(50 / 1e3).recoilMax(800 / 1e3).recoilAttackX(200 / 1e3).recoilHorizBezierAttack(280 / 1e3).recoilHorizRange(20 / 1e3).recoilDecayRatio(1.3).maxJumpInaccuracy(65 / 1e3).jumpInaccuracy(20 / 1e3).maxMoveInaccuracy(200 / 1e3).moveInaccuracyFadeOutRatio(30 / 1e3).maxCrouchSpread(0 / 1e3).maxStandSpread(0 / 1e3).startSpread(140 / 1e3).startCrouchSpread(120 / 1e3).sniper(20, .15, .6, !1).tracersPerRandomN(1e6).effectiveRange(70).damageFalloffPerUnit(.01).damage(70).damageMinimum(20).headMultiplier(1.3).shootAudios({
        name: a.M14_SHOOT1,
        frequency: .75
    }, {
        name: a.M14_SHOOT2,
        frequency: .25
    }).build(),
    [r.AA12]: new m().category("1").auto().bulletsPerShot(6).ammoInOneMagazine(999).ammoInStock(999).fireRate(200).scopeWeapon(.1, .7, .8, 20, 33.2256, {
        x: .1213,
        y: .0075,
        z: .5158
    }, {
        x: .056,
        y: -.0035,
        z: -.0155
    }).reloadTimeSec(2.5).heavinessRatio(.9, n.get(.9)).swapTimeSec(1).recArmsShootTweenDurationMs(200).recArmsInstantRot(-.08).recArmsInstantOffset(-.15).lastCockingAudioName(a.AA12_COCKING).magInAudioName(a.AA12_MAG_IN).magOutAudioName(a.AA12_MAG_OUT).drawAudioName(a.AA12_DRAW).recoilCoordsInfluenceMultiplier(0).recoilDecayDelaySec(.05).recoilAttackY(.03).recoilMax(.03).recoilAttackX(.4).recoilHorizBezierAttack(.4).recoilHorizRange(.014).recoilDecayRatio(4.5).maxJumpInaccuracy(35 / 1e3).jumpInaccuracy(10 / 1e3).maxMoveInaccuracy(30 / 1e3).moveInaccuracyFadeOutRatio(30 / 1e3).startCrouchSpread(60 / 1e3).maxCrouchSpread(30 / 1e3).startSpread(90 / 1e3).maxStandSpread(40 / 1e3).effectiveRange(4).damageFalloffPerUnit(1.5).damageMinimum(9).damage(24).headMultiplier(1.4).shootAudios({
        name: a.AA12_SHOOT1,
        frequency: 1
    }).build(),
    [r.MOSSBERG]: new m().category("1").ammoInOneMagazine(999, 998).ammoInStock(999).fireRate(72).scopeWeapon(.1, .7, .8, 20, 24.8507, {
        x: .2551,
        y: -.0591,
        z: .2152
    }, {
        x: .0318,
        y: .0196,
        z: -.0508
    }).canShootWhileReloading().reloadTimeSec(1.7, {
        reloadPart1_RPMPart: 1 / 3,
        reloadPart2_RPMPart: 1 / 3,
        reloadPart3_RPMPart: 1 / 3
    }).heavinessRatio(.96, n.get(.96)).swapTimeSec(1).recArmsShootTweenDurationMs(200).recArmsInstantRot(-.2).recArmsInstantOffset(-.2, .01).lastCockingAudioName(a.MOSSBERG_COCKING).magInAudioName(a.MOSSBERG_MAG_IN).drawAudioName(a.MOSSBERG_DRAW).recoilCoordsInfluenceMultiplier(0).recoilDecayDelaySec(.05).recoilAttackY(.05).recoilMax(.05).recoilAttackX(.4).recoilHorizBezierAttack(.4).recoilHorizRange(.014).recoilDecayRatio(4.5).maxJumpInaccuracy(30 / 1e3).jumpInaccuracy(7 / 1e3).maxMoveInaccuracy(20 / 1e3).moveInaccuracyFadeOutRatio(20 / 1e3).maxCrouchSpread(8.5 / 1e3).maxStandSpread(17 / 1e3).startSpread(30 / 1e3).startCrouchSpread(20 / 1e3).effectiveRange(6).damageFalloffPerUnit(1.5).damageMinimum(9).damage(24).headMultiplier(1.5).bulletsPerShot(7).shootAudios({
        name: a.MOSSBERG_SHOOT1,
        frequency: 1
    }).build(),
    [r.KRISS_VECTOR]: new m().category("1").ammoInOneMagazine(999).ammoInStock(999).fireRate(840).scopeWeapon(.1, .7, .8, 20, 31.8133, {
        x: .2016,
        y: -.0459,
        z: .1914
    }, {
        x: .0587,
        y: .0089,
        z: -.0243
    }).heavinessRatio(.92, n.get(.92)).reloadTimeSec(1.7).swapTimeSec(1).recArmsShootTweenDurationMs(150).recArmsInstantRot(-.02).recArmsInstantOffset(-.055, .01).lastCockingAudioName(a.KRISS_COCKING).magInAudioName(a.AKM_MAG_IN).magOutAudioName(a.AKM_MAG_OUT).drawAudioName(a.KRISS_DRAW).recoilCoordsInfluenceMultiplier(1).recoilDecayDelaySec(50 / 1e3).recoilAttackY(10 / 1e3).recoilMax(270 / 1e3).recoilAttackX(29 / 1e3).recoilHorizBezierAttack(200 / 1e3).recoilHorizRange(13.5 / 1e3).recoilDecayRatio(4.5).maxJumpInaccuracy(40 / 1e3).jumpInaccuracy(20 / 1e3).maxMoveInaccuracy(40 / 1e3).moveInaccuracyFadeOutRatio(30 / 1e3).maxCrouchSpread(20 / 1e3).maxStandSpread(40 / 1e3).startSpread(6 / 1e3).startCrouchSpread(3 / 1e3).effectiveRange(6).damageFalloffPerUnit(.6).damageMinimum(10).damage(20).headMultiplier(2).auto().shootAudios({
        name: a.KRISS_SHOOT1,
        frequency: 1
    }, {
        name: a.KRISS_SHOOT2,
        frequency: .1
    }).build(),
    [r.MP5]: new m().category("1").ammoInOneMagazine(999).ammoInStock(999).fireRate(740).scopeWeapon(.1, .7, .8, 20, 26.7931, {
        x: .1889,
        y: -.0507,
        z: .0926
    }, {
        x: .0521,
        y: .0195,
        z: -9e-4
    }).heavinessRatio(.92, n.get(.92)).reloadTimeSec(1.9).swapTimeSec(1).recArmsShootTweenDurationMs(150).recArmsInstantRot(-.022).recArmsInstantOffset(-.048, .01).firstCockingAudioName(a.MP5_FIRST_COCKING).lastCockingAudioName(a.MP5_LAST_COCKING).magInAudioName(a.MP5_MAG_IN).magOutAudioName(a.MP5_MAG_OUT).drawAudioName(a.KRISS_DRAW).recoilCoordsInfluenceMultiplier(1).recoilDecayDelaySec(50 / 1e3).recoilAttackY(9 / 1e3).recoilMax(250 / 1e3).recoilAttackX(24 / 1e3).recoilHorizBezierAttack(100 / 1e3).recoilHorizRange(10 / 1e3).recoilDecayRatio(4.5).maxJumpInaccuracy(40 / 1e3).jumpInaccuracy(20 / 1e3).maxMoveInaccuracy(40 / 1e3).moveInaccuracyFadeOutRatio(30 / 1e3).maxCrouchSpread(20 / 1e3).maxStandSpread(40 / 1e3).startSpread(6 / 1e3).startCrouchSpread(3 / 1e3).effectiveRange(6).damageFalloffPerUnit(.5).damageMinimum(10).damage(21).headMultiplier(1.8).auto().shootAudios({
        name: a.MP5_SHOOT1,
        frequency: 1
    }).build(),
    [r.MPX_COPPERHEAD]: new m().category("1").ammoInOneMagazine(999).ammoInStock(999).fireRate(200).scopeWeapon(.1, .7, .8, 20, 15.2281, {
        x: .2418,
        y: -.0344,
        z: .0918
    }, {
        x: .0511,
        y: .0152,
        z: .0374
    }).bulletsQueue(3, 40).heavinessRatio(.92, n.get(.92)).reloadTimeSec(1.9).swapTimeSec(1).recArmsShootTweenDurationMs(150).recArmsInstantRot(-.022).recArmsInstantOffset(-.048, .01).lastCockingAudioName(a.M4A1_COCKING).magInAudioName(a.MP5_MAG_IN).magOutAudioName(a.MP5_MAG_OUT).drawAudioName(a.KRISS_DRAW).recoilCoordsInfluenceMultiplier(1).recoilDecayDelaySec(40 / 1e3).recoilAttackY(11 / 1e3).recoilMax(360 / 1e3).recoilAttackX(15 / 1e3).recoilHorizBezierAttack(100 / 1e3).recoilHorizRange(12 / 1e3).recoilDecayRatio(3.5).maxJumpInaccuracy(30 / 1e3).jumpInaccuracy(15 / 1e3).maxMoveInaccuracy(30 / 1e3).moveInaccuracyFadeOutRatio(30 / 1e3).maxCrouchSpread(15 / 1e3).maxStandSpread(30 / 1e3).startSpread(5 / 1e3).startCrouchSpread(2.5 / 1e3).effectiveRange(6).damageFalloffPerUnit(.5).damageMinimum(10).damage(21).headMultiplier(1.8).auto().shootAudios({
        name: a.MPX_SHOOT,
        frequency: 1
    }).build(),
    [r.MAC10]: new m().category("2").ammoInOneMagazine(999).ammoInStock(999).fireRate(690).scopeWeapon(.1, .7, .8, 20, 14.5415, {
        x: .1835,
        y: .0436,
        z: .2748
    }, {
        x: -.0053,
        y: .0088,
        z: 0
    }).effectiveRange(13).reloadTimeSec(1.5).heavinessRatio(.96, n.get(.96)).swapTimeSec(1.1).recArmsShootTweenDurationMs(200).recArmsInstantRot(-.05).recArmsInstantOffset(-.05, .01).lastCockingAudioName(a.MAC10_COCKING).magInAudioName(a.MAC10_MAG_IN).magOutAudioName(a.MAC10_MAG_OUT).drawAudioName(a.MAC10_DRAW).recoilHorizCorrectionStart(-1).recoilCoordsInfluenceMultiplier(1).recoilDecayDelaySec(50 / 1e3).recoilAttackY(17 / 1e3).recoilMax(100 / 1e3).recoilAttackX(29 / 1e3).recoilHorizBezierAttack(120 / 1e3).recoilHorizRange(12.5 / 1e3).recoilDecayRatio(3.7).maxJumpInaccuracy(40 / 1e3).jumpInaccuracy(20 / 1e3).maxMoveInaccuracy(40 / 1e3).moveInaccuracyFadeOutRatio(30 / 1e3).maxCrouchSpread(30 / 1e3).maxStandSpread(60 / 1e3).startSpread(4 / 1e3).startCrouchSpread(2.5 / 1e3).damageFalloffPerUnit(.15).damageMinimum(10).damage(17).headMultiplier(1.5).auto().shootAudios({
        name: a.MAC10_SHOOT2,
        frequency: .3
    }).build(),
    [r.GLOCK]: new m().category("2").ammoInOneMagazine(999).ammoInStock(999).fireRate(402).scopeWeapon(.1, .7, .8, 20, 22.2917, {
        x: .1809,
        y: -.0159,
        z: .1689
    }, {
        x: .0013,
        y: .0088,
        z: .0256
    }).effectiveRange(13).reloadTimeSec(1.5).heavinessRatio(1, n.get(1)).swapTimeSec(1).recArmsShootTweenDurationMs(200).recArmsInstantRot(-.05).recArmsInstantOffset(-.05, .01).lastCockingAudioName(a.GLOCK_COCKING).magInAudioName(a.GLOCK_MAG_IN).magOutAudioName(a.GLOCK_MAG_OUT).drawAudioName(a.GLOCK_DRAW).recoilCoordsInfluenceMultiplier(0).recoilDecayDelaySec(50 / 1e3).recoilAttackY(.02).recoilMax(.3).recoilAttackX(.01).recoilHorizBezierAttack(.1).recoilHorizRange(.005).recoilDecayRatio(4.5).maxJumpInaccuracy(25 / 1e3).jumpInaccuracy(4 / 1e3).maxMoveInaccuracy(25 / 1e3).moveInaccuracyFadeOutRatio(25 / 1e3).maxCrouchSpread(75 / 1e3).maxStandSpread(150 / 1e3).startSpread(10 / 1e3).startCrouchSpread(5 / 1e3).damageFalloffPerUnit(.15).damageMinimum(10).damage(17).headMultiplier(2.3).shootAudios({
        name: a.GLOCK_SHOOT1,
        frequency: 1
    }, {
        name: a.GLOCK_SHOOT2,
        frequency: .3
    }).build(),
    [r.DESERT_EAGLE]: new m().category("2").ammoInOneMagazine(999).ammoInStock(999).fireRate(200).scopeWeapon(.1, .7, .8, 20, 19.2323, {
        x: .2214,
        y: -.0159,
        z: .1103
    }, {
        x: .0211,
        y: .0088,
        z: .022
    }).reloadTimeSec(1.6).heavinessRatio(.96, n.get(.96)).swapTimeSec(1).recArmsShootTweenDurationMs(200).recArmsInstantRot(-.1).recArmsInstantOffset(-.1).lastCockingAudioName(a.DEAGLE_COCKING).magInAudioName(a.DEAGLE_MAG_IN).magOutAudioName(a.DEAGLE_MAG_OUT).drawAudioName(a.DEAGLE_DRAW).recoilDecayDelaySec(50 / 1e3).recoilAttackY(90 / 1e3).recoilMax(200 / 1e3).recoilAttackX(150 / 1e3).recoilHorizBezierAttack(200 / 1e3).recoilHorizRange(33 / 1e3).recoilDecayRatio(2).recoilRndStartHorizDirection(!0).recoilHorizRangeRatio(1, 2.5).maxJumpInaccuracy(30 / 1e3).jumpInaccuracy(20 / 1e3).maxMoveInaccuracy(30 / 1e3).moveInaccuracyFadeOutRatio(30 / 1e3).maxCrouchSpread(25 / 1e3).maxStandSpread(50 / 1e3).startSpread(5 / 1e3).startCrouchSpread(2.5 / 1e3).damageFalloffPerUnit(.15).damageMinimum(10).damage(33).headMultiplier(2).shootAudios({
        name: a.DEAGLE_SHOOT,
        frequency: 1
    }).build(),
    [r.M9]: new m().category("3").ammoInOneMagazine(1e7).ammoInStock(0).fireRate(105, 45, .3).effectiveRange(2).distance(1.6, 1.85).damageFalloffPerUnit(0).heavinessRatio(1, n.get(1)).swapTimeSec(.5).drawAudioName(a.M9_DRAW).damageMinimum(45).damage(45, 70).headMultiplier(2).shootAudios({
        name: a.M9_ATTACK,
        frequency: 1
    }).auto().knife().build(),
    [r.TOMAHAWK]: new m().category("3").ammoInOneMagazine(1e7).ammoInStock(0).fireRate(90, 35, .35).effectiveRange(2).distance(1.7, 2).damageFalloffPerUnit(0).heavinessRatio(1, n.get(1)).swapTimeSec(.5).drawAudioName(a.TOMAHAWK_DRAW).damageMinimum(45).damage(45, 100).headMultiplier(2).shootAudios({
        name: a.TOMAHAWK_ATTACK,
        frequency: 1
    }).auto().knife().build(),
    [r.BUTTERFLY]: new m().category("3").ammoInOneMagazine(1e7).ammoInStock(0).fireRate(105, 45, .3).effectiveRange(2).distance(1.6, 1.85).damageFalloffPerUnit(0).heavinessRatio(1, n.get(1)).swapTimeSec(.5).drawAudioName(a.M9_DRAW).damageMinimum(45).damage(45, 70).headMultiplier(2).shootAudios({
        name: a.M9_ATTACK,
        frequency: 1
    }).auto().knife().build()
};
R[r.GOLD_HAWK] = R[r.TOMAHAWK];
export {w as E, r as W, R as a, b, a as c};

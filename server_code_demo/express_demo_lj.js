var fG = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0];
var fP = [[1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2], [-7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [-3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]];
var nu = [86, 60, 45, 30, 15, 0];
var cG = [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]];

function bb(a) {
    return "string" == typeof a
}
function Nb(a){
    return 1
}
function J(a, b) {
    isNaN(a) && (a = Nb(a),
    a = isNaN(a) ? 0 : a);
    bb(a) && (a = parseFloat(a));
    isNaN(b) && (b = Nb(b),
    b = isNaN(b) ? 0 : b);
    bb(b) && (b = parseFloat(b));
    this.lng = a;
    this.lat = b;
    this.Se = "inner"
}
var ZJ = function(a, b) {
    if (a && b) {
        var c = b[0] + b[1] * Math.abs(a.lng)
          , e = Math.abs(a.lat) / b[9]
          , e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[7] * e * e * e * e * e + b[8] * e * e * e * e * e * e
          , c = c * (0 > a.lng ? -1 : 1)
          , e = e * (0 > a.lat ? -1 : 1);
        return new J(c,e)
    }
}
var dc = function(a) {
    var l = "";
    if (a === null || a === l)
        return new J(0,0);
    var b, c;
    b = new J(Math.abs(a.lng),Math.abs(a.lat));
    for (var e = 0; e < fG.length; e++)
        if (b.lat >= fG[e]) {
            c = fP[e];
            break
        }
    a = ZJ(a, c);
    return a = new J(a.lng,a.lat)
}
var nh = function(a) {
    return dc(a)
}
var Xb = function(a) {
    return Math.pow(2, 18 - a)
}
var Zb = function(a, b, c, e, f) {
    if (a)
        return b = Xb(b),
        nh(new J(c.lng + b * (a.x - e.width / 2),c.lat - b * (a.y - e.height / 2)), f)
}

var pD = function(a, b, c) {
    for (; a > c; )
        a -= c - b;
    for (; a < b; )
        a += c - b;
    return a
}
var vD = function(a, b, c) {
    b != null && (a = Math.max(a, b));
    c != null && (a = Math.min(a, c));
    return a
}
var Wa = function(a) {
    if (a === null || a === "" || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)
        return new J(0,0);
    var b, c;
    a.lng = pD(a.lng, -180, 180);
    a.lat = vD(a.lat, -85, 85);
    b = new J(a.lng,a.lat);
    for (var e = 0; e < nu.length; e++)
        if (b.lat >= nu[e]) {
            c = cG[e];
            break
        }
    if (!c)
        for (e = 0; e < nu.length; e++)
            if (b.lat <= -nu[e]) {
                c = cG[e];
                break
            }
    a = ZJ(a, c);
    return a = new J(a.lng,a.lat)
}


var get_max_min = function(c, b) {
    var e = {
        "width": 1920,
        "height": 1080
    };
    var f = "";
    var a = {
        "x": 0,
        "y": 1080
    };
    var lat_lng1 = Zb(a, b, c, e, f);
    a = {
        "x": 1920,
        "y": 0
    };
    var lat_lng2 = Zb(a, b, c, e, f);
    var max_min = {
        "maxLatitude": lat_lng2.lat,
        "minLatitude": lat_lng1.lat,
        "maxLongitude": lat_lng2.lng,
        "minLongitude": lat_lng1.lng,
    }
    return max_min
}


req = function(lat_lng, num){
    c = Wa(lat_lng);
    return get_max_min(c, num)
}
module.exports = req
// var lat_lng = {
//    "lng": 120.5811424828,
//    "lat":31.3010678543,
//    "Se": "inner"
// };
// var c = Wa(lat_lng);
// console.log(get_max_min(c));
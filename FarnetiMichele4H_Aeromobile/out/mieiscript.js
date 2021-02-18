var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A(x) {
        this.identificativo = x;
    }
    A.prototype.Superiore = function (x) {
        var output = true;
        if (x == null) {
            return (false);
        }
        if (x._caratteristiche > this._caratteristiche) {
            output = false;
        }
        if (x instanceof AL && this instanceof AM || x instanceof AM && this instanceof AL) {
            output = false;
        }
        return (output);
    };
    return A;
}());
var AL = /** @class */ (function (_super) {
    __extends(AL, _super);
    function AL(id, car) {
        var _this = _super.call(this, id) || this;
        _this._caratteristiche = car;
        return _this;
    }
    Object.defineProperty(AL.prototype, "EffAerodinamica", {
        get: function () {
            return (this._caratteristiche);
        },
        enumerable: false,
        configurable: true
    });
    AL.prototype.Dati = function () {
        return ("Aereo di tipo: <b>aliante</b> identificativo <b>" + this.identificativo + "</b> efficienza: <b>" + this.EffAerodinamica + "/10</b>");
    };
    return AL;
}(A));
var AM = /** @class */ (function (_super) {
    __extends(AM, _super);
    function AM(id, car) {
        var _this = _super.call(this, id) || this;
        _this._caratteristiche = car;
        return _this;
    }
    Object.defineProperty(AM.prototype, "Potenza", {
        get: function () {
            return (this._caratteristiche);
        },
        enumerable: false,
        configurable: true
    });
    AM.prototype.Dati = function () {
        return ("Aereo di tipo: <b>a motore</b> identificativo <b>" + this.identificativo + "</b> potenza: <b>" + this.Potenza + "CV</b>");
    };
    return AM;
}(A));
document.getElementById("btnlancia").addEventListener('click', Compara);
function Compara() {
    document.getElementById('Risultati').innerHTML = " ";
    var Aereo1 = new AM("XJEA7", 300);
    var Aereo2 = new AM("JS6DW", 450);
    var Aereo3 = new AL("P08JD", 10);
    var Aereo4 = new AL("M09D7", 5);
    document.getElementById('Risultati').innerHTML += "<li class='list-group-item container-fluid'>" + Aereo1.Dati() + "</li>";
    document.getElementById('Risultati').innerHTML += "<li class='list-group-item container-fluid'>" + Aereo2.Dati() + "</li>";
    document.getElementById('Risultati').innerHTML += "<li class='list-group-item container-fluid'>" + Aereo3.Dati() + "</li>";
    document.getElementById('Risultati').innerHTML += "<li class='list-group-item container-fluid'>" + Aereo4.Dati() + "</li>";
    if (Aereo1.Superiore(Aereo2) == true) {
        document.getElementById('Risultati').innerHTML += "<li class='list-group-item  container-fluid'>Aereo1 é piú potente di Areaeo2</li>";
    }
    else {
        document.getElementById('Risultati').innerHTML += "<li class='list-group-item  container-fluid'>Aereo2 é piú potente di Aereo1</li>";
    }
    if (Aereo2.Superiore(Aereo3) == false) {
        document.getElementById('Risultati').innerHTML += "<li class='list-group-item  container-fluid'>Aereo2 e Aereo3 sono di due tipi differenti</li>";
    }
    if (Aereo3.Superiore(Aereo4) == true) {
        document.getElementById('Risultati').innerHTML += "<li class='list-group-item container-fluid'>Aereo3 e Aereo4 sono dello stesso tipo</li>";
    }
    if (Aereo3.Superiore(Aereo4) == true) {
        document.getElementById('Risultati').innerHTML += "<li class='list-group-item d-flex justify-content-between align-items-center container-fluid'>Aereo3 é piú aerodinamico di Aereo4</li>";
    }
}

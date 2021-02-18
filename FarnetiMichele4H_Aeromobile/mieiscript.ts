interface ICompare{

    Superiore(x:A):boolean;

}

abstract class A implements ICompare{
    
    identificativo: string;
    _caratteristiche: number;

    constructor(x:string){
        this.identificativo=x;
    }

    Superiore(x:A):boolean{
        var output: boolean = true;

        if(x==null){
            return(false);
        }

        if(x._caratteristiche>this._caratteristiche){
            output=false;
        }

        if(x instanceof AL && this instanceof AM || x instanceof AM && this instanceof AL  )
        {
            output=false;
        }

        return(output);
    }

}

class AL extends A{


    public get EffAerodinamica():number{
        return(this._caratteristiche);
    }

    constructor(id:string, car:number){

        super(id);
        this._caratteristiche=car;

    }

    Dati(){
        return("Aereo di tipo: <b>aliante</b> identificativo: <b>"+this.identificativo+"</b> efficienza: <b>"+this.EffAerodinamica+"/10</b>");
    }

        

}

class AM extends A{

    public get Potenza():number{
        return(this._caratteristiche);
    }
 
    constructor(id:string, car:number){

        super(id);
        this._caratteristiche=car;

    }

    Dati(){
        return("Aereo di tipo: <b>a motore</b> identificativo: <b>"+this.identificativo+"</b> potenza: <b>"+this.Potenza+"CV</b>");
    }
}





document.getElementById("btnlancia").addEventListener('click', Compara);

function Compara():void {
    document.getElementById('Risultati').innerHTML =" ";

    let Aereo1: AM = new AM("XJEA7",300)
    let Aereo2: AM = new AM("JS6DW",450)

    let Aereo3: AL = new AL("P08JD",10)
    let Aereo4: AL = new AL("M09D7",5)
  
	document.getElementById('Risultati').innerHTML += "<li class='list-group-item container-fluid'>"+Aereo1.Dati()+"</li>";
    document.getElementById('Risultati').innerHTML += "<li class='list-group-item container-fluid'>"+Aereo2.Dati()+"</li>";
    document.getElementById('Risultati').innerHTML += "<li class='list-group-item container-fluid'>"+Aereo3.Dati()+"</li>";
    document.getElementById('Risultati').innerHTML += "<li class='list-group-item container-fluid'>"+Aereo4.Dati()+"</li>";

    if(Aereo1.Superiore(Aereo2)==true)
    {
        document.getElementById('Risultati').innerHTML += "<li class='list-group-item  container-fluid'>Aereo1 é piú potente di Areaeo2</li>";
    }
    else{
        document.getElementById('Risultati').innerHTML += "<li class='list-group-item  container-fluid'>Aereo2 é piú potente di Aereo1</li>";
    }

    if(Aereo2.Superiore(Aereo3)==false)
    {
        document.getElementById('Risultati').innerHTML += "<li class='list-group-item  container-fluid'>Aereo2 e Aereo3 sono di due tipi differenti</li>";
    }

    if(Aereo3.Superiore(Aereo4)==true)
    {
        document.getElementById('Risultati').innerHTML += "<li class='list-group-item container-fluid'>Aereo3 e Aereo4 sono dello stesso tipo</li>";
    }

    if(Aereo3.Superiore(Aereo4)==true)
    {
        document.getElementById('Risultati').innerHTML += "<li class='list-group-item d-flex justify-content-between align-items-center container-fluid'>Aereo3 é piú aerodinamico di Aereo4</li>";
    }

}


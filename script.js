function Triangle(lado1,lado2, lado3){
  this.lado1 = lado1;
  this.lado2 = lado2;
  this.lado3 = lado3;
  this.getArea = function(){
  var p = this.getPerimeter()/2;
    return Math.sqrt (p*(p-lado1)* (p-lado2)*(p-lado3));
  }
  this.getPerimeter = function(){
     return lado1 + lado2 + lado3;
  }
  this.toString = function(){
    return "the triangle with sides = "+ this.lado1 + this.lado2 + this.lado3 + "Area = " + this.getArea () + "Add Perimeter=" + this.getPerimeter();
  }
  function calculate() {
    var s1 = parseFloat(document.getElementById ('lado1').value);
    var s2 = parseFloat(document.getElementById ('lado2').value);
    var s3 = parseFloat(document.getElementById ('lado3').value);
    if (isNaN(s1)|| isNaN(s2) || isNaN(s3)){
      document.getElementById('data').innerHTML = "Insira apenas números";
      return;
    }
    else if (s1<=0 || s2<=0 || s3<=0){
      document.getElementById ('data').innerHTML = "Números negativos não são válidos";
      return;
      }
    var myTriangle = new Triangle(s1,s2,s3);
    document.getElementById('data').innerHTML = myTriangle.toString();
  }
}
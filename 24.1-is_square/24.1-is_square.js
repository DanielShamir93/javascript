function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

function isEqualEdges() {
    return (this.a === this.b && 
            this.b === this.c && 
            this.c === this.d);
    }

Square.prototype.isEqualEdges = isEqualEdges;


let square = new Square(3, 3, 3, 3);
console.log(square.isEqualEdges());
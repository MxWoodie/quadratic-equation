module.exports = function solveEquation(equation) {
  
    let a = equation.split('*')[0].replace(/\s/g, ''); 
    let b = equation.split('*')[1].replace('x^2','').replace(/\s/g, ''); 
    let c = equation.split('*')[2].replace('x','').replace(/\s/g, '');

    let discr = b*b - 4 * a * c;

    let x1 = Math.round((-b + Math.sqrt(discr))/(2*a));
    let x2 = Math.round((-b - Math.sqrt(discr))/(2*a));

    let solutions = [x1,x2];
    solutions.sort((a,b)=> {
        return a - b;
    });
    
    return solutions;
}

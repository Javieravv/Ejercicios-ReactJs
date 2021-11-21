// Datos para la app

let facturas = [ 
    { 
    name: "Santa Monica", 
    number: 1995, 
    amount: "$10,800", 
    due: "12/05/1995" 
    }, 
    { 
    name: "Stankonia", 
    number: 2000, 
    amount: "$8,000", 
    due: "10/31/2000" 
    }, 
    { 
    name: "Ocean Avenue", 
    number: 2003, 
    amount: "$9,500", 
    due: "07/22/2003" 
    }, 
    { 
    name: "Tubthumper", 
    number: 1997, 
    amount: "$14,000", 
    due: "09/01/1997" 
    }, 
    { 
    name: "Wide Open Spaces", 
    number: 1998, 
    amount: "$4,600", 
    due: "01/27/2998" 
    }, 
    { 
    name: "Xavier Vargas", 
    number: 1973, 
    amount: "$34,600", 
    due: "01/27/2008" 
    }, 
    { 
    name: "Adriana Romero", 
    number: 1977, 
    amount: "$84,600", 
    due: "01/27/2013" 
    }, 
    { 
    name: "Sebastian Vargas", 
    number: 2009, 
    amount: "$34,600", 
    due: "01/15/2009" 
    },
    { 
    name: "Mariana Vargas", 
    number: 2005, 
    amount: "$24,600", 
    due: "5/5/2005" 
    },  
   ]; 
    
   export function getFacturas() { 
    return facturas; 
   } 

   export function getFactura(number) { 
    return facturas.find( 
        factura => factura.number === number 
    ); 
   } 

   export function deleteFactura(number) { 
    facturas = facturas.filter( 
        factura => factura.number !== number 
    ); 
   }    

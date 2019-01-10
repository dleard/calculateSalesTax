var salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
  };
  
  var companySalesData = [
    {
      name: "Telus",
      province: "BC",
      sales: [ 100, 200, 400 ]
    },
    {
      name: "Bombardier",
      province: "AB",
      sales: [ 80, 20, 10, 100, 90, 500 ]
    },
    {
      name: "Telus",
      province: "SK",
      sales: [ 500, 100 ]
    }
  ];

  function calculateSalesTax(salesData, taxRates) {
		totalData = {}
		for (key in salesData) {
			var totalSales = 0;
			for (var i = 0; i < salesData[key].sales.length; i++) {
				totalSales += salesData[key].sales[i];
			}
			if (totalData[salesData[key].name]){
				totalData[salesData[key].name].totalSales += totalSales;
				totalData[salesData[key].name].totalTaxes += salesTaxRates[salesData[key].province] * totalSales;
			} else {
				totalData[salesData[key].name] = {};
				totalData[salesData[key].name].totalSales = totalSales;
				totalData[salesData[key].name].totalTaxes = salesTaxRates[salesData[key].province] * totalSales;
			}
		}
		console.log(totalData);
  }
  
  var results = calculateSalesTax(companySalesData, salesTaxRates);
  
  /* Expected Results:
  {
    Telus: {
      totalSales: 1300
      totalTaxes: 144
    },
    Bombardier: {
      totalSales: 800,
      totalTaxes: 40
    }
  }*/
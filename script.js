function calculateBodySurfaceArea(height, weight) {
    var m2 = 0.007184 * Math.pow(weight, 0.425) * Math.pow(height, 0.725);
    return m2;
  }
  
  function calculateDosage(bodySurfaceArea) {
    var etoposideDosage = 100 * bodySurfaceArea;
    var cisplatinDosage = 20 * bodySurfaceArea;
    var ifosfamideDosage = 1500 * bodySurfaceArea;
    var uromitexanDosage = 1500 * bodySurfaceArea;
    return [etoposideDosage, cisplatinDosage, ifosfamideDosage, uromitexanDosage];
  }
  
  function calculateOndansetron(weight) {
    var dosage = 0.15 * weight;
    return dosage;
  }
  
  function calculateMannitol(weight) {
    var dosage = 0.5 * weight;
    return dosage;
  }
  
  function calculateHydrationRate(bodySurfaceArea) {
    var hydrationRate = (83 * bodySurfaceArea) * 24;
    return hydrationRate;
  }
  
  function calculatePotassiumChloride(bodySurfaceArea) {
    var dosage = 60 * bodySurfaceArea;
    return dosage;
  }
  
  function calculateCalciumGluconate(bodySurfaceArea) {
    var dosage = 20 * bodySurfaceArea;
    return dosage;
  }
  
  function calculateMagnesiumSulfate(bodySurfaceArea) {
    var dosage = 8 * bodySurfaceArea;
    return dosage;
  }
  
  function calculate() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
  
    var bodySurfaceArea = calculateBodySurfaceArea(height, weight);
    var dosageArray = calculateDosage(bodySurfaceArea);
    var etoposideDosage = dosageArray[0];
    var cisplatinDosage = dosageArray[1];
    var ifosfamideDosage = dosageArray[2];
    var uromitexanDosage = dosageArray[3];
    var ondansetronDosage = calculateOndansetron(weight);
    var mannitolDosage = calculateMannitol(weight);
    var hydrationRate = calculateHydrationRate(bodySurfaceArea);
    var potassiumChlorideDosage = calculatePotassiumChloride(bodySurfaceArea);
    var calciumGluconateDosage = calculateCalciumGluconate(bodySurfaceArea);
    var magnesiumSulfateDosage = calculateMagnesiumSulfate(bodySurfaceArea);
  
    var output = document.getElementById("output");
    output.innerHTML = "<h2>Результаты расчета:</h2>" +
      "<p>Площадь поверхности тела: " + bodySurfaceArea.toFixed(2) + " м2</p>" +
      "<h3>Дозировка препаратов:</h3>" +
      "<p>Этопозид: " + etoposideDosage.toFixed(2) + " мг</p>" +
      "<p>Цисплатин: " + cisplatinDosage.toFixed(2) + " мг</p>" +
      "<p>Ифосфамид: " + ifosfamideDosage.toFixed(2) + " мг</p>" +
      "<p>Уромитексан: " + uromitexanDosage.toFixed(2) + " мг</p>" +
      "<p>Дозировка ондансетрона: " + ondansetronDosage.toFixed(2) + " мг</p>" +
      "<p>Дозировка маннитола: " + mannitolDosage.toFixed(2) + " гр</p>" +
      "<p>Гидратация: " + hydrationRate.toFixed(2) + " мл/сут</p>" +
      "<p>Дозировка калия хлорида: " + potassiumChlorideDosage.toFixed(2) + " мл/сут</p>" +
      "<p>Дозировка кальция глюконата: " + calciumGluconateDosage.toFixed(2) + " мл/сут</p>" +
      "<p>Дозировка магния сульфат: " + magnesiumSulfateDosage.toFixed(2) + " мл/сут</p>"
    
}
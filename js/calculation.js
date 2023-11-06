document.getElementById("triangle-btn").addEventListener("click",function(){
  const triangleBase = document.getElementById("triangle-base").value ;
  const triangleHeight = document.getElementById("triangle-height").value ;
  const triangleResult = (0.5 * triangleBase * triangleHeight).toFixed(2) + " cm²";
  document.getElementById("triangle").innerText = triangleResult;
  document.getElementById("triangle-base").value = '';
  document.getElementById("triangle-height").value = '';
})

document.getElementById("rectangle-btn").addEventListener("click",function(){
  const rectangleWide = document.getElementById("rectangle-wide").value ;
  const rectangleLength = document.getElementById("rectangle-length").value ;
  const rectangleResult = (rectangleWide * rectangleLength).toFixed(2) + " cm²";
  document.getElementById("rectangle").innerText = rectangleResult;
  document.getElementById("rectangle-wide").value = '';
  document.getElementById("rectangle-length").value = '';
})

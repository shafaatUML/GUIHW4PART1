// JQuery and JS file to generate perform JQuery validation
// - Shafaat Osmani Shafaat_Osmani@student.uml.edu

$("#multform").validate({
    // sourced from: https://jqueryvalidation.org/range-method/
    // and: https://jqueryvalidation.org/rules/
    rules: {
      minX: {
        required: true,
        range: [-50, 50]
      },
      maxX: {
        required: true,
        range: [-50, 50]
      },
      minY: {
        required: true,
        range: [-50, 50]
      },
      maxY: {
        required: true,
        range: [-50, 50]
      }
    },
    
    messages: {
      minX: {
        required: "Please enter a minX",
        range: "Input must be from -50 to 50"
      },
      maxX: {
        required: "Please enter a maxX",
        range: "Input must be from -50 to 50"
      },
      minY: {
        required: "Please enter a minY",
        range: "Input must be from -50 to 50"
      },
      maxY: {
        required: "Please enter a maxY",
        range: "Input must be from -50 to 50"
      }
    }
  });
  
  // checks if form passes validation, if yes then
  // create the table  
  $("#multform").submit(function (event) {
    event.preventDefault();
    if ($("#multform").valid()) {
      createtable();
    }
  });

  
  function createtable() {
    if (!document.querySelector("table")) {
      const table = document.createElement("table");
      let minX, minY, maxX, maxY;
      minX = document.getElementById("minX").value;
      maxX = document.getElementById("maxX").value;
      minY = document.getElementById("minY").value;
      maxY = document.getElementById("maxY").value;
  
  
      const colarr = [];
      const rowarr = [];
      if (minY >= 0) {
        colarr.push(0);
      }
      if (minX >= 0) {
        rowarr.push(0);
      }
      for (let i = 1; i <= maxY; i++) {
        colarr.push(i);
      }
      for (let i = 1; i <= maxX; i++) {
        rowarr.push(i);
      }
  
      for (let i = 0; i < Number(rowarr.length); i++) {
        const rowX = document.createElement("tr");
        for (let j = 0; j < Number(colarr.length); j++) {
          const columnY = document.createElement("td");
  
          let val = rowarr[i] * colarr[j];
  
          if (i === 0 || j === 0) {
            val = rowarr[i] || colarr[j];
            columnY.classList.add("header");
          }
  
          if (i === 0 && j === 0) {
            val = "x";
          }
  
          columnY.innerHTML = val;
  
          rowX.appendChild(columnY);
        }
        table.appendChild(rowX);
      }
      const maintbl = document.getElementById("multtable");
      maintbl.appendChild(table);
      event.preventDefault();
    } else {
      document.querySelector("table").remove();
      createtable();
    }
  }
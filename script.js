document.addEventListener("DOMContentLoaded", function () {
  // -----------------------------
  // Citizenship Number Formatting
  // -----------------------------
  document.getElementById("citizenshipNo").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "").slice(0, 12);
    let formattedValue = value.replace(/(\d{4})(\d{4})?(\d{0,4})?/, function (_, p1, p2, p3) {
      let result = p1;
      if (p2) result += "-" + p2;
      if (p3) result += "-" + p3;
      return result;
    });
    e.target.value = formattedValue;
  });

  // -----------------------------
  // Name Fields Validation & Autofill
  // -----------------------------
  function validateName(input) {
    input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
  }

  document.getElementById("fullName").addEventListener("input", function () {
    validateName(this);
    document.getElementById("nameCopy").value = this.value;
  });

  document.getElementById("nameCopy").addEventListener("input", function () {
    validateName(this);
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  // Get elements
  const tempAddress = document.querySelector('input[name="temporary_address"]');
  const tempState = document.querySelector('select[name="temporary_state"]');
  const permAddress = document.querySelector('input[name="permanent_address"]');
  const permState = document.querySelector('select[name="permanent_state"]');
  const checkbox = document.querySelector('input[name="same_as_above"]');

  // Event listener for checkbox change
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      // Copy values from temporary address to permanent address
      permAddress.value = tempAddress.value;
      permState.value = tempState.value;
    } else {
      // Clear permanent address fields if checkbox is unchecked
      permAddress.value = "";
      permState.value = "";
    }
  });

  // Update permanent address fields if temporary address fields change
  tempAddress.addEventListener("input", function () {
    if (checkbox.checked) {
      permAddress.value = tempAddress.value;
    }
  });

  tempState.addEventListener("change", function () {
    if (checkbox.checked) {
      permState.value = tempState.value;
    }
  });
});



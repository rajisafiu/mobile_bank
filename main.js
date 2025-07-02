   
//    main dashboard below

   function withdrawFunds() {
      alert("How much are you withdrawing?");
    }

    function addTransaction() {
      alert("how much are you depositing?");
    }

    function addAirtimedata() {
      alert("Are you buying airtime or Data?");
    }

    // transaction history below

    document.getElementById("typeFilter").addEventListener("change", function() {
      alert("Filter type: " + this.value);
    });

    document.getElementById("dateFilter").addEventListener("change", function() {
      alert("Filter date: " + this.value);
    });

    // dark mode and light mode below

        const toggleBtn = document.getElementById("toggleMode");
    const body = document.body;

    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      const isDark = body.classList.contains("dark-mode");
      toggleBtn.textContent = isDark ? "🌞" : "🌙";
    }); 





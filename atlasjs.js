<script>
    // Global variables
    var myArray = ["afghanistan", "albania", "algeria", "andorra", "angola", "antigua and barbuda", "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "bosnia and herzegovina", "botswana", "brazil", "brunei", "bulgaria", "burkina faso", "burundi", "cabo verde", "cambodia", "cameroon", "canada", "central african republic", "chad", "chile", "china", "colombia", "comoros", "congo, republic of the", "congo, democratic republic of the", "costa rica", "croatia", "cuba", "cyprus", "czechia", "denmark", "djibouti", "dominica", "dominican republic", "ecuador", "egypt", "el salvador", "equatorial guinea", "eritrea", "estonia", "eswatini", "ethiopia", "fiji", "finland", "france", "gabon", "gambia", "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guinea-bissau", "guyana", "haiti", "honduras", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kiribati", "korea, north", "korea, south", "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "marshall islands", "mauritania", "mauritius", "mexico", "micronesia", "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique", "myanmar", "namibia", "nauru", "nepal", "netherlands", "new zealand", "nicaragua", "niger", "nigeria", "north macedonia", "norway", "oman", "pakistan", "palau", "palestine", "panama", "papua new guinea", "paraguay", "peru", "philippines", "poland", "portugal", "qatar", "romania", "russia", "rwanda", "saint kitts and nevis", "saint lucia", "saint vincent and the grenadines", "samoa", "san marino", "sao tome and principe", "saudi arabia", "senegal", "serbia", "singapore", "slovakia", "slovenia", "solomon islands", "somalia", "south africa", "south sudan", "spain", "sri lanka", "sudan", "suriname", "sweden", "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "timor-leste", "togo", "tonga", "trinidad and tobago", "tunisia", "turkey", "turkmenistan", "tuvalu", "uganda", "ukraine", "united arab emirates", "united kingdom", "united states", "uruguay", "uzbekistan", "vanuatu", "vatican city", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"];
    var countriesArray = []; // Store user-entered countries
    var random1 = ""; // Store the current random country

    // Function to get a random country
    function getvalue() {
      random1 = myArray[Math.floor(Math.random() * myArray.length)].toLowerCase();
      document.getElementById("message").innerHTML = random1;
    }

    // Function to check user input
    function myfunction() {
      var x = document.getElementById("mytext").value.toLowerCase().trim();


      if (!x) {
        document.getElementById("demo").innerHTML = "Please enter a country!";
        return;
      }

      // Check if the input is a valid country
      if (!myArray.includes(x)) {
        document.getElementById("demo").innerHTML = "Invalid country!";
        return;
      }

      // Check if the country has already been entered
      if (countriesArray.includes(x)) {
        document.getElementById("demo").innerHTML = "Already Entered!";
        return;
      }

      // Check if the input starts with the correct letter
      if (random1.charAt(random1.length - 1) !== x.charAt(0)) {
        document.getElementById("demo").innerHTML = "Letters don't match!";
        return;
      }

      // If all checks pass
      document.getElementById("demo").innerHTML = "Correct!";
      countriesArray.push(x);
      getvalue(); // Get a new random country
    }
</script>


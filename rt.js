var start;
    function showShape() {
        var left = Math.random() * 100;
            var top = Math.random() * 100;
            var width = (Math.random() * 10) + 10;
            var col = "0123456789ABCDE";
            var color = "#";

            for (var i = 0; i < 6; i++) {
                var x = col[Math.floor(Math.random() * 15)];
                color += x;
            }

            var shape = document.getElementById("shape");
            shape.style.top = top + "vh";
            shape.style.left = left + "vw";
            shape.style.width = width + "vw";
            shape.style.height = width + "vw";
            shape.style.backgroundColor = color;
            shape.style.display = "block";

            start = new Date().getTime();
    }
    function showDelay() {
        setTimeout(showShape, Math.random() *2000);
    }
    document.getElementById("shape").onclick = function() {
        var end = new Date().getTime();
        time = (end - start)/1000;
        alert("Reaction time is " + time + " seconds")
        this.style.display = "none"
        showDelay();
    }
    showDelay();
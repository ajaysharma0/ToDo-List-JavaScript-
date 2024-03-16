var checkid = 1;
        var boxid = 1;
        function clicks(id) {
            var box = id;
            var t = Number(prompt("Enter The Number Of Tasks"));
            var arr = new Array;
            for (var i = 0; i < t; i++) {
                var a = prompt("Enter Task " + (i + 1));
                arr.push(a);
                }
            for (var i = 0; i < t; i++) {
                if (arr[i] != "") {
                    box.innerHTML += `<h4>
                        <input id="check${checkid}" type="checkbox" onclick="checks(check${checkid},label${checkid})" >
                        <label id="label${checkid}" for="check${checkid}">${arr[i]}</label>
                        </h4>
                        `;
                    checkid++;
                }
            }

        }
        function add() {
            var h = String(prompt("Enter Your Task Heading"));
            if (h) {
                var t = Number(prompt("Enter The Number Of Tasks"));
                var arr = new Array;
                for (var i = 0; i < t; i++) {
                    var a = prompt("Enter Task " + (i + 1));
                    arr.push(a);
                }
                var div = document.getElementById("d3");
                var box = document.createElement("div");
                box.id = `box${boxid}`;
                box.innerHTML += `<h1 onclick="clicks(box${boxid})">${h}</h1>`;
                boxid++;
                box.className = "box";
                for (var i = 0; i < t; i++) {
                    if (arr[i] != "") {
                        box.innerHTML += `<h4>
                        <input id="check${checkid}" type="checkbox" onclick="checks(check${checkid},label${checkid})" >
                        <label id="label${checkid}" for="check${checkid}">${arr[i]}</label>
                        </h4>
                        `;
                        checkid++;
                    }
                }
            }

            if (h && t) {
                div.appendChild(box);
            }

        }

        function checks(cid, lid) {
            var cid = cid;
            var lid = lid;
            if (cid.checked) {
                lid.style.textDecoration = "line-through";
                lid.style.color = "#C2C2C2";
            }
            else {
                lid.style.textDecoration = "none";
                lid.style.color = "black";
            }
        }

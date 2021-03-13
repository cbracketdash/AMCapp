            function grad() {
                    var left = document.getElementById("g1").value
                    var right = document.getElementById("g2").value
                    let hex2rgb= c=> `rgb(${c.substr(1).match(/../g).map(x=>+`0x${x}`)})`;
                    left = hex2rgb(left);
                    right = hex2rgb(right);
                    document.getElementById("body").style.backgroundImage = `linear-gradient(to right, ${left} 20%, ${right} 80%)`;
                    document.querySelectorAll('.button').forEach(element => {element.style.backgroundImage = `linear-gradient(to right, ${left}, ${right})`;}); 
                    document.querySelectorAll('.input').forEach(element => {element.style.backgroundImage = "none";});
      //              document.getElementsByClassName("button").style.backgroundImage = `linear-gradient(to right, ${right}, ${left})`;

                }
            function hi() {
                window.alert(rgbToHex(document.getElementById("color").value));
            }
            function rgbToHex(c) {
              var hex = c.toString(16);
              return hex.length == 1 ? "0" + hex : hex;
            }
            function light() {
                document.querySelectorAll('.text').forEach(element => {element.style.color = 'white';}); 
                document.querySelectorAll('.text img').forEach(element => {element.style.filter = 'invert(1)';});
            }
            function dark() {
                document.querySelectorAll('.text').forEach(element => {element.style.color = 'black';}); 
                document.querySelectorAll('.text img').forEach(element => {element.style.filter = 'invert(0)';});
            }
            function textc() {
                if ((document.getElementById("textColor").value == "B") || (document.getElementById("textColor").value == "B")) {
                    dark();
                } else if ((document.getElementById("textColor").value == "W") || (document.getElementById("textColor").value == "W")) {
                    light();
                }
           }
 
           document.getElementById("ans").addEventListener('keyup', function(event) {
                if (event.code === 'Enter') {
                    event.preventDefault();
                    check_ans();
                }
            });
            var HttpClient = function() {
                this.get = function(aUrl, aCallback) {
                    var anHttpRequest = new XMLHttpRequest();
                    anHttpRequest.onreadystatechange = function() {
                        if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                            aCallback(anHttpRequest.responseText);
                    }

                    anHttpRequest.open("GET", aUrl, true);
                    anHttpRequest.send(null);
                }
            }
            var lol;
            var anss;
            var solcode;
            function shuffle(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }

            function get_new_problem() {
                var type = document.getElementById("ddlViewBy").value;
                var subject = document.getElementById("ddlViewBy2").value;
                // document.getElementById("check_ans").style.display = "none";
                document.getElementById("get_solution").style.display = "none";
                document.getElementById("if_correct").style.display = "none";
                if (type == "All") {
                    var arr1 = shuffle([8, 10, 12, "AIME"]);
                    type = arr1[0];
                }

                var if_ab = true;
                var isAJHSME;

                var arr2 = [];
                for (i = 2000; i < 2022; i++) {
                    arr2.push(i);
                }
                arr2 = shuffle(arr2);
                yr = arr2[0];

                var arrA = [];
                for (i = 1985; i < 1999; i++) {
                    arrA.push(i);
                }
                arrA = shuffle(arrA)
                yearAJ = arrA[0]

                if (type == 8) {
                    if_ab = false;
                    isAJHSME = shuffle([0, 1]);
                    isAJHSME = isAJHSME[0];
                } else if ((type == 10 || type == 12) && (yr < 2002)) {
                    if_ab = false;
                }

                var arr3 = [];
                for (i = 10; i < 26; i++) {
                    arr3.push(i)
                }
                arr3 = shuffle(arr3);
                prob = arr3[0];

                if (type == "AIME") {
                    var yrAIME = [];
                    for (i = 1983; i < 2021; i++) {
                        yrAIME.push(i);
                    }
                    yr = shuffle(yrAIME)[0];

                    if (yr < 2000) {
                        if_ab = false;
                    }
                    var probAIME = [];
                    for (i = 1; i < 16; i++) {
                        probAIME.push(i);
                    }
                    prob = shuffle(probAIME)[0];
                }

                var year = yr.toString();
                var amc = type.toString();
                var problem = prob.toString();

                var link = "";
                var answer_key_link = "";

                a_b = shuffle(["A", "B"]);
                a_b = a_b[0];
                var aorb = a_b.toString();
                var problem_id;

                if ((amc == "8") && (isAJHSME == 1)) {
                    link = link.concat("https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php?title=", yearAJ, "_AJHSME_", "Problems/Problem_", problem);
                    answer_key_link = answer_key_link.concat("https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php?title=", yearAJ, "_AJHSME_Answer_Key");
                    problem_id = "".concat(yearAJ, " AJHSME #", problem);
                } else if ((amc == "10" || amc == "12") && (if_ab == true)) {
                    link = link.concat("https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php?title=", year, "_AMC_", amc, aorb, "_Problems/Problem_", problem);
                    answer_key_link = answer_key_link.concat("https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php?title=", year, "_AMC_", amc, aorb, "_Answer_Key");
                    problem_id = "".concat(year, " AMC ", amc, aorb, " #", problem);
                } else if ((amc == "AIME") && (if_ab == false)) {
                    link = link.concat("https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php?title=", year, "_AIME_", "_Problems/Problem_", problem);
                    answer_key_link = answer_key_link.concat("https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php?title=", year, "_AIME_Answer_Key");
                    problem_id = "".concat(year, " AIME #", problem);
                } else if ((amc == "AIME") && (if_ab == true)) {
                    if (aorb == "A") {
                        aorb = "I";
                    } else {
                        aorb = "II";
                    }
                    link = link.concat("https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php?title=", year, "_AIME_", aorb, "_Problems/Problem_", problem);
                    answer_key_link = answer_key_link.concat("https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php?title=", year, "_AIME_", aorb, "_Answer_Key");
                    problem_id = "".concat(year, " AIME ", aorb, " #", problem);
                } else {
                    link = link.concat("https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php?title=", year, "_AMC_", amc, "_Problems/Problem_", problem);
                    answer_key_link = answer_key_link.concat("https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php?title=", year, "_AMC_", amc, "_Answer_Key_");
                    problem_id = "".concat(year, " AMC ", amc, " #", problem);
                }
                var geolinks = ["https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php/2014_AMC_10A_Problems/Problem_23"]

                let xhr4 = new XMLHttpRequest();
                xhr4.open('GET', "https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php?title=Category:Introductory_Geometry_Problems&pagefrom=2010+AMC+12A+Problems%2FProblem+14", true);
                xhr4.send();

                xhr4.onreadystatechange = processt;
                function processt(e) {
                    if (xhr4.readyState == 4 && xhr4.status == 200) {
                        var georesp = xhr4.responseText;
                        georesp = georesp.replaceAll("'", '"');
                        georesp = georesp.replaceAll('<a href=\"', '<a target="_blank" href=\"https://wandering-sky-a896.cbracketdash.workers.dev/?https://www.artofproblemsolving.com');
                        georesp = georesp.split("<ul><li>")[1];
                        georesp = georesp.split("</li></ul>")[0];
                        georesp = "<ul><li>".concat(georesp, "</li></ul>");
                        console.log(georesp);
                    }
                }
                if (subject == "Geo") {
                    link = geolinks[0];
                    problem_id = geolinks[0].split("https://wandering-sky-a896.cbracketdash.workers.dev/?https://artofproblemsolving.com/wiki/index.php/")[1].replaceAll("_", " ").replaceAll("Problems/Problem", "#");
                } else if (subject == "Alg") {
                    link = shuffle(alglinks)[0];
                } else if (subject == "C+P") {
                    link = shuffle(cplinks)[0];
                } else if (subject == "NT") {
                    link = shuffle(ntlinks)[0];
                }
                var url = link;

                let xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.send();

                xhr.onreadystatechange = processRequest;
                function processRequest(e) {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var response = xhr.responseText;
                        response = response.replaceAll("'", '"');
                        response = response.replaceAll('<a href=\"', '<a href=\"https://wandering-sky-a896.cbracketdash.workers.dev/?https://www.artofproblemsolving.com');
                        response = response.replaceAll("//latex.artofproblemsolving.com", "https://wandering-sky-a896.cbracketdash.workers.dev/?https://latex.artofproblemsolving.com");
                        response = response.replaceAll("</p><p><img src=", "<br></br></p><p><img src=");
                        response = response.replaceAll("<a href=", "<a target='_blank\' href=");
                        response = response.replaceAll("<p>", "<p class=\"text\">");
                        var data = response.split("<h2><span class=\"mw-headline\" id=\"Problem")[1];
                        var probcode = data.split("<h2>")[0];
                        probcode = probcode.split("</span></h2>")[1];
                        console.log("<-----New Problem------->")
                        console.log("<-----Problem Link------>")
                        console.log(link.replaceAll("https://wandering-sky-a896.cbracketdash.workers.dev/?", ""));
                        console.log("<-----Problem Code------>")
                        console.log(probcode.replaceAll("https://wandering-sky-a896.cbracketdash.workers.dev/?", ""));
                        document.getElementById("problem_id").innerHTML = problem_id;
                        document.getElementById("problem").innerHTML = probcode;
                        document.getElementById("check_ans").style.display = "block";
                        console.log("<-----Solution Code----->")
                        solcode = data.split("<h2><span class=\"mw-headline\" id=\"See_")[0];
                        solcode = solcode.substring(solcode.indexOf("<h2><span"));
                        solcode = solcode.replaceAll("><span class=\"mw-headline\" ", " class=\"text\"><span class=\"mw-headline\" ");
                        console.log(solcode.replaceAll("https://wandering-sky-a896.cbracketdash.workers.dev/?", ""));
                        document.getElementById("get_solution").innerHTML = solcode;
                        console.log(document.getElementById("body").style.backgroundImage);
                        textc();
                        let xhr2 = new XMLHttpRequest();
                        xhr2.open('GET', answer_key_link, true);
                        xhr2.send();

                        xhr2.onreadystatechange = processRequest;
                        function processRequest(e) {
                            if (xhr2.readyState == 4 && xhr2.status == 200) {
                                var response2 = xhr2.responseText;
                                response2 = response2.split('<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><div class="mw-parser-output">')[1];
                                response2 = response2.split('<!--')[0];
                                response2 = response2.split('<li>');
                                response2 = response2[problem];
                                if (type == "AIME") {
                                    response2 = response2.substring(0, 3);
                                } else {
                                    response2 = response2.charAt(0);
                                }
                                console.log("<-----Answer Key Link----->")
                                console.log(answer_key_link.replaceAll("https://wandering-sky-a896.cbracketdash.workers.dev/?", ""));
                                console.log("<-----Problem Answer------>")
                                console.log(response2.replaceAll("https://wandering-sky-a896.cbracketdash.workers.dev/?", ""));
                                lol = response2;
                            }

                        }
                    }
                }

            }
            function conf() {
                confetti();
                confetti.reset();
                var duration = 1000;
                var animationEnd = Date.now() + duration;
                var defaults = {
                    startVelocity: 50,
                    spread: 1000,
                    ticks: 1000,
                    zIndex: 0
                };

                function randomInRange(min, max) {
                    return Math.random() * (max - min) + min;
                }

                var interval = setInterval(function() {
                    var timeLeft = animationEnd - Date.now();

                    if (timeLeft <= 0) {
                        return clearInterval(interval);
                    }

                    var particleCount = 200 * (timeLeft / duration);
                    // since particles fall down, start a bit higher than random
                    confetti(Object.assign({}, defaults, {
                        particleCount,
                        origin: {
                            x: randomInRange(0.1, 0.3),
                            y: Math.random() - 0.2
                        }
                    }));
                    confetti(Object.assign({}, defaults, {
                        particleCount,
                        origin: {
                            x: randomInRange(0.7, 0.9),
                            y: Math.random() - 0.2
                        }
                    }));
                }, 250);

            }

            function check_ans() {
                anss = ans.value.toString().toUpperCase();
                if (lol === anss) {
                    var x = document.getElementById("get_solution");
                    if (x.style.display === "none") {
                        x.style.display = "block";
                    } else {
                        x.style.display = "none";
                    }
                    conf();
                    document.getElementById("check_ans").style.display = "none";
                    document.getElementById("if_correct").style.display = "block";
                }
                if (lol != anss) {
                    document.getElementById("ans").classList.add("error");
                    setTimeout(function() {
                        document.getElementById("ans").classList.remove('error');
                    }, 300);
                }
                document.getElementById("ans").value = '';
            }
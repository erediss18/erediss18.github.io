/**
 *
 * SUMMARY
 * Contains all code and markup required to run each task. 
 * 
 *      1. LANDING & DEMOGRAPHICS
 *      2. TASK 1: IDENTIFY EMOTIONS (SENTENCES)
 *      3. TASK 2: IDENTIFY EMOTIONS (FACES)
 *      4. TASK 3: USING COPING STRATEGIES WITH EMOTIONAL IMAGES // omitted
 *      4b. Task 3b: COPING ASSESSMENT QUESTIONNAIRE
 *      5. TASK 4: EMOTION QUESTIONNAIRE
 *      6. TASK 5: REVERSE MIRROR PERSISTENCE TASK
 *      7. END OF EXP
 * 
 * @link   nbrosowsky.github.io
 * @author Nicholaus P. Brosowsky <nbrosowsky@gmail.com>
 * @since  2018-05-20
 *
 */

preLoad.addImages(preLoad.addURL("images/", [
        "001Happy.png", "003Anger.png", "004Surprise.png", "006Neutral.png", "009Fear.png", "011Surprise.png", "012Disgust.png", "015Sad.png", "016Fear.png", "020Disgust.png", "021Neutral.png", "026Surprise.png", "028Neutral.png", "029Happy.png", "032Disgust.png", "033Neutral.png", "034Happy.png", "036Sad.png", "037Fear.png", "039Surprise.png", "041Neutral.png", "042Happy.png", "043Sad.png", "044Anger.png", "045Surprise.png", "046Disgust.png", "053Anger.png", "054Surprise.png", "059Fear.png", "061Anger.png", "064Disgust.png", "067Sad.png", "069Anger.png", "074Happy.png", "076Sad.png", "079Fear.png", "083Neutral.png", "087Sad.png", "088Fear.png", "091Disgust.png", "093Happy.png", "094Sad.png", "096Anger.png", "097Surprise.png", "101Happy.png", "104Fear.png", "105Anger.png", "109Disgust.png", "110Neutral.png"
        ]))

// task 3 images
//, "1120.jpg", "1301.jpg", "2053.jpg", "2278.jpg", "2301.jpg", "2312.jpg", "2490.jpg", "2661.jpg", "2691.jpg", "2694.jpg", "2700.jpg", "2703.jpg", "2710.jpg", "2800.jpg", "3000.jpg", "3001.jpg", "3053.jpg", "3068.jpg", "3069.jpg", "3140.jpg", "3150.jpg", "3180.jpg", "3212.jpg", "3216.jpg", "3230.jpg", "3261.jpg", "3500.jpg", "3530.jpg", "6010.jpg", "6190.jpg", "6211.jpg", "6212.jpg", "6312.jpg", "6313.jpg", "6563.jpg", "6836.jpg", "6940.jpg", "7136.jpg", "7360.jpg", "7361.jpg"

preLoad.loadImages();


/**
 * LANDING & DEMOGRAPHICS
 *
 *   
 *
 */


// transition from landing to demographics
$("#landing_demographics").click(function () {
    // hide landing page
    $("#landing").hide();

    // fallback: if data array has not been created yet
    if ($.isEmptyObject(data) || typeof data === 'undefined') {
        data = Experiment.init();
        console.log(data)
    }

    document.getElementById('landing').remove();

    // show demographics page
    $("#demographics").show();
})


// transition from demographics to task 1 instructions
$("#demographics_task-1-instructions").click(function () {

    // hide demographics page
    $("#demographics").hide();


    // record demographics responses in data object
    data.demographics.age = $("#age").val() ? $("#age").val() : "no response";
    data.demographics.race = g.getRadio("race");
    data.demographics.ethnicity = $("#ethnicity").val() ? $("#ethnicity").val() : "no response";
    data.demographics.gender = g.getRadio("gender");
    data.demographics.orientation = g.getRadio("orientation");
    data.demographics.class = g.getRadio("class");
    data.demographics.birth = $("#birth").val() ? $("#birth").val() : "no response";
    data.demographics.browserInfo = g.BrowserInfo.join(",")


    document.getElementById('demographics').remove();

    // show task 1 instructions
    task1.create_inst();
})



/**
 * TASK 1: IDENTIFY EMOTIONS (SENTENCES)
 *
 *   
 *
 */


// task 1 functions
var task1 = function () {

    var time1,
        time2,
        trialCounter = 0

    var markup_instructions = [
        '<div id="task-1-instructions" class="standard-display absolute-center">',
            '<div style="width:80%;">',
                '<p>The purpose of this first task is to observe the manner in which individuals match emotional words with sentences with emotional content.</p>',
                '<p>Please read each sentence and mark the word that seems to be the best match for the underlined person or persons in each sentence.</p>',
                '<br>',
               ' <div style="text-align: right">',
                    '<button id="task-1-instructions_task-1" style="text-align: right" class="button-green">NEXT</button>',
               ' </div>',
           ' </div>',
       ' </div>'
    ].join("\n");

    var markup_exp = [
        '<div id="task-1" class="standard-display absolute-center" style="display: none">',
            '<div style="width: 80%;">',
                '<p><strong>Read each sentence and mark the word that seems to be the best match for the underlined person or persons in each sentence.</strong></p>',
               ' <p id="task-1-prompt">When the calves\' brains dinner is mistakenly brought to the table, one customer seated there quickly turns his head away.</p>',
                '<input type="radio" name="task-1-radio" value="Happiness"> Happiness <br>',
                '<input type="radio" name="task-1-radio" value="Sadness"> Sadness <br>',
                '<input type="radio" name="task-1-radio" value="Fear"> Fear <br>',
                '<input type="radio" name="task-1-radio" value="Anger"> Anger <br>',
                '<input type="radio" name="task-1-radio" value="Disgust"> Disgust <br>',
                '<input type="radio" name="task-1-radio" value="Surprise"> Surprise <br>',
                '<input type="radio" name="task-1-radio" value="Neutral"> Neutral <br>',
                '<br>',
                '<div style="text-align: right">',
                   ' <button id="task-1-submit" style="text-align: right" class="button-green">NEXT</button>',
               ' </div>',
            '</div>',
       ' </div>'
    ].join("\n");

    function create_inst() {
        $("#main-display").html(markup_instructions)

        $("#task-1-instructions_task-1").click(function () {
            // clear display
            $("#main-display").html("");
            task1.create_exp();
            // trigger first trial
            task1.start();

        })
    };

    function create_exp() {
        $("#main-display").html(markup_exp);

        // submit response on task 1 trial, triggers next trial
        $("#task-1-submit").click(function () {
            if (!(g.validateResponse("task-1-radio"))) {
                alert("You must give a response before moving forward")
                return
            }


            // hide task 1
            $("#task-1").hide();

            // record response time
            time2 = window.performance.now()

            // record trial data
            data.task1[trialCounter].response = g.getRadio("task-1-radio")
            g.clearRadio("task-1-radio");
            data.task1[trialCounter].RT = time2 - time1

            // increase trial counter
            trialCounter++


            if (trialCounter < data.task1.length) {
                // trigger next trial in 500 ms.
                eventTimer.setTimeout(task1.start, 500)
            } else {

                // if no more trials, trigger task 2
                $("#main-display").html("");
                task2.create_inst();

                if (preLoad.manualCheck()) {
                    // reset trial counter for next task
                    trialCounter = 0
                    // trigger next task instructions
                    eventTimer.setTimeout(function () {
                        $("#task-2-instructions").show();
                    }, 500)
                } else {
                    // if images have not finished loading, show load screen
                    $("#task-2-instructions").hide();
                    $("#images-loading").show();
                }

            }


        })

    }


    function start() {
        // add prompt
        $("#task-1-prompt").html(data.task1[trialCounter].prompt)

        // show trial
        $("#task-1").show();

        // get timestamp
        time1 = window.performance.now();
    }

    return {
        start: start,
        create_inst: create_inst,
        create_exp: create_exp
    }

}()



/**
 * TASK 2: IDENTIFY EMOTIONS (FACES)
 *
 *   
 *
 **/

var task2 = function () {
    var time1,
        time2,
        trialCounter = 0

    var markup_inst = [
         '<div id="task-2-instructions" class="standard-display absolute-center" style="display: none">',
            '<div style="width:80%;">',
                '<p>The purpose of the next task is to observe the manner in which individuals match emotional facial expressions - with - sentences with emotional content.</p>',
                '<p>Please read each sentence and mark the facial expression that seems to be the best match for the underlined person or persons in each sentence. <em>You need not be concerned with either male/female or age differences between persons in the sentences and the person depicted in the photographs</em></p><br>',
                '<div style="text-align: right">',
                    '<button id="task-2-instructions_task-2" style="text-align: right" class="button-green">NEXT</button>',
                '</div>',
            '</div>',
        '</div>'
    ].join("\n")

    var markup_exp = [
        '<div id="task-2" class="standard-display absolute-center" style="display: none">',
            '<div style="width:100%;">',
                '<p><strong>Read each sentence and mark the facial expression that seems to be the best match for the underlined person or persons in each sentence.<em>You need not be concerned with either male/female or age differences between persons in the sentences and the person depicted in the photographs.</em> </strong></p><br>',
               ' <p id="task-2-prompt"> When the calves\' brains dinner is mistakenly brought to the table, one customer seated there quickly turns his head away.</p>',
                '<div id="task-2-faces" style="width: 100%" class="flexCenter flexRow"></div>',
                '<div style="text-align: right">',
                    '<button id="task-2-submit" style="text-align: right" class="button-green">NEXT</button>',
                '</div>',
            '</div>',
        '</div>'
    ].join("\n")


    function create_inst() {
        $("#main-display").html(markup_inst)

        // transition from task 2 instructions to task 2
        $("#task-2-instructions_task-2").click(function () {
            $("#main-display").html("");
            task2.create_exp();
            task2.start();
        })


    }

    function create_exp() {
        $("#main-display").html(markup_exp)


        $("#task-2-submit").click(function () {
            if (!(g.validateResponse("face-radio"))) {
                alert("You must give a response before moving forward")
                return
            }

            $("#task-2").hide()

            timer2 = window.performance.now();

            var temp_image = g.getRadio("face-radio")
            g.clearRadio("face-radio");

            // strips string of image info and add to data
            var temp_response = temp_image.replace(/[0-9]/g, '');
            temp_response = temp_response.replace('.png', '');

            data.task2[trialCounter].response_image = temp_image
            data.task2[trialCounter].response_emotion = temp_response
            data.task2[trialCounter].RT = timer2 - timer1

            // remove images from last trial
            $('#task-2-faces').html("")

            // increase trial count
            trialCounter++

            if (trialCounter < data.task2.length) {
                // trigger new trial in 500 ms
                eventTimer.setTimeout(task2.start, 500)
            } else {

                trialCounter = 0;
                eventTimer.setTimeout(function () {
                    $("#main-display").html("")
                    task3.create_inst();
                }, 500);

            }


        })

    }

    function start() {
        $("#task-2-prompt").html(data.task2[trialCounter].prompt)

        var temp_images = g.shuffle(data.task2[trialCounter].images)
        var temp_count = 0

        temp_images.forEach(function (each) {
            $('#task-2-faces').append('<div class="face-container flexColumn"><img src="images/' + temp_images[temp_count] + '" style="width: 100%"> <input style="margin-left: 0" type="radio" name="face-radio" value="' + temp_images[temp_count] + '"></div>');
            temp_count++
        })

        timer1 = window.performance.now();
        $("#task-2").show();
    }

    return {
        start: start,
        create_inst: create_inst,
        create_exp: create_exp
    }


}()

/**
 * TASK 3: USING COPING STRATEGIES WITH EMOTIONAL IMAGES
 *
 *   
 *
 **/

//
//TODO: RESET DISPLAY TIMES TO PROPER
//
//
//var task3 = function () {
//    var time1,
//        time2,
//        trialCounter = 0
//
//    var markup_inst = [
//         '<div id="task-3-instructions" class="standard-display absolute-center">',
//            '<div style="width:80%">',
//                '<p>The purpose of this next task is to observe the manner in which individuals cope with emotionally-charged images.</p>',
//                '<p>For each trial, an image will be briefly displayed. After viewing the image, you will be given two options of how to cope. When the image is presented again, cope using the option you chose.</p><br>',
//                '<p>Throughout this task, your coping options will be:</p>',
//                '<ul>',
//                    '<li><strong>Distract:</strong> While looking at the image, think about something unemotional.</li>',
//                    '<li><strong>Reappraise:</strong> While looking at the image, consider the image having a different meaning.</li>',
//                    '<li><strong>Suppress:</strong> While looking at the image, try not to have an emotional reaction.</li>',
//                    '<li><strong>Accept:</strong>While looking at the image, acknowledge your emotional reaction without trying to change it </li>',
//                '</ul>',
//               ' <br>',
//                '<p> Let’s start with a couple of practice trials.</p>',
//               ' <div style="text-align: right">',
//                    '<button id="task-3-instructions_task-3" style="text-align: right" class="button-green">NEXT</button>',
//                '</div>',
//           ' </div>',
//        '</div>'
//    ].join("\n");
//
//    var markup_instB = [
//        '<div id="task-3-instructions-B" class="standard-display absolute-center" ">',
//            '<div style="width:80%;">',
//                '<p>Great! Let’s do a couple more. This time, use your own strategies for <em>distract, reappraise, suppress, and accept.</em></p>',
//                '<ul>',
//                    '<li><strong>Distract:</strong> While looking at the image, think about something unemotional.</li>',
//                    '<li><strong>Reappraise:</strong> While looking at the image, consider the image having a different meaning.</li>',
//                    '<li><strong>Suppress:</strong> While looking at the image, try not to have an emotional reaction.</li>',
//                    '<li><strong>Accept:</strong>While looking at the image, acknowledge your emotional reaction without trying to change it.</li>',
//                '</ul>',
//                '<br>',
//                '<div style="text-align: right">',
//                    '<button id="task-3-start-experiment" style="text-align: right" class="button-green">NEXT</button>',
//                '</div>',
//           ' </div>',
//        '</div>'
//    ].join("\n");
//
//    var markup_exp = [
//        '<div id="task-3" class="standard-display absolute-center" style="display: none">',
//            '<div id="task-3-display" style="width:100%;">',
//            '</div>',
//        '</div>'
//    ].join("\n");
//
//    function create_inst() {
//        $("#main-display").html(markup_inst);
//
//        // hide instructions trigger first trial
//        $("#task-3-instructions_task-3").click(function () {
//            $("#main-display").html("");
//
//            task3.create_exp();
//            $("#task-3").show();
//
//            // end instructions / triggers first trial //
//            task3.blank();
//        })
//    };
//
//    function create_exp() {
//        $("#main-display").html(markup_exp)
//    };
//
//    function create_instB() {
//        $("#main-display").html(markup_instB);
//
//        // restart task 3 after second instructions
//        $("#task-3-start-experiment").click(function () {
//            $("#task-3-instructions-B").remove();
//            task3.create_exp();
//            $("#task-3").show();
//            task3.blank();
//        })
//
//    }
//
//    /// task 3
//    var feedbackTypes = {
//        Distract: "Distract involves thinking about something unemotional and unrelated to the image.",
//        Reappraise: "This is an example of reappraise, or thinking about the image in a way that gives it different meaning.",
//        Suppress: "Suppress involves pushing away emotional reactions.",
//        Accept: "This is an example of accept, or acknowledging your feelings without trying to change them."
//    }
//
//
//    /// all events for task 3 in chronological order
//    // 1. blank screen for 2000 ms
//    function blank() {
//        // initial blank screen / 2000 ms
//        $("#task-3-display").hide();
//        eventTimer.setTimeout(image1, 2000);
//    };
//
//    // 2. display image for 500 ms
//    function image1() {
//        // display image
//        $("#task-3-display").html("<img style='width: 100%' src=images/" + data.task3[trialCounter].image + ">")
//        $("#task-3-display").show();
//
//        // trigger choice display in 500 ms
//        eventTimer.setTimeout(choose, 500)
//
//    };
//
//    // 3. Choose coping strategy
//    function choose() {
//        // add display with coping choices
//        $("#task-3-display").html("<div class='flexCenter flexColumn noSelect'>" +
//            "<p class='task-3-choose'>Choose:</p>" +
//            "<p class='task-3-choose task-3-choices'>" + data.task3[trialCounter].choices[0] + "</p>" +
//            "<p class='task-3-choose'>or</p>" +
//            "<p class='task-3-choose task-3-choices'>" + data.task3[trialCounter].choices[1] + "</p>" +
//            "</div>"
//        );
//
//        // get timestamp of presentation
//        timer1 = window.performance.now();
//
//        // make choices clickable
//        $(".task-3-choices").click(function () {
//            var r = $(this).text()
//            //            console.log(r);
//            recordResponse("choices", r);
//        })
//    };
//
//    // (PRACTICE ONLY)
//    // 4. Choose example that best fits coping strategy
//    function practice_choose() {
//        // add display with coping choices
//        $("#task-3-display").html("<div class='flexCenter flexColumn noSelect'>" +
//            "<p class='task-3-examples-header'>Which of the following, is a good example of " + data.task3[trialCounter].choose_cope + "?</p>" +
//            "<ul style='list-style-type: none; padding: 0;'>" +
//            "<li id='0' class='task-3-examples '>" + data.task3[trialCounter].examples[0] + "</li>" +
//            "<li id='1' class='task-3-examples '>" + data.task3[trialCounter].examples[1] + "</li>" +
//            "<li id='2' class='task-3-examples '>" + data.task3[trialCounter].examples[2] + "</li>" +
//            "<li id='3' class='task-3-examples '>" + data.task3[trialCounter].examples[3] + "</li>" +
//            "</div>" +
//            "<div id='task-3-feedback' style='height: 150px'></div>"
//        );
//
//
//
//        // get timestamp of presentation
//        timer1 = window.performance.now();
//
//        // make choices clickable
//        $(".task-3-examples").click(function () {
//            var r = $(this).attr('id')
//            //            console.log(r);
//            recordResponse("practice", r);
//        })
//
//        // show display
//        $("#task-3-display").show();
//    };
//
//    // 5. instruction to prepare strategy
//    function prepare() {
//
//        $("#task-3-display").html("<div class='flexCenter flexColumn noSelect'>" +
//            "<p style='font-size: 40px'>Prepare to </p>" +
//            "<p style='font-size: 40px'>" + data.task3[trialCounter].choose_cope + "</p>"
//        );
//
//        $("#task-3-display").show();
//
//        // 2000 ms
//        eventTimer.setTimeout(image2, 2000)
//
//    };
//
//    
//    // 6. second image presentation for 5000 ms
//    function image2() {
//        // display image
//        $("#task-3-display").html("<img style='width: 100%' src=images/" + data.task3[trialCounter].image + ">")
//        $("#task-3-display").show();
//
//        // trigger choice display in 5000 ms
//        eventTimer.setTimeout(rate, 5000)
//    }
//
//    // 7. rate intensity of emotions and indicate how you coped
//    function rate() {
//
//        // insert rating and text questions
//        $("#task-3-display").html(
//            "<div class='flexCenter flexColumn'>" +
//            "<p style='font-size: 20px;'>Rate the intensity of your emotions</p>" +
//            "<div style='width: 100%' class='flexRow'>" +
//            "<div class='rate-container flexColumn'><input style='margin-left: 0' type='radio' name='task-3-rate' value='1'><p style='margin: 5px; text-align: center; font-size: 30px'>1</p></div>" +
//            "<div class='rate-container flexColumn'><input style='margin-left: 0' type='radio' name='task-3-rate' value='2'><p style='margin: 5px; text-align: center; font-size: 30px'>2</p></div>" +
//            "<div class='rate-container flexColumn'><input style='margin-left: 0' type='radio' name='task-3-rate' value='3'><p style='margin: 5px; text-align: center; font-size: 30px'>3</p></div>" +
//            "<div class='rate-container flexColumn'><input style='margin-left: 0' type='radio' name='task-3-rate' value='4'><p style='margin: 5px; text-align: center; font-size: 30px'>4</p></div>" +
//            "<div class='rate-container flexColumn'><input style='margin-left: 0' type='radio' name='task-3-rate' value='5'><p style='margin: 5px; text-align: center; font-size: 30px'>5</p></div>" +
//            "<div class='rate-container flexColumn'><input style='margin-left: 0' type='radio' name='task-3-rate' value='6'><p style='margin: 5px; text-align: center; font-size: 30px'>6</p></div>" +
//            "<div class='rate-container flexColumn'><input style='margin-left: 0' type='radio' name='task-3-rate' value='7'><p style='margin: 5px; text-align: center; font-size: 30px'>7</p></div>" +
//            "<div class='rate-container flexColumn'><input style='margin-left: 0' type='radio' name='task-3-rate' value='8'><p style='margin: 5px; text-align: center; font-size: 30px'>8</p></div>" +
//            "<div class='rate-container flexColumn'><input style='margin-left: 0' type='radio' name='task-3-rate' value='9'><p style='margin: 5px; text-align: center; font-size: 30px'>9</p></div>" +
//            "<div class='rate-container flexColumn'><input style='margin-left: 0' type='radio' name='task-3-rate' value='10'><p style='margin: 5px; text-align: center; font-size: 30px'>10</p></div>" +
//            "</div>" +
//            "<br>" +
//            "<p style='font-size: 20px'>How did you " + data.task3[trialCounter].choose_cope + "?</p>" +
//            "<textarea name='task-3-how' id='task-3-how' rows='3' style='width: 100%; font-size: 20px'></textarea>" +
//            "<div style='text-align: right'><button id='task-3-rating-submit' style='text-align: right;' class='button-green'>Submit</button></div>" +
//            "</div>"
//        );
//
//        // Submit button function for newly created button
//        $("#task-3-rating-submit").click(function () {
//            if (!(g.validateResponse(["task-3-rate", "task-3-how"]))) {
//                alert("You must give a repsonse before moving forward")
//                return
//            }
//            // when submit button is clicked, collect responses and advance to the next trial
//            task3.nextTrial();
//        });
//
//
//        // get timestamp for stimulus presentation
//        timer1 = window.performance.now();
//
//        // show display
//        $("#task-3-display").show();
//    };
//
//    // record responses from the choice and example 
//    function recordResponse(type, response) {
//        // records clicked response and triggers next screen
//
//        timer2 = window.performance.now()
//        // if on the choice trial...
//        if (type == "choices") {
//            $("#task-3-display").hide();
//            $("#task-3-display").html("");
//
//            data.task3[trialCounter].choose_cope = response;
//            data.task3[trialCounter].choose_cope_RT = timer2 - timer1;
//
//            // if a practice trial trigger practice otherwise skip
//            if (data.task3[trialCounter].practice == true) {
//                eventTimer.setTimeout(practice_choose, 250)
//            } else {
//                eventTimer.setTimeout(prepare, 250)
//            }
//
//        }
//
//        if (type == "practice") {
//            var temp_response = data.task3[trialCounter].example_types[response]
//            data.task3[trialCounter].choose_example.push(temp_response);
//            data.task3[trialCounter].choose_example_RT.push(timer2 - timer1);
//
//            // determine accuracy
//            if (data.task3[trialCounter].example_types[response] == data.task3[trialCounter].choose_cope) {
//                // if correct display feedback and continue button
//                $("#task-3-feedback").html("<h3 style='width: 100%; text-align: center; margin: 0'>Correct: <em>" + feedbackTypes[temp_response] + "</em></h3>" +
//                    "<div style='text-align: right'><button id='task-3-continue' style='text-align: right; margin-bottom: 0' class='button-green'>continue</button></div>")
//
//
//                $("#task-3-continue").click(function () {
//                    $("#task-3-display").hide();
//                    $("#task-3-display").html("");
//                    eventTimer.setTimeout(prepare, 250)
//                });
//
//            } else {
//                data.task3[trialCounter].practice_errors++
//                    // if incorrect, display feedback and instructions to try again.
//                    $("#task-3-feedback").html("<h3 style='width: 100%; text-align: center; margin: 0'>Incorrect: <em>" + feedbackTypes[temp_response] + "</em> Please try again.</h3>")
//
//            }
//        }
//    };
//
//    // triggers next trial and record rating responses
//    function nextTrial() {
//        // hide display
//        $("#task-3-display").hide();
//
//        // get response timestamp
//        timer2 = window.performance.now();
//
//        // record rating and text response
//        data.task3[trialCounter].rating = $('[name="task-3-rate"]:checked').val() ? $('[name="task-3-rate"]:checked').val() : "no response";
//        data.task3[trialCounter].how = $('#task-3-how').val() ? $('#task-3-how').val() : "no response";
//        data.task3[trialCounter].rating_how_RT = timer2 - timer1
//
//        //advance trial counter
//        trialCounter++
//
//        // if practice trials are over, show new instructions
//        if (trialCounter == 20) {
//            $("#task-3").hide();
//            create_instB();
//
//            // if more trials left trigger next
//        } else if (trialCounter < data.task3.length) {
//            blank();
//            // if no more trials, trigger next instructions
//        } else {
//            $("#main-display").html("");
//            eventTimer.setTimeout(function () {
//                task4.create_inst();
//            }, 250)
//        }
//
//    }
//
//    return {
//        create_inst: create_inst,
//        create_instB: create_instB,
//        create_exp: create_exp,
//        blank: blank,
//        image1: image1,
//        practice_chooose: practice_choose,
//        prepare: prepare,
//        image2: image2,
//        rate: rate,
//        recordResponse: recordResponse,
//        nextTrial: nextTrial
//    }
//
//}()
//


/**
 * TASK 3b
 *
 *   
 *
 **/

// Task 3B functions
var task3b = function () {
    var time1,
        time2,
        trialCounter = 0


    var markup_inst = [
        '<div id="task-3b-instructions" class="standard-display absolute-center">',
            '<div style="width:80%">',
                '<p>For this next task, we are interested in how you typically deal with situations and problems. Different people use different strategies to deal with situations and problems in their lives. On the next few pages are a number of strategies that people may use to deal with situations and problems. A number of the items refer to dealing with situations at work or school. If you are not currently working or attending school, answer these items instead using your daily duties and activities. </p>',
                '<p> Please read each statement carefully and indicate how true,<strong><em> in general</strong></em>, each statement is for you. </p>',
                '<br>',
               ' <div style="text-align: right">',
                    '<button id="task-3b-instructions_task-3b" style="text-align: right" class="button-green">NEXT</button>',
                '</div>',
           ' </div>',
       ' </div>'
    ].join("\n")


    var markup_exp = [
        '<div id="task-3b" class="standard-display absolute-center" style="display: none">',
            '<div id="task-3b-display" style="width:100%;">',
               ' <p> <strong>Please read each statement carefully and indicate how true, <em>in general</em>, each statement is for you.  </strong> </p>',
               ' <br>',
                '<p id="task-3b-prompt">I often think that I respond with feelings that others would not have.</p>',
                '<br>',
               ' <div class="flexCenter flexRow" style="width: 100%">',
                    '<div style="width: 18%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-3b-radio" value="1">',
                        '<p style="font-size: 20px; margin-bottom: 0">1</p>',
                        '<p style="height: 33.333%"> Not at all true for me</p>',
                    '</div>',
                    '<div style="width: 18%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-3b-radio" value="2">',
                        '<p style="font-size: 20px; margin-bottom: 0">2</p>',
                       ' <p style="height: 33.333%"> Somewhat true for me</p>',
                    '</div>',
                    '<div style="width: 18%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-3b-radio" value="3">',
                        '<p style="font-size: 20px; margin-bottom: 0">3</p>',
                        '<p style="height: 33.333%"> Moderately true for me</p>',
                    '</div>',
                    '<div style="width: 18%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-3b-radio" value="4">',
                        '<p style="font-size: 20px; margin-bottom: 0">4</p>',
                        '<p style="height: 33.333%"> very much true for me</p>',
                    '</div>',

                    '<div style="width: 18%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                       ' <input style="margin: 0" type="radio" name="task-3b-radio" value="5">',
                        '<p style="font-size: 20px; margin-bottom: 0">5</p>',
                        '<p style="height: 33.333%"> Extremely true for me</p>',
                    '</div>',
               ' </div>',
               ' <div style="text-align: right">',
                    '<button id="task-3b-submit" style="text-align: right" class="button-green">NEXT</button>',
                '</div>',
           ' </div>',
       ' </div>'

    ].join("\n");

    function create_inst() {
        $("#main-display").html(markup_inst)

        $("#task-3b-instructions_task-3b").click(function () {
            $("#main-display").html("");
            task3b.create_exp();

            trialCounter = 0;
            task3b.start();
        });
    };

    function create_exp() {
        $("#main-display").html(markup_exp);

        $("#task-3b-submit").click(function () {
            if (!(g.validateResponse("task-3b-radio"))) {
                alert("You must provide a response before moving forward.")
                return
            }

            $("#task-3b").hide();

            timer2 = window.performance.now();
            var temp_response = g.getRadio("task-3b-radio");
            g.clearRadio("task-3b-radio");

            data.task3b[trialCounter].response = temp_response;
            //            console.log(temp_response)
            data.task3b[trialCounter].RT = timer2 - timer1
            //            console.log(timer2 - timer1)

            trialCounter++

            if (trialCounter < data.task3b.length) {
                eventTimer.setTimeout(task3b.start, 250)
            } else {
                eventTimer.setTimeout(function () {
                    task4.create_inst();
                }, 250)
            }

        })


    };

    function start() {
        $("#task-3b-prompt").html(data.task3b[trialCounter].prompt);

        timer1 = window.performance.now();
        $("#task-3b").show();
    }

    return {
        create_inst: create_inst,
        create_exp: create_exp,
        start: start
    }
}();




/**
 * TASK 4:  Dealing with feelings questionnaire
 *
 *   
 *
 **/

// Task 4 functions
var task4 = function () {
    var time1,
        time2,
        trialCounter = 0


    var markup_inst = [
        '<div id="task-4-instructions" class="standard-display absolute-center">',
            '<div style="width:80%">',
                '<p>For this next task, we are interested in how you deal with your feelings or emotions – for example, how you deal with feelings of anger, sadness, anxiety, or sexual feelings. We all differ in how we deal with these feelings – so there are no right or wrong answers.</p>',
                '<p> Please read each sentence carefully and answer as to how you have dealt with your feelings during the past month.</p>',
                '<br>',
               ' <div style="text-align: right">',
                    '<button id="task-4-instructions_task-4" style="text-align: right" class="button-green">NEXT</button>',
                '</div>',
           ' </div>',
       ' </div>'
    ].join("\n")


    var markup_exp = [
        '<div id="task-4" class="standard-display absolute-center" style="display: none">',
            '<div id="task-4-display" style="width:100%;">',
               ' <p> <strong>Please read each sentence carefully and answer as to how you have dealt with your feelings during the past month.  </strong> </p>',
               ' <br>',
                '<p id="task-4-prompt">I often think that I respond with feelings that others would not have.</p>',
                '<br>',
               ' <div class="flexCenter flexRow" style="width: 100%">',
                    '<div style="width: 14.667%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-4-radio" value="1">',
                        '<p style="font-size: 20px; margin-bottom: 0">1</p>',
                        '<p style="height: 33.333%"> Very untrue of me</p>',
                    '</div>',
                    '<div style="width: 14.667%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-4-radio" value="2">',
                        '<p style="font-size: 20px; margin-bottom: 0">2</p>',
                       ' <p style="height: 33.333%"> Somewhat untrue of me</p>',
                    '</div>',
                    '<div style="width: 14.667%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-4-radio" value="3">',
                        '<p style="font-size: 20px; margin-bottom: 0">3</p>',
                        '<p style="height: 33.333%"> Slightly untrue of me</p>',
                    '</div>',
                    '<div style="width: 14.667%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-4-radio" value="4">',
                        '<p style="font-size: 20px; margin-bottom: 0">4</p>',
                        '<p style="height: 33.333%"> Slightly true of me</p>',
                    '</div>',

                    '<div style="width: 14.667%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                       ' <input style="margin: 0" type="radio" name="task-4-radio" value="5">',
                        '<p style="font-size: 20px; margin-bottom: 0">5</p>',
                        '<p style="height: 33.333%"> Somewhat true of me</p>',
                    '</div>',

                    '<div style="width: 14.667%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                       ' <input style="margin: 0" type="radio" name="task-4-radio" value="6">',
                        '<p style="font-size: 20px; margin-bottom: 0">6</p>',
                        '<p style="height: 33.333%"> Very true of me</p>',
                    '</div>',
               ' </div>',
               ' <div style="text-align: right">',
                    '<button id="task-4-submit" style="text-align: right" class="button-green">NEXT</button>',
                '</div>',
           ' </div>',
       ' </div>'

    ].join("\n");

    function create_inst() {
        $("#main-display").html(markup_inst)

        $("#task-4-instructions_task-4").click(function () {
            $("#main-display").html("");
            task4.create_exp();

            trialCounter = 0;
            task4.start();
        });
    };

    function create_exp() {
        $("#main-display").html(markup_exp);

        $("#task-4-submit").click(function () {
            if (!(g.validateResponse("task-4-radio"))) {
                alert("You must provide a response before moving forward.")
                return
            }

            $("#task-4").hide();

            timer2 = window.performance.now();
            var temp_response = g.getRadio("task-4-radio");
            g.clearRadio("task-4-radio");

            data.task4[trialCounter].response = temp_response;
            //            console.log(temp_response)
            data.task4[trialCounter].RT = timer2 - timer1
            //            console.log(timer2 - timer1)

            trialCounter++

            if (trialCounter < data.task4.length) {
                eventTimer.setTimeout(task4.start, 250)
            } else {
                eventTimer.setTimeout(function () {
                    task5.create_inst();
                }, 250)
            }

        })


    };

    function start() {
        $("#task-4-prompt").html(data.task4[trialCounter].prompt);

        timer1 = window.performance.now();
        $("#task-4").show();
    }

    return {
        create_inst: create_inst,
        create_exp: create_exp,
        start: start
    }
}();







/**
 * TASK 5: Perisistence mirror tracing
 *
 *   
 *
 **/

// Task 5 functions
var task5 = (function () {

    // set variables
    var buzz = new Howl({
            src: ['sounds/buzzer.mp3']
        }),
        canvas,
        ctx,
        lastX,
        lastY,
        flipped = true,
        drawing = false,
        line = [],
        attempt = 1,
        timeout_timer,
        task_timer,
        time0,
        time1,
        time2


    var markup_inst = [
         '<div id="task-5-instructions" class="standard-display absolute-center">',
            '<div style="width:80%">',
                '<p>The purpose of this next task is to observe people’s eye-hand coordination. <strong>Be sure to wear the headphones provided while completing this next task.</strong> </p>',
               ' <p> On the next screen you will see a star. Use the computer mouse to trace the star as quickly as you can without making any mistakes. If you make a mistake or go too long without moving the mouse, a buzzer will sound, and you will have to start over .</p>',
               ' <p>We encourage you to do your best. You’ll have five minutes to complete this task. If you wish to give up before the timer runs out, press the spacebar.</p><br>',
                '<div style="text-align: right">',
                   ' <button id="task-5-instructions_task-5" style="text-align: right" class="button-green">NEXT</button>',
               ' </div>',
            '</div>',
        '</div>'
    ].join("\n");

    var markup_exp = [
        ' <div id="task-5" class="standard-display absolute-center" style="display: none">',
            '<div id="task-5-display" style="width:100%;" class="flexColumn">',
               ' <h2>Time Left: <span id="timer">0:00</span></h2>',
                '<p>Click the circle to begin tracing.</p>',
                '<canvas style="z-index: 2" id="canvas" width=500 height=500></canvas>',
                '<div style="text-align: center">',
                   ' <button id="task-5-give-up" style="text-align: right" class="button-green">GIVE UP</button>',
                    '<p>(Or press the SPACEBAR to give up)</p>',
               ' </div>',
            '</div>',
        '</div>'

    ].join("\n")

    var markup_post = [
         '<div id="task-5-post" class="standard-display absolute-center" style="display: none">',
            '<div style="width:100%;" class="flexColumn">',
                '<p>This about your experience with the start-tracing task</p>',
                '<p>How much did your emotions interfere with your ability to complete the tracing task?</p>',
                '<br>',
                '<div class="flexCenter flexRow" style="width: 100%">',
                   ' <div style="width: 10.1111%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-5-radio" value="1">',
                        '<p style="font-size: 20px; margin-bottom: 0">1</p>',
                        '<p style="height: 33.333%">No interference</p>',
                    '</div>',
                    '<div style="width: 10.1111%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                       ' <input style="margin: 0" type="radio" name="task-5-radio" value="2">',
                        '<p style="font-size: 20px; margin-bottom: 0">2</p>',
                        '<p style="height: 33.333%"></p>',
                    '</div>',
                    '<div style="width: 10.1111%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-5-radio" value="3">',
                       ' <p style="font-size: 20px; margin-bottom: 0">3</p>',
                       ' <p style="height: 33.333%"></p>',
                    '</div>',
                    '<div style="width: 10.1111%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-5-radio" value="4">',
                        '<p style="font-size: 20px; margin-bottom: 0">4</p>',
                        '<p style="height: 33.333%"></p>',
                   ' </div>',
                    '<div style="width: 10.1111%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                       ' <input style="margin: 0" type="radio" name="task-5-radio" value="5">',
                        '<p style="font-size: 20px; margin-bottom: 0">5</p>',
                       ' <p style="height: 33.333%">Moderate interference</p>',
                    '</div>',

                    '<div style="width: 10.1111%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-5-radio" value="6">',
                        '<p style="font-size: 20px; margin-bottom: 0">6</p>',
                       ' <p style="height: 33.333%"></p>',
                    '</div>',
                    '<div style="width: 10.1111%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-5-radio" value="7">',
                        '<p style="font-size: 20px; margin-bottom: 0">7</p>',
                        '<p style="height: 33.333%"></p>',
                    '</div>',
                    '<div style="width: 10.1111%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                       ' <input style="margin: 0" type="radio" name="task-5-radio" value="8">',
                       ' <p style="font-size: 20px; margin-bottom: 0">8</p>',
                        '<p style="height: 33.333%"></p>',
                    '</div>',
                    '<div style="width: 10.1111%; height: 120px; margin: 1%; text-align: center" class="flexColumn">',
                        '<input style="margin: 0" type="radio" name="task-5-radio" value="9">',
                        '<p style="font-size: 20px; margin-bottom: 0">9</p>',
                       ' <p style="height: 33.333%">Extreme interference</p>',
                    '</div>',
               ' </div>',
               ' <div style="text-align: right">',
                   ' <button id="task-5-submit" style="text-align: right" class="button-green">NEXT</button>',
                '</div>',
           ' </div>',
        '</div>'
    ].join("\n");

    function create_inst() {
        $("#main-display").html(markup_inst);

        // transition from instructions to task
        $("#task-5-instructions_task-5").click(function () {
            $("#main-display").html("");

            create_exp();
        })
    };

    function create_exp() {
        $("#main-display").html(markup_exp)
        canvas = document.getElementById("canvas")
        ctx = canvas.getContext("2d")

        // reset drawing task 
        task5.reset();
        // start timer
        task_timer = task5.startTimer(5, 0);

        // task start timestamp
        timer0 = window.performance.now();
        // attempt start timestamp
        timer1 = window.performance.now();

        // listen for the spacebar
        $("body").on("keypress", task5.listenSpace)

        // on canvas click, check to see if it is inside start circle
        $("#canvas").click(
            function (e) {
                var pos = task5.findPos(this);
                var c = this.getContext('2d')
                task5.start(e, pos, c)
            });

        // on canvas mousemovement
        $("#canvas").mousemove(function (e) {
            var pos = task5.findPos(this);
            var c = this.getContext('2d')
            task5.onMove(e, pos, c);
        });

        // on canvas touch movement (not sure if touchscreens are working properly yet)
        $("#canvas").bind("touchmove", function (e) {
            var pos = task5.findPos(this);
            var c = this.getContext('2d')
            task5.onMove(e, pos, c);
        });

        // end task on button click
        $("#task-5-give-up").click(function () {
            task5.endTask5();
        })


        $("#task-5").show();
    };

    function create_post() {
        $("#main-display").html(markup_post);

        timer1 = window.performance.now();
        $("#task-5-post").show();

        // end Task 5 and submit data to server
        $("#task-5-submit").click(function () {
            if (!(g.validateResponse("task-5-radio"))) {
                alert("You must provide a response before moving forward.")
                return
            }

            timer2 = window.performance.now();

            var temp_response = g.getRadio("task-5-radio");
            g.clearRadio("task-5-radio");

            data.task5.emotion_response = temp_response;
            data.task5.emotion_RT = timer2 - timer1;

            data.demographics.endTime = moment().format('MMMM Do YYYY, h:mm:ss a');

            $("#main-display").html("");
            $("#load-div").show();
            eventTimer.setTimeout(function () {
                end_Exp.create_success();
                end_Exp.create_error();
                end_Exp.submitData();
            }, 500);
        })


    };


    /// drawing functions ///

    //// initial start function (after click) ////
    function start(e, pos, c) {
        if (!drawing) {
            // reset the no movement timeout
            eventTimer.cancelRequest(timeout_timer)
            timeout_timer = eventTimer.setTimeout(timeout, 2000)

            // get mouse position
            var x = e.clientX - pos.x;
            var y = e.clientY - pos.y;


            // if mouse is inside start circle...
            if (mouseIsInsideCircle(x, y, 250, 35, 10)) {
                document.getElementById('canvas').style.cursor = 'none';
                drawing = true;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawStar(250, 250, 5, 225, 90);
                drawCursor(ctx.canvas.width - x, y)
            }
        }
    }

    function onMove(e, pos, context) {
        if (drawing) {
            e.preventDefault();

            // reset the no movement timeout
            eventTimer.cancelRequest(timeout_timer)
            timeout_timer = eventTimer.setTimeout(timeout, 2000)

            // clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // redraw star
            drawStar(250, 250, 5, 225, 90);

            // get mouse position
            x = e.clientX - pos.x;
            y = e.clientY - pos.y;

            //Reverse location if we're drawing the mirror image
            if (flipped) {
                x = ctx.canvas.width - x;
            }

            // poll the pixel color at mouse location
            var p = context.getImageData(x, y, 1, 1).data;

            // record mouse location
            line.push([x, y]);

            // redraw line & cursor
            drawLine(e, x, y);
            drawCursor(x, y);

            // if current location is transparent (outside start) then trigger error
            if (p[3] == 0) {
                buzz.play();
                recordAttempt();
                reset();
            }
        }
    }

    //// draw the star ///
    function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (var i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.lineWidth = 15;
        ctx.strokeStyle = "blue";
        ctx.stroke();
    }

    /// draw the cursor ///
    function drawCursor(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
    }

    /// draw the line from cursor //// 
    function drawLine(e, clientX, clientY) {
        e.preventDefault();
        var rect = ctx.canvas.getBoundingClientRect();
        line.push([clientX, clientY]);
        for (i = 1; i <= line.length - 1; i++) {
            ctx.beginPath();

            //Set starting point for new line
            ctx.moveTo(line[i - 1][0], line[i - 1][1]);

            //Set thick red line style
            ctx.lineWidth = 5;
            ctx.strokeStyle = "rgba(255,0,0, .5)";
            ctx.fillStyle = "#FF0000";

            //Create line from last point to new point
            ctx.lineTo(line[i][0], line[i][1]);
            //Draw line
            ctx.stroke();
        }
    }

    //// reset the task ////
    function reset() {
        // reset the no movement timeout
        eventTimer.cancelRequest(timeout_timer)

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('canvas').style.cursor = 'auto'
        drawStar(250, 250, 5, 225, 90);
        ctx.beginPath();
        ctx.arc(250, 35, 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = "rgba(255,0,0, .5)";
        ctx.fill();



        timer1 = window.performance.now();
        line = [];
        drawing = false;
    }

    //// calculate the distance between click and start circle center ////
    function dist(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    function mouseIsInsideCircle(mouseX, mouseY, cx, cy, radius) {
        var dx = mouseX - cx;
        var dy = mouseY - cy;
        return (dx * dx + dy * dy <= radius * radius);
    }


    //// find the cursor position /////
    function findPos(obj) {
        var curleft = 0,
            curtop = 0;
        if (obj.offsetParent) {
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return {
                x: curleft,
                y: curtop
            };
        }
        return undefined;
    }

    //// response timeout 2000 ms
    function timeout() {
        buzz.play();
        recordAttempt();
        reset();
    }


    //// record attempt (after error) ////
    function recordAttempt() {
        var temp_now = window.performance.now();

        data.task5.drawings.push({
            Id: fbID,
            attempt: attempt,
            startTime: timer1,
            endTime: temp_now,
            RT: temp_now - timer1,
            //lines: line
        })

        attempt++;
    }


    ///// trigger end of task 5
    function endTask5() {
        // reset the no movement timeout
        eventTimer.cancelRequest(timeout_timer)
        eventTimer.cancelRequest(task_timer)

        if (drawing) {
            reset();
        };

        $("body").off("keypress", listenSpace)



        var temp_now = window.performance.now();

        data.task5.attempts = attempt - 1;
        data.task5.startTime = timer0;
        data.task5.endTime = temp_now;
        data.task5.RT = temp_now - timer0;

        $("#main-display").html("")
        create_post();

    }


    // listen for the spacebar
    function listenSpace(e) {
        //        console.log(e.keyCode)
        if (e.keyCode == 32) {
            endTask5();
        }
    }

    // countdown timer
    function startTimer(mm, ss, fun) {
        var mm = mm;
        var ss = ss;

        // Update the count down every 1 second
        var timer = eventTimer.setInterval(function () {

            if (ss == 0) {
                mm = mm - 1;
                ss = 59;
            } else {
                ss = ss - 1
            }

            if (ss < 10) {
                // Display the result in the element with id="demo"
                document.getElementById("timer").innerHTML = mm + ":" + "0" + ss
            } else {
                document.getElementById("timer").innerHTML = mm + ":" + ss
            }


            // If the count down is finished, write some text 
            if (mm == 0 && ss == 0) {
                eventTimer.cancelRequest(timer);

                if (typeof (fun) == "function") {
                    fun();
                }
            }
        }, 1000);

        return timer;
    }

    return {
        create_inst: create_inst,
        create_exp: create_exp,
        create_post: create_post,
        start: start,
        onMove: onMove,
        recordAttempt: recordAttempt,
        listenSpace: listenSpace,
        endTask5: endTask5,
        findPos: findPos,
        reset: reset,
        startTimer: startTimer
    };

})();





/**
 * END OF EXPERIMENT
 *
 *   
 *
 **/

var end_Exp = function () {
    
    var data_sent = 0;
    
    var markup_success = [
        '<div id="exp-complete-success" class="standard-display flexColumn" style="display: none; justify-content: space-between">',
           ' <div id="submit-success" style="width:100%" class="flexColumn">',
                '<p>You have now completed the study.</p>',
                '<br>',
                '<p>Please wait until all other participants have completed the study. At that time, the researcher will provide you with your compensation and some information about this research. You will then be free to leave.</p>',
               ' <br>',
                '<p>Thank you again for your participation!</p>',

           ' </div>',
            '<div style="background-color: lightcyan; border: 2px black solid; padding: 20px">',
                '<h3><strong>FOR RESEARCHER:</strong></h3>',
               ' <p>The data was successfully uploaded. To download a local text copy of the data, click the button below.</p>',
                '<button id="data-download-success" style="text-align: right" class="button-blue">Download data</button>',
            '</div>',
       ' </div>'
    ].join("\n");

    var markup_error = [
        '<div id="exp-complete-fail" class="standard-display flexColumn" style="display: none; justify-content: space-between">',
            '<div id="submit-fail" style="width:100%;" class="flexColumn">',
                '<p><strong>There was an error submitting your data. Please DO NOT close this window.  Let the researcher know there was an issue.</strong></p>',
               ' <br>',
               ' <p>You have now completed the study.</p>',
                '<p>After all other participants have completed the study, the researcher will provide you with your compensation and some information about this research. You will then be free to leave.</p>',
               ' <p>Thank you again for your participation!</p>',
               ' <br> <br>',
            '</div>',
            '<div style="background-color: lightcyan; border: 2px black solid; padding: 20px">',
                '<h3><strong>FOR RESEARCHER:</strong></h3>',
                '<p style="margin-bottom:0">Error Code: <span id="FB_errorCode"></span></p>',
                '<p style="margin-top: 0">Error Message: <span id="FB_errorMessage"></span></p>',
                '<p><strong>Try submitting the data again. If the error persists, download the data to prevent data loss.</strong></p>',
                '<button id="data-resubmit" style="text-align: left; margin-right: 20px" class="button-blue">Try to submit again</button>',
               ' <button id="data-download-error" style="text-align: right" class="button-blue">Download data</button>',
           ' </div>',
       ' </div>'
    ].join("\n");

    function create_success() {
        $("#main-display").html(markup_success)

        // download data as plain text
        $("#data-download-success").click(function () {
            var blob = new Blob([JSON.stringify(data)], {
                    type: "text/plain;charset=utf-8"
                }),
                filename = fbID + ".txt"

            saveAs(blob, filename);
        })

    };

    function create_error() {
        $("#main-display").html(markup_error);

        // if firebase error, click to resubmit
        $(document).on("click", "#data-resubmit", function () {
            $("#exp-complete-fail").hide();
            $("#load-div").show();
            eventTimer.setTimeout(end_Exp.submitData, 500);
        })


        // download data as plain text
        $("#data-download-error").click(function () {
            var blob = new Blob([JSON.stringify(data)], {
                    type: "text/plain;charset=utf-8"
                }),
                filename = fbID + ".txt"

            saveAs(blob, filename);
        })

    };

    function submitData() {
        if (!data) {
            console.log("no data to send")
            return
        }

        if (data !== null && typeof data === 'object') {
            data_sent = 1;
            
            var newKey = firebase.database().ref().child(userID).push().key,
                updates = {};

            updates["/" + userID + "/" + newKey] = data

            firebase.database().ref().update(updates).then(function () {
                create_success();

                eventTimer.setTimeout(function () {
                    $("#load-div").hide();
                    $("#exp-complete-success").show();
                }, 500)


            }, function (error) {
                create_error();

                errorCode = error.code;
                errorMessage = error.message;

                $("#FB_errorCode").text(errorCode)
                $("#FB_errorMessage").text(errorMessage)

                $("#main-display").html(markup_error);

                eventTimer.setTimeout(function () {
                    $("#load-div").hide();
                    $("#exp-complete-fail").show();
                }, 500)

            })

        }
    }

    return {
        data_sent: data_sent,
        create_success: create_success,
        create_error: create_error,
        submitData: submitData

    }

}();



/**
 *
 * summary.
 *  - Initializes the data array needed in task.js
 *  - Initializes firebase
 *  
 * 
 * @link   nbrosowsky.github.io
 * @author Nicholaus P. Brosowsky <nbrosowsky@gmail.com>
 * @since  2018-05-20
 *
 */


var Experiment = function () {

    var faceSets = [
        ["001Happy.png", "009Fear.png", "020Disgust.png", "026Surprise.png", "036Sad.png", "044Anger.png", "083Neutral.png"],
        ["003Anger.png", "012Disgust.png", "016Fear.png", "041Neutral.png", "054Surprise.png", "087Sad.png", "101Happy.png"],
        ["033Neutral.png", "034Happy.png", "045Surprise.png", "053Anger.png", "064Disgust.png", "094Sad.png", "104Fear.png"],
        ["006Neutral.png", "015Sad.png", "032Disgust.png", "039Surprise.png", "042Happy.png", "061Anger.png", "088Fear.png"],
        ["021Neutral.png", "037Fear.png", "043Sad.png", "069Anger.png", "074Happy.png", "097Surprise.png", "109Disgust.png"],
        ["011Surprise.png", "028Neutral.png", "046Disgust.png", "067Sad.png", "079Fear.png", "093Happy.png", "105Anger.png"],
        ["004Surprise.png", "029Happy.png", "059Fear.png", "076Sad.png", "091Disgust.png", "096Anger.png", "110Neutral.png"]
    ]


    function init() {
        /**
         * EVENTTIMER FALLBACK 
         * if eventTimer doesn't load fallback to the standard js timers
         *   
         *
         */

        if (typeof eventTimer == 'undefined') {
            //console.log("no eventTimer found... using JS setTimeout/Interval")
            var eventTimer = {};
            eventTimer.setTimeout = function (fun, time) {
                window.setTimeout(fun, time)
            }
            eventTimer.setInterval = function (fun, time) {
                window.setInterval(fun, time)
            }
        }

        // listen for changes in radio / show "other" textbox when clicked //
        $('input:radio').change(function () {
            var x = this

            if ($(x).val() === "Other") {
                $("#" + $(x).attr('name') + "-other").css("visibility", "visible")
            } else {
                $("#" + $(x).attr('name') + "-other").css("visibility", "hidden")
            }
        });



        // fallback: if firebase has not logged in, use a timestamp as id
        (userID) ? fbID = userID: fbID = new Date().getTime();

        // data object stores all information throughout the experiment
        var data = {
            demographics: {
                Id: fbID,
                age: "",
                race: "",
                ethnicity: "",
                gender: "",
                orientation: "",
                class: "",
                birth: "",
                startTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
                endTime: "incomplete"
            },

            task1: [
                {
                    trial: 1,
                    Id: fbID,

                    prompt: "When the calves' brains dinner is mistakenly brought to the table, one <u>customer</u> seated there quickly turns his head away.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 2,
                    Id: fbID,

                    prompt: "Being sure that his player did nothing wrong, a <u>coach</u> demands an explanation from the referee about the penalty call.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 3,
                    Id: fbID,

                    prompt: " A young <u>girl</u> wishes she was like her girlfriends and had a date for the high school dance.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 4,
                    Id: fbID,

                    prompt: "Just as the young <u>boy</u> walks into the room, the lights flick on and family members appear with packages in their hands.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 5,
                    Id: fbID,

                    prompt: "When one of the youngsters picks up a slimy snail, one <u>girl</u> looks at the others and covers her eyes.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 6,
                    Id: fbID,

                    prompt: "<u>Passengers</u> listen carefully as a stewardess tells them that the airplane must make an emergency landing.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 7,
                    Id: fbID,

                    prompt: "A <u>man</u> walks from the kitchen to the family room and turns on the radio.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 8,
                    Id: fbID,

                    prompt: "An <u>individual</u> running for governor demands to know who in her office is responsible for leaking the negative 'confidential' information about her to the press.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 9,
                    Id: fbID,

                    prompt: "A <u>woman</u> falls asleep while reading the newspaper.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 10,
                    Id: fbID,

                    prompt: "<u>Villagers</u> listen to the bombs move closer and closer.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 11,
                    Id: fbID,

                    prompt: "As a <u>couple</u> eating lunch in the park cannot avoid the stench of two derelicts close by, they hastily move to another bench.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 12,
                    Id: fbID,

                    prompt: "Expecting that a particular car would be far beyond her price range, a car <u>buyer</u>, upon hearing the dollar figure, asks that the salesman repeat the low figure one more time.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 13,
                    Id: fbID,

                    prompt: "Several long-standing <u>friends</u> joke about the past.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 14,
                    Id: fbID,

                    prompt: "An older <u>man</u> looks at a picture of his recently departed wife.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 15,
                    Id: fbID,

                    prompt: "A <u>parent</u> tugs at her child after he swears at her.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 16,
                    Id: fbID,

                    prompt: "A <u>grandfather</u> returns to his room after he is told that his grandson will not be able to visit him after all.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 17,
                    Id: fbID,

                    prompt: "Both <u>teenagers</u> clap to the beat as their favorite song plays on.",
                    response: "",
                    RT: ""
            },


                {
                    trial: 18,
                    Id: fbID,

                    prompt: "A young <u>girl</u>, who has come to believe that her dog is just plain stupid and will never learn how to retrieve, is totally speechless when he actually does return the ball to her.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 19,
                    Id: fbID,

                    prompt: "A <u>child</u> becomes fidgety when a doctor approaches him with a big needle.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 20,
                    Id: fbID,

                    prompt: "Several <u>relatives</u> gather at a funeral.",
                    response: "",
                    RT: ""
            },
                {
                    trial: 21,
                    Id: fbID,

                    prompt: "Tired and hungry, and noting the fine smell of chicken coming from the kitchen, a <u>husband</u> kisses his wife as soon as he sees her.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 22,
                    Id: fbID,

                    prompt: "Several young <u>girls</u> play with a cute three week old puppy.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 23,
                    Id: fbID,

                    prompt: "A young <u>actor</u>, sensing that his acting for the audition was totally lackluster, can hardly believe it when the director gives him the lead role.",
                    response: "",
                    RT: ""
            },
                {
                    trial: 24,
                    Id: fbID,

                    prompt: "A <u>mother</u> says good-by to her daughter who is going off to college.",
                    response: "",
                    RT: ""
            },
                {
                    trial: 25,
                    Id: fbID,

                    prompt: "Even the thought of seeing the cats' mutilated bodies brings a queer feeling to the <u>newswoman's</u> stomach.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 26,
                    Id: fbID,

                    prompt: "Having finished his lunch, a <u>carpenter</u> continues loading the lumber into his truck.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 27,
                    Id: fbID,

                    prompt: "After her third request for her class's attention, the <u>teacher</u> states that several students will have to remain after school.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 28,
                    Id: fbID,

                    prompt: "Immediately upon hearing the loud barks, the <u>child</u> grabs her mother and holds her tight.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 29,
                    Id: fbID,

                    prompt: "After a great deal of hard work in practice, a young <u>batter</u> hits his first home run.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 30,
                    Id: fbID,
                    prompt: "When he notices that several youngsters are pocketing expensive merchandise, the store <u>owner</u> quickly makes his way toward them.",
                    response: "",
                    RT: ""
            },

                {
                    trial: 31,
                    Id: fbID,

                    prompt: "Having applied for hundreds of jobs over many months and having received just as many negative responses, the <u>applicant</u> is momentarily stunned when he is in fact offered a job.",
                    response: "",
                    RT: ""
            },
                {
                    trial: 32,
                    Id: fbID,

                    prompt: "While speaking on the phone to a business partner, an <u>individual</u> bends down to tie his shoelaces.",
                    response: "",
                    RT: ""
            },
                {
                    trial: 33,
                    Id: fbID,

                    prompt: "While most of the boy scouts walk right to the edge of the cliff, two <u>scouts</u> refuse to even approach the edge.",
                    response: "",
                    RT: ""
            },
                {
                    trial: 34,
                    Id: fbID,

                    prompt: "As the government <u>inspector</u> has difficulty breathing while he inspects the filthy prison cells, he cuts the inspection short.",
                    response: "",
                    RT: ""
            },
                {
                    trial: 35,
                    Id: fbID,

                    prompt: "The <u>seamstress</u> quickly and accurately measures and cuts the material to be used for the dress she is mending.",
                    response: "",
                    RT: ""
            }
    ],

            task2: [
                {
                    trial: 1,
                    Id: fbID,

                    prompt: "When  the calves' brains dinner is mistakenly brought to the table, one <u>customer</u> seated there quickly turns his head away.",
                    images: faceSets[0],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },
                {
                    trial: 2,
                    Id: fbID,
                    prompt: "Being sure that his player did nothing wrong, a <u>coach</u> demands an explanation from the referee about the penalty call.",
                    images: faceSets[1],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },
                {
                    trial: 3,
                    Id: fbID,
                    prompt: "A young <u>girl</u> wishes she was like her girlfriends and had a date for the high school dance.",
                    images: faceSets[2],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 4,
                    Id: fbID,
                    prompt: "Just as the young <u>boy</u> walks into the room, the lights flick on and family members appear with packages in their hands.",
                    images: faceSets[3],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 5,
                    Id: fbID,
                    prompt: "When one of the youngsters picks up a slimy snail, one <u>girl</u> looks at the others and covers her eyes.",
                    images: faceSets[4],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 6,
                    Id: fbID,
                    prompt: "<u>Passengers</u> listen carefully as a stewardess tells them that the airplane must make an emergency landing.",
                    images: faceSets[5],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 7,
                    Id: fbID,
                    prompt: "A <u>man</u> walks from the kitchen to the family room and turns on the radio.",
                    images: faceSets[6],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 8,
                    Id: fbID,
                    prompt: "An <u>individual</u> running for governor demands to know who in her office is responsible for leaking the negative 'confidential' information about her to the press.",
                    images: faceSets[0],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 9,
                    Id: fbID,
                    prompt: "A <u>woman</u> falls asleep while reading the newspaper.",
                    images: faceSets[1],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 10,
                    Id: fbID,
                    prompt: "<u>Villagers</u> listen to the bombs move closer and closer.",
                    images: faceSets[2],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 11,
                    Id: fbID,
                    prompt: "As a <u>couple</u> eating lunch in the park cannot avoid the stench of two derelicts close by, they hastily move to another bench.",
                    images: faceSets[3],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 12,
                    Id: fbID,
                    prompt: "Expecting that a particular car would be far beyond her price range, a car <u>buyer</u>, upon hearing the dollar figure, asks that the salesman repeat the low figure one more time.",
                    images: faceSets[4],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 13,
                    Id: fbID,
                    prompt: "Several long-standing <u>friends</u> joke about the past.",
                    images: faceSets[5],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 14,
                    Id: fbID,
                    prompt: "An older <u>man</u> looks at a picture of his recently departed wife.",
                    images: faceSets[6],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 15,
                    Id: fbID,
                    prompt: "A <u>parent</u> tugs at her child after he swears at her.",
                    images: faceSets[0],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 16,
                    Id: fbID,
                    prompt: "A <u>grandfather</u> returns to his room after he is told that his grandson will not be able to visit him after all.",
                    images: faceSets[1],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 17,
                    Id: fbID,
                    prompt: "Both <u>teenagers</u> clap to the beat as their favorite song plays on.",
                    images: faceSets[2],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 18,
                    Id: fbID,
                    prompt: "A young <u>girl</u>, who has come to believe that her dog is just plain stupid and will never learn how to retrieve, is totally speechless when he actually does return the ball to her.",
                    images: faceSets[3],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 19,
                    Id: fbID,
                    prompt: "A <u>child</u> becomes fidgety when a doctor approaches him with a big needle.",
                    images: faceSets[4],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },
                {
                    trial: 20,
                    Id: fbID,
                    prompt: "Several <u>relatives</u> gather at a funeral.",
                    images: faceSets[5],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },
                {
                    trial: 21,
                    Id: fbID,
                    prompt: "Tired and hungry, and noting the fine smell of chicken coming from the kitchen, a <u>husband</u> kisses his wife as soon as he sees her.",
                    images: faceSets[6],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },
                {
                    trial: 22,
                    Id: fbID,
                    prompt: "Several young <u>girls</u> play with a cute three week old puppy.",
                    images: faceSets[0],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },
                {
                    trial: 23,
                    Id: fbID,
                    prompt: "A young <u>actor</u>, sensing that his acting for the audition was totally lackluster, can hardly believe it when the director gives him the lead role.",
                    images: faceSets[1],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },
                {
                    trial: 24,
                    Id: fbID,
                    prompt: "A <u>mother</u> says good-by to her daughter who is going off to college.",
                    images: faceSets[2],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 25,
                    Id: fbID,
                    prompt: "Even the thought of seeing the cats' mutilated bodies brings a queer feeling to the <u>newswoman's</u> stomach.",
                    images: faceSets[3],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 26,
                    Id: fbID,
                    prompt: "Having finished his lunch, a <u>carpenter</u> continues loading the lumber into his truck.",
                    images: faceSets[4],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 27,
                    Id: fbID,
                    prompt: "After her third request for her class's attention, the <u>teacher</u> states that several students will have to remain after school.",
                    images: faceSets[5],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 28,
                    Id: fbID,
                    prompt: "Immediately upon hearing the loud barks, the <u>child</u> grabs her mother and holds her tight.",
                    images: faceSets[6],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 29,
                    Id: fbID,
                    prompt: "After a great deal of hard work in practice, a young <u>batter</u> hits his first home run.",
                    images: faceSets[0],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 30,
                    Id: fbID,
                    prompt: "When he notices that several youngsters are pocketing expensive merchandise, the store <u>owner</u> quickly makes his way toward them.",
                    images: faceSets[1],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 31,
                    Id: fbID,
                    prompt: "Having applied for hundreds of jobs over many months and having received just as many negative responses, the <u>applicant</u> is momentarily stunned when he is in fact offered a job.",
                    images: faceSets[2],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 32,
                    Id: fbID,
                    prompt: "While speaking on the phone to a business partner, an <u>individual</u> bends down to tie his shoelaces.",
                    images: faceSets[3],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },
                {
                    trial: 33,
                    Id: fbID,
                    prompt: "While most of the boy scouts walk right to the edge of the cliff, two <u>scouts</u> refuse to even approach the edge.",
                    images: faceSets[4],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },
                {
                    trial: 34,
                    Id: fbID,
                    prompt: "As the government <u>inspector</u> has difficulty breathing while he inspects the filthy prison cells, he cuts the inspection short.",
                    images: faceSets[5],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            },

                {
                    trial: 35,
                    Id: fbID,
                    prompt: "The <u>seamstress</u> quickly and accurately measures and cuts the material to be used for the dress she is mending.",
                    images: faceSets[6],
                    response_image: "",
                    response_emotion: "",
                    RT: ""
            }

    ],

            //            task3: [
            //        // practice trials
            //                {
            //                    trial: 1,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "6940.jpg",
            //                    image_type: "tank",
            //                    choices: ["Reappraise", "Distract"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the tank, think about things on your grocery list.",
            //                "While looking at the tank, imagine the war has just come to a close, and the soldiers are heading home. ",
            //                "While looking at the tank, focus your attention on not feeling anything.",
            //                "While looking at the tank, allow yourself to feel upset about the war."
            //                ],
            //
            //                    example_types: ["Distract", "Reappraise", "Suppress", "Accept"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //            },
            //                {
            //                    trial: 2,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "7361.jpg",
            //                    image_type: "meat slicer",
            //                    choices: ["Suppress", "Accept"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the meat slicer, focus your attention on not feeling anything. ",
            //                "While looking at the meat slicer, think about walking through a field.",
            //                "While looking at the meat slicer, imagine it is slicing meat for a sandwich.",
            //                "While looking at the meat slicer, allow yourself to feel disgusted by how the ground meat looks."
            //            ],
            //                    example_types: ["Suppress", "Distract", "Reappraise", "Accept"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 3,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "6563.jpg",
            //                    image_type: "gun to a child's head",
            //                    choices: ["Accept", "Distract"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the child, think of things that start with the letter P.",
            //                "While looking at the child, focus your attention on not feeling anything.",
            //                "While looking at the child, imagine he is playing “Cops and Robbers” with a toy gun.",
            //                "While looking at the child, allow yourself to feel concerned for his safety. "
            //            ],
            //                    example_types: ["Distract", "Suppress", "Reappraise", "Accept"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //
            //                {
            //                    trial: 4,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "3069.jpg",
            //                    image_type: "mutilation",
            //                    choices: ["Distract", "Reappraise"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the girl, imagine a detective has just solved a big case by finding her body.",
            //                "While looking at the girl, focus your attention on not feeling anything. ",
            //                "While looking at the girl, think about the last time you rode a bicycle.",
            //                "While looking at the girl, allow yourself to feel disgusted by the mutilation."
            //            ],
            //                    example_types: ["Reappraise", "Suppress", "Distract", "Accept"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 5,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "3053.jpg",
            //                    image_type: "burned child",
            //                    choices: ["Reappraise", "Suppress"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the child, imagine he has just been rescued by paramedics.",
            //                "While looking at the child, think about the directions from your home to your favorite store.",
            //                "While looking at the child, focus your attention on not feeling anything.",
            //                "While looking at the child, allow yourself to feel sad for his injuries."
            //            ],
            //                    example_types: ["Reappraise", "Distract", "Suppress", "Accept"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 6,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "2694.jpg",
            //                    image_type: "police in cell",
            //                    choices: ["Accept", "Distract"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the officers, focus your attention on not feeling anything.",
            //                "While looking at the officers, allow yourself to feel angry about the man in cuffs.",
            //                "While looking at the officers, imagine they are about to remove the cuffs from the prisoner.",
            //                "While looking at the officers, count backward in your mind from 100."
            //            ],
            //                    example_types: ["Suppress", "Accept", "Reappraise", "Distract"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 7,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "3216.jpg",
            //                    image_type: "medics",
            //                    choices: ["Accept", "Suppress"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the medics, allow yourself to feel anxious about the man’s health. ",
            //                "While looking at the medics, think about the words to the last song you heard.",
            //                "While looking at the medics, focus your attention on not feeling anything.",
            //                "While looking at the medics, imagine he has arrived just in time to save the man’s life. "
            //            ],
            //                    example_types: ["Accept", "Distract", "Suppress", "Reappraise"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 8,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "2661.jpg",
            //                    image_type: "premature baby",
            //                    choices: ["Distract", "Accept"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the baby, think about jogging through the park.",
            //                "While looking at the baby, allow yourself to feel sad about the baby’s small size.",
            //                "While looking at the baby, imagine he is growing strong despite his small size. ",
            //                "While looking at the baby, focus your attention on not feeling anything."
            //            ],
            //                    example_types: ["Distract", "Accept", "Reappraise", "Suppress"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 9,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "6313.jpg",
            //                    image_type: "assault",
            //                    choices: ["Reappraise", "Distract"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the assault, allow yourself to feel afraid for the woman’s safety.",
            //                "While looking at the assault, focus your attention on not feeling anything.",
            //                "While looking at the assault, imagine the man and woman are rehearsing for a play. ",
            //                "While looking at the assault, think about the last book you read."
            //            ],
            //                    example_types: ["Accept", "Suppress", "Reappraise", "Distract"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 10,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "3212.jpg",
            //                    image_type: "dog surgery",
            //                    choices: ["Accept", "Suppress"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the surgery, imagine the doctors are saving the dog’s life. ",
            //                "While looking at the surgery, focus your attention on not feeling anything.",
            //                "While looking at the surgery, think about the last place you traveled.",
            //                "While looking at the surgery, allow yourself to feel disgusted by the dog’s intestines. "
            //            ],
            //                    example_types: ["Reappraise", "Suppress", "Distract", "Accept"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 11,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "6211.jpg",
            //                    image_type: "gun assault",
            //                    choices: ["Accept", "Distract"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the assault, focus your attention on not feeling anything.",
            //                "While looking at the assault, imagine the men are playing paintball. ",
            //                "While looking at the assault, think about a joke you’ve heard recently.",
            //                "While looking at the assault, allow yourself to feel afraid for the men’s safety."
            //            ],
            //                    example_types: ["Suppress", "Reappraise", "Distract", "Accept"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 12,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "2301.jpg",
            //                    image_type: "child crying",
            //                    choices: ["Reappraise", "Suppress"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the child, focus your attention on not feeling anything.",
            //                "While looking at the child, think about your plans for later on in the day.",
            //                "While looking at the child, imagine she is crying out of happiness from seeing a friend she has not seen in a long time.",
            //                "While looking at the child, allow yourself to feel sad for her."
            //            ],
            //                    example_types: ["Suppress", "Distract", "Reappraise", "Accept"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 13,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "1120.jpg",
            //                    image_type: "snake",
            //                    choices: ["Distract", "Reappraise"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the snake, think of your favorite song.",
            //                "While looking at the snake, focus your attention on not feeling anything.",
            //                "While looking at the snake, allow yourself to feel afraid of the snake’s bite. ",
            //                "While looking at the snake, imagine the snake is on display at the zoo. "
            //            ],
            //                    example_types: ["Distract", "Suppress", "Accept", "Reappraise"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 14,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "2703.jpg",
            //                    image_type: "sad children",
            //                    choices: ["Suppress", "Reappraise"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the children, think about the last time you played a board game.",
            //                "While looking at the children, imagine they are being given food donations. ",
            //                "While looking at the children, focus your attention on not feeling anything.",
            //                "While looking at the children, allow yourself to feel sad for their suffering."
            //            ],
            //                    example_types: ["Distract", "Reappraise", "Suppress", "Accept"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 15,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "3001.jpg",
            //                    image_type: "headless body",
            //                    choices: ["Distract", "Accept"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the body, think about things on your “To Do” list.",
            //                "While looking at the body, focus your attention on not feeling anything.",
            //                "While looking at the body, imagine it is a stage prop in a television crime show.",
            //                "While looking at the body, allow yourself to feel disgusted by the injuries. "
            //            ],
            //                    example_types: ["Distract", "Suppress", "Reappraise", "Accept"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 16,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "7136.jpg",
            //                    image_type: "car boot",
            //                    choices: ["Suppress", "Reappraise"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the tire, imagine the boot is on someone else’s car instead of yours. ",
            //                "While looking at the tire, think about the steps involved in cooking your favorite meal.",
            //                "While looking at the tire, focus your attention on not feeling anything.",
            //                "While looking at the tire, allow yourself to feel angry about having a boot on your car."
            //            ],
            //                    example_types: ["Reappraise", "Distract", "Suppress", "Accept"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 17,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "6312.jpg",
            //                    image_type: "abduction",
            //                    choices: ["Distract", "Accept"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the abduction, imagine the woman is about to break free. ",
            //                "While looking at the abduction, mentally list all the things you ate yesterday.",
            //                "While looking at the abduction, allow yourself to feel angry at the perpetrator.",
            //                "While looking at the abduction, focus your attention on not feeling anything."
            //            ],
            //                    example_types: ["Reappraise", "Distract", "Accept", "Suppress"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 18,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "3500.jpg",
            //                    image_type: "gunpoint",
            //                    choices: ["Suppress", "Accept"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the confrontation, imagine the men are detectives reenacting a crime.",
            //                "While looking at the confrontation, focus your attention on not feeling anything.",
            //                "While looking at the confrontation, allow yourself to feel afraid for the victim’s safety. ",
            //                "While looking at the confrontation, name as many types of trees as you can."
            //            ],
            //                    example_types: ["Reappraise", "Suppress", "Accept", "Distract"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 19,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "6212.jpg",
            //                    image_type: "shooting child",
            //                    choices: ["Suppress", "Reappraise"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the scene, imagine the soldier is protecting the boy from potential enemies. ",
            //                "While looking at the scene, identify as many yellow things as you can.",
            //                "While looking at the scene, allow yourself to feel afraid for the boy’s safety. ",
            //                "While looking at the scene, focus your attention on not feeling anything."
            //            ],
            //                    example_types: ["Reappraise", "Distract", "Accept", "Suppress"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 20,
            //                    Id: fbID,
            //                    practice: true,
            //                    practice_errors: 0,
            //                    image: "2710.jpg",
            //                    image_type: "smoking addict",
            //                    choices: ["Reappraise", "Suppress"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: [],
            //                    choose_example_RT: [],
            //                    examples: [
            //                "While looking at the man, allow yourself to feel disgusted by the man’s drug use.",
            //                "While looking at the man, think about a scene from the last movie you saw.",
            //                "While looking at the man, imagine he has just decided to not use the drugs. ",
            //                "While looking at the man, focus your attention on not feeling anything."
            //            ],
            //                    example_types: ["Accept", "Distract", "Reappraise", "Suppress"],
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //
            //        /// experimental trials
            //                {
            //                    trial: 21,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "1301.jpg",
            //                    image_type: "NA",
            //                    choices: ["Reappraise", "Distract"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 22,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "3150.jpg",
            //                    image_type: "NA",
            //                    choices: ["Suppress", "Accept"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 23,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "2691.jpg",
            //                    image_type: "NA",
            //                    choices: ["Accept", "Distract"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 24,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "2312.jpg",
            //                    image_type: "NA",
            //                    choices: ["Distract", "Reappraise"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 25,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "6836.jpg",
            //                    image_type: "NA",
            //                    choices: ["Reappraise", "Suppress"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 26,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "3261.jpg",
            //                    image_type: "NA",
            //                    choices: ["Accept", "Distract"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 27,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "6010.jpg",
            //                    image_type: "NA",
            //                    choices: ["Accept", "Suppress"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 28,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "2800.jpg",
            //                    image_type: "NA",
            //                    choices: ["Distract", "Accept"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 29,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "7360.jpg",
            //                    image_type: "NA",
            //                    choices: ["Reappraise", "Distract"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 30,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "3140.jpg",
            //                    image_type: "NA",
            //                    choices: ["Accept", "Suppress"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 31,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "3530.jpg",
            //                    image_type: "NA",
            //                    choices: ["Accept", "Distract"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 32,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "2278.jpg",
            //                    image_type: "NA",
            //                    choices: ["Reappraise", "Suppress"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 33,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "6190.jpg",
            //                    image_type: "NA",
            //                    choices: ["Distract", "Reappraise"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //
            //                {
            //                    trial: 34,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "2700.jpg",
            //                    image_type: "NA",
            //                    choices: ["Suppress", "Reappraise"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 35,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "3000.jpg",
            //                    image_type: "NA",
            //                    choices: ["Distract", "Accept"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 36,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "3180.jpg",
            //                    image_type: "NA",
            //                    choices: ["Suppress", "Reappraise"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 37,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "2490.jpg",
            //                    image_type: "NA",
            //                    choices: ["Distract", "Accept"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 38,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "3230.jpg",
            //                    image_type: "NA",
            //                    choices: ["Suppress", "Accept"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 39,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "2053.jpg",
            //                    image_type: "NA",
            //                    choices: ["Suppress", "Reappraise"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        },
            //                {
            //                    trial: 40,
            //                    Id: fbID,
            //                    practice: false,
            //                    practice_errors: 0,
            //                    image: "3068.jpg",
            //                    image_type: "NA",
            //                    choices: ["Reappraise", "Suppress"],
            //                    choose_cope: "",
            //                    choose_cope_RT: "",
            //                    choose_example: "NA",
            //                    choose_example_RT: "NA",
            //                    examples: "NA",
            //                    example_types: "NA",
            //                    rating: "",
            //                    how: "",
            //                    rating_how_RT: ""
            //        }
            //
            //    ],


            task3b: [
                {
                    trial: 1,
                    Id: fbID,
                    type: "normal",
                    prompt: "I avoid attending social activities.",
                    response: "",
                    RT: ""
        },
                {
                    trial: 2,
                    Id: fbID,
                    type: "normal",
                    prompt: "When uncertain about my future, I fail to sit down and think about what I really want.",
                    response: "",
                    RT: ""
        },
                {
                    trial: 3,
                    Id: fbID,
                    type: "normal",
                    prompt: "I would like to achieve things at work/school, but I have to accept my limits.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 4,
                    Id: fbID,
                    type: "normal",
                    prompt: "I fail to do what is needed to follow through with achievement goals I have set for myself.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 5,
                    Id: fbID,
                    type: "normal",
                    prompt: "In order to avoid feelings of disappointment, I just try not to get too serious about work/school.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 6,
                    Id: fbID,
                    type: "normal",
                    prompt: "Rather than try new activities, I tend to stick with the things I know.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 7,
                    Id: fbID,
                    type: "normal",
                    prompt: "I choose to turn down opportunities to further my education/career.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 8,
                    Id: fbID,
                    type: "normal",
                    prompt: "I do not answer the phone in case people are calling with social invitations. ",
                    response: "",
                    RT: ""
         },
                {
                    trial: 9,
                    Id: fbID,
                    type: "normal",
                    prompt: "I quit activities that challenge me too much.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 10,
                    Id: fbID,
                    type: "normal",
                    prompt: "I try not to think about problems in my personal relationships. ",
                    response: "",
                    RT: ""
         },
                {
                    trial: 11,
                    Id: fbID,
                    type: "normal",
                    prompt: "I think to myself that I will not be able to complete really challenging tasks.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 12,
                    Id: fbID,
                    type: "normal",
                    prompt: "While I know I should make decisions about my personal relationships, I just let things go on as they are. ",
                    response: "",
                    RT: ""
         },
                {
                    trial: 13,
                    Id: fbID,
                    type: "normal",
                    prompt: "I avoid trying new activities that hold the potential for failure.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 14,
                    Id: fbID,
                    type: "normal",
                    prompt: "I do not go out to events when I know there will be a lot of people I do not know.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 15,
                    Id: fbID,
                    type: "normal",
                    prompt: "Instead of thinking about problems in my social life, I tell myself that I prefer to be alone.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 16,
                    Id: fbID,
                    type: "normal",
                    prompt: "I fail to discuss/address tension that builds in a friendship.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 17,
                    Id: fbID,
                    type: "normal",
                    prompt: "I find that I often want to leave social gatherings.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 18,
                    Id: fbID,
                    type: "normal",
                    prompt: "I do not try to think about ways to improve my work/school performance.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 19,
                    Id: fbID,
                    type: "normal",
                    prompt: "I try not to think about my future and what I will do with my life.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 20,
                    Id: fbID,
                    type: "normal",
                    prompt: "I just wait out tension in my relationships hoping that it will go away.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 21,
                    Id: fbID,
                    type: "normal",
                    prompt: "I tend to make up excuses to get out of social activities.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 22,
                    Id: fbID,
                    type: "normal",
                    prompt: "There is nothing I can do to improve problems in my relationships.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 23,
                    Id: fbID,
                    type: "normal",
                    prompt: "I turn down opportunities to socialize with the opposite sex.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 24,
                    Id: fbID,
                    type: "normal",
                    prompt: "I tend to remain to myself during social gatherings or activities.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 25,
                    Id: fbID,
                    type: "normal",
                    prompt: "I avoid making decisions about my future.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 26,
                    Id: fbID,
                    type: "normal",
                    prompt: "When I experience confusion in my relationships, I do not try to figure things out.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 27,
                    Id: fbID,
                    type: "normal",
                    prompt: "While I know that I have to make some important decisions about school/work, I just do not get down to it.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 28,
                    Id: fbID,
                    type: "normal",
                    prompt: "Rather than getting out and doing things, I just sit at home and watch TV.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 29,
                    Id: fbID,
                    type: "normal",
                    prompt: "I distract myself when I start to think about my work/school performance.",
                    response: "",
                    RT: ""
         },
                
                   {
                    trial: 30,
                    Id: fbID,
                    type: "normal",
                    prompt: "I do not bother thinking about how to solve problems in my family – it is useless.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 31,
                    Id: fbID,
                    type: "normal",
                    prompt: "I find myself avoiding tasks and assignments that are really important.",
                    response: "",
                    RT: ""
         }

    ],
            task4: [
                {
                    trial: 1,
                    Id: fbID,
                    type: "normal",
                    prompt: "I often think that I respond with feelings that others would not have.",
                    response: "",
                    RT: ""
        },
                {
                    trial: 2,
                    Id: fbID,
                    type: "normal",
                    prompt: "Some feelings are wrong to have.",
                    response: "",
                    RT: ""
        },
                {
                    trial: 3,
                    Id: fbID,
                    type: "normal",
                    prompt: "There are things about myself that I just don’t understand.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 4,
                    Id: fbID,
                    type: "normal",
                    prompt: "I believe that it is important to let myself cry in order to get my feelings “out”.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 5,
                    Id: fbID,
                    type: "normal",
                    prompt: "If I let myself have some of these feelings, I fear I will lose control.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 6,
                    Id: fbID,
                    type: "normal",
                    prompt: "Others understand and accept my feelings.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 7,
                    Id: fbID,
                    type: "normal",
                    prompt: "My feelings don’t make sense to me.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 8,
                    Id: fbID,
                    type: "normal",
                    prompt: "If other people changed, I would feel a lot better.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 9,
                    Id: fbID,
                    type: "normal",
                    prompt: "I sometimes fear that if I allowed myself to have a strong feeling, it would not go away.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 10,
                    Id: fbID,
                    type: "normal",
                    prompt: "I feel ashamed of my feelings",
                    response: "",
                    RT: ""
         },
                {
                    trial: 11,
                    Id: fbID,
                    type: "normal",
                    prompt: "Things that bother other people don’t bother me.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 12,
                    Id: fbID,
                    type: "attention-check",
                    prompt: "If you are paying attention, mark three for this question.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 13,
                    Id: fbID,
                    type: "normal",
                    prompt: "No one really cares about my feelings.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 14,
                    Id: fbID,
                    type: "normal",
                    prompt: "It is important for me to be reasonable and practical rather than sensitive and open to my feelings.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 15,
                    Id: fbID,
                    type: "normal",
                    prompt: "When I feel down, I try to think of the more important things in life – what I value.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 16,
                    Id: fbID,
                    type: "normal",
                    prompt: "I feel that I can express by feelings openly.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 17,
                    Id: fbID,
                    type: "normal",
                    prompt: "I often say to myself, “What’s wrong with me?”",
                    response: "",
                    RT: ""
         },
                {
                    trial: 18,
                    Id: fbID,
                    type: "normal",
                    prompt: "I worry that I won’t be able to control my feelings. ",
                    response: "",
                    RT: ""
         },
                {
                    trial: 19,
                    Id: fbID,
                    type: "normal",
                    prompt: "You have to guard against having certain feelings. ",
                    response: "",
                    RT: ""
         },
                {
                    trial: 20,
                    Id: fbID,
                    type: "normal",
                    prompt: "Strong feelings only last a short period of time.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 21,
                    Id: fbID,
                    type: "normal",
                    prompt: "I often feel “numb” emotionally – like I have no feelings.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 22,
                    Id: fbID,
                    type: "normal",
                    prompt: "Other people cause me to have unpleasant feelings.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 23,
                    Id: fbID,
                    type: "normal",
                    prompt: "When I feel down, I sit by myself and think a lot about how bad I feel.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 24,
                    Id: fbID,
                    type: "normal",
                    prompt: "I like being absolutely definite about the way I feel about <em>someone else</em>.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 25,
                    Id: fbID,
                    type: "normal",
                    prompt: "I accept my feelings.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 26,
                    Id: fbID,
                    type: "normal",
                    prompt: "I think that I have the same feelings that other people have. ",
                    response: "",
                    RT: ""
         },
                {
                    trial: 27,
                    Id: fbID,
                    type: "normal",
                    prompt: "There are higher values that I aspire to. ",
                    response: "",
                    RT: ""
         },
                {
                    trial: 28,
                    Id: fbID,
                    type: "normal",
                    prompt: "I think it is important to be rational and logical in almost everything.",
                    response: "",
                    RT: ""
         },
                {
                    trial: 29,
                    Id: fbID,
                    type: "normal",
                    prompt: "I like being absolutely definite about the way I feel about <em>myself.</em>",
                    response: "",
                    RT: ""
         }
    ],

            task5: {
                Id: fbID,
                attempts: "",
                startTime: "",
                endTime: "",
                RT: "",
                drawings: []
            }
        }

        return data
    }

    return {
        init: init

    }

}();


// Initialize Firebase
var config = {
        apiKey: "AIzaSyAI3PEI3t8vJKBp2PkgURF-1FUpwKX_hFU",
        authDomain: "erediss18-d8d71.firebaseapp.com",
        databaseURL: "https://erediss18-d8d71.firebaseio.com",
        projectId: "erediss18-d8d71",
        storageBucket: "erediss18-d8d71.appspot.com",
        messagingSenderId: "130021646805"
    },
    errorCode,
    errorMessage,
    userID,
    isAnonymous,
    data = {}

firebase.initializeApp(config);

firebase.auth().signOut().then(function () {
    firebase.auth().signInAnonymously().then(function (user) {
        isAnonymous = user.isAnonymous
        userID = user.uid;


        $("#login-error").hide();
        $("#landing").show();

    }, function (error) {

        userID = "error"
        errorCode = error.code;
        errorMessage = error.message;

        $("#login-error").show();
        $("#landing").hide();
    })

});



firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        $("#login-error").hide();
        $("#landing").show();

        isAnonymous = user.isAnonymous
        userID = user.uid;
        console.log("you are logged into " + config.authDomain + " as anonymous user ID: " + userID);

        data = Experiment.init();
        console.log(data)

        window.onbeforeunload = function () {
            if (end_Exp.data_sent == 0) {
                return "The experiment is incomplete and your data has not been saved. Are you sure you want to exit?";
            }
        }



    } else {
        console.log("you are not logged into firebase")
    }
});

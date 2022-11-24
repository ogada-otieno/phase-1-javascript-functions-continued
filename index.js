function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

// wrapAdjective("%")("a dedicated programmer"); 
//=> "You are %a dedicated programmer%!"
/*
function wrapAdjective(initialText = "You are") {
    const messageFlair = function (flairContent = "a dedicated programmer") {
        return `${initialText} ${flairContent}!`;
    }
    return messageFlair;
}
*/
function wrapAdjective (type = "*") {
    const flairing = function(adjective = "special") {
        return `You are ${type}${adjective}${type}!`;
    };
    return flairing;
    //return flairing();
    //return flairing("going make it. Keep going")
}
//console.log(wrapAdjective("||"));
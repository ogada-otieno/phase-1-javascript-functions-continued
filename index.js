// defines saturdayFun function declaration as specified:
// ✓ function exists
// ✓ uses the default activity 'roller-skate' when no arguments are passed
// ✓ permits the default activity to be overriden

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// defines mondayWork function expression as specified
// ✓ function exists
// ✓ uses the default activity 'go to the office' when no arguments are passed
// ✓ permits the default activity to be override

const mondayWork = function (activity = "go to the office") {
    return`This Monday, I will ${activity}.`;
}

// defines wrapAdjective function according to the specification
// ✓ function exists
// ✓ when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
// ✓ when initialized with '||' creates a function that, when called, wraps an adjective in a highlight

function wrapAdjective (type = "*") {
    const flairing = function(adjective = "special") {
        return `You are ${type}${adjective}${type}!`;
    };
    return flairing;
    //return flairing();
    //return flairing("going make it. Keep going")
}
//console.log(wrapAdjective("||"));
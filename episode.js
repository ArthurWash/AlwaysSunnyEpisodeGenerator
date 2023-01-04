document.getElementById("butt").onclick=function(){

    // Main function
    function getRandomEpisode(arr){

        // Gets a random index value
        var randomIndex = Math.floor(Math.random() * arr.length);

        // Get a random episode
        var episode = arr[randomIndex];

        return episode
}

/* Season 1 Episodes */
var S1E1 = [1, 1, "The Gang Gets Racist", "Following three friends who own and run a bar in Philadelphia. The guys hire Dee's friend Terrell as a promoter for the bar and get more than they bargained for, and Charlie has to prove he's not a racist."];
var S1E2 = [1, 2, "Charlie Wants an Abortion", "A girl from Charlie's past reveals they have a child together; Mac sees the benefits of being a pro-life advocate; Dennis uses an abortion rally to meet women."];
var S1E3 = [1, 3, "Underage Drinking: A National Concern", "After noticing a rise in underage patrons, the gang decide to make a few accommodating adjustments for their younger crowd."];
var S1E4 = [1, 4, "Charlie Has Cancer", "The gang learns that Charlie might have cancer; they hatch a scheme to alleviate his pain; Mac proves that he's a narcissist."];
var S1E5 = [1, 5, "Gun Fever", "The gang learns that the bar's safe has been stolen; Dennis buys a gun; the others suspect that it was an inside job."];
var S1E6 = [1, 6, "The Gang Finds a Dead Guy", "Mac and Dennis pretend to be acquainted with a patron found dead in their bar in order to get closer to the dead man's granddaughter."];

/* Season 2 Episodes */
var S2E1 = [2, 1, "Charlie Gets Crippled", "Dennis and Dee's father Frank abruptly appears, causing Dennis to accidentally run Charlie over with his car. After seeing Charlie get attention from strippers over being in a wheelchair, the gang decides to feign disabilities in order to garner sympathy from others."];
var S2E2 = [2, 2, "The Gang Goes Jihad", "An Israeli businessman claims ownership of the street that Paddy's Pub is on, prompting the gang to go to extremes to get the man to leave. Meanwhile, Frank fights with his ex-wife over the possessions she got in the divorce."];
var S2E3 = [2, 3, "Dennis and Dee Go on Welfare", "Dennis and Dee quit their jobs to pursue their dreams, but when Mac reminds them that unemployment eventually runs out, Dennis and Dee get hooked on crack cocaine so they can apply for welfare. Meanwhile, Frank hires two new workers under the \"Work for Welfare\" program, and Charlie and Mac go on a spending spree with the money in Frank's secret bank account."];
var S2E4 = [2, 4, "Mac Bangs Dennis' Mom", "When Mac is asked to fetch Frank's toupee from his ex-wife, he has sex with her; Charlie uses this information to hatch a plan to get with his crush, a coffee-shop waitress, by getting Dee to create a web of lies and backstabbing."];
var S2E5 = [2, 5, "Hundred Dollar Baby", "Frank trains Dee for a boxing match against his old boxing foe's daughter; Dennis and Mac train Charlie for an underground fighting ring to make money off him."];
var S2E6 = [2, 6, "The Gang Gives Back", "The Gang must atone for the events of \"The Gang Goes Jihad\": Mac, Dennis, and Dee are sentenced to coach inner-city children's basketball, and Charlie is sentenced to attend AA meetings. The Waitress, an alcoholic, is at the meetings and offers to be Charlie's sponsor just to get to Dennis."];
var S2E7 = [2, 7, "The Gang Exploits a Miracle", "When the Gang finds a water stain in the office that resembles the Virgin Mary, Frank charges patrons to see the miracle. Meanwhile, Dennis goes anorexic when Dee tells him that his face is fat, Mac and Charlie become dueling preachers, and a former admirer of Dee's get another chance with her."];
var S2E8 = [2, 8, "The Gang Runs for Office", "After realizing political corruption's money-making potential, the Gang helps Dennis run for the position of a local comptroller."];
var S2E9 = [2, 9, "Charlie Goes America All Over Everybody's Ass", "Outraged when Dennis smokes in the bar, Charlie teams with Dee to start an anti-smoking rally. Meanwhile, Mac, Dennis, and Frank turn Paddy's Pub into an \"anything goes\" bar, which goes horribly wrong thanks to the new clientele: heroin addicts, Vietnamese gamblers, and incestuous McPoyle siblings."];
var S2E10 = [2, 10, "Dennis and Dee Get a New Dad", "Dennis and Dee discover the MySpace page of a man who claims to be their real father. Meanwhile, Mac and Charlie visit Mac's convict father in jail, and Charlie thinks Frank might be his real father."];

// Generate Episode
var wholeSeries = [S1E1, S1E2, S1E3, S1E4, S1E5, S1E6, 
S2E1, S2E2, S2E3, S2E3, S2E4, S2E5, S2E6, S2E7, S2E8, S2E9, S2E10];
var result = getRandomEpisode(wholeSeries);

document.getElementById("season").value = result[0];
document.getElementById("episode").value=result[1];
document.getElementById("title").value=result[2];
document.getElementById("desc").value=result[3];
}

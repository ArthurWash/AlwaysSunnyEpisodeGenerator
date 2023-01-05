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

/* Season 3 Episodes */
var S3E1 = [3, 1, "The Gang Finds a Dumpster Baby", "Dee and Mac find an abandoned baby boy in a dumpster and try to look after (and make money off) him; Frank and Charlie get into dumpster-diving; Charlie is still trying to find out if Frank is his real father; and Dennis tricks an environmentalist into chaining himself to a tree to save it from being cut."];
var S3E2 = [3, 2, "The Gang Gets Invincible", "When the Philadelphia Eagles hold open tryouts à la the movie Invincible, Mac, Dennis, and Dee make the event their own personal competition; Frank and Charlie go to a tailgate party, where Frank trips on LSD and make things worse between them and the McPoyle family from \"Charlie Got Molested\" and \"Charlie Goes America All Over Everybody's Ass.\""];
var S3E3 = [3, 3, "Dennis and Dee's Mom Is Dead", "Frank's ex-wife Barbara dies (for real this time), leaving behind a big inheritance that Frank and Dee will do anything to get; Mac, Dennis, and Charlie use Barbara's house as a men's club to make new male friends (\"nothing sexual\")."];
var S3E4 = [3, 4, "The Gang Gets Held Hostage", "The McPoyles hold the Gang hostage in Paddy's Pub; Frank crawls through the vents (a la Die Hard) to find his will, which Charlie hid."];
var S3E5 = [3, 5, "The Aluminum Monster vs. Fatty Magoo", "The Gang gets involved in the fashion-design world when Dee gets jealous of her high-school best friend (Judy Greer), who is now a successful boutique owner. Meanwhile, Frank restarts his old sweatshop business and coaches Mac on how to run one."];
var S3E6 = [3, 6, "The Gang Solves the North Korea Situation", "The Gang is at odds with a more-successful Korean pub owner who bears a striking resemblance to former North Korean dictator Kim Jong-Il; Charlie becomes involved with the owner's daughter (Tania Gunadi)."];
var S3E7 = [3, 7, "The Gang Sells Out", "When a restaurant chain offers to buy Paddy's Pub, the guys try to make the deal go through by showing the rep a good time; when Dee discovers she won't benefit from the deal, she quits her job at Paddy's (again) and pressures The Waitress to get her a job at a TGIFriday's-style restaurant."];
var S3E8 = [3, 8, "Frank Sets Sweet Dee on Fire", "The gang tries to become local celebrities by creating their own public-access news show and making it big on the hip club scene."];
var S3E9 = [3, 9, "Sweet Dee's Dating a Retarded Person", "Dennis tells Dee that her new amateur-rapper boyfriend is mentally disabled; Frank, Charlie, and Mac start their own band but can't decide what type of music to play, especially when Charlie pens a disturbing song about being sexually molested by a strange creature called The Night Man."];
var S3E10 = [3, 10, "Mac Is a Serial Killer", "Half of the Gang suspects that Mac might be the serial killer who's been terrorizing young women, especially when they notice how distant he's become; the other half tries to catch the serial killer themselves; meanwhile, Mac himself renews his relationship with Carmen (Brittany Daniel), the transgender woman from \"Charlie Has Cancer\"."];
var S3E11 = [3, 11, "Dennis Looks Like a Registered Sex Offender", "Dennis' life goes downhill when the community mistakes him for a convicted child molester released from prison because of overcrowding; Mac and Charlie reunite with Luther (Mac's convict father) and freak out when they think Luther is murdering the people who put him in prison."];
var S3E12 = [3, 12, "The Gang Gets Whacked (Part 1)", "When The Gang finds cocaine in a pair of speakers, they decide to sell it, only to learn that the cocaine belonged to some local mobsters who want it back. To pay off the debt, they buy more drugs and try to sell them at the country club."];
var S3E13 = [3, 13, "The Gang Gets Whacked (Part 2)", "The Gang must find a way to avoid getting \"whacked off\" when their plans to pay off mob members for missing cocaine go wrong: Frank pimps out Dennis to older women; Mac tries to do gruntwork for the mob; and Charlie and Dee stick to the plan to sell drugs but use them all themselves."];
var S3E14 = [3, 14, "Bums: Making a Mess All Over the City", "Mac and Dee become vigilantes to solve the homeless problem. Meanwhile, after buying a junkyard police car to scare the homeless away from the bar, Frank and Dennis dress in police costumes and abuse the public while Charlie dresses as Serpico and tries to expose them."];
var S3E15 = [3, 15, "The Gang Dances Their Asses Off", "Charlie inadvertently puts Paddy's Pub up as the grand prize in a radio dance marathon (in Mac's words to Charlie: \"Your illiteracy has screwed us again\"), so the gang must win the competition—against the enemies they've made so far in the series—to keep the bar."];


// Generate Episode
var wholeSeries = [S1E1, S1E2, S1E3, S1E4, S1E5, S1E6, 
S2E1, S2E2, S2E3, S2E4, S2E5, S2E6, S2E7, S2E8, S2E9, S2E10,
S3E1, S3E2, S3E3, S3E4, S3E5, S3E6, S3E7, S3E8, S3E9, S3E10, S3E11, S3E12, S3E13, S3E14, S3E15
];
var result = getRandomEpisode(wholeSeries);

document.getElementById("season").value = result[0];
document.getElementById("episode").value=result[1];
document.getElementById("title").value=result[2];
document.getElementById("desc").value=result[3];
}

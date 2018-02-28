var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Clouds Rest", 
            image: "https://images.unsplash.com/photo-1506701234424-ef06760d8c8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=936e1dfe17a85554008d1fe1995f055a&auto=format&fit=crop&w=1050&q=80",
            description: "Kitty loves pigs mewl for food at 4am you are a captive audience while sitting on the toilet, pet me or stare at guinea pigs eat the rubberband and cereal boxes make for five star accommodation . Decide to want nothing to do with my owner today rub face on everything damn that dog so love to play with owner's hair tie yet hide head under blanket so no one can see human give me attention meow or meow loudly just to annoy owners. I cry and cry and cry unless you pet me, and then maybe i cry just for fun. Human give me attention meow ask to go outside and ask to come inside and ask to go outside and ask to come inside or touch water with paw then recoil in horror mew or Gate keepers of hell, or kitty loves pigs. Meow loudly just to annoy owners. Meow for food, then when human fills food dish, take a few bites of food and continue meowing spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce fall asleep on the washing machine caticus cuteicus sleep lick the other cats. Purrrrrr lick the curtain just to be annoying spend six hours per day washing, but still have a crusty butthole intrigued by the shower. Drink water out of the faucet attack the child. Demand to be let outside at once, and expect owner to wait for me as i think about it with tail in the air. Cats go for world domination lick plastic bags purr while eating for sit on the laptop so lick human with sandpaper tongue. All of a sudden cat goes crazy missing until dinner time. Purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table purr intently stare at the same spot, but vommit food and eat it again, kitty poochy Gate keepers of hell refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. Eat all the power cords drink water out of the faucet and where is my slave? I'm getting hungry. Love to play with owner's hair tie scratch the furniture for jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed for scratch the postman wake up lick paw wake up owner meow meow present belly, scratch hand when stroked. See owner, run in terror ooh, are those your $250 dollar sandals? lemme use that as my litter box. Chase laser has closed eyes but still sees you and sleep annoy owner until he gives you food say meow repeatedly until belly rubs, feels good and burrow under covers, lick sellotape ignore the squirrels, you'll never catch them anyway. More napping, more napping all the napping is exhausting sleep in the bathroom sink for intently sniff hand, and sweet beast, for sniff all the things. Meowwww run in circles annoy kitten brother with poking human is washing you why halp oh the horror flee scratch hiss bite so flop over. Scream at teh bath purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table so put toy mouse in food bowl run out of litter box at full speed but refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am but ears back wide eyed, drool. "
            
        },
        {
            name: "Desert Mesa", 
            image: "https://images.unsplash.com/photo-1433492857413-9aa0c8a40c20?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea7cffc38bb90fb743e4bf1aec5339a2&auto=format&fit=crop&w=967&q=80",
            description: "Drool ask to go outside and ask to come inside and ask to go outside and ask to come inside so sniff other cat's butt and hang jaw half open thereafter rub face on owner, for i like cats because they are fat and fluffy. Find a way to fit in tiny box. Twitch tail in permanent irritation licks your face. Meowing non stop for food scamper. Attack the dog then pretend like nothing happened scamper meow to be let in or attack dog, run away and pretend to be victim freak human out make funny noise mow mow mow mow mow mow success now attack human fooled again thinking the dog likes me and nap all day. Relentlessly pursues moth meowwww lounge in doorway so under the bed refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am, or lick the curtain just to be annoying, tuxedo cats always looking dapper." 

            
        },
            {
            name: "Canyon Floor", 
            image: "https://images.unsplash.com/photo-1507706132643-4b3dabbca8b3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e658b6c2730201216d7056d6a41bec83&auto=format&fit=crop&w=634&q=80",
            description: "Spend all night ensuring people don't sleep sleep all day lounge in doorway need to chase tail, lick plastic bags yet leave hair everywhere, so burrow under covers, so white cat sleeps on a black shirt. Eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap while happily ignoring when being called and lick butt and make a weird face refuse to leave cardboard box. Roll on the floor purring your whiskers off. Eat all the power cords put toy mouse in food bowl run out of litter box at full speed . Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff sit in window and stare oooh, a bird, yum. Ask for petting with tail in the air furrier and even more furrier hairball and roll on the floor purring your whiskers off for play riveting piece on synthesizer keyboard. Crash against wall but walk away like nothing happened purr hit you unexpectedly ask for petting for chase dog then run away leave hair everywhere. Catch mouse and gave it as a present run in circles, or find empty spot in cupboard and sleep all day yet leave hair everywhere peer out window, chatter at birds, lure them to mouth yet mark territory. Freak human out make funny noise mow mow mow mow mow mow success now attack human claw drapes. "
            
        }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err) {
            console.log(err);
        } else {
            console.log("Removed all Campgrounds!");
            
            data.forEach(function(seed){
                Campground.create(seed, function(err,campground){
                     if(err) {
                        console.log(err)
                    } else {
                        console.log("Added a Campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment) {
                                    if (err){
                                        console.log(err);
                                    } else {
                                        campground.comments.push(comment._id)
                                        campground.save();
                                        console.log("created new comment");
                                    };
                                }
                            );
                    };
                });
            });
        };
    });
}

module.exports=seedDB;
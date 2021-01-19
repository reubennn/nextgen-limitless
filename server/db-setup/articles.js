/* eslint-disable quotes */
/* eslint-disable max-len */
import { DateTime } from "luxon";

/**
 * Initial article content to upload to MongoDB.
 */
const articles = [
    {
        path: "complete-guide-to-animals",
        title: "A Complete Guide To Animals",
        author: {
            name: "Franklin Finbar",
            avatar: "https://res.cloudinary.com/reuben/image/upload/v1610673901/fullstack-react/authors/franklin-finbar_y4dehe.jpg",
        },
        timestamp: DateTime.local().minus({ days: 47 }),
        image: {
            src: `https://res.cloudinary.com/reuben/image/upload/v1603930321/fullstack-react/article-images/complete-guide-to-animals/origami-animals_ncv8vx.jpg`,
            alt: "Origami paper animals",
        },
        content: [
            `Hello everyone! Today I am going to talk to you about animals. In this guide I am going to provide details about every single animal under the sun.`,
            `The guide will cover elephants, lions, koalas, giraffes, leopards, snakes, snails, bugs, turtles, hippos, cheetahs, bees, CAKE - err.. I mean cats... uh oh? Why do I feel like I'm going to explode? Anyway, what are we waiting for? Let's dive straight into it!`,
            `A long black shadow slid across the pavement near their feet and the five Venusians, very much startled, looked overhead. They were barely in time to see the huge gray form of the carnivore before it vanished behind a sign atop a nearby building which bore the mystifying information "Pepsi-Cola."`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603932855/fullstack-react/article-images/complete-guide-to-animals/hamster-by-julian-rad_unt7bz.jpg`,
                alt: "Hamster Running by Julian Rad",
            },
            `The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.`,
            `This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.`,
            `There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603932855/fullstack-react/article-images/complete-guide-to-animals/funny-fish_r2p0r0.jpg`,
                alt: "Funny Fish",
            },
            `It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn't sure she actually preferred it.`,
            `It was difficult for him to admit he was wrong. He had been so certain that he was correct and the deeply held belief could never be shaken. Yet the proof that he had been incorrect stood right before his eyes. "See daddy, I told you that they are real!" his daughter excitedly proclaimed.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603932855/fullstack-react/article-images/complete-guide-to-animals/cheeky-sheep_ufoflu.jpg`,
                alt: "Cheeky Sheep Sticking Out Tongue",
            },
            `Sitting in the sun, away from everyone who had done him harm in the past, he quietly listened to those who roamed by. He felt at peace in the moment, hoping it would last, but knowing the reprieve would soon come to an end. He closed his eyes, the sun beating down on face and he smiled. He smiled for the first time in as long as he could remember.`,
            `The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time, he thought, with the knowledge deep within that it wouldn't.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603932856/fullstack-react/article-images/complete-guide-to-animals/shocked-seal_yiq3bc.jpg`,
                alt: "Shocked Seal",
            },
            `Colors bounced around in her head. They mixed and threaded themselves together. Even colors that had no business being together. They were all one, yet distinctly separate at the same time. How was she going to explain this to the others?`,
            `Here's the thing. She doesn't have anything to prove, but she is going to anyway. That's just her character. She knows she doesn't have to, but she still will just to show you that she can. Doubt her more and she'll prove she can again. We all already know this and you will too.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603932855/fullstack-react/article-images/complete-guide-to-animals/funny-cat_wmttbt.jpg`,
                alt: "Funny Cat Licking Screen",
            },
            `Sometimes it's simply better to ignore the haters. That's the lesson that Tom's dad had been trying to teach him, but Tom still couldn't let it go. He latched onto them and their hate and couldn't let it go, but he also realized that this wasn't healthy. That's when he came up with his devious plan.`,
            `There was a time when he would have embraced the change that was coming. In his youth, he sought adventure and the unknown, but that had been years ago. He wished he could go back and learn to find the excitement that came with change but it was useless. That curiosity had long left him to where he had come to loathe anything that put him out of his comfort zone.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603932855/fullstack-react/article-images/complete-guide-to-animals/big-nose-monkey_lui3vt.jpg`,
                alt: "Big Nose Monkey",
            },
            `The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. "Sir, you will undoubtedly end up in a drunkard's grave, dead of hepatic cirrhosis," it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table.`,
            `And there you have it, every single animal under the sun. I hope this article did not bore you too much.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603932855/fullstack-react/article-images/complete-guide-to-animals/happy-bird_wj9y7d.jpg`,
                alt: "Happy Bird",
            },
            `Gosh, I really do love animals! Enjoy your day.`,
        ],
        upvotes: 79,
        categories: [
            "guides",
            "animals",
            "cake",
            "humour",
        ],
    },
    {
        path: "how-to-smolder",
        title: "How to Smolder the Right Way",
        author: {
            name: "Dr. Smolder Bravestone",
            avatar: "https://res.cloudinary.com/reuben/image/upload/v1610673901/fullstack-react/authors/smolder-bravestone_uugl1e.jpg",
        },
        timestamp: DateTime.local().minus({ days: 380 }),
        image: {
            src: `https://res.cloudinary.com/reuben/image/upload/v1603930324/fullstack-react/article-images/how-to-smolder/bravestone-smolder_ptuhxc.jpg`,
            alt: "Dr. Smolder Bravestone",
        },
        content: [
            `The power of a good smolder. The sure fire way to get the girl of your dreams is an intense smolder. Professor Shelly Oberon knows all about the qualities of a smolder fit for a brave hero. To be honest, I don't even know how to smolder, but I'm going to be teaching you how to do it anyway.`,
            `Just think long and hard about something important. I'm sure you will get it eventually.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603951183/fullstack-react/article-images/how-to-smolder/beckham-getty_bkrbio.jpg`,
                alt: "Beckham Getty",
            },
            `There was little doubt that the bridge was unsafe.All one had to do was look at it to know that with certainty.Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have.A choice needed to be made, and it needed to be made quickly.`,
            `Sometimes it's simply better to ignore the haters. That's the lesson that Tom's dad had been trying to teach him, but Tom still couldn't let it go.He latched onto them and their hate and couldn't let it go, but he also realized that this wasn't healthy.That's when he came up with his devious plan.`,
            `It's always good to bring a slower friend with you on a hike. If you happen to come across bears, the whole group doesn't have to worry.Only the slowest in the group do.That was the lesson they were about to learn that day.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603951184/fullstack-react/article-images/how-to-smolder/woman-intense-stare_kakvci.jpg`,
                alt: "Woman Intense Stare",
            },
            `It had become a far too common an event in her life.She has specifically placed the key to the box in a special place so that she wouldn't lose it and know exactly where it was when the key was needed. Now that she needed to open the box, she had absolutely no idea where that special spot she placed the key might be.`,
        ],
        upvotes: 172,
        categories: [
            "guides",
            "smolder",
            "how-to",
            "intense",
        ],
    },
    {
        path: "dance-fighting",
        title: "The Best Dance Fighting Techniques",
        author: {
            name: "Ruby Roundhouse",
            avatar: "https://res.cloudinary.com/reuben/image/upload/v1610673901/fullstack-react/authors/ruby-roundhouse_ubn3m8.jpg",
        },
        timestamp: DateTime.local().minus({ days: 9 }),
        image: {
            src: `https://res.cloudinary.com/reuben/image/upload/v1603953164/fullstack-react/article-images/dance-fighting/kungfu-dance-fighting_vb9zu5.jpg`,
            alt: "Kung-fu Dance Fighting",
        },
        content: [
            `I'm not lazy, but a random word generator is a mighty fine tool! Look, I'm generating multiple random paragraphs at this very moment in an attempt to fill in this space to make it appear as though these articles are real and have content within them. You would not believe the power of the random word generator!`,
            `He took a sip of the drink.He wasn't sure whether he liked it or not, but at this moment it didn't matter.She had made it especially for him so he would have forced it down even if he had absolutely hated it.That's simply the way things worked. She made him a new-fangled drink each day and he took a sip of it and smiled, saying it was excellent.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603953164/fullstack-react/article-images/dance-fighting/ruby-roundhouse-dance-fight-jumanji_xf46st.jpg`,
                alt: "Ruby Roundhouse Dance Fighting Jumanji",
            },
            `It was a scrape that he hardly noticed. Sure, there was a bit of blood but it was minor compared to most of the other cuts and bruises he acquired on his adventures. There was no way he could know that the rock that produced the cut had alien genetic material on it that was now racing through his bloodstream.He felt perfectly normal and continued his adventure with no knowledge of what was about to happen to him.`,
            `Colors bounced around in her head. They mixed and threaded themselves together. Even colors that had no business being together. They were all one, yet distinctly separate at the same time. How was she going to explain this to the others?`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603953163/fullstack-react/article-images/dance-fighting/dance-fight-circlejpg_rwbuw8.jpg`,
                alt: "Dance Fighting Circle",
            },
            `The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.`,
            `It's not his fault. I know you're going to want to, but you can't blame him. He really has no idea how it happened. I kept trying to come up with excuses I could say to mom that would keep her calm when she found out what happened, but the more I tried, the more I could see none of them would work. He was going to get her wrath and there was nothing I could say to prevent it.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603953163/fullstack-react/article-images/dance-fighting/cartoon-dance-fighting_xxd3rw.jpg`,
                alt: "Cartoon Dance Fighting Training",
            },
            `Turning away from the ledge, he started slowly down the mountain, deciding that he would, that very night, satisfy his curiosity about the man- house. In the meantime, he would go down into the canyon and get a cool drink, after which he would visit some berry patches just over the ridge, and explore among the foothills a bit before his nap - time, which always came just after the sun had walked past the middle of the sky. At that period of the day the sun’s warm rays seemed to cast a sleepy spell over the silent mountainside, so all of the animals, with one accord, had decided it should be the hour for their mid - day sleep.`,
        ],
        upvotes: 15,
        categories: [
            "guides",
            "dance",
            "fighting",
        ],
    },
    {
        path: "reading-maps",
        title: "You've Been Reading Maps Wrong Your Whole Life...",
        author: {
            name: "Professor Shelly Oberon",
            avatar: "https://res.cloudinary.com/reuben/image/upload/v1610673901/fullstack-react/authors/professor-shelly-oberon_hyosl3.jpg",
        },
        timestamp: DateTime.local(),
        image: {
            src: `https://res.cloudinary.com/reuben/image/upload/v1603953512/fullstack-react/article-images/reading-maps/adult-car-finger-map_kzccoz.jpg`,
            alt: "Adult Finger Pointing At Map Reading",
        },
        content: [
            `Sometimes it's the first moment of the day that catches you off guard. That's what Wendy was thinking. She opened her window to see fire engines screeching down the street. While this wasn't something completely unheard of, it also wasn't normal. It was a sure sign of what was going to happen that day. She could feel it in her bones and it wasn't the way she wanted the day to begin.`,
            `There are only three ways to make this work. The first is to let me take care of everything. The second is for you to take care of everything. The third is to split everything 50 / 50. I think the last option is the most preferable, but I'm certain it'll also mean the end of our marriage.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603953510/fullstack-react/article-images/reading-maps/man-reading-map-lost_fh0dyk.jpg`,
                alt: "Man Lost Trying to Read Map",
            },
            `Greg understood that this situation would make Michael terribly uncomfortable. Michael simply had no idea what was about to come and even though Greg could prevent it from happening, he opted to let it happen. It was quite ironic, really. It was something Greg had said he would never wish upon anyone a million times, yet here he was knowingly letting it happen to one of his best friends. He rationalized that it would ultimately make Michael a better person and that no matter how uncomfortable, everyone should experience racism at least once in their lifetime.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603953510/fullstack-react/article-images/reading-maps/map-tourist-camera_clwbhn.jpg`,
                alt: "Map With Camera Money Compass Tourist",
            },
            `She tried not to judge him. His ratty clothes and unkempt hair made him look homeless. Was he really the next Einstein as she had been told? On the off chance it was true, she continued to try not to judge him.`,
            `The shoes had been there for as long as anyone could remember. In fact, it was difficult for anyone to come up with a date they had first appeared. It had seemed they'd always been there and yet they seemed so out of place. Why nobody had removed them was a question that had been asked time and again, but while they all thought it, nobody had ever found the energy to actually do it. So, the shoes remained on the steps, out of place in one sense, but perfectly normal in another.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603953745/fullstack-react/article-images/reading-maps/young-smiling-man-carrying-backpack-reading-map-outdoors_akck8r.jpg`,
                alt: "Young Smiling Man Carrying Backpack Reading Map Outdoors",
            },
            `Things aren't going well at all with mom today. She is just a limp noodle and wants to sleep all the time. I sure hope that things get better soon.`,
        ],
        upvotes: 0,
        categories: [
            "guides",
            "maps",
            "how-to",
        ],
    },
    {
        path: "jumanji-review",
        title: "Jumanji - An Honest Review",
        author: {
            name: "Dr. Smolder Bravestone",
            avatar: "https://res.cloudinary.com/reuben/image/upload/v1610673901/fullstack-react/authors/smolder-bravestone_uugl1e.jpg",
        },
        timestamp: DateTime.local().minus({ days: 4 }),
        image: {
            src: `https://res.cloudinary.com/reuben/image/upload/v1603953956/fullstack-react/article-images/jumanji-review/jumanji-next-level_mpojdj.jpg`,
            alt: "Jumanji Next Level",
        },
        content: [
            `Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603953955/fullstack-react/article-images/jumanji-review/jumanji-bravestone-roundhouse-oberon_jvcbyy.jpg`,
                alt: "Jumanji Ruby Roundhouse Smolder Bravestone Shelley Oberon",
            },
            `She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.`,
            `It had been her dream for years but Dana had failed to take any action toward making it come true. There had always been a good excuse to delay or prioritize another project. As she woke, she realized she was once again at a crossroads. Would it be another excuse or would she finally find the courage to pursue her dream? Dana rose and took her first step.`,
            `It was just a burger. Why couldn't she understand that? She knew he'd completely changed his life around her eating habits, so why couldn't she give him a break this one time? She wasn't even supposed to have found out. Yes, he had promised her and yes, he had broken that promise, but still in his mind, all it had been was just a burger.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603953955/fullstack-react/article-images/jumanji-review/jumanji-all-main-characters_iocpyl.jpg`,
                alt: "Jumanji Main Characters Posing",
            },
            `She didn't like the food. She never did. She made the usual complaints and started the tantrum he knew was coming. But this time was different. Instead of trying to placate her and her unreasonable demands, he just stared at her and watched her meltdown without saying a word.`,
            `Don't be scared. The things out there that are unknown aren't scary in themselves. They are just unknown at the moment. Take the time to know them before you list them as scary. Then the world will be a much less scary place for you.`,
        ],
        upvotes: 0,
        categories: [
            "movies",
            "reviews",
            "jumanji",
            "triggered",
        ],
    },
    {
        path: "npc-seeking-assistance",
        title: "NPC Seeking Assistance from Brave Strong Hero",
        author: {
            name: "Nigel",
            avatar: "https://res.cloudinary.com/reuben/image/upload/v1610673902/fullstack-react/authors/nigel_f7sukh.jpg",
        },
        timestamp: DateTime.local().minus({ days: 587 }),
        image: {
            src: `https://res.cloudinary.com/reuben/image/upload/v1603955200/fullstack-react/article-images/npc-seeking-assistance/van-pelt-holding-jewel-of-jumanji_mlvtd4.jpg`,
            alt: "Van Pelt Holding Jaguar's Eye Jewel of Jumanji",
        },
        content: [
            `If you can imagine a furry humanoid seven feet tall, with the face of an intelligent gorilla and the braincase of a man, you'll have a rough idea of what they looked like -- except for their teeth. The canines would have fitted better in the face of a tiger, and showed at the corners of their wide, thin-lipped mouths, giving them an expression of ferocity.`,
            `Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603955036/fullstack-react/article-images/npc-seeking-assistance/nigel-jumanji-welcome-to-the-jungle_esyq2c.jpg`,
                alt: "Nigel Looking Confused Jumanji",
            },
            `I haven't bailed on writing. Look, I'm generating a random paragraph at this very moment in an attempt to get my writing back on track. I am making an effort. I will start writing consistently again!`,
        ],
        upvotes: 1,
        categories: [
            "help",
            "jumanji",
        ],
    },
    {
        path: "npc-still-seeking-assistance",
        title: "Angry NPC Seeking Assistance from Anyone Available",
        author: {
            name: "Nigel",
            avatar: "https://res.cloudinary.com/reuben/image/upload/v1610673902/fullstack-react/authors/nigel_f7sukh.jpg",
        },
        timestamp: DateTime.local().minus({ days: 496 }),
        image: {
            src: `https://res.cloudinary.com/reuben/image/upload/v1603955043/fullstack-react/article-images/npc-still-seeking-assistance/nigel-weird-face_xynrfs.png`,
            alt: "Nigel Weird Face",
        },
        content: [
            `He picked up the burnt end of the branch and made a mark on the stone. Day 52 if the marks on the stone were accurate. He couldn't be sure. Day and nights had begun to blend together creating confusion, but he knew it was a long time. Much too long.`,
            `Sometimes that's just the way it has to be. Sure, there were probably other options, but he didn't let them enter his mind. It was done and that was that. It was just the way it had to be.`,
            `She had been an angel for coming up on 10 years and in all that time nobody had told her this was possible. The fact that it could ever happen never even entered her mind. Yet there she stood, with the undeniable evidence sitting on the ground before her. Angels could lose their wings.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603955042/fullstack-react/article-images/npc-still-seeking-assistance/van-pelt-jumanji-angry_aswinr.jpg`,
                alt: "Van Pelt Angry",
            },
            `Since they are still preserved in the rocks for us to see, they must have been formed quite recently, that is, geologically speaking. What can explain these striations and their common orientation? Did you ever hear about the Great Ice Age or the Pleistocene Epoch? Less than one million years ago, in fact, some 12, 000 years ago, an ice sheet many thousands of feet thick rode over Burke Mountain in a southeastward direction. The many boulders frozen to the underside of the ice sheet tended to scratch the rocks over which they rode. The scratches or striations seen in the park rocks were caused by these attached boulders. The ice sheet also plucked and rounded Burke Mountain into the shape it possesses today.`,
            {
                src: `https://res.cloudinary.com/reuben/image/upload/v1603955042/fullstack-react/article-images/npc-still-seeking-assistance/jumanji-jaguar-shrine-colossus_tsoadb.jpg`,
                alt: "Jumanji Jaguar Shrine Colossus",
            },
            `He couldn't move. His head throbbed and spun. He couldn't decide if it was the flu or the drinking last night. It was probably a combination of both.`,
        ],
        upvotes: 203,
        categories: [
            "help",
            "jumanji",
            "triggered",
        ],
    },
];

export default articles;

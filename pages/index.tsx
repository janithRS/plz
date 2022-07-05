import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

const linesArray = [
  "Damn, I'm no weather man, but you can expect a couple inches tonight.",
  "Hey, my name's Microsft. Can I crash at your place tonight?",
  "Did the sun come out or did you just smile at me?",
  "I'm no photographer, but I can picture us together.",
  "Feel my shirt. Know what it’s made of? Boyfriend material.",
  "If I could rearrange the alphabet, I would put U and I together.",
  "I was blinded by your beauty; I’m going to need your name and phone number for insurance purpose",
  "Can I follow you where you’re going right now? Because my parents always told me to follow my dreams.",
  "Is this the Hogwarts Express? Because it feels like you and I are headed somewhere magical.",
  "I'm not drunk, I'm just intoxicated by YOU.",
  "Are you Jewish? Cause you ISRAELI HOT.",
  "Are you a cat? Cause you are purrrfect",
  "They say Disneyland is the happiest place on earth. Well apparently, no one has ever been standing next to you.",
  "Are you religious? Because you’re the answer to all my prayers.",
  "I seem to have lost my phone number. Can I have yours?",
  "Aside from being sexy, what do you do for a living?",
  "Hi, how was heaven when you left it?",
  "My love for you is like diarrhea, I just can't hold it in.",
  "Baby, if you were words on a page, you'd be fine print.",
  "Was that an earthquake, or did you just rock my world.",
  "Do you want to go to In-and-Out for burgers or just in-and-out of me?",
  "We’re not socks, but I think we’d make a great pair.",
  "Do you have a map? I keep getting lost in your eyes.",
  "Do you like Star Wars? Because Yoda only one for me!",
  "You’re so beautiful that you made me forget my pickup line",
  "Did you invent the airplane? Because you seem Wright for me.",
  "I’m lost. Can you give me directions to your heart?",
  "There’s only one thing I want to change about you, and that’s your last name.",
  "You're so sweet, you'd put Hershey's out of business!",
  "You must be made of cheese. Because you're looking Gouda tonight!",
  "I'm glad I remembered to bring my library card. 'Cause I am totally checking you out!",
  "Kiss me if I'm wrong. But dinosaurs still exist, right?",
  "You must be a high test score. Because I want to take you home and show you to my mother.",
  "I wasn't always religious. But I am now, because you're the answer to all my prayers.",
  "Mario is red, Sonic is blue, will you be my player 2.",
  "Do you know CPR? Because you are taking my breath away!",
  "Are you an elevator? Because I’ll go up and down on you.",
  "Are you lost ma’am? Because heaven is a long way from here.",
  "Are you a cat because I’m feline a connection between us.",
  "If you were a flower you’d be a damnnn-delion.",
  "They say that kissing is a language of love, so would you mind starting a conversation with me?",
  "Did your licence get suspended for driving all these guys crazy?",
  "I'd like to do Astronomy, but instead of looking at the heavens I'd like to look at you.",
  "Was your dad a boxer? Because damn, you’re a knockout!",
  "Is there an airport nearby or is it my heart taking off?",
  "Is your dad a terrorist? Cause you’re the bomb.",
  "Are you my phone charger? Because without you, I’d die.",
  "You must be a broom, ‘cause you just swept me off my feet.",
  "Roses are red, I want you to remember. You are the reason, I lost no nut November.",
  "You are so hot, that the temperature itself broke the ice.",
  "Just took a DNA test. Turns out I'm 100% your type.",
  "Not really into sunsets, but I would love to see you go down.",
  "Call me country roads, cause I'mma take you home.",
  "Screw the alphabet, cause U R A Q T.",
  "If I asked you out on a date, would your answer be the same as your answer to this one?",
  "One a scale of 1 to 10, you are an 8. And I'm in 2 you.",
];

const getCatPic = () => {
  return axios
    .get("https://api.thecatapi.com/v1/images/search?mime_types=gif")
    .then(({ data }) => {
      console.log(data[0]);
      return data[0];
    })
    .catch((err) => {
      console.error(err);
    });
};

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  const [pickupLine, setPickupLine] = useState("");
  const [catPic, setCatPic] = useState("");

  useEffect(() => {
    handleFetchLine();
  }, []);

  const handleFetchLine = () => {
    setPickupLine(linesArray[Math.floor(Math.random() * linesArray.length)]);
    getCatPic().then((pic) => {
      setCatPic(pic.url);
    });
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl font-black text-center pt-9">PLZ!</p>
      <p className="px-5 mt-20 text-2xl font-bold text-center">{pickupLine}</p>
      {catPic && (
        <div className="relative w-32 h-32 mt-8 overflow-hidden rounded-full ring-2">
          <Image
            loader={myLoader}
            src={catPic}
            alt="Picture of the a cat"
            layout="fill"
          />
        </div>
      )}
      <div className="absolute inset-x-0 bottom-4 h-16 ...">
        <div className="relative flex justify-center pl-4 pr-4">
          <button
            className="w-screen h-16 max-w-lg font-bold text-white uppercase rounded-md bg-gradient-to-r from-purple-500 to-pink-500 bottom-0px-2"
            onClick={handleFetchLine}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

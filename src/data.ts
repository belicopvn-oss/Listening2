export interface Part1Question {
  id: number;
  answer: string;
}

export interface Part1Exercise {
  id: string;
  title: string;
  description: string;
  passage: string; // The full text with [1], [2], etc. for blanks
  questions: Part1Question[];
}

export interface Part2Question {
  id: number;
  question: string;
  options: string[];
  answer: string; // A, B, C, or D
  groupTitle?: string; // Optional grouping for conversations
}

export interface Part2Exercise {
  id: string;
  title: string;
  questions: Part2Question[];
}

export const LISTENING_DATA: { part1: Part1Exercise[]; part2: Part2Exercise[] } = {
  part1: [
    {
      id: "l1",
      title: "Listening 1",
      description: "Gary giving a talk about adventure racing",
      passage: `Gary participated with his [1] in his first adventure race last year. Adventure racing became popular as a sport in the [2], although there were races before that. In many adventure races, there must be a balance of [3] in each team. Gary thinks teams which contain [4] are more successful. Although some races take place in urban areas, most happen in [5]. Teams are really alone on the race because there are almost no [6] in the area where they race. Gary’s ambition is to do a race called the [7] Race in New Zealand. Some races may take up to [8] to complete. Gary thinks [9] must be the hardest thing in long races. Adventure racing is considered [10] by many athletes from other sports as well.`,
      questions: [
        { id: 1, answer: "family" },
        { id: 2, answer: "1990s" },
        { id: 3, answer: "men and women" },
        { id: 4, answer: "specialists" },
        { id: 5, answer: "mountains or deserts" },
        { id: 6, answer: "inhabitants" },
        { id: 7, answer: "South Island" },
        { id: 8, answer: "10 days" },
        { id: 9, answer: "staying awake" },
        { id: 10, answer: "motivating" },
      ]
    },
    {
      id: "l2",
      title: "Listening 2",
      description: "Julie giving a talk about her father on a quiz show",
      passage: `A TV producer invited Julie’s aunt to the quiz show while she was working in the [1] belonging to the family. She didn’t go because she was worried that she would be too [2] to answer any questions. Julie’s father used a [3] to travel to the show. When he went to the show, he forgot to wear a [4]. He prepared for the show by learning large numbers of [5] from the newspapers. The contestants were asked to wait in the [6] for the show to begin. He competed against a [7], a bus driver and a bank employee. The contestants were asked questions on [8] during the show. The show was broadcast almost [9] after it was recorded. Julie’s father won a [10] and a toy elephant.`,
      questions: [
        { id: 1, answer: "shop" },
        { id: 2, answer: "nervous" },
        { id: 3, answer: "hired car" },
        { id: 4, answer: "tie" },
        { id: 5, answer: "trivial facts" },
        { id: 6, answer: "Green Room" },
        { id: 7, answer: "university lecturer" },
        { id: 8, answer: "general knowledge" },
        { id: 9, answer: "two months" },
        { id: 10, answer: "television" },
      ]
    },
    {
      id: "l3",
      title: "Listening 3",
      description: "Interview with Ivor Roberts, a chef",
      passage: `Ivor enjoys the [1] of running the restaurants, although he also finds it worrying. Ivor thinks customers return to the restaurant because of the [2]. Ivor says creating a good [3] is very important for developing a successful restaurant. Ivor’s cooks have to identify the [4] before they make one of his dishes. Ivor doesn’t think it’s helpful for staff to see an excellent [5]. There was a problem with a restaurant a few years ago because people only went there for a [6]. Ivor says paying attention to [7] is how he maintains a consistent level of service. More than [8] of people phone to book a table at the riverside restaurant every day. Ivor likes the fact that cooking is [9] so the menu changes regularly. In [10] they begin to cook richer food.`,
      questions: [
        { id: 1, answer: "responsibility" },
        { id: 2, answer: "quality" },
        { id: 3, answer: "team" },
        { id: 4, answer: "ingredients" },
        { id: 5, answer: "review" },
        { id: 6, answer: "celebration" },
        { id: 7, answer: "detail" },
        { id: 8, answer: "500" },
        { id: 9, answer: "seasonal" },
        { id: 10, answer: "September" },
      ]
    },
    {
      id: "l4",
      title: "Listening 4",
      description: "Interview with Barry Helman, a cave-diving expert",
      passage: `Barry says it is the incredible beauty and [1] of the caves that attracts him to diving. Barry compares himself to an [2]. Other divers say the danger is a [3]. Barry says the most frightening thing about cave diving is the complete [4]. Because it’s not possible to get to the surface easily, having good [5] skills is essential for survival. Most accidents involve people who take [6] when diving. Not having enough [7] is a potentially dangerous problem. You need to have proper [8] to do cave diving. A good cave diver should never [9] when facing a serious problem. Barry thinks being a good diver increases your [10] in normal life.`,
      questions: [
        { id: 1, answer: "size" },
        { id: 2, answer: "explorer" },
        { id: 3, answer: "challenge" },
        { id: 4, answer: "darkness" },
        { id: 5, answer: "problem-solving" },
        { id: 6, answer: "risks" },
        { id: 7, answer: "gas" },
        { id: 8, answer: "training" },
        { id: 9, answer: "panic" },
        { id: 10, answer: "confidence" },
      ]
    },
    {
      id: "l5",
      title: "Listening 5",
      description: "Kirsty Willis talking about careers with animals",
      passage: `You have more chance of getting a job if you have [1]. You will have little [2] with the animals. You must be good at [3]. It’s ideal for people who like to have daily [4]. You should be able to handle a [5]. You will [6] at the end of the day! Animals often have a [7] attitude towards vets. You need to be able to [8] well. Most opportunities are in [9]. A typical day lasts [10] hours.`,
      questions: [
        { id: 1, answer: "a degree" },
        { id: 2, answer: "contact" },
        { id: 3, answer: "public speaking" },
        { id: 4, answer: "routines" },
        { id: 5, answer: "boat" },
        { id: 6, answer: "smell of fish" },
        { id: 7, answer: "negative" },
        { id: 8, answer: "communicate" },
        { id: 9, answer: "films" },
        { id: 10, answer: "14" },
      ]
    }
  ],
  part2: [
    {
      id: "p2.1",
      title: "Practice 2.1",
      questions: [
        { id: 9, groupTitle: "Conversation 1", question: "What hours does the speaker work on Monday?", options: ["Noon to 6 PM", "8:15 AM to 5 PM", "7 AM to 12 PM", "5 PM to 9 PM"], answer: "D" },
        { id: 10, groupTitle: "Conversation 1", question: "On which two days does the speaker have the same schedule?", options: ["Monday and Tuesday", "Wednesday and Thursday", "Tuesday and Thursday", "Thursday and Friday"], answer: "C" },
        { id: 11, groupTitle: "Conversation 1", question: "What is the main purpose of the speaker's talk?", options: ["To discuss the importance of the job", "To compare the work of doctors and dentists", "To describe a typical week at work", "To explain the details of a day at work"], answer: "D" },
        { id: 12, groupTitle: "Conversation 1", question: "What does the speaker think of her work?", options: ["She enjoys sleeping late every morning.", "It is difficult to describe her schedule.", "She enjoys helping the patients.", "It is too complicated to remember."], answer: "B" },
        { id: 13, groupTitle: "Conversation 2", question: "According to the conversation, which item did the woman NOT purchase with her credit card?", options: ["a digital camera", "DVD player", "a TV", "a stereo"], answer: "A" },
        { id: 14, groupTitle: "Conversation 2", question: "What is one reason to explain why the woman obtained a student credit card?", options: ["She wants to buy things at a discount using the card", "She hopes to establish a good credit rating.", "She doesn't want to borrow from her parents.", "She can be financially independent."], answer: "B" },
        { id: 15, groupTitle: "Conversation 2", question: "What does the woman imply about how she plans on resolving her credit card problems?", options: ["She hopes that someone will give her the money.", "She plans on getting rid of her student credit cards.", "She'll get a part-time job", "She is going to return the items she purchased on the card."], answer: "A" },
        { id: 16, groupTitle: "Conversation 2", question: "What is the man going to do for the woman to help her manage her money?", options: ["help her find a better paying job to cover her expenses", "teach her how to prepare a financial management plan", "show her how she can apply for low-interest student credit cards", "teach her how to shop wisely."], answer: "B" },
        { id: 17, groupTitle: "Conversation 3", question: "Why does the customer not buy the recommended sandwich at the beginning of the conversation?", options: ["It is too expensive.", "He is not interested in ordering a burger.", "It is not tasty.", "He fears the food will make him sick."], answer: "D" },
        { id: 18, groupTitle: "Conversation 3", question: "How does the specialty drink get its name?", options: ["It contains a wide range of ingredients.", "It is prepared in the kitchen sink.", "It contains chicken soup.", "It comes in a very large cup."], answer: "A" },
        { id: 19, groupTitle: "Conversation 3", question: "Why was the man surprised by the price of his meal?", options: ["He thought the drink should have been included.", "He felt the meal was way overpriced.", "He was charged for two sandwiches instead of one.", "It was lower than he had expected."], answer: "B" },
        { id: 20, groupTitle: "Conversation 3", question: "What does the customer decide to do at the end of the conversation?", options: ["He orders something from the restaurant menu.", "He plans to come back at weekend.", "He decides to look for another place to eat.", "He plans to come in a week when the prices are lower."], answer: "A" },
      ]
    },
    {
      id: "p2.2",
      title: "Practice 2.2",
      questions: [
        { id: 9, groupTitle: "Conversation 1", question: "Where was Geoff Thompson born?", options: ["In London.", "In the North of England.", "In the South of London.", "In Britain."], answer: "B" },
        { id: 10, groupTitle: "Conversation 1", question: "How did he know about karate?", options: ["He discovered karate by himself.", "He's interested in karate owning to a sports center during a school visit.", "His friend introduced it to him.", "He knew it when moving to London."], answer: "B" },
        { id: 11, groupTitle: "Conversation 1", question: "When did he take part in the World Championships in Taiwan?", options: ["In 1972.", "In 1980.", "In 1982.", "After starting training with a British coach."], answer: "C" },
        { id: 12, groupTitle: "Conversation 1", question: "How many times has he got the World Champion?", options: ["Two times.", "Three times.", "Four times.", "Five times."], answer: "D" },
        { id: 13, groupTitle: "Conversation 2", question: "Which position does this hotel need?", options: ["A temporary staff.", "A stable staff.", "A part-time receptionist.", "A full-time waiter."], answer: "A" },
        { id: 14, groupTitle: "Conversation 2", question: "What about the hour of work?", options: ["There are two shifts and two days off.", "There are two shifts and one day off.", "There's a day shift from 7 to 2 and a late shift from 4 till 11.", "There is only afternoon shift."], answer: "B" },
        { id: 15, groupTitle: "Conversation 2", question: "What does the woman mention about the uniform?", options: ["It's prepared by the hotel.", "He needs to wear dark clothes.", "He needs a white shirt and dark trousers.", "He needs wear uniform five days a week."], answer: "C" },
        { id: 16, groupTitle: "Conversation 2", question: "When does he start his job?", options: ["At the end of May.", "On the 10th of May.", "On the 10th of June.", "On the 28th of June."], answer: "D" },
        { id: 17, groupTitle: "Conversation 3", question: "What does the man plan to write his paper on?", options: ["The preservation of old books.", "The local coal industry.", "The famous archives librarian.", "The collection of rare books."], answer: "B" },
        { id: 18, groupTitle: "Conversation 3", question: "What security procedures does the librarian tell the man he must follow?", options: ["Show her his note cards before leaving.", "Show her his ID card.", "Pay a fee.", "Allow his ID card to be copied; sign in and out of the archives room."], answer: "D" },
        { id: 19, groupTitle: "Conversation 3", question: "Why did the librarian mention the age of the books?", options: ["They need to be handled with gloves.", "The man can only look at photographs of them.", "They were added to the collection recently.", "They are valuable books."], answer: "A" },
        { id: 20, groupTitle: "Conversation 3", question: "How did the man collect his needed information about his paper?", options: ["He took a picture.", "He scanned these images.", "He could just look at them.", "He photocopied these books."], answer: "A" },
      ]
    },
    {
      id: "p2.3",
      title: "Practice 2.3",
      questions: [
        { id: 9, groupTitle: "Conversation 1", question: "What is Kate's health problem?", options: ["She has coughs", "She has headache", "She has toothache", "She has stomachache"], answer: "A" },
        { id: 10, groupTitle: "Conversation 1", question: "What does Kate's problem affect her classmates?", options: ["It makes them funny.", "It makes them annoyed.", "It makes them happy.", "It makes them excited."], answer: "B" },
        { id: 11, groupTitle: "Conversation 1", question: "What did Kate have last year?", options: ["She had coughs", "She had headache", "She had a fall off her bike", "She had stomach ache"], answer: "C" },
        { id: 12, groupTitle: "Conversation 1", question: "What does Kate have now, too?", options: ["She has backache", "She has headache", "She has toothache", "She has temperature"], answer: "D" },
        { id: 13, groupTitle: "Conversation 2", question: "Why does the man want to go out?", options: ["Because he feels bored staying at home.", "Because he feels safe staying at home.", "Because he feels cold staying at home.", "Because he feels hot staying at home."], answer: "A" },
        { id: 14, groupTitle: "Conversation 2", question: "Why does the woman want to stay at home?", options: ["Because she has coughs.", "Because she feels tired.", "Because she has toothache.", "Because she has stomachache."], answer: "B" },
        { id: 15, groupTitle: "Conversation 2", question: "Why doesn't the woman want to watch an Italian film?", options: ["Because she is short of money.", "Because she is serious about it.", "Because she’s afraid she will fall asleep watching it.", "Because she has stomachache"], answer: "C" },
        { id: 16, groupTitle: "Conversation 2", question: "Why doesn't the woman want to watch a Robert de Niro?", options: ["Because she feels too busy to watch it.", "Because she feels too serious to watch it.", "Because she doesn't want to watch it the 3rd time.", "Because she doesn't want to watch it the 2nd time."], answer: "D" },
        { id: 17, groupTitle: "Conversation 3", question: "What does the girl think about a good holiday?", options: ["It may be cheap.", "It may be very cheap.", "It may be expensive.", "It may be very expensive."], answer: "A" },
        { id: 18, groupTitle: "Conversation 3", question: "Why doesn't the boy want to walk?", options: ["Because he feels too hot to do it.", "Because he finds it hard to do it.", "Because he doesn't like hard work.", "Because she doesn't like the sounds of people walking."], answer: "B" },
        { id: 19, groupTitle: "Conversation 3", question: "What does the girl think about the food in Youth Hostels?", options: ["It is comfortable.", "It is good.", "It is not good.", "It is clean and cheap."], answer: "C" },
        { id: 20, groupTitle: "Conversation 3", question: "What does the boy decide to do in the end?", options: ["go home", "leave home", "sell his home", "enjoy his holiday home"], answer: "D" },
      ]
    },
    {
      id: "p2.4",
      title: "Practice 2.4",
      questions: [
        { id: 9, groupTitle: "Conversation 1", question: "Why doesn't his mother lend him her car?", options: ["Because her car doesn't work well today", "Because he can't drive", "Because she needs the car", "Because he can walk"], answer: "C" },
        { id: 10, groupTitle: "Conversation 1", question: "What will Matthew do after class?", options: ["move his books", "move his flat", "help his friend", "repair his car"], answer: "C" },
        { id: 11, groupTitle: "Conversation 1", question: "When is his mother's meeting?", options: ["Thursday 19th", "Friday 9th", "Wednesday 9th", "Not discussed"], answer: "C" },
        { id: 12, groupTitle: "Conversation 1", question: "What is true about the conversation?", options: ["Matthew forgot to ask his mother about her car", "His mother refused to lend him her car.", "His mother agrees to take him to school by car", "This problem is due to his mother's mistake"], answer: "D" },
        { id: 13, groupTitle: "Conversation 2", question: "Where does he play this sport?", options: ["in a wind tunnel", "from an aeroplane outdoor", "in a park", "from a high hill"], answer: "A" },
        { id: 14, groupTitle: "Conversation 2", question: "What is the name of the sport center?", options: ["Vertical Tunnel center", "Extreme sports center", "Runaway", "Adventure sports center"], answer: "C" },
        { id: 15, groupTitle: "Conversation 2", question: "What is it like to be in the wind tunnel?", options: ["you stand on bars", "you stay afloat", "your hair is dried", "you fly up high."], answer: "B" },
        { id: 16, groupTitle: "Conversation 2", question: "How dangerous is this sport?", options: ["Glass might break and hurt you", "You suffer from small injuries", "You might fly off the tunnel", "You can't stop flying up"], answer: "B" },
        { id: 17, groupTitle: "Conversation 3", question: "What are the main topic of the conversation?", options: ["to know how students used the center", "to know what to do with the center", "to talk about the effectiveness of the library", "to learn how to use the library effectively"], answer: "B" },
        { id: 18, groupTitle: "Conversation 3", question: "What are the main problem of the center?", options: ["too many resources", "slow computers", "lack of valuable resources", "lack of computers"], answer: "D" },
        { id: 19, groupTitle: "Conversation 3", question: "The director complains that students are using computer for", options: ["looking for personal resources", "relocating documents", "reading their emails", "learning computer skills"], answer: "C" },
        { id: 20, groupTitle: "Conversation 3", question: "What are they likely to do with the center?", options: ["move it to the library", "purchase more equipment", "ask teacher to come to the center", "ask students to stop using emails"], answer: "B" },
      ]
    },
    {
      id: "p2.5",
      title: "Practice 2.5",
      questions: [
        { id: 9, groupTitle: "Conversation 1", question: "When is the picnic?", options: ["on Thursday", "on Friday", "on Saturday", "on Sunday"], answer: "D" },
        { id: 10, groupTitle: "Conversation 1", question: "Where is the picnic being held?", options: ["at a park", "at the beach", "at Dave's house", "by a river"], answer: "D" },
        { id: 11, groupTitle: "Conversation 1", question: "How many packages of hot dogs do they decide to buy?", options: ["6", "7", "8", "9"], answer: "B" },
        { id: 12, groupTitle: "Conversation 1", question: "What does Dave suggest Scott make for the picnic dessert?", options: ["cherry pie", "chocolate cake.", "oatmeal cookies", "fudge brownies"], answer: "C" },
        { id: 13, groupTitle: "Conversation 2", question: "What does the boy want to do at the beginning of the conversation?", options: ["go play outside", "play video games", "watch TV", "play football"], answer: "A" },
        { id: 14, groupTitle: "Conversation 2", question: "What does the boy have to do in his bedroom?", options: ["put away his books", "make his bed", "pick up his dirty clothes.", "clean the floor."], answer: "B" },
        { id: 15, groupTitle: "Conversation 2", question: "What is the father going to do while the boy is doing his household chores?", options: ["wash the car", "paint the house.", "work in the yard", "clean the floor"], answer: "C" },
        { id: 16, groupTitle: "Conversation 2", question: "Where will the father and son go after the housework is done?", options: ["to a movie", "out to eat", "to a ball game", "to a shopping center."], answer: "B" },
        { id: 17, groupTitle: "Conversation 3", question: "What time does the plane depart?", options: ["6:00 AM", "7:30 AM", "8:00 AM", "9:00 AM"], answer: "D" },
        { id: 18, groupTitle: "Conversation 3", question: "How will the group get to the hotel from the airport?", options: ["They will take taxis", "They will ride the subway.", "They will be going by bus.", "They can choose either bus or subway"], answer: "C" },
        { id: 19, groupTitle: "Conversation 3", question: "What is the group planning to do around Times Square for about an hour?", options: ["They're going to have lunch.", "They will have time to do some shopping.", "They will see a festival.", "They will be having a tour of the area."], answer: "A" },
        { id: 20, groupTitle: "Conversation 3", question: "What are they going to do after dinner?", options: ["The group is going to watch a musical.", "They will catch an exciting movie.", "They will be attending a Broadway play.", "They will see a football match."], answer: "A" },
      ]
    }
  ]
};

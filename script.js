
const questions = [
    "Who do you think has the biggest ego in the group?",
    "Who do you think would backstab someone to get ahead?",
    "Who do you think is the worst at keeping secrets?",
    "Who do you think is the most manipulative?",
    "Who do you think would be the first to leave the group?",
    "Who do you think has lied about their feelings for someone in this room?",
    "Who do you think would gossip about someone else in the group behind their back?",
    "Who do you think has secretly flirted with someone else's partner?",
    "Who do you think has hidden something major from the group?",
    "Who do you think would hook up with someone in this room if they had the chance?",
    "Who do you think would leave this group if they found a better one?",
    "Who do you think has a hidden grudge against someone in this room?",
    "Who do you think would date someone here just to make someone else jealous?",
    "Who do you think has kept a major secret from someone in this room?",
    "Who do you think knows a big secret about someone in the room?",
    "Who do you think is most likely to go to jail?",
    "Who do you think has wished harm on someone in this room out of jealousy?",
    "Who do you think has thought about distancing themselves from the group but hasn’t said anything?",
    "Who do you think is the most likely to cheat on their partner if they thought they could get away with it?",
    "Who do you think has fantasized about more than one person in this room?",
    "Who do you think might go naked in public? ",
    "Who do you think has used a sex toy?",
    "Who do you think has very dark fantasies? ",
    "Who do you think is likely to have a foot fetish?",
    "Who do you think would pay to have sex?",
    "Who do you think watches porn the most in the group?",
    "Who do you think would have more than 1 marriage in the group?",
    "Who do you think has sent Naked pictures to someone?",
    "Who do you think would likely hookup with a minor?",
    "Who do you think would have their sex tape leaked?",
    "Who do you think would likely do a surgery to have their body part “Enlarged”?",
    "Who do you think would likely murder someone from the group? (name murderer & the Victim). ",
    "Who do you think has been in love with someone they shouldn’t have?",
    "Who do you think is the hottest in this room?",
    "WHo do you think has used a household item as a sex toy?",
    "Who do you think is most likely to say the wrong name of their partner at their wedding?",
    "Who do you think has worn the opposite sex's underwear?",
    "Who do you think would indulge in an orgy?",
    "Who amongst us would you like to be dead first?",
    "Who do you think is the ugliest in the room?",
    "Who do you think is the worst communicator?",
    "Who do you think has the kinkiest Fantasy?",
    "Who do you think would have the highest Body count in this life?",
    "Who do you think is the stupidest person in the room?",
    "Who do you think has the least sexual appeal among us?",
    "Who do you think would stay virgin for life among us?",
    "Who do you think would cry during intercourse?",
    "Who do you think is the hottest in the room?",
    "Who among us would you leave stranded on a lonely island?",
    "Who do you think among us is the fittest?",
    "Who do you think is mostly likely to join a cult?",
    "Who do you think would be the most famous among us?",
    "Who do you think is most likely to fall asleep during sex?",
    "Who do you think is most likely to get caught having sex in public?",
    "Who do you think is most likely to sleep with a friend's family member?",
    "Who do you think is most likely to end up alone?",
    "Who do you think is most likely to do black magic on someone among us?(both names)",
    "Who do you think has the worst voice?",
    "Who do you think has the worst body?",
    "Who do you think is most likely to become a stripper?",
    "Who do you think has the least manners?",
    "Who do you think has the worst hairstyle?",
    "Who do you think is most likely to date more than 3 people at a time?",
    "Who would you like to get a lap dance from among us?",
    "Who do you think among us is a pervert?",
    "Who do you think should be kicked out of the group?",
    "Who would you choose if you had a chance to have a threesome with your celebrity crush ?",
    "Who do you think is most likely to hurt someone knowingly?",
    "Who do you think would be the worst parent?",
    "Who do you think has the worst parent?",
    "Who do you think has the most regrettable ex?",
    "Who do you think is the worst person to date?",
    "Who do you think is the least trustworthy?",
    "Who do you think would be the least successful in life?",
    "Who do you think is the least intelligent?",
    "Who do you think is the most fake?",
    "Who do you think is a closeted “forceful friend”?",
    "Who do you think among us has a drinking problem?",
    "Who do you think has the worst hygiene?",
    "Who do you think is the most two-faced?",
    "Who do you think is the biggest attention seeker?",
    "Who do you think is the worst person to ask for advice?",
    "Who do you think is the most likely to get dumped?",
    "Who do you think has the worst personality?",
    "Who do you think is the most insecure?",
    "Who do you think is the biggest coward?",
    "Who do you think is the most emotionally immature?",
    "Who do you think is the most overrated in this group?",
    "Who do you think has the biggest temper?",
    "Who do you think is the most forgettable?",
    "Who do you think is the most likely to fail at their dreams?",
    "Who do you think would be the worst in bed?",
    "Who do you think is the most boring person in the group?",
    "Who do you think has the worst taste in partners?",
    "Who do you think is the least funny?",
    "Who do you think would be the worst at comforting someone who’s upset?",
    "Who do you think would sleep with a cousin?",
    "Who do you think among us has the biggest heart?",
    "Who do you think is the most romantic?",
    "Free Pass ",
  ];
  let usedQuestions = [];

  document.getElementById('startButton').addEventListener('click', startGame);
  document.getElementById('nextButton').addEventListener('click', nextQuestion);
  
  function startGame() {
      document.getElementById('startButton').classList.add('hidden');
      document.getElementById('gameArea').classList.remove('hidden');
      usedQuestions = [];  // Reset used questions for a new game
      nextQuestion();
  }
  
  function nextQuestion() {
      if (usedQuestions.length < questions.length) {
          let randomIndex;
          do {
              randomIndex = Math.floor(Math.random() * questions.length);
          } while (usedQuestions.includes(randomIndex));  // Ensure no repeat questions
  
          const question = questions[randomIndex];
          usedQuestions.push(randomIndex);  // Mark the question as used
  
          document.getElementById('question').innerText = question;
          document.getElementById('instructions').innerText = "Tell the answer to the verifier. Next player, guess!";
          document.getElementById('nextButton').classList.remove('hidden');
      } else {
          document.getElementById('question').innerText = "Game Over! No more questions.";
          document.getElementById('instructions').innerText = "";
          document.getElementById('nextButton').classList.add('hidden');
      }
  }
